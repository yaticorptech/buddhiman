import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '../styles/ind.css';
import Image1 from '../assets/Fancydress/ind.png';
import Image2 from '../assets/Fancydress/ind2.png'



const Ind = [
  {
    id: 1,
    title: 'Vinayaka Vandana 2025',
    description: (
      <>
        <p>
          On account of Ganesha Chathurti, budhiman.com presents Vinayaka Vandana 2025 – Pencil Sketching and inding Competition, between August 15, 2025 to September 10, 2025.
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
        title: 'Independence Day Online Quiz Competition',
        description:(
        <>
        <p>Celebrate India’s journey of courage, unity, and resilience by participating in our specially curated Independence Day Quiz. Dive into questions about our freedom fighters, national symbols, historical milestones, and constitutional values — and put your knowledge to the test in a fun and rewarding way.</p>
        <ul>
<li>Theme: Independence, Indian History, National Identity & Constitution</li>
	
<li>Quiz Date: August 15, 2025</li></ul></>),  
        prizesheading: '🏆 Prize Details',
        Prizes:(<>
     <div className="ind-table-wrapper">
    <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
      <thead>
        <tr style={{ backgroundColor: '#f2f2f2' }}>
          <th style={{ padding: '8px', border: '1px solid #ddd', fontWeight: 'bold', textAlign: 'center' }}>AGE</th>
          <th style={{ padding: '8px', border: '1px solid #ddd', fontWeight: 'bold', textAlign: 'center' }}>PLACE</th>
          <th style={{ padding: '8px', border: '1px solid #ddd', fontWeight: 'bold', textAlign: 'center' }}>CASH PRIZE</th>
          <th style={{ padding: '8px', border: '1px solid #ddd', fontWeight: 'bold', textAlign: 'center' }}>MEMENTO</th>
          <th style={{ padding: '8px', border: '1px solid #ddd', fontWeight: 'bold', textAlign: 'center' }}>CERTIFICATE</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td rowSpan="2" style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center' }}>5–18 Years</td>
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
          <td rowSpan="2" style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center' }}>19–30 Years</td>
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
          <td rowSpan="2" style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center' }}>31 & Above</td>
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
    </div></>),

        image: Image1,
        link: 'https://wame.pro/art-registration'
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
      <main className="ind-page">
        <div className='topbanner'></div>

        {Ind.map((item) => (
          <div className="ind-card-row" key={item.id}>
            <div className="ind-image-container">
              <img src={item.img} alt={item.title} className="ind-img" />
            </div>

            <div className="ind-heading">
              <h1>INDEPENDENCE DAY</h1>
            </div>

            <div className="ind-content">
              <h3>{item.title}</h3>
              <div className="ind-description">{item.description}</div>
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
                        onClick={() => window.open('https://wa.me/918951193682')}
                      >
                        Register
                      </button>
                    </div>
                    <div className='prize'>
                      <h5>{comp.prizesheading}</h5>
                      {comp.Prizes}
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
