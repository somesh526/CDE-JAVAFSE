create or replace function find_authorization(
trans_id varchar
) 
return varchar
as
temp payment_authorization.transaction_id%TYPE;
som  payment_authorization.processor%TYPE;
BEGIN
select transaction_id into temp from payment_authorization
where transaction_id=trans_id;
select processor into som from payment_authorization
where transaction_id=trans_id;

if trans_id=temp then
return som;
end if;
if sql%NOTFOUND then
return 'No Such Payment Autorization';
end if;
end;
/
