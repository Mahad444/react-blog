import React from 'react'
import {BsCheck2} from 'react-icons/bs'
import"./Services.css"
const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className='service'>
          <div className='service__head'>
            <h3>UX/UI design</h3>
          </div>

          <ul className='service__list'>
            <li><BsCheck2 className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></li>
            <li><BsCheck2 className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></li>
            <li><BsCheck2 className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></li>
            <li><BsCheck2 className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></li>
            <li><BsCheck2 className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></li>
          </ul>
        </article>
        {/* END OF UX/UI CARD SERVICES */}
        <article className='service'>
          <div className='service__head'>
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li><BsCheck2 className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></li>
            <li><BsCheck2 className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></li>
            <li><BsCheck2 className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></li>
            <li><BsCheck2 className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></li>
            <li><BsCheck2 className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></li>
            <li><BsCheck2 className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></li>
            <li><BsCheck2 className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></li>
          </ul>
        </article>
        {/* END OF WEBDEVELOPMENT CARD SERVICES */}
        <article className='service'>
          <div className='service__head'>
            <h3>Embedded Engineering</h3>
          </div>

          <ul className='service__list'>
            <li><BsCheck2 className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></li>
            <li><BsCheck2 className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></li>
            <li><BsCheck2 className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></li>
          </ul>
        </article>
        {/* END OF EMBEDDED ENGINEERING CARD SERVICES */}
      </div>
    </section>
  )
}

export default Services