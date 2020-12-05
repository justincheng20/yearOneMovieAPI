import React from 'react';
import { Link } from 'react-router-dom';

function MovieListItem({ movie }) {
  return (
    <div>
      <Link to={`/${movie.id}`}>
        {movie.title}
        <img src={movie.image} width="50" height="80" alt="movie poster"/>
      </Link>
    </div>
  )
};

export default MovieListItem;