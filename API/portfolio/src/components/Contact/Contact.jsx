import React from 'react'
import './Contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import{RiInstagramLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import  { useRef } from 'react';
import emailjs from 'emailjs-com'
 const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_zawz0qs', 'template_888swn9', form.current, '5FeM-EyPnOaasmZ6O')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact__container'>
        <div className='options'>
          <article className='contact__option'>
            <MdOutlineEmail className='contact__icon'/>
            <h4>Email</h4>
            <h5>mahadsaid95@icloud.com</h5>
            <a href="mailto:mahadsaid95@icloud.com" target='_blank'>Send a Message</a>
          </article>
          <article className='contact__option'>
            <RiInstagramLine className='contact__icon'/>
            <h4>Instagram</h4>
            <h5>@the_program.merhad</h5>
            <a href="https://instagram.com/the_program.merhad/" target='_blank'>Send a Message</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__icon'/>
            <h4>WhatsApp</h4>
            <h5>+254-743-297-643</h5>
            <a href="https://api.whatsapp.com/send?phone=+254743297643" target='_blank'>Send a Message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name'  required/>
          <input type="email" name='email' placeholder='Your Email'  required/>
          <textarea name="message" rows="7"  placeholder='Type Your Message Here'></textarea>
        <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>


    </section>
  )
}

export default Contact;