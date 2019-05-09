create table 
if not exists sellers_items
(
    seller_handle uuid references sellers (seller_handle),
    item_handle uuid references items (item_handle),
    sellers_items primary key (seller_handle, item_handle),
    //add other sellers_items rows   
 

grant select, insert, update, delete on table items to project_app;
grant select on table items to project_read;