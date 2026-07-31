import React from 'react';
import Navbar from '../Components/Sections/Navbar';
import Hero from '../Components/Sections/Hero';
import About from '../Components/Sections/About';
import Skills from '../Components/Sections/Skills';
import Projects from '../Components/Sections/Projects';
import Contact from '../Components/Sections/Contact';
function Landing(props) {
    return (
        <div>
           <Navbar/>
           <Hero/> 
           <About/>
           <Skills/>
           <Projects/>
           <Contact/>
        </div>
    );
}

export default Landing;