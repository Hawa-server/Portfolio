import React from 'react';
import Heading1 from '../UI/Heading1';
import Heading from '../UI/Heading';
import Paragraph from '../UI/Paragraph';
import { BiEnvelope, BiPhone, BiMap } from 'react-icons/bi';
import IconImage from '../UI/IconImage';
import { BsSnapchat, BsInstagram, BsWhatsapp } from 'react-icons/bs';


function Contact(props) {
    return (
        <div id="contact" className='w-full mx-auto bg-zinc-950 overflow-x-hidden relative shadow-2xl md:h-120 h-170'>
            <div className='max-w-4xl mx-auto px-4'>
                <div className='text-[#b89b5e] text-xl mt-10 font-bold tracking-widest text-center'>
                    <Heading1 text="CONTACT ME" />
                </div>

                <div className='w-full border border-[#b89b5e]/40 rounded-md mt-10'>
                    <div className='grid grid-cols-1 sm:grid-cols-3 text-gray-300 m-5 gap-8'>
                        <div>
                            <div className='text-2xl'>
                                <Heading label="Let's work together" />
                            </div>
                            <div className='mt-5'>
                                <Paragraph p="I'm currently availble for freelance work and new opportunities." />
                            </div>
                        </div>

                        <div>
                            <div className='flex gap-5 items-center'>
                                <BiEnvelope className='text-2xl text-amber-200/80 shrink-0' />
                                <div>
                                    <a href="https://hawatoffick@gmail.com"
                                        target="_blank"
                                        rel='noopener noreferrer'
                                    >
                                        Email
                                    </a>
                                </div>
                            </div>

                            <div className='flex gap-5 mt-5 items-center'>
                                <BsWhatsapp className='text-2xl text-amber-200/80 shrink-0' />
                                <div>
                                    <a href="https://hawatoffick@gmail.com"
                                        target="_blank"
                                        rel='noopener noreferrer'
                                    >
                                        Whatsapp
                                    </a>
                                </div>
                            </div>

                            <div className='flex gap-5 mt-5'>
                                <BiMap className='text-2xl text-amber-200/80' />
                                <div>
                                    <Paragraph p="Kumasi, Ghana" />
                                </div>
                            </div>
                        </div>

                        <div className=''>
                            <div className='text-lg'>
                                <Heading1 text="Follow me on" />
                            </div>

                            <div className='flex gap-5'>
                                <a href="https://github.com/Hawa-server"
                                    target="_blank"
                                    rel='noopener noreferrer'
                                >
                                    <div className='h-15 w-15 rounded-full border-gray-100/50 border mt-5'>
                                        <div className='h-10 w-10 m-2'>
                                            <IconImage src="/public/icons8-github-96.png" />
                                        </div>
                                    </div>
                                </a>

                                <a href="https://snapchat.com/add/~Mizz Hawa"
                                    target="-blank"
                                    rel='noopener noreferrer'
                                >
                                    <div className='h-15 w-15 rounded-full border-gray-100/50 border mt-5'>
                                        <div className="" >
                                            <BsSnapchat className='text-2xl text-gray-300 m-4' />
                                        </div>
                                    </div>
                                </a>

                                <a href="https://instagram.com/bmwvault_v"
                                    target="-blank"
                                    rel='noopener noreferrer'
                                >
                                    <div className='h-15 w-15 rounded-full border-gray-100/50 border mt-5'>
                                        <div className="" >
                                            <BsInstagram className='text-2xl text-gray-300 m-4' />
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