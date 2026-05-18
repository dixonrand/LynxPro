# LynxPad User Guide

**Title:** LynxPad User Guide
**Slug:** `lynxpad-user-guide`
**Category:** Lynx-Sold Software › Manuals and User Guides
**Type:** manual
**Source URL:** https://finishlynx.com/wp-content/uploads/2025/05/LynxPad_3_30_U_G.pdf
**Use:** Full reference for LynxPad meet management software.

---

User's Guide



LynxPad 3.30
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

           Windows 95, Windows 98, Windows 2000, Windows ME, Windows NT,
           Windows XP, Windows CE (WinCE), and Windows 10 are registered
           trademarks of Microsoft Corp.

           Photoshop and Postscript are registered trademarks of Adobe Systems
           Incorporated.

           Palm OS, Palm Computing, Graffiti, and HotSync, are registered trademarks
           of Palm, Inc. Palm, the Palm logo, and the HotSync logo are trademarks of
           Palm, Inc.

           All other trademarks are properties of their respective companies.

           LynxPad 3.30 User's Guide

           May 5, 2025

           Copyright © 1992-2025 by Lynx System Developers, Inc.

           All rights reserved.
                                                                                                                                                                     i




Contents

Copyright Notice                                                                                                                                                   1


New LynxPad 3.30 Features                                                                                                                                          5


Introduction to LynxPad                                                                                                                                            7
      What is LynxPad? ......................................................................................................................................... 7
              What are Lynx data files? .................................................................................................................. 8
      Installing LynxPad ........................................................................................................................................ 8
      Starting LynxPad ........................................................................................................................................ 10
      Getting help ................................................................................................................................................ 11
              Contacting Lynx System Developers, Inc. ...................................................................................... 11


Quick Start Tutorial                                                                                                                                             13
      Tutorial introduction ................................................................................................................................... 13
      1. Open the sample competition.................................................................................................................. 13
      2. Add an event ........................................................................................................................................... 15
      3. Save changes to the competition ............................................................................................................. 17
      4. Set up an athlete affiliation ..................................................................................................................... 18
      5. Add an athlete ......................................................................................................................................... 19
      6. Assign and seed athletes ......................................................................................................................... 20
      7. Load results ............................................................................................................................................. 22
      8. Use advanced features ............................................................................................................................ 23


Creating a Competition                                                                                                                                           25
      Creating a new competition ........................................................................................................................ 26
             Displaying windows ........................................................................................................................ 27
             Resizing windows ............................................................................................................................ 27
      Saving a competition .................................................................................................................................. 28
      Backing up competition data ...................................................................................................................... 28
      Opening an existing competition ................................................................................................................ 29
             Opening a competition as read-only ................................................................................................ 30
      Modifying how a competition is scored ...................................................................................................... 31
             Setting up alternative meet scoring.................................................................................................. 32
             Disabling competition scoring ......................................................................................................... 32
             How does LynxPad handle unattached athletes? ............................................................................. 32
ii     Contents


     Setting up affiliations and abbreviations ..................................................................................................... 33
     Single byte or unicode?............................................................................................................................... 34
     Adjusting the time precision ....................................................................................................................... 34


Entering Data                                                                                                                                                 37
     Data entry basics ......................................................................................................................................... 37
            Sorting data...................................................................................................................................... 37
     Adding events ............................................................................................................................................. 37
            Entering a custom distance .............................................................................................................. 38
            Track and field multi-events ............................................................................................................ 39
            Adding a non-track and field event ................................................................................................. 40
            Deleting an event ............................................................................................................................. 41
            Editing an event ............................................................................................................................... 41
            Setting up rounds ............................................................................................................................. 41
            Changing the measurement system ................................................................................................. 43
            Setting up a mixed-gender event ..................................................................................................... 43
            Disabling event scoring ................................................................................................................... 44
            Setting Wind Parameters ................................................................................................................. 44
            Setting LapTime Parameters............................................................................................................ 45
     Adding athletes and relays .......................................................................................................................... 45
            Adding individual athletes ............................................................................................................... 45
            Adding a relay team ......................................................................................................................... 47
            Relay team members ....................................................................................................................... 48
            Deleting an athlete or relay .............................................................................................................. 48
            Sorting athletes or relays ................................................................................................................. 48


Assigning and Seeding Athletes                                                                                                                                49
     Assigning athletes to events ........................................................................................................................ 49
           Adding multiple athletes to an event ............................................................................................... 50
           Entering seed times or seed marks................................................................................................... 50
           Season Best and Lifetime Best Performances) ................................................................................ 52
           How do I enter an athlete in more than four events? ....................................................................... 52
           Unassigning athletes from an event ................................................................................................. 52
     Seeding athletes .......................................................................................................................................... 53
           Modifying seeding criteria............................................................................................................... 53
           Seeding athletes according to seeding criteria ................................................................................. 55
           Seeding athletes manually ............................................................................................................... 56
           Seeding multiple events at once ...................................................................................................... 58
           Unseeding athletes ........................................................................................................................... 59
           Changing the number of heats or flights .......................................................................................... 59
           Selecting the advancement criteria .................................................................................................. 59
           Randomizing lane assignment ......................................................................................................... 60


Administering Results                                                                                                                                         61
     Using LynxPad with FinishLynx ................................................................................................................ 61
           How does LynxPad make a start list available to FinishLynx? ....................................................... 62
           Importing results from FinishLynx .................................................................................................. 62
           Displaying splits .............................................................................................................................. 63
           "Match athletes by Lane when ID's are missing" ............................................................................ 63
           Entering a wind reading for a track event ........................................................................................ 64
           Using the User3 Custom Field ......................................................................................................... 65
                                                                                                                                             Contents                iii


        Breaking ties ............................................................................................................................................... 67
        Using LynxPad with FieldLynx .................................................................................................................. 68
               How does LynxPad make a flight sheet available for FieldLynx? .................................................. 68
               Importing results from FieldLynx ................................................................................................... 69
               Viewing a field series ...................................................................................................................... 69
        Sending data to a scoreboard ...................................................................................................................... 70
               Connecting LynxPad to a scoreboard .............................................................................................. 71
               Configuring LynxPad for scoreboard use ........................................................................................ 71
        Disabling loading results on program start ................................................................................................. 75
        Entering results manually ........................................................................................................................... 76
        Clearing results ........................................................................................................................................... 77
        Viewing a wind reading .............................................................................................................................. 77
        Purging data ................................................................................................................................................ 78


Printing Reports from LynxPad                                                                                                                                      81
        Printing a report .......................................................................................................................................... 82
               Printing a Meet Program report ....................................................................................................... 83
               Printing an Events report ................................................................................................................. 84
               Printing an Entry Lists report .......................................................................................................... 84
               Printing a Finish Line Sheet ............................................................................................................ 85
               Printing a Field Event Score Sheet .................................................................................................. 85
               Printing a Results report .................................................................................................................. 86
               Printing a Team Scores report ......................................................................................................... 87
               Exporting data ................................................................................................................................. 88
        Adjusting the time precision ....................................................................................................................... 88
        Configuring name and affiliation displays in reports .................................................................................. 89


Beyond the Basics                                                                                                                                                  91
        Creating competition data from multiple sources ....................................................................................... 92
               Importing Lynx files ........................................................................................................................ 93
               Importing and exporting delimited files .......................................................................................... 93
        Backing up and restoring a competition ..................................................................................................... 97
               Backing up a competition ................................................................................................................ 97
               Restoring a competition ................................................................................................................... 98
               Ability to integrate entries from multiple sources ........................................................................... 98
        Using Custom Fields ................................................................................................................................. 100
        Using LynxPad with ReacTime Championship System ........................................................................... 100
               How does LynxPad make a start list available to ReacTime? ....................................................... 101
               Importing reaction times ................................................................................................................ 101
        Using LynxPad with ClerkLynx ............................................................................................................... 102
        Using LynxPad with cross country ........................................................................................................... 102
        Using LynxPad with rowing, canoeing, or kayaking ................................................................................ 103
        Converting LynxPad to another language ................................................................................................. 104
        Customizing LynxPad............................................................................................................................... 105


Glossary of Terms                                                                                                                                                107


Index                                                                                                                                                            109
                                                                                   5




New LynxPad 3.30 Features
          If you are a current LynxPad user, note the following features that are new in
          LynxPad 3.30.
          ▪   HTML Export – LynxPad allows you to export reports in HTML format
              by clicking the button on the Preview screen.
                                                                                                        7


CHAPTER 1

Introduction to LynxPad

             In This Chapter
             What is LynxPad? .............................................................. 7
             Installing LynxPad ............................................................. 8
             Starting LynxPad................................................................ 10
             Getting help ........................................................................ 11




What is LynxPad?
             LynxPad™ is a competition management program that allows you to:
             ▪    create start lists and results printouts for any competition timed with
                  FinishLynx® and/or administered by FieldLynx™
             ▪    seed athletes and advance them into subsequent rounds
             ▪    edit and import all Lynx data files (see "What are Lynx data files?")
             ▪    score the competition
             ▪    send data to scoreboards, and
             ▪    print reports.
8    LynxPad 3.30   User's Guide




What are Lynx data files?
                        Lynx data files contain specific information about your competition, as
                        described by the following table.

                         File Name                    Contains

                         lynx.evt                     events and the athletes in them

                         fldlynx.sch                  FieldLynx field event schedule info

                         lynx.sch                     FinishLynx track schedule info

                         lynx.ppl                     athlete info

                         *.lsf                        seeding info

                         lynx.afl                     affiliation info

                         lynx.rly                     relay info

                         *.lif                        FinishLynx race results

                         *.lff                        FieldLynx field event results

                         *.hif                        hand entered results

                         *.rif                        ReacTime reaction times




Installing LynxPad
                        LynxPad requires that the computer that you install it on runs a Microsoft
                        Windows operating system.

                    ➢ Upgrading to a new version of LynxPad:
                        If you are upgrading to a new version of LynxPad, you must first uninstall the
                        old version of LynxPad. To uninstall an old version of LynxPad:
                        1   Click the Microsoft Windows Start button and select Control Panel. The
                            Control Panel screen appears.
                        2   Double-click Add or Remove Programs. The Add or Remove Programs
                            screen appears.
                                     Chapter 1 Introduction to LynxPad        9



   3   Scroll down through the list of installed programs and click to highlight
       LynxPad.
   4   Click the Remove button and then follow the instructions on the screen to
       complete the uninstallation process.

➢ Installing LynxPad from the Lynx Software Flash Drive:
   1   Insert the Lynx Software Flash Drive into your computer's USB port. Wait
       for the drive to auto-run.
   2   When the Lynx splash screen appears, click the Enter button. The Lynx
       System Developers, Inc., home page appears.
   3   From the Lynx System Developers, Inc. home page, select Downloads |
       Database | Software. The Event Administration | Software page appears.
   4   Find LynxPad on the screen and then click the Single File Installer button.
       The File Download dialog appears.
   5   Click Save and navigate to somewhere on your computer where you can
       install LynxPad.
   6   Click Save again. Click Close at the Download Complete dialog.
   7   Navigate to the directory where you just saved the LynxPad application.
       Double-click the LynxPad executable (*.EXE) file.
   8   Click Yes when asked if you wish to continue with the LynxPad
       installation. If you have a serial number, type it in the text box when
       prompted. If you do not have a serial number, you are able to use all
       LynxPad functions except printing reports. If you decide to purchase a
       serial number later, you can enter it later without reinstalling the LynxPad
       application.
   9   Follow the instructions on the screen to complete the installation.

➢ Installing LynxPad from the Lynx website:
   LynxPad can be downloaded from the Lynx website
   (http://www.finishlynx.com/).
   1   From the Lynx System Developers, Inc. home page, select Products |
       LynxPad Meet Management.
   2   Click the Download tab.
   3   Click the LynxPad Meet Management Software link.
   4   Navigate to the directory where you just downloaded the LynxPad
       application. Double-click the LynxPad executable (*.EXE) file.
10   LynxPad 3.30   User's Guide


                        5   Click Yes when asked if you wish to continue with the LynxPad
                            installation. If you have a serial number, type it in the text box when
                            prompted. If you do not have a serial number, you are able to use all
                            LynxPad functions except printing reports. If you decide to purchase a
                            serial number later, you can enter it later without reinstalling the LynxPad
                            application.
                        6   Follow the instructions on the screen to complete the installation.



Starting LynxPad
                        Start LynxPad by clicking the Microsoft Windows Start button and selecting
                        All Programs | LynxPad.

                        Note:
                        ▪   LynxPad requires administrator privileges
                        If a LynxPad serial number dialog appears:
                        ▪   If you have a serial number, type it in the text box and then click Ok.
                        ▪   If you do not have a serial number, click the Demo button. You are able
                            to use all LynxPad functions except printing reports.




                        If you already entered a serial number during installation, if you just entered
                        it in the previous step, or if you clicked the Demo button, a blank LynxPad
                        screen appears.
                                                     Chapter 1 Introduction to LynxPad       11




Getting help
               ➢ Launch the online help:
                  For help while using LynxPad, click Help from the Menu bar and click
                  Contents to open the online LynxPad User's Guide.

               ➢ Read tool tips:
                  To learn what happens when you click an icon in LynxPad, position the
                  pointer over that icon and look for a "tool tip" in the lower left corner of your
                  screen.




Contacting Lynx System Developers, Inc.
                  There are many ways to contact Lynx System Developers, Inc.

               ➢ Emergency after-hours technical support:
                  1   If you need after-hours emergency technical support, make sure you have
                      a call-back number available.
                  2   Dial: (978) 556-9780.
                  3   Follow the menu that instructs you to dial 1 for technical support.
                  4   If the tech support voice mail comes on, the menu instructs you to dial 3
                      and to then dial your call-back number. The emergency support
                      technician will call you back at the earliest possible convenience.
12   LynxPad 3.30   User's Guide



                    ➢ Lynx on the Web:
                        The Lynx website (http://www.finishlynx.com/) has a bounty of information
                        about FinishLynx and the entire suite of Lynx products.

                    ➢ Lynx by telephone:
                        Call us at (978) 556-9780. We are located in the United States of America in
                        the Eastern Standard Time (EST) zone. Our office hours are 9:00 am to 5:00
                        pm, Monday through Friday.

                    ➢ Lynx technical support email:
                        Write to Lynx technical support at: support@finishlynx.com
                        (mailto:support@finishlynx.com).
                                                                                                         13


CHAPTER 2

Quick Start Tutorial

               In This Chapter
               Tutorial introduction .......................................................... 13
               1. Open the sample competition ......................................... 13
               2. Add an event .................................................................. 15
               3. Save changes to the competition .................................... 17
               4. Set up an athlete affiliation ............................................ 18
               5. Add an athlete ................................................................ 19
               6. Assign and seed athletes................................................. 20
               7. Load results .................................................................... 22
               8. Use advanced features .................................................... 23




Tutorial introduction
               This tutorial teaches you how to perform basic LynxPad functions using the
               sample competition that comes with the LynxPad installation.

               For instructions on specific LynxPad functions, and for answers to more
               advanced questions about using LynxPad, please consult the online User's
               Guide by clicking Help from the Menu bar and selecting Contents.




1. Open the sample competition
               Open the sample lynx.cmp, or competition file, that comes with LynxPad.
               1    Click File from the Menu bar and then select Open....
14   LynxPad 3.30 User's Guide


                          2      The Open dialog appears. Navigate to the directory
                                 C:\LynxPadData\Sample.
                          3      Double-click to open the file, lynx.cmp. The data loads and LynxPad
                                 displays the sample data on the screen.
                                                    Chapter 2 Quick Start Tutorial    15




2. Add an event
              Now, follow these steps to add the Women's 200 Meters to the existing list of
              events.
              1   Click the Events window title bar to activate it. A window is active when
                  its title bar darkens.




              2   Either click Events from the Menu bar and then select Add Event, or click
                       . The Add/Edit Event dialog appears.
              3   The Event #: field is already completed for you. Enter the following
                  information:
                  ▪   Event Name: Women 200 Meters
                  ▪   Gender: Select Female from the drop-down list
                  ▪   Event Type: Track is selected by default, and
                  ▪   Distance: Select 200 from the drop-down list.
              4   Now, change the number of rounds to 3.
                  a) Click in the Number of Rounds: text box and change the 1 to 3.
                  b) Click Apply.
16   LynxPad 3.30 User's Guide


                                 c) Click Yes when a message appears asking if you wish to continue. All
                                    three rounds are displayed in the Rounds area.
                          5      At this time, do not change the information in the Seeding area, but
                                 notice the options that are available. For example, you can change the
                                 number of lanes and the advancement criteria.
                                                     Chapter 2 Quick Start Tutorial    17



              6   When you are finished entering the event settings, click Add. The dialog
                  remains open and displays a new event number so you can continue to
                  add events. When you are finished adding events, click Done. Notice that
                  the event you added, the Women's 200 Meters, appears in the Events
                  window.




3. Save changes to the competition
              Now you are ready to save the event you just added to the sample
              competition.

              Either click File from the Menu bar and select Save or click     .

              Notes:
              ▪   After each athlete or event is added or edited, the competition is
                  automatically saved.
              ▪   The first time you save an entire competition, it may take one or two
                  minutes to complete the save.
18   LynxPad 3.30 User's Guide




4. Set up an athlete affiliation
                          In this step, you will set up the athlete affiliation Lynx.
                          1      Click Competition from the Menu bar.
                          2      Select Setup Affiliations.... The Setup Affiliations dialog appears.




                          3      Type "Lynx" in the Name text box.
                          4      Type "LYN" in the Abbrev text box.
                          5      Click Add. The Lynx affiliation is added to the competition.
                          6      Click Done to return to the LynxPad main screen.
                                                       Chapter 2 Quick Start Tutorial      19




5. Add an athlete
               Now, add competitor Jane Smith from Lynx to the competition.
               1    Click the Athletes/Relays window title bar to activate it.
               2    Either click Athletes from the Menu bar and select Add Athlete... or click
                        . The Add/Edit Athlete dialog appears.




               3    Enter the following information in each text box. Press the Tab key to
                    move to the next field.
                    ▪   ID = leave at default entered automatically, 916
                    ▪   First Name = Jane
                    ▪   Last Name = Smith
                    ▪   Affiliation = Select Lynx, the affiliation you created earlier (see "4.
                        Set up an athlete affiliation"), from the drop-down list
                    ▪   License = leave blank
                    ▪   Gender = Select Female.
               4    Click the Add button to add Jane Smith to the competition. Now, click
                    Done to return to the main LynxPad screen.
20   LynxPad 3.30 User's Guide




6. Assign and seed athletes
                          Now you are ready to add athletes to the Women's 200 Meters and then seed
                          them into heats.
                          1      In the Athletes/Relays window, display the women athletes that are in the
                                 sample competition by selecting Women from the drop-down list.




                          2      Add Jane Smith to the Women's 200 meters by following these steps.
                                 a) In the Events window, click to highlight Women 200 Meters
                                    (Prelims). LynxPad is ready for you to add athletes to this event.
                                 b) Click the ID column header in the Athletes/Relays window to sort the
                                    women athletes by ID. The first ID on your list of athletes should be
                                    the athlete you just added, number 916, Jane Smith. If not, click the
                                    ID column header again.
                                 c) Click on Jane Smith to highlight this athlete's row.
                                 d) Either click Athletes/Relays from the Menu bar and select Assign to
                                    Selected Event or click       . Jane Smith is added to the Women's
                                    200 Meters.
                          3      Now add multiple athletes at once to the Women's 200 Meters.
                                 a) Scroll to the top of the list in the Athletes window.
                                 b) Click the ID column header again until Jenny Adams, ID #12, is at the
                                    top of the list.
                                 c) Click to highlight the row containing Jenny Adams.
                                 d) Press the Shift key while clicking to select athlete number 218,
                                    Melissa Mueller. All of the athletes from Jenny Adams through
                                    Melissa Mueller are selected.
                                 e) Either click Athletes/Relays from the Menu bar and select Assign to
                                    Selected Event or click   . All of the athletes you selected are
                                    added to the Women's 200 Meters.
                          4      Now, seed the athletes into lanes.
                                 a) If it is not already selected, click to select Women 200 Meters (Prelims)
                                    from the Events window.
                                 b) Click the Heats - Prelims title bar to activate the Heats window.
                                  Chapter 2 Quick Start Tutorial    21



c) Either click Heats/Flights and select Seed from the Menu bar or click
         . The Seed - Women 200 Meters - Prelims dialog appears.
d) Click the Seed button. The Advancement Selection dialog appears.
e) Type 2 in the Number of Heats next round text field, and then click
   Apply. LynxPad calculates the number of athletes advancing to the
   next round. In this case, 16 athletes will advance to round 2 of the
   Women's 200 Meters.
f) Click Ok. Athletes are seeded into the heats of the round, and you are
   returned to the Seed - Women 200 Meters - Prelims dialog. You can
   view the seeded athletes by clicking the plus (+) sign next to a heat.
g) Click Ok to exit the dialog.
h) Click Yes when asked if you wish to update the start lists. The seeded
   heats are displayed in the Heats window on the LynxPad main screen.
22   LynxPad 3.30 User's Guide



                          Tip: You can place athletes into heats yourself (see "Seeding athletes
                          manually"). You can also enter seed times or marks (see "Entering seed
                          times or seed marks") for athletes prior to seeding them, add a new heat (see
                          "Adding a heat") after seeding, and randomize lane assignment (see
                          "Randomizing lane assignment").



7. Load results
                          1      In the Events window, click to highlight Men 1500 Meter Run.
                          2      Click the Heats window title bar to activate it.
                          3      Either click Heats/Flights from the Menu bar and select Load Results
                                 from the drop-down list, or click     .
                          4      A dialog advising you to change your FinishLynx Database Precision
                                 settings to Thousandths appears. Click Ok. The results for the Men’s
                                 1500 Meter Run appear in the Heats window.
                                                       Chapter 2 Quick Start Tutorial      23




8. Use advanced features
               The sample competition provided with LynxPad allows you to practice some
               advanced LynxPad features, including:
               ▪   Viewing a splits display
               ▪   Viewing a field event display, and
               ▪   Breaking a tie.
            ➢ Viewing a splits display:
               1   Make sure you followed the instructions in Step 7 of this tutorial to
                   import results into the Men's 1500 Meter Run.
               2   Click the Heats window title bar to activate it.
               3   Either click Heats/Flights from the Menu bar and select Splits or click
                   . The Splits dialog appears, showing the splits captured in the event.




               4   Click Ok to return to the LynxPad main screen.

            ➢ Viewing a field series display:
               1   Click to highlight the Long Jump Women event from the Events window.

               2   Click      to load the results for this event.
24   LynxPad 3.30 User's Guide


                          3      Click the Heats/Flights window title bar to activate it.
                          4      Either click Heats from the Menu bar and select Field Series or click        .
                                 The Field Series dialog displays, showing the history of the event.




                          5      Click Ok to return to the main LynxPad screen.

                      ➢ Breaking a tie:
                          1      In the Events window, click to highlight Round 1 of the Men 110Meter
                                 Hurdles in the Events window.

                          2      Click      to load results for this event.

                          3      Either click     or click Heats/Flights from the Menu bar and select
                                 Break Ties. The Break Ties dialog appears, displaying two athletes in the
                                 round whose times tie them for second place.
                          4      Click in the Place column next to one of the athlete's names and make the
                                 2 a 3.
                          5      Click Ok. The Heats window now displays the athlete you just manually
                                 placed into third place with a red 3 in the Place column, indicating a tie
                                 that was broken manually.

                          Tip: Adjusting LynxPad's time precision (see "Adjusting the time precision")
                          may help you avoid having to break ties in the future.

                          This completes the LynxPad Quick Start Tutorial.
                                                                                                 25


CHAPTER 3

Creating a Competition
            In this section, you will learn all about setting up and configuring the
            competition in LynxPad you are going to administer.

            In This Chapter
            Creating a new competition ............................................... 26
            Saving a competition .......................................................... 28
            Backing up competition data .............................................. 28
            Opening an existing competition ....................................... 29
            Modifying how a competition is scored ............................. 31
            Setting up affiliations and abbreviations ............................ 33
            Single byte or unicode? ...................................................... 34
            Adjusting the time precision .............................................. 34
26   LynxPad 3.30 User's Guide




Creating a new competition
                      ➢ Before you begin:
                          Before creating a new competition in LynxPad, first create a folder
                          somewhere on the computer where you want your competition files stored.
                          This becomes your competition directory, and it is the same directory shared
                          by FinishLynx, NetExchange, and ReacTime.

                      ➢ Instructions:
                          Follow these steps to create a new competition.

                          1      Either click    or click File from the Menu bar and select New. The
                                 New Competition dialog appears.




                          2      Type the competition Name and Location in the fields provided and select
                                 Date from the drop-down list.
                          3      Click the Browse... button and navigate to the competition directory you
                                 created earlier.
                          4      Click Ok. You are returned to the New Competition dialog.
                          5      By default, LynxPad is set to score the competition (see "Modifying how
                                 a competition is scored"). If you do not want to score the competition,
                                 click to uncheck the Score Competition box.
                          6      Click Ok. Blank Events, Athletes, and Heats windows open on the screen.
                                 You have successfully created a new competition in LynxPad.
                                                      Chapter 3 Creating a Competition         27




                   Important: LynxPad does not automatically save the competition when you
                   first create it. Instead, you must manually save the competition (see "Saving
                   a competition").


Displaying windows
                   There are three active windows available in LynxPad:
                   ▪   Events
                   ▪   Heats/Relays, and
                   ▪   Athletes.
               ➢ To make a window active:
                   Simply click on the title bar of the window or else click on a line of data
                   anywhere within a window. The title bar darkens, indicating that the window
                   is active.

               ➢ To alter the way the windows are displayed:
                   With a lynx.cmp file open, click Window from the Menu bar and choose:
                   ▪   Cascade to layer the windows on top of one another. Activate any
                       window within the cascade by clicking its title bar.
                   ▪   Tile to display all three windows at once, equally and horizontally across
                       the screen.
                   ▪   Events, Athletes, or Heats to activate a particular window.


Resizing windows
                   You can maximize or minimize the Events, Athletes, or Heats window.

                   ▪   To maximize (make larger) a window, click         in the upper right
                       corner.

                   ▪   To minimize (make smaller) a window, click         in the upper right
                       corner.
28   LynxPad 3.30 User's Guide




Saving a competition
                          To save a competition, either click        or click File | Save from the Menu
                          bar.

                          Auto-save - after each athlete or event is added or edited, the competition is
                          automatically saved.



Backing up competition data
                          It is good practice to backup your competition data periodically. We
                          recommend saving a copy of the data to a floppy disk upon the completion of
                          each round during the competition. After the competition, save the data to a
                          CD for archival purposes.

                          Backup LynxPad data by copying the competition directory where your
                          competition files are stored. The steps for this procedure are outlined here.
                          1      If you have a competition open in LynxPad, close it by clicking File |
                                 Close.
                          2      Navigate to the directory where the files for your competition are stored.
                                 This is the folder you created when you first created the competition (see
                                 "Creating a new competition").
                          3      Copy the entire directory, which contains all or some of the files listed
                                 here.
                          4      Paste the directory in a new, safe location, for example, to a floppy disk.
                                                  Chapter 3 Creating a Competition        29




              Important! When backing up the data contained within a competition, you
              must make a copy of ALL of the files in that directory. This includes:

              ▪   lynx.cmp
              ▪   lynx.ppl
              ▪   lynx.sch and fldlynx.sch
              ▪   lynx.evt
              ▪   lynx.lsf (found in the Seeding sub-directory)
              ▪   lynx.afl
              ▪   lynx.rly
              ▪   LIF
              ▪   LFF
              ▪   HIF (found in the HandEntered sub-directory), and
              ▪   RIF files.
              If you delete any of these files at the competition directory level, the data is
              lost.



Opening an existing competition
              Tip: You can open the sample competition that came with LynxPad to learn
              many of the application's functions. You can also follow the steps in the
              Quick Start Tutorial (see "Tutorial introduction") to learn how to perform
              basic LynxPad functions.

              To open an existing competition:

              1   Either click    or click File from the Menu bar and select Open.... The
                  Open dialog appears.
              2   Navigate to the directory where the lynx.cmp file is stored.
                  Note: The practice lynx.cmp file is located in the directory where you
                  stored the files during installation, for example, C:\LynxPadData\Sample.
              3   Double-click the lynx.cmp file. The events, heats, and athletes data
                  available for this competition open on your screen.
30   LynxPad 3.30 User's Guide



                          Note: When you click File from the Menu bar, a list of the four most recently
                          opened lynx.cmp files appears. Clicking on one of the selections in the list
                          opens the file.

                      ➢ "No valid results found" message:
                          If when opening an existing competition a message appears telling you "No
                          valid results found in: [Competition Directory]," click Ok. LynxPad is set to
                          look for available results (LIF, LFF, and HIF) files whenever you open a
                          competition. You can disable this feature (see "Disabling loading results on
                          program start").


Opening a competition as read-only
                          You can select this option if you want to view a competition without
                          accidentally altering the data. For example, you might want someone else to
                          view the data without the ability to access most LynxPad functions.

                          1      Either click    or click File from the Menu bar and select Open.... The
                                 Open dialog appears.
                          2      Navigate to the directory where the lynx.cmp file is saved.
                          3      Check the Open as read-only box at the bottom of the dialog.
                          4      Double-click the lynx.cmp file. The competition opens, but most of the
                                 LynxPad functions are inactive. You are able to load results and view the
                                 splits and field series, but you are not able to seed competitors. The title
                                 bar of the window indicates the competition is read-only.
                                                 Chapter 3 Creating a Competition     31




Modifying how a competition is
scored
              By default, LynxPad is set to score a competition 8 places deep, with first
              place earning 10 points and eighth place earning 1 point. Follow these steps
              to modify how a competition is scored.

              Tip: To set up cross country scoring, follow the steps to set up a cross
              country competition (see "Using LynxPad with cross country"). Following
              these steps automatically enables cross country scoring in LynxPad.

              1   Make sure you have a lynx.cmp file open.
              2   Click File | Options... from the Menu bar. The Options dialog appears.
              3   Click the Scoring tab.




              4   Modify Place Point Values by clicking a cell and typing a new value.
                  When finished, click Ok. LynxPad assigns points according to the new
                  place point values you entered.

              Note: To return to LynxPad's default Place Point Values, click the Default
              button.
32   LynxPad 3.30 User's Guide




Setting up alternative meet scoring
                          You can choose a maximum number of scoring athletes per team per event,
                          sometimes referred to as alternative meet scoring, or international scoring.
                          This method is particularly useful in making two-, three-, and four-way meets
                          closer by only allowing, for example, two athletes from any team to score in
                          any event. If that one team is strong in a certain event and takes the top five
                          places, it only scores the top two. The sixth place runner, who is from a
                          different team, gets the third place points.

                      ➢ Configuring LynxPad to use alternative meet scoring:
                          1      Make sure you have a lynx.cmp file open.
                          2      Click File | Options... from the Menu bar. The Options dialog appears.
                          3      Click the Scoring tab.
                          4      In the Maximum scores per team per event: text boxes, type a value for
                                 Individual and Relay events, if applicable.
                          5      Click Ok. Alternative meet scoring is enabled.


Disabling competition scoring
                          By default, LynxPad is set to score the competition (see "Modifying how a
                          competition is scored"). If you do not want LynxPad to score the
                          competition, follow these steps:
                          1      Make sure you have a lynx.cmp file open.
                          2      Click File | Options... from the Menu bar. The Options dialog appears.
                          3      Click to uncheck the Score Competition box, and then click Ok to return
                                 to the LynxPad main screen. Scoring is disabled.

                          Tip: You can also disable scoring at individual event levels (see "Disabling
                          event scoring").


How does LynxPad handle unattached athletes?
                          By default, LynxPad allows unattached athletes to displace scoring for
                          affiliated athletes, but does not assign a score to unattached athletes.

                      ➢ To set LynxPad to ignore unattached athletes:
                          1      Make sure you have a lynx.cmp file open.
                          2      Click File | Options... from the Menu bar. The Options dialog appears.
                          3      Click the Scoring tab.
                                                  Chapter 3 Creating a Competition      33



               4   Uncheck the Unattached athletes displace scoring box. Now, LynxPad
                   ignores unattached athletes all together when scoring the competition.
               5   Click Ok to return to the LynxPad main screen.



Setting up affiliations and
abbreviations
               You can set up your competition with affiliations and designate abbreviations
               to select later when adding athletes (see "Adding athletes and relays").
               1   Click Competition from the Menu bar and select Setup Affiliations.... The
                   Setup Affiliations dialog appears. By default, the Unattached selection is
                   available.




               2   Type a complete affiliation name in the Name text box.
               3   Type the maximum 4-character abbreviation for the affiliation in the
                   Abbrev text box. If a scoreboard is in use, the abbreviation you enter here
                   is how the abbreviated name appears on a scoreboard.
               4   Click the Add button. The affiliation is added to the LynxPad database,
                   and goes into a Lynx data file (see "What are Lynx data files?") called
                   lynx.afl.
               5   Repeat steps 2-4 to add more affiliations to the LynxPad database.
34   LynxPad 3.30 User's Guide


                          6      When finished, click Done to return to the main LynxPad screen. Later,
                                 you can select affiliations when adding athletes (see "Adding athletes
                                 and relays").



Single byte or unicode?
                          By default, LynxPad is set to use a single byte code set.

                          Use single byte with:
                          ▪      English
                          ▪      Western European languages, and
                          ▪      Some Eastern European languages.
                          Use unicode with:
                          ▪      Some Eastern European languages
                          ▪      Middle Eastern languages, and
                          ▪      Asian languages.
                      ➢ To change LynxPad to use unicode:
                          1      Click File | Options... from the Menu bar. The Options dialog appears.
                          2      Click the Database tab.
                          3      From the Code Set: selections, click Unicode and then click Ok.




Adjusting the time precision
                          By default, LynxPad is set to display the results time precision to
                          Hundredths.

                      ➢ To adjust the time precision:
                          1      Click File from the Menu bar and select Options.... The Options dialog
                                 appears.
                          2      Click the Results tab.
                          3      Click to select a new value (either Thousandths or Ten Thousandths)
                                 from the Default Precision: drop-down list.
                                    Chapter 3 Creating a Competition     35




➢ Tips:
  ▪   You can also select which time precision (see "Adjusting the time
      precision" on page 88) you want your reports printed in accordance with.
  ▪   You may avoid having to break ties (see "Breaking ties") by adjusting
      the time precision to Thousandths.
                                                                                                        37


CHAPTER 4

Entering Data
                The next phase after setting up your competition in LynxPad is entering the
                competition data, including athlete names and events. In this section, you will
                learn how to enter all of the data relevant to your competition in LynxPad.

                In This Chapter
                Data entry basics ................................................................ 37
                Adding events .................................................................... 37
                Adding athletes and relays ................................................. 45




Data entry basics

Sorting data
                You can sort data by clicking on the heading for a column of data or by
                clicking Events, Athletes, or Heats from the Menu bar and selecting Sort. A
                drop-down menu appears from which you can make a selection for sorting
                the data.




Adding events
                1    Activate the Events window by clicking its title bar.
38   LynxPad 3.30 User's Guide



                          2      Either click the     icon or click Events | Add Event from the Menu bar.
                                 The Add/Edit Event dialog appears.
                          3      LynxPad automatically assigns a new event number, however, you can
                                 type a different, unique value if you want.
                          4      Complete the remaining fields by typing or selecting the information
                                 from drop-down lists, including:
                                 ▪   Event Name
                                 ▪   Gender
                                 ▪   Event Type
                                 ▪   Distance [you can also enter a custom distance (see "Entering a
                                     custom distance")]
                                 ▪   Number of Rounds [if more than one, click Apply after entering a new
                                     number]
                                 ▪   Measurement System [if adding a field event], and
                                 ▪   Seeding criteria.
                          5      If you want, you can disable event scoring from this dialog by clicking to
                                 uncheck the Score This Event box.
                          6      Then, click the Add button. The Add/Edit Event dialog remains
                                 displayed, but the Event #: field is incremented by one. LynxPad is ready
                                 for you to continue adding events.
                          7      When you are finished adding events, click Done to return to the
                                 LynxPad main screen. The new events you entered appear in the Events
                                 window.

                          Note: Events displayed in the Events window are designated with an I for
                          individual or R for relay events.


Entering a custom distance
                          When adding information about an event, you can enter a custom distance,
                          for example, a 2000 meter race.
                          1      Start at the Add/Edit Event dialog. You can get there by adding an event
                                 (see "Adding events").
                          2      From the Distance: drop-down list, select Custom. The blank field
                                 immediately below becomes active.
                          3      Type the custom distance, for example, 2000, in the blank field.
                                                              Chapter 4 Entering Data     39




Track and field multi-events
                   LynxPad provides the ability to specify an event as Decathlon, Heptathlon,
                   Outdoor Pentathlon, Indoor Pentathlon and Weight Pentathlon.

                   From the Add/Edit event dialog, select the multi-event you wish to create:




                   A dialog will appear asking you to confirm changing the number of rounds.
                   Click ‘Yes’.
40   LynxPad 3.30 User's Guide



                          LynxPad will automatically fill in the correct number of rounds, round names
                          and round types for the multi-event selected.




Adding a non-track and field event
                          If you are using LynxPad for a non-track and field competition, follow the
                          steps below when adding events to the competition.

                          Tip: See also instructions on setting up a competition for cross country (see
                          "Using LynxPad with cross country") or water sports (see "Using LynxPad
                          with rowing, canoeing, or kayaking").

                          1      Activate the Events window by clicking its title bar or somewhere within
                                 the window.

                          2      Either click the     icon or click Events | Add Event from the Menu bar.
                                 The Add/Edit Event dialog appears.
                          3      From the Event Type: drop-down list, select Other, and then complete the
                                 remainder of information fields provided.
                                                               Chapter 4 Entering Data         41



                    Note: You can also enter a custom distance (see "Entering a custom
                    distance").




Deleting an event
                     Warning! There is no "undo" for this step! Once you delete an event, it is
                     removed permanently from your competition.

                    1   Click to highlight the event you want to delete from the Events window.

                    2   Either click    or click Events from the Menu bar and select Delete
                        Event....
                    3   Click Yes at the confirmation message. The event is removed from the
                        competition.


Editing an event
                    Modify an existing event by following these steps:
                    1   Click to highlight the event you want to edit from the Events window.

                    2   Either click    or click Events | Edit Event... from the Menu bar. The
                        Add/Edit Event dialog appears and you can modify the existing data.
                    3   When finished making changes to the event, click the Update button.

                    Tip: You can also double-click the event you want to edit to display the
                    Add/Edit Event dialog.


Setting up rounds
                    To set up multiple rounds for an event:
                    1   Double-click the event for which you want to set up rounds from the
                        Events window. The Add/Edit Event dialog appears for that event.
                    2   In the Number of Rounds: field, type the number of rounds for the event
                        and then click Apply.
                    3   Click Yes at the confirmation message. Subsequent rounds appear in the
                        data grid below.
                    4   If you are editing an existing event, make sure you click the Update
                        button after making changes to the rounds.
42   LynxPad 3.30 User's Guide



                          Note: The Date, and Time columns are fully editable. Click in a cell to change
                          the information. Also, you can change the default LynxPad round naming
                          (see "Changing round names").


                          Changing round names
                          Rounds by default are named:
                          ▪      Round 1 = Prelims
                          ▪      Round 2 = Heats
                          ▪      Round 3 = Quarters
                          ▪      Round 4 = Semis, and
                          ▪      Round 5 = Final
                      ➢ To modify default round names:
                          1      Click File | Options... and then select the Database tab. The Default Round
                                 Names table appears.




                          2      Click in a cell you want to modify.
                          3      Type a new round name.
                          4      Repeat these steps for all of the cells you want to modify.
                          5      When finished, click Ok. The round names you specified are now used by
                                 LynxPad when setting up an event.
                                                                Chapter 4 Entering Data       43



                ➢ To restore default round names:
                   Click the Reset button. The Default Round Names table is populated with
                   LynxPad's default round names.




                   Changing an event start time
                   1   Double-click the event from the Events window for which you want to
                       change the start time. The Add/Edit Event dialog appears.
                   2   Click in a cell in the Time column of the Rounds box and type a new
                       time, or select time digits from the drop-down list. Repeat this step for all
                       of the rounds in the event, if necessary.
                   3   When finished, click Update. The new times appear next to the round/s in
                       the Events window.




Changing the measurement system
                   By default, LynxPad is set to use the Metric system when scoring a field
                   event. To change LynxPad to use the English system:
                   1   Double-click an event from the Events window. The Add/Edit Event
                       dialog appears.
                   2   Make sure you have selected a field event from the Event Type: drop-
                       down list, so the Measurement System drop-down lists become active.
                   3   In the Measurement System box, select English from the Entries: and
                       Results: drop-down lists.
                   4   If you are editing an existing event, make sure you click the Update
                       button. The event is scored using the new measurement system you just
                       selected.




Setting up a mixed-gender event
                   LynxPad allows you to set up a mixed-gender event by selecting Mixed from
                   the Gender: drop-down list in the Add/Edit Event dialog (see "Adding
                   events"). Events designated as mixed appear with a B, for both, in the Events
                   window Gender column.
44   LynxPad 3.30 User's Guide




Disabling event scoring
                          You can disable event scoring for individual events.
                          1      Start at the Add/Edit Event dialog.
                          2      Click to uncheck the Score This Event box. Scoring for this event is
                                 disabled.




                          Tip: You can also disable scoring for the entire competition (see "Disabling
                          competition scoring").


Setting Wind Parameters
                          You can define the wind parameters for the current event, such that
                          FinishLynx will automatically import the settings when it loads the start list.
                          1      Start at the Add/Edit Event dialog.
                          2      Click to select the Mode from the drop-down menu in the Wind box.
                                                               Chapter 4 Entering Data       45



                   Tip: You can also select Custom or Manual mode and set the Start and
                   Duration parameters manually.


Setting LapTime Parameters
                   You can define the LapTime parameters for the current event, such that
                   FinishLynx will automatically import the settings when it loads the start list.
                   3   Start at the Add/Edit Event dialog.
                   4   Enter a value in the Total Laps field in the LapTime box.




                   Tip: You can also set the Laps Per Split, Too Fast/Slow Time.



Adding athletes and relays

Adding individual athletes
                   1   Activate the Athletes/Relays window by clicking its title bar or anywhere
                       within the window.

                   2   Either click      or click Athletes/Relays from the Menu bar and select
                       Add Athlete.... The Add/Edit Athlete dialog appears.
                   3   Now you can enter information about the athlete, including:
                       ▪   ID [automatically incremented by one; it is possible to add athletes
                           with no ID's, or to enter a new ID value]
                       ▪   First and Last Name
                       ▪   Affiliation [you can also enter new affiliations and abbreviations (see
                           "Setting up affiliations and abbreviations")]
                       ▪   License, and
                       ▪   Gender.
46   LynxPad 3.30 User's Guide



                          Note: If at this time if you have events set up, you can assign the athlete to
                          events by selecting them from the drop-down lists in the Event # rows. You
                          can also enter a value in the Seed Mark column.




                          Can I use duplicate athlete ID's?
                          LynxPad allows you to assign duplicate ID's to athletes, but by default it is
                          set to warn you first.

                      ➢ To change the duplicate ID warning:
                          1      Click File | Options... from the Menu bar. The Options dialog appears.
                          2      Click the Athlete tab.




                          3      Make a selection as described on the screen, and then click Ok. The
                                 duplicate ID warning changes to reflect the selection you just made.

                          Select ID numbering
                          You can use LynxPad's automatic numbering function to assign ID's to the
                          athletes in your competition.
                          1      With a lynx.cmp file open, click to activate the Athletes window.
                          2      Click Athletes from the Menu bar and then click Select ID Numbering....
                                 The Athlete ID Numbering dialog appears.
                                                              Chapter 4 Entering Data       47


                  3   You can choose to number ID's by Gender, and then Alphabetically by
                      Athlete, or Alphabetically by Affiliation. You can also enter the ID number
                      where you want the automatic numbering to start. By default, automatic
                      numbering starts at 1.
                  4   When finished making your selections, click Ok.
                  5   Click Yes when asked if you are sure you want to renumber the athlete
                      ID's. The athlete ID's are renumbered according to your selections.
                  6   Click Ok to exit the confirmation dialog.


Adding a relay team
                  To add a relay team to a competition in LynxPad:

                  1   Either click    from the Athletes/Relays window Menu bar or click
                      Athletes/Relays from the main Menu bar and select Add Relay... from the
                      drop-down menu. The Add/Edit Relay dialog appears.




                  2   (Optional) An ID number is automatically assigned. Type a new number
                      if you want to change it.
                  3   Select an Affiliation from the drop-down list.
                  4   (Optional) Type a Designation (for teams A, B, C, etc.) and License in the
                      respective text fields.
                  5   Click to select a Gender from the drop-down list.
                  6   Click to select an event from the Event Name drop-down list.
                  7   (Optional) Type a seed value in the Seed Time column.
                  8   When you are finished adding the relay team to events, either click the
                      Add button to add another relay team, or click Done to return to the main
                      LynxPad screen.
48   LynxPad 3.30 User's Guide



                          Note: Currently, LynxPad does not support adding individual names to a
                          relay team.


Relay team members
                          LynxPad's allows the entry of individual relay members to a relay team.
                          Simply select the drop-down Relay Members section of the Add/Edit Relay
                          dialog and select the athlete to add for each leg of the relay.

                          The number of relay members for each event is specified on the Add/Edit
                          Event dialog.

                          Individual relay members can be imported and exported to/from LynxPad via
                          the “Delimited Entries” menu item in the File->Import and File->Export
                          menus.

                          Note: For the athlete to be added to the relay they must be assigned to
                          the proper Affiliation. The athlete does not need to be assigned to a
                          relay to appear in the Relay Members List.


Deleting an athlete or relay
                            Warning! There is no "undo" for this step! Once you delete an athlete or
                            relay, the athlete or relay is permanently removed from your competition.

                          Note: If the athlete or relay is already seeded in an event, you must first
                          unseed the athlete and then unassign the athlete or relay from the event.
                          1      Click to highlight the athlete or relay you want to delete.
                          2      Either click Athletes/Relays from the Menu bar and select Delete
                                 Athlete/Relay or click    .
                          3      Click Yes at the confirmation message. The athlete or relay is removed
                                 from the competition.


Sorting athletes or relays
                          You can sort athletes or relays alphabetically or sequentially by First Name,
                          Last Name, etc., by clicking on the first cell in a column. Clicking once
                          arranges the athletes or relays either in ascending or descending order;
                          clicking a second time reverses the order.

                          You can also click Athletes/Relays | Sort from the Menu bar and select a
                          criteria by which to sort.
                                                                                                       49


CHAPTER 5

Assigning and Seeding Athletes
               After you have entered events and athletes to your competition, you can then
               assign and seed athletes into events. In this section, you will learn how to
               enter seed marks for athletes, and how to assign them and seed them into
               specific events.

               In This Chapter
               Assigning athletes to events ............................................... 49
               Seeding athletes.................................................................. 53




Assigning athletes to events
               There are two ways to assign an athlete to an event.

            ➢ From the Add/Edit Athlete dialog:
               1    Double-click an athlete from the Athletes/Relays window. The Add/Edit
                    Athlete dialog appears.
               2    From the Event #1 | Event Name drop-down list, select the event to which
                    you want to assign the athlete. You can repeat this step for Event # 2 - 4.
                    Note: You can also add an athlete to more than four events (see "How do
                    I enter an athlete in more than four events?").




               3    Click Update. The athlete is assigned to the event(s) you just selected.

            ➢ From the Events window:
               1    Click to select an event from the Events window.
50   LynxPad 3.30 User's Guide


                          2      Click to select an athlete from the Athletes/Relays window.

                          3      Either click      or click Athletes/Relays from the Menu bar and select
                                 Assign to Selected Event. The event appears in the first available Event #
                                 column next to the athlete's name in the Athletes/Relays window.




Adding multiple athletes to an event
                          You can select multiple athletes at once and add them all to a single event.
                          1      Click to select an event you want to add multiple athletes to.
                          2      Hold down the CTRL key while left-clicking the mouse to select all of the
                                 competitors you want to assign to an event.
                                 Tip: To select a number of consecutive athletes, click to select the first
                                 name in the list. Then, hold down the SHIFT key while clicking the last
                                 name. All athletes are selected.

                          3      When all athletes you want added are selected, either click     or click
                                 Athletes/Relays | Assign to Selected Event from the Menu bar. When you
                                 seed the heat, you will see all of the athletes you just added.

                          Tip: To select all athletes in the Athletes window, click on any athlete name
                          and then click CTRL - A.


Entering seed times or seed marks
                          After you have assigned athletes to an event (see "Assigning athletes to
                          events"), you can enter seed times or seed marks before seeding them into
                          heats or flights.

                          There are two ways to enter seed times or seed marks; from the Heats
                          window, or from the Add/Edit Athlete dialog.

                      ➢ Entering seed times or seed marks from the Heats window:
                          1      Click to highlight the event in the Events window for which you want to
                                 enter seed marks.
                              Chapter 5 Assigning and Seeding Athletes       51



   2   Click on the Heats window title bar to make it active.
   3   From the drop-down list under the Heats title bar, select Seed Marks.




   4   Click in the cell under the Time or Mark column, and then type a seed
       time or seed mark for each athlete. Seed times and marks are stored as
       you enter them.

       Note: If you are entering field event marks using the English
       measurement system (see "Changing the measurement system"), you can
       use either an apostrophe ['] or a dash [-] for the feet marker. For example,
       you can type either:
       ▪   53'8 or
       ▪   53-8.
   5   After entering the seed mark, press Enter to sort the seeded athlete list by
       performance.
       Note: If you want to enter all seed marks before sorting the list, single-
       click in the Time or Mark column, and then type the seed time or mark for
       the next athlete. Use the arrow keys to navigate up or down the list of
       seed marks. Once you are done entering all seed times or marks, press
       Enter to sort the list by performance.

   Tip: Athletes are seeded according to the criteria you select when you change
   the lane or position assignment (see "Changing lane or position assignment
   criteria").

➢ Entering seed times or seed marks from the Add/Edit Athlete dialog:
   1   Double-click on an athlete's name for whom you want to enter a seed
       time or mark.
   2   Select an event from the drop-down list in the Event Name column.
   3   Click in a cell in the Seed Mark column next to the event you just selected
       and type the athlete's mark or time.
   4   When finished, click Update. The athlete's seed mark or seed time is
       saved, and used to seed the athlete into the event.
52   LynxPad 3.30 User's Guide




Season Best and Lifetime Best Performances)
                          LynxPad offers the ability to hand-enter, import, export, save and print
                          Season Best and Lifetime Best performances for each athlete.

                          To hand-enter Season and Lifetime best performances; simply type them in
                          when an athlete is assigned to an event in the Add Athlete dialog

                          The ability to import and export these fields is described in the section
                          “Error! Reference source not found.”


How do I enter an athlete in more than four events?
                          When an athlete competes in more than four events, you must create another
                          athlete using the Add/Edit Athlete dialog. Then, enter the same information
                          as the original athlete (including the ID). Finally, select more events for the
                          duplicate athlete you just created.




Unassigning athletes from an event
                          There are two ways to unassign an athlete from an event.

                      ➢ From the Add/Edit Athlete window:
                          1      Double-click the athlete you want to unassign from an event. The
                                 Add/Edit Athlete dialog appears.
                          2      From the Event #1 | Event Name drop-down list, select <No Event>. The
                                 athlete is unassigned from the event.

                      ➢ From the Events window:
                          1      Click to select an event from the Events window.
                          2      Click to select an athlete from the Athletes window.

                          3      Either click     or click Athletes/Relays from the Menu bar and select
                                 Unassign from Selected Event. The event disappears from the Event #
                                 column next to the athlete's name in the Athletes/Relays window.

                          Note: You cannot unassign athletes from events in which they are already
                          seeded. You must first unseed the athletes.
                                               Chapter 5 Assigning and Seeding Athletes      53




Seeding athletes

Modifying seeding criteria
                   LynxPad seeds athletes for each event according to default seeding criteria,
                   which you can modify to suit the needs of your competition.

                   Changing the number of lanes or positions
                   By default, the number of lanes or positions is set to 8.

                ➢ To change the number of lanes or positions:
                   1   Double-click the event from the Events window for which you want to
                       change the number of lanes. The Add/Edit Event dialog appears.
                   2   Click in the Number of Lanes: or Number of Positions: text field and type
                       the new number.
                   3   If you are editing an existing event, click Update. The number of lanes
                       for the event is changed.

                   Note: If there are seeded athletes in this event, the number of lanes will not
                   be changed until you unseed the athletes, update the event, and then reseed
                   the event.


                   Changing lane or position assignment criteria
                   1   Double-click the event from the Events window for which you want to
                       change the lane or position assignment criteria. The Add/Edit Event dialog
                       appears.
                   2   From the Lane/Position Assignment: drop-down list, select the
                       appropriate assignment criteria.
                   3   If you are editing an existing event, click Update. When seeded, athletes
                       are assigned to lanes or positions according to the criteria you selected.

                   Tip: It is possible to change the lane preferences (see "Changing lane
                   preferences") for the Standard and Waterfall Positions criteria.
54   LynxPad 3.30 User's Guide



                          Changing lane preferences
                          You can change the lane preferences in the Standard and Waterfall Positions
                          criteria.
                          1      With a lynx.cmp file open, click File | Options.... The Options dialog
                                 appears.
                          2      Click the Seeding tab.
                          3      Depending on which preference you want to change, click either the
                                 Standard Lanes... or Waterfall Positions... button. A Lane Preferences
                                 dialog appears.




                          4      To change a lane preference, click in a cell and type a new number.
                                 When finished, click Ok. The lane preferences reflect the changes you
                                 just made

                          Note: Click the Reset button to return lane preferences to their default
                          settings.


                          Changing the heat or flight assignment criteria
                          You can modify the way athletes are assigned to heats or flights.
                          1      Double-click the event from the Events window for which you want to
                                 change the heat or flight assignment criteria. The Add/Edit Event dialog
                                 appears.
                          2      Select a new assignment criteria from the Heat/Flight Assignment: drop-
                                 down list.
                                              Chapter 5 Assigning and Seeding Athletes        55



                   3   If you are editing an existing event, click Update. The athletes will be
                       assigned to heats and flights according to the new criteria you selected.

                   Changing the heat or flight order
                   You can change the order in which heats or flights are contested.
                   1   Double-click the event from the Events window for which you want to
                       change the heat or flight order. The Add/Edit Event dialog appears.
                   2   Select the new heat or flight order designation from the Heat/Flight Order:
                       drop-down list.
                   3   If you are editing an existing event, click Update. Heats or flights are
                       ordered according the order you just selected.



                   Selecting how athletes advance
                   LynxPad allows you to select whether athletes in timed events advance to
                   subsequent rounds based either on Time or on Time & Place.
                   1   Double-click the event from the Events window for which you want to
                       change the advancement. The Add/Edit Event dialog appears.
                   2   Select the new advancement criteria from the Advancement: drop-down
                       list.
                   3   If you are editing an existing event, click Update. Athletes advance to
                       subsequent rounds in the competition based on the advancement criteria
                       you just selected.

                   Note: If you select the Place & Time advancement criteria, you will be able to
                   select an advancement formula suggested by LynxPad later when you seed
                   the event (see "Seeding athletes according to seeding criteria").


Seeding athletes according to seeding criteria
                   After you have assigned athletes to the event and modified the seeding
                   criteria (see "Modifying seeding criteria"), seed athletes by following these
                   steps.

                   Note: You can also seed athletes manually (see "Seeding athletes manually")
                   and you can seed multiple events at once (see "Seeding multiple events at
                   once").

                   1   Click to select the event and round you want to seed from the Events
                       window.
56   LynxPad 3.30 User's Guide


                          2      Click the Heats window title bar to activate it.

                          3      Either click     from the Heats window or click Heats/Flights | Seed
                                 from the Menu bar. The Seed - [Event Name] dialog appears.
                          4      Click Seed. If the event has multiple rounds, the Advancement Selection
                                 dialog appears.




                          5      In the Number of Heats next round field, type the number of heats or
                                 flights you want athletes advanced into for the next round.
                          6      Click Apply. LynxPad automatically calculates the number of athletes to
                                 advance.
                          7      If you selected Place & Time when specifying the advancement criteria,
                                 LynxPad suggests several advancement formulas for you to select. Click
                                 to select one from the list.
                          8      Click Ok to exit the dialog. The athletes are seeded into the heats
                                 according to the criteria you specified earlier.
                          9      Click Ok again. Click Yes when asked if you want to update the start
                                 lists.


Seeding athletes manually
                          After you have assigned athletes to the event, you can seed them manually by
                          following these steps:
                          1      Click to select the event and round you want to seed from the Events
                                 window.

                          2      Either click     from the Heats window or click Heats/Flights | Seed
                                 from the Menu bar. The Seed - [Event Name] dialog appears.
                           Chapter 5 Assigning and Seeding Athletes        57



3   Next to the Heat [#] in the Seeded: box, click the + to display the lanes.
4   Click to select a lane you want to seed an athlete into.
5   Click to select an athlete from the Unseeded: list of athletes.

6   Click               . The athlete moves into the lane you selected. Repeat
    these steps to manually seed all of the athletes. Clicking
    moves the athlete out of the heat into the Unseeded: box.
7   When finished, click OK. If the event has more than one round, the
    Advancement Selection dialog appears.
8   In the Number of Heats next round field, type the number of heats or
    flights you want athletes advanced into for the next round.
9   Click Apply. LynxPad automatically calculates the number of athletes to
    advance.
10 Click Ok to exit the dialog. The athletes are seeded into the heats
   according to the criteria you specified earlier.
11 When finished, click Ok to exit the dialog.
58   LynxPad 3.30 User's Guide




Seeding multiple events at once
                          You can seed more than one event at once by following these steps:
                          1      Click somewhere in the Events window to activate it.
                          2      Either click        or click Events from the Menu bar and select Seed
                                 selected list.... The Select rounds to seed dialog appears.




                          3      Click to check the box next to each event you want to seed.
                                 ▪   To select all of the events listed in the dialog, click the Select All box.
                                 ▪   Clear any checkboxes by clicking the Clear All box.
                          4      After you have selected the events you want to seed, click Ok. The Seed -
                                 [Event Name] dialog appears for the first event.
                          5      After making any modifications to the Seed dialog for this event, click
                                 Ok. A new Seed - [Event Name] dialog appears for the next event you
                                 selected to seed.
                          6      Make any modifications, and then click Ok again, and repeat this step.
                                 When finished, click Yes when asked to update the start lists.
                                                  Chapter 5 Assigning and Seeding Athletes   59




Unseeding athletes
                     To unseed athletes who are seeded into an event:
                     1   Click to select the event you want to unseed from the Events window.
                     2   Click the Heats title bar to activate it.

                     3   Either click     or click Heats/Flights | Seed from the Menu bar. The
                         Seed - [Event Name] dialog appears.
                     4   Click the Unseed All button and then click Ok to exit the dialog. The
                         athletes are unseeded from the event.


Changing the number of heats or flights
                     Depending on the number of athletes you have assigned and the number of
                     lanes or positions you have specified for the round, LynxPad automatically
                     calculates the number of heats or flights. Follow these steps to modify the
                     number of heats or flights in the round.
                     1   Click to select the event and round you want to modify from the Events
                         window.

                     2   Either click     from the Heats window or click Heats/Flights | Seed
                         from the Menu bar. The Seed - [Event Name] dialog appears.
                     3   In the Number of heats field toward the bottom of the dialog, type a new
                         number of heats or flights and then click Apply. The heats or flights are
                         changed to reflect the number you just entered.

                     Adding a heat
                     You can add a heat from the Seed dialog after seeding athletes into heats.
                     With the Seed dialog open, click the Add Heat button. A new heat is added to
                     the list of heats in the Seeded: box.


Selecting the advancement criteria
                     LynxPad allows you to select the criteria upon which athletes advance to
                     subsequent rounds after athletes have been seeded into an event.
                     1   Click to select the event you want to modify from the Events window.
                     2   Click Events from the Menu bar and select Advancement Criteria.... The
                         Advancement Selection dialog appears.
                     3   Click to select the advancement criteria you want applied to the event.
60   LynxPad 3.30 User's Guide


                          4      Click Ok. Athletes advance to the next round according to the criteria you
                                 just selected.


Randomizing lane assignment
                          By default, LynxPad is set for no randomization of lanes. To randomize the
                          lanes to which athletes are assigned:
                          1      Click to highlight the event you wish to modify from the Events window.

                          2      Click      . The Seed dialog appears.
                          3      In the lower left corner of the dialog, there is a Randomization of Lanes
                                 box. Either select Randomize All Lanes or Randomize Half and Half to
                                 modify the lane randomization.

                      ➢ Using the Randomize Half and Half selection:
                          If the athletes in an event are seeded according to a serpentine seeding
                          criteria with standard lanes, you can select the Randomize Half and Half
                          option. Randomize Half and Half means that the first half of the preferred
                          lanes are seeded as a group. Next, the second group of lanes, those which are
                          least preferred, are seeded as a group.

                          For example, say the lane preferences for the 100 meter dash are in the best
                          to worst order of: 4,5,3,6,2,7,1, and 8. If you choose Randomize Half and
                          Half, LynxPad randomizes the best seed times into lanes 4, 5, 3 and 6. Then,
                          LynxPad randomizes the remaining seed times into lanes 2,7,1 and 8.
                                                                                                       61


CHAPTER 6

Administering Results
             After you have set up your competition, added events and athletes to it, and
             assigned and seeded athletes into events, you are ready to import results so
             you can print results and score the competition. In this section, you will learn
             how to import results or enter them manually, break ties, and how to perform
             all steps related to scoring the competition.

             In This Chapter
             Using LynxPad with FinishLynx ....................................... 61
             Breaking ties ...................................................................... 67
             Using LynxPad with FieldLynx ......................................... 68
             Sending data to a scoreboard.............................................. 70
             Disabling loading results on program start ........................ 75
             Entering results manually................................................... 76
             Clearing results .................................................................. 77
             Viewing a wind reading ..................................................... 77
             Purging data ....................................................................... 78




Using LynxPad with FinishLynx
             FinishLynx® is a digital race management system. This section explains how
             to configure LynxPad to send start lists to FinishLynx and to import results
             from FinishLynx.

             Note: For instructions on configuring and operating FinishLynx, please
             consult the documentation that comes with your FinishLynx system, or refer
             to the Lynx website (http://www.finishlynx.com/) for help.
62   LynxPad 3.30 User's Guide




How does LynxPad make a start list available to FinishLynx?
                          Configuring LynxPad to save the lynx.cmp file into the the competition
                          directory shared by FinishLynx makes the start list available to FinishLynx
                          after you save the lynx.cmp file.

                      ➢ To configure the LynxPad directory:
                          1      If you have not done so already, create a competition directory
                                 someplace on the LynxPad computer or on the competition LAN where
                                 you can store the LynxPad and FinishLynx files.
                          2      Make sure you have a lynx.cmp file open in LynxPad. Do this by creating
                                 a new competition (see "Creating a new competition") or opening an
                                 existing competition (see "Opening an existing competition").
                          3      Click File | Options... from the Menu bar. An Options dialog appears.
                          4      Click the Browse... button and navigate to the directory you created.




                          5      When finished, click Ok. When you load an event in FinishLynx, it looks
                                 for and displays the start list created with LynxPad.


Importing results from FinishLynx
                          You can import results, or LIF files, saved by FinishLynx to the directory
                          shared with LynxPad. You can import results for a single round or you can
                          import all available results for the entire competition.

                      ➢ To import results for a single round:
                          1      Click to highlight the event from the Events window.
                          2      Click the Heats window title bar to activate it.

                          3      Either click     or click Heats/Flights from the Menu bar and select Load
                                 Results. The results for the event you selected appear in the Heats
                                 window.
                                                            Chapter 6 Administering Results        63




                    ➢ To import all available results:
                       Click Competition from the Menu bar and select Refresh All Results. All
                       available LIF files are imported and the results are displayed in the Heats
                       window.

                       Note: Competition | Refresh All Results also imports the FieldLynx LFF and
                       ReacTime RIF files, if available.

                       Tip: LynxPad is configured to load existing results when the program starts.
                       You can disable this feature (see "Disabling loading results on program
                       start") if you want.


Displaying splits
                       If there are splits in the FinishLynx LIF file from a LapTime Plug-in, then
                       LynxPad imports the splits automatically when you import the results.

                    ➢ To display splits after results have been imported:
                       1   Activate the Heats window for the event by clicking its title bar.
                       2   Either click Heats/Flights and select Splits from the Menu bar or click
                           . The splits for the heat you selected appear in a Splits dialog.




"Match athletes by Lane when ID's are missing"
                       By default, LynxPad is set to match the start list with the result if your athlete
                       data is missing ID's. This is helpful with relays and sports such as rowing
                       which may not use ID's.

                    ➢ To disable this feature:
                       1   Click File from the Menu bar and select Options.... The Options dialog
                           appears.
                       2   Click the Results tab.
                       3   Click to uncheck the Match athletes by Lane when ID's are missing box.
64   LynxPad 3.30 User's Guide


                          4      Click Ok. The feature is disabled.


Entering a wind reading for a track event
                          1      Click to select an event from the Events window.
                          2      Click the Heats window to activate it.
                          3      If necessary, select the heat for which you want to enter a reading from
                                 the drop-down list.
                          4      Click Heats/Flights from the Menu bar and select Wind Reading.... The
                                 Wind Reading dialog appears.




                          5      Type the wind reading in the field provided, and then click Ok.
                                 Note: The wind reading is displayed in meters per second.
                          6      The wind reading you just typed appears in the title bar of the Heats
                                 window.
                                                     Chapter 6 Administering Results     65




Using the User3 Custom Field
                  LynxPad allows the integration of the FinishLynx User3 field with LynxPad.
                  The user can use this field to allow filtering of data in FinishLynx.

                  One example would be for rudimentary age group filtering.

                  For example, to add age groups in the User3 field, in the Add/Edit Athlete
                  Dialog, Click “New” by the “FinishLynx User3 Field” dropdown:




                      1. Create the fields listed below:




                                                                         :
66   LynxPad 3.30 User's Guide



                                 2. Click OK when done.

                                 3. Using the LynxPad Sample competition, set the User3 field for two
                                    athletes in the “Men 1500 Meter Run” to “29 and Under” and two
                                    different athletes in the same vent to “30-39”.

                                 4. Save the Competition.

                                 5. Start FinishLynx and ensure the Database Input and Output
                                    directories are set to the LynxPad Sample Data (File->Options-
                                    >Database tab).

                                 6. Load the “Men 1500 Meter Run” from the schedule.

                                 7. Ensure the User3 field is visible in the results pane. If not, it can be
                                    set to display by enabling the User3 field in Results->Options. Click
                                    OK once the field is enabled.

                                 8. Click the menu item Results->Apply Default fields and the User3
                                    field should display. The changes made to the User3 field of the four
                                    athletes in LynxPad should show in the Results pane of FinishLynx.

                                 9. Create a Result Filter in FinishLynx to only show the User3 fields
                                    you have set up:

                                         a. In the menu item Results->Filters, create two New Filters
                                            and set the Upper Bound and Lower Bound of the first one to
                                            “29 and Under”, and the Upper and Lower Bound of the
                                            second one to “30-39”. Be sure to name each filter uniquely.
                                            Click OK.

                                 10. Verify the Results Filters:

                                         a. Right-clicking on the User3 field of the Results pane will
                                            show the two filters created in the previous step, followed by
                                            the default filter (“untitled”), and they should all be checked
                                            (enabled).

                                         b. Checking or un-checking each of the filters will determine if
                                            the information controlled by that filter will be displayed in
                                            the results.
                                                   Chapter 6 Administering Results        67




Breaking ties
                LynxPad automatically checks for ties in your competition when it imports
                results and when it prints results. LynxPad then allows you to manually break
                any ties that occur.

            ➢ Finding and breaking ties:
                1   Click to select the event for which you want to find and break ties from
                    the Events window.Click somewhere on the Heats window to activate it.
                    Then, either click     or click Heats/Flights from the Menu bar and
                    select Break Ties.
                2   LynxPad displays a message if there are no ties to break. Otherwise, all
                    ties within the round are displayed in the Break Ties dialog.
68   LynxPad 3.30 User's Guide


                          3      Break the tie by clicking in the Place column and entering a new place
                                 value. When finished, click Ok. New place values as the result of broken
                                 ties are displayed in red in the Heats window.




                          Tip: Adjusting LynxPad's time precision (see "Adjusting the time precision")
                          may help you avoid having to break ties in the future.



Using LynxPad with FieldLynx
                          FieldLynx™ is a Lynx Palm™ or Windows© CE handheld device
                          application that allows you to administer field events at a track and field
                          meet. This section explains how to configure LynxPad to send flight sheets to
                          FieldLynx and to import results from FieldLynx.

                          Note: For more information on using FieldLynx and NetExchange Server,
                          please consult the documentation that comes with these products or visit the
                          Lynx website (http://www.finishlynx.com/) for help.


How does LynxPad make a flight sheet available for FieldLynx?
                          Configuring LynxPad to save the lynx.cmp file into the the competition
                          directory shared by NetExchange Server makes the flight sheet available to
                          FieldLynx after you save the lynx.cmp file.

                      ➢ To configure the LynxPad directory:
                          1      If you have not done so already, create a directory someplace where you
                                 can store the LynxPad and FieldLynx files.
                                                         Chapter 6 Administering Results         69



                    2    Make sure you have a lynx.cmp file open in LynxPad. Follow the
                         instructions to create a new competition (see "Creating a new
                         competition") or open an existing competition (see "Opening an existing
                         competition").
                    3    Click File | Options... from the Menu bar. A dialog appears.
                    4    Click the Browse... button and navigate to the directory you created.




                    5    When finished, click Ok. When you load an event in FieldLynx, it
                         displays the flight sheet created with LynxPad.


Importing results from FieldLynx
                    You can import results, or LFF files, saved by FieldLynx to the directory
                    shared with LynxPad. You can import results for a single round or you can
                    import all available results for the entire competition.

                 ➢ To import results for a single round:
                    1    Click to highlight the event from the Events window.
                    2    Click the Heats window title bar to activate it.

                    3    Either click     or click Heats/Flights from the Menu bar and select Load
                         Results. The results for the event you selected appear in the Heats
                         window.

                 ➢ To import all available results:
                    Click Competition from the Menu bar and select Refresh All Results. All
                    available LFF files are imported and the results are displayed in the Heats
                    window.

                    Note: Competition | Refresh All Results also imports the FinishLynx LIF files
                    and ReacTime RIF files, if available.

                 ➢ Other features available:
                    You can also view a wind reading (see "Viewing a wind reading") taken
                    from FieldLynx.


Viewing a field series
                    After you have imported field event results, you can view the field series.
                    1    Click to highlight the field event from the Events window.
70   LynxPad 3.30 User's Guide


                          2      Click the Heats window title bar to activate it.
                          3      Either click Heats/Flights from the Menu bar and select Field Series or
                                 click    . The Field Series dialog displays, showing the history of the
                                 event.

                          Note: You can view the field series for a specific flight by selecting that
                          flight from the drop-down list in the Heats window.




Sending data to a scoreboard
                          LynxPad can send information to practically any commercially available
                          scoreboard. If you want to send information to a scoreboard that is not
                          currently supported, please contact our technical support staff (see
                          "Contacting Lynx System Developers, Inc.").

                          LynxPad can be configured to send the following information to a scoreboard
                          display:
                          ▪      start lists
                          ▪      information about competitors involved in the event in progress
                          ▪      results from a previous event, or
                          ▪      team scores (as long as your scoreboard supports this).

                          Note: You can also send Results and Team Scores simultaneously for display
                          on two separate scoreboards.
                                                     Chapter 6 Administering Results        71




Connecting LynxPad to a scoreboard
                  There are many ways to connect LynxPad to a scoreboard, including:
                  ▪   directly to the LynxPad through the computer's COM port (note: if your
                      computer does not have a spare COM port, you can either purchase a
                      button splitter from Lynx or contact Lynx to explore other options)
                  ▪   through the C-Box using the DB9 serial port
                  ▪   over a TCP/IP network, or
                  ▪   through UDP communication.
                  If you need help with connecting LynxPad to a scoreboard, contact Lynx
                  System Developers, Inc (see "Contacting Lynx System Developers, Inc.").


Configuring LynxPad for scoreboard use
                  Step 1: Activate the Scoreboard | Options dialog
                  1   Click Scoreboard from the Menu bar and select Options.... The Options
                      dialog appears.
                  2   Click New. The functions on the Options dialog activate.

                  Step 2: Find your scoreboard in the Scoreboard Settings table
                  Refer to the Scoreboard Settings table below. Locate the scoreboard that
                  LynxPad will send data to and then note the corresponding script and data
                  settings.

                  Note: A "Yes" in the Team Scores Display column means Lynx has tested the
                  corresponding scoreboard and confirmed that it will display Team Scores.
                  "Untested" means that we have not been able to confirm if it will or will not
                  display Team Scores. If you conduct your own testing, Lynx
                  (mailto:support@finishlynx.com) would appreciate hearing your results.


                  MANUFACTURER        MODEL         SCRIPT          SETTING            TEAM SCORE

                                                                                       DISPLAY
                  Alge                GAZc          Alge.lss        2400,8,N,1         Untested
                  Daktronics          V6400/                        9600,8,N,1         Untested
                                      6000
                                      Omnisport     Dak.lss         9600,7,E,2         Untested
                                      Allsport      Allsport.lss    12800,8,N,2        Yes
                  Chronomix           CC2000        Chrono.lss      9600,8,N,1         No
72   LynxPad 3.30 User's Guide


                           Colorado Time          CT4009        Colorado.lss       9600,8,E,1      Untested
                           Fairtron               n/a           Fairtron.lss       9600,8,N,1      Untested
                           Electro Numerics       RaceClocks    Electro.lss        9600,8,N,1      Untested
                                                                Electro-flip.lss   1200,8,E,1      Untested
                                                                Electro-led.lss    9600,8,N,1      Untested
                                                                Electro2.lss       9600,8,Mark,2   Untested
                           IDS                    ECMX                             9600,8,N,1      Untested
                           Lynx                   LynxTV        Lynxtv.lss         9600,8,N,1      Untested
                                                  ResulTV       Resultv220.lss     9600,8,N,1      Yes
                           Microgate              Mtab16        Microtab 16-       1200,8,N,1      Yes
                                                                9.lss
                                                  Mtab16        Microtab 16-       1200,8,N,1      Yes
                                                                18.lss
                                                  µGraph        uGraph.lss         9600,8,N,1      Yes
                           Nevco                                Nevco1.lss         38400,8,N,1     Untested
                                                                Nevco2.lss         38400,8,N,1     Untested
                                                                Nevco123.lss       57600,8,N,1     Untested
                                                                Nevco860.lss       57600,8,N,1     Untested
                           Omega                  UNT4          Omega-9.lss        9600,7,E,1      Untested
                           Seiko                  RT-100        RT-100.lss         9600,8,N,1      Untested
                                                  ST206/        ST206.lss          9600,7,E,2      Untested
                                                  ST306
                                                  Lynx                             9600,8,N,1      Untested
                                                  Display
                                                  Board
                           Spectrum                             Spectrum.lss       9600,8,N,1      Untested
                           Westerstrand           Sportstimer   Westerst.lss       1200,8,N,2      Untested




                          Step 3: Configure LynxPad with your scoreboard settings
                          1      From the Script: drop-down list, select the script that corresponds with
                                 your scoreboard.
                          2      (Optional) Type a name for the scoreboard in the Name: field, for
                                 example, "Finish Line Results."
                          3      (Optional) If necessary, change the Code Set: to Unicode by selecting the
                                 radio button.
                          4      Make the following selections:
                                     Chapter 6 Administering Results     73



    ▪   Either Serial Port:, Baud, Data Bits, Parity, and Stop Bits if you are
        connecting LynxPad directly to the scoreboard. Select values you
        found in the Scoreboard Settings (see "Step 2: Find your scoreboard
        in the Scoreboard Settings table") table, or




    ▪   Select Network Connect: and type the appropriate Port and IP Address
        values in the text boxes.




Step 4: Configure scoreboard data display
These instructions explain how to configure LynxPad to display:
▪   event results
▪   start lists, or
▪   start lists and results on a scoreboard.
1   With the Scoreboard | Options dialog open, click the Manual radio button.
    This means that results are sent only to the scoreboard when you select
    Scoreboard | Display current event or Scoreboard | Display Team Scores
    from the Menu bar.
2   With the Paging box checked, type a value in the Size text field that
    corresponds with the number of lines on your scoreboard. For example,
    if you have a single line scoreboard, you would type "1."
74   LynxPad 3.30 User's Guide


                          3      To specify the maximum number of results you want the scoreboard to
                                 page through, type a value in the Max text field. If this field is left blank,
                                 the scoreboard will page through all of the results.
                          4      In the Time text field, type the number of seconds you want each page of
                                 data to remain visible on the scoreboard before it scrolls to the next page
                                 of data.
                          5      By default, LynxPad sends only the competitor's last name to the
                                 scoreboard. Click to check the Include first name box to send the
                                 competitor's first and last name to the scoreboard.
                          6      If you want to send the competitor's affiliation abbreviation to the
                                 scoreboard, click to check the Affiliation abbreviation box. Affiliation
                                 abbreviations (see "4. Set up an athlete affiliation") are based on what
                                 you enter in LynxPad.
                                                  Chapter 6 Administering Results        75




Disabling loading results on program
start
               LynxPad is set by default to automatically look for and load any results (LIF,
               LFF, HIF, and RIF files) for the competition whenever the program is started.

            ➢ To change the default setting:
               1   Click File | Options... from the Menu bar. The Options dialog appears.
               2   At the bottom of the dialog, uncheck the box labeled, Load Existing
                   Results on Program Start.




               3   Click Ok. The next time you run LynxPad, it does not automatically load
                   results.
76   LynxPad 3.30 User's Guide




Entering results manually
                          If you are not importing results from FinishLynx or FieldLynx, you can enter
                          them manually by typing them into the Time or Mark column in the Heats
                          window. Manually entered results are displayed in red text in the LynxPad
                          Heats window, and are saved to a HIF file in a HandEntered folder in the
                          competition directory.

                          Note: After entering the result, press Enter to sort the list in order of
                          performance. If you want to enter all results before sorting the list, single-
                          click in the Time or Mark column, and then type the result for the next athlete.
                          Use the arrow keys to navigate up or down the list of athletes. Once you are
                          done entering all results, press Enter to sort the list by performance.

                      ➢ Adding a status designator to a result:
                          You can manually assign a status designator (valid, did not start, scratch, did
                          not finish, disqualified, advanced, and false start) to an athlete's result.
                          1      From the Heats window, click to highlight the athlete's row to which you
                                 want to assign a status designator.
                          2      Either click Heats/Flights from the Menu bar and select Status or click
                                 the Place column cell. A drop-down list appears containing the status
                                 designators available.




                          3      Click to select a status designator from the drop-down list. The
                                 abbreviated status designator appears in red text in the Place column in
                                 the athlete's row.
                                                    Chapter 6 Administering Results       77




Clearing results
               You can clear imported results from a single heat or round.
               1   In the Events window, click to highlight the event for which you want to
                   clear results. The imported results for that event appear in the Heats
                   window.
               2   Select the heat from the Heats window drop-down list for which you
                   want to clear results. If you want to clear results for an entire round,
                   select All Heats from the drop-down list.
               3   Click Heats/Flights from the Menu bar and select Clear Results. The
                   results are removed from the Heats window.



Viewing a wind reading
               If you are using FinishLynx or FieldLynx with a wind gauge to take a wind
               reading, LynxPad imports the reading automatically when it imports the
               results. You can also enter a wind reading (see "Entering a wind reading for
               a track event") into LynxPad.

            ➢ For a track event:
               The title bar for the event in the Heats window displays the wind reading for
               track events, as shown in the image here.
78   LynxPad 3.30 User's Guide



                      ➢ For a field event:
                          Wind readings for field events are displayed next to each athlete's name in
                          the Flights window, as shown in the image here.




Purging data
                          You can select specific data within your competition and delete it from your
                          competition database using the Purge Meet function.

                      ➢ To purge data from your competition:
                          1      Click File from the Menu bar and select Purge…. The Purge Meet dialog
                                 appears.
                          2      Click to check the box next to any of the categories of data you want to
                                 delete from your competition database file, including:
                                 ▪   Events
                                 ▪   Athletes
                                 ▪   Relays
                                 ▪   Teams
                                 ▪   Seed Marks, and
                                 ▪   Results.
                          3      Click Ok.
                                    Chapter 6 Administering Results         79



4   Click Yes at the warning dialog that verifies the data you want to be
    purged.
5   The data you selected is removed from the competition.

Tip: Check multiple boxes to have categories of data purged all at once.
                                                                                                     81


CHAPTER 7

Printing Reports from LynxPad

            In This Chapter
            Printing a report ................................................................. 82
            Adjusting the time precision .............................................. 88
            Configuring name and affiliation displays in reports ......... 89
82   LynxPad 3.30 User's Guide




Printing a report
                          The following reports are available for printing:
                          ▪      Meet Program
                          ▪      Events
                          ▪      Entry Lists
                          ▪      Finish Line Sheets
                          ▪      Field Event Score Sheets
                          ▪      Results, and
                          ▪      Team Scores.
                      ➢ Preview and Export!
                          ▪      export data (see "Exporting data") to a different format, such as to PDF
                                 or HTML from any of the print reports dialogs, and
                          ▪      preview a report before sending it to the printer.
                      ➢ To print a report:
                          1      Click Reports from the Menu bar and then select a report from the drop-
                                 down menu.
                          2      A dialog appears from which you can select certain report criteria, such
                                 as the Event, Gender, and Round. You can also check the Field Series and
                                 Splits boxes to include that information in the report, if it is available.
                                                Chapter 7 Printing Reports from LynxPad       83



                   3   (Optional) Click the Preview button to preview the report on your screen
                       before sending it to the printer. From the Print Preview screen, click

                              to export the report to a different format, or    to send the report
                       to the printer.
                   4   Click Ok after you have finished selecting the report criteria. The Print
                       dialog appears.
                   5   Click Print to send the report to the printer.

                   Tip: To print the same report for multiple events, hold down the CTRL key
                   while clicking to select several events. Then, select the report criteria and
                   send the report to the printer. The same report prints for every event you
                   selected.


Printing a Meet Program report
                   LynxPad allows you to print out a program for your competition. You can
                   modify how and what meet program data gets printed.

                ➢ To print a Meet Program:
                   1   Click Reports from the Menu bar and select Meet Program.... The Meet
                       Program dialog appears.
                   2   To print a specific event only, click to highlight it from the listing. To
                       select multiple events, hold down the Shift key while clicking on more
                       than one event. To include all events in your Meet Program, click the
                       Select All button.
                   3   From the Print Meet Program dialog, you can also make the following
                       configurations to your Meet Program report:
                       ▪   Gender (click to select Both, Men, or Women).
                       ▪   Rounds (click to select All Rounds, Final Only, or 1 Round Only).
                       ▪   Show Date and Time (click to uncheck if you do NOT want date and
                           time displayed).
                       ▪   One Event Per Page (click to check if you want one event only
                           displayed on each page).
                       ▪   Columns (click 1 Column or 2 Columns, depending on how you want
                           the information displayed).
                       ▪   Export Data (check this box to export data into a different format,
                           such as PDF or HTML).
84   LynxPad 3.30 User's Guide




Printing an Events report
                          The Events report displays a list of selected events, the time each event starts,
                          the event numbers, the number of rounds, number of heats, and number of
                          entries in each event.
                          1      Click Reports from the Menu bar and select Events....
                          2      Click to select the events for which you want to print an Events report.
                                 ▪   To select multiple events, hold down the CTRL key while clicking
                                     each event.
                                 ▪   To select all events listed in the Event List, click the Select All button.
                                 ▪   To clear your selections, click the Clear All button.
                          3      (Optional) Click the Export Data checkbox to export the report (see
                                 "Exporting data") to a different format.
                          4      (Optional) Click the Preview button to preview the report on your screen
                                 before sending it to the printer. From the Print Preview screen, click

                                        to export the report to a different format, or       to send the report
                                 to the printer.
                          5      When you are finished making your selections, click Ok. The Print dialog
                                 appears. If necessary, configure the printer using the Print dialog.
                          6      Click Print to send the report to the printer.


Printing an Entry Lists report
                          1      Click Reports from the Menu bar and select Entry Lists.... The Print Entry
                                 Lists dialog appears.
                          2      Click to select the Gender and Sort criteria.

                                 To print Entry Lists by event, click the By Event radio button and then
                                 click to highlight the events for which you want to print Event Entries.
                                 An Event Entries report printed in this way displays seed times and
                                 marks, if available.
                          3      (Optional) Click the Export Data checkbox to export the report (see
                                 "Exporting data") to a different format.
                          4      (Optional) Click the Preview button to preview the report on your screen
                                 before sending it to the printer. From the Print Preview screen, click

                                        to export the report to a different format, or       to send the report
                                 to the printer.
                          5      Click OK. The Print dialog appears. If necessary, configure the printer
                                 using the Print dialog.
                                                Chapter 7 Printing Reports from LynxPad         85



                   6   Click Print to send the report to the printer.


Printing a Finish Line Sheet
                   A Finish Line Sheet, or heat sheet, displays each athlete's name in lanes with
                   blanks for Time, Wind, and Place to be completed by finish line officials.
                   1   Click Reports from the Menu bar and select Finish Line Sheets....
                       ▪   Click to select each event for which you want to print a Finish Line
                           Sheet.
                       ▪   To select multiple events, hold down the CTRL key while clicking
                           each event.
                       ▪   To select all events listed in the Event List, click the Select All button.
                       ▪   To clear your selections, click the Clear All button.
                   2   Click to select Gender and Rounds criteria by which you want to print
                       each Finish Line Sheet.
                   3   (Optional) Click the Export Data checkbox to export the report (see
                       "Exporting data") to a different format.
                   4   (Optional) Click the Preview button to preview the report on your screen
                       before sending it to the printer. From the Print Preview screen, click

                              to export the report to a different format, or       to send the report
                       to the printer.
                   5   Click Ok. The Print dialog appears. If necessary, configure the printer
                       using the Print dialog.
                   6   Click Print to send the report to the printer.


Printing a Field Event Score Sheet
                   A Field Event Score Sheet displays each athlete's name in a flight with blanks
                   for Mark, Wind, and Place to be written by field event officials.
                   1   Click Reports from the Menu bar and select Field Event Score Sheets....
                       The Print Field Score Sheets dialog appears.
                   2   Click to select each event for which you want to print a Field Event
                       Score Sheet.
                       ▪   To select multiple events, hold down the CTRL key while clicking
                           each event.
                       ▪   To select all events listed in the Event List, click the Select All button.
                       ▪   To clear your selections, click the Clear All button.
86   LynxPad 3.30 User's Guide


                          3      Click to select Gender and Rounds criteria by which you want to print
                                 each Field Event Score Sheet.
                          4      (Optional) By default, LynxPad will print the Field Event Score Sheet in
                                 Portrait mode. Select the Orientation | Landscape radio button to change
                                 the way this report is displayed when printed.
                          5      (Optional) Click the Export Data checkbox to export the report (see
                                 "Exporting data") to a different format.
                          6      (Optional) Click the Preview button to preview the report on your screen
                                 before sending it to the printer. From the Print Preview screen, click

                                        to export the report to a different format, or       to send the report
                                 to the printer.
                          7      Click Ok. The Print dialog appears. If necessary, configure the printer
                                 using the Print dialog.
                          8      Click Print to send the report to the printer.


Printing a Results report
                          Several features are available in the Results printing function. You can now
                          choose:
                          ▪      how many columns reports are displayed in (1-3)
                          ▪      how they are ordered (according to Publication Order, or Event Number
                                 Order), and
                          ▪      how they are displayed (Compiled, or By Heat).
                      ➢ Printing a results report:
                          1      Click Reports from the Menu bar and select Results.... A message may
                                 appear telling that there are ties that may need breaking (see "Breaking
                                 ties"). Click Ok to exit the message. The Print Results dialog appears.
                          2      Click to select each event for which you want to print a Results report.
                                 ▪   To select multiple events, hold down the CTRL key while clicking
                                     each event.
                                 ▪   To select all events listed in the Event List, click the Select All button.
                                 ▪   To clear your selections, click the Clear All button.
                          3      Click to select Gender and Rounds criteria by which you want to print
                                 each Field Event Score Sheet.
                          4      Click to select:
                                 ▪   Publication Order to display the reports in order of the schedule date
                                     and time, or
                                 ▪   Event Number Order to display the reports in order of lowest to
                                     highest event number.
                                                Chapter 7 Printing Reports from LynxPad      87



                  5   Click to select the number of Columns in which you want the reports
                      displayed. Clicking 3 Columns saves the most space.
                  6   Click to display heats:
                      ▪   Compiled, or
                      ▪   By Heat.
                  7   Click to check a box for each additional criteria, including: Field Series,
                      Splits, Team Scores, One Event Per Page, Advancement Criteria, Show
                      Scratches, Show No Shows, and Show ReacTime.
                  8   (Optional) Click the Export Data checkbox to export the report (see
                      "Exporting data") to a different format.
                  9   (Optional) Click the Preview button to preview the report on your screen
                      before sending it to the printer. From the Print Preview screen, click

                             to export the report to a different format, or     to send the report
                      to the printer.
                  10 Click Ok. The Print dialog appears. If necessary, configure the printer
                     using the Print dialog.
                  11 Click Print to send the report to the printer.


Printing a Team Scores report
                  A Team Scores report lists the current standings for the competition.
                  1   Click Reports from the Menu bar and select Team Scores.... The Team
                      Scores dialog appears.
                  2   Click to select Men, Women, or Mixed.
                  3   (Optional) Click the Export Data checkbox to export the report (see
                      "Exporting data") to a different format.
                  4   (Optional) Click the Preview button to preview the report on your screen
                      before sending it to the printer. From the Print Preview screen, click

                             to export the report to a different format, or     to send the report
                      to the printer.
                  5   Click Ok. The Print dialog appears.
                  6   Click Print. The Team Scores report is sent to the printer.
88   LynxPad 3.30 User's Guide




Exporting data
                          LynxPad allows you to export data that can be compiled into a report into any
                          of the following formats:
                          ▪      Adobe Acrobat (PDF)
                          ▪      Character separated value (CSV)
                          ▪      Microsoft Excel (XLS)
                          ▪      Microsoft Word (DOC)
                          ▪      Rich Text Format (RTF)
                          ▪      HTML 4.0 (HTML)
                          ▪      Flat HTML (HTML).
                      ➢ To export report data to another format:
                          1      Click Reports from the Menu bar and select the report format you want to
                                 export to a different data format.
                          2      Once you Preview the report:

                                 a) Click the top left icon      , or for HTML
                                 b) Click the Save as HTML 4.0 button, or the
                                 c) Click the Save as Flat HTML button.
                          3      Select the format you want to export the data to from the Save As Type:
                                 drop-down list.
                          4      Enter a filename and select the destination folder.
                          5      Click Save.




Adjusting the time precision
                          By default, LynxPad prints results reports using the on-screen time precision,
                          however, you can specify the time precision you want displayed in a printed
                          results report.
                          1      Click Reports | Options.... the Options dialog appears.
                          2      Select a different time precision setting from the Time Precision: drop-
                                 down list. Then, click Ok. Reports are printed with the time precision you
                                 just selected.
                                          Chapter 7 Printing Reports from LynxPad         89




Configuring name and affiliation
displays in reports
              By default, LynxPad displays athlete names as first name followed by last
              name, and affiliation names in their entirety. You can change these options
              by following these instructions.
              1   Click Reports from the Menu bar and select Options…. The Options
                  dialog appears.
              2   To display athlete names as last name followed by first name, click to
                  select the Show Athlete Name as Last, First checkbox.
              3   To display the affiliation abbreviation only, click to select the Use
                  Affiliation Abbreviation checkbox.
              4   Then, click Ok. Reports are displayed according to the new criteria you
                  just selected.
                                                                                               91


CHAPTER 8

Beyond the Basics
            There are many advanced applications for LynxPad, such as administering a
            cross-country or water sports competition. You can also customize LynxPad,
            convert it to another language, and use it with Lynx's ReacTime® and
            ClerkLynx™ products. This section teaches you how to do all of this and
            more.

            In This Chapter
            Creating competition data from multiple sources .............. 92
            Backing up and restoring a competition............................. 97
            Using LynxPad with ReacTime Championship System .... 100
            Using LynxPad with ClerkLynx ........................................ 102
            Using LynxPad with cross country .................................... 102
            Using LynxPad with rowing, canoeing, or kayaking ......... 103
            Converting LynxPad to another language .......................... 104
            Customizing LynxPad ........................................................ 105
92   LynxPad 3.30 User's Guide




Creating competition data from
multiple sources
                          When managing a competition with LynxPad, you can have individual teams
                          enter their own athlete data and seed times into their own copies of LynxPad.
                          Using this method, teams can send you the data from their own LynxPad
                          competition directory. Then, you can import the data (see "Importing Lynx
                          files") into the master competition you create in LynxPad.

                      ➢ Here's how it works:
                          The procedure table shown here assumes you are a meet director, and that
                          coaches participating in your meet are going to enter data for their own
                          athletes.

                           Stage    Description

                           1        Meet director creates a competition with events, team names,
                                    and affiliations in LynxPad and makes the lynx.cmp and
                                    lynx.evt files available to coaches.

                           2        Coaches open their copy of the meet director's lynx.cmp file
                                    using LynxPad. At this time, coaches have access to available
                                    events.

                           3        Coaches do the following in LynxPad:
                                    a add athletes
                                    b select events for each athlete to participate in
                                    c enter seed times and seed marks, and
                                    d save the competition.

                           4        Coaches then send the entire competition directory to the
                                    meet director. This can be done, for example, by emailing the
                                    directory as an attachment using a compression program such
                                    as WinZip. At a minimum, coaches must be sure to send the
                                    PPL, EVT and LSF files to the meet director.

                           5        From LynxPad and with the master competition lynx.cmp file
                                    open, meet director imports lynx.evt and/or lynx.ppl files
                                    received from coaches using the File | Import | Lynx Files...
                                    function in LynxPad and navigating to the directory where
                                    coaches' files are saved. Lynx.lsf files containing seed times
                                    and marks are imported automatically.
                                                              Chapter 8 Beyond the Basics      93




                       6          After all lynx.evt and/or lynx.ppl files from individual
                                  coaches have been imported, meet director assigns ID
                                  numbers and begins seeding the events in the master
                                  competition.




Importing Lynx files
                   You can import existing Lynx EVT and PPL files into LynxPad. This is
                   particularly helpful when you want multiple teams to enter their own athlete
                   data (see "Creating competition data from multiple sources") on their own
                   copies of LynxPad.

                   Note: LSF, or seeding files, are automatically imported with the EVT file.
                   However, the lynx.cmp file is not imported at this time.

                   1       You first must have a lynx.cmp file open. To do this, either create a new
                           competition (see "Creating a new competition") or open an existing
                           competition (see "Opening an existing competition").
                   2       Click File from the Menu bar and select Import | Lynx Files.... A Browse
                           Folder dialog appears.
                   3       Navigate to the directory containing the EVT and PPL files you want to
                           import.
                   4       Click to select the EVT and/or PPL file/s you want to import, and then
                           click Ok.
                   5       Click Ok at the Finished Importing Lynx...Files message. If you imported
                           an EVT file, the events appear in the Events window. If you imported a
                           PPL file, the athletes appear in the Athletes window. If you imported an
                           LSF file, seed marks are available for athletes in corresponding events.

                   Important: Duplicate athletes and events are not imported.


Importing and exporting delimited files
                   LynxPad can now import and export raw data in the form of semi-colon and
                   comma delimited files, allowing competition data to flow between copies of
                   LynxPad.

                   For example, if you are directing a competition, you can create a single
                   competition in your version of LynxPad, and then import team and athlete
                   entries made by coaches participating in your competition on their own
                   copies of LynxPad. (See Integrating entries from multiple sources.)
94   LynxPad 3.30 User's Guide



                          Exporting semi-colon and comma delimited files
                          With a competition open in LynxPad:
                          1      Click File from the main Menu bar and select Export and then select
                                 either Semi-Colon Delimited Entries... or Comma Delimited Entries.... The
                                 Save As dialog appears.
                          2      Navigate to where you want the exported file saved and then click Save.

                          Importing semi-colon and comma delimited files
                          Individual and relay competition entries in the form of a semi-colon or
                          comma delimited text file can be imported into LynxPad.

                      ➢ Instructions:
                          Note: These instructions assume you have a semi-colon or comma delimited
                          text file available somewhere on your computer or network.
                          1      Run LynxPad.
                          2      Open a competition.
                          3      Click File from the Menu bar and select Import. A drop-down menu
                                 appears.
                          4      Select either Semi-Colon Delimited Entries... or Comma Delimited Entries...
                                 from the drop-down menu. The Open dialog appears.
                          5      Navigate to where the semi-colon or comma delimited file is saved.
                          6      Click to highlight the file, and then click Open. LynxPad begins
                                 importing the entries.

                      ➢ Notes about importing:
                                 ▪   If an entry has errors in it, it is skipped. When LynxPad completes the
                                     import, an Import Results dialog appears, detailing any skipped
                                     entries.
                                 ▪   The last directory used for importing becomes the default directory
                                     for your next import.




                          About delimited file entry records
                          This section describes the characteristics of delimited file entry records.
                                        Chapter 8 Beyond the Basics        95




Delimited file entry records
There are two types of entry records that can be made in a delimited file
format for use by LynxPad:
▪   A = Individual Entry Record (9 fields separated by semi-colons or
    commas), and
▪   L = Relay Entry Record (7 fields separated by semi-colons or commas).
Delimited file entry record rules
Delimited files must adhere to the following rules if they are to be
successfully imported into LynxPad:
1   If no information is available for a given field, leave it blank, but include
    the semi-colon or comma.
2   Follow each record by a carriage return and line feed (CRLF). Create a
    CRLF by pressing the Enter key.
3   If at any point in a record all remaining fields are blank, you can end it
    with a carriage return without including the extra semi-colons or
    commas.
4   Create an A record for each individual entry.
About the Individual Entry (A) record
The following table demonstrates the components required in an A, or
Individual Entry, record.

Data                        Max Characters            Notes
A                           1                         Delineates "Individual
                                                      Entry Record"
Last Name                   20                        Required field
First Name                  20                        Required field
Athlete Gender              1                         ▪   M = Male, F = Female
                                                      ▪   Required field
Team Name                   25                        ▪   Use Unattached if
                                                          unknown
                                                      ▪   Required field
Event Number                5                         Required field
Entry Mark                  11                        ▪   Time: hh:mm:ss
                                                          (1:23:44.55, 1:19.14,
                                                          58.43)
                                                      ▪   Mark: Metric - 12.33;
                                                          English - 12-10.25",
                                                          12'
96   LynxPad 3.30 User's Guide


                           Event Entry/Relay Entry                               Not implemented in
                                                                                 LynxPad 3.25
                           Event Measure               1                         ▪   M for Metric, E for
                                                                                     English
                                                                                 ▪    Required field
                           Event Division              2                         Not implemented in
                                                                                 LynxPad 3.25

                      ➢ Individual Entry (A) record example:
                          A;Doe;John;M;Hurricane High School;1;21.23;M;[CRLF]

                      ➢ Notes:
                          ▪      There is one A record per individual entry.
                          ▪      Four entries for the same athlete require four A records.




                          About the Relay Entry (L) record
                          The following table demonstrates the components required in an L, or Relay
                          Entry, record.

                           Data                        Max Characters            Notes
                           L                           1                         Delineates "Relay Entry
                                                                                 Record"
                           Team Name                   25                        ▪   Use Unattached if
                                                                                     unknown
                                                                                 ▪    Required field
                           Designation                 1                         A, B, C, etc.
                           Relay Gender                1                         ▪   M = Male, F =
                                                                                     Female, X = Mixed
                                                                                 ▪    Required field
                           Event Number                5                         Required field
                           Entry Time                  10                        hh:mm:ss.tt (44.55,
                                                                                 4:19.14)
                           Event Division              2                         Not implemented in
                                                                                 LynxPad 3.25
                                                          Chapter 8 Beyond the Basics       97




               ➢ Relay Entry (L) record example:
                  L;Hurricane High School;A;M;12;4:01.44;[CRLF]




Backing up and restoring a
competition
                  LynxPad now allows you to backup and restore a competition, allowing you
                  to do several useful things:
                  ▪   Keep competition information safely stored on a computer or on a CD-
                      ROM
                  ▪   Transfer competition information to another computer, and
                  ▪   Send competition information to coaches participating in your
                      competition. They can make their team and athlete entries directly into
                      the competition file and return it to you. (See Ability to integrate entries
                      from multiple sources.)




Backing up a competition
                  To backup a competition created in LynxPad:
                  1   Open the competition you want backed up.
                  2   Click File from the main Menu bar and select Backup.... A Browse Folder
                      dialog appears.
                  3   Navigate to where you want to save the competition backup. To create a
                      new folder for the backup, click the Make New Folder button and type a
                      new name in the Folder: text field.
                  4   Click OK. A backup *.ZIP file for your competition is created. It is
                      named LPadBkUp_xxx-yy.zip, where xxx is the name of your competition
                      and yy is an incrementing number based on the number of times you have
                      backed up the current competition.
98   LynxPad 3.30 User's Guide




Restoring a competition
                          To restore a competition in LynxPad:
                          1      Make sure no competition is currently open.
                          2      Click File from the main Menu bar and select Restore.... The Select a
                                 competition backup to restore dialog appears.
                          3      From the File name: drop-down list, select the name of the backup file
                                 (LPadBkUp_xxx-yy.zip) you want to restore, and then click Open. A
                                 Browse Folder dialog appears.
                          4      Either navigate to an existing competition directory or create a new
                                 competition directory and then click Ok. The restored competition is
                                 loaded into LynxPad and opened into the main LynxPad screen.


Ability to integrate entries from multiple sources
                          LynxPad allows you to create a master competition, and then import
                          individual and relay team entries made from other sources. For example, if
                          you are directing a meet, you can set up the competition in your version of
                          LynxPad, and then import entries made by coaches from competing teams,
                          saving you from a great deal of data entry.

                          Integrating entries from multiple sources
                          Following is a description of the process for creating a competition from one
                          source, and integrating it with entries from other sources. Please consult the
                          LynxPad online help for instructions on how to perform specific tasks
                          mentioned here.

                      ➢ Host meet director: creating a competition and sending it to remote
                        sources
                          1      Create a new competition in LynxPad.
                          2      Set up the events and affiliations.
                          3      Backup the competition see "Backing up a competition".
                          4      Send the backup file, LPadBkUp_xxx-yy.zip, to all of the entities who will
                                 enter individual and relay team data for their respective teams. Instruct
                                 the remote sources as to which format you are using for the delimited file
                                 (either semi-colon or comma delimited).

                                 Note: Remote source entities can download a free copy of LynxPad by
                                 visiting the Lynx website (http://www.finishlynx.com/).
                                           Chapter 8 Beyond the Basics      99




➢ Remote sources: restoring a competition, adding entries, and sending
  entries to the host meet director
   Remote sources such as coaches from visiting teams will follow these steps.
   1   Run LynxPad without opening a competition.
   2   Click File from the main Menu bar and select Restore....
   3   Navigate to the LPadBkUp_xxx-yy.zip file from the host source and click
       Open. The competition originally created by the host meet director is
       loaded into LynxPad and opens on the LynxPad main screen.
   4   Enter all of your individual and relay entries as well as seed marks. If
       you need help doing this, please consult the LynxPad online help for
       instruction. Do not enter competitor ID's. This is done by the host meet
       director.
   5   When finished, click File | Export and select either Semi-Colon Delimited
       Entries... or Comma Delimited Entries..., depending on the file format
       requested by the host meet director. The Save As dialog appears.
   6   Navigate to a directory where you want to store the delimited file
       containing your entries.
   7   Type a name for the file, such as your team name, and click Save. Your
       entries are exported to a single file, saved wherever you just designated.
   8   Send this file to the host meet director.

➢ Host meet director: importing entry lists from remote sources
   Now the host meet director can import entries created by remote sources into
   the original competition.
   1   Open the original competition you created in LynxPad.
   2   Click File | Import | Semi-Colon Delimited Entries... or Comma Delimted
       Entries.... The Open dialog appears.
   3   Navigate to the directory where the remote source's semi-colon delimited
       file is stored and click Open. LynxPad integrates the entries into the
       competition.
100   LynxPad 3.30 User's Guide




Using Custom Fields
                           LynxPad has the ability to import, export and store information about
                           competitors that is stored solely for the ability to generate additional
                           competitor information in the reports, for example Hometown, Coach and
                           Date of Birth.

                           Up to 15 custom fields can be added per competitor.

                           The custom fields are stored and loaded using LynxPad through a text file
                           titled “lynx.cfi” file in the competition directory. The user can generate this
                           file using Microsoft Excel or another text editor, place it in the competition
                           directory and LynxPad will automatically load the file the next time the
                           competition is opened.

                           The format of the import and export file is shown below:




Using LynxPad with ReacTime
Championship System
                           The ReacTime® Championship System is a false start detection system used
                           at a track and field competition. LynxPad can import athlete's reaction times
                           as generated by ReacTime.

                           Note: For instructions on configuring and operating the ReacTime
                           Championship System, please consult the documentation that comes the
                           product, or refer to the Lynx website (http://www.finishlynx.com/) for help.
                                                          Chapter 8 Beyond the Basics        101




How does LynxPad make a start list available to ReacTime?
                   Configuring LynxPad to save the lynx.cmp file into the the competition
                   directory shared by ReacTime, makes the start list available to ReacTime
                   after you save the lynx.cmp file.

                ➢ To configure the LynxPad directory:
                   1   If you have not done so already, create a directory someplace where you
                       can store the LynxPad and ReacTime files.
                   2   Make sure you have a lynx.cmp file open in LynxPad. Do this by
                       creating a new competition (see "Creating a new competition") or
                       opening an existing competition (see "Opening an existing competition").
                   3   Click File | Options... from the Menu bar. A dialog appears.
                   4   Click the Browse... button and navigate to the competition file you
                       created.




                   5   When finished, click OK. When you load an event in ReacTime, it looks
                       for and displays the start list created with LynxPad.


Importing reaction times
                   Reaction times are automatically loaded when you import results by either:
                   ▪   Clicking Heats/Flights from the Menu bar and selecting Load Results or
                       clicking    , or
                   ▪   Clicking Competition from the Menu bar and selecting Refresh All
                       Results.
102   LynxPad 3.30 User's Guide




Using LynxPad with ClerkLynx
                           ClerkLynx™ is a Lynx Palm™ handheld device application that enables you
                           to seed athletes into heats or flights "on the fly," before the start of an event.

                           Configuring LynxPad to save the lynx.cmp file into the same directory as
                           NetExchange Server allows you to save a list of athletes, also known as a
                           PPL file, which you can retrieve from ClerkLynx for "on the fly" start list
                           creation.

                           Note: For instructions on configuring and operating ClerkLynx and
                           NetExchange Server please consult the documentation that comes these
                           products, or refer to the Lynx website (http://www.finishlynx.com/) for help.

                       ➢ To configure the LynxPad directory:
                           1      If you have not done so already, create a directory someplace where you
                                  can store the LynxPad and NetExchange files.
                           2      Make sure you have a lynx.cmp file open in LynxPad. Follow the
                                  instructions to create a new competition (see "Creating a new
                                  competition") or open an existing competition (see "Opening an existing
                                  competition").
                           3      Click File | Options... from the Menu bar. The Options dialog appears.
                           4      Click the Browse... button and navigate to the directory you created.




                           5      When finished, click Ok. When ClerkLynx loads the data, it displays the
                                  athletes and events you created in LynxPad.



Using LynxPad with cross country
                           You can use LynxPad to administer a cross country event. Most of the
                           instructions found in this User's Guide apply to cross country with some
                           exceptions, described here. After you have set up the cross country event,
                           LynxPad will score the competition according to cross country scoring rules,
                           with the first five athletes from each team scoring. First place is awarded 1
                           point, second place 2 points, etc. The lowest team score wins.
                           1      If you have not done so already, create a new competition (see "Creating
                                  a new competition").
                                                     Chapter 8 Beyond the Basics       103



              2   Follow the steps to create a new event (see "Adding events") so that the
                  Add/Edit Event dialog is displayed.
              3   Complete the Event Number, Event Name, and Gender fields for the event.
              4   Important: From the Event Type: drop-down list, select Cross Country.
                  Selecting cross country from the Event Type: drop-down list
                  automatically enables cross country scoring.
              5   Click the Add button. The Add/Edit Event dialog remains displayed, but
                  the Event #: field has been incremented by one. LynxPad is ready for you
                  to continue adding cross country events.
              6   When you are finished adding events, click Done to return to the
                  LynxPad main screen. The new cross country events you entered appear
                  in the Events window.
              7   Now, add athletes (see "Adding athletes and relays") to the cross country
                  competition.




Using LynxPad with rowing,
canoeing, or kayaking
              You can use LynxPad with other sports in addition to track and field, like
              water sports such as rowing, canoeing, and kayaking. Most of the
              instructions found in this User's Guide apply to other sports in addition to
              track and field with some exceptions, described here.

           ➢ Configuring the event type and custom distance:
              1   Make sure you have a lynx.cmp file open by either creating a new
                  competition (see "Creating a new competition") or opening an existing
                  competition (see "Opening an existing competition").
              2   Follow the steps to create a new event (see "Adding events").
              3   From the Event Type: drop-down list, select Other.
              4   If you need to create a distance not available from the Distance: drop-
                  down list, select Custom and type the new distance in the field below, for
                  example, 2000.
              5   While on this screen, set the number of rounds (see "Changing round
                  names") and change the number of lanes (see "Changing the number of
                  lanes or positions"), if necessary. Note that you can also change the lane
                  preference configuration (see "Changing lane preferences"), if
                  necessary.
104   LynxPad 3.30 User's Guide



                       ➢ Adding athletes:
                           Add individual competitors, such as single scullers and single paddlers, by
                           following the instructions for adding athletes (see "Adding athletes and
                           relays"). To add a boat containing more than one athlete, for example, an 8, a
                           quad, or a K-4, enter the entire team without specifying individual athletes.
                           1      Activate the Athletes/Relays window by clicking its title bar or anywhere
                                  within the window.

                           2      Either click     or click Athletes/Relays from the Menu bar and select
                                  Add Athlete. The Add/Edit Athlete dialog appears.
                           3      Now you can enter information about the boat, including:
                                  ▪   ID
                                  ▪   Affiliation
                                  ▪   License, and
                                  ▪   Gender.
                           4      At this time if you have events set up, you can assign the boat to events
                                  by selecting them from the drop-down lists in the Event # columns.
                           5      When finished entering information, click Add.



Converting LynxPad to another
language
                           Depending on which language versions of LynxPad are available, you can
                           convert LynxPad to display in another language.
                           1      Click File | Options.... The Options dialog appears.
                           2      Select a new language from the Language*: drop-down list.
                           3      Restart LynxPad. The next time you run LynxPad, it uses the new
                                  language you selected.

                           Tip: You can also modify the LynxPad LNG file (see "Customizing
                           LynxPad") to suit the needs of your competition or language.
                                                     Chapter 8 Beyond the Basics      105




Customizing LynxPad
              You can customize LynxPad for a specific sport or language by editing the
              LNG file that comes with the LynxPad installation.

           ➢ To edit the LynxPad LNG file:
              1   Start Microsoft Notepad, or some other text editor. The instructions here
                  assume you are using Microsoft Notepad.
              2   Type the following text on the first two lines:

                  Custom,cu_CU
                  Registry Version: 1.00
              3   Save the file as cu_CU.lng in the directory where you stored the LynxPad
                  files during installation. It may be located someplace like C:\Program
                  Files\Lynx System Developers, Inc\LynxPad.
              4   Start LynxPad.
              5   Select File from the Menu bar and choose Options.... The Options dialog
                  appears.
              6   From the Language*: drop-down list, select Custom.
106   LynxPad 3.30 User's Guide


                           7      Exit LynxPad and then restart it. When LynxPad restarts, it runs the
                                  Custom language file.
                           8      Hold down the SHIFT and CTRL keys while exiting LynxPad again. All of
                                  the strings from the LynxPad file are written to the custom file you just
                                  created. If you open the file, cu_CU.lng, it resembles the image below.




                           9      Now you can modify the strings to suit your needs. When finished, save
                                  your changes to the cu_CU.lng file.
                                                                                                   107




Glossary of Terms
A                                                    H
AFL                                                  HIF
A Lynx data file containing a list of affiliations   A Lynx data file containing results entered by
and their abbreviations.                             hand. This file is found in the HandEntered
                                                     folder in the competition directory.
C
competition directory                                L
                                                     LFF
Folder on a Microsoft Windows operating
system computer containing all Lynx data files       A Lynx data file containing results generated by
related to a competition.                            FieldLynx.

competition LAN                                      license
Local area network containing various                A number assigned to an athlete by a licensing
competition management products                      authority.
communicating over wired or wireless TCP/IP.
Examples of Lynx products on a competition           LIF
LAN include FinishLynx, NetExchange Server,          A Lynx data file containing results generated by
an AirLynx gateway, ClerkLynx, and FieldLynx.        FinishLynx.
E                                                    LSF
EVT                                                  A Lynx data file containing seeding information
A Lynx data file containing a list of events and     entered in LynxPad.This file is found in the
the athletes in them. A lynx.evt file is used by     Seeding folder in the competition directory.
FinishLynx, and a fldlynx.evt file is used by
FieldLynx.                                           lynx.cmp
                                                     A compilation file created by LynxPad that may
F                                                    contain all or some of the following files:
FieldLynx
                                                     ▪     lynx.evt - containing the events for the
A Lynx Palm™ or WinCE handheld device                      competition
application that allows you to administer field      ▪     lynx.ppl - containing the athletes in the
events at a track meet.                                    competition, and
FinishLynx                                           ▪     lynx.sch - containing the schedule of events
                                                           for the competition.
Digital race management system that works with
Lynx System Developers' photofinish cameras to       lynx.rly
enable you to evaluate and produce race results.     A Lynx data file containing relay information.
108     LynxPad 3.30 User's Guide


P                                                    U
PPL                                                  unicode
A Lynx data file containing a list of athletes.      A worldwide character-encoding standard,
                                                     capable of representing all of the world's
R                                                    characters in modern computer use, including
random lane assignment                               technical symbols and special characters used in
                                                     publishing.
Lane assignment criteria used when athletes are
assigned to lanes using no particular order.         W
RIF                                                  waterfall positions lane assignment

A Lynx data file containing reaction times           Lane assignment criteria used when athletes are
generated by a ReacTime Championship system.         not assigned to specific lanes, as in longer races
                                                     like the 3k, 5k, etc.
S
SCH
A Lynx data file containing the schedule of
events.

serpentine
Assigning athletes to heats in a “snaking” back
and forth process, based on time from fastest to
slowest. Heats are assigned in order of 1, 2, 3...
forward and then ...3, 2, 1 back, repeating until
all athletes are assigned. Number of heats may
vary. NCAA rules require lane assignments to
be random.

single byte
Refers to character representation limited to
standard alphabetical characters as well as many,
but not all, technical and special characters.



standard lane assignment
Lane assignment criteria used when athletes are
assigned to specific lanes.
                                                                                                109




Index
                                                         advancement criteria, changing • 60, 65
1                                                        advancing athletes to the next round • 60, 61
1. Open the sample competition • 14                  affiliations, entering • 34
                                                     AFL • 115
2                                                    alternative meet scoring • 32
2. Add an event • 15                                 Assigning and Seeding Athletes • 53
                                                     Assigning athletes to events • 54, 55
3                                                    athlete
3. Save changes to the competition • 17                  athlete, deleting • 51
                                                         athletes, adding • 47, 57
4                                                        athletes, adding multiple • 55
4. Set up an athlete affiliation • 18, 19, 81            athletes, adding to multiple events • 57
                                                         athletes, seeding • 58
5
                                                     B
5. Add an athlete • 19
                                                     Backing up a competition • 103, 105
6                                                    Backing up and restoring a competition • 103
6. Assign and seed athletes • 20                     Backing up competition data • 28
                                                     backing up LynxPad data • 28
7                                                    Beyond the Basics • 97
7. Load results • 22                                 Breaking ties • 36, 73, 93

8                                                    C
8. Use advanced features • 23                        Can I use duplicate athlete ID's? • 48
                                                     canoeing, using LynxPad with • 110
A                                                    Changing an event start time • 45
Ability to integrate entries from multiple sources   Changing lane or position assignment criteria •
  • 103, 104                                           56, 58
About delimited file entry records • 101             Changing lane preferences • 59, 110
About the Individual Entry (A) record • 101          Changing round names • 43, 44, 110
About the Relay Entry (L) record • 102               Changing the heat or flight assignment criteria •
Adding a heat • 22, 64                                 60
Adding a non-track and field event • 41              Changing the heat or flight order • 60
Adding a relay team • 50                             Changing the measurement system • 45, 56
Adding athletes and relays • 34, 35, 47, 109, 111    Changing the number of heats or flights • 64
Adding events • 38, 39, 46, 109, 110                 Changing the number of lanes or positions • 58,
Adding individual athletes • 47                        110
Adding multiple athletes to an event • 55            Clearing results • 84
Adjusting the time precision • 24, 36, 74, 95        ClerkLynx, using LynxPad with • 108
Administering Results • 67                           competition
advancement
110     Index


   competition directory • 115                        Event Entries report, printing • 91
   competition, creating a new • 26                   event start time, specifying • 45
   competition, opening an existing • 29, 30          event, adding • 38
   competition, saving • 28                           event, deleting • 42
competition directory • 115                           event, editing • 42
competition LAN • 115                                 Events Report, printing • 90
competitors, adding • 47, 57                          events, adding athletes to more than four • 57
Configuring LynxPad for scoreboard use • 78           events, assigning athletes to • 54, 57
Configuring name and affiliation displays in          events, printing • 87
  reports • 96                                        events, unassigning athletes from • 57
Connecting LynxPad to a scoreboard • 77            EVT • 115
Contacting Lynx System Developers, Inc. • 11,      Exporting data • 90, 91, 92, 93, 94, 95
  77                                               Exporting data) • 88
Converting LynxPad to another language • 111       Exporting semi-colon and comma delimited files
Copyright Notice • 1                                 • 100
Creating a Competition • 25
Creating a new competition • 26, 28, 68, 75, 99,
                                                   F
  107, 108, 109, 110                               field events
Creating competition data from multiple sources        Field Event Score Sheet, printing • 92
  • 98, 99                                             field event score sheets, printing • 87
cross country, and LynxPad • 109                       field series, viewing • 76
custom distance, entering • 39                         FieldLynx, using with LynxPad • 74, 75, 76
customizing LynxPad • 112                              flight sheet • 74
Customizing LynxPad • 111, 112                         flights, changing the number of • 64
                                                   FieldLynx • 115
D                                                  Finish Line Sheets, printing • 91
Data entry basics • 37                             FinishLynx • 115
data, sorting • 37                                 FinishLynx and LynxPad • 68
Deleting an athlete or relay • 51
Deleting an event • 42
                                                   G
Delimited file entry record rules • 101            Getting help • 11
Delimited file entry records • 101
Disabling competition scoring • 32, 46             H
Disabling event scoring • 32, 46                   heats
Disabling loading results on program start • 30,      heat, adding after seeding • 64
  69, 82                                              heats, changing the number of • 64
Displaying splits • 69                             help, getting • 11
Displaying windows • 27                            HIF • 115
distance, entering a custom • 39                   How do I enter an athlete in more than four
                                                     events? • 54, 57
E
                                                   How does LynxPad handle unattached athletes? •
Editing an event • 42                                32
English, selecting for measurement • 45            How does LynxPad make a flight sheet available
Entering a custom distance • 38, 39, 42              for FieldLynx? • 74
Entering a wind reading for a track event • 70,    How does LynxPad make a start list available to
  84                                                 FinishLynx? • 68
Entering Data • 37                                 How does LynxPad make a start list available to
Entering results manually • 83                       ReacTime? • 107
Entering seed times or seed marks • 22, 55
events
                                                                                   Index     111


                                                   Modifying how a competition is scored • 26, 31,
I                                                   32
ID numbers, using duplicates • 48, 57              Modifying seeding criteria • 58, 61
importing                                          modyfing data
    importing EVT files • 99                         modifying an event • 42
    importing Lynx files • 99                        modifying round names • 44
    importing PPL files • 99                       multiple events at once, seeding • 63
Importing and exporting delimited files • 100
                                                   N
Importing Lynx files • 98, 99
Importing reaction times • 108                     NetExchange • 75, 108
Importing results from FieldLynx • 75              New LynxPad 3.25 Features • 5
Importing results from FinishLynx • 68             non-track and field event, adding • 41
Importing semi-colon and comma delimited files
  • 100
                                                   O
Installing LynxPad • 8                             Opening a competition as read-only • 30
Integrating entries from multiple sources • 100,   Opening an existing competition • 29, 68, 75, 99,
  104                                               107, 108, 110
international scoring • 32
Introduction to LynxPad • 7                        P
                                                   PPL • 116
K
                                                   Printing a Field Event Score Sheet • 92
kayaking competition, using LynxPad with • 110     Printing a Finish Line Sheet • 91
                                                   Printing a Meet Program report • 89
L
                                                   Printing a report • 88
lanes                                              Printing a Results report • 93
    lane assignment criteria, changing • 58        Printing a Team Scores report • 94
    lane assignment, randomzing • 65               Printing an Entry Lists report • 91
    lane preferences, changing • 59                Printing an Events report • 90
    lanes, changing number of • 58                 Printing Reports from LynxPad • 87
language, converting LynxPad to use another •      Purging data • 85
   111
LFF • 115
                                                   Q
license • 115                                      Quick Start Tutorial • 13
LIF • 115
LNG file, customizing • 112                        R
LSF • 115                                          random lane assignment • 116
Lynx files, importing • 99                         Randomizing lane assignment • 22, 65
lynx.cmp • 115                                     ReacTime
lynx.rly • 115                                        ReacTime, using with LynxPad • 107, 108
LynxPad data, backing up • 28                         reaction times, importing from ReacTime •
                                                          108
M
                                                   read-only, opening a competition as • 30
manually seeding • 62                              Relay team members • 51
Match athletes by Lane when ID's are missing •     reports, printing • 87
 69                                                Resizing windows • 27
maximizing a window • 27                           Restoring a competition • 104
Metric, selecting for measurement • 45             results • 68, 75, 83
minimizing a window • 27
missing ID's • 69
mixed-gender event, setting up • 46
112     Index


   Results report, printing • 93                        Activate the Scoreboard | Options dialog • 78
   results, clearing • 84                            Step 2
   results, entering manually • 83                      Find your scoreboard in the Scoreboard
   results, importing • 68, 75                              Settings table • 78, 80
RIF • 116                                            Step 3
rounds                                                  Configure LynxPad with your scoreboard
   round names, changing • 44                               settings • 79
   rounds, setting up • 42                           Step 4
rowing, using LynxPad with • 110                        Configure scoreboard data display • 80
running LynxPad • 10
                                                     T
S
                                                     Team Scores report, printing • 94
Saving a competition • 27, 28                        ties, breaking • 73
SCH • 116                                            time precision, adjusting for reports • 95
scoring                                              Track and field multi-events • 40
    scoring, disabling • 32                          Tutorial • 13
    scoring, modifying • 31                          Tutorial introduction • 13, 29
Season Best and Lifetime Best Performances •
   56
                                                     U
seeding                                              Unassigning athletes from an event • 51, 57
    seed marks, entering • 55                        unattached athletes • 32
Seeding athletes • 58                                   unattached athletes, setting LynxPad to
Seeding athletes according to seeding criteria •           ignore • 32
   61                                                unicode • 116
Seeding athletes manually • 22, 61, 62               Unicode • 35
Seeding multiple events at once • 61, 63             Unseeding athletes • 51, 57, 64
Select ID numbering • 49                             Using Custom Fields • 106
Selecting how athletes advance • 60                  Using LynxPad with ClerkLynx • 108
Selecting the advancement criteria • 65              Using LynxPad with cross country • 31, 41, 109
Sending data to a scoreboard • 77                    Using LynxPad with FieldLynx • 74
serpentine • 116                                     Using LynxPad with FinishLynx • 67
Setting LapTime Parameters • 47                      Using LynxPad with ReacTime Championship
Setting up a mixed-gender event • 46                   System • 107
Setting up affiliations and abbreviations • 34, 48   Using LynxPad with rowing, canoeing, or
Setting up alternative meet scoring • 32               kayaking • 41, 110
Setting up rounds • 42                               Using the User3 Custom Field) • 71
Setting Wind Parameters • 46
single byte • 116                                    V
Single Byte • 35                                     Viewing a field series • 76
Single byte or unicode? • 35                         Viewing a wind reading • 76, 84
Sorting athletes or relays • 51
Sorting data • 37                                    W
splits, displaying • 69                              water sports, using LynxPad with • 110
standard lane assignment • 116                       waterfall positions lane assignment • 116
Standings report, printing • 94                      Waterfall Positions, enabling • 58
start list • 68, 107                                 What are Lynx data files? • 7, 8, 34
start time, specifying • 45                          What is LynxPad? • 7
Starting LynxPad • 10                                wind reading
status designator, assigning • 83
Step 1
                                 Index   113


   wind reading, entering • 70
   wind reading, viewing • 84
windows in LynxPad
   Windows, displaying • 27
   windows, resizing • 27
