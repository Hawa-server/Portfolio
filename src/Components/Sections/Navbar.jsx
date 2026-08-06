import React from 'react';
import Logo from '../UI/Logo';
import Navlinks from '../UI/Navlinks';
import Mobilemenu from '../UI/Mobilemenu';



function Navbar(props) {
   
    return (
       <div className='flex justify-between items-center font-serif font-bold w-full z-20 p-5 bg-black text-gray-200 fixed '>
            
            <div>
                <Logo src = "/favicon.ico"/>
            </div>
            

            <div className='md:flex hidden text-gray-300 gap-4'>
                <Navlinks links = "#home"
                label = "HOME"
                />

                <Navlinks links = "#about"
                label = "ABOUT"
                />

                <Navlinks links = "#skills"
                label = "SKILLS"/>

                <Navlinks links = "#projects"
                label = "PROJECTS"/>


                <Navlinks links = "#contact"
                label = "CONTACT"/>
            </div>

            

            <div className='py-2 px-4 flex border border-[#b89b5e] rounded-sm hover:translate-y-1 duration-100'>
                <button className=''>
                    Let's Talk
                </button>
                
            </div>
            <Mobilemenu/>
            
       </div>
    );
}

export default Navbar;