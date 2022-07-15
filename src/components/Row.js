import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Movies from './Movies';

function Row({ title, rowID, fetchURL }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchURL]);

  return (
    <div className="mt-6">
      <h1 className="font-bold md:text-2xl text-xl m-3">{title}</h1>
      <div className="flex tailwind-scrollbar-hide">
        {movies.map((movie) => (
          <Movies movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}

export default Row;
