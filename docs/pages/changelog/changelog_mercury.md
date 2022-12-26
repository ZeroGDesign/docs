---
layout: default
title: Mercury One.1
nav_order: 20
has_children: false
has_toc: true
parent: Changelog
permalink: /changelog/mercury
img_instr: ../../../assets/images/examples
---


# Mercury One.1 Changelog
{: .no_toc }

This page contains a list of updates that have been made to Mercury One.1. It is a record of changes and improvements that have been made over time.
{: .fs-5 .fw-300 }


1. Table of content
{:toc}


<div class="code-example" markdown="1">
#### 26th December 2022
{: .no_toc }

This update brings significant improvements to the extruder mounts.
1. Replaced **ALL** M3 Nuts with Heatsets.
   1. The fanducts now utilize heatsets.
   2. The BLTouch and CRTouch mounts now also use heatsets.
2. Standardized the lenght of the M3 bolts.
   1. [Here](#lightbox_new_eva_hardware) is a screenshot of all the bolts required for the new EVA files.
3. Increased the counterbore size for all M3 bolts.
4. **Printability**
   1. Thin walls were corrected or removed to optimize printing.
   2. Changed some angles to make it easier to print overhangs.
5. We modified the Sherpa mini mount to be top-mounted.
   1. Take a look at these changes [here](#lightbox_sherpatopmount).
6. The introduction of color coding for hardware.
   1. The CAD file now includes color-coded representations of hardware, such as bolts.
      1. Take a look at these changes [here](#lightbox_m3_colorcoding) and [here](#lightbox_colorcoding).


<div onclick="location.href='##';"  id="lightbox_new_eva_hardware"  class="lightbox__item">
    <div class="lightbox__content">
    <div class="lightbox__titlebar"></div>
        <a href="##" class="close"></a>
        <img src="{{page.img_instr}}/new_bom_EVA.png" alt="List of hardware for EVA">
    </div>
</div>


<div onclick="location.href='##';"  id="lightbox_m3_colorcoding"  class="lightbox__item">
    <div class="lightbox__content">
    <div class="lightbox__titlebar"></div>
        <a href="##" class="close"></a>
        <img src="{{page.img_instr}}/m3_hardware_colorcoding.png" alt="Color coded hardware example">
    </div>
</div>

<div onclick="location.href='##';"  id="lightbox_sherpatopmount"  class="lightbox__item">
    <div class="lightbox__content">
    <div class="lightbox__titlebar"></div>
        <a href="##" class="close"></a>
        <img src="{{page.img_instr}}/top_mount_sherpa.png" alt="Color coded hardware example">
    </div>
</div>

<div onclick="location.href='##';"  id="lightbox_colorcoding"  class="lightbox__item">
    <div class="lightbox__content">
    <div class="lightbox__titlebar"></div>
        <a href="##" class="close"></a>
        <img src="{{page.img_instr}}/colored_hardware.png" alt="Color coded toolhead example">
    </div>
</div>

You can find the above changes in the Mercury One.1 manual.

Unknown secret - AI Helped us write this changelog
{: .fs-1 .fw-300 }
</div>