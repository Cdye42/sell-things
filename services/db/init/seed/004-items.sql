insert into items (reservation_number, checkin_date, checkout_date, number_of_guests, number_of_beds, time_reservation_made) values
    ('61e8d1f8-6c52-11e9-a923-1681be663d3e', '05/20/2019', '5/22/2019','2', '1', now()),
    ('61e8d4b4-6c52-11e9-a923-1681be663d3e', '06/15/2019', '06/26/2019', '3', '2', now()),
    ('61e8d66c-6c52-11e9-a923-1681be663d3e', '05/15/2019', '05/29/2019', '1', '2', now()),
    ('61e8d810-6c52-11e9-a923-1681be663d3e', '06/19/2019', '06/26/2019', '2', '2', now()),
    ('61e8d950-6c52-11e9-a923-1681be663d3e', '12/22/2019', '12/28/2019', '4', '2', now())
on conflict do nothing;