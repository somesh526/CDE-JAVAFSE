create trigger emp_after_inst
after insert or update
on employee
BEGIN
dbms_output.put_line('NEW EMPLOYEE DETAILS INSERTED');
end;
/
