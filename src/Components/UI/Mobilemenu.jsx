import React, { useState } from 'react';
import { BiMenu } from 'react-icons/bi';
import Navlinks from './Navlinks';

function Mobilemenu(props) {
    const[close, setClose] = useState(false);
    return (
        <div className='lg:hidden'>
            <div className='relative'>
                <button onClick={() => setClose((prev) => !prev)}><BiMenu className='text-white'/></button>
                {
                    close &&
                    <div className='absolute flex flex-col h-90 w-50 bg-zinc-950/80 text-white text-lg font-bold  gap-8 mt-5 cursor-pointer right-1'>
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
                    
                    

                }
            </div>
            
        </div>
    );
}

export default Mobilemenu;