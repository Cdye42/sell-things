create table 
if not exists seller
(
    seller_handle uuid primary key references items (item_handle),
    name text not null,
    items_sold int not null,
    star_rating text not null

    foreign key (seller_handle) 

grant select, insert, update, delete on table items to project_app;
grant select on table items to project_read;