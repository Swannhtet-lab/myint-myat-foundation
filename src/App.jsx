import React, { lazy, Suspense, useState, useEffect } from 'react';
import './App.css';
import logoImg from './assets/logo.jpg';

import { 
  BookOpen, 
  GraduationCap, 
  Phone,     // Added
  Mail,      // Added
  MapPin,    // Added
  Target, 
  HeartHandshake, 
  ChevronRight,
  Menu,
  X,
  Award,
  BookMarked
} from 'lucide-react';

// Lazy load the sections
const Home = lazy(() => import('./components/home/home'));
const Tasks = lazy(() => import('./components/tasks/tasks'));
const Iniation = lazy(() => import('./components/initation/initation'));
const Goal = lazy(() => import('./components/goal/goal'));
const Graduates = lazy(() => import('./components/graduates/graduates'));
const Gallery = lazy(() => import('./components/gallery/gallery'));
const Library = lazy(() => import('./components/library/Library'));

function App() {
  const [scrolled, setScrolled] = useState(false);

  // Add scroll listener to change navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
        <div className="nav-container">
          <div className="nav-brand">
            <img src={logoImg} alt="Logo" className="nav-logo-wrapper" />
            <div className="brand-text">
              <span className="brand-title">မြင့်မြတ်</span>
              <span className="brand-subtitle">ပညာရေးဖောင်ဒေးရှင်း</span>
            </div>
          </div>
          
          <div className="nav-links">
            <a href="#initation">ဖြစ်ပေါ်လာပုံ</a>
            <a href="#tasks">ဆောင်ရွက်ချက်များ</a>
            <a href="#goal">ရည်ရွယ်ချက်များ</a>
            <a href="#library">စာကြည့်တိုက်</a>
            <a href="#graduates">ဘွဲ့ရများ</a>
            <a href="#gallery">ပုံပြခန်း</a>
          </div>
        </div>
      </nav>

      <Suspense fallback={<div className="loading-screen">ဖော်ပြပါ အကြောင်းအရာများကို ခဏတာ စောင့်ဆိုင်းပေးပါ...</div>}>
        <div id="home"><Home /></div>
        <div id="initation"><Iniation /></div>
        <div id="tasks"><Tasks /></div>
        <div id="goal"><Goal /></div>
        <div id="library"><Library /></div>
        <div id="graduates"><Graduates /></div>
        <div id="gallery"><Gallery /></div>
      </Suspense>
      
     {/* Contact & Footer Section */}
<footer id="contact" className="footer-section">
      <div className="footer-inner-container">
        
        <div className="footer-header">
          <h2>ဆက်သွယ်ရန်</h2>
          <div className="footer-underline"></div>
        </div>

        <div className="footer-grid">
          {/* Brand Info */}
          <div className="brand-info">
            <div className="footer-brand-flex">
              <div className="footer-logo-circle">
                <img src={logoImg} alt="Logo" />
              </div>
              <div>
                <h2 className="brand-name-main">မြင့်မြတ်</h2>
                <p className="brand-sub">ပညာရေးဖောင်ဒေးရှင်း</p>
              </div>
            </div>
            <p className="tagline">နိုင်ငံဖွံ့ဖြိုးတိုးတက်ဖို့ ပညာရေးကိုအားပေးစို့။</p>
          </div>

          {/* Contact List */}
          <div className="contact-list">
            <div className="contact-row">
              <div className="icon-box"><Mail size={20} /></div>
              <div>
                <p className="label">အီးမေးလ်</p>
                <p className="value">myintmyatfoundation@gmail.com</p>
              </div>
            </div>
            <div className="contact-row">
              <div className="icon-box"><Phone size={20} /></div>
              <div>
                <p className="label">ဖုန်းနံပါတ်</p>
                <p className="value">09-5012485, 09-40255183</p>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>@ Copyright မြင့်မြတ် ပညာရေးဖောင်ဒေးရှင်း</p>
          <div className="legal-links">
             <a href="#">Privacy Policy</a>
             <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
    </div>
  );
}

export default App;