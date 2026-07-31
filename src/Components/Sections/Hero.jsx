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
        <div id = "home" className='className="w-full mx-auto bg-black overflow-x-hidden lg:overflow-x-hidden relative shadow-2xl h-140 border border-t-zinc-800/80'>
            <div className=''>
            <div className='text-[#b89b5e] text-xl mt-20 text-center'>
                <Heading1 text = "HELLO, I'M"/>
            </div>
            <div className='h-[1.1px] bg-[#b89b5e]/40 w-20 ml-200'></div>
           </div>
           <div className='text-5xl text-gray-200 mt-10 text-center '>
            <Heading label = "AGYEMAN HAWA TOFFICK"/>
           </div>
           <div className='text-gray-300 flex ml-130 mt-4'>
            <div className='text-lg'>
                <Paragraph p = "UI/UX DESIGNER"/>
            </div>
            <Icon>
                <DotIcon className='h-5 w-5 mt-1'/>
            </Icon>
            <div className='text-lg'>
                <Paragraph p = "FULLSTACK DEVELOPER "/>
            </div>
            
           </div>

           <div className='text-gray-300 text-center mt-5 text-lg tracking-widest'>
            <div className='max-w-2xl mx-auto'>
                <Paragraph p = "I design and build clean, functional and user-centered digital experiences that make an impact. I design intuitive user interfaces and build modern, responsive we applications with a focus on usability, performance, and clean code."/>
            </div>
            <div className='flex gap-4 ml-140 mt-10'>
                <div className='py-2 px-4 flex border border-[#b89b5e] rounded-sm hover:translate-y-1 duration-100'>
                <button className=''>
                    View My Work
                </button>
                <CgArrowTopRight className='text-2xl text-amber-300'/>
                </div>

                <div className='py-2 px-4 flex border border-[#b89b5e] rounded-sm hover:translate-y-1 duration-100'>
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