---
title: "(video) One step or two? Why reaction kinetics can be misleading"
date: 2020-03-01
layout: single
hide_date: true
permalink: /posts/2020-03-03-o2rutile-switching/
excerpt: "Same outcome, different kinetics."
header:
  teaser: "/images/post-icons/science.svg"
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

### Two ways for oxygen molecules to leave a surface

Can two different microscopic processes produce the same experimental result? And can two processes that require the same number of electrons behave very differently?

To explore this, I developed two simple **Monte Carlo simulations** illustrating how oxygen molecules can leave a titanium dioxide (TiO<sub>2</sub>) surface when exposed to ultraviolet (UV) light.

Both simulations start with a square grid of pixels, **each representing a single oxygen molecule already adsorbed on the surface in the peroxo state (O<sub>2</sub><sup>2−</sup>)**. At every step, electrons and holes become available to the molecules, which react according to predefined probabilities. A hole can remove an electron from a molecule, while an electron can restore its negative charge.

The two simulations differ in how these events are allowed to happen.

<div style="display: flex; gap: 16px; flex-wrap: wrap; margin: 1.5em 0;">

  <!-- VIDEO 1 -->
  <div style="flex: 1 1 45%; min-width: 250px;">
    <video controls preload="metadata" style="width: 100%; height: auto;">
      <source src="{{ '/images/posts/OxygenSwitching/concentrated.mp4' | relative_url }}" type="video/mp4">
    </video>
    <p><em>Video 1. Simultaneous two-hole desorption process.</em></p>
  </div>

  <!-- VIDEO 2 -->
  <div style="flex: 1 1 45%; min-width: 250px;">
    <video controls preload="metadata" style="width: 100%; height: auto;">
      <source src="{{ '/images/posts/OxygenSwitching/metastable.mp4' | relative_url }}" type="video/mp4">
    </video>
    <p><em>Video 2. Sequential hole capture with competing electron capture.</em></p>
  </div>

</div>



### Video 1 — Two holes at once

In the first model, each simulation step provides a molecule with one of three possible combinations: **two holes, two electrons, or one electron and one hole**.

Since the oxygen molecule initially carries two extra electrons, it can only desorb if it encounters two holes simultaneously and the reaction occurs. Any other combination leaves the molecule adsorbed. There is no intermediate state: the molecule either remains on the surface or disappears in a single step.



### Video 2 — One step at a time

In the second model, each simulation step makes **one electron and one hole available**. The molecule can interact with either one, according to their respective probabilities.

If a peroxo molecule captures a hole, it loses one electron and transforms into a **superoxo state (O<sub>2</sub><sup>−</sup>)**. Unlike in the first simulation, the molecule doesn't immediately leave the surface.

In the following step, it again has a chance to interact with an electron or a hole. **Capturing a second hole causes it to desorb**, while **capturing an electron returns it to the original peroxo state**. The molecule can therefore go through several cycles of losing and regaining an electron before eventually leaving the surface.


### What's the difference?

Although both models require removing two electrons for an oxygen molecule to desorb, the results are strikingly different.

In the first model, the probability of desorption depends on two holes being available at the same time. In the second, the molecule can temporarily lose one electron and then either continue toward desorption or reverse the process.

This difference changes how the overall desorption rate responds to increasing UV intensity. **A two-electron desorption process can therefore behave as though only one electron needs to be removed.**

The simulations illustrate an important lesson: **measuring how fast a reaction happens doesn't necessarily reveal the microscopic steps behind it.**
## For Scientists

### Markov chain simulations of UV-induced oxygen desorption

To investigate how different microscopic reaction pathways influence the observed desorption kinetics, I developed **stochastic Markov chain simulations** involving 10,000 initially adsorbed peroxo (O<sub>2</sub><sup>2−</sup>) molecules. Each molecule occupies one site on a square grid and undergoes charge-transfer reactions according to predefined probabilities, with the availability of photogenerated electrons and holes varied between simulation steps.

The two videos illustrate two fundamentally different mechanisms of UV-induced oxygen desorption.

### Model 1 — Concerted two-hole desorption

In the first model, desorption requires the simultaneous capture of two holes. No intermediate charge state is permitted, resulting in the expected quadratic dependence of the desorption rate on hole concentration.

### Model 2 — Reversible two-step desorption

In the second model, the initial capture of a hole converts a peroxo molecule into a metastable superoxo (O<sub>2</sub><sup>−</sup>) intermediate:

<p style="text-align: center; font-size: 1.15em;">
  O<sub>2</sub><sup>2−</sup> + h<sup>+</sup> → O<sub>2</sub><sup>−</sup>
</p>

The intermediate can then undergo two competing reactions:

<p style="text-align: center; font-size: 1.15em;">
  O<sub>2</sub><sup>−</sup> + h<sup>+</sup> → O<sub>2</sub>(gas)
</p>

<p style="text-align: center; font-size: 1.15em;">
  O<sub>2</sub><sup>−</sup> + e<sup>−</sup> → O<sub>2</sub><sup>2−</sup>
</p>

The second reaction restores the peroxo state, potentially in a different adsorption configuration.

**The crucial distinction is that UV irradiation generates both electrons and holes.** If their concentrations increase proportionally, the branching ratio between desorption and recovery remains approximately constant. Consequently, the overall desorption rate becomes linear in hole concentration, despite the involvement of two holes:

<p style="text-align: center; font-size: 1.15em;">
  <strong>R<sub>des</sub> ∝ [h<sup>+</sup>]</strong>
</p>

This result is not restricted to equal probabilities of electron and hole capture. As shown in the figure below, both reversible models exhibit linear behavior, even when recovery to the peroxo state is strongly favored over desorption.

{% include pdf-figure.html src="/images/posts/OxygenSwitching/simulation.pdf" caption="**Markov chain simulations of UV-induced oxygen desorption.** The four models compare how different reaction mechanisms affect the number of desorbed oxygen molecules as the availability of photogenerated holes increases. (a) Reversible two-step desorption, where electron capture and return to the peroxo state are strongly favored. (b) The same mechanism, but with equal probabilities of electron capture (recovery) and hole capture (desorption). (c) Concerted two-hole desorption, requiring two holes simultaneously. (d) Irreversible two-step desorption through a long-lived superoxo intermediate. The reversible models (a, b) produce a linear dependence on hole concentration, while the other two models (c, d) show a quadratic dependence." %}

For comparison, the figure also includes an irreversible two-step process involving a long-lived superoxo intermediate. Like the concerted mechanism, this model produces a quadratic dependence on hole concentration under the simulated conditions.

The simulations demonstrate that **the apparent reaction order does not uniquely identify the underlying microscopic mechanism**. In particular, the linear photodesorption kinetics previously observed for oxygen on TiO<sub>2</sub>(110) are fully consistent with initially doubly charged peroxo molecules.

<!--
OPTIONAL: For a separate full-width PDF elsewhere in your post, paste this
include outside the floating div (and outside this HTML comment):

{% include pdf-figure.html src="/images/posts/pdf-figure-test/figure1.pdf" caption="Figure 2. Full-width version." %}

To show a different PDF page, add page=2 to the include.
-->
