import React from 'react';
import Heading1 from '../UI/Heading1';
import Heading from '../UI/Heading';
import Paragraph from '../UI/Paragraph';
import { CgArrowTopRight } from 'react-icons/cg';
import Aimage from '../UI/Aimage';

function About(props) {
    return (
        <div id = "about" className='w-full mx-auto bg-zinc-950 overflow-x-hidden lg:overflow-hidden relative shadow-2xl h-240 md:h-160'>
            <div className='max-w-4xl mx-auto px-4 sm:px-6'>  
               <div className='grid grid-cols-1 md:grid-cols-2 gap-10 items-center'>  
                    <div className='order-2 md:order-1'>   
                        <div className='text-[#b89b5e] text-lg sm:text-xl font-bold tracking-widest text-center md:text-left mt-20'>
                        <Heading1 text = "ABOUT ME"/>
                        </div>
                        <div className='mt-6 md:mt-10 text-2xl sm:text-3xl text-gray-400 font-sans text-center md:text-left'>
                        <Heading label = "Crafting Ideas Into Digital Reality"/>
                        </div>

                        <div className ='mt-6 md:mt-10 text-gray-300 text-base sm:text-lg text-center md:text-left'>
                            <Paragraph p = "I'm passionate about turning ideas into clean, elegant and meaningful designs. With a strong foundation in UI/UX design and web development. I love creating solutions that are not only visually stunning but also user-friendly and accessible. "/>
                        </div>

                        <div className='mt-6 md:mt-10 hover:translate-y-1 duration-300 flex justify-center md:justify-start'>
                            <div>
                            <a href = "https://github.com/Hawa-server/rps.git"
                            target = "_blank"
                            rel='noopener noreferrer' className='text-gray-300  rounded-md py-2 px-4 border border-amber-100'>
                                View My Work
                            </a>
                            </div>
                        </div>
                    </div>

                    <div className='order-1 md:order-2 shadow-lg shadow-[#b89b5e]/40 hover:translate-y-2 duration-300 max-w-xs sm:max-w-sm md:max-w-none mx-auto mt-20'>
                        <Aimage src="/a.jpg"/> 
                    </div>
                </div>
                
                        
                    
               
            </div>
                    
        </div>
    );
}

export default About;