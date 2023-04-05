
function launch()
systemutil.Run "http://demo.opencart.com/"
end function

Function register()
	Browser("Your Store").Page("Your Store").Link("My Account").Click
Browser("Your Store").Page("Your Store").Link("Register").Click @@ script infofile_;_ZIP::ssf4.xml_;_
Browser("Your Store").Page("Register Account").WebEdit("firstname").Set "ab" @@ script infofile_;_ZIP::ssf5.xml_;_
Browser("Your Store").Page("Register Account").WebEdit("lastname").Set "c" @@ script infofile_;_ZIP::ssf7.xml_;_
Browser("Your Store").Page("Register Account").WebEdit("email").Set "abc@mail.com" @@ script infofile_;_ZIP::ssf8.xml_;_
Browser("Your Store").Page("Register Account").WebEdit("password").SetSecure "64104a45e471400049df92a97536" @@ script infofile_;_ZIP::ssf9.xml_;_
Browser("Your Store").Page("Register Account").WebElement("I have read and agree").Click @@ script infofile_;_ZIP::ssf10.xml_;_
Browser("Your Store").Page("Register Account").WebButton("Continue").Click @@ script infofile_;_ZIP::ssf11.xml_;_

End Function

Function login()
	Browser("Your Store").Page("Your Store").Link("My Account").Click
Browser("Your Store").Page("Register Account").Link("Login").Click @@ script infofile_;_ZIP::ssf12.xml_;_
Browser("Your Store").Page("Register Account").WebEdit("email_2").Set "abc@gmailcom" @@ script infofile_;_ZIP::ssf13.xml_;_
Browser("Your Store").Page("Register Account").WebEdit("password").SetSecure "64104a5bba8d8015bf8b9477e47e" @@ script infofile_;_ZIP::ssf14.xml_;_
Browser("Your Store").Page("Register Account").WebButton("Login").Click @@ script infofile_;_ZIP::ssf15.xml_;_

End Function

Call launch()
Call register()
Call login()
