import React from 'react';
import { FaInstagram, FaFacebookF, FaYoutube, FaLinkedin} from 'react-icons/fa';
import '../styles/Footer.css';
import logoyaticorp from '../assets/yaticorplogo.png'
import bwlogo from '../assets/bw.jpeg';

export default function Footer() {
  return (
    <div className='footer' id="Footer1">
      <div className='footerContent'>
        <h1>ORGANISED BY</h1>
        <img src={bwlogo} alt="bw Logo" className='bw' />
        <h2>BLACK AND WHITE PRODUCTIONS</h2>
        <p>Sankalpa, 2-32/41 Alape, Vijayanagara Padil post, Mangalore, Karnataka, India – 575003</p>
        <h3>GST-29BZHPS9450B1Z0</h3>
   
        <div className='socialLinks'>
          <a className='insta' href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a className='fb' href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
          </a>
          <a className='yt' href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
            <FaYoutube />
          </a>
          <a className='li'href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </div>
         <p>© 2025 <u onClick={() => window.open('https://yaticorp.com/', '_blank')}>Yaticorp</u>. All rights reserved.</p>
      </div>
    </div>
  );
}
