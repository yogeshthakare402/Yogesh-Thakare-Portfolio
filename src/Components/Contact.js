import React from 'react';
import { FaPhone } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { SiInstagram, SiLinkedin, SiGithub } from 'react-icons/si';

function Contact({sixthElementVisible}) {
    return (
        <section id="contact" className='container-fluid'>
            <button type="button" className="btn btn-outline-info headingBtn" disabled><h2>Contact me</h2></button>
            <div className='conatiner text-center waytoContact'>
                <div className='row changeScreen'>
                    <button type="button" id={sixthElementVisible?"email":""} className="col btn btn-outline-primary call">
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=yogeshthakare402@gmail.com" target={"_blank"} rel="noreferrer">
                            <MdEmail className='icon' />
                            <h3>Email Me On</h3>
                            <h3>yogeshthakare402@gmail.com</h3>
                        </a>
                    </button>

                    <button type="button" id='call2' className="col btn btn-outline-primary call">
                        <FaPhone className='icon' />
                        <h3>Call Me On</h3>
                        <h3>7798871276</h3>
                    </button>

                    <button type="button" id={sixthElementVisible?"call":""} className="col btn btn-outline-primary call">
                        <a href="tel:+918830226189" target={"_blank"} rel="noreferrer">
                            <FaPhone className='icon' />
                            <h3>Call Me On</h3>
                            <h3>8830226189</h3>
                        </a>
                    </button>

                </div>
            </div>

            <button type="button" className="btn btn-outline-info headingBtn2" disabled style={{ marginBottom: "10px" }}>
                <h2>Social Media</h2>
            </button>

            <div className='conatiner text-center' style={{ marginBottom: "30px" }}>
                <div className='row'>
                    <button type="button" id={sixthElementVisible?'socialOne':''} className="col btn btn-outline-primary social">
                        <a href="https://www.instagram.com/iyogesh_thakare/" target={"_blank"} rel="noreferrer">
                            <SiInstagram className='socialContact' />
                        </a>
                    </button>
                    <button type="button" id={sixthElementVisible?'socialtwo':''} className="col btn btn-outline-primary social">
                        <a href="https://www.linkedin.com/in/eryogeshthakare/" target={"_blank"} rel="noreferrer">
                            <SiLinkedin className='socialContact' />
                        </a>
                    </button>
                    <button type="button" id={sixthElementVisible?'socialThree':''} className="col btn btn-outline-primary social">
                        <a href="https://github.com/yogeshthakare402" target={"_blank"} rel="noreferrer">
                            <SiGithub className='socialContact' />
                        </a>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Contact