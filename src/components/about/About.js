import React from 'react'
import './about.css'
import img from '../../assets/vector.png'
import {FaAward} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'
import {AiTwotoneSafetyCertificate} from 'react-icons/ai'
const About = () => {
  return (
    <section id="about">
      <h5>So Who Am I?</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-img">
          <img src={img} className='aboutimg' alt=""  />
          </div>
        </div>
        <div className="about_content">
          <div className="aboutcard">
            <article className="aboutcardcontent">
              <FaAward className='abouticons'/>
              
              <h5>Experience</h5>
              <small>6 month working experience</small>
            </article>
            <article className="aboutcardcontent">
              <VscFolderLibrary className='abouticons'/>
              <h5>Projects</h5>
              <small>8+  Completed</small>
            </article>
            <article className="aboutcardcontent">
              <AiTwotoneSafetyCertificate style={{color:'#ffa62b'}} className='abouticons'/>
              <h5>Qualification</h5>
              <small>MCA</small>
            </article>
            
          </div>
          <p className='aboutme'>I am a self learned Full Stack Developer,currently Working as a Web developer intern in Websoullabs.I have 6 month experience in MERN Stack.
          I passionate about Web developing .My aim is to become a great developer and I believe in myself that I achieve all my goals.</p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>

        </div>

      </div>
     



      
    </section>
  )
}

export default About