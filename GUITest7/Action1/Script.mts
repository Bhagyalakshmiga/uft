x=msgbox("welcome to vbscript",vbyesno,"saritha")

If x=vbyes then 
	msgbox "yes button was clicked",vbcritical, "yesbutton"
	else
	msgbox "no button was clicked" ,vbquestion,"nobutton"
End If

name =inputbox("enter your name", "name" , "saritha",400, 340)
msgbox name
