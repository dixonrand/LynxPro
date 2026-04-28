# FinishLynx Known Fixes

A living document of confirmed real-world solutions for FinishLynx technical support.
Each entry has been verified through direct customer support experience.
Use this file as the primary reference for confirmed fixes — prioritize these over general documentation guidance.

---

## How to Use This File

- Search by symptom, product, or keyword to find relevant fixes
- Entries marked **Confirmed Fix** have been verified in the field
- Entries marked **Likely Cause** are inferred but not yet confirmed
- Add new entries at the bottom in the same format

---

## Entry Format

```
### [Short descriptive title]

**Issue:** One-sentence description of the problem.
**Symptoms:** What the customer reports seeing or experiencing.
**Likely Causes:** What is probably causing the issue.
**Confirmed Fix:** The solution that worked.
**Steps:**
1. Step one
2. Step two
3. Step three
**Products:** Which FinishLynx products or software versions this applies to.
**Notes:** Any caveats, warnings, or related information.
```

---

## Confirmed Fixes

---

### Timing Two Events from the Same Image in Single Event Mode

**Issue:** Operator needs to produce separate results for two events (e.g., Boys and Girls) that ran in the same race and were captured in the same photo-finish image, while keeping Single Event Mode on.

**Symptoms:** Customer wants separate saved event files with separate start lists from one captured image, without enabling Multiple Open Events.

**Likely Causes:** N/A — this is a workflow question, not an error condition.

**Confirmed Fix:** Evaluate and save the first event, then load the second event's start list into the same window, re-read the image, and use File > Save As to save it as a separate file.

**Steps:**
1. Capture the race image and evaluate results for the first event (e.g., Girls). Assign all times and places as normal.
2. Save the event using File > Save.
3. Load the start list for the second event (e.g., Boys) into the same event window.
4. Re-read the image and assign times and places for the second event.
5. Go to File > Save As and save under a new file name to preserve it as a separate event record.

**Products:** FinishLynx (all versions), Single Event Mode enabled.

**Notes:** This method avoids the complexity of Multiple Open Events. The same image is used for both evaluations — no re-capture needed. Not documented in the FinishLynx manual; confirmed through field support experience.

---

### Blurry Image Caused by Incorrect CS-C 5mm Ring Adapter Usage

**Issue:** EtherLynx Vision camera produces a persistently blurry image that cannot be resolved through focus adjustment alone.

**Symptoms:** Image is blurry regardless of focus ring or software focus adjustments. Focus indicator number stays low and cannot be improved.

**Likely Causes:** The 5mm flange distance between the lens and the camera sensor is not being respected. This happens in two ways: a C-Mount lens installed without the CS-C 5mm ring adapter, or a CS-Mount lens installed with the CS-C 5mm ring adapter still attached.

**Confirmed Fix:** Verify the correct adapter configuration is in place for the lens type being used.

**Steps:**
1. Identify the lens mount type — check the lens barrel for CS-Mount or C-Mount markings.
2. If using a C-Mount lens: confirm the CS-C 5mm ring adapter IS installed between the lens and the camera body.
3. If using a CS-Mount lens: confirm the CS-C 5mm ring adapter is NOT installed. Remove it if present.
4. Remount the lens and re-attempt focus adjustment.
5. If the image is still blurry after correcting the adapter, the 5mm flange distance may still not be respected — verify the adapter is fully seated before ruling out other causes.

**Products:** EtherLynx Vision cameras (all Vision-series models).

**Notes:** The 5mm flange distance is a physical optical requirement. If it is not respected, the camera cannot achieve focus regardless of software or lens ring adjustments — the image will always be blurry. This is one of the first things to check when focus cannot be improved through normal means.

---

### Spacebar Not Responding During Keyboard Capture / USB Capture Button Not Recognized

**Issue:** Spacebar does not toggle capture during Keyboard Capture mode, and/or USB Capture Button is not functioning in FinishLynx.

**Symptoms:**
- "Spacebar toggles capture" dialog is visible but pressing the spacebar does nothing
- USB Capture Button connected but not responding or not listed in File > Options > Capture Button drop-down

**Likely Causes:**
1. The Keyboard Capture dialog is open but does not have focus — spacebar input is going elsewhere
2. USB-to-serial driver not installed for the capture button cable
3. Incorrect or no COM port selected in File > Options > Capture Button

**Confirmed Fix:**
- Spacebar: The spacebar only toggles capture while the "Spacebar toggles capture" dialog is visible AND has focus. Click the dialog to give it focus, then press spacebar.
- Capture button: Install the USB-serial driver, confirm COM port in Device Manager, assign it in File > Options.

**Steps:**
1. Click directly on the "Spacebar toggles capture" dialog to give it focus.
2. Press spacebar ONCE to toggle capture ON; press again to toggle OFF — do not hold the spacebar down.
3. For USB button not working: close FinishLynx, connect the USB cable with internet active, allow Windows to auto-install the driver.
4. Right-click Windows Start → Device Manager → expand Ports (COM & LPT) → note the COM port number.
5. If no COM port appears in Device Manager after connecting the cable, the driver did not install — attempt manual driver installation before continuing.
6. Open FinishLynx → File > Options → set Capture Button to that COM port → click OK.
7. If the COM port is visible but the button still does not respond, another application may have claimed that port — close other applications and retry.

**Products:** FinishLynx (all versions), USB-to-serial capture button cable.

**Notes:**
- The spacebar is NOT a global hotkey — it only works while the Keyboard Capture dialog is visible and focused.
- Do not hold the spacebar down.
- If no COM port appears in Device Manager after connecting the cable, the driver did not install and may require manual installation.
- Possible cause (unconfirmed): if COM port is visible but button still doesn't respond, another application may have claimed that port.

---

### VDM Upgrade Code Shows "Invalid" But May Have Been Accepted

**Issue:** Customer enters a VDM upgrade license code and receives an "invalid code" error, but the code may have actually been accepted.

**Symptoms:**
- "Invalid code" error appears when entering VDM license code in Camera Settings
- Camera HDMI output does not appear under Scoreboard > Options > Serial Port drop-down

**Likely Causes:**
1. Code was actually accepted despite the error message — camera and FinishLynx need a restart to register the change (most common)
2. Code entered incorrectly (typo, wrong case, extra space)
3. Code does not match the camera's serial number (purchased for a different unit)
4. Camera firmware too old to support VDM activation

**Confirmed Fix:** Restart both the camera and FinishLynx after entering the code. If Camera (HDMI) appears in Scoreboard > Options > Serial Port, the upgrade is active.

**Steps:**
1. Restart the camera (power cycle).
2. Restart FinishLynx.
3. Go to **Scoreboard > Options** and check the Serial Port dropdown for **Camera [#] (HDMI)**.
4. If listed → VDM is active, setup is complete.
5. If not listed → request a screenshot of Camera Settings > Setup tab to verify the code was entered correctly and that the serial number on the code matches the camera's serial number. VDM codes are per-camera and tied to a specific serial number.

**Products:** EtherLynx Vision-series cameras (5L500, 5L600, 5L700), FinishLynx VDM upgrade license.

**Notes:**
- VDM is a per-camera license — the code is tied to a specific camera serial number.
- If Camera (HDMI) does not appear after restart, the Setup tab screenshot will confirm whether the code was entered correctly and whether the serial number matches.

---

### VDM Upgrade Code Accepted But Camera Settings Show No Change (Lux Options Unchanged)

**Issue:** Customer enters a VDM upgrade code, receives an acceptance confirmation, but camera settings appear unchanged after entry.

**Symptoms:**
- VDM code entry dialog reports the code was accepted
- Camera settings (e.g., lux options) appear unchanged — lux max still shows as 1
- No visible difference in Camera Settings after activation

**Likely Causes:**
1. Camera and/or FinishLynx not restarted after code entry — changes do not take effect until both are rebooted (confirmed)

**Confirmed Fix:** Power cycle the camera and restart FinishLynx after entering the upgrade code. New options will apply after the reboot.

**Steps:**
1. After entering the upgrade code and receiving acceptance confirmation, close FinishLynx.
2. Power cycle the camera (unplug and reconnect power).
3. Reopen FinishLynx and reconnect to the camera.
4. Verify the new options are now available in Camera Settings.

**Products:** EtherLynx Vision-series cameras (5L500, 5L600, 5L700), FinishLynx VDM upgrade license.

**Notes:**
- A reboot is required for upgrade codes to take effect even when the code is accepted without error.
- Confirmed by customer — used the camera with VDM active at an event after rebooting with no further issues.

---

### F-Mount Lens Aperture Not Responding to Software Control / Clicking Noise

**Issue:** EtherLynx Vision PRO camera with Nikon F-Mount adapter does not respond to aperture adjustments in FinishLynx — clicking sounds heard but aperture does not visibly change.

**Symptoms:**
- Clicking noise heard when adjusting aperture from within FinishLynx software
- Aperture does not visibly change in the image regardless of software adjustments
- Image remains overexposed (completely white) regardless of aperture setting
- Issue reproduced across multiple lenses, ruling out a single bad lens
- Workaround used: increasing frame rate to 3000 fps to darken the image

**Likely Causes:**
1. F-Mount lens mounted with iris open — mechanical iris must be manually closed (set to "orange number" on aperture ring) before mounting on the camera (most common)
2. F-Mount tab inside the camera mount is incorrectly positioned — if the tab is out of position it misses the lens iris mechanism entirely, preventing aperture control
3. Possible hardware defect if both above are ruled out

**Confirmed Fix:** Steps below are the confirmed team-approved resolution.

**Steps:**
1. Before mounting the lens, manually close the iris on the lens to the minimum aperture (the "orange number" on the aperture ring).
2. Mount the lens onto the camera.
3. If issue persists, inspect the small tab inside the F-Mount on the camera body — verify it is correctly positioned to engage the lens iris mechanism when the lens is mounted.
4. If tab is mispositioned, carefully rotate it to the correct position (as shown in the reference image shared with customer).
5. Remount the lens and test aperture control in FinishLynx.
6. If neither step resolves the issue and the meet is active, use this workaround: increase the frame rate to 3000 fps to effectively darken the image until the aperture issue can be resolved.
7. If the issue persists after all above steps, escalate for hardware inspection.

**Products:** EtherLynx Vision PRO (5L600), Nikon F-Mount adapter, mechanical iris F-Mount lenses.

**Notes:**
- Customer is experienced with Vision PRO cameras and was already aware of the iris pre-set requirement — operator error is possible but not confirmed.
- Confirmed: team-approved resolution based on closed support case.

---

### MeetPro 2 Unable to Link with FinishLynx

**Issue:** Customer cannot establish a connection between MeetPro 2 meet management software and FinishLynx.

**Symptoms:**
- FinishLynx and MeetPro 2 not communicating
- Results or start lists not passing between the two programs

**Likely Causes:**
1. FinishLynx Input/Output directories not pointed to the shared folder MeetPro 2 is using for data exchange
2. File sharing not configured correctly between the two computers (if running on separate machines)
3. MeetPro 2 not configured on its end to point to the correct shared folder

**Confirmed Fix:** Steps below are the confirmed team-approved resolution.

**Steps:**
1. If using two computers, configure file sharing between them using the Windows 11 networking guide (NetworkingWindows11.pdf).
2. In FinishLynx, go to **File > Options > Database tab**.
3. Set both the **Input** and **Output** directories to the shared folder that MeetPro 2 is using to interface with FinishLynx. Both programs must point to the same directory for data exchange to work.
4. For MeetPro 2 settings, refer to MeetPro's own documentation (see: *Entering Track & Field Results*) — configuration on the MeetPro side is outside Lynx support scope.

**Products:** FinishLynx (all versions), MeetPro 2 (third-party meet management software).

**Notes:**
- MeetPro 2 is a third-party product — Lynx support covers only the FinishLynx side of the integration.
- The core mechanism is a shared folder: both programs must point to the same directory for data exchange to work.
- Confirmed: team-approved resolution based on closed support case.

---

### EtherLynx Fusion Camera Will Not Boot — Solid Red Light / BIOS Chip Fault

**Issue:** EtherLynx Fusion (5L400) camera will not load — boot light goes solid red immediately on power-up with no camera activity on the network.

**Symptoms:**
- Boot light goes solid red immediately upon powering on
- Ethernet port shows link but no activity
- Camera does not load or appear in FinishLynx
- Camera was previously working; issue appeared after a period of non-use

**Likely Causes:**
1. BIOS chip fault — a known hardware failure on 5L400 cameras caused by a manufacturer defect (most common for this symptom pattern)

**Confirmed Fix:** Use the BIOS Chip Replacement document to confirm the fault, then ship a replacement BIOS chip to the customer.

**Steps:**
1. Confirm the symptom pattern: solid red boot light with Ethernet link but no activity. This is the key indicator of a BIOS chip fault — not general boot failure.
2. Direct customer to the BIOS Chip Replacement guide: *Camera BIOS Chip Replacement Guide* — https://finishlynx.com/wp-content/uploads/2022/06/BIOS_Chip_Replacement.pdf
3. Customer follows the document to confirm whether the BIOS chip is the cause.
4. If confirmed, collect customer's shipping address and send a replacement BIOS chip. Note: this is a known recurring issue on 5L400 cameras due to a manufacturer defect — not operator error.

**Products:** EtherLynx Fusion (5L400).

**Notes:**
- Solid red boot light with link but no ethernet activity is the key symptom pattern for this fault.
- This is a known, recurring issue on 5L400 cameras due to a manufacturer defect — not caused by operator error or misuse.
- Customer in this case had the same issue 4 years prior and had a chip replaced, confirming the recurring nature of the fault.
- Replacement chip is shipped to the customer; refer to BIOS_Chip_Replacement.pdf (also in project files) for full procedure.

---

### Microgate LED Scoreboard Not Connecting to FinishLynx

**Issue:** Customer unable to connect a Microgate LED scoreboard (MicroTab) to FinishLynx.

**Symptoms:**
- Microgate LED board and FinishLynx not communicating
- Scoreboard not displaying data from FinishLynx

**Likely Causes:**
- Incorrect scoreboard configuration in FinishLynx (script, serial port, or connection settings)
- Physical connection or cabling issue between computer and scoreboard

**Confirmed Fix:** Steps below are the confirmed team-approved resolution.

**Steps:**
1. Direct customer to the setup video: *Connect a MicroTab LED Scoreboard to FinishLynx* — https://www.youtube.com/watch?v=WbAGM43UNVo
2. If issue persists after watching, follow up for specifics on where the setup is failing.
3. If additional reference is needed, the MicroTab LED Display User Manual (MicroTabLED_EN.pdf) is available as a supplementary resource.

**Products:** FinishLynx (all versions), Microgate MicroTab LED scoreboard.

**Notes:**
- Microgate is a third-party product — setup video is the primary first-line resource for this integration.
- MicroTabLED_EN.pdf is available in project files as an additional reference.
- Confirmed: team-approved resolution based on closed support case.

---

### Camera Not Connecting to FinishLynx

**Issue:** Customer cannot connect an EtherLynx, IdentiLynx, or VeriLynx camera to FinishLynx.

**Symptoms:**
- Camera does not appear or load in FinishLynx
- Camera connection fails on startup

**Likely Causes:**
- Camera not booting correctly or fully (most common)
- Network/IP configuration issue between camera and computer
- Firewall or Windows networking blocking camera communication

**Confirmed Fix:** Steps below are the confirmed team-approved resolution.

**Steps:**
1. Ask the customer for the camera's current boot light status (color and behavior) — this is key diagnostic information.
2. Direct customer to the Camera Boot Troubleshooting Guide: *Loading EtherLynx, IdentiLynx & VeriLynx Cameras* — https://finishlynx.com/wp-content/uploads/2012/08/Camera_Boot_Troubleshooting_Guide.pdf
3. If the customer reports "Error aligning camera" — this is always caused by the camera not booting correctly. The Camera Boot Troubleshooting Guide is the correct resource.
4. If issue persists after following the guide, follow up for specifics on camera model, boot light status, and network setup.

**Products:** EtherLynx (all Vision-series), IdentiLynx (SR-2, HRS), VeriLynx (V30, V60).

**Notes:**
- This is the standard first-line response for any camera connection failure — the boot troubleshooting guide covers the most common causes.
- Boot light status (color and behavior) is key diagnostic information if the guide does not resolve the issue.
- Also applies when "Error aligning camera" is reported — always caused by the camera not booting correctly or fully.
- Confirmed: team-approved resolution based on closed support case.

---

### LynxPad Prompts for Username and Password When Printing Meet Report

**Issue:** LynxPad prompts for a username and password when attempting to print a meet report, and running the program as administrator does not resolve it.

**Symptoms:**
- Username and password dialog appears when trying to print a report in LynxPad
- Running LynxPad as administrator does not bypass or resolve the prompt
- Reports inaccessible

**Likely Causes:**
1. LynxPad was not originally installed with administrator privileges — reinstalling as administrator is required to set correct file/registry permissions (most common)

**Confirmed Fix:** Steps below are the confirmed team-approved resolution.

**Steps:**
1. Uninstall LynxPad — the meet database will not be lost, it is safe to proceed.
2. Locate the LynxPad installer.
3. Right-click the installer and choose **Run as Administrator**. Note: simply right-clicking the LynxPad shortcut and choosing "Run as administrator" is not sufficient — the program must be reinstalled with administrator privileges.
4. Complete the installation.
5. Open LynxPad and attempt to print a meet report again.

**Products:** LynxPad (all versions).

**Notes:**
- Uninstalling LynxPad does not delete the meet database — safe to proceed.
- Simply right-clicking the LynxPad shortcut and choosing "Run as administrator" is not sufficient — the program must be reinstalled with administrator privileges.
- Confirmed: team-approved resolution based on closed support case.

---

### LED Scoreboard/Display Stops Working Mid-Meet, All LEDs Go Red

**Issue:** LED display stops functioning during a meet and shows all red LEDs, with power cycling having no effect.

**Symptoms:**
- Display was working normally for several races then stopped mid-meet
- All LEDs light up red
- Turning the display off/on and unplugging/replugging does not restore normal operation

**Likely Causes:**
1. Battery power depleted — display was running on internal battery which drained during the meet (most common if not connected to mains power)
2. Other hardware or firmware fault (if battery is ruled out)

**Confirmed Fix:** Steps below are the confirmed team-approved resolution.

**Steps:**
1. Confirm whether the display was connected to mains power or running on internal battery.
2. If running on battery: connect the display to power, then hold the **Green button** for a few seconds until the LED flashes green quickly — this initiates charging with the display off.
3. Allow to charge, then attempt to power on normally.
4. If connected to mains power and issue still occurred, follow up for further diagnostics.

**Products:** Lynx LED display (battery-capable models).

**Notes:**
- All-red LED state mid-meet is a key symptom of battery depletion when not on mains power.
- Charging procedure: display off, connected to power, hold Green button until LED flashes green quickly.
- Confirmed: team-approved resolution based on closed support case.

---

### IdentiLynx Camera Not Booting into FinishLynx / Lens Getting Hot

**Issue:** IdentiLynx camera that was previously working suddenly fails to boot into FinishLynx; front of lens gets very hot.

**Symptoms:**
- IdentiLynx camera does not load or appear in FinishLynx
- Front of lens is noticeably hot to the touch
- Camera was working previously with no changes made

**Likely Causes:**
1. Multiple network adapters with overlapping IP ranges — WiFi and Ethernet both active, causing a network conflict that prevents FinishLynx from finding the camera (most common)
2. Camera hardware issue — heat from the lens may indicate a hardware fault; escalate if network causes are ruled out

**Confirmed Fix:** Steps below are the confirmed team-approved resolution.

**Steps:**
1. In FinishLynx, go to **File > Options** and expand the **Camera Network** dropdown.
2. Check if multiple IP addresses are listed that begin with the same first three octets (e.g., 169.254.x.x).
3. If yes — disable WiFi on the computer, restart FinishLynx, and attempt to boot the camera again.
4. If no IP conflict is found — install and run **IP-Toolbox** with the camera connected. If the IdentiLynx is detected, send a screenshot of the results for further diagnosis.
5. If the camera boots successfully but the lens continues to run hot after the network fix, escalate for hardware inspection — persistent heat is not normal and may indicate a hardware fault.

**Products:** IdentiLynx (SR-2, HRS).

**Notes:**
- A hot lens on the IdentiLynx is unusual and worth monitoring — if the network fix resolves the boot issue but the lens continues to run hot, escalate for hardware inspection.
- IP conflict from simultaneous WiFi and Ethernet is a common cause of camera connection failures across all camera types, not just IdentiLynx.
- IP-Toolbox is a network diagnostic utility used to detect cameras on the network independently of FinishLynx.
- Confirmed: team-approved resolution based on closed support case.

---

### IdentiLynx Video Image Appears Pink

**Issue:** IdentiLynx camera produces a pink-tinted video image.

**Symptoms:**
- IdentiLynx video image has a pink color cast
- Image color appears abnormal/incorrect

**Likely Causes:**
1. IR filter is toggled to the wrong position — the IdentiLynx has an IR filter that when incorrectly set causes a pink image (most common)

**Confirmed Fix:** Steps below are the confirmed team-approved resolution.

**Steps:**
1. Follow the steps in this video: *Fix IdentiLynx Video (Pink) Color Issues by Toggling Camera IR Filter* — https://www.youtube.com/watch?v=PgDUSGDJzYA

**Products:** IdentiLynx (SR-2, HRS).

**Notes:**
- Pink image on IdentiLynx is a known symptom of the IR filter being in the wrong position.
- Confirmed: team-approved resolution based on closed support case.

---

### How to Display Live FinishLynx Results on an LED Video Board Without a Paid Subscription

**Issue:** Customer wants to display live FinishLynx results on an LED video board without paying for additional software or a subscription.

**Symptoms:**
- Customer has an LED video board and wants live results displayed as athletes finish
- Looking for a free or no-cost integration path

**Likely Causes:** N/A — this is a workflow/product question, not an error condition.

**Confirmed Fix:** Steps below are the confirmed team-approved resolution.

**Steps:**
1. Direct customer to the LED Video Display Options datasheet for a full overview of Lynx-supported options: *Lynx LED Video Options* — https://finishlynx.com/wp-content/uploads/2024/03/Lynx_LED_Display_Options.pdf
2. Explain that software is required to receive data from FinishLynx and convert it to video output for the display. There is no free built-in Lynx solution — all options require a license or hardware purchase.
3. Present Lynx options based on their setup: VDM (per-camera upgrade, simplest option if customer already has an EtherLynx Vision-series camera — uses the camera's HDMI output directly with no additional PC needed), ResulTV, ResulTV-VDM, Portable-VDM.
4. Note that third-party options exist but are outside Lynx support scope.

**Products:** FinishLynx (all versions), VDM, ResulTV, ResulTV-VDM, Portable-VDM.

**Notes:**
- There is no free/built-in Lynx solution for live LED video board display — all Lynx options require a license or hardware purchase.
- VDM is the simplest option if the customer already has an EtherLynx Vision-series camera — it uses the camera's HDMI output directly with no additional PC needed.
- Third-party software options may exist but are not supported by Lynx.
- Confirmed: team-approved resolution based on closed support case.

---

### Multiple Cameras Not Loading Simultaneously (Finish + Wide View)

**Issue:** Customer cannot get two cameras to work at the same time in FinishLynx — one finish line camera and one wide view camera.

**Symptoms:**
- One or both cameras fail to load when both are connected
- Cameras work individually but not together, or neither loads
- Customer also unsure if they have the latest FinishLynx software version

**Likely Causes:**
1. Camera boot or network configuration issue preventing one or both cameras from loading correctly
2. IP conflict or network adapter misconfiguration with multiple cameras on the same network
3. Outdated FinishLynx software may affect multi-camera compatibility

**Confirmed Fix:** Follow the Camera Boot Troubleshooting Guide for both cameras. Ensure network is configured correctly for multiple cameras.

**Steps:**
1. Follow the Camera Boot Troubleshooting Guide for both cameras: *Loading EtherLynx, IdentiLynx & VeriLynx Cameras* — https://finishlynx.com/wp-content/uploads/2012/08/Camera_Boot_Troubleshooting_Guide.pdf
2. Ensure both cameras have unique IP addresses on the same subnet — duplicate IPs will prevent one from loading.
3. Note: the wide view camera is typically an IdentiLynx used for video identification alongside the EtherLynx finish line camera.
4. Check the latest FinishLynx software version at www.finishlynx.com/support and update if needed — this is a good habit any time multi-camera issues arise.

**Products:** FinishLynx (all versions), EtherLynx cameras (all models), IdentiLynx.

**Notes:**
- The wide view camera is typically an IdentiLynx used for video identification alongside the EtherLynx finish line camera.
- Both cameras must have unique IP addresses — duplicate IPs will prevent one from loading.
- Software version check is a good habit any time multi-camera issues arise.
- Confirmed: team-approved resolution based on closed support case.

---

### RadioLynx Receiver Physical Damage — White Connector Piece Detached

**Issue:** Customer's RadioLynx receiver has a white connector piece that has detached from the unit and wants to know repair vs. replacement options and costs.

**Symptoms:**
- White plastic/connector piece on the RadioLynx receiver is no longer attached
- Physical damage visible on the receiver unit

**Likely Causes:** N/A — physical damage, not a software or configuration issue.

**Confirmed Fix:** Direct customer to submit a repair RMA — Lynx will assess and attempt repair before recommending replacement.

**Steps:**
1. Direct customer to submit a Repair RMA: https://finishlynx.com/support/repair-rma-portal/
2. Customer ships unit to Lynx for assessment.
3. Lynx evaluates whether repair is feasible and provides cost information.

**Products:** RadioLynx receiver (DEC-004).

**Notes:**
- Repair is attempted before replacement is recommended — always direct to RMA portal first for physical damage cases.
- Cost for repair vs. replacement is assessed after Lynx receives and inspects the unit.
- Confirmed: team-approved resolution based on closed support case.

---

### Capture Button Not Working on Windows 11 — USB-Serial Adapter Incompatibility

**Issue:** Capture button works inconsistently or stops working after upgrading to Windows 11 when using a legacy serial capture button via a USB-Serial adapter.

**Symptoms:**
- Yellow triangle warning on USB-Serial adapter in Device Manager
- Driver update fails or Windows keeps overriding the installed driver
- Capture button works for some events then stops responding
- Issue appeared after migrating from Windows 10 to Windows 11
- COM port assignment was difficult to establish

**Likely Causes:**
1. USB-Serial adapter is not compatible with Windows 11 — Windows overrides the driver, causing intermittent failures (confirmed)
2. Legacy serial capture button cable requires a USB-Serial adapter that Windows 11 does not support reliably

**Confirmed Fix:** Replace the legacy serial capture button cable with the current Lynx USB capture button cable (no adapter needed, Windows 11 compatible), or purchase a Windows 11-compatible USB-Serial adapter, or upgrade to the ACM plug-in to eliminate the need for a capture button entirely.

**Steps:**
1. Check Device Manager for a yellow triangle on the USB-Serial adapter — this is a reliable indicator of a driver/compatibility problem with Windows 11.
2. Identify which option fits the customer's situation:
   - **Option A:** Purchase the current Lynx USB capture button cable — no USB-Serial adapter needed, compatible with Windows 11, recommended long-term fix.
   - **Option B:** Find and install a USB-Serial adapter with confirmed Windows 11 driver support.
   - **Option C:** Purchase the ACM plug-in — the most robust solution, eliminates the need for a capture button entirely.
3. If using keyboard capture as a temporary workaround: go to **File > Options**, set Capture Button to **Keyboard**, and press spacebar to toggle capture while the Keyboard Capture dialog has focus.

**Products:** FinishLynx (all versions), USB capture button cable, ACM plug-in, Windows 11.

**Notes:**
- The current Lynx capture button cable is USB (no adapter required) and is the recommended long-term fix for Windows 11 systems.
- A yellow triangle in Device Manager on the USB-Serial adapter is a reliable indicator of a driver/compatibility problem.
- ACM is the most robust solution — removes operator dependency on a physical button entirely.
- Keyboard capture is a viable temporary workaround when the capture button is unavailable.
- Confirmed: team-approved resolution based on closed support case.

---

### Displaying Real-Time Raw Wind Readings from Wind Sonic Wind Gauge — Not Supported

**Issue:** Customer wants to display live raw wind gauge readings on screen from a Lynx Wind Sonic wind gauge connected to the back of an EtherLynx camera.

**Symptoms:** N/A — this is a feature capability question, not an error condition.

**Likely Causes:** N/A.

**Confirmed Fix:** Not possible. Raw live wind readings from the wind gauge cannot be displayed on screen in real time when the gauge is connected to the camera.

**Steps:**
1. Inform the customer that real-time raw wind display is not supported in this configuration — the wind gauge connected to the back of the camera passes wind data to FinishLynx for event result recording only. It does not support a live raw display feed.
2. If live wind display is required, the customer will need a different hardware or software configuration outside of this setup.

**Products:** FinishLynx (all versions), Lynx Wind Sonic wind gauge, EtherLynx cameras.

**Notes:**
- Wind gauge connected to the back of the camera passes wind data to FinishLynx for event result recording — it does not support a raw live display feed.
- Confirmed: team-approved resolution based on closed support case.

---

### No White Background After Alignment / Blurry EtherLynx Image / Grainy IdentiLynx Image

**Issue:** Customer is not getting a white background after camera alignment, EtherLynx image is blurry, and IdentiLynx image is grainy even after attempting focus adjustment.

**Symptoms:**
- White background not appearing after alignment
- EtherLynx photo-finish image is blurry
- IdentiLynx video image is grainy despite focus attempts
- May have occurred after camera was bumped or moved

**Likely Causes:**
1. EtherLynx camera alignment not performed correctly — white background is a key indicator of proper alignment
2. IdentiLynx lens knocked out of place — physical displacement of the lens causes persistent graininess that cannot be resolved through software focus

**Confirmed Fix:**
- EtherLynx: Review camera alignment procedure via the Setup Basics training video.
- IdentiLynx: If lens was knocked out of place, re-seat it using the lens repair video.

**Steps:**
1. For EtherLynx alignment and white background issue — watch the Setup Basics video, specifically the camera alignment section at the 33-minute mark: *Setup Basics* — https://www.youtube.com/watch?v=I1SGn7Jr4A8
2. For IdentiLynx SR or HRS grainy image — check whether the lens has been physically displaced. If so, re-seat it by following this video: *IdentiLynx HRS/SR Lens Repair* — https://www.youtube.com/watch?v=VZPrH4E-Rus

**Products:** EtherLynx (all Vision-series), IdentiLynx SR-2, IdentiLynx HRS.

**Notes:**
- A white background during alignment confirms the camera is pointed correctly at the finish line — no white background typically means the camera is misaligned.
- IdentiLynx lens displacement is a physical issue and cannot be corrected through software focus adjustment alone.
- Confirmed: team-approved resolution based on closed support case.

---

### Camera Not Connecting Due to Wrong Network Adapter Selected — Fix via Camera Network Dropdown in FinishLynx 13.10

**Issue:** FinishLynx connects to the wrong network adapter (wireless instead of wired Ethernet), preventing camera from loading. Resolved by updating to FinishLynx 13.10 and selecting the correct adapter in File > Options.

**Symptoms:**
- Camera fails to connect after upgrading to FinishLynx 13.10 or after wireless is enabled on the computer
- FinishLynx defaulted to the wireless adapter IP instead of the static Ethernet IP
- Camera was working previously on the same computer

**Likely Causes:**
1. FinishLynx 13.10 introduced a Camera Network dropdown in File > Options — on first run with wireless enabled, it may auto-select the wireless adapter IP instead of the static wired Ethernet IP

**Confirmed Fix:** In FinishLynx 13.10 or later, go to File > Options and use the Camera Network dropdown to manually select the static Ethernet IP address instead of the wireless adapter IP.

**Steps:**
1. **Before upgrading:** retrieve the serial number from **Help > About** in the existing FinishLynx installation — it will be required during installation of the new version.
2. Update FinishLynx to version 13.10 or later if not already (all software upgrades are free — download from www.finishlynx.com/support). This fix applies to both FinishLynx and FinishLynx Lite.
3. Go to **File > Options**.
4. Expand the **Camera Network** dropdown. Note: this dropdown was introduced in FinishLynx 13.10 and is not available in earlier versions.
5. Select the static Ethernet IP address (not the wireless adapter IP) — if wireless is active, FinishLynx may have defaulted to the wireless adapter IP.
6. Click OK and restart FinishLynx.
7. Verify camera connects successfully.

**Products:** FinishLynx 13.10+, FinishLynx Lite 13.10+, all EtherLynx cameras.

**Notes:**
- The Camera Network dropdown was introduced in FinishLynx 13.10 — not available in earlier versions.
- Applies to both FinishLynx and FinishLynx Lite.
- If wireless is active on the computer, FinishLynx may default to the wireless adapter IP — always verify the correct adapter is selected after upgrading or when wireless is present.
- All FinishLynx software upgrades are free — customers should always be on the latest version.
- **Before upgrading:** retrieve the serial number from **Help > About** in the existing installation — it will be required during installation of the new version.
- This is also relevant for the IdentiLynx not booting / IP conflict scenario — upgrading to 13.10 and using the Camera Network dropdown is a cleaner fix than disabling WiFi entirely.
- Confirmed: team-approved resolution based on direct product knowledge.

---

### Vonets Wireless Bridge Not Connecting When Plugged into Vision Camera — Setup Misunderstanding

**Issue:** Customer cannot get a Vonets wireless bridge to work when plugged into an EtherLynx Vision camera's USB port, having successfully used it connected to a laptop.

**Symptoms:**
- Vonets bridge works when connected to a laptop but not when connected to the Vision camera USB port
- No wireless connection established when Vonets is plugged into the camera
- Customer suspects USB 2.0 vs. USB 3.0 power incompatibility

**Likely Causes:**
1. Misunderstanding of the intended network topology — the Vonets is not meant to connect the FinishLynx computer wirelessly; it connects the camera to the wired timing network via WiFi (confirmed)
2. USB 2.0 vs. USB 3.0 power difference may be a contributing factor but is secondary to the topology issue

**Confirmed Fix:** Clarify the correct wireless network topology. A wireless access point connects to the wired timing network, the Vonets connects the camera to that access point — the FinishLynx computer stays on the wired network.

**Steps:**
1. Clarify the correct network topology to the customer: the wireless link is camera-to-network, not computer-to-network. The FinishLynx computer stays on the wired network.
2. Connect a wireless access point (e.g., AirLynx or customer-supplied AP) to the **wired** timing network via Ethernet. Ask whether the customer purchased the AirLynx access point or is using their own — this affects configuration guidance.
3. Configure the Vonets bridge to connect to that wireless access point's network.
4. Plug the Vonets into the camera — the camera can now reach the wired timing network wirelessly.
5. Keep the FinishLynx computer on the **wired** timing network — it does not connect to the wireless network.
6. If the Vonets still does not connect when plugged into the camera's USB port, check whether USB power is sufficient. USB 2.0 provides less power than USB 3.0 — if the camera's USB port is 2.0, use an AC power adapter for the Vonets instead.

**Products:** EtherLynx Vision cameras (5L500, 5L600, 5L700), Vonets wireless bridge, AirLynx access point.

**Notes:**
- Common misunderstanding: customers assume the FinishLynx computer connects wirelessly — it does not. The wireless link is camera-to-network, not computer-to-network.
- Always ask whether the customer purchased the AirLynx access point or is using their own — this affects configuration guidance.
- USB 2.0 vs. USB 3.0 power output difference may be relevant if the Vonets requires more power than USB 2.0 provides — AC power adapter is the correct solution if USB power is insufficient.
- Confirmed: team-approved resolution based on closed support case.

---

### Camera Not Visible in FinishLynx Due to Windows Firewall Blocking Incoming Traffic

**Issue:** EtherLynx camera cannot be seen by FinishLynx because Windows Firewall is blocking incoming connections to Lynx.exe.

**Symptoms:**
- Camera does not appear in FinishLynx despite being connected and powered on
- Issue resolves when Windows Firewall is disabled
- Customer had Lynx.exe allowed in outgoing firewall rules but not incoming

**Likely Causes:**
1. Windows Firewall blocking incoming traffic to Lynx.exe — outgoing rules alone are not sufficient (confirmed)
2. Lynx.exe not added to firewall exceptions at all

**Confirmed Fix:** Add Lynx.exe as a firewall exception with both the far-left checkbox and both Private and Public columns checked.

**Steps:**
1. Open **Windows Security** and go to **Firewall & network protection**.
2. Click **Allow an app through firewall**.
3. Click **Change settings**.
4. Scroll down and look for Lynx in the list. If not present, click **Allow another app**, browse to **C:\Lynx\Lynx.exe**, and add it.
5. Once Lynx is in the list, check the **far-left checkbox** and check both **Private** and **Public** columns. All three must be checked — partial exceptions are a common cause of continued failure even after Lynx.exe appears in the list.
6. Click **OK**.
7. Re-enable the firewall for all network types and verify the camera now appears in FinishLynx.

**Products:** FinishLynx (all versions), Windows 10, Windows 11.

**Notes:**
- Outgoing firewall rules alone are not sufficient — incoming rules must also allow Lynx.exe for camera communication to work.
- The far-left checkbox AND both Private and Public columns must all be checked — partial exceptions are a common cause of continued failure.
- Confirmed by customer: Lynx.exe was in outgoing rules only; adding it to incoming rules resolved the issue.
- Confirmed: team-approved resolution based on closed support case.

---

### Exporting Photo-Finish Image with Vertical Lines Overlay — Print Lines Setting in Image Options

**Issue:** Customer cannot export or print a photo-finish image with the vertical lines (hash lines) overlay included.

**Symptoms:**
- Exported or printed image does not include vertical hash lines
- "Print to bitmap" and standard export both produce images without lines
- Customer unsure where the setting is located

**Likely Causes:**
1. Print Lines not configured or not set to "Selected by default" in File > Options > Image tab (confirmed)

**Confirmed Fix:** In File > Options > Image tab, set Print Lines to the desired color and check "Selected by default."

**Steps:**
1. Go to **File > Options** and click the **Image** tab. Note: this setting is in File > Options > Image tab, not in the export dialog itself.
2. Find the **Print Lines** setting.
3. Set the color dropdown to the desired line color (e.g., Black).
4. Check **Selected by default** — without this checked, lines will be excluded from exports even if they are visible on screen.
5. Click OK.
6. Export or print to bitmap — lines will now be included in the output.

**Products:** FinishLynx (all versions).

**Notes:**
- Print Lines controls whether hash/vertical lines are included when exporting or printing the image.
- "Selected by default" must be checked for lines to appear automatically on export — without it, lines are excluded even if visible on screen.
- Setting is located at File > Options > Image tab, not in the export dialog itself.
- Confirmed: team-approved resolution based on closed support case.

### Photo Eye Not Triggering Results on New Computer — Photo Eye Not Set to Internal

**Issue:** On a new laptop, the photo eye (alt finish) connected to the back of the camera does not stop the clock or trigger results, despite scoreboard settings appearing identical to a working computer.

**Symptoms:**
- Clock does not stop when athletes cross the finish line
- Results not triggered by the photo eye / alt finish
- Scoreboard settings look correct and match a working computer
- Issue is specific to a new computer — old computer works fine with same hardware

**Likely Causes:**
1. Photo Eye input in Camera Settings not set to Internal — default may differ on a fresh install (confirmed)

**Confirmed Fix:** In Camera Settings > Inputs tab, set Photo eye to Internal.

**Steps:**
1. Do not troubleshoot Scoreboard Options first — when this symptom appears on a new computer, check Camera Settings > Inputs before anything else.
2. In FinishLynx, open **Camera Settings** for the affected camera.
3. Go to the **Inputs** tab.
4. Set **Photo eye** to **Internal** — this means the camera's built-in beam break sensor is used and must be set on each new installation.
5. Click OK and test.

**Products:** FinishLynx (all versions), EtherLynx cameras with internal photo eye / alt finish input, Microgate MicroTab scoreboard.

**Notes:**
- Scoreboard Options settings (script, serial port, baud rate) are not the cause when this symptom appears — check Camera Settings > Inputs first.
- The correct scoreboard configuration visible in the screenshot: script = uTabLED_Tenth.lss, Serial Port = Lynx Finish (Body), Baud = 19200, Data Bits = 8, Parity = None, Stop Bits = 1.0.
- Photo eye set to Internal means the camera's built-in beam break sensor is used — this must be set on each new installation.
- Confirmed: team-approved resolution based on closed support case.

### RadioLynx Plug-in Not Showing as Installed in FinishLynx Lite — Wrong Installation Directory

**Issue:** RadioLynx plug-in installs successfully but does not appear as installed under Help > About in FinishLynx Lite.

**Symptoms:**
- RadioLynx plug-in downloaded and installed without error
- Help > About in FinishLynx Lite does not show RadioLynx as installed
- Issue occurs on a new computer during software reinstallation

**Likely Causes:**
1. Plug-in installed to the default directory (C:\Lynx) instead of the FinishLynx Lite directory (C:\LynxLite) — FinishLynx Lite does not read plug-ins from C:\Lynx (confirmed)

**Confirmed Fix:** Reinstall the RadioLynx plug-in and manually change the installation directory to C:\LynxLite during setup.

**Steps:**
1. Run the RadioLynx plug-in installer.
2. When prompted for an installation directory, change it from the default **C:\Lynx** to **C:\LynxLite** — FinishLynx Lite does not read plug-ins from C:\Lynx.
3. Complete the installation.
4. Open FinishLynx Lite and go to **Help > About** to confirm RadioLynx is now listed as installed.
5. Note: this same rule applies to all plug-ins compatible with FinishLynx Lite (RadioLynx and Wireless Start) — always verify the install path when reinstalling on a new computer.

**Products:** FinishLynx Lite (all versions), RadioLynx plug-in.

**Notes:**
- FinishLynx Lite installs to C:\LynxLite — all plug-ins must be installed to this directory, not the default C:\Lynx.
- This applies to all plug-ins compatible with FinishLynx Lite (RadioLynx and Wireless Start) — always verify the install path when reinstalling on a new computer.
- Confirmed: team-approved resolution based on closed support case.

---

### IdentiLynx Camera Blacks Out During Capture — Hardware Defect, RMA and Replacement

**Issue:** Newly purchased IdentiLynx camera blacks out during capture. Customer has ruled out cables, ports, and settings.

**Symptoms:**
- IdentiLynx video blacks out intermittently during capture
- Issue reproduces across different cables and PoE switch ports
- No software settings resolve the issue
- Camera is newly purchased (a few months old)

**Likely Causes:**
1. Hardware defect — camera is faulty (confirmed by elimination of all other causes)

**Confirmed Fix:** Customer submits an RMA and Lynx ships a replacement camera while the defective unit is returned.

**Steps:**
1. Confirm hardware defect by elimination — the issue must reproduce across multiple cables and PoE switch ports with no software fix before proceeding to RMA. If so, the camera itself is the confirmed cause.
2. Direct customer to submit a Repair/Replacement RMA: *Submit a Repair RMA to Lynx* — https://finishlynx.com/support/repair-rma-portal/
3. Once RMA is received in the system, ship a replacement camera. Note: a replacement is sent only when the camera is brand new and the defect is clearly hardware-related — loaners are not offered for older units.
4. Confirm shipping address with the customer — Lynx ships to the RMA address by default but may need an alternate address.
5. For customers mid-season with active meets, prioritize getting the replacement shipped promptly once the RMA is received.

**Products:** IdentiLynx (SR-2, HRS), Bronze Vision package.

**Notes:**
- Hardware defect can be confirmed by elimination: if the issue reproduces across multiple cables and PoE switch ports with no software fix, the camera itself is the cause.
- For customers mid-season with active meets, prioritize getting the replacement shipped promptly once the RMA is received.
- **Loaner/replacement policy:** A replacement unit is sent while the defective camera is returned only when the camera is brand new and the issue is clearly a hardware defect. Loaners are not offered for older units.
- Lynx ships the replacement to the RMA address by default — confirm with customer if a different shipping address is needed.
- Confirmed: team-approved resolution based on closed support case.

---

### ⚠️ PENDING — IdentiLynx Camera Not Powering On After Storage — No PoE Response

**Issue:** IdentiLynx HRS camera will not power on via PoE after being stored in a controlled environment. No power response across multiple PoE sources.

**Symptoms:**
- Camera shows no signs of power when connected via PoE
- Issue reproduces across multiple PoE cables and PoE switches (including a known-working switch)
- Camera was stored properly in its case in a controlled indoor environment
- Camera worked correctly at end of previous season

**Likely Causes:**
1. Camera hardware failure — possible internal fault that developed during storage
2. Network/IP issue where camera is actually receiving power but not visible on the network (IP-Toolbox will confirm or rule this out)

**Confirmed Fix:** PENDING — awaiting IP-Toolbox diagnostic results from customer.

**Steps:**
1. Note: multiple PoE sources have already been tested and eliminated — this points strongly toward a hardware fault rather than a network/cable issue.
2. Direct customer to install and run **IP-Toolbox** with the IdentiLynx connected — this detects cameras on the network independently of FinishLynx and is useful for distinguishing power failure from network/IP misconfiguration: https://www.dropbox.com/scl/fi/u7akj1ubo9l20ircufsp0/IP-Toolbox.msi?rlkey=vm0w0a5mt3vqydi6xf6ol8a00&st=prrterpu&dl=0
3. If IP-Toolbox finds the camera — request a screenshot of the information shown for further diagnosis.
4. If IP-Toolbox finds nothing — camera is likely not receiving power or has a hardware fault; escalate to RMA.

**Products:** IdentiLynx HRS.

**Notes:**
- Multiple PoE sources tested and eliminated — points strongly toward camera hardware fault rather than network/cable issue.
- IP-Toolbox detects cameras on the network independently of FinishLynx — useful for distinguishing power failure from network/IP misconfiguration.
- Update this entry to Confirmed once customer follow-up is received.

---

### Portable Lynx Display Cannot Connect via Ethernet Directly — HDMI Required

**Issue:** Customer wants to connect the Portable Lynx Display via Ethernet/RJ45 instead of HDMI after their HDMI cable failed, and asks about IP settings and default IP.

**Symptoms:** N/A — this is a capability/architecture question, not an error condition.

**Likely Causes:** N/A — customer misunderstanding of how the display receives video data.

**Confirmed Fix:** Not possible to drive the Portable Display via raw Ethernet. HDMI is required to feed video data to the display.

**Steps:**
1. Inform the customer that the Portable Display requires HDMI video input — it cannot receive or generate graphics from a raw network/Ethernet connection. It behaves like a monitor or TV and shows whatever video is fed to it via HDMI.
2. The RJ45 port on the display carries internal LED panel data from the sending card inside the display — it is not standard Ethernet and cannot be used for FinishLynx or ResulTV data input.
3. If using ResulTV, explain the correct data path: FinishLynx sends data to the ResulTV computer over Ethernet → ResulTV generates the graphics → ResulTV computer outputs to the display via HDMI. Ethernet never goes directly to the display.
4. Refer customer to the LED Display Options datasheet for architecture overview: *Lynx LED Video Options* — https://finishlynx.com/wp-content/uploads/2024/03/Lynx_LED_Display_Options.pdf

**Products:** Lynx Portable Display, ResulTV, ResulTV-VDM.

**Notes:**
- The Portable Display behaves like a monitor or TV — it shows whatever video is fed to it via HDMI. It has no ability to generate graphics on its own from a network connection.
- The RJ45 port on the display carries internal LED panel data from the sending card inside the display — it is not standard Ethernet and cannot be used for FinishLynx or ResulTV data input.
- Daisy-chaining multiple Portable Displays via RJ45 is technically possible but uncommon.
- The network path in a ResulTV setup is: FinishLynx → ResulTV computer (via Ethernet) → Portable Display (via HDMI). Ethernet never goes directly to the display.
- Confirmed: team-approved resolution based on closed support case.

---

### Using Manual Start in FinishLynx Without a Camera Loaded — Hardware Type None + LapTime From Image

**Issue:** Operator wants to use a manual start in FinishLynx but does not have a camera loaded, and FinishLynx will not function normally without hardware present.

**Symptoms:** N/A — this is a workflow question, not an error condition.

**Likely Causes:** N/A.

**Confirmed Fix:** Set Hardware Type to None, create a LapTime Device set to "From Image" in LapTime Options, then restart FinishLynx.

**Steps:**
1. In FinishLynx, set **Hardware Type** to **None**.
2. Go to **LapTime > Options**.
3. In the LapTime Options window, click **New** to create a new LapTime Device.
4. Set the **Device** to **From Image**.
5. Click OK and **restart FinishLynx** — the restart is required. The LapTime Device will not go to Running status without it.
6. After restart, confirm the LapTime Device status has changed from **Not Loaded** to **Running**.

**Products:** FinishLynx (all versions).

**Notes:**
- The restart after step 4 is required — the LapTime Device will not go to Running status without it.
- This workflow is useful for timing scenarios where no camera hardware is available or needed.
- Confirmed: team-approved resolution based on direct product knowledge.

---

### Opening and Editing Events on a Second Laptop While Timing is Active — Multi-User Mode

**Issue:** Operator wants to open a past event on a second laptop to fix splits or timing issues while FinishLynx is actively capturing on the timer laptop.

**Symptoms:** N/A — this is a workflow question, not an error condition.

**Likely Causes:** N/A.

**Confirmed Fix:** Use Multi-User Mode. Set the second laptop to Hardware Type None, open the event file normally — FinishLynx opens it in reader mode and merges changes on save.

**Steps:**
1. Ensure both computers are on the same network with access to the same Event Directory (shared network folder).
2. To view event images (not just results) on the second laptop, also ensure the second laptop has access to **C:\Lynx\Temp** on the primary computer. Images are stored there during an active race — without this access, images will not carry over.
3. On the second laptop, go to **File > Options > General tab**.
4. Set **Hardware Type** to **None**.
5. Click OK and restart FinishLynx.
6. Open the event file on the second laptop as normal — it will open in reader mode.
7. Evaluate and modify results; when saved, FinishLynx will merge changes back into the event file without overwriting the primary computer's work.
8. To also add or edit splits on the second laptop:
   - Go to **LapTime > Options** and add a new device.
   - Set **Device** to **From Image**.
   - Click OK and restart FinishLynx — status will change from Not Loaded to Running.

**Products:** FinishLynx (all versions).

**Notes:**
- Both computers must have access to the same Event Directory (shared network folder).
- To view event images (not just results) on the second laptop while a race is ongoing, both computers must also have access to C:\Lynx\Temp on the primary computer. Images are first stored there during an active race — without correct permissions, images will not carry over to the second laptop.
- Reader mode allows result editing without interfering with active capture on the timer laptop.
- Changes saved on the second laptop are merged back into the event file — they do not overwrite the primary capture computer's work.
- LapTime From Image setup mirrors the Manual Start without Camera workflow — restart required for status to go from Not Loaded to Running.
- Confirmed: team-approved resolution based on closed support case.

---

### Dark or Unreadable Images During Night / Low-Light Meets

**Issue:** Camera images are too dark to read clearly when timing under artificial lighting or at night, even after attempting auto iris and manual adjustments.

**Symptoms:**
- Race images are very dark or underexposed under artificial track lighting
- Auto Iris adjustment does not sufficiently brighten the image
- Manual gain adjustments help somewhat but image remains noisy or unreadable

**Likely Causes:**
1. Camera does not have the LuxBoost upgrade — standard gain and iris adjustments are insufficient in low-light environments
2. Available ambient light is genuinely too low for standard camera settings to compensate
3. Frame rate is set too high for low-light conditions — higher frame rates reduce light per frame

**Confirmed Fix:** Purchase and install the LuxBoost upgrade for the Vision-series camera. Supplement with additional physical lighting at the finish line if needed. Reduce frame rate slightly as a secondary measure (trade-off: lower temporal resolution).

**Steps:**
1. Confirm the camera is a Vision-series (5L500, 5L600, or 5L700) — LuxBoost is only available on Vision-series cameras.
2. If LuxBoost is not yet installed, contact Lynx Sales to purchase the upgrade (sales@finishlynx.com or nlandry@finishlynx.com).
3. Once LuxBoost is installed, access **Camera Settings** in FinishLynx.
4. To set LuxBoost manually: uncheck **Auto LuxBoost**, then set the **LuxBoost** drop-down to 2, 3, or 4 (2x–4x amplification). Higher values brighten the image more but may increase noise at extreme settings.
5. To use Auto LuxBoost: check **Auto LuxBoost** in Camera Settings — FinishLynx will automatically adjust LuxBoost based on current gain levels. Set **Max LuxBoost** to cap the amplification level.
6. As a secondary measure, reduce frame rate slightly — lower frame rates allow more light per capture. Note this reduces temporal resolution and is not ideal for short sprint events.
7. If LuxBoost is already installed and images are still dark, consider adding a dedicated spotlight or artificial light source aimed at the finish line.

**Products:** EtherLynx Vision (5L500), EtherLynx Vision PRO (5L600), EtherLynx Vision PRO X (5L700).

**Notes:**
- LuxBoost is an optional upgrade — it is not included by default on the base Vision (5L500). The Vision PRO (5L600) includes LuxBoost4 standard.
- LuxBoost amplification levels: 1x (off), 2x, 3x, 4x on the Vision 5L500; up to 8x on the Vision PRO depending on frame rate and pixel height.
- Auto LuxBoost (ALB) adjusts LuxBoost automatically based on gain — similar to how Auto Iris works. ALB will only change the LuxBoost setting when capture and alignment are turned off.
- Reducing frame rate is a valid but limited workaround — not recommended as the sole solution for sprint events where temporal accuracy matters.
- Physical supplemental lighting at the finish line is often necessary alongside LuxBoost for very dark conditions.
- LuxBoost upgrade SKUs: 5LLUX4 (Level 4), 5LLUX8 (Level 8), LuxUpgrade8 (upgrade from Lux4 to Lux8).
- Domestic sales contact for upgrade purchase: Nora Landry — nlandry@finishlynx.com

---

### Customer Requests Older FinishLynx Version to Support Legacy Camera

**Issue:** Customer believes they need to downgrade FinishLynx software to support an older or borrowed camera model.

**Symptoms:**
- Customer requests a specific older version of FinishLynx (e.g., v10.x) to match a borrowed or legacy camera
- Customer believes newer software is incompatible with older cameras

**Likely Causes:**
1. Misunderstanding of FinishLynx backwards compatibility — newer software always supports older cameras
2. Actual issue may be unrelated to software version (e.g., FinishLynx Lite limitation, camera type mismatch)

**Confirmed Fix:** Newer FinishLynx software is always backwards compatible with older cameras — downgrading is not needed or recommended. Identify the actual root cause before taking any action.

**Steps:**
1. Confirm to the customer that the newest version of FinishLynx always supports older cameras — downgrading is not necessary.
2. Check the serial number the customer provides. If it ends in a format consistent with a Lite license, confirm whether they are running FinishLynx Lite.
3. If running FinishLynx Lite: Lite only loads Scholastic cameras. Non-Scholastic cameras require the full version of FinishLynx.
4. Ask the customer to check the serial number label on the bottom of the borrowed camera to identify its model.
5. If the borrowed camera is non-Scholastic and the customer only has a Lite license, they will need access to a full FinishLynx license to use that camera.

**Products:** FinishLynx (all versions), FinishLynx Lite.

**Notes:**
- FinishLynx software upgrades are always free — direct customers to www.finishlynx.com/support to download the latest version.
- FinishLynx Lite serial numbers can be identified by their format — flag this when a customer provides a serial number and something seems off.
- FinishLynx Lite installs to C:\LynxLite (not C:\Lynx) and only loads Scholastic cameras. Full FinishLynx is required for all other camera models.
- Never provide older versions of FinishLynx — always direct customers to the current version.
- Downgrading FinishLynx is not supported or recommended under any circumstances.

---

### Adding a Custom Color (e.g., Orange) in ResulTV

**Issue:** Customer wants to use a color that is not available in the ResulTV color drop-down menu.

**Symptoms:**
- Color drop-down in ResulTV shows a limited list of preset colors
- Desired color (e.g., orange) is not listed

**Likely Causes:** N/A — this is a workflow/capability question, not an error condition.

**Confirmed Fix:** Select "Custom" from the color drop-down and enter the RGB values for the desired color.

**Steps:**
1. In ResulTV, open the color drop-down for the element you want to change.
2. Select **Custom** from the list.
3. Enter the RGB values for the desired color (e.g., Orange = R:255, G:165, B:0).
4. Confirm and apply.

**Products:** ResulTV (all versions).

**Notes:**
- The default color list in ResulTV is limited — Custom RGB entry is the correct method for any color not in the list.
- Standard RGB values for common colors can be looked up easily if the customer doesn't know them.

---

### LinkGate Transmitter Freezing, Failing to Turn On, or Screen Fading

**Issue:** LinkGate transmitter freezes during use or struggles to power on.

**Symptoms:**
- Transmitter display is on but unit stops functioning / freezes mid-use
- Unit struggles to turn on or powers on inconsistently
- Screen may appear to be fading

**Likely Causes:**
1. Battery issue — low or failing battery can cause intermittent power problems and screen fading
2. Internal hardware fault

**Confirmed Fix:** PENDING — diagnostic follow-up needed. Ask customer to describe symptoms more specifically (e.g., screen fading, partial power, etc.) before recommending repair or replacement.

**Steps:**
1. Ask the customer to describe the power-on behavior more specifically — in particular, whether the screen appears to be fading. This helps distinguish a battery issue from a hardware fault.
2. If screen fading is confirmed, likely a battery issue — may be repairable.
3. If the unit is confirmed faulty beyond repair, the customer can purchase a replacement transmitter directly through Lynx — direct to Nora Landry (Domestic Sales): nlandry@finishlynx.com.
4. Customers do not need to go direct to the LinkGate manufacturer — Lynx handles sales and support for LinkGate units.

**Products:** LinkGate (EncRadio transmitter).

**Notes:**
- Lynx sells and supports LinkGate units directly — customers do not need to contact the manufacturer (Microgate) for purchases.
- Domestic sales contact: Nora Landry — nlandry@finishlynx.com
- Screen fading is a specific symptom worth asking about — it may indicate a battery problem that can be addressed without full replacement.
- Update this entry to Confirmed once diagnostic outcome and resolution are known.

---

### Error Writing LIF File — Error Code 3002

**Issue:** FinishLynx displays "Error writing LIF file (3002)" when saving an event.

**Symptoms:**
- Error 3002 appears when attempting to save an event in FinishLynx
- LIF file is not being written to the expected output location

**Likely Causes:**
1. The Output Directory in FinishLynx Database settings points to a network location that no longer exists
2. The Output Directory exists but FinishLynx does not have write permission to it
3. Network path is unreachable at the time of saving

**Confirmed Fix:** Check and correct the Output Directory path in File > Options > Database tab.

**Steps:**
1. In FinishLynx, go to **File > Options > Database** tab.
2. Check the **Output Directory** field — this is where FinishLynx attempts to write the LIF file when an event is saved.
3. If the path points to a network location, verify that the location exists and is currently accessible.
4. If the path is inaccessible or incorrect, update it to a valid local or network path that FinishLynx has write permission to.
5. Click OK and attempt to save the event again.

**Products:** FinishLynx (all versions).

**Notes:**
- Error 3002 specifically indicates a failure to write the LIF file to the Output Directory — it is not a timing or camera error.
- The most common cause is a network Output Directory that is offline, has been renamed, or has had permissions changed.
- Also check that the meet management software (HyTek, MeetPro, etc.) is pointed to the same directory and has read access to it.
- Note: the original response used | as a navigation separator — Lynx email standard is > (e.g., File > Options > Database).

---

### Installing a Motorized (Remote Control) Lens to Replace a Manual Lens

**Issue:** Customer needs instructions for safely removing a manual lens and installing a motorized/remote control lens on an EtherLynx Vision camera.

**Symptoms:** N/A — this is a hardware installation question, not an error condition.

**Likely Causes:** N/A.

**Confirmed Fix:** Install the CS-C adapter ring on the camera body first (required for C-Mount lenses), then mount the lens carefully without overtightening.

**Steps:**
1. Remove the existing manual lens by unscrewing it from the camera body.
2. Confirm the lens type being installed — the 8-48mm motorized zoom lens (C848M) is a C-Mount lens.
3. For C-Mount lenses on a Vision-series camera: install the **CS-C Mount adapter ring** (MCS-C) onto the camera body first. This is required to achieve correct focus distance. Do not skip this step.
4. Thread the motorized lens onto the adapter ring carefully.
5. **Do not overtighten** — stop when the lens reaches its natural stopping point. Do not force or push further.
6. Connect the lens control cable to the Remote Control port on the back of the camera.
7. In FinishLynx, go to Camera Settings > Setup tab and confirm the Iris Type is set to **Normal** for the Computar 8-48mm lens.
8. Reference video for visual guidance: *8-48mm Remote Control Lens Installation* — https://youtu.be/WypcUC6aXBQ?t=87

**Products:** EtherLynx Vision (5L500), EtherLynx Vision PRO (5L600), C-Mount 8-48mm Motorized Zoom Lens (C848M), CS-C Mount Adapter (MCS-C).

**Notes:**
- The CS-C adapter ring (MCS-C) is required for ALL C-Mount lenses on Vision-series cameras — manual or motorized. Do not use the adapter with CS-Mount lenses.
- Do not overtighten the lens — stop at the natural stopping point. Forcing past this can damage the lens mount or camera body.
- The "washer" the customer refers to is the CS-C Mount adapter ring — it is a required part of the installation, not optional hardware.
- After installation, verify correct iris type in Camera Settings > Setup tab: Computar 8-48mm = Normal; Computar 2.8-10mm = P-Iris.
- A remote control lens cannot be manually controlled once connected — all zoom, focus, and iris adjustments are made through FinishLynx.

---

### Vision Camera Lens Loose and Cannot Hold Focus — Silver Screw Fix

**Issue:** Vision camera lens is physically loose and the image cannot be focused or stays blurry regardless of adjustments.

**Symptoms:**
- Lens feels loose on the camera
- Image is blurry and cannot be resolved through focus ring or software adjustments
- Focus may drift or cannot be maintained

**Likely Causes:**
1. Lens locking screw has loosened over time or through handling — lens is not seated firmly enough to hold focus (most common)
2. CS-C adapter ring missing or incorrectly installed — verify adapter first before assuming loose screw is the cause

**Confirmed Fix:** Follow the silver screw fix procedure shown in the lens repair video.

**Steps:**
1. First rule out CS-C adapter issue — confirm the correct adapter is in place for the lens type being used (C-Mount requires adapter, CS-Mount must not use adapter).
2. If adapter is correct and lens is still loose or cannot focus, refer customer to the silver screw fix video: *Fix Out-of-Focus 8-48mm Lens* — https://www.youtube.com/watch?v=WypcUC6aXBQ
3. Follow the procedure in the video to tighten the silver locking screw that secures the lens in place.
4. After tightening, re-attempt focus adjustment.

**Products:** EtherLynx Vision (5L500), EtherLynx Vision PRO (5L600), C-Mount 8-48mm lens (C848, C848M).

**Notes:**
- This is a separate issue from the CS-C adapter blur problem — that issue is caused by incorrect flange distance; this issue is caused by the lens physically not being secured.
- The silver screw fix video covers both lens installation and the locking screw fix — the relevant portion starts at the beginning of the video.
- If the lens cannot be secured through this fix, the lens or camera mount may need physical repair — escalate to RMA if needed.

---

### Camera Height and Tripod Placement Recommendations

**Issue:** Customer asks how high to mount the camera and whether to place the tripod on a table.

**Symptoms:** N/A — this is a setup/positioning question, not an error condition.

**Likely Causes:** N/A.

**Confirmed Fix:** Mount camera at 6–7 feet on a stable tripod placed directly on the ground. Do not place the tripod on a table.

**Steps:**
1. Place the tripod directly on the ground — do not place it on a table. A tripod on a table introduces instability and wobble that will affect camera alignment.
2. Set camera height to approximately 6–7 feet as a standard starting point.
3. Aim for a camera angle of roughly 30–40 degrees from lane one to achieve a good viewing angle on the finish line.
4. Only go higher than 6–7 feet if using a heavy, weighted tripod that can resist wobble and wind at extended height.
5. Stability is the priority — a lower, stable camera position is better than a higher, unstable one.

**Products:** EtherLynx Vision (all Vision-series cameras), camera tripod.

**Notes:**
- Stability is the primary concern for camera placement — wobble affects alignment and image quality.
- 6–7 feet is the standard height recommendation for most setups with a standard tripod.
- Greater height is only appropriate with a properly weighted, stable tripod that won't shift in wind.
- Do not place a tripod on a table — this is explicitly not recommended due to instability risk.
- The 30–40 degree angle from lane one is a guideline for optimal finish line coverage.

---

### Lens Cable Fraying at Attachment Point on Lens Body

**Issue:** The remote control lens cable is fraying or tearing where it is secured to the side of the lens.

**Symptoms:**
- Cable is visibly fraying, splitting, or tearing at the point where it is zip-tied or affixed to the lens body
- Cable stress point is at or near the lens attachment

**Likely Causes:**
1. Zip-tie securing the cable to the lens body is too tight or positioned in a way that creates stress on the cable jacket over time

**Confirmed Fix:** Short-term — cut the zip-tie to relieve cable stress and stabilize with electrical tape. Long-term — send lens to Lynx for cable repair during an off-season break.

**Steps:**
1. **Short-term:** Cut the zip-tie that is securing the cable to the lens body — this relieves the mechanical stress causing the fraying.
2. Use electrical tape to stabilize and protect the frayed section of the cable.
3. **Long-term:** Send the lens to Lynx for professional cable repair when there is a break in the meet schedule.
4. Direct customer to the RMA/repair portal to initiate the repair: https://finishlynx.com/support/repair-rma-portal/

**Products:** Remote control lens (C848M, C1275M), lens cable.

**Notes:**
- The zip-tie is the most common cause of cable stress at this location — cutting it is safe and the correct first step.
- Electrical tape is a valid short-term stabilizer but is not a permanent fix.
- Do not attempt a permanent repair mid-season — advise the customer to continue with the tape fix until a scheduled break.
- Lynx can repair the cable — direct to the repair portal: https://finishlynx.com/support/repair-rma-portal/

---

### FinishLynx and ResulTV Not Connecting When Running on Same Laptop

**Issue:** FinishLynx and ResulTV are installed on the same laptop but cannot establish a connection. ResulTV shows "Not Running" or "Not Connected" and FinishLynx only shows Serial as a scoreboard option.

**Symptoms:**
- ResulTV Source shows "Not Running" when Serial Port is set to None
- ResulTV shows "Not Connected" when set to Network with loopback IP 127.0.0.1
- FinishLynx Scoreboard options only show Serial — no Network option visible
- Both applications show "Not Connected" after switching to Network mode

**Likely Causes:**
1. FinishLynx version is too old to support network scoreboard connections — versions before 13.x do not show Network as a scoreboard option (most common)
2. Port number is set to 0 in one or both applications — port 0 is invalid and will prevent connection
3. One application is set to Connect and the other is also set to Connect — one must be set to Listen and the other to Connect

**Confirmed Fix:** Update FinishLynx to the latest version (13.10+), set both applications to Network mode using loopback IP 127.0.0.1, set port to a valid number (e.g., 1024) in both, and ensure one side is set to Connect and the other to Listen.

**Steps:**
1. Update FinishLynx to the latest version — download from https://finishlynx.com/product/software/finishlynx-results-software/ (serial number can be found in FinishLynx under Help > About).
2. After updating, open FinishLynx and go to **Scoreboard > Options**.
3. Set the scoreboard connection type to **Network**.
4. Set one application to **Listen** and the other to **Connect** — they cannot both be set to the same mode.
5. Set the IP to **127.0.0.1** (loopback) on both since they are on the same laptop.
6. Set the **Port** to a valid number — use **1024** or similar. Do not leave the port at 0 — port 0 is invalid and will result in "Not Connected."
7. Confirm the same port number is entered in both FinishLynx and ResulTV.
8. Click OK in both and check that the connection status changes to Connected.

**Products:** FinishLynx (12.x and later), ResulTV (6.x and later).

**Notes:**
- Network scoreboard connection options are only available in FinishLynx 13.x and later — updating is required if the customer is on 12.x.
- Port 0 is an invalid port and will always result in "Not Connected" — this is the most common cause of persistent connection failure after updating.
- Both applications must use the same port number.
- One application must be set to Listen and the other to Connect — they cannot both be the same.
- When both are on the same laptop, use loopback IP 127.0.0.1.
- FinishLynx software upgrades are always free — direct to www.finishlynx.com/support.

---

### Recommended Camera Settings for Challenging Lighting Conditions — Sunny and Dark/Night

**Issue:** Customer asks for baseline camera settings to start from when timing in difficult lighting — both very sunny conditions and dark/artificial lighting at night.

**Symptoms:** N/A — this is a settings guidance question, not an error condition.

**Likely Causes:** N/A.

**Confirmed Fix:** Use AGC (Automatic Gain Control) as the default gain method for variable outdoor light. Add Auto Iris if using a remote control lens. For artificial/low-light conditions, add LuxBoost, open the iris, reduce frame rate, and supplement with physical lighting.

**Steps:**

**For all outdoor variable lighting (sun, clouds, sunset, etc.):**
1. Set **Gain Method** to **AGC** (Automatic Gain Control) in Camera Settings — this handles natural lighting variation automatically.
2. If using a remote control lens, also enable **Auto Iris** — this works alongside AGC to adjust the iris as light changes.
3. Reference: Online Manual — Gain Control Tools: https://help.finishlynx.com/Content/OnlineManual/Gain.htm

**For artificial lighting / dark stadiums at night:**
1. Enable **Auto Iris** (or open the iris manually if not using a remote lens) to allow maximum light in.
2. If the camera is a Vision-series (5L500, 5L600, 5L700), add the **LuxBoost upgrade** for significantly improved low-light performance — contact Nora Landry (Domestic Sales): nlandry@finishlynx.com.
3. Reduce **frame rate** slightly — lower frame rates allow more light per capture (trade-off: reduced temporal resolution, not ideal for short sprints).
4. Supplement with **physical spotlights** aimed at the side of athletes that the camera sees — additional lighting at the finish line is often necessary in poorly lit stadiums.

**Products:** EtherLynx Vision (all Vision-series cameras), remote control lens (C848M, C1275M).

**Notes:**
- AGC is the recommended default for any outdoor timing where light will vary — do not use Manual Gain unless a specific condition requires it.
- Auto Iris works in combination with AGC — use both together when a remote control lens is available.
- LuxBoost is the most effective tool for artificial/low-light conditions — frame rate reduction and physical lighting are supplements, not replacements.
- Shooting directly into the sun: open iris carefully (Auto Iris will handle this with AGC) — avoid overexposure by letting AGC manage gain automatically.
- These are starting baselines — fine-tuning will vary by venue and conditions.
- Manual Gain is appropriate only when lighting is stable and controlled (e.g., fixed indoor lighting with no variation).

---

### Camera Not Showing Up in FinishLynx After New Computer Setup

**Issue:** Camera does not appear in FinishLynx after migrating to a new computer. Camera works correctly on the old computer.

**Symptoms:**
- Camera does not load or appear in FinishLynx on the new computer
- FinishLynx does not appear to be "looking for" camera or hardware
- Camera IP address not visible in File > Options despite settings appearing correct
- Camera works normally on the old computer — rules out camera hardware fault
- Customer may be using USB-C to Ethernet adapter on new laptop

**Likely Causes:**
1. Hardware Type in FinishLynx set incorrectly — not set to Ethernet or Detect (most common)
2. Network switch not powered on or Ethernet not connected before FinishLynx was opened — camera IP will not appear if switch is off or disconnected at launch
3. Firewall on new computer blocking FinishLynx — new computers require firewall rule to be set for C:\Lynx\Lynx.exe
4. FinishLynx version not updated on new computer
5. USB-C to Ethernet adapter driver issue — adapter may not be properly recognized or configured on Windows 11

**Confirmed Fix:** Set Hardware Type to Ethernet or Detect in File > Options, ensure switch is powered and Ethernet connected before launching FinishLynx, and verify firewall settings. If unresolved, use TeamViewer for remote diagnosis.

**Steps:**
1. Confirm FinishLynx is updated to the latest version (13.10) on the new computer.
2. Ensure the Ethernet switch is powered on and the computer is connected to it before opening FinishLynx.
3. In FinishLynx, go to **File > Options > General tab**.
4. Set **Hardware Type** to **Ethernet** or **Detect**.
5. Click OK, then close and reopen FinishLynx.
6. After reopening, go to **File > Options** and check the **Camera Network** setting — the computer's IP address should now be visible. If it is not, the network connection is not being recognized.
7. If IP is still not visible, check Windows firewall — add C:\Lynx\Lynx.exe as an allowed application through Windows Security (not Control Panel). Refer to the Camera Boot Troubleshooting Guide: https://finishlynx.com/wp-content/uploads/2012/08/Camera_Boot_Troubleshooting_Guide.pdf
8. If using a USB-C to Ethernet adapter: confirm the adapter is recognized in Windows Settings > Network and that it has been assigned an IP address on the correct subnet. Windows 11 networking guide may be needed.
9. If the issue persists after all above steps, direct customer to install TeamViewer and provide ID and password for remote session: www.finishlynx.com/support

**Products:** FinishLynx (all versions), EtherLynx Vision cameras, IdentiLynx cameras, Windows 11.

**Notes:**
- Hardware Type must be set to Ethernet or Detect — if left at None or an incorrect setting, FinishLynx will not search for cameras at all.
- The switch must be powered on and Ethernet connected BEFORE opening FinishLynx — camera IP will not appear if the network is not active at launch.
- Firewall rules do not carry over from old computers — always check firewall on any new machine. Always use C:\Lynx\Lynx.exe when adding to Windows Firewall.
- USB-C to Ethernet adapters can cause network recognition issues on Windows 11 — worth flagging early when a new laptop is involved.
- Camera working on old computer is a key diagnostic confirmation — rules out camera hardware as the cause and points to new computer configuration.
- Do not recommend a phone call as a first step — direct to TeamViewer for remote support after troubleshooting steps are exhausted.

---

### Vision Camera Frame Height Locked at 640 Despite Hi-Res Upgrade

**Issue:** Customer has the Hi-Res upgrade on an EtherLynx Vision (5L500) and expects to capture at up to 1,280 pixels height, but the frame height appears locked at 640.

**Symptoms:**
- Camera has Hi-Res upgrade but frame height shows 640 pixels maximum
- Customer expects 1,280 pixel height based on upgrade marketing

**Likely Causes:**
1. Pixel Mode is set to 100% — the Hi-Res upgrade unlocks 200% digital zoom (1,280 pixels display height) but this must be manually enabled

**Confirmed Fix:** Set Pixel Mode to 200% in Camera Settings or the Hardware Control screen. This doubles the displayed frame height to 1,280 pixels.

**Steps:**
1. In FinishLynx, access **Camera Settings** or the **Hardware Control** screen.
2. Click on the **Zoom** value and set **Pixel Mode** to **200%**.
3. The displayed frame height will change from 640 to 1,280 pixels.

**Products:** EtherLynx Vision (5L500) with Hi-Res upgrade.

**Notes:**
- The 1,280 pixel height at 200% is a **digital zoom** — it does not increase the number of physical sensor pixels being used. The sensor pixel count is the same at 640 (100%) and 1,280 (200%); the image is digitally scaled.
- Reference: Online Manual Digital Zoom Feature — https://help.finishlynx.com/Content/OnlineManual/DigitalZoom.htm
- This is a common point of confusion — the Hi-Res upgrade marketing references 1,280 pixels, but this requires enabling 200% Pixel Mode manually. It is not automatic.
- Max frame rate at 200% Pixel Mode may be lower than at 100% — advise customer to check frame rate limits at the higher pixel mode.

---

### HyTek Meet Manager Rounding Times to Tenths Instead of Hundredths or Thousandths

**Issue:** Times transferred from FinishLynx to HyTek Meet Manager are being rounded to the tenths place instead of displaying to the hundredths or thousandths.

**Symptoms:**
- Meet Manager shows times rounded to tenths (e.g., 11.2 instead of 11.23 or 11.234)
- Issue appeared after previously working correctly
- Same equipment and setup used for several years without prior problems

**Likely Causes:**
1. Time Precision in FinishLynx Database settings is not set to Thousandths (most common)
2. Manual start is being used in FinishLynx — manual start times are only recorded to the tenth because they are not fully automatic times (FAT)

**Confirmed Fix:** Set Time Precision to Thousandths in File > Options > Database tab. If times are still rounding to tenths after this change, confirm whether a manual start is being used — manual start inherently limits precision to tenths.

**Steps:**
1. In FinishLynx, go to **File > Options > Database** tab.
2. Set **Time Precision** to **Thousandths**.
3. Click OK and re-export or re-send the results to Meet Manager.
4. If times are still showing to the tenth after this change, check whether a **Manual Start** is being used in FinishLynx.
5. If Manual Start is confirmed: times will only record to the tenth because manual start times are not fully automatic (FAT). To achieve hundredths/thousandths precision, a fully automatic start signal (electronic start gun, start sensor, or RadioLynx) is required.

**Products:** FinishLynx (all versions), HyTek Meet Manager.

**Notes:**
- Time Precision must be set to Thousandths in FinishLynx for full precision times to be written to the LIF file and passed to Meet Manager.
- Manual start times are inherently limited to tenth-of-a-second precision — this is by design, not a bug. Only fully automatic start signals produce hundredths/thousandths precision.
- This is a common source of confusion — the issue is not in Meet Manager but in FinishLynx's Time Precision setting or start method.
- If the setting was correct previously and has changed, check whether FinishLynx was reinstalled or settings were reset on the new or existing computer.

---

### "Error Capturing" / "No Cameras Enabled" Despite Camera Visible in Alignment Mode

**Issue:** FinishLynx shows "no cameras enabled" error when attempting to capture an event, despite the camera being visible and working correctly in 2D and 1D alignment modes.

**Symptoms:**
- "Error capturing" message appears when starting an event
- "No cameras enabled" error displayed
- Camera is visible and functioning normally in 2D alignment (EasyAlign) and 1D alignment modes
- Capture is set to Yes in the camera status
- Rebooting, different cables, and static IP changes have not resolved the issue

**Likely Causes:**
1. Capture is set to No in the camera status bar — click to toggle to Yes (check first, most visible cause)
2. An Event Template is active that has the camera disabled or references a different camera — the template overrides camera settings for each new event (most common when capture is already set to Yes)

**Confirmed Fix:** Check for an active Event Template in File > Options > Event tab. If a template is set, it may have the camera disabled or point to a different camera. Set Event Template to None and retest.

**Steps:**
1. First, check the camera status bar in FinishLynx — confirm **Capture** is set to **Yes**. If it shows No, click it to toggle to Yes and retest.
2. If Capture is already set to Yes and the error persists, go to **File > Options > Event tab**.
3. Check the **Event Template** setting — if a template is selected, it may be overriding camera settings.
4. Set **Event Template** to **None**.
5. Click OK and open or create a new event to test capture.

**Products:** FinishLynx (all versions), EtherLynx Vision cameras.

**Notes:**
- The camera being visible in alignment mode does not mean it is enabled for capture — alignment and capture are independent states.
- Event Templates override camera assignments for each new event — a template configured with a different camera or with capture disabled will cause "no cameras enabled" even when the camera is otherwise working.
- Setting a static IP is not necessary and not recommended — FinishLynx assigns camera IPs automatically. Static IP configuration can sometimes cause issues rather than resolve them.
- If Event Template is already set to None and the issue persists, escalate to TeamViewer session.

---

### FinishLynx Demo Mode — Scoreboard Output Capability

**Issue:** Customer asks whether FinishLynx Demo Mode supports scoreboard output for testing.

**Symptoms:** N/A — this is a capability question, not an error condition.

**Likely Causes:** N/A.

**Confirmed Fix:** N/A — informational answer only.

**Answer:** Demo Mode does allow scoreboard output configuration, but only via Serial Port. Network scoreboard connections are not available in Demo Mode.

**Products:** FinishLynx Demo Mode.

**Notes:**
- Demo Mode supports Serial Port scoreboard output only — Network scoreboard connections are not available in Demo Mode.
- This is useful to know when a customer wants to test scoreboard integration before purchasing or during evaluation.
- Marked as likely accurate based on support team response — not independently verified against documentation.

---

### ⚠️ PENDING — Multiple Issues: Starter Remote Not Triggering, Scoreboard Showing Wrong State, Camera Missing Inside Lanes

**Issue:** Customer reports three simultaneous issues after a previously working setup: (1) starter remote not starting races, (2) scoreboard not showing 0:00 when event opens and not resetting correctly, (3) camera unable to see athletes in inside lanes when camera is mounted on the outside of the track.

**Symptoms:**
- Starter remote does not trigger a race start
- Scoreboard does not show 0:00 when an event is open — shows running time when started at keyboard instead
- Scoreboard continually shows results, event/heat/lane numbers, and finish times rather than resetting for a new event
- Camera cannot see athletes crossing in inside lanes
- System worked correctly the previous week — no known changes

**Likely Causes:**
1. Start sensor failing to arm — "all start sensors failed to arm" pop-up may have appeared when loading an event (first diagnostic question to ask)
2. RadioLynx or wired start sensor misconfiguration — Wired Start Sensor may not be set to None on Inputs tab if RadioLynx is being used
3. Scoreboard script issue — scoreboard may be in a state where it is displaying a previous event's results and not resetting; script may need to be reloaded
4. Camera alignment drift or image height issue — if camera is on outside of track and inside lanes are not visible, camera may have shifted, frame height may be too low, or zoom may have changed

**Confirmed Fix:** PENDING — awaiting response to diagnostic question about "all start sensors failed to arm" pop-up.

**Steps:**
1. Ask customer: when loading an event from the schedule, did a pop-up appear saying "all start sensors failed to arm"? This confirms whether the start sensor issue is the root cause of the starter remote not working.
2. If start sensor failed to arm: check RadioLynx setup — confirm Wired Start Sensor is set to None on the Inputs tab, and check RadioLynx frequency and connection.
3. For scoreboard not resetting: confirm the correct .LSS script is loaded and active. Try reloading the script. Check that FinishLynx is in the correct state for a new event (not still holding results from a previous event).
4. For inside lanes not visible: check camera alignment in 2D EasyAlign mode — confirm all lanes are visible. Check frame height and zoom settings have not changed. If camera is on the outside of the track, it should have a clear line of sight to all lanes including inside lanes — physical obstruction or camera shift may be the cause.

**Products:** FinishLynx (all versions), RadioLynx, scoreboard/LSS script, EtherLynx Vision camera.

**Notes:**
- Three simultaneous issues after a previously working setup often points to a single upstream cause — start sensor failure affecting event state, which cascades into scoreboard behavior.
- "All start sensors failed to arm" pop-up is the key diagnostic — ask about this first.
- Camera on outside of track should cover all lanes including inside — if inside lanes are not visible, physical camera movement or zoom/height change is the most likely cause.
- Update this entry to Confirmed once follow-up response is received.

---

### USB Capture Button Driver Not Found on Windows 11

**Issue:** Customer cannot find the correct driver for their USB capture button cable on a new Windows 11 computer.

**Symptoms:**
- USB capture button not recognized by Windows 11
- Driver not installing automatically
- Customer unable to locate the correct driver file

**Likely Causes:**
1. Windows 11 does not auto-install the USB-to-serial driver for the capture button cable
2. Customer looking in the wrong location for the driver download

**Confirmed Fix:** Download the correct driver based on cable type. Two different drivers depending on whether the cable is USB-XLR (direct USB) or the older USB-to-serial adapter type.

**Steps:**
1. Identify which cable the customer is using:
   - **Newer USB-XLR cable (direct USB connection):** Download this driver: https://finishlynx.com/wp-content/uploads/2012/07/CDM2123620_Setup.exe
   - **Older cable with USB-to-serial adapter:** Download this driver: https://finishlynx.com/wp-content/uploads/2022/06/uc232a_windows_setup_v1.0.084.zip
2. Alternatively, both drivers are available on the FinishLynx Product Downloads page: https://finishlynx.com/product/software/finishlynx-results-software/ (Product Downloads tab, scroll to bottom).
3. After installing the driver, right-click Windows Start > Device Manager > expand Ports (COM & LPT) to confirm the COM port is now visible.
4. In FinishLynx, go to **File > Options > General tab** and assign the correct COM port to the **Capture Button** setting.
5. Ensure the USB cable is connected before opening FinishLynx.

**Products:** FinishLynx (all versions), USB-XLR capture button cable, USB-to-serial capture button cable, Windows 11.

**Notes:**
- Two different drivers depending on cable type — confirm which cable the customer has before sending a driver link.
- USB-XLR (newer, direct USB): CDM2123620_Setup.exe
- USB-to-serial adapter (older): uc232a_windows_setup_v1.0.084.zip
- After driver installation, the COM port must be confirmed in Device Manager and assigned in File > Options in FinishLynx.
- USB cable must be connected BEFORE opening FinishLynx for the COM port to appear in the dropdown.
- If the COM port appears but the button still does not respond, another application may have claimed that port — close other applications and retry.

---

### "This Result Is Not in the Start List" Error When Assigning Lanes

**Issue:** When evaluating a race image and attempting to assign lanes, FinishLynx displays "This result is not in the start list."

**Symptoms:**
- Error message "This result is not in the start list" appears when clicking on the image to assign a result
- Occurs after capturing a race and opening the image for evaluation

**Likely Causes:**
1. Identify By setting in Camera Settings is not set to Lane — FinishLynx cannot match results to the start list if it is not identifying by lane
2. Lane number not being entered and confirmed with Enter after placing the red line on the image

**Confirmed Fix:** In Camera Settings > Setup tab, set Identify By to Lane. When evaluating, click the image to place the red line, type the lane number, and press Enter.

**Steps:**
1. In FinishLynx, open **Camera Settings** (click the camera settings icon or access via the camera menu).
2. Go to the **Setup tab**.
3. Confirm **Identify By** is set to **Lane**.
4. Click OK.
5. When evaluating a race image: click on the image to place the red timing line on an athlete.
6. Type the athlete's **lane number** and press **Enter** to assign the result to that lane in the start list.
7. Repeat for each athlete in the image.
8. Reference video for visual walkthrough: *FinishLynx Evaluation Workflow* — https://youtu.be/Sg1D0opBxCk?t=1199

**Products:** FinishLynx (all versions).

**Notes:**
- The Enter key must be pressed after typing the lane number — simply typing the number is not sufficient to assign the result.
- If Identify By is set to something other than Lane (e.g., Place or Name), FinishLynx will not be able to match the result to the correct start list entry by lane number.
- This error is common with newer operators who are unfamiliar with the evaluation workflow.
- The customer's workflow of Alt+F, Alt+S, close camera before evaluating is noted — confirm this is intentional and not causing image loss before evaluation is complete.

---

### Cannot Focus 8-48mm Motorized Lens on New Camera Install

**Issue:** Brand new EtherLynx Vision camera with 8-48mm motorized lens cannot be brought into focus.

**Symptoms:**
- Image is blurry and cannot be focused on a new system
- 8-48mm automatic/motorized lens installed
- System has not been previously configured

**Likely Causes:**
1. Lens cable not connected to the Remote Control port on the back of the camera — without the cable, FinishLynx cannot send focus commands to the lens (most common on first-time installs)
2. CS-C 5mm adapter ring not installed — required for C-Mount lenses on Vision-series cameras
3. Auto-focus not being used — FinishLynx 13.10 includes an auto-focus feature that simplifies initial focus on new installs

**Confirmed Fix:** Confirm lens cable is connected to the Remote Control port on the back of the camera. If running FinishLynx 13.10, use the auto-focus feature.

**Steps:**
1. Check the back of the camera — confirm the lens control cable is plugged into the **Remote Control** port. This is the most commonly missed step on a first-time install.
2. Confirm the **CS-C 5mm adapter ring** is installed between the lens and the camera body — the 8-48mm is a C-Mount lens and requires the adapter on Vision-series cameras.
3. If running FinishLynx 13.10 or later, use the **auto-focus** feature to achieve initial focus automatically.
4. Reference video for auto-focus walkthrough: *FinishLynx Auto-Focus Feature* — https://youtu.be/4UT237icjiA

**Products:** EtherLynx Vision (5L500, 5L600, 5L700), C-Mount 8-48mm Motorized Zoom Lens (C848M), FinishLynx 13.10+.

**Notes:**
- The lens cable must be connected for FinishLynx to control zoom, focus, and iris on a motorized lens — without it, the lens functions as a fully manual lens with no software control.
- CS-C adapter ring is required for all C-Mount lenses on Vision-series cameras — do not skip this step on new installs.
- Auto-focus is available in FinishLynx 13.10 and later — direct customers to update if they are on an older version.
- For persistent focus issues after confirming cable and adapter, refer to the silver screw fix video: https://www.youtube.com/watch?v=WypcUC6aXBQ

---

### Race Times Wildly Incorrect — Showing 16 Hours Instead of Seconds

**Issue:** FinishLynx produces grossly incorrect race times (e.g., 16 hours and minutes) instead of expected sprint or distance times.

**Symptoms:**
- Race times show as 16+ hours instead of seconds or minutes
- Issue appeared without any known configuration changes
- Restarting FinishLynx and the computer eventually resolved most events but not all
- Some events may still show incorrect times after restart

**Likely Causes:**
1. Start sensor failed to arm — FinishLynx used an incorrect or stale start time, producing an enormous elapsed time (most common)
2. Race was re-armed and then saved without a correct start being selected — the saved start time is from a previous or incorrect trigger
3. Wired Start Sensor not set to None on the Inputs tab when using RadioLynx wireless start — causes start sensor conflicts

**Confirmed Fix:** Open the affected event, go to Event menu > Select Start, and choose the correct start for the race. For prevention, check Inputs tab in Camera Settings and set Wired Start Sensor to None if using wireless starts.

**Steps:**
1. Open the affected event in FinishLynx.
2. Go to the **Event menu** and select **Select Start**.
3. Choose the correct start trigger for the race — this corrects the elapsed time calculation.
4. Verify the times are now correct and save the event.
5. To prevent recurrence: open **Camera Settings > Inputs tab**.
6. If using a RadioLynx wireless start, confirm **Wired Start Sensor** is set to **None**.
7. When opening a new race, watch for a pop-up saying "some start sensors failed to arm" — if this appears, address the start sensor issue before capturing the race.

**Products:** FinishLynx (all versions), RadioLynx, wired start sensors.

**Notes:**
- The 16-hour time is a recognizable symptom of a missed or incorrect start — the camera captured the finish but the start time was from a much earlier point (e.g., system clock or a previous trigger).
- "Some start sensors failed to arm" pop-up when loading an event is the early warning sign — take action before starting the race if this appears.
- Wired Start Sensor must be set to None on the Inputs tab when using RadioLynx — having both active causes conflicts and can result in incorrect start times.
- Re-arming a race and saving without selecting the correct start will preserve the incorrect time — always verify start selection before saving.

---

### Camera Solid Red Boot Light — Internal Firmware USB Failure

**Issue:** Camera shows a solid red boot light and will not boot, even when swapped to a known-working cable and PoE source.

**Symptoms:**
- Camera LED is solid red beyond ~1 minute — does not progress to normal boot state
- Power/On light may show green (camera is receiving power) but Boot light stays solid red
- Issue reproduces across multiple PoE switch ports and PoE injectors (eliminates cable/network as cause)

**Likely Causes:**
1. Internal USB flash drive holding the camera firmware has failed — camera cannot load firmware on boot (confirmed hardware issue)

**Confirmed Fix:** Lynx ships a replacement internal USB (~$50 charge) with the correct firmware loaded. Customer removes 4 screws from the outer corners of the front plate, swaps the old USB flash drive with the new one, and closes the camera.

**Steps:**
1. Confirm solid red Boot light persists beyond ~1 minute across multiple PoE switch ports and a PoE injector — this eliminates network/cable as the cause and points to hardware.
2. Note: the On/power light may show green (camera receiving power) while Boot light stays solid red — this is consistent with an internal USB failure.
3. Ask customer to photograph the serial number label on the bottom of the camera — needed to load the correct firmware onto the replacement USB.
4. Ask customer for shipping address for the replacement USB.
5. Inform customer of the ~$50 charge for the replacement USB.
6. Ship replacement USB with correct firmware pre-loaded.
7. Customer removes 4 screws from the outer corners of the front plate to open the camera.
8. Swap the old internal USB flash drive with the new one.
9. Replace the front plate and reconnect — camera should now boot normally.

**Products:** EtherLynx Vision cameras (all Vision-series models).

**Notes:**
- Solid red Boot light beyond ~1 minute always indicates a boot failure — if PoE switch ports and a PoE injector have both been tested and eliminated, internal USB failure is the confirmed likely cause.
- The On light being green while Boot light is solid red is a key diagnostic detail — power is reaching the camera but firmware cannot load.
- The bottom label photo is required to identify the correct firmware version — do not ship without it.
- Replacement USB cost: approximately $50 domestic ($35 for USB + ~$15 shipping). International shipping will vary.
- Customer performs the swap themselves — 4 screws on outer corners of front plate, swap USB on top board inside, replace plate.
- Camera Boot Troubleshooting Guide: https://finishlynx.com/wp-content/uploads/2012/08/Camera_Boot_Troubleshooting_Guide.pdf
- Confirmed: team-approved resolution based on multiple closed support cases.

---

### Camera Capturing Continuously / Cannot Turn Off Automatic Capture — Wrong COM Port Selected

**Issue:** Camera is capturing continuously and cannot be stopped. Unplugging the capture button has no effect. Customer is on Manual capture mode but camera behaves as if capture is always on.

**Symptoms:**
- Camera is capturing all the time even when not triggered
- Unplugging the capture button does not stop continuous capture
- Capture Button setting is configured but capture button is not working correctly
- Customer set a COM port to try to get capture button working — camera then went into continuous capture mode

**Likely Causes:**
1. Incorrect COM port selected in File > Options > General tab > Capture Button — FinishLynx is reading noise or a constant signal from the wrong COM port as a continuous trigger (most common)
2. Capture button USB-serial cable not connected before FinishLynx was opened — COM port may not be correctly assigned

**Confirmed Fix:** Identify the correct COM port for the capture button cable and set it in File > Options > General tab > Capture Button. Ensure the USB-serial cable is connected before opening FinishLynx.

**Steps:**
1. Connect the USB capture button cable to the computer.
2. Close and reopen FinishLynx — the cable must be connected before FinishLynx opens for the COM port to be correctly recognized.
3. In FinishLynx, go to **File > Options > General tab**.
4. Find the **Capture Button** setting.
5. Open Device Manager (right-click Windows Start > Device Manager > Ports (COM & LPT)) to identify which COM port the capture button cable is assigned to.
6. Set the Capture Button to that COM port in FinishLynx.
7. Click OK — continuous capture should stop and the capture button should now function correctly.
8. If no COM port appears in Device Manager, the USB-serial driver may not be installed — refer to the USB capture button driver download at: https://finishlynx.com/product/software/finishlynx-results-software/ (Product Downloads tab, bottom of page).

**Products:** FinishLynx (all versions), USB capture button cable.

**Notes:**
- Selecting the wrong COM port causes FinishLynx to read a constant signal from that port as a continuous trigger — this is why the camera captures non-stop even after unplugging the capture button.
- The USB-serial cable must be connected to the computer BEFORE opening FinishLynx for the COM port to be correctly recognized and available in the drop-down.
- If the capture button COM port is set correctly but the button still does not respond, another application may have claimed that port — close other applications and retry.
- This pairs with the existing capture button / spacebar Known Fix entry — that entry covers focus and driver issues; this entry covers the wrong COM port causing continuous capture.

---

### ⚠️ PENDING — RadioLynx Microphone Detects Input But Gunshots Not Triggering Start

**Issue:** RadioLynx microphone responds to direct input (e.g., pressing on it) but does not detect starter pistol gunshots during a race.

**Symptoms:**
- Microphone shows detection when pressed directly
- Actual gunshot from starter pistol does not trigger a start
- RadioLynx receiver is connected but start is not being triggered

**Likely Causes:**
1. RadioLynx receiver plugged into wrong port on the camera — must be connected to the correct port on the camera back
2. Incorrect settings on the RadioLynx tab in Camera Settings — frequency, sensitivity, or input type misconfigured
3. Microphone sensitivity too low for the distance or sound level of the starter pistol
4. Microphone not positioned correctly relative to the starter pistol

**Confirmed Fix:** PENDING — awaiting photo of receiver port connection and screenshot of Camera Settings > RadioLynx tab.

**Steps:**
1. Ask customer to send a photo of the port the RadioLynx receiver is plugged into on the back of the camera.
2. Ask customer for a screenshot of Camera Settings > RadioLynx tab — check frequency, sensitivity, and input settings.
3. Confirm Wired Start Sensor is set to None on the Inputs tab if using RadioLynx wireless start.
4. Once port and settings are confirmed correct, advise on microphone proximity — microphone should be positioned close to the starter pistol at the start line, not at the finish line.
5. Refer to RadioLynx Wireless Start Setup QSG for full configuration: https://finishlynx.com/wp-content/uploads/2012/08/RadioLynx_Wireless_Start_Setup_QSG.pdf

**Products:** RadioLynx, EtherLynx Vision cameras, starter pistol/electronic start.

**Notes:**
- The RadioLynx receiver port on the camera is a specific port — plugging into the wrong port (e.g., Remote Control port instead of the correct input) is a common first-time setup mistake.
- Wired Start Sensor must be set to None on the Inputs tab when using RadioLynx — this is a hard rule.
- Microphone detecting direct touch/press but not gunshot suggests sensitivity or positioning may be the secondary issue once port/settings are confirmed.
- Update this entry to Confirmed once follow-up diagnostic results are received.

---

### Starting Gun Auxiliary Connection Broken — Warranty / RMA on New Unit

**Issue:** Auxiliary connection broke off a brand new starting gun (purchased ~2 months ago) without impact or dropping. Customer has upcoming meets and needs a fast resolution.

**Symptoms:**
- Auxiliary connector broke off the starting gun during normal use
- No impact or drop — likely caused by cable weight stress over time
- System is only a couple of months old
- Customer has two state qualifying meets in the next two weeks

**Likely Causes:**
1. Cable weight stress on the auxiliary connector over time — connector not adequately supported during use
2. Manufacturing defect in the connector or its attachment point

**Confirmed Fix:** Direct customer to submit an RMA via the repair/replacement portal. For a brand new unit with a clear hardware defect, a replacement should be prioritized given the active meet schedule.

**Steps:**
1. Direct customer to submit an RMA at the repair/replacement portal: https://finishlynx.com/support/repair-rma-portal/
2. Given the unit is only ~2 months old and the failure is clearly hardware-related, flag for expedited handling — customer has state qualifying meets within two weeks.
3. If customer cannot attach photos via email, ask them to upload photos through the RMA portal or use an alternative method (e.g., text or shared link).

**Products:** Electronic Start (starting gun), Electronic Start Plus.

**Notes:**
- Brand new hardware with a confirmed hardware defect qualifies for replacement under the loaner/replacement policy — prioritize accordingly.
- Cable weight stress on auxiliary connectors is a known risk — customers should be advised to support the cable near the connection point to prevent stress on the connector.
- The RMA portal is the correct path for all repairs and replacements: https://finishlynx.com/support/repair-rma-portal/
- For customers mid-season with imminent meets, flag the urgency when processing the RMA so shipping can be expedited.
- The original response did not address the warranty question or acknowledge the urgency — a more complete response would confirm the unit is covered and set expectations on turnaround time.

---

### Capture Button Reported as Not Working on New System — Diagnose Before Replacing

**Issue:** Customer reports capture button not working on a brand new system and requests a replacement unit.

**Symptoms:**
- Capture button does not appear to function on a new system
- Customer contacted sales requesting a replacement

**Likely Causes:**
1. USB capture button cable not connected to the computer before FinishLynx was opened — COM port will not appear in the dropdown if the cable is connected after launch (most common)
2. Incorrect or no COM port selected in File > Options > Capture Button dropdown
3. Actual hardware defect — only after software configuration is ruled out

**Confirmed Fix:** Before replacing hardware, verify correct COM port is selected in FinishLynx. USB cable must be connected before opening FinishLynx.

**Steps:**
1. Connect the USB capture button cable to the computer.
2. Close and reopen FinishLynx — cable must be connected before FinishLynx opens.
3. In FinishLynx, go to **File > Options > General tab**.
4. Expand the **Capture Button** dropdown — check whether a COM port is listed.
5. If a COM port is listed, select it and click OK.
6. Open an event and test the capture button.
7. If no COM port appears, the USB-serial driver may not be installed — download from: https://finishlynx.com/product/software/finishlynx-results-software/ (Product Downloads tab, bottom of page).
8. Only escalate to hardware replacement if COM port is visible, correctly assigned, and button still does not respond after all software steps.

**Products:** FinishLynx (all versions), USB capture button cable.

**Notes:**
- Always diagnose before replacing — capture button issues on new systems are almost always a configuration issue, not a hardware defect.
- USB cable must be connected BEFORE opening FinishLynx for the COM port to appear in the dropdown.
- Sales emails reporting hardware issues should be followed up by support with a diagnostic step before a replacement is sent.
- This is a good example of the correct workflow: sales receives the request, support intercepts and diagnoses before committing to a replacement.

---

### RadioLynx Receiver Serial Cable Wiring Loose or Damaged — Use RadioLynx Port Instead

**Issue:** Cables entering the serial port connector on a RadioLynx wireless receiver are pulling loose. Customer concerned about reliability.

**Symptoms:**
- Cables pulling loose from the serial port connector on the RadioLynx receiver
- A blue wire appears disconnected and not attached to anything
- Unit functioned correctly at the meet despite the wiring condition

**Likely Causes:**
1. Physical stress on the serial connector housing over time — wires worked loose from the connector
2. Normal wear on an aging cable assembly

**Confirmed Fix:** For Vision-series camera owners, skip the serial cable entirely and connect the RadioLynx receiver directly to the RadioLynx port on the camera. This eliminates the serial connector as a point of failure.

**Steps:**
1. **Preferred fix (Vision-series cameras):** Remove the serial cable portion from the integrated cable of the RadioLynx receiver and plug the round connector end directly into the **RadioLynx port on the camera**. This bypasses the serial connector entirely.
2. Reference video for RadioLynx port connection: *RadioLynx Port Setup* — https://youtu.be/qTjgV3CDVO4?t=96
3. **If serial cable must be used:** The loose red wire connection can be reseated by opening the serial connector housing to relieve stress and pressing the wire back into the wire harness.
4. **Note on blue wire:** The blue wire does not connect to anything — a disconnected blue wire is normal and does not affect functionality.
5. If a new serial cable is needed, contact Nora Landry (Domestic Sales): nlandry@finishlynx.com — replacement cable is $79.00.

**Products:** RadioLynx receiver, EtherLynx Vision cameras (5L500, 5L600, 5L700).

**Notes:**
- The blue wire in the RadioLynx serial connector does not connect to anything — this is normal. A disconnected blue wire is not a fault.
- Vision-series camera owners can bypass the serial connector entirely by using the dedicated RadioLynx port on the camera — this is the recommended approach and eliminates a potential point of failure.
- Replacement RadioLynx Receiver Serial Cable price: $79.00 — contact Nora Landry for a quote.
- Unit functioning correctly despite loose wiring is possible but reliability risk increases over time — addressing proactively is the right call.
- Confirmed: team-approved resolution based on closed support case.

---

### Installing FinishLynx on a New Computer — Licensing and Transfer Questions

**Issue:** Customer purchasing a new laptop asks whether they can install FinishLynx on both computers during the transition, and whether there are licensing restrictions.

**Symptoms:** N/A — this is a licensing/installation question, not an error condition.

**Likely Causes:** N/A.

**Confirmed Fix:** No installation limits — FinishLynx can be installed on any number of computers with the same serial number. No licensing issues.

**Steps:**
1. Confirm to the customer that there are no limits on the number of installations — FinishLynx can be installed on both the old and new computer simultaneously with no licensing issues.
2. To install on the new computer, the customer will need their FinishLynx serial number — this can be found on the existing computer in FinishLynx under **Help > About**.
3. Download the latest version of FinishLynx from: www.finishlynx.com/support
4. Install using the serial number from Help > About.

**Products:** FinishLynx (all versions).

**Notes:**
- There are no installation limits for FinishLynx — customers can install on as many computers as needed.
- FinishLynx software upgrades are always free — always direct customers to download the latest version when installing on a new computer.
- Serial number is found in FinishLynx under Help > About — always point customers here rather than asking them to locate physical documentation.
- When migrating to a new computer, also remind the customer to check: firewall settings (C:\Lynx\Lynx.exe), Hardware Type (Ethernet or Detect), and network adapter configuration.

---

### Electronic Starting Gun — Speaker Not Producing Sound But Clock Starts Correctly

**Issue:** Electronic starting gun fires and starts the FinishLynx clock correctly, but no sound is produced through the speaker — neither beep nor gun sound.

**Symptoms:**
- Gun fires and FinishLynx clock starts correctly — timing signal is working
- Speaker produces no sound (no beep or gun sound) when gun fires
- Speaker works correctly in other modes (e.g., microphone function works)
- Aux cable tested on external speakers/boom boxes — also no sound, confirming cable fault

**Likely Causes:**
1. Break in the gun cable — audio signal not passing through the cable despite timing signal working (most common)
2. Pins inside the port on the bottom of the gun damaged or missing — inspect before assuming cable fault

**Confirmed Fix:** Cable has a break — replace or repair the gun cable. The timing signal and audio signal use different conductors in the cable; a partial break can affect audio while leaving timing intact.

**Steps:**
1. Check whether the gun cable detaches from the base of the gun.
2. If detachable: inspect the 4 pins inside the port on the bottom of the gun — confirm all 4 are intact and undamaged.
3. If pins are intact: the cable itself likely has a break in it. Test by connecting the aux portion of the cable to an external speaker or boom box — if no sound, cable is confirmed faulty.
4. Options for resolution:
   - Purchase a replacement gun cable (old version) — contact Nora Landry (Domestic Sales): nlandry@finishlynx.com
   - Send the current cable in for repair via the RMA portal: https://finishlynx.com/support/repair-rma-portal/
5. Recommendation: purchase a new cable AND send the old one in for repair — having two cables provides a backup in case one fails during a meet.

**Products:** Electronic Start (starting gun), gun cable.

**Notes:**
- The timing signal and audio signal use different conductors in the gun cable — a partial cable break can affect audio while leaving the timing trigger intact. This is why the clock starts correctly but no sound is produced.
- Testing the aux cable on an external speaker is a reliable way to confirm cable fault without needing additional Lynx equipment.
- Having two gun cables is a good practice — recommend repair of the old cable as a backup even when a new one is purchased.
- Nora Landry handles domestic sales for replacement cables: nlandry@finishlynx.com
- RMA portal for repairs: https://finishlynx.com/support/repair-rma-portal/
- Confirmed: team-approved resolution based on closed support case.

---

### Using a Borrowed Camera from Another School — Compatibility Check

**Issue:** Customer wants to use a second camera borrowed from another school as a backup or alternate finish line camera and asks if this is compatible with their system.

**Symptoms:** N/A — this is a compatibility/capability question, not an error condition.

**Likely Causes:** N/A.

**Confirmed Fix:** Borrowing a camera from another school is supported, with one exception: a Scholastic camera and a non-Scholastic camera cannot be used together on the same system.

**Steps:**
1. Confirm whether either school is using FinishLynx Lite — if one school has Lite and the other has the full version, they are using a Scholastic and non-Scholastic camera respectively, and the two cannot be used together.
2. Alternatively, check the bottom plate/label of each camera — Scholastic cameras are identified on the label.
3. If both cameras are the same type (both Scholastic or both non-Scholastic), they can be used together without issue.
4. If camera types are mixed, the borrowed camera cannot be used with the existing system.

**Products:** FinishLynx (all versions), FinishLynx Lite, EtherLynx cameras (all models).

**Notes:**
- FinishLynx Lite only loads Scholastic cameras — if a school is running Lite, their camera is Scholastic.
- Full FinishLynx supports non-Scholastic cameras — if a school is running the full version, their camera is non-Scholastic.
- Scholastic vs. non-Scholastic status can be confirmed by: (1) checking whether the software is FinishLynx Lite or full, or (2) checking the bottom plate label of the camera.
- Newer FinishLynx always supports older cameras of the same type — backwards compatibility is not a concern when mixing camera generations of the same type.
- This is a common scenario when a finish line needs to be flipped due to wind or venue conditions.

---

### Customer Requests Software Upgrade — How to Update FinishLynx

**Issue:** Customer wants to upgrade their FinishLynx software and asks what is needed.

**Symptoms:** N/A — this is a software update question, not an error condition.

**Likely Causes:** N/A.

**Confirmed Fix:** FinishLynx software upgrades are always free. Download the latest version from the Product Downloads page using the existing serial number.

**Steps:**
1. Go to the FinishLynx Product Downloads page: https://finishlynx.com/product/software/finishlynx-results-software/
2. Click the **Product Downloads** tab.
3. Download the latest version of FinishLynx.
4. The customer will need their serial number during installation — this can be found in FinishLynx under **Help > About** on the existing installation.

**Products:** FinishLynx (all versions).

**Notes:**
- FinishLynx software upgrades are always free — there is no charge to update to the latest version.
- Serial number is always found under Help > About in the existing FinishLynx installation.
- Always direct customers to download the latest version — never suggest staying on an older version.

---

### IdentiLynx Camera Lens Broken Off During Transport/Storage

**Issue:** IdentiLynx camera lens broke off while being placed into its case, leaving plastic threads from the lens on the front of the camera.

**Symptoms:**
- Lens physically broke off the camera body during packing or transport
- Plastic threads from the broken lens remain on the camera mount
- No drop or impact — lens broke from pressure against foam padding in the case

**Likely Causes:**
1. Lens contact with foam padding in the case during packing applied enough pressure to break the lens at the mount
2. Lens may have already been under stress from a previous incident

**Confirmed Fix:** Two options — (1) remove the remaining plastic threads from the camera mount and purchase a replacement lens through Nora Landry (Domestic Sales), or (2) send the camera in for repair via the RMA portal.

**Steps:**
1. Inspect the front of the camera — check whether the plastic threads from the broken lens are still lodged in the camera mount.
2. **Self-repair option:** If the plastic threads can be carefully removed from the camera mount without damaging it, the customer can purchase a replacement lens directly through Nora Landry (Domestic Sales): nlandry@finishlynx.com — this is faster and less expensive than sending in for repair.
3. **Send-in repair option:** If threads cannot be safely removed, or if the mount itself is damaged, submit a repair RMA: https://finishlynx.com/support/repair-rma-portal/

**Products:** IdentiLynx (SR, SR-2, HRS).

**Notes:**
- If the plastic threads can be removed cleanly, purchasing a replacement lens is the faster and more cost-effective path — no need to send the camera in.
- Foam pressure during packing is a legitimate cause of lens damage — customers should orient the camera in the case so the lens is not bearing weight against the foam.
- Lens pricing and availability: contact Nora Landry (Domestic Sales) — nlandry@finishlynx.com
- RMA portal for send-in repair: https://finishlynx.com/support/repair-rma-portal/

---

### Wind Gauge Not Responding — No Power Light, Not Connecting to FinishLynx

**Issue:** Wind gauge shows no power (no light) and will not connect to FinishLynx.

**Symptoms:**
- No power indicator light on the wind gauge
- Wind gauge not connecting to FinishLynx
- May be connected via Connection Box (C-Box) or directly to the back of the camera

**Likely Causes:**
1. Black and red power plug inserted into a photo-eye port on the Connection Box instead of the 12V power port — wind gauge receives no power (most common when using C-Box)
2. Wind gauge not connected to the correct port on the back of the camera
3. Cable fault or loose connection

**Confirmed Fix:** If using a Connection Box, confirm the black and red plug is in the 12V ports — not a photo-eye port. The ports look similar and are easy to mix up.

**Steps:**
1. Determine how the wind gauge is connected — directly to the back of the camera, or via a Connection Box (C-Box).
2. **If using a Connection Box:** Check the black and red power plug — confirm it is inserted into the **12V ports**, not a photo-eye port. The ports are similar in appearance and easy to confuse.
3. **If connected to the back of the camera:** Confirm the wind gauge cable is plugged into the correct port on the camera.
4. After correcting the connection, check whether the power light comes on.
5. If power light is on but wind gauge still does not connect in FinishLynx, check the wind gauge settings in FinishLynx (correct COM port or connection type assigned).

**Products:** Lynx Wind Gauge, Connection Box (C-Box), EtherLynx cameras.

**Notes:**
- The 12V ports and photo-eye ports on the Connection Box look similar — incorrect insertion is a common mistake that results in no power to the wind gauge.
- No power light is a reliable indicator that the issue is a power/connection problem, not a software issue — focus on physical connections first.
- If the wind gauge receives power but still won't connect in FinishLynx, the issue shifts to software configuration — check COM port and wind gauge settings in FinishLynx.
- Refer to the Lynx Wind Gauge QSG for connection diagram if needed: https://finishlynx.com/wp-content/uploads/2012/08/LynxWindGauge_QSG.pdf

---

### Wrong Logo Showing Up in Results — Third-Party Platform Issue

**Issue:** Customer reports the wrong logo appearing for a school or organization in results and asks Lynx to fix it.

**Symptoms:**
- Incorrect logo displayed for a school or organization in results
- Customer assumes Lynx controls logo display

**Likely Causes:** N/A — Lynx does not provide or manage logos. This is a third-party platform issue.

**Confirmed Fix:** Direct customer to the timing company or live results platform they are using. Lynx has no involvement in logo display.

**Steps:**
1. Clarify to the customer that Lynx does not provide logos to anyone — logo display is entirely controlled by the live results platform or timing company being used.
2. Ask whether the logo is appearing in a live results platform (e.g., MileSplit, Athletic.net, DirectAthletics).
3. Direct the customer to contact the relevant party: the timing company (e.g., Perfect Timing Group) and/or the live results platform directly.

**Products:** N/A — not a Lynx product issue.

**Notes:**
- Lynx does not provide, host, or manage logos for any school, organization, or event — this is entirely outside Lynx's scope.
- Logo issues in live results are always the responsibility of the timing company or live results platform.
- Common live results platforms: MileSplit, Athletic.net, DirectAthletics.
- This is a good example of a support request that needs to be clearly redirected — do not attempt to troubleshoot or take ownership of third-party platform issues.

---

### RadioLynx / Microgate Transmitter Stopped Sending Signals — Repair via RMA

**Issue:** RadioLynx/Microgate transmitter stopped sending signals during a meet. Settings confirmed correct on both transmitter and in FinishLynx software — internal hardware failure suspected.

**Symptoms:**
- RadioLynx transmitter stops sending signals mid-meet
- All settings on transmitter and in FinishLynx confirmed correct
- Issue is not reproducible through software changes — internal fault suspected

**Likely Causes:**
1. Internal hardware failure in the transmitter — settings are correct, pointing to a physical fault inside the unit

**Confirmed Fix:** Submit an RMA for repair attempt. Lynx will inspect and repair if possible.

**Steps:**
1. Confirm settings have already been verified on the transmitter and in FinishLynx (Wired Start Sensor set to None on Inputs tab, correct frequency, etc.) — if confirmed, proceed to RMA.
2. Direct customer to submit a repair RMA: https://finishlynx.com/support/repair-rma-portal/
3. Lynx will inspect the unit and repair if possible — repair is not guaranteed but will be attempted.
4. For a replacement unit, direct to Nora Landry (Domestic Sales): nlandry@finishlynx.com

**Products:** RadioLynx transmitter, Microgate transmitter.

**Notes:**
- Lynx accepts RadioLynx/Microgate transmitters for repair via the standard RMA process — customers do not need to go to Microgate directly.
- Repair is attempted but not guaranteed — set this expectation with the customer.
- Having a backup transmitter is a good recommendation for customers who rely on wireless start at meets — suggest purchasing a replacement and sending the old one in for repair as a backup (same pattern as the gun cable recommendation).
- Confirmed: team-approved resolution based on closed support case.

---

### Severe Glare or Overexposure When Camera Faces Setting Sun

**Issue:** Camera facing west experiences severe glare and overexposure from the setting sun during evening meets, making images difficult or impossible to read.

**Symptoms:**
- Severe glare or overexposure in race images during evening meets
- Camera is facing west into the setting sun
- Manual darkening and camera settings adjustments have not resolved the issue
- Physical sun blocking (e.g., pop-up awning) has not fully resolved the issue

**Likely Causes:**
1. Camera is positioned facing the setting sun — the fundamental geometry of the setup is the root cause. No camera setting or filter will fully compensate for direct sun into the lens.

**Confirmed Fix:** Reposition the camera to the opposite side of the track so the sun sets behind it. If repositioning is not possible, use FinishLynx image enhancement tools (Enhance, Quick Adjust, multiple region enhancement) to improve the captured image after the fact.

**Steps:**
1. **Best solution:** Reposition the camera to the other side of the track so the sun is behind the camera, not in front of it. This is the only reliable fix.
2. **If repositioning is not possible:** Use FinishLynx post-capture image enhancement tools:
   - **Enhance** and **Quick Adjust** features to improve overall image quality after capture.
   - **Multiple Region Enhancement** — useful when part of the finish line is in bright sun and another part is in dark shadow. Reference: https://help.finishlynx.com/Content/OnlineManual/ImageQuality.htm
3. Understand the fundamental limitation: with the camera facing the sun, the bright finish line background and the dark shadow side of athletes create a contrast problem that cannot be fully resolved through camera settings or filters alone.

**Products:** EtherLynx Vision cameras (all models), FinishLynx image enhancement tools.

**Notes:**
- No filter or camera setting will fully compensate for direct sun into the lens — repositioning is the only real fix.
- Multiple Region Enhancement is particularly useful when lighting is uneven across the finish line — one bright area and one shadowed area in the same image.
- The Enhance and Quick Adjust features work on captured images — they improve readability after the fact but do not improve the capture itself.
- Camera placement on the correct side of the track (sun behind the camera) is the single most important factor for image quality in outdoor evening meets.
- Reference: Online Manual Image Quality tools — https://help.finishlynx.com/Content/OnlineManual/ImageQuality.htm

---

### European Camera Repair / Service — Route to Matsport France

**Issue:** Customer in Europe (French-speaking) requests service or repair for an EtherLynx camera.

**Symptoms:** N/A — this is a service routing question, not an error condition.

**Likely Causes:** N/A.

**Confirmed Fix:** European customers should be directed to Matsport in France for camera service and repair — not the Lynx RMA portal.

**Steps:**
1. Identify that the customer is European (language, location, or serial number context).
2. Direct to Matsport — the FinishLynx European service center: https://www.matsport.com/PBCPPlayer.asp?ID=2329404
3. Do not direct European customers to the standard Lynx RMA portal (https://finishlynx.com/support/repair-rma-portal/) — that is for domestic (US) repairs.

**Products:** All Lynx cameras and hardware (European customers).

**Notes:**
- Matsport in France is the FinishLynx European repair and service center — all European camera service should be routed there.
- The standard Lynx RMA portal is for domestic (US) customers only.
- French-language emails or European serial numbers are indicators to route to Matsport rather than the domestic RMA process.
- This applies to all hardware service requests from European customers, not just cameras.

---

### Scoreboard / Display Compatibility with FinishLynx Lite — Not Supported

**Issue:** Customer asks whether a third-party scoreboard (e.g., Electro-Numerics Raceclock) will work with FinishLynx Lite.

**Symptoms:** N/A — this is a capability question, not an error condition.

**Likely Causes:** N/A.

**Confirmed Fix:** N/A — informational answer only.

**Answer:** Scoreboard functionality is not available in FinishLynx Lite. Any scoreboard or display integration requires the full version of FinishLynx.

**Products:** FinishLynx Lite, all third-party scoreboards and displays.

**Notes:**
- FinishLynx Lite does not support scoreboard output of any kind — this applies to all scoreboards and displays regardless of brand or model.
- Full FinishLynx is required for any scoreboard integration (serial, network, or otherwise).
- FinishLynx Lite also does not support meet management database connections (e.g., HyTek, MeetPro). It supports peripherals only — and scoreboard output is not included in that.
- Demo Mode supports Serial Port scoreboard output only (see separate entry) — Lite is more restricted than Demo Mode in this regard.

---

### Capture Button Cable — Correct Cable Type and Purchase Options

**Issue:** Customer has the wrong cable for the capture button and asks what cable is needed and how to purchase one.

**Symptoms:** N/A — this is a cable identification question, not an error condition.

**Likely Causes:** N/A — customer has a start sensor cable (3-pin to 15-pin) instead of the capture button cable.

**Confirmed Fix:** The correct capture button cable is either (1) the traditional 9-pin serial to 3-pin XLR cable used with a USB-serial adapter, or (2) the newer USB-XLR cable which eliminates the need for a separate adapter.

**Steps:**
1. Confirm the customer has the wrong cable — a 3-pin to 15-pin cable is a start sensor cable, not a capture button cable.
2. Explain the two capture button cable options:
   - **Traditional:** 9-pin serial to 3-pin XLR cable, used with a separate USB-to-serial adapter to connect to the computer.
   - **Current/preferred:** USB-XLR cable — connects directly to a USB port, no serial adapter needed.
3. Reference video showing the traditional cable setup: *Capture Button Cable Setup* — https://youtu.be/I1SGn7Jr4A8?t=1510
4. For purchasing either cable, direct to Nora Landry (Domestic Sales): nlandry@finishlynx.com

**Products:** FinishLynx capture button, USB-XLR capture button cable, 9-pin serial to 3-pin XLR cable, USB-to-serial adapter.

**Notes:**
- The 3-pin to 15-pin cable is a start sensor cable — not the capture button cable. Easy to confuse.
- The USB-XLR cable is the current preferred option — simpler setup with no serial adapter needed.
- The traditional 9-pin serial to 3-pin XLR cable requires a USB-to-serial adapter and driver installation to work with modern computers.
- For purchasing, route to Nora Landry (Domestic Sales): nlandry@finishlynx.com
- Driver download for USB-serial adapter if using the traditional cable: https://finishlynx.com/product/software/finishlynx-results-software/ (Product Downloads tab, bottom of page).

---

### Wind Gauge Not Connecting via SeriaLynx — Network Configuration and Serial Port Settings

**Issue:** Wind gauge connected through a SeriaLynx device is not responding in FinishLynx despite correct IP subnet and ability to ping the SeriaLynx.

**Symptoms:**
- Wind gauge works correctly when connected via C-Box
- "Wind gauge not responding" message in FinishLynx when connected via SeriaLynx
- SeriaLynx can be pinged successfully — network connectivity confirmed
- Tried Network Listen, Network Connect, and UDP — none working

**Likely Causes:**
1. FinishLynx Wind Gauge set to Network Listen instead of Network Connect — should be Connect with the SeriaLynx IP and port
2. SeriaLynx serial port settings (baud rate, data bits, parity, stop bits) not configured correctly for the Lynx wind gauge
3. Wind gauge power issue — worth confirming how the gauge is being powered

**Confirmed Fix:** Set FinishLynx Wind Gauge to Network Connect with the SeriaLynx IP address and port number. Configure the SeriaLynx serial port settings via its browser dashboard to match Lynx wind gauge requirements.

**Steps:**
1. Confirm the wind gauge is receiving power — ask customer how it is being powered.
2. In FinishLynx, go to Wind Gauge settings:
   - Set **Module** to **Lynx**
   - Set **Serial Port** to **Network Connect** (not Listen)
   - Enter the **IP address** of the SeriaLynx unit
   - Enter the **Port number** used by that serial port on the SeriaLynx (e.g., 10001)
3. In the SeriaLynx browser dashboard, navigate to the serial port settings for the port connected to the wind gauge and configure:
   - **Baud Rate:** 9600
   - **Data Bits:** 8
   - **Parity:** None
   - **Stop Bits:** 1
4. Save settings in the SeriaLynx dashboard and retest in FinishLynx.

**Products:** Lynx Wind Gauge, SeriaLynx, FinishLynx (all versions).

**Notes:**
- Network Connect (not Listen) is the correct setting when FinishLynx is initiating the connection to the SeriaLynx — FinishLynx connects to the SeriaLynx IP and port.
- The SeriaLynx serial port settings must match the Lynx wind gauge communication specs: 9600 baud, 8 data bits, no parity, 1 stop bit. Incorrect settings will result in "not responding" even when the network connection is working.
- SeriaLynx settings are configured via its browser dashboard — access by navigating to the SeriaLynx IP address in a web browser.
- The SeriaLynx IP should be on the same subnet as the FinishLynx laptop (e.g., 192.168.1.x if laptop is 192.168.1.x).
- Being able to ping the SeriaLynx confirms network connectivity — if still not connecting after correct settings, the serial port configuration in the dashboard is the most likely remaining cause.
- UDP mode is not correct for this setup — use TCP (Network Connect).

---

### Camera Not Loading — Wi-Fi Interference / IP-Toolbox Diagnostic for New or Unfamiliar Setup

**Issue:** IT or new operator cannot get a camera to boot into FinishLynx on a computer that may have Wi-Fi enabled. Camera is not configuring itself with a static IP — FinishLynx assigns IPs automatically.

**Symptoms:**
- Camera will not load into FinishLynx despite trying multiple PoE injectors and cables
- Operator may be unfamiliar with FinishLynx and wondering if cameras need manual static IP configuration
- One camera works, another does not
- Camera is connected only via RJ45

**Likely Causes:**
1. Wi-Fi is enabled on the computer — FinishLynx may be broadcasting on the wrong network adapter, preventing camera from being found (most common and first to check)
2. Camera has a network or IP issue — detectable with IP-Toolbox even when FinishLynx cannot find it
3. Hardware fault — if IP-Toolbox also finds nothing after Wi-Fi is disabled

**Confirmed Fix:** Disable Wi-Fi on the computer first, then reopen FinishLynx. If camera still does not load, run IP-Toolbox to determine whether the camera is visible on the network.

**Steps:**
1. Disable the wireless network adapter on the computer: go to **Control Panel > Network and Sharing Center > Change adapter settings**, right-click the Wi-Fi adapter and select **Disable**.
2. Open FinishLynx and check whether the camera now loads.
3. If still not loading, download and install **IP-Toolbox** with the camera connected: https://www.dropbox.com/scl/fi/u7akj1ubo9l20ircufsp0/IP-Toolbox.msi?rlkey=vm0w0a5mt3vqydi6xf6ol8a00&st=dg8dye4g&dl=0
4. Run IP-Toolbox — if it finds the camera, send a screenshot of the results for further diagnosis.
5. If IP-Toolbox finds nothing — camera is likely not receiving power or has a hardware fault; escalate to Camera Boot Troubleshooting Guide and potentially RMA.

**Products:** FinishLynx (all versions), EtherLynx Vision cameras, IdentiLynx cameras.

**Notes:**
- Cameras do NOT need static IP configuration — FinishLynx assigns IPs automatically. Never instruct a customer to manually configure a camera IP.
- Wi-Fi being enabled is one of the most common reasons a camera fails to load on a laptop — FinishLynx may bind to the wrong adapter. Disabling Wi-Fi is always an early step.
- IP-Toolbox detects cameras on the network independently of FinishLynx — useful for distinguishing a network/IP issue from a hardware power failure.
- If IP-Toolbox finds the camera but FinishLynx does not, the issue is likely network adapter selection or firewall — not the camera itself.
- If IP-Toolbox finds nothing after Wi-Fi is disabled and PoE sources are confirmed working, escalate to hardware fault / RMA.

---

### Wind Gauge Not Connecting via SeriaLynx — Serial Port Settings and Network Configuration

**Issue:** Wind gauge connected through a SeriaLynx device is not responding in FinishLynx despite correct IP subnet and successful ping.

**Symptoms:**
- Wind gauge worked correctly when connected via C-Box
- "Wind gauge not responding" message in FinishLynx when connected via SeriaLynx
- Customer can ping the SeriaLynx successfully — IP and network are reachable
- Tried both Network Listen and Network Connect modes without success
- Tried UDP mode without success

**Likely Causes:**
1. Serial port settings in the SeriaLynx browser dashboard not configured correctly for the Lynx wind gauge (most common)
2. FinishLynx Wind Gauge settings set to Network Listen instead of Network Connect with IP address
3. Wind gauge power source not confirmed

**Confirmed Fix:** Set FinishLynx Wind Gauge to Network Connect with the SeriaLynx IP address and port. Configure the SeriaLynx serial port settings via its browser dashboard to match Lynx wind gauge requirements.

**Steps:**
1. Confirm how the wind gauge is being powered — verify power source before proceeding.
2. In FinishLynx, go to Wind Gauge settings:
   - Set **Serial Port** to **Network (Connect)** — not Listen.
   - Enter the **IP address of the SeriaLynx** and the **port number** (e.g., 10001).
3. Access the SeriaLynx browser dashboard by navigating to its IP address in a web browser.
4. Find the serial port settings for the port the wind gauge is connected to and configure as follows:
   - **Baud Rate:** 9600
   - **Data Bits:** 8
   - **Parity:** None
   - **Stop Bits:** 1
5. Save the SeriaLynx settings and retest the wind gauge connection in FinishLynx.

**Products:** Lynx Wind Gauge, SeriaLynx, FinishLynx (all versions).

**Notes:**
- Network Connect (not Listen) is the correct mode in FinishLynx when using a SeriaLynx — FinishLynx connects out to the SeriaLynx IP.
- The SeriaLynx serial port settings must match the wind gauge communication spec exactly — incorrect baud rate or parity will result in "not responding" even when the network connection is working.
- SeriaLynx settings are configured via its browser dashboard — navigate to the SeriaLynx IP address in a browser to access.
- Wind gauge power source should be confirmed early — no power means no data regardless of network configuration.
- If IP subnet was changed on the SeriaLynx to match the Lynx network (e.g., 192.168.1.x), confirm the change was saved and the device rebooted.
- UDP mode is not the correct protocol for this setup — TCP (Network Connect) is correct.

---

### Camera Not Booting — IT/New User Asking About Static IP Configuration

**Issue:** IT administrator on a new setup cannot get a second camera (IdentiLynx) to boot. Has already tried multiple PoE injectors and cables. Asks whether cameras need to be statically configured before use.

**Symptoms:**
- One camera (EtherLynx finish line camera) works correctly
- Second camera (IdentiLynx — smaller, RJ45 only) will not come online
- Multiple PoE injectors and cables already tested and eliminated
- User is new and unfamiliar with FinishLynx camera configuration

**Likely Causes:**
1. Wi-Fi enabled on the computer — FinishLynx may be trying to use the wireless adapter instead of the wired Ethernet adapter, preventing camera discovery (most common for new setups)
2. Camera has an IP conflict or is not being detected on the correct network adapter
3. Internal hardware issue — if Wi-Fi fix and IP-Toolbox both fail to find the camera

**Confirmed Fix:** Disable Wi-Fi on the computer before opening FinishLynx. If camera still does not load, use IP-Toolbox to check whether the camera is present on the network.

**Steps:**
1. **Important clarification for new users:** FinishLynx cameras do not require static IP configuration — IPs are auto-assigned by FinishLynx. No manual network configuration is needed on the cameras.
2. Disable Wi-Fi on the computer: go to **Control Panel > Network and Sharing Center > Change adapter settings** — right-click the wireless adapter and disable it.
3. Open FinishLynx and check whether the camera now loads.
4. If still not loading, download and run **IP-Toolbox** with the IdentiLynx connected — this detects cameras on the network independently of FinishLynx: https://www.dropbox.com/scl/fi/u7akj1ubo9l20ircufsp0/IP-Toolbox.msi?rlkey=vm0w0a5mt3vqydi6xf6ol8a00&st=dg8dye4g&dl=0
5. If IP-Toolbox finds the camera — send a screenshot of the information shown for further diagnosis.
6. If IP-Toolbox finds nothing — camera is likely not receiving power or has a hardware fault. Escalate to internal USB firmware check or RMA.

**Products:** FinishLynx (all versions), IdentiLynx cameras, EtherLynx cameras.

**Notes:**
- Cameras are auto-configured by FinishLynx — no static IP or manual network setup is required on the cameras. Always clarify this for new or IT users who assume cameras need network pre-configuration.
- Wi-Fi being enabled is one of the most common causes of camera detection failure on new setups — FinishLynx may bind to the wireless adapter instead of the wired one.
- IP-Toolbox is the key diagnostic tool for distinguishing between a camera that is on the network but not detected by FinishLynx vs. a camera that has no network presence at all.
- IP-Toolbox download: https://www.dropbox.com/scl/fi/u7akj1ubo9l20ircufsp0/IP-Toolbox.msi?rlkey=vm0w0a5mt3vqydi6xf6ol8a00&st=dg8dye4g&dl=0
- The smaller camera with only an RJ45 cable connected is the IdentiLynx — confirm this identification when triaging multi-camera setups.

---

### Third-Party Total Station / Laser Compatibility with FieldLynx Lite (e.g., Trimble M3)

**Issue:** Customer asks whether a third-party total station (Trimble M3) can be connected to FieldLynx Lite software.

**Symptoms:** N/A — this is a compatibility question, not an error condition.

**Likely Causes:** N/A.

**Confirmed Fix:** N/A — informational answer only.

**Answer:** A third-party total station or laser system will work with FieldLynx Lite only if it uses the same communication protocol as one of the existing laser options in the FieldLynx Lite laser settings dropdown. If the device uses a different protocol, it will not be able to communicate with FieldLynx Lite.

**Steps:**
1. Ask the customer to check the communication protocol used by their total station (e.g., Leica, Trimble, or other proprietary protocol).
2. Compare against the laser options available in the FieldLynx Lite laser settings dropdown.
3. If the protocol matches one of the existing options — the device will work.
4. If the protocol does not match — the device is not compatible and cannot communicate with FieldLynx Lite.

**Products:** FieldLynx Lite, third-party total stations and laser distance measurement (EDM) systems.

**Notes:**
- FieldLynx Lite supports laser/EDM devices that match its existing protocol list — no custom protocol support is available.
- The Trimble M3 Total Station has not been confirmed as compatible — customer would need to verify protocol against the FieldLynx Lite dropdown options.
- This same rule applies to full FieldLynx — compatibility depends on protocol match, not brand.
- If the customer's existing Leica EDM systems work with FieldLynx Lite, they can use those as a reference for what protocols are supported.

---

### Setting Up a Dedicated Evaluate / Read Laptop in Multi-User Mode

**Issue:** Customer is replacing a computer used as a dedicated "evaluate" (read) laptop in a multi-computer FinishLynx setup and asks what configuration is required on the new computer.

**Symptoms:** N/A — this is a setup/configuration question, not an error condition.

**Likely Causes:** N/A.

**Confirmed Fix:** Set Hardware Type to None in FinishLynx so the laptop does not look for cameras. Configure file sharing so the laptop has access to the shared FinishLynx event directory and meet management software output directory.

**Steps:**
1. Install FinishLynx on the new computer — download the latest version from www.finishlynx.com/support using the existing serial number (found under Help > About on the primary computer).
2. In FinishLynx, go to **File > Options > General tab**.
3. Set **Hardware Type** to **None** — this prevents FinishLynx from searching for cameras on this laptop.
4. Click OK and restart FinishLynx.
5. Configure file sharing so the evaluate laptop has network access to:
   - The shared **Event Directory** (where FinishLynx event files are stored)
   - The shared directory used by meet management software for start lists and results
   - **C:\Lynx\Temp** on the primary (timing) computer — required to view live race images during an active event
6. Refer to the Windows 11 Networking QSG for file sharing setup: https://finishlynx.com/wp-content/uploads/2023/04/NetworkingWindows11.pdf
7. Reference: Online Manual Multi-User Mode — https://help.finishlynx.com/Content/OnlineManual/MultiUserMode.htm

**Products:** FinishLynx (all versions), Windows 11.

**Notes:**
- Hardware Type None is required on any computer that is not directly connected to cameras — without this, FinishLynx will search for cameras and may not function correctly as a read laptop.
- Access to C:\Lynx\Temp on the primary computer is required to view live race images during an active event — without it, the evaluate laptop can see results but not images.
- "Run as Administrator" must NOT be checked for FinishLynx on the evaluate laptop — this causes Z: drive visibility issues.
- FinishLynx can be installed on any number of computers with the same serial number — no licensing concerns.
- If the evaluate laptop also needs to add or edit splits, set up a LapTime Device set to From Image in LapTime > Options and restart FinishLynx.
