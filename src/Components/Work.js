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

    return (
        <section id='work' className='container-fluid bg-dark' style={{ width: "100vw" }}>
            <button type="button" className="btn btn-outline-info workBtn" disabled style={{ width: "300px", marginTop: "20px" }}>
                <h1>My Last Projects are</h1>
            </button>
            <div id='WorkContainer' className='mt-3 rounded'>
                {projects && projects.map((data) => {
                    return (
                        <div className={fifthElementVisible?'card rounded-5 imgBox':''} key={data.id}>
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