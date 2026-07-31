import React from 'react';
import Heading1 from '../UI/Heading1';
import Heading from '../UI/Heading';
import Paragraph from '../UI/Paragraph';
import { BiEnvelope, BiPhone, BiMap } from 'react-icons/bi';
import IconImage from '../UI/IconImage';
import { BsSnapchat,BsInstagram } from 'react-icons/bs';


function Contact(props) {
    return (
        <div id = "/about" className='className="w-full mx-auto bg-black overflow-x-hidden lg:overflow-hidden relative shadow-2xl h-120'>
            <div className='max-w-4xl mx-auto px-4'>
                <div className='text-[#b89b5e] text-xl mt-40 font-bold tracking-widest text-center'>
                    <Heading1 text = "ABOUT ME"/>
                </div>

                <div className='w-full h-40 border border-amber-100/50 rounded-md mt-10'>
                    <div className='grid grid-cols-3 text-gray-300 m-5 gap-8'>
                        <div>
                            <div className='text-2xl'>
                                <Heading label = "Let's work together"/>
                            </div>
                            <div className='mt-5'>
                                <Paragraph p = "I'm currently availble for freelance work and new opportunities."/>
                            </div>
                        </div>

                        <div>
                            <div className='flex gap-5'>
                                <BiEnvelope className='text-2xl text-amber-200/80'/>
                                <div>
                                    <a href = "https://hawatoffick@gmail.com"
                                        target = "-blank"
                                        rel='noopener noreferrer'
                                    >
                                        Email
                                    </a>
                                </div>
                            </div>

                            <div className='flex gap-5 mt-5'>
                                <BiPhone className='text-2xl text-amber-200/80'/>
                                <div>
                                    <Paragraph p = "+233 53 245 9787"/>
                                </div>
                            </div>

                            <div className='flex gap-5 mt-5'>
                                <BiMap className='text-2xl text-amber-200/80'/>
                                <div>
                                    <Paragraph p = "Kumasi, Ghana"/>
                                </div>
                            </div>
                        </div>

                        <div className=''>
                            <div className='text-lg'>
                               <Heading1 text = "Follow me on"/> 
                            </div>

                            <div className='flex gap-5'>
                               <a href = "https://hawatoffick@gmail.com"
                                        target = "-blank"
                                        rel='noopener noreferrer'
                                    >
                                    <div className='h-15 w-15 rounded-full border-gray-100/50 border mt-5'>
                                        <div className='h-10 w-10 m-2'>
                                            <IconImage src = "/public/icons8-github-96.png"/>
                                        </div>
                                    </div>
                                </a>

                                <a href = "https://hawatoffick@gmail.com"
                                        target = "-blank"
                                        rel='noopener noreferrer'
                                    >
                                    <div className='h-15 w-15 rounded-full border-gray-100/50 border mt-5'>
                                        <div className = "" >
                                            <BsSnapchat className='text-2xl text-gray-300 m-4'/>
                                        </div>
                                    </div>
                                </a>

                                <a href = "https://hawatoffick@gmail.com"
                                        target = "-blank"
                                        rel='noopener noreferrer'
                                    >
                                    <div className='h-15 w-15 rounded-full border-gray-100/50 border mt-5'>
                                        <div className = "" >
                                            <BsInstagram className='text-2xl text-gray-300 m-4'/>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;