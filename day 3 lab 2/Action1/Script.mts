systemutil.Run "http://demo.opencart.com/"

Browser("Your Store").Page("Your Store").WebElement("top").Click
Browser("Your Store").Page("Your Store").Link("Login").Click
Browser("Your Store").Page("Account Login").WebEdit("email").Set DataTable("email", dtGlobalSheet)

Browser("Your Store").Page("Account Login").WebEdit("password").Set DataTable("password", dtGlobalSheet)
Browser("Your Store").Page("Account Login").WebButton("Login").Click



