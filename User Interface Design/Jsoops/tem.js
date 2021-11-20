// calculator using arrow function

var add=(a,b) =>{
   return a+b;
}

var sub=(a,b) =>{
    return a-b;
 }

var mul=(a,b) =>{
    return a*b;
 }

var div=(a,b) =>{
    return a/b;
}

console.log(add(2,3));
console.log(sub(2,3));
console.log(mul(2,3));
console.log(div(2,3));


// Constructor Function

function Employee (ename, eage, esalary) {

    // assigning  parameter values to the calling object
     this.name = ename,
     this.age = eage,
     this.salary = esalary,
 
     this.working = function () {
         return (this.name+' '+'working');
     }
     this.auditing = function () {
         return (this.name+''+'auditing');
     }
 }
 
 
 // creating objects
const employee1 = new Employee('Som', 23, 2000);
const employee2 = new Employee('Sam', 25, 5000);
 
 // accessing properties
 console.log(employee1.name); 
 console.log(employee2.salary); 
 console.log(employee2.working());

 //Object Literal

 const Car = { 
    carname: 'hyundai',
    carmodel:'i20',
    speed:190,
    Topspeed: function() {
        return (Car.speed+' '+'km/h');
    },
    Fueltype: function(){
        return (Car.carmodel+' '+'Gasoline');
    }
};
console.log(typeof Car);
console.log(Car.Topspeed());
console.log(Car.Fueltype());