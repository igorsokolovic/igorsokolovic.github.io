---
title: "PDF Figure Layout Test"
date: 2026-11-01
layout: single
hide_date: true
permalink: /posts/pdf-figure-layout-test/
excerpt: "Testing a PDF figure with text wrapped alongside it."
---

<!--
SETUP:
1. Install the _includes/pdf-figure.html and assets/js/academic-pdf-figure.mjs files
   from our PDF.js add-on, if you have not already.
2. Upload a single-page PDF to images/posts/pdf-figure-test/figure1.pdf.
3. Change the path in the include below if you choose a different filename.
-->

<style>
/* This affects ONLY the PDF in this test post. */
.pdf-test-float {
  float: right;              /* Change to left to put the figure on the left. */
  width: 45%;                /* Try 35%, 45%, 55%, etc. */
  margin: 0 0 1em 1.5em;     /* Space: top right bottom left (for right float). */
  box-sizing: border-box;
}
.pdf-test-float figure.academic-inline-pdf {
  width: 100%;               /* Fill the chosen float width. */
  margin: 0;
}
@media (max-width: 700px) {
  .pdf-test-float {
    float: none;             /* On phones: figure above text, not squeezed beside it. */
    width: 100%;
    margin: 1em 0;
  }
}
.pdf-test-end { clear: both; }
</style>

## A scientific figure with text beside it

<div class="pdf-test-float">
  {% include pdf-figure.html src="/images/posts/OxygenChargeState/peroxo_adsorption.pdf" caption="Figure 1. An example scientific figure." %}
</div>

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tincidunt, mi vel facilisis malesuada, nisl risus aliquet sem, et dapibus felis erat sed est. This introductory paragraph flows alongside the PDF figure on wider screens.

Curabitur feugiat, purus in vulputate tempor, dolor nibh volutpat urna, eget sagittis lectus urna vitae magna. Integer eu neque efficitur, posuere sapien eu, elementum leo. **This is bold text**, and *this is italic text*.

The figure can also be discussed using a [hyperlink to a publication](https://doi.org/10.1038/s41467-025-59258-4). Add additional paragraphs here to see how the text wraps alongside the figure.

<div class="pdf-test-end"></div>

## Back to normal page width

This paragraph appears below the figure, across the full article width.

<!--
OPTIONAL: For a separate full-width PDF elsewhere in your post, paste this
include outside the floating div (and outside this HTML comment):

{% include pdf-figure.html src="/images/posts/pdf-figure-test/figure1.pdf" caption="Figure 2. Full-width version." %}

To show a different PDF page, add page=2 to the include.
-->
