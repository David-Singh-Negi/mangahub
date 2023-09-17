import React, { useState } from 'react';
import { IoLibraryOutline } from 'react-icons/io5';
import { NavLink ,Link } from 'react-router-dom';
import SearchBar from './SearchBar';

const Navbar = () => {
  const Manga = '</MangaHub>';
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav className="bg-gradient-to-r from-gray-700 via-gray-900 to-black fixed top-0 w-full z-10">
        <div className="container mx-auto py-4 flex justify-around items-center relative">
          < Link to="/" className="text-white text-2xl">
            {Manga}
          </Link>

          {/* Hamburger Menu (Fixed Position - Right Side) */}
          <div className="lg:hidden absolute top-0 right-0 m-4">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              <IoLibraryOutline />
            </button>
          </div>

          {/* Navigation Menu */}
          <ul className={`lg:flex lg:space-x-5 ${isMenuOpen ? 'block' : 'hidden'} absolute top-full right-0 lg:relative bg-gray-900 p-7 gap-5 lg:w-[80%] w-full lg:flex-row md:flex-row  flex flex-col justify-center items-center`}>
            <li>
              <NavLink to="/" className="text-white hover:text-blue-800" onClick={toggleMenu}>
                Home
              </NavLink>
            </li>

            <li>
              <NavLink to="/popular" className="text-white hover:text-blue-800" onClick={toggleMenu}>
                Popular
              </NavLink>
            </li>

            <li>
              <NavLink to="/airing" className="text-white hover:text-blue-800" onClick={toggleMenu}>
                Airing
              </NavLink>
            </li>

            <li>
              <NavLink to="/upcoming" className="text-white hover:text-blue-800" onClick={toggleMenu}>
                Upcoming
              </NavLink>
            </li>

            <SearchBar />
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
