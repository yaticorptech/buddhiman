import React, { useEffect, useRef, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import img1 from '../assets/gallery/img1.png';
import img2 from '../assets/gallery/img2.png';
import img3 from '../assets/gallery/img3.png';
import img4 from '../assets/gallery/img4.jpg';
import img5 from '../assets/gallery/img1.png';
import img6 from '../assets/gallery/img2.png';
import img7 from '../assets/gallery/img3.png';
import img8 from '../assets/gallery/img4.jpg';
import walogo from '../assets/social.png';
import '../styles/Home.css';
import { MenuList } from '../helpers/MenuList';
import MenuItemCard from '../components/MenuItemCard';

const galleryImages = [img1, img2, img3, img4, img5, img6, img7, img8];

function Home() {
  const menuRefs = useRef([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, idx) => {
          const direction = idx % 2 === 0 ? 'visible-left' : 'visible-right';
          entry.target.classList.toggle(direction, entry.isIntersecting);
        });
      },
      { threshold: 0.4 }
    );

    menuRefs.current.forEach((ref) => ref && observer.observe(ref));
    return () => menuRefs.current.forEach((ref) => ref && observer.unobserve(ref));
  }, []);

  const visibleMenu = showAll ? MenuList : MenuList.slice(0, 6);

  return (
    <>
      <main>
        {/* Home Section */}
        <section className="home" id="home1">
          <div className="headerContainer">
            <h2 className="h2">Buddhiman</h2>
            <p className="p1">A Unique Fusion of Culture, Confidence & Creativity.</p>
            <button
              className="whatsapp"
              aria-label="Register via WhatsApp"
              onClick={() => window.open('https://wame.pro/resetpassword', '_blank')}
            >
              <img src={walogo} alt="WhatsApp Logo" className="whatsapp-logo" />
              <span className="register">Register Now</span>
            </button>
          </div>
        </section>

        {/* Menu Section */}
        <section className="menu reveal" id="menu1">
          <h1 className="menuTitle">Categories</h1>
          <div className="menuList">
            {visibleMenu.map((menuItem, index) => (
              <MenuItemCard
                key={index}
                menuItem={menuItem}
                refEl={(el) => (menuRefs.current[index] = el)}
              />
            ))}
          </div>
         <button
  className="expandButton showMoreBtn"
  onClick={() => {
    setShowAll((prev) => {
      const newState = !prev;

      // Delay scroll to allow layout to update
      setTimeout(() => {
        const element = document.getElementById("menu1");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);

      return newState;
    });
  }}
>
  {showAll ? 'Show Less' : 'Show More'}
</button>

        </section>

        {/* About Section */}
        <section className="about" id="about1">
          <div className="aboutBottom">
            <h1>About Us</h1>
            <p>
              Buddhiman.in is an online platform created to celebrate intelligence,
              creativity, and talent through healthy and engaging competitions.
            </p>
          </div>

          {/* Gallery Section */}
          <div className="gallery1">
            <h2>Gallery</h2>
            <div className="galleryItems1">
              <div className="imageSlider1">
                {[...galleryImages, ...galleryImages].map((img, idx) => (
                  <img key={idx} src={img} alt={`Gallery slide ${idx + 1}`} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Rules Section */}
        <section className="rules-reveal">
          <h1>Rules & Regulations for Registration</h1>
          <h4>Competitions will be held online—dates announced soon!</h4>
        </section>
      </main>
    </>
  );
}

export default Home;
