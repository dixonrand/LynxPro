# MeetPro2 Manual

**Title:** MeetPro2 Manual
**Slug:** `meetpro2-manual`
**Category:** Third-Party Meet Management Software › MileSplit / Direct Athletics
**Type:** manual
**Source URL:** https://www.tfmeetpro.com/MeetPro_Manual.pdf
**Use:** Full reference manual for MeetPro meet management software integration with FinishLynx.

---

MeetPro2 Manual
                                                          Version 2.2.164
                                                          © 2020 DirectAthletics, Inc.


I. Installation ................................................................................................................4
II. Licensing ..................................................................................................................4
III. Meet Database Basics .............................................................................................4
Creating Your First Meet ......................................................................................................................................... 4
Tabs and Keyboard Shortcuts............................................................................................................................... 5
Adding Events .............................................................................................................................................................. 5
Adding Teams .............................................................................................................................................................. 5
Adding Athletes ........................................................................................................................................................... 5
IV. Working With Events, Teams and Athletes ..............................................................6
Events .............................................................................................................................................................................. 6
Teams .............................................................................................................................................................................. 6
Athletes ........................................................................................................................................................................... 6
Divisions ......................................................................................................................................................................... 7
V. Relay Entries ............................................................................................................7
VI. Seeding ...................................................................................................................8
Manual Seeding ........................................................................................................................................................... 8
Team Lanes ................................................................................................................................................................... 9
VII. The Entry Pad.........................................................................................................9
VIII. Entering Track & Field Results ...............................................................................9
FinishLynx and Other FAT Systems ................................................................................................................ 10
Tie Breaking .............................................................................................................................................................. 10
Scoring ......................................................................................................................................................................... 10
Complete ..................................................................................................................................................................... 10
IX. Reports ................................................................................................................. 11
PDF, HTML and Text Reports............................................................................................................................. 11
Custom HTML Reports .......................................................................................................................................... 11
Exporting Data.......................................................................................................................................................... 11
Barcodes and Labels .............................................................................................................................................. 11
HTML Reports Templates.................................................................................................................................... 12
X. DirectAthletics Integration ..................................................................................... 12
Create a Meet From DirectAthletics ................................................................................................................ 12
Import Entries From DirectAthletics .............................................................................................................. 12
Exporting Results to DirectAthletics .............................................................................................................. 12
XI. Cross Country ........................................................................................................ 12
Creating a Cross Country Meet .......................................................................................................................... 12
Creating and Editing Cross Country Events................................................................................................. 12
Ghost Scoring ............................................................................................................................................................ 13
Splits and Split Scoring ......................................................................................................................................... 13
Split Scoring Web Scoreboard ........................................................................................................................... 13
NCAA Tie-Breaking ................................................................................................................................................. 13
Entering Cross Country Results Manually .................................................................................................... 13
Dual Scoring............................................................................................................................................................... 14
Divisions ...................................................................................................................................................................... 14
FinishLynx .................................................................................................................................................................. 15
Ipico Chip Timing .................................................................................................................................................... 15
MyLaps ......................................................................................................................................................................... 15
ChronoTrack.............................................................................................................................................................. 16
Time Machine............................................................................................................................................................ 16
NK Interval 2000xc................................................................................................................................................. 17
Sprint 8 ........................................................................................................................................................................ 17
Barcode Scanners .................................................................................................................................................... 18
Qualifier/Advancement Symbols ..................................................................................................................... 18
XII. TFRRS ................................................................................................................... 18
Import Rosters From TFRRS .............................................................................................................................. 18
Upload Results to TFRRS ..................................................................................................................................... 18
XIII. Importing Data .................................................................................................... 19
From Another MeetPro Database .................................................................................................................... 19
Semi-Colon Delimited Format ........................................................................................................................... 19
XIV. Creating Meets From Hy-Tek Events Files ............................................................ 19
XV. Templates ............................................................................................................ 19
XVI. Upload To Web ................................................................................................... 19
XVII. Upload To Amazon S3 ........................................................................................ 20
S3 Account Creation ................................................................................................................................................ 20
S3 Buckets ................................................................................................................................................................... 20
Uploading Results to the Web ............................................................................................................................. 20
Updating Results ..................................................................................................................................................... 20
DNS and CNAMEs .................................................................................................................................................... 20
Customizing Results ............................................................................................................................................... 20
XVIII. FTP Upload ....................................................................................................... 21
XIX. Publish To Disk .................................................................................................... 21
XX. ResulTV Interface ................................................................................................. 21
ResulTV Data Source Configuration .................................................................................................................. 21
Track & Field ............................................................................................................................................................... 22
Cross Country ........................................................................................................................................................... 22
XXI. Daktronics Scoreboard Interface ......................................................................... 22
Board Setup ............................................................................................................................................................... 22
Serial Connection .................................................................................................................................................... 22
Network Connection .............................................................................................................................................. 22
Preview ........................................................................................................................................................................ 23
Template File ............................................................................................................................................................ 23
Board Setup ............................................................................................................................................................... 23
Data Setup .................................................................................................................................................................. 23
Starting and Stopping the Feed ......................................................................................................................... 23
XXII. Live Update ........................................................................................................ 23
Triggering Live Update ......................................................................................................................................... 24
Enter Results ............................................................................................................................................................. 24

                                                                   MEETPRO 2.1.164 © 2020 DIRECTATHLETICS, INC. 2
Triggering Live Update Automatically – A.K.A. “Live Results” ............................................................ 24
XXIII. Multi-User (Networking) ................................................................................... 24
Seed Screen Locking .............................................................................................................................................. 24
Reports Only .............................................................................................................................................................. 24
XXIV. Records............................................................................................................. 25
Updating TFRRS Records ..................................................................................................................................... 25
Custom Records and Record Sets..................................................................................................................... 25
Customizing the Default Records Database ................................................................................................. 25
Synchronizing Custom Record Sets................................................................................................................. 26
Showing Record Breaks in Results .................................................................................................................. 26
Updating Broken Records ................................................................................................................................... 26
XXV. Field Event Web App Server ............................................................................... 26
XXVI. Troubleshooting ............................................................................................... 27
If MeetPro Runs Slow (Windows) .................................................................................................................... 27
Serial Devices ............................................................................................................................................................ 28
XXVII. Language and International Support ................................................................ 28
Languages ................................................................................................................................................................... 28
National Federations ............................................................................................................................................. 28
XXVIII. Wave Start Support for Cross Country (2020 Pandemic) .................................. 29
Calculate Net vs Time Trial ................................................................................................................................. 29
Waves Setup .............................................................................................................................................................. 29
Wave Assignment.................................................................................................................................................... 29
Wave Assignments In FAT Start Lists ............................................................................................................ 30
XXVIII. Document Changes ......................................................................................... 30




                                                                  MEETPRO 2.1.164 © 2020 DIRECTATHLETICS, INC. 3
I. Installation
MeetPro2 installers are available online at the following locations:

Windows: https://www.directathletics.com/meetpro2/MeetPro2Installer.exe

Mac:      https://www.directathletics.com/meetpro2/MeetPro2.dmg

Download the installer for your operating system and open the installer. You will be
prompted to install MeetPro. On Windows you may be prompted to allow Adobe Air to
modify your configuration. Click “Yes.”

MeetPro will launch after installation.


II. Licensing
MeetPro2 will prompt you to enter your license key if you have not done so. Enter the
license key provided to you by DirectAthletics.

Note: Each license key may be used on a limited number of computers. If you reach the
limit, you will have to de-activate your license on one of your computers to install
MeetPro on a new computer. To de-activate a license on a computer, open MeetPro, go
to the “MeetPro” menu and click “De-activate.”



III. Meet Database Basics
If you have never created a meet in MeetPro, MeetPro will open to a sample meet.
While this meet database is fully functional, you should create a new database for your
first meet.
                                               Note: A MeetPro meet database is a file
                                               ending in “.dab”. This is the only file format
                                               MeetPro uses to store meet data; there is no
Creating Your First Meet
                                               “backup” or “compressed” file format. To
To create a meet, go to the File menu and
                                               backup a MeetPro database, simply copy it
click “New.” There you will see the four
                                               (or use the “Save As” feature).
methods of file creation. Click “New
Meet” to create an empty meet. After you click “New Meet” you will be prompted to
enter the file name and location for this meet. The default location is a “MeetPro”
directory located in your Documents folder. Enter the file name of your meet with no
spaces or “.dab”. Next you will be prompted to enter the basic configuration of this
meet. Give your meet a name and date and configure your track type and size. You can
change any of these values later. Once you click “create”, your meet database is
created with the filename you chose. You can double-click this file to open MeetPro to
this meet.


                                  MEETPRO 2.1.164 © 2020 DIRECTATHLETICS, INC. 4
Tabs and Keyboard Shortcuts
The basic functionality of MeetPro is arranged into tabs. The tabs are Events, Teams,
Athletes, Relays, Seeding, and Enter Results. You can change tabs by clicking the tab
name. You can also move from one tab to another by pressing CTRL-TAB to advance to
the next tab and CTRL-SHIFT-TAB to go back to the previous tab. Additionally, there is
a keyboard shortcut for each tab:

   •   Events:        CTRL-E (⌘-E for Mac)
   •   Teams:         CTRL-T (⌘-T for Mac)
   •   Athletes:      CTRL-A (⌘-A for Mac)
   •   Relays:        CTRL-R (⌘-R for Mac)
   •   Seeding:       CTRL-S (⌘-S for Mac)
   •   Enter Results: CTRL-D (⌘-D for Mac)

Adding Events
Your new meet has no events. To add events, click the “Add New Event” button or type
CTRL-C (⌘-C for Mac) while on the Events tab. The “New Event” window will appear.
There are 4 types of events: Run, Field, Relay and Multi. Select your type of event. Enter
your other configuration data and click “Add”. Your event will be created, but the “Add
New Event” window will remain open. Notice that the gender has automatically
changed and the event number has increased. You are ready to add your next event.
When you have added all your events, click “Cancel.”

                                                 Note: CTRL-C (⌘-C for Mac) opens the
Adding Teams                                     “New” window for whatever tab is
 Your new meet has no teams. To add teams,       open. If the Events tab is open CTRL-C
first switch to the Teams tab by clicking        opens the New Event window, but if
“Teams” or using a keyboard shortcut. Now        the Athletes tab is open, CTRL-C will
click “Add New Team” or type CTRL-C (⌘-C         open the New Athlete window, etc.
for Mac.) The New Team window appears,
prompting you to enter a team name, short name and code. All three are required and
must be unique in this meet database. Importing entries uses the team code to match
athletes to teams. Score: By default the “score” checkbox is checked. If this team
should not be scored, uncheck this box.


Adding Athletes
Your new meet has no athletes. Open the Athletes tab and click “Add New Athlete” or
type CTRL-C (⌘-C for Mac.) The New Athlete window appears. Enter the athlete’s name
and school year, if any. Select the athlete’s team. If the athlete has no team, leave the
team selector to “Unattached.” The competitor number is automatically set to the next
available number. Enter any IDs for the athlete (DA, TFRRS, USATF, AAU).
You may also submit entries for this athlete. Check the boxes in the events in which this
athlete is entered. Enter seed marks into the “Marks” column and the name and date of


                                 MEETPRO 2.1.164 © 2020 DIRECTATHLETICS, INC. 5
the meet at which these marks were achieved into the “Note” and “Date” column. You
will be able to add more entries later.

Click “Add” to add this athlete.


IV. Working With Events, Teams and Athletes
Events
When the Events tab is open, you can modify an event by double-clicking it. Use the
gender and event type filters above the events grid to narrow the list of events. To
delete an event, click the red circle with the white “x” next to that event.

Sessions: A session is a group of event rounds in chronological order. Click “Edit
Sessions” to open the Sessions screen. Click “Add New Session” to create a session.
Select a session from the session list at the top of the screen and add event rounds to
that session by dragging them from the Events grid to the Schedule grid (double-
clicking an event in the Events grid will also add it to the bottom of the schedule). Once
you assign a round to a session you can add a time to it. To remove an event from a
session, double click the event in the Schedule grid. Close the Sessions screen by
clicking “Hide Sessions.”


Teams
When the Teams tab is open, you can modify a team by double-clicking it. To delete a
team, click the red circle next to the team.


Athletes
When the Athletes tab is open, you can modify an athlete by double-clicking the
athlete. To delete an athlete, click the red circle next to the athlete name.

One athlete is always selected. Click an athlete to select that athlete. The eligible
events for that athlete, with any entries for that athlete, appear below the athletes grid.
Here you can add, delete, and modify entries. The eligible events grid has a filter, “All”
or “Only Entered.” If Only Entered is selected you will see only events in which that
athlete is entered and will not be able to make new entries unless you switch back to
“All.”

Filters: Use the gender and team filter to narrow the list of athletes. Additionally, you
can search for an athlete by name or competitor number using the “athlete” filter.




                                   MEETPRO 2.1.164 © 2020 DIRECTATHLETICS, INC. 6
Divisions
Divisions in MeetPro can be used in two ways: Per Event and Per Team/Athlete. To use
divisions, click “Use Divisions” when creating a meet or in Meet Setup. Select “Per
Event”, “Per Team/Athlete,” or both. Setup your division names in “Divisions Setup."

Divisions Per Event: Divisions are assigned to events. Each event will have a division
and the division name for this event will appear in all reports and in Seeding, Enter
Results and Athlete screens. Entries will import into events based on division numbers
(the numbers corresponding to the division names in Division Setup). Assign divisions
to events in the Add Event and Edit Event screens.

Divisions Per Team/Athlete: Divisions are assigned to teams and athletes. Divisions
are assigned in the Add Team, Edit Team, Add Athlete and Edit Athlete screens. An
athlete by default uses the division of his/her team, so assigning divisions to athletes is
only necessary to distinguish the athlete from the rest of his/her team. Athletes of
multiple divisions can be entered in the same events and scored separately using “Score
by Division.”

Scoring by Division: In Scoring Setup, checking “Score by Division” will score each
division separately (in both division modes) and allow different scoring tables to by
used for each division.

Using Both Division Modes: If both “Per Event” and “Per Team/Athlete” are checked,
division 1 is reserved as an empty division and will be applied to events for which no
division is assigned.




V. Relay Entries
Open the Relays tab to manage relay entries. Relay events are listed on the top left
grid, one relay event is always selected. Click a relay event to change the selection.

The top middle grid shows relay entries for the selected event. One entry is always
selected. Click an entry to change the selection. You can modify the selected entry by
typing in the Mark, Note or Date fields (the Converted field updates automatically). To
delete an entry, double-click it.

To add a new entry to the selected event, double click a team from the list of teams at
the top right. The entry is created using the next available relay squad letter for that
team and no mark. Click the NT on the new entry to enter a mark. To add athletes to
your new entry, select the entry and double-click the athletes on the bottom left in the
appropriate order. You can re-order the relay athletes by dragging and dropping.
Double-click an athlete to remove the athlete from the relay.




                                  MEETPRO 2.1.164 © 2020 DIRECTATHLETICS, INC. 7
VI. Seeding
The Seeding tab lists every event round, except advancement rounds with no
advancers. Multiple event rounds may be selected; click an event round to toggle its
selection status. When you have selected the events you wish to seed, click “Seed
Selected.”

You will be prompted through the seeding process for each event in the order they
appear on the Seeding tab. The first prompt asks if you wish to pick break points. The
default is “no” for running events and “yes” for field events, hit ENTER to accept the
default. To turn off one or more prompts, click “Configure Prompts.”

       If you opted to pick break points, you will be prompted to select the breakpoints
       by clicking the checkbox next to the athletes who should be first in a new heat.
       Click “Apply” when finished.

       If you opted not to pick break points, you will be prompted to specify the
       number of heats (the minimum is suggested) and the lane randomization
       selection. Note that Heat Assignment, Heat Order, Lane Assignment, Number
       of Lanes and Rounds are all set in the Events tab.

       Auto Team-Split: When seeding an event using serpentine heat assignment, the
       auto team-split checkbox is available. When checked, athletes from the same
       team who would be assigned to the same heat are split up in accordance with
       NFHS Rule 5-6 Art.4. Checked by default for high school meets.

When an event is seeded you will be prompted to review the results of the seeding
process. On this screen you can drag and drop athletes (or relays) from one
lane/position to another. You can delete a seed by double-clicking the athlete/relay.
You can create new entries by dragging an athlete from the list of eligible athletes to an
empty lane or position. Use the “Add New Heat” and “Clear Empty Heats” buttons to
add and delete heats.

Click “Done” when you are finished reviewing the seeding for an event. If there is
another event selected, the seeding process will begin for that event.

Double-clicking a seeded event will bring up the seeding review screen.

Manual Seeding
To assign athletes to heats and lanes/positions without going through the seeding
process, double-click an unseeded event round on the Seeding tab. The seeding review
screen will appear. Before seeding you must add a heat to this round. Click “Add Heat.”
Add as many heats as desired. When seeding athletes this way the list of eligible
athletes shows only athletes entered in this event, by default. Drag an athlete from the
list of eligible/entered athletes to a desired lane/position. Repeat until the event is
seeded as desired.

Shortcuts:
                                 MEETPRO 2.1.164 © 2020 DIRECTATHLETICS, INC. 8
   •   Typing a competitor number in the “Comp #” column of an empty lane/position
       will seed that athlete in that lane/position.

   •   Use the “Add Athletes” button at the bottom of the seeding review screen to
       quickly add new athletes to the database.

Team Lanes
“Team Lanes” refers to the assignment of teams to specific lanes for the fastest
specified heats. Team Lanes are used in some high school jurisdictions.

Team Lanes functionality is available if a meet is of type High School and the “Enable
Team Lanes” checkbox is checked when creating the meet (or in the Meet • Setup
screen.)

To assign teams to lanes, go to Meet • Lanes Setup and click the “Team Lanes Setup”
button (this button will only appear if “Enable Team Lanes” is checked). In Team Lanes
Setup, assign a team to each lane in the two different team lane assignment schemes,
“A” and “B”. It is recommended you import entries before assigning teams to lanes.

When creating or editing a running event, a “Team Lanes” checkbox will appear next to
the “Run in Lanes:” checkbox when the “Run in Lanes:” box is checked (and team lanes
is enabled). Check the Team Lanes box to enable Team Lanes for this event. You will
then be able to designate which lane assignment scheme (“A” or “B”) to use and how
many heats to seed using team lanes.

When an event is configured to use Team Lanes, the designated number of heats will
be seeded using the designated Team Lane assignment scheme, and remaining heats
will be seeded using the regular seed configuration of that event.


VII. The Entry Pad
On both the Events and Seeding tabs, there is an “Entries” column displaying the
number of entries in an event or round. Clicking this number brings up the Entry Pad.
The Entry Pad lists all entries in an event (or round), allows the user to scratch or modify
existing entries as well as create new entries. Note that this feature duplicates
functionality existing in the Athletes, Relays and Seeding tabs.


VIII. Entering Track & Field Results
The top grid of the “Enter Results” tab shows event rounds with entries/advancers. One
event round is always selected. Click an event round to change the selection.

The bottom grid shows the entries/advancers in a particular heat/flight of the selected
event round. Use the ↑ and ↓ buttons to change the heat/flight selection. You may enter
results by typing them directly in the “Time” field of a particular entry. You may also
import results from FinishLynx or other FAT (Fully Automatic Timing) system.

                                  MEETPRO 2.1.164 © 2020 DIRECTATHLETICS, INC. 9
FinishLynx and Other FAT Systems
The connection to an FAT system, including FinishLynx, is configured using the
Interfaces menu. Go to Interfaces • F.A.T. • Setup to configure the FAT data directory.
Go to Interfaces • F.A.T. • Update Start Lists to write start list data to that directory.

To import results from FAT, click the Get Event Results button (above the entries grid in
Enter Results). If FAT results files matching the event and round are found, the results
data will be imported. MeetPro will import splits from FAT when available. To import
just the currently selected heat or flight, toggle the Get Event Results button to Get
Heat Results.

Auto-Import Results: Once the FAT interface has been setup, the “Start Auto-Import”
option in the FAT menu becomes available. Start auto-import to automatically import
results from FAT as results are added to FAT data directory.

Always Import Without Prompting: This option will import results, adding missing
athletes, teams and seeds, without bringing up the results preview window. When
using Auto-Import, this option will also create missing heats.

Match By Name: This option will not attempt to match FAT results to athletes in the
database using competitor numbers. Use this option when competitor numbers in
MeetPro do not match those in the FAT system.

Don’t Write Start Lists: If this option is checked, MeetPro will not write any data to the
FAT data directory.

Note: Configure FieldLynx support the same way you configured FAT. For field events,
Get Results will import data from FieldLynx.

Tie Breaking
By default MeetPro will automatically break ties when possible using tie breaking rules.
To turn off this behavior go to Meet • Scoring Setup and uncheck the box next to
“Break ties automatically.” To manually initiate automatic tie-breaking for an event,
click “JD Places” on the Enter Results screen and click “Auto-break Ties.”

Scoring
If the selected event is setup as “scored,” a “Score” button will appear in Enter Results
(if the event is already scored, the button will appear as “Re-Score.”) Click this button to
score the event. Click Re-Score to re-calculate the score. There is also a “Score” column
in the list of event rounds available in Enter Results. Checking/unchecking this box will
toggle the scored status of an event.


Complete: In addition to the “Scored” checkbox in the event rounds list, there is also a
“Complete” checkbox. Checking/unchecking this box will toggle the event round’s
“complete” status. The “complete” status of an event round is an optional filter criteria.
The only use of the “complete” checkbox is to later filter event rounds by “complete”
                                  MEETPRO 2.1.164 © 2020 DIRECTATHLETICS, INC. 10
status. This allows the printing of only results marked as “complete.” The “Complete”
checkbox can be completely ignored if desired.

Other Enter Results buttons:

List: Click “List” to display the results for this event, if any.

Seeding: You can open the seeding review screen for this event round by clicking the
Seeding button.

Advancement: For rounds other than Final, clicking “Advancement” will open the
advancement configuration screen.

JD Places: Click this to open a JD Places screen that will allow you to break ties.

Field Series: This button opens the field series results screen.


IX. Reports
PDF, HTML and Text Reports
MeetPro generates reports in PDF, HTML and Text formats. You must have a PDF
viewer such as Adobe Reader installed to view PDF reports. You must have a web
browser such as Chrome or FireFox installed to view HTML reports.

To generate a report, open the Reports menu and select the desired report. Most
reports have filtering options (some, like Statistics, do not). Reports are generated as
temporary files; use the “Save As” command in your PDF viewer or web browser to save
them for later use.

Custom HTML Reports
MeetPro uses the “MeetPro Report Templates” directory (in the user’s home directory)
to generate HTML reports, for all types of reports (reports, Upload to Web, S3, FTP,
Publish to Disk). Edit the HTML, CSS and JavaScript files in this directory to customize
your HTML reports. ALL images, CSS files and JavaScript files found in this directory
will be copied to the target folder.



Exporting Data
Use the File • Export menu to export data to an Excel or CSV file. You must have Excel
installed to view Excel files.

Barcodes and Labels
The “Labels” menu contains two special reports, Competitor Labels and Entry Labels.
Both of these reports allow selection of a specific label format (such as Avery 5160) and
barcode format for competitor number barcodes (typically CODE39).

                                    MEETPRO 2.1.164 © 2020 DIRECTATHLETICS, INC. 11
HTML Reports Templates
HTML reports are easily customized by editing the included css file (style.css) or the
html files. Edit the files in your ~/Documents/MeetPro Report Templates directory to
modify HTML results. To return to the default reports, delete the files in this directory.


X. DirectAthletics Integration
Create a Meet From DirectAthletics
You can create a MeetPro database from a meet in your DirectAthletics administrator
account. It doesn’t matter if the meet is in the past or the future. Go to File • New •
Create From DA. You will be prompted to login to your DirectAthletics account. Once
you are logged in you will be prompted to select a meet from your account. Only track
& field meets with events are listed. When you select a meet, you will be prompted to
enter a name and location for this new database. Next, you will be prompted to enter
the basic meet data for this meet. Note that the Season Type (Outdoors/Indoors/XC)
selection is unavailable, as this will be determined by the data from DirectAthletics.
Your new meet will have events and divisions corresponding to the events and divisions
in the DirectAthletics meet.

Import Entries From DirectAthletics
To import entries from DirectAthletics, go to File • Import • From DirectAthletics. You
will be prompted to login if you are not already logged in. Then you will be prompted to
select a meet with entries. Once you select a meet, your entries will download from
DirectAthletics and import into your MeetPro database. Any conflicts or missing events
will be displayed in a PDF report.


Exporting Results to DirectAthletics
Select the DirectAthletics menu. If “Upload Results” is available, click that. If it is not
available, you must first click “Login”, then “Upload Results.” You will be prompted to
select a meet to upload to. Select a meet and your results will be uploaded to that meet
on DirectAthletics.


XI. Cross Country
Creating a Cross Country Meet
To create a Cross Country meet, select “XC” instead of Indoor or Outdoor in meet
creation.

Creating and Editing Cross Country Events
Click “Add Event” to create a cross country event. Double-click on an event in the
Events tab to edit the event. Enter a distance in meters, yards or miles.


                                  MEETPRO 2.1.164 © 2020 DIRECTATHLETICS, INC. 12
Ghost Scoring
Ghost Scoring scores incomplete teams as if each missing scorer finished behind the
last place finisher. Example: In an event where 5 score, with 100 finishers, a team with
only 4 finishers will have a fifth score of 101.

Splits and Split Scoring
If splits are being captured, MeetPro can display splits in results reports and show split
scores on scoreboards. To add split points to an event, when adding or editing an event,
click the “Splits” button on the add/edit screen. Enter the distance and name of the split
(i.e. “1.4km”, “First Loop”) and click “Add Split.” Add every split point in this manner
and click Save.

To import splits from FinishLynx/Ipico, setup FinishLynx normally. Instead of waiting
until the end of the race to click “Import Results From Lynx,” go to Enter Results, select
your event and click “Start Splits Auto-Puller.” This will retrieve splits (and final results)
every 1.5 seconds and update the split scores for full teams that have crossed the split
point. Open the Split Scores monitor to view split scores in real time.

To display split scores on a scoreboard, go to Interfaces • Daktronics. Check the Split
Scores box and configure the split scores data columns and other settings (see the
Daktronics section of this document) and click “Start.”

Split Scoring Web Scoreboard
The Split Scoring Web Scoreboard is a website that automatically (via JavaScript)
updates split scores as split data is received by MeetPro. On the setup screen for S3,
FTP or Publish to Disk, change “Mode” from Results to Splits Scoreboard and click
OK. Setup Live Update to publish (to either S3, FTP, ResulTV or Publish to Disk)
whenever results are updated. As split scores are calculated the JavaScript data
source will be updated and the web scoreboard will change.


NCAA Tie-Breaking
Check “NCAA Tie Breaking” on the Add Event or Edit Event screen to use NCAA Tie-
breaking ("8-6.3d) Ties in team scoring shall be broken by comparing the place finish of
the five scoring members of the tied teams. The team with the majority of winning
places shall be awarded the higher place."). Default tie-breaking uses the first displacer
to break ties.



Entering Cross Country Results Manually
To enter cross country results manually, click the “Enter Results” tab. Competitor
numbers and times can be added in any order.

To enter competitor numbers, click the “Comp #” column of a results row and type in
an competitor number. If this number corresponds to an athlete in the database, the

                                   MEETPRO 2.1.164 © 2020 DIRECTATHLETICS, INC. 13
athlete name, year and team will appear when you press Enter. Pressing Enter will take
you to the Comp # field of the next row. To create a results row with no athlete, enter
“0” (zero) as the competitor number.

To enter times, click the “Time” column of a results row and enter a time. Times can be
entered in any row, even if no competitor number has been entered. When a time is
entered that result will be immediately sorted according to the finishing time.

To delete a result, double click the result.

To insert a result between two existing result rows:

If the results have times, enter the new result at the bottom of the results grid. The
times will be sorted automatically.

If the results do no have times, highlight the result that should have new results above
it. Click the “Insert” button at the bottom right and a new empty result row will be
inserted above the highlighted row.

Dual Scoring
To score an event with more than two teams as a “double-dual” event, select “Double
Dual” as the Score Type in Edit Event or Add Event. Re-score the event if it has already
been scored in Normal mode. Dual scores will now appear in results and in the Dual
Scores report for this event.

Divisions
There are two division modes for cross country: “By Event” and “By Team/Athlete.”

Division By Event:
When there are multiple events with the same gender and distance (e.g. two Boy’s 5k
events), divisions must be applied to each event so that the two events can be
distinguished when importing entries from DirectAthletics.com or other online entry
service. This is “Divisions by Event.” So if there are two Boys 5k’s, one will be Division 1
and one will be Division 2. (You can rename divisions in Meet • Division Setup).


Divisions By Team/Athlete:
Sometimes you will want to score teams separately even though they are in the same
race. For example, you would use Divisions by Team/Athlete if you have two classes of
teams, Class A and Class B, and you wish to run them together in the same race but
score a Class A championship and a Class B championship. To do this, setup the meet to
use “Divisions per Team/Athlete.” Then setup the event to score “By Team/Athlete
Division.”

Next, you must assign teams to divisions. Edit each team (go to the Teams tab and
double-click a team to edit it) and select a division to assign it to. You can rename


                                   MEETPRO 2.1.164 © 2020 DIRECTATHLETICS, INC. 14
divisions in Meet • Division Setup, i.e. you can rename “Division 1” to “Class A” and
“Division 2” to “Class B.”

You can also assign athletes to divisions. An athlete is assumed to be in the division of
his/her team unless the athlete has a division specifically assigned to him/her.

Note: Using Divisions by Team/Athlete is an atypical use. Enabling it when it is not
needed will cause scoring errors.

FinishLynx
To import results from FinishLynx, first setup the Lynx directories using the same
procedure as for track & field. Then, in Enter Results, click “Get Results From Lynx.”
Results files matching the event number of the selected event (and round 1, heat 1) will
appear in the Import Results preview screen. Click “Import” to import results.

Alternatively, toggle the “Get Results From Lynx” button to “Get Results From Lynx
File” and select the .LIF results file you wish to import. This method requires no setup or
event number matching.

Ipico Chip Timing
To import results from an Ipico Reader, go to Interfaces • Ipico • Setup.

For each reader, enter the IP and port of the reader. Select an event target (either a
split point or “Finish”) and click “Start Reading.” Enter the Gun Time as a time of day
(hours:minutes:seconds). When this reader transmits times its data will be imported
into the target.

To add an additional reader, click “Add Reader” and enter this reader’s information.

Note: Chip IDs must match one of the “Chip” fields in add/edit athletes. To import a
bib/chip matching file, go to Interfaces • Ipico • Match Bibs/Chips. Bib/Chips files are
CSV files with bib numbers in the first column and chip IDs in the second.

MyLaps
To import results from the MyLaps Toolkit, go to Interfaces• MYLAPS • Interface.
Select the athlete field to match bibtags to (Comp # or Chip). Enter the IP address and
port on which you wish to run the server – this must be an IP address configured for this
computer (a default is provided) and a port MeetPro has permission to access (should
be greater than 1024. The MyLaps default is 3097). When ready, click “Start Serving.”

In the Mylaps Toolkit, add a TCP/IP exporter and set it to use the IP and port to the
values used above. Also set it to “Export Markers.” Connect to this exporter. When
connected successfully the exporter will display “MeetPro at …”

Click the TCP/IP exporter. Checkboxes will appear next to each location. Check each
location you wish to export times from (one of the locations should be the finish line!).
Check the start location if you wish to export the Gunshot time.

                                  MEETPRO 2.1.164 © 2020 DIRECTATHLETICS, INC. 15
On the TCP/IP exporter, select “Prepare settings” for each of these locations. This will
send the location name to the MeetPro MyLaps interface. There you must associate
each location with a split point or an event’s finish point. MeetPro will only import results
for locations associated with a split point or finish point in the MeetPro MyLaps interface.

If the Gunshot time does not appear in MeetPro after the race has started, in MyLaps
Toolkit highlight the Start location, selection Markers and select “Rewind all markers.”
You can also enter the gun time manually in the MeetPro Mylaps interface.

Click the “play” button next to location file you wish to export from. Click the “rewind”
icon to send all data from a location to MeetPro.

The MeetPro Mylaps interface will display all data received, and indicate when a result
has been successfully matched to an athlete and imported. The split scores monitor will
update as split results are received.

ChronoTrack
To import results from ChronoTrack SimpleClient, go to Interfaces• ChronoTrack •
Interface. Enter an IP Address (or hostname) and Port and click “Start Server.” The
default IP and Port should be correct.

In Simple Client, select an unused connection in the Direct Socket Out menu and enter
the IP and port of the MeetPro server (configured above) and click “OK”. SimpleClient
will immediately connect to MeetPro and report its available locations.

On the MeetPro ChronoTrack screen you will now see available locations on the bottom
right. Select a target event (or split) for each location you wish to read from. Click “Start
Streaming” on each location you wish to use. ChronoTrack will now send results to
MeetPro as they are received. You can also send all results at once from SimpleClient
after the race ends. Results that match a bib# and event/split target will be imported.

If gun times are received from ChronoTrack they will be subtracted from results before
importing. You may also manually enter a gun time on the MeetPro ChronoTrack
screen.

Time Machine
Time Machine Setup: In RS232 settings, make sure Bits is set to 8, Parity is set to
NONE, Xoff is OFF and Handshake (HS) is OFF.

MeetPro Setup: Go to Interfaces Time Machine • Setup to configure your Time
Machine Interface. Select the Com Port (on Windows this likely COM3, on Mac this will
be /dev/cu.KeySerial1) and baud. The baud setting should match the setting on your
Time Machine.




                                  MEETPRO 2.1.164 © 2020 DIRECTATHLETICS, INC. 16
                                                  Note: See the Troubleshooting: Serial
Importing Times: Make sure Time Machine           Devices section for important
is on and the MeetPro computer is connected       information on using serial devices (Time
to the RS232 port. Go to Enter Results and        Machine, NK2000xc) with computers
toggle the “Get Results From Lynx” button to      that do not have a serial port.
“Get Times from Time Machine.” Select the
event to import times into. Click “Get Times from Time Machine.” MeetPro will send a
RETRANSMIT request to Time Machine and retrieve all times. If multiple events are
available, you will be prompted to select an event. The times will appear in the Import
Times preview window. Click “Import” to import the times into the results.



NK Interval 2000xc
MeetPro can import times from the NK Interval 2000xc watch via the serial interface
accessory available from NK (www.nkhome.com).. Go to Interfaces • Interval 2000xc •
Setup. Select a communications port (on Windows this is likely COM3, on Mac this will
be /dev/cu.KeySerial1).

Go to the Enter Results tab and the event to import times into. Enter competitor
numbers or “0” (zero) for each result to import times to. Go to Enter Results and toggle
the “Get Results From Lynx” button to “Get Times from Interval 2000xc,” and click the
button. Wait while MeetPro contacts your watch and times are received. The times will
appear in the Import Times preview window. Click “Import” to import the times into the
results.

Sprint 8
To import times from Sprint 8 after entering/scanning bib #’s of finishers in order in
Enter Results:

Connect the MeetPro computer to the Sprint 8 via a serial connection to the Sprint 8
data port (top left port). For Macs or other computers without serial ports, see the
appendix on USB-to-serial converters.

Go to Interfaces • Sprint 8 • Setup. Select a communications port (on Windows this is
likely COM3, on Mac this will be /dev/cu.KeySerial1).

Go to the Enter Results Tab. Toggle the “Get Results” multi-function button to “Get
times from Sprint 8” and click the button. You will be prompted to begin transmission
from the Sprint 8. On the Sprint 8 startup screen, select your sport (1 for track, 2 for
Road Race) and then click 2 to begin transmission.

After times are retrieved you will be prompted to select a segment of times to import.
Select a segment and click “Import.” The times will be added to the existing results.



                                 MEETPRO 2.1.164 © 2020 DIRECTATHLETICS, INC. 17
Barcode Scanners
Barcode scanners are recognized as keyboard input devices. To enter competitor
numbers from barcodes into results, go to the “Enter   Barcode Scanner Tip: For
Results” tab, select an event and click the first box  best results use a
under the “Comp. #” column. Once the cursor is in the transmission speed of 20
competitor number column, scan the first barcode.      milliseconds or more.
The competitor number will be placed in the box and
the cursor will move down to the next row. Repeat for
all barcodes.

Qualifier/Advancement Symbols
To add symbols to results for teams or individual athletes qualifying for the next level of
competition, go to the Meet menu and select Qualifying Setup. On the Qualifying
Setup screen, set the number of teams that will automatically qualify (i.e. top 2 teams
per event). Enter an appropriate symbol (“TM”, “*”). Enter the number of “At-Large”
teams that will qualify – at large teams are the next fastest teams in the entire meet,
using combined times of a team’s scoring 5. Only use At-Large teams if all events for a
single gender are competed on the same course/distance. Enter a symbol for the at-
large teams.

Configure individual athlete qualifiers the same way as team qualifiers. The “Exclude
Team Qualifiers” checkbox, checked by default, ignores athletes already on a qualifying
team for individual qualification consideration.




XII. TFRRS
Use the TFRRS menu to import TFRRS                Note: Go to
rosters to MeetPro and export results to          http://www.tfrrs.org/director_info.html
TFRRS. Before using the commands below,           to create a TFRRS director account.
you must first login to a TFRRS director
account. Login by going to TFRRS • Login.

Import Rosters From TFRRS
To import rosters from TFRRS, click TFRRS • Import Rosters. Then select a meet from
the list of your TFRRS meets.

Upload Results to TFRRS
To upload results to TFRRS, click TFRRS • Upload Results. Then select the meet to
upload to. Alternatively, a TFRRS CSV file can be generated by clicking File • Export •
Results and selecting “TFRRS CSV.”




                                  MEETPRO 2.1.164 © 2020 DIRECTATHLETICS, INC. 18
XIII. Importing Data
From Another MeetPro Database
MeetPro can import data from other MeetPro databases. To import from another
database file, click File • From Another Database. Select a MeetPro database on your
computer (not the currently opened database) and click OK. Select the data to enter
(athletes, teams, entries, events, results) and click Import.

Semi-Colon Delimited Format
MeetPro can import entries from the common Semi-Colon Delimited import file used
by Hy-Tek and all online entry websites. To import a Semi-Colon file, click File • Import
• Hy-Tek Semi-Colon Delimited File. Find the file on your computer and click OK.



XIV. Creating Meets From Hy-Tek Events Files
To create a meet from a Hy-Tek events file (.ev1), go to File • New • Create From EV1
File. Select an ev1 file. Next, enter a file name and location for the new meet database.
Next, enter the basic information of the meet and click “Create.” The new meet will
have the events and divisions from the ev1 file.


XV. Templates
A template is a model database used as a basis for new MeetPro databases. MeetPro
comes installed with several templates. To create a meet from a template, go to to File
• New • Create From Template. Select a file name and location, then enter the name
and date of the meet. Your meet database will be created with the events, divisions and
other settings from the template.

Creating Templates: You can create a template from any meet. Select File • Create
Template to create a template of the currently open meet database.


XVI. Upload To Web
The “Upload To Web” feature provides the ability to instantly upload results to
http://results.tfmeetpro.com. To upload results, go to Interfaces • Upload To Web •
Setup. Enter a folder name for this meet. The folder name should be unique for the
meet. If folder names are re-used, data will be overwritten. Click “OK” and results will
be uploaded.

Data is uploaded to a folder corresponding to the license associated with MeetPro, so if
MeetPro is licensed to “Acme Timing” and the folder name entered is “SmithInvite”,
results will be uploaded into a folder at
http://results.tfmeetpro.com/Acme_Timing/SmithInvite.


                                  MEETPRO 2.1.164 © 2020 DIRECTATHLETICS, INC. 19
After the initial upload, go to Interfaces • Upload To Web • Publish to re-upload results
data to the web.


XVII. Upload To Amazon S3
Amazon Simple Storage Service (Amazon S3) is a simple data storage infrastructure.
The S3 Upload feature instantly uploads results to the web via S3. Web pages can be
updated at any time.

S3 Account Creation
To use S3 Upload, you must have an S3 account. To create an S3 account, go to
http://aws.amazon.com/s3.

S3 Buckets
S3 uses the concept of storage buckets. To use S3 Upload, you must first create a
bucket for this meet. The meet name is a good name for the bucket. In order for
uploaded data to be available as a web site, the bucket must have the “website” feature
enabled (checked). Additionally, the “Index Document” must be set to “index.html”.

Uploading Results to the Web                      S3 Buckets must have “website”
Once your S3 account is setup and you have        enabled and have an Index Document
created a storage bucket for the meet, go to      of “index.html”.
Interfaces • S3 Upload • Setup. Enter your
Amazon Web Services Access Key and Secret Key where indicated. Once you enter
these values, your buckets will appear in the “Buckets” dropdown list. Select the bucket
you wish to upload to and click “OK”. A results website will be created in the selected
bucket.

Updating Results
Once you upload results for the first time, the “Update” menu item will become
available (Interfaces • S3 Upload • Update). Select Update and updated results will be
uploaded to the storage bucket. No additional setup is required.

DNS and CNAMEs
If your bucket is called “MyBucket”, the results website will be available at
http://MyBucket.s3-website-us-east-1.amazonaws.com. However, you can customize
this using a DNS CNAME record. If you have a domain “mytimingco.com,” you can
create a CNAME record pointing MyMeet.mytimingco.com to MyBucket.s3-website-
us-east-1.amazonaws.com. Using this method you can create a unique subdomain URL
for each meet you use with S3 Upload. Contact your DNS provider for information on
how to create a CNAME record.

Customizing Results
By default MeetPro uploads a CSS file named “style.css” with HTML data. By editing
this file you can customize the style and layout of uploaded results. You can edit the

                                 MEETPRO 2.1.164 © 2020 DIRECTATHLETICS, INC. 20
uploaded document in your S3 account or edit the document in the assets/docs folder
of the MeetPro application directory.


XVIII. FTP Upload
Results can also be uploaded via FTP. Go to Interfaces • FTP Upload • Setup and enter
your FTP host, username, and password and target directory. HTML results will be
uploaded when you first enter your account information. Once logged in, go to
Interfaces • FTP Upload • Publish to re-upload results.

The HTML results uploaded via FTP are identical to the results uploaded via S3. You can
customize the CSS file in the same manner.


XIX. Publish To Disk
Results, Start Lists and Performance Lists can be published to a local directory rather
than to a remote location. This is useful for users who prefer to use their own FTP
program or other file sharing application (DropBox, etc.). To open the Publish To Disk
setup screen Go to Interfaces • Publish To Disk • Setup. Once configured, go to to
Interfaces • Publish To Disk • Publish to re-publish.


XX. ResulTV Interface
ResulTV Data Source Configuration
Configure a ResulTV data source using HyTek.rss (included with ResulTV. MeetPro.rss
may also be available. Both files are identical).

Open MeetPro’s ResulTV Interface screen by going to Interfaces • Scoreboards •
ResulTV. Select the Communication Mode of your data source (TCP, UDP,or Serial) and
enter the IP and Port or COM port of ResulTV. If using a serial connection, make sure
baud rate is correct.

Rows: Set the number of data rows for your display frame.

Max pages per event: Set the number of pages (or zero for all) to display per event.

Delay: The delay, in seconds, between pages.

Hot Keys: MeetPro can send data to ResulTV from the Enter Results screen using the
following key combinations:

   •   CTRL-F10: Start lists for the current heat
   •   CTRL-F11: Results for the current heat
   •   CTRL-F12: Results for entire round of current heat



                                 MEETPRO 2.1.164 © 2020 DIRECTATHLETICS, INC. 21
Script Settings: MeetPro can send data to ResulTV using a selection of data configured
in Script Setup. Select one or more data type of Team Scores, Results, and Start Lists.
Filter events using filters. If Results is selected, further filter results as desired using
Results Setup. Click “Start” to begin sending selected data to ResulTV.

Track & Field
Check one or more data sources:

Team Scores: Team Scores may be filtered by Gender. Enter a title or division name (if
not provided, defaults will be used).

Results and Start Lists:

Events may be filtered by Gender, Type and Status. A single event may also be
selected. If “Rounds” is set to “All”, every round with results (or seeding, for Start Lists)
will be sent. If “Rounds” is set to Single, select the specific round to be sent.

Select “Compiled” to send all results for a round in one table, ordered by place. Select
“Heat-by-Heat” to send each heat in a separate table.



Cross Country
Select Team Scores or Results. Select any filters and click Start.


XXI. Daktronics Scoreboard Interface
Open the Daktronics Scoreboard Interface window by going to Interfaces •
Scoreboards • Daktronics. All the options for the Daktronics interface are on this
window, and this window must remain open while the data feed to the scoreboard is
running.

Board Setup
This interface uses the Daktronics RTD and connects to scoreboards via Serial a Serial
or Network connection. The Network connection uses either UDP or TCP/IP (default
UDP).

Serial Connection
Select “Serial” as the network type and select the COM port used by your Daktronics
connection. Select the appropriate baud rate.

Network Connection
Select “Network” as the network type. Enter the IP address and port of your Daktronics
RTD system in the lower left corner of the Daktronics window.




                                   MEETPRO 2.1.164 © 2020 DIRECTATHLETICS, INC. 22
Preview
If you wish to preview the data that will be output without sending data to the board,
check the “Preview” checkbox.

Template File
A template file (MeetPro.itf) is provided for use with Daktronics scoreboards. Click the
link on the Daktronics Setup window to download the template file.

Board Setup
Select the height and width and the delay between pages. Check “loop” to return to the
beginning after the last page.

Data Setup
The top left portion of the window contains the data options. The interface can send
three types of data: Team scores, start lists and results. Check the boxes next to one or
more data types. If “Results” is checked, the options below the checkboxes configure
which event results will be displayed. The number of pages allows you to limit the
number of pages per heat/round. The filters let you limit the events shown.

To the right of the data filters are the result columns. The checked columns will be
included in results. Make sure the columns you select will fit within the width of your
board.

Starting and Stopping the Feed
When you have finished configuring the interface, click the “Start” button to begin
feeding data to the board (or, if Preview is clicked, to begin previewing data). Data will
appear in the “Monitor” window as it is sent to the board.

When you wish to stop the data feed, click “Stop.” If you change the configuration, you
must stop and re-start the feed for the change to take effect.


XXII. Live Update
Live Update provides a fast and easy way to publish results, heat sheets and/or
performances from a hot key (CTRL-D for Windows, ⌘-D for Mac) or by clicking the
“Live Update” button on the Enter Results screen.

Live Update can be configured to trigger publishing via S3, FTP, Daktronics, ResulTV,
Upload to Web and Publish to Disk.

To configure Live Update go to Interfaces • Live Update • Setup. Select one or more
interfaces to be triggered by Live Update. Each selected interface must be configured
prior to triggering Live Update.




                                  MEETPRO 2.1.164 © 2020 DIRECTATHLETICS, INC. 23
Triggering Live Update
If Live Update is configured, use the hot key combo key (CTRL-D for Windows, ⌘-D for
Mac) or go to Interfaces • Live Update • Update Now to trigger publishing on all
selected interfaces.

Enter Results
If Live Update is configured, the “Live Update” button will appear on the Enter Results
screen. Clicking this button will update the results for just the selected event across all
Live Update interfaces.

Triggering Live Update Automatically – A.K.A. “Live Results”
Live Update can be configured to automatically trigger when results are modified,
when events are scored or when an event is marked as complete. Select one or more of
these options in the “Auto Update” section of the Live Update Setup screen to
automatically trigger Live Update.


XXIII. Multi-User (Networking)
Sharing the same database with multiple instances of MeetPro2 requires MeetPro
Server. To connect to a database served by MeetPro Server:

1) Confirm that MeetPro Server is running and is serving the desired database.

2) Identify the server computer’s IP or hostname (use “localhost” if same computer as
MeetPro2).

3) Select “Connect to Server” in the “Multi-User” menu. Enter the IP address or
hostname, select a clerk account and enter the password and click Login. On the next
screen, select a database and click “Connect.”

4) MeetPro2 will disappear and re-appear with a connection to the shared database.
There may be a delay.

Once connected, most MeetPro2 features are available for use on the shared database.
The bottom of the screen will notify you of actions by other users that affect the
database.

Seed Screen Locking
In multi-user mode, opening a Manage Seeding screen or otherwise doing any seeding
operation locks that event and round for all other users and they will be prevented from
doing any seeding operation on that event and round until the lock is released.

Reports Only
If your clerk account has been designated as “Reports Only” you will not be able to
affect the shared database, but all reporting options, including web publishing (FTP,
etc.) will be available.


                                  MEETPRO 2.1.164 © 2020 DIRECTATHLETICS, INC. 24
XXIV. Records
Records can be displayed in Results, Heat Sheets, Score Sheets and Performance Lists.
To configure Records, go to the Records menu and select Setup.

Records are stored per-meet database. When you create a new meet database, records
are copied to it from the default_records.dab file in your MeetPro directory.

By default every MeetPro database includes several built-in Record Sets. To display the
results of a particular record set in reports, click the “Display” checkbox for that record
set, then click what record fields to display (performance is always displayed). Then
when running a report, clicking “Include Records” will cause all of the record sets with
“Display” checked to appear in that report (if the Record Set contains records for events
in that report).

Updating TFRRS Records
The built-in records included in every MeetPro database are drawn from the TFRRS
records database. Selecting Records • Sync will update your TFRRS records with any
updates. By default, MeetPro checks for updated records any time you open a
database. This can be turned off in Preferences.

Custom Records and Record Sets
To create your own record set, go to Records • Setup and click Add Record Set. Enter
the information for your record set. The “level” of a Record Set is important for sorting
(record sets are sorted as follows: World, Olympic, National, College, Junior College,
High School, Association, Conference, Championship, Standard, Facility, Team).

To add a record to a record set, select the record set on the Records Setup screen and
click Add New Record (not Add New Record Set). To edit a record, select a record set
and then double click on the desired record.

Records can also be imported from another database or a TCL records file. Select
Records • Import to import records from an outside source.

Customizing the Default Records Database
When a new MeetPro database is created it copies records from the default records
database (“default_records.dab”). To save the records of the current database as the
default records database:

   1) Select Records • Save As Default Records
   2) Click “OK” on the confirmation window

This will overwrite the default records with your custom records. When you records are
updated from online data sources (TFRRS or your custom distributed set), your default
records database will be updated unless you specify not to.



                                  MEETPRO 2.1.164 © 2020 DIRECTATHLETICS, INC. 25
Synchronizing Custom Record Sets
Changes to record sets only apply to the currently open database. If they are saved as
the default records database, they will be included in new databases. To automatically
synchronize changes to a record set across multiple databases (and other MeetPro
computers), you must use the Synchronization feature.

To synchronize a record set, give it a file name. Filenames are unique per MeetPro
license. If you enter a filename of “team_bests,” any record set configured with that
filename, and using your license, will automatically sync with this record set.

If a filename has been configured for a record set, an “Upload Records” button will
appear when that record set is selected in Records Setup. Clicking this button will
upload the records in your database for this recordset to the records server. All other
MeetPro databases configured with this record set will get the changes when they
synchronize (by default, when the database is opened).

You can also use another MeetPro user’s record sets by configuring a record set with
that user’s license folder name and file name. You cannot upload records to another
user’s record set.



Showing Record Breaks in Results
MeetPro can show a symbol when a result breaks a record. To configuring record
breaks:

1) When adding or editing a Record Set, enter a symbol in the “New Record Flag” field
(i.e. “W” for world record). In Records Setup, make sure this record set is set to Display.

2) Run a results report (PDF, text, or any HTML or web publishing option). Check the
“Records” checkbox. Any result that breaks a record in a displayed record set will show
that record set’s New Record Flag. If a result breaks multiple record, the flag for the
better record is shown.

Updating Broken Records
To update your records with any record breaks achieved in the current database, go to
the Records menu and select “Update Record Breaks.” Any new records for displayed
record sets will be available for updating. To prevent a record set from being updated
with broken records, check this “Is standard?” box.


XXV. Field Event Web App Server
The Field Event Web App Server is a server that runs in MeetPro. The server
provides a web app that allows field event results to be entered via iPhone, Android
phone or computer using any HTML5-compliant web browser (Chrome is
recommended).


                                  MEETPRO 2.1.164 © 2020 DIRECTATHLETICS, INC. 26
The server should be started after field events are seeded. To start the server, first
configure the server by going to Interfaces • Field Event Web App Server • Setup.
Select your IP address, port and password. The IP address should be your computer’s
address on your local network. Your computer must be on a network and the network
must allow traffic between peer computers (not all networks allow this). A standard
home router will allow traffic between your computer and iPhone or other device. Once
the server is configured, start the server by going to to Interfaces • Field Event Web
App Server • Start.

To load the Web App on your device (iPhone, etc.), open the device’s web browser and
enter the configured IP and port as the URL. For example, if the configured IP and port
are 192.168.1.100 and 5252, you should point your browser to
http://192.168.1.100:5252.

After the web app is loaded onto your device’s web browser you (or your field event
official) will be prompted to enter the password. After successfully entering the
password the app will show the home screen. Select a seeded field event from the
Events menu. After the event is loaded results can be entered. Click “Update” to send
results from the device to MeetPro. Click “Refresh” to re-download event and seeding
information from MeetPro.

Network Outages: The Web App uses HTML5 technology to store results, teams,
athletes and seeding information on your device’s web browser. If there is an
interruption in the connection between the device and MeetPro, or if the device’s web
browser is closed or the web app is closed on the browser, data is still retained on the
device and will be available when the web app is reopened. If the connection is severed
but the web app is still open, continue updating results on the web app and click
“Update” when the connection is restored to upload results data to MeetPro.




XXVI. Troubleshooting
If MeetPro Runs Slow (Windows)
If MeetPro becomes sluggish it may be necessary to change its priority using the
Windows Task Manager.

To open Task Manager, hit CTRL-ALT-DELETE and select “Open Task Manager” when
prompted. In Task Manager, click the “Processes” tab. Find the MeetPro process (it may
have an “Image Name” of “MeetPro.exe*32”) and right click that process. In the
context menu that pops up, go to the “Set Priority” submenu and select “Realtime” as
the priority for MeetPro.




                                 MEETPRO 2.1.164 © 2020 DIRECTATHLETICS, INC. 27
Serial Devices
Many newer computers, especially laptops, do not come with the necessary drivers to
connect to serial devices. For computers with no serial ports, a USB to Serial adapter is
required.

Mac

The recommended USB to Serial Adapter is the Keyspan USA-19HS from Tripp Lite.
You must install the Keyspan drivers using the included software. The Gigaware USB-A
to Serial cable will not work with Mac OS X.

Windows

Newer Windows machines do not include the necessary serial driver (phtheadgc2.dll).

To install the driver, download it here: https://code.google.com/p/as3-arduino-
connector/downloads/detail?name=pthreadGC2.zip&can=2&q=

Unzip the download and copy it to the correct location:

   •   Windows XP(32/64), Windows Vista(32), Windows 7(32): C:\Windows\System32\
   •   Windows Vista(64), Windows 7(64): C:\Windows\SysWOW64\



XXVII. Language and International Support
Languages
MeetPro uses the system language and region to determine language, character set
and locale settings (date and time format). MeetPro currently supports the following
languages and locales:

   •   English (USA)
   •   Greek (Greece)

Contact meetpro@directathletics.com to have your language or locale added.

National Federations
The default label for the national federation ID is USATF. This can be changed in
Preferences.




                                 MEETPRO 2.1.164 © 2020 DIRECTATHLETICS, INC. 28
XXVIII. Wave Start Support for Cross Country (2020 Pandemic)
Although comparing times of athletes who did not race head-to-head is normally
anathema to cross country, it may be necessary during the COVID-19 pandemic of
2020. Many jurisdictions are considering (as of June 2020) requiring wave starts for
cross country for the fall of 2020 as a way to reduce the risk of virus transmission.

To use wave start functionality for an event, check the “Use Wave Starts” checkbox on
the Add event or Edit event screen (when a cross country meet database is open).

Note: Wave Start functionality is not available in the 30 day trial. A license is
required.

Calculate Net vs Time Trial
There are two ways to use MeetPro Wave Starts. When the “Use Wave Starts”
checkbox is clicked, the “Calculate Net Times” appears. If Calculate Net Times is
checked, MeetPro will calculate net times when importing results by subtracting the
wave start offsets from the times. If Calculate Net Times is not checked, MeetPro will
assume that times imported are net times (as they will be if the Lynx Time Trial Plugin
is used).

Waves Setup
If an event is configured to use Wave Starts, the “Waves” button is present at the top
right of the Add Event and Edit Event screens. Clicking this will open the Waves Setup
sub-screen. Add or edit the waves needed for the event. The Start Offset is the time
that will be subtracted from the finish time for all athletes in that wave. Start Offset is
not a time of day, it is an offset, i.e., if the Start Offset is 03:00.00, three minutes will be
subtracted from the finish times of all results in that wave. (If Calculate Net Times is not
checked for the event, Start Offset does not affect results but may be useful for
organization).

Wave Assignment
There are three ways to assign waves to athletes:

Teams: If entire teams will be in the same wave, it is easy to assign a team to a wave.
On the Events tab, any event configured to use Wave Starts will have a Wave
Assignment link. Clicking this link will open the Team Wave Assignment screen. Use the
dropdowns to assign teams to waves for this event. (A team can have different wave
assignments for each event).

Athletes: Selecting an athlete In the Athletes tab will bring up a grid of that athlete’s
entries. For events will Wave Starts, a dropdown of wave assignments is available. Use
the dropdown to assign an athlete to a wave. An athlete wave assignment overrides a
team wave assignment.

                                    MEETPRO 2.1.164 © 2020 DIRECTATHLETICS, INC. 29
Custom CSV Import: Wave assignments can be imported when importing entries via
the Custom CSV Import feature. Select the “Wave” option above the column
representing the wave number for that entry (not wave name!). The “Entries” checkbox
must be checked and the row must match an event in order to import a wave. Imported
waves are athlete wave assignments for particular entries.

Wave Assignments In FAT Start Lists
MeetPro can write wave names and numbers in lynx.EVT files. This is useful for users of
the Lynx TimeTrial Plugin. To configure, open FAT Setup from the Interfaces menu.
Check the “Include Wave Assignments in Start Lists” checkbox and select the fields for
wave name and number.




XXVIII. Document Changes
   •   6/25/2020 Wave Start XC
   •   6/10/2020 Custom Distributed Record Sets substantially changed.
   •   6/21/2019: New records functionality: Sync , Update Record Breaks, Custom
       Distributed Record Sets
   •   3/5/2018: Updates (2.1.34 – 2.1.80), Language Support is now Language and
       International Support, this list is now descending.
   •   1/18/2017: Minor changes
   •   11/1/16 minor changes
   •   7/26/16 Cross Country
   •   5/11/16 added Showing Record Breaks in Results
   •   4/26/16 initial version.




                                MEETPRO 2.1.164 © 2020 DIRECTATHLETICS, INC. 30
