DECLARE
did Department.DEPARTMENT_ID%TYPE;
dnam Department.DEPARTMENT_NAME%TYPE:='TESTING';
dloc Department.LOCATION_ID%TYPE:='CHN-102';
BEGIN
DECLARE
dd Department.DEPARTMENT_ID%TYPE;
BEGIN
select max(DEPARTMENT_ID) into dd from Department;
did:=dd+10;
END;
Insert into Department(DEPARTMENT_ID,DEPARTMENT_NAME,LOCATION_ID)
values (did,dnam,dloc);
commit;
END;
/
