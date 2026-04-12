import React from 'react';
import './home.css'; // This imports the separate CSS file you requested

const Home = () => {
  return (
    /* id="home" allows the browser to scroll here when a link is clicked */
    <section id="home" className="home-container">
      <h1>Welcome to My Foundation</h1>
      
      <p>
        We are building a community-driven platform to manage tasks 
        efficiently and effectively. This section is lazy-loaded, meaning 
        its code and CSS are only fetched when needed!
      </p>

      <button 
        className="home-cta-button" 
        onClick={() => alert('Welcome aboard!')}
      >
        Get Started
      </button>
    </section>
  );
};

export default Home;