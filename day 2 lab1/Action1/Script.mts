systemutil.Run "C:\Program Files (x86)\HPE\Unified Functional Testing\samples\Flights Application\FlightsGUI.exe"
 @@ script infofile_;_ZIP::ssf21.xml_;_
 If WpfWindow("HPE MyFlight Sample Applicatio").exist(50) Then
 	msgbox "flight window is available"
 	else
 	msgbox "flight window is not available"
 End If
WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("OK").WaitProperty "enabled", true, 10000 @@ hightlight id_;_2057709216_;_script infofile_;_ZIP::ssf42.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfEdit("agentName").Set "john" @@ hightlight id_;_2027977896_;_script infofile_;_ZIP::ssf35.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfEdit("password").Set "hp" @@ hightlight id_;_2027977800_;_script infofile_;_ZIP::ssf36.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("OK").Click @@ hightlight id_;_2115711752_;_script infofile_;_ZIP::ssf37.xml_;_

wait(10)
WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("FIND FLIGHTS").Click @@ hightlight id_;_2115713864_;_script infofile_;_ZIP::ssf38.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfTable("flightsDataGrid").SelectCell 2,2 @@ hightlight id_;_2115712904_;_script infofile_;_ZIP::ssf39.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("SELECT FLIGHT").Click @@ hightlight id_;_2115715016_;_script infofile_;_ZIP::ssf40.xml_;_

WpfWindow("HPE MyFlight Sample Applicatio").close @@ hightlight id_;_2115715016_;_script infofile_;_ZIP::ssf40.xml_;_
 
