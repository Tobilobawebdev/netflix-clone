import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Movies from './Movies';

function Row({ title, rowID, fetchURL }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchURL]);

  const slideLeft = () => {
    const slider = document.getElementById(`slider${rowID}`);
    slider.scrollbarLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    const slider = document.getElementById(`slider${rowID}`);
    slider.scrollbarLeft = slider.scrollLeft + 500;
  };

  return (
    <div className="mt-6">
      <h1 className="font-bold md:text-2xl text-xl m-3">{title}</h1>
      <div className="relative items-center group">
        <MdChevronLeft
          onClick={slideLeft}
          size={20}
          className="bg-white text-blue-600 left-0 rounded-full absolute hover:opacity-100 cursor=pointer z-10 hidden group-hover:block"
        />
        <div
          id={`slider${rowID}`}
          className="flex scrollbar-hide overflow-x-scroll w-full h-full relative scroll-smooth whitespace-nowrap"
        >
          {movies.map((movie) => (
            <Movies movie={movie} key={movie.id} />
          ))}
        </div>
        <MdChevronRight
          onClick={slideRight}
          size={20}
          className="bg-white text-blue-600 right-0 rounded-full absolute hover:opacity-100 cursor=pointer z-10 hidden group-hover:block"
        />
      </div>
    </div>
  );
}

export default Row;
