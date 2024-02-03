import React from 'react';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();
    const isHome = location.pathname === "/";

    return (
        <header className={`header font-poppins bg-black flex justify-around items-center align-middle p-5 text-white z-50 w-${ isHome ? 'screen':'full'}`} >
            <NavLink to = "/" className= "text-xl flex font-bold ">
                <p>Samuel I. H. Sibuea</p>
            </NavLink>
            <nav className='flex text-lg gap-10 font-medium'>
                <NavLink to="/">Home</NavLink>
                <NavLink to = "/about">About</NavLink>
                <NavLink to="/education">Education</NavLink>
                <NavLink to ="/experience">Experience</NavLink>
                <NavLink to ="/projects">Projects</NavLink>
                <NavLink to={'/CV_latest.pdf'} target='_blank' rel="noopener noreferrer" >Resume</NavLink>
            </nav>
        </header>
    );
}

export default Navbar;
