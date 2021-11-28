select distinct u.NAME,u.ADDRESS from USERS u,
BOOKINGDETAILS b where b.USER_ID=u.USER_ID and u.USER_ID not in (select USER_ID from BOOKINGDETAILS where NAME="HDFC")
order by u.NAME;
