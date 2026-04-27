# Networking (Windows 10) QSG

**Title:** Networking (Windows 10) QSG
**Slug:** `networking-windows-10-qsg`
**Category:** Lynx-Sold Software › QSGs
**Type:** qsg
**Source URL:** https://finishlynx.com/wp-content/uploads/2022/06/NetworkingWindows10.pdf
**Use:** Refer to this for network setup and configuration on Windows 10 systems.

---

LYNX SYSTEM DEVELOPERS, INC.

                                   Windows 10 Networking

Step 1: Set Static IP Address on Computers
1. Right-click on the Windows Start button and         5. Double-click on Internet Protocol Version 4
   select Settings.                                       (TCP/IPv4).




2. Choose Network and Internet.




3. Click Change adapter options.
                                                       6. Choose Use the following IP address: and
                                                          enter 192.168.0.5.
                                                          a. Hit the TAB key and it will auto-fill the subnet
                                                              mask with 255.255.255.0 (if it does not, you
                                                              can type it in).
                                                          b. Click OK.
                                                          c. Repeat these steps on the meet manager
                                                              computer using IP Address 192.168.0.90




4. Right-click on     Ethernet   and   then   choose
   Properties.




Email: support@finishlynx.com                                                              www.finishlynx.com
                                                                          LYNX SYSTEM DEVELOPERS, INC.


Step 2: Set Network Settings
1. Navigate to Start | Settings | Network and Internet | Ethernet | Change advanced sharing options.
2. Change your settings to match the following:
   a. Public: Turn ON Network Discovery and turn ON File and Printer Sharing
   b. All Networks: Turn ON Public Folder Sharing, use 128-bit encryption, and turn OFF Password-
      Protected Sharing.
3. These settings are recommended for BOTH the FinishLynx computer and the meet manager computer.

Step 3: Create a Meet Directory Folder and Make it a Mapped Drive
1. Create a folder on your FinishLynx computer.        3. On the meet manager computer, open File
   Right-click on the folder and navigate to Give         Explorer and from the list on the left choose This
   access to | Specific People…                           PC.
                                                           a. At the top click Map Network Drive.
                                                           b. Click browse, and then browse through the
                                                               network to the FinishLynx computer.
                                                           c. Double-click on the FinishLynx computer’s
                                                               name, and navigate to the database folder
                                                               you just created and shared on the
                                                               FinishLynx computer.
                                                           d. Double-click on that folder and click OK,
                                                               check reconnect at sign-in and click
                                                               Finish.
                                                           e. The database folder you just created and
                                                               shared on the FinishLynx computer is now
                                                               a mapped drive on the meet manager
                                                               computer.
                                                           f. In your meet manager software, when you
                                                               go to update your start-list, you can simply
                                                               choose this new drive instead of navigating
2. From the drop-down list, choose Everyone and                through the network.
   click Add.
    a. Once Everyone is added to the list below,
         change their Permission Level to Read and
         Write. Then click Share.
    b. The folder should now be visible to your meet
         manager computer.




Email: support@finishlynx.com                                                             www.finishlynx.com
                                                                       LYNX SYSTEM DEVELOPERS, INC.


If you are having trouble seeing the other computer in File Explorer | Network, follow
these steps on both computers:
1. Next to the Windows Start Button in the Type
   here to search bar, type Services and select it
   once it appears.
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




Step 4: Configure FinishLynx to load the schedule and start lists and save results files
1. In FinishLynx, navigate to File | Options |        2. Once you generate a start list from the meet
   Database tab.                                         manager software into the database folder,
  a. Next to Input Directory click Browse;               FinishLynx is ready to load an event from the
      navigate to and double-click on the database       schedule.
      folder you created earlier. Click OK               a. To do this, Navigate to File | Goto event….
  b. Repeat this step for the Output Directory or        b. Click Load schedule, and then expand the
      simply copy the file path from the input               drop-down list; you will see your list of
      directory box and paste it into the output             events generated by the meet manager.
      directory box. Click OK.                           c. Select your first event, and click OK. It is
                                                             now armed and ready!




Email: support@finishlynx.com                                                          www.finishlynx.com
