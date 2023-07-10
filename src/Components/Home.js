import React from 'react';
import { useInView } from 'react-intersection-observer';
import './Portfolio.css';
import Navigation from './Navigation';
import Introduction from './Introduction';
import Education from './Education';
import Experience from './Experience';
import Tools from './Tools';
import Work from './Work';
import Contact from './Contact';


function Home() {
    const { ref:firstRef, inView:firstElementVisible } = useInView();
    const { ref:secondRef, inView:secondElementVisible } = useInView();
    const { ref:thirdRef, inView:thirdElementVisible } = useInView();
    const { ref:fourthRef, inView:fourthElementVisible } = useInView();
    const { ref:fifthRef, inView:fifthElementVisible } = useInView();
    const { ref:sixthRef, inView:sixthElementVisible } = useInView();

    // console.log(firstElementVisible,secondElementVisible,thirdElementVisible,fourthElementVisible,fifthElementVisible,sixthElementVisible);

    return (
        <div id='main' className='bg-dark'>
            <Navigation id="stickyHead" navRefs ={[firstRef,secondRef,thirdRef,fourthRef,fifthRef,sixthRef]}/>
            <section id='introPage' ref={firstRef} className={firstElementVisible? "loadElement":"unloadElement"} style={firstElementVisible?{visibility:"visible"}:{visibility:"hidden"}}>
                <Introduction firstElementVisible={firstElementVisible}/>
            </section>
            <section id='eduPage' ref={secondRef} className={secondElementVisible? "loadElement":"unloadElement"} style={secondElementVisible?{visibility:"visible"}:{visibility:"hidden"}}>
                <Education secondElementVisible={secondElementVisible}/>
            </section>
            <section id='expPage' ref={thirdRef} className={thirdElementVisible? "loadElement":"unloadElement"} style={thirdElementVisible?{visibility:"visible"}:{visibility:"hidden"}}>
                <Experience thirdElementVisible={thirdElementVisible}/>
            </section>
            <section id='toolPage' ref={fourthRef} className={fourthElementVisible? "loadElement":"unloadElement"} style={fourthElementVisible?{visibility:"visible"}:{visibility:"hidden"}}>
                <Tools fourthElementVisible={fourthElementVisible}/>
            </section>
            <section id='worPage' ref={fifthRef} className={fifthElementVisible? "loadElement":"unloadElement"} style={fifthElementVisible?{visibility:"visible"}:{visibility:"hidden"}}>
                <Work fifthElementVisible={fifthElementVisible}/>
            </section>
            <section id='contPage' ref={sixthRef} className={sixthElementVisible? "loadElement":"unloadElement"} style={sixthElementVisible?{visibility:"visible"}:{visibility:"hidden"}}>
                <Contact sixthElementVisible={sixthElementVisible}/>
            </section>
        </div >
    )
}

export default Home;
