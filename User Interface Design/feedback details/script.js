var x = 0;
var array = Array();

function addFeedback()
{
 array[x] = document.getElementById("feedback").value;
 x++;
 document.getElementById("feedback").value = "";
}

function displayFeedback()
{
   var e = "";   
   var x="<h2>"+ "Feedback Details"+ "</h2>";
   for (var y=0; y<array.length; y++)
   {
       var z=y+1;
     e += "Feedback"+ " "+ z+ "<br/>" + array[y]+ "<br/>";
   }
   document.getElementById("result").innerHTML =x+e;
}
