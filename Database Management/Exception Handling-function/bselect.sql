create or replace function find_invoice_status(
cust_id in number)
return varchar
as
n invoice.status%TYPE;
t invoice.customer_id%TYPE;
BEGIN
select status into n from invoice where customer_id=cust_id;
select  customer_id into t from invoice where customer_id=cust_id;

if t=cust_id
then
return n;
end if;

EXCEPTION
when no_data_found then
return 'No Such Customer';
when too_many_rows then
return 'Multiple Rows Returned';
end;
/

