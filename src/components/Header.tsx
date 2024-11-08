import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/automotive-logo.jpg';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex lg:justify-between items-center justify-between top-0 p-4 absolute z-10 w-[100%]">
      {/* Logo on the Left */}
      <div className="flex items-center">
        <Link to={'/'}>
        <img className="w-[15%] mt-[20px] lg:ml-[150px] ml-[20px]" src={logo} alt="Company Logo" />
        </Link>
      </div>

      {/* Three-line Hamburger Icon on the Right */}
      <button
        onClick={toggleMenu}
        className="lg:hidden text-black focus:outline-none"
      >
        <div className="space-y-1">
          <div className="w-6 h-0.5 bg-black"></div>
          <div className="w-6 h-0.5 bg-black"></div>
          <div className="w-6 h-0.5 bg-black"></div>
        </div>
      </button>

      {/* Navigation Links - Positioned Above the Hamburger Icon */}
      <div
        className={`${
          isMenuOpen ? 'flex' : 'hidden'
        } absolute  top-full left-1/2 text-[30px] transform -translate-x-1/2 lg:static lg:flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-6 mb-4 lg:mb-0 bg-red-900 lg:bg-transparent w-full lg:w-auto`}
      >
        <Link to="/" className="text-white  font-merriweather hover:text-gray-500 transition duration-300">Home</Link>
        <Link to="/about" className="text-white font-merriweather hover:text-gray-500 transition duration-300">About</Link>
        <Link to="/services" className="text-white font-merriweather hover:text-gray-500 transition duration-300">Services</Link>
        <Link to="/calculator" className="text-white font-merriweather hover:text-gray-500 transition duration-300">Calculator</Link>
        <Link to="/contact" className="text-white font-merriweather hover:text-gray-500 transition duration-300">Contact</Link>
      </div>
    </div>
  );
}
