
import bgImg from '../assets/images/about-hero.jpg';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="about-page-container">
      <img src={bgImg} className='about-hero-image' />
      <div className="about-page-content">
        <h1>Where will your journey take you?</h1>
        <p>OAenean eleifend porta nisl, sit amet pellentesque nunc viverra ut. Praesent id eleifend justo, et consectetur elit. Suspendisse auctor dignissim augue. Sed et convallis diam.</p>
        <p>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus volutpat dolor sed venenatis posuere. Vivamus tristique nisl non volutpat ullamcorper.</p>
      </div>
      <div className="about-page-cta">
        <h2>The adventure awaits.<br />Your rig is ready.</h2>
        <Link className="link-button" to="/rigs">Explore our Trucks and SUVs</Link>
      </div>
    </div>
  );
}
