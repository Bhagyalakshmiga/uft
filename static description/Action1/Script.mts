systemutil.Run "C:\Program Files (x86)\HPE\Unified Functional Testing\samples\Flights Application\FlightsGUI.exe"

Dim win, username,password ,okbutton

Set win=description.create()
Set username=description.create()
Set password=description.create()
Set okbutton=description.create()

win("devname").value="HPE MyFlight Sample Application"
username("devname").value="agentName"
password("devname").value="password"
okbutton("text").value="OK"

WpfWindow(win).WpfEdit(username).Set "john"
WpfWindow(win).WpfEdit(password).Set  "hp"
WpfWindow(win).WpfButton(okbutton).Click

WpfWindow(win).close

