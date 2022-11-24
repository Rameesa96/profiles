import React from 'react'
import { useState } from 'react'
import './Nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BsBookmark} from 'react-icons/bs'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquare} from 'react-icons/bi'
const Nav = () => {
  const [navactive,setNavactive]=useState('#')
  return (
    <nav>
      <a href="#" onClick={()=>{setNavactive('#')}}  className={navactive==='#'?'active':''}><AiOutlineHome/></a>
      <a href="#about" onClick={()=>{setNavactive('#about')}} className={navactive==='#about'?'active':''}><AiOutlineUser/></a>
      <a href="#experience" onClick={()=>{setNavactive('#experience')}} className={navactive==='#experience'?'active':''}><BsBookmark/></a>
      <a href="#skills" onClick={()=>{setNavactive('#skills')}} className={navactive==='#service'?'active':''}><RiServiceLine/></a>
      <a href="#contact" onClick={()=>{setNavactive('#contact')}} className={navactive==='#contact'?'active':''}><BiMessageSquare/></a>


    </nav>

  )
}

export default Nav