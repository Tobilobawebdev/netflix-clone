import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { AiOutlinePlayCircle, AiOutlinePlus, AiOutlineInfoCircle } from 'react-icons/ai';
import { Button, Stack } from '@chakra-ui/react';
import { StarIcon } from '@heroicons/react/solid';
import axios from 'axios';

function MovieDetails() {
  const [movie, setMovie] = useState({});
  const params = useParams();

  const API_KEY = '8d4fbe03b6c5ab92b91776b7cc982e2d';
  const url = `https://api.themoviedb.org/3/movie${params.id}?api_key=${API_KEY}&language=en-US`;

  useEffect(() => {
    const getMovie = async () => {
      const result = await fetch(url);
      const data = await result.json();

      setMovie(data);
    };
    getMovie();
  }, []);
  console.log(movie);
  return (
    <div>
      <div className="w-full relative h-[700px]">
        <div className="w-full h-full">
          <div className="w-full h-[700px] absolute bg-gradient-to-t from-black to-transparent z-[20] bottom-0" />
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
        <img
          className="w-[30%] rounded-lg shadow-2xl shadow-gray-600 h-[80%] hidden lg:block absolute top-[10%] left-[60%] object-cover"
          src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
          alt={movie?.title}
        />
      </div>
    </div>
  );
}

export default MovieDetails;
