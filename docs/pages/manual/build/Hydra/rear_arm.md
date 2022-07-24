---
layout: default
title: 8. Rear arm
nav_order: 8
has_toc: true
parent: Hydra
grand_parent: Manual
permalink: /manual/build/hydra/rear_arm
---

# 8. Assembling rear arm
{: .no_toc }


1. Table of content
{:toc}

# Bed supporting arm

## Rear arm
[![Rear arm](../../../assets/images/instructions/hydra/rear_arm/rear_arm_complete.png)](#lightbox__item_1){: .lightbox_wrapper}

<div onclick="location.href='##';"  id="lightbox__item_1"  class="lightbox__item">
    <div class="lightbox__content">
    <div class="lightbox__titlebar"></div>
        <a href="##" class="close"></a>
        <img src="../../../assets/images/instructions/hydra/rear_arm/rear_arm_complete.png" alt="Right arm full overview">
    </div>
</div>

The hardware displayed below is for the rear arm assembly.

### Hardware

| :-------------------------: | :--------------------       | -------------------------------------------------------------------------------: |
| Type:<br>Amount: | m3x6mm<br>3                            |     ![m3x8](../../../assets/images/instructions/m3x6_flat.png) |
| Type:<br>Amount: | m3x8mm<br>9                            |     ![m3x8](../../../assets/images/instructions/m3x8.png) |
| Type:<br>Amount: | m3x10mm<br>1                            |     ![m3x10](../../../assets/images/instructions/m3x10.png) |
| Type:<br>Amount: | Heatset insert<br>12                           |     ![heatset insert](../../../assets/images/instructions/m3_heat_insert.png) |
| Type:<br>Amount: | 10mm Kossel ball<br>1                           |     ![10mm Kossel ball](../../../assets/images/instructions/10mm_kossel_ball.png) |
| Type:<br>Amount: | 12x5x4 countersunk magnet<br>1     | ![12x5x4 countersunk magnet](../../../assets/images/instructions/12x5x4mm_cs_magnet.png) |
| Type:<br>Amount: | MGN9C Rail<br>1                    |     ![MGN9C rail](../../../assets/images/instructions/mgn9c_100mm.png) |
{: class="hardwaretable"}

### Printed part

| :-------------------------: | :--------------------       | -------------------------------------------------------------------------------: |
| File name<br>Description<br>Download | rear_arm.stl<br>Rear support arm for print bed<br>[Here](/manual/build/hydra/printed_files#bed-supporting-arms)|     [![Rear arm](../../../assets/images/instructions/hydra/rear_arm.png)](#lightbox__item_2){: .lightbox_wrapper} 
| File name<br>Description<br>Amount<br>Download | MGN9C_12x*#*Mag.stl<br>Connects the bed to the rail carriage<br>1<br>[Here](/manual/build/hydra/printed_files#mini-tank)| [![Smoll tank](../../../assets/images/instructions/hydra/mini_tank.png)](#lightbox__item_3){: .lightbox_wrapper} |
{: class="hardwaretable"}

<div onclick="location.href='##';"  id="lightbox__item_2"  class="lightbox__item">
    <div class="lightbox__content">
    <div class="lightbox__titlebar"></div>
        <a href="##" class="close"></a>
        <img src="../../../assets/images/instructions/hydra/rear_arm.png" alt="Right front arm">
    </div>
</div>

<div onclick="location.href='##';"  id="lightbox__item_3"  class="lightbox__item">
    <div class="lightbox__content">
    <div class="lightbox__titlebar"></div>
        <a href="##" class="close"></a>
        <img src="../../../assets/images/instructions/hydra/mini_tank.png" alt="Right front arm">
    </div>
</div>

We have very specific [settings](../../../standard/print/settings){:target="_blank"} you should print the parts with, they've been designed around these settings.

## Rear arm assembly

### Inserting the heat inserts

Printed part required:

| :-------------------------: | :--------------------       | -------------------------------------------------------------------------------: |
| Filename : | rear_arm.stl        |     [![Rear arm](../../../assets/images/instructions/hydra/rear_arm.png)](#lightbox__item_2){: .lightbox_wrapper} |
{: class="hardwaretable"}

Hardware required:

| :-------------------------: | :------------------------------------------------------------------------------- | |
| Type:<br>Amount: | Heatset insert<br>12       |     ![heatset insert](../../../assets/images/instructions/m3_heat_insert.png) |
{: class="hardwaretable"}

#### Inserting heat inserts for bottom

Stand your rear arm down on the top surface.

We're starting our work with the bottom. If possible, clamp it between something, This way, it doesn't move...

{: .warn}
**Don't burn yourself!** We're going to work with a soldering iron, be careful. Heatsets inserts are still hot after melting them into the plastic, don't touch them!

If you do not know how to insert heatset inserts into printed parts, please watch the video by [EDGE OF 3D](https://www.youtube.com/embed/WtDyX8yIzC0){:target="_blank"}.

Place the small end of the heatset inserts into the hole. You can start with one heatset so they don't fall out when you insert the other once. Heatup the soldering iron to about 250&#8451;, you do not want to burn the plastic, you want to let the heatset melt into the plastic. These will be used to mount the leadscrew nut to the arm in a later step.

[![Insert heatset in bottom](../../../assets/images/instructions/hydra/rear_arm/step1_inserts_bottom.png)](#lightbox__item_4){: .lightbox_wrapper}

> ``Not sure if the heatset is in straight? Grab a longer M3 screw, and partially thread it in `rig`ht after melting it in, this way you can turn it straight.``

<div onclick="location.href='##';"  id="lightbox__item_4"  class="lightbox__item">
    <div class="lightbox__content">
    <div class="lightbox__titlebar"></div>
        <a href="##" class="close"></a>
        <img src="../../../assets/images/instructions/hydra/rear_arm/step1_inserts_bottom.png" alt="Insert heatset in bottom">
    </div>
</div>

#### Inserting heat inserts for the side

Stand your rear arm down the left surface (from the front), the 3 **heatset holes should be facing up**.

Place the small end of the heatset inserts into the holes. And start melting them in as shown in the image below. These will be used to attach the **cable chain** later step.

[![Insert heatset in side](../../../assets/images/instructions/hydra/rear_arm/step2_inserts_side.png)](#lightbox__item_50){: .lightbox_wrapper}

<div onclick="location.href='##';"  id="lightbox__item_50"  class="lightbox__item">
    <div class="lightbox__content">
    <div class="lightbox__titlebar"></div>
        <a href="##" class="close"></a>
        <img src="../../../assets/images/instructions/hydra/rear_arm/step2_inserts_side.png" alt="Insert heatset in top">
    </div>
</div>

#### Inserting heat inserts for top

Stand your Rear arm down the bottom surface.

Place the small end of the heatset inserts into the holes. And start melting them in as shown in the image below. These will be used to attach the **MGN9C rail** in a later step.

[![Insert heatset in bottom](../../../assets/images/instructions/hydra/rear_arm/step3_inserts_top.png)](#lightbox__item_5){: .lightbox_wrapper}

<div onclick="location.href='##';"  id="lightbox__item_5"  class="lightbox__item">
    <div class="lightbox__content">
    <div class="lightbox__titlebar"></div>
        <a href="##" class="close"></a>
        <img src="../../../assets/images/instructions/hydra/rear_arm/step3_inserts_top.png" alt="Insert heatset in top">
    </div>
</div>


### Installing MGN9 rail

Hardware required: 

| :-------------------------: | :------------------------------------------------------------------------------- | |
| Type:<br>Amount: | MGN9C 100mm<br>1       |     ![MGN9C](../../../assets/images/instructions/mgn9c_100mm.png) |
| Type:<br>Amount: | M3X8mm bolt<br>5       |     ![m3x8mm](../../../assets/images/instructions/m3x8.png) |
{: class="hardwaretable"}

Grab the rear arm and align the MGN9C rail into the top as shown in the image below.

[![Rear arm align rail](../../../assets/images/instructions/hydra/rear_arm/step4_place_rail.png)](#lightbox__item_6){: .lightbox_wrapper}

<div onclick="location.href='##';"  id="lightbox__item_6"  class="lightbox__item">
    <div class="lightbox__content">
    <div class="lightbox__titlebar"></div>
        <a href="##" class="close"></a>
        <img src="../../../assets/images/instructions/hydra/rear_arm/step4_place_rail.png" alt="Rear arm align">
    </div>
</div>

Lower the rail into the slot, there are two tabs that'll keep the MGN9C carriage from riding off the rail. The front tab is shown in the image below.

[![Rear arm align rail](../../../assets/images/instructions/hydra/rear_arm/step5_check_alignment.png)](#lightbox__item_7){: .lightbox_wrapper}

<div onclick="location.href='##';"  id="lightbox__item_7"  class="lightbox__item">
    <div class="lightbox__content">
    <div class="lightbox__titlebar"></div>
        <a href="##" class="close"></a>
        <img src="../../../assets/images/instructions/hydra/rear_arm/step5_check_alignment.png" alt="Rear arm align">
    </div>
</div>

#### Inserting screws into MGN9C rail

Move the carriage to the back, and thread the first 3 M3x8mm screws into the heatset inserts using a 2.5mm hex driver.

[![Rear arm align rail](../../../assets/images/instructions/hydra/rear_arm/step6_insert_front3.png)](#lightbox__item_8){: .lightbox_wrapper}

<div onclick="location.href='##';"  id="lightbox__item_8"  class="lightbox__item">
    <div class="lightbox__content">
    <div class="lightbox__titlebar"></div>
        <a href="##" class="close"></a>
        <img src="../../../assets/images/instructions/hydra/rear_arm/step6_insert_front3.png" alt="rear arm align">
    </div>
</div>

Now move the carriage to the front and thread the last 2 M3X8mm screws into the heatset.

[![Right arm align rail](../../../assets/images/instructions/hydra/rear_arm/step7_forward_lastbolts.png)](#lightbox__item_9){: .lightbox_wrapper}

<div onclick="location.href='##';"  id="lightbox__item_9"  class="lightbox__item">
    <div class="lightbox__content">
    <div class="lightbox__titlebar"></div>
        <a href="##" class="close"></a>
        <img src="../../../assets/images/instructions/hydra/rear_arm/step7_forward_lastbolts.png" alt="Right arm align">
    </div>
</div>


### Mini tank!

Printed part required:

| :-------------------------: | :--------------------       | -------------------------------------------------------------------------------: |
| Filename : | mini_tank.stl        |     [![mink tank](../../../assets/images/instructions/hydra/mini_tank.png)](#lightbox__item_3){: .lightbox_wrapper} |
{: class="hardwaretable"}

Hardware required:

| :-------------------------: | :------------------------------------------------------------------------------- | |
| Type:<br>Amount: | Heatset insert<br>1       |     ![heatset insert](../../../assets/images/instructions/m3_heat_insert.png) |
{: class="hardwaretable"}

#### Inserting the heatset insert

We start by melting the heatset insert in into the so called 'barrel', this is the hole in the front as shown in the image below.

[![Right arm](../../../assets/images/instructions/hydra/right_arm/step7_insert_minitank_rocket.png)](#lightbox__item_10){: .lightbox_wrapper}

<div onclick="location.href='##';"  id="lightbox__item_10"  class="lightbox__item">
    <div class="lightbox__content">
    <div class="lightbox__titlebar"></div>
        <a href="##" class="close"></a>
        <img src="../../../assets/images/instructions/hydra/right_arm/step7_insert_minitank_rocket.png" alt="Right arm full overview">
    </div>
</div>

### Installing Mini tank on carriage

Hardware required:

| Type:<br>Amount: | m3x8mm<br>9                            |     ![m3x8](../../../assets/images/instructions/m3x8.png) |
| Type:<br>Amount: | Heatset insert<br>10                           |     ![heatset insert](../../../assets/images/instructions/m3_heat_insert.png) |
| Type:<br>Amount: | 10mm Kossel ball<br>1                           |     ![10mm Kossel ball](../../../assets/images/instructions/10mm_kossel_ball.png) |
| Type:<br>Amount: | 12x5x4 countersunk magnet<br>1     | ![12x5x4 countersunk magnet](../../../assets/images/instructions/12x5x4mm_cs_magnet.png) |
{: class="hardwaretable"}

We've been working on the rear arm and mini tank. It's time to install the Mini tank onto the carriage. Grab the rear arm and mini tank you've prepared in the steps above.

#### Installing magnet assembly
Grab the rear arm and lower the magnet into the middel of the MGN9C carriage as shown below.

[![Right arm](../../../assets/images/instructions/hydra/right_arm/step8_lower_center_magnet.png)](#lightbox__item_11){: .lightbox_wrapper}

<div onclick="location.href='##';"  id="lightbox__item_11"  class="lightbox__item">
    <div class="lightbox__content">
    <div class="lightbox__titlebar"></div>
        <a href="##" class="close"></a>
        <img src="../../../assets/images/instructions/hydra/right_arm/step8_lower_center_magnet.png" alt="Right arm full overview">
    </div>
</div>

Now take the 10mm Kossel ball and center it on the countersunk magnet, note that the threads + hole should face the top.

[![Right arm](../../../assets/images/instructions/hydra/right_arm/step9_lower_kossel_ball.png)](#lightbox__item_12){: .lightbox_wrapper}

<div onclick="location.href='##';"  id="lightbox__item_12"  class="lightbox__item">
    <div class="lightbox__content">
    <div class="lightbox__titlebar"></div>
        <a href="##" class="close"></a>
        <img src="../../../assets/images/instructions/hydra/right_arm/step9_lower_kossel_ball.png" alt="Right arm full overview">
    </div>
</div>

Take the Mini tank you've prepared, and lower it onto the magnet + Kossel ball.

[![Right arm](../../../assets/images/instructions/hydra/right_arm/step10_lower_tank.png)](#lightbox__item_13){: .lightbox_wrapper}

<div onclick="location.href='##';"  id="lightbox__item_13"  class="lightbox__item">
    <div class="lightbox__content">
    <div class="lightbox__titlebar"></div>
        <a href="##" class="close"></a>
        <img src="../../../assets/images/instructions/hydra/right_arm/step10_lower_tank.png" alt="Right arm full overview">
    </div>
</div>

Your assembly should look something like this:

[![Right arm](../../../assets/images/instructions/hydra/right_arm/step11_lowered_tank.png)](#lightbox__item_14){: .lightbox_wrapper}

<div onclick="location.href='##';"  id="lightbox__item_14"  class="lightbox__item">
    <div class="lightbox__content">
    <div class="lightbox__titlebar"></div>
        <a href="##" class="close"></a>
        <img src="../../../assets/images/instructions/hydra/right_arm/step11_lowered_tank.png" alt="Right arm full overview">
    </div>
</div>

#### Inserting the screws

Install all 4 M3x8mm screws into the top of the Mini tank and thread them into the MGN9C carriage as shown below.

[![Right arm](../../../assets/images/instructions/hydra/right_arm/step12_insert_4bolt.png)](#lightbox__item_15){: .lightbox_wrapper}

<div onclick="location.href='##';"  id="lightbox__item_15"  class="lightbox__item">
    <div class="lightbox__content">
    <div class="lightbox__titlebar"></div>
        <a href="##" class="close"></a>
        <img src="../../../assets/images/instructions/hydra/right_arm/step12_insert_4bolt.png" alt="Right arm full overview">
    </div>
</div>


#### Installing locking system

{: .note}
This system is used to prevent the kossel ball from spinning when installing and uninstalling the bed. A **light snug fit** should be more than enough.

Hardware required:

| Type:<br>Amount: | m3x10mm<br>1                            |     ![m3x10](../../../assets/images/instructions/m3x10.png) |
{: class="hardwaretable"}

{: .warn}
When you've installed everything, you need to make sure the M3x10mm bolts are lose. Locking them into place will stop your Z-system from trimming correctly and might actually damage parts.

Grab the assembly and your M3x10mm screw and lightly thread it into the barrel as shown below. **Light fit is enough!**

[![Right arm](../../../assets/images/instructions/hydra/right_arm/step13_insert_tension_screw.png)](#lightbox__item_16){: .lightbox_wrapper}

<div onclick="location.href='##';"  id="lightbox__item_16"  class="lightbox__item">
    <div class="lightbox__content">
    <div class="lightbox__titlebar"></div>
        <a href="##" class="close"></a>
        <img src="../../../assets/images/instructions/hydra/right_arm/step13_insert_tension_screw.png" alt="Right arm full overview">
    </div>
</div>

The following image shows you how it will lock the kossel ball into place.

[![Right arm](../../../assets/images/instructions/hydra/right_arm/step14_explain_tension_screw.png)](#lightbox__item_17){: .lightbox_wrapper}

<div onclick="location.href='##';"  id="lightbox__item_17"  class="lightbox__item">
    <div class="lightbox__content">
    <div class="lightbox__titlebar"></div>
        <a href="##" class="close"></a>
        <img src="../../../assets/images/instructions/hydra/right_arm/step14_explain_tension_screw.png" alt="Right arm full overview">
    </div>
</div>


#### M3x6 Flats

Instructions for the following hardware will be added later.

| :-------------------------: | :--------------------       | -------------------------------------------------------------------------------: |
| Type:<br>Amount: | m3x6mm<br>3                            |     ![m3x8](../../../assets/images/instructions/m3x6_flat.png) | 
{: class="hardwaretable"}

{: style="text-align: center" }
<span class="fs-8">
[Next step &rarr;](/){: .btn .btn-red }
</span>