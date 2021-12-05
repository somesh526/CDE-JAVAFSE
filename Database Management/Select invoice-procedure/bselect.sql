create or replace procedure select_invoice(
invoice_id  number,
invoice_details OUT SYS_REFCURSOR
)
as
BEGIN
open invoice_details for
select status,paper_invoice_batch_number
from invoice where id=invoice_id;
end;
/
