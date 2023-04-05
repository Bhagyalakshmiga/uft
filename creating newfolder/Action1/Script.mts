Dim folder1
Set folder1= createobject("scripting.filesystemobject") 
'folder1.CreateFolder "c:/apple"
folder1.CreateTextFile "c:/apple/sample.txt"
folder1.CreateTextFile "c:/apple/sample.doc"
folder1.CreateTextFile "c:/apple/sample.pdf"
Set folder1=nothing

