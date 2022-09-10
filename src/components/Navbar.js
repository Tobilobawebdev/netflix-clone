import React, { useEffect, useState } from 'react';
import logo from '../fonts/netflix.svg'
import { MdCastConnected } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../utils/AuthContext';

function Navbar() {
  const { user, logOut } = UserAuth();
  const [isScroll, setIsScroll] = useState('transparent');
  const [textColor, setTextColor] = useState('#000');
  const navigate = useNavigate();
  // console.log(user.email)

  const handleLogout = async () => {
    try {
      await logOut();
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 90) {
        setIsScroll('#000');
        setTextColor('#ffffff');
      } else {
        setIsScroll('transparent');
        setTextColor('#000');
      }
    };
    window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{ backgroundColor: `${isScroll}` }} className="justify-between py-1.5 flex fixed bg-transparent w-full items-center pl-3 z-[100]">
      <div className='flex cursor-pointer items-center space-x-4 '>
      <Link to="/">
        <img src={logo} className='w-20 h-20 object-contain' alt='' />
      </Link>

      {/* middle navigation menu */}
      <div className="text-sm  font-Beue font-semibold hidden lg:flex space-x-4 pl-6 ">
        <p className="hover:text-red-600">Tv shows</p>
        <p className="hover:text-red-600">Movies</p>
        <p className="hover:text-red-600">Tv shows</p>
        <p className="hover:text-red-600">Kids</p>
        <p className="hover:text-red-600"> Categories</p>
      </div>
      </div>
      
      {/* middle navigation menu end */}

      {/*  navigation profile section */}
      {user?.email ? (
        <div className='flex font-Beue space-x-3 pr-4 items-center'>
          <Link to="/account">
            <button type="button" className="text-white pr-4">Account</button>
          </Link>
          <button
            type="button"
            onClick={handleLogout}
            className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white"
          >
            Logout
          </button>
        </div>
      ) : (
        <div className='flex font-Beue space-x-3 pr-4 items-center'>
          <Link to="/signin">
            <button type="button" className="text-white pr-4">Sign In</button>
          </Link>
          <Link to="/signup">
            <button type="button" className="bg-red-600 px-3 py-0.5 rounded-full cursor-pointer text-white">
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Navbar;
