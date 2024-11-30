import React, { useState } from "react";
import {
  FaHome,
  FaInfoCircle,
  FaTrain,
  FaBlog,
  FaPhoneAlt,
  FaUser,
  FaTimes,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleNavClick = () => {
    setMenuOpen(false); 
  };

  return (
    <nav className="bg-gradient-to-r from-gray-800 to-gray-900 text-white shadow-lg">
      <div className="container mx-auto px-4 flex justify-between items-center py-4">
        {/* Logo */}
        <div className="text-2xl font-bold flex items-center space-x-2">
          <span className="text-green-300 animate-pulse">🚂</span>
          <span>
            <NavLink to="/home">RailMate</NavLink>
          </span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          {[
            { icon: FaHome, label: "HOME", path: "/home" },
            { icon: FaInfoCircle, label: "ABOUT", path: "/about" },
            { icon: FaTrain, label: "OUR SERVICE", path: "/ourservice" },
            { icon: FaBlog, label: "BLOGS", path: "/blogs" },
            { icon: FaPhoneAlt, label: "CONTACT", path: "/contact" },
            
          ].map((item, index) => (
            <li
              key={index}
              className="flex items-center space-x-2 hover:text-green-300 cursor-pointer transition transform hover:scale-105"
            >
              {React.createElement(item.icon)}
              <span>
                <NavLink className="text-white" to={item.path}>
                  {item.label}
                </NavLink>
              </span>
            </li>
          ))}
        </ul>

        {/* Login Button */}
        <div className="hidden md:block">
          <button className="bg-green-400 text-black px-4 py-2 rounded-md shadow-md hover:bg-green-500 transition duration-300 flex items-center space-x-2 transform hover:scale-105">
            <FaUser />
            <span>
              <NavLink to="/login">LOGIN</NavLink>
            </span>
          </button>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white text-2xl focus:outline-none"
          >
            {menuOpen ? <FaTimes /> : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-gray-800 transition-all duration-500 ease-in-out ${
          menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <ul className="flex flex-col items-center space-y-6 py-6">
          {[
            { icon: FaHome, label: "HOME", path: "/home" },
            { icon: FaInfoCircle, label: "ABOUT", path: "/about" },
            { icon: FaTrain, label: "OUR SERVICE", path: "/ourservice" },
            { icon: FaBlog, label: "BLOGS", path: "/blogs" },
            { icon: FaPhoneAlt, label: "CONTACT", path: "/contact" },
          ].map((item, index) => (
            <li
              key={index}
              onClick={handleNavClick}
              className="flex items-center space-x-3 text-green-300 cursor-pointer hover:text-white transition transform hover:scale-105"
            >
              {React.createElement(item.icon)}
              <span>
                <NavLink to={item.path}>{item.label}</NavLink>
              </span>
            </li>
          ))}
          <li>
            <button
              onClick={handleNavClick}
              className="bg-green-400 text-black px-4 py-2 rounded-md shadow-md hover:bg-green-500 transition duration-300 flex items-center space-x-2 transform hover:scale-105"
            >
              <FaUser />
              <span>
                <NavLink to="/login">LOGIN</NavLink>
              </span>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
