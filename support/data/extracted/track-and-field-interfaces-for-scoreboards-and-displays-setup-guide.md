# Track & Field Interfaces for Scoreboards & Displays Setup Guide

**Title:** Track & Field Interfaces for Scoreboards & Displays Setup Guide
**Slug:** `track-and-field-interfaces-for-scoreboards-and-displays-setup-guide`
**Category:** Lynx-Sold and Third-Party Scoreboards and Displays › Daktronics
**Type:** guide
**Source URL:** https://www.daktronics.com/web-documents/customer-service-manuals/dd3059635.pdf
**Use:** Refer to this for setting up Daktronics scoreboard and display integration with FinishLynx.

---

TRACK & FIELD INTERFACES FOR
                           SCOREBOARDS & DISPLAYS

                                   SETUP GUIDE
                                      P1125
                                       DD3059635
                                         Rev 03
                                     14 March 2024




                             FOR TRACK SYSTEMS SOLD
                               PRIOR TO APRIL 2015,
                                REFER TO ED-14511




201 Daktronics Drive
Brookings, SD 57006-5128
www.daktronics.com/support
800.325.8766
Copyright © 2019-2024
All rights reserved. While every precaution has been taken in the preparation of this manual, the publisher assumes no
responsibility for errors or omissions. No part of this book covered by the copyrights hereon may be reproduced or copied
in any form or by any means—graphic, electronic, or mechanical, including photocopying, taping, or information
storage and retrieval systems—without written permission of the publisher.
Daktronics trademarks are property of Daktronics, Inc. All other trademarks are property of their respective companies.
Table of Contents
1   Introduction���������������������������������������������������������������������������������������������������������������������������1
    Resources����������������������������������������������������������������������������������������������������������������������������������������������1
    Software Conventions��������������������������������������������������������������������������������������������������������������������������1
2   LED Scoreboards�������������������������������������������������������������������������������������������������������������������2
    OmniSport 2000 & Football/Track Scoreboard���������������������������������������������������������������������������������2
    OmniSport 2000 & Lane/Place/Time Track Scoreboard������������������������������������������������������������������3
    Hy-Tek Results with OmniSport 2000����������������������������������������������������������������������������������������������������4
    Fully Automatic Timing (FinishLynx)�����������������������������������������������������������������������������������������������������5
      FinishLynx Setup for Football/Track Scoreboard���������������������������������������������������������������������������5
      Hy-Tek Setup with FinishLynx�����������������������������������������������������������������������������������������������������������6
      FinishLynx Setup for Lane/Place/Time Track Scoreboard������������������������������������������������������������7
      FinishLynx Setup for TI-2020, TI-2021, or TR-3101����������������������������������������������������������������������������9
      FinishLynx Tips & Troubleshooting�������������������������������������������������������������������������������������������������10
    Fully Automatic Timing (FlashTiming)������������������������������������������������������������������������������������������������11
      FlashTiming Setup for Football/Track Scoreboard����������������������������������������������������������������������11
      Hy-Tek Setup with FlashTiming������������������������������������������������������������������������������������������������������12
    FAQ������������������������������������������������������������������������������������������������������������������������������������������������������12
3   LED Video Displays�������������������������������������������������������������������������������������������������������������14
    OmniSport 2000 & LED Video Display�����������������������������������������������������������������������������������������������14
    Hy-Tek Results with OmniSport 2000��������������������������������������������������������������������������������������������������15
    Fully Automatic Timing (FinishLynx)���������������������������������������������������������������������������������������������������16
    Fully Automatic Timing (FlashTiming)������������������������������������������������������������������������������������������������19
    Hy-Tek Results for Video Display��������������������������������������������������������������������������������������������������������21
    Sending Start Lists, Results, & Team Scores from Hy-Tek�����������������������������������������������������������������22
      Request Choices����������������������������������������������������������������������������������������������������������������������������22
    MeetPro Results for Video Display����������������������������������������������������������������������������������������������������23
    Sending Start Lists & Results from DirectAthletics����������������������������������������������������������������������������24
    FAQ������������������������������������������������������������������������������������������������������������������������������������������������������24
4   LED Message Displays (Galaxy/M3)���������������������������������������������������������������������������������26
    OmniSport 2000 & LED Message Display�����������������������������������������������������������������������������������������26
    Hy-Tek Results with OmniSport 2000��������������������������������������������������������������������������������������������������27
    Fully Automatic Timing (FinishLynx)���������������������������������������������������������������������������������������������������28
    Fully Automatic Timing (FlashTiming)������������������������������������������������������������������������������������������������30
    Hy-Tek Results for Message Display���������������������������������������������������������������������������������������������������32
    Sending Start Lists, Results, & Team Scores from Hy-Tek�����������������������������������������������������������������33
      Request Choices����������������������������������������������������������������������������������������������������������������������������33
    MeetPro Results for Message Display�����������������������������������������������������������������������������������������������34
    Sending Start Lists & Results from DirectAthletics����������������������������������������������������������������������������35
    Daktronics Communication Server (DCS) Installation & Setup�����������������������������������������������������35
    FAQ������������������������������������������������������������������������������������������������������������������������������������������������������37
5   Creating RTD Sequences���������������������������������������������������������������������������������������������������40
    Hy-Tek Results with Running Time������������������������������������������������������������������������������������������������������40

                                                                           –i–
Table of Contents
     DirectAthletics Results with Running Time����������������������������������������������������������������������������������������41
     FinishLynx Results with Running Time�������������������������������������������������������������������������������������������������43
     FlashTiming Results with Running Time����������������������������������������������������������������������������������������������44
6   FieldLynx Setup & Sequence Creation�����������������������������������������������������������������������������46
       FieldLynx Setup for Portable Timer������������������������������������������������������������������������������������������������46
       FieldLynx Setup for LED Message Display������������������������������������������������������������������������������������48
     Daktronics Communication Server (DCS) Installation & Setup�����������������������������������������������������50
     RTD Sequence Creation��������������������������������������������������������������������������������������������������������������������53
7   Additional Resources���������������������������������������������������������������������������������������������������������54
     Contact Information��������������������������������������������������������������������������������������������������������������������������54
       Daktronics���������������������������������������������������������������������������������������������������������������������������������������54
       FinishLynx����������������������������������������������������������������������������������������������������������������������������������������54
       Hy-Tek����������������������������������������������������������������������������������������������������������������������������������������������54
       FlashTiming��������������������������������������������������������������������������������������������������������������������������������������54
     Daktronics Manuals����������������������������������������������������������������������������������������������������������������������������54
A Reference Drawings�����������������������������������������������������������������������������������������������������������55




                                                                          – ii –
1   Introduction
    This manual explains the settings required to send data to a Daktronics scoreboard or
    display system from third-party FinishLynx™ and FlashTiming timing software as well as
    Hy-Tek Meet Manager® and DirectAthletics MeetPro results software. This manual also
    describes connection to FieldLynx to display information for field events.
    For other questions concerning this system, refer to the telephone numbers listed in
    Section 7: Additional Resources (p.54).

    Resources
    Figure 1 illustrates a Daktronics drawing label.
    The drawing number is located in the lower-
    right corner of a drawing. This manual refers
    to drawings by listing the last set of digits. In
    the example, the drawing would be referred
    to as DWG-1007804. All references to drawing                                              Drawing Number
    numbers, appendices, figures, or other manuals
                                                                         Figure 1: Drawing Label
    are presented in bold typeface. Any drawings
    referenced in a particular section are listed at
    the beginning of it as shown below:
    Reference Drawings:
       System Riser Diagram........................................................................................ DWG-1007804
    Daktronics identifies manuals by the DD or ED number located on the cover page.

    Software Conventions
    This manual contains the following software conventions and terminology:

                                   Bold text indicates an item that requires direct action, such as clicking,
                                   pressing, selecting, or formatting. Bold text is also used to reference
     Bold
                                   items within the manual, such as figures or sections, as well as other
                                   documents and important notes.

     Italics                       Text in italics indicates onscreen text or labels that are not clickable.

     [X]                           Bold text in brackets represents a keyboard key to press.

                                   Text or commands that may be typed are shown in quotes. Quotes also
     “Quotes”
                                   indicate folder names and file paths.

     Click                         Press and release the left mouse button.

     Double-click                  Press and release the left mouse button twice.

     Right-click                   Press and release the right mouse button.

                                   To select means to highlight or mark, such as by placing a checkmark 
     Select
                                   in a nearby box; clicking will not necessarily perform an action.

                                   This stands for “followed by”; typically when describing menu navigation.
     >
                                   For example: Go to File > Open.




                                                  Introduction
                                                        1
2   LED Scoreboards

    OmniSport 2000 & Football/Track Scoreboard
    Reference Drawings:
       System Riser: FB/Track Scbd w/ Omni2K- Track Side....................................... DWG-186535
    This setup displays running time, lane results, and event/heat information on a Daktronics
    football scoreboard from an OmniSport 2000 timing console. A track button interface
    connects to the J7 SWITCH INPUTS jack on the console. The track button interface
    supports up to 8 pushbutton switches to manually record the times for each lane.
    See Figure 2 and DWG-186535 for typical components and connections to a football/
    soccer scoreboard. Refer also to the scoreboard installation manual for internal signal
    connections or wireless radio control settings. For optional Hy-Tek Meet Manager setup,
    refer to Hy-Tek Results with OmniSport 2000 (p.4).

     Note: For timing up to 10 lanes, a larger track button interface will connect to the
           J10 NEAR jack on the timing console. This also supports up to 3 buttons per lane.

    For more about track operation and settings, refer to the OmniSport 2000 Timing Console
    Operation Manual (ED-13312), available online at www.daktronics.com/manuals.

                                 FOOTBALL/TRACK SCOREBOARD

                         HOME                                            GUEST
                                                DAKTRONICS


                                 PLACE EVENT             HEAT        LANE
                        T.O.L.                                                T.O.L.

                          HOME                                           GUEST
                     USB-to-Serial
                       Adapter
                                                DAKTRONICS


                                 PLACE EVENT             HEAT        LANE
                        T.O.L.                      Serial
                                                                              T.O.L.Wired (or wireless)
                                                                                       to Scoreboard
                                                 9-pin to 9-pin
                                               (or Serial Radio)
      OPTIONAL      HOME
                    HAWKS                                                GUEST
                                                                         BEARS
      HY-TEK LAPTOP
      Meet Manager v4.0+                        DAKTRONICS               J7       J6           J2
                                 PLACE    EVENT              HEAT     LANE
                        T.O.L.                                                T.O.L.


                                                                    OMNISPORT CONSOLE
                                  TRACK BUTTON                      Insert: LL-2573
                                    INTERFACE                       Mode: Track

    Figure 2: OmniSport 2000 with Football/Track Scoreboard & Optional Hy-Tek



                                         LED Scoreboards
                                                2
OmniSport 2000 & Lane/Place/Time Track Scoreboard
Reference Drawings:
   System Riser: FB/Track Scbd w/ Omni2K- Track Side....................................... DWG-186535
This setup will display running time and lane results from an OmniSport 2000 timing
console on a Daktronics track scoreboard, which typically shows 6, 8, or 10 lines of
information at once. Additional scoreboard modules may be used to show Event/
Heat, Record Time, and Home/Guest/2/3 scoring information. A track button interface
connects to the J7 SWITCH INPUTS jack on the console. The track button interface
supports up to 8 pushbutton switches to manually record the times for each lane.
See Figure 3 and DWG-186535 for typical components and connections to a lane/place/
time track scoreboard. Refer also to the scoreboard installation manual for internal signal
connections or wireless radio control settings. For optional Hy-Tek Meet Manager setup,
refer to Hy-Tek Results with OmniSport 2000 (p.4).

 Note: For timing up to 10 lanes, a larger track button interface will connect to the
       J10 NEAR jack on the timing console. This also supports up to 3 buttons per lane.

For more about track operation and settings, refer to the OmniSport 2000 Timing Console
Operation Manual (ED-13312), available online at www.daktronics.com/manuals.

                     LANE/PLACE/TIME TRACK SCOREBOARD
                                            DAKTRONICS                              DAKTRONICS


                   LANE   PLACE      TIME                LANE   PLACE        TIME




                 USB-to-Serial
                   Adapter
                                                                                    Wired (or wireless)
                                                                                     to Scoreboard
                                                 Serial
                                              9-pin to 9-pin
                                            (or Serial Radio)
 OPTIONAL
 HY-TEK LAPTOP
 Meet Manager v4.0+                                                     J7          J6           J2




                                                                   OMNISPORT CONSOLE
                             TRACK BUTTON                          Insert: LL-2573
                               INTERFACE                           Mode: Track

Figure 3: OmniSport 2000 with Lane/Place/Time Track Scoreboard & Optional Hy-Tek




                                   LED Scoreboards
                                          3
Hy-Tek Results with OmniSport 2000
This setup allows lane, place, and time information to be pulled into by Hy-Tek Meet
Manager software from the OmniSport 2000. This setup DOES NOT allow Hy-Tek data to
be displayed on a scoreboard.
The OmniSport 2000 console connects to a Hy-
Tek computer via the J6 RESULTS PORT jack. The
serial connection may be wire or radio. On the
Hy-Tek computer, use the following settings:
1.	 Open the Meet Manager program.
2.	 Click Run on the main menu.
3.	 Go to Interfaces > Set-up > Track Button
    Timer (Figure 4).
4.	 Select Daktronics OmniSport 2000, and then
    click OK.
5.	 Go to Interfaces > Track Button Timer -
    OmniSport 2000 > Open/Close Serial Port.          Figure 4: Track Button Timer Vendor
6.	 For the Track Button Finish Timer (0-16) option
    (Figure 5), select the COM port number
    on the Hy-Tek computer connected to the
    OmniSport, and then click OK.
7.	 Go to Interfaces > Track Button Timer -
    OmniSport 2000 > Test Communication.
    When all connections and configurations
    are correct, the Communications Passed
    message appears with the version of
    firmware in the OmniSport 2000 console
    (Figure 6). Click OK.
                                                      Figure 5: Serial Port for Track Button




   Figure 6: Communications Passed




                                LED Scoreboards
                                       4
Fully Automatic Timing (FinishLynx)
The FinishLynx™ Timing System consists of a personal computer, FinishLynx software, and a
photo finish camera for Fully Automatic Timing (FAT).

FinishLynx Setup for Football/Track Scoreboard
Reference Drawings:
   Track/Football SCBD w/ FinishLynx & All Sport 5000........................................... DWG-95152
   Track/Football SCBD w/ FinishLynx, In Field ....................................................... DWG-95153
This setup will display FinishLynx running time, lane results, and event/heat information
on a Daktronics football/track scoreboard. This setup DOES NOT allow Hy-Tek data to be
displayed on a scoreboard. For optional Hy-Tek Meet Manager setup, refer to Hy-Tek
Setup with FinishLynx (p.6).
See Figure 7 for typical components and connections. For cabling required when a
FinishLynx computer is next to the All Sport 5000 in the press box, refer to DWG-95152.
When the FinishLynx computer is on the field and the All Sport 5000 is in the press box,
refer instead to DWG-95153. Refer also to the scoreboard installation manual for internal
signal connections or wireless radio control settings.

                                 FOOTBALL/TRACK SCOREBOARD

                         HOME                                         GUEST
                                                DAKTRONICS


                                 PLACE EVENT             HEAT       LANE
                        T.O.L.                                             T.O.L.

                         HOME                                         GUEST
    FINISHLYNX                                  DAKTRONICS

    LAPTOP                       PLACE EVENT             HEAT       LANE
                    USB-to-Serial                                            Wired (or wireless)
                     T.O.L.
                      Adapter                                              T.O.L.
                                                                                to Scoreboard


                         HOME
                         HAWKS                   Serial               GUEST
                                                                      BEARS
                                            9-pin to 25-pin
                                                DAKTRONICS                 J6             J1
                                 PLACE    EVENT              HEAT   LANE
              8-PORT
                  T.O.L.
              ROUTER                                                       T.O.L.

                                          Internet

                                                                      ALL SPORT CONSOLE
                                                                      Insert: LL-2439
             Ethernet
                                                                      Code: 8602



                                    HY-TEK LAPTOP
      OPTIONAL
                                    Meet Manager v4.0+
     EQUIPMENT

Figure 7: FinishLynx with Football/Track Scoreboard & Optional Hy-Tek

                                         LED Scoreboards
                                                5
When a USB-to-Serial adapter is being used on the FinishLynx computer, enter code 8602
on the All Sport 5000.
1.	 To access the connection settings in FinishLynx, open the software and go to
    Scoreboard > Options.
2.	 Click on the Scoreboard tab.
3.	 Click New.
4.	 Set up the options on the FinishLynx computer as follows (refer also to Figure 8):
   •   Script: “Powertime.lss”
   •   Name: “Football/Track
       Scoreboard”
   •   Code Set: Single Byte
   •   Serial Port: Select an
       available COM port.
   •   Baud: 9600
   •   Data Bits: 7
   •   Parity: Even
   •   Stop Bits: 1.0
   •   Running Time: Normal
   •   Results: Auto, Always
       send place enabled
   •   Paging enabled, Size
       “1”, Time “5.0”             Figure 8: FinishLynx Scoreboard Options

5.	 Click OK when finished to save the settings.
6.	 Restart the FinishLynx software to load the scoreboard script.

Hy-Tek Setup with FinishLynx
If a Hy-Tek results computer is included as part of the system, it does not need to
connect to the All Sport controller. However, the Hy-Tek computer will need to connect
to the FinishLynx computer via a network router and Ethernet cables (not provided
by Daktronics). For more information about properly networking these two computers
together, refer to the documentation provided with each piece of software, or contact
the appropriate software vendor using the information listed in Section 7: Additional
Resources (p.54).




                                 LED Scoreboards
                                        6
FinishLynx Setup for Lane/Place/Time Track Scoreboard
Reference Drawings:
   Track SCBD w/ FinishLynx, in Press Box .............................................................. DWG-104300
This setup will display FinishLynx running time and lane results on a Daktronics track
scoreboard, which typically shows 6, 8, or 10 lines of information at once. An additional
scoreboard module may be used to show Event/Heat information. See Figure 9 for
typical components and connections.

                        LANE/PLACE/TIME TRACK SCOREBOARD
                                                  DAKTRONICS                                 DAKTRONICS


                     LANE   PLACE          TIME                LANE    PLACE         TIME




                                                               FINISHLYNX
                                                               LAPTOP
 Wired ONLY to
  Scoreboard

                                     USB-to-Serial
                                       Adapter
     TB1


                                                                           8-PORT
                                J1                                         ROUTER
                                          Serial
                                      9-pin to 9-pin                                                      Internet

      SIGNAL CONVERTER
      Jumpers: 12-N, 13-P                                                 Ethernet




                                                                                            HY-TEK LAPTOP
                                                                       OPTIONAL
                                                                                            Meet Manager v4.0+
                                                                      EQUIPMENT

Figure 9: FinishLynx with Lane/Place/Time Track Scoreboard

The cabling should go according to DWG-104300. Set the scoreboard driver addresses
according to the FinishLynx settings in Section 3 of the Daktronics Aquatic/Track LED
Scoreboards Display Manual (DD3043167), available online at www.daktronics.com/
manuals.
For optional Hy-Tek Meet Manager setup, refer to Hy-Tek Setup with FinishLynx (p.6).




                                        LED Scoreboards
                                               7
1.	 To access the connection settings in FinishLynx, open the software and go to
    Scoreboard > Options.
2.	 Click on the Scoreboard tab.
3.	 Click New.
4.	 Set up the options on the FinishLynx computer as follows (refer also to Figure 10):
   •   Script: “Omni1000placeNEW.lss”
   •   Name: “Lane/Place/
       Time Scoreboard”
   •   Code Set: Single Byte
   •   Serial Port: Select an
       available COM port.
   •   Baud: 9600
   •   Data Bits: 7
   •   Parity: Even
   •   Stop Bits: 2.0
   •   Running Time: Normal
   •   Results: Auto, Always
       send place enabled
   •   Paging enabled; set
       the Size to the number
       of lanes that can           Figure 10: Scoreboard Options for Lane/Place/Time
       be displayed on the
       scoreboard.
5.	 Click OK when finished to save the settings.
6.	 Restart the FinishLynx software to load the scoreboard script.




                                LED Scoreboards
                                       8
FinishLynx Setup for TI-2020, TI-2021, or TR-3101
Reference Drawings:
   TI-2020, -2021, -3101 w/ Finish Lynx..................................................................... DWG-267638
This setup will display FinishLynx running time on a Daktronics portable timing display. See
Figure 11 for typical components and connections.

                  TI-2020 PORTABLE TIMER

                           DAKTRONICS




 Wired ONLY to
  Scoreboard

                                USB-to-Serial
                                  Adapter


                                                  FINISHLYNX
                                                  LAPTOP
     J3
                           J1
                                     Serial       OR
                                 9-pin to 9-pin


     SIGNAL CONVERTER                             FINISHLYNX
     Jumpers: 12-N, 13-P                          CAMERA BOX




                                                          SERIAL


Figure 11: FinishLynx with Portable Timer

In this setup, the display is typically sitting in the infield near the finish line.
1.	 Identify which serial port will control the display, either:
    •       On the FinishLynx computer in the press box OR
    •       At the connection box at track side

          Note: A USB-to-serial converter may be required on the FinishLynx computer.

2.	 Connect the signal converter kit (part # 0A-1125-0007) between the serial port
    selected in Step 1 to the input jack on the timing display. The cabling should go
    according to DWG-267638.
3.	 To access the connection settings in FinishLynx, open the software and go to
    Scoreboard > Options.
4.	 Click on the Scoreboard tab.
5.	 Click New.



                                           LED Scoreboards
                                                  9
6.	 Set up the scoreboard options on the FinishLynx computer as follows (refer also to
    Figure 12):
    •   Script: “DakMDP.lss”
    •   Name: “6 or 7-Digit
        Clock”
    •   Code Set: Single Byte
    •   Serial Port: Select an
        available COM port.
        If connecting to the
        serial port on the
        connection box, select
        Camera 1 (C-Box).
    •   Baud: 19200
    •   Data Bits: 8
    •   Parity: None
    •   Stop Bits: 1.0
    •   Running Time: Normal
    •   Results: Auto, Always     Figure 12: Scoreboard Options for 6- or 7-Digit Clock
        send place enabled
    •   Paging enabled; set the Size “1”; Time “5.0”.
7.	 Click OK when finished to save the settings.
8.	 Restart the FinishLynx software to load the scoreboard script.

FinishLynx Tips & Troubleshooting
•   Is the correct code entered into the All Sport?
•   Does the All Sport have the proper software revision? >V1.4 for All Sport 5000.
•   Is the correct serial port selected? Camera(s) must be connected and operating for
    the running time to display.
•   Save and close each race after finish of the race. Otherwise, the scoreboard will
    continue to display the race opened. The Lynx program will place an “S” to the left of
    the event the scoreboard is displaying.
•   If results and running time are being received from the same COM port of the
    FinishLynx computer system, press [ALT + S] on the FinishLynx computer keyboard to
    stop transmitting running time and display results.
•   On the FinishLynx computer, COM1 is usually the capture button. If a button splitter
    cable is connected, the capture button uses pins 4, 7, and 8 of the serial port. The
    scoreboard uses pins 2, 3, and 5 of the serial port.
•   If settings in the FinishLynx software are changed, exit out of the program and restart
    for the changes to take effect.
•   If there are more lanes on the track than can be displayed on the scoreboard,
    Paging must be enabled, and the Size must be set to the number of lines the
    scoreboard can display. This will enable the computer to send the results for the first
    group lanes, and then the next group of lanes.

                                 LED Scoreboards
                                        10
Fully Automatic Timing (FlashTiming)
The FlashTiming system consists of a personal computer, FlashTiming software, and a
photo finish camera for Fully Automatic Timing (FAT).

FlashTiming Setup for Football/Track Scoreboard
This setup will display FlashTiming running time on a Daktronics football/track scoreboard.
This setup DOES NOT allow Hy-Tek data to be displayed on a scoreboard. For optional Hy-
Tek Meet Manager setup, refer to Hy-Tek Setup with FlashTiming (p.12).
See Figure 13 for typical components and connections. Refer also to the scoreboard
installation manual for internal signal connections or wireless radio control settings.

                                FOOTBALL/TRACK SCOREBOARD

                        HOME                                        GUEST
                                              DAKTRONICS


                                PLACE EVENT            HEAT       LANE
                       T.O.L.                                            T.O.L.

                        HOME                                        GUEST
   FLASHTIMING                                DAKTRONICS

   LAPTOP                       PLACE EVENT            HEAT       LANE
                   USB-to-Serial                                           Wired (or wireless)
                    T.O.L.
                     Adapter                                             T.O.L.
                                                                              to Scoreboard


                        HOME
                        HAWKS                  Serial               GUEST
                                                                    BEARS
                                          9-pin to 25-pin
                                              DAKTRONICS                 J6             J1
                                PLACE   EVENT              HEAT   LANE
             8-PORT
                 T.O.L.
             ROUTER                                                      T.O.L.

                                        Internet

                                                                    ALL SPORT CONSOLE
                                                                    Insert: LL-2439
            Ethernet
                                                                    Code: 8604



                                   HY-TEK LAPTOP
     OPTIONAL
                                   Meet Manager v4.0+
    EQUIPMENT

Figure 13: FlashTiming with Football/Track Scoreboard & Optional Hy-Tek




                                    LED Scoreboards
                                           11
When a USB-to-Serial adapter is being used on
the FlashTiming computer, enter code 8604 on
the All Sport 5000.
1.	 To access the connection settings in
    FlashTiming, open the software and go to
    Display > Daktronics RaceClock.
2.	 Click on Serial Port, and set up the options as
    follows (refer also to Figure 14).
   •   Com/Serial Port: Select an available
       COM port.
   •   Baud Rate: 9600                                 Figure 14: FlashTIming Scoreboard Options
3.	 Click OK when finished to save the settings.

Hy-Tek Setup with FlashTiming
If a Hy-Tek results computer is included as part of the system, it does not need to
connect to the All Sport controller. However, the Hy-Tek computer can be connected
to the FlashTiming computer via a network router and Ethernet cables (not provided
by Daktronics). For more information about properly networking these two computers
together, refer to the documentation provided with each piece of software, or contact
the appropriate software vendor using the information listed in Section 7: Additional
Resources (p.54).

FAQ
What OmniSport information can I display on my football/track scoreboard?
   During a Lane race, the event, heat, and running time will be displayed. The first
   place finisher lane and time will display once he/she crosses the finish line. As other
   runners finish, their times will then be displayed. Once all runners finish, their times will
   display one place at a time for a number of seconds as set up in the OmniSport.
   During a Non-Lane race, the running time will be displayed. Based on the OmniSport
   configuration, the running time can be displayed continuously, or the running time
   will stop and display the first place finish time.
Can I interface Hy-Tek to my football/track scoreboard?
   No. Hy-Tek Meet Manager cannot send data directly to the football/track
   scoreboard.
Can I display Hy-Tek field event information?
   No. Hy-Tek Meet Manager cannot send data directly to the football/track
   scoreboard.
How many lines can a track/football scoreboard display?
   One line of data can be displayed at a time. The results change every few seconds
   to show all lanes.
What additional software is needed to connect an OmniSport 2000 to Hytek Meet
Manager?
   A software plug-in for Hy-Tek Meet Manager called “Track Button Finish Interface”
   will need to be purchased from Hy-Tek. Refer to contact information in Section 7:
   Additional Resources (p.54).


                                 LED Scoreboards
                                        12
What software is needed to connect FinishLynx/FlashTiming to Hy-tek Meet Manager?
   A software plug-in for Hy-Tek Meet Manager called “Photo Finish Interface” will need
   to be purchased from Hy-Tek. Refer to contact information in Section 7: Additional
   Resources (p.54).
Is the OmniSport 2000 the only Daktronics timer that can communicate to Meet
Manager?
   Yes. The OmniSport 2000 is the only timer that can send times to Meet Manager
   software.
Can the OmniSport 2000 communicate to Meet Manager via network?
   No. In Track mode, a serial connection (or serial radios) are required between an
   OmniSport console and Meet Manager software.
Can I communicate wirelessly from FinishLynx/FlashTiming to a football/track
scoreboard?
   Yes. The All Sport 5000 must be equipped with a radio transmitter and a radio receiver
   must be installed in the scoreboard.
Can I communicate wirelessly from an OmniSport 2000 to a Lane/Place/Time track
scoreboard?
   Yes. The OmniSport 2000 must be equipped with a radio transmitter and a radio
   receiver must be installed in the scoreboard.
Can I communicate wirelessly from FinishLynx to a Lane/Place/Time track scoreboard?
   No. A wired signal converter is used for this setup.
Which Auxiliary Modules (SW-2000 series) can be controlled by the OmniSport 2000?
   Event/Heat, Home/Guest, Record Time, Lengths/Record Time, and Guest 2/Guest 3
Which Auxiliary Modules (SW-2000 series) can be controlled by FinishLynx?
   Event/Heat only




                               LED Scoreboards
                                      13
3   LED Video Displays

    OmniSport 2000 & LED Video Display
    Reference Drawings:
       Riser: DMP-8000/FB Track Scbd, w/Omni 2K, Hytek, Show Cntrl................... DWG-3058769
    This setup displays running time, lane results, and event/heat information on a Daktronics
    LED video display from an OmniSport 2000 timing console. A track button interface
    connects to the J7 SWITCH INPUTS jack on the console. The track button interface
    supports up to 8 pushbutton switches to manually record the times for each lane. By
    interfacing with Hy-Tek, complete competitor information, such as name and affiliation,
    can be displayed along with their results.
    Data from the OmniSport 2000 is sent via the ETHERNET port into a network switch, which
    in turn connects to the router in the video control rack. See Figure 15 and DWG-3058769
    for typical components and connections to a video control rack.

                                                                                         SHOW
                                                                                       CONTROL
          VIDEO CONTROL RACK
                with 8-port Router                                                      LAPTOP
                and V-Net v6.4+
                                                                   300' (91 m) max from the Switch
                                                                      to the Router in video rack


                                          SWITCH
     HY-TEK LAPTOP
     Meet Manager v4.0+




                                                  Serial
                                               9-pin to 9-pin
                                             (or Serial Radio)                      Ethernet
                      USB-to-Serial
                        Adapter
                                                                      J7       J6




                                                                 OMNISPORT CONSOLE
                                TRACK BUTTON                     Insert: LL-2573
                                  INTERFACE                      Mode: Track

    Figure 15: OmniSport 2000 & Hy-Tek with Video Display

     Note: For timing up to 10 lanes, a larger track button interface will connect to the
           J10 NEAR jack on the timing console. This also supports up to 3 buttons per lane.




                                      LED Video Displays
                                              14
Refer to the video display manual for more information on sending fiber optic signal from
the control rack to the display. If there is a football/soccer scoreboard or a dedicated
track scoreboard in addition to the video display, refer also to the scoreboard installation
manual for internal signal connections.
For more about track operation and settings, refer to the OmniSport 2000 Timing Console
Operation Manual (ED-13312), available online at www.daktronics.com/manuals.

Hy-Tek Results with OmniSport 2000
This setup allows lane, place, and time information to be pulled into by Hy-Tek Meet
Manager software from the OmniSport 2000. If the Hy-Tek computer will also be
outputting data to the video display, refer to Hy-Tek Results for Video Display (p.21).
The OmniSport 2000 console connects to a
Hy-Tek computer via the J6 RESULTS PORT jack
to record race times in the Meet Manager
software. The serial connection may be wire or
radio. On the Hy-Tek computer, use the following
settings:
1.	 Open the Meet Manager program.
2.	 Click Run on the main menu.
3.	 Go to Interfaces > Set-up > Track Button
    Timer (Figure 16).
4.	 Select Daktronics OmniSport 2000, and then
    click OK.
5.	 Go to Interfaces > Track Button Timer -           Figure 16: Track Button Timer Vendor
    OmniSport 2000 > Open/Close Serial Port.
6.	 For the Track Button Finish Timer (0-16) option
    (Figure 17), select the COM port number
    on the Hy-Tek computer connected to the
    OmniSport, and then click OK.
7.	 Go to Interfaces > Track Button Timer -
    OmniSport 2000 > Test Communication.
    When all connections and configurations
    are correct, the Communications Passed
    message appears with the version of
    firmware in the OmniSport 2000 console
    (Figure 18). Click OK.                            Figure 17: Serial Port for Track Button




    Figure 18: Communications Passed




                               LED Video Displays
                                       15
Fully Automatic Timing (FinishLynx)
Reference Drawings:
   Riser; Hytek/Lynx/Show Cntrl, Fiber, Scbd, DVX w/ Version 6.4.................... DWG-3058591
The FinishLynx™ Timing System consists of a personal computer, FinishLynx software, and a
photo finish camera for Fully Automatic Timing (FAT). This setup displays running time, lane
results, and event/heat information as RTD (Real Time Data) on a Daktronics LED video
display. By interfacing with Hy-Tek or DirectAthletics, complete competitor information,
such as name and affiliation, can be displayed along with their results.
Data from FinishLynx and Hy-Tek or DirectAthletics is sent via Ethernet into a network
switch, which in turn connects to the router in the video control rack. See Figure 19 and
DWG-3058591 for typical components and connections to a video control rack.

                                                                                   SHOW
                                                                                 CONTROL
  VIDEO CONTROL RACK                                                              LAPTOP
         with 8-port Router
         and V-Net v6.4+
                                                              300' (91 m) max from the Switch
                                                                 to the Router in video rack


  DIRECTATHLETICS/                       SWITCH
  HY-TEK LAPTOP                                                OPTIONAL
  Meet Manager v4.0+                                         SCOREBOARD
                                                              EQUIPMENT


                                                                     To Scoreboard or
                                                                     Fiber Converter in
                                                                        Video Rack

                                     Ethernet
   FINISHLYNX
   EDIT LAPTOP
                                                                                   DUAL
                                                                                  25-PIN
                                                                                  J-BOX
                                                                          Serial
                                                                      25-pin to 25-pin

   FINISHLYNX                                                            J6
   CAPTURE LAPTOP




                                               Serial
                                           9-pin to 25-pin         ALL SPORT CONSOLE
                         USB-to-Serial                             Insert: LL-2439
                           Adapter
                                                                   Code: 8602

Figure 19: FinishLynx & Hy-Tek/DirectAthletics with Video Display


                                  LED Video Displays
                                          16
Refer to the video display manual for more information on sending fiber optic signal from
the control rack to the display. If there is a football/soccer scoreboard or a dedicated
track scoreboard in addition to the video display, refer also to the scoreboard installation
manual for internal signal connections.
When a USB-to-Serial adapter is being used on the FinishLynx computer, enter code 8602
on the All Sport 5000.
1.	 To access the connection settings in the FinishLynx Capture Station computer, open
    the software and go to Scoreboard > Options.
2.	 Click on the Scoreboard tab.
3.	 Click New.
4.	 Set up the Scoreboard
    options as follows (refer
    also to Figure 20):
   •   Script: “Powertime.lss”
   •   Name: “Football/Track
       Scoreboard”
   •   Code Set: Single Byte
   •   Serial Port: Select an
       available COM port.
   •   Baud: 9600
   •   Data Bits: 7
   •   Parity: Even
   •   Stop Bits: 1.0
   •   Running Time: Normal
   •   Auto Break: Off
                                   Figure 20: FinishLynx Scoreboard Options
   •   Results: Auto, Always
       send place enabled
   •   Paging enabled, Size
       “1”, Time “5.0”
5.	 Click New once more.
6.	 Set up the Running Time
    options as follows (refer
    also to Figure 21):
   •   Script: “Dak-Extended.
       lss”
   •   Name: “Running Time”
   •   Code Set: Single Byte
   •   Serial Port: Network
       (UDP)
   •   Port: “21000”
   •   Running Time: Normal,
       Send results if armed
       enabled
                                   Figure 21: FinishLynx Running Time Options
   •   Results: Off

                                 LED Video Displays
                                         17
7.	 Click New once more.
8.	 Set up the Capture Results
    options as follows (refer
    also to Figure 22):
      •   Script: “Dak-Extended.
          lss”
      •   Name: “Capture
          Results”
      •   Code Set: Single Byte
      •   Serial Port: Network
          (UDP)
      •   Port: “21100”
      •   Running Time: Off
      •   Results: Auto, Always
          send place enabled
      •   Paging enabled; set
          the Size to the number
          of lanes that can be    Figure 22: FinishLynx Results Options
          displayed on the matrix
          display; Time “5.0”
9.	 Click OK when finished to save the settings.
10.	 Restart the FinishLynx software to load the scripts.

    Note: If a separate FinishLynx Edit Station is included as part of the system, on that
          computer, go to Scoreboard > Options, click on the Scoreboard tab, and then
          click New. Set up the Edit Results options as follows (refer also to Figure 23).

•     Script: “Dak-Extended.lss”
•     Name: “Edit Results”
•     Code Set: Single Byte
•     Serial Port: Network (UDP)
•     Port: “22000”
•     Running Time: Off
•     Results: Auto, Always send
      place enabled
•     Paging enabled; set the
      Size to the number of lanes
      that can be displayed on
      the matrix display; Time
      “5.0”
Click OK when finished, and
then restart the FinishLynx
software to load the script.
                                     Figure 23: FinishLynx Results Options (Edit Station)

                                   LED Video Displays
                                           18
Fully Automatic Timing (FlashTiming)
The FlashTiming system consists of a personal computer, FlashTiming software, and a
photo finish camera for Fully Automatic Timing (FAT). This setup displays running time, lane
results, and event/heat information as RTD (Real Time Data) on a Daktronics LED video
display. By interfacing with Hy-Tek or DirectAthletics, complete competitor information,
such as name and affiliation, can be displayed along with their results.
Data from FlashTiming and Hy-Tek or DirectAthletics is sent via Ethernet into a network
switch, which in turn connects to the router in the video control rack. See Figure 24.

                                                                                    SHOW
  VIDEO CONTROL RACK
                                                                                  CONTROL
          with 8-port Router
                                                                                   LAPTOP
          and V-Net v6.4+

                                                               300' (91 m) max from the Switch
                                                                  to the Router in video rack


 DIRECTATHLETICS/                       SWITCH
  HY-TEK LAPTOP
   Meet Manager v4.0+




                                         Ethernet


 FLASHTIMING
    LAPTOP




Figure 24: FlashTiming & Hy-Tek/DirectAthletics with Video Display

Refer to the video display manual for more information on sending fiber optic signal from
the control rack to the display. If there is a football/soccer scoreboard or a dedicated
track scoreboard in addition to the video display, refer also to the scoreboard installation
manual for internal signal connections.




                                 LED Video Displays
                                         19
1.	 To access the connection settings in
    FlashTiming, open the software and go to
    Display > Daktronics - RaceClock.
2.	 Click on UDP Ethernet, and set up the
    options as follows (Figure 25).
   •   Scoreboard IP Address: The first 3 sets
       of numbers should match the DMP-
       8000 IP address. Then use “255” as the
       last set of numbers.
   •   Scoreboard Port/Socket: “21000”
   Click OK when finished to save the
   settings.                                      Figure 25: RaceClock Comm Options
3.	 Go to Display > Daktronics Matrix -Results.
4.	 Click on UDP Ethernet, and set up the
    options as follows (Figure 26).
   •   Scoreboard IP Address: The first 3 sets
       of numbers should match the DMP-
       8000 IP address. Then use “255” as the
       last set of numbers.
   •   Scoreboard Port/Socket: “21100”
   Click OK when finished to save the
   settings.
5.	 Go to Display > Display Settings
    (Figure 27).                                  Figure 26: Matrix -Results Comm Options

   •   Set the Lines of Text to 1–29, depending on the
       RTD sequence.
   •   Set the Characters per Line to 8–100, depending
       on the RTD sequence.
   •   Set the # of lines for Race Description to 0, 1, or
       2, depending on the RTD sequence.
   •   All other settings are the user’s preference.
For assistance with creating RTD sequences, refer to
Section 5: Creating RTD Sequences (p.40).




                                                             Figure 27: Display Settings




                               LED Video Displays
                                       20
Hy-Tek Results for Video Display
Hy-Tek Track & Field Meet Manager is a third-
party results program. With its optional Alpha
Scoreboard Interface, Hy-Tek can send start
lists, results, and team scores in a standard RTD
format for display on a Daktronics video display.
If your Hy-Tek license does not include the Alpha
Scoreboard Interface, please contact Hy-Tek to
purchase it.
1.	 Open the Meet Manager program.
2.	 Click Run on the main menu.
3.	 Go to Interfaces > Set-up > Scoreboard
    (Figure 28).
4.	 Select Daktronics Full Matrix and UDP Ethernet,
    and then click OK.
5.	 Go to Interfaces > Scoreboard - Daktronics
    Full Matrix > Set UDP Port and IP Address.
                                                      Figure 28: Scoreboard Vendor Selection
6.	 For the Remote Scoreboard Port/
    Socket option (Figure 29), enter
    “20000”. Verify the Remote Scoreboard
    IP Address is “255.255.255.255”, and
    then click OK.
7.	 Go to Interfaces > Scoreboard –
    Daktronics Full Matrix > Customize
    (Figure 30).
   •   Set the Number of Rows for Header
       to 1 or 2, depending on the RTD        Figure 29: UDP Port for Daktronics Full Matrix
       sequence.
   •   Set the Number of Rows for Lanes
       to 1–29, depending on the RTD
       sequence.
   •   Set the Number of Characters per
       Row to 1–100, depending on the
       RTD sequence.
   •   All other settings are the user’s
       preference.
For assistance with creating RTD
sequences, refer to Section 5: Creating
RTD Sequences (p.40).




                                             Figure 30: Customize Scoreboard Output -
                                             Daktronics Full Matrix (UDP)



                               LED Video Displays
                                       21
Sending Start Lists, Results, & Team Scores from Hy-Tek
The most common method of operation from the
Run Menu within the Hy-Tek software is as follows:
1.	 Get heat on screen and press [Ctrl] + [F10] to
    display start list.
2.	 Enter results for a heat, section, or flight.
3.	 Press [Ctrl] + [F11] to instantly display these
    results.
4.	 Press [F5] for next heat and repeat Steps 1–3.
5.	 After the results for the last heat, section, or
    flight are entered, press [Ctrl] + [F12] to display
    complete results for the round.
Any start list, result, or team score can be
displayed at any time from the Run Menu by
pressing [Ctrl] + [F1]. A selection box will appear as
shown in Figure 31.
                                                          Figure 31: Scoreboard Display Requests
Request Choices
Start Lists and Results: Enter the desired Round, Event Number, and Heat/Flight and then
enter a Request for a Start List (“1”) or Results (“2”). Entering “99” for the Heat/Flight and
“2” for Request will show complete results for the selected round and event.
Combined-events: To display a combined-event, also enter the Multi-Event Sub-Event
number. To display combined-event total scores for all sub-events, enter “99” for the
Heat/Flight and “0” for Multi-Event Sub-Event.
Team Scores: Use Request “3” and “4” for team scores. If there are separate team scores
for divisions, enter the division number in the Heat/Flight number field. For example, when
scoring class A (division 1) and class AA (division 2) in the same meet, enter Request “3”
and Heat/Flight “2” to get girls team scores for the AA division and enter Request “4” and
Heat/Flight “1” to get boys team scores for the A division. If an event is a Cross Country
(CC) event, be sure to also include the Event Number so that the software will show the
CC team scores.
Award Ceremonies: If there are award ceremonies, enter “5” for Request along with the
Event Number, and the award winners will be displayed for the event based on what
was put in the Hy-Tek Meet Set-up Part B for number getting awards. If the event is set
up as multi-age group, the awards for each age group will be displayed on a rotational
basis.
Paging: If a particular request has more than one screen full of information, the “pages”
are cycled. A Page number of “0” means cycle all pages normally. To continually
display a particular page, enter the specific Page number. This can be useful when an
announcer is calling out the entrants in a larger event, such as the 16-person mile.




                                 LED Video Displays
                                         22
MeetPro Results for Video Display
DirectAthletics MeetPro is a third-party results program that can send start lists, results,
and team scores in a standard RTD format for display on a Daktronics video display.
1.	 Open the MeetPro program.
2.	 Go to Interfaces > Scoreboard >
    Daktronics (Figure 32).
3.	 In the Daktronics Scoreboard Board Setup
    window, use the following settings (refer
    also to Figure 33):
    •   Connection Type: Network
    •   Port Type: UDP
                                                    Figure 32: MeetPro Interfaces Menu
    •   IP Address: “255.255.255.255” (default)
    •   Port: “20000”
    •   Height: set to the number of lanes that can be shown on the matrix display plus 1
        header; example: if the display can show 8 lanes, set the height to “9”
    •   Width: “100”
4.	 Refer to Figure 33 for typical information to display for the Run, Relay, and Field data
    columns. Adjust the Length of the data fields to fit the display as needed.
5.	 Click Save when finished to save the settings.




Figure 33: MeetPro Scoreboard Setup



                                LED Video Displays
                                        23
Sending Start Lists & Results from DirectAthletics
1.	 Go to Interfaces > Scoreboard > Daktronics (Figure 32).
2.	 In the Daktronics Scoreboard Board Setup window (Figure 33), use the Script Settings
    or the shortcut keys for displaying the Start List for Current Heat, Results for Current
    Heat, and Results for Entire Round.

FAQ
What information can be shown on the video display?
   Common header fields are Event Title, Running Time, and Event Heat. Common line
   fields are ID #, Lane, Name, Affiliation, Time, and Place.
What additional FinishLynx software is needed to send data to Daktronics video display?
   A software plug-in called “Network COM Port” (NCP) will be need to be purchased
   from FinishLynx. Refer to contact information in Section 7: Additional Resources
   (p.54).
What additional Hy-Tek software is needed to send data to a Daktronics video display?
   A software plug-in for Hy-Tek Meet Manager called “Alpha Scoreboard” will need
   to be purchased from Hy-Tek. Refer to contact information in Section 7: Additional
   Resources (p.54).
What additional FlashTiming software is needed to send data to a Daktronics video
display?
   None
What is the recommended data to show on the video display?
   Hy-Tek data is typically considered the Official Results and therefore is the
   recommended data source to display.
Can I send data from both FinishLynx/FlashTiming and Hy-Tek?
   Yes. However, sending data from FinishLynx/FlashTiming and Hy-Tek will require
   coordination between their operators and the video display operator to ensure the
   presentation being played matches the data being sent.
Is there an advantage of showing results from only one data source?
   Yes. The advantage of using one data source is that the results display presentation
   can be started at the beginning of the meet and left running all meet, with no
   additional effort from the video display operator.
Does Show Control use a profile to build an RTD sequence for MeetPro results?
   Yes. The profile is named “DirectAthletics”.




                               LED Video Displays
                                       24
What does a typical Hy-Tek/DirectAthletics display sequence look like?
   Refer to the image below:
   1(or 2) Lines of Header Info                              Running Time




                                                                         Up to 29 Lines
                                                                         of Lane Info




What does a typical FinishLynx display sequence look like?
   Refer to the image below:
   1(or 2) Lines of Header Info                              Running Time




                                                                         Up to 10 Lines
                                                                         of Lane Info




    Lane       Name                 Affiliation     Time         Place




                              LED Video Displays
                                      25
4   LED Message Displays (Galaxy/M3)

    OmniSport 2000 & LED Message Display
    Reference Drawings:
       System Riser; Track M3 Matrix w/ Omni2K in Pressbox................................... DWG-1072146
    This setup displays running time, lane results, and event/heat information on a Daktronics
    LED message display from an OmniSport 2000 timing console. A track button interface
    connects to the J7 SWITCH INPUTS jack on the console. The track button interface
    supports up to 8 pushbutton switches to manually record the times for each lane. By
    interfacing with Hy-Tek, complete competitor information, such as name and affiliation,
    can be displayed along with their results.
    Data from the OmniSport 2000 is then sent via the ETHERNET port into a network router.
    See Figure 34 and DWG-1072146 for typical components and connections.




                                                                        300' (91 m) max from
                                                                        the Router to the display




                               8-PORT
                               ROUTER                                    SHOW CONTROL
                                                                               LAPTOP
                                                     Internet             with DCS software


     HY-TEK LAPTOP
     Meet Manager v4.0+




                                               Serial
                                            9-pin to 9-pin
                                          (or Serial Radio)                         Ethernet
                    USB-to-Serial
                      Adapter
                                                                   J7          J6




                                                              OMNISPORT CONSOLE
                             TRACK BUTTON                     Insert: LL-2573
                               INTERFACE                      Mode: Track

    Figure 34: OmniSport 2000 & Hy-Tek with Message Display

     Note: For timing up to 10 lanes, a larger track button interface will connect to the
           J10 NEAR jack on the timing console. This also supports up to 3 buttons per lane.


                           LED Message Displays (Galaxy/M3)
                                          26
Refer to the message display manual for more information on routing signal to the
display. Displays may be controlled wirelessly via Ethernet Bridge Radio. If there is a
football/soccer scoreboard or a dedicated track scoreboard in addition to the message
display, refer also to the scoreboard installation manual for internal signal connections.
For more about track operation and settings, refer to the OmniSport 2000 Timing Console
Operation Manual (ED-13312), available online at www.daktronics.com/manuals.

Hy-Tek Results with OmniSport 2000
This setup allows lane, place, and time information to be pulled into by Hy-Tek Meet
Manager software from the OmniSport 2000. If the Hy-Tek computer will also be
outputting data to the message display, refer to Hy-Tek Results for Message Display
(p.32).
The OmniSport 2000 console connects to a
Hy-Tek computer via the J6 RESULTS PORT jack
to record race times in the Meet Manager
software. The serial connection may be wire or
radio. On the Hy-Tek computer, use the following
settings:
1.	 Open the Meet Manager program.
2.	 Click Run on the main menu.
3.	 Go to Interfaces > Set-up > Track Button
    Timer (Figure 35).
4.	 Select Daktronics OmniSport 2000, and then
    click OK.
                                                      Figure 35: Track Button Timer Vendor
5.	 Go to Interfaces > Track Button Timer -
    OmniSport 2000 > Open/Close Serial Port.
6.	 For the Track Button Finish Timer (0-16) option
    (Figure 36), select the COM port number
    on the Hy-Tek computer connected to the
    OmniSport, and then click OK.
7.	 Go to Interfaces > Track Button Timer -
    OmniSport 2000 > Test Communication.
    When all connections and configurations
    are correct, the Communications Passed
    message appears with the version of
    firmware in the OmniSport 2000 console            Figure 36: Serial Port for Track Button
    (Figure 37). Click OK.




    Figure 37: Communications Passed




                    LED Message Displays (Galaxy/M3)
                                   27
Fully Automatic Timing (FinishLynx)
Reference Drawings:
   Riser; V1500/M2/M3/Galaxy, Lynx/Hytek, Ethernet......................................... DWG-266821
   Riser; Hytek/Lynx/V1500, M2/M3 Galaxy, Fiber, SCBD..................................... DWG-291376
   Riser; Hytek/Lynx/V1500, M2/M3 Galaxy, Fiber, AS5000.................................. DWG-298848
   Riser; Hytek/Lynx/Show Cntrl. M2/M3 Galaxy, EBR Radio............................... DWG-300928
   Riser; Hytek/Lynx/Show Control Galaxy, E-net, SCBD.................................... DWG-3695367
The FinishLynx™ Timing System consists of a personal computer, FinishLynx software, and
a photo finish camera for Fully Automatic Timing (FAT). This setup displays running time,
lane results, and event/heat information as RTD (Real Time Data) on a Daktronics LED
message display. By interfacing with Hy-Tek or DirectAthletics, complete competitor
information, such as name and affiliation, can be displayed along with their results.
In this setup, RTD (Real Time Data) is sent from the FinishLynx system directly to the
display via a network UDP/IP connection. See Figure 38 for typical components and
connections. Depending on the equipment used in a particular setup, refer to DWG-
266821, DWG-291376, DWG-298848, or DWG-300928 for cabling configurations.




                                                                      300' (91 m) max from
                                                                      the Router to the display




                              8-PORT
                              ROUTER

                                                       Internet

 DIRECTATHLETICS/
  HY-TEK LAPTOP
  Meet Manager v4.0+
                             Ethernet                                 SHOW CONTROL
                                                                            LAPTOP
                                                                       with DCS software




   FINISHLYNX
 CAPTURE LAPTOP




Figure 38: FinishLynx & Hy-Tek/DirectAthletics with Message Display


                      LED Message Displays (Galaxy/M3)
                                     28
Refer to the message display manual for more information on routing signal to the
display. Displays may be controlled wirelessly via Ethernet Bridge Radio. If there is a
football/soccer scoreboard or a dedicated track scoreboard in addition to the message
display, refer also to the scoreboard installation manual for internal signal connections.
When a USB-to-Serial adapter is being used on the FinishLynx computer, enter code 8602
on the All Sport 5000.
1.	 To access the connection settings in the FinishLynx Capture Station computer, open
    the software and go to Scoreboard > Options.
2.	 Click on the Scoreboard tab.
3.	 Click New.
4.	 Set up the Scoreboard
    options as follows (refer
    also to Figure 39):
   •   Script: “Dak-Extended.
       lss”
   •   Name: “Capture Run &
       Results”
   •   Code Set: Single Byte
   •   Serial Port: Network
       (UDP)
   •   Port: “3002”
   •   Running Time: Normal
   •   Results: Auto
   •   Paging enabled; set
       the Size to the number
       of lanes that can be
                               Figure 39: Scoreboard Options for Galaxy Via UDP/IP
       displayed on the matrix
       display; Time “5.0”
IMPORTANT: With this setup, results and running time are being sent over the same
network port of the FinishLynx computer system, and therefore CANNOT be displayed at
the same time. Press [ALT + S] on the FinishLynx computer keyboard to stop transmitting
running time and display results.




                      LED Message Displays (Galaxy/M3)
                                     29
Fully Automatic Timing (FlashTiming)
The FlashTiming system consists of a personal computer, FlashTiming software, and a
photo finish camera for Fully Automatic Timing (FAT). This setup displays running time,
lane results, and event/heat information as RTD (Real Time Data) on a Daktronics LED
message display.
In this setup, RTD (Real Time Data) is sent from the FlashTiming system directly to the
display via a network UDP/IP connection. See Figure 40 for typical components and
connections.




                                                                 300' (91 m) max from
                                                                 the Router to the display




                            8-PORT
                            ROUTER

                                                    Internet

  DIRECTATHLETICS/
   HY-TEK LAPTOP
   Meet Manager v4.0+
                           Ethernet                               SHOW CONTROL
                                                                        LAPTOP
                                                                   with DCS software




  FLASHTIMING
     LAPTOP




Figure 40: FlashTiming & Hy-Tek/DirectAthletics with Message Display

Refer to the message display manual for more information on routing signal to the
display. Displays may be controlled wirelessly via Ethernet Bridge Radio. If there is a
football/soccer scoreboard or a dedicated track scoreboard in addition to the message
display, refer also to the scoreboard installation manual for internal signal connections.




                     LED Message Displays (Galaxy/M3)
                                    30
1.	 To access the connection settings in
    FlashTiming, open the software and go to
    Display > Daktronics - RaceClock.
2.	 Click on UDP Ethernet, and set up the
    options as follows (Figure 41).
    •   Scoreboard IP Address: The first 3
        sets of numbers should match the
        display’s IP address. Then use “255” as
        the last set of numbers.
    •   Scoreboard Port/Socket: “3002”
    Click OK when finished to save the              Figure 41: RaceClock & Matrix-Results Options
    settings.
3.	 Go to Display > Daktronics Matrix -Results.
4.	 Click on UDP Ethernet, and set up the same options
    as Step 2 and as shown in Figure 41. Click OK when
    finished to save the settings.
5.	 Go to Display > Display Settings (Figure 42).
    •   Set the Lines of Text to 1–29, depending on the
        RTD sequence.
    •   Set the Characters per Line to 8–100, depending
        on the RTD sequence.
    •   Set the # of lines for Race Description to 0, 1, or
        2, depending on the RTD sequence.
    •   All other settings are the user’s preference.
For assistance with creating RTD sequences, refer to
Section 5: Creating RTD Sequences (p.40).                      Figure 42: Display Settings

IMPORTANT: With this setup, results and running time are being sent over the same
network port of the FlashTiming computer system. If the clock is running on the display,
it will briefly blank for 1/10 of a second when each result is sent. To avoid this, be sure to
stop the running time before sending results.




                     LED Message Displays (Galaxy/M3)
                                    31
Hy-Tek Results for Message Display
Hy-Tek Track & Field Meet Manager is a third-
party results program. With its optional Alpha
Scoreboard Interface, Hy-Tek can send start
lists, results, and team scores in a standard RTD
format for display on a Daktronics matrix display.
If your Hy-Tek license does not include the Alpha
Scoreboard Interface, please contact Hy-Tek to
purchase it.
1.	 Open the Meet Manager program.
2.	 Click Run on the main menu.
3.	 Go to Interfaces > Set-up > Scoreboard
    (Figure 43).
4.	 Select Daktronics Full Matrix and UDP Ethernet,
    and then click OK.
5.	 Go to Interfaces > Scoreboard - Daktronics
    Full Matrix > Set UDP Port and IP Address.
                                                      Figure 43: Scoreboard Vendor Selection
6.	 For the Remote Scoreboard Port/
    Socket option (Figure 44), enter
    “20000”. Verify the Remote Scoreboard
    IP Address is “255.255.255.255”, and
    then click OK.
7.	 Go to Interfaces > Scoreboard –
    Daktronics Full Matrix > Customize
    (Figure 45).
   •   Set the Number of Rows for Header
       to 1 or 2, depending on the RTD        Figure 44: UDP Port for Daktronics Full Matrix
       sequence.
   •   Set the Number of Rows for Lanes
       to 1–29, depending on the RTD
       sequence.
   •   Set the Number of Characters per
       Row to 1–100, depending on the
       RTD sequence.
   •   All other settings are the user’s
       preference.
For assistance with creating RTD
sequences, refer to Section 5: Creating
RTD Sequences (p.40).




                                             Figure 45: Customize Scoreboard Output -
                                             Daktronics Full Matrix (UDP)



                    LED Message Displays (Galaxy/M3)
                                   32
Sending Start Lists, Results, & Team Scores from Hy-Tek
The most common method of operation from the
Run Menu within the Hy-Tek software is as follows:
1.	 Get heat on screen and press [Ctrl] + [F10] to
    display start list.
2.	 Enter results for a heat, section, or flight.
3.	 Press [Ctrl] + [F11] to instantly display these
    results.
4.	 Press [F5] for next heat and repeat Steps 1–3.
5.	 After the results for the last heat, section, or
    flight are entered, press [Ctrl] + [F12] to display
    complete results for the round.
Any start list, result, or team score can be
displayed at any time from the Run Menu by
pressing [Ctrl] + [F1]. A selection box will appear as
shown in Figure 46.
                                                          Figure 46: Scoreboard Display Requests
Request Choices
Start Lists and Results: Enter the desired Round, Event Number, and Heat/Flight and then
enter a Request for a Start List (“1”) or Results (“2”). Entering “99” for the Heat/Flight and
“2” for Request will show complete results for the selected round and event.
Combined-events: To display a combined-event, also enter the Multi-Event Sub-Event
number. To display combined-event total scores for all sub-events, enter “99” for the
Heat/Flight and “0” for Multi-Event Sub-Event.
Team Scores: Use Request “3” and “4” for team scores. If there are separate team scores
for divisions, enter the division number in the Heat/Flight number field. For example, when
scoring class A (division 1) and class AA (division 2) in the same meet, enter Request “3”
and Heat/Flight “2” to get girls team scores for the AA division and enter Request “4” and
Heat/Flight “1” to get boys team scores for the A division. If an event is a Cross Country
(CC) event, be sure to also include the Event Number so that the software will show the
CC team scores.
Award Ceremonies: If there are award ceremonies, enter “5” for Request along with the
Event Number, and the award winners will be displayed for the event based on what
was put in the Hy-Tek Meet Set-up Part B for number getting awards. If the event is set
up as multi-age group, the awards for each age group will be displayed on a rotational
basis.
Paging: If a particular request has more than one screen full of information, the “pages”
are cycled. A Page number of “0” means cycle all pages normally. To continually
display a particular page, enter the specific Page number. This can be useful when an
announcer is calling out the entrants in a larger event, such as the 16-person mile.




                      LED Message Displays (Galaxy/M3)
                                     33
MeetPro Results for Message Display
DirectAthletics MeetPro is a third-party results program that can send start lists, results,
and team scores in a standard RTD format for display on a Daktronics message display.
1.	 Open the MeetPro program.
2.	 Go to Interfaces > Scoreboard >
    Daktronics (Figure 47).
3.	 In the Daktronics Scoreboard Board Setup
    window, use the following settings (refer
    also to Figure 48):
   •   Connection Type: Network
   •   Port Type: UDP
                                                  Figure 47: MeetPro Interfaces Menu
   •   IP Address: “255.255.255.255” (default)
   •   Port: “20000”
   •   Height: set to the number of lanes that can be shown on the matrix display plus 1
       header; example: if the display can show 8 lanes, set the height to “9”
   •   Width: “100”
4.	 Refer to Figure 48 for typical information to display for the Run, Relay, and Field data
    columns. Adjust the Length of the data fields to fit the display as needed.
5.	 Click Save when finished to save the settings.




Figure 48: MeetPro Scoreboard Setup



                    LED Message Displays (Galaxy/M3)
                                   34
Sending Start Lists & Results from DirectAthletics
1.	 Go to Interfaces > Scoreboard > Daktronics (Figure 32).
2.	 In the Daktronics Scoreboard Board Setup window (Figure 33), use the Script Settings
    or the shortcut keys for displaying the Start List for Current Heat, Results for Current
    Heat, and Results for Entire Round.

Daktronics Communication Server (DCS) Installation &
Setup
The DCS program is required to convert the data output from Hy-Tek or DirectAthletics
into a format that the Galaxy (M3) controller can show on the display.
1.	 Insert the Daktronics Communication Server (DCS) installation CD (part # 0A-1453-
    0035) into the CD-ROM drive of the Show Control computer (typically “D:”).
2.	 Press the Windows key [] + [E] to open File Explorer. Double-click your CD-ROM
    drive, and then double-click the “dcs3” file (Figure 49).




   Figure 49: DCS Installation Folder

3.	 Follow the onscreen instructions to complete the installation.
4.	 Once the installation is complete, double-click the shortcut icon on the desktop to
    run the program. An icon will also appear in the taskbar.




     Note: After the initial installation, each time the computer is started, DCS should
           begin running automatically (visible in the taskbar).

5.	 Click the Ports button on the left side of the application window (Figure 50).




                     LED Message Displays (Galaxy/M3)
                                    35
   Figure 50: DCS Ports

6.	 Double-click Port 2. The Port
    Configuration window will open.
    Configure Port 2 as follows and as
    shown in Figure 51:
   •   Name: “Hy-Tek”, “DirectAthletics”,
       or another descriptive name for the
       meet management software in use
   •   Type: UDP/IP Socket
   •   Port: “20000”
   •   Leave all other settings as is.
   Click OK when finished.
7.	 Double-click Port 5 and the Port         Figure 51: Port 2 Configuration
    Configuration window will open again.
    Configure Port 5 as follows and as shown
    in Figure 52:
   •   Name: must be “Output”
   •   Type: UDP/IP Socket
   •   Port: “3002”
   •   Click Advanced >> and set the
       Mode to Transmit only.
   •   Leave all other settings as is.
   Click OK when finished.
8.	 Click the Active Files button on the
    left side of the application window
    (Figure 50).


                                                Figure 52: Port 5 Configuration

                      LED Message Displays (Galaxy/M3)
                                     36
9.	 Right-click in the area that says No items to display, and select Insert File (Figure 53).




    Figure 53: Insert File

10.	 In the Insert Active File window
     (Figure 54):
    •   Check the box next to Port 2.
    •   Click the […] button and browse to
        “C:\Program Files (x86)\Daktronics\       Figure 54: Insert Active File
        DCS\Scripts\Custom” and select
        “OffsetStandardRTD5000.dds”
    Click OK when finished.
Once correctly configured, the Ports tab should look like Figure 55. Remember that Port 2
will be named for the meet management software in use.




Figure 55: Configured Ports

When data is sent from Hy-Tek/DirectAthletics, it should now go out to the display. If there
is more than one Ethernet connection configured on the computer, for example one
wireless and one wired, you may need to disable the unused network, or change the
order of preference to ensure that the information is delivered to the desired network.

FAQ
What information can be shown on the message display?
    Common header fields are Event Title, Running Time, and Event/Heat. Common line
    fields are ID #, Lane, Name, Affiliation, Time, and Place.
What additional FinishLynx software is needed to send data to Daktronics message
display?
    A software plug-in called “Network COM Port” (NCP) will be need to be purchased
    from FinishLynx. Refer to contact information in Section 7: Additional Resources
    (p.54).




                        LED Message Displays (Galaxy/M3)
                                       37
What additional Hy-Tek software is needed to send data to a Daktronics message
display?
   A software plug-in for Hy-Tek Meet Manager called “Alpha Scoreboard” will need
   to be purchased from Hy-Tek. Refer to contact information in Section 7: Additional
   Resources (p.54).
What additional FlashTiming software is needed to send data to a Daktronics message
display?
   None
Can FinishLynx/FlashTiming and Hy-Tek data be wirelessly sent to a Galaxy display?
   Yes. However, a wired connection is preferred. Wireless communication is possible
   with server/client Ethernet Bridge Radios. A maximum distance of 1500' (457 m) with
   direct line of sight between radios is required.
What is the recommended data to show on the message display?
   Hy-Tek data is typically considered the Official Results and therefore is the
   recommended data source to display.
Can I send data from both FinishLynx/FlashTiming and Hy-Tek?
   Yes. However, sending data from FinishLynx/FlashTiming and Hy-Tek will require
   coordination between their operators and the message display operator to
   ensure the presentation being played matches the data being sent. Hy-Tek data
   also requires the setup of DCS. Refer to Daktronics Communication Server (DCS)
   Installation & Setup (p.35).
Is there an advantage of showing results from only one data source?
   Yes. The advantage of using one data source is that the results display presentation
   can be started at the beginning of the meet and left running all meet, with no
   additional effort from the message display operator.
What does a typical Hy-Tek/DirectAthletics display sequence look like?
   Refer to the image below:
   1(or 2) Lines of Header Info                               Running Time




                                                                          Up to 29 Lines
                                                                          of Lane Info




                   LED Message Displays (Galaxy/M3)
                                  38
What does a typical FinishLynx display sequence look like?
   Refer to the image below:
   1(or 2) Lines of Header Info                              Running Time




                                                                         Up to 10 Lines
                                                                         of Lane Info




    Lane       Name                 Affiliation     Time         Place




                   LED Message Displays (Galaxy/M3)
                                  39
5   Creating RTD Sequences

    Hy-Tek Results with Running Time
    1.	 On the Show Control computer, open Content Studio and
        create a new presentation.
    2.	 Click on the Dynamic Data Library tab, and then select
        the Track and Field Category for the timing system in use
        (FinishLynx or FlashTiming).
    3.	 Double-click the “Hy-tek Results” folder to see the list of all
        available data fields (Figure 56).
    4.	 Click and drag the “Line 1” data field onto the blank
        presentation.
    5.	 With the “Line 1” data field still selected, set the font to the
        best fit on the presentation. The recommended fonts differ
        based on the display type/controller:
        •     Galaxy/M3: any Venus Fixed Width font                          Figure 56: Hy-tek Results

        •     Live Video/DMP-8000: Courier New or Lucida Console

            Note: Ensure that Smooth Text is disabled for all data fields.

    6.	 With the “Line 1” data field still selected, click on the Field Properties tab (Figure 57).
        Adjust the Length to best fit the presentation layout. The Length value should match
        the Number of Characters per Row set up in Meet Manager. Refer back to Figure 30
        or Figure 45. While adjusting the width of the data field, leave a couple pixels of
        space on either side to ensure that the edges are not touching any sides of the sign
        boundary.




        Figure 57: Data Field Properties (Galaxy/M3)

            Note: For Live Video/DMP-8000 presentations, it is not possible to adjust the Length.
                  Instead, click and drag the edges of a data field box to shorten it.

    7.	 Repeat Steps 4–6 to add additional “Line #” data fields.
    8.	 To add the current running time, click on the “Line 1” data field, and go to the Field
        Properties tab to shorten the length by 8-10 characters (depending on the timer
        precision).
    9.	 On the Dynamic Data Library tab, double-click the “FinishLynx Capture-Running
        Time” folder (Figure 62) or the “FlashTiming Run Time” folder (Figure 64) under the
        appropriate Category.
    10.	 Click and drag the “Running Time” data field into the presentation next to the top
         line of header information. If desired, shorten this field to match the timer precision.
    The example presentation shown in Figure 58 has 10 lines of data plus running time.

                                  Creating RTD Sequences
                                             40
The first 2 lines are for event header information. The next 8 lines are for lane results
information.




Figure 58: Presentation with Hy-Tek Data Fields & Running Time

If the display isn’t tall enough (or the font is too large) to display all of the lanes on a track
at once, Meet Manager will automatically page the results as long as the Number of
Rows for Lanes value matches the number of data fields in the presentation. Refer back
to Figure 30 or Figure 45.

DirectAthletics Results with Running Time
1.	 On the Show Control computer, open Content Studio and
    create a new presentation.
2.	 Click on the Dynamic Data Library tab, and then select
    the Track and Field Category for the timing system in use
    (FinishLynx or FlashTiming).
3.	 Double-click the “DirectAthletics Results” folder to see the
    list of all available data fields (Figure 59).
4.	 Click and drag the “Line 1 - Lane Data” data field onto the
    blank presentation.
5.	 With the “Line 1 - Lane Data” data field still selected, set the
    font to the best fit on the presentation. The recommended
    fonts differ based on the display type/controller:
    •     Galaxy/M3: any Venus Fixed Width font                          Figure 59: DirectAthletics
                                                                         Results
    •     Live Video/DMP-8000: Courier New or Lucida Console

        Note: Ensure that Smooth Text is disabled for all data fields.

6.	 With the “Line 1 - Lane Data” data field still selected, click on the Field Properties tab
    (Figure 60). Adjust the Length to best fit the presentation layout. The Length value
    should match the Width set up in MeetPro. Refer back to Figure 33 or Figure 48. While
    adjusting the width of the data field, leave a couple pixels of space on either side to
    ensure that the edges are not touching any sides of the sign boundary.




                              Creating RTD Sequences
                                         41
    Figure 60: Data Field Properties (Galaxy/M3)

     Note: For Live Video/DMP-8000 presentations, it is not possible to adjust the Length.
           Instead, click and drag the edges of a data field box to shorten it.

7.	 Repeat Steps 4–6 to add additional “Line # - Lane Data” data fields.
8.	 Click and drag the “Header 1 - Event Title” data field onto the presentation.
9.	 To add the current running time, click on the “Header 1 - Event Title” data field, and
    go to the Field Properties tab to shorten the length by 8-10 characters (depending on
    the timer precision).
10.	 On the Dynamic Data Library tab, double-click the “FinishLynx Capture-Running
     Time” folder (Figure 62) or the “FlashTiming Run Time” folder (Figure 64) under the
     appropriate Category.
11.	 Click and drag the “Running Time” data field into the presentation next to the top
     line of header information. If desired, shorten this field to match the timer precision.
The example presentation shown in Figure 61 has 9 lines of data plus running time. The first
line is for event header information. The next 8 lines are for lane results information.




Figure 61: Presentation with DirectAthletics Data Fields & Running Time

If the display isn’t tall enough (or the font is too large) to display all of the lanes on a track
at once, MeetPro will automatically page the results as long as the Height value matches
the number of data fields in the presentation. Refer back to Figure 33 or Figure 48.




                             Creating RTD Sequences
                                        42
FinishLynx Results with Running Time
1.	 On the Show Control computer, open Content Studio and
    create a new presentation.
2.	 Click on the Dynamic Data Library tab, and then select the
    Track and Field: FinishLynx Category.
3.	 Double-click the “FinishLynx Capture-Running Time” folder
    to see the list of all available data fields (Figure 62).
4.	 Click and drag the “Runnning Time” data field into the
    blank presentation.
5.	 Double-click the “FinishLynx Capture-Results” folder to see
    the list of all available data fields.
6.	 Click and drag the desired data fields onto the                      Figure 62: FinishLynx
    presentation. Arrange the fields as shown in Figure 63.              Capture-Running Time
7.	 For data fields that are too long, click on the Field Properties tab, and adjust the
    Length to best fit the presentation layout. While adjusting the width of the data
    field, leave a couple pixels of space on either side to ensure that the edges are not
    touching any sides of the sign boundary.

        Note: For Live Video/DMP-8000 presentations, it is not possible to adjust the Length.
              Instead, click and drag the edges of a data field box to shorten it.

8.	 Select each data field, and set the font to the best fit on the presentation. The
    recommended fonts differ based on the display type/controller:
    •     Galaxy/M3: any Venus Fixed Width font
    •     Live Video/DMP-8000: Courier New or Lucida Console

        Note: Ensure that Smooth Text is disabled for all data fields.




Figure 63: Presentation with FinishLynx Data Fields

In the example presentation shown in Figure 63, only the running time comes from
the “FinishLynx Capture-Running Time” folder; every other data field comes from the
“FinishLynx Capture-Results” folder. Note that “EVENT:” and “HEAT:” are not data fields;
these are regular text boxes set to the same font and size to match the data fields.



                              Creating RTD Sequences
                                         43
If the display isn’t tall enough (or the font is too large) to display all of the lanes on a
track at once, FinishLynx will automatically page the results as long as the Paging Size
value matches the number of data fields in the presentation. Refer back to Figure 22 or
Figure 39.

FlashTiming Results with Running Time
1.	 On the Show Control computer, open Content Studio
    and create a new presentation.
2.	 Click on the Dynamic Data Library tab, and then select
    the Track and Field: FlashTiming Category.
3.	 Double-click the “FlashTiming Results” folder to see the
    list of all available data fields (Figure 64).
4.	 Click and drag the “Header 1 - Event Title” data field
    onto the blank presentation.
5.	 With the “Header 1” data field still selected, set the font
    to the best fit on the presentation. The recommended
    fonts differ based on the display type/controller:
    •     Galaxy/M3: any Venus Fixed Width font
    •     Live Video/DMP-8000: Courier New or Lucida
          Console
                                                                    Figure 64: FlashTiming Folders

        Note: Ensure that Smooth Text is disabled for all data fields.

6.	 With the “Header 1 - Event Title” data field still selected, click on the Field Properties
    tab. Adjust the Length to best fit the presentation layout. The Length value should
    match the Characters per Line set up in FlashTiming. Refer back to Figure 27 or
    Figure 42. While adjusting the width of the data field, leave a couple pixels of
    space on either side to ensure that the edges are not touching any sides of the sign
    boundary.

        Note: For Live Video/DMP-8000 presentations, it is not possible to adjust the Length.
              Instead, click and drag the edges of a data field box to shorten it.

7.	 Repeat Steps 4–6 to add “Header 2 - Round Data” (if desired) and each “Line # -
    Lane Data” field.
8.	 To add the current running time, click on the “Header 1 - Event Title” data field, and
    go to the Field Properties tab to shorten the length by 8-10 characters (depending on
    the timer precision).
9.	 On the Dynamic Data Library tab, double-click the “FlashTiming Run Time” folder.
10.	 Click and drag the “Running Time” data field into the presentation next to the top
     line of header information. If desired, shorten this field to match the timer precision.
The example presentation shown in Figure 65 has 2 lines of header information and 8 lines
of lane results information. Only the running time comes from the “FlashTiming Run Time”
folder; every other data field comes from the “FlashTiming Results” folder.




                              Creating RTD Sequences
                                         44
Figure 65: Presentation with FlashTiming Data Fields

If the display isn’t tall enough (or the font is too large) to display all of the lanes on a track
at once, FlashTiming will page the results as long as the Lines of Text value matches the
number of Lane Data fields in the presentation. Refer back to Figure 27 or Figure 42.




                             Creating RTD Sequences
                                        45
6   FieldLynx Setup & Sequence Creation
    FieldLynx Setup for Portable Timer
    This setup will display FieldLynx competitor results on a Daktronics portable timing display.
    See Figure 66 for typical components and connections.

                        TI-2021 PORTABLE TIMER

                                   DAKTRONICS




            COMP..#/PERFORMANCE                            ATTEMPT


                                                            FIELDLYNX
                                                            NOTEBOOK
      Wired ONLY to
       Scoreboard

                                         USB-to-Serial
                                           Adapter




           J3
                                    J1
                                              Serial
                                          9-pin to 9-pin


           SIGNAL CONVERTER
           Jumpers: 12-N, 13-P

    Figure 66: FieldLynx with Portable Timer

    In this setup, the display is typically sitting in the infield.
    1.	 Connect the signal converter kit (part #
        0A-1125-0007) between the USB-to-Serial
        adapter on the FieldLynx notebook and
        the input jack on the timing display.
    2.	 Open the FieldLynx program.
    3.	 To access the connection settings in
        FieldLynx, open the software and go to
        Options > Preferences (Figure 67).
    4.	 Click on the Scoreboard tab, and then                Figure 67: FieldLynx Options Menu
        click New (Figure 68).



                         FieldLynx Setup & Sequence Creation
                                          46
   Figure 68: Scoreboard Options

5.	 Click Configure. In the Configure
    Scoreboard window, select the correct
    script files as shown below and in Figure 69:
   •   Metric: DakTI2021_met.lss
   •   English: DakTI2021_eng.lss
   •   Standings: DakTI2021_met.lss
   Ensure Code Set is Single Byte.
6.	 Click Communication. In the
    Communication window, click Serial and
    select the correct settings as shown below
    and in Figure 70:
   •   COM Port: select the COM port                 Figure 69: Configure Scoreboard
       outputting to the timing display
   •   Baud Rate: 19200
   •   Parity: None
   •   Bits Per Char: 8
   •   Stop Bits: 1
   •   Flow Control: None
7.	 Click OK to exit the Communication
    window, then click OK once more to exit the
    Configure Scoreboard window.
8.	 Restart the FieldLynx program. Go to
    Options > Preferences and click on the
    Scoreboard tab again to verify the Status
    shows “Running” (Figure 68).                     Figure 70: Scoreboard Communication
9.	 With an event open in FieldLynx, click
    the button shown in Figure 71 to output
    the mark data.



                                                Figure 71: Send Mark


                      FieldLynx Setup & Sequence Creation
                                       47
FieldLynx Setup for LED Message Display
This setup will display FieldLynx competitor results on a Daktronics message display.
See Figure 72 for typical components and connections.

  FIELDLYNX
  NOTEBOOK
                                                                               RS232
                                                                                 IN
                                                                       POWER




                                                                               Client
                                                                               Radio


                                             8-PORT
                                             ROUTER

                                                            Internet
                                                                                            232SR
                                                                                              NI
                                                                                                    REWOP




                                           Ethernet                                     Server
                                                                                        Radio


                     AirLynx


   SHOW CONTROL
         LAPTOP
    with DCS software




Figure 72: FieldLynx with Portable Timer

In this setup, the display is typically sitting in
the infield. Displays are typically controlled
wirelessly via Ethernet Bridge Radio, but wired
control is also available.Refer to the message
display manual for more information on
routing signal to the display.
1.	 Open the FieldLynx program.
2.	 To access the connection settings in
    FieldLynx, open the software and go to            Figure 73: FieldLynx Options Menu
    Options > Preferences (Figure 73).
3.	 Click on the Scoreboard tab, and then click New (Figure 74).




    Figure 74: Scoreboard Options

                     FieldLynx Setup & Sequence Creation
                                      48
4.	 Click Configure. In the Configure
    Scoreboard window, select the correct
    script files as shown below and in Figure 75:
   •   Metric: Dak_MC_Fieldlynx.lss
   •   English: Dak_MC_Fieldlynx.lss
   •   Standings: Dak_MC_Fieldlynx.lss
   Ensure Code Set is Single Byte.
5.	 Click Communication. In the
    Communication window, click Network and
    select the correct settings as shown below
    and in Figure 76:
   •   Host IP Address: “192.168.0.122”             Figure 75: Configure Scoreboard

   •   Port Number: “3005”
6.	 Click OK to exit the Communication
    window, then click OK once more to exit the
    Configure Scoreboard window.
7.	 Restart the FieldLynx program. Go to
    Options > Preferences and click on the
    Scoreboard tab again to verify the Status
    shows “Running” (Figure 74).
8.	 Refer to Daktronics Communication Server
    (DCS) Installation & Setup (p.50) to
    complete the communication setup.
9.	 With an event open in FieldLynx, click the
    button shown in Figure 77 to output the
    mark data.
                                                    Figure 76: Scoreboard Communication




   Figure 77: Send Mark




                   FieldLynx Setup & Sequence Creation
                                    49
Daktronics Communication Server (DCS) Installation &
Setup
The DCS program is required to convert the data output from FieldLynx into a format that
the Galaxy (M3) controller can show on the display.
1.	 Insert the Daktronics Communication Server (DCS) installation CD (part # 0A-1453-
    0035) into the CD-ROM drive of the Show Control computer (typically “D:”).
2.	 Press the Windows key [] + [E] to open File Explorer. Double-click your CD-ROM
    drive, and then double-click the “dcs3” file (Figure 78).




   Figure 78: DCS Installation Folder

3.	 Follow the onscreen instructions to complete the installation.
4.	 Once the installation is complete, double-click the shortcut icon on the desktop to
    run the program. An icon will also appear in the taskbar.




     Note: After the initial installation, each time the computer is started, DCS should
           begin running automatically (visible in the taskbar).

5.	 Click the Ports button on the left side of the application window (Figure 79).




   Figure 79: DCS Ports

                    FieldLynx Setup & Sequence Creation
                                     50
6.	 Double-click Port 1. The Port
    Configuration window will open.
    Configure Port 1 as follows and as shown
    in Figure 80:
   •     Name: “FieldLynx1”
   •     Type: TCP/IP
   •     Port: “3005”
   •     Leave all other settings as is.
   Click OK when finished.
7.	 Double-click Port 2 and the Port
    Configuration window will open again.
    Configure Port 2 as follows and as shown
    in Figure 81:                            Figure 80: Port 1 Configuration

   •     Name: “192.168.0.201” (see Note)
   •     Type: UDP/IP Socket
   •     Port: “3002”
   •     Under Output, click To Addresses
         and then click Edit.
   •     In the Edit Address List window, click
         Add.
   •     In the Edit Address window, type in
         “192.168.0.201” for the Address, and
         then click OK. (see Note)
   •     Back in the Edit Address List window,
         click OK.
   Click OK once more when finished.              Figure 81: Port 2 Configuration

       Note: The port name and address must match the IP address of the display to which
             the data is to be sent. Refer to the display manual for more information on
             changing the IP address.

8.	 Click the Data Flow button on the left side of the application window (Figure 79).
9.	 In the Data Flow screen (Figure 82), create a connection between RTD DATA of Port 1
    to TX of Port 2 by clicking and dragging between the two points.

       Note: If both ports are not immediately visible, right-click in the empty space and
             select Auto Arrange.




                     FieldLynx Setup & Sequence Creation
                                      51
    Figure 82: Data Flow

Once correctly configured, the Ports tab should look like Figure 83.




Figure 83: Configured Ports

When data is sent from FieldLynx, it should now go out to the display.

 Note: DCS will need another pair of ports (input and output) for each additional
       FieldLynx notebook in the system. A system may include up to a max of 8
       notebooks.

If there is more than one Ethernet connection configured on the computer, for example
one wireless and one wired, you may need to disable the unused network, or change
the order of preference to ensure that the information is delivered to the desired network.




                    FieldLynx Setup & Sequence Creation
                                     52
RTD Sequence Creation
1.	 On the Show Control computer, open Content Studio and
    create a new presentation.
2.	 Click on the Dynamic Data Library tab, and then select the
    Track and Field: FieldLynx Category.
3.	 Double-click the “FieldLynx Device 1” folder to see the list
    of all available data fields (Figure 59).
4.	 Click and drag the desired data fields onto the blank
    presentation.
5.	 With a data field still selected, set the font to the best fit on
    the presentation. The recommended fonts differ based on
    the display type/controller:
    •     Galaxy/M3: any Venus Fixed Width font
    •     Live Video/DMP-8000: Courier New or Lucida Console

        Note: Ensure that Smooth Text is disabled for all data
              fields.
                                                                        Figure 84: FieldLynx Device
6.	 With a data field still selected, click on the Field Properties
    tab to adjust the Length to best fit the presentation layout. While adjusting the width
    of the data field, leave a couple pixels of space on either side to ensure that the
    edges are not touching any sides of the sign boundary.

        Note: For Live Video/DMP-8000 presentations, it is not possible to adjust the Length.
              Instead, click and drag the edges of a data field box to shorten it.

7.	 Repeat Steps 4–6 to add additional data fields.
8.	 If the display is large enough to show more than one event, open the “FieldLynx
    Device 2” folder, “FieldLynx Device 3” folder, and so on, adding all desired data fields
    for as many events that can fit on the display.
The example presentation shown in Figure 85 illustrates a typical small display with 2 lines
of event information. Note that “ATTEMPT” is not a data field; this is a regular text box set
to the same font and size to match the data fields.




Figure 85: Presentation with FieldLynx Event




                     FieldLynx Setup & Sequence Creation
                                      53
7   Additional Resources

    Contact Information
    Daktronics
    www.daktronics.com
    Mail:   Daktronics, Inc., Customer Service
            201 Daktronics Drive
            P.O. Box 5128
            Brookings, SD 57006
    Phone: 1-800-325-8766 or 1-605-697-4400 (outside USA & Canada)
    Email: helpdesk@daktronics.com



    FinishLynx
    www.finishlynx.com

    Sales                                             Technical Support
    Phone: 1-800-989-5969                             Phone: 1-978-556-9780
    Email: domsales@finishlynx.com (Domestic)         Email: support@finishlynx.com
           intlsales@finishlynx.com (International)


    Hy-Tek
    www.hy-tekltd.com

    Sales                                             Technical Support
    Phone: 1-866-456-5111                             Phone: 1-866-941-5123
    Email: sales@hy-tekltd.com                        Email: support@hy-tekltd.com


    FlashTiming
    www.flashtiming.com

    Technical Support
    Phone: (971) 998-2349 PST
           (309) 274-2970 or (309) 369-6208 CST
    Email: support@flashtiming.com


    Daktronics Manuals
    •   All Sport 5000 Series Control Console Operations Manual (ED-11976)*
    •   OmniSport 2000 Timing Console Operation Manual (ED-13312)*
    •   Daktronics Aquatic/Track LED Scoreboards Display Manual (DD3043167)*
        * Available online at www.daktronics.com/manuals.
    To learn more about the Daktronics Show Control System software, consult the Show
    Control System User Handbook (DD2003514), accessible via the following options:
    •   Press the Windows key [] and go to All Programs > Daktronics > Display Studio >
        Show Control System User Handbook.
    •   From within Display Studio, press the Display Studio Hub button and select Help.
                                   Additional Resources
                                            54
A   Reference Drawings
    Refer to Resources (p.1) for information regarding how to read the drawing number.
    Any contract-specific drawings take precedence over the general drawings.
    Reference Drawings:
       Track/Football SCBD w/ FinishLynx & All Sport 5000........................................... DWG-95152
       Track/Football SCBD w/ FinishLynx, In Field........................................................ DWG-95153
       Track SCBD w/ FinishLynx, in Press Box............................................................... DWG-104300
       System Riser: FB/Track SCBD w/ Omni2K– Track Side...................................... DWG-186535
       Riser; V1500/M2/M3/Galaxy, Lynx/Hytek, Ethernet......................................... DWG-266821
       TI-2020, -2021, -3101 w/ Finish Lynx................................................................... . DWG-267638
       Riser; Hytek/Lynx/V1500, M2/M3 Galaxy, Fiber, SCBD..................................... DWG-291376
       Riser; Hytek/Lynx/V1500, M2/M3 Galaxy, Fiber, AS5000.................................. DWG-298848
       Riser; Hytek/Lynx/Show Cntrl. M2/M3 Galaxy, EBR Radio............................... DWG-300928
       System Riser; Track M3 Matrix w/ Omni2K in Pressbox................................... DWG-1072146
       Riser; Hytek/Lynx/Show Cntrl, Fiber, Scbd, DVX w/ Version 6.4.................... DWG-3058591
       Riser: DMP-8000/FB Track Scbd, w/Omni 2K, Hytek, Show Cntrl................... DWG-3058769
       Riser; Hytek/Lynx/Show Control Galaxy, E-net, SCBD.................................... DWG-3695367




                                         Additional Resources
                                                  55
This page intentionally left blank.
AH




                                                                                            TRACK SYSTEM RISER DIAGRAM
                                                                                            TRACK/FOOTBALL SCBD W/ FINISH LYNX




                                                                        REV         DATE:    UPDATE ALLSPORT CODE FROM 8604 TO 8603                         BY:
                                                                         06     31 AUG 16                                                                   MTR

                                                                        REV         DATE:    UPDATED BORDER, TITLE BLOCK, REVISION BLOCKS                   BY:
                                                                         05     27 NOV 13                                                                   ACB

                                                                        REV         DATE:    ADDED POWERTIME SCRIPT WHEN USING A                            BY:
                                                                                             USB TO 9 PIN ADAPTOR CABLE
                                                                         04     04 OCT 07                                                                   SAL

                                                                                            THE CONCEPTS EXPRESSED AND DETAILS SHOWN ON THIS DRAWING   THIRD ANGLE PROJECTION
                                                                                              ARE CONFIDENTIAL AND PROPRIETARY. DO NOT REPRODUCE BY
                                                                                                ANY MEANS WITHOUT THE EXPRESS WRITTEN CONSENT OF
                                                                                                 DAKTRONICS, INC. OR ITS WHOLLY OWNED SUBSIDIARIES.
     REV     DATE:     CHANGED SIGNAL CONVERTER DRAWING TO SHOW   BY:                                  COPYRIGHT 2016 DAKTRONICS, INC. (USA)
                       JACK NUMBERS AND PINS.
     03    15 SEP 03                                              LWS   PROJECT:    TRACK SYSTEM RISER DIAGRAM OPTION #1
                                                                           TITLE:   TRACK/FOOTBALL SCBD W/ FINISH LYNX- IN FIELD
     REV     DATE:     CHANGED SOME TEXT                          BY:      DATE:    07-28-97     DIM UNITS: INCHES [MILLIMETERS] SHEET                                 REV
     02    05SEP01                                                GWS     SCALE:    1=1             DO NOT SCALE DRAWING                                                06

                                                                                                                                                           95153
     REV     DATE:     ADDED LYNX SCBD OUTPUT SETTINGS            BY:    DESIGN:                            JOB NO.       FUNC - TYPE - SIZE
     01    15 SEP 98                                              CJB    DRAWN:     JWHITAK              P1125              P - 08 - A
AH
                                                                                                                                    UPDATED CABLE PART NUMBERS FOR RTD RADIOS
                                                                                                                  06   18 APR 12                                                KZB
                                                                                                                                    UPDATED CABLES FROM RADIOS
                                                                                                                  05   19 AUG 11                                                KZB
                                                                                                                                    ADDED RADIO TO HYTEK OPTION
                                                                                                                  04   15 SEPT 09                                               CME
                                                                                                                                    DELETED START CABLE OPTIONS AND
                                                                                                                                    STARTING EQUIPMENT
                                                                                                                  03   28 DEC O5                                                SAL
                                                                                                                                    UPDATED DRAWING TITLE BLOCK AND TEXT
                                                                                                                  02   10 FEB 04                                                MWM
                                                                                                                                    ADDED TYPCAL FOR CABLE REQUIREMENTS
                                                                                                                                    TO NOTE. ALSO ADDED FOOTBALL MODE ONLY
                                                                                                                  01   13 MAY 03    FOR THE ALL SPORT 5000.                     SAL
                                                                            OMNISPORT 2000
                                                                            SYSTEM RISER: FB/TRACK SCBD W/ OMNI2K- TRACK SIDE
                      ADDED SL- NOTE AND OMNI PART NUMBER TO HELP            MMILLER                MMILLER               08 APR 03
                      CLEAN UP DRAWING TO COMBINE FB/TR INTO ONE
     08   23 MAR 15   DRAWING. DWG 186548 WAS INACTIVATED.            HBB    NONE
                                                                                                                                                       186535
                      CHANGED RADIO'S TO CONNEXLINK PRO AND UPDATED
                      CABLES BETWEEN HY-TEK AND OMNISPORT
     07   02 AUG 13                                                   CME               08   P1240          R 01 A
BH




     TRACK
     RISER; V1500/M2/M3/GALAXY, LYNX/HYTEK, ETHERNET
      JWARNE             DRAWN: JFELBER         DATE: 14 MAR 06

      NONE

                                                       266821
      SHEET      REV     JOB NO:

                 07    P1125          R 01 B
REV     DATE:     UPDATED TITLE   BY:
07    10 APR 12                   JJL
REV     DATE:     UPDATED TITLE   BY:
06    10 APR 12                   JJL
REV     DATE:                     BY:
REV     DATE:     UPDATED TITLE   BY:
03    10 APR 12                   JJL
REV     DATE:                     BY:


REV     DATE:                     BY:
μ
BH




                                                                                            4   FINISH LYNX CAPTURE SCBD SETTINGS                (ALLSPORT SETTINGS)
               2
                   HY-TEK ALPHA SCBD SETTINGS                                                   SCRIPT: POWERTIME.LSS
                   ****HYTEK VERSION 4.0BE OR HIGHER*****                                       SERIAL PORT: COM (#)                                                                                                                                            REAR VIEW
                                                                                                     BAUD: 9600, DATA BITS: 7
                                                                                                     PARITY: EVEN, STOP BITS: 1
                   SETUP>ALPHA SCBD INTERFACE:                                                                                                                                                                                 DVX DISPLAY
                                                                                                RUNNING TIME: NORMAL
                       SCBD TYPE: DAKTRONICS FULL MATRIX
                                                                                                RESULTS: AUTO
                       CONNECTION METHOD: UDP ETHERNET
                                                                                                PAGING: ENABLED      SIZE: 1    TIME: 5.0
                   FROM THE "RUN" SCREEN
                                                                                            4
                   INTERFACES>SCOREBOARD-DAKTRONICS FULL MATRIX>
                   SET UDP PORT AND IP ADDRESS:                                                 FINISH LYNX CAPTURE RUNTIME SETTINGS
                        - REMOTE SCBD PORT/SOCKET: 20000
                        - REMOTE SCBD IP ADDRESS: 255.255.255.255                               SCRIPT: DAK-EXTENDED.LSS
                                                                                                SERIAL PORT: NETWORK (UDP)
                   INTERFACE>SCOREBOARD-DAKTRONICS FULL MATRIX                                       PORT: 21000
                   >CUSTOMIZE:                                                                  RUNNING TIME: NORMAL
                        - NUMBER OF ROWS FOR HEADER: (EXAMPLE: 2)                               RESULTS: OFF
                                                                                                                                                                                                                                                                                                INTERNAL                  LC
                        - NUMBER OF ROWS FOR LANES: (EXAMPLE: 8)
                                                                                            4                                                                                                                                                                                                       FIBER
                        -NUMBER OF CHARACTERS PER ROW: (EXAMPLE: 30)
                                                                                                FINISH LYNX CAPTURE RESULTS SETTINGS                                                                                                                                                          TERM PANEL
                          (REFER TO SEQUENCE FOR THIS INFO)

                                                                                                SCRIPT: DAK-EXTENDED.LSS                                                                                                       *SCBD W/ 5 OR 6 DIGIT CLOCK
                   MEET PRO SETTINGS                                                            SERIAL PORT: NETWORK (UDP)
                                                                                                     PORT: 21100
                                                                                                RUNNING TIME: OFF
                   INTERFACES>SCOREBOARDS>DAKTRONICS
                   CONNECTION TYPE: NETWORK                                                     RESULTS: ON                                                   NOTE:                                                                                                                             INTERNAL
                   PORT TYPE: UDP
                   IP ADDRESS: 255.255.255.255 (DEFAULT)
                                                                                            3
                                                                                                FINISH LYNX EDIT SCBD SETTINGS                                ABOVE SETTINGS ARE                                                                                                                    FIBER
                                                                                                                                                                                                                                                                                              TERM PANEL
                   PORT: 20000
                                                                                                SCRIPT: DAK-EXTENDED.LSS
                                                                                                                                                              FOR DMP-8000 FRONT                                                                                                                              ST
                   HEIGHT: #OF LANES PLUS HEADER
                   WIDTH: 100                                                                   SERIAL PORT: NETWORK (UDP)                                    ENDS WITH VERSION 6.4
                                                                                                     PORT: 22000
                                                                                                RUNNING TIME: OFF                                             OR HIGHER. OLDER VNET
                                                                            ROUTER              RESULTS: ON
                                                                          0A-1453-110                                                                         VERSION REFER TO                                                               OPTIONAL WIRELESS
                                                                                                                                                                                                                                            SCOREBOARD RECEIVER
                                                                                                                                                                                                                                                                                                              LC
                                                                           192.168.0.1
                                                                                                                                                              DWG-1068144                                                                                                                            FIBER
                                                                         1 2 3 4 5 6 7 8                                                                                                                                                                                                            PATCH
                                                                                                                                                                                                                                                                                                    PANEL

                                                          ETHERNET                                                                                                                                                                                                                                            LC

     USB        NETWORK                                                                              NET1                                                                              0A-1453-0121
                                                                                                               DMP-8000
                                                                                                             VERSION 6.4 OR                                                      LC FIBER PANEL POSITION
                                                                                           W-2351               HIGHER
                                                                                                      DVI                       POWER                                                FIBER COLORS
       SHOW CONTROL
                                                                                                                                                                                    FUNCTION
                                                                                                                                                                    LC
      1                                                                                                                                              W-1864
                                                                                                                                P0RT-A                                    A1 BL DVX TX
                                                                                                                 VIP-5060                   LC
                                                                                                                                                                         A2 OR DVX RX
                                                                                                      DVI                       POWER
                                                                                                                                                                                                                                                          50µm FIBER
                                                                                                                                                                         A3 GN
                                                                                                                                                                                                                   LC
                                                                                                                                                                         A4 BN
                                                                                            **TYPICALLY MOUNTED IN A RACK**                                              A5 WT
                                                                                                                                                                         A6 SL *SCBD
                                                                                                                                                                          CONVERTER CARD



                                                                                                                                                          W-1513
                                                                                                                                                                           TX1

                                                                                                                                                                           TX2               TX3




                                                                                                                                                                                                                           *ALL ITEMS MARKED WITH ASTERISK
                                                                                                                                                                                                                           ARE OPTIONAL, AND COME TOGETHER
                                                                                                                                  *W-1249
                                                                                                                                                                                               *0A-1166-0027

                                                                                                                                                                                                               OPTIONAL
                                                                                                                                                                                                               WIRELESS
                                                                                                                                                        OR CONNECTS                                          SCOREBOARD
                                                                                                                                                    DIRECTLY TO WIRELESS                                     TRANSMITTER
                                                                                                                                                        ALLSPORT (J6)
                                                                                                                                                                                            *W-1247

                                                                                                                                                                                                                                       REV        DATE:       ADDED NEW SCRIPT NAMES AND MEET PRO                            BY:
     NETWORK                   NETWORK                        NETWORK                                                                                                                                                                                         SETTINGS
                                                                                                                                                                                                                                        1     21 MAY 18                                                                      DDM
     USB                                                          USB
                                                                                                                                                                                                                                                                                                                        THIRD ANGLE PROJECTION
             LAPTOP                  LAPTOP                LAPTOP       A-2221                                                                                                                                                                               THE CONCEPTS EXPRESSED AND DETAILS SHOWN ON THIS DRAWING
                                                                                                                                                                                                                                                               ARE CONFIDENTIAL AND PROPRIETARY. DO NOT REPRODUCE BY
                                                                        USB/SERIAL                                                                                          J8 J7      J6    J5    J4   J3 J2 J1                                                 ANY MEANS WITHOUT THE EXPRESS WRITTEN CONSENT OF
           MEET MANAGER             FINISH LYNX         FINISH LYNX     ADAPTER                                                                                                                                                                                   DAKTRONICS, INC. OR ITS WHOLLY OWNED SUBSIDIARIES.
                                                                                                                                                                                                   *ALLSPORT                                                            COPYRIGHT 2018 DAKTRONICS, INC. (USA)
                                    W/NCP -EDIT       W/NCP -CAPTURE
       2                        3                     4                                                                                                                                              5XXX                             PROJECT:    TRACK W/ STANDARD DVX
                                                                                                                                                                         CODE 8602                                                       TITLE:   RISER; HYTEK/LYNX/SHOW CNTRL, FIBER, SCBD, DVX W/V6.4
           BY CUSTOMER           BY CUSTOMER           BY CUSTOMER                                                                                                       LL-2439                                                          DATE:   14 MAY 15      DIM UNITS: INCHES [MILLIMETERS]   SHEET REV
                                                                                                                                                                                                                                        SCALE:    NONE              DO NOT SCALE DRAWING                 01
                                                                                                                                                                                                                                                  CENGELS
                                                                                                                                                                                                                                                                                                                    3058591
                                                                                                                                                                                                                                        DESIGN:                      JOB NO.    FUNC - TYPE - SIZE
                                                                                                                                                                                                                                        DRAWN:    CENGELS         P1125           R - 01 - B
BH




                                                                       ROUTER
                                                                      0A-1453-110
                                                                      192.168.0.1
                                                                     1 2 3 4 5 6 7 8
                                                                                                                                                                                                                                       REAR VIEW
                                                          ETHERNET                                                                                                                                       DVX DISPLAY
              USB        NETWORK                                                                            NET1                                                         0A-1453-0121
                                                                                                                     DMP-8000
                                                                                                                   VERSION 6.4 OR                                 LC FIBER PANEL POSITION
                                                                                                   W-2351             HIGHER                                           FIBER COLORS
                                                                                                            DVI                     POWER
                SHOW CONTROL
                                                                                                                                                                      FUNCTION
               1                                                                                                                             W-1864
                                                                                                                                    P0RT-A                  A1 BL DVX TX/RX
                                                                                                                      VIP-5060
                                                                                                                                                            A2 OR
                                                                                                            DVI                     POWER
                                                                                                                                                            A3 GN
                                                                                                                                                            A4 BN
                                                                                                                                                                                                                                                               INTERNAL
                                                                                                    **TYPICALLY MOUNTED IN A RACK**                         A5 WT                                                                                                  FIBER
                                                                                                                                                            A6 SL *SCBD                                                                                      TERM PANEL
                                                                                       NOTE:
                                                                                                                                                            CONVERTER CARD
               NETWORK
               USB
                               COM1
                                                                                       HY-TEKS SETTINGS ARE FOR                                                                                          *SCBD W/ 5 OR 6 DIGIT CLOCK
                      LAPTOP                                                           DMP-8000 FRONT ENDS WITH                                  W-1513

                       HYTEK                                                           VERSION 6.4 OR HIGHER.                                               TX1


                2                                                                      OLDER VERSION REFER TO                                               TX2                TX3                                                                             INTERNAL
                                                                                                                                                                                                                                                                   FIBER
                                                                                       DWG-1068144                                                                                                                                                           TERM PANEL
                    BY CUSTOMER

                                                                                                                                                                                *0A-1166-0027

     2
         HY-TEK ALPHA SCBD SETTINGS
         ****HYTEK VERSION 4.0BE OR HIGHER*****
                                                                                                                                                                                                                                                                     FIBER
         SETUP>ALPHA SCBD INTERFACE:                                                                                                                                          *W-1247                                                                               PATCH
             SCBD TYPE: DAKTRONICS FULL MATRIX                                                                                                                                                                                                                      PANEL
             CONNECTION METHOD: UDP ETHERNET

         FROM THE "RUN" SCREEN
         INTERFACES>SCOREBOARD-DAKTRONICS FULL MATRIX>
         SET UDP PORT AND IP ADDRESS:                                                                                                                         J8 J7      J6    J5    J4   J3 J2 J1
              - REMOTE SCBD PORT/SOCKET: 20000
              - REMOTE SCBD IP ADDRESS: 255.255.255.255                                                                                                                              *ALLSPORT
                                                                                                                                                                                       5XXX
         INTERFACE>SCOREBOARD-DAKTRONICS FULL MATRIX
         >CUSTOMIZE:
              - NUMBER OF ROWS FOR HEADER: XX
                                                                                                                                                                                                                                50µm FIBER
              - NUMBER OF ROWS FOR LANES: XX
              - NUMBER OF CHARACTERS PER ROW: XX                                                                                                 NOTE: THIS SETUP DOES NOT REQUIRE THE
                (REFER TO SQUENCE FOR THIS INFO)                                                                                                 ALLSPORT FOR TRACK MODE.




                                                                                                                                                                                                     *ALL ITEMS MARKED WITH ASTERISK
                                                                                                                                                                                                     ARE OPTIONAL, AND COME TOGETHER




                                                                                       OMNISPORT




                                                                                                                                                                                                                       DAKTRONICS, INC.          THE CONCEPTS EXPRESSED AND DETAILS SHOWN ON THIS
                                                                                                                                                                                                                                                 DRAWING ARE CONFIDENTIAL AND PROPRIETARY. DO NOT
                                                                                                                                                                                                                                                 REPRODUCE BY ANY MEANS WITHOUT THE EXPRESS
                                                                                                                                                                                                                                                 WRITTEN CONSENT OF DAKTRONICS, INC.
                                                                                                                                                                                                                                                        COPYRIGHT 2015 DAKTRONICS, INC.

                                                                                                                                                                                                           OMNISPORT 2000
                                                                                                                                                                                                           RISER; DMP-8000/FB TRACK SCBD, W/OMNI 2K, HYTEK, SHOW CNTRL
                                                                                                                                                                                                            CENGELS             DRAWN: CENGELS         DATE: 8 MAY 15

                                                                                                                                                                                                            NONE

                                                                                                                                                                                                                                                                           3058769
                                                                                                                                                                                                             SHEET        REV          JOB NO:

                                                                                                                                                                                                                          00      P1240             F 01 B
  BH




                                                                                                                                                                                                                                                                 FOOTBALL SCOREBOARD
                                                                                                                                                                                                                                                                                                                 FINISH LYNX CAPTURE SCBD
                                                                                                                                                                                                                                                                                                                 SETTINGS (W/ SCBD)

                                                                                                                                                                                                                                                                             0A-1110-0152                        SCRIPT: DAK.LSS
                                                                                                                                                                                                                                                      PS                   RADIO RECIEVER                        SERIAL PORT: NETWORK (UDP)
                                                                                                                                                                                                                                                                                                                       PORT: 3002
                                                                                                                                                                                                        W-1234 CABLE                                                                                             RUNNING TIME: NORMAL
                                                                                                                                                                                                     IN 1" CONDUIT TYP.                                                                                          RESULTS: AUTO
                                                                                                                                                                                                                                                                                                                 PAGE SIZE: (EQUAL TO NUMBER OF
                                       NOTE: *THIS IS A GENERIC LAYOUT FOR A                                                                                                                                                                                                                                     LINES ON SCOREBOARD)
                                       LYNX TIMING SYSTEM. ACTUAL LAYOUT MAY                                                                                                                                                                                                                                     NORMAL RESULTS: NONE
                                       VARY.


                                                                                                                                                        LYNX
                                                                                                                                                     CONNECTION                              0A-1125-0011 FOR
                                                                                                                                                        BOX                                  3400 & 3700 SERIES                                                                                                  DCS SETTINGS
                                                                                                                                                                                                                                                                 GALAXY DISPLAY
                                                                                                                  FIBER
                                                                                                                                                                                             0A-1125-0013 FOR                                                                                                    DAK#: ER-1814159
                                                                                                                CONVERTOR
                                                                                                                 A-1778
                                                                                                                                                                                             3500 SERIES AND SS.                                                                                                 INPUT PORT 1: OPEN

                                                                                                                                                                                                                                CP                         J32
                                                                                W-1360 (10')                                                                                                                                                                                                                     INPUT PORT 2:
                                                                        CABLE, FIBER OPTIC                                  W-1547 (20')                           FINISH LYNX                                                                                                                                         NAME: HYTEK, TYPE: UDP/IP SOCKET
                                                                                                                                                                   CAMERA 1                                                                                                                                                   PORT: 20,000
                                                                                 0A-1125-0010    J-BOX                                                                                                                                                                                                                        INPUT TEMPLATE: BLANK
                                                                                                                                                                                                                                                                                                                       SCRIPT NAME: OFFSETSTANDARDRTD5000.DDS

                                                                                                                                                                                                                                                                                                                 INPUT PORT 3: OPEN
                                                                                                                                                                                                                                                       HY-TEK ALPHA SCBD SETTINGS
                                                                                                                                                                                                                                                       ****HYTEK VERSION 4.0BE OR HIGHER*****




                                                                                                                                                                  START
                                                                                                                                                                                                                                                                                                                 INPUT PORT 4: OPEN




                                                                                                                                                       COMMON
                                                                                                                                                                FINISH
                                                                                                                                                                                                                                                       SETUP>ALPHA SCBD INTERFACE:                               PORT 5:
                                                                                                                                                                                                                                                           SCBD TYPE: DAKTRONICS FULL MATRIX                           NAME: OUTPUT, TYPE: UDP/IP SOCKET
                                                                                                                                                                                                                                                           CONNECTION METHOD: UDP ETHERNET                                   PORT: 3002, BROADCAST: CHECKED
                                                                                                                                                                                                                                                                                                                             INPUT TEMPLATE: BLANK
                                                                                                                                                                                                                                                       FROM THE "RUN" SCREEN                                                 ADVANCED >>
                                                                                                PULL BOX                                                                                                                                               INTERFACES>SCOREBOARD-DAKTRONICS FULL MATRIX>                               MODE: TRANSMIT ONLY
                                                                                                                                                                                                                                                       SET UDP PORT AND IP ADDRESS:
                                                                                                                                                                                                                                                                                                                                   ENABLE RTD PROTOCOLS: CHECKED
                                                                                                                                                                                                                                                            - REMOTE SCBD PORT/SOCKET: 20000
                                                                                                                                                                                                                                                                                                                                    VERIFY ERTD CHECKSUM: CHECKED
                                                                                                                                                                                                                                                            - REMOTE SCBD IP ADDRESS: 255.255.255.255
                                                                                                                                                                                              W-1384 CAT5E CABLE
                                                                                                                                                                                               IN 1" CONDUIT TYP.
                                                                                                                                                                                                                                                       INTERFACE>SCOREBOARD-DAKTRONICS FULL MATRIX
                                                                                                                                                                                                                                                       >CUSTOMIZE:
                                                                                                                                                                                                                                                            - NUMBER OF ROWS FOR HEADER: XX
                                                                                                                                                                                                                                                            - NUMBER OF ROWS FOR LANES: XX
                                                                                                                                                                                                                                                            - NUMBER OF CHARACTERS PER ROW: XX
                                                                                                                            W-1242                                                                                                                            (REFER TO SQUENCE FOR THIS INFO)
                                                                                                                            IN 1" CONDUIT TYP.




                                                                                                 0A-1125-0009
                                                                                                                                                                            10 BASE T HUB
                                                                                                W-1360 (10')                                                                TYP. BY FINISH
                                                                                                                                                                                LYNX                        OUTDOOR                              OUTDOOR
                                                                                                                  FIBER                                                                                    RJ-45 J-BOX                        1/4" JACK J-BOX
                                                                                                                CONVERTER                                                                                  0A-1177-1029                         0A-1091-0227
                                                                                                                                                                                                                                                                                                                                                                W-1236
                                                                                                                 A-1778                               W-1547 (20')                                                                                                                                                                                              CABLE, 2 COND, W/
                                                                                                                                                                                                                                                                                                                                                                PHONE PLUG




                                                                                                                                                                                                                                                                                                                            J7     J6        J4   J3 J2 J1

                                                                                                                                                                                                                                                                                                                                            ALLSPORT
                             NETWORK                                                                                         USB                                                                                                                                                                                                             5010R6
                                                                               NETWORK                                                     NETWORK
                                                                                   COM                                       COM1
                  LAPTOP COMPUTER                                 LAPTOP COMPUTER                                            LAPTOP COMPUTER

                        FINISHLYNX                                        HYTEK                                                      SHOW
                        COMPUTER                                        COMPUTER                                                    CONTROL

                  WITH NCP PLUG-IN

                                                                                                                                                                                                                                                                                                                 THE CONCEPTS EXPRESSED AND DETAILS SHOWN ON THIS DRAWING   THIRD ANGLE PROJECTION
                                                                                                                                                                                                                                                                                                                   ARE CONFIDENTIAL AND PROPRIETARY. DO NOT REPRODUCE BY
                                                                                                                                                                                                                                                                                                                     ANY MEANS WITHOUT THE EXPRESS WRITTEN CONSENT OF
                                                                                                                                                                                                                                                                                                                      DAKTRONICS, INC. OR ITS WHOLLY OWNED SUBSIDIARIES.
                                                                                                                                                                                                                                                                                                                            COPYRIGHT 2017 DAKTRONICS, INC. (USA)

                                                                                                                                                                                                                                                                                            PROJECT:    TRACK
                                                                                                                                                                                                                                                                                               TITLE:   RISER; HYTEK/LYNX/SHOW CONTROL GALAXY, E-NET, SCBD
                                                                                                                                                                                                                                                                                               DATE:    26 JUL 17      DIM UNITS: INCHES [MILLIMETERS]   SHEET REV
                                                                                                                                                                                                                                                                                              SCALE:    NONE              DO NOT SCALE DRAWING                 00
                                                                                                                                                                                                                                                                                                        CENGLES
                                                                                                                                                                                                                                                                                                                                                                        3695367
                                                                                                                                                                                                                                                                                             DESIGN:                       JOB NO.    FUNC - TYPE - SIZE
                                                                                                                                                                                                                                                                                             DRAWN:     MRUFER          P1125           R - 01 - B
Part # - DWG-03695367                                         Version - 00.1                               Description - N B RISER; HYTEK/LYNX/SHOW CONTROL GALAXY, E-NET, SCBD                                   Lifecycle State - Full Production                                             Last Modified By - mrufer                                              Last Modified - 2017-07-26
This page intentionally left blank.
