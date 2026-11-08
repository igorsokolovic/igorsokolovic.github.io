---
title: "How to detect an electronic state as it disappears"
date: 2026-03-02
layout: single
hide_date: true
permalink: /posts/2026-06-02-srtio3-UV-detect/
excerpt: "The first measurement reveals what the next one cannot."
header:
  teaser: "post-icons/educational.svg"
  teaser2: "posts/srtio3UV-detect/srtio3UV-detect.png"
  teaser_position: "top-center"
  teaser_size: 30
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


## Detecting an Electronic State as It Disappears

One of the challenges of studying excited electronic states is that the measurement itself can disturb or even destroy them.

**But what if we could use this disturbance to learn something about the state before it disappears?**

In our recent [study of photoexcited charges on SrTiO<sub>3</sub>(001)](https://arxiv.org/abs/2604.07114), we encountered exactly this situation.

After illuminating the SrO-terminated surface with UV light, positively charged holes become trapped in the crystal, producing a surface photovoltage that can persist for days at cryogenic temperatures.

Using **noncontact atomic force microscopy (nc-AFM)**, we can image this excited surface without disturbing it. By choosing an appropriate sample voltage, we avoid injecting electrons and preserve the trapped charges throughout the measurement.

However, there is a catch when we want to investigate the **electronic density of states (DOS)**.

For this, we would normally use scanning tunneling spectroscopy (STS), which measures the tunneling current as a function of applied voltage. Unfortunately, the electrons injected during such measurements neutralize the trapped holes. **We cannot obtain a reliable DOS of the undisturbed excited state because measuring it changes the very electronic state we want to characterize.**

But this limitation also provides an opportunity.

{% include pdf-figure.html src="/images/posts/srtio3UV-detect/srtio3UV-detect.pdf" caption="**Detecting an electronic state as it disappears.** (a) AFM image of the UV-irradiated SrO termination showing two spectroscopy positions. (b) At Point 1, the first STS voltage sweep exhibits hysteresis between increasing and decreasing bias, consistent with the neutralization of photoexcited holes by injected tunneling electrons. Subsequent sweeps show no hysteresis because the initial electronic state has already been altered. (c) Repeating the measurement at Point 2, just 1 nm away, also reveals no hysteresis, suggesting that the discharge extends beyond the immediate tip position." %}

We positioned the STM tip above the UV-irradiated SrO surface and gradually increased the applied voltage until a small tunneling current of a few picoamperes appeared.

The first measurement showed something interesting: **hysteresis between the increasing and decreasing voltage sweeps**. The tunneling current followed different curves depending on the direction of the voltage sweep.

When we repeated the measurement at exactly the same position, the hysteresis had disappeared. All subsequent spectra followed approximately the same behavior in both directions.

The interpretation is that, during the first sweep, the tunneling electrons neutralized some of the photoexcited holes. The electronic environment changed while we were measuring it. By the second sweep, the initial excited state had already been altered.

Interestingly, moving the tip just **1 nm away** did not restore the hysteresis, suggesting that the discharge extended beyond the immediate tip position.

We suspect that this particular effect involves holes trapped beneath the surface, within the depletion layer, rather than only those localized at the outermost atomic layer. Their precise location, however, remains uncertain.

This experiment illustrates an interesting contrast between two scanning probe techniques. **With nc-AFM, we can observe the photoexcited surface non-intrusively. With STS, we perturb its electronic state, but the resulting hysteresis tells us that a change has occurred.**

Although we cannot reconstruct the original excited-state DOS from these destructive measurements, we can still obtain valuable information about the presence and elimination of metastable charges.

Sometimes, the most revealing measurement is the one that changes what we are trying to observe.

The experiment is described in the supplementary information of our preprint, [*Photoexcited Hole States at the SrTiO<sub>3</sub>(001) Surface Imaged with Noncontact AFM*](https://arxiv.org/abs/2604.07114).