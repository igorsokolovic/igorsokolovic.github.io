---
title: "When an oxygen molecule lands on a surface, how many electrons does it take?"
date: 2020-03-01
layout: single
hide_date: true
permalink: /posts/2020-03-01-o2rutile-chargestate/
excerpt: "One or two?"
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


<div class="pdf-test-float">
  {% include pdf-figure.html src="/images/posts/OxygenChargeState/peroxo_adsorption.pdf" caption="**Atomic-scale imaging and calculations of oxygen on TiO<sub>2</sub>(110).** (A, B) AFM images showing individual oxygen molecules (circles) and atoms (squares) adsorbed on the surface after oxygen exposure at 10 K and 80 K, respectively. (C) DFT calculations showing the electronic structure of the clean, reduced surface, including two excess electrons associated with an oxygen vacancy. (D–G) Calculated structures and electronic properties of the different adsorbed oxygen species, revealing how electrons are transferred from the surface to the molecules. (H) Summary of the calculated adsorption energies, molecular bond lengths, charges, and spin states." %}
</div>

## For the General Public

Oxygen is everywhere, and its interaction with surfaces is central to technologies ranging from catalysts to gas sensors. Yet even on titanium dioxide (TiO<sub>2</sub>), one of the most extensively studied metal oxides, a surprisingly simple question has remained controversial for decades: **How many electrons does an oxygen molecule take from the surface?**

When oxygen molecules attach to TiO<sub>2</sub>, they can capture electrons from the material. Taking one electron forms a *superoxide* (O<sub>2</sub><sup>−</sup>), while taking two produces a *peroxide* (O<sub>2</sub><sup>2−</sup>). This seemingly small difference changes how the molecule binds to the surface and participates in chemical reactions.

For years, experiments and theoretical predictions seemed to disagree about which state was preferred.

To investigate this, I combined two approaches: **atomic force microscopy (AFM)**, allowing us to image individual oxygen molecules without disturbing them, and **quantum-mechanical calculations**, which reveal how electrons are exchanged between the surface and the molecules. By carrying out both the experiments and the calculations, I was able to connect what we observed with what happens at the electronic level.

Our results showed that **oxygen prefers to capture two electrons, forming peroxide molecules**. The electrons come from defects in the material, revealing how imperfections beneath the surface can determine the chemistry taking place above it.

But the story doesn't end there! We also investigated what happens when we deliberately add or remove electrons, heat the surface to trigger reactions between molecules, or illuminate it with ultraviolet light. These experiments, and the many interesting results they revealed, are described in our [paper published in PNAS](https://doi.org/10.1073/pnas.1922452117).

I'm grateful to all my colleagues who contributed their expertise on both the experimental and theoretical sides of this work.

And what about the earlier experimental evidence suggesting that oxygen takes only one electron? That's an interesting story of its own, which I'll explore in a separate post.


---


<div class="pdf-test-end"></div>


## For Scientists

### Superoxo or peroxo? Resolving the charge state of oxygen on TiO<sub>2</sub>(110)

The charge state of molecular oxygen adsorbed on rutile TiO<sub>2</sub>(110) has been debated for decades. While many experimental studies suggested singly charged superoxo (O<sub>2</sub><sup>−</sup>) species, theoretical calculations consistently favored doubly charged peroxo (O<sub>2</sub><sup>2−</sup>) molecules.

To address this discrepancy, I performed both **noncontact atomic force microscopy (nc-AFM) experiments and density functional theory (DFT+U) calculations**, combining atomic-scale imaging with an analysis of the underlying electronic structure.

Using oxygen-functionalized AFM tips, we resolved individual O<sub>2</sub> adsorption geometries without perturbing the molecules through electron injection. Comparison with DFT+U calculations showed that the observed geometries are consistent with the **peroxo state**, which is also energetically preferred under experimentally relevant conditions.

The calculations further revealed the mechanism: the adsorbed molecules accept two electrons initially localized as small polarons on subsurface Ti atoms. This charge transfer modifies the molecular electronic structure, O–O bond length, and adsorption geometry. Although superoxo configurations can be stabilized in calculations, they are metastable relative to peroxo species.

Beyond determining the charge state, we performed a range of additional experiments: controlled electron injection and removal, thermal annealing to investigate reactions between adsorbed species, and UV irradiation to probe the effects of photoexcited electrons and holes. Together, these measurements helped explain the remarkably rich chemistry of oxygen on TiO<sub>2</sub>(110).

The full results are presented in our [PNAS publication](https://doi.org/10.1073/pnas.1922452117). I'm particularly grateful to all the colleagues who contributed to both the experimental and theoretical aspects of this work.

The experimental evidence historically used to support the superoxo assignment, and how we were able to challenge that interpretation, deserves a closer look. I'll return to that question in a separate post.

<!--
OPTIONAL: For a separate full-width PDF elsewhere in your post, paste this
include outside the floating div (and outside this HTML comment):

{% include pdf-figure.html src="/images/posts/pdf-figure-test/figure1.pdf" caption="Figure 2. Full-width version." %}

To show a different PDF page, add page=2 to the include.
-->
