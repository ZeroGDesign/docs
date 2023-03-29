---
layout: default
title: 2. Printed Files
nav_order: 2
has_toc: true
parent: Electronics Enclosure
grand_parent: Manual
permalink: /manual/build/electronics_enclosure/printed_files
js_path: ../../../scripts
---

# Electronics Enclosure - Printed Files
{: .no_toc }

There are two ways to get the files: one is to use the [configurator](#electronics-enclosure-configurator), and the other is to download everything manually by clicking [here](https://github.com/ZeroGDesign/docs/tree/gh-pages/docs/assets/stl/electronics_enclosure){:target="_blank"}.

* Table of content
{:toc}

## Print settings

For the recommended settings when printing our parts, please click [here](/standard/print/settings){:target="_blank"}. Deviating from these settings may result in lower quality prints, loss of features, and improper alignment.

# Downloading STL Files

To get the files you need, you have two options: you can either download them all at once using the [configurator tool below](#electronics-enclosure-configurator), or you can download them individually from our Github page by clicking [here](https://github.com/ZeroGDesign/docs/tree/gh-pages/docs/assets/stl/electronics_enclosure){:target="_blank"}. Enjoy!

<!-- Configurator Hydra -->

## Electronics Enclosure Configurator

Our configurator tool creates a handy Zip file for you, which includes all the Stl files needed for your ZeroG Electronics Enclosure setup. Rest assured that the files are created by us and are licensed under [CC BY-NC-SA 4.0 International License](http://creativecommons.org/licenses/by-nc-sa/4.0/). Enjoy!
{: .fs-4 .fw-300 }


<script src="{{page.js_path}}/file-saver.js" type="module"></script>
<script src="{{page.js_path}}/configurator_electronics.js"></script>
<script src="{{page.js_path}}/jszip.min.js" type="module"></script>
<div class="code-example" markdown="1">

<form action="post">

Select Printer* 
<select class="list_dark" name="printerSize" id="printerSize">
    <option value="option0">Select</option>

</select><br>
<div class="fs-3 fw-300">If you select a printer, it will automatically include the skirt files.</div>

Select Feet Type* 
<select class="list_dark" name="feet" id="feet">
    <option value="option0">Select</option>

</select><br>
<div class="fs-3 fw-300">Don't forget to select the 'feet' option if you plan on printing the skirt.</div>

Select IEC Inlet* 
<select class="list_dark" name="iec" id="iec">
    <option value="option0">Select</option>
</select><br>
<div class="fs-3 fw-300">*Switched, is the inlet that has a powerswitch build in.</div>

Select PSU* 
<select class="list_dark" name="psu" id="psu">
    <option value="option0">Select</option>

</select><br>

Select Secondary PSU* 
<select class="list_dark" name="second_psu" id="second_psu">
    <option value="option0">Select</option>

</select><br>
<div class="fs-3 fw-300">Mostly used for the Raspberry.</div>

Select Motherboard* 
<select class="list_dark" name="motherboard" id="motherboard">
    <option value="option0">Select</option>

</select><br>
<div class="fs-3 fw-300">We recommend the Spider 2.3 or Octopus.</div>

Select Raspberry Mount* 
<select class="list_dark" name="raspberry_mount" id="raspberry_mount">
    <option value="option0">Select</option>

</select><br>

<p class="fs-3 fw-300">Double check your selected values before clicking the button below..</p>


<button class="btn" onclick="zipAndDownload(getDocumentList('electronics_enclosure'), '../../../assets/stl/electronics_enclosure/', 'electronics_enclosure');" type="submit"><i class="bi bi-cloud-arrow-down"></i> Get Files!</button>

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

{: style="text-align: center" }
<span class="fs-8">
[Next step &rarr;](#){: .btn .btn-red }
</span>

{% include license_agreement.md %}