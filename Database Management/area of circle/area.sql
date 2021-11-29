DECLARE
a Circle.Area%TYPE;
p Circle.Area%TYPE:=22/7;
BEGIN
for i in 3..7
loop
a:=p*i*i;
insert into Circle(Radius, Area)
values (i,a);
end loop;
END;
/
