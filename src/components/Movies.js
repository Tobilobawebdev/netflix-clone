import React from 'react';

function Movies({ movie }) {
  return (
    <div>
      <img
        className="h-[150px] w-[380px] shrink-0 transition-all duration-100 object-cover delay-300 ease-in-out hover:scale-125 rounded-lg block"
        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
        alt={movie.title}
      />
    </div>
  );
}

export default Movies;
