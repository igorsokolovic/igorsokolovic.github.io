---
title: "The not-so-simple art of cleaning for UHV"
date: 2023-04-01
layout: single
hide_date: true
permalink: /posts/2023-04-01-CleaningCeramics/
excerpt: "When clean is nowhere near clean enough."
header:
  teaser: "post-icons/lablife.svg"
  teaser2: "posts/CleaningCeramics/ceramics.png"
  teaser_position: "top-right"
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

*The surprisingly long journey of a few ceramic insulators.*

One of the less glamorous aspects of experimental surface physics is the enormous amount of work that goes into keeping everything clean. And by clean, I don't mean visibly clean.

Our ultrahigh-vacuum (UHV) chambers operate at pressures around **10<sup>−11</sup> mbar**, where even tiny amounts of contamination or outgassing from components can become a serious problem.

Recently, I needed to replace several ceramic insulation pieces in one of our evaporators. These components are made of **aluminium oxide (Al<sub>2</sub>O<sub>3</sub>)**, a material well suited for the job because it provides electrical insulation, withstands the high temperatures encountered in molecular beam epitaxy (MBE), and has low outgassing rates once properly cleaned and baked.

Unfortunately, **being suitable for UHV doesn't mean being ready for UHV straight out of the box**.

So began a rather extensive cleaning procedure.

First came multiple rounds of cleaning with neutral Extran detergent and ultrapure Milli-Q water, with thorough rinsing between cycles. The pieces were then baked to remove residual moisture and other volatile contaminants.

Next came an aqua regia treatment, followed by another thorough rinse and another bake. Then boiling in nitric acid (HNO<sub>3</sub>), another round of rinsing, and finally another bake before the pieces were ready for installation.

Yes, quite a lot of work for a few small pieces of ceramic!

<div style="display: flex; gap: 12px; justify-content: center; align-items: flex-start; flex-wrap: wrap; margin: 1.5em 0;">

  <figure style="flex: 1 1 30%; min-width: 170px; margin: 0;">
    <img src="{{ '/images/posts/CleaningCeramics/1.jpg' | relative_url }}"
         alt="Ceramic insulators prepared for UHV cleaning"
         style="width: 100%; height: auto; display: block;">

<figcaption style="text-align: center; margin-top: 0.5em;">
  <strong>1. Initial cleaning.</strong>
  Al<sub>2</sub>O<sub>3</sub> ceramic insulators submerged in neutral Extran detergent, undergoing repeated cleaning cycles followed by thorough rinsing with ultrapure Milli-Q water.
</figcaption>
  </figure>

  <figure style="flex: 1 1 30%; min-width: 170px; margin: 0;">
    <img src="{{ '/images/posts/CleaningCeramics/2.jpg' | relative_url }}"
         alt="Ceramic insulators during preparation"
         style="width: 100%; height: auto; display: block;">

   <figcaption style="text-align: center; margin-top: 0.5em;">
  <strong>2. Chemical treatment.</strong>
  The ceramic components immersed in aqua regia, one of several steps in the extensive cleaning procedure required before installation in UHV.
</figcaption>
  </figure>

  <figure style="flex: 1 1 30%; min-width: 170px; margin: 0;">
    <img src="{{ '/images/posts/CleaningCeramics/3.jpg' | relative_url }}"
         alt="Ceramic insulators after preparation"
         style="width: 100%; height: auto; display: block;">

<figcaption style="text-align: center; margin-top: 0.5em;">
  <strong>3. Clean and ready for use.</strong>
  The prepared Al<sub>2</sub>O<sub>3</sub> insulators carefully packed in individual vials, protected from contamination and ready for future experiments.
</figcaption>
  </figure>

</div>

But at these vacuum pressures, **every component matters**. A poorly prepared insulator can introduce contamination or release gases when heated, potentially compromising an experiment that took considerable effort to set up.

I also prepared more pieces than I immediately needed. Once cleaned, the spare components were carefully packed into individual vials to keep them protected from contamination and ready for colleagues to use in future experiments.

It's not the most exciting part of working in a surface science laboratory, but it's an important one. Sometimes, obtaining reliable atomic-scale measurements begins with spending a surprising amount of time making sure that a few millimeters of ceramic are clean enough.