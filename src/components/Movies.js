import React, { useState } from 'react';
import { AiFillHeart } from 'react-icons/ai';
import { FaRegHeart } from 'react-icons/fa';

function Movies({ movie }) {
  const [like, setLike] = useState(false);
  return (
    <div className="pl-6 relative w-[350px] ">
      <img
        className="max-w-[220px] h-[270px] block object-cover rounded-br-lg rounded-tl-lg"
        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
        alt={movie.title}
      />
      <div className="absolute bg-red-600 rounded-br-lg top-0 p-2 right-o text-white">
        {like ? <AiFillHeart size={15} /> : <FaRegHeart size={15} />}
      </div>
    </div>
  );
}

export default Movies;
