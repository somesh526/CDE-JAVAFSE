create or replace procedure CHECK_AGE_ELIGIBILITY(
v_id IN EMPLOYEE.EMPID%TYPE,
v_name IN EMPLOYEE.EMPNAME%TYPE,
v_age IN EMPLOYEE.AGE%TYPE)
as
agel18 EXCEPTION;
BEGIN
if v_age >= 18
then 
insert into EMPLOYEE
values (v_id,v_name,v_age);
commit;
dbms_output.put_line('Age valid - Record inserted');
else
RAISE agel18;
END if;
EXCEPTION
when agel18 then
dbms_output.put_line('Age invalid - Record not inserted');
end;
/
