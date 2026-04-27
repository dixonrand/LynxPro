# Standalone Wind Gauge Controller QSG

**Title:** Standalone Wind Gauge Controller QSG
**Slug:** `standalone-wind-gauge-controller-qsg`
**Category:** Lynx-Sold Timing Accessories › QSGs
**Type:** qsg
**Source URL:** https://finishlynx.com/wp-content/uploads/2016/04/WG-SA-CTRL_QSG.pdf
**Use:** Refer to this for Standalone Wind Gauge Controller setup and operation.

---

LYNX SYSTEM DEVELOPERS, INC.



                     Standalone Wind Gauge Controller
                                       Quick Start Guide (v1.01)
Introduction
The following guide will walk you through the setup, configuration, and operations of the controller. If at any
point you need additional help, please contact Technical Support: support@finishlynx.com.

General Information


 S1       Female XLR – WG-Lynx connection
 S2       Male XLR – PC connection
 S3       Female DB9 – Display connection
 S4       Power connection
 SW1      Power switch




 L1       Selected event                                                        WG-ET control panel

 L2       Measurement duration
 L3       Power meter (minimum 7,2V)                         L1         100m                            8.0V            L3
                                                             L2          0s
 B1       Roll up button
 B2       Roll down button
                                                              B1                                     START
                                                                                                                        B3
 B3       Start measurement button                                             Roll   Wind gauge                            Roll



 B4       Cancel/Reset button                                 B2                                     RESET
                                                                                                                        B4
 B5       Elapsed time/countdown
          selection button
                                                              B5                      Elapsed time   START
                                                                                                                        B6
 B6       Start elapsed time/countdown




www.facebook.com/finishlynx                                                                            www.finishlynx.com
                                                                        Standalone Wind Gauge Controller
                                                                                                   Quick Start Guide


 Setup 1 Basic standalone mode
 *In this setup, FinishLynx or FieldLynx do not receive     4. To modify the Selected Event (L1), use the Roll Up
 data from the controller.                                     (B1) or Roll Down (B2) buttons.
 1. Connect the WG-Lynx wind gauge to S1.                          a. Set Selected Event to “CONT.” to display
 2. (Optional) Connect the Remote port on the Gill                     continuous wind readings on the
      E4982x display to S3.                                            connected display.
 3. Turn on the controller.                                 5. Press Start (B3).

 Setup 2 FinishLynx/FieldLynx Controlled mode + Gill display (E4982x)
 *In this setup FinishLynx or FieldLynx control the wind    5. Select the FL-Display 7E1 protocol.
 gauge and relay the wind reading to the controller to             a. Press Reset (B4) to access the menu
 be sent to the display. The controller is used to direct              options.
 the data to the correct device.
                                                                   b. Use the Roll Up (B1) or Roll Down (B2)
 1. Connect the WG-Lynx wind gauge to S1.                              buttons to show FL-Display 7E1.
 2. Connect the FinishLynx or FieldLynx serial port to             c. Press Start (B3) to apply the setting.
      S2 using the adapter labelled “Controller-Serial”.
                                                            6. Configure FinishLynx or FieldLynx to connect to
 3. Connect the Remote port on the Gill E4982x                 the Lynx wind gauge (9600,8,N,1).
      display to S3.
 4. Turn on the controller.

 Setup 3 Standalone mode with FieldLynx
 *In this setup, the wind gauge is controlled by the        3. Connect the FieldLynx serial port to S2.
 controller and the measured wind reading is sent to        4. (Optional) Connect the Remote port on the Gill
 FieldLynx.                                                    E4982x display to S3.
 1. In the FieldLynx Wind Options:                          5. Turn on the controller.
          a. Select the WG-Lynx wind module.                6. To modify the measurement duration (L2), use the
          b. Select Custom Mode                                Roll Up (B1) or Roll Down (B2) buttons.
          c. Set the Interval: to -1.                       7. In FieldLynx, select an athlete for a horizontal
          d. Select the serial port connected to the           jump and click on the Wind icon.
              controller (9600,8,N,1).                      8. Press Start (B3).
 2. Connect the WG-Lynx wind gauge to S1.

Overview




 www.facebook.com/finishlynx                                                                   www.finishlynx.com
                                                              Standalone Wind Gauge Controller
                                                                                          Quick Start Guide


Protocols
 GILL W                                        Controller manages wind reading parameters (start,
                                               duration).
                                               Lynx wind gauge sends data to controller.
                                               Controller receives data from Lynx wind gauge and
                                               sends the wind reading to a connected PC and/or a
                                               display using the Gill protocol.
 GILL W+T                                      As above. Countdown of elapsed time is possible.
 GILL W+T & OSTAR                              As above. Also sends Ostar protocol.
 OSTAR                                         As above. Does not send Gill protocol.
 *FL-display 8N1                               FinishLynx/FieldLynx (FL) manages wind reading
                                               parameters (start, duration).
                                               Lynx wind gauge sends data to FL.
                                               The controller receives the wind reading from FL and
                                               sends it to the display (9600, 8, N, 1)
 *FL-display 7E1                               As above.
                                               Supports Gill E4982x display (9600, 7, E, 1).


*The controller does not need an operator in this mode.

Notes:




      Download a copy:                            Contact Technical Support:
                                                          Email: support@finishlynx.com
                                                          Phone: 978-556-9780
                                                  Join Us Online:
                                                          Timer’s Group: facebook.com/groups/finishlynx
                                                           Facebook: facebook.com/finishlynx
                                                          Instagram: @finishlynx



www.facebook.com/finishlynx                                                           www.finishlynx.com
