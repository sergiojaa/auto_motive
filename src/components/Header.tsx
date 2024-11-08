import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/automotive-logo.jpg';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex items-center justify-between top-0  p-4 absolute z-10 w-[100%]">
      {/* Logo on the Left */}
      <div className="flex items-center">
        <img className="w-[60px] ml-[20px]" src={logo} alt="Company Logo" />
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
      <div className={`${isMenuOpen ? 'flex' : 'hidden'} absolute bottom-full left-1/2 transform -translate-x-1/2 lg:static lg:flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-6 mb-4 lg:mb-0`}>
        <Link to="/" className="text-white">Home</Link>
        <Link to="/about" className="text-white">About</Link>
        <Link to="/services" className="text-white">Services</Link>
        <Link to="/calculator" className="text-white">Calculator</Link>
        <Link to="/contact" className="text-white">Contact</Link>
      </div>
    </div>
  );
}
