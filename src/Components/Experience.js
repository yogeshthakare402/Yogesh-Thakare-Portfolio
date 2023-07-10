import React,{useState,useEffect} from 'react';

function Experience({thirdElementVisible}) {
    const [work, setwork] = useState([])
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
            .then((res)=>{
                // console.log(res)
                return res.json();
            })
            .then((result)=>{
                // console.log(result.project);
                setwork(result.work);
            });
    }

    useEffect(() => {
        getData()
    }, [])
    return (
        <section id='experience' className='container-fluid bg-dark' style={{ width: "100vw"}}>

            <div className='container experience pt-2'>
                <button type="button" className="btn btn-outline-primary btn-lg mt-5" disabled>
                    <h2>Experience</h2>
                </button>
                {work && work.map((data)=>{
                    return(
                        <div className="row pt-3" key={data.id}>
                            <div className="col-md-12">
                                <div className={thirdElementVisible ? "card experienceCards":""}>
                                    <div className='card-body'>
                                        <h3>{data.name}</h3>
                                        <h5>{data.company}</h5>
                                        <h6>{data.duration}</h6>
                                        <h6>{data.detail}</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Experience