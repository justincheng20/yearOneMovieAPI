import React, { useState } from 'react';
import axios from 'axios';
import MovieList from './MovieList';
import SearchForm from './SearchForm';

function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const searchMovies = async (title) => {
    const options = {
      method: 'GET',
      url: `https://imdb-internet-movie-database-unofficial.p.rapidapi.com/search/${title}`,
      headers: {
        'x-rapidapi-key': process.env.REACT_APP_API_KEY,
        'x-rapidapi-host': 'imdb-internet-movie-database-unofficial.p.rapidapi.com'
      }
    };
    let results = await axios.request(options);
    setMovies(results.data.titles);
    setLoading(false);
  };

  return (
    <div>
      <SearchForm searchMovies={searchMovies} setLoading={setLoading} />
      {
        loading ? <div>Loading...</div> :
        <MovieList movies={movies} />
      }
    </div>
  );
}

export default Home;