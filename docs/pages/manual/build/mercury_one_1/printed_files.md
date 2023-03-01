---
layout: default
title: 3. Printed Files
nav_order: 30
has_toc: false
parent: Mercury One.1 EVA
grand_parent: Manual
permalink: /manual/build/mercury_eva/printed_files
img_instr: ../../../assets/images/instructions
js_path: ../../../scripts
---

# Mercury One.1 EVA - Printing Files
{: .no_toc }

There are two methods of getting the files. One of them is to use the [configurators](#-mercury-one1-configurator) at the bottom of the page. We have two [configurators](#-mercury-one1-configurator) on this page: one is for your tool head ([Eva 2.4](#-eva-24-toolhead-configurator)), the other for the [Mercury 1.1](#-mercury-one1-configurator) motion system.

If you want to download everything manually, scroll down. You'll be able to download each file separately.

1. Table of content
{:toc}

Click the <i class="bi bi-zoom-in"></i> image to enlarge.

## Downloading STL Files

{: .important}
These files are **experimental**! You may be throwing parts away, we're constantly improving our models it's likely these files are not final.

## Print settings

Click [here](/standard/print/settings){:target="_blank"} to see the recommended print settings. 

*Yes, you have too use the settings…*

{: .note }
All of our parts have been designed to be printed with these settings. When you deviate from these settings, this will **negatively** affect your **print quality**, **strength** and cause you to **lose printed features**.

### How to print ABS

Click [here](/manual/print/abs){:target="_blank"} to see the how to print abs.

<!-- Configurator Mercury One.1 -->
# <i class="bi bi-gear"></i> Mercury One.1 Configurator

The configurator has been developed to generate a Zip file. The zip file will contain all the Stl files for your Mercury One.1. The files you receive from our website are made by us.
{: .fs-4 .fw-300 }

<div class="code-example" markdown="1">

<form action="post">

Z-Adapters*
<select class="list_dark" name="zadapter" id="zadapter">
    <option value="option0">Select</option>

</select><br>

Toothed idler*
<select class="list_dark" name="tidler" id="tidler">
    <option value="option0">Select</option>

</select><br>

Tension plate* 
<select class="list_dark" name="tensionplate" id="tensionplate">
    <option value="option0">Select</option>

</select><br>

<div class="fs-3 fw-300">*Tapped, you must tap threads into an extrusion. T-nut uses two m5 bolts that connect to T-nuts.</div>

<p class="fs-3 fw-300">Double check your selected values before clicking the button below..</p>

<button class="btn" onclick="zipAndDownload(getDocumentList('Mercury'), '../../../assets/stl/m1_1/' ,'Mercury');" type="submit"><i class="bi bi-cloud-arrow-down"></i> Get Files!</button>

</form>
</div>

<!-- End configurator Mercury One.1 -->

<!-- Configurators EVA 2.4 -->

# <i class="bi bi-gear"></i> EVA 2.4 Toolhead Configurator

The configurator has been developed to generate a Zip file. The zip file will contain all the Stl files for your print head. The files you receive from our website are made by us to fit the Mercury 1.1 or by Paweł Kucmus of EVA. You can find more information about EVA on their website [https://2.eva-3d.page/](https://2.eva-3d.page/){:target="_blank"}.
{: .fs-4 .fw-300 }


<script src="{{page.js_path}}/file-saver.js" type="module"></script>
<script src="{{page.js_path}}/configurator_m1_1.js"></script>
<script src="{{page.js_path}}/jszip.min.js" type="module"></script>

<div class="code-example" markdown="1">

<form action="post">

Hotend* 
<select class="list_dark" name="hotend" id="hotend">
    <option value="option0">Select</option>

</select><br>

Extruder* 
<select class="list_dark" name="extruder" id="extruder">
    <option value="option0">Select</option>

</select><br>

Probe* 
<select class="list_dark" name="probe" id="probe">
    <option value="option0">Select</option>

</select><br>

<p class="fs-3 fw-300">Double check your selected values before clicking the button below..</p>

<button class="btn" onclick="zipAndDownload(getDocumentList('Eva'), '../../../assets/stl/eva2_4/', 'Eva');" type="submit"><i class="bi bi-cloud-arrow-down"></i> Get Files!</button>

</form>

<script>
    window.addEventListener('load', function(event) {
        loadDataSet();
    });
</script>

</div>

<i class="bi bi-chat-square-text"></i> Special thanks to @KaizenKody#9426 for helping us create this amazing configurator.
{: .fs-3 .fw-300 }


<!-- End configurator EVA 2.4 -->

{: style="text-align: center" }
<span class="fs-8">
[Next step &rarr;](/manual/build/mercury_eva/empty_frame){: .btn .btn-red }
</span>

{% include license_agreement.md %}