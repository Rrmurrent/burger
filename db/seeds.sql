-- INSERT INTO burgers (name) VALUES ('The Cheesey Meesey');
-- INSERT INTO burgers (name) VALUES ('The Bacon Wakin');
-- INSERT INTO burgers (name, devoured) VALUES ('The Sylvester Provolone', true);
-- INSERT INTO burgers (name, devoured) VALUES ('The Juicy Lucy', true);
-- INSERT INTO burgers (name, devoured) VALUES ('The Jack Daniels', true);
-- INSERT INTO burgers (name, devoured) VALUES ('The Jumpin Juniper', false);
-- INSERT INTO burgers (name, devoured) VALUES ('The Melted Mottza', false);
-- INSERT INTO burgers (name, devoured) VALUES ('The Tasty Tastiness', true);
-- INSERT INTO burgers (name) VALUES ('The Spicy Pumpernickle');

USE burger_db;

INSERT INTO burger(burgerName, devoured)
VALUE('The Cheesey Meesey', false),
('The Bacon Wakin', true),
('The Sylvester Provolone', false),
('The Jumpin Juniper', false),
('The Tasty Tastiness', false);

SELECT * FROM burger;