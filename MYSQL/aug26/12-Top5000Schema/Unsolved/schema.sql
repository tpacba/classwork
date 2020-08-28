DROP DATABASE IF EXISTS topsongs_DB;

CREATE DATABASE topsongs_DB;

USE topsongs_DB;

CREATE TABLE Top1000Songs(
  id INT NOT NULL AUTO_INCREMENT,
  artist VARCHAR(100) NOT NULL,
  year INT(4) NOT NULL,
  raw1 INT default 0,
  raw2 INT default 0,
  raw3 INT default 0,
  raw4 INT default 0,
  raw5 INT default 0,
  PRIMARY KEY (id)
);

CREATE TABLE TopSongs(
  id INT NOT NULL AUTO_INCREMENT,
  artist VARCHAR(100) NOT NULL,
  year INT(4) NOT NULL,
  raw1 INT default 0,
  raw2 INT default 0,
  raw3 INT default 0,
  raw4 INT default 0,
  raw5 INT default 0,
  PRIMARY KEY (id)
);