# ResulTV Manual

**Title:** ResulTV Manual
**Slug:** `resultv-manual`
**Category:** Lynx-Sold Software › Manuals and User Guides
**Type:** manual
**Source URL:** https://finishlynx.com/wp-content/uploads/2012/08/ResulTV-Manual.pdf
**Use:** Full reference for ResulTV scoreboard display software setup and operation.

---

User's Guide



ResulTV 6.31
                                                                                                                                                                        i



Contents
Copyright Notice                                                                                                                                                      1

ResulTV Introduction                                                                                                                                                  3
     Obtaining technical support .......................................................................................................................... 3
     Obtaining Lynx products and information .................................................................................................... 3


Installing ResulTV                                                                                                                                                    4
     Before you begin........................................................................................................................................... 4
     What is ResulTV-VDM? .............................................................................................................................. 5
     Install the ResulTV software ........................................................................................................................ 5
             Installing from the Lynx USB ........................................................................................................... 5
             Installing from the Lynx website ....................................................................................................... 6


ResulTV Quick Start Tutorial                                                                                                                                          9
     Step 1: Start ResulTV ................................................................................................................................... 9
     Step 2: Configure ResulTV to receive data .................................................................................................. 9
     Step 3: Configure FinishLynx to send data to ResulTV ............................................................................. 10
     Step 4: Open a layout .................................................................................................................................. 11
     Step 5: Send data to ResulTV from FinishLynx ......................................................................................... 12


ResulTV Basics                                                                                                                                                      13
     Uses ............................................................................................................................................................ 13
     System requirements ................................................................................................................................... 13
     Starting ResulTV ........................................................................................................................................ 14
     Displaying static and dynamic data ............................................................................................................ 14
     ResulTV configuration screen .................................................................................................................... 15
     ResulTV display screen .............................................................................................................................. 15
     ResulTV Profiles ........................................................................................................................................ 16


Setting up the Computers                                                                                                                                            17
     Connecting the computers .......................................................................................................................... 17
          Using ResulTV over a serial connection ......................................................................................... 17
          Using ResulTV over a network ....................................................................................................... 18


Configuring the Data Source                                                                                                                                         19
     Data source basics....................................................................................................................................... 19
            Creating a new data source .............................................................................................................. 19
            Deleting a data source...................................................................................................................... 20
            Which RSS file do I select? ............................................................................................................. 20
            Working with multiple data sources ................................................................................................ 20
ii     Contents


     FinishLynx as a data source ........................................................................................................................ 21
            Configuring ResulTV for use with FinishLynx ............................................................................... 21
            Configuring FinishLynx for use with ResulTV ............................................................................... 21
     Hy-Tek Meet Manager as a data source...................................................................................................... 22
            Hy-Tek Meet Manager for Track and Field ..................................................................................... 22
            Hy-Tek Meet Manager for Swimming ............................................................................................ 26
     Working with a dynamic data source .......................................................................................................... 28
            Configuring the dynamic source ...................................................................................................... 28


Editing the Layout                                                                                                                                             31
     Existing layouts .......................................................................................................................................... 31
            Opening an existing layout .............................................................................................................. 31
            Creating a new layout or modifying an existing layout ................................................................... 31
            Different RTV files .......................................................................................................................... 32
            Dynamic image layout ..................................................................................................................... 34
     Working with text objects ........................................................................................................................... 34
            Basic text object editing .................................................................................................................. 34
            Cutting, copying and pasting ........................................................................................................... 35
            Entering static and dynamic text in the same text object ................................................................. 35
            Inserting a new text field ................................................................................................................. 36
            Changing the size of the text object ................................................................................................. 36
            Changing the text position ............................................................................................................... 36
            Changing the text content in a text object........................................................................................ 37
            Changing the justification ................................................................................................................ 37
            Changing the background color ....................................................................................................... 38
            Selecting a text object background color ......................................................................................... 38
            Changing the shadow color ............................................................................................................. 38
            Changing the border color ............................................................................................................... 38
            Changing the face color ................................................................................................................... 38
            Changing the text size...................................................................................................................... 39
            Moving to back or front ................................................................................................................... 39
     Support for Microsoft Windows compatible fonts...................................................................................... 39
            Optimized Font Blending ................................................................................................................ 40
            Selecting a new font for display ...................................................................................................... 40
            Controlling font size ........................................................................................................................ 40
            Supporting other language fonts ...................................................................................................... 41
     Working with graphics objects ................................................................................................................... 42
            Displaying graphics ......................................................................................................................... 42
            Displaying FinishLynx image dynamically ..................................................................................... 42
            Displaying a custom graphic ........................................................................................................... 43
            Clearing a dynamic graphic or text object ....................................................................................... 45
            Displaying an existing graphic ........................................................................................................ 45
            Displaying GIFs............................................................................................................................... 46
            Displaying an existing graphic ........................................................................................................ 46
            Resizing a Bitmap Object ................................................................................................................ 47
            Can I edit or delete the Lynx logo? ................................................................................................. 47
     Working with Video Display objects .......................................................................................................... 47
            Video Display Objects ..................................................................................................................... 47
            Video Display Object Properties ..................................................................................................... 48
     Resizing the Layout .................................................................................................................................... 49
     Other layout editing commands .................................................................................................................. 50
            Align horizontal ............................................................................................................................... 50
            Align vertical ................................................................................................................................... 50
            Select all .......................................................................................................................................... 50
                                                                                                                                            Contents                iii


                  Select none....................................................................................................................................... 50
                  Invert selection ................................................................................................................................ 51
                  Changing the settings of multiple objects ........................................................................................ 51
                  Deleting multiple selected objects ................................................................................................... 51


Sending Data to ResulTV                                                                                                                                           53
        Sending data from FinishLynx.................................................................................................................... 53
               Sending a start list and results from FinishLynx ............................................................................. 53
               Sending running time from FinishLynx........................................................................................... 54
               Display running time and results ..................................................................................................... 54
        Sending data using Hy-Tek Meet Manager ................................................................................................ 55
               Meet Manager for Track and Field .................................................................................................. 55
               Meet Manager for Swimming .......................................................................................................... 55
        Working with multiple layouts ................................................................................................................... 55
        Automatic switching of display screens...................................................................................................... 56
        Manual and Automatic triggering of text and bitmap objects ..................................................................... 58
        Sending data to television ........................................................................................................................... 60
        Displaying ResulTV on multiple monitors ................................................................................................. 60
        Displaying ResulTV on a Rotated Display ................................................................................................. 61
        Scrolling the ResulTV Display ................................................................................................................... 63


Index                                                                                                                                                             65

Glossary of Terms                                                                                                                                                 69
                                                                                   1




Copyright Notice
           Use of this product is governed by the Sales and License Agreement signed
           by you or your agent (the "Buyer"), Section 7a of which is reprinted here.
           7a. Ownership of Software. Lynx System Developers, Inc. (Lynx) owns and
           retains all title, copyright, trademark, and other proprietary rights in the
           software, firmware and documentation provided with the software and
           firmware (collectively, "Software"). Buyer acknowledges that the Software
           is the confidential property of Lynx and the Buyer will not disclose the
           Software to any other person without Lynx's consent.
           FinishLynx, EtherLynx, CyberScoreboard, ReacTime, and the FinishLynx
           logo are registered trademarks of Lynx System Developers, Inc.
           AirCyber, AirLynx, ClerkLynx, CyberScoreboard, FieldLynx, InterLynx,
           LaserLynx, Live CyberScoreboard, Live CyberScoreboard Relay, Lynx
           Translation Tool, LynxPad, LynxTV, NetExchange Server, Office Client,
           ResulTV, SeriaLynx, ScoreLynx, and VCPD are trademarks of Lynx System
           Developers, Inc.
           Windows 95, Windows 98, Windows 2000, Windows ME, Windows NT and
           Windows XP are registered trademarks of Microsoft Corp.
           Photoshop and Postscript are registered trademarks of Adobe Systems
           Incorporated.
           Palm OS, Palm Computing, Graffiti, and HotSync, are registered trademarks
           of Palm, Inc. Palm, the Palm logo, and the HotSync logo are trademarks of
           Palm, Inc.
           All other trademarks are properties of their respective companies.
           ResulTV User's Guide
           February 10, 2025
           Copyright © 1992-2025 by Lynx System Developers, Inc.
           All rights reserved.
                                                                                              3




ResulTV Introduction
                                                              ResulTV™ is a digital television
                                                              graphic generation program for use
                                                              with FinishLynx® timing systems. Use
                                                              ResulTV at your next competition to
              display start lists and results (see "Sending a start list and results from
              FinishLynx"), configuring it to work with most monitor sizes. When used with the
              appropriate VGA - to broadcast signal converter, ResulTV works with any
              international television system (see "Sending data to television").
              ResulTV is designed to display information that conforms to a pre-arranged layout.
              You can also create several different layouts that can be active at one time, and
              simply toggle between each layout when you want it displayed (see "Working with
              multiple layouts").
              ResulTV allows you to display dynamic graphics, such as FinishLynx images for
              specific events (see "Displaying FinishLynx image dynamically").



Obtaining technical support
              There are three ways to obtain technical support for Lynx products:
              ▪   Go to the Lynx website (www.finishlynx.com) and click the Support link
              ▪   Call (978) 556-9780 and ask to speak with someone in Tech Support, or
              ▪   Send an email to the technical support department (support@finishlynx.com).



Obtaining Lynx products and
information
              There are three ways to obtain Lynx products and information:
              ▪   Go to the Lynx website (www.finishlynx.com) and click the Products link
              ▪   Call (978) 556-9780 and ask to speak with someone in Sales, or
              ▪   Send an email to our sales department (sales@finishlynx.com).
4   ResulTV 6.31 User's Guide




CHAPTER 1




Installing ResulTV
                          ResulTV requires that you install a hardware dongle to receive data from external
                          sources. If you do not install the hardware dongle, then you can run ResulTV in Demo
                          mode only.
                          Follow the instructions in this chapter to install ResulTV onto a computer.

                          In This Chapter
                          Before you begin.......................................................................... 4
                          Install the ResulTV software ........................................................ 5




Before you begin
                          Make sure you have the following:
                          ▪     Lynx Software & Serial Numbers USB or access to the Lynx website
                                (www.finishlynx.com).
                          ▪     ResulTV license number - available by contacting Lynx System Developers, Inc.
                          ▪     USB port on the ResulTV computer.
                          ▪     Hardware dongle (green) - also available by contacting Lynx System Developers,
                                Inc.
                          ▪     A computer running a Microsoft Windows Operating System 95 or higher.
                          ▪     Administrator privileges on the ResulTV computer.
                                                               Chapter 1 Installing ResulTV           5




What is ResulTV-VDM?
                   ResulTV-VDM is a simplified version of ResulTV. Like the VDM option for Vision-
                   series cameras, the content of the ResulTV-VDM layout is controlled by the data
                   received (e.g. from FinishLynx or FieldLynx). The display resolution is limited to the
                   size of the display purchased with the solution and the layout limited to Working
                   with Video Display objects.
                   Before you continue, verify if you own a license of ResulTV or ResulTV-VDM to
                   correctly install and configure the software.


Install the ResulTV software
                   You can install the ResulTV software either from the Lynx USB or by visiting the Lynx
                   website.


Installing from the Lynx USB
                   1 Insert the Lynx USB into your computer.
                   2 Double-click the ResulTV installer and begin installation.
                   3 If the File Download - Security Warning dialog appears, click Run.
                   4 Click Yes when asked if you wish to install ResulTV.
                   5 Follow the instructions on the screen to continue with the installation.
                   6 If you have a ResulTV license number, type it in the Serial text box when
                     prompted. If you do not have a license number, you can demo this software by
                     typing DEMO in the serial number text box. If you decide to purchase a serial
                     number later, you can enter it later without reinstalling the ResulTV application
                   7 Click Install.
                   8 When the Security Key Installation dialog appears, click to select KEYLOK 2
                     (USB w/Driver) and Standalone.
6    ResulTV 6.31 User's Guide


                                 ▪   DO NOT connect the USB Dongle to the computer yet. Click Begin Install
                                     and wait until the Security Key Installation is complete.




                           Note: The hardware dongle must be attached to the ResulTV computer at all times or
                           the ResulTV software is disabled.




Installing from the Lynx website
                           1     Go to the Lynx website (www.finishlynx.com).
                           2     Click Products | Software | ResulTV Data Display Software.
                           3     Scroll down and click the Downloads tab.
                           4     Click the latest version of ResulTV software. Open the installer once it appears
                                 on your screen.
                           5     If the File Download - Security Warning dialog appears, click Run.
                           6     Click Yes when asked if you wish to install ResulTV.
                           7     Follow the instructions on the screen to continue with the installation.
                           8     If you have a ResulTV license number, type it in the text box when prompted. If
                                 you do not have a license number, you can demo this software by typing DEMO
                                 in the serial number text box. If you decide to purchase a serial number later, you
                                 can enter it later without reinstalling the ResulTV application
                           9     Click Install.
                                         Chapter 1 Installing ResulTV        7



10 When the Security Key Installation dialog appears, click to select KEYLOK 2
   (USB w/Driver) and Standalone.
   ▪ DO NOT connect it to the computer yet. Click Begin Install and wait until the
      Security Key Installation is complete.




Note: The hardware dongle must be attached to the ResulTV computer at all times or
else the ResulTV software is disabled.
                                                                                                                9


CHAPTER 2

ResulTV Quick Start Tutorial
              Follow the steps in this Tutorial to get started using ResulTV as quickly as possible.
              This Tutorial assumes:
              ▪   you have already installed ResulTV (see "Installing ResulTV")
              ▪   you are using ResulTV with FinishLynx
              ▪   your ResulTV and FinishLynx computers are either connected serially (see
                  "Using ResulTV over a serial connection"), or are networked (see "Using
                  ResulTV over a network").


                   In This Chapter
                   Step 1: Start ResulTV ................................................................. 9
                   Step 2: Configure ResulTV to receive data ................................. 9
                   Step 3: Configure FinishLynx to send data to ResulTV .............. 10
                   Step 4: Open a layout ................................................................. 11
                   Step 5: Send data to ResulTV from FinishLynx .......................... 12




Step 1: Start ResulTV
              To create a shortcut on the Desktop, navigate you the ResulTV folder (by default this
              is in the C: drive). Right-click on the ResulTV application file and choose “Send to
              Desktop (Create shortcut)”.
              Start ResulTV by double-clicking the ResulTV shortcut.


Step 2: Configure ResulTV to receive
data
              1 Click File from the Menu bar and select Options…. The Options dialog appears.
                Go to the Sources tab.
              2 From the Script: drop-down list, select FinishLynx.rss.
              3 If your ResulTV and FinishLynx computers are connected:
                ▪ Via serial using a DB9 null modem cable, select the COM port the cable is
                     connected to on the ResulTV computer from the Serial Port: drop-down list.
                     Then, click Ok.
10   ResulTV 6.31 User's Guide


                                 ▪If you are connecting the computers over a network, select Network (listen)
                                  from the Serial Port: drop-down list. Then, type a number greater than 1024
                                  in the Port text box and click Ok.
                           4 To change the status of the source from “Not Loaded” to “Running” you will need
                             to close and reopen ResulTV.

                            Tip: You can display the ResulTV configuration screen on a computer and send the
                            ResulTV display to another device (see "Displaying ResulTV on multiple
                            monitors"), such as a desktop monitor, scan converter, or projector.




Step 3: Configure FinishLynx to send
data to ResulTV
                           1 Run FinishLynx.
                           2 Click Scoreboard | Options…. The Options dialog appears.
                           3 Click the New button to create a new scoreboard source.
                           4 From the Script: drop-down list, select ResulTV.lss.
                             ▪ If you are connecting the ResulTV and FinishLynx computers serially using a
                                 DB9 null modem cable, select the COM port the cable is connected to on the
                                 FinishLynx computer from the Serial Port: drop-down list. Then, click Ok.
                             ▪ If you are connecting the computers over a network:
                                 a) Select Network (connect) from the Serial Port: drop-down list.
                                 b) Type the same Port number you assigned to the ResulTV computer in
                                      the previous step.
                                 c) In the IP Address field type the IP Address of the ResulTV computer
                                      and then click Ok.
                           5 To change the status of the scoreboard you just created from “Not Loaded” to
                             “Running” you will need to close and reopen FinishLynx.
                                              Chapter 2 ResulTV Quick Start Tutorial       11




Step 4: Open a layout
              1 In ResulTV, click File | Open… and double-click to open an RTV (layout) file, for
                example, 1024x768.rtv. A layout screen appears.




              2 Press the Alt and Tab keys simultaneously on the ResulTV computer keyboard.
                A dialog appears containing any windows currently running on the computer.
              3 While holding down the Alt key, press Tab until the scoreboard display is
                selected, or click on it.




              4 Release the Alt and Tab keys with the scoreboard display selected. The ResulTV
                display appears on the screen.
12   ResulTV 6.31 User's Guide




Step 5: Send data to ResulTV from
FinishLynx
                           Configure the scoreboard from within FinishLynx by clicking Scoreboard |
                           Options…. Then, either consult your FinishLynx Operator's Manual for specific
                           instructions on configuring the scoreboard to display a start list, results, and running
                           time, or follow these suggested steps.
                           1 Select the Results: Auto radio button to display results automatically.
                           2 Next to Running Time: click the Options down-arrow to expand the drop-down
                             menu and check the “Send results if armed” option to display the start list as soon
                             as you open the event in FinishLynx.
                           3 Next to Results: click the Options down-arrow to expand the drop-down menu
                             and check the Always Send Place box to display place as soon as you evaluate
                             the FinishLynx image.
                           4 Check the Paging: box, type 6 in the Size box, and type 5.0 in the Time box to
                             scroll through 6 lines at a time at an interval of 5 seconds.
                           5 Verify the scoreboard status is “Running.” If not, make sure there is a selection
                             next to Serial Port: then Click Ok and restart FinishLynx. The start list displays
                             automatically when you open a new event in FinishLynx.
                           This completes the Quick Start Tutorial. Continue reading this User's Guide for
                           detailed instructions on:
                           ▪     configuring (see "Configuring the Data Source") FinishLynx and other data
                                 sources
                           ▪     editing (see "Editing the Layout") the ResulTV layout, and
                           ▪     sending data (see "Sending Data to ResulTV") from FinishLynx and other data
                                 sources.
                                                                                                                    13


CHAPTER 3

ResulTV Basics

             In This Chapter
             Uses ............................................................................................ 13
             System requirements ................................................................... 13
             Starting ResulTV.......................................................................... 14
             Displaying static and dynamic data ............................................. 14
             ResulTV configuration screen...................................................... 15
             ResulTV display screen ............................................................... 15




Uses
             Use ResulTV at your next competition to:
             ▪    display information from the FinishLynx Results Zone, such as start lists (see
                  "Sending a start list and results from FinishLynx"), results, and any other
                  information including names, ID numbers, lane assignments, affiliations and
                  times.
             ▪    send data from other sources such as Hy-Tek Meet Manager (see "Sending data
                  using Hy-Tek Meet Manager") for Track and Field or Swimming.
             ▪    display running time (see "Display running time and results").
             ▪    display static images/objects, such as sponsor logos.
             ▪    display dynamic images/objects (see "Displaying FinishLynx image
                  dynamically"), such as FinishLynx images.



System requirements
             ➢ ResulTV requires the following:
             ▪    Microsoft Windows 95 and higher operating system
             ▪    a minimum of 16 MB of RAM, and
             ▪    at least one available serial (COM) port or an Ethernet network card for the
                  transfer of data from a computer running FinishLynx or Hy-Tek Meet Manager.
             ▪    at least one USB port for the USB Dongle.
14   ResulTV 6.31 User's Guide




Starting ResulTV
                           To start the ResulTV application:
                           1 Double-click the ResulTV Shortcut.
                           2 A blank, gray, ResulTV screen appears with some Menu bar items at the top.
                             This is the ResulTV configuration screen.




                           3 Toggle between the configuration screen and the display screen by
                             simultaneously pressing the Alt and Tab keys. The unconfigured default display
                             screen is blue with the Lynx logo at the lower left corner of the screen.




Displaying static and dynamic data
                           ResulTV can display static or dynamic information.
                           ▪     Static data remains the same on every screen. Examples of static information
                                 include the name of the competition and its sponsor.
                           ▪     Dynamic data gets supplied and updated by FinishLynx or some other data
                                 source. Dynamic data includes running time, results, start lists, and graphics such
                                 as school logos or a FinishLynx image (see "Displaying FinishLynx image
                                 dynamically").
                                                        Chapter 3 ResulTV Basics         15




ResulTV configuration screen
             When you first run ResulTV, the ResulTV configuration screen appears with a Menu
             bar at the top. You must be in the ResulTV configuration screen to open layouts,
             make all layout edits and change data source configurations.




ResulTV display screen
             Access the ResulTV display screen from the ResulTV configuration screen by holding
             down the Alt key and pressing the Tab key until the scoreboard display screen is
             selected. When you release the Alt key, the scoreboard display screen appears.
16   ResulTV 6.31 User's Guide


                           You can return to the ResulTV configuration screen by holding down the Alt key and
                           pressing the Tab key until the ResulTV configuration screen is highlighted. When you
                           release the Alt key on this icon, you are returned to the ResulTV configuration screen.



ResulTV Profiles
                           ResulTV supports the concept of profiles in the same way as FinishLynx. A profile
                           can be used to store a specific configuration.
                           When a profile is used, all of the settings are saved to the current profile when
                           ResulTV is closed, and re-loaded the next time ResulTV is started. This makes it
                           easy to switch from one application to the next.
                           ➢ To create a new profile:
                                 1 Go to File | Create Profile...
                                 2 Enter a name for this new profile.
                                 3 Hit Enter.
                                 NOTE: New profiles start with the standard ResulTV default settings.
                           ➢ To load a profile:
                                 1 Go to File | Options... | General.
                                 2 Select the profile name from the Profile:* list.
                                 3 Click Ok.
                                 4 Restart ResulTV.
                                 NOTE: When a custom profile is loaded, the application title bar will
                                 show the <profilename>.
                           ➢ To save a profile:
                                 1 Simply close ResulTV. The current options and open layouts will be saved to
                                   the current profile.


                           Three profiles for video display type layouts are included with the installation of
                           ResulTV.
                                 •   Video-Portable - for the Lynx Portable Display
                                 •   Video-Infield - for the Lynx 1/2/3-sided Infield Display
                                 •   Video-360 (single/double) - for the Lynx 360 Display
                                                                                                             17


CHAPTER 4

Setting up the Computers

                   In This Chapter
                   Connecting the computers ........................................................... 17




Connecting the computers
                  The computer running ResulTV and the data source computers running FinishLynx,
                  Hy-Tek Meet Manager, etc. can be connected by one of two ways:
                  ▪    With a null modem cable attached to both computers' DB9 serial (COM) port.
                       You can buy a DB9 null modem cable from Lynx or at Radio Shack, CompUSA or
                       similar store.
                  ▪    By wired or wireless Ethernet. Make sure all of the computers have a wired or
                       wireless Ethernet card installed and are on the same network.
                  Optional: You can also run ResulTV and FinishLynx on the same computer and
                  connect a second monitor (see "Displaying ResulTV on multiple monitors") to the
                  ResulTV computer.


Using ResulTV over a serial connection
                  Connect the ResulTV computer to a data source computer or SeriaLynx unit using a
                  DB9 null modem cable. Attach each end of the null modem cable to a device's COM
                  port.

                  Increasing the COM ports
                  You must have one available COM port on your ResulTV computer for every data
                  source it is receiving data from. If you need to create an extra COM port to
                  accommodate additional data sources, use a serial port add-on card or a USB to
                  serial adapter.
                  Otherwise, we recommend that you put all of the computers on an Ethernet network
                  and follow the instructions in this User's Guide to configure ResulTV to listen to each
                  data source over the network (see "Using ResulTV over a network").
18   ResulTV 6.31 User's Guide




Using ResulTV over a network
                           You can put the ResulTV computer and all of the data source computers on a wired
                           or wireless Ethernet network and then configure ResulTV to listen for data from each
                           source.
                           ➢ Pre-requisites
                           For ResulTV to get data from sources over a network, the following conditions must
                           exist:
                           ▪     Your ResulTV and data source computers (such as FinishLynx) must all have
                                 wired or wireless Ethernet network cards installed and must all be on the same
                                 network.
                           ➢ Instructions
                           1 Go to File | Options in ResulTV and create a new data source (see "Creating a
                             new data source"), select the script, and give the source a unique name.
                           2 Select Network (listen) from the Serial Port: drop-down list. Then, tab to the
                             Port text field and type the same port number the FinishLynx computer's
                             scoreboard port setting is set to.




                                 Click Ok to return to the ResulTV configuration screen.
                                                                                                                 19


CHAPTER 5

Configuring the Data Source

                  In This Chapter
                  Data source basics ...................................................................... 19
                  FinishLynx as a data source ........................................................ 21
                  Hy-Tek Meet Manager as a data source...................................... 22
                  Working with a dynamic data source ........................................... 28




Data source basics
Creating a new data source
                  You must create a new data source or modify an existing one so ResulTV knows how
                  and from where it is receiving data.
                  ➢ To create a data source
                  1 Make sure you are at the ResulTV configuration screen (see "ResulTV
                    configuration screen"). Click File | Options. The Options dialog box appears.
                  2 Click the New button.
                  3 From the Script: drop-down list:
                    ▪ select FinishLynx.rss for data coming from FinishLynx.
                    ▪ select Hytek.rss for data coming from Hy-Tek Meet Manager for Track and
                        Field.
                    ▪ select HytekSwim.rss for data coming from Hy-Tek Meet Manager for
                        Swimming.
                    ▪ select MeetPro.rss for data coming from MeetPro Meet Manager.
                  4 The default source name, Source, appears in the Name: text field. Type a new
                    name if you want. This is helpful if you want to keep track of data coming to
                    ResulTV from multiple sources.
                  5 From the Serial Port: drop-down list:
                    ▪ For data sources connected to the ResulTV computer via a null modem
                        cable (see "Using ResulTV over a serial connection"), select the correct
                        COM port.
                    ▪ For data sources connected to the ResulTV computer via wired or wireless
                        Ethernet (see "Using ResulTV over a network"), select Network (listen). In
                        The Port: field, enter the same Port number that the FinishLynx computer's
                        scoreboard network (connect) port is set to.
                  6 Click Ok. You have now created a data source within ResulTV.
20   ResulTV 6.31 User's Guide


                           7 Close ResulTV and then restart the application.
                           8 After restarting ResulTV, continue to the instructions for configuring the
                             FinishLynx (see "Sending a start list and results from FinishLynx") or Hy-Tek
                             Meet Manager (see "Sending a start list from Meet Manager for Track and Field
                             for Windows") computer to send data to ResulTV.


Deleting a data source
                           1 Start at the ResulTV configuration screen (see "ResulTV configuration screen")
                             and click File | Options.
                           2 Go to the Sources tab. Click to highlight a source you created earlier in the
                             Source...Status text field.
                           3 Click the Delete button.
                           4 Restart ResulTV. When you return to the Options dialog, the data source you
                             just deleted is gone.


Which RSS file do I select?
                           Important! When using ResulTV with FinishLynx or Hy-Tek Meet Manager, you must
                           select the correct RSS file when configuring the data source!

                                 Select this script in ResulTV...   With this script and/or
                                                                    program...

                                 FinishLynx.rss                     ResulTV.lss

                                 Hytek.rss                          Hy-Tek Meet Manager for Track
                                                                    and Field

                                 HytekSwim.rss                      Hy-Tek Meet Manager for
                                                                    Swimming

                                 MeetPro.rss                        MeetPro Meet Manager




Working with multiple data sources
                           You can configure ResulTV to get data from more than one data source. For
                           example, you can use ResulTV to display running time (see "Display running time
                           and results") coming from the FinishLynx computer and results coming from the Meet
                           Manager computer.
                           1 Start at the ResulTV configuration screen.
                           2 Click File | Options. The Options dialog appears.
                           3 Go to the Sources tab. Click the New button to create a new source, and repeat
                             the appropriate steps in “Creating a new data source.”
                                                  Chapter 5 Configuring the Data Source        21




FinishLynx as a data source
Configuring ResulTV for use with FinishLynx
                  1 Click File | Options from the Menu bar on the ResulTV configuration screen. The
                    Options dialog appears.
                  2 Go to the Sources tab. Click the New button.
                  3 Tab to the Script: drop-down list and select FinishLynx.rss.
                  4 Tab to the Name: text field and type a new name for your data source, for
                    example, FinishLynx Primary.
                  5 Tab to the Serial Port: drop-down list and configure the serial or network
                    settings (see "Setting Up the Computers").
                  6 Click OK and then exit and restart ResulTV. ResulTV is now configured to
                    receive data from the FinishLynx computer.


Configuring FinishLynx for use with ResulTV
                  ➢ Pre-requisites
                  If you are configuring the FinishLynx computer to send data to the ResulTV computer,
                  make sure that one of the following statements is true:
                  ▪   The FinishLynx computer is connected to the ResulTV computer using a null
                      modem cable (see "Using ResulTV over a serial connection") via the DB9 serial
                      (COM) ports.
                  ▪   The FinishLynx computer and the ResulTV computer are on the same wired or
                      wireless Ethernet network (see "Using ResulTV over a network").
                  ➢ Instructions
                  1   Run FinishLynx.
                  2   Click Scoreboard I Options. The Options dialog appears.
                  3   Click the New button to create a new scoreboard source.
                  4   Select ResulTV.lss from the Script: drop-down list.
                  5   Tab to the Name: text field and type a new name for the scoreboard FinishLynx
                      is sending data to, if desired.
22   ResulTV 6.31 User's Guide


                           6 Click the Serial Port: drop-down list.
                             ▪ If you are sending data from FinishLynx to ResulTV over a serial connection,
                                 select the COM port through which the FinishLynx computer is connected to
                                 the ResulTV computer. Leave the Baud, Data Bits, Parity, and Stop Bits
                                 settings at their default values (9600, 8, None, 1).




                                 ▪   If you are sending data from FinishLynx to ResulTV over a network, select
                                     Network (connect). In the port: field type the port number you set the
                                     ResulTV computer to, and in the IP Address field type the IP address of the
                                     ResulTV computer.




                           7 Configure the rest of the scoreboard settings as desired. Refer to the FinishLynx
                             Operator's Manual for complete instructions.
                           8 Click OK and restart FinishLynx. FinishLynx is now ready to send data to the
                             ResulTV computer.



Hy-Tek Meet Manager as a data
source
Hy-Tek Meet Manager for Track and Field
                           Configuring ResulTV for use with Meet Manager for Track and
                           Field
                           1 Click File | Options from the menu bar on the ResulTV configuration screen.
                             The Options dialog appears.
                           2 Go to the Sources tab. Click the New button.
                           3 Tab to the Script: drop-down list and select Hytek.rss.
                                Chapter 5 Configuring the Data Source        23



4 Tab to the Name: text field and type a new name for your data source, for
  example, Hy-Tek Database.
5 Tab to the Serial Port: drop-down list and select the correct COM port from the
  drop-down list.




6 Click OK and restart ResulTV. ResulTV is now configured to receive data from
  the Hy-Tek Meet Manager computer.
24   ResulTV 6.31 User's Guide



                           Configuring Meet Manager Track and Field for Windows for
                           use with ResulTV
                           Note: The instructions provided here are for the convenience of our customers.
                           Because Meet Manager for Track and Field is a software program designed by Hy-
                           Tek, Ltd., the instructions below may not be valid for versions later than 1.2. Please
                           refer to the Hy-Tek website (www.hy-tekltd.com) for more information.

                           ➢ Pre-requisites
                           If you are sending data from Meet Manager to ResulTV over a serial connection
                           (see "Using ResulTV over a serial connection"), make sure the computers are
                           connected with a null modem cable.
                           ➢ Instructions
                           1 Run Hy-Tek Meet Manager.
                           2 Click Set-up from the menu bar and select Alpha Scoreboard Interface from
                             the drop-down menu. The Scoreboard Vendor dialog appears.




                           3 Select the Daktronics Fixed Digit radio button and then click OK.
                                Chapter 5 Configuring the Data Source        25



4 Click Run from the menu bar. The Run the Meet screen appears.
5 Click Interfaces from the menu bar and select Scoreboard - Daktronics Fixed
  Digit | Open/Close Serial Port. The Select Serial Port for Daktronics Fixed
  Digit dialog appears.




6 Click in the Serial Port for Scoreboard (0-16) field and then type the number of
  the COM port on the Meet Manager computer that is connected to the null
  modem cable going to the ResulTV computer.
7 Go To Interfaces | Scoreboard – Daktronics Fixed Digit | Customize. Enter
  the number of results per page to be shown in ResulTV and specify Lane or
  Finish order. Confirm Baud Rate is 9600, number of seconds each page of
  results is shown, and Metric vs English for field event results. You can also
  customize how names are shown (upper case, last name only, etc.). Click OK.
26   ResulTV 6.31 User's Guide




Hy-Tek Meet Manager for Swimming
                           Configuring ResulTV for use with Hy-Tek Meet Manager for
                           Swimming
                           1 Click File | Options from the Menu bar on the ResulTV configuration screen. The
                             Options dialog appears.
                           2 Go to the Sources tab. Click the New button.
                           3 Tab to the Script: drop-down list and select HytekSwim.rss.
                           4 Tab to the Name: text field and type a new name for your data source, for
                             example, Hy-Tek Database.
                             ▪ Tab to the Serial Port: drop-down list and select the correct COM port from
                                 the drop-down list.




                           5 Click Ok. ResulTV is now configured to receive data from the Hy-Tek Meet
                             Manager computer.
                                  Chapter 5 Configuring the Data Source           27




Configuring Meet Manager Swimming for use with ResulTV
Note: The instructions provided here are for the convenience of our customers.
Because Meet Manager for Swimming is a software program designed by Hy-Tek,
Ltd., the instructions below may not be valid for versions later than 1.4. Please refer
to the Hy-Tek website (www.hy-tekltd.com) for more information.
➢ Pre-requisites
If you are sending data from Meet Manager to ResulTV over a serial connection
(see "Using ResulTV over a serial connection"), make sure the computers are
connected with a null modem cable.
➢ Instructions
1 Run Hy-Tek Meet Manager.
2 Click Set-up from the menu bar and select Alpha Scoreboard INTERFACE from
  the drop-down menu. The Scoreboard Vendor dialog appears.




3 Select the Generic Serial radio button and then click OK.
4 Click Run from the menu bar. The Run the Meet screen appears.
5 Click Scoreboard (Genser) from the menu bar and then select Open/Close
  Serial Port for GENSER. The Select Serial Port for GENSER dialog appears.
28   ResulTV 6.31 User's Guide


                           6 Type the number of the COM port on the Meet Manager computer that is
                             connected to the null modem cable going to the ResulTV computer.
                           7 Click OK. Meet Manager is now ready to send data to ResulTV.
                           8 To send a start list, simultaneously press the Ctrl and F10 keys on the Meet
                             Manager computer. To send Results, simultaneously press the Ctrl and F11 keys
                             on the Meet Manager computer.



Working with a dynamic data source
Configuring the dynamic source
                           You can select the data sources from where ResulTV obtains its dynamic text or
                           graphic.
                           ➢ If you want ResulTV to get dynamic data from the source specified by
                             the layout (File | Options dialog)
                           1 Double-click on a text object. The Object Properties dialog appears.
                           2 Click the Basic tab.
                           3 Select the Layout default radio button and then click Ok.
                           ➢ If you want to specify where an object receives dynamic data from
                           1 Double-click on a text object. The Object Properties dialog appears.
                           2 Click the Basic tab.
                           3 Select the Local override radio button. The Any source and Selected sources:
                             selections become active.
                             ▪ If you want the dynamic data in the object to come from any data source,
                                 select the Any source button.
                             ▪ If you want the dynamic text in the object to come from a specific data
                                 source, select the Selected sources: button and then select the source from
                                 the drop-down list.

                           Local override
                           Local override allows you to specify where dynamic text comes from in a text object.
                           ➢ To enable Local override
                           1 Double-click a text object on an open layout. The Object Properties dialog
                             appears.
                           2 Click the Basic tab.
                                 Chapter 5 Configuring the Data Source          29



3 Select the Local override button.
  ▪ If you want the dynamic data supplied from any data source, select the Any
      source radio button.



    ▪   If you want the dynamic data supplied from a specific data source, select the
        Selected sources radio button and then choose the source from the drop-
        down list.




Layout default
If Layout default is selected, the object receives dynamic data from the source as it
is configured in the File | Options dialog.
➢ To enable Layout default
1 Double-click a text or graphics object on an open layout. The Object Properties
  dialog appears.
2 Click the Basic tab.
3 Select the Layout default radio button and then click Ok. Dynamic data for this
  text object is supplied by the source configured in the File | Options dialog.
Note: The Layout default selection is only available for use with dynamic data. Make
sure Dynamic is selected in the Type: section of the Object Properties dialog.
                                                                                                                      31


CHAPTER 6

Editing the Layout

                   In This Chapter
                   Existing layouts ............................................................................ 31
                   Working with text objects ............................................................. 34
                   Support for Microsoft Windows compatible fonts ......................... 39
                   Working with graphics objects ..................................................... 42
                   Other layout editing commands ................................................... 50



Existing layouts
Opening an existing layout
                   1 Start at the ResulTV configuration screen (see "ResulTV configuration
                     screen").
                   2 Click File and select Open.
                   3 Double-click an RTV file listed in the dialog box. The layout appears on your
                     screen.
                   Note: Several layouts have been provided for your convenience. We recommend
                   that you open an existing layout and then click File | Save As, rename the layout, and
                   modify it for your specific needs.


Creating a new layout or modifying an existing layout
                   You can create a new, custom layout or you can modify an existing layout.
                   ➢ To create a new, custom layout
                   1 Start at the ResulTV configuration screen.
                   2 Click File | New. A blank layout screen appears.
                   3 Add text and graphics object boxes to the layout by clicking Layout | New text
                     object and Layout | New bitmap object.
                   4 Save the new layout by clicking File | Save and giving the file a name.
                   ➢ To modify an existing layout
                   1 Click File | Open from the menu bar.
                   2 Double-click to open an RTV layout file.
32   ResulTV 6.31 User's Guide


                           3 Click File | Save as, give the file a new name, and then click the Save button.
                             Now you can modify the new layout you just created. The original layout is saved
                             under its original name for later use.


Different RTV files
                           ResulTV comes with several RTV, or layout files, described here.
                           Remember: If you do not want to use the existing layouts, you can customize
                           existing or create new RTV files (see "Creating a new layout or modifying an existing
                           layout").
                                           Chapter 6 Editing the Layout        33



▪   2x1_Video Display.rtv: basic Video Display layout (336x168 pixels) (see
    Working with Video Display objects)
▪   84x168_Results1.rtv: 1 line layout for the Lynx Portable 84x168 pixel LED Video
    display
▪   84x168_Results3.rtv: 3 line layout for the Lynx Portable 84x168 pixel LED Video
    display
▪   84x168_Time.rtv: running time layout for the Lynx Portable 84x168 pixel LED
    Video display
▪   336x168_Results1.rtv: 3 lines and running time layout for the Lynx 1/2/3-Sided
    LED Video Infield displays
▪   1024x768.rtv: configured to work with any 1024x768 pixel display. Fields include:
    competition name, event name, place, name, affiliation, mark/time, competition
    sponsor, running time up to 6 lanes.
▪   1024x768flag.rtv: configured to work with any 1024x768 pixel display, and is set
    up for you to display dynamic place (such as medals), affiliation (such as country
    flags), and event-round-heat (such as FinishLynx) images.
▪   1024x768-flags.rtv: configured to work with any 1024x768 pixel display. Fields
    include: competition name, event name, heat/flight number, place, name,
    affiliation, flags, mark/time, running time, and up to 8 lanes.
▪   1024x768-no-flags.rtv: configured to work with any 1024x768 pixel display.
    Fields include: competition name, event name, heat/flight number, place, name,
    affiliation, mark/time, running time, and up to 8 lanes.
▪   1024x768swim.rtv: configured to work with any 1024x768 pixel display and Hy-
    Tek Meet Manager for Swimming as its data source. Fields include: competition
    name, event name, place, lane, name, affiliation and mark up to 8 lanes.
▪   640x480.rtv: fields include those listed for 1024x768.rtv, but configured to work
    with this smaller size monitor.
▪   800x600.rtv: fields include those listed for 1024x768.rtv, but configured to work
    with this smaller size monitor.
▪   Time.rtv: fields include competition name, running time, and sponsor. Configured
    to work with a 640x480 size monitor.
▪   1280x720-flags.rtv: configured to work with any 1280x720 pixel display. Fields
    include: competition name, event name, heat/flight number, place, name,
    affiliation, flags, mark/time, running time, and up to 8 lanes.
▪   1280x720-no-flags.rtv: configured to work with any 1280x720 pixel display.
    Fields include: competition name, event name, heat/flight number, place, name,
    affiliation, mark/time, running time up to 8 lanes.
▪   1366x768-no-flags.rtv: configured to work with any 1366x768 pixel display.
    Fields include: competition name, event name, heat/flight number, place, name,
    affiliation, mark/time, running time, and up to 8 lanes.
▪   1366x768-flags.rtv: configured to work with any 1366x768 pixel display. Fields
    include: competition name, event name, heat/flight number, place, name,
    affiliation, flags, mark/time, running time, and up to 8 lanes.
▪   1920x1080-no-flags.rtv: configured to work with any 1920x1080 pixel display.
    Fields include: competition name, event name, heat/flight number, place, name,
    affiliation, mark/time, running time, and up to 8 lanes.
34   ResulTV 6.31 User's Guide


                           ▪     1920x1080-flags.rtv: configured to work with any 1920x1080 pixel display. Fields
                                 include: competition name, event name, heat/flight number, place, name,
                                 affiliation, flags, mark/time, running time, and up to 8 lanes. Shown below.




Dynamic image layout
                           There is a layout available for use with ResulTV that allows you to dynamically
                           display medals, country flags, and FinishLynx images on your ResulTV layout (see
                           example below). Remember that you can still create a custom layout (see "Creating
                           a new layout or modifying an existing layout") when displaying dynamic images. The
                           layout is currently only available in a 1024 x 768 pixel size.




Working with text objects
                           The ResulTV layout consists of several fully editable fields, called text objects.


Basic text object editing
                           1 Make sure you have a layout open on the ResulTV configuration screen.
                                                               Chapter 6 Editing the Layout         35



                   2 Double-click anywhere on the text object you want to edit. The Object
                     Properties box for that specific text object appears.




Cutting, copying and pasting
                   You can cut, copy, and paste objects from one display to another from within
                   ResulTV.
                   1 Click to select a text or graphic object.
                   2 Click Edit from the Menu bar and select Cut, Copy, or Paste.
                   Note: You can cut, copy, or paste multiple objects. Select multiple objects by holding
                   down the CTRL key and clicking on all the objects you want to select.


Entering static and dynamic text in the same text object
                   You can enter static and dynamic text in the same text object by making sure you use
                   the %s dynamic text marker symbol. For example, you can combine static and
                   dynamic text in the text object that displays the first place competitor's name to say,
                   "The winner is [static text] Longley [dynamic text]."
                   ➢ Instructions
                   1 Double-click the text object where you want to combine static and dynamic text.
                     The Object Properties dialog appears.
                   2 In the Text: field at the bottom, type the static text you want displayed and
                     include %s wherever you want dynamic information to appear. In the example
                     described above, you would type, "The winner is %s"


                   3 Click OK. The text object displays the static text you just entered, and will display
                     the dynamic text when it is supplied by the data source.
36   ResulTV 6.31 User's Guide




Inserting a new text field
                           1 Click Layout from the Menu bar.
                           2 Select New text object. A new text object appears on the layout that is fully
                             editable.


Changing the size of the text object
                           There are two ways to change the size of a text object.
                           ▪     Drag and drop the handle in the lower right corner of the text object to a desired
                                 size, or
                           ▪     Follow these steps:
                                 1. Double-click a text object. The Object Properties dialog appears.
                                 2. Click the Basic tab.
                                 3. Type, in pixels, the new Width and Height values in the text fields provided
                                     and then click Ok. The text object is resized to the values you just entered.


Changing the text position
                           You can change how text gets positioned on the ResulTV display by either clicking on
                           a text object and dragging and dropping it to a new location, or by entering new co-
                           ordinates for the top left corner of a text object.
                           ➢ To change the position of a text object by dragging and dropping
                             (easiest method)
                           1 With a layout open on the ResulTV configuration screen, click and hold
                             somewhere on a text object you want to move.
                           2 While continuing to hold down the mouse button on a text object, drag it to the
                             desired location and let go of the mouse button. The text object remains in its
                             new location, until you drag and drop it to a different location.
                           ➢ To change the position of a text object by entering new co-ordinates
                           The following method is recommended for greater accuracy.
                           1 Double-click the text object you want to re-position. The Object Properties
                             dialog appears.
                                                                  Chapter 6 Editing the Layout       37



                   2 Click the Basic tab.




                   3 Enter new Horiz. and Vert. pixel co-ordinates in the text boxes provided and then
                     click Ok. The text object gets re-positioned according to its new co-ordinates.


Changing the text content in a text object
                   1 Double-click on a text object. The Object Properties dialog appears, displaying
                     the current text display in the Text: field at the bottom.
                   2 Type over the text in the field with new text you want displayed and then click
                     OK. The text you just entered is displayed in the text object.

Changing the justification
                   You can left-justify, center, or right-justify text appearing in a text object.
                   1 Double-click the text object you want to edit. The Object Properties dialog
                     appears.
                   2 Click the Left, Center, or Right radio button to change the text justification and
                     then click Ok. The text in the object changes to the new justification setting you
                     just selected.
38   ResulTV 6.31 User's Guide




Changing the background color
                           1 Click Layout from the menu bar and choose Properties.... The Layout
                             Properties dialog appears.




                           2 Select a new color from the Background drop-down list and click Ok. The
                             background color for the display changes to the color you just selected.


Selecting a text object background color
                           1 Double-click on a text object. The Object Properties dialog appears.
                           2 Select a color from the Background: drop-down list. Note that when you select
                             Background from the list, the text object defaults to the original background color
                             of the layout.
                           3 When you press Alt | Tab, the text object is displayed with the new background
                             color you selected.


Changing the shadow color
                           1 Double-click the text object you want to edit. The Object Properties dialog
                             appears.
                           2 Select a color from the Shadow: drop-down list and then click Ok. The shadow
                             color of the text in the text object changes to the color you just selected.


Changing the border color
                           The border color is the outline color of text in a text object.
                           1 Double-click the text object you want to edit. The Object Properties dialog
                             appears.
                           2 Select a color from the Border: drop-down list and then click Ok. The border
                             color of the text in the text object changes to the color you just selected.


Changing the face color
                           The face color is the main color of a text object.
                           1 Double-click the text object you want to edit. The Object Properties dialog
                             appears.
                                                               Chapter 6 Editing the Layout         39



                   2 Select a color from the Face: drop-down list and then click Ok. The face color of
                     the text in the text object changes to the color you just selected.


Changing the text size
                   1 Double-click the text object you want to edit. The Object Properties dialog
                     appears.
                   2 Select a new value from the Size: drop-down list and then click Ok. The size of
                     the text in the text object changes to the value you just selected. Or you can
                     specifically control the font size by clicking the Basic tab on the Object Properties
                     dialog. Type a new value in the Height: text field and then click Ok.
                   Note: See “Shrink to fit” for text objects that may contain varying lengths of data such
                   as names and affiliations.


Moving to back or front
                   You can select either “move to back,” or “move to front,” when objects are layered on
                   top of one another.
                   1 Click to select the text or graphic object you want to move.
                   2 Click Layout from the Menu bar and select Move to back or Move to front.




Support for Microsoft Windows
compatible fonts
                   ResulTV allows you to use any type of Microsoft Windows compatible font when
                   selecting text for display.

                   Recommended fonts include any TrueType fonts.
                   Not recommended to use any script or ornate fonts.
40   ResulTV 6.31 User's Guide



                           Recommended Microsoft Windows operating system
                           It is recommended that your computer run one of the following Microsoft Windows
                           operating systems when using alternative fonts with ResulTV:
                           ▪     NT 3.2 and higher
                           ▪     2000, or
                           ▪     XP
                           ▪     7, 8, or 10



Optimized Font Blending
                           The rendering of text with dark fonts and transparent border/shadow/background has
                           been improved so that characters blend in better and appear less jagged. Further,
                           the blending artifacts seen around light text with a light background can be removed
                           by setting the border of the font to the color of the face.
                                 Tip: For blending to occur, the border color must be achromatic (or transparent)
                                 and different than the face color (for example, no blending is done on a black font
                                 with a black border). See Advanced Settings for more options.
                           Note: These optimizations do not apply to the <Internal> font, only installed Windows
                           fonts.



Selecting a new font for display
                           1 Double-click on a text object. The Object Properties dialog appears.
                           2 The original font is called “<internal>.” Select a new font by choosing a new one
                             from the drop-down list.
                           3 Click Ok. When you press Alt | Tab, the new font for the text object is displayed.
                           Note: Remember that fonts may vary on different computers. When displaying data
                           on multiple computers, we recommend you select a universal font, such as Arial or
                           Courier New.


Controlling font size
                           You can change the font size (based on points) of any text object. Our engineers
                           have entered a size as large as 800 points!
                           ➢ To change a text object's font size
                           1 Double-click on a text object. The Object Properties dialog appears.
                           2 From here, you have two options:
                             ▪ Select a preset value from the Text: drop-down list, or
                             ▪ Click the Basic tab and type a new value in the Size: Height text field.
                                                               Chapter 6 Editing the Layout           41




                  Shrink to fit
                  Sometimes, text fields get sent data that are too long to fit in the text object using a
                  fixed font size, so they will appear to get cut-off. This can occur with long names,
                  affiliations, etc. To help your display look more professional, use this method:
                  1 Double-click on a text object. The Object Properties dialog appears.
                  2 Choose a font other than the default.
                  3 Enter a size value and check off the “Shrink to fit” option. The box beside it
                    defines what percentage the font may be reduced by; this can be changed to a
                    custom value. The default value of 50 means the font may be reduced by as
                    much as 50 percent before it stops shrinking.




Supporting other language fonts
                  If you are using fonts in languages other than English, particularly Asian, Middle
                  Eastern, and some Eastern European languages, you must use a Unicode data
                  exchange between FinishLynx and ResulTV.
                  ➢ Enable Unicode data exchange
                  In ResulTV...
                  1 Select File | Options… from the Menu bar. The Options dialog appears.
                  2 Go to the Sources tab. Select Unicode in the Code Set: line and then click Ok.
                  In FinishLynx...
                  1 Run FinishLynx and select File | Options… from the Menu bar. The Options
                    dialog appears.
                  2 Click the Scoreboard tab.
                  3 Select Unicode in the Code Set: line and then click Ok.
42   ResulTV 6.31 User's Guide




Working with graphics objects
Displaying graphics
                           With the exception of the Lynx logo which is not editable (besides choosing which
                           corner it will be located), static and dynamic graphics can be displayed anywhere on
                           the ResulTV screen. You can either use existing graphics or you can create your own
                           graphics for display.
                           ➢ To place a graphic on the screen
                           1 With a layout open on the ResulTV configuration screen, click Layout | New
                             bitmap object. A new object box appears on the layout screen.
                           2 Double-click the object. When the Object Properties dialog appears, select the
                             image you want to display from the Static File: drop-down list. Click Ok.




                           3 Resize the object box by clicking and dragging its handle to a new size.
                           4 Move the object box by dragging it and dropping it to a desired location.


Displaying FinishLynx image dynamically
                           You can display the FinishLynx image that corresponds with the results of the event
                           you are sending to ResulTV.
                           ➢ Pre-requisites
                           1 Share the C:\ResulTV directory (or wherever you installed the ResulTV files on
                             the ResulTV computer) with the FinishLynx computer, being sure it has both read
                             and write permissions.
                           2 Make sure the FinishLynx and ResulTV computers are connected over a
                             network (see "Using ResulTV over a network").
                                                              Chapter 6 Editing the Layout          43




                  ➢ Configure ResulTV
                  Now, follow these steps.
                  1 Be sure to be using the FinishLynx.rss source script.
                  2 Click File | New to create a new layout.
                  3 Click Layout | New Bitmap Object.... A new, blank graphic object appears on
                    the layout.
                  4 Double-click the new graphic object. The Object Properties dialog appears.
                  5 Click the Basic tab.
                  6 Select the Type: Dynamic radio button.
                  7 From the Field: drop-down list, select Event-Round-Heat.
                  8 To view an example, click File | Open and select 1024x768flags.rtv.
                  ➢ Configure FinishLynx
                  Be sure to use the ResulTV.lss scoreboard script.
                  ➢ Send data from FinishLynx
                  1 With a saved, evaluated FinishLynx image open, hold down the right mouse
                    button to draw a box around the portion of the image you want displayed on
                    ResulTV.
                  2 Click Export.... A Save As dialog appears. Navigate to the ResulTV directory
                    that the ResulTV computer is using and click Save. Leave the name of the file as
                    its default Event-Round-Heat format name from FinishLynx, for example, 001-1-
                    01. ResulTV displays the FinishLynx image along with the event results.
                  Note: By default, ResulTV will look for the image file in a Targa format (.tga). Your
                  computer may save the image as a jpeg file (.jpg). If this is the case, go into the
                  object’s properties in ResulTV, and change the Dynamic File: from “%s.tga” to
                  “%s.jpg”.


Displaying a custom graphic
                  If you want ResulTV to display a custom graphic, make sure the graphic is an
                  uncompressed 24-bit Targa (TGA) file, a JPEG file (.jpg), or a GIF file (.gif). Then,
                  follow these steps:
                  ➢ Displaying Your Object Statically (company logos, backgrounds, etc.)
                  1 Place the custom graphic file in the ResulTV directory on the ResulTV computer.
                    This is the same directory where you stored the ResulTV files during installation,
                    for example, C:\ResulTV.
                  2 Run ResulTV and open a layout on the ResulTV configuration screen.
                  3 Click Layout | New bitmap object. A graphics object box appears on the layout.
                  4 Double-click on the graphics object box. The Object Properties dialog appears.
                  5 From the Static File: drop-down list, select the custom graphic you placed in the
                    ResulTV directory and then click Ok.
44   ResulTV 6.31 User's Guide




                           6 Move the graphics object box by dragging and dropping it to a desired location.
                             When you click Alt + Tab to view the ResulTV display, your custom graphic
                             appears on the screen.
                           ➢ Displaying Your Object Dynamically (country flags, school logos,
                             etc.)
                           1 Save the file (.tga, .jpg, or .gif) in a directory. It must be named the same as what
                             your object is representing will say. For example, if using an object for a school’s
                             logo, and whenever that school will be shown in ResulTV it will show as an
                             abbreviation, your object must be named that same abbreviation.
                           2 Open a layout on the ResulTV configuration screen.
                           3 Click Layout | New bitmap object. A graphics object appears on the layout.
                           4 Double-click the object. Next to Dynamic Dir.: click “Browse” and select the
                             directory that your object is located in. Next to Dynamic File: type “%s.(your
                             file’s extension). This will be either .tga, .jpg, or .gif. So if you have a JPEG of a
                             school logo, you will put %s.jpg, and make sure the Dynamic Directory is
                             configured to the directory. Confirm the other settings (draw black as transparent,
                             and in the case of GIF animations you can change the speed).
                           5 Go to the Basic tab. Select the Dynamic radio button, and choose the
                             appropriate field from the Field: drop-down menu. For example, in the case of
                             the school logo, the object where place 1’s logo should be, choose “Affiliation 1”
                             from the drop-down menu. For layouts containing more than one line of results,
                             each line would contain its own dynamic object, each only differing in their field’s
                             Affiliation #.
                           6 Move the object by dragging and dropping it onto a desired location. When you
                             press Alt + Tab to view the ResulTV display, the file you just added appears.
                                                             Chapter 6 Editing the Layout        45




Clearing a dynamic graphic or text object
                   To clear any dynamic graphic or text objects from either the configuration or the
                   display screen, simultaneously hold down the Alt and C keys. Only dynamic objects
                   (not static objects) are cleared using this keyboard shortcut.


Displaying an existing graphic
                   ResulTV comes with sample TGA graphics files that you can display.
                   1   Open a layout on the ResulTV configuration screen.
                   2   Click Layout | New bitmap object. A graphics object appears on the layout.
                   3   Double-click the graphics object box. An Object Properties dialog appears.
                   4   Select a TGA file from the Static File: drop-down list and then click Ok.
                   5   Move the graphics object by dragging and dropping it onto a desired location.
                       When you press Alt + Tab to view the ResulTV display, the TGA file you just
                       selected appears.
46   ResulTV 6.31 User's Guide




Displaying GIFs
                           ResulTV has the ability to display GIF files. You'll find that *.gif files appear in the
                           Bitmap Static File: drop-down menu. The GIF file format includes the delay after
                           each frame, which can be different for each frame. You should be able to set this in
                           your GIF editor. If you find a GIF somewhere and don't like the speed, you should be
                           able to change the delays in an editor.
                           The GIF file format (optionally) includes the number of times that the animation
                           should be played. The way the spec is written the animation should only be played
                           once if this value is omitted. In ResulTV, however, an omitted value results in the
                           animation playing continuously. If you only want 1 loop (or a finite number) then be
                           sure to set the value in your editor. Some editors may always set this value (either to
                           a finite number or to the "continuous" value, which is zero).
                           Note: GIFs can take a while to load. 1.5MB file size takes about 1 second for
                           ResulTV to load it. The mouse cursor should show the hourglass whenever a GIF is
                           loading. Note that using undo/redo involves reloading bitmaps, so you'll see the delay
                           then as well.
                           If you have many GIFs and/or large GIFs and/or GIFs overlapping large text areas
                           then playback can slow down in ResulTV. In particular, a GIF overlapping text
                           (especially long and/or large text) can cause some slowdown. Also, ResulTV enforces
                           a minimum delay between frames of 30 milliseconds (corresponding to a maximum
                           frame rate of 30 fps). GIFs are generally designed to run at less than 30 fps (20, 15,
                           or 10 likely; [This is now controlled by a hidden setting (\Display\MinAnimDelay). The
                           minimum value is 10 milliseconds]).
                           To change the speed of the GIF, double-click on the object and enter a new Speed:
                           value. A value of 100 is "normal" speed, 200 is double, 50 is half, etc. Negative
                           values can be used to run the animation backwards.
                           By default ResulTV will always use black for the background color. This allows
                           ResulTV to easily “erase” the background of the GIF by displaying black as
                           transparent. To keep the black background, double-click on the object and uncheck
                           “Draw black as transparent.” There is a hidden setting (Display\GIFUseBg) that if
                           set to 1 ResulTV will use the background color stored in the GIF rather than using
                           black.
                           To display your GIF statically, see “Displaying a custom graphic”.

Displaying an existing graphic
                           ResulTV comes with sample TGA graphics files that you can display.
                           1     Open a layout on the ResulTV configuration screen.
                           2     Click Layout | New bitmap object. A graphics object appears on the layout.
                           3     Double-click the graphics object box. An Object Properties dialog appears.
                           4     Select a TGA file from the Static File: drop-down list and then click Ok.
                                                              Chapter 6 Editing the Layout         47



                   5 Move the graphics object by dragging and dropping it onto a desired location.
                     When you press Alt + Tab to view the ResulTV display, the TGA file you just
                     selected appears.


Resizing a Bitmap Object
                   To avoid unexpected quality loss in bitmap objects, the size of new bitmap objects is
                   locked. This can now be changed with the Stretch and Keep Aspect options.
                   1 Double-click the bitmap object box. An Object Properties dialog appears.
                   2 Go to the Basic tab.
                   3 Check the Stretch Box. Note: To maintain the current width and height ratio to
                     prevent any distortion to the object, also check Keep Aspect

                       Tip: If you plan to resize a layout (see Resizing the Layout) and you want bitmap
                       objects to also be resized, enable these options first.
                   Note: Resizing bitmaps works well for simple block graphics like coloring field
                   backgrounds, but may produce jagged edges or other quality degradation for more
                   complex images.



Can I edit or delete the Lynx logo?
                   You cannot edit or delete the Lynx logo. You can choose which corner it appears in
                   by going to File | Options | Display and choosing a corner from the Lynx Logo:
                   drop-down list.
                   Note: When the location of the display (File | Options… | Display) is set to Other and
                   the height is <250 pixels, the Lynx logo will not appear.




Working with Video Display objects
Video Display Objects
                   Video Display objects enable the same Functionality as the Video Display Module
                   (VDM) camera upgrade in Vision-Series cameras. By Using a Video Display object in
                   a ResulTV layout, you can generate the content from commands in a compatible Lynx
                   Scoreboard Script (LSS) file in FinishLynx, FieldLynx, or LynxPad.
                   ➢ To create a layout using Video Display objects:
                   1 Create a source using the VideoDisplay.rss and configure the port settings.
48   ResulTV 6.31 User's Guide


                           2 Restart ResulTV.
                           3 Click File | New to create a new layout, and then Layout | New Video Display
                             (or open the sample 2x1_VideoDisplay.rtv).
                           4 Click Layout | Edit Objects… to define the Position, Size, or Rotation of the
                             object.
                           5 Click OK.
                           6 Set up and configure a scoreboard using a compatible
                             ResulTV_Video_[identifier].lss script in FinishLynx, FieldLynx or LynxPad.


                           Note: ResulTV_Video compatible scripts are much like VDM scripts, except for a
                           different wrapper. Each packet must start with \01V\02 and end with \05\03\04 to be
                           recognized by ResulTV.


Video Display Object Properties
                           Video Display objects must have the following Basic properties: Type: Dynamic and
                           Field: Video Display Data
                           ➢ To change a Video Display object’s properties:
                           1 Double-click a Video Display object. The Object Properties dialog appears.
                           2 Click on the Basic tab.
                           3 Next to Type: select the Dynamic radio button.
                           4 Next to Field: select Video Display Data from the drop-down menu.
                           5 Click OK.
                           It is possible to rotate how a Video Display object displays…
                           ➢ To rotate how a Video Display object displays left or right:
                           1     Double-click a Video Display object. The Object Properties dialog appears.
                           2     To rotate the object 90° to the left, select the Left radio button.
                           3     To rotate the object 90° to the right, select the Right radio button.
                           4     To return the object to no rotation, select the Off radio button.
                           5     Click OK.
                                                          Chapter 6 Editing the Layout         49




              Note: You can also change the rotation of the entire display (See Scrolling the
              ResulTV Display). If both the display and the Video Display object are set to rotate
              Left or Right, the content in the Video Display object will appear upside down.
              Just like with dynamic bitmap objects (See Working with graphics objects), it is
              possible to load bitmaps into a Video Display object by using an Image block defined
              in the LSS. All parameters are controlled in the LSS. The
              ResulTV_VideoDisplay_Example.lss shows how to load a flag from C:\ResulTV\flags
              when the country code is included in the User3 field.
              Note: Any supported type of bitmap can be loaded, however animated GIFs will only
              show the first frame.




Resizing the Layout
              The Layout Resize function allows you to easily adapt an existing layout for a new
              display of different width and height.
              ➢ To resize a layout:
              1   Select the layout you want to resize so that it appears in the foreground.
              2   Click Layout | Resize…
              3   Enter the Old and New values for Width and Height.
              4   Click OK.

                  Tip: The old and new values can be absolute or relative. For example, if you
                  want to double the layout’s size, you can enter “1” for the Old values and “2” for
                  the New values.
              Note: By default, new Bitmap Objects do not resize. See Resize Bitmap Object for
              more info.
50   ResulTV 6.31 User's Guide




Other layout editing commands
Align horizontal
                           You can align two or more text or graphics objects horizontally along the same axis.
                           1 Click to select a text or graphics object. Then, hold down the Ctrl key on your
                             computer keyboard while clicking on additional text or graphics object(s). The
                             objects are selected if their topmost borders are white.
                             Tip: To select multiple objects, select an object by clicking on it, then skip over
                             the objects you want selected. Hold down the Shift key while clicking on the last
                             object you want selected. All of the objects between the first and last objects are
                             selected.
                           2 Click Layout | Align horizontal. The text or graphics objects you just selected
                             are aligned along the same horizontal axis.


Align vertical
                           You can align two or more text or graphics objects vertically along the same axis.
                           1 Click to select a text or graphics object. Then, hold down the Ctrl key on your
                             computer keyboard while clicking on additional text or graphics object(s). The
                             objects are selected if their topmost borders are white.
                             Tip: To select multiple objects, select an object by clicking on it, then skip over
                             the objects you want selected. Hold down the Shift key while clicking on the last
                             object you want selected. All of the objects between the first and last objects are
                             selected.
                           2 Click Layout | Align vertical. The text or graphics objects you just selected are
                             aligned along the same vertical axis.


Select all
                           You can select all of the text or graphics objects on an open layout by clicking Edit |
                           Select all. All of the objects on the layout appear with a white title bar, meaning you
                           can now simultaneously edit them by clicking Layout | Edit object(s)...


Select none
                           If you want to de-select all of the text or graphics objects on a layout, click Edit |
                           Select none. Title bars revert from white back to their gray, unselected state. You
                           must select the objects again if you want to edit them.
                                                                Chapter 6 Editing the Layout          51




Invert selection
                   Use Invert selection if you want to shift the selection of one text object to others on
                   the layout.
                   With a layout open and a text object selected, click Edit | Invert selection. The
                   previously selected object becomes deselected, while the other text objects on the
                   screen are selected.


Changing the settings of multiple objects
                   1 Open a layout on the ResulTV configuration screen.
                   2 Click to select a text or graphic object.
                   3 Hold down the Ctrl key while clicking on more text or graphic objects to select
                     multiple objects at once.
                   4 Click Layout | Edit object(s).... The Object Properties dialog appears. Any
                     changes you make in the Object Properties dialog are applied to all of the objects
                     you selected.


Deleting multiple selected objects
                   1 Click to select the text or graphics object.
                   2 Click Layout | Delete object(s). The object is removed from the layout.
                   Note: You can delete multiple objects by holding down the Ctrl key while clicking on
                   each object you want to delete. When you select Layout | Delete selected object(s),
                   all of the objects you selected disappear from the display.
                   Tip: To select multiple objects, select an object by clicking on it, then skip over the
                   objects you want selected. Hold down the Shift key while clicking on the last object
                   you want selected. All of the objects between the first and last objects are selected.
                                                                                                                53


CHAPTER 7

Sending Data to ResulTV

                    In This Chapter
                    Sending data from FinishLynx ..................................................... 53
                    Sending data using Hy-Tek Meet Manager ................................. 55
                    Working with multiple layouts ...................................................... 55
                    Automatic switching of display screens ....................................... 56
                    Sending data to television............................................................ 60
                    Displaying ResulTV on multiple monitors .................................... 60




Sending data from FinishLynx
Sending a start list and results from FinishLynx
                   You can configure FinishLynx to send a start list or results to ResulTV automatically
                   or you can configure it to send the data manually.
                   1 Run FinishLynx.
                   2 Click Scoreboard | Options. The Options dialog appears.
                   ➢ To send a start list or results from FinishLynx to ResulTV
                     automatically
                              a)     At the bottom of the dialog, there is a Results: section. Select the Auto
                                    radio button and then click Ok.


                              b) Assuming you have already configured ResulTV and FinishLynx to
                                 exchange data serially or over the network, ResulTV will display the new
                                 start list as soon as you open it in FinishLynx.
                   ➢ To send a start list or results from FinishLynx to ResulTV manually
                              a) At the bottom of the dialog, there is a Results: section. Select the
                                 Manual radio button and then click Ok.


                              b) Open a start list or results in FinishLynx.
                              c) Assuming you have already configured ResulTV and FinishLynx to
                                 exchange data serially or over the network, click Scoreboard from the
                                 menu bar and choose Refresh. The start list or results are displayed on
                                 ResulTV.
54   ResulTV 6.31 User's Guide




Sending running time from FinishLynx
                           These steps assume you have already configured FinishLynx and ResulTV to
                           exchange data serially or over a network, and that you have created and selected a
                           script for a new scoreboard in FinishLynx.
                           ➢ Instructions
                           1 Run FinishLynx.
                           2 Click Scoreboard | Options from the Menu bar. The Options dialog appears.
                           3 In the middle of the dialog, there are Running Time: selections. Click the
                             Normal radio button.


                           4 Click Ok and then Restart FinishLynx. FinishLynx is now configured to send
                             running time to ResulTV. When the timing circuitry in the camera starts, ResulTV
                             displays the running time.


Display running time and results
                           You can have more than one layout open and toggle between the display of running
                           time and results when FinishLynx is one of the data sources.
                           1 Start at the ResulTV configuration screen.
                           2 Click File | Open from the Menu bar and double-click the Time.rtv layout file.
                             The running time layout appears on the screen.
                           3 Click File | Open from the Menu bar again and double-click one of the other
                             layout files to show results. The layout file you just selected appears on the
                             screen.
                           4 Configure the text and graphics objects as desired, and set up the data sources.
                           5 Now that you have opened both layouts, simultaneously press the Alt and 1 keys
                             and then simultaneously press the Alt and 2 keys on the ResulTV computer to
                             toggle between the layouts.
                                                      Chapter 7 Sending Data to ResulTV          55




Sending data using Hy-Tek Meet
Manager
Meet Manager for Track and Field
                  Sending a start list from Meet Manager for Track and Field for
                  Windows
                  After you have configured Meet Manager and ResulTV to exchange data,
                  simultaneously press the Ctrl and F10 keys on the keyboard of the Meet Manager
                  computer to send a start list to ResulTV. The start list, ordered by lane number,
                  appears on the ResulTV display.

                  Sending results from Meet Manager for Track and Field for
                  Windows
                  After you have configured Meet Manager and ResulTV to exchange data,
                  simultaneously press the Ctrl and F11 keys to send results to ResulTV. The results,
                  ordered by place, appear on the ResulTV display. If an event has multiple heats, after
                  they are all finished you can send the event’s combined results by pressing the Ctrl
                  and F12 keys.


Meet Manager for Swimming
                  Sending a start list from Meet Manager for Swimming
                  After you have configured Meet Manager and ResulTV to exchange data,
                  simultaneously press the Ctrl and F10 keys on the keyboard of the Meet Manager
                  computer to send a start list to ResulTV. The start list, ordered by lane number,
                  appears on the ResulTV display.

                  Sending results from Meet Manager for Swimming
                  After you have configured Meet Manager and ResulTV to exchange data,
                  simultaneously press the Ctrl and F11 keys to send results to ResulTV. The results,
                  ordered by place, appear on the ResulTV display.



Working with multiple layouts
                  1 Open each layout by clicking File | Open from the Menu bar. The layout you
                    most recently open appears on the screen.
56   ResulTV 6.31 User's Guide


                           2 Now that you have opened more than one layout, simultaneously press the Alt
                             and 1 keys, then simultaneously press the Alt and 2 keys on the ResulTV
                             computer to toggle between the layouts. You can also click Window at the top of
                             your screen to see a list of layouts that are currently open along with their
                             corresponding keyboard shortcut.



Automatic switching of display
screens
                           ResulTV can receive commands from FinishLynx that cause the layout (RTV file)
                           displayed to automatically switch. Specifically, you can create four different ResulTV
                           layouts (start lists, results, running time, and messages), and display the appropriate
                           layout on the ResulTV screen depending on data sent by FinishLynx without the use
                           of an extra operator.
                           ➢ Before you begin
                           You must use the ResulTV.lss scoreboard script in FinishLynx.
                           ➢ Basic instructions
                           1 Start at the ResulTV configuration screen.
                           2 Create four new layouts, or RTV files, and assign each layout one of these
                             names, associated with the type of information it displays:
                             ▪ Starts.rtv for a start list display
                             ▪ Results.rtv for a results display
                             ▪ Time.rtv for a running time display, and
                             ▪ Message.rtv for a message display.
                           ➢ Example #1
                           In this example, an auto-switching occurs between the running time and results
                           displays.
                           1 In ResulTV, open two layouts you created earlier: Results.rtv and Time.rtv.
                           2 In FinishLynx, set the scoreboard options to Running Time | Normal and
                             Results | Auto.
                           3 When the running time in FinishLynx is armed or running, the Time.rtv layout, or
                             running time, is automatically displayed on the screen.
                           4 When the running time is stopped and the FinishLynx operator starts evaluating
                             the FinishLynx image, ResulTV automatically changes to the Results.rtv layout
                             and the results are displayed.
                                     Chapter 7 Sending Data to ResulTV          57




Note: The running time must be stopped in order for FinishLynx to send results to the
display. To stop the clock, simply Scoreboard | Stop (Alt + S) or use a photo-eye.
See the FinishLynx User’s Manual to configure a photo-eye or a FinishLynx camera
using Automatic Capture Mode.

➢ Example #2
In this example, auto-switching occurs between the start list, results, and a
scoreboard message.
1 In ResulTV, open three layouts you created earlier: Starts.rtv, Results.rtv and
  Message.rtv.
2 In FinishLynx, set the scoreboard options to Running Time | Off and Results |
  Auto.
3 When the FinishLynx operator opens a new event from the database, the
  Starts.rtv, or start list, is displayed in ResulTV.
4 When the FinishLynx operator begins evaluating the FinishLynx image, the
  results appear in ResulTV.
5 If a scoreboard message is sent, the Message.rtv layout causes the message to
  be displayed in ResulTV.
58   ResulTV 6.31 User's Guide




Manual and Automatic triggering of
text and bitmap objects
                           Layout objects (both text and bitmap) can be triggered either manually by
                           keyboard events or automatically through remote commands that appear in the
                           data stream. A trigger is a string of characters (up to 15 and not case sensitive).
                           When using a data stream, any string can be used. In order to have the ability to
                           manually trigger the object, the trigger value must be able to be generated by the
                           keyboard.
                           Any normal key (letter, number, punctuation, etc.) generates a trigger with that single
                           character as its value. Holding the Shift, Control, or Alt keys when hitting a normal key
                           will prepend a “S+”, “C+”, or “A+” to the trigger. You can use one or more of these
                           keys (in that order). Hitting the Function key generates the trigger “Fn”, where n is
                           the function key number. The Function keys can also be modified by Shift, Control,
                           and/or Alt. Note: the display screen must be active when manually triggering an
                           object, not the configuration screen.
                           A time can also be entered in the Time: field, in seconds, if you want the triggered
                           object to only appear for a period of time and then disappear. If you wish for it to
                           remain visible indefinitely, leave the Time: field blank.
                           The Trigger: and Time: fields can be found by going into an object’s Properties and
                           into the Basic tab.




                           Examples:
                           ▪  If you want to trigger an object using the F1 key, enter “F1” in the objects trigger
                              field.
                           ▪ If you want to trigger an object using the Control and F1 keys, enter “C+F1” in the
                              trigger field.
                           ▪ If you want to trigger an object using the Control, Alt, and J keys, enter “C+A+J”
                              in the trigger field.
                           Note: Be careful not to choose a trigger that is also a menu accelerator, as the
                           menu will capture the event and it will not make it to the display window to be
                           used as a trigger.
                                      Chapter 7 Sending Data to ResulTV             59



Sending a trigger through the data stream uses the same mechanism as the
automatic layout switching. The Command is “Trigger”, the Name is that of the string
being used as the trigger, and the Action can be “On”, “Off”, or “Toggle”, each
corresponding with how they wish to affect the state of the object they are triggering.

An active example of this feature can be found in the script ResulTV.lss in the
TimeStopped section:




In this case, the Trigger of F1 is being used to turn on an object that is in the Time.rtv
layout in ResulTV. The object’s corresponding properties in ResulTV can be seen
here:




Note: This object can also be triggered manually by hitting the F1 key since the
trigger used in the data stream is also normal key.
60   ResulTV 6.31 User's Guide




Sending data to television
                           ➢ Pre-requisites
                           To send ResulTV data to television, you need to connect the ResulTV computer to a
                           scan converter which is then connected to anything requiring a composite video feed.
                           Examples of this include a closed-circuit television feed or a computer controlling a
                           video scoreboard.
                           ➢ Instructions
                           Connect the monitor output on the ResulTV computer to a scan converter. The scan
                           converter converts the VGA signal into a video signal for use by television. Most scan
                           converters allow you to simultaneously display the ResulTV output on the computer
                           monitor as well as on the television monitor.

                            Tip: You can display the ResulTV configuration screen on a computer and send the
                            ResulTV display to another device (see "Displaying ResulTV on multiple
                            monitors"), such as a desktop monitor, scan converter, or projector.




Displaying ResulTV on multiple
monitors
                           The ResulTV display can be sent through the computer's VGA or HDMI port to an
                           external monitor, projector, or scan converter. This means you can view the ResulTV
                           configuration screen on the computer while viewing the ResulTV display on an
                           external monitor.
                           You can also run FinishLynx on the ResulTV computer while sending the ResulTV
                           display to the external monitor, saving you the need for a second computer.
                           Note: To use this feature, you must run Microsoft Windows 98 and higher.

                           ➢ Configure the Microsoft Windows display settings:
                           1 Attach an external monitor, projector, or scan converter to the VGA port (15-pin
                             female port) or HDMI port on the ResulTV computer.
                           2 Go to your computer’s Display Settings window.
                                                 Chapter 7 Sending Data to ResulTV            61



             3 Click to select #2, and then select Extend desktop to this display.




             ➢ Configure ResulTV:
             1   Start ResulTV.
             2   Click File | Options...
             3   Click the Display tab.
             4   Select Monitor 2.
             5   Click OK.
             The ResulTV display screen now appears on the second monitor.


Displaying ResulTV on a Rotated
Display
             The ResulTV layout can be rotated clockwise or counter-clockwise when it is sent to a
             display. This is required to be used with the Portable 84x168-Pixel LED Video Finish
             Line Display, and may be used with any display that has been rotated 90 degrees.
             ➢ To rotate layouts:
             1 Go to File | Options… | Display
             2 Select Rotate: (either Off (no rotation), Left (counter-clockwise), or Right
               (clockwise))
                                                                                               63




Scrolling the ResulTV Display
              ResulTV has the ability to scroll the display window. This is intended to support the
              Lynx 360 display.
              ➢ To scroll the display:
              1 Go to File | Options… | Display
              2 Set Scrolling: On (or Off to stop scrolling)
                                                                                                65




Index
A                                                 Configuring ResulTV for use with Meet
                                                    Manager for Track and Field • 22
Align horizontal • 50                             Configuring the Data Source • 12, 19
Align vertical • 50                               Configuring the dynamic source • 28
Automatic switching of display screens • 56, 58   Connecting the computers • 17
B                                                 Controlling font size • 40
                                                  Copyright Notice • 1
background color, changing • 38                   Creating a new data source • 18, 19
Basic text object editing • 34                    Creating a new layout or modifying an existing
Before you begin • 4                                layout • 31, 32, 34
border color, changing • 38                       Cutting, copying and pasting • 35
C                                                 D
Can I edit or delete the Lynx logo? • 47          data • 14
Changing the background color • 38                   data, dynamic • 14, 28, 42
Changing the border color • 38                       data, static • 14
Changing the face color • 38                         layout default, function of • 29
Changing the justification • 37                      local override, function of • 28
Changing the settings of multiple objects • 51    data source • 19, 20, 69
Changing the shadow color • 38                       data source, create a new • 19
Changing the size of the text object • 36         Data source basics • 19
Changing the text content in a text object • 37   delete • 20, 51
Changing the text position • 36                   Deleting a data source • 20
Changing the text size • 39                       Deleting multiple selected objects • 51
Clearing a dynamic graphic or text object • 45    Different RTV files • 32
color, changing • 38                              Display running time and results • 13, 20, 54
computer requirements • 13                        Displaying a custom graphic • 43
   requirements • 13                              Displaying an existing graphic • 45, 46, 47
   requirements, computer • 13                    Displaying FinishLynx image dynamically • 3, 13, 14,
   system requirements • 13                         42
configuration screen • 15                         Displaying graphics • 42, 47
   display screen • 15, 16                        Displaying ResulTV on multiple monitors • 10, 17,
   screens • 15, 16                                 60, 61, 63
Configuring FinishLynx for use with ResulTV •     Displaying static and dynamic data • 14
  21                                              dynamic • 69
Configuring Meet Manager Swimming for use         Dynamic image layout • 34
  with ResulTV • 27
Configuring Meet Manager Track and Field for      E
  Windows for use with ResulTV • 24               Editing the Layout • 12, 31
Configuring ResulTV for use with FinishLynx •     Entering static and dynamic text in the same text
  21                                                object • 35
Configuring ResulTV for use with Hy-Tek Meet      Existing layouts • 31
  Manager for Swimming • 26
66      Index


                                                    layout, open an existing • 31
F                                                   layouts, working with multiple • 55
face color, changing • 38                        Local override • 28
FinishLynx                                       LSS • 69
   FinishLynx logo, editing • 47
                                                 M
   FinishLynx, configurating ResulTV for use
       with • 21                                 Meet Manager for Swimming • 55
   FinishLynx, displaying a dynamic image • 42   Meet Manager for Track and Field • 55
   running time, sending from FinishLynx • 54    Moving to back or front • 39
   start list, sending from FinishLynx • 53
FinishLynx as a data source • 21
                                                 N
                                                 network, using ResulTV over • 18
G
graphic object • 69
                                                 O
graphics                                         Obtaining Lynx products and information • 3, 18
   graphic, displaying a dynamic FinishLynx •    Obtaining technical support • 3
      42                                         Opening an existing layout • 31
   graphics, display a custom • 43               Other layout editing commands • 50
   graphics, display an existing • 45, 46, 47
                                                 R
H
                                                 Recommended Microsoft Windows operating
hardware dongle • 69                               system • 40
Hy-Tek                                           ResulTV Basics • 13
   Hy-Tek, configuring ResulTV for use with •    ResulTV configuration screen • 15, 19, 20, 31,
       24, 27                                      69
   results, sending from Hy-Tek • 55             ResulTV display screen • 15, 16
   start list, sending from Hy-Tek • 55          ResulTV Introduction • 3
Hy-Tek Meet Manager as a data source • 22        ResulTV Quick Start Tutorial • 9
Hy-Tek Meet Manager for Swimming • 26            RSS • 69
Hy-Tek Meet Manager for Track and Field • 22     RTV file • 69
I                                                S
Increasing the COM ports • 17                    scan converter • 69
Inserting a new text field • 36                  Select all • 48, 50
Install the ResulTV software • 5                 Select All • 48, 50
Installing from the Lynx Marketing CD • 5        Select none • 50
Installing from the Lynx website • 6             Select None • 50
Installing ResulTV • 4, 9                        Selecting a new font for display • 40
Invert selection • 51                            Selecting a text object background color • 38
Invert Selection • 51                            Sending a start list and results from FinishLynx • 3,
                                                   13, 20, 53
J
                                                 Sending a start list from Meet Manager for
justification, changing • 37                       Swimming • 55
                                                 Sending a start list from Meet Manager for Track and
L                                                  Field for Windows • 20, 55
Layout default • 28, 29                          Sending data from FinishLynx • 53
layout file • 69                                 Sending Data to ResulTV • 12, 53
layout, editing • 31                             Sending data to television • 3, 60
                                                 Sending data using Hy-Tek Meet Manager • 13, 55
                                                                                     Index         67


Sending results from Meet Manager for
   Swimming • 55
                                                      W
Sending results from Meet Manager for Track           What's new in ResulTV 3.0 • 4
   and Field for Windows • 55                         Which RSS file do I select? • 20
Sending running time from FinishLynx • 54             Working with a dynamic data source • 28
serial connection • 17                                Working with graphics objects • 42, 47, 49
    COM ports, increasing • 17                        Working with multiple data sources • 20
    serial ports, increasing • 17                     Working with multiple layouts • 3, 55
Setting Up the Computers • 17, 21                     Working with text objects • 34
settings, changing for multiple objects at once •
   51
shadow color, changing • 38
Starting ResulTV • 14
static • 69
Step 1
    Start ResulTV • 9
Step 2
    Configure ResulTV to receive data • 9
Step 3
    Configure FinishLynx to send data to
        ResulTV • 10
Step 4
    Open a layout • 11
Step 5
    Send data to ResulTV from FinishLynx • 12
Support for Microsoft Windows compatible
   fonts • 39
Supporting other language fonts • 41
System requirements • 13
T
television • 60
text
    text field, inserting • 36
    text object content, changing • 37
    text objects, editing • 34
    text position, chaning • 36
    text size, changing • 39
text object • 69
U
Uses • 13
uses of ResulTV • 13
Using ResulTV over a network • 9, 17, 18, 19, 21,
  42
Using ResulTV over a serial connection • 9, 17, 19,
  21, 24, 27
V
VGA signal • 69
                                                                                                             69




Glossary of Terms
D                                                          R
data source                                                RSS
Computer from which ResulTV is getting its data.           Stands for ResulTV Source Script.
Data source examples include a computer running
FinishLynx or Hy-Tek Meet Manager. For ResulTV to          RTV file
display data from a data source, you must configure        A layout file with the file extension, RTV. Several
the data source from within ResulTV. Additionally,         layout files are included with ResulTV for your use.
you must configure FinishLynx and Hy-Tek Meet              You can also create your own layout files and modify
Manager to send data to ResulTV.                           existing ones. An example of an existing layout file is
                                                           the file 1024x768.rtv.
dynamic
Data or graphic that gets supplied and updated by          S
another data source, such as FinishLynx. Includes          scan converter
running time, results, start lists, and graphics such as
a FinishLynx image.                                        A device that converts a computer generated VGA
                                                           signal to a signal suitable for television broadcast.
G
                                                           static
graphic object
                                                           Graphic or other data that remains the same on every
An editable block of image on the ResulTV layout           screen. For example, the name of a competition and
screen.                                                    its sponsor.
H                                                          T
hardware dongle                                            text object
Security device that attaches to the computer running      An editable block of text on the ResulTV layout
ResulTV. ResulTV cannot run properly without this          screen.
device.
                                                           V
L
                                                           VGA signal
layout file
                                                           A signal sent by a computer. With the help of a scan
Visible from the configuration screen (see "ResulTV        converter, you can convert it to something that is
configuration screen"), is a template on which you can     usable by television, for example, NTSC or PAL
design your ResulTV display. Several layout, or RTV        format.
files, are available for you to use or modify. You can
also create layout files from scratch.

LSS
Stands for Lynx Scoreboard Script.
