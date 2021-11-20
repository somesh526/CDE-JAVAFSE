var arr=[];
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
var employee1 = new Employee('Som', 23, 2000);
arr.push(employee1);



//const employee2 = new Employee('Sam', 25, 5000);
 
 // accessing properties
//  console.log(employee1.name); 
//  console.log(employee2.salary); 
//  console.log(employee2.working());
console.log(arr);