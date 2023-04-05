Dim obj
Set obj=createobject("Excel.Application")
obj.visible=true
Set obj1= obj.workbooks.add()
obj1.cells(1,1).value =  "Hello"
obj1.saveas "c\newexcelfile.xls"
obj1.close
obj.quit
Set obj=nothing
Set obj=nothing

Set obj=createobject("Excel.Application")
obj.visible=true
Set obj1= obj.workbooks.open( "c\newexcelfile.xls")
Set obj2=obj1.worksheets("sheet1")
msgbox cells(2,2).value
obj1.close
obj.quit
Set obj2=nothing
Set obj2=nothing
Set obj =nothing


