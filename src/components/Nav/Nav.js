import React from 'react'
import { useState } from 'react'
import './Nav.css'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

import {BsBookmark} from 'react-icons/bs'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquare} from 'react-icons/bi'
const Nav = () => {
  const [navactive,setNavactive]=useState('#')
  return (
    <nav>
      <a href="#" onClick={()=>{setNavactive('#')}}  className={navactive==='#'?'active':''}><HomeOutlinedIcon/></a>
      <a href="#about" onClick={()=>{setNavactive('#about')}} className={navactive==='#about'?'active':''}><PersonOutlineOutlinedIcon/></a>
      <a href="#experience" onClick={()=>{setNavactive('#experience')}} className={navactive==='#experience'?'active':''}><BsBookmark/></a>
      <a href="#skills" onClick={()=>{setNavactive('#skills')}} className={navactive==='#service'?'active':''}><RiServiceLine/></a>
      <a href="#contact" onClick={()=>{setNavactive('#contact')}} className={navactive==='#contact'?'active':''}><BiMessageSquare/></a>


    </nav>

  )
}

export default Nav