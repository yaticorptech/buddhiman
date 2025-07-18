import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '../styles/KrishnaJanmastami.css';
import Image1 from '../assets/Fancydress/download.jpeg';
import Image2 from '../assets/Fancydress/Untitled design (12).png';

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
  title: 'Muddu Krishna Costume Contest 2025',
  description: (
    <>
      <p>
        On account of Krishna Janmashtami, <strong>budhiman.com</strong> brings to you <strong>Muddu Krishna Costume Contest</strong>, to be organized between <strong>July 20, 2025</strong> to <strong>August 20, 2025</strong>.
      </p>
      <ul>
        <li>The last date to send your entries is on August 20, 2025. The final results will be announced on August 25, 2025.</li>
        <li>ONLY ONE entry per kid. Multiple or duplicate entries will NOT be entertained and thereby disqualified.</li>
        <li>The photos sent by participants will be reviewed by the selection panel. ONLY the best quality photos will be forwarded to the jury panel, whose decision will be final.</li>
        <li>Children up to 10 years of age can participate in the contest. They are expected to dress as Lord Krishna ONLY.</li>
        <li>The age category is divided as follows: <strong>1–5 years</strong> and <strong>6–10 years</strong>.</li>
        <li>Application of watermarks, screenshots, pixelated/blurry images, and edited images are STRICTLY prohibited. Such images/photos will NOT be considered.</li>
        <li>The images should be in .jpg/.JPEG or .png format with file size not more than 4 MB.</li>
        <li>Top 56 photos will be posted on social media pages and our website budhiman.com</li>
        <li>Winners will be awarded cash prize along with an attractive memento and a certificate.</li>
      </ul>
      <p><strong>NOTE:</strong> A minimal entry fee will be charged.</p>
    </>
  ),
  prizesheading: '🏆 Prize Details',
  Prizes: (
    <>
      <div className="ind-table-wrapper">
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
          <thead>
            <tr style={{ backgroundColor: '#f2f2f2' }}>
              <th style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center' }}>AGE</th>
              <th style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center' }}>PLACE</th>
              <th style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center' }}>CASH PRIZE</th>
              <th style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center' }}>MEMENTO</th>
              <th style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center' }}>CERTIFICATE</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td rowSpan="2" style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center' }}>1–5 Years</td>
              <td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center' }}>FIRST</td>
              <td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center' }}>₹10,000/-</td>
              <td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center' }}>✔️</td>
              <td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center' }}>✔️</td>
            </tr>
            <tr>
              <td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center' }}>SECOND</td>
              <td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center' }}>₹5,000/-</td>
              <td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center' }}>✔️</td>
              <td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center' }}>✔️</td>
            </tr>

            <tr>
              <td rowSpan="2" style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center' }}>6–10 Years</td>
              <td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center' }}>FIRST</td>
              <td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center' }}>₹10,000/-</td>
              <td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center' }}>✔️</td>
              <td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center' }}>✔️</td>
            </tr>
            <tr>
              <td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center' }}>SECOND</td>
              <td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center' }}>₹5,000/-</td>
              <td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center' }}>✔️</td>
              <td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center' }}>✔️</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  ),
  image: Image1,
  link: 'https://wame.pro/fancydress-registration'
}

    ],
    img: Image2,
    link: 'https://wame.pro/resetpassword'
  }
];

function Media() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <main className="Krishna-page">
        <div className="topbanner"></div>

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
                    {comp.Prizes && (
                      <div className="prize">
                        <h5>{comp.prizesheading}</h5>
                        {comp.Prizes}
                      </div>
                    )}
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
