---
title: "When a disordered surface looks ordered: The limitations of XPS and LEED"
date: 2022-03-02
layout: single
hide_date: true
permalink: /posts/2022-03-02-srtio3-leedxps/
excerpt: "What surface-sensitive techniques can miss."
header:
  teaser: "post-icons/educational.svg"
  teaser2: "posts/srtio3-leedxps/srtio3-leedxps.png"
  teaser_position: "top-right""
  teaser_size: 20
---



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
## When surface measurements miss atomic rearrangements

How can a surface lose its atomic order while two widely used surface-sensitive techniques barely notice?

This is exactly what we observed while studying the thermal relaxation of freshly cleaved SrTiO<sub>3</sub>(001). Using atomic-resolution microscopy, we found that heating above 200 °C causes surface defects to migrate and rearrange. By 400–500 °C, the initially ordered surface transforms into a disordered atomic layer.

Yet two other measurements, **X-ray photoelectron spectroscopy (XPS) and low-energy electron diffraction (LEED)**, showed remarkably little change.


{% include pdf-figure.html src="/images/posts/srtio3-leedxps/srtio3-leedxps.pdf" caption="**When surface measurements miss atomic rearrangements.** (a) XPS spectra of the main core levels of SrTiO<sub>3</sub>(001), recorded after cleavage and successive annealing steps. The spectra are vertically offset for clarity. (b) Corresponding LEED patterns, recorded at room temperature after each treatment. Both techniques show little change, despite the substantial rearrangement of the outermost atomic layer revealed by nc-AFM." %}

### Why don't these techniques reveal the changes?

**XPS tells us about chemistry, but not directly about atomic order.** It identifies elements and their chemical states by measuring the binding energies of emitted electrons. However, the signal originates from several atomic layers beneath the surface, not exclusively from the outermost one. Rearranging surface atoms without substantially changing their chemical composition or oxidation states may therefore leave the measured spectra almost unchanged. The physical principles and limitations of this technique are discussed in the review by [Fadley (2010)](https://doi.org/10.1016/j.elspec.2010.01.006).

**LEED reveals atomic periodicity, but not necessarily the structure of the outermost atomic layer.** Although highly surface-sensitive, LEED also receives contributions from the ordered crystal beneath the surface. Even when the topmost layer becomes disordered, the underlying lattice can continue producing sharp diffraction spots. Surface disorder may instead appear as increased diffuse background or changes in diffraction intensities.

There is another important distinction. **A conventional LEED pattern reveals surface periodicity, but does not uniquely determine the atomic structure.** Quantitative structural analysis generally requires *LEED I(V)*, where the intensities of diffraction spots are measured as a function of the incident electron energy.

These intensity variations contain information about atomic positions and interlayer distances. However, extracting this information requires sophisticated calculations of multiple electron-scattering events and comparison with different structural models. This makes LEED I(V) considerably more involved than recording a routine diffraction pattern, particularly when the surface is disordered. The classical review by [Jona, Strozier, and Yang (1982)](https://doi.org/10.1088/0034-4885/45/5/002) provides a detailed explanation of this approach.

**Our experiment illustrates how a surface can appear chemically unchanged and crystallographically ordered, even when its outermost atomic layer has undergone substantial rearrangement.**

This is where real-space techniques such as noncontact atomic force microscopy (nc-AFM) become particularly valuable. By resolving individual atomic features, they can reveal structural changes that are difficult to recognize in measurements averaged over larger areas and multiple atomic layers.

The lesson is not that XPS or LEED are unreliable. Both are powerful techniques, but they provide different kinds of information. **Understanding a surface often requires combining several complementary measurements rather than relying on a single technique.**

The complete results are presented in our [Physical Review B publication](https://doi.org/10.1103/PhysRevB.103.L241406).