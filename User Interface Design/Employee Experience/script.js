class Employee 
{
constructor(name, designation,year_of_experience){
    this.name=name;
    this.designation=designation;
    this.year_of_experience=year_of_experience;
}
}
function displayEmployee(name,designation,year_of_experience){
    var employee=createEmployee(name,designation,year_of_experience);
    if(validateObject(employee)){
        var dt=new Date();
        var yoj=(dt.getFullYear()-(employee.year_of_experience+1));
        var op=employee.name+" is serving the position of "+employee.designation+" since "+yoj;
        return op;
    }
}

function createEmployee(name, designation, year_of_experience)
{
//fill code here
var emp=new Employee(name,designation,year_of_experience);
return emp;
}

function validateObject(employee)
{
//fill code here
if(employee instanceof Employee){
return true;
}
else{
return false;
}
}
