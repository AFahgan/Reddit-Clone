BEGIN;
DROP TABLE IF EXISTS users CASCADE;
CREATE TABLE users (
  id  serial  PRIMARY KEY,
  userName  varchar(100)  NOT NULL,
  email varchar(100) UNIQUE NOT NULL,
  password  varchar(100)  NOT NULL
);


INSERT INTO users (userName,email,password) VALUES ('ayman','ayman@hotmail.com','a123456');


COMMIT;