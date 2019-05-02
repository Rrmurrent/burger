-- -- CREATE DATABASE burger_db;
-- -- USE jh95tuiww7xin3yoi;

-- USE burger_db;
-- CREATE TABLE burgers
-- (
-- 	id int NOT NULL AUTO_INCREMENT,
-- 	name varchar(255) NOT NULL,
-- 	devoured BOOLEAN DEFAULT false,
-- 	PRIMARY KEY (id)
-- );



    
DROP DATABASE IF EXISTS burger_db;
CREATE DATABASE burger_db;
USE burger_db;

CREATE TABLE burger (
id INTEGER AUTO_INCREMENT NOT NULL PRIMARY KEY,
burgerName VARCHAR (30) NOT NULL,
devoured BOOLEAN NOT NULL
);