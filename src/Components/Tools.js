import React from 'react';
import { SiJavascript, SiHtml5, SiCss3, SiReact,SiMongodb,SiMysql} from 'react-icons/si';
import {IoLogoNodejs} from 'react-icons/io'

function Tools() {
  return (
    <section id='tools' className='container-fluid' style={{ width: "100vw", height: "100vh", gap:"50px"}}>
      <button type="button" className="btn btn-outline-info heading mt-5" disabled style={{ width: "200px"}}>
        <h1>Tooling</h1>
      </button>

      <div className='container-fluid d-flex flex-wrap justify-content-around' style={{ maxWidth: "1500px", maxHeight:"500px", gap:"20px"}}>

        <button type="button" className="btn btn-lg btn-outline-info skills skills-one" disabled>
          <span><SiJavascript /></span> <span>JavaScript</span>
        </button>

        <button type="button" className="btn btn-lg btn-outline-info skills skills-two" disabled>
          <span><SiHtml5 /></span> <span>HTML</span>
        </button>

        <button type="button" className="btn btn-lg btn-outline-info skills skills-three" disabled>
          <span><SiCss3 /></span> <span>CSS</span>
        </button>

        <button type="button" className="btn btn-lg btn-outline-info skills skills-four" disabled>
          <span><SiReact /></span> <span>React.Js</span>
        </button>

        <button type="button" className="btn btn-lg btn-outline-info skills skills-five" disabled>
          <span><IoLogoNodejs /></span> <span>NodeJs</span>
        </button>

        <button type="button" className="btn btn-lg btn-outline-info skills skills-six" disabled>
          <span><IoLogoNodejs /></span> <span>ExpressJs</span>
        </button>

        <button type="button" className="btn btn-lg btn-outline-info skills skills-seven" disabled>
          <span><SiMongodb /></span> <span>MongoDB</span>
        </button>

        <button type="button" className="btn btn-lg btn-outline-info skills skills-eight" disabled>
          <span><SiMysql /></span> <span>MySQL</span>
        </button>
      </div>
    </section>
  )
}

export default Tools