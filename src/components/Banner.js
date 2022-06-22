import React, { useEffect, useState } from "react";
import axios from 'axios'
import requests from '../utils/requests'
import { AiOutlinePlayCircle, AiOutlinePlusCircle } from 'react-icons/ai'
import { StarIcon } from '@heroicons/react/solid'

function Banner() {
    const [movies, setMovies] = useState([]);

  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios.get(requests.fetchTrending).then((response) => {
      setMovies(response.data.results);
    });
  }, []);
  console.log(movie);

  return <div className="w-full relative h-[700px]">
   <div className="w-full h-full">
    <div className="w-full h-[700px] absolute bg-gradient-to-r from-black"></div>
   <img
          className='w-full h-full opacity-25 object-cover'
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />
    <div className="absolute  w-full top-[30%] mb-3 p-4 md:p-8">
        <h1 className="text-red-600 w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-3xl md:text-5xl font-bold">
            {movie?.title || movie?.original_title || movie?.name}
            </h1>
        <p>Realeased: {movie?.release_date}</p>
        <div className="flex py-2">
            {[...Array(5)].map((_, i) => {
               return <StarIcon key={i} className="h-4 w-4 fill-current text-red-600" />
            })}
        </div>
        
        <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%]">{movie?.overview}</p>
        <div className="my-4">
            <div  className="text-red-600 animate-pulse flex space-x-12">
                <AiOutlinePlayCircle size={60}/> 
                <AiOutlinePlusCircle size={60}/> 
            </div>
            
        </div>
    </div>
   </div>
   <img
          className='w-[30%] rounded-lg shadow-2xl shadow-gray-600 h-[80%] hidden lg:block absolute top-[10%] left-[60%] object-cover'
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />
  </div>;
}

export default Banner;
