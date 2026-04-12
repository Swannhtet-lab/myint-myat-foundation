import React, { lazy, Suspense } from 'react';
import './App.css';

// Lazy load the sections
const Home = lazy(() => import('./components/home/home'));
const Tasks = lazy(() => import('./components/tasks/tasks'));
const Iniation = lazy(() => import('./components/initation/initation'));
const Goal = lazy(()=> import('./components/goal/goal'));
const Graduates = lazy(()=> import('./components/graduates/graduates'));
const Gallery = lazy(() => import('./components/gallery/gallery'));
const Library = lazy(()=> import('./components/library/Library'));

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <a href="#home">ဖြစ်ပေါ်လာပုံ</a>
        <a href="#tasks">ဆောင်ရွက်ချက်များ</a>
        <a href="#goal">ရည်ရွယ်ချက်များ</a>
        <a href="#library">စာကြည့်တိုက်</a>
        <a href="#graduates">ဘွဲ့ရများ</a>
        <a href="#gallery">ပုံပြခန်း</a>
      </nav>

      {/* Suspense handles the loading state for all separate CSS and JS chunks */}
      <Suspense fallback={<div className="loading">Loading Section...</div>}>
        <Home />
        <Iniation />
        <Tasks />
        <Goal />
        <Library />
        <Graduates />
        <Gallery />
      </Suspense>
    </div>
  );
}

export default App;