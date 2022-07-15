import React, { useEffect, useState } from 'react';
import { BiChevronDown } from 'react-icons/bi';
import { MdCastConnected } from 'react-icons/md';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isScroll, setIsScroll] = useState('transparent');
  const [textColor, setTextColor] = useState('#ff0000');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 90) {
        setIsScroll('#ff0000');
        setTextColor('#ffffff');
      } else {
        setIsScroll('transparent');
        setTextColor('#ff0000');
      }
    };
    window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{ backgroundColor: `${isScroll}` }} className="justify-between flex fixed bg-transparent w-full items-center pl-3 z-[100]">
      <h1 style={{ color: `${textColor}` }} className="text-red-600 font-black text-2xl lg:text-3xl">N</h1>
      {/* middle navigation menu */}
      <div className="text-sm hidden lg:flex space-x-6 pr-6 ">
        <p className="hover:text-blue-600">Tv shows</p>
        <p className="hover:text-blue-600">Movies</p>
        <p className="hover:text-blue-600 flex bg-transparent">
          Categories
          <BiChevronDown />
        </p>

      </div>
      {/* middle navigation menu end */}

      {/*  navigation profile section */}
      <div className="flex space-x-4 items-center">
        <MdCastConnected size={20} />
        <Link to="/signup">
          <button type="button" className="bg-white rounded-full max-w-md text-blue-600 text-sm font-bold px-5">Sign up</button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
