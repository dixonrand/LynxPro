# FieldLynx Lite QSG

**Title:** FieldLynx Lite QSG
**Slug:** `fieldlynx-lite-qsg`
**Category:** Lynx-Sold Software › QSGs
**Type:** qsg
**Source URL:** https://finishlynx.com/wp-content/uploads/2015/04/FieldLynx_Lite_QSG.pdf
**Use:** Refer to this for setup and operation of FieldLynx Lite. Note: Lite does not support meet management database connections.

---

LYNX SYSTEM DEVELOPERS, INC.

                                           FieldLynx Lite
                                            Quick Start Guide
Introduction
The following guide will walk you through the installation, setup and operations of FieldLynx Lite, including
connections to display boards, wind gauge and LaserLynx. Equipment needed may include: wireless access point,
Ethernet switch, USB-Serial adapter(s). If you need additional help, please contact Tech Support:
support@finishlynx.com.

Step 1       Installation
a. Locate the FieldLynx Lite installer (FLLite #.## -
   SVLite#.## - LL#.## - WG#.##.exe) from the Lynx
   USB drive or download the program from
   www.finishlynx.com
b. Right-click on the installer and click Run as
   Administrator.
c. Follow the prompts to complete the install.
d. Open FieldLynx Lite, click Help | About and verify
   the latest versions are installed.
e. Optional – install the USB-Serial adapter.




Step 2       Activation
a. Open the FieldLynx Lite Program.
b. The Activate FieldLynxLite dialog appears.
           a. Take a picture and send to
               support@finishlynx.com.
           b. Lynx support will provide a serial number.
c. Enter the Serial Number (After the ‘-‘ only):
d. Click Activate.




www.finishlynx.com                                                                                      Page 1 of 5
                                                                                                  FieldLynx Lite
                                                                                                  Quick Start Guide


Step 3       Configure the Computer/Tablet Network Settings
a. From the Windows start menu search for the          e. Select Use the Following IP address: and enter
   Network and Sharing Center.                             the desired IP address of the computer.
b. Click Change Adapter settings.                      Note: FieldLynx LITE tablets will typically be assigned
c. Right-click on the network connection; select       as 192.168.0.100 and up.
   Properties.                                         f. Enter the subnet mask of 255.255.255.0
d. Select Internet Protocol Version 4 (TCP/IPv4)       g. Click OK and close the windows.
   then Properties.




Step 4       Configuring the Database Options
a. Open the FieldLynx LITE Program and navigate
   to Options | Preferences.
b. Click the Database tab.
    i. Click the Browse… button to set the Input
       Directory: to the location of the competition
       folder that will store the lynx.ppl file.




www.finishlynx.com                                                                                    Page 2 of 5
                                                                            FieldLynx Lite
                                                                            Quick Start Guide




Step 5       Configuring the LaserLynx Options
a. Open the FieldLynx LITE Program and navigate to
   Options | Preferences.
b. Click the LaserLynx tab.
    ii. Click the Laser: drop-down and select the
        model of laser being used.
   iii. Click the Serial: drop-down and select the
        COM# of the USB-Serial adapter used for
        communication between the FieldLynx LITE
        computer and the laser.
   iv. Check that the serial protocol parameters
        match the laser configuration. The Mato MTS-
        602R default is 9600-8-None-1 and Flow
        Control to None.




Step 6       Configuring the Scoreboard Options
a. Open the FieldLynx Lite Program and navigate to Options | Preferences.
b. Click the Scoreboard tab.
    i. Click the New button to create a new
       scoreboard output.
   ii. Click the Name text box and enter a name for
       the output so it is easy to distinguish if you
       have multiple scoreboards.
  iii. Click to select the appropriate Results
       Scripts: (Metric: and English:) for the
       scoreboard being used.
  iv. Click the Serial: drop-down and select the
       communication method for the scoreboard.
       These settings are specific to the scoreboard
       and manufacturer.
   v. Click the Settings button to choose the
       specific data parameters for the scoreboard.

NOTE:
Close and restart FieldLynx Lite to initialize the
Scoreboard setup. Navigate back to Scoreboard
options and confirm that the Status is now Running for your scoreboard.




www.finishlynx.com                                                             Page 3 of 5
                                                                                                       FieldLynx Lite
                                                                                                        Quick Start Guide


Step 7       Configuring the Wind Options
a. Open the FieldLynx Lite Program and navigate to
     Options | Preferences.
b. Click the Wind tab.
   i. Click the Module: drop-down and select the wind
      gauge being used.
  ii. Click the Serial: drop-down and select the
      communication method for the wind gauge. These
      settings are specific to the wind gauge and
      manufacturer. The Lynx wind gauge (WG-Lynx)
      default is 9600-8-None-1 and Flow Control to None.




Step 8       Event Setup
From the FieldLynx Lite main window, in the Event box:
a. Select the correct unit of Measure.
b. Select the correct Event Type.
c. (Optional) Enter Event #, Round #, Flight # and Event Name. Used for scoreboard display only.

NOTES: The data entry fields and button in the Mark box will update automatically, based on the selected Event
Type. For vertical jumps, click the Bar Height to enter a new value.

Step 9       LaserLynx Setup
Follow the instructions in the LaserLynx QSG to set up the control measurements.

Step 10 Athlete Setup
Method 1 – Using Meet Management software
a. Configure the meet management software to save the Lynx Interface files (lynx.ppl) in the folder configured in
   the Database Options during Step 3.

Method 2 – Using FieldLynx Lite
a. Enter the ID, Last Name, First Name and Affiliation in the Athlete box.
b. Click the Add button.

NOTE: Athletes will be added to the lynx.ppl file located in the folder configured in the Database Options during
Step 4.

Method 3 – Using Excel or Notepad
a. Manually create a lynx.ppl file (csv) using Excel or Notepad and save it in the folder configured in the
   Database Options during Step 4.
b. Format:
   ID, LastName, First Name, Affiliation
   ID, LastName, First Name, Affiliation


www.finishlynx.com                                                                                            Page 4 of 5
                                                                                                              FieldLynx Lite
                                                                                                               Quick Start Guide


Step 10 Competition
The event should also be done on the traditional paper as backup because in vertical events the previous attempts are not
saved for each competitor.
a. Enter the Athlete ID: for the athlete up and then click Find.
       i. The athlete’s information will appear in the Athlete box.
b. Record the athlete’s mark and enter it in the Mark box.


               Tap and enter the values using the keyboard.

                                                                             Obtain a measurement from a LaserLynx.

               Then, click.


               Obtain a wind reading from the wind gauge
               Note: click the wind cell in the grid to show                 Clears height (vertical jumps)
               the Wind button (horizontal jumps)

               To erase the mark and enter a new one.                        Foul

                                  To select alternative board
                                                                             Pass
                                  (horizontal jumps)

               Convert units (English/Metric)                                Send mark to the scoreboard




www.finishlynx.com                                                                                                 Page 5 of 5
