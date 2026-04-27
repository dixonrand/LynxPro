# XCScore QSG

**Title:** XCScore QSG
**Slug:** `xcscore-qsg`
**Category:** Lynx-Sold Software › QSGs
**Type:** qsg
**Source URL:** https://finishlynx.com/wp-content/uploads/2025/08/XCScore_QSG.pdf
**Use:** Refer to this for XCScore cross country scoring system setup.

---

Lynx System Developers, Inc.


                                                   XCScore
                                               Quick Start Guide
Introduction
This guide explains how to install and configure XCScoreTM to get started calculating cross country team scores and
displaying them for video output using ResulTVTM. Before you begin, you will need the following items:
    •   Lynx Startup Flash Drive or access to the Lynx website (www.finishlynx.com)
    •   A computer with an Ethernet port running Microsoft Windows and ResulTV
Install and Run XCScore
You can install the XCScore software either from the Lynx       2. Follow the instructions on the screen to continue
startup flash drive or download it from the Lynx website:          installation.
www.finishlynx.com/product/software/xcscore-software            3. Click Install.
1. Double-click the XCScore installer and begin                 4. After installation, double-click on the XCScore shortcut
    installation.                                                  on your Desktop to run it.
Configure ResulTV to Receive Data from XCScore
1. In ResulTV, click File | Options… from the Menu              5. From the Serial Port: drop-down list, select Network
   bar. The Options dialog appears.                                (listen).
2. Go to the Sources tab.                                       6. Enter Port 1024.
3. Click New to create a new source.                            7. Click Ok.
4. From the Script: drop-down list, select Video                8. Close and restart ResulTV.
   Display.rss.                                                 9. Click File | Open… from the Menu bar and double-
                                                                   click Video Display.rtv.

Configure FinishLynx to Send Data to XCScore
1. In FinishLynx, click Scoreboard | Options… from                 7. Set Running Time = Off.
   the Menu bar. The Options dialog appears.                       8. Set Results = Auto, uncheck Paging, and click
2. Click New to create a new scoreboard.                               Ok.
3. From Script: drop-down list, select XCScore.lss                 9. Close and restart FinishLynx.
4. Select Network (connect) from the Serial Port:                  10. Click File | Open… from the Menu bar and double-
   drop-down list.                                                     click Boys3000.evn.
5. In the Port field type 1025.                                    11. The results now appear in XCScore, and scores
6. In the IP Address field type the IP Address of the                  are calculated and appear in the ResulTV display
   XCScore computer.                                                   window. During a live event, this will update as
                                                                       new results are created or entered in FinishLynx.




   Lynx System Developers, Inc.       179 Ward Hill Ave., Haverhill, MA 01835 USA                     Tel: 978.556.9780
   www.finishlynx.com                          Toll Free: 800.989.5969                                Fax: 978.556.9781
                                                        XCScore
                                                       Quick Start Guide



Operating XCScore
XCScore can simply run in the background on the
ResulTV computer. It also offers some features to                  2. If you do not know beforehand which affiliations will
provide more accurate live team scores:                               be non-scoring, or if there is an unexpected
1. If you know beforehand which affiliations will be non-             incomplete team perhaps due to injury/DNF, you can
    scoring or are incomplete/will not have enough                    still calculate the correct team scores. Once all
    runners to score, you can configure that in XCScore.              athletes have finished the race, click the Finalize the
    Go to Results | Options and add the affiliations as                 Data button       . XCScore will now recalculate the
    they will appear in XCScore from FinishLynx.                        points, removing any points that were given to
    Alternatively, you can load the affiliations from the               athletes on incomplete teams, and will only show the
    lynx.ppl file if you prefer to not type them in by using            scoring teams in ResulTV.
    the Load… button. This can be useful, for example, if
    there are a lot of incomplete teams or if the race has         NOTE: XCScore will automatically clear when you load
    a lot of individuals. Now, XCScore will not assign             the next event in FinishLynx. If for some reason you need
    points to athletes from those affiliations as they finish.     to clear the XCScore window, you can go to Data | Clear
                                                                   (Alt + C).
NOTE: You need to close and reopen XCScore after
making changes to the Non-scoring Affiliations list.




Breaking Ties in XCScore
In the event that two or more teams tie, XCScore will
break the tie using the 6th finisher.




   Lynx System Developers, Inc.          179 Ward Hill Ave., Haverhill, MA 01835 USA                     Tel: 978.556.9780
   www.finishlynx.com                             Toll Free: 800.989.5969                                Fax: 978.556.9781
