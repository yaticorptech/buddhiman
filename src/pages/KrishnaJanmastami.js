import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '../styles/KrishnaJanmastami.css';
import Image1 from '../assets/Fancydress/download.jpeg';

const Krish = [
  {
    id: 1,
    title: 'Vinayaka Vandana 2025',
    description: (
      <>
        <p>
          On account of Ganesha Chathurti, budhiman.com presents Vinayaka Vandana 2025 – Pencil Sketching and Krishnaing Competition, between August 15, 2025 to September 10, 2025.
        </p>
        <ul>
          <li>The last date to submit your entry is September 10, 2025. The final results will be announced on September 15, 2025.</li>
          <li>The competition will be organized for three age categories – 5–18 years, 19–30 years, and 31 and above.</li>
          <li>The participants are requested to use PENCILS ONLY (charcoal and graphite pencils). Sketches using colored pencils, gel pen, ball-point pen etc. will be disqualified.</li>
          <li>Participants should upload the scanned copy of the sketch. ONLY clear copies will be forwarded by the selection panel to the jury. Jury decision is final. Best sketches will be uploaded on our social media pages.</li>
          <li>Cash prize, an attractive memento, and a certificate await the winners.</li>
        </ul>
      </>
    ),
    Competitions: [
      {
        title: 'Art Competition',
        description: 'Showcase your artistic skills using only pencil sketches.',
        image: Image1,
        link: 'https://wame.pro/art-registration'
      },
      {
        title: 'Singing Competition',
        description: 'Participate in devotional and classical singing categories.',
        image: Image1,
        link: 'https://wame.pro/singing-registration'
      },
      {
        title: 'Dancing Competition',
        description: 'Perform a Krishna-themed dance to celebrate Janmastami.',
        image: Image1,
        link: 'https://wame.pro/dancing-registration'
      }
    ],
    img: Image1,
    link: 'https://wame.pro/resetpassword'
  }
];

function Media() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <main className="Krishna-page">
        <div className='topbanner'></div>

        {Krish.map((item) => (
          <div className="Krishna-card-row" key={item.id}>
            <div className="Krishna-image-container">
              <img src={item.img} alt={item.title} className="Krishna-img" />
            </div>

            <div className="Krishna-heading">
              <h1>KRISHNA JANMASTAMI</h1>
            </div>

            <div className="Krishna-content">
              <h3>{item.title}</h3>
              <div className="Krishna-description">{item.description}</div>
            </div>

            {/* Competitions Section */}
            <div className="competitions-wrapper">
              <h4>Competitions</h4>
              <div className="competition-cards">
                {item.Competitions.map((comp, index) => (
                  <div key={index} className="competition-card">
                    <img src={comp.image} alt={comp.title} className="competition-card-img" />
                    <div className="competition-card-content">
                      <h3>{comp.title}</h3>
                      <p>{comp.description}</p>
                      <button
                        className="competition-card-btn"
                        onClick={() => window.open(comp.link, '_blank')}
                      >
                        Register
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </main>
    </>
  );
}

export default Media;
