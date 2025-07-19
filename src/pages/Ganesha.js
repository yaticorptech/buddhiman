import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '../styles/Ganesha.css';
import Image1 from '../assets/Fancydress/Ganesh5.png';
import Image2 from '../assets/Fancydress/Ganesh2.png';
import Image3 from '../assets/Fancydress/Ganesh4.png';
const Ganesha = [
  {

    title: 'Vinayaka Vandana 2025',
    description: (
   <>
        <p>
          On account of Ganesha Chathurti, budhiman.com presents Vinayaka Vandana 2025 – Pencil Sketching and Ganeshaing Competition, between August 15, 2025 to September 10, 2025.
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
        title: 'Vinayaka Vandana 2025 – Pencil Sketching Competition',
        description:(
        <>
        <p>
         Vinayaka Vandana 2025 – Pencil Sketching Competition Celebrate Ganesha Chaturthi with budhiman!
        </p>
        <p>🗓 Dates: August 15 – September 10, 2025 <br/>
📩 Last Date: September 10, 2025 | 🏆 Results: September 15, 2025 <br/>
</p><p>
<strong>Categories:</strong>
<br/>5–18 yrs | 19–30 yrs | 31+ yrs <br/>
Guidelines:

</p>
        <ul>
          <li>Use pencils only (charcoal/graphite). No color or ink pens</li>
          <li>Upload clear scanned copies of sketches (no photos)</li>
          <li>Jury decision is final</li>
          <li>Best sketches featured on social media</li>
          <li>Winners receive cash prize, memento & certificate</li>
        </ul>
          
      </>),  
        prizesheading: '🏆 Prize Details',
        Prizes:(<>
     <div className="Ganesha-table-wrapper">
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

        image: Image3,
        link: 'https://wame.pro/art-registration'
      },
     {
  title: 'Devotional Singing Competition',
  description: (
    <>
        <p>
         Devotional Singing Competition – 2025
Organized by budhiman<br/>

🗓 Dates & Results: (Same as other contests)<br/>
</p>
<p> <strong>Details:</strong></p>
        <ul>
          <li>
Sing Lord Ganesha devotional songs in any language</li>
          <li>Age groups: 5–18 yrs & 19–30 yrs</li>
          <li>Max duration: 2 mins 30 secs</li>
          <li>No karaoke; shruti box allowed</li>
          <li>No edited audio/video – such entries will be disqualified</li>
<li>Judged on tonal quality, song choice & presentation (jury decision is final)
</li>
<li>Top videos will be featured on social media
</li>
<li>Winners get cash prize, memento & certificate</li>
        </ul>
          
      </>
  ),
  prizesheading: '🏆 Prize Details',
  Prizes: (
    <div className="Ganesha-table-wrapper">
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
        </tbody>
      </table>
    </div>
  ),
  image: Image2,
  link: 'https://wame.pro/devotional-singing-registration'
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
      <main className="Ganesha-page">
        <div className='topbanner1'></div>

        {Ganesha.map((item) => (
          <div className="Ganesha-card-row" key={item.id}>
            <div className="Ganesha-image-container">
              <img src={item.img} alt={item.title} className="Ganesha-img" />
            </div>

            <div className="Ganesha-heading">
              <h1>GANESHA CHATURTHI</h1>
            </div>

            <div className="Ganesha-content">
              <h3>{item.title}</h3>
              <div className="Ganesha-description">{item.description}</div>
            </div>

            {/* Competitions Section */}
            <div className="competitions-wrapper1">
              <h4>Competitions</h4>
              <div className="competition-cards1">
                {item.Competitions.map((comp, Ganeshaex) => (
                  <div key={Ganeshaex} className="competition-card1">
                    <img src={comp.image} alt={comp.title} className="competition-card-img1" />
                    <div className="competition-card-content1">
                      <h3>{comp.title}</h3>
                      <p>{comp.description}</p>
                      <button
                        className="competition-card-btn1"
                        onClick={() => window.open('https://wa.me/918951193682')}
                      >
                        Register
                      </button>
                    </div>
                    <div className='prize1'>
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
