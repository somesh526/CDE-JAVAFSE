function modifyString(str)
{
var  r =  str.replace(/\s+/g, "");
var  s= r.toLowerCase();
return s;
}

function uniqueCharacters(str)
{
var uniq = "";
for(var i = 0; i < str.length; i++){
if(uniq.includes(str[i]) === false){
uniq += str[i]
}
}
  return modifyString(uniq);
}  
console.log(uniqueCharacters("Welcome to the Javascript course"));
