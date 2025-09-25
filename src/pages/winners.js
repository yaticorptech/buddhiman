import React, { useState } from 'react';
import '../styles/winners.css';

function Winners() {
  // All winners
  const winners = [
    { 
      id: 9,
      name: 'Varninivranda and Team',
      competition: 'Krishna Janmastami 2025',
      Rank: 'Top 2 Winner',
      photo: '/images/winners/krishnajunior2.jpeg'
    },
    { 
      id: 10,
      name: 'Varninivranda and Team',
      competition: 'Krishna Janmastami 2025',
      Rank: 'Top 2 Winner',
      photo: '/images/winners/krishnasenior1.jpeg'
    },
    { 
      id: 11,
      name: 'Varninivranda and Team',
      competition: 'Krishna Janmastami 2025',
      Rank: 'Top 2 Winner',
      photo: '/images/winners/krishnasenior2.jpeg'
    },
    { 
      id: 12,
      name: 'Varninivranda and Team',
      competition: 'Krishna Janmastami 2025',
      Rank: 'Top 2 Winner',
      photo: '/images/winners/krishnajunior1.jpeg'
    },
    {
      id: 5,
      name: 'Bhavya Bansal',
      competition: 'Independence Day Quiz 2025',
      Rank: '1st Place (Senior Category)',
      photo: '/images/winners/quizsenior1.jpeg'
    },
    {
      id: 6,
      name: 'Vismitha',
      competition: 'Independence Day Quiz 2025',
      Rank: '2nd Place (Senior Category)',
      photo: '/images/winners/quizsenior2.jpeg'
    },
    {
      id: 7,
      name: 'Nishanth Nag',
      competition: 'Independence Day Quiz 2025',
      Rank: '1st Place (Junior Category)',
      photo: '/images/winners/quizjunior1.jpeg'
    },
    {
      id: 8,
      name: 'Gagan Gowda R',
      competition: 'Independence Day Quiz 2025',
      Rank: '2nd Place (Junior Category)',
      photo: '/images/winners/quizjunior2.jpeg'
    },
    {
      id: 13,
      name: 'Varninivranda and Team',
      competition: 'Ganesha Chaturthi 2025 - Art Contest',
      Rank: 'Top 2 Winner',
      photo: '/images/winners/ganeshaartsenior1.jpeg'
    },
    {
      id: 14,
      name: 'Varninivranda and Team',
      competition: 'Ganesha Chaturthi 2025 - Art Contest',
      Rank: 'Top 2 Winner',
      photo: '/images/winners/ganeshaartsenior2.jpeg'
    },
    {
      id:   15,
      name: 'Varninivranda and Team',
      competition: 'Ganesha Chaturthi 2025 - Art Contest',
      Rank: 'Top 2 Winner',
      photo: '/images/winners/ganeshaartjunior1.jpeg'
    },
    {
      id: 16,
      name: 'Varninivranda and Team',
      competition: 'Ganesha Chaturthi 2025 - Art Contest',
      Rank: 'Top 2 Winner',
      photo: '/images/winners/ganeshaartjunior2.jpeg'
    },
    {
      id: 17,
      name: 'Varninivranda and Team',
      competition: 'Ganesha Chaturthi 2025 - devotional Contest',
      Rank: 'senior',
      photo: '/images/winners/devotionalsenior1.jpeg'
    },
    {
      id: 18,
      name: 'Varninivranda and Team',
      competition: 'Ganesha Chaturthi 2025 - devotional Contest',
      Rank: 'senior',
      photo: '/images/winners/devotionalsenior2.jpeg'
    },
      {
      id: 19,
      name: 'efg',
      competition: 'Ganesha Chaturthi 2025 - devotional Contest',
      Rank: 'junior',
      photo: '/images/winners/devotionaljunior1.jpeg'
    },
      {
      id: 20,
      name: 'abcd',
      competition: 'Ganesha Chaturthi 2025 - devotional Contest',
      Rank: 'junior',
      photo: '/images/winners/devotionaljunior2.jpeg'
    },
    {
      id: 21,
      name: 'Varninivranda and Team',
      competition: 'Independence Day 2025 - patritic song Contest',
      Rank: 'senior',
      photo: '/images/winners/patrioticsenior1.jpeg'
    },
    {
      id: 22,
      name: 'Varninivranda and Team',
      competition: 'Independence Day 2025 - patritic song Contest',
      Rank: 'senior',
      photo: '/images/winners/patrioticsenior2.jpeg'
    },
    {
      id: 23,
      name: 'Varninivranda and Team',
      competition: 'Independence Day 2025 - patritic song Contest',
      Rank: 'senior',
      photo: '/images/winners/patrioticjunior1.jpeg'
    },
    {
      id: 24,
      name: 'Varninivranda and Team',
      competition: 'Independence Day 2025 - patritic song Contest',
      Rank: 'senior',
      photo: '/images/winners/patrioticjunior2.jpeg'
    },{
      id: 1,
      name: 'Arathi Alva',
      competition: 'Navothsava 2025 - Photo Contest (Individual Category)',
      Rank: 'Top 2 Winner',
      photo: '/images/winners/yellow2.jpeg'
    },
    {
      id: 2,
      name: 'Athmashree',
      competition: 'Navothsava 2025 - Photo Contest (Individual Category)',
      Rank: 'Top 2 Winner',
      photo: '/images/winners/yellow1.jpeg'
    },
    {
      id: 3,
      name: 'Anitha.K and co- sisters',
      competition: 'Navothsava 2025 - Photo Contest (Group Category)',
      Rank: 'Top 2 Winner',
      photo: '/images/winners/groupday1-1.jpeg'
    },
    {
      id: 4,
      name: 'Varninivranda and Team',
      competition: 'Navothsava 2025 - Photo Contest (Group Category)',
      Rank: 'Top 2 Winner',
      photo: '/images/winners/varnini.jpeg'
    },
    {
      id: 25,
      name: 'Varninivranda and Team',
      competition: 'Navothsava 2025 - Photo Contest (Group Category)',
      Rank: 'Top 2 Winner',
      photo: '/images/winners/gg1.jpeg'
    },
    {
      id: 26,
      name: 'Varninivranda and Team',
      competition: 'Navothsava 2025 - Photo Contest (Group Category)',
      Rank: 'Top 2 Winner',
      photo: '/images/winners/gg2.jpeg'
    },
    {
      id: 27,
      name: 'Varninivranda and Team',
      competition: 'Navothsava 2025 - Photo Contest (Group Category)',
      Rank: 'Top 2 Winner',
      photo: '/images/winners/gg3.jpeg'
    },
    {
      id: 28,
      name: 'Varninivranda and Team',
      competition: 'Navothsava 2025 - Photo Contest (Group Category)',
      Rank: 'Top 2 Winner',
      photo: '/images/winners/gg4.jpeg'
    },
    {
      id: 29,
      name: 'Varninivranda and Team',
      competition: 'Navothsava 2025 - Photo Contest (Group Category)',
      Rank: 'Top 2 Winner',
      photo: '/images/winners/gg5.jpeg'
    },
    {
      id: 30,
      name: 'Varninivranda and Team',
      competition: 'Navothsava 2025 - Photo Contest (Group Category)',
      Rank: 'Top 2 Winner',
      photo: '/images/winners/gi1.jpeg'
    },
    {
      id: 31,
      name: 'Varninivranda and Team',
      competition: 'Navothsava 2025 - Photo Contest (Group Category)',
      Rank: 'Top 2 Winner',
      photo: '/images/winners/gi2.jpeg'
    },
    {
      id: 32,
      name: 'Varninivranda and Team',
      competition: 'Navothsava 2025 - Photo Contest (Group Category)',
      Rank: 'Top 2 Winner',
      photo: '/images/winners/gi3.jpeg'
    },
    {
      id: 33,
      name: 'Varninivranda and Team',
      competition: 'Navothsava 2025 - Photo Contest (Group Category)',
      Rank: 'Top 2 Winner',
      photo: '/images/winners/gi4.jpeg'
    },
    {
      id: 34,
      name: 'Varninivranda and Team',
      competition: 'Navothsava 2025 - Photo Contest (Group Category)',
      Rank: 'Top 2 Winner',
      photo: '/images/winners/gri1.jpeg'
    },
    {
      id: 35,
      name: 'Varninivranda and Team',
      competition: 'Navothsava 2025 - Photo Contest (Group Category)',
      Rank: 'Top 2 Winner',
      photo: '/images/winners/gri2.jpeg'
    },
    {
      id: 36,
      name: 'Varninivranda and Team',
      competition: 'Navothsava 2025 - Photo Contest (Group Category)',
      Rank: 'Top 2 Winner',
      photo: '/images/winners/gri3.jpeg'
    },
    {
      id: 37,
      name: 'Varninivranda and Team',
      competition: 'Navothsava 2025 - Photo Contest (Group Category)',
      Rank: 'Top 2 Winner',
      photo: '/images/winners/gri4.jpeg'
    },
    {
      id: 38,
      name: 'Varninivranda and Team',
      competition: 'Navothsava 2025 - Photo Contest (Group Category)',
      Rank: 'Top 2 Winner',
      photo: '/images/winners/gri5.jpeg'
    },{
      id: 39,
      name: 'Varninivranda and Team',
      competition: 'Navothsava 2025 - Photo Contest (Group Category)',
      Rank: 'Top 2 Winner',
      photo: '/images/winners/grg1.jpeg'
    },{
      id: 40,
      name: 'Varninivranda and Team',
      competition: 'Navothsava 2025 - Photo Contest (Group Category)',
      Rank: 'Top 2 Winner',
      photo: '/images/winners/grg2.jpeg'
    },{
      id: 41,
      name: 'Varninivranda and Team',
      competition: 'Navothsava 2025 - Photo Contest (Group Category)',
      Rank: 'Top 2 Winner',
      photo: '/images/winners/grg3.jpeg'
    },{
      id: 42,
      name: 'Varninivranda and Team',
      competition: 'Navothsava 2025 - Photo Contest (Group Category)',
      Rank: 'Top 2 Winner',
      photo: '/images/winners/grg4.jpeg'
    },{
      id: 43,
      name: 'Varninivranda and Team',
      competition: 'Navothsava 2025 - Photo Contest (Group Category)',
      Rank: 'Top 2 Winner',
      photo: '/images/winners/grg5.jpeg'
    },
    
    
    
  ];

  // Track which event is selected
  const [selectedEvent, setSelectedEvent] = useState('All');

  // Filter winners based on the selected event
  const filteredWinners =
    selectedEvent === 'All'
      ? winners
      : winners.filter((w) => w.competition.toLowerCase().includes(selectedEvent.toLowerCase()));

  return (
    <div className="winners-page">
      {/* Event Filter Buttons */}
      

      {/* Winners Section */}
      <div className="winner_header">
        <div className="winnerbox">
          <h1>Our Winners</h1>
          <span>Celebrating Excellence and Achievement</span><hr/>
        </div>
        <div className="eventbutton">
        <button onClick={() => setSelectedEvent('Navothsava')} className="Navothsava">
          Navothsava 2025
        </button>
        <button onClick={() => setSelectedEvent('Ganesha')} className="Ganesha">
          Ganesha Chaturthi 2025
        </button>
        <button onClick={() => setSelectedEvent('Krishna')} className="Krishna">
          Krishna Janmastami 2025
        </button>
        <button onClick={() => setSelectedEvent('Independence')} className="Independence">
          Independence Day 2025
        </button>
        <button onClick={() => setSelectedEvent('All')} className="All">
          Show All
        </button>
      </div><hr/>

        <div className="winner-details">
          {filteredWinners.length > 0 ? (
            filteredWinners.map((winner) => (
              <div className="winner-card" key={winner.id}>
                <img src={winner.photo} alt={winner.name} className="winner-photo" />
                {/* <h2>{winner.name}</h2>
                <p>{winner.Rank}</p>
                 <p>{winner.competition}</p> */}
              </div>
            ))
          ) : (
            <p className="no-winners">No winners listed yet for this event.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Winners;
