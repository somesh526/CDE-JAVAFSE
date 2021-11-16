var a=document.getElementById("txt");
//var str = $("#text").val();
$('#btnId').click(function() {
var b="Welcome "+a.value+"!";
var c="\""+b+"\"";
document.getElementById("address").innerHTML=c;
});
