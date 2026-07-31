import React from 'react';
import Heading1 from '../UI/Heading1';
import Heading from '../UI/Heading';
import Paragraph from '../UI/Paragraph';
import { CgArrowTopRight } from 'react-icons/cg';
import Aimage from '../UI/Aimage';

function About(props) {
    return (
        <div id = "about" className='className="w-full mx-auto bg-black overflow-x-hidden lg:overflow-hidden relative shadow-2xl h-160'>
            <div className='max-w-4xl mx-auto px-4'>  
               <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>  
                    <div>   
                        <div className='text-[#b89b5e] text-xl mt-40 font-bold tracking-widest text-left'>
                        <Heading1 text = "ABOUT ME"/>
                        </div>
                        <div className=' mt-10 text-3xl text-gray-400 font-sans text-left'>
                        <Heading label = "Crafting Ideas Into Digital Reality"/>
                        </div>

                        <div className =' mt-10 text-gray-300 text-lg '>
                            <Paragraph p = "I'm passionate about turning ideas into clean, elegant and meaningful designs. With a strong foundation in UI/UX design and web development. I love creating solutions that are not only visually stunning but also user-friendly and accessible. "/>
                        </div>

                        <div className=' mt-10 hover:translate-y-1 duration-300'>
                            <div>
                            <a href = "https://github.com/Hawa-server/rps.git"
                            target = "-blank"
                            rel='noopener noreferrer' className='text-gray-300  rounded-md py-2 px-4 border border-amber-100'>
                                View My Work
                            </a>
                            </div>
                        </div>
                    </div>

                    <div className='mt-40 shadow-lg shadow-amber-300 hover:translate-y-2 duration-300'>
                       <Aimage src = "/public/a.jpg"/> 
                    </div>
                </div>
                
                        
                    
               
            </div>
                    
        </div>
    );
}

export default About;