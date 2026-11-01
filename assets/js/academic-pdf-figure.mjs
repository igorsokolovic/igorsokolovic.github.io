/*
 * Opt-in PDF figures for Academic Pages/Jekyll.
 * Uses Mozilla PDF.js 6.4.299. Versions of the main module and worker are pinned
 * together. No global theme behavior is changed.
 *
 * Requires an internet connection to jsDelivr at runtime. The PDF files themselves
 * are loaded from this GitHub Pages website, using Jekyll's relative_url filter.
 */
import * as pdfjsLib from "https://cdn.jsdelivr.net/npm/pdfjs-dist@6.4.299/build/pdf.mjs";

pdfjsLib.GlobalWorkerOptions.workerSrc =
  "https://cdn.jsdelivr.net/npm/pdfjs-dist@6.4.299/build/pdf.worker.mjs";

async function drawPdfFigure(figure) {
  // The include can occur more than once on a post; initialize each just once.
  if (figure.dataset.pdfInitialized === "true") return;
  figure.dataset.pdfInitialized = "true";

  const canvas = figure.querySelector("canvas");
  const status = figure.querySelector(".academic-inline-pdf__status");
  const statusText = figure.querySelector(".academic-inline-pdf__status-text");
  const stage = figure.querySelector(".academic-inline-pdf__stage");
  let task;

  try {
    const src = figure.dataset.pdfUrl;
    const pageNumber = Number.parseInt(figure.dataset.pdfPage || "1", 10);
    if (!src || !Number.isInteger(pageNumber) || pageNumber < 1) {
      throw new Error("Invalid PDF URL or page number");
    }

    // GitHub Pages serves this as a static file; Jekyll does not render its contents.
    task = pdfjsLib.getDocument({ url: src });
    const pdf = await task.promise;
    if (pageNumber > pdf.numPages) throw new Error("PDF page does not exist");

    const page = await pdf.getPage(pageNumber);
    const baseViewport = page.getViewport({ scale: 1 });
    const availableWidth = Math.max(1, stage.clientWidth || baseViewport.width);
    const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
    const scale = (availableWidth / baseViewport.width) * pixelRatio;
    const viewport = page.getViewport({ scale });

    canvas.width = Math.ceil(viewport.width);
    canvas.height = Math.ceil(viewport.height);
    canvas.style.width = `${availableWidth}px`;
    canvas.style.height = "auto";

    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) throw new Error("Canvas 2D rendering is unavailable");
    await page.render({ canvas, canvasContext: ctx, viewport }).promise;

    canvas.hidden = false;
    status.hidden = true;
  } catch (err) {
    console.error("PDF figure could not be displayed:", err);
    // Keep the standard PDF link accessible even if JavaScript, CDN or PDF fails.
    if (statusText) statusText.textContent = "PDF preview unavailable. ";
  } finally {
    if (task) {
      try { await task.destroy(); } catch (_) { /* ignored */ }
    }
  }
}

// Module scripts are deferred; by execution time, the Markdown page is parsed.
for (const figure of document.querySelectorAll(".academic-inline-pdf")) {
  void drawPdfFigure(figure);
}
