# IPICO Elite Reader QSG

**Title:** IPICO Elite Reader QSG
**Slug:** `ipico-elite-reader-qsg`
**Category:** Lynx-Sold Timing Accessories › QSGs
**Type:** qsg
**Source URL:** https://finishlynx.com/wp-content/uploads/2012/12/IPICO_Elite_QSG_08.2018.pdf
**Use:** Refer to this for IPICO Elite Reader setup and integration.

---

LYNX SYSTEM DEVELOPERS, INC.


                   FinishLynx Cross Country LapTime RFID System
                                    IPICO ELITE READER Quick Start Guide

                               Verify that your system contains the components pictured below.
                                 If not, or if you need additional help, call: USA 978 556 9780




                           IPICO Elite Reader                             Antenna Mat(s) (2.40m x 1.20m)




                       AC Power Supply/Charger                                   IPICO Shoe Tag(s)




                           Cross-over Cable                            12v DC Battery Power Supply Connector

                                                                 Items Not Included
                                                                      Computer (laptop recommended) running
                                                                       Microsoft Windows, with an Ethernet port and
                                                                       a USB port.
                                                                      Network Hub/Switch
                                                                      Optional: IPICO Software (Dashboard/Tag
                       Lynx Resource USB Drive                         Scanner) and Registration (USB) Reader


Introduction
In this quick start guide, you will learn how to set up and configure the FinishLynx
LapTime plug-in, set up the IPICO RFID chip timing system, create a Map File,
collect chip times.
For more detailed or advanced instructions, consult the IPICO Sport Elite Reader
User’s Manual.




FinishLynx CROSS COUNTRY IPICO RFID LapTime System Quick Start Guide                                           Side 1 of 4
                                                                                       LYNX SYSTEM DEVELOPERS, INC.
Step 1:      Prep IPICO Equipment
a. Always fully charge the battery when you first                 b. Use a label maker to identify the Shoe Tags (chips)
   receive the unit. Time will depend on charger type                in a sequential manner.
   used, but 16 hours is typical (Constant Voltage
                                                                  See Map File for more information on Tag ID.
   13.8v type).
Note: Always recharge within 24 hours after use.

Step 2:      IPICO Reader and Mat(s) Setup for Competition or Testing
Read IPICO Sport Elite Reader User’s Manual for best practices on how to avoid radio interference and optimal
configuration using multiple mats (color order of mats and overlap are important to success of the system).
a. Position the antenna mat(s) at the finish location.            e. Connect the IPICO Reader to the network hub via
                                                                     an Ethernet (CAT5 or CAT6) cable.
b. Position the IPICO reader in a safe, protected
   location near the finish area.                                 f. Do NOT turn on the reader until the computer is on
                                                                     and connected to the network.
c. Plug the mat(s) into the appropriate port on the
   Reader.                                                        g. Power the IPICO Reader and allow a minimum of 2
                                                                     minutes for the system to boot and synchronize.
d. Connect the IPICO Reader to the power supply (12v
   DC battery can also provide power using the IPICO              h. Tune the antennas by pressing the Manual Tuning
   Battery power supply connectors.                                  Switch.

Step 3:      Configure Windows for a LapTime Device
The FinishLynx computer and the IPICO Reader must be configured on the same network subnet (the first 3
numbers of the IP address must be the same) to allow communication. The IPICO Elite Reader IP address factory
default is: 10.19.1.101.
To change the IP address of the IPICO Lite Reader          vii. From the Windows menu, navigate to the
a. Set the computer’s IP address to the same subnet              Windows Firewall.
   as the Reader:                                          viii. Click Turn Windows Firewall on or off. Turn
      i. From the Windows menu, navigate to the                  off the firewall for each network type.
         Control Panel.                                 b. Open a web browser and type the IPICO Reader’s
     ii. Double-click Network and Sharing Center.          IP address in the address bar: 10.19.1.101. Click
                                                           Ok with blank username/password.
    iii. Click Change Adapter Settings.
                                                        c. Click Network in the left menu pane.
    iv. Right-click Local Area Connection, then
         Properties.                                    d. Enter a new IP address and subnet mask for the
                                                           IPICO Reader that is compatible with your
     v. Select      Internet   Protocol  Version   4
                                                           FinishLynx network:
         (TCP/IPv4) and then Properties.
                                                                  IP address: 192.168.0.151
    vi. Click Use the following IP Address: and
         type:                                                    Netmask: 255.255.255.0

             IP address: 10.19.1.5                     e. Click the Ok button. Then click Apply Settings in
             Subnet mask: 255.0.0.0.                      the left menu pane.
             Click Ok, then Ok again.                  f. Reset the computer’s IP address back to the initial
                                                           settings (ie. 192.168.0.5).
Step 4:      Install the Software
a. Insert the Lynx Resource USB into your computer.               c. When prompted, enter the serial number found in
                                                                     the serial numbers file on the USB drive.
b. Follow the instructions to install FinishLynx
   software, LapTime (LT) plug-in, and Network COM                d. Open FinishLynx, click Help | About and verify a
   Port (NCP) plug-in.                                               serial number is listed next to LapTime and Network
                                                                     COM Port (this verifies installation was successful).




FinishLynx CROSS COUNTRY IPICO RFID LapTime System Quick Start Guide                                         Side 2 of 4
                                                                                       LYNX SYSTEM DEVELOPERS, INC.

Step 5:      Set Up LapTime Options
a. Open FinishLynx and click File | Options. Select
   the LapTime tab in the Options window.
b. Click the New button to create a new LapTime
   Device with all settings as shown to the right.
c. Click Browse… for Map File after one is created
   (see Step 7) and navigate to select the saved file.
d. Select the Results tab. Scroll the Fields list and
   enable Cumulative Split Time, Last Split Time
   and Laps.
e. Close, then restart FinishLynx. Go to the LapTime
   Options and verify Status is now Running.
Note: To use the IPICO System without a camera, go
to File | Options. On the General tab set Hardware
Type to None and then restart FinishLynx. This will
allow a manual start to be accepted.

Step 6:      Hidden Settings for LapTime Options
Optional: Follow these steps to allow the Time field in the Results Zone to be populated with the Cumulative Split
Time at the finish of the race (when laps to go = 0) when using a camera, instead of evaluating each competitor
from the image.
a. Open FinishLynx. Hold down CTRL + SHIFT and click              Blank (default): For the Reader on Port 10000. This
   File | Options. A window for Other Settings will               will read the chip every time it is detected. The Start
   open.                                                          and Duplicate mask time in FinishLynx will affect how
                                                                  often the Raw Data chip reads are accepted.
b. Click the + next to LapTime. A deeper menu
                                                                  (Recommended)
   appears. Select FillInTime and enter Value: 2
   (Always)                                                       FS: Can be used for the Reader at the finish line on
                                                                  Port 10200 to read the First Seen chip read only.
Optional: For advanced users – Follow these steps to
control which chip read is accepted by FinishLynx.                     Set the port to 10200 under LapTime | Options.


c. Scroll down and click the + next to IPICO and select           LS: Typical for the Reader used at a Start Line on Port
   Suffix.                                                        10200 to only accept the Last Seen chip read as the
                                                                  competitor has passed the mat for the last time.
d. In the text box, you have 3 options to use: FS (First
                                                                       Set the port to 10200 and Start Mask to 0.0
   Seen), LS (Last Seen) and Blank (Raw Data).
                                                                        when using IPICO and the LS hidden setting.

Step 7:      Creating a Map File for FinishLynx
A Map File is used to associate a specific Chip ID sequence with an ID/Bib number in FinishLynx. All shoe tags
(chips) should be labeled clearly in a sequential order before beginning to create a Map File.
Alternative Method: Use the optional IPICO Registration Reader and Tag Scanner application. See IPICO
documentation for details.
a. In FinishLynx, go to File | Options and select the             c. Create a New Blank Event, click LapTime in the
   Database tab. Note the Output Directory:. The *.lif               Information Zone and set the Laps to 1.
   file will be saved to this directory.
                                                                  d. Click Event | Manual Start… Hit the SPACEBAR.
b. If not using a camera: Select General tab and set
                                                                  e. Pass chip #1 over the mat and verify that the tag ID
   Hardware Type to None. Close and restart
                                                                     appears in the ID column, a time is assigned, and a
   FinishLynx. (This allows a Manual start for the timer
                                                                     number 1 appears in the Place column of the
   without having a camera attached).
                                                                     Results Zone.

FinishLynx CROSS COUNTRY IPICO RFID LapTime System Quick Start Guide                                        Side 3 of 4
                                                                                        LYNX SYSTEM DEVELOPERS, INC.

f. Continue passing shoe tags over the mat in                     i. There are two options to edit the .lif file and create
   sequential order and verify that Place matches the                the Map File for the shoe tag (chip) ID.
   chip ID/Bib number.                                                  i. Manually edit the *.lif by deleting the obsolete
g. Once all chips have been read into FinishLynx, click                    information and characters in Notepad.
   File | Save LIF.                                                    ii. Import the .lif file to Excel, delete the
                                                                           unnecessary columns, convert to a CSV file,
h. Navigate to the Output Directory: where the .lif file
                                                                           and rename as a *.txt file for the ID mapping.
   is saved and open the .lif file in Notepad or Excel.

Manual edit of the .Lif File to Map File
a. Manually edit the *.lif file until each line contains the      Example (no spaces before or after the comma):
   Place value, a comma, and the chip internal ID. (12-                       1,05800151f932
   digit code)                                                                2,05800151f60f
                                                                  b. Save the new file created as a *.txt file.
Create a Map File by Importing to Excel
a. Open Excel and click File | Open. Select All Files             h. Click File | Save As. Click the drop-down for Save
   in the File Type drop-down.                                       as type: and choose CSV (Comma delimited)
b. Navigate to the directory where the *.lif file was             i. In File Name: type a unique name for the file then
   saved. Double-click the *.lif file and the Text Import            Save.
   Wizard will open.
                                                                  j. In File Explorer, go to the directory where the CSV
c. Click the radio button for Delimited then Next.                   file was saved.
d. Click the box for Comma under Delimiters, then                 k. Right-click on the CSV file and select Open With
   Next.                                                             from the menu. Choose Notepad from the
e. Click on the chip ID column to highlight it.                      selections.

f. Click the radio button for Text under Column Data              l. Click File | Save As. In the File Name: delete the
   Format then Finish.                                               .csv extension.
     Newer version of Excel allow each column to be                    i. Verify that Save as type: is Text Documents
      highlighted and a Skip option to select – if so,                     (*.txt).
      select all columns except Place (1) and Shoe                     ii. Encoding should read ANSI.
      Tag (chip) ID (2) and select the Skip option.                   iii. Click Save and the Map File is complete.
      Click Finish.
g. An Excel file will open with each bit of unique data
   in a separate column.
      i. Delete all columns except the Place (1) and              After creating the Map File, be sure to direct the
         Shoe tag (chip) ID (2).                                  Map File directory to the file in the LapTime Option.
     ii. Delete Row 1 (LIF file information 0,0,…)

Step 8:      Test Map File
a. In FinishLynx, go to LapTime | Options. Click                  e. Pass a shoe tag (chip) over the mat (antenna) and
   Browse… next to Map File:.                                        see if result data is captured and displayed. The ID
                                                                     column should display the ID/Bib number entered in
b. Select the Map File from the previous step then Ok.
                                                                     the map file (not the internal Chip code).
c. Create a New Blank Event, click LapTime in the
                                                                  f. You are now ready for your first race!
   Information Zone and set the Laps to 1 or higher.
d. Click Event | Manual Start… and hit the SPACEBAR.

Note: Pay attention to the time as the chip passes over the antenna (beeps when read) and the time displayed in
the Cumulative Lap Time. If there is a significant delay and a time difference, shut down system and follow
directions methodically and accurately – this means there was not a proper synchronization of the systems.

     This completes the FinishLynx CROSS COUNTRY IPICO RFID LapTime System Quick Start Guide
FinishLynx CROSS COUNTRY IPICO RFID LapTime System Quick Start Guide                                          Side 4 of 4
