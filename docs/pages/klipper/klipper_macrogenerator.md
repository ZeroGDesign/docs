---
layout: default
title: Klipper Macro Generator
nav_order: 1
has_children: false
has_toc: true
parent: Universal
permalink: /universal/klipper_macro_generator
nav_fold: true
---


# <i class="bi bi-calculator"></i> Klipper Macro Generator
{: .no_toc }


# Print start macro

We build a little tool that helps you generate your start print macro for klipper.

{:.warn}
Ensure your bed mesh and toolhead are set up correctly. Also, verify G-code macro coordinates to stay within printer bounds. Mishaps due to improper setup or misconfigured coordinates are not our responsibility. Always be thorough!


Consider that this GCode generator is still in its experimental phase and may not always produce the desired outcomes. If you have feedback or suggestions, we'd appreciate hearing from you on our [<i class="bi bi-discord"></i> Discord](https://discord.gg/zerog) server.


### This start GCode does require Klipper ARCs to be enabled
This goes in your printer config file.

```lua
# Enable arcs support
[gcode_arcs]
resolution: 0.1
```

<div class="code-example" markdown="1">
<form>

Default nozzle temp*
<input type="number" id="extruderTemp" value="190" class="list_dark">
<div class="fs-3 fw-300">Set your nozzle temp low so it doesn't ooze filament this will be overwritten by your slicer when printing. If you're using a voron TAP system, set it to 150 max!</div>

Default bed temp*
<input type="number" id="bedTemp" value="60" class="list_dark">
<div class="fs-3 fw-300">Lets say you forget to set your bed temp, what should it be by default?</div>
<h4>The above values won't be used if your start gcode is setup in the slicer.</h4>

Part cooling fan*
<select class="list_dark" id="enablePartFan">
    <option value="no">Off</option>
    <option value="yes">On</option>
</select>
<div class="fs-3 fw-300">Will help cool down the fan duct that could be close to the bed.</div>

Prime line length*
<input type="number" id="primeMoveLength" value="100" class="list_dark" min="50">
<div class="fs-3 fw-300">How long do you want your prime line to be? Min 50mm, max depending on bed size<</div>

Heat Soak (sec)*
<input type="number" id="heatsoakTime" value="0" class="list_dark" min="0">
<div class="fs-3 fw-300">Set the heatsoak duration (in seconds). If left at 0, heatsoak will not be added to the macro.</div>

Probe*
<select class="list_dark" id="probe">
    <option value="no">No</option>
    <option value="yes">Yes</option>
</select>
<div class="fs-3 fw-300">Are you using a probe attached to your toolhead?</div>

Level the bed*
<select class="list_dark" id="leveling">
    <option value="None">No</option>
    <option value="Z tilt adjust">3 Point leveling (Hydra etc...)</option>
    <option value="Quad Gantry Level">4 Point leveling (Voron 2.4, flying gantry)</option>
</select>
<div class="fs-3 fw-300">You can only level the bed if you use a system like hydra or the voron gantry.</div>

<label for="bedMeshCalibrate">Bed Mesh* </label>
<select class="list_dark" id="bedMeshCalibrate">
    <option value="no">No</option>
    <option value="yes">Yes</option>
</select>
<div class="fs-3 fw-300">Would you like to create a bed mesh?</div>

<label for="slicerSelection">Slicer*</label>
<select class="list_dark" id="slicerSelection">
    <option value="Orcaslicer">Orcaslicer</option>
    <option value="Prusaslicer">Prusaslicer</option>
    <option value="Simplify 3D">Simplify 3D</option>
    <option value="Superslicer">Superslicer</option>
    <option value="Cura">Cura</option>
</select>
<div class="fs-3 fw-300">Choose your slicer to generate the specific gcode.</div>

<hr>

<h4>Before you generate!</h4>
Make sure the options that you've selected are correct and fit your machine. If you do not know, join our <a href="https://discord.gg/zerog" target="_blank"><i class="bi bi-discord"></i> Discord</a>. and ask for help.<br/><br/>

<button class="btn" type="button" onclick="generateMacro(); parent.location='#gcode_box_arcs'">Generate</button>
<br/>
</form>
</div>

<div id="gcode_box_arcs" class="gcodebox__item">
    <div onclick="location.href='##';" class="background_close"></div>
    <div class="content">
        <div class="titlebar"></div>
        <a href="##" class="close"></a>
        <div class="infobar">Did you enable Klipper ARCs?</div>
            <div class="language-lua highlighter-rouge">
                <div class="highlight">
                    <pre class="highlight"># Enable arcs support<br/>[gcode_arcs]<br/>resolution: 0.1</pre>
                </div>
            </div>
        <div class="infobar"><button class="btn" onClick="parent.location='#gcode_box'" type="button">Yes <i class="bi bi-check-lg"></i></button> <button class="btn" onClick="parent.location='#gcode_box_arcs_sh'" type="button">No <i class="bi bi-x-lg"></i></button></div>
    </div>
</div>

<div id="gcode_box_arcs_sh" class="gcodebox__item">
    <div onclick="location.href='##';" class="background_close"></div>
    <div class="content">
        <div class="titlebar"></div>
        <a href="##" class="close"></a>
        <div class="infobar">Soo you know...</div>
            <div class="language-lua highlighter-rouge">
                <div class="highlight">
                    <pre class="highlight">You should...</pre>
                </div>
            </div>
        <div class="infobar"><button class="btn" onClick="parent.location='#gcode_box_arcs_sh2'" type="button">Okay <i class="bi bi-check-lg"></i></button></div>
    </div>
</div>

<div id="gcode_box_arcs_sh2" class="gcodebox__item">
    <div onclick="location.href='##';" class="background_close"></div>
    <div class="content">
        <div class="titlebar"></div>
        <a href="##" class="close"></a>
        <div class="infobar">Did you do it now?</div>
            <div class="language-lua highlighter-rouge">
                <div class="highlight">
                    <pre class="highlight">Come on! Do it now! - Arnold Schwarzenegger</pre>
                </div>
            </div>
        <div class="infobar"><button class="btn" onClick="parent.location='#gcode_box_arcs'" type="button">Bring me there</button></div>
    </div>
</div>


<div id="gcode_box" class="gcodebox__item">
    <div onclick="location.href='##';" class="background_close"></div>
    <div class="content">
        <div class="titlebar"></div>
        <a href="##" class="close"></a>
        <div class="infobar">This section your into your slicers start macro</div>
        <p class="fs-3 fw-300" style="text-align:center;">Input the following Start G-Code into your slicer's 'Start G-Code' field. It's the essential first set of instructions for your printer. Without it, the printer won't recognize how to begin the print process.</p>
        <p>
            <div class="language-lua highlighter-rouge">
                <div class="highlight">
                    <pre class="highlight"><code id="output_slicer">Your slicer specific gcode will be generated here...</code></pre>
                </div>
            </div>
        </p>
        <div class="infobar"><button class="btn" onClick="parent.location='#gcode_box_slicer'" type="button">Klipper Macro <i class="bi bi-text-indent-left"></i></button></div>
    </div>
</div>

<div id="gcode_box_slicer" class="gcodebox__item">
    <div onclick="location.href='##';" class="background_close"></div>
    <div class="content">
        <div class="titlebar"></div>
        <a href="##" class="close"></a>
        <div class="infobar">This is your GCode macro, add it to your klipper config</div>
        <p style="max-width: 42em; min-width: 40em;">
            <div class="language-lua highlighter-rouge">
                <div class="highlight">
                    <pre class="highlight"><code id="output">GCode Macro will be generated here...</code></pre>
                </div>
            </div>
        </p>
    </div>
</div>

<script src="../../../scripts/macro_generators/print_start_generator.js"></script>