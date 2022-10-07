import React from 'react'
import "./Testimonials.css"
import AVTR1 from "../../images/avartar1.jpg"
import AVTR2 from "../../images/avartar2.jpg"
import AVTR3 from "../../images/avatar3.jpg"
import AVTR4 from "../../images/avartar4.jpg"
// making my swipers
import "swiper/css"
import "swiper/css/pagination"
import {Swiper} from 'swiper/react'
import {SwiperSlide} from 'swiper/react'
import { Pagination } from 'swiper'

var data =[
  {
    avatar:AVTR1,
    jina:"Mahad Said",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos eum dicta numquam dolores doloribus necessitatibus omnis, ipsa deserunt blanditiis rerum ducimus veritatis quo, quidem voluptas tenetur debitis reiciendis minima dignissimos!"
  },
  {
    avatar:AVTR2,
    jina:"Khadija Said",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos eum dicta numquam dolores doloribus necessitatibus omnis, ipsa deserunt blanditiis rerum ducimus veritatis quo, quidem voluptas tenetur debitis reiciendis minima dignissimos!"
  },
  {
    avatar:AVTR3,
    jina:"Abdul Musa",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos eum dicta numquam dolores doloribus necessitatibus omnis, ipsa deserunt blanditiis rerum ducimus veritatis quo, quidem voluptas tenetur debitis reiciendis minima dignissimos!"
  },
  {
    avatar:AVTR4,
    jina:"Aisha Ahmad",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos eum dicta numquam dolores doloribus necessitatibus omnis, ipsa deserunt blanditiis rerum ducimus veritatis quo, quidem voluptas tenetur debitis reiciendis minima dignissimos!"
  }
];

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials__container"
        modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
       pagination ={{ clickable: true }}>
        {
          data.map(({avatar,jina,review},index) =>{
            return(
            <SwiperSlide key={index}  className="testimonial">
          <div className="client__avatar">
            <img src={avatar} alt={jina} />
            </div>
            <h5 className='client__name'>{jina}</h5>
          <small className='client__review'>{review}</small>
        </SwiperSlide>
        )
          }
          )
        }
      </Swiper>
    </section>
  )
}

export default Testimonials