import React from 'react'
import ContactLeftSide from '../assets/contactus.jpg'
import '../styles/Contact.css'

function Contact() {
  return (
    <div className='contact'>
        <div className='contactLeftSide'
        style={{ backgroundImage: `url(${ContactLeftSide})`}}>
        </div>
        <div className='contactRighttSide'>
            <h1>Contact Us</h1>
            <form id='contact-form' method="POST">
                <label htmlFor="name">Full Name</label>
                <input type="text" placeholder='Enter your full name....' name="name" required />

                <label htmlFor="email">Email</label>
                <input type="email" placeholder='Enter email....' name="email" required />

                <label htmlFor="message">Message</label>
                <textarea placeholder='Enter message' name="message" rows="5" required></textarea>

                <button type="submit">Send Message</button>
            </form>
        </div>
      
    </div>
  )
}

export default Contact
