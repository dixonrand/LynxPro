# ResulTV QSG

**Title:** ResulTV QSG
**Slug:** `resultv-qsg`
**Category:** Lynx-Sold Software › QSGs
**Type:** qsg
**Source URL:** https://finishlynx.com/wp-content/uploads/2023/05/ResulTV_QSG.pdf
**Use:** Refer to this for initial ResulTV scoreboard display setup.

---

Lynx System Developers, Inc.


                                                    ResulTV
                                               Quick Start Guide
Introduction
This guide explains how to install and configure ResulTVTM to get started displaying data. Before you begin, you will
need the following items:
    •   Lynx Startup Flash Drive or access to the Lynx website (www.finishlynx.com)
    •   ResulTV license number – available by contacting Lynx
    •   USB hardware dongle (green) – also available by contacting Lynx
    •   A computer with USB and Ethernet ports running Microsoft Windows
Install ResulTV
You can install the ResulTV software either from the Lynx       NOTE: The hardware dongle must be attached to the
startup flash drive or download it from the Lynx website:       ResulTV computer at all times or the ResulTV software is
www.finishlynx.com/product/software/resultv-display-            disabled.
software
1. Double-click the ResulTV installer and begin
    installation.
2. Follow the instructions on the screen to continue
    installation.
3. Enter your ResulTV license number when prompted.
4. Click Install.
5. When the Security Key Installation dialog appears,
    click to select KEYLOK 2 (USB w/Driver) and
    Standalone.
    a. DO NOT connect the USB Dongle to the computer
         yet.
6. Click Begin Install and wait until the Security Key
    Installation is complete.

Configure ResulTV to Receive Data
1. Start ResulTV by double-clicking the ResulTV                 5. From the Serial Port: drop-down list, select Network
   shortcut.                                                       (listen).
2. Click File | Options… from the Menu bar. The                 6. Enter Port 1024.
   Options dialog appears.                                      7. Click Ok.
3. Go to the Sources tab.                                       8. Click File | Open… from the Menu bar and double-
4. From the Script: drop-down list, select Video                   click Video Display.rtv.
   Display.rss.

Configure FinishLynx to Send Data
1. Run FinishLynx.                                              7. In the IP Address field type the IP Address of the
2. Click Scoreboard | Options… from the Menu bar.                   ResulTV computer.
   The Options dialog appears.                                  8. Set Running Time = Normal.
3. Click New to create a new scoreboard source.                 9. Set Results = Auto and Size = 1, and then click Ok.
4. From Script: drop-down list, select                          10. Close and restart FinishLynx.
   ResulTV_Video_1line.lss                                      11. Click File | Open… from the Menu bar and double-
5. Select Network (connect) from the Serial Port:                   click Boys3000.evn.
   drop-down list.                                              12. The results now appear on the ResulTV display
6. Type the same Port number (1024) you assigned to                 window.
   the ResulTV Source.
   Lynx System Developers, Inc.       179 Ward Hill Ave., Haverhill, MA 01835 USA                   Tel: 978.556.9780
   www.finishlynx.com                          Toll Free: 800.989.5969                              Fax: 978.556.9781
