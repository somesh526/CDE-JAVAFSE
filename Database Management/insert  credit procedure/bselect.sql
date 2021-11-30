create or replace PROCEDURE insert_credit
(
credit_id IN number,
credit_card_number IN varchar,
credit_card_expire IN varchar,
holder_name IN varchar,
card_type IN varchar
)
As
BEGIN
Insert into credit_card(id,card_number,card_expire,name,cc_type)
values (credit_id,credit_card_number,credit_card_expire,holder_name,card_type);
commit;
END insert_credit;
/
