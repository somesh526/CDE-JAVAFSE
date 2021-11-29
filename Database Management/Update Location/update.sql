DECLARE
lid Department.LOCATION_ID%TYPE:='HQ';
BEGIN
update Department set LOCATION_ID='HQ-BLR-101'
where SUBSTR(LOCATION_ID,1,2)=lid;
commit;
END;
/
