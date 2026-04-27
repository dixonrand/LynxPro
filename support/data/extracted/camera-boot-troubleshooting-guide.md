# Camera Boot Troubleshooting Guide

**Title:** Camera Boot Troubleshooting Guide
**Slug:** `camera-boot-troubleshooting-guide`
**Category:** Lynx-Sold Cameras › Miscellaneous
**Type:** misc
**Source URL:** https://finishlynx.com/wp-content/uploads/2012/08/Camera_Boot_Troubleshooting_Guide.pdf
**Use:** Refer to this whenever any camera (EtherLynx, IdentiLynx, or VeriLynx) is not booting, showing a solid red boot light, or displaying an "Error aligning camera" message.

---

Lynx System Developers, Inc.


            Loading EtherLynx, IdentiLynx & VeriLynx Cameras
                                              Troubleshooting Guide

Setting Up Your System
Note: Contact technical support with any questions you may have: support@finishlynx.com

  Computer Setup and Networking Best Practices                        FinishLynx Settings Best Practice
  1. Make sure you have the correct IP address.              1. Download and install the latest version of
     a. Set a static IP (recommended = 192.168.0.5).            FinishLynx (www.finishlynx.com)
                                                                a. Go to Help | About to check the current version.
  2. Install Windows Updates.
     a. Pending Windows updates may restrict network
        communications on your PC. Install them and reboot
        your PC.
  3. Disable Wireless.
     a. Open Network and Sharing Center and select
        Change Adapter Settings.                             2. Run as Administrator by default:
     b. Right-click Wireless Network and click Disable.         a. Right-click the FinishLynx shortcut.
                                                                b. Select Properties.
                                                                c. Select the Compatibility tab.
                                                                d. Check the Run as Administrator box.

  4. Disable Firewalls.                                      3. Check the Hardware Type:
     a. In the Control Panel select Windows Defender            a. Go to File | Options…
        Firewall.                                               b. Find the Hardware Type: setting.
     b. Click Turn Windows Defender Firewall on or off.         c. Select Detect.
     c. Turn off the firewall for each network type.




                                                             4. Set the Camera Network:
  5. Disable Network Card Power Management.                     a. Start FinishLynx.
     a. Open the Device Manager.                                b. Go to File | Options…
     b. Find your Ethernet Adapter.                             c. Find the Camera Network: setting.
     c. Right-click and select Properties.                      d. Select the IP address assigned to the network
     d. Select the Power Management tab.                           interface card connected to the camera(s).
     e. Un-check the box that says “Allow the computer to       e. Restart FinishLynx.
        turn off this device to save power”




www.finishlynx.com                                                                               support@finishlynx.com
                                                                                      Lynx System Developers, Inc.


Troubleshooting Your Cameras
Camera is still not connecting to FinishLynx
If you have followed the above steps but your camera is not connecting to FinishLynx, you can follow these next
steps. Make sure all connections are secure and your equipment is in good working condition. Double-check the
Ethernet cables.
1. Switch out the Ethernet cables (these cables can go bad, especially when used often).
2. Switch the PoE injector and/or port on the PoE switch.
3. Restart your computer and install any pending Windows updates.
4. Check for IP address conflicts. FinishLynx will assign cameras an IP address, incrementing by 1 starting with its
     own address, for each camera. Make sure no other devices on your network are assigned these addresses.
         Example: if computer IP address is 192.168.0.5 -> Camera 1 will be 192.168.0.6.

POWER & STATUS LEDs
Check POWER & STATUS LEDs on Vision or Vision PRO camera back.
         a. ON    – RED = camera powered OFF
                  – Press the icon to turn on (solid GREEN).
         b. BOOT – Slow/fast blink AMBER = Waiting for/loading in FinishLynx.
                  – Solid RED = Contact tech support.

Common Error Codes & Solutions
Error 129                Disable Wireless (See Step 2 under Computer Setup and
Failed Contact Address   Networking above)
                         Make sure you are running the correct version of FinishLynx. To
                         see what version you have, Open FinishLynx then click Help |
                         About…
                         Download the latest version of FinishLynx on our website:
                         www.finishlynx.com/product/software/finishlynx-results-software/

Error 201                Make sure you are running the correct version of FinishLynx. To
Invalid Version          see what version you have, Open FinishLynx then click Help |
                         About…
                         Download the latest version of FinishLynx on our website:
                         www.finishlynx.com/product/software/finishlynx-results-software/

Error 202                Check to make sure the IP address is correct.
Bad Set IP Address       Right-click the FinishLynx icon, then select Run as
                         Administrator




www.finishlynx.com                                                                             support@finishlynx.com
