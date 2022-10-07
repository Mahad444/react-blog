import React from 'react' 
import "./Header.css"
import CTA from './CTA'
import ME from "../../images/mimi.jpg"
import HeaderSocial from './HeaderSocial'
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Ally Juma Said(Mahad)</h1>
        <h5 className="text-light">FullStack Developer</h5>
        <CTA/>
        <HeaderSocial/>
        
        <div className='me'>
          <img src={ME} alt="" />
        </div>

        <a href="#contact" className='scroll__down'>scroll Down</a>
        </div>
    </header>
  )
}

export default Header