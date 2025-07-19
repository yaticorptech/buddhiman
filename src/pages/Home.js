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
import aa1 from '../assets/gallery/2.png';
import aa2 from '../assets/gallery/3.png';
import aa3 from '../assets/gallery/4.png';
import aa4 from '../assets/gallery/5.png';
import aa5 from '../assets/gallery/6.png';
import aa6 from '../assets/gallery/7.png';
import aa7 from '../assets/gallery/8.png';
import aa8 from '../assets/gallery/9.png';
import aa9 from '../assets/gallery/1.png';
import aa10 from '../assets/gallery/10.png';
import aa11 from '../assets/gallery/11.png';
import aa14 from '../assets/gallery/14.png';
import Logo from '../assets/buddhimanLOGOfinal.png';
import '../styles/Home.css';
import { MenuList } from '../helpers/MenuList';
import MenuItemCard from '../components/MenuItemCard';

const galleryImages = [img1, img2, img3, img4, img5, img6, img7, img8];

function Home() {
  const menuRefs = useRef([]);
  const symbolRefs = useRef([]);
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

  // ✅ Parallax Mouse Movement
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      symbolRefs.current.forEach((ref, i) => {
        if (ref) {
          const moveX = (clientX - centerX) * 0.01 * (i % 3 + 1);
          const moveY = (clientY - centerY) * 0.01 * (i % 3 + 1);
         ref.style.setProperty('--base-transform', `translate(${moveX}px, ${moveY}px)`);

        }
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const visibleMenu = showAll ? MenuList : MenuList.slice(0, 6);

  const symbols = [aa1, aa2, aa3, aa4, aa5, aa6, aa7, aa8, aa9,aa10,aa11,aa14];

  return (
    <>
      <main>
        {/* Home Section */}
        <section className="home" id="home1">
          <div className="headerContainer">
            <div className='headdinng'><img src={Logo}></img> <div className='insidehead'><h2 className="gradient-text" >Buddhiman</h2>
            <p className="p1">A Fusion of Culture, Confidence & Creativity.</p></div> 
</div>
           
            {/* Decorative Symbols */}
           

            
            <button
              className="whatsapp"
              aria-label="Register via WhatsApp"
              onClick={() => window.open('https://wame.pro/resetpassword', '_blank')}
            >
              <img src={walogo} alt="WhatsApp Logo" className="whatsapp-logo" />
              <span className="register">Register Now</span>
            </button>
             {symbols.map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt={`symbol-${idx}`}
                className={`symbol-img symbol${idx + 1}`}
                ref={(el) => (symbolRefs.current[idx] = el)}
              />
            ))}
          </div>
        </section>

        {/* Menu Section */}
        <section className="menu reveal" id="menu1">
          <h1 className="menuTitle">Events</h1>
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
                setTimeout(() => {
                  const element = document.getElementById('menu1');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
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
            <strong>Buddhiman</strong> is a new digital initiative launched by <strong>Team Black and White Production</strong>, an organization that has been contributing to the social and educational growth of the region for years.
            </p>
            <p>The core objective of this platform is to nurture creativity, talent, and continuous learning among individuals of all age groups. To achieve this, the platform hosts a variety of online competitions throughout the year, encouraging participants to showcase their skills in areas such as quizzing, music, drawing, and more. These events are thoughtfully scheduled to coincide with national festivals and cultural occasions, turning celebrations into opportunities for growth .After organizing successful state-level events, we are now taking a bold step forward by blending education, technology, and tradition through this inclusive and engaging platform.
</p>
          </div>

          {/* Gallery Section */}
          <div className="media-gallery">
            <h2>Gallery</h2>
            <div className="galleryItems">
              <div className="imageSlider">
                {[...galleryImages, ...galleryImages].map((img, idx) => (
                  <img key={idx} src={img} alt={`gallery-${idx}`} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Rules Section */}
        <section className="rules-reveal">{/* Optional rules section */}</section>
      </main>
    </>
  );
}

export default Home;
