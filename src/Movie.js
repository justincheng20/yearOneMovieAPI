import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import BackendApi from './api';

function Movie() {
  console.log("!")
  const [movieInfo, setMovieInfo] = useState();
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(true);
  let { id } = useParams();
  console.log(typeof id)
  // useEffect to fetch rest of movie data
  // and fetch stored upvote/downvotes
  // make new entry if it does not exist!

  useEffect(function () {
    const getMovieInfo = async () => {
      let options = {
        method: 'GET',
        url: `https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/${id}`,
        headers: {
          'x-rapidapi-key': 'd122deae09mshd1e30a7aa0d5fcep1a6acfjsnbc4ae67cf9ff',
          'x-rapidapi-host': 'imdb-internet-movie-database-unofficial.p.rapidapi.com'
        }
      };

      let results = await axios.request(options);
      setMovieInfo(results.data);
      let movieScore = await BackendApi.getMovieScore(id);
      
      if (movieScore.status === undefined){
        let newMovie = await BackendApi.addMovie(id);
        console.log(newMovie);
        movieScore = newMovie.data;
      };
      console.log(movieScore)
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
      {movieInfo.title} -
      {movieInfo.year} -
      {movieInfo.length} -
      {score}
      <button onClick={() => upVote(id)}>↑</button>
      <button onClick={() => downVote(id)}>↓</button>
    </div>
  )
};

export default Movie;