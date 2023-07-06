import React from 'react';
import './Portfolio.css';
import Navigation from './Navigation';
import Introduction from './Introduction';
import Education from './Education';
import Experience from './Experience';
import Tools from './Tools';
import Work from './Work';
import Contact from './Contact';
import Infinite from 'react-infinite';



function Home() {

    // let width = window.innerWidth;
    let height = window.innerHeight;
    // console.log(width, height);
    
    return (
        <div id='main' className='bg-dark'>
            <Navigation id="stickyHead" />
            <Infinite containerHeight={height} elementHeight={height-50}>
                <Introduction />
                <Education />
                <Experience />
                <Tools />
                <Work />
                <Contact />
            </Infinite>
        </div>
    )
}

export default Home;
