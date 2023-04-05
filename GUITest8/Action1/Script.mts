set obj1=createobject("scripting.dictionary")

obj1.Add "1001" , "sai"
obj1.add "1002" , "lakshmi"
obj1.add "1003" , "bhagi"

For each i in obj1.items
msgbox i
	
Next

obj1.Remove "1002"

For each i in obj1.Items
	msgbox i
Next

 If obj1.exists("1002") Then
 	print ( "exists")
 	Else 
 	print( "not exists")
 End If


