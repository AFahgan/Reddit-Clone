BEGIN;
DROP TABLE IF EXISTS users,posts CASCADE;
CREATE TABLE users (
  id  serial  PRIMARY KEY,
  userName  varchar(100)  NOT NULL,
  email varchar(100) UNIQUE NOT NULL,
  password  varchar(100)  NOT NULL
);

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content VARCHAR(255) NOT NULL,
    img_url VARCHAR(255),
votes integer,
  user_id integer   REFERENCES users(id) ON UPDATE CASCADE
  );


COMMIT;