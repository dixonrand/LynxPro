# EtherLynx Vision Camera Setup QSG

**Title:** EtherLynx Vision Camera Setup QSG
**Slug:** `etherlynx-vision-camera-setup-qsg`
**Category:** Lynx-Sold Cameras › QSGs
**Type:** qsg
**Source URL:** https://finishlynx.com/wp-content/uploads/2012/08/EtherLynx-Vision-Camera-QSG.pdf
**Use:** Refer to this for initial setup, connections, and configuration of the EtherLynx Vision camera.

---

LYNX SYSTEM DEVELOPERS, INC.



    EtherLynx Vision Cameras
                   Quick Start Guide




Download a copy:             Contact Technical Support:
                                    Email: support@finishlynx.com
                                    Phone: 978-556-978
                             Join Us Online:
                                   Timer’s Group: facebook.com/groups/finishlynx
                                   Facebook: facebook.com/finishlynx
                                   Instagram: @finishlynx
    EtherLynx Vision Cameras                                                                 Quick Start Guide

Please verify that your FinishLynx Bronze Package contains all the components pictured here. If something is missing, or if
you have questions about setting up your system after following this quick start guide, call: 1-800-989-5969. For additional
tech support documents and downloads, visit www.finishlynx.com/support/

      Item                  Description           Part #              Item                    Description                    Part #

                        EtherLynx Vision
                                                  5L500                                      Carrying Case                   1A207
                     high sensitivity camera

                       Power Injector for
                                                 IDL-PoE                             25 ft. Ethernet cables (x2)           C10BT-25
                      Power-over-Ethernet

                   CS Mount 2.8-10mm P-Iris                     *NOTE: If you are using this CS-Mount lens, DO NOT USE the C-Mount adaptor
                                                CS2810P*                                         shown below
                            Lens

Optional Items shown below:

                     C-Mount 8-48mm f1.2                                                C-Mount 8-48mm f1.2
                                                  C848                                                                        C848M
                      Manual Zoom Lens                                                  Motorized Zoom Lens


                     CS Mount to C Mount
                                                 MCS-C                                      Connection Box                   C-Box
                          Adapter


                           Geared Head           BG3275                                 Connection Box cable                   451


                           Camera Tripod         BG3036                                     Capture button                1A205USB

                                                                                        Lynx USB Flash Drive
                                                                                                                           5LSW and
                      Super Head Clamp           BG2909                                 with FinishLynx32 and
                                                                                                                            9LSW01
                                                                                               LynxPad

                       Remote positioner          2L102

     Be sure to keep your USB flash drive safe. It includes your Serial Numbers, Software, & Quick-Start Guides.
                 To access the files, insert the flash drive in your computer and click on START.html.

Items Not Included
•     Laptop or netbook computer running Microsoft Windows. Your computer needs: 1 available USB port and 1 available
      Ethernet port.
•     Plumb bob and string. The plumb bob is available at your local hardware store, and you can use any type of string, as
      long as it is at least the width of your track (optional).
•     Printer (optional)
Introduction
In this QSG, you will learn how to configure the FinishLynx network, set up the EtherLynx Vision camera and align it with
the finish line using the EasyAlign software feature.
For more detailed or advanced instructions, consult the online FinishLynx Operator’s Manual (help.finishlynx.com) or the
technical support section of our website: www.finishlynx.com/support/.



EtherLynx Vision Quick Start Guide                                                                                               Page 2
 EtherLynx Vision Cameras                                                                   Quick Start Guide

Step 1.      Go to the Track
Bring your FinishLynx system (and an assistant) to the
track. Make sure there is power available for your
computers and the Power-over-Ethernet switch. The
EtherLynx Vision camera will receive their power via the
Ethernet data cables.
Set up a table near the finish line, ideally on the infield if
power is available. The finish line should have black lane
markers painted or taped on the finish. If not, we suggest
you use black matte tape to designate lane lines. This will
help you align the camera and get clearer images.

Step 2.      Install the Software
1. Install FinishLynx from the USB provided with your               2. Follow the instructions to install FinishLynx. When
    system or download the latest version at:                          prompted, enter the serial numbers provided on the
www.finishlynx.com/product/software/finishlynx-results-                flash drive.
software/                                                           3. Start FinishLynx by clicking the Windows Start button
                                                                       and selecting FinishLynx.
Step 3.      Evaluate a Sample Image
1. Start FinishLynx. Click File | Open….                            4. Press Enter. The finisher’s time appears in the start list
                                                                       above the image.
2. Double-click Sprint.evn to open the sample event.
                                                                    5. Repeat these steps for all competitors on the screen.
Note: This sample is a two-camera image.
                                                                       You have successfully evaluated a race in FinishLynx.
3. Click once on the torso of a competitor on the left side
                                                                    6. Click File | Close window. If you want to reuse the
   of the screen. A red hairline appears. Enter the lane
                                                                       image later for practice evaluation, click No when
   number for the athlete in the identification box.
                                                                       asked to save your changes. Close FinishLynx.

Step 4.      Configure the Network for Windows 10 & 11
Note: Sections 1 and 2 should be completed on both                  5. Right-click on Local Area Connection and select
FinishLynx and Meet Management computer.                               Properties from the list. A new window will appear with
                                                                       a list of connection items. Select Internet Protocol
1. Go to the windows Control Panel. On the top right is
                                                                       Version 4 (TCP/IPv4) and click the Properties button.
   View By with a drop-down arrow. Click the drop-down
   arrow and choose Small or Large Icons.                           6. A Properties window will appear and is typically set to
                                                                       Obtain an IP address automatically. Select the radio
2. Double-click Network and Sharing Center. They are
                                                                       button for Use the following IP address. In the box for
   listed alphabetically by icon name.
                                                                       IP address, enter 192.168.0.5 for FinishLynx and hit
3. On the left is a blue section titled Control Panel Home.            Tab key to auto fill in Subnet mask 255.255.255.0
   Click the Change Adapter Settings icon.
                                                                    7. Click OK and navigate back to the Control Panel. In the
4. A new window will open displaying your network                      control panel click the Windows Firewall icon. Under
   connections. Right-click the Wireless Network                       Control Panel Home, on the left, click Turn Windows
   Connection and select Disable from the list. This is                Firewall on or off.
   only necessary for the FinishLynx Capture computer.
                                                                    8. Turn off both Home and Public Firewalls (Domain for
                                                                       Windows Pro).
Step 5.      Set Up the Camera and Tripod
Set up the tripod in line with the finish line, preferably on the   not a requirement for accurate timing on the Torso of the
infield and approximately 10 feet back.                             athlete). If you need to be closer than this, you may have to
                                                                    use the optional 2.8-10mm P-Iris Lens supplied. (See last
Note: Minimum recommended camera distance from track
                                                                    page of QSG for these instructions)
is 8 feet (at this distance you may not be able to see the
feet of the athlete in Lane 1 – being able to see the feet is
EtherLynx Vision Quick Start Guide                                                                                        Page 3
EtherLynx Vision Cameras                                                                            Quick Start Guide

1. Extend the tripod legs so the geared head is
   approximately 7 ft high.
2. On the near side of the finish line, hold a plumb bob so
   that it is suspended directly above the middle of the                                                        Sight Line
   finish line. This is the plumb line, shown as a in the
   image below.
                                                                             Plumb Line
3. Tie string to the screw on the top of the tripod head.
   Have your assistant take the other end of the string to
   the far side of the finish line and hold the string taught.
   This is the sight line, shown as b in the image.
4. Move the tripod to the left or right until the plumb line
   and sight line touch at position c in the image. The
   tripod is now in the plane of the finish line.

Step 6.             Attach the Camera to the Tripod
1. Secure the geared head to the top of the tripod.                          6. When you are finished, your camera assembly should
                                                                                resemble the picture below.
2. Note how the camera mounting plate is attached to the
   top of the geared head. Then, pull back on the lever at                   7. Turn the black knob on the geared head that controls
   the top of the geared head to release the mounting                           the tilt of the camera so that it is at about a 30-degree
   plate.                                                                       angle to the ground.
3. Tighten the mounting plate to the bottom of the camera
   by turning the screw with a flathead screwdriver.
4. Attach the camera and mounting plate to the tripod by
   clicking the mounting plate into place on the geared
   head.
5. With the camera lens lined up with and facing the finish
   line, make minor adjustments to the tripod legs so both
   bubbles on the tripod are centered.


Step 7. Connect the Cables
                                                            XLR   Sensor

 EtherLynx Vision
     Camera                        Connection Box



                     DB 15 Cable




                                                                  Capture
                                                                  Button
                              PoE          Cat 5 Ethernet
   Cat 5 Ethernet
                            Injector                              USB

                           AC                                           AC




1. Connect the female end of connection box cable to the                     4. Connect the male end of the start sensor cable to the
   port on the back of the camera labeled Connection                            connection box where it says Start. Attach the start
   Box and the male end to the left side of the connection                      sensor to the other end of the cable and keep the start
   box.                                                                         sensor close by.
2. Connect an Ethernet cable between the back of the                         5. Connect the capture button to a USB port on your
   camera labeled POE 10/100/1000 to the port labelled                          computer.
   Out on the Power-over-Ethernet injector.
                                                                             6. Turn on the camera by pressing and holding the black
3. Connect an Ethernet cable to the network connection                          power button on the back.
   on your computer and the other end to a port labelled
   In on the Power-over-Ethernet injector.
EtherLynx Vision Quick Start Guide                                                                                                Page 4
EtherLynx Vision Cameras                                                                Quick Start Guide


Step 8.        Align the EtherLynx Camera
Note: The EtherLynx Vision camera can be aligned using              the inside and outside lanes. Once the camera position
either 1-D mode or 2-D EasyAlign mode. We recommend                 is correct, you can then optimize the remote lens
using EasyAlign. If you are using an older model EtherLynx          settings.
camera, however, it must be aligned using classic 1-D
                                                                 3. Adjust & Optimize Lens Settings
mode.
                                                                                                          Aperture Ring
NOTE: If running a wireless Ethernet card on your
computer, we recommend that you disable it while the
camera is booting.                                                                                                   Focus Ring

Start FinishLynx. Wait while the green status bar in the
lower right corner of the screen completes its cycle.
Align Vision Camera in EasyAlign 2-D Video Mode
1. Activate EasyAlign by clicking on the 2-D Align Icon
        in the top left-hand corner of the FinishLynx              ▪ Adjust lens aperture ring to control the amount of
    Hardware Control screen.                                         light in the lens. If your picture looks too white or
                                                                     washed out, turn the aperture ring to a higher f-
    The icon turns green       and the 2-D video viewer              number, to let less light in.
    appears within the software. The 2-D viewer makes it           ▪ Adjust lens focus ring to infinity (∞). This ensures
    easy to see how your camera is aligned on the finish.            your Far Focus (lanes farthest from camera)
    The goal is to align the green vertical line with the            appears crisp.
    painted finish line and near its front edge.
                                                                      After your far lanes appear in focus, ensure that your
                                                                      near lanes are similarly in focus also. This will usually
                                                                      be the case automatically. If you are having a hard
                                                                      time getting crisp focus, try opening your lens iris and
                                                                      allowing the AGC to drop closer to zero.
                                                                 4. Once the camera appears to be aligned, click the green

                                                                    alignment       icon to close 2-D alignment then click
                                                                    the red 1-D alignment icon       ..
                                                                    If you followed the steps closely in 2-D align, the
                                                                    camera should already be aligned in 1-D mode as well.
                                                                    The 1-D image should look similar to the following
                                                                    screen capture:
2. Adjust Camera Orientation
    Use the tripod's Tilt, Pan, and Swivel knobs to adjust
    the orientation of the camera on the finish. You want to
    ensure the green vertical line is perfectly aligned on the
    white finish line and all lanes are visible in the viewer.




                                                                 5. Set White Balance
        Tilt             Pan              Swivel
                                                                    a. Right-click and draw a box around a small amount
    Have your assistant run through the finish line and                of the white image.
    watch where they appear on the computer monitor. The
    goal is for the runner’s torso to be fully visible in both      b. Click        . White balance is now set.

EtherLynx Vision Quick Start Guide                                                                                        Page 5
 EtherLynx Vision Cameras                                                                  Quick Start Guide


Step 9.          Adjust the Camera Settings
1. Click Camera Settings Icon            to open the Camera            c.   Identify By: Select Lane for track competition.
   Settings dialog.                                                    d. Lanes: Enter the number of lanes on the track; the
2. Select the Setup tab:                                                  remaining should be left as default.
   a. Name: Enter a name to identify the camera(s)                 3. Click OK to close the Camera Settings and it is
   b. Image Orientation: Select the correct orientation               advised to restart the FinishLynx software.
       for finish (infield would be Left orientation)

Optional:        Using the 2.8-10mm P-Iris Lens
     Focus Adjuster                                                change the zoom. This step will require some fine tuning to
                                          Zoom Adjuster            get the proper zoom and focus to achieve a good image.
                                                                   Once the camera appears to be aligned, click the green
                                                                   alignment       icon to close 2-D alignment then click the
                                                                   red 1-D alignment icon      . You will know your camera is
                                                                   aligned on the finish line because the 1-D image will be
                                                                   primarily white. See image below for proper 1-D alignment.
                                                                   If you followed the steps closely in 2-D align, the camera
First, connect the lens cable to the Remote port on the back       should already be aligned in 1-D mode as well.
of the camera. Then, configure your camera settings to use
the 2.8-10mm P-Iris lens: in FinishLynx, access the camera
settings by clicking  . Under the Setup tab, locate the Iris
Type: setting and select the P-Iris radio button. Click Ok.


Remotely adjust lens aperture to control the amount of
light in the lens. If your picture looks too white or washed
out, use the Close Iris button      in FinishLynx to let less
light in. Likewise, if your picture looks too dark, use the
Open Iris button       in FinishLynx to let more light in. To
enable the Auto Iris feature: click   | Parameters tab;            Note: If your picture looks washed out by too much light,
check Auto Iris, and then click OK. FinishLynx will now            turn the aperture ring to a higher f-number to let less light
automatically remotely open and close the iris depending           in.
on the amount of light.                                            Have your assistant run through the finish line and watch
                                                                   where they appear on the computer monitor. The goal is for
                                                                   the runner’s torso to be fully visible in both the inside and
                                                                   outside lanes. Now, have your assistant run through the
                                                                   inner-most and outer-most lanes. Adjust the tilt of the
                                                                   camera until they are clearly visible on both ends of the
                                                                   finish line.
          Tilt                  Pan              Swivel
                                                                   Note: It may be necessary to move the camera further back
Note: By default, the iris will be in the closed position, so it   from the track if you cannot see all lanes in the image.
is normal for the image in FinishLynx to be very dark or
black at first, until you open the iris.                           After the image on the computer shows a white background
                                                                   and black lane lines and your assistant appears in the inner
Manually adjust lens focus and zoom rings. This lens is            and outer-most lanes, adjust the camera lens focus ring
a varifocal lens, meaning it will not stay in focus when you       again until all lanes appear crisp and in focus.
Looking for more resources? Visit our YouTube Channel (www.youtube.com/finishlynx) for setup and support
videos.

EtherLynx Vision Quick Start Guide                                                                                       Page 6
