systemutil.Run "C:\Program Files (x86)\HPE\Unified Functional Testing\samples\Flights Application\FlightsGUI.exe"
WpfWindow("HPE MyFlight Sample Applicatio").WpfEdit("agentName").Set "john" @@ hightlight id_;_2113815120_;_script infofile_;_ZIP::ssf1.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfEdit("password").SetSecure "640ff6762fd8f4d4f2a0" @@ hightlight id_;_2113816800_;_script infofile_;_ZIP::ssf3.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("OK").Click @@ hightlight id_;_2113816128_;_script infofile_;_ZIP::ssf4.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("FIND FLIGHTS").Click @@ hightlight id_;_2113817712_;_script infofile_;_ZIP::ssf5.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfTable("flightsDataGrid").SelectCell 3,0 @@ hightlight id_;_2113820016_;_script infofile_;_ZIP::ssf6.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("SELECT FLIGHT").Click @@ hightlight id_;_2113819584_;_script infofile_;_ZIP::ssf7.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfEdit("passengerName").Set "bhagi" @@ hightlight id_;_2113821072_;_script infofile_;_ZIP::ssf8.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("ORDER").Click @@ hightlight id_;_2113820880_;_script infofile_;_ZIP::ssf9.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfObject("Order 87 completed").Click 84,10 @@ hightlight id_;_2108427192_;_script infofile_;_ZIP::ssf10.xml_;_


