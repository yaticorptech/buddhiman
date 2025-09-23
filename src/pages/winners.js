import React from 'react';
import '../styles/winners.css';

function Winners() {
  const winners = [
    // {
    //   id: 1,
    //   name: 'Bhavya Bansal',
    //   competition: 'Independence Day Quiz 2025',
    //   Rank: '1st Place (Senior Category)',
    //   photo: 'images/winners/'
    // },
    //      {
    //   id: 2,
    //   name: 'Vismitha',
    //   competition: 'Independence Day Quiz 2025',
    //   Rank: '2nd Place (Senior Category)',
    //   photo: '/images/winners/vismitha.jpeg'
    // },

    // {
    //   id: 3,
    //   name: 'Nishanth Nag',
    //   competition: 'Independence Day Quiz 2025',
    //   Rank: '1st Place (Junior Category)',
    //   photo: '/images/winners/nishanth.jpeg'
    // },   
    //  {
    //   id: 4,
    //   name: 'Gagan Gowda R',
    //   competition: 'Independence Day Quiz 2025',
    //   Rank: '2nd Place (Junior Category)',
    //   photo: '/images/winners/gagan.jpeg'
    // }
  {
      id: 1,
      name: 'Arathi Alva',
      competition: 'Navothsava 2025 - Photo Contest (Individual Category)',
      Rank: 'Top 2 Winner',
      photo: '/images/winners/Arathialva.jpg'
    },
      {
      id: 2,
      name: 'Athmashree',
      competition: 'Navothsava 2025 - Photo Contest (Individual Category)',
      Rank: 'Top 2 Winner',
      photo: '/images/winners/Athmashree.jpg'
    },
    {
        id: 3,
        name: 'Anitha.K and co- sisters',
        competition: 'Navothsava 2025 - Photo Contest (Group Category)',
        Rank: 'Top 2 Winner',
        photo: '/images/winners/Anitha.kandco-sisters.jpg'
    },
    {
        id: 4,
        name: 'Varninivranda and Team',
        competition: 'Navothsava 2025 - Photo Contest (Group Category)',
        Rank: 'Top 2 Winner',
        photo: '/images/winners/Varninivranda.jpg'
    }
  ];

  return (
    <>

      <div className="winner_header">
        <div className='winnerbox'> 
        <h1>Our Winners</h1>
        <span>Celebrating Excellence and Achievement</span>
        </div>

        <div className="winner-details">
          {winners.map((winner) => (
            <div className="winner-card" key={winner.id}>
              <img src={winner.photo} alt={winner.name} className="winner-photo" />
              <h2>{winner.name}</h2>
              <p>{winner.Rank}</p>
              <p>{winner.competition}</p>
            </div>
          ))}
        </div>
      </div>

    </>
  );
}

export default Winners;
