---
layout: default
title: 3. Files
nav_order: 30
has_toc: false
parent: Hydra
grand_parent: Manual
permalink: /manual/build/hydra/printed_files
img_instr: ../../../assets/images/instructions
js_path: ../../../scripts
---
# Hydra - Files
{: .no_toc }

There are two ways to get the files: one is to use the [configurator](#-hydra-configurator), and the other is to download everything manually by clicking [here](https://github.com/ZeroGDesign/docs/tree/gh-pages/docs/assets/stl/hydra){:target="_blank"}.

* Table of content
{:toc}

## Print settings

For the recommended settings when printing our parts, please click [here](/standard/print/settings){:target="_blank"}. Deviating from these settings may result in lower quality prints, loss of features, and improper alignment.

## Step Files

You can now download the step files for our Mercury One.1! Select the appropriate size for your 3D printer:

* <a href="../../../assets/stl/hydra/Hydra_5pro.stp" download >Ender 5 (pro) Size - <b>Hydra_5pro.stp</b></a>
* <a href="../../../assets/stl/hydra/Hydra_5Plus.stp" download >Ender 5 Plus Size - <b>Hydra_5Plus.stp</b></a>

Simply click on the desired link and start creating your masterpiece with ease.

## Downloading STL Files

To get the files you need, you have two options: you can either download them all at once using the [configurator tool below](#-hydra-configurator), or you can download them individually from our Github page by clicking [here](https://github.com/ZeroGDesign/docs/tree/gh-pages/docs/assets/stl/hydra){:target="_blank"}. Enjoy!

<!-- Configurator Hydra -->

## Hydra Configurator

Our configurator tool creates a handy Zip file for you, which includes all the Stl files needed for your ZeroG Hydra setup. Rest assured that the files are created by us and are licensed under [CC BY-NC-SA 4.0 International License](http://creativecommons.org/licenses/by-nc-sa/4.0/). Enjoy!
{: .fs-4 .fw-300 }

<script src="{{page.js_path}}/file-saver.js" type="module"></script>
<script src="{{page.js_path}}/configurator_hydra.js"></script>
<script src="{{page.js_path}}/jszip.min.js" type="module"></script>
<div class="code-example" markdown="1">

<form action="post">

Magnet Size* 
<select class="list_dark" name="magnet" id="magnet">
    <option value="option0">Select</option>

</select><br/>

Minitank Size* 
<select class="list_dark" name="carriage" id="carriage">
    <option value="option0">Select</option>

</select><br/>

Ziptie Mounts* 
<select class="list_dark" name="ziptie" id="ziptie">
    <option value="option0">Select</option>

</select><br/>
<p class="fs-2 fw-300">Ziptie mounts are optional for cable management, allowing for easy attachment of wires to the back of the extrusion.</p>

Wago Mount* 
<select class="list_dark" name="wago" id="wago">
    <option value="option0">Select</option>

</select><br/>

<p class="fs-3 fw-300">Double check your selected values before clicking the button below..</p>

<button class="btn" onclick="zipAndDownload(getDocumentList('Hydra'), '../../../assets/stl/hydra/', 'Hydra');" type="submit"><i class="bi bi-cloud-arrow-down"></i> Get Files!</button>

<div class="status_text" id="progressStats"></div>

</form>

<script>
    window.addEventListener('load', function(event) {
        loadDataSet();
    });
</script>

</div>

<i class="bi bi-chat-square-text"></i> Special thanks to @KaizenKody#9426 for helping us create this amazing configurator.
{: .fs-1 .fw-300 }

<!-- End configurator EVA 2.4 -->

{: style="text-align: center" .fs-8 }
[Next step &rarr;](/manual/build/hydra/heated_bed_drawing){: .btn .btn-red }

{% include license_agreement.md %}
