Dim salesofmonths()
ReDim salesofmonths(2)
salesofmonths(0)=100
print (salesofmonths(0))
print (salesofmonths(1))
print (isarray(salesofmonths))
print (ubound(salesofmonths))


Dim mu(9,9)

For i = 0 To 9 Step 1
	For j = 0 To 9 Step 1
	mu (i,j)=(i+1)*(j+1)
	print(i+1&"*" & j+1 &"="&mu(i,j))
	
	Next
Next




