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
During an AFM measurement, we detect the combined effect of all these contributions through the frequency shift of the oscillating sensor. Although the individual forces are not measured separately, their contributions can be distinguished and, to some extent, controlled.

Here, we will focus on electrostatic forces, which are interesting because **their strength can be manipulated simply by changing the applied bias voltage**. The two videos illustrate how these forces affect AFM measurements in two different situations.

## The Kelvin parabola

Even without an externally applied voltage, electrostatic forces can exist between the tip and the sample due to differences in their work functions.

When the tip and sample are connected to a common laboratory ground, their Fermi levels align. However, if their work functions differ, their vacuum energy levels do not coincide. This difference gives rise to the local contact potential difference (LCPD), which produces an electrostatic interaction between the tip and the surface.

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

The first video illustrates how the total tip-sample interaction changes as we vary the applied bias voltage, while keeping the properties of the tip and sample unchanged.

The short-range interaction is described by a Lennard-Jones-like potential, while the electrostatic force adds a longer-range attractive contribution. As the applied bias moves away from the LCPD, this attraction becomes stronger, modifying the total tip-sample interaction.

This has an important consequence for constant-frequency-shift AFM, where the feedback continuously adjusts the tip height to maintain a chosen frequency shift,  Δf.

In the video, the horizontal dashed line represents the chosen frequency-shift setpoint, while the intersections with the different curves indicate the corresponding tip-sample distances.

When the electrostatic attraction increases, the chosen setpoint is reached farther from the surface, causing the feedback to retract the tip. Conversely, as the bias approaches the LCPD, the electrostatic attraction weakens and the tip moves closer to the surface.

If the interaction becomes too weak to reach the chosen setpoint on the stable imaging branch, the feedback may continue approaching the sample, potentially resulting in a tip crash.

## The Kelvin parabola

We can also use the voltage dependence of electrostatic forces to measure the LCPD itself.

By keeping the tip at a fixed height and sweeping the applied bias voltage while recording the frequency shift, we obtain a characteristic curve known as the Kelvin parabola.

The parabola reaches its maximum at the bias voltage where the electrostatic interaction is minimized, allowing us to determine the LCPD between the tip and sample.

Since the LCPD depends on the relative work functions, a shift in the Kelvin parabola can reveal changes in the local electronic properties of the sample, or changes in the tip itself.

## Video 2 — Changing the tip or sample at constant bias

<video width="100%" controls preload="metadata" style="display: block; max-width: 750px; height: auto; margin: 1.5em auto;">
  <source src="{{ '/images/posts/parabolas/moving.mp4' | relative_url }}" type="video/mp4">
  Your browser does not support HTML5 video.
</video>

*Video 2. Influence of electrostatic forces on the imaging distance in constant-frequency-shift AFM.*

The second video illustrates a different situation. This time, **the applied bias voltage remains constant, but the LCPD changes** because the electronic properties of the tip or sample have changed.

Such changes can occur, for example, when an atom or molecule changes its charge state, or when the AFM tip undergoes an unintended modification.

As the LCPD changes, the Kelvin parabola shifts along the voltage axis. Even though we have not changed the applied bias, the mismatch between the bias and LCPD is now different, resulting in a different electrostatic force.

This is particularly useful in **constant-height AFM**, where the tip-sample separation remains fixed and variations in the interaction are detected through changes in the measured frequency shift.

In other words, if a molecule gains or loses an electron, its local electrostatic interaction with the tip may change, producing a measurable frequency-shift contrast without moving the tip closer or farther from the surface.

This allows us to distinguish different charge states of individual atoms, molecules, and defects, and indirectly probe their local electronic structure using force measurements alone. Of course, interpreting these changes requires care, since variations in the tip itself can produce similar effects.


## What does this mean for AFM imaging?

Electrostatic forces play two rather different roles in AFM.

In **constant-frequency-shift mode**, variations in the electrostatic interaction can change the actual tip-sample distance, even when the frequency-shift setpoint remains unchanged. This influences imaging contrast and measurement stability.

In **constant-height mode**, the distance remains fixed, and changes in the local electrostatic interaction appear directly as variations in frequency shift. These variations can provide valuable information about the electronic properties of the surface.

Understanding electrostatic forces is therefore important not only for choosing appropriate imaging conditions, but also for using AFM as a local probe of charge states and electronic structure.