import React, { useState } from "react";
import { FaHome, FaInfoCircle, FaTrain, FaBlog,FaTimes, FaPhoneAlt, FaUser , } from "react-icons/fa";
import {NavLink } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);


  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleNavClick = () => {
    setMenuOpen(false); // Hide menu on nav item click
  };

  return (
    <nav className="bg-gradient-to-r from-gray-800 to-gray-900 text-white shadow-lg">
      <div className="container mx-auto px-4 flex justify-between items-center py-4">

  
        <div className="text-2xl font-bold flex items-center space-x-2">
          <span className="text-green-300 animate-pulse">🚂</span>
          <span> <NavLink  to="/home">RailMate</NavLink></span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          <li className="flex items-center space-x-2 hover:text-green-300 cursor-pointer transition transform hover:scale-105">
            <FaHome />
            <span><NavLink  className="text-white" to="/home">HOME</NavLink></span>
          </li>
          <li className="flex items-center space-x-2 hover:text-green-300 cursor-pointer transition transform hover:scale-105">
            <FaInfoCircle />
            <span>ABOUT</span>
          </li>
          <li className="flex items-center space-x-2 hover:text-green-300 cursor-pointer transition transform hover:scale-105">
            <FaTrain />
            <span><NavLink className="text-white" to="/ourservice">OUR SERVICE</NavLink></span>
          </li>
          <li className="flex items-center space-x-2 hover:text-green-300 cursor-pointer transition transform hover:scale-105">
            <FaBlog />
            <span>BLOGS</span>
          </li>
          <li className="flex items-center space-x-2 hover:text-green-300 cursor-pointer transition transform hover:scale-105">
            <FaPhoneAlt />
            <span>CONTACT</span>
          </li>
        </ul>

        {/* Login Button */}
        <div className="hidden md:block">
          <button className="bg-green-400 text-black px-4 py-2 rounded-md shadow-md hover:bg-green-500 transition duration-300 flex items-center space-x-2 transform hover:scale-105">
            <FaUser />
            <span><NavLink to="/login">LOGIN</NavLink></span>
          </button>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white text-2xl focus:outline-none"
          >
            ☰
          </button>
        </div>
      </div>
      <div>
      {/* Hamburger Icon */}
      <button
        onClick={toggleMenu}
        className="md:hidden text-green-300 text-2xl p-2 focus:outline-none"
      >
      </button>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full bg-gray-800 text-green-300 transform ${
          menuOpen ? "translate-y-0" : "-translate-y-full"
        } transition-transform duration-500 ease-in-out z-50`}
      >
        <ul className="flex flex-col items-center space-y-6 py-8">
          <li
            onClick={handleNavClick}
            className="flex items-center space-x-2 text-xl cursor-pointer hover:text-green-400"
          >
            <FaHome />
            <NavLink to="/" className="focus:outline-none">HOME</NavLink>
          </li>
          <li
            onClick={handleNavClick}
            className="flex items-center space-x-2 text-xl cursor-pointer hover:text-green-400"
          >
            <FaInfoCircle />
            <NavLink to="/about" className="focus:outline-none">ABOUT</NavLink>
          </li>
          <li
            onClick={handleNavClick}
            className="flex items-center space-x-2 text-xl cursor-pointer hover:text-green-400"
          >
            <FaTrain />
            <NavLink to="/ourservice" className="focus:outline-none">OUR SERVICE</NavLink>
          </li>
          <li
            onClick={handleNavClick}
            className="flex items-center space-x-2 text-xl cursor-pointer hover:text-green-400"
          >
            <FaBlog />
            <NavLink to="/blogs" className="focus:outline-none">BLOGS</NavLink>
          </li>
          <li
            onClick={handleNavClick}
            className="flex items-center space-x-2 text-xl cursor-pointer hover:text-green-400"
          >
            <FaPhoneAlt />
            <NavLink to="/contact" className="focus:outline-none">CONTACT</NavLink>
          </li>
          <li>
            <button
              onClick={handleNavClick}
              className="bg-green-400 text-black px-4 py-2 rounded-md shadow-md hover:bg-green-500 transition duration-300 flex items-center space-x-2"
            >
              <FaUser />
              <NavLink to="/login" className="focus:outline-none">LOGIN</NavLink>
            </button>
          </li>
        </ul>
      </div>
    </div>
    </nav>
  );
};

export default Navbar;
