import React, { useState } from "react";
import { FaHome, FaInfoCircle, FaTrain, FaBlog, FaPhoneAlt, FaUser } from "react-icons/fa";
import {NavLink } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

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

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-gray-800 transition-transform duration-500 ${
          menuOpen ? "max-h-screen" : "max-h-0"
        } overflow-hidden`}
      >
        <ul className="flex flex-col items-center space-y-4 py-4">
          <li className="flex items-center space-x-2 text-green-300 cursor-pointer">
            <FaHome />
            <span>HOME</span>
          </li>
          <li className="flex items-center space-x-2 text-green-300 cursor-pointer">
            <FaInfoCircle />
            <span>ABOUT</span>
          </li>
          <li className="flex items-center space-x-2 text-green-300 cursor-pointer">
            <FaTrain />
            <span>OUR SERVICE</span>
          </li>
          <li className="flex items-center space-x-2 text-green-300 cursor-pointer">
            <FaBlog />
            <span>BLOGS</span>
          </li>
          <li className="flex items-center space-x-2 text-green-300 cursor-pointer">
            <FaPhoneAlt />
            <span>CONTACT</span>
          </li>
          <li>
            <button className="bg-green-400 text-black px-4 py-2 rounded-md shadow-md hover:bg-green-500 transition duration-300 flex items-center space-x-2">
              <FaUser />
              <span>LOGIN</span>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
