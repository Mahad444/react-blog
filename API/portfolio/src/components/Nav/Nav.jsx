import React from 'react';
import'./Nav.css'
import {AiOutlineHome} from 'react-icons/ai';
import {AiOutlineUser} from 'react-icons/ai';
import {BiBook,BiMessageRounded} from 'react-icons/bi';
import {FaBriefcase} from 'react-icons/fa'
import { useState } from 'react';
const Navbar = () => {
  const [activeNav,setActiveNav] = useState ('#')
  return (
    <div>
        <nav>
          <a href='#' onClick={()=> setActiveNav ('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
          <a href='#about'onClick={()=>setActiveNav ('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
          <a href='#experience' onClick={()=>setActiveNav('#experience')} className={activeNav ==="#experience" ? 'active' : ''}><BiBook/></a>
          <a href='#services'onClick={()=>setActiveNav('#services')} className={activeNav ==="#services" ? 'active' : ''}><FaBriefcase/></a>
          <a href='#contact'onClick={()=>setActiveNav('#contact')} className={activeNav ==="#contact" ? 'active' : ''}><BiMessageRounded/></a>
        </nav>
    </div>
  )
}

export default Navbar