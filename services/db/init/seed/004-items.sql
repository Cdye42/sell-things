insert into items (item_handle, name, price) values
    ('cfe9d0f6-8d6b-420d-9052-5f5bfecccf78', 'shoes', '$109.99'),
    ('0b724648-2e46-4ecf-a4bf-bce250ae99a4', 'windbreaker','$129.99'),
    ('c4b08434-f77e-4362-ac74-297f68b122ad', 'helmet','$119.99')
on conflict do nothing;



