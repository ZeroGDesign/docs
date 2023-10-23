---
layout: default
permalink: /useful/corexy
---

<!-- title: coreXY
nav_order: 1
has_children: false
has_toc: false
parent: Useful -->

<script src="../../../scripts/klipper_corexy_solver.js"></script>

# <i class="bi bi-calculator"></i> corexy test

#### CoreXY Motion issue resolver
{: .no_toc }
Having trouble setting the homing direction on your CoreXY system? You're not the only one.

### Why and what?

We set our CoreXY printers to home at the rear right, with endstops at the rear and right side. Some people face issues with the printer homing in the wrong direction. While Voron *(inspiration)* offers a useful diagram for troubleshooting, I've devised a simpler solution. The tool takes your stepper_x and stepper_y config and auto-sets your pins. If the printer still doesn't home to the rear right, there might be other issues like incorrect pins or printer settings.


### How to use

This tool requiers you to be at a point in your build where you printer is homing in the wrong direction, this means you have a fully working config.


### Tool

<div class="code-example" markdown="1">

#### Important
Fully paste your [stepper_x] and [stepper_y] data in the field below. **DO NOT** include any other sections!

<textarea id="inputData" class="list_dark" rows="19" cols="50" placeholder="FULL [STEPPER_X] AND [STEPPER_Y] CONFIG!"></textarea>

#### Homing direciton
<label for="stepperA">X homes </label><br/>
<select id="stepperA" class="list_dark">
    <option value="left">Left</option>
    <option value="right">Right</option>
    <option value="front">Front</option>
    <option value="rear">Rear</option>
</select><br/>
<label for="stepperB">Y Homes</label><br/>
<select id="stepperB" class="list_dark">
    <option value="left">Left</option>
    <option value="right">Right</option>
    <option value="front">Front</option>
    <option value="rear">Rear</option>
</select>

<button onclick="onSaveButtonClick(); parent.location='#new_stepper_config'" class="btn">Fix it!</button>
</div>

<div id="new_stepper_config" class="gcodebox__item">
    <div onclick="location.href='##';" class="background_close"></div>
    <div class="content">
        <div class="infobar">New stepper_x/y config</div>
            <div id="nowWhatText"></div>
        <div class="infobar"><button class="btn" onClick="parent.location='##'" type="button">Close</button></div>
    </div>
</div>