import React from 'react';
import Paragraph from '../UI/Paragraph';
import Heading1 from '../UI/Heading1';
import Heading from '../UI/Heading';
import { DotIcon } from 'lucide-react';
import Icon from '../UI/icon';
import { CgArrowTopRight } from 'react-icons/cg';
import { Download } from 'lucide-react';


function Hero(props) {
    return (
        <div id = "home" className='w-full mx-auto bg-zinc-950 overflow-hidden relative shadow-2xl h-140 border border-t-zinc-800/80'>
            <div className='flex flex-col items-center mt-30'>
            <div className='text-[#b89b5e] text-sm sm:text-base tracking-widest mb-4 text-center'>
                <Heading1 text = "HELLO, I'M"/>
            </div>
            <div className='h-[1.1px] bg-[#b89b5e]/40 w-20 md:ml-200'></div>
           </div>
           <div className='text-2xl sm:text-4xl md:text-6xl text-gray-200 mt-10 text-center px-4'>
            <Heading label = "AGYEMAN HAWA TOFFICK"/>
           </div>
           <div className='text-gray-300 flex items-center justify-center gap-2 mt-4 flex-wrap px-4'>
            <div className='text-sm sm:text-lg'>
                <Paragraph p = "UI/UX DESIGNER"/>
            </div>
            <Icon>
                <DotIcon className='h-5 w-5 mt-1'/>
            </Icon>
            <div className='text-sm sm:text-lg'>
                <Paragraph p = "FULLSTACK DEVELOPER "/>
            </div>
            
           </div>

           <div className='text-gray-300 text-center mt-5 md:text-lg md:tracking-widest px-4'>
            <div className='max-w-xs sm:max-w-lg md:max-w-2xl mx-auto'>
                <Paragraph p = "I design and build clean, functional and user-centered digital experiences that make an impact. I design intuitive user interfaces and build modern, responsive we applications with a focus on usability, performance, and clean code."/>
            </div>
            <div className='flex flex-wrap justify-center gap-4 mt-10'>
                <div className='py-2 px-4 flex items-center gap-2 border border-[#b89b5e] rounded-sm hover:translate-y-1 duration-100'>
                <button className=''>
                    View My Work
                </button>
                <CgArrowTopRight className='text-2xl text-amber-300'/>
                </div>

                <div className='py-2 px-4 flex items-center gap-2 border border-[#b89b5e] rounded-sm hover:translate-y-1 duration-100'>
                    <button className=''>
                        Download CV
                    </button>
                    <Download className='text-2xl text-amber-300'/>
                </div>
            </div>
           
           </div>
        </div>
    );
}

export default Hero;