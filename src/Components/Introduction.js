import React from 'react'

function Introduction({firstElementVisible}) {
    // style={firstElementVisible?{visibility:"visible"}:{visibility:"hidden"}}
    return (
        <section id='intro' className='d-flex flex-wrap justify-content-center align-items-center mb-0' style={{ width: "100vw", gap: "20px" }}>

            <div className="card mb-3" style={{background: "none",border:"none" }}>
                <div className="row g-0">
                    <div className="col-md-12">
                        <img src={window.location.origin + '/yogesh-t-photo.jpeg'} alt="passport" id={firstElementVisible?'myImg':''} className='img-fluid rounded-center' />
                    </div>
                </div>
            </div>

            <div className={firstElementVisible?"card mb-3 details":""} style={{ maxWidth: "600px", border:"none" }}>
                <div className="row g-0">
                    <div className="col-md-12">
                        <div className="card-body">
                            <h1 className="card-title card-title-name headTitle">Hello,<br /> my name is <span className='name'> Yogesh Thakare</span></h1>
                            <p className="card-text para">I'm <span className='designation'>MERN Stack Developer</span> with extensive experience for over 1 Years.
                                My expertise is to create Frontend app and Backend api to make page responsive</p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Introduction