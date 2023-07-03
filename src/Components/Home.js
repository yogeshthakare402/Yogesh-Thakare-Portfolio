import React, { useEffect, useState } from 'react';
import './Portfolio.css';
import Navigation from './Navigation';
import Introduction from './Introduction';
import Education from './Education';
import Experience from './Experience';
import Tools from './Tools';
import Work from './Work';
import Contact from './Contact';


function Home() {
    const [hasMore, setHasMore] = useState(true);
    const [nextComponent, setNextComponent] = useState([]);
    const [page, setPage] = useState(0);

    useEffect(() => {
        getPage(page);
        // eslint-disable-next-line
    }, [page])

    let pageRoutes = [<Education />, <Experience />, <Tools />, <Work />, <Contact />];

    function getPage(page) {
        const newItem = [];
        newItem.push(pageRoutes[page])

        if (page === 4) {
            setHasMore(false)
        }

        setNextComponent([...nextComponent, ...newItem])

    }

    function handleScroll() {
        try {
            const scrollTop = document.documentElement.scrollTop;
            const innerHeight = window.innerHeight;
            const scrollHeight = document.documentElement.scrollHeight;

            // console.log((scrollTop + innerHeight + 1 >= scrollHeight), hasMore);
            // console.log(scrollTop, innerHeight, scrollHeight);

            if ((scrollTop + innerHeight >= scrollHeight) && hasMore) {
                setPage(page + 1)
            }
        } catch (error) {
            console.log(error);
        }

    };

    useEffect(() => {
        document.addEventListener("touchmove",handleScroll, { passive: true })
        document.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            document.removeEventListener("scroll", handleScroll);
            document.removeEventListener("touchmove",handleScroll);
        };
        // eslint-disable-next-line
    }, [nextComponent]);
    

    return (
        <div id='main' className='bg-dark'>
            <section id='sectionZero' className='sections'>
                <Navigation />
            </section>
            <section id='sectionOne' className='sections'>
                <Introduction />
            </section>
            {nextComponent.map((item, i) => {
                return <section key={i} >
                    {item}
                </section>
            })}
        </div>
    )
}

export default Home;