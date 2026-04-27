# MicroTab Light LED Display User Manual

**Title:** MicroTab Light LED Display User Manual
**Slug:** `microtab-light-led-display-user-manual`
**Category:** Lynx-Sold Scoreboards and Displays › Manuals and User Guides
**Type:** manual
**Source URL:** https://finishlynx.com/wp-content/uploads/2013/01/MicroTabLEDLight_EN.pdf
**Use:** Full reference for MicroTab Light LED display setup and operation.

---

User Manual
   Version 1.0.0
Contents
1     Hardware ............................................................................................................................................................. 3
    1.1       Control Panel ...................................................................................................................... 4
    1.2       Connections......................................................................................................................... 5
    1.3       Power supply ...................................................................................................................... 6
          1.3.1.1            Battery Charging ................................................................................................... 6

    1.4       Firmware Updating ............................................................................................................ 8
    1.5       Hardware Reset .................................................................................................................. 9
    1.6       Brightness Sensor ............................................................................................................. 10
2     Internal Programs .......................................................................................................................................... 11
    2.1       General Setup .................................................................................................................... 12
    2.2       Base Program .................................................................................................................... 13
      2.2.1 Setup .............................................................................................................................. 13
    2.3       Timer (Chronometer) ...................................................................................................... 14
      2.3.1 Setup .............................................................................................................................. 14
    2.4       Clock .................................................................................................................................. 16
      2.4.1 Setup .............................................................................................................................. 16
    2.5       Date & Clock ...................................................................................................................... 17
      2.5.1 Setup .............................................................................................................................. 17
    2.6       Test Pixel ........................................................................................................................... 18




Microgate                                               MicroTab Led Light User Manual                                                                  Page 2 of 19
1 HARDWARE




Figure 1 - MicroTab Led Light



            Single display board
            Matrix: 16 x 64 LEDs
            Dimensions: 16 x 64 x 15 cm (H x W x D)
            Weight: approx. 3,5 kg
            Controllable via: RS232, RS485
            USB port for internal flash programming




Microgate                         MicroTab Led Light User Manual   Page 3 of 19
1.1 CONTROL PANEL


                                           LOW BATTERY: Battery status signal LED.
                                           SERIAL1: 6-pole Amphenol connector for serial
                                           input/output
                                           START STOP LAP INPUTS: 6-pole Amphenol
                                           connector for START, STOP, and LAP signals
                                           FUSE: Fuse cavity
                                           SPEAKER: Jack connector for external speaker
                                           connection
                                           START STOP: Green START STOP button used
                                           for manual START and STOP signals and for
                                           modifying values in program settings1
                                           LAP RESET: Yellow LAP RESET button used for
                                           manual LAP signals and for confirming program
                                           settings2
                                           POWER: On/Off switch
                                           SUPPLY: Neutrik connector for external power
                                           supply and battery charging (if used)
                                           USB: USB cable connector for firmware
                                           updating

                                           1
                                               This button will hereafter be referred to as
                                               START-MODIFY
Figure 2 – Control panel                   2
                                               This button will hereafter be referred to as
                                               LAP-SETUP




Microgate                  MicroTab Led Light User Manual                      Page 4 of 19
1.2 CONNECTIONS
SERIAL 1 Input/Output (6-pole Amphenol)
1     Serial 1 RS232 TX (output)
2     Serial 1 SYNC IN (input)
3     Serial 1 RS485+
4     Serial 1 RS485-
5     Serial 1 GND (cable braiding)
6     Serial 1 RS232 RX (input)

                                                                   Figure 3 - 6-pole Amphenol connector

START – STOP – LAP Input/Output (6-pole Amphenol)
1     START signal (input)
2     Controlled output 5V, max 500mA (for external device power supply)
3     GND
4     LAP signal (input)
5     STOP signal (input)
6     AUX signal (input)




Microgate                       MicroTab Led Light User Manual                     Page 5 of 19
1.3 POWER SUPPLY
Power can be supplied in three ways:
   •      Connecting the MicroTab Led Light display board to the Microgate network adapter
          (code $ACC47). In this way it is possible to supply a mains graphic display board and to
          keep the batteries (if used) charged at the same time. This guarantees perfect
          functioning also when the mains power supply is interrupted. The $ACC147 network
          adapter operates with an input of 50 or 60 Hz alternate current, within a range of 100
          and 240 Volts.
   •      Using the internal batteries of the display board (optional module $ACC163); in this
          case autonomy is usually over 8 hours of continuous functioning (depending on the
          type of display used).
   •      Connecting the display board via the DC/DC 12/48V converter (optional module
          $ACC174) to any direct current supply (stabilized or not) between 11 and 16 Volts,
          which is able to supply at least 100W peak power and approximately 50W average
          power. A (60Ah) car battery usually ensures more than 6 hours continuous operation
          (depending on the used display type).

IMPORTANT NOTICE: The $ACC47 network adapter is not suitable for outdoor use. Consequently
Microgate is not liable for any damages to persons or things caused by incorrect use of the
network adapter.

1.3.1.1 BATTERY CHARGING
To enter charging mode, press the green 'START MODIFY' button on the control panel for at least 2
seconds with the display board turned off and after having connected an external power source to
the SUPPLY connector. Charging can take up to 10 hours, depending on the initial battery level.
The charging process can be interrupted by pressing again the green 'START MODIFY' button on
the control panel for at least 2 seconds.
The more frequently lithium-ion polymer (Li-poly) batteries are charged, the longer the battery life
will be.




Microgate                        MicroTab Led Light User Manual                        Page 6 of 19
The LOW BATTERY LED on the control panel indicates the battery level, the power source used, and the
charging status (if applicable).

EXTERNAL SUPPLY

STATUS                                            LOW BATTERY LED
 Display board on/off                            Green – Green – Pause
 Batteries charged
 Display board on/off                            Green – Red – Pause
 Batteries empty

INTERNAL SUPPLY (BATTERIES)

STATUS                                            LOW BATTERY LED
 Display board off                               Off
 Batteries charged/empty
 Display board on                                Green – Pause – Green – Pause
 Batteries charged
 Display board on                                Red – Pause – Red – Pause
 Batteries empty

CHARGE

STATUS                                            LOW BATTERY LED
 Batteries charging                              Pause – Green – Pause – Green FAST
 Charging complete                               Steady green




Microgate                        MicroTab Led Light User Manual                        Page 7 of 19
1.4 FIRMWARE UPDATING
Each time MicroTab Led Light is turned on, it displays the firmware version presently stored,
usually with the following syntax: x.y.z (major, minor, revision).




Figure 4 - Firmware version

The firmware can be updated downloading it from the SUPPORT section of the www.microgate.it
website.
Once downloaded the file, please follow the steps below:
       Turn on the display board and wait until boot is complete.
       Connect the USB cable (not supplied) from the display board to a USB port of your PC.
       Launch the Updater program following the on-screen instructions. In particular, if the
        software does not detect Active Sync (for Windows XP) or Windows Mobile Device Center
        (Vista/Windows 7), it suggests a link for downloading and installing it.
       Select the option 'Keep existing settings' to maintain all current settings; if you do not
        select it, the default values are restored.
       After a few minutes the display board is reset automatically displaying the number of the
        new installed version.




Figure 5 – Updater Software




Microgate                        MicroTab Led Light User Manual                      Page 8 of 19
1.5 HARDWARE RESET
If the display board stops responding to commands (e.g. entering the Setup menu as described in
par. 2.1), a Strong Reset can be carried out choosing to reset all values to the default parameters
(Factory Settings).
The steps to carry out are the following:
      Turn off the display board by pressing the Power (Off) button.
      Press simultaneously the START-MODIFY and LAP-SETUP buttons to turn on the display board
       (Power -> On)




   
      During the first boot phase, when the first 4 LEDs (2x2) in the upper left corner are blinking,
       keep the two buttons pressed.




      When the blinking LEDs are 6 (3 x 2) release the two buttons.




      After a few moments the software asks if you want to restore the factory settings (Reset
       Setting? Yellow=Yes) or use the stored settings. Press LAP-SETUP to reset all values
       to the initial conditions.



Microgate                         MicroTab Led Light User Manual                         Page 9 of 19
1.6 BRIGHTNESS SENSOR
Display board LED brightness can be set manually (from the menu or software) or assessed
automatically depending on the ambient light detected by the brightness sensor in the upper left
corner (4th row, 5th column). There are other sensors for each 32x32 LED area, but only the one in
the upper left corner is used for active control.
The minimum-maximum brightness values range from 1 to 100%, although in the default settings
60 is the maximum value. This means that the maximum brightness value that can be set
automatically by the sensor is 60. Normally this value is enough even in case of strong light or
sunny days. If you want to increase brightness (which causes higher power and battery
consumption), set 1 – 100 as minimum and maximum value so that the sensor can set higher
values. Of course it is possible to set Brightness Type = Manual (instead of Automatic) and to
choose a fixed brightness level (see par. 2.1)




Figure 6 – Brightness sensor




Microgate                       MicroTab Led Light User Manual                      Page 10 of 19
2 INTERNAL PROGRAMS
Besides the 'Base Program', which waits for PC or chronometer commands and displays the
received information, MicroTab Led Light display boards also have a series of internal programs for
various timing needs.
The programs available at the time of printing this guide are:
Base Program           Waits for commands via serial cable
Timer                  Works like a normal 1/100 second precision chronometer.
Clock                  Displays the time of the internal clock of the display board.
Date & Clock           Displays date and time of the internal clock of the display board.
Test Pixel             Checks that the LEDs work correctly.



To change program follow these steps:

       Keep the YELLOW LAP-SETUP button pressed for at least 3 seconds.
       The currently selected program is displayed.
       Press the GREEN START-MODIFY button to scroll down the above-stated program list.
       Once the desired program has been reached, press the LAP-SETUP button to confirm.
       Depending on the chosen program, further settings may be required or the program is
        executed immediately.




Microgate                        MicroTab Led Light User Manual                        Page 11 of 19
2.1 GENERAL SETUP
Enter the Setup menu of a program (if available) by pressing the yellow LAP-SETUP button for 3
seconds. Once concluded the program configuration the so-called 'Advanced Setup' is displayed,
i.e. the possibility to change the general parameters of the display board applied to all programs.
When Advanced Setup is displayed, press any button and confirm pressing LAP-SETUP to enter the
menu.
The values available for each menu item can be scrolled down with the green START-MODIFY button
and are confirmed by pressing the yellow LAP-SETUP button:
 Brightness Type
 AUTO | MANUAL               Set the brightness type. Automatic uses the brightness sensor, whereas
                             Manual uses the level set in the following step

 Brightness
 1…100%                      If Brightness Type = MANUAL, set brightness with START-MODIFY. Holding the
                             button, the numbers increase rapidly



 Firmware
 x.y.z                       The currently loaded firmware version is displayed.

 Serial Number
 xxxxxxxxxxx                 The display board serial number is displayed. Press LAP-Setup to continue
                             and exit the Advanced Setup menu.




Microgate                        MicroTab Led Light User Manual                         Page 12 of 19
2.2 BASE PROGRAM
Selecting Base Program MicroTab Led Light can be controlled via the SERIAL 1 communication
port.



2.2.1         SETUP
Keep the LAP-SETUP pressed for at least 2 seconds to enter the Setup. Press START-MODIFY to change the
displayed values.

   Advanced Setup ?          Press any key to continue.
   Yellow = Yes              Press LAP-SETUP to enter the general setup (see par. 2.1)
   Green = No                Press START-MODIFY to scroll the setup of the current program

   Font
   Regular|Narrow            Set the default font (normal or narrow)
                             Press LAP-SETUP

   Row
   0...15                    Set the row address (0 = first row)
                             Press LAP-SETUP

   Column
   0...3                     Set column address (0 = first column)
                             Press LAP-SETUP

   X Offset
   0...384                   Set the number of X Offset LEDs. All commands (with the ALPHA protocol)
                             will be shifted to the left by a certain amount of LEDs.
                             Press LAP-SETUP

   Baud
   1200…230400               Set the speed of the serial port applying one of the default values ('1200',
                             '2400', '4800', '9600', '19200', '38400', '38400', '57600', '115200', '230400').
                             Press LAP-SETUP

   Green to Default
                             Press the green START-MODIFY button to reset the display board to the
                             default values, or press the yellow LAP-SETUP button to accept the entered
                             values.




Microgate                         MicroTab Led Light User Manual                             Page 13 of 19
2.3 TIMER (CHRONOMETER)
In this mode MicroTab Led Light works as a typical 1/100 second precision chronometer.
   •        Pressing Start (manual or from input) the chronometer begins to count.
   •        With Lap (manual or from input) the chronometer displays an intermediate time for 5
            seconds.
   •        The chronometer is stopped using the manual Start/Stop
   •        At this point it is possible to reset the chronometer with a further Lap.
Without reset the chronometer starts from the displayed value.
If the AutoReset time has been set, after each Stop (or manual Start) the chronometer is reset
after a given amount of time.

2.3.1     SETUP
Keep the LAP-SETUP pressed for at least 2 seconds to enter the Setup. Press START-MODIFY to change the
displayed values.

 Configuration
 Normal | Over 24H | Until 24H Set the desired mode:
                               Normal = the chronometer starts from 0:00
                               Over 24H = the chronometer continues infinitely and after 24h displays
                               time as 24:00:01
                               Until 24H = the chronometer stops after 24h.00.00
                               Press LAP-SETUP

 Advanced Setup ?            Press any key to continue.
 Yellow = Yes                Press LAP-SETUP to enter the general setup (see par. 2.1)
 Green = No                  Press START-MODIFY to scroll the setup of the current program


 Set Starttime
 HH= 0                           Set the hours
                                 Press LAP-SETUP

 Set Starttime
 MM= 0                           Set the minutes
                                 Press LAP-SETUP

 Set Starttime
 SS= 0                           Set the seconds
                                 Press LAP-SETUP

 Set Starttime
 mm= 0                           Set the thousandths of a second
                                 Press LAP-SETUP


Microgate                         MicroTab Led Light User Manual                             Page 14 of 19
 Autoreset
 Time= 0                         Set the automatic Reset time (in seconds). After a stop command and
                                 when the above-stated time has passed, the chronometer is reset to
                                 zero. An invalid (zero) time disables the Autoreset function.
                                 Press LAP-SETUP

 Start – Stop                    The Start button is used at start and finish
 Start – Start                   The Start button is used only at start

 The chronometer is stopped and shows the preset time, ready to start.




Microgate                         MicroTab Led Light User Manual                      Page 15 of 19
2.4 CLOCK
This program allows you to display the time of the internal MicroTab Led Light clock.


2.4.1      SETUP
It is possible to set the date and time of the internal clock.

NOTE: When setting the time, MicroTab Led Light shows the time of first setting. If no value is modified,
time is not changed and continues to run as if Setup had not been used.

Keep the LAP-SETUP button pressed for at least 2 seconds to enter the Setup. Press START-MODIFY to change
the displayed values.

      Configuration
      HH:MM:SS | HH:MM           Set display mode with START-MODIFY

      Advanced Setup ?           Press any key to continue.
      Yellow = Yes               Press LAP-SETUP to enter the general setup (see par. 2.1)
      Green = No                 Press START-MODIFY to scroll the setup of the current program

      Set R.T. Date
      Day = 13                   Set the day of the month with START-MODIFY
                                 Press LAP-SETUP

      Set R.T. Date
      daynum = 3                 Set the week day with START-MODIFY
                                 (1 Sunday, 2 Monday, ..., 7 Saturday)
                                 Press LAP-SETUP

      Set R.T. Date
      month = 7                  Set the month with START-MODIFY
                                 (1 January, 2 February, …, 12 December)
                                 Press LAP-SETUP

      Set R.T. Clock
      HH = 0                     Set the time with START-MODIFY
                                 Press LAP-SETUP

      Set R.T. Clock
      MM = 0                     Set the minutes with START-MODIFY
                                 Press LAP-SETUP

      Set R.T. Clock
      SS = 0                     Set the seconds with START-MODIFY
                                 Press LAP-SETUP




Microgate                             MicroTab Led Light User Manual                             Page 16 of 19
2.5 DATE & CLOCK
This mode allows you to display the time of the internal MicroTab Led Light clock.


2.5.1      SETUP
It is possible to set the date and time of the internal clock. The steps are the same as in the Clock Program
(see par. 2.4.1).




Microgate                           MicroTab Led Light User Manual                            Page 17 of 19
2.6 TEST PIXEL
The Test Pixel program is used to check the correct functioning of LEDs: the display board turns all
LEDs on and off for a certain number of times. If an LED does not turn on, please contact our
technical support.




Microgate                        MicroTab Led Light User Manual                       Page 18 of 19
                                          Copyright
                               Copyright © 2011 by Microgate S.r.l.
                                        All rights reserved


No part of this document or of any of the individual manuals may be copied or reproduced
without prior written authorization by Microgate s.r.l.
All the trademarks or names of products mentioned in this document or in the individual manuals
are or may be registered trademarks belonging to the individual firms.
Microgate, REI2, RaceTime2, and MiSpeaker are registered trademarks belonging to Microgate
s.r.l. Windows is a registered mark of Microsoft Co.
Microgate s.r.l. reserves the right to modify the products described in this document and/or in the
relative manuals without notice.



                                       Microgate S.r.l.
                                        Via Stradivari, 4
                                        I-39100 Bolzano
                                              ITALY


                       Tel. +39 0471 501532 - Fax +39 0471 501524
                                      info@microgate.it
                                   http://www.microgate.it




Microgate                        MicroTab Led Light User Manual                      Page 19 of 19
