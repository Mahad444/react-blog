import React from 'react'
import './Portfolio.css'
import IMG1 from "../../images/portfolio1.jpg"
import IMG2 from "../../images/portfolio2.jpg"
import IMG3 from "../../images/portfolio3.jpg"
import IMG4 from "../../images/portfolio4.jpg"
import IMG5 from "../../images/portfolio5.jpg"


// DO NOT USE IMAGES IN PRODUCTION USE DISTRACTURING
var data = [
  {
      id:1,
      Image:IMG1,
      title:"Covid-19 Tracker",
      github:"https://github.com",
      demo:"https://instagram.com"
  },
  {
      id:2,
      Image:IMG2,
      title:"Business Analysis",
      github:"https://github.com",
      demo:"https://instagram.com"
  },
  {
      id:3,
      Image:IMG3,
      title:"Embedded Programming",
      github:"https://github.com",
      demo:"https://instagram.com"
  },
  {
      id:4,
      Image:IMG4,
      title:"Programming",
      github:"https://github.com",
      demo:"https://instagram.com"
  },
  {
      id:5,
      Image:IMG5,
      title:"Bakery Website",
      github:"https://github.com",
      demo:"https://instagram.com"
  },
  {
      id:6,
      Image:IMG1,
      title:"Forex",
      github:"https://github.com",
      demo:"https://instagram.com"
  }
];
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My React Work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio__container'>
        {
        data.map(({id,Image,title,github,demo}) => {
          return(
          <article key={id}  className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={Image} alt={title}/>
            </div>
            <h3>{title}</h3>
            <div className='portfolio__item-cta'>
            <a href={github}className='btn' target='_blank'>GitHub</a>
            <a href={demo} className='btn' target='_blank'>LiveDemo</a>
            </div>
        </article>
        
        )
        })
      }
      </div>
    </section>
  )
}

export default Portfolio