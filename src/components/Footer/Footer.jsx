import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsWhatsapp } from 'react-icons/bs'
import './footer.css'
const Footer = () => {
  return (
   <footer>
    <a href="#" className='logo'><i>Rameesa</i></a>
    <ul className='linksfoter'>
      <li><a href="#">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#skills">Skills</a></li>
      <li><a href="#portfolio">Projects</a></li>
      <li><a href="#contact">Contact</a></li>
     
    </ul>
    <div className="footer_socials">
    <a href='https://www.linkedin.com/in/rameesa-sinan/' className="social" target='_blank'><BsLinkedin/></a>
    <a href='https://github.com/Rameesa96' className="social" target='_blank'><BsGithub/></a>
      <a href='https://wa.me/919847654595' className="social" target='_blank'><BsWhatsapp /></a>
    </div>
    <div className="footer_copyright">
      <small>@copyright Rameesa</small>
    </div>
   </footer>
  )
}

export default Footer