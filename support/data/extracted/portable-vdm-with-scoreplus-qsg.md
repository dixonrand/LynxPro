# Portable-VDM with ScorePlus QSG

**Title:** Portable-VDM with ScorePlus QSG
**Slug:** `portable-vdm-with-scoreplus-qsg`
**Category:** Lynx-Sold Scoreboards and Displays › QSGs
**Type:** qsg
**Source URL:** https://finishlynx.com/wp-content/uploads/2024/03/Portable-VDM_QSG.pdf
**Use:** Refer to this for Portable-VDM setup with ScorePlus software.

---

Lynx System Developers, Inc.


                                   Portable-VDM with ScorePlus
                                                   Quick Start Guide

Please verify that your Portable-VDM package contains all the components pictured here. If something is missing, or if
you have questions about setting up your system after following this quick start guide, call: 1-800-989-5969. For
additional tech support documents and downloads, visit www.finishlynx.com/support/

                     Item               Description                        Item              Description

                                                                                        DC 12V/6000mAh Li-ion
                                   Weatherproof connection                               Battery Pack with wall
                                            box                                           charger and power
                                                                                                 splitter


                                                                                            PLUS add-on:
                                    Windows MiniPC with
                                                                                        AirLynx Lite (Optional)
                                      ResulTV-VDM &
                                        ScorePlus                                       With Ethernet and USB
                                                                                                cable



Items Not Included
•    LED Video Display and HDMI cable
•    Additional networking hardware, such as Ethernet cables, network switch or access point
•    FinishLynx NCP or FieldLynx Scoreboard plug-ins

Introduction
This guide explains how to connect the Portable-VDM hardware and configure the ResulTV-VDM & ScorePlus software
to get started displaying data on your Lynx LED Video display.

Connect Portable-VDM to your Lynx Network
The Windows MiniPC comes pre-configured with the following network settings:
     •   Wired Ethernet
             IP Address = 192.168.0.70 (check label on device to confirm)
     •   WiFi
             IP Address = 192.168.0.71 (check label on device to confirm)
             Network name (SSID) = Lynx [no password]
     •   Port
             Portable-VDM is configured to Network (listen) on port 1024.

To connect Portable-VDM to the Lynx Network, either connect an Ethernet cable to the Ethernet port on the MiniPC,
setup AirLynx or configure a WiFi network with Lynx as the SSID. See Advanced Settings section to change defaults.

AirLynx Lite Optional add-on:
If your order includes the AirLynx Lite add-on, you will be able to connect your Lynx PC (running FieldLynx or
LynxPad) directly to Portable-VDM without additional wireless infrastructure. AirLynx Lite is pre-configured with the IP
address of 192.168.0.35 and uses the Lynx SSID.


    Lynx System Developers, Inc.          179 Ward Hill Ave., Haverhill, MA 01835 USA                      Tel: 978.556.9780
    www.finishlynx.com                             Toll Free: 800.989.5969                                 Fax: 978.556.9781
                                               Portable-VDM
                                                    Quick Start Guide



Turn Portable-VDM ON/OFF
1. To turn on Portable-VDM, simply toggle the power              2. To turn off Portable-VDM, first press and hold the
   switch on the battery pack. Start up will take a few             power button on the Windows MiniPC to shutdown
   minutes.                                                         correctly. Then toggle off the power switch on the
                                                                    battery pack.




Charging Portable-VDM
To charge Portable-VDM battery pack, simply plug the wall charger into a standard 110/240VAC outlet. The LED light
bar will show when the battery is fully charged and ready for 10+ hours of continuous usage.

Configure FinishLynx to Send Data
1. Run FinishLynx.                                               5. Select Network (connect) from the Serial Port:
2. Click Scoreboard | Options… from the Menu bar.                    drop-down list.
   The Options dialog appears.                                   6. Enter the same Port number (1024).
3. Click the New button to create a new scoreboard               7. In the IP Address field type the IP Address of the
   source.                                                           Portable-VDM computer.
4. From      Script:    drop-down     list,  select              8. Set Running Time = Normal.
   ResulTV_Video_1line.lss                                       9. Set Results = Auto and Size = 1, and then click Ok.
                                                                 10. Close and restart FinishLynx.

Configure FieldLynx to Send Data
1. Run FieldLynx or FieldLynx Lite.                              6. From Standings Scripts: drop-down lists, select
2. Click Options | Preferences… from the Menu bar.                   ResulTV_Video_standings.lss
   The Options dialog appears.                                   7. Select Network (connect) from the Serial Port:
3. Select the Scoreboard tab (requires the FieldLynx                 drop-down list.
   Scoreboard plug-in)                                           8. Enter the same Port number (1024).
4. Click the New button to create a new scoreboard               9. In the IP Address field type the IP Address of the
   source.                                                           Portable-VDM computer.
5. From Results Scripts: (metric/English) drop-down              10. Close and restart FieldLynx.
   lists, select ResulTV_Video_results.lss

Advanced Settings
Remote Desktop is available to connect to the Windows MiniPC from another PC on the network. This can be useful to
change the IP address, for example.
To connect to the Portable-VDM MiniPC using Remote Desktop, enter the MiniPC’s IP address. The username is “Lynx”
and the password is <blank>.
The AirLynx Lite mini router can also be configured using a web browser. Enter the device’s IP address in the address
bar. The username is “Lynx” and the password is “Lynx123!”.
   Lynx System Developers, Inc.       179 Ward Hill Ave., Haverhill, MA 01835 USA                   Tel: 978.556.9780
   www.finishlynx.com                          Toll Free: 800.989.5969                              Fax: 978.556.9781
                                                 Portable-VDM
                                                       Quick Start Guide



Configure ScorePlus
1.    Connect your mobile phone to the Lynx network (same as Portable-VDM).
2.    Scan the QR code that appears on your display.
3.    Select your Sport.
4.    Tap Operate.
5.    Control the clock (Start/Stop) and enter scores using the buttons on screen.




     Lynx System Developers, Inc.       179 Ward Hill Ave., Haverhill, MA 01835 USA   Tel: 978.556.9780
     www.finishlynx.com                          Toll Free: 800.989.5969              Fax: 978.556.9781
