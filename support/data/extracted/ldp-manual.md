# LDP Manual

**Title:** LDP Manual
**Slug:** `ldp-manual`
**Category:** Lynx-Sold Timing Accessories › Miscellaneous
**Type:** misc
**Source URL:** https://finishlynx.com/wp-content/uploads/2023/01/LDP-Manual.pdf
**Use:** Full reference for the Lynx Display Protocol (LDP).

---

Lynx Data Port User Manual
                         Copyright © Lynx System Developers, Inc.


Document History:
     2019/12/26 – Initial release.
     2021/07/20 – Add ‘u’ command.
     2021/10/10 – Update ‘u’ command.
     2022/09/08 – Add PortsPerCamera.


The Lynx Data Port (LDP) allows remote applications to access certain information
contained in FinishLynx events. FinishLynx, by default, listens for a single incoming TCP
connection on port 41601. Each port that FinishLynx listens on can handle only one
connection at a time; if an additional connection is made to a port the previous
connection is dropped. Additional ports can be created if needed and must use unique
TCP port numbers (e.g., 41602, 41603, etc.).

When a FinishLynx event is attached to the LDP module each LDP port is assigned its
own camera within the event. For example, if LDP ports 41601 and 41602 exist and an
event with two cameras is created then port 41601 will be assigned to the first camera
and port 41602 will be assigned to the second camera. If there are more LDP ports than
cameras the remaining ports will have no camera assigned, but will still have access to
general event information.

Note that LDP is a FinishLynx plug-in. The plug-in must be installed for LDP to work.


FinishLynx Hidden Settings

LDP is controlled in FinishLynx through hidden settings in the \RemoteControl\LDP\
group. The settings in this group are:

Boot: Can be used to disable LDP even if the plug-in is installed.
Attach: Controls which events are attached to the LDP module.
PortsPerCamera: Sets the number of ports to attach to each camera.
RecvBuffer: Sets the receive buffer size.
SendBuffer: Sets the send buffer size.
FramesPerSend: Sets the maximum number of image frames sent per time slice.
Port1: Sets Port1 mode, address, and port.

To create additional LDP ports, create additional “Portn” hidden settings (type string).
Additional ports must have contiguous numbers to be loaded. To create a second port,
create the hidden setting Port2. For a third port, create the hidden setting Port3, etc.
FinishLynx currently supports up to 9 ports (Port1 through Port9). Each port must use a
unique TCP port number. After creating a new “Portn” hidden setting FinishLynx must be
re-started for the port to be loaded. Likewise, any changes to Boot, RecvBuffer, or
SendBuffer require FinishLynx to be re-started for the changes to take effect.
FinishLynx Hardware Control Window Test Interface

The FinishLynx Hardware Control window can connect to an LDP port as a client for
testing and demonstration purposes. To enable this, create the hidden setting “Align” in
the \RemoteControl\LDP\ group (type string). This setting has the same format as the
“Portn” settings. Assuming that Port1 has its default setting of “-2,0.0.0.0,41601” (listen
on port 41601), setting Align to “-1,127.0.0.1,41601” (connect to this computer on port
41601) will result in the FinishLynx Hardware Control window connecting to its own LDP
port. After creating the Align hidden setting FinishLynx must be re-started for the
connection to be made. To test an LDP connection to a copy of FinishLynx running on a
separate computer simply replace the “127.0.0.1” with the other computer’s IP Address.

Note that the Align hidden setting should be deleted (and FinishLynx re-started) when
the test interface is not in use so that other applications can connect to the LDP port
(and so that the test interface resources are not allocated in FinishLynx).

The Hardware Control window test interface is controlled by single letter keystrokes that
are optionally preceded by digits (when a numerical value is needed). The results of a
command (if any) are placed in the status bar, with multiple fields separated by
underscores. See “LDP Protocol.pdf” for more information about the fields. When an
image frame is received it is displayed in the align area and the frame information is
placed in the status bar.

The available commands are:

  v   Request LDP Protocol version. Result is <version>_<app>
  u   Request event status. Result is <flags>_<buffer>_<frame>_<frames>_<rate>
  e   Request event info. Result is
       <filename>_<enum>_<rnum>_<hnum>_<ename>_<capture>_<camera>
  s   Request start info. Result is <time>
  o   Toggle image orientation. No result.
  r   Set image parameter “reset image”. Result is <flags>_<format>_<pskip>_<fskip>
  t   Toggle image parameter “send image”. Result is same as above.
  b   Set image parameter format. Result is same as above.
  p   Set image parameter pskip. Result is same as above.
  f   Set image parameter fskip. Result is same as above.
  n   Request next image frame. Result is <time>_<format>_<pskip>_<fskip>_<numpix>

Image frames can either be streamed as they become available (if “send image” is
toggled on with the ‘t’ command) or they can be “single stepped” using the ‘n’ command.

FinishLynx LDP Demo Quick Start Guide

Install FinishLynx and the LDP plug-in. Run FinishLynx, create the Align hidden setting
as described above, and then re-start FinishLynx. Load a sample event and then change
back to the Hardware Control window. Hit ‘t’ and the image from the sample event will
stream through the align area as if coming from a live camera. Hit ‘r’ to do it again.

Try the other commands. Hitting ‘v’ will show protocol version information, ‘e’ event
information, etc. Hitting ‘1’, ‘p’, and then ‘r’ will show the image at half height. Hitting ‘1’,
‘f’, and then ‘r’ will show the image at half width. Hitting ‘1’, ‘b’, and then ‘r’ will show the
image in grayscale.
