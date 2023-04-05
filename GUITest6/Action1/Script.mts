Dim a
a=2
Function callbyref(byref var)
	var=10
	msgbox var
End Function
Call callbyref(a)
msgbox a

Dim b
b=2
Function callbyval(byval var)
	var=10
	msgbox var
End Function
Call callbyval(b)
msgbox b
