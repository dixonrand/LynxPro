# 1,2,3-Sided LED Video Infield Display QSG

**Title:** 1,2,3-Sided LED Video Infield Display QSG
**Slug:** `1-2-3-sided-led-video-infield-display-qsg`
**Category:** Lynx-Sold Scoreboards and Displays › QSGs
**Type:** qsg
**Source URL:** https://finishlynx.com/wp-content/uploads/2017/09/Lynx-Infield-Display_QSG.pdf
**Use:** Refer to this for setup of the Lynx 1,2,3-sided LED video infield display.

---

LYNX SYSTEM DEVELOPERS, INC.


                                      Lynx Infield Display
                                             Quick Start Guide
Items not included
Computer running FinishLynx or FieldLynx on Microsoft Windows. Either a Vision or VisionPRO camera with
Video Display Module (VDM) option or ResulTV is also required.



Introduction
The following guide will walk you through the setup, configuration, and operations of the display. If at any point
you need additional help, please contact Technical Support: support@finishlynx.com.



Setup
    Follow the steps defined in the following documents available on the USB drive provided with your order
1. FLD_DSPLY_#S Assembly Instructions
2. Installation of Foam Tape Instructions
3. 2-Sided _LED_Display_Electrical_QSG



Method 1-FinishLynx & VDM
1. Choose the Video Display Module (VDM) script that best suits your needs. There are several different
   scripts to choose from.
      a. See the VDM section of the FinishLynx Online Manual to learn how to:
              Send scoreboard data
              Send a photo-finish image
      b. Watch the FinishLynx Video Display Module Video (can be found on YouTube) to understand the full
         operation of VDM.
2. Configure your settings for the scoreboard in the
   FinishLynx program. Click Scoreboard | Options and
   click New to open the window to input this data.
3. Set the following:
        a. Serial Port: <Camera Name>(HDMI)
        b. Enter the correct Width/Height. This can be
           found on the USB drive (e.g. 416x208).
        c. Rotate: Off
        d. Running Time: Normal
        e. Results: Auto
        f. Size : 3.
4. After entering these settings, restart the software to
   confirm that the scoreboard script is running.




www.facebook.com/finishlynx                                                                      www.finishlynx.com
                                                                                          Lynx Portable Display
                                                                                                   Quick Start Guide

Method 2-FinishLynx or Fieldlynx, and ResulTV
ResulTV
1. Go to File|Options…|Source:
        a. Click New.
        b. Script: Video Display.rss
        c.   Serial Port: Network(listen)
        d. Port: 1950
        e. Click Ok.
        f.   Exit and restart ResulTV.
2. Go to File|Open… and open the 2x1_Video Display.rtv layout.
3. Go to Layout|Edit Object.
        a. Set the Width and Height on the Basic tab. This can be found on the USB drive (e.g. 416x208).
        b. Click Ok.
FinishLynx or FieldLynx
1. Go to Scoreboard|Options…
2. Click New.
3. Serial Port: Network(listen)
       a. Port: 1950
       b. IP address: address of the ResulTV PC.
FinishLynx
   Script: ResulTV_Video_1line.lss
   Running Time: Normal
   Results: Auto
FieldLynx
   Results Script
       o Metric: ResulTV_Video_Results.lss
       o English: ResulTV_Video_Results.lss
       o Standings: ResulTV_Video_Standings.lss

TIPS-FinishLynx          Operating the Scoreboard
1. There needs to be an active event for the running time to be displayed. Therefore, you will need to open up
   a new event.
2. To begin operating the scoreboard for an event, display running time by giving a start signal to the event.
3. To show your results from the race, stop the running time by pressing Alt+S, or Alt+F, when used with a
   photoeye.
            Photoeyes can be internal to the camera if you are using Automatic Capture Mode (ACM).
            The running time needs to be stopped to display your results on the screen. Both running time and
             results cannot be shown at the same time. Therefore, once the running time is stopped, the next
             evaluation will start the results scrolling.




www.facebook.com/finishlynx                                                                    www.finishlynx.com
