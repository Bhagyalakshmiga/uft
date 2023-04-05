Set objexcel=createobject("excel.application")
Set objworkbook=objexcel.workbooks.open("‪‪")
Set objworksheet=objworkbook.worksheets(1)
rowcount =objworksheet.usedrange.rows.count
msgbox rowcount
For i = 2 To rowcount Step 1


systemutil.Run "http://demo.opencart.com/"

Browser("Your Store").Page("Your Store").WebElement("top").Click
Browser("Your Store").Page("Your Store").Link("Login").Click
Browser("Your Store").Page("Account Login").WebEdit("email").Set DataTable("email", dtGlobalSheet)

Browser("Your Store").Page("Account Login").WebEdit("password").Set DataTable("password", dtGlobalSheet)
Browser("Your Store").Page("Account Login").WebButton("Login").Click
	
Next
Set objworkbook=nothing
Set objworksheet=nothing

