DROP DATABASE IF EXISTS "movies";

CREATE DATABASE "movies";

\c "movies"

CREATE TABLE movies (id SERIAL PRIMARY KEY, 
                    movieId TEXT NOT NULL, 
                    votes INT NOT NULL DEFAULT 0);
                    

