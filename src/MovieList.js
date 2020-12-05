import React from 'react';
import uuid from 'react-uuid'
import MovieListItem from './MovieListItem';

function MovieList({ movies }) {

  return (
    <div>
      <ul>
        {movies.map(movie => <li key={uuid}>{<MovieListItem movie={movie} />}</li>)}
      </ul>
    </div>
  )
};

export default MovieList;