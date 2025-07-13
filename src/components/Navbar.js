import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../assets/buddhimanLOGOfinal.png';
import '../styles/Navbar.css';

export default function Navbar() {
  const location = useLocation();
  const isOnHomePage = location.pathname === '/';

  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollY = useRef(window.scrollY); // ✅ useRef for persistent value

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current) {
        setShowNavbar(false); // Scrolling down
      } else {
        setShowNavbar(true); // Scrolling up
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // ✅ only add listener once, useRef keeps value in sync

  return (
    <div className={`navbar ${showNavbar ? 'navbar--visible' : 'navbar--hidden'}`}>
     <Link to="/" className="leftSide" onClick={closeMenu}>
  <img src={Logo} alt="Logo" />
  <span className="siteTitle">Buddhiman</span>
</Link>

      <div className="hamburger" onClick={toggleMenu}>
        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
      </div>

      <div className={`rightSide ${menuOpen ? 'active' : ''}`}>
        {isOnHomePage ? (
          <>
            <a href="#home1" onClick={closeMenu}>Home</a>
            <a href="#about1" onClick={closeMenu}>About</a>
            <a href="#menu1" onClick={closeMenu}>Categories</a>
            <a href="#Footer1" onClick={closeMenu}>Contact</a>
          </>
        ) : (
          <Link to="/" onClick={closeMenu}>Home</Link>
        )}
        <Link to="/media" onClick={closeMenu}>Media</Link>
      </div>
    </div>
  );
}
