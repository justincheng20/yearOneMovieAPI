import React from 'react';
import { useParams } from 'react-router-dom';

function Movie() {
  console.log("!")
  let { id } = useParams();
  console.log(id)
  // useEffect to fetch rest of movie data
  // and fetch stored upvote/downvotes
  // make new entry if it does not exist!
  return (
    <div>
      Hi! {id}
    </div>
  )
};

export default Movie;