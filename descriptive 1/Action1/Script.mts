systemutil.Run "C:\Program Files (x86)\HPE\Unified Functional Testing\samples\Flights Application\FlightsGUI.exe"

WpfWindow("devname:=HPE MyFlight Sample Application").WpfEdit("devname:=agentName").Set "john"
WpfWindow("devname:=HPE MyFlight Sample Application").WpfEdit("devname:=password").Set  "ho"
WpfWindow("devname:=HPE MyFlight Sample Application").WpfButton("text:=OK").Click

