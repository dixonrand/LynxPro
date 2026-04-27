# Lynx 360 Display QSG

**Title:** Lynx 360 Display QSG
**Slug:** `lynx-360-display-qsg`
**Category:** Lynx-Sold Scoreboards and Displays › QSGs
**Type:** qsg
**Source URL:** https://finishlynx.com/wp-content/uploads/2023/09/Lynx_360_Display_QSG.pdf
**Use:** Refer to this for Lynx 360 Display setup and operation.

---

LYNX SYSTEM DEVELOPERS, INC.


                                    Lynx 360 Display
                                             Quick Start Guide
Items Not Included
Computer running FinishLynx (requires NCP plug-in) or FieldLynx (requires Scoreboard plug-in) on Microsoft
Windows. ResulTV is also required.

Introduction
The following guide will walk you through the setup, configuration, and operations of the display. If at any point
you need additional help, please contact Technical Support: support@finishlynx.com.

Setup
Follow the steps defined in the following documents available on the USB drive provided with your order or
online:
1. Lynx 360 Display – Basic Setup Video
2. 360_LED_Display_Electrical_QSG (see Download section)

ResulTV
1. Go to File | Options… | General tab:
       a. Profile:
                 • Video-360 (single) for the 1-tier build
                 • Video-360 (double) for the 2-tier build
       b. Click Ok.
       c. Exit and restart ResulTV.

FieldLynx
1. Click the Options gear button.
2. Click New to create a new scoreboard object or select an existing scoreboard object to edit it.
3. Result Scripts
       o Metric: ResulTV_Video_results-360.lss
       o English: ResulTV_Video_results-360.lss
       o Standings: ResulTV_Video_standings-360.lss
4. Serial: network (connect)
       o Port number: 1024
       o IP Address: (IP address of the ResulTV PC)
5. After entering these settings, restart the software to confirm that the scoreboard script is running.

FinishLynx
1. Go to Scoreboard | Options…
2. Click New.
3. Serial Port: Network(connect)
       a. Port: 1024
       b. IP address: address of the ResulTV PC.
4. Script: ResulTV_Video_1line-360.lss
5. Running Time: Normal
6. Results: Auto
7. Click Ok and restart FinishLynx.

www.facebook.com/finishlynx                                                                      www.finishlynx.com
