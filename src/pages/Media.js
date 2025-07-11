import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/Media.css';
import img1 from '../assets/gallery/img1.png';
import img2 from '../assets/gallery/img2.png';
import img3 from '../assets/gallery/img3.png';
import img4 from '../assets/gallery/img4.jpg';

const galleryImagesMedia = [img1, img2, img3, img4];

const articles = [
  {
    id: 1,
    title: 'SHRAMA YEVA JAYATE',
    description: (
      <p>
        The “SHRAMA YEVA JAYATE” event, held in Mangalore on January 29, 2023 aimed to honor and celebrate the dignity of labor like cemetery workers, linemen, bus conductors, city drivers, nurses, postmortem assistants, and other essential city workers.
        <br />
        <ul>
          <li>To recognize and appreciate the contribution of workers – from daily wage laborers to skilled professionals – who play a crucial role in building society and the economy.</li>
          <li>To promote the value of hard work and self-reliance among students, youth, and the public.</li>
          <li>To spread awareness about labor rights, safety, and welfare measures, encouraging a culture of respect towards all forms of labor.</li>
          <li>To inspire social responsibility among communities by highlighting the importance of inclusive growth and equitable opportunities for all.</li>
          <li>To bridge the gap between different sections of society by fostering empathy and mutual respect through engagement and interaction.</li>
        </ul>
      </p>
    ),
    img: img4
  },
  {
    id: 2,
    title: 'AMAR JAWAN',
    description:(
      <p><p1><strong>Motive Behind the Event:</strong></p1><br/>
       <h><strong>To honour Martyrs</strong></h> 
        <br /> 
        <ul>
          <li>The primary goal was to pay tribute to the brave soldiers who sacrificed their lives for the nation. It aimed to instill patriotism and respect for the armed forces among the citizens.</li></ul>
          <h><strong>Spread Awareness About National Security:</strong></h>
         <ul> <li>The event was designed to educate youth and citizens about the importance of national defense, the roles of the armed forces, and the value of peace and sacrifice.</li></ul>
        <h><strong>Inspire Youth Through Patriotism:</strong></h>
         <ul> <li>To spread awareness about labor rights, safety, and welfare measures, encouraging a culture of respect towards all forms of labor.</li></ul>
         <h><strong>Community Engagement Through Tribute:</strong></h>
         <ul> <li>To inspire social responsibility among communities by highlighting the importance of inclusive growth and equitable opportunities for all.</li></ul>
        <h><strong>Promote Civic Responsibility:</strong></h>
        <ul> <li>To bridge the gap between different sections of society by fostering empathy and mutual respect through engagement and interaction.</li>
        </ul>
      </p>
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
