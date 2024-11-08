import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/automotive-logo.jpg';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="absolute top-0 left-0 z-10 w-full p-4 flex items-center justify-between">
      {/* Logo */}
      <div className="flex-shrink-0 lg:ml-[50px]">
        <Link to="/">
          <img className="w-[15%] ml-2" src={logo} alt="Company Logo" />
        </Link>
      </div>

      {/* Hamburger Icon (Visible on Small Screens) */}
      <button
        onClick={toggleMenu}
        className="lg:hidden text-white focus:outline-none"
      >
        <div className="space-y-1">
          <div className="w-6 h-0.5 bg-white"></div>
          <div className="w-6 h-0.5 bg-white"></div>
          <div className="w-6 h-0.5 bg-white"></div>
        </div>
      </button>

      {/* Navigation Links */}
      <div
        className={`${
          isMenuOpen ? 'flex' : 'hidden'
        } absolute lg:static top-full left-0 lg:flex text-[25px] flex-col lg:flex-row items-center lg:items-center lg:space-x-8 w-full lg:w-auto bg-red-900 lg:bg-transparent mt-2 lg:mt-0`}
      >
        <Link to="/" className="text-white font-merriweather hover:text-gray-300 transition duration-300 px-4 lg:px-0">Home</Link>
        <Link to="/about" className="text-white font-merriweather hover:text-gray-300 transition duration-300 px-4 lg:px-0">About</Link>
        <Link to="/services" className="text-white font-merriweather hover:text-gray-300 transition duration-300 px-4 lg:px-0">Services</Link>
        <Link to="/calculator" className="text-white font-merriweather hover:text-gray-300 transition duration-300 px-4 lg:px-0">Calculator</Link>
        <Link to="/contact" className="text-white font-merriweather hover:text-gray-300 transition duration-300 px-4 lg:px-0 lg:pr-[50px]">Contact</Link>
      </div>
    </div>
  );
}
