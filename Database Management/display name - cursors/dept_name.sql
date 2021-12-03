set serveroutput on
BEGIN
dbms_output.put_line('Department Names are:');
for dept_rec IN
(select department_name from department order by department_name asc)
loop 
dbms_output.put_line(dept_rec.department_name);
end loop;
end;
