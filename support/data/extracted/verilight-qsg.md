# VeriLight QSG

**Title:** VeriLight QSG
**Slug:** `verilight-qsg`
**Category:** Lynx-Sold Scoreboards and Displays › QSGs
**Type:** qsg
**Source URL:** https://finishlynx.com/wp-content/uploads/2024/01/VeriLight_QSG.pdf
**Use:** Refer to this for VeriLight false start light system setup and operation.

---

LYNX SYSTEM DEVELOPERS, INC.


                                               VeriLight
                                             Quick Start Guide
                    Verify that your VeriLight system contains the components pictured below.

                   If not, or if you need additional help, please call: USA 978 556 9780 or email
                                               support@finishlynx.com.

      Item              Description            ID                        Item                 Description          ID


                                                                                              (optional)
                         VeriLight                                                          Power Injector
                                             VLight                                                            IDL-PoE
                                                                                             for Power-
                                                                                            over-Ethernet



                                                                                              (optional)
                         (optional)
                                                                                             Power-over-
                       10’ (3 meter)       C10BT-10                                                          Included with
                                                                                               Ethernet
                      100’ (30 meter)      C10BT-100                                                           IDL-PoE
                                                                                            Power Supply
                      Ethernet Cable
                                                                                              Connector



Items Not Included
  •   Windows PC running one of the following software:
                   o FinishLynx with Network ComPort (NCP) plug-in, or
                   o FieldLynx with Scoreboard plug-in, or
                   o FieldLynx Lite
  •   (Recommended) PoE+ Gigabit Hub/Switch

Introduction
The following guide will walk you through the VeriLight setup, configuration, and operations to be used as a foul
indicator light with VeriLynx or FieldLynx, or as a Ready to Start light with FinishLynx.
      •   FinishLynx version 12.21 or later is required.
      •   VeriLight default IP = 192.168.0.99 (port 10000)
      •   VeriLight default password = Lynx

Hardware Setup
a. Place the VeriLight on the ground in a location where it will be seen by officials, athletes and/or spectators.
b. Plug the Power-over-Ethernet power supply into the power source or UPS battery backup.
c. Connect an Ethernet cable from the PC to the Hub/Switch or the In port of the VeriLight power supply.
d. Connect a long Ethernet cable to the RJ45 port on the back of the VeriLight (requires Philips screwdriver to
   open panel) and either the Hub/Switch or the Out port on the VeriLight power supply.

NOTE: VeriLight gets Power-over-Ethernet (POE). The power supply is not required if used with a PoE+
switch.
www.facebook.com/finishlynx                                                                     www.finishlynx.com
                                                                                                         VeriLight
                                                                                                Quick Start Guide

VeriLynx
1. In FinishLynx, go to File | Options… | General tab:
2. Set the Profile = VeriLynx
3. Click Ok.
4. Exit and restart FinishLynx.
5. Click VeriLight | Foul (Toggle On/Off) or Alt-F to toggle RED/OFF.
6. Click VeriLight | Valid (Toggle On/Off) or Alt-V to toggle GREEN/OFF.


NOTE: Go to VeriLight | Options… to modify settings. See the VeriLynx QSG for additional information on the
operations of VeriLynx.

FinishLynx - Ready to Start
1. In FinishLynx, go to Scoreboard | Options…            8. Hold Ctrl+Shift and click File | Options…
2. Click New.                                            9. Expand +Scoreboard
3. Script: VeriLight_Ready.lss                           10. Expand +[#] for the VeriLight object
4. Serial Port: Network(connect)                         11. Select TCPEchoBytes
       a. Port: 10000                                    12. Set the Value = 0.
       b. IP address: 192.168.0.99                       13. Click Ok and restart FinishLynx.
5. Running Time: Normal
6. Results: Off
7. Click Ok and restart FinishLynx.
VeriLight will now operate automatically based on the status of the current event:
     1. Event Armed (ready to start) = flash GREEN
     2. Event Running = OFF
     3. Event Finished (requires photoeye break) = solid RED

FieldLynx (or FieldLynx Lite)
1.   In FieldLynx, go to Options|Preferences… and click the Scoreboard tab.
2.   Click New.
3.   Script: VeriLight.lss
4.   Serial Port: Network(connect)
          a. Port: 10000
          b. IP address: 192.168.0.99
5.   Click the Advanced button and uncheck both boxes.
6.   Click Ok and restart FieldLynx.
7.   Hit Alt-M for a valid mark to toggle GREEN/OFF. Note: Message dialog must be empty.
8.   Hit the X to enter a foul. VeriLight will turn RED with the next scoreboard update.
9.   Hit Alt-I to initialize VeriLight and turn OFF.

Advanced – IP Configuration
1.   Open a web browser and go to 192.168.0.99 (Factory default = 192.168.10.1).
2.   Password = Lynx
3.   Click on Network Setup (under Communication Setup in the left banner).
4.   Set the preferred IP address and click Set.




www.facebook.com/finishlynx                                                                 www.finishlynx.com
