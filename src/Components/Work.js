import React, { useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';
import {SiGithub } from 'react-icons/si';


function Work() {
    const [projects, setProjects] = useState([])
    // console.log(projects);
    const getData = () => {
        fetch('projectData/project.json'
            , {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
            .then((res) => {
                // console.log(res)
                return res.json();
            })
            .then((result) => {
                // console.log(result.project);
                setProjects(result.project);
            });
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <section id='work' className='container-fluid bg-dark workPage' style={{ width: "100vw", height: "100vh", paddingTop: "50px" }}>
            <button type="button" className="btn btn-outline-info workBtn" disabled style={{ width: "300px", marginTop: "20px" }}>
                <h1>My Last Projects are</h1>
            </button>
            <Marquee behavior={"scroll"} direction={"right"} gradient={false} speed={100} pauseOnHover={true} id='animateWork' className='mt-3' style={{width:"80%", zIndex:"0", borderLeft:"2px solid red", borderRight:"2px solid red", borderRadius:"50px"}}>
                {projects && projects.map((data) => {
                    return (
                        <div className="card text-bg-dark imgBox" style={{ width: "18rem",height:"25rem"}} key={data.id}>
                            <a className="card-title d-flex flex-column justify-content-between rounded" href={data.link} target={"_blank"} rel="noreferrer" style={{height:"25rem" }}>
                                <img id='realestate' className='card-img-top projectImg' src={window.location.origin + data.img} alt={data.name} />
                                <div className='card-body d-flex flex-column flex-wrap align-items-start justify-content-between detailCard rounded'>
                                    <h5 className="card-title">{data.name}</h5>
                                    <p class="card-text text-wrap">{data.details}</p>
                                    <a href={data.git} class="btn btn-outline-primary"><SiGithub /></a>
                                </div>
                            </a>
                            
                        </div>
                    )
                })}
            </Marquee>

        </section>
    )
}

export default Work