DROP DATABASE IF EXISTS playlist_db;

CREATE DATABASE playlist_db;

USE playlist_db;

CREATE TABLE songs (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(30),
    artist VARCHAR(30),
    genre VARCHAR(30),
    PRIMARY KEY (id)
);

INSERT INTO songs (title, artist, genre) 
VALUES ("Ice Ice Baby", "Vanilla Ice", "Hip Hop");

INSERT INTO songs (title, artist, genre) 
VALUES ("Laugh Now, Cry Later", "Drake", "Hip Hop");

INSERT INTO songs (title, artist, genre) 
VALUES ("Holy Grail", "JAY-Z (feat. Kevin Miller)", "Hip Hop");