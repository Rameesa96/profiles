import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsWhatsapp } from 'react-icons/bs'
function Headersocial() {
  return (
    <div className='header_socials'>
        <a href='https://www.linkedin.com/in/rameesa-sinan/' target='_blank'><BsLinkedin/></a>
        <a href='https://github.com/Rameesa96' target='_blank'><BsGithub/></a>
        <a href='https://wa.me/919847654595' target='_blank'><BsWhatsapp /></a>
    </div>
  )
}

export default Headersocial