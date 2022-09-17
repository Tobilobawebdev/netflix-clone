import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function MovieDetails() {
  const [currentMovie, setCurrentMovie] = useState({});
  const { id } = useParams();

  const getData = () => {
    axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=8d4fbe03b6c5ab92b91776b7cc982e2d&language=en-US&append_to_response=recommendations`).then((response) => {
      setCurrentMovie(response.data);
    });
  };

  useEffect(() => {
    getData();
    getData2();
  }, []);
  console.log(currentMovie);
  return (
    <div className="text-6xl">
      <img className="w-full h-[700px] object-cover" src={`https://image.tmdb.org/t/p/original${currentMovie.poster_path}`} />
    </div>
  );
}

export default MovieDetails;
