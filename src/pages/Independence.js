import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '../styles/Quiz.css';
import Image1 from '../assets/Fancydress/download.jpeg';


const Ind = [
  {
    id: 1,
    title: 'Independence Day Online Quiz Competition',
    description: (
  <>
    <p>
     Celebrate India’s journey of courage, unity, and resilience by participating in our specially curated Independence Day Quiz. Dive into questions about our freedom fighters, national symbols, historical milestones, and constitutional values — and put your knowledge to the test in a fun and rewarding way
    </p>
    <p> <strong>Theme: Independence, Indian History, National Identity & Constitution</strong>
</p>
<p><strong>Quiz Date: August 15, 2025</strong></p>
    {/* <ul>
      <li>The last date to submit your entry is September 10, 2025. The final results will be announced on September 15, 2025.</li>
      <li>The competition will be organized for three age categories – 5–18 years, 19–30 years, and 31 and above.</li>
      <li>The participants are requested to use PENCILS ONLY (charcoal and graphite pencils). Sketch uquiz coloured pencils/gel pen/ball-point pen etc., will be disqualified.</li>
      <li>Participants should upload the scanned copy of the sketch. ONLY clear copies will be forwarded by the selection panel to jury panel for final judgement. Jury decision is final. Best sketches will be uploaded on our social media pages.</li>
      <li>Cash prize, an attractive memento and a certificate awaits the winners</li>
    </ul> */}
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
      <main className="quiz-page">
  <div className="quiz-heading">
    <h1>Quiz</h1>
  </div>


    <div className="quiz-grid">
      {Ind.map((item) => (
       <div className="quiz-card-row" key={item.id}>
  <div className="quiz-image-container">
    <img src={item.img} alt={item.title} className="quiz-img" />
    
  </div>
  <div className="quiz-content">
    <h3>{item.title}</h3>
    <div className="quiz-description">{item.description}</div>
     {/* <button className="quiz-button" onClick={() => window.open(item.link, '_blank')}>Register for event</button> */}
{/* <button className="quiz-button1">Registration opening Soon</button> */}
   
  </div>
</div>

      ))}
    </div>
 
</main>


    </>
  );
}

export default Media;
