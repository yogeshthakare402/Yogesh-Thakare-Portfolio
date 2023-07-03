import React, { useEffect, useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BsGearWideConnected,BsDownload, BsFillPatchCheckFill} from 'react-icons/bs';
// import Introduction from './Introduction';
// import Education from './Education';
// import Experience from './Experience';
// import Tools from './Tools';
// import Work from './Work';
// import Contact from './Contact';


function Navigation() {
    const [downloadBtn, setDownloadBtn] = useState(true);

    let cvurl = 'https://yogesh-t-portfolio.netlify.app/Yogesh_Devidas_Thakare-V7-2023.pdf';
    // let cvurl = 'http://localhost:3000/Yogesh_Devidas_Thakare-V7-2023.pdf';
    const filename = cvurl.split("/").pop();

    useEffect(() => {
        setTimeout(() => {
            let logo = document.getElementById("logo");
            // console.log(logo.classList);
            logo.classList.value = 'rotateLogo';
        }, 1501)

    }, []);

    const changeDownloadBtn = ()=>{
        setTimeout(() => {
            setDownloadBtn(false);
        }, 500);

        setTimeout(() => {
            setDownloadBtn(true);
        }, 1500);
    }

    return (
        <nav className="navbar navbar-expand-sm navBack">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <BsGearWideConnected id='logo' className='translateLogo' />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0" id='navbarNav'>
                        <li className="nav-item me-3" onClick={window.scrollTo(0, 0)}>
                            <a className="nav-link one" aria-current="page" href="#intro">Home</a>
                        </li>
                        <li className="nav-item me-3">
                            <a className="nav-link two" aria-current="page" href="#education">Education</a>
                        </li>
                        <li className="nav-item me-3">
                            <a className="nav-link two" aria-current="page" href="#experience">Experience</a>
                        </li>
                        <li className="nav-item me-3">
                            <a className="nav-link three" aria-current="page" href="#tools">Tools</a>
                        </li>
                        <li className="nav-item me-3">
                            <a className="nav-link four" href="#work">Work</a>
                        </li>
                        <li className="nav-item me-3">
                            <a className="nav-link five" href="#contact">Contact</a>
                        </li>
                        <li className="nav-item me-3">
                            <a className="nav-link six" href={cvurl} download={filename}><button type='button' className='btn btn-primary' onClick={()=>changeDownloadBtn()}>Resume {downloadBtn?<BsDownload/>:<BsFillPatchCheckFill/>}</button></a>
                        </li>
                    </ul>
                </div>
            </div>
            
            {/* <div>
                <Router>
                    <Routes>
                        <Route path="/" element={<Introduction />} />
                        <Route path="/education" element={<Education />} />
                        <Route path="/experience" element={<Experience />} />
                        <Route path="/tools" element={<Tools />} />
                        <Route path="/work" element={<Work />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </Router>
            </div> */}
        </nav>
    )
}

export default Navigation