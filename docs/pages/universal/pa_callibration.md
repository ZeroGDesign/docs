---
layout: default
title: EXPERIMENTAL - Pressure Advancted Test
nav_order: 32
has_children: false
has_toc: false
parent: Universal
permalink: /universal/pa_callibration
---

<script src="../../../scripts/pa_callibration.js"></script>

# Pressure Advance Calibration


#### Credit
A big shout-out to DigitalVision, a key member of the Duet3D forum, for creating a fantastic Python script that generates a quick and straightforward Pressure Advanced Calibration test, you can find the thread [here](https://forum.duet3d.com/topic/6698/pressure-advance-calibration). In my effort to make these tests more accessible, I've converted everything into a web form and made necessary adjustments. - DutchDude

### Soon
More info including images will be added later.

### Tool

<form id="gcodeForm">

<label for="os">Select your Firmware</label><br>
<select id="os" class="list_new">
  <option value="klipper">Klipper</option>
  <option value="raprap">RapRap</option>
</select>

<!-- Start G-code -->
<label for="startGCode">Start G-code</label><br>
<textarea id="startGCode" rows="4" cols="50" class="textbox_new"></textarea><br>

<label for="endGCode">End G-code</label><br>
<textarea id="endGCode" rows="4" cols="50" class="textbox_new"></textarea><br>

<label for="flowNumber">Flow ratio</label><br>
<input type="number" step="0.01" id="flowNumber" value="1.0" required class="textbox_new"><br>

<label for="extrusionWidth">Line Width (mm)</label>
<input type="number" step="0.01" id="extrusionWidth" value="0.4" required class="textbox_new"><br>

<label for="layerHeight">Layer Height (mm)</label>
<input type="number" step="0.01" id="layerHeight" value="0.2" required class="textbox_new"><br>

<!-- print speeds (mm/s) -->
<label for="travelSpeed">Travel Speed (mm/s)</label>
<input type="number" step="0.1" id="travelSpeed" value="150" required class="textbox_new"><br>

<label for="slowSpeed">Slow Speed (mm/s)</label>
<input type="number" step="0.1" id="slowSpeed" value="20" required class="textbox_new"><br>

<label for="fastSpeed">Fast Speed (mm/s)</label>
<input type="number" step="0.1" id="fastSpeed" value="100" required class="textbox_new"><br>

<!-- pressure advance gradient (s) -->
<label for="pressureAdvanceMin">Pressure Advance Min</label>
<input type="number" step="0.01" id="pressureAdvanceMin" value="0.0" required class="textbox_new"><br>

<label for="pressureAdvanceMax">Pressure Advance Max</label>
<input type="number" step="0.01" id="pressureAdvanceMax" value="0.2" required class="textbox_new"><br>

<!-- center of print bed (mm) -->
<h3>Middle of bed!</h3>

We'll use the following values to determin the middle of your bed, make sure this is accurate as the print will be generated in the middle of your bed.

<label for="bedMaxX">Bed Size X (mm)</label>
<input type="number" step="0.1" id="bedMaxX" value="0" required class="textbox_new"><br>

<label for="bedMaxY">Bed Size Y (mm)</label>
<input type="number" step="0.1" id="bedMaxY" value="0" required class="textbox_new">

<hr>

<details class="collapse-box">
  <summary>Show advanced settings</summary>
    <div class="collapse-content">
        <label for="filamentDiameter">Filament Diameter (mm) </label>
        <input type="number" step="0.01" id="filamentDiameter" value="1.75" required class="textbox_new"><br>

        <label for="firstLayerSpeed">First Layer Speed (mm/s)</label>
        <input type="number" step="0.1" id="firstLayerSpeed" value="20" required class="textbox_new"><br>

        <!-- calibration object dimensions (mm) -->
        <label for="layers">Number of Layers</label>
        <input type="number" id="layers" value="100" required class="textbox_new"><br>

        <label for="objectWidth">Object Width (mm)</label>
        <input type="number" step="0.1" id="objectWidth" value="90" required class="textbox_new"><br>

        <label for="numPatterns">Number of Patterns</label>
        <input type="number" id="numPatterns" value="4" required class="textbox_new"><br>

        <label for="patternWidth">Pattern Width (mm)</label>
        <input type="number" step="0.1" id="patternWidth" value="5" required class="textbox_new"><br>
    </div>
</details><br>

<button type="button" class="button_new" onclick="generateGCode()">Generate G-code</button>
<button type="button" class="button_new" onClick="parent.location='#show_calc'">Calculator</button>
</form>

<div id="show_calc" class="gcodebox__item">
    <div onclick="location.href='##';" class="background_close"></div>
    <div class="content">
        <div class="titlebar_calculator"></div>
        <a href="##" class="close"></a>
        <div class="infobar"></div>
        <p style="max-width: 42em; min-width: 40em;">
            This form will use the values provided in the Pressure Advance form that you've just used.
            <label for="measuredLine">What height did you measure? (mm)</label>
            <input type="number" step="0.01" id="measuredLine" placeholder="Example: 10mm" required class="textbox_new"><br>

<button type="button" class="button_new" onclick="calculatePressure()">Calculate</button>

            
            <p id="result">Please provide you measurement in mm.</p>
        </p>
    </div>
</div>

