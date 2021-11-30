create or replace procedure select_city (user_id IN number, city_details OUT varchar)
as
BEGIN
select case
when city='Bangalore' then
'User is from Bangalore'
when city='Chennai' then
'User is from Chennai'
else
'User is from other cities'
end  into city_details from contact  
where id=user_id;
end;
/

