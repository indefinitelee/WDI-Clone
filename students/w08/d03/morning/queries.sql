-- SELECT title
-- FROM movies;

-- SELECT distinct
-- rating
-- FROM movies;

-- SELECT *
-- FROM movies
-- WHERE rating IS NULL;

-- SELECT *
-- FROM MovieTheaters
-- WHERE movie IS NULL;

-- Select all data from all movie theaters and, additionally, the data from the movie that is being shown in the theater (if one is being shown).
SELECT *
FROM MovieTheaters
  LEFT JOIN movies
  ON movies.code = MovieTheaters.movies
WHERE MovieTheaters.movie IS NOT NULL;

-- Select all data from all movies and, if that movie is being shown in a theater, show the data from the theater.
SELECT *
FROM movies, MovieTheaters
  LEFT JOIN MovieTheaters
  ON movies.code = MovieTheaters.code
  WHERE MovieTheaters.name IS NOT NULL;
-- Show the titles of movies not currently being shown in any theaters.
SELECT movies.title
FROM movies
LEFT JOIN MovieTheaters
ON MovieTheaters.movie = movies.code
WHERE MovieTheaters.movie IS NULL;
-- Add the unrated movie "One, Two, Three".
INSERT INTO movies (code, title, rating) VALUES (8, 'One, Two, Three' NULL);
-- Set the rating of all unrated movies to "G".

-- Remove movie theaters projecting movies rated "NC-17".

DELETE FROM MovieTheaters USING movies WHERE MovieTheaters.movie = movies.code
AND movies.rating = 'NC-17';
