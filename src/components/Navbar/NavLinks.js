import React from 'react';
import { HashLink } from 'react-router-hash-link';


const NavLinks = ({onClick}) => {
    return (
        <>
            <HashLink className="px-4 font-medium  hover:text-blue-800" smooth to="/#about" onClick={onClick}>
                About
            </HashLink>
            <HashLink className="px-4 font-mediumld hover:text-blue-800" smooth to="/#projects" onClick={onClick}>
               Projects
            </HashLink>
            <HashLink className="px-4 font-medium hover:text-blue-800" smooth to="/#clients" onClick={onClick}>
                Our Clients
            </HashLink>
            <HashLink className="px-4 font-medium hover:text-blue-800" smooth to="/#contact" onClick={onClick}>
                Contact Us
            </HashLink>
     
            {/* <HashLink className={` bg-[#0B192C] hover:bg-blue-800 inline-flex items-center justify-center w-auto px-6 py-3 shadow-xl rounded-xl`} smooth to="/get-demo#demo">
                Demo our products
            </HashLink> */}
        </>
    )
}

export default NavLinks;
