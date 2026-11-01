---
title: "(video) How electrostatic forces affect AFM imaging
"
date: 2021-03-01
layout: single
hide_date: true
permalink: /posts/2021-03-01-parabolas/
excerpt: "Understanding the role of electrostatics in atomic force microscopy."
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


Atomic force microscopy (AFM) allows us to study surfaces with atomic resolution by measuring the interaction between a sharp tip and the sample. However, this interaction is not governed by a single force. It includes short-range chemical forces, van der Waals interactions, and long-range electrostatic forces.

The total tip-sample force can be written as:

<p style="text-align: center; font-size: 1.15em;">
F<sub>ts</sub>(d) = F<sub>es</sub>(d) + F<sub>vdW</sub>(d) + F<sub>chem</sub>(d)
</p>

The electrostatic contribution is particularly interesting because **we can control it simply by changing the applied bias voltage**. As the following two videos illustrate, this can have a surprisingly large effect on AFM measurements.

## The Kelvin parabola

Even without an applied voltage, electrostatic forces can exist between the tip and the sample because of differences in their work functions. This difference gives rise to the *local contact potential difference* (LCPD).

The electrostatic force depends quadratically on the difference between the applied bias voltage (V<sub>B</sub>) and the LCPD:

<p style="text-align: center; font-size: 1.15em;">
F<sub>es</sub> = ½ (∂C/∂d) (V<sub>B</sub> − V<sub>LCPD</sub>)<sup>2</sup>
</p>

Here, C is the tip-sample capacitance and d is their separation. When the applied voltage matches the LCPD, the electrostatic contribution is minimized.

We can measure this effect by keeping the AFM tip at a constant height and sweeping the bias voltage while recording the frequency shift. The resulting curve, known as the **Kelvin parabola**, reaches its maximum at the LCPD.

This makes Kelvin spectroscopy useful not only for minimizing electrostatic forces, but also for investigating local variations in the electronic properties of surfaces.

## Video 1 — How electrostatics change the tip-sample interaction

<video width="100%" controls preload="metadata" style="display: block; max-width: 750px; height: auto; margin: 1.5em auto;">
  <source src="{{ '/images/posts/parabolas/fixed.mp4' | relative_url }}" type="video/mp4">
  Your browser does not support HTML5 video.
</video>

*Video 1. Influence of the applied bias voltage on the total tip-sample interaction.*

The first video shows how changing the applied bias modifies the total interaction between the AFM tip and the surface.

The familiar Lennard-Jones-like interaction describes the balance between attractive and repulsive short-range forces. Adding an electrostatic contribution makes the total interaction more attractive, depending on how far the applied voltage is from the LCPD.

As the bias approaches the LCPD, the electrostatic attraction weakens. Moving away from this value increases the attraction, even though the tip and sample themselves have not changed.

## Video 2 — Why the imaging distance changes

<video width="100%" controls preload="metadata" style="display: block; max-width: 750px; height: auto; margin: 1.5em auto;">
  <source src="{{ '/images/posts/parabolas/moving.mp4' | relative_url }}" type="video/mp4">
  Your browser does not support HTML5 video.
</video>

*Video 2. Influence of electrostatic forces on the imaging distance in constant-frequency-shift AFM.*

The second video illustrates how this affects **constant-frequency-shift AFM**, where the microscope continuously adjusts the tip height to maintain a chosen frequency shift, Δf.

Each point on the Kelvin parabola corresponds to a different applied bias and therefore a different frequency-shift curve. The horizontal dashed line marks the chosen setpoint, while its intersections with the curves determine the corresponding tip-sample distances.

When the electrostatic attraction is strong, the setpoint is reached farther from the surface. As the bias approaches the LCPD, the attraction weakens and the tip must move closer to maintain the same frequency shift.

**If the electrostatic interaction becomes too weak, the chosen setpoint may no longer be reachable on the stable imaging branch, potentially causing a tip crash.**

## What does this mean for AFM imaging?

The influence of electrostatic forces depends on how the measurement is performed.

In **constant-frequency-shift AFM**, changes in electrostatic forces lead to changes in the tip-sample distance, as the feedback continuously adjusts the tip height to maintain the chosen frequency shift.

In **constant-height AFM**, the tip-sample distance remains fixed, but variations in the electrostatic interaction produce different frequency shifts.

This distinction is particularly useful when investigating individual atoms, molecules, or defects with different charge states. Their local electrostatic interactions can produce measurable differences in frequency shift or apparent height, allowing us to **distinguish charge states and indirectly probe the local electronic structure through force measurements alone**.

Electrostatic forces are therefore more than just a background contribution to AFM measurements. They influence imaging contrast, tip-sample distance, and measurement stability, but can also provide valuable information about the electronic properties of materials.