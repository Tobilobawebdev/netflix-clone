import React from "react";
import { Link } from 'react-router-dom'



const Movies = ({ movie }) => {
  return <div>
    <Link to={`/movie/${movie.id}`}>
    <img 
           className='h-[150px] w-[380px] shrink-0 transition-all duration-100 object-cover delay-300 ease-in-out hover:scale-125 rounded-lg block'
          src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
          alt={movie?.title}/>
         </Link>
   
  </div>;
};

export default Movies;
