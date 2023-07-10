import React, { useEffect, useState } from 'react';
import { SiGithub } from 'react-icons/si';
import { ImLink } from 'react-icons/im'


function Work({ fifthElementVisible }) {
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

    // behavior={"scroll"} direction={"right"} gradient={false} speed={100} pauseOnHover={true} 

    // style={{width:"80%", zIndex:"0", borderLeft:"2px solid red", borderRight:"2px solid red", borderRadius:"50px"}}

    return (
        <section id='work' className='container-fluid bg-dark workPage' style={{ width: "100vw" }}>
            <button type="button" className="btn btn-outline-info workBtn" disabled style={{ width: "300px", marginTop: "20px" }}>
                <h1>My Last Projects are</h1>
            </button>
            <div id='WorkContainer' className='mt-3 d-flex flex-row flex-wrap align-items-center justify-content-between rounded'>
                {projects && projects.map((data) => {
                    return (
                        <div className='card rounded-5 imgBox ' key={data.id}>
                            <img className='card-img-top projectImg' src={window.location.origin + data.img} alt={data.name} />
                            <div className='card-body detailCard rounded'>
                                <h5 className="card-title">{data.name}</h5>
                                <p className="card-text text-wrap">{data.details}</p>
                                <div className='links'>
                                    <a href={data.git} className="btn btn-outline-primary"><SiGithub /></a>
                                    <a href={data.link} target={"_blank"} rel="noreferrer" className="btn btn-outline-primary"><ImLink /></a>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

        </section>
    )
}

export default Work