import React from 'react'
import AbouTopImage from '../assets/aboutTop.png'
import '../styles/About.css'

function About() {
  return (
    <div className='about'>
        <div className='aboutTop' 
        style={{ backgroundImage: `url(${AbouTopImage})` }}>
        </div>
        <div className='aboutBottom'>
            <h1>About Us</h1>
            <p>
                Our company was established in 2014 under the name Padmashree IT Solution, initially focusing on IT hardware services. With a strong foundation in technology, we provided reliable hardware solutions to meet the growing demands of businesses and individuals.
In 2019, we took a significant step forward by expanding into the corporate sector, offering a wide range of IT services tailored to businesses. This shift allowed us to cater to large-scale enterprises, helping them enhance their technological infrastructure and streamline operations.
            </p>  
        </div>  
    </div>
  )
}

export default About
