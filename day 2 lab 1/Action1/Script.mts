systemutil.Run "http://demo.opencart.com/" @@ script infofile_;_ZIP::ssf1.xml_;_

if obj=Browser("Your Store").exist(50) then @@ script infofile_;_ZIP::ssf14.xml_;_
 msgbox "website is avalable"
 else
 msgbox "window not available"
End If
systemutil.Run "http://demo.opencart.com/" @@ script infofile_;_ZIP::ssf1.xml_;_
wait(5)

Browser("Your Store").Page("Register Account").WebEdit("email_2").WaitProperty "visible", true, 10000
Browser("Your Store").Page("Your Store").Link("My Account").Click @@ script infofile_;_ZIP::ssf2.xml_;_
Browser("Your Store").Page("Your Store").Link("Register").Click @@ script infofile_;_ZIP::ssf3.xml_;_
Browser("Your Store").Page("Register Account").WebEdit("firstname").Set "ab" @@ script infofile_;_ZIP::ssf4.xml_;_
Browser("Your Store").Page("Register Account").WebEdit("lastname").Set "c" @@ script infofile_;_ZIP::ssf5.xml_;_
Browser("Your Store").Page("Register Account").WebEdit("email").Set "abc@mail.com" @@ script infofile_;_ZIP::ssf6.xml_;_
Browser("Your Store").Page("Register Account").WebEdit("password").SetSecure "6411a45e6c76b1582cfdf67e4f9b" @@ script infofile_;_ZIP::ssf7.xml_;_
Browser("Your Store").Page("Register Account").WebCheckBox("agree").Set "ON" @@ script infofile_;_ZIP::ssf8.xml_;_
Browser("Your Store").Page("Register Account").WebButton("Continue").Click
Browser("Your Store").Page("Register Account").Link("My Account").Click @@ script infofile_;_ZIP::ssf10.xml_;_
Browser("Your Store").Page("Register Account").Link("Login").Click @@ script infofile_;_ZIP::ssf11.xml_;_
Browser("Your Store").Page("Register Account").WebEdit("email_2").Set "abc@mail.com" @@ script infofile_;_ZIP::ssf12.xml_;_
Browser("Your Store").Page("Register Account").WebEdit("password").SetSecure "6411a47bbdb688f2ec60cc3a4d03" @@ script infofile_;_ZIP::ssf13.xml_;_
Browser("Your Store").Page("Register Account").WebButton("Login").Click @@ script infofile_;_ZIP::ssf14.xml_;_

