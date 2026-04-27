# MYLAPS Timing and Scoring QSG

**Title:** MYLAPS Timing and Scoring QSG
**Slug:** `mylaps-timing-and-scoring-qsg`
**Category:** Lynx-Sold Timing Accessories › QSGs
**Type:** qsg
**Source URL:** https://finishlynx.com/wp-content/uploads/2022/09/MYLAPS_TS_QSG.pdf
**Use:** Refer to this for MYLAPS timing and scoring integration with FinishLynx.

---

LYNX SYSTEM DEVELOPERS, INC.




      MYLAPS Timing & Scoring
                     FinishLynx LapTime Integration QSG
                                       Quick Start Guide (v1.00)

                                                           .

Introduction
The following guide will walk you through the configuration of FinishLynx and MYLAPS Timing & Scoring, to
allow the integration of laptime data into FinishLynx. If at any point you need additional help, please contact
Technical Support: support@finishlynx.com.



REQUIREMENTS
1. FinishLynx software (version 12.10 or newer):
        a. LapTime plug-in (www.finishlynx.com/product/finishlynx-plugins/lap-time/)
        b. Network COM Port plug-in (www.finishlynx.com/product/finishlynx-plugins/network-com-port/)
2. MYLAPS Timing & Scoring software:
        a. Login to the MYLAPS Partner Portal. You will have received an email to reset your password.
        b. Click on Support.
        c.   Scroll down and click on Timing & Scoring.
        d. Click to Download Timing #.#.# and Timing and Scoring manual.
        e. Install MYLAPS Timing.



Setup 1 Configure FinishLynx Options
1. Start FinishLynx.
2. Go to File | Options... | LapTime tab.
3. Click New to create a new LapTime device. See Figure 1 for recommended settings.
4. Go to File | Options... | Results tab.
5. Scroll through the fields and            enable the following:
        a. Cumulative Split Time
        b. Last Split Time
        c.   Laps
6. Go to File | Options... | Image tab.
7. Select a color for Show Lines: Splits.
8. Click Ok to close the Options dialog.



www.facebook.com/finishlynx                                                                     www.finishlynx.com
                                                                                  MYLAPS Timing & Scoring
                                                                                                     Quick Start Guide


9. Optional Settings
        a. Hold Ctrl+Shift and go to File|Options… to open the Other (Hidden) Settings.
        b. Expand +LapTime.
                 i. FillInTime: set value: 2 to have the laptimes fill the Time field on the last lap, even if an
                    EtherLynx camera is used.
                ii. IdMaxSize: for BibTags, set to 5 to remove the Group ID from tag encoding.
                iii. IdStripZeros: for BibTags, set to 1 (on) to remove leading zeros from tag encoding.
                iv. TotalLaps: set to total number splits (1 for single finish decoder). Can be changed in
                    Information Zone of each event.
                v. IntSyncMask: for BibTags, set to 2 (guns) if camera is not synced to GPS.




                                                     Figure 1




www.facebook.com/finishlynx                                                                   www.finishlynx.com
                                                                                 MYLAPS Timing & Scoring
                                                                                                    Quick Start Guide


Setup 2 Configure MYLAPS Timing & Scoring (Exporter)
1. Double-click the Timing 64 shortcut.
2. Login in using your MYLAPS Portal credentials.
3. Select Start a new event and click Ok. (Optional - Enter the Event name: and Start date)
4. Go to File|Preferences… and find the Usage and Sync box. Check the box to Create an “Allow all tags”
   import rule by default and click Ok.
5. Click the Add device button, select your decoder, and click Assign. (Optional – Enter a location name)
        a. Click the     icon on to the decoder line and select Load all data (Start from the beginning).
        b. Click the Play button on File 1.
6. Click the Add Exporter button and select TCP/IP Export.
        a. Click the cog wheel to configure the TCP/IP Export. See Figure 2 for recommended settings.
        NOTE – If Timing & Scoring is running on a different PC, enter the IP-Address of the FinishLynx PC.
7. Check the TCP/IP export box on the location banner.
8. Click the arrow and Connect. See Figure 3.




                                                    Figure 2




www.facebook.com/finishlynx                                                                   www.finishlynx.com
                                                                                     MYLAPS Timing & Scoring
                                                                                                        Quick Start Guide




                                                      Figure 3

Setup 4 Connection Status
1. FinishLynx will show LapTime: Received # in the status bar (bottom left) when connected to the MYLAPS
   application. When the connection is not established, LapTime: NOT CONNECTED will appear.


                     Connected:                          Not connected:



Setup 5 Synchronization
EtherLynx cameras with Internal GPS (recommended):
To sync a MYLAPS decoder with your EtherLynx camera when both devices are synced to GPS time, set the
LapTime|Options… Sync. Source = None.


Learn how to synchronize clock to GPS, to sync a MYLAPS BibTag decoder to GPS time,
Learn HOW TO USE INTERNAL GPS? to sync an EtherLynx camera with Internal GPS.


EtherLynx cameras without Internal GPS:
To sync the MYLAPS decoder with your EtherLynx cameras when the camera is not synced with Internal GPS
(option), set the LapTime|Options… Sync. Source = Internal and press trigger a Gunshot on the decoder
while FinishLynx is running.


NOTE – If FinishLynx is restarted, this procedure will need to be repeated. It is best practice to trigger a gunshot
at the start of every race.



Advanced         Remote Split Locations - CCNet Server
For remote split locations using BibTag decoders equipped with a SIM card and cellular network connectivity,
enable the CCNet Server.
    1.   Go to File|Preferences|CCNet.
    2.   Check the box to Enable CCNetSErver.
    3.   Enter your username and password - send email request to info.americas@mylaps.com
    4.   Click Register Devices on Server…
    5.   Click Ok.


www.facebook.com/finishlynx                                                                      www.finishlynx.com
