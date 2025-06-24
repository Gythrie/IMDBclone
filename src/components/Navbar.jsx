import React from 'react';
import Logo from '/src/film_logo.png'; // or try /src/film_logo.png
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex border space-x-8 items-center pl-3 py-2'>
      <img className='w-[50px]' src= {Logo} alt="image here" />
      <Link to ='/Movies' className ='text-blue-600 text-3xl font-bold'>Home</Link>
      <Link to='/Watchlist' className ='text-blue-600 text-3xl font-bold'>Watchlist</Link>
    </div>
  );
};

export default Navbar  
