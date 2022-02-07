---
layout: default
title: Mercury One.1
nav_order: 4
has_toc: true
parent: How To
permalink: /howto/build/printer/mercury_eva
---

# Mercury One.1 Full Assembly
{: .no_toc }

Welcome to your first steps at assembling your Mercury One.1!

Skill required - medium
{: .label .label-red }

## Section One: Frame

![Empty Ender 5 Frame](../../../assets/images/instructions/empty_frame.png)

### Empty Frame

For the Mercury One.1 we want to start with the top motion system removed. We're not going into depth on how to remove the X and Y motion system.
If you're having trouble or you would like some help please don't hesitate and ask for help in our [Discord server](https://discord.com/invite/gzJP2s8){:target="_blank"}.

1. Table of content
{:toc}


# Section Two: Stepper mounts

## Left stepper mount
![Left Stepper mount](../../../assets/images/instructions/stepper_mounts_left.png){: class="zoom"}

The hardware displayed below is for __ONE__ stepper mount. INPUT TEXT HERE FOR RIGHT STEPPER MOUNT.

### LS hardware

| :-------------------------: | :--------------------       | -------------------------------------------------------------------------------: |
| Type:<br>Amount: | 5x30 Precision Dowel pin<br>2          |     ![5MM 30mm dowel](../../../assets/images/instructions/5x30_dowel_pin.png) |
| Type:<br>Amount: | M3X20mm<br>3                           |     ![M3X20mm](../../../assets/images/instructions/m3x20.png) |
| Type:<br>Amount: | M5X50mm<br>2                           |     ![M5X50mm](../../../assets/images/instructions/m5x50.png) |
| Type:<br>Amount: | [Flange stack](#flange-stack)<br>3     | ![Flange stack](../../../assets/images/instructions/flange_stack.png) |
| Type:<br>Amount: | 20Tooth Pulley<br>1          |     ![20T Pulley](../../../assets/images/instructions/20t_pulley.png) |
| Type:<br>Amount:<br>Note: | M5 T-Nut<br>2<br>Read more    | ![Flange stack](../../../assets/images/instructions/m5_rollin_tnut.png) |
| Type:<br>Amount: | Nema 17 Stepper Motor<br>1                            | ![Nema 17](../../../assets/images/instructions/nema17.png) |
{: class="hardwaretable"}

### LS printed parts

| :-------------------------: | :--------------------       | -------------------------------------------------------------------------------: |
| Type:<br>Amount: | Left stepper top<br>1        |     ![Left stepper top printed](../../../assets/images/instructions/printer_stepper_left_top.png) |
| Type:<br>Amount: | Left stepper bottom<br>1     |     ![Left stepper bottom printed](../../../assets/images/instructions/printed_stepper_left_bottom.png) |
{: class="hardwaretable"}

We have very specific settings you should print the parts with, they've been designed around these settings. Read more about them.

## Sanding the dowel pins

Test fit your dowel pin in the F695-2RS 5\*13\*4 Mm bearing, if they're tight **DO NOT** continue. You want to sand them down a little. 

#### Why do I have to sand my dowel pins?

If they do fit nicely you do not need to sand them down. 

Forcing the dowel pins into the F695-2RS Bearings might cause one of the following issues:

1. The F695-2RS Bearing might crack and split.
2. The dowel pin will never come out again.

<details>
  <summary>Click to expand for instructions!</summary>
  
    Insert your pins into an electric drill and grab your sandpaper

    <dl>
        <dt>Sandpaper grit</dt>
        <dd>120 to 220</dd>
    </dl>

    ![how to sand](../../../assets/images/instructions/assembly/left_stepper/sanding.jpg)) |
</details>

## Left stepper mount assembly

### Inserting the T-nuts

Insert the two M5 T-Nuts into the frame. If you happen to have the T-Nuts without the springs you can skip this step and attach them to the M5x50mm bolts later.

You can slightly rotate the M5 T-nuts while pressing them into the frame. They will snap into place.

The placement of the T-nuts is not important, as long as the threaded holes are facing the right directions as shown on the image below.

![Left stepper t-nut highlighted](../../../assets/images/instructions/assembly/left_stepper/left_stepper_tnut_highlight.png)

The image below shows the correct placement of the T-nuts.

![Left stepper t-nut after insert](../../../assets/images/instructions/assembly/left_stepper/left_stepper_tnut_after.png)

### Inserting dowel pins - LS

Take the bottom left stepper mount *printed part* and insert two 5x30 dowel pins as shown in the image below.

![Left stepper bottom pins](../../../assets/images/instructions/assembly/left_stepper/left_stepper_bottom_pins.png){: class="zoom2"}

The image below shows the correct placement of the dowel pins.

![Left stepper bottom pins after](../../../assets/images/instructions/assembly/left_stepper/left_stepper_bottom_pins_after.png){: class="zoom2"}

>>> ``On the bottom of the printed part you will find small M3 holes below the dowel pins. If your dowel pins are stuck you can use those to press them out using a small hex key.``

### Adding the flange stacks

It's time to add the [flange stack](#flange-stack)! Don't know what those are? [Click here](#flange-stack).

![Left stepper bottom Flange stacks](../../../assets/images/instructions/assembly/left_stepper/left_stepper_bottom_flange.png){: class="zoom2"}

The image below shows the correct placement of the [flange stack](#flange-stack).

![Left stepper bottom Flange stacks](../../../assets/images/instructions/assembly/left_stepper/left_stepper_bottom_flange_after.png){: class="zoom2"}

When placing the double flange stacks, make sure you do not remove any shim rings, there will be two on top of each other as shown in the image below.

![Left stepper bottom Flange stacks](../../../assets/images/instructions/assembly/left_stepper/left_stepper_bottom_double_flange.png){: class="zoom2"}

### Lowering the top stepper mount

Take the top left motor mount *printed piece* and lower it into the bottom left motor mount.

| :-------------------------: | :--------------------       | -------------------------------------------------------------------------------: |
| Type: | Left stepper top        |     ![Left stepper top printed](../../../assets/images/instructions/printer_stepper_left_top.png) |
{: class="hardwaretable"}

![Left stepper top printed](../../../assets/images/instructions/assembly/left_stepper/left_stepper_lower_top_print.png){: class="zoom2"}

The image below shows the top lowered on the bottom mount, top top will have an edge/guide where the bottom part will fit in.
There should be some play, this because it makes it easier to align.

![Left stepper top printed](../../../assets/images/instructions/assembly/left_stepper/left_stepper_lower_top_print_after.png){: class="zoom2"}

# Definitions

## Flange stack

The following image represents a so called "flange stack".
It contains the following:


| :-------------------------: | :------------------------------------------------------------------------------- | |
| Type:<br>Amount: | 5x10x1 Shim ring<br>2       |     ![5MM 30mm dowel](../../../assets/images/instructions/m5_10_1_shim.png) |
| Type:<br>Amount: | F695-2RS 5\*13\*4 Mm<br>2       |     ![5MM 30mm dowel](../../../assets/images/instructions/f695_flange_bearing.png) |
{: class="hardwaretable"}

1. Assemble the Flange Stack as per following image.

![Flange stack](../../../assets/images/instructions/flange_stack_exploded.png)