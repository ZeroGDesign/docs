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
#### 5Th May 2023
{: .no_toc }

1. Modified the Configurator on the Mercury One.1 Files page.
   1. Toothed idlers are now named 8.5mm/ 9mm/ 10mm.
   2. A small PDF has been added to explain which to choose.

</div>

<div class="code-example" markdown="1">
#### 8Th April 2023
{: .no_toc }

This update brings improvements to many of the motion components, resolving some of the previous grinding problems.
1. Version numbers, an example [here](#lightbox_new_versionnumbers).
   1. Version numbers have been added to all the key motion files (**version 1.1.5**).
   2. Indicators '**L**' and '**R**' have been added to differentiate between the left and right components for easier instalation.
2. Front towers.
   1. Narrowed the v-slot guide to prevent it from sitting too high, improving the stability and precision of the motion.
3. Cable management ziptie holes have been added to the motor mounts
   1. Check out the image [here](#lightbox_cable_routing_stepper1_1_5).
4. **New flange stack!**
   1. To resolve the belt grinding issue, we have implemented a **new flange stack**.
      1.  **M5 Shim -> Bearing -> M5 Shim -> Bearing -> M5 Shim**.
   2. [Here](#lightbox_new_flange_stack) is a screenshot of the new flange stack.
5. **A new tool** has been introduced to help you align the flange stack with the front idlers.
      1. We've listened to your feedback and have created a simple and effective solution. [Check out the video](https://www.youtube.com/watch?v=abdkMgndM9Y) to see it in action!



<div onclick="location.href='##';"  id="lightbox_new_versionnumbers"  class="lightbox__item">
    <div class="lightbox__content">
    <div class="lightbox__titlebar"></div>
        <a href="##" class="close"></a>
        <img src="{{page.img_instr}}/version_numbers.png" alt="shows the version numbers">
    </div>
</div>

<div onclick="location.href='##';"  id="lightbox_cable_routing_stepper1_1_5"  class="lightbox__item">
    <div class="lightbox__content">
    <div class="lightbox__titlebar"></div>
        <a href="##" class="close"></a>
        <img src="{{page.img_instr}}/cable_management_m1_1_5_steppers.png" alt="Cable routing">
    </div>
</div>

<div onclick="location.href='##';"  id="lightbox_new_flange_stack"  class="lightbox__item">
    <div class="lightbox__content">
    <div class="lightbox__titlebar"></div>
        <a href="##" class="close"></a>
        <img src="{{page.img_instr}}/new_flange_stack.png" alt="New flange stack">
    </div>
</div>

</div>


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