

create table
if not exists items
(
    reservation_number uuid primary key default gen_random_uuid
(),
    checkin_date text not null,
    checkout_date text not null,
    smoking text not null,
    number_of_guests text not null,
    number_of_beds text not null,
    wheelchair text,
    hearing_impaired text,
    suite text,
    time_reservation_made timestamp





);
grant select, insert, update, delete on table items to project_app;
grant select on table items to project_read;