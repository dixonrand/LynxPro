# Camera BIOS Chip Replacement Guide

**Title:** Camera BIOS Chip Replacement Guide
**Slug:** `camera-bios-chip-replacement-guide`
**Category:** Lynx-Sold Cameras › Miscellaneous
**Type:** misc
**Source URL:** https://finishlynx.com/wp-content/uploads/2022/06/BIOS_Chip_Replacement.pdf
**Use:** Refer to this for BIOS chip replacement procedure on supported camera hardware.

---

LYNX SYSTEM DEVELOPERS, INC.


                              BIOS Chip Replacement Guide
                          (EtherLynx Professional, Fusion & 2000+ Cameras)



Preface:

Lynx recently uncovered an issue related to a third-party component that affects some earlier models of the
5L300, 5L400, 5L410, and 5L420 cameras. In some units, the BIOS chip on the camera’s ETX board may
degrade over time. A static shock or other external stress or may cause the BIOS chip to reset back to its
original factory settings, which makes the camera unable to boot. The most common symptom of a damaged
BIOS chip is a solid red boot light.

The fix is very simple and is only necessary on cameras with a certain model of ETX Board. Before
attempting to replace a camera’s BIOS chip, it is important to review the camera’s Lynx.cm1 file to
confirm that it has a compatible board. Please do not try to replace the BIOS chip unless the camera
matches the settings listed below. Please contact Lynx technical support to learn more or discuss other
camera repair options.

Review Lynx.cm1 file:

    1.   Navigate to the default FinishLynx software directory on the computer, usually: C:/Lynx/
    2.   Open the Lynx.cm1 file with notepad. In some cases, there may also be a Lynx.cm2.
    3.   Ctrl+F to find the line listing the camera’s CPU specs.
    4.   Confirm that the CPU says: 1600 Mhz Type 4 Div 4
    5.   If the CPU matches the listing below, you can proceed with the BIOS chip replacement. If not,
         there may another issue and you will need to contact Lynx technical support.




www.finishlynx.com                                                                      support@finishlynx.com
                                BIOS Chip Replacement Guide
                            (EtherLynx Professional, Fusion & 2000+ Cameras)



Step 1: Remove four (4) screws from the front of the
         camera. Remove the front panel.




                                                                                 Here is the
                                                                                 BIOS chip




Step 2: Remove four (4) screws from the back of the
         camera. Remove the circuit boards.




                                                                               Take note of
                                                                               Pin 1 marking
                                                                               (silver dot)



                                                                                Open the
Step 3: Remove four (4) screws from the Heat Sink                               doors to
         Plate. Remove the plate.                                               replace the
                                                                                BIOS chip
