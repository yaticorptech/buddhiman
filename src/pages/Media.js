import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/Media.css';
import img1 from '../assets/gallery/img1.png';
import img2 from '../assets/gallery/img2.png';
import img3 from '../assets/gallery/img3.png';
import img4 from '../assets/gallery/img4.jpg';
import img5 from '../assets/gallery/Army.jpg';
import img6 from '../assets/gallery/Army2.jpg';
import img7 from '../assets/gallery/Army3.jpg';
import img8 from '../assets/gallery/Army4.jpg';
import img9 from '../assets/gallery/Army5.jpg';
import img10 from '../assets/gallery/Army6.jpg';
import img11 from '../assets/gallery/Army7.jpg';
import img12 from '../assets/gallery/Army8.jpg';
import img13 from '../assets/gallery/Army9.jpg';




const galleryImagesMedia = [img1, img2, img3, img4,img5, img6, img7, img8,img9, img10, img11, img12, img13];

const articles = [
  {
    id: 1,
    title: 'SHRAMA YEVA JAYATE',
    description: (
      <p>The “Shrama Yeva Jayate” event, held in Mangalore on January 29, 2023, celebrated the dignity of labor by honoring essential workers like cemetery staff, linemen, bus conductors, and nurses. The event aimed to recognize their vital contributions, promote the value of hard work, raise awareness about labor rights and safety, inspire social responsibility, and foster respect and unity across all sections of society.
      </p>
    ),
    img: img4
  },
  {
    id: 2,
    title: 'AMAR JAWAN',
    description:(
      <p>The event aimed to honor martyrs and instill patriotism by educating citizens about national security and the sacrifices of the armed forces. It sought to inspire youth through stories of bravery, promote civic responsibility, and foster community unity and pride in the nation.</p>
    ),
    img: img2
  }
  
];

function Media() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <main className="media-page">
        <div className="media-heading">
          <h1>Articles</h1>
        </div>

        <div className="article-container-scroll">
          <div className="article-grid">
            {articles.map((item) => (
              <div className="article-card-row" key={item.id}>
                <div className="article-image-container">
                  <img src={item.img} alt={item.title} className="article-img" />
                </div>
                <div className="article-content">
                  <h3>{item.title}</h3>
                  <div className="article-description">{item.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="media-gallery">
  <h2>Gallery</h2>
  <div className="galleryItems">
    <div className="imageSlider">
      {[...galleryImagesMedia, ...galleryImagesMedia].map((img, idx) => (
        <img key={idx} src={img} alt={`gallery-${idx}`} />
      ))}
    </div>
  </div>
</div>

      </main>
    </>
  );
}

export default Media;
