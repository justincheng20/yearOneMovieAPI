import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Movie() {
  console.log("!")
  const [movieInfo, setMovieInfo] = useState();
  const [loading, setLoading] = useState(true);
  let { id } = useParams();
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
    console.log(results.data);
    setMovieInfo(results.data);
    console.log(results.data);
    setLoading(false);
    }
    getMovieInfo();
    
  }, [id]);

  if (loading){
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
         </div>
  )
};

export default Movie;