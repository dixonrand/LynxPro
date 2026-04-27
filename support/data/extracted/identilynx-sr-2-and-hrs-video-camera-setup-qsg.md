# IdentiLynx SR-2 & HRS Video Camera Setup QSG

**Title:** IdentiLynx SR-2 & HRS Video Camera Setup QSG
**Slug:** `identilynx-sr-2-and-hrs-video-camera-setup-qsg`
**Category:** Lynx-Sold Cameras › QSGs
**Type:** qsg
**Source URL:** https://finishlynx.com/wp-content/uploads/2022/07/IdentiLynx-SR_HRS-series-QSG.pdf
**Use:** Refer to this for setup and configuration of IdentiLynx SR-2 and HRS cameras.

---

Lynx System Developers, Inc.


              IdentiLynx SR-2 & HRS Full-Frame Video Cameras
                                                Quick Start Guide
             Verify that your IdentiLynx Full-Frame video system contains the components pictured below.
        If not, or if you need additional help, please call: USA 978 556 9780 or email support@finishlynx.com.

       Item                Description            ID                       Item                 Description             ID


                                            IdentiLynx SR-2

                        IdentiLynx Camera                                                     Power Injector
                            and Tripod                                                         for Power-          IDL-PoE
                                                                                              over-Ethernet

                                            IdentiLynx HRS



                                                                                               Power-over-
                                                                                                 Ethernet        Included with
                          Protective Case       SE520
                                                                                              Power Supply         IDL-PoE
                                                                                                Connector



                                                                                             100’ (33 meter)
                                                                                             Ethernet Cable
                           10’ (3 meter)                                                           with
                                              C10BT-10                                                       WPCAT6-100
                          Ethernet Cable                                                      Weatherproof
                                                                                               XLR-RJ45
                                                                                               connector



Items not included
  • Computer (laptop recommended) running Microsoft Windows. Your computer needs: one available serial port,
    or USB port, and one available Ethernet port.
  • (Recommended) PoE+ Gigabit Hub/Switch
  • (Recommended) UPS Battery Backup


Introduction
In this quick start guide, you will learn how to set up and configure the IdentiLynx camera with your FinishLynx timing
system and play back full-frame video captured at the finish line.
NOTES: Lynx recommends a PoE+ Gigabit hub/switch and a Gigabit network card as a minimum when adding
the IdentiLynx camera to your timing system.
The new IdentiLynx cameras are a different design from the older models. The Ethernet port in the back of
the camera supports XLR to RJ-45 connectors for weatherproof connection. Failure to use this connector
may lead to water infiltration which could damage the camera.
To learn how to install the connector on your Ethernet cable, go to: www.neutrik.com/en/product/ne8mx-b to find the
Assembly Instructions.
The IdentiLynx SR-2/HRS cameras require FinishLynx version 12.10 or later to operate. Download the software from
the Lynx Flash Drive included with the camera, or download from the website:
www.finishlynx.com/product/software/finishlynx-results-software/
IdentiLynx SR/HRS Quick Start Guide                                                                            Page 1 of 4
                                                                                    IdentiLynx SR-2/HRS
                                                                                                       Quick Start Guide



Step 1:         Install the Latest FinishLynx Software
NOTE: IdentiLynx requires the latest version of                  b. If accessible, insert the supplied Lynx flash drive into
        FinishLynx.                                                 your computer’s USB port and install FinishLynx.
a. Open FinishLynx on your computer. Go to Help |                     OR: Download the latest FinishLynx software online:
   About and write down your FinishLynx Serial                        www.finishlynx.com/product/software/finishlynx-
   Number if you do not already have it stored                        results-software/
   somewhere. Also, record the serial numbers for any             c. Enter the serial number.
   FinishLynx software plug-ins.

Step 2:         Set Up the IdentiLynx Camera
a. Place the camera on the tripod, about chest high and
   in a safe location. Aim it at the finish line facing in the
   direction of the oncoming runners.
b. Plug the Power-over-Ethernet power supply into the
   power source or UPS battery backup.
c. Connect the first Ethernet cable (10’) from the
   FinishLynx PC or Hub/Switch to the In port of the
   IdentiLynx power supply.
d. Connect the Ethernet cable (100’) to the Out port on
   the IdentiLynx power supply.
e. Do not connect the other end of the second Ethernet
   cable to the RJ45 port on the back of the IdentiLynx
   camera until FinishLynx is ready to boot the cameras.
NOTE: The IdentiLynx camera gets Power-over-
Ethernet (POE).

Step 3:         Boot Cameras
a. Open FinishLynx.                                              NOTE: Booting the IdentiLynx camera at the end of the
b. Power on the FinishLynx cameras first, before the             order will eliminate any interruption in camera
   IdentiLynx camera.                                            communication if you turn off or lose connection with the
                                                                 IdentiLynx camera at some point and require re-booting
c. Check that each FinishLynx camera has appeared in
                                                                 of the FinishLynx cameras.
   the Hardware Control window in FinishLynx.
d. Once they have appeared, connect the Ethernet cable
   from the OUT port on the power injector to the
   XLR/RJ45 port on the back of the IdentiLynx camera.




Step 4:         Align the IdentiLynx Camera
The IdentiLynx is a full-frame video camera, so the image
during alignment mode will show a normal 2-D video in
the Image Zone.
a. Have someone stand on the finish line to determine
   the focus point.
b. Select the IdentiLynx camera in the Hardware Control
   window and click the Red Stop Sign to put the
   IdentiLynx camera into Alignment mode.


IdentiLynx SR/HRS Quick Start Guide                                                                             Page 1 of 4
                                                                                IdentiLynx SR-2/HRS
                                                                                                   Quick Start Guide

c. Once your line of sight is correct, use the Remote
   Zoom and Auto Focus function in the FinishLynx
   screen to adjust the camera until you have desired
   image.




Step 5:         Auto-Iris & Remote Zoom and Auto-Focus Control
Our latest IdentiLynx camera is the first equipped with        change. Try to Shift-click, Ctrl-click or Ctrl-Shift-click
auto-iris as well as remote-control lens which offers          (full range in two steps) for increasingly bigger steps.
complete control over the zoom and focus settings from       c. Auto Focus: Ctrl-Shift-click the Focus Near or
within the FinishLynx software. It’s as simple as clicking      Focus Far icon to activate the camera’s Automatic
the icons in the remote-control panel of the Hardware           focus function. The focus icons will change when in
Control window.                                                 auto focus.
a. Auto-Iris: always on and managed automatically by
   the camera (cannot be manually adjusted). To change
   exposure, adjust the brightness value or lower the               Normal Focus Mode           Auto Focus Mode
   shutter speed.
                                                             d. Manual Focus Steps: 3 step sizes are available.
b. Zoom Steps: 4 step sizes are available. Use the              Use a simple click, Shift-click or Ctrl-click on the
   mouse to click the Zoom icons for the smallest               Focus Near or Focus Far icons to manually change
                                                                the focus in increasingly bigger steps.

Step 6:         Camera Settings
NOTE: Only the Setup, Parameters and Capture tabs will apply to settings for the IdentiLynx camera. The other
settings are grayed out as they do not apply to the IdentiLynx functions.
                                                             c. Click the Parameters tab and set the Frame
a. Click the Camera settings icon.                              Rate/Height and shutter speed to your preference.
b. Click the Setup tab and name the camera based on
   location or function.




IdentiLynx SR-2 & HRS Quick Start Guide                                                                      Page 3 of 4
                                                                                 IdentiLynx SR-2/HRS
                                                                                                   Quick Start Guide

    • Click the Capture tab and make sure you select           d. In File | Options | Image, make sure that Time
       the preferred capture method.                              Tracking is set to All Cameras.




Step 7:         IdentiLynx Image Toolbar
a. Open a new Blank Event in FinishLynx.                      h. Click the Forward or Reverse icons to move one
b. Get a start for the system and have someone run               frame at a time in either direction (you should see the
   across the finish line as you capture (All Cameras).          time advance with each frame).
                                                              i. Hitting the Reverse button at full-speed forward
c. Click the      icons on the Image Toolbar to zoom in          playback goes to ½ speed playback. Hitting it again
   and out of the image.                                         goes to ½ speed reverse playback, and again goes to
                                                                 full-speed reverse. It works the same going forward in
d. The Full Screen icon         will show the full screen
                                                                 playback.
   image.
                                                              j. Clicking the Play button in slow or fast mode brings it
e. The Cropping tools and Find Next Object are not
                                                                 to full-speed, and clicking the Stop button will stop
   applicable to the IdentiLynx image.
                                                                 playback.
f. In the IdentiLynx image, right-click, hold, and drag to
                                                              k. The Play speeds aren’t displayed in the image
   draw a small box. Choose Enhance from the menu
                                                                 toolbar. If you hold Ctrl and click Forward or
   when the mouse is released. Click the Restore Image
                                                                 Backwards, you’ll go to the first or last frame. If you
   icon to bring the image back to its original state.
                                                                 hold Shift and click Play, the image playback will loop
                                                                 back to the beginning when the end is reached.
g. Click on the Play icon and see the images change           l. Images can be printed from the Image Toolbar or
   (you should see the time advance to the left of the play      cropped and saved as a .jpg, similar to FinishLynx
   icon). Click it again to stop playback                        images.

Step 8:         Time Tracking With IdentiLynx
NOTE: The Red hash line does not appear on the IdentiLynx image unless you click on the image frame. Time
cannot be read from the IdentiLynx image.
a. Using the same Blank Event, explore the time          c. Click the Play button for the IdentiLynx images and
   tracking between the FinishLynx and IdentiLynx           then click in the FinishLynx image. The IdentiLynx
   cameras.                                                 image will jump to that location and continue to play
b. Click on a competitor in the FinishLynx image and the    from that point forward.
   IdentiLynx image will jump to that frame (time
   reference) in the sequence.

Step 9:         Camera Care and Tips
The new IdentiLynx cameras are a different design from the older models. The Ethernet port in the back of the
supports XLR to RJ-45 connectors for weatherproof connection. Failure to use this connector may lead to water
infiltration which could damage the camera.

IdentiLynx SR-2/HRS Quick Start Guide                                                                       Page 4 of 4
                                                                             IdentiLynx SR-2/HRS
                                                                                                  Quick Start Guide

To learn how to install the connector on your Ethernet cable, go to: www.neutrik.com/en/product/ne8mx-b and find
the Assembly Instructions.
NOTE: When adding the IdentiLynx SR-2/HRS camera to your network, be sure to monitor Ethernet traffic and
watch for congestion. Add one camera at a time and increase the Resolution, or Frame Rate, in increments. We
recommend the use of a Gigabit Network Switch. Use the same methodology when adding a second IdentiLynx
camera to your FinishLynx network. From a results-production standpoint, it is rarely necessary to go over 10fps in
Cross Country or Road Races.


       Download a copy:                                     Contact Technical Support:
                                                                  Email: support@finishlynx.com
                                                                  Phone: 978-556-9780
                                                            Join Us Online:
                                                                  Timer’s Group: facebook.com/groups/finishlynx
                                                                  Facebook: facebook.com/finishlynx
                                                                  Instagram: @finishlynx




IdentiLynx SR-2/HRS Quick Start Guide                                                                    Page 4 of 4
