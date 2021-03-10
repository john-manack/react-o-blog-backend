CREATE TABLE album (
    id SERIAL PRIMARY KEY,
    album_name text NOT NULL,
    band_name text NOT NULL,
    slug text NOT NULL,
    link text NOT NULL,
    cover text NOT NULL
);

CREATE TABLE comment (
    id SERIAL PRIMARY KEY,
    stars integer NOT NULL,
    comment_message text NOT NULL,
    album_reference integer REFERENCES album (id)
);