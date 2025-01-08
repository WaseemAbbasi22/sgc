import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/Navbar/NavBar';
import {APP_DESCRIPTION,SECONDARY_COLOR} from '../constants/const';
// import heroImg from '../images/web-dev.svg';
import heroImg from '../assets/hero_icon.svg';

const Hero = () => {
    return (
        <>
        
        <div className="w-full h-[800px] flex items-center justify-center text-white hero">
        <NavBar />
                    <div className="mx-8 w-full h-96 text-center lg:text-left py-16 px-12 flex lg:justify-between items-center">                    
                        <div className="w-full flex flex-col lg:flex-row lg:justify-around" data-aos="fade-up">
                            <div className="mb-4">
                                <p className='text-2xl md:text-4xl font-bold mb-4 text-center'>Your Trusted Partner for Hassle-Free Property Rentals!</p>
                                <p className="text-lg md:text-2xl text-center text-primary">Discover your perfect rental property with ease, or let us take care of managing your  property </p>
                            </div>
                            
                            {/* <div className="w-full lg:w-72 pt-6 lg:mx-12">
                                <Link to="/contact" className="bg-transparent border hover:bg-blue-900 hover:border-blue-800 text-white justify-center text-center rounded-lg px-10 py-3 flex items-center group">Send a message
                                <svg className="w-5 h-5 ml-1 group-hover:translate-x-2 duration-500 ease-in" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                </Link>
                            </div> */}
                        </div>
                    </div>
                </div>
        
        
        
        
        
        
        </>
        // <>
        //     <div className='cta h-[800px]' >
               
        //             <NavBar />
                
                
        //         <div className="m-auto overflow-hidden mx-4 mt-8 lg:mt-4 p-2 md:p-12 h-5/6" data-aos="zoom-in">

        //             <div id='hero' className="flex flex-col lg:flex-row py-8 justify-center text-center lg:text-center">
        //                 <div className="lg:w-1/2 flex flex-col justify-center" data-aos="zoom-in" data-aos-delay="200">
        //                     <h1 className={`mb-5 md:text-3xl text-3xl font-semibold`}>
        //                       {APP_DESCRIPTION}
        //                     </h1>
        //                     <div className="text-center font-semibold tracking-tight mb-5 text-primary">We are a team of highly motivated and skilled developers dedicated to delivering only the best software.</div>
        //                     {/* <div className="mb-4 space-x-0 md:space-x-2 md:mb-8">
        //                         <Link to="/contact" className="text-white bg-secondary  hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0">
        //                             Learn more
        //                             <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
        //                         </Link>
                            
        //                     </div> */}
        //                 </div>
        //                 <div className="flex lg:justify-end w-full lg:w-1/2" data-aos="fade-up" data-aos-delay="700">
            
        //                     {/* <img alt="card img" className="  float-right duration-1000 w-full" src={heroImg} /> */}
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </>
    )
}

export default Hero;