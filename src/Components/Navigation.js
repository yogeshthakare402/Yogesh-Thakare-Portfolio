import React, { useEffect, useState } from 'react';
import { BsGearWideConnected,BsDownload, BsFillPatchCheckFill} from 'react-icons/bs';



function Navigation() {
    const [downloadBtn, setDownloadBtn] = useState(true);

    let cvurl = 'https://yogesh-t-portfolio.netlify.app/Yogesh_Thakare_Resume.pdf';
    // let cvurl = 'http://localhost:3000/Yogesh_Thakare_Resume.pdf';
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

    // let element = document.getElementById('navbarSupportedContent');
    // console.log(element.classList.value.indexOf('show'));

    return (
        <nav className="navbar navbar-expand-lg navBack" style={{width:"100vw"}}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <BsGearWideConnected id='logo' className='translateLogo' style={{rotate:"0deg"}}/>
                </a>
                <button className="navbar-toggler ml-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" style={{color:"white"}}></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0" id='navbarNav'>
                        <li className="nav-item me-3">
                            <a className="nav-link one" aria-current="page" href="#introPage">Home</a>
                        </li>
                        <li className="nav-item me-3">
                            <a className="nav-link two" aria-current="page" href="#eduPage">Education</a>
                        </li>
                        <li className="nav-item me-3">
                            <a className="nav-link two" aria-current="page" href="#expPage">Experience</a>
                        </li>
                        <li className="nav-item me-3">
                            <a className="nav-link three" aria-current="page" href="#toolPage">Tools</a>
                        </li>
                        <li className="nav-item me-3">
                            <a className="nav-link four" href="#worPage">Work</a>
                        </li>
                        <li className="nav-item me-3">
                            <a className="nav-link five" href="#contPage">Contact</a>
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