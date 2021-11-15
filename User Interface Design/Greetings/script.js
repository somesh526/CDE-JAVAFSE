function display(){
    var a=document.getElementById("sname").value;
    var e = document.getElementById("course");
    var b= e.options[e.selectedIndex].value;
    if(document.getElementById("sname").value.length == 0)
{
    document.getElementById("greet").innerHTML="Name cannot be empty";
}
else
    document.getElementById("greet").innerHTML = "Hi, "+a+". You have successfully registered for the "+b+" course.";
}
