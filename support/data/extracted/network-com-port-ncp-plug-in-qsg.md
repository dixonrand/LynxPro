# Network COM Port (NCP) Plug-In QSG

**Title:** Network COM Port (NCP) Plug-In QSG
**Slug:** `network-com-port-ncp-plug-in-qsg`
**Category:** Lynx-Sold Scoreboards and Displays › Miscellaneous
**Type:** misc
**Source URL:** https://finishlynx.com/wp-content/uploads/2012/07/FinishLynx_NCP_Plugin.pdf
**Use:** Refer to this for setup of the Network COM Port (NCP) plug-in for serial scoreboard communication. NCP comes standard and pre-installed in FinishLynx 13.00 and later — customers without it just need to install the latest FinishLynx software.

---

•   If FinishLynx is sending data to a scoreboard controller computer, make
FinishLynx® NCP Plug - in Quick Start Guide                                              sure that either VCPD is installed and running on that computer or that the
                                                                                         controller accepts data over TCP/IP. Please refer to the VCPD Owner's
                                                                                         Manual for more information.
Introduction                                                                         •   If FinishLynx is sending data to a computer running ResulTV, make sure
The FinishLynx NCP (Network COM Port) Plug-in allows you to use a single                 you are running ResulTV version 2.0 or higher. Contact Lynx System
FinishLynx computer to communicate with multiple serial devices directly                 Developers, Inc., for information about upgrading ResulTV for free.
through TCP sockets instead of serial ports. With the help of SeriaLynx, you
can put serial devices such as scoreboards, wind gauges, and lap timers on a         Instructions
wired or wireless Ethernet network and then use the NCP Plug-in to enable            1. Run FinishLynx.
FinishLynx to communicate with those devices.
                                                                                     2. Click Scoreboard from the Menu Bar and choose Options. The Options
                                                                                        dialog appears.
Install the NCP Plug - in                                                            3. Click New and choose a scoreboard script from the Script: drop-down list.
Follow the steps in this section to install the NCP Plug-in onto your FinishLynx     4. From the Serial Port: drop-down list, select Network (connect).
computer.                                                                            5. Tab to the TCP Port text field.
1. Insert the NCP Plug-in disk into the FinishLynx computer's floppy drive.              •   If the scoreboard is connected to a SeriaLynx unit, type the number of
2. Click the Microsoft Windows Start Button and select Run.                                  the COM port on the SeriaLynx unit the scoreboard is connected to.
                                                                                             This is 10101 if connected to COM1, or 10201 if connected to COM2.
3. Type: a:/setup.exe and then click OK.
                                                                                         •   If FinishLynx is sending data to a scoreboard controller, type any 4-
4. Follow the instructions on the screen to complete the installation. When                  digit port number greater than 1024. When you create a virtual COM
   prompted, type the serial number that came with your NCP Plug-in                          port in VCPD, type the same Port number you entered in the NCP
   software. The next time you run FinishLynx, the NCP Plug-in is present.                   Plug-in and set VCPD to Listen.

Use NCP Plug - in with a scoreboard                                                      • If FinishLynx is sending data to a scoreboard running ResulTV 2.0 or
                                                                                           higher, type any 4-digit port number greater than 1024. When you run
If you want FinishLynx to send data to a scoreboard over an Ethernet network,              ResulTV 2.0, select Network (listen) from the Serial Port: drop-down
follow these instructions to configure the NCP Plug-in.                                    list. Then, type the same Port number you entered in the NCP Plug-in.
                                                                                     6. Tab to the IP Address text field.
Before you begin                                                                         •   Type the IP address of the SeriaLynx unit connected to the scoreboard.
FinishLynx can send data to a scoreboard connected to a SeriaLynx unit, to a                 The Options dialog resembles Figure 1.
computer serving as a scoreboard controller such as the Venus 7000, or to a              •  Type the IP address of the scoreboard controller or the computer
computer running ResulTV.                                                                   running ResulTV.
•   If FinishLynx is sending data to a scoreboard connected to a SeriaLynx           7. Click OK and then restart FinishLynx. FinishLynx is now ready to send
    unit, make sure you have a SeriaLynx unit connected to the scoreboard, and          data to the scoreboard over the Ethernet network.
    that the SeriaLynx unit is configured with the correct serial settings to send
    data to the scoreboard. Please refer to your SeriaLynx Operator's Manual for
    more information.

FinishLynx® NCP Plug-in Quick Start Guide                                                                                                                   Side 1
                                                                                    Instructions
                                                                                    1. Run FinishLynx.
                                                                                    2. Click File from the Menu Bar and choose Options. The Options dialog
                                                                                       appears.
                                                                                    3. Click the Wind or LapTime tab.
                                                                                    4. Select a wind gauge from the Wind Module: drop-down list, or select a lap
                                                                                       time device from the Lap Time Module: drop-down list.
                                                                  IP address of     5. From the Serial Port: drop-down list, select Network (connect).
  Port on the                                                     SeriaLynx unit
  SeriaLynx                                                       connected to      6. Tab to the TCP Port text field and type the number of the COM port on
  unit the                                                                             the SeriaLynx unit the wind gauge or lap timer is connected to. This is
                                                                  the scoreboard
  scoreboard is                                                                        10101 if connected to COM1, or 10201 if connected to COM2.
  connected to                                                                      7. Tab to the IP Address text field and type the IP address of the SeriaLynx
  (COM1)                                                                               unit connected to the wind gauge or lap timer. The Option dialog
                                                                                       resembles Figure 2.
                                                                                    8. Click OK and then restart FinishLynx. FinishLynx is now ready to send
                                                                                       data to the wind gauge or lap timer over the Ethernet network.



Figure 1: Configured Scoreboard Options dialog (when used with
SeriaLynx)

Use NCP Plug - in with a wind gauge or lap time device
If you want FinishLynx to send data to a wind gauge or lap time device over an
Ethernet network, follow these instructions to configure the NCP Plug-in.
                                                                                                           Port on the            IP Address of
                                                                                                           SeriaLynx unit         SeriaLynx unit
Before you begin                                                                                           the wind gauge         connected to
                                                                                                           or lap timer is        the wind gauge
These instructions assume you have a SeriaLynx unit connected to the wind
                                                                                                           connected to           or lap timer
gauge or lap timer, and that the SeriaLynx unit is configured with the correct
serial settings to send data to the wind gauge or lap timer. Please refer to your                          (COM2)
SeriaLynx Operator's Manual for more information.
These instructions also assume your FinishLynx computer is connected to the
SeriaLynx unit over a wired or wireless Ethernet network.
If you are sending data to a lap timer, make sure you have the FinishLynx
LapTime Plug-in installed.
                                                                                    Figure 2: Configured Wind Options dialog

FinishLynx® NCP Plug-in Quick Start Guide                                                                                                                 Side 2
