---
title: "How to apply uniform strain to thick crystals"
date: 2025-03-01
layout: single
hide_date: true
permalink: /posts/2025-03-01-cleaver/
excerpt: "Why beveled edges make all the difference."
header:
  teaser: "post-icons/educational.svg"
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

## Why Cutting the Corners Helps a Crystal Break Cleanly

*Sometimes, a small change in shape makes all the difference.*

When trying to break a crystal along a specific plane, one might think that the main challenge is simply applying enough force. But **where that force goes** can be just as important.

In our [strain-assisted cleaving method for cubic perovskite oxides](https://doi.org/10.1063/5.0233747), a crystal is compressed between stainless steel jaws before being cleaved. For thicker crystals, however, we encountered an interesting problem.

The steel jaws are not perfectly rigid. As they press against the crystal, they deform slightly, causing much of the strain to concentrate near the crystal's sharp edges rather than being distributed more evenly through its interior. These highly strained regions can initiate cracks prematurely, leading to an irregular fracture instead of the clean cleavage we want.

The solution turned out to be surprisingly simple: **bevel the edges of the crystal**.

By removing the sharp corners, we change how the clamping force is transferred into the crystal. Rather than concentrating strain at the edges, the modified geometry allows it to be distributed more uniformly through the crystal body.

<figure>
  <img src="{{ '/images/posts/srtio3CleaverEdges/srtio3CleaverEdges.png' | relative_url }}"
       alt="Strain distribution in crystals with sharp and beveled edges"
       style="width: 100%; max-width: 750px; height: auto; display: block; margin: 0 auto;">

  <figcaption>
    <strong>Effect of crystal edge geometry on mechanical strain distribution.</strong>
    Finite-element analysis reveals pronounced strain concentrations near the sharp edges of an unbeveled crystal, arising from deformation of the clamping jaws. Beveling the edges redistributes the applied load, resulting in a more homogeneous strain field and reducing the likelihood of premature crack initiation.
  </figcaption>
</figure>

Finite-element analysis confirmed this effect. With sharp edges, the highest strain is concentrated near the corners. After beveling, the distribution becomes much more homogeneous, reducing the risk of unwanted cracking.

This small adjustment helped us reliably cleave thicker SrTiO<sub>3</sub> crystals and obtain large, atomically flat surfaces.

It's a nice reminder that successful experiments sometimes depend less on sophisticated equipment than on understanding the mechanics of a seemingly minor detail.

The simulations and practical instructions are included in our paper, [*How to cleave cubic perovskite oxides*](https://doi.org/10.1063/5.0233747), published in *Review of Scientific Instruments* (2025).