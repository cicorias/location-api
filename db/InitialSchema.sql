create extension if not exists postgis;

create table food_truck (
  id uuid primary key,
  position geometry(point, 4326),
  title varchar,
  description varchar,
  status varchar
);

create index position_index on food_truck using gist (position);
