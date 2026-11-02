---
title: "Breaking symmetry to break a crystal: The hidden ferroelectricity of SrTiO<sub>3</sub>"
date: 2019-03-01
layout: single
hide_date: true
permalink: /posts/2019-03-01-srtio3-first/
excerpt: "When strain unlocks new crystal surfaces."
header:
  teaser: "post-icons/science.svg"
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

## For the General Public

### How do you cleave a crystal that refuses to break cleanly?

How do you study the surface of a crystal that refuses to provide well-defined surfaces?

Strontium titanate (SrTiO<sub>3</sub>) is one of the most studied metal oxides, with applications ranging from electronics to catalysis. Yet obtaining its pristine surface has been surprisingly difficult. Unlike materials that naturally split along well-defined atomic planes, SrTiO<sub>3</sub> typically fractures irregularly.

My idea was to use the unusual quantum properties of SrTiO<sub>3</sub> to make it cleave.

SrTiO<sub>3</sub> is a *quantum paraelectric*, meaning it sits remarkably close to becoming ferroelectric, a state in which tiny displacements of atoms create an electric polarization. Quantum fluctuations normally prevent this transition, but mechanical strain can tip the balance.

With this in mind, I developed a small device that allowed us to apply strain to the crystal during cleavage. The idea was remarkably simple: **use mechanical strain to trigger a local phase transition, change the crystal's symmetry, and create a plane along which it could break cleanly.** Essentially, a way to manipulate the phase of a quantum material by hand!

And it worked. We obtained large, atomically flat surfaces with two distinct terminations, SrO and TiO<sub>2</sub>, which we could finally investigate using atomic-resolution microscopy.

Interestingly, the two surfaces have very different electronic properties. **The SrO termination is semiconducting, while the TiO<sub>2</sub> termination is metallic**, despite both belonging to the same crystal.

We also discovered characteristic atomic defects on both surfaces, which play an important role in their stability. Their origin and connection to ferroelectricity are discussed in a separate post.

<!-- Add the actual link to your defect post once it is published. -->

The full results were published in [Physical Review Materials](https://doi.org/10.1103/PhysRevMaterials.3.034407).


### Atomic-scale structure and electronic properties

<!--
TWO FIGURES SIDE BY SIDE

Change the PDF filenames to match your actual files.

gap: 1.25rem controls spacing between figures.
flex: 1 1 260px sets the preferred minimum width.
On narrow screens, the figures automatically stack vertically.
-->

<div style="display: flex; flex-wrap: wrap; gap: 1.25rem; align-items: flex-start; margin: 1.5rem 0;">

  <div style="flex: 1 1 260px; min-width: 0;">

    {% include pdf-figure.html src="/images/posts/srtio3-first/SrO.pdf" caption="**Figure 1. The SrO-terminated surface of SrTiO<sub>3</sub>(001).** Atomic-resolution AFM reveals the surface lattice and individual atomic defects. The accompanying tunneling spectroscopy shows semiconducting behavior, with the conduction band well above the Fermi level." %}

  </div>

  <div style="flex: 1 1 260px; min-width: 0;">

    {% include pdf-figure.html src="/images/posts/srtio3-first/TiO2.pdf" caption="**Figure 2. The TiO<sub>2</sub>-terminated surface of SrTiO<sub>3</sub>(001).** AFM and STM reveal the structure and characteristic atomic defects of the second termination. Unlike SrO, this surface exhibits metallic behavior, with electronic states extending to the Fermi level." %}

  </div>

</div>



## For Scientists

### Strain-assisted cleavage of bulk-terminated SrTiO<sub>3</sub>(001)

Obtaining bulk-terminated SrTiO<sub>3</sub>(001) surfaces has been a long-standing challenge in oxide surface science. The cubic perovskite structure lacks a natural cleavage plane, while conventional sputtering and annealing typically produce complex surface reconstructions rather than the desired bulk-like terminations.

My approach was to exploit the **incipient ferroelectricity of SrTiO<sub>3</sub>**, a quantum paraelectric in which ferroelectric ordering is suppressed by quantum fluctuations but can be stabilized by mechanical strain.

Based on this idea, I developed a compact cleaving device that applies controlled mechanical strain to the crystal. The aim was to induce a local ferroelectric phase transition near the propagating crack, breaking the symmetry of the cubic lattice and creating inequivalent atomic planes that favor cleavage along the (001) direction.

The device itself is relatively simple, but the physics behind it is rather interesting. External compression confines the strain to a selected region, while the large tensile strain concentrated at the crack tip is expected to drive the local structural transition. **In essence, a small mechanical device allowed us to exploit a phase transition in a quantum paraelectric to prepare its surface.**

The resulting crystals exhibited atomically flat terraces extending over micrometers, with distinct SrO and TiO<sub>2</sub> terminations. Their spatial distribution and morphology support the proposed role of strain-induced ferroelectric domains in the cleavage process.

Using combined STM and nc-AFM, we obtained atomic-scale structural information from both terminations. Scanning tunneling spectroscopy revealed strikingly different electronic properties: **the SrO termination is semiconducting**, with its conduction band minimum nearly 2 eV above the Fermi level, whereas **the TiO<sub>2</sub> termination exhibits metallic behavior**.

We also identified intrinsic surface defects that appear to compensate the polarization-induced surface charge, providing a fascinating link between ferroelectricity and surface stability. Their role is explored in a separate post.

This work showed how a relatively simple experimental idea, grounded in the fundamental physics of a material, can provide access to surfaces that were previously difficult to investigate.

The full study is available in [Physical Review Materials **3**, 034407 (2019)](https://doi.org/10.1103/PhysRevMaterials.3.034407).