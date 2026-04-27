# IPICO Lite Reader QSG

**Title:** IPICO Lite Reader QSG
**Slug:** `ipico-lite-reader-qsg`
**Category:** Lynx-Sold Timing Accessories › QSGs
**Type:** qsg
**Source URL:** https://finishlynx.com/wp-content/uploads/2012/12/IPICO_Lite_QSG_08.2018.pdf
**Use:** Refer to this for IPICO Lite Reader setup and integration.

---

LYNX SYSTEM DEVELOPERS, INC.


                    FinishLynx Cross Country LapTime RFID System
                                     IPICO LITE READER Quick Start Guide

                                Verify that your system contains the components pictured below.
                                 If not, or if you need additional help, call: USA 978-556-9780




                        IPICO STK-Lite Reader                             Antenna Mat(s) (2.40m x 1.20m)




                       AC Power Supply/Charger                                   IPICO Shoe Tag(s)




                            Ethernet Cable                             12v DC Battery Power Supply Connector

                                                                 Items Not Included
                                                                    Computer (laptop recommended) running
                                                                     Microsoft Windows, with an Ethernet port and a
                                                                     USB port.
                                                                   Network Hub/Switch
                                                                 Optional: IPICO Software (Dashboard/Tag Scanner)
                    FinishLynx Resource USB Drive                and Registration (USB) Reader


Introduction
In this quick start guide, you will learn how to set up and configure the FinishLynx
LapTime plug-in, set up the IPICO RFID chip timing system, create a Map File
and collect chip times.
For more detailed or advanced instructions, consult the IPICO Sport Lite Reader
User’s Manual.




FinishLynx Cross Country LapTime RFID System – IPICO Lite Reader QSG                                            Page 1 of 4
                                                                                           LYNX SYSTEM DEVELOPERS, INC.
Step 1:      Prep the IPICO Equipment
a. Always fully charge the battery when you first                      b. Use a label maker to identify the Shoe Tags (chips)
   receive the unit. Time will depend on charger type                     in a sequential manner.
   used, but 16 hours is typical (Constant Voltage                       - See Map File for more information on Tag ID.
   13.8v type).
Note: Always recharge within 24 hours after use.

Step 2:      IPICO Reader and Mat(s) Setup
Read the IPICO Sports Lite Reader User’s Manual for best practices to avoid radio interference and optimal
configuration using multiple mats (color order of mats and overlap are important to success of the system).
a. Position the antenna mat(s) at the finish location.       e. Connect the IPICO Reader to the network hub via
                                                                 an Ethernet (CAT5 or CAT6) cable.
b. Position the IPICO reader in a safe, protected
   location near the finish area.                            f. Do NOT turn on the reader until the computer is on
                                                                 and connected to the network.
c. Plug the mat(s) into the appropriate port(s) on the
   Reader.                                                   g. Power on the IPICO Reader and allow a minimum
                                                                 of 2 minutes for the system to boot and
d. Connect the IPICO Reader to the power supply (a               synchronize.
   12v DC battery can also provide power using the
   IPICO Battery power supply connectors.                    h. Tune the antennas by pushing the Calibrate
                                                                 Antenna(s) switch.

Step 3:      Configure Network Settings for Reader and Computer
The FinishLynx computer and the IPICO Reader must be configured on the same network subnet (the first 3
numbers of the IP address must be the same) to allow communication. The IPICO Lite Reader IP address factory
default is: 10.19.1.51.
To Change the IP Address of the IPICO Lite Reader                         viii. Click Turn Windows Firewall on or off. Turn
a. Set the computer’s IP address to the same subnet                             off the firewall for each network type.
   as the Reader:                                                      b. Open a web browser and type the IPICO Reader’s
     i. From the Windows menu, navigate to the                            IP address in the address bar: 10.19.1.51.
        Control Panel.                                                 c. Click Ok with a blank username/password.
    ii. Double-click Network and Sharing Center.                       d. Click Network in the left menu pane.
   iii. Click Change Adapter Settings.                                 e. Enter a new IP address and subnet mask for the
   iv. Right-click Local Area Connection, then                            IPICO Reader that is compatible with your
        Properties.                                                       FinishLynx network:
    v. Select     Internet   Protocol   Version    4                             IP address: 192.168.0.151
        (TCP/IPv4) and then Properties.                                          Netmask: 255.255.255.0

   vi. Click Use the following IP Address: and type:                   f. Click the Ok button. Then click Apply Settings in
                                                                          the left menu pane.
            IP address: 10.19.1.5
            Subnet mask: 255.0.0.0.                                   Reset the computer’s IP address back to the initial
            Click Ok, then Ok again.                                  settings (ie. 192.168.0.5).
 vii. From the Windows menu, navigate to the
       Windows Firewall.

Step 4:      Install the FinishLynx Software & Plug-In
a. Insert the Lynx Resource USB into your computer.                    d. Open FinishLynx, click Help | About and verify a
b. Follow the instructions on the drive to install                        serial number is listed next to LapTime and
   FinishLynx software, LapTime (LT) plug-in and                          Network COM Port (this verifies installation was
   Network COM Port (NCP) plug-in.                                        successful.
c. When prompted, enter the serial number found in
   the serial numbers file on the USB drive.

FinishLynx Cross Country LapTime RFID System – IPICO Lite Reader QSG                                               Page 2 of 4
                                                                                             LYNX SYSTEM DEVELOPERS, INC.

Step 5:      Set Up LapTime Options
a. Open FinishLynx and click File | Options.
b. Select the LapTime tab in the Options window.
c. Click the New button to create a new LapTime
   Device with all settings as shown to the right.
d. Click the Browse… button for Map File after one is
   created (see Step 7) and navigate to select the
   saved file.
e. Select the Results tab. Scroll the Fields list and
   enable Cumulative Split Time, Last Split Time
   and Laps.
f. Close and restart FinishLynx. Go to the LapTime
   Options and verify Status is now Running.
Note: To use the IPICO System without a camera, go
to File | Options. On the General tab, set Hardware
Type to None, then restart FinishLynx. This will allow
a manual start to be accepted.

Step 6:      Hidden Settings for LapTime Options
Optional: Follow these steps to allow the Time field in the Results Zone to be populated with the Cumulative Split
Time at the finish of the race (when laps to go = 0) when using a camera, instead of evaluating each competitor from
the image.
a. Open FinishLynx. Hold down CTRL + SHIFT and click File | Options. A window for Other Settings will open.
b. Click on the + next to LapTime. A deeper menu will appear.
c. Select FillInTime and enter Value: 2 (Always)

Step 7:      Creating a Map File for FinishLynx
A Map File is used to associate a specific Chip ID sequence with an ID/Bib number in FinishLynx. All shoe tags
(chips) should be labeled clearly in a sequential order before beginning to create a Map File.
Alternative Method: Use the optional IPICO Registration Reader and Tag Scanner application. See IPICO
documentation for details.
a. In FinishLynx, go to File | Options and select the                  f. Continue passing shoe tags over the mat in
   Database tab. Note the Output Directory:. The                          sequential order and verify that Place matches the
   *.lif file will be saved to this directory.                            chip ID/Bib number.
b. If not using a camera: select the General tab and                   g. Once all chips have been read into FinishLynx,
   set the Hardware Type to None. Close and restart                       click File | Save LIF.
   FinishLynx. (This allows a Manual start for the timer
                                                                       h. Go to the Output Directory: where the .lif file is
   without having a camera attached).
                                                                          saved and open the .lif file in Notepad or Excel.
c. Create a New Blank Event, click LapTime in the
                                                                       i. There are two options to edit the .lif file and create
   Information Zone and set the Laps to 1.
                                                                          the Map File for the shoe tag (chip) ID.
d. Click Event | Manual Start… then hit the SPACE                            i. Manually edit the *.lif by deleting the obsolete
   BAR.                                                                         information and characters in Notepad.
e. Pass chip #1 over the mat and verify that the tag ID                     ii. Import the .lif file to Excel, delete the
   appears in the ID column, a time is assigned, and a                          unnecessary columns, convert to a CSV file,
   number 1 appears in the Place column of the                                  and rename as a *.txt file for the ID mapping.
   Results Zone.


FinishLynx Cross Country LapTime RFID System – IPICO Lite Reader QSG                                                 Page 3 of 4
                                                                                            LYNX SYSTEM DEVELOPERS, INC.

Manual Edit of the .lif File to Map File
a. Manually edit the *.lif file until each line contains the Place value, a comma and the chip internal ID. (12-digit
   code)
            Example (no spaces before or after the comma):
            1,05800151f932
            2,05800151f60f

b. Save the new file created as a *.txt file.

Create a Map File by Importing to Excel
a. Open Microsoft Excel. Click on File | Open and                           i. Delete all columns except the Place (1) and
   select All Files in the File Type drop-down.                                Shoe tag (chip) ID (2).
b. Navigate to the directory where the *.lif file was                      ii. Delete Row 1 (LIF file information 0,0,….).
   saved. Double-click the *.lif file and the Text Import              h. Click File | Save As then the drop-down for Save
   Wizard will open.                                                      as type: and choose CSV (Comma delimited).
c. Click the radio button for Delimited then Next.                     i. In File Name: type in a unique name for the file and
d. Click the box for Comma under Delimiters and                           click Save.
   click Next.                                                         j. Navigate in File Explorer to the directory where the
e. Click on the Chip ID column to highlight it.                           CSV file was saved.

f. Click the radio button for Text under Column data                   k. Right-click on the CSV file and select Open With
   format and click Finish.                                               from the menu, then choose Notepad.
     Newer versions of Excel allow each column to                     l. Click File | Save As. In File Name: delete the .csv
       be highlighted and a Skip option to select – if                    extension.
       so, select all columns except Place (1) and                           i. Verify that Save as type: is Text Documents
       Shoe Tag (chip) ID (2) and select the Skip                               (*.txt).
       option, click Finish.
                                                                            ii. Encoding should read ANSI.
g. An Excel file will open with each bit of unique data                    iii. Click Save. The Map File is complete.
   in a separate column.
After creating the Map File, be sure to direct the Map File directory to the file in the LapTime Options.

Step 8:      Test Map File
a. In FinishLynx, go to LapTime | Options. Then click                  d. Click Event | Manual Start… then the SPACE BAR.
   Browse… next to Map File:.
                                                                       e. Pass a shoe tag (chip) over the mat (antenna) and
b. Navigate and select the map file created in the                        see if result data is captured and displayed. The ID
   previous step. Click Ok.                                               column should display the ID/Bib number entered
                                                                          in the map file (not the internal Chip code).
c. Create a New Blank Event, click LapTime in the
   Information Zone and set the Laps to 1 or higher.                   f. You are now ready for your first race!

Note: Pay attention to the time as the chip passes over the antenna (beeps when read) and the time displayed in
the Cumulative Lap Time. If there is a significant delay and a time difference, shut down system and follow
directions methodically and accurately – this means there was not a proper synchronization of the systems.



          This completes the FinishLynx CROSS COUNTRY IPICO RFID LapTime System Quick Start Guide.




FinishLynx Cross Country LapTime RFID System – IPICO Lite Reader QSG                                                Page 4 of 4
