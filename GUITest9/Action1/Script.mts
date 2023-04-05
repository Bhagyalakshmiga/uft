Dim empdata
Set empdata=createobject("scripting.dictionary")
empdata.Add "1001" , "Namrata:pune" 
empdata.Add "1002" , "rajendra:mumbai"

For each i in empdata.items
	msgbox i
Next

id= inputbox("empid")
name =inputbox("emp name")
location= inputbox("emp location")

print id
print name
print location

If empdata.exists(id) Then
	msgbox "details already exists" , vbcritical ,"error"
	else
	empdata.add id , name & ":" &location
	msgbox "details stored successfully" , vbinformation, "sucess"	
End If
Dim empdetails
empdetails = "emp details:" & vbcrlf
For each key in empdata.Keys
	empdetails = empdetails  & key & ":" & empdata.item(key) &vbcrlf
Next

msgbox empdetails ,vbinformation , "all employees"
