function validateEmail(email) {
   //fill the code
   var re = /\S+@\S+\.\S+/;
   if(re.test(email)){
       return "Valid email address!";
   }
   else
   return "Invalid email address!";
}
console.log(validateEmail('info123-ex.com'));
