import React from 'react'
import { Link } from 'react-router-dom';
import bgHome from '../assets/home-hero.png'

const Home = () => {
  return (
    <div className='home-container'>
      <img src={bgHome} alt="mountain_view" />
      <h1>You got the travel plans, we got the travel vans.</h1>
      <p>
        Add adventure to your life by joining the #vanlife movement. Rent the
        perfect van to make your perfect road trip.
      </p>
      <Link className='link-button' to='vans'>Find your van</Link>
    </div>
  );
}

export default Home