---
title: "When atoms get a chance to relax: The surface of SrTiO<sub>3</sub>"
date: 2022-03-01
layout: single
hide_date: true
permalink: /posts/2022-03-01-srtio3-unstable/
excerpt: "Letting an excited surface relax."
header:
  teaser: "post-icons/science.svg"
  teaser2: "posts/srtio3-unstable/sro300.png"
  teaser_position: "bottom-right"
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

## For the General Public

### What happens when a freshly cleaved crystal surface is heated?

When we break a crystal, the newly exposed surface does not necessarily form in its most energetically favorable configuration. Instead, atoms can become trapped in an arrangement that reflects the conditions under which the crystal was broken. But what happens if we give these atoms enough energy to rearrange?

In our [earlier work](https://doi.org/10.1103/PhysRevMaterials.3.034407), we developed a method to cleave strontium titanate (SrTiO<sub>3</sub>) by exploiting its unusual response to mechanical strain. This allowed us to create large, atomically ordered surfaces with two distinct terminations, SrO and TiO<sub>2</sub>. However, the surfaces also contained characteristic atomic defects, suggesting that their structure was not necessarily in its most stable configuration.

**We wanted to see how these surfaces would relax if given enough energy.**

By gradually heating the crystal and observing its surface with atomic force microscopy (AFM), we could follow the rearrangement of individual atoms and defects.

Already around 200–250 °C, defects began migrating and gathering into larger structures. On the SrO termination, missing atoms clustered together, forming small pits that continued to grow with increasing temperature. At 400–500 °C, the initially ordered surface had transformed into a disordered atomic arrangement.

The TiO<sub>2</sub> termination underwent a complementary transformation, with excess atoms gathering into islands rather than vacancies forming pits.

What we observed was **a surface gradually escaping the atomic arrangement in which it had been trapped during cleavage**, as heating allowed its constituents to explore more energetically favorable configurations.

The work illustrates an interesting aspect of surface physics: the structure we observe is not always the structure that the material would prefer to have. Sometimes, it is simply the one that the atoms have not yet had the opportunity to change.

The full results were published in [Physical Review B](https://doi.org/10.1103/PhysRevB.103.L241406).


### Watching the surface transform during heating

<!--
FULL-WIDTH PDF FIGURE

Change the PDF path below to match your actual file.

This uses the pdf-figure.html component installed earlier.
The figure fills the available article width.
-->

{% include pdf-figure.html src="/images/posts/srtio3-unstable/SrO_unstable.pdf" caption="**Watching an initially ordered SrO surface relax upon heating.** STM and atomic-resolution AFM images show how the surface of SrTiO<sub>3</sub>(001) evolves with increasing temperature. Initially isolated Sr vacancies become mobile and cluster into small pits around 250 °C. Further heating causes the pits to grow, eventually producing a disordered surface layer at 500 °C." %}


## For Scientists

### Thermal relaxation of metastable SrTiO<sub>3</sub>(001) surfaces

Cleaving a crystal creates new surfaces under conditions that do not necessarily allow the atoms to reach thermodynamic equilibrium. The resulting structure can therefore be **metastable, kinetically trapped in a configuration that is not energetically preferred**.

Our strain-assisted cleavage method provides a particularly interesting example. By exploiting the incipient ferroelectricity of SrTiO<sub>3</sub>, we prepared atomically ordered, bulk-terminated SrO and TiO<sub>2</sub> surfaces containing a characteristic concentration of intrinsic charged defects.

These defects are associated with compensation of the polarization-induced surface charge, but their arrangement immediately after cleavage need not represent the equilibrium surface structure.

To investigate how the surfaces relax, we followed their evolution during successive thermal annealing steps using STM and noncontact AFM.

On the SrO termination, **Sr vacancies become mobile above approximately 200 °C**, aggregating into half-unit-cell-deep pits that expose the underlying TiO<sub>2</sub> layer. Further annealing promotes lateral pit growth and extensive atomic rearrangement. By 400–500 °C, the initially ordered (1 × 1) termination is replaced by a disordered surface layer.

The TiO<sub>2</sub> termination exhibits complementary behavior, with Sr adatoms aggregating into islands. At sufficiently high temperatures, the two initially distinct terminations develop similar surface morphologies.

These transformations reveal the **metastable nature of the freshly cleaved SrTiO<sub>3</sub>(001) surface**. Its initial atomic order is maintained by kinetic barriers, while thermal activation enables defect migration and structural relaxation toward more energetically favorable arrangements.

Importantly, the final disordered structure should not automatically be interpreted as the thermodynamic ground state. Rather, the experiments demonstrate that the initially ordered bulk termination is not stable against thermally activated rearrangement.

The study illustrates how surface structures can be governed by their preparation history and subsequent relaxation, an important consideration when investigating the properties of complex oxide surfaces.

The full results are available in [Physical Review B **103**, L241406 (2021)](https://doi.org/10.1103/PhysRevB.103.L241406).