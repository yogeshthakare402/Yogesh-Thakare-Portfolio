// import InfiniteScroll from 'react-infinite-scroll-component';
// { useEffect,useState }


// const [hasMore, setHasMore] = useState(true);
    // const [nextComponent, setNextComponent] = useState([]);
    // const [page, setPage] = useState(0);

    // useEffect(() => {
    //     getPage(page);
    //     // eslint-disable-next-line
    // }, [page])

    // let items = [<Navigation />, <Introduction />, <Education />, <Experience />, <Tools />, <Work />, <Contact />];

    // function getPage(page) {
    //     const newItem = [];
    //     newItem.push(pageRoutes[page])

    //     if (page === 4) {
    //         setHasMore(false)
    //     }

    //     setNextComponent([...nextComponent, ...newItem])

    // }

    // function handleScroll() {
    //     try {
    //         // let num = document.getElementById("logo").style.rotate.split("d")[0];
    //         // document.getElementById("logo").style.rotate = parseInt(num) + 1;
    //         // console.log(parseInt(num));
    //         // const scrollTop = document.documentElement.scrollTop;
    //         // const innerHeight = window.innerHeight;
    //         // const scrollHeight = document.documentElement.scrollHeight;

    //         // // console.log((scrollTop + innerHeight + 1 >= scrollHeight), hasMore);
    //         // // console.log(scrollTop, innerHeight, scrollHeight);

    //         // if ((scrollTop + innerHeight >= scrollHeight) && hasMore) {
    //         //     setPage(page + 1)
    //         // }

    //     } catch (error) {
    //         console.log(error);
    //     }

    // };

    // useEffect(() => {
    //     document.addEventListener("touchmove", handleScroll, { passive: true })
    //     document.addEventListener("scroll", handleScroll, { passive: true });

    //     return () => {
    //         document.removeEventListener("scroll", handleScroll);
    //         document.removeEventListener("touchmove", handleScroll);
    //     };
    //     // eslint-disable-next-line
    // }, []);







// document.addEventListener("DOMContentLoaded", function () {

    //     let elements = document.getElementsByClassName("sections");
    //     let observer = new IntersectionObserver(
    //         (entries) => {
    //             console.log(entries);
    //             entries.forEach(entry => {
    //                 console.log(entry.target.classList);
    //                 entry.target.classList.toggle("show", entry.isIntersecting);
    //                 if (entry.isIntersecting) {
    //                     observer.unobserve(entry.target)
    //                 }
    //             })
    //         }, {
    //         threshold: 1
    //     }
    //     );
    //     elements.forEach(element => {
    //         observer.observe(element);
    //     });
    // });






{/* <section id='sectionZero' className='sections'>
                <Navigation />
            </section>
            <section id='sectionOne' className='sections'>
                <Introduction />
            </section> */}
            {/* {nextComponent.map((item, i) => {
                return <section key={i} >
                    {item}
                </section>
            })} */}



             {/* <section className='sections'>
                <Navigation />
            </section>
            <section className='sections'>
                <Introduction />
            </section>
            <section className='sections'>
                <Education />
            </section>
            <section className='sections'>
                <Experience />
            </section>
            <section className='sections'>
                <Tools />
            </section>
            <section className='sections'>
                <Work />
            </section>
            <section className='sections'>
                <Contact />
            </section> */}



            /*
<section className='sections'>
                    <Navigation />
                </section>
                <section className='sections'>
                    <Introduction />
                </section>
                <section className='sections'>
                    <Education />
                    <Experience />
                </section>
                <section className='sections'>
                    <Tools />
                </section>
                <section className='sections'>
                    <Work />
                </section>
                <section className='sections'>
                    <Contact />
                </section>
*/