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
