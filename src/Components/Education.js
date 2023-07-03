import React,{useState,useEffect} from 'react';

function Education() {
    const [education, setEducation] = useState([])
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
                // console.log(result.education);
                setEducation(result.education);
            });
    }

    useEffect(() => {
        getData()
    }, [])
    return (
        <section id='education' className='container-fluid bg-dark' style={{ width: "100vw" }}>

            <div className='container bg-dark education pt-5'>
                <button type="button" className="btn btn-outline-primary btn-lg mt-5" disabled>
                    <h2>Education</h2>
                </button>

                {education && education.map((data)=>{
                    return (
                        <div className="row pt-3" key={data.id}>
                            <div className="col-md-12">
                                <div className='card cards'>
                                    <div className='card-body'>
                                        <h3>{data.name}</h3>
                                        <h5>{data.college}</h5>
                                        <h6>{data.year}</h6>
                                        <h6>{data.grade}</h6>
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

export default Education


