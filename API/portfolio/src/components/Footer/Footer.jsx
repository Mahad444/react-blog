import React from 'react'
import'./Footer.css'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'
import { BsLinkedin } from 'react-icons/bs'
const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>MAHAD</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experince</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
      <a href="https://instagram.com/the_program.merhad/" target='_blank'><FiInstagram/></a>
        <a href="https://twitter.com/MahadSaid456" target='_blank'><IoLogoTwitter/></a>
        <a href="https://linkedin.com/in/ally-juma-said-b0a7a423b/" target='_blank'><BsLinkedin/></a>
        
      </div>
      <div className="footer__copyright">
        <small>&copy; MAHAD. All Rights Reserved</small>
      </div>

    </footer>
  )
}

export default Footer