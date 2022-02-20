---
layout: default
title: Mainsail Theme
nav_order: 1
has_children: false
has_toc: true
parent: Klipper
permalink: /klipper/mainsail/theme
---

# ZeroG MainSail theme

On this page you will learn how to activate the ZeroG Mainsail theme, this theme will allow for auto updating.

{: .no_toc }

### Is it difficult to install? 

Not really, you need basic knowledge of SSH (Putty), below you'll find screenshots.

## Connect to SSH

Connect to your favorite SSH client, in my case PUTTY.

![putty](../../assets/images/howto/theme/step1.png)

SSH into your Raspberry, your local ip is most likely different to mine.

## Example SSH Client

This will look something like this

![putty_normal_view](../../assets/images/howto/theme/step2.png)


## SSH Commands

Copy the following command into your SSH client as shown below

```S
cd ~/
git clone https://github.com/ZeroGDesign/zerog-mainsail-theme.git
bash ~/zerog-mainsail-theme/install.sh
```

After copying and pasting it into your SSH client, you'll notice the following:

![putty_first_paste](../../assets/images/howto/theme/step3.png)

In our text input field we still have a line of code to run, press "ENTER" on your keyboard to run it.

![putty_second_paste](../../assets/images/howto/theme/step4.png)

If you read the text: "Theme has been installed, have fun!" then this part is complete.

## Machine Settings Mainsail

Open the webclient of your printer and look for the menu on the left, click on "Machine"

![machine_web](../../assets/images/howto/theme/step5.png)

## Config Files

Look for the file **moonraker.conf**. Once located, click the the text.

![config_files](../../assets/images/howto/theme/step6.png)

## Adding Update Script

Scroll down and locate the text **[update_manager]**.

![update_manager](../../assets/images/howto/theme/step7.png)

Once located add the following code below:

```S
[update_manager client ZeroGTheme]
type: git_repo
path: ~/zerog-mainsail-theme
origin: https://github.com/ZeroGDesign/zerog-mainsail-theme.git
install_script: /home/pi/zerog-mainsail-theme/install.sh
is_system_service: False
```

Now it should look something like this

![pasted_update_manager](../../assets/images/howto/theme/step8.png)


### Save & Restart

Click on **Save & Restart**

![save_restart](../../assets/images/howto/theme/step9.png)


### Restart Moonraker

A notification will appear that asks you to **try again**. Click this notification.

![try_again](../../assets/images/howto/theme/step10.png)

### Refresh your browser

Try to refresh your browser, it should show the ZeroG theme.

![refresh](../../assets/images/howto/theme/step11.png)

### Update manager

On the right you'll find the **Update Manager**, you'll notice that **ZeroGTheme** has been added.

This will allow you to grab the latest updates once we release them for the ZeroG Mainsail Theme.

![update_manager](../../assets/images/howto/theme/step12.png)


### Finished!

Enjoy your fresh ZeroG Theme.

![full_theme](../../assets/images/howto/theme/step13.png)