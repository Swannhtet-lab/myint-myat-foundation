import React from 'react';
import { Award, ChevronRight } from 'lucide-react';
import './Home.css';
import logoImg from '../../assets/logo.jpg';


const Home = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="home-wrapper">
      {/* Hero Section */}
      <section className="hero-section">
        {/* Abstract pattern background */}
        <div className="hero-bg">
          <svg className="hero-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
            <polygon fill="currentColor" points="0,100 100,0 100,100" className="svg-dark"/>
            <polygon fill="currentColor" points="0,0 50,0 0,50" className="svg-light"/>
          </svg>
        </div>

        <div className="hero-content">
          <div className="hero-badge">
            <Award className="badge-icon" />
            နိုင်ငံဖွံ့ဖြိုးတိုးတက်ဖို့ - ပညာရေးကိုအားပေးစို့
          </div>
          
        <div className="central-logo-container">
          <img 
            src={logoImg} 
            alt="Myint Myat Logo" 
            className="circular-hero-logo" />
        </div>

          <h1 className="hero-title">
            <span className="title-highlight">မြင့်မြတ်</span>
            <span className="title-main">ပညာရေးဖောင်ဒေးရှင်း</span>
          </h1>
          
          <p className="hero-description">
            "ဖူးပုရစ်တိုင်းပွင့်ရမည် - ပွင့်သောပန်းတိုင်းမွှေးရမည်"
          </p>
          
          <div className="hero-cta-container">
            <button 
              onClick={() => scrollToSection('history')}
              className="hero-btn"
            >
              Get Started
              <ChevronRight className="btn-icon" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;