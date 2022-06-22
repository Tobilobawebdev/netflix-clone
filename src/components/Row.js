import React, { useState, useEffect } from "react";
import axios from 'axios'
import { AiOutlinePlayCircle, AiOutlinePlusCircle } from 'react-icons/ai'
import { StarIcon } from '@heroicons/react/solid'
import { Modal } from 'web3uikit'


function Row({ title, rowID, fetchURL }) {
    const [movies, setMovies] = useState([]);
    const [visible, setVisible] = useState(false)
    const [selectedFilm, setSelectedFilm] = useState(fetchURL)

    useEffect(() => {
        axios.get(fetchURL).then((response) => {
            setMovies(response.data.results);
        });
    }, [fetchURL]);
  return <div>
    <h1 className="font-bold md:text-2xl text-xl m-3">{title}</h1>
    <div className="grid md:grid-cols-4 grid-cols-3 cursor-pointer gap-3 ">
        {movies.map((item, e) => {
         return <div className=" block gap-3 ">
           <img
           onClick={() => {
            setSelectedFilm(e);
            setVisible(true);
           }}
          className='md:h-[250px] h-[200px] w-[90%] transition-all duration-100 object-cover delay-300 ease-in-out hover:scale-125 rounded-lg block'
          src={`https://image.tmdb.org/t/p/original/${item?.backdrop_path}`}
          alt={item?.title}
        />
         </div>


        })}
        
    </div>
    {/* ModalContent */}
    {selectedFilm && (
          <Modal 
          onCloseButtonPressed={() => setVisible(false)}
          isVisible={visible}
          hasFooter={true}
          width="100%" >
            <div className="w-full relative h-[700px]">
        <div className="w-full h-full">
        <div className="w-full h-[700px] absolute bg-gradient-to-r from-black"></div>
        <img
          className='w-full h-full  object-cover'
          src={`https://image.tmdb.org/t/p/original/${movies?.backdrop_path}`}
          alt={movies?.title}
        />
        <div className="absolute justify-center items-center w-full top-[30%] space-y-6 p-4 md:p-8">
            <div  className="text-red-600 ">
                <AiOutlinePlayCircle size={100}/> 
            
        </div>
        </div>
        </div>
        <h1 className="text-red-600 w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-3xl md:text-5xl font-bold">
            {movies?.title || movies?.original_title || movies?.name}
            </h1>
        <p>Realeased: {movies.release_date}</p>
        <div className="flex py-2">
            {[...Array(5)].map((_, i) => {
               return <StarIcon key={i} className="h-4 w-4 fill-current text-red-600" />
            })}
        </div>
        <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%]">{movies?.overview}</p>
        <AiOutlinePlusCircle size={60}/> 
        </div>;
          </Modal>
        
        )}
  </div>;
}

export default Row;
