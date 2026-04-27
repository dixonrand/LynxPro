# ResulTV-VDM QSG

**Title:** ResulTV-VDM QSG
**Slug:** `resultv-vdm-qsg`
**Category:** Lynx-Sold Software › QSGs
**Type:** qsg
**Source URL:** https://finishlynx.com/wp-content/uploads/2012/08/ResulTV-VDM_QSG.pdf
**Use:** Refer to this for initial ResulTV-VDM scoreboard display setup.

---

Lynx System Developers, Inc.


                                             ResulTV-VDM
                                               Quick Start Guide

Introduction
This guide explains how to install and configure ResulTV-VDM to get started displaying data. Before you begin, you will
need the following items:
    •   Lynx Startup Flash Drive or access to the Lynx website (www.finishlynx.com)
    •   ResulTV-VDM license number – available by contacting Lynx
    •   USB hardware dongle (green) – also available by contacting Lynx
    •   A computer with USB and Ethernet ports running Microsoft Windows

Install ResulTV-VDM
You can install the ResulTV-VDM software either from the Lynx startup flash drive or download it from the Lynx
website: www.finishlynx.com/product/software/resultv-display-software
1. Double-click the ResulTV-VDM installer and begin installation.
2. Follow the instructions on the screen to continue installation.
3. Enter your ResulTV-VDM license number when prompted.
4. Click Install.
5. When the Security Key Installation dialog appears, click to select
   KEYLOK 2 (USB w/Driver) and Standalone.
        a. DO NOT connect the USB Dongle to the computer yet.
6. Click Begin Install and wait until the Security Key Installation is
   complete.

NOTE: The hardware dongle must be attached to the ResulTV
computer at all times or the ResulTV software is disabled.



Configure ResulTV-VDM to Receive Data
1. Start ResulTV-VDM by double-clicking the ResulTV-VDM shortcut.
2. ResulTV-VDM is pre-configured to receive video display data on port 1024.

NOTE: For the Lynx 360 Display, go to File | Options… | General and select the Video-360 (single/double) profile.
Then restart ResulTV-VDM.

Configure FinishLynx to Send Data
1. Run FinishLynx.                                              8. Set Running Time = Normal.
2. Click Scoreboard | Options… from the Menu bar.               9. Set Results = Auto and Size = 1, and then click Ok.
   The Options dialog appears.                                  10. Close and restart FinishLynx.
3. Click the New button to create a new scoreboard              11. Click File | Open… from the Menu bar and double-
   source.                                                          click Boys3000.evn.
4. From Script: drop-down list, select                          12. The results now appear on the ResulTV-VDM display
   ResulTV_Video_1line.lss                                          window.
5. Select Network (connect) from the Serial Port:
   drop-down list.
6. Enter the same Port number (1024).
7. In the IP Address field type the IP Address of the
   ResulTV-VDM computer.
   Lynx System Developers, Inc.       179 Ward Hill Ave., Haverhill, MA 01835 USA                  Tel: 978.556.9780
   www.finishlynx.com                          Toll Free: 800.989.5969                             Fax: 978.556.9781
