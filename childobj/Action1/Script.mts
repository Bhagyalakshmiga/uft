
Dim obj
Set obj = description.Create()
obj("micclass").value= "Link"



set chl=Browser("Browser").Page("Online Shopping site in").ChildObjects(obj)

msgbox chl.count

For i = 1 To 10 Step 1
print chl(i).getroproperty("innerhtml")
	
Next
