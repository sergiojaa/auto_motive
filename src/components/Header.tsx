import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../images/automotive-logo.jpg';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const linkClasses = (path: string) => {
    const isNotHomePage = location.pathname !== '/';

    return isNotHomePage
      ? 'text-gray-500 text-[18px] font-bold  font-opensas  px-4 lg:px-0 transition duration-300'
      : 'text-white font-opensans hover:text-gray-300 transition duration-300 px-4 lg:px-0';
  };

  const hamburgerClasses = location.pathname !== '/' ? 'text-black' : 'text-white';

  const handleLinkClick = () => {
    setIsMenuOpen(false); // Close the menu when a link is clicked
  };

  return (
    <div className="absolute top-0 left-0 z-10 w-full p-4 flex items-center justify-between">
      {/* Logo */}
      <div className="flex-shrink-0 lg:ml-[50px]">
        <Link to="/">
          <img className="max-w-[100px] md:ml-[50px] xl:ml-[120px] ml-2" src={logo} alt="Company Logo" />
        </Link>
      </div>

      {/* Hamburger Icon (Visible on Small Screens) */}
      <button
        onClick={toggleMenu}
        className={`lg:hidden focus:outline-none ${hamburgerClasses}`}
      >
        <div className="space-y-1 md:mr-[30px] ">
          <div className="w-6 h-0.5 bg-current"></div>
          <div className="w-6 h-0.5 bg-current"></div>
          <div className="w-6 h-0.5 bg-current"></div>
        </div>
      </button>

      {/* Navigation Links */}
      <div
        className={`${
          isMenuOpen ? 'flex' : 'hidden'
        } absolute lg:static font-opensans  top-full left-0 lg:flex text-[20px] flex-col lg:flex-row items-center lg:items-center lg:space-x-8 w-full lg:w-auto bg-red-900 lg:bg-transparent mt-2 lg:mt-0`}
      >
        <Link to="/" className={linkClasses('/')} onClick={handleLinkClick}>მთავარი</Link>
        <Link to="/about" className={linkClasses('/about')} onClick={handleLinkClick}>ჩვენს შესახებ</Link>
        <Link to="/services" className={linkClasses('/services')} onClick={handleLinkClick}>სერვისები</Link>
        <Link to="/contact" className={`${linkClasses('/contact')} `} onClick={handleLinkClick}>ბიუჯეტი </Link>

        <Link to="/calculator" className={linkClasses('/calculator')} onClick={handleLinkClick}>კალკულატორი</Link>

        <Link to="/contact" className={`${linkClasses('/contact')} lg:pr-[50px]`} onClick={handleLinkClick}>კონტაქტი</Link>

      </div>
    </div>
  );
}
