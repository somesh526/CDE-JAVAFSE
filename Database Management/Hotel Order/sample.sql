select DISTINCT h.hotel_id, h.hotel_name, h.rating from hotel_details h
join orders o on h.hotel_id=o.hotel_id
where o.order_date BETWEEN '2019-07-01' and '2019-07-31'
order by hotel_id asc;
