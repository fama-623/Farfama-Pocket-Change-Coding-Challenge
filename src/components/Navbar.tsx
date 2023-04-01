import { Link } from 'react-router-dom';
import React from 'react';

function Navbar() {
  return (
    <nav className="flex justify-between items-center flex-wrap bg-gray-800 px-6 py-4">
      <Link to="/" className="text-2xl font-bold text-white">Movie Search</Link>
      <div className="flex flex-wrap justify-between items-center">
        <Link to="/" className="text-lg text-white px-4 py-2 rounded hover:bg-gray-400">Home</Link>
        <Link to="/favorites" className="text-lg text-white px-4 py-2 rounded hover:bg-gray-400">Favorites</Link>
      </div>
    </nav>
  );
}

export default Navbar;
