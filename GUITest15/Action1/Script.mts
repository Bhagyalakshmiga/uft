systemutil.Run "C:\Program Files (x86)\HPE\Unified Functional Testing\samples\Flights Application\FlightsGUI.exe"

WpfWindow("HPE MyFlight Sample Applicatio").Check CheckPoint("HPE MyFlight Sample Application") @@ hightlight id_;_1901982_;_script infofile_;_ZIP::ssf1.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("OK").Check CheckPoint("OK") @@ hightlight id_;_1884209008_;_script infofile_;_ZIP::ssf4.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("Cancel").Click @@ hightlight id_;_196808_;_script infofile_;_ZIP::ssf6.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("OK").Check CheckPoint("OK_2") @@ hightlight id_;_2023598176_;_script infofile_;_ZIP::ssf7.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("OK").Check CheckPoint("OK_3") @@ hightlight id_;_2023634464_;_script infofile_;_ZIP::ssf8.xml_;_


