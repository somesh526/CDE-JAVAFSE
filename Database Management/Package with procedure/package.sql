create or replace package EMP_DESIGNATION as
procedure EMP_DETAILS (design employee.designation%TYPE, incentive number);
END;
/
create or replace package body EMP_DESIGNATION as
procedure EMP_DETAILS(design employee.designation%TYPE, incentive number)
as
var_rows NUMBER;
BEGIN
update employee set salary=salary+incentive where designation=design;
var_rows := SQL%ROWCOUNT;
dbms_output.put_line(var_rows || 'employee(s) are updated.');
END EMP_DETAILS;
END EMP_DESIGNATION;
/
