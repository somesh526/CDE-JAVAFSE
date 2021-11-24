select partner_id, partner_name, phone_no from delivery_partners
where rating BETWEEN 3 and 5 order by partner_id;
