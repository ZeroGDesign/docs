---
layout: default
title: 3. Printed Files
nav_order: 30
has_toc: false
parent: Hydra
grand_parent: Manual
permalink: /manual/build/hydra/printed_files
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

To get the files you need, you have two options: you can either download them all at once using the [configurator tool below](#-hydra-configurator), or you can download them individually from our Github page by clicking [here](../../../assets/stl/hydra/). Enjoy!

## Print settings

Click [here](/standard/print/settings){:target="_blank"} to see the recommended print settings. 

{: .note }
All of our parts have been designed to be printed with these settings. When you deviate from these settings, this will **negatively** affect your **print quality**, **strength** and cause you to **lose printed features**.

<!-- Configurator Hydra -->

# <i class="bi bi-gear"></i> Hydra Configurator

Our configurator tool creates a handy Zip file for you, which includes all the Stl files needed for your ZeroG Hydra setup. Rest assured that the files are created by us and are licensed under [CC BY-NC-SA 4.0 International License](http://creativecommons.org/licenses/by-nc-sa/4.0/). Enjoy!
{: .fs-4 .fw-300 }


<script src="{{page.js_path}}/file-saver.js" type="module"></script>
<script src="{{page.js_path}}/configurator_hydra.js"></script>
<script src="{{page.js_path}}/jszip.min.js" type="module"></script>

{: .important}
Attention space travelers! When you click the "Get Files!" button, the download may take a while depending on your internet speed. Unfortunately, we haven't yet programmed a download progress bar, but rest assured that the files are on their way to your intergalactic inbox!

<div class="code-example" markdown="1">

<form action="post">

Magnet Size* 
<select class="list_dark" name="magnet" id="magnet">
    <option value="option0">Select</option>

</select><br>

Minitank Size* 
<select class="list_dark" name="carriage" id="carriage">
    <option value="option0">Select</option>

</select><br>

Ziptie Mounts* 
<select class="list_dark" name="ziptie" id="ziptie">
    <option value="option0">Select</option>

</select><br>
<p class="fs-2 fw-300">Ziptie mounts are optional for cable management, allowing for easy attachment of wires to the back of the extrusion.</p>

Wago Mount* 
<select class="list_dark" name="wago" id="wago">
    <option value="option0">Select</option>

</select><br>

<p class="fs-3 fw-300">Double check your selected values before clicking the button below..</p>


<button class="btn" onclick="zipAndDownload(getDocumentList('Hydra'), '../../../assets/stl/hydra/', 'Hydra');" type="submit"><i class="bi bi-cloud-arrow-down"></i> Get Files!</button>

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
[Next step &rarr;](/manual/build/hydra/heated_bed_drawing){: .btn .btn-red }
</span>

{% include license_agreement.md %}