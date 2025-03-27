import React, { useState } from "react";
import logo from "../assests/Side_logo_update_svg_4.svg";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; // Icons for mobile menu

const styles = {
  fontFamily: "Montserrat, sans-serif",
  fontWeight: "520",
};

const Header = ({ scrollToForm }) => {
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu

  return (
    <nav className="bg-gray-200 shadow-md" style={styles}>
      <div className="flex justify-between items-center px-4 py-3 md:px-10">
        <Link to="/">
          <img src={logo} alt="Logo" className="h-14 w-auto" />
        </Link>

        <button
          className="md:hidden text-amber-800 text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>

        <ul className="hidden md:flex space-x-8 text-amber-800 font-medium">
          <li>
            <Link to="/" className="hover:text-amber-600">
              Home
            </Link>
          </li>
          <li className="flex items-center">
            <button
              onClick={scrollToForm}
              className="hover:text-amber-600 text-center w-full"
            >
              Post a Job
            </button>
          </li>
          <li className="hover:text-amber-600">Browse Jobs</li>
          <li>
            <Link to="/about" className="hover:text-amber-600">
              About
            </Link>
          </li>

          <li>
            <Link to="/signup" className="hover:text-amber-600">
              Sign Up
            </Link>
          </li>
          <li>
            <Link to="/login" className="hover:text-amber-600">
              Login
            </Link>
          </li>
        </ul>
      </div>

      {isOpen && (
        <ul className="md:hidden bg-gray-100 text-amber-800 text-center space-y-4 py-4">
          <li>
            <Link to="/" className="block py-2 hover:text-amber-600">
              Home
            </Link>
          </li>
          <li>
            <button
              onClick={scrollToForm}
              className="block py-2 mx-auto hover:text-amber-600 w-full"
            >
              Post a Job
            </button>
          </li>
          <li className="block py-2 hover:text-amber-600">Browse Jobs</li>
          <li>
  <Link to="/about" className="hover:text-amber-600">About</Link>
</li>

          <li>
            <Link to="/signup" className="block py-2 hover:text-amber-600">
              Sign Up
            </Link>
          </li>
          <li>
            <Link to="/login" className="block py-2 hover:text-amber-600">
              Login
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Header;
