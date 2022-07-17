import React, { useState } from 'react';
import { AiFillHeart } from 'react-icons/ai';
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';
import { FaRegHeart } from 'react-icons/fa';
import { db } from '../firebase';
import { UserAuth } from '../utils/AuthContext';


function Movies({ movie }) {
  const [like, setLike] = useState(false);
  const [saved, setSaved] = useState(false);
  const { user } = UserAuth();

  const movieID = doc(db, 'user', `${user?.email}`);

  const saveShow = async () => {
    if(user?.email) {
      setLike(!like);
      setSaved(true);
      await updateDoc(movieID, {
        savedShows: arrayUnion({
           id: item.id,
           title: item.title,
           img: item.poster_path,
        }),
      }),
    }else {
      alert('log in first pls');
    }
  };
  return (
    <div className="pl-6 relative w-[350px] ">
      <img
        className="max-w-[220px] h-[270px] block object-cover rounded-br-lg rounded-tl-lg"
        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
        alt={movie.title}
      />
      <div onClick={saveShow} className="absolute bg-red-600 rounded-br-lg top-0 p-2 right-o text-white">
        {like ? <AiFillHeart size={15} /> : <FaRegHeart size={15} />}
      </div>
    </div>
  );
}

export default Movies;
