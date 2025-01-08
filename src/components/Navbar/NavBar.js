import React, { useState, useEffect } from 'react';
import NavLinks from '../Navbar/NavLinks';
import { HashLink } from 'react-router-hash-link';
import { APP_NAME,BACKGROUND_COLOR,SECONDARY_COLOR } from  '../../constants/const';
import { FaBars, FaTimes } from "react-icons/fa"; 

const NavBar = () => {
    const [top, setTop] = useState(!window.scrollY);
    const [isOpen, setisOpen] = React.useState(false);
    function handleClick() {
        setisOpen(!isOpen);
    }


    useEffect(() => {
      const scrollHandler = () => {
        window.pageYOffset > 10 ? setTop(false) : setTop(true)
      };
      window.addEventListener('scroll', scrollHandler);
      return () => window.removeEventListener('scroll', scrollHandler);
    }, [top]);

    return (
    
        <nav className={`bg-transprent  fixed top-0 w-full z-30 transition duration-300  ease-in-out mb-50  ${!top && 'bg-primary shadow-lg'}`}>
            <div className="flex flex-row justify-between items-center py-2">
                <div className="justify-center md:px-12 md:mx-12 items-center text-center font-semibold">
                    <HashLink smooth to="/#hero"><h1 className="font-bold text-2xl">{APP_NAME}</h1></HashLink>
                    
                </div>
                <div className="group flex flex-col items-center">
                    <button className="p-2 rounded-lg lg:hidden " onClick={handleClick}>
                    {isOpen ? (
        <FaTimes className="h-6 w-6" /> // Close icon
      ) : (
        <FaBars className="h-6 w-6" /> // menu icon
      )}
                    </button>
                    <div className='hidden space-x-6 lg:inline-block p-5 '>
                        <NavLinks  />
                    </div>

                    <div className={`fixed transition-transform duration-300 ease-in-out transit flex justify-center left-0 w-full h-auto rounded-md p-24 bg-secondary lg:hidden shadow-xl top-14 ${  isOpen ? "block" : "hidden" } `}>
                        <div className='flex flex-col space-y-6 '>
                            <NavLinks />
                        </div>                                                
                    </div>

                </div>
            </div>
        </nav>
    )
    
}


export default NavBar;
