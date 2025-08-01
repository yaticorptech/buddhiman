import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '../styles/Ganesha.css';
import Image1 from '../assets/Fancydress/krishnavesha.jpg';
import Image2 from '../assets/Fancydress/krishnabanner.jpg'

const Krish = [
  {
    id: 1,
    title: 'Muddu Krishna Costume Contest 2025',
    description: (
      <>
        <p>Buddhiman presents the Muddu Krishna Costume Contest on the occasion of Krishna Janmashtami, running from July 20 to August 20, 2025. Children up to 10 years can participate by dressing as Lord Krishna, with age categories of 1–5 and 6–10 years. Only one entry per child is allowed. The last date for submission is August 20, and results will be announced on August 25.
Photos must be high-quality, unedited, and in .jpg/.JPEG or .png format (max 4 MB). Watermarked, blurry, or duplicate entries will be disqualified. The top 56 entries will be featured on Buddhiman and social media. Winners will receive a cash prize, memento, and certificate.</p>
       
      </>
    ),
    Competitions: [
      {
  title: 'Muddu Krishna Costume Contest 2025',
  description: (
    <>
      <p>Muddu Krishna Costume Contest
Celebrate Krishna Janmashtami with budhiman.com!
      </p>
      <p>🗓 When: July 20 – August 20, 2025 <br/>
📩 Entry Deadline: August 20, 2025 | 🏆 Results: August 25, 2025
</p>
<p>Rules:
</p>
      <ul>
        <li>One entry per child (up to 10 yrs), dressed as Lord Krishna only</li>
        <li>Age groups: Upto 5 yrs & 6–10 yrs</li>
        <li>No edits, watermarks, blurs, or screenshots</li>
        <li>Only clear, high-quality photos in .jpg/.jpeg/.png (max 4MB)</li>
        <li>Top photos reviewed by panel; jury decision is final</li>
        <li>Top 56 entries featured online</li>
        <li>Winners get cash prize, memento & certificate</li>
      </ul>
      <p><strong>NOTE:</strong> A minimal entry fee will be charged.</p>
    </>
  ),
  prizesheading: '🏆 Prize Details',
  Prizes: (
    <>
      <div className="Ganesha-table-wrapper">
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
              <td rowSpan="2" style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center' }}>Upto 5 Years</td>
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
  link: 'https://wame.pro/Krishnajanmastami'
}

    ],
    img: Image2
  }
];

function Media() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <main className="Ganesha-page">
        <div className="topbanner1"></div>

        {Krish.map((item) => (
          <div className="Ganesha-card-row" key={item.id}>
            <div className="Ganesha-image-container">
              <img src={item.img} alt={item.title} className="Ganesha-img" />
            </div>

            <div className="Ganesha-heading">
              <h1>KRISHNA JANMASTAMI</h1>
            </div>

            <div className="Ganesha-content">
              <h3>{item.title}</h3>
              <div className="Ganesha-description">{item.description}</div>
            </div>

            <div className="competitions-wrapper1">
              <h4>Competitions</h4>
              <div className="competition-cards1">
                {item.Competitions.map((comp, index) => (
                  <div key={index} className="competition-card1">
                    <img src={comp.image} alt={comp.title} className="competition-card-img1" />
                    <div className="competition-card-content1">
                      <h3>{comp.title}</h3>
                      <p>{comp.description}</p>
                      <button
                        className="competition-card-btn1"
                        onClick={() => window.open('https://wame.pro/Krishnajanmastami')}
                      >
                        Register
                      </button>
                    </div>
                    {comp.Prizes && (
                      <div className="prize1">
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
