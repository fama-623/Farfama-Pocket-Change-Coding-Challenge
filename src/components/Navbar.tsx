import { Link } from 'react-router-dom';
import React from 'react';

function Navbar() {
  return (
    <nav className="flex justify-between items-center flex-wrap bg-slate-50 px-6 py-4 shadow-lg">
      <Link to="/" className="text-2xl font-bold text-black">Movie <span className="text-green-500">Search </span></Link>
      <div className="flex flex-wrap justify-between items-center">
        <Link to="/" className="transition ease-in-out text-lg text-black px-4 py-2 hover:text-green-500">Home</Link>
        <Link to="/favorites" className=" transition ease-in-out text-lg text-black px-4 py-2 hover:text-green-500">Favorites</Link>
      </div>
    </nav>
  );
}

export default Navbar;
