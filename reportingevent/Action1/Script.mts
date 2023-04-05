Function Launch()
	systemutil.Run "C:\Program Files (x86)\HPE\Unified Functional Testing\samples\Flights Application\FlightsGUI.exe"
If WpfWindow("HPE MyFlight Sample Applicatio").exist(1) Then
	
	reporter.ReportEvent micPass ,"Launch", "Application launched successfully"
	else
	reporter.ReportEvent micFail ,"Launch", "Application launch not successful"
	
End If
	
End Function

Function Login()
	WpfWindow("HPE MyFlight Sample Applicatio").WpfEdit("agentName").Set "john"
    WpfWindow("HPE MyFlight Sample Applicatio").WpfEdit("password").Set "hp"
    WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("OK").Click
    

If WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("FIND FLIGHTS").exist(2) Then
	
	reporter.ReportEvent micPass ,"Login", "login successful"
	else
	reporter.ReportEvent micFail ,"Login", "login not successful"
	
End If
	
End Function


Call launch()
Call login()


