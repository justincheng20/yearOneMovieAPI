import React from 'react';
import MovieListItem from './MovieListItem';

function MovieList({ movies }) {

  return (
    <div>
      <ul>
        {movies.map(movie => <li>{<MovieListItem movie={movie} />}</li>)}
      </ul>
    </div>
  )
};

export default MovieList;