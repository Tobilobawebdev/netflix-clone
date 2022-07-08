import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import axios from 'axios'
import { AiOutlinePlayCircle, AiOutlinePlusCircle } from 'react-icons/ai'
import { StarIcon } from '@heroicons/react/solid'

const MovieDetails = () => {
  const [movie, setMovie] = useState({})
  const {movieId} =  useParams()

  const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=8d4fbe03b6c5ab92b91776b7cc982e2d&language=en-US`

  useEffect(() => {
    axios.get(url).then((response) => {
      setMovie(response.data.results)
    }).catch((error) => {
      console.log(error);
    })
  }, [url])
console.log(movie);

  return <div>
    <div className="w-full h-[400px]">
       <img
          className='w-full h-full md:opacity-25 object-cover'
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />
        <div className="absolute top-[50%] flex left-[40%] justify-center items-center text-blue-600 space-x-3">
        <AiOutlinePlayCircle size={60} />
         <AiOutlinePlusCircle size={60} />
        </div>
        <h1 className="text-3xl font-bold text-blue-600 w-full md:max-w-[70%] lg:max-[50%] xl:max-w-[35%]">{movie?.title || movie?.original_name || movie?.name}</h1>
        <div classNames="flex items-center">
          <h1 className="font-black text-blue-600 text-xl">N</h1>
            Movies
        </div>
    </div>
  </div>;
};

export default MovieDetails;
