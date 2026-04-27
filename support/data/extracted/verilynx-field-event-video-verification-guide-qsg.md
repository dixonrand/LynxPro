# VeriLynx Field Event Video Verification Guide QSG

**Title:** VeriLynx Field Event Video Verification Guide QSG
**Slug:** `verilynx-field-event-video-verification-guide-qsg`
**Category:** Lynx-Sold Cameras › QSGs
**Type:** qsg
**Source URL:** https://finishlynx.com/wp-content/uploads/2022/07/VeriLynx_QSG.pdf
**Use:** Refer to this for setup and operation of the VeriLynx false start detection system.

---

LYNX SYSTEM DEVELOPERS, INC.


          VeriLynx Field Event - Video Verification
                                             Quick Start Guide (v2.00)
                    Verify that your VeriLynx Full-Frame video system contains the components pictured below.
              If not, or if you need additional help, please call: USA 978 556 9780 or email support@finishlynx.com.

      Item                 Description               ID                           Item                   Description           ID


                                                                                                      Power Injector
                        VeriLynx Camera
                                                  VeriLynx                                             for Power-          IDL-PoE
                           and Tripod
                                                                                                      over-Ethernet




                                                                                                        Power-over-
                                                                                                          Ethernet      Included with
                         Protective Case           SE520
                                                                                                       Power Supply       IDL-PoE
                                                                                                         Connector


                                                                                                      100’ (33 meter)
                                                                                                      Ethernet Cable
                           10’ (3 meter)                                                                    with
                                                 C10BT-10                                                             WPCAT6-100
                          Ethernet Cable                                                               Weatherproof
                                                                                                        XLR-RJ45
                                                                                                        connector


Items Not Included
  •   Computer (laptop recommended) running Microsoft Windows. Your computer needs: one available Ethernet port.
  •   UPS Battery Backup

Introduction
The following guide will walk you through the setup, configuration, and operations of FinishLynx, when used with VeriLynx
cameras to assist judging of take-off fouls for horizontal jumps or other field events. If at any point you need additional help,
please contact Technical Support: support@finishlynx.com.

General Information
Under World Athletics Technical Rule 30.1.1, horizontal jump take-off failures are re-defined to include any breaking of the
vertical plane of the take-off line. Rule 29.5 strongly encourages judges to use video or other technology to assist the
decision process. VeriLynx cameras, along with special configuration of the FinishLynx software, can be used for this
purpose.
NOTES: The new VeriLynx cameras are a different design from the older models. The Ethernet port in the back of
       the camera supports XLR to RJ-45 connectors for weatherproof connection. Failure to use this connector
       may lead to water infiltration which could damage the camera.
       To learn how to install the connector on your Ethernet cable, go to: www.neutrik.com/en/product/ne8mx-b to find
       the Assembly Instructions.
             The VeriLynx cameras require FinishLynx version 12.10 or later to operate. Download the software from the
             Lynx Flash Drive included with the camera, or download from the website:
             www.finishlynx.com/product/software/finishlynx-results-software/



www.facebook.com/finishlynx                                                                                 www.finishlynx.com
                                                                                                                       VeriLynx
                                                                                                               Quick Start Guide

Setup 1 Hardware Setup
1.   Place the camera on the tripod in the plane of the take-   2.   Plug the Power-over-Ethernet (PoE) power supply into
     off board.                                                      the power source or UPS battery backup.
     a.   (optional) position a second VeriLynx camera          3.   Connect the short Ethernet cable (10’) from the PC to
          beyond the take-off board and pointed back                 the IN port of the PoE power supply.
          toward the runway. This camera can be used for        4.   Connect the long Ethernet cable (100’) from the OUT
          visual confirmation of the current athlete.                port of PoE power supply to the back of the camera.

Setup 2 Software Configuration (Options)
1.   Start FinishLynx (version 12.00 or newer).
2.   Go to File | Options...
3.   Select VeriLynx from the Profile: list.
4.   Restart FinishLynx.
5.   Go to File | Options... | Database and set the Input
     Directory to the location of the Lynx database files
     (fldlynx.sch, lynx.evt, lynx.ppl).
6.   Click Ok.
NOTE – When running FinishLynx using the VeriLynx
profile, the splash screen and the application title bar will
display a reference to VeriLynx. This helps confirm the
right profile is selected.




Setup 3 Software Configuration (Camera Settings)
1.   Click the   Camera        Settings        icon.            3.   Click the Capture tab:
2.   Click the Parameters tab:                                       a.   Capture Method = Automatic (VeriLynx Motion).
     a.   Frame Rate = Max available.                                b.   Capture Method = Trailer = 5.
     b.   Frame Height = 1280x720 (or higher).                  4.   Click Ok.
     c.   Shutter Speed = 1/700 (or smaller).

Setup 4 Camera Alignment
1.   Have someone stand on the take-off board to                     b.   Zoom Steps: 4 step sizes are available. Use the
     determine the field of view and focus point.                         mouse to click the Iris or Zoom icons for the
2.   Click on the Red Stop Sign to put the camera into                    smallest change. Try to Shift-click, Ctrl-click or
     Alignment mode.                                                      Ctrl-Shift-click (full range in two steps) for
                                                                          increasingly bigger steps.
3.   Use the Remote Zoom and Auto Focus in the remote
     control panel to adjust the camera until you have the           c.   Auto Focus: Ctrl-Shift-click the Focus Near or
     desired image. The full width of the take-off board                  Focus Far icon to activate the camera’s Automatic
     should be in view and the vertical alignment line                    focus function. The focus icons will change when
     should appear at the edge of the take-off board.                     in auto focus.
     a. Auto-Iris: Always on and managed automatically
          by the camera (cannot be manually adjusted). To
          change exposure, adjust the brightness value.                      Normal Focus Mode               Auto Focus
                                                                          Mode




www.facebook.com/finishlynx                                                                             www.finishlynx.com
                                                                                      LYNX SYSTEM DEVELOPERS, INC.




Setup 5 Software Operations
1.   Select an event from the schedule or create a new       6.   Enter the athlete’s bib number (Identify by ID) and hit
     (blank) event.                                               Enter.
2.   Enable capture by clicking the capture icon (Event |         • This will add a line label, time of day (ToD)
     Toggle Capture Alt-T).                                         timestamp the current frame, export a JPEG and
3.   Use the TAB key to enable the Scroll New Image                 count up the attempt number (starts at 0).
     function.                                                    • To easily go back to any athlete’s recorded jump,
4.   When an athlete jumps, hit the TAB key to disable the          select the athlete in the Results Zone (or Shift-
     Scroll New Image and freeze the view close to the              ArrowUp/Dn) and go to Results | Previous/Next
     frame showing the attempt.                                     Attempt (or Shift-ArrowLeft/Right) to cycle through
                                                                    each attempt.
5.   Use the mouse wheel to move the image and to judge
     the take-off.                                           7.   Repeat for all athletes and all attempts in the flight.




www.facebook.com/finishlynx                                                                         www.finishlynx.com
                                                                                                                             VeriLynx
                                                                                                                 Quick Start Guide

Advanced Tips
To limit the capture of unwanted image, set the Object Detection’s Active Area to include only the vertical portion of the
image that covers the take-off board (Camera Settings > Capture tab).
For details, go to this link: ACM – Active Area.
To manage multiple VeriLynx cameras on the same network with multiple PCs, use the FinishLynx camera whitelist feature.
For details, go to this link: Whitelist Management.

FAQ
How to operate a VeriLight?
    Use the Alt-F (Foul) and Alt-V (Valid) to toggle VeriLight on/off. For details, go to this link: www.finishlynx.com/wp-
    content/uploads/2024/01/VeriLight_QSG.pdf

How to remove an attempt from the Results Zone?
    If the attempt to be removed is the last one entered, simply click the on the Mask Attempt button. To remove
    an older attempt, select the athlete from the Results Zone and go to Attempts | Edit Attempts…, then select the
    correct attempt and hit Delete.

How to automatically export a JPEG image when I mark an attempt?
    Go to File | Options… | Image Export and select On for the Auto-Export feature.
    When an attempt is entered, a JPEG file is automatically exported to the Export Directory: on the Database Options
    tab. By default, this is set to the c:\Lynx folder.
    The filename format is <EEE-R-HH>_<ID>_<Attempt#>.jpg.

Will I lose the captured image if my PC fails or loses power?
    No. All image is written to disk in real-time. If the PC fails before the event is saved, go to c:\Lynx\temp to recover the
    lost event and image.

How to quickly move through the VeriLynx image?
    •    Shift+Click an athlete in the Results Zone to view their last attempt
    •    Shift+ArUp or ArDown to go to the previous or next athlete (Results menu)
    •    Shift+ArLeft or ArRight to go to the previous or next attempt for the current athlete (Results menu)
    •    Mouse wheel up/down to move the current image pane forward or back
    •    Alt+ArUp to Play or Stop the selected image pane (Image menu)
    •    Alt+ArLeft or ArRight to go to the previous or next image frame of the selected image (Image menu)
    •    Home or End to go to the beginning or end of the selected image pane
    •    Find by ID by clicking the magnifying glass in the Results toolbar (Results menu)
    •    Find by Time by clicking the magnifying glass in the Image toolbar (Image menu)
    *For more shortcuts, go to https://help.finishlynx.com/Content/Shortcuts.htm

How to install the XLR-RJ45 connector?
    To learn how to install the connector on your Ethernet cable, go to: www.neutrik.com/en/product/ne8mx-b and find the
    Assembly Instructions. Failure to use this connector may lead to water infiltration and damage to the camera.




www.facebook.com/finishlynx                                                                               www.finishlynx.com
