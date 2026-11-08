---
title: "When strain makes SrTiO<sub>3</sub>(001) polar: How surface defects restore balance "
date: 2019-03-02
layout: single
hide_date: true
permalink: /posts/2019-03-02-srtio3-polarity/
excerpt: "Once polar, surface defects help compensate the electric field."
header:
  teaser: "post-icons/educational.svg"
  teaser2: "posts/srtio3-polarity/preview.png"
  teaser_position: "top-left"
  teaser_size: 15
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

## Why Does a Nonpolar Crystal Surface Need Charged Defects?

The surfaces of ionic crystals can carry electric charges, and these charges can strongly influence their stability. In extreme cases, an uncompensated surface polarity can make an otherwise perfectly ordered atomic arrangement energetically unfavorable.

But here's an interesting question: **Why would a normally nonpolar surface suddenly need charged defects to remain stable?**

This is exactly what we encountered when investigating freshly cleaved SrTiO<sub>3</sub>(001).

## What makes a surface polar?

In 1979, **P. W. Tasker** introduced a simple way of classifying ionic crystal surfaces according to the electric charges of their constituent atomic planes.

In its cubic, paraelectric state, SrTiO<sub>3</sub> consists of alternating SrO and TiO<sub>2</sub> layers along the [001] direction. Both layers are formally electrically neutral, making the (001) surface nonpolar according to Tasker's classification. No additional charged defects are required to compensate for a macroscopic dipole.

The situation becomes more subtle when we consider that chemical bonds are not purely ionic.

**Goniakowski, Noguera, and collaborators** showed how the mixed ionic and covalent nature of bonding can introduce weak polarity into oxide surfaces. However, for paraelectric SrTiO<sub>3</sub>(001), the rearrangement of electronic charge associated with breaking surface bonds is sufficient to accommodate this effect.

A more rigorous description comes from **Stengel's application of the modern theory of polarization**, which uses the quantum-mechanical distribution of electrons to define bulk polarization. It confirms that the ideal, centrosymmetric SrTiO<sub>3</sub>(001) surface can be considered nonpolar, even when covalent bonding is taken into account.

So far, all three approaches lead to essentially the same conclusion: **ordinary paraelectric SrTiO<sub>3</sub>(001) does not require additional charged defects to compensate its polarity.**

## What changes when SrTiO₃ becomes ferroelectric?

SrTiO<sub>3</sub> is a quantum paraelectric, meaning that it lies very close to a ferroelectric phase transition. By applying mechanical strain, we can favor a ferroelectric distortion in which Ti atoms shift away from the centers of their surrounding oxygen octahedra.

This tiny atomic displacement separates the centers of positive and negative charge, producing an electric polarization.

In our [earlier work](https://doi.org/10.1103/PhysRevMaterials.3.034407), we developed a method to cleave SrTiO<sub>3</sub> by exploiting precisely this property. We proposed that the intense strain near the propagating crack induces a local ferroelectric transition, allowing the crystal to break along otherwise unfavorable atomic planes.

**But this also changes the electrostatics of the newly created surfaces.**

Unlike the original paraelectric crystal, the ferroelectrically distorted material carries a polarization perpendicular to its (001) surfaces. This gives rise to polarization-bound surface charge, which needs to be screened or compensated to avoid a large electrostatic energy cost.

## How does the surface compensate?

Our atomically resolved AFM measurements revealed something remarkable: both newly created surface terminations contained a very specific concentration of intrinsic defects.

On the **SrO termination**, approximately **14 ± 2% of Sr sites were vacant**, while the complementary **TiO<sub>2</sub> termination** contained essentially the same concentration of additional Sr atoms.

These defects carry effective charges of opposite signs. Sr vacancies act as negatively charged acceptors, while Sr adatoms act as positively charged donors.

Their matching concentrations suggest that they are not simply random imperfections produced during fracture. Instead, **we proposed that they form to compensate the electrostatic effects of the strain-induced ferroelectric polarization**.

### Ferroelectric distortion and surface polarity compensation

<!--
FULL-WIDTH PDF FIGURE

Replace the file path below with your actual figure.

The PDF.js include displays the figure within the article
without the usual browser PDF toolbar.

The caption is a placeholder that you can expand later.
-->

<figure>
  <img src="{{ '/images/posts/srtio3-polarity/compensate.png' | relative_url }}"
       alt="Ferroelectric distortion and surface polarity compensation"
       style="width: 100%; height: auto;">

  <figcaption>
    <strong>How strain-induced ferroelectricity creates surface polarity in SrTiO<sub>3</sub>(001).</strong>
    (e) Proposed mechanism of strain-induced ferroelectric polarization during cleavage. The displacement of Ti atoms relative to the surrounding oxygen atoms creates polarized domains, whose orientation determines whether the crystal cleaves to expose SrO or TiO<sub>2</sub> terminations, as indicated by the red dotted line.
    (f) Illustration of the resulting electrostatic potential and its compensation by charged surface defects. Sr vacancies on the SrO termination and Sr adatoms on the TiO<sub>2</sub> termination provide opposite charges that compensate the polarization-induced electric field and help stabilize the newly created surfaces.
  </figcaption>
</figure>

In a simplified electrostatic picture, the observed defect concentration corresponds to approximately 0.28 elementary charges per surface unit cell on each termination. This provides a substantial compensating charge and may even help stabilize the ferroelectric distortion near the newly created surface.

The interesting result is that **the surface defects are not necessarily something that went wrong during preparation. They may be exactly what allows the newly created surface to exist.**

This illustrates how closely crystal structure, electric polarization, and surface chemistry are connected. A seemingly tiny displacement of atoms inside a crystal can determine which defects appear at its surface.

The full experimental study is available in [Physical Review Materials **3**, 034407 (2019)](https://doi.org/10.1103/PhysRevMaterials.3.034407).

---

## Further Reading

For anyone interested in the underlying theory, three particularly useful references are:

1. **P. W. Tasker (1979)**, *The stability of ionic crystal surfaces*. [DOI: 10.1088/0022-3719/12/22/036](https://doi.org/10.1088/0022-3719/12/22/036)

2. **J. Goniakowski, F. Finocchi, and C. Noguera (2008)**, *Polarity of oxide surfaces and nanostructures*. [DOI: 10.1088/0034-4885/71/1/016501](https://doi.org/10.1088/0034-4885/71/1/016501)

3. **M. Stengel (2011)**, *Electrostatic stability of insulating surfaces: Theory and applications*. [DOI: 10.1103/PhysRevB.84.205432](https://doi.org/10.1103/PhysRevB.84.205432)

