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
              <small>more than 1 year<br/> working experience</small>
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
          <p className='aboutme'>I am a self-taught Full Stack Developer with a current role as a Software Engineer at Citrus Informatics. Prior to this, I gained six months of experience as a web developer at Websoul Labs. My skill set includes proficiency in React, Astro, TypeScript, JavaScript, Node.js, and MongoDB.</p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About