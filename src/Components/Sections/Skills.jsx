import React from 'react';
import Heading1 from '../UI/Heading1';
import Heading from '../UI/Heading';
import IconImage from '../UI/IconImage';
import Paragraph from '../UI/Paragraph';

function Skills(props) {
    return (
        <div id = "skills" className='w-full mx-auto bg-zinc-950 overflow-x-hidden lg:overflow-hidden relative shadow-2xl h-300 md:h-190'>
            <div className='max-w-4xl mx-auto px-4'> 
                <div className='text-[#b89b5e] text-xl mt-40 text-center font-bold tracking-widest'>
                    <Heading1 text = "SKILLS"/>
                </div>
                <div className='text-3xl text-gray-300 font-bold text-center mt-10'>
                    <Heading label = "My Expertise"/>
                </div>
                <div className='text-gray-300 mt-10 mx-auto max-w-lg text-lg'>
                    <Paragraph p = "These are the technology and design tools I use to create responsive, accessible, and high-performance digital experiences."/>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-20'>
                   <div className='w-full h-25 border-[#b89b5e]/40 rounded-md border shadow-md flex hover:translate-y-1 duration-300 shadow-[#b89b5e]/20 gap-2'>
                    <div className='w-15 h-15 mt-3 ml-4 shrink-0'>
                        <IconImage src= "/html-logo.webp"/>
                    </div> 
                    <div>
                        <div className='text-gray-300 mt-4 font-bold'><Paragraph p = "HTML"/></div>
                        <div className='text-gray-300'><Paragraph p = "Markup"/></div>
                   </div>
                    </div>
                   <div className='w-full h-25 border-[#b89b5e]/40 rounded-md border shadow-md flex hover:translate-y-1 duration-300 shadow-[#b89b5e]/20 gap-2'>
                    <div className='w-15 h-15 mt-3 ml-4 shrink-0'>
                        <IconImage src= "/public/icons8-github-96.png"/>
                    </div> 
                    <div>
                        <div className='text-gray-300 mt-4 font-bold'><Paragraph p = "GITHUB"/></div>
                        <div className='text-gray-300'><Paragraph p = "Version Control"/></div>
                    </div>
                   </div>

                   <div className='w-full h-25 border-[#b89b5e]/40 rounded-md border shadow-md flex hover:translate-y-1 duration-300 shadow-[#b89b5e]/20 gap-2'>
                    <div className='w-15 h-15 mt-3 ml-4 shrink-0'>
                        <IconImage src= "/public/react-logo.png"/>
                    </div> 
                    <div>
                        <div className='text-gray-300 mt-4 font-bold'><Paragraph p = "REACT"/></div>
                        <div className='text-gray-300'><Paragraph p = "Library"/></div>
                    </div>
                   </div>

                   <div className='w-full h-25 border-[#b89b5e]/40 rounded-md border shadow-md flex hover:translate-y-1 duration-300 shadow-[#b89b5e]/20 gap-2'>
                    <div className='w-15 h-15 mt-3 ml-4 shrink-0'>
                        <IconImage src= "/public/javascript-logo.webp"/>
                    </div> 
                    <div>
                        <div className='text-gray-300 mt-4 font-bold'><Paragraph p = "JAVA SCRIPT"/></div>
                        <div className='text-gray-300'><Paragraph p = "Programming"/></div>
                    </div>
                   </div>

                   <div className='w-full h-25 border-[#b89b5e]/40 rounded-md border shadow-md flex hover:translate-y-1 duration-300 shadow-[#b89b5e]/20 gap-2'>
                    <div className='w-15 h-15 mt-3 ml-4 shrink-0'>
                        <IconImage src= "/public/node-logo.webp"/>
                    </div> 
                    <div>
                        <div className='text-gray-300 mt-4 font-bold'><Paragraph p = "NODE JS"/></div>
                        <div className='text-gray-300'><Paragraph p = "Javascript Runtime"/></div>
                    </div>
                   </div>

                   <div className='w-full h-25 border-[#b89b5e]/40 rounded-md border shadow-md flex hover:translate-y-1 duration-300 shadow-[#b89b5e]/20 gap-2'>
                    <div className='w-15 h-15 mt-3 ml-4 shrink-0'>
                        <IconImage src= "/icons8-tailwind-css-96.png"/>
                    </div> 
                    <div>
                        <div className='text-gray-300 mt-4 font-bold'><Paragraph p = "TAILWIND"/></div>
                        <div className='text-gray-300'><Paragraph p = "Styling"/></div>
                    </div>
                   </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;