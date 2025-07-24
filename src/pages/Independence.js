import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '../styles/Ganesha.css';
import Image1 from '../assets/Fancydress/ind.png';
import Image2 from '../assets/Fancydress/ind2.png'



const Ganesha = [
  {
    id: 1,
    title: '  Independence Day – ‘Vande Bharata Maatram’ Patriotic Singing Competition 2025',
    description: (
      <>

       
      
        <p>On account of Independence Day 2025, Budhiman presents Vande Bharata Maataram – a patriotic singing competition scheduled to be held from July 20, 2025, to August 20, 2025. The last date to send your entries is August 20, 2025, and the final results will be announced on August 25, 2025. This competition is open to all age groups. However, multiple or duplicate entries will not be entertained and will result in disqualification. Each performance should be a maximum of 3 minutes in duration. The use of musical instruments is not allowed, although a shruti box may be used. Winners will receive a cash prize along with an attractive memento and a certificate.</p>
          
      </>
    ),
    Competitions: [
      {
        title: 'Independence Day Online Quiz Competition',
        description:(
   <>
        <p>
      Vande Bharata Maataram – 2025
Patriotic Singing Competition by budhiman!
        </p>
        <p>🗓 Dates: July 20 – August 20, 2025
📩 Last Date: August 20, 2025 | 🏆 Results: August 25, 2025
 <br/>
</p><p>
<strong>Details:
</strong>
</p>
        <ul>
          <li>Open to all age groups</li>
          <li>One entry per participant only</li>
          <li>Max duration: 3 minutes</li>
          <li>No instruments allowed; shruti box permitted</li>
          <li>Winners get cash prize, memento & certificate</li>
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

        image: Image1,
        link: 'https://wame.pro/art-registration'
      },
      {title: 'Independence Day Online Quiz Competition',
        description:(
   <>
        <p>
      Vande Bharata Maataram – 2025
Patriotic Singing Competition by budhiman!
        </p>
        <p>🗓 Dates: July 20 – August 20, 2025
📩 Last Date: August 20, 2025 | 🏆 Results: August 25, 2025
 <br/>
</p><p>
<strong>Details:
</strong>
</p>
        <ul>
          <li>Open to all age groups</li>
          <li>One entry per participant only</li>
          <li>Max duration: 3 minutes</li>
          <li>No instruments allowed; shruti box permitted</li>
          <li>Winners get cash prize, memento & certificate</li>
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
      <main className="Ganesha-page">
        <div className='topbanner1'></div>

        {Ganesha.map((item) => (
          <div className="Ganesha-card-row" key={item.id}>
            <div className="Ganesha-image-container">
              <img src={item.img} alt={item.title} className="Ganesha-img" />
            </div>

            <div className="Ganesha-heading">
              <h1>INDEPENDENCE DAY</h1>
            </div>

            <div className="Ganesha-content">
              <h3>{item.title}</h3>
              <div className="Ganesha-description">{item.description}</div>
            </div>

            {/* Competitions Section */}
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
