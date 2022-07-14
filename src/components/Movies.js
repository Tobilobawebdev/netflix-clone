import React from 'react';
import { AiFillHeart } from 'react-icons/ai';

function Movies({ movie }) {
  return (
    <div className="pl-6 relativ0 h-[150px]  w-[100px]">
      <img
        className="h-[150px] transition-all hover:border-2 hover:border-white hover:border-bold object-cover duration-100 delay-300 ease-in-out hover:scale-125 rounded-lg"
        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
        alt={movie.title}
      />
      <div className="absolute top-0 right-o text-white">
        <AiFillHeart />
      </div>
    </div>
  );
}

export default Movies;
