import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '../styles/Fancydress.css';
import Image1 from '../assets/Fancydress/download.jpeg';



const fancy = [
  {
    id: 1,
    title: 'Vinayaka Vandana 2025 ',
    description: (
  <>
    <p>
      On account of Ganesha Chathurti, budhiman.com presents Vinayaka Vandana 2025 – Pencil Sketching and fancying Competition, between August 15, 2025 to September 10, 2025.
    </p>
    <ul>
      <li>The last date to submit your entry is September 10, 2025. The final results will be announced on September 15, 2025.</li>
      <li>The competition will be organized for three age categories – 5–18 years, 19–30 years, and 31 and above.</li>
      <li>The participants are requested to use PENCILS ONLY (charcoal and graphite pencils). Sketch ufancy coloured pencils/gel pen/ball-point pen etc., will be disqualified.</li>
      <li>Participants should upload the scanned copy of the sketch. ONLY clear copies will be forwarded by the selection panel to jury panel for final judgement. Jury decision is final. Best sketches will be uploaded on our social media pages.</li>
      <li>Cash prize, an attractive memento and a certificate awaits the winners</li>
    </ul>

    <h4 style={{ marginTop: '20px' }}>🏆 Prize Details</h4>
       <div className="fancy-table-wrapper">
    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
      <thead>
        <tr style={{ backgroundColor: '#fff' }}>
          <th style={{ padding: '8px', border: '1px solid #000', fontWeight: 'bold', textAlign: 'center' }}>AGE</th>
          <th style={{ padding: '8px', border: '1px solid #000', fontWeight: 'bold', textAlign: 'center' }}>PLACE</th>
          <th style={{ padding: '8px', border: '1px solid #000', fontWeight: 'bold', textAlign: 'center' }}>CASH PRIZE</th>
          <th style={{ padding: '8px', border: '1px solid #000', fontWeight: 'bold', textAlign: 'center' }}>MEMENTO</th>
          <th style={{ padding: '8px', border: '1px solid #000', fontWeight: 'bold', textAlign: 'center' }}>CERTIFICATE</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td rowSpan="2" style={{ padding: '8px', border: '1px solid #000', textAlign: 'center' }}>1–5 Years</td>
          <td style={{ padding: '8px', border: '1px solid #000', textAlign: 'center' }}>FIRST</td>
          <td style={{ padding: '8px', border: '1px solid #000', textAlign: 'center' }}>₹10,000/-</td>
          <td style={{ padding: '8px', border: '1px solid #000', textAlign: 'center' }}>✔️</td>
          <td style={{ padding: '8px', border: '1px solid #000', textAlign: 'center' }}>✔️</td>
        </tr>
        <tr>
          <td style={{ padding: '8px', border: '1px solid #000', textAlign: 'center' }}>SECOND</td>
          <td style={{ padding: '8px', border: '1px solid #000', textAlign: 'center' }}>₹5,000/-</td>
          <td style={{ padding: '8px', border: '1px solid #000', textAlign: 'center' }}>✔️</td>
          <td style={{ padding: '8px', border: '1px solid #000', textAlign: 'center' }}>✔️</td>
        </tr>
        <tr>
          <td rowSpan="2" style={{ padding: '8px', border: '1px solid #000', textAlign: 'center' }}>6–10 Years</td>
          <td style={{ padding: '8px', border: '1px solid #000', textAlign: 'center' }}>FIRST</td>
          <td style={{ padding: '8px', border: '1px solid #000', textAlign: 'center' }}>₹10,000/-</td>
          <td style={{ padding: '8px', border: '1px solid #000', textAlign: 'center' }}>✔️</td>
          <td style={{ padding: '8px', border: '1px solid #000', textAlign: 'center' }}>✔️</td>
        </tr>
        <tr>
          <td style={{ padding: '8px', border: '1px solid #000', textAlign: 'center' }}>SECOND</td>
          <td style={{ padding: '8px', border: '1px solid #000', textAlign: 'center' }}>₹5,000/-</td>
          <td style={{ padding: '8px', border: '1px solid #000', textAlign: 'center' }}>✔️</td>
          <td style={{ padding: '8px', border: '1px solid #000', textAlign: 'center' }}>✔️</td>
        </tr>
      </tbody>
    </table>
    </div>
  </>
),


    img: Image1,
    link:"https://wame.pro/resetpassword"
  },

  
  
];

function Media() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <main className="fancy-page">
  <div className="fancy-heading">
    <h1>Fancy Dress</h1>
  </div>


    <div className="fancy-grid">
      {fancy.map((item) => (
       <div className="fancy-card-row" key={item.id}>
  <div className="fancy-image-container">
    <img src={item.img} alt={item.title} className="fancy-img" />
    
  </div>
  <div className="fancy-content">
    <h3>{item.title}</h3>
    <div className="fancy-description">{item.description}</div>
     {/* <button className="fancy-button" onClick={() => window.open(item.link, '_blank')}>Register for event</button> */}
   
  </div>
</div>

      ))}
    </div>
 
</main>


    </>
  );
}

export default Media;
