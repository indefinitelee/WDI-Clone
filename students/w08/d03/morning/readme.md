# SQL challenge

Take the following schema for a movies and theaters SQL database

``` SQL
 CREATE TABLE Movies (
   Code INTEGER PRIMARY KEY NOT NULL,
   Title TEXT NOT NULL,
   Rating TEXT 
 );
  
 CREATE TABLE MovieTheaters (
   Code INTEGER PRIMARY KEY NOT NULL,
   Name TEXT NOT NULL,
   Movie INTEGER REFERENCES Movies(Code)
 );
```

Create a database with this schema and seed it with some sample data

```SQL
 INSERT INTO Movies(Code,Title,Rating) VALUES(1,'Citizen Kane','PG');
 INSERT INTO Movies(Code,Title,Rating) VALUES(2,'The Wizard of Oz','G');
 INSERT INTO Movies(Code,Title,Rating) VALUES(3,'The Quiet Man',NULL);
 INSERT INTO Movies(Code,Title,Rating) VALUES(4,'North by Northwest',NULL);
 INSERT INTO Movies(Code,Title,Rating) VALUES(5,'The Last Tango in Paris','NC-17');
 INSERT INTO Movies(Code,Title,Rating) VALUES(6,'Some Like it Hot','PG-13');
 INSERT INTO Movies(Code,Title,Rating) VALUES(7,'A Night at the Opera',NULL);
 
 INSERT INTO MovieTheaters(Code,Name,Movie) VALUES(1,'Odeon',5);
 INSERT INTO MovieTheaters(Code,Name,Movie) VALUES(2,'Imperial',1);
 INSERT INTO MovieTheaters(Code,Name,Movie) VALUES(3,'Majestic',NULL);
 INSERT INTO MovieTheaters(Code,Name,Movie) VALUES(4,'Royale',6);
 INSERT INTO MovieTheaters(Code,Name,Movie) VALUES(5,'Paraiso',3);
 INSERT INTO MovieTheaters(Code,Name,Movie) VALUES(6,'Nickelodeon',NULL);
```

## Queries

Use SQL queries to complete the following tasks

1. Select the title of all movies

2. Show all the distinct ratings in the database.

3. Show all unrated movies.

4. Select all movie theaters that are not currently showing a movie.

5. Select all data from all movie theaters and, additionally, the data from the movie that is being shown in the theater (if one is being shown).

6. Select all data from all movies and, if that movie is being shown in a theater, show the data from the theater.

7. Show the titles of movies not currently being shown in any theaters.

8. Add the unrated movie "One, Two, Three".

9. Set the rating of all unrated movies to "G".

<<<<<<< HEAD
10. Remove movie theaters projecting movies rated "NC-17".
=======
10. Remove movie theaters projecting movies rated "NC-17".
>>>>>>> cf4f5b62222b6989c7e142f8247f0da63e46aeb4
