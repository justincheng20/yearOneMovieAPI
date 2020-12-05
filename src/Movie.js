import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import BackendApi from './api';

function Movie() {
  const [movieInfo, setMovieInfo] = useState();
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(true);

  let { id } = useParams();

  useEffect(function () {
    const getMovieInfo = async () => {
      let options = {
        method: 'GET',
        url: `https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/${id}`,
        headers: {
          'x-rapidapi-key': process.env.REACT_APP_API_KEY,
          'x-rapidapi-host': 'imdb-internet-movie-database-unofficial.p.rapidapi.com'
        }
      };

      let results = await axios.request(options);
      setMovieInfo(results.data);
      let movieScore = await BackendApi.getMovieScore(id);

      if (movieScore.data === "") {
        await BackendApi.addMovie(id);
        movieScore.data = { votes: 0 }
      };
      setScore(movieScore.data.votes);
      setLoading(false);
    }
    getMovieInfo();

  }, [id]);

  const upVote = async (id) => {
    await BackendApi.updateMovieScore(id, "up");
    setScore(score + 1);
  }

  const downVote = async (id) => {
    await BackendApi.updateMovieScore(id, "down");
    setScore(score - 1);
  }

  if (loading) {
    return (
      <div>
        Loading...
      </div>
    )
  }

  return (
    <div>
      <div>{movieInfo.title}</div>
      <div>{movieInfo.year}</div>
      <div>{movieInfo.length}</div>
      <div>
        <img src={movieInfo.poster}
          height="400"
          width="300"
          alt="movie poster" />
      </div>
      <div>User Score: {score}</div>
      <div>
        Vote!
        <button onClick={() => upVote(id)}>↑</button>
        <button onClick={() => downVote(id)}>↓</button>
      </div>
    </div>
  )
};

export default Movie;