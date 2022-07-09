import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { AiOutlinePlayCircle, AiOutlinePlus, AiOutlineInfoCircle } from 'react-icons/ai';
import { StarIcon } from '@heroicons/react/solid';
import requests from '../utils/requests';

function Banner() {
  const [movies, setMovies] = useState([]);

  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios.get(requests.fetchTrending).then((response) => {
      setMovies(response.data.results);
    });
  }, []);

  return (
    <div className="w-full relative h-[700px]">
      <div className="w-full h-full">
        <div className="w-full h-[700px] hidden lg:block absolute bg-gradient-to-r from-black" />
        <img
          className="hidden lg:block w-full h-full md:opacity-25 object-cover"
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />
        <img
          className="lg:hidden w-full h-full  object-cover"
          src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
          alt={movie?.title}
        />
        <div className="absolute hidden lg:grid   w-full top-[30%] mb-3 p-4 md:p-8">
          <h1 className="text-blue-600 w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-3xl md:text-5xl font-bold">
            {movie?.title || movie?.original_title || movie?.name}
          </h1>
          <p>Realeased: {movie?.release_date}</p>
          <div className="flex py-2">
            {[...Array(5)].map((_, i) => <StarIcon key={i} className="h-4 w-4 fill-current text-blue-600" />)}
          </div>

          <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%]">{movie?.overview}</p>
          <div className="my-4">
            <div className="text-blue-600 animate-pulse flex space-x-12">
              <h1 className="flex items-center px-3 bg-blue-800"><AiOutlinePlayCircle size={25} /> Play</h1>
              <h1 className="flex-col items-center px-3 border-2 border-blue-800"><AiOutlinePlus size={25} /> List</h1>
            </div>
          </div>
        </div>
      </div>
      {/* mobileview */}
      <div className="text-blue-600 ">
        <h1 className="flex items-center px-3 bg-blue-800">
          <AiOutlinePlayCircle size={25} />
          Play
        </h1>
        <h1 className="flex-col items-center px-3 border-2 border-blue-800">
          <AiOutlinePlus size={25} />
          List
        </h1>
        <h1 className="flex-col items-center px-3 border-2 border-blue-800">
          <AiOutlineInfoCircle size={25} />
          List
        </h1>
      </div>
      {/* mobileview end */}
      <img
        className="w-[30%] rounded-lg shadow-2xl shadow-gray-600 h-[80%] hidden lg:block absolute top-[10%] left-[60%] object-cover"
        src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
        alt={movie?.title}
      />
    </div>
  );
}

export default Banner;
