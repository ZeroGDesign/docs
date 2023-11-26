---
permalink: /universal/steve_test
---


<!-- title: coreXY
nav_order: 1
has_children: false
has_toc: false
parent: Useful -->

<script src="../../../scripts/steve_test.js"></script>

# There ya go steve

<form id="gcodeForm">
    <!-- extrusion parameters (mm) -->
    <label for="startGCode">Start G-code:</label><br>
    <textarea id="startGCode" rows="4" cols="50"></textarea><br>

    <label for="extrusionWidth">Extrusion Width (mm): </label>
    <input type="number" step="0.01" id="extrusionWidth" value="0.4" required><br>

    <label for="layerHeight">Layer Height (mm): </label>
    <input type="number" step="0.01" id="layerHeight" value="0.2" required><br>

    <label for="filamentDiameter">Filament Diameter (mm): </label>
    <input type="number" step="0.01" id="filamentDiameter" value="1.75" required><br>

    <!-- print speeds (mm/s) -->
    <label for="travelSpeed">Travel Speed (mm/s): </label>
    <input type="number" step="0.1" id="travelSpeed" value="150" required><br>

    <label for="firstLayerSpeed">First Layer Speed (mm/s): </label>
    <input type="number" step="0.1" id="firstLayerSpeed" value="20" required><br>

    <label for="slowSpeed">Slow Speed (mm/s): </label>
    <input type="number" step="0.1" id="slowSpeed" value="5" required><br>

    <label for="fastSpeed">Fast Speed (mm/s): </label>
    <input type="number" step="0.1" id="fastSpeed" value="70" required><br>

    <!-- calibration object dimensions (mm) -->
    <label for="layers">Number of Layers: </label>
    <input type="number" id="layers" value="50" required><br>

    <label for="objectWidth">Object Width (mm): </label>
    <input type="number" step="0.1" id="objectWidth" value="90" required><br>

    <label for="numPatterns">Number of Patterns: </label>
    <input type="number" id="numPatterns" value="4" required><br>

    <label for="patternWidth">Pattern Width (mm): </label>
    <input type="number" step="0.1" id="patternWidth" value="5" required><br>

    <!-- pressure advance gradient (s) -->
    <label for="pressureAdvanceMin">Pressure Advance Min (s): </label>
    <input type="number" step="0.01" id="pressureAdvanceMin" value="0.0" required><br>

    <label for="pressureAdvanceMax">Pressure Advance Max (s): </label>
    <input type="number" step="0.01" id="pressureAdvanceMax" value="0.2" required><br>

    <!-- center of print bed (mm) -->
    <label for="offsetX">Offset X (mm): </label>
    <input type="number" step="0.1" id="offsetX" value="0" required><br>

    <label for="offsetY">Offset Y (mm): </label>
    <input type="number" step="0.1" id="offsetY" value="0" required><br>

    <button type="button" onclick="generateGCode()">Generate G-code</button>
</form>