import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '../styles/Ganesha.css';
import Image1 from '../assets/Fancydress/group.jpg';
import Image2 from '../assets/Fancydress/individual.jpg';
import Image3 from '../assets/Fancydress/quizjpg.jpg';
import Image4 from '../assets/Fancydress/topbanner.png';

const Ganesha = [
  {

    // title: 'Vinayaka Vandana 2025',
    description: (
   <>
        <p>
         Navratri – A Festival of Colours, Culture and Celebration*
Navratri is one of India’s most vibrant festivals, symbolizing devotion, tradition, and the triumph of good over evil. Celebrated across nine days with nine auspicious colours, it brings together joy, faith, and community spirit.<br/>

We are hosting Navratri Competitions that blend culture with creativity. From knowledge-driven quizzes to colourful photo contests, these events are designed to inspire participation, showcase talent, and spread festive joy among all age groups
        </p>
          
      </>
    ),
    Competitions: [
      {
        title: 'Navarathri Quiz',
        description:(
        <>
        <p>
        Navratri Quiz Competition 2025 – Test Your Knowledge
        </p>
        <p><strong>🗓 Registration:</strong>  Sept 20 – Oct 1, 2025 <br/><strong>📩 Quiz:</strong> Oct 2, 2025 <br/><strong>🏆 Results:</strong>  Within 1 week
            <p><strong>💰 Entry Fee:</strong> ₹49 (Non-Refundable)<br/>
<strong>🎖 All participants get e-certificate</strong><br/>
<strong>🏅 Top 5 winners: Cash Prize, Memento & Certificate</strong>
</p>
</p><p>
<p> <u><strong>Rules & Guidelines:</strong></u></p>

</p>
        <ul>
          <li>Open to all ages | One attempt per participant</li>
          <li>No refund on entry fee</li>
          <li>Quiz: 100 MCQs | Complete in one sitting</li>
          <li>No unfair means (search engines, multiple devices, third-party help)</li>
          <li>Winners based on highest score & minimum time</li>
          <li>Jury decision is final and binding</li>

        </ul>
          
      </>),  
    //     prizesheading: '🏆 Prize Details',
    //     Prizes:(<>
    //  <div className="Ganesha-table-wrapper">
    // <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
    //   <thead>
    //     <tr style={{ backgroundColor: '#f2f2f2' }}>
    //       <th style={{ padding: '8px', border: '1px solid #ddd', fontWeight: 'bold', textAlign: 'center' }}>AGE</th>
    //       <th style={{ padding: '8px', border: '1px solid #ddd', fontWeight: 'bold', textAlign: 'center' }}>PLACE</th>
    //       <th style={{ padding: '8px', border: '1px solid #ddd', fontWeight: 'bold', textAlign: 'center' }}>CASH PRIZE</th>
    //       <th style={{ padding: '8px', border: '1px solid #ddd', fontWeight: 'bold', textAlign: 'center' }}>MEMENTO</th>
    //       <th style={{ padding: '8px', border: '1px solid #ddd', fontWeight: 'bold', textAlign: 'center' }}>CERTIFICATE</th>
    //     </tr>
    //   </thead>
    //   <tbody>
    //     <tr>
    //       <td rowSpan="2" style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center' }}>5–18 Years</td>
    //       <td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center' }}>FIRST</td>
    //       <td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center' }}>₹10,000/-</td>
    //       <td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center' }}>✔️</td>
    //       <td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center' }}>✔️</td>
    //     </tr>
    //     <tr>
    //       <td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center' }}>SECOND</td>
    //       <td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center' }}>₹5,000/-</td>
    //       <td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center' }}>✔️</td>
    //       <td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center' }}>✔️</td>
    //     </tr>

    //     <tr>
    //       <td rowSpan="2" style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center' }}>18 Years & Above</td>
    //       <td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center' }}>FIRST</td>
    //       <td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center' }}>₹10,000/-</td>
    //       <td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center' }}>✔️</td>
    //       <td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center' }}>✔️</td>
    //     </tr>
    //     <tr>
    //       <td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center' }}>SECOND</td>
    //       <td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center' }}>₹5,000/-</td>
    //       <td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center' }}>✔️</td>
    //       <td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center' }}>✔️</td>
    //     </tr>

    //   </tbody>
    // </table>
    // </div></>),

        image: Image3
      },
     {
  title: 'Photo Contest (Color Theme) 2025 – Colors of Tradition ✨ (Group)',
  description: (
    <>
        <p>
         Photo Contest (Color Theme) 2025 – Colors of Tradition ✨<br/>

<strong>🗓 Registration:</strong> Sept 20 – Oct 2, 2025 <br/><strong>📣 Daily Results: Winners announced next day</strong> <br/>
<strong>👥 Group Category (min. 3 members)</strong> <strong> 💰 Entry Fee: ₹150<br/></strong>
<strong>🎖 All participants get e-certificate<br/></strong>
<strong>🏅 Daily Top 5 groups:</strong> Cash Prize, Memento & Certificate<br/>

<br/>
</p>
<p> <u><strong>Rules & Guidelines:</strong></u></p>
        <ul>
          <li>
Open to all age groups | One entry per group per day</li>
          <li>No refund on entry fee</li>
          <li>Daily theme color announced in advance</li>
          <li>Submit group photo (JPG only) within deadline</li>
          <li>Judging: theme match, coordination, presentation & traditional attire</li>
<li>Original photos only (no edits, AI, or copied work)</li>
<li>Decency & cultural sensitivity mandatory</li>
<li>Jury decision is final</li>
<li>Late or multiple entries not accepted</li>

        </ul>
          
      </>
  ),
//   prizesheading: '🏆 Prize Details',
//   Prizes: (
//     <div className="Ganesha-table-wrapper">
//       <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
//         <thead>
//           <tr style={{ backgroundColor: '#f2f2f2' }}>
//             <th style={{ padding: '8px', border: '1px solid #ddd', fontWeight: 'bold', textAlign: 'center' }}>AGE</th>
//             <th style={{ padding: '8px', border: '1px solid #ddd', fontWeight: 'bold', textAlign: 'center' }}>PLACE</th>
//             <th style={{ padding: '8px', border: '1px solid #ddd', fontWeight: 'bold', textAlign: 'center' }}>CASH PRIZE</th>
//             <th style={{ padding: '8px', border: '1px solid #ddd', fontWeight: 'bold', textAlign: 'center' }}>MEMENTO</th>
//             <th style={{ padding: '8px', border: '1px solid #ddd', fontWeight: 'bold', textAlign: 'center' }}>CERTIFICATE</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td rowSpan="2" style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center' }}>5–18 Years</td>
//             <td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center' }}>FIRST</td>
//             <td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center' }}>₹10,000/-</td>
//             <td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center' }}>✔️</td>
//             <td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center' }}>✔️</td>
//           </tr>
//           <tr>
//             <td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center' }}>SECOND</td>
//             <td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center' }}>₹5,000/-</td>
//             <td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center' }}>✔️</td>
//             <td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center' }}>✔️</td>
//           </tr>
//           <tr>
//             <td rowSpan="2" style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center' }}>18 Years & Above</td>
//             <td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center' }}>FIRST</td>
//             <td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center' }}>₹10,000/-</td>
//             <td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center' }}>✔️</td>
//             <td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center' }}>✔️</td>
//           </tr>
//           <tr>
//             <td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center' }}>SECOND</td>
//             <td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center' }}>₹5,000/-</td>
//             <td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center' }}>✔️</td>
//             <td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center' }}>✔️</td>
//           </tr>
//         </tbody>
//       </table>
    // </div>
//   ),
  image: Image1
},
{
  title: 'Photo Contest (Color Theme) 2025 – Colors of Tradition ✨ (Individual)',
  description: (
    <>
        <p>
         Photo Contest (Color Theme) 2025 – Colors of Tradition ✨<br/>

<strong>🗓 Registration:</strong> Sept 22 – Oct 2, 2025 <br/> <strong>📣 Daily Results: Winners announced next day</strong>
<br/><strong>👤 Individual Category</strong><br/> 💰 <strong>Entry Fee:</strong> ₹50/day<br/>
<strong>🏅 Daily Top 5 winners:</strong> Cash Prize, Memento & Certificate<br/>

</p>
<p> <u><strong>Rules & Guidelines:</strong></u></p>
        <ul>
          <li>Open to all age groups | One entry per day</li>
          <li>No refund on entry fee</li>
          <li>Daily theme color announced in advance</li>
          <li>Submit photos (JPG only) within deadline</li>
          <li>Judging: theme match, creativity & traditional attire</li>
<li>Original photos only (no edits, AI, or copied work)</li>
<li>Decency & cultural sensitivity mandatory</li>
<li>Late or multiple entries not accepted</li>
<li>Jury decision is final</li>
        </ul>
          
      </>
  ),
//   prizesheading: '🏆 Prize Details',
//   Prizes: (
//     <div className="Ganesha-table-wrapper">
//       <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
//         <thead>
//           <tr style={{ backgroundColor: '#f2f2f2' }}>
//             <th style={{ padding: '8px', border: '1px solid #ddd', fontWeight: 'bold', textAlign: 'center' }}>AGE</th>
//             <th style={{ padding: '8px', border: '1px solid #ddd', fontWeight: 'bold', textAlign: 'center' }}>PLACE</th>
//             <th style={{ padding: '8px', border: '1px solid #ddd', fontWeight: 'bold', textAlign: 'center' }}>CASH PRIZE</th>
//             <th style={{ padding: '8px', border: '1px solid #ddd', fontWeight: 'bold', textAlign: 'center' }}>MEMENTO</th>
//             <th style={{ padding: '8px', border: '1px solid #ddd', fontWeight: 'bold', textAlign: 'center' }}>CERTIFICATE</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td rowSpan="2" style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center' }}>5–18 Years</td>
//             <td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center' }}>FIRST</td>
//             <td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center' }}>₹10,000/-</td>
//             <td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center' }}>✔️</td>
//             <td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center' }}>✔️</td>
//           </tr>
//           <tr>
//             <td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center' }}>SECOND</td>
//             <td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center' }}>₹5,000/-</td>
//             <td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center' }}>✔️</td>
//             <td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center' }}>✔️</td>
//           </tr>
//           <tr>
//             <td rowSpan="2" style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center' }}>18 Years & Above</td>
//             <td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center' }}>FIRST</td>
//             <td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center' }}>₹10,000/-</td>
//             <td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center' }}>✔️</td>
//             <td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center' }}>✔️</td>
//           </tr>
//           <tr>
//             <td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center' }}>SECOND</td>
//             <td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center' }}>₹5,000/-</td>
//             <td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center' }}>✔️</td>
//             <td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center' }}>✔️</td>
//           </tr>
//         </tbody>
//       </table>
    // </div>
//   ),
  image: Image2
},


    ],
    img: Image4
  }
];

function navarathri() {
//   const navigate = useNavigate();

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
              <h1>NAVARATHRI</h1>
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
                        className="competition-card-btn2"
                        onClick={() => window.open('https://wame.pro/navothsava')}
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

export default navarathri;
