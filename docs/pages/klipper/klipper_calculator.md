---
layout: default
title: Klipper calculator
nav_order: 1
has_children: false
has_toc: true
parent: Klipper
permalink: /klipper/calculator
---


# <i class="bi bi-calculator"></i> Calculating anything Klipper
{: .no_toc }

These calculators will help you tune your machine.
{: .fs-6 .fw-300 }
Missing something? Let us know.

1. Table of content
{:toc}

## Stepper current

The value you use as input should be the **RMS** value. **Not** the peak value that is written on the stepper.
{: .fs-4 .fw-300 }

<div class="code-example" markdown="1">
#### run_current
{: .no_toc }
<form>
    Motor peak current<br><input type="text" class="textfield_dark" id="peak_current" Value="1.4"/><br>

    Max recommended current: 80%<br>

    <input type="button" class="btn" onClick="calculate_runcurrent()" Value="Calculate" /><br>

    Your run_current: <b><span id = "result_runcurrent">0.79</span></b>
    
</form>

#### hold_current
{: .no_toc }

Most stepper motors will not obtain a significant benefit to reducing current during normal prints, because few printing moves will leave a stepper motor idle for sufficiently long to activate the **hold_current** feature. And, it is unlikely that one would want to introduce subtle print artifacts to the few printing moves that do leave a stepper idle sufficiently long.
{: .fs-3 .fw-300 }

#### Formula explained
{: .no_toc }
</div>

```json
The formula we use for calculating run_current:

Motor_Peak_Current * 0.707

Since we don't want to push the motors with 100% we'll do:
Motor_Peak_Current * 0.707 * 0.80

That will give us a 20% safety margin.
On a stock Ender 3 motor that is 0.84A peak
0.84*0.707*0.8 = 0.47A

So you input 0.47 in run_current of your TMC stepper.
A normal 1.4A stepper is:
1.4x0.707x0.8 = 0.79A

In this case you put 0.79 in run_current of your tmc stepper.
```

## Calibrating rotation_distance on extruders

On an extruder, the rotation_distance is the amount of distance the filament travels for one full rotation of the stepper motor. The best way to get an accurate value for this setting is to use a "measure and trim" procedure. Read more about this procedure [here](https://www.klipper3d.org/Rotation_Distance.html?h=steps#calibrating-rotation_distance-on-extruders){:target="_blank"}.
{: .fs-4 .fw-300 }

<div class="code-example" markdown="1">
<form>
    Use a marker to place a mark on the filament around 120mm from the intake of the extruder body. Then use a digital calipers to measure the actual distance of that mark as precisely as one can.<br><br>

    Measure initial mark distance in mm<br><input type="text" class="textfield_dark" id="initial_mark_distance" Value="120"/><br>
<br>
    Use the digital calipers to measure the new distance between the extruder body and the mark on the filament <b>after you've extruded 100mm of filament.</b><br><br>

    New distance in mm<br><input type="text" class="textfield_dark" id="subsequent_mark_distance" Value="20"/><br>
<br>

    We're, now going to calculate your new rotation_distance, please provide your previous rotation_distance below.<br><br>

    Previous rotation distance<br><input type="text" class="textfield_dark" id="previous_rotation_distance" Value="0"/><br><br>
    <input type="button" class="btn" onClick="calculate_rotation_distance()" Value="Calculate" /><br>

    New rotation_distance: <span id = "result_rotation_distance">0.000</span>
    
</form>
#### Formula explained
{: .no_toc }
</div>

```json
The formula that is used to calculate rotation_distance on extruders.

initial_mark_distance = initial mark on filament from the intake of the extruder body
subsequent_mark_distance = distance of mark on filament after extruding 100mm

actual_extrude_distance = <initial_mark_distance> - <subsequent_mark_distance>

actual_extrude_distance = 120mm - 20mm

rotation_distance = <previous_rotation_distance> * <actual_extrude_distance> / <requested_extrude_distance>

rotation_distance = 200 * 20mm / 100mm

```

<script>
    function calculate_runcurrent()
    {
            peak_current = document.getElementById("peak_current").value;
            document.getElementById("result_runcurrent").innerHTML = ((peak_current * 0.707) * 0.8).toFixed(2);
    }

    function calculate_rotation_distance()
    {
            initial_mark_distance = document.getElementById("initial_mark_distance").value;
            subsequent_mark_distance = document.getElementById("subsequent_mark_distance").value;
            previous_rotation_distance = document.getElementById("previous_rotation_distance").value;
            document.getElementById("result_rotation_distance").innerHTML = ((previous_rotation_distance*(initial_mark_distance-subsequent_mark_distance))/100).toFixed(3);
    }
</script>