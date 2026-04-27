# FAQ — Ranked

Ranked list of the most common FinishLynx support topics, in order of how often they come up. This list mirrors the starter prompt chips on the Lynx Support landing page.

---

## 1. Error aligning camera

The single most common FinishLynx error message. Always caused by the camera not booting correctly — never an alignment problem despite the wording.

**Quick checks:**
- Power: solid green LED on the camera?
- Boot state: flashing red is normal during boot; solid red beyond ~1 minute means boot failure.
- Cabling: bad PoE cable can present as "missing network adapter."
- Network: camera and laptop on the same subnet (FinishLynx auto-assigns the IP).

**Reference:** Camera Boot Troubleshooting Guide.

---

## 2. Scoreboard not working

"Running" status in FinishLynx only means data is being **sent** — it does not confirm the scoreboard is **receiving**.

**Quick checks:**
- COM port / TCP target correct?
- Correct .LSS script loaded for the scoreboard model?
- For Portable LED Display: is the source feeding HDMI? The RJ45 port carries internal panel data, not Ethernet.
- For ResulTV-VDM: did the camera restart after the upgrade code?

**Reference:** Scoreboard Setup Guide, .LSS Script documentation.

---

## 3. RadioLynx setup

**Hard rule:** Always set Wired Start Sensor to **None** on the Inputs tab first. Skipping this is the most common cause of RadioLynx not registering.

**Quick checks:**
- Battery in the start unit charged?
- Correct frequency / channel matched between transmitter and receiver?
- Receiver connected to the correct serial input on the camera?

**Reference:** RadioLynx QSG.

---

## 4. HyTek integration

Two integration paths: **HY-WIRE serial connection** or **file sharing**. Pick based on the customer's setup.

**Quick checks:**
- Serial: COM port, baud rate, and HY-WIRE cable orientation correct?
- File sharing: shared folder permissions, .LIF file path matches what HyTek is watching?
- FinishLynx has no API — these two methods are the only options.

**Reference:** HyTek Serial Connection Setup, HyTek File Sharing Setup.

---

*Source: distilled from `Lynx_Master_Reference.md` and `FinishLynx_Known_Fixes.md`. To re-rank or extend, edit this file directly — the assistant will pick it up on the next knowledge cache refresh (within 1 hour).*
