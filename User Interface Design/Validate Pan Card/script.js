function ValidatePAN(){
    var a=document.getElementById("txt").value;
   // var b="[A-z]{5}[0-9]{4}[A-z]{1}";
    //var regex = /([A-z]){5}([0-9]){4}([A-z]){1}$/;
    var regex=/[A-z]{5}\d{4}[A-z]{1}/i;
    if(regex.test(a))
     document.getElementById("result").innerHTML = a+" "+"is Valid";
    else
     document.getElementById("result").innerHTML = a+" "+"is Invalid";
}
