import React from 'react';
import Marquee from 'react-fast-marquee';

const news = [
  {
    "id": 1,
    "news": "Nottingham Forest thrash Sunderland 5-0 to move eight points clear of the Premier League relegation zone."
  },
  {
    "id": 2,
    "news": "Manchester City and Southampton prepare for today's high-stakes FA Cup semi-final clash at Wembley."
  },
  {
    "id": 3,
    "news": "Roberto De Zerbi's Tottenham face critical pressure in the relegation battle ahead of their match against Wolves."
  },
  {
    "id": 4,
    "news": "Jake Slaughter and Austin Barber selected by the Chargers and Browns on Day 2 of the 2026 NFL Draft."
  },
  {
    "id": 5,
    "news": "Minnesota United FC puts their five-game winning streak on the line tonight against Son Heung-Min's LAFC."
  }
]

const BreakingNewsPage = () => {
  return (
    <div className='mt-5 container mx-auto flex justify-between items-center gap-1 p-2 bg-gray-400'>
      <button className='btn bg-[#d72050FF] p-4 text-white'>Latest News</button>
      <Marquee pauseOnHover={true} >
      {news.map((n,i) => <span className='ml-15' key={i}>{n.news}</span>)}
      </Marquee>
    </div>
  );
};

export default BreakingNewsPage;