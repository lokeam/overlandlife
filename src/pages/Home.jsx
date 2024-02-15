import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="home-container">
      <h1>Bring us the travel plan, we get you there. #Overlandlife</h1>
      <p>Rent the perfect truck, van or suv to make your perfect outdoor trip.</p>
      <Link to="rigs">Find your rig</Link>
    </div>
  );
}
