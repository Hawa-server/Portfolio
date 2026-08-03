import React from 'react';
import Heading1 from '../UI/Heading1';
import Heading from '../UI/Heading';
import Image from '../UI/Image';
import { DotIcon } from 'lucide-react';
import Paragraph from '../UI/Paragraph';

function Projects(props) {
    return (
        <div className='className="w-full mx-auto bg-black overflow-x-hidden lg:overflow-x-hidden relative shadow-2xl h-250'>
            <div className='max-w-4xl mx-auto px-4'> 
                <div className='text-[#b89b5e] text-xl gap-5 mt-40 text-center font-bold tracking-widest'>
                    <Heading1 text = "PROJECTS"/>
                </div>
                <div className='text-3xl text-gray-400 font-bold text-center mt-10'>
                    <Heading label = "Featured Projects"/>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 mt-20 gap-5'>
                    <div className='h-130 w-100 border border-amber-200/40 shadow-lg shadow-amber-200 rounded-md hover:translate-y-1 duration-300'>
                       <Image src = "/Screenshot From 2026-07-29 19-41-45.png"/>
                       <div className='text-xl font-bold text-gray-300 m-5'>
                        <Heading1 text = "Rock, Paper, Scissors"/>
                       </div>

                       <div className='flex ml-5'> 
                            <div className='flex'>
                                <div className='text-gray-300'>
                                    <Heading1 text = "HTML"/>
                                </div>
                                <DotIcon className='h-7 w-7 text-gray-300'/>
                            </div>

                            <div className='flex'>
                                <div className='text-gray-300'>
                                    <Heading1 text = "Tailwind"/>
                                </div>
                                <DotIcon className='h-7 w-7 text-gray-300'/>
                            </div>

                            <div className='flex'>
                                <div className='text-gray-300'>
                                    <Heading1 text = "JavaScript"/>
                                </div>
                            </div>
                       </div>

                       <div className='text-gray-300 ml-5'>
                        <Paragraph p = "A simple rock, paper, scissors game with a UI and backend."/>
                       </div>


                        <div className='mt-4'>
                            <a href = "https://myrock.netlify.app/"
                            target = "-blank"
                            rel='noopener noreferrer' className='text-gray-300 hover:transition m-35 rounded-md py-2 px-4 border border-amber-100'>
                                View
                            </a>
                        </div>
                    </div>

                    
                    <div className='h-130 w-100 border border-amber-200/40 shadow-lg shadow-amber-200 rounded-md hover:translate-y-1 duration-300'>
                       <Image src = "/Screenshot From 2026-07-10 19-26-21.png"/>
                       <div className='text-xl font-bold text-gray-300 m-5'>
                        <Heading1 text = "Gym Website"/>
                       </div>

                       <div className='flex ml-5'> 
                            <div className='flex'>
                                <div className='text-gray-300'>
                                    <Heading1 text = "React"/>
                                </div>
                                <DotIcon className='h-7 w-7 text-gray-300'/>
                            </div>

                            <div className=''>
                                <div className='text-gray-300'>
                                    <Heading1 text = "Tailwind"/>
                                </div>
                            </div>
                       </div>

                       <div className='text-gray-300 ml-5'>
                        <Paragraph p = "A modern fitness website with responsive and routing UI."/>
                       </div>


                        <div className='mt-10'>
                            <a href = "https://keeppeak.netlify.app/"
                            target = "-blank"
                            rel='noopener noreferrer' className='text-gray-300 hover:transition m-35 rounded-md py-2 px-4 border border-amber-100'>
                                View
                            </a>
                        </div>
                    </div>
                
                </div>
            
                
            </div>
            
        </div>
    );
}

export default Projects;