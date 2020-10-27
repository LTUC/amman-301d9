DROP TABLE IF EXISTS people_info;

CREATE TABLE people_info(
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(200),
    last_name VARCHAR(200)
);