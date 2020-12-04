import React, { useState } from 'react';
import axios from 'axios';
import MovieList from './MovieList';
import SearchForm from './SearchForm';

function Home() {
  const [movies, setMovies] = useState([]);
  const searchMovies = async (title) => {
    const options = {
      method: 'GET',
      url: `https://imdb-internet-movie-database-unofficial.p.rapidapi.com/search/${title}`,
      headers: {
        'x-rapidapi-key': 'd122deae09mshd1e30a7aa0d5fcep1a6acfjsnbc4ae67cf9ff',
        'x-rapidapi-host': 'imdb-internet-movie-database-unofficial.p.rapidapi.com'
      }
    };
    let results = await axios.request(options);
    setMovies(results.data.titles);
    console.log(results.data.titles, movies);
  };

  return (
    <div>
      <SearchForm searchMovies={searchMovies} />
      <MovieList movies={movies} />
    </div>
  );
}

export default Home;