import React, { Suspense, lazy, useState, useEffect } from 'react';
import './App.css';
import logoImg from './assets/logo.png';

const Home = lazy(() => import('./components/home/home'));
const Tasks = lazy(() => import('./components/tasks/tasks'));
const Iniation = lazy(() => import('./components/initation/initation'));
const Goal = lazy(() => import('./components/goal/goal'));
const Graduates = lazy(() => import('./components/graduates/graduates'));
const Gallery = lazy(() => import('./components/gallery/gallery'));
const Library = lazy(() => import('./components/library/Library'));

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
        <div className="nav-container">
          <a className="nav-brand">
            <span className="nav-logo-wrapper">
              <img className="nav-logo-img" src={logoImg} alt="Myanmar Myat Foundation logo" />
            </span>
            <span className="brand-text">
              <span className="brand-title">မြင့်မြတ်</span>
              <span className="brand-subtitle">ပညာရေးဖောင်ဒေးရှင်း</span>
            </span>
          </a>

          <nav className="nav-links">
            
            <a href="#initation">ဖြစ်ပေါ်လာပုံ</a>
            <a href="#tasks">ဆောင်ရွက်ချက်များ</a> 
            <a href="#goal">ရည်ရွယ်ချက်များ</a>
            <a href="#graduates">ဘွဲ့ရများ</a>
            <a href="#gallery">ဓာတ်ပုံများ</a>
            <a href="#library">စာကြည့်တိုက်</a>
          </nav>
        </div>
      </header>

      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Home />
          <Tasks />
          <Iniation/>
          <Goal />
          <Graduates />
          <Gallery />
          <Library />
        </Suspense>
      </main>

      <footer className="footer-section">
        <div className="footer-inner-container">
          <div className="footer-header">
            <h2>မြင့်မြတ် ပညာရေးဖောင်ဒေးရှင်း</h2>
            <div className="footer-underline" />
          </div>

          <div className="footer-grid">
            <div>
              <div className="footer-brand-flex">
                <div className="footer-logo-circle">
                  <img src={logoImg} alt="Myanmar Myat Foundation logo" />
                </div>
                <div>
                  <div className="brand-name-main">မြင့်မြတ် Foundation</div>
                  <p>"ဖူးပုရစ်တိုင်းပွင့်ရမည် - ပွင့်သောပန်းတိုင်းမွှေးရမည်"</p>
                </div>
              </div>
              <p>
                Empowering students with learning, leadership, and community-focused education.
              </p>
            </div>

            <div className="contact-list">
              <div className="contact-row">
                <span className="contact-label">Email:</span>
                <span className="contact-value">info@myintmyat.org</span>
              </div>
              <div className="contact-row">
                <span className="contact-label">Phone:</span>
                <span className="contact-value">+95 9 123 456 789</span>
              </div>
              <div className="contact-row">
                <span className="contact-label">Address:</span>
                <span className="contact-value">Yangon, Myanmar</span>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <span>© 2026 မြင့်မြတ် Foundation. All rights reserved.</span>
            <span>Designed to support education and community growth.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;