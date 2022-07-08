import React, { useEffect, useState } from "react";
import { Avatar  } from 'web3uikit'
import { BiChevronDown } from 'react-icons/bi'



function Navbar() {
const [isScroll, setIsScroll] = useState('transparent')
const [textColor, setTextColor] = useState('#0000ff')


  useEffect(() => {
   const handleScroll = () => {
    if (window.scrollY >= 90) {
      setIsScroll('#0000cd');
      setTextColor('#f0ffff');
    }else {
      setIsScroll('transparent')
      setTextColor('#0000ff')
    }
   };
   window.addEventListener('scroll', handleScroll);
  }, []);

  return  <div style={{ backgroundColor: `${isScroll}` }} className="justify-between flex fixed bg-transparent w-full items-center p-3 z-[100]">
    <h1 style={{ color: `${textColor}` }} className="text-blue-600 font-bold text-xl lg:text-2xl">NETFLIX</h1>
  {/* middle navigation menu */}
    <div className="text-sm hidden lg:flex space-x-6 pr-6 ">
      <p className="hover:text-blue-600">Tv shows</p>
      <p className="hover:text-blue-600">Movies</p>
      <label  className="hover:text-blue-600 flex bg-transparent">
        Categories
       <BiChevronDown/> 
      </label>
      
      </div>  
     {/* middle navigation menu end */}
  
    {/*  navigation profile section */}
    <div className="flex space-x-4 items-center">
        <Avatar size={20} />
        <button className="bg-white rounded-full max-w-md text-blue-600 text-sm font-bold py-2 px-3">Connect Wallet</button>
    </div>
    </div>;
}

export default Navbar;
