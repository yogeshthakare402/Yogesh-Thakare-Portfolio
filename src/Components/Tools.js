import React from 'react';
import { SiJavascript, SiHtml5, SiCss3, SiReact,SiMongodb,SiMysql} from 'react-icons/si';
import {IoLogoNodejs} from 'react-icons/io'

function Tools({fourthElementVisible}) {
  let classesForTools = "btn btn-lg btn-outline-info skills"
  return (
    <section id='tools' className='container-fluid' style={{ width: "100vw", gap:"50px"}}>
      <button type="button" className="btn btn-outline-info heading mt-5" disabled style={{ width: "200px"}}>
        <h1>Tooling</h1>
      </button>

      <div className='container-fluid d-flex flex-wrap justify-content-around' style={{ maxWidth: "1500px", maxHeight:"500px", gap:"20px"}}>

        <button type="button"  className={fourthElementVisible? (`${classesForTools} skills-one`):classesForTools} disabled>
          <span><SiJavascript /></span> <span>JavaScript</span>
        </button>

        <button type="button" className={fourthElementVisible? (`${classesForTools} skills-two`):classesForTools} disabled>
          <span><SiHtml5 /></span> <span>HTML</span>
        </button>

        <button type="button" className={fourthElementVisible? (`${classesForTools} skills-three`):classesForTools} disabled>
          <span><SiCss3 /></span> <span>CSS</span>
        </button>

        <button type="button" className={fourthElementVisible? (`${classesForTools} skills-four`):classesForTools} disabled>
          <span><SiReact /></span> <span>React.Js</span>
        </button>

        <button type="button" className={fourthElementVisible? (`${classesForTools} skills-five`):classesForTools} disabled>
          <span><IoLogoNodejs /></span> <span>NodeJs</span>
        </button>

        <button type="button" className={fourthElementVisible? (`${classesForTools} skills-six`):classesForTools} disabled>
          <span><IoLogoNodejs /></span> <span>ExpressJs</span>
        </button>

        <button type="button" className={fourthElementVisible? (`${classesForTools} skills-seven`):classesForTools} disabled>
          <span><SiMongodb /></span> <span>MongoDB</span>
        </button>

        <button type="button" className={fourthElementVisible? (`${classesForTools} skills-eight`):classesForTools} disabled>
          <span><SiMysql /></span> <span>MySQL</span>
        </button>
      </div>
    </section>
  )
}

export default Tools