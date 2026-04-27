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
    </div>
  );
}

export default App;