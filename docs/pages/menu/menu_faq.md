---
layout: default
title: FAQ
nav_order: 5
has_toc: true
has_children: false
permalink: /faq
---

# Frequently Asked Questions
{: .no_toc }

If you're looking for an answer and it's not in here, hit us up on [Discord](https://discord.gg/zerog){:target="_blank"} we might to add it.

The FAQ are sorted and listed in the Table of content.

1. Table of content
{:toc}

---

# Projects

## What is Mercury One/ Mercury One.1?

Mercury one is an open source community project. It is a Corexy based motion system, 3D printer. It is based off of the Ender 5 ecosystem, meaning it is adaptable to any of the Ender 5 frames.

It is developed and maintained by enthusiasts in their free time. No one is getting paid for any of their work. 

### What kind of speeds can I expect?

The answer to this question boils down to how much time you intend on tuning your printer. We’ve seen stock speeds of 60mm/s with 300mm/s^2 acceleration, all the way up to 450mm/s with 40k accel with quality prints.

### How much does this cost?

At the minimum, estimated cost is $280 depending on how you source parts. It can be more depending on what kind of things you decide to order for your specific build.

### Is there a kit available or should I self source?

There are multiple kits available, check out the [BOM](https://bom.zerog.one){:target="_blank"}. All items can be sourced from Aliexpress or Amazon. Choose which works best for you.

---

# I’m slightly intimidated by everything going on here, where do I start?

Hop into our discord and explore. Feel free to ask any and everything about the Merc or printers in general, I promise, you’ll like it here.

---

# Printing 

## What are the recommended print settings?

The parts are designed with these setting and materials in mind, they account for the appropriate shrinkages. Other materials may or may not work, however are also not recommended.

[Click here](/standard/print/settings) to view the print settings.

## What material should I use?

ABS or ASA! This kit is designed with these two materials in mind. This is because they have high heat deflection, the right amount of strength, and flexibility (or lack of).

Other materials can be used, however are not recommended. 

## I don’t have an enclosure to print these parts…

Check out the PIF (Print it Forward) channels in the [Discord](https://discord.gg/zerog){:target="_blank"} **- OR -** do the cardboard box method. Boxes are cheap, but your prints don’t have to look that way.

Should you try any method that heats the area that the printer is in, it is advisable to print extra hotend parts. PLA and PETG will deform at the ambiance that ABS/ASA requires!

## What infill pattern should I use?

Adaptive Cubic, grid, gyroid, honeycomb, triangular or cubic

## Is there a specific slicer I should be using?

The one you’re most comfortable with! If you’re not partial to any one slicer, a lot of us are using Super Slicer. 

---

# Stepper motors

## What stepper motors?

There are a few listed in the BOM. They will all work just fine, those particular models were tested and confirmed to work.

> *“Stepper motors are like shoes, bigger isn’t better, it’s all about the right fit for your project.“ - Discord User @1ockdown*

As a general rule of thumb for the Mercury project, 2A/2.5A motors are the perfect fit for 90% of users. *The other 10% of users will know their use case, which would be high voltage motors.*


## Are my stepper motors wired right?

Wouldn’t you think they came wired correctly? This isn’t always the case. Checking the correct wire order of your stepper motor is a **critical step**.

> {: .warn }
Should the motor be wired incorrectly, **you may damage it**.

You should take the proper care to refer to the schematic/data sheet of your specific motor. This can be done by finding your motor’s model number and typing that into Google. 
     
For example “17HS08-1004s data sheet”, clicking on the first Google result will give you a document with an image of the motor as well as some varying statistics.

For the example data sheet provided above, you will want to look at the right lower corner for the circle with some squiggly lines. The squiggly lines labeled with letters, that are connected to each other make a pair.

Those wires will go next to each other according to the included chart. BLK, GRN, RED, BLU, In that order. Now if your wire lead is RED, GRN, BLK, BLU, you should de-pin BLK, and RED and swap them accordingly. And this will net you your correct order!

## What current do I set for my motors?

> {: .note }
This is applicable to Klipper. 

Quick explanation of current setting on TMC drivers. the value you put in should be the RMS value. Not the peak value that is written on the stepper.

The calculation of RMS from peak current is this:

> `Motor_Peak_Current * 0.707`

 Since we don't want to push the motors with 100% we'll do:
> `Motor_Peak_Current * 0.707 * 0.80`

 That will give us a 20% safety margin. On a stock Ender 3 motor that is 0.84A peak
> `0.84*0.707*0.8 = 0.47A`

 So you input 0.47 in run_current of your TMC stepper. A normal 1.4A stepper is:
> `1.4x0.707x0.8 = 0.79A`

In this case you put 0.79 in run_current of your tmc stepper.

---

# Other questions

## What mainboard should I use?

The one most easily accessible to you and your build. You can utilize the stock main board. However if you wish to take on a project like Hydra or multi material extrusion, you may want to consider something with more drivers.

## Do I need a new hotend?

No! There are a few recommended ones, but the stock one will work fine.

## What is M1.1 vs M1?

The Mercury One is a published and finished project. The Zero G group moved on to developing the Mercury One.1 which is currently in beta. It’s files are currently available to download via a link on the discord server. .step files will not be released until the M1.1 is finished and published.

They're very similar, the main difference is the support for the print head.
The One.1 also uses smaller stepper towers and front towers to safe plastic.
* The Mercury One supports the Voron Afterburner.
* The Mercury One.1 supports the EVA carriage platform & the Voron Stealthburner.

## Do I need klipper?

No, but it is highly recommended. It flexibility and ease of use with Mainsail/Fluidd interface options make using your printer much more enjoyable.

## What the heck is a BOM?

A Bill of Materials. It lists everything you need in order to complete your build.

## What toolhead should I use?

Mercury One currently supports Afterburner and Stealthburner toolheads. M1.1 currently utilizes the EVA platform.

## What is Corexy?

Corexy is a motion system. Mercury One is not the only printer to utilize Corexy. There are a few variations of Corexy, where the belts are arranged a bit different. Mercury One utilizes a stacked belt system.

## Where is the best place to find up to date info?

You found it! [The ZeroG Docs](/).

## Grease, oil, lube?

Good question. There are a few highlights such as EP2 grease, or something like a gun oil. There are a few great videos out there that should help you make your decision.

## Is there anywhere I can actively engage and ask questions?

The [Discord](https://discord.gg/zerog){:target="_blank"}! We don’t bite. Stop by whenever.