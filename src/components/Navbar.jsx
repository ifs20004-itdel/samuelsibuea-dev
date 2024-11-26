import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`header bg-gradient-to-r from-sky-800 to-sky-900 flex justify-around items-center align-middle p-5 text-white z-50 space-x-5 rounded-b-3xl`}
    >
      <NavLink
        to="/"
        className="text-xl flex font-wicked tracking-wide min-w-max "
      >
        <p>Samuel I. H. Sibuea</p>
      </NavLink>
      <nav className={` font-poppins flex text-lg font-bold `}>
        <button
          onClick={toggleMenu}
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-expanded={isMenuOpen}
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <ul
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } w-full md:space-x-10 md:block flex-col absolute md:static top-20 left-0 p-5 z-50 space-y-3 md:rounded-none rounded-t-3xl rounded-b-3xl bg-sky-800 md:bg-inherit `}
        >
          <NavLink to="/" aria-current="page" onClick={toggleMenu}>
            Home
          </NavLink>
          <NavLink to="/about" onClick={toggleMenu}>
            About
          </NavLink>
          <NavLink to="/achievement" onClick={toggleMenu}>
            Achievement
          </NavLink>
          <NavLink to="/experience" onClick={toggleMenu}>
            Experience
          </NavLink>
          <NavLink to="/projects" onClick={toggleMenu}>
            Projects
          </NavLink>
          <NavLink
            to={"/pdf/CV_latest.pdf"}
            target="_blank"
            rel="noopener noreferrer"
            onClick={toggleMenu}
          >
            Resume
          </NavLink>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
