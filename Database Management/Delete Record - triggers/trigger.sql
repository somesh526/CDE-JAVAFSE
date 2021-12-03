create trigger emp
after delete
on employee
FOR EACH ROW
BEGIN
insert into EMPLOYEE_ARCHIVE (empid,empname,managerid, deleted_date)
values (:old.empid,:old.empname,:old.managerid,SYSDATE);
end;
/
