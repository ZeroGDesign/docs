---
layout: default
title: OrcaSlicer
nav_order: 20
has_children: false
has_toc: true
parent: Universal
permalink: /universal/orcaslicer
---

<script src="../../../scripts/calculators.js"></script>

# <i class="bi bi-calculator"></i> Anything OrcaSlicer
{: .no_toc }

These calculators will help you tune your machine.
{: .fs-6 .fw-300 }
Missing something? Let us know.

1. Table of content
{:toc}

## OrcaSlicer - Flow rate callibration

For more details, click [here](https://github.com/SoftFever/OrcaSlicer/wiki/Calibration#flow-rate){:target="_blank"}. This isn't a tutorial, but a useful calculator.
{: .fs-4 .fw-300 }

<div class="code-example" markdown="1">
#### Calculating flow ratio using OrcaSlicer
{: .no_toc }
<form>
    Current flowrate<br/><input type="text" class="textfield_dark" id="flowRatio" Value="1.00"/><br/>
    Callibration print number<br/><input type="text" class="textfield_dark" id="flowRatioModifier" Value="+ or - and number"/><br/>
    <div class="fs-3 fw-300">Ensure you enter the number shown on the print, <b>including the "+" or "-" sign. For example "+1" or "-1"</b>.</div>
    <div class="status_text_modifier" id="hasValueModifier"></div>

    <input type="button" class="btn" onClick="calculate_flowRatio()" Value="Calculate" /><br/>

    Your new Flow Ratio: <b><span id="result_flowRatio">1.00</span></b>
    
</form>

#### Formula explained
{: .no_toc }
</div>

```xml
The formula we use for calculating the flow ratio:

current_flowrate *(100 + modifier)/100

current_flowrate is the value found under Filament Settings > Basic Information > Flow Ratio.
Modifier the value displayed on the print.
```
