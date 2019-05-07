

create table if not exists items
(
    item_handle uuid primary key default gen_random_uuid(),
    item_name text not null,
    price text not null,
    date_ordered timestamp

);




grant select, insert, update, delete on table items to project_app;
grant select on table items to project_read;