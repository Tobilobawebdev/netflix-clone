import React, { useState, useEffect } from "react";
import axios from 'axios'

function Row({ title, rowID, fetchURL }) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get(fetchURL).then((response) => {
            setMovies(response.data.results);
        });
    }, [fetchURL]);
  return <div>
    <h1 className="font-bold md:text-xl mb-3">{title}</h1>
    <div className="grid grid-cols-4 block gap-3 ">
        {movies.map((item, id) => {
         return <div className=" block gap-3 ">
           <img
          className='h-[250px] w-[90%] transition-all duration-100 object-cover delay-300 ease-in-out hover:scale-125 rounded-lg block'
          src={`https://image.tmdb.org/t/p/original/${item?.backdrop_path}`}
          alt={item?.title}
        />
        <div>
        <h1>{item?.title || item?.original_title || item?.name}</h1>
      </div>
         </div>
        })}
        
    </div>
  </div>;
}

export default Row;
