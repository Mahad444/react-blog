import React from 'react'
import {BsInstagram, BsLinkedin} from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'

const HeaderSocial = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com/in/ally-juma-said-b0a7a423b/" target='_blank'><BsLinkedin/></a>
        <a href="https://github.com/Mahad444" target='_blank'><FaGithub/></a>
        <a href="https://twitter.com/MahadSaid456" target='_blank'><FaTwitter/></a>
        <a href="https://instagram.com/the_program.merhad/" target='_blank'><BsInstagram/></a>
    </div>
  )
}

export default HeaderSocial