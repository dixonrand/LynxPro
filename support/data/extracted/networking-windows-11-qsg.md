# Networking (Windows 11) QSG

**Title:** Networking (Windows 11) QSG
**Slug:** `networking-windows-11-qsg`
**Category:** Lynx-Sold Software › QSGs
**Type:** qsg
**Source URL:** https://finishlynx.com/wp-content/uploads/2023/04/NetworkingWindows11.pdf
**Use:** Refer to this for network setup and configuration on Windows 11 systems.

---

LYNX SYSTEM DEVELOPERS, INC.

                                  Windows 11 Networking

Step 1: Set Static IP Address on Computers
1. Right-click on the Windows Start button and   4. Click Edit next to IP Assignment.
   select Settings.




2. Choose Network and Internet.
                                                                          cv


                                                 5. Select the following:
                                                            a. Manual
                                                            b. IPv4 = On
                                                            c. IP Address
                        cv                                             i. FinishLynx PC = 192.168.0.5
                                                                      ii. Meet Mgr PC = 192.168.0.90
                                                            d. Subnet Mask = 255.255.255.0
3. Click Ethernet.
                                                            e. Click Save.




Email: support@finishlynx.com                                                       www.finishlynx.com
                                                                         LYNX SYSTEM DEVELOPERS, INC.
Step 2: Set Network Settings
1. Navigate to:
      Start | Settings | Network and Internet | Advanced network settings | Advanced sharing settings.
2. Change your settings to match the following:
   a. Public networks: Turn ON Network Discovery and turn ON File and Printer Sharing
   b. All Networks: Turn ON Public Folder Sharing, use 128-bit encryption.
3. These settings are recommended for BOTH the FinishLynx computer and the meet manager computer.



Step 3: Create a Meet Directory Folder and Make it a Mapped Drive
1. Create a folder on your FinishLynx computer.
   Right-click on the folder and click Show More
   Options…
2. Navigate to Give access to | Specific People…




                                                            c. Double-click on the FinishLynx computer’s
                                                               name and navigate to the database folder
                                                               you just created and shared on the
                                                               FinishLynx computer.
                                                                 a. If you do not see the FinishLynx
                                                                     PC listed or get a Windows
                                                                     network error “Windows cannot
                                                                     access \\FL-PC-NAME” see the
                                                                     troubleshooting steps at the end of
3. From the drop-down list, choose Everyone and
                                                                     this document.
   click Add.
                                                            b. Double-click on that folder and click OK,
    a. Once Everyone is added to the list below,
                                                               check reconnect at sign-in and click
         change their Permission Level to Read and
                                                               Finish.
         Write. Then click Share.
                                                            c. The database folder you just created and
    b. The folder should now be visible to your meet
                                                               shared on the FinishLynx computer is now
         manager computer.
                                                               a mapped drive on the meet manager
                                                               computer.
4. On the meet manager computer, open File                  d. In your meet manager software, when you
   Explorer and from the list on the left choose This          go to update your start-list, you can simply
   PC.                                                         choose this new drive instead of navigating
    a. At the top click Map Network Drive.                     through the network.
    b. Click browse and then browse through the
        network to the FinishLynx computer.



Email: support@finishlynx.com                                                            www.finishlynx.com
                                                                           LYNX SYSTEM DEVELOPERS, INC.
Step 4: Configure FinishLynx to load the schedule and start lists and save results files
1. In FinishLynx, navigate to File | Options |
    Database tab.                                      2. Once you generate a start list from the meet
   a. Next to Input Directory click Browse; navigate      manager software into the database folder,
      to and double-click on the database folder you      FinishLynx is ready to load an event from the
      created earlier. Click OK                           schedule.
   b. Repeat this step for the Output Directory or        a. To do this, Navigate to File | Goto event….
      simply copy the file path from the input            b. Click Load schedule and then expand the
      directory box and paste it into the output              drop-down list; you will see your list of events
      directory box. Click OK.                                generated by the meet manager.
                                                          c. Select your first event and click OK. It is now
                                                              armed and ready!




Troubleshooting potential networking issues
If you are having trouble seeing the other computer in File Explorer | Network, follow
these steps on both computers:
1. Next to the Windows Start Button in the Search
   bar, type Services and select it once it appears.
2. Scroll down to the two services named Function
   Discovery Provider Host and Function Discovery
   Resource Publication.
3. For each one, right-click on it and choose
   Properties.
   a. Change the startup type to Automatic.
   b. If service status is Stopped, click Start.
   c. Click Apply and OK.
   d. Repeat for the other service. Both services’
        statuses should now be Running.
4. Each computer should now be visible to the other
   in File Explorer.




Email: support@finishlynx.com                                                              www.finishlynx.com
                                                            LYNX SYSTEM DEVELOPERS, INC.

If you are having trouble selecting the other computer when trying to map the drive and
get the error message “Windows cannot access \\[PC-NAME],” follow these steps on
both computers:
  After a recent Windows 11 update to version 24H2,
  Windows may not allow you to access shared
  folders and files on another networked PC. A
  symptom of this issue is if you go to File Explorer |
  Network on the meet manager PC and double-click
  on the FinishLynx PC listed; you will get a Network
  Error pop-up that looks like the one shown here. If
  you see this issue, follow the steps in the linked
  article below.

  Article: FIX: Windows 11 24H2 Cannot Access
  Network Shares (0x80070035)




Email: support@finishlynx.com                                            www.finishlynx.com
