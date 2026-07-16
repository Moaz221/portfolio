import { useState, useEffect, useCallback } from 'react';
import BackgroundCanvas from './components/BackgroundCanvas';
import CinematicIntro from './components/CinematicIntro';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollTop from './components/ScrollTop';

export default function App() {
  const [intro, setIntro] = useState(true);
  const [theme, setTheme] = useState(() => {
    try {
      const s = localStorage.getItem('portfolio-theme');
      if (s) return s;
    } catch {}
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  });

  useEffect(() => {
    document.body.classList.toggle('light', theme === 'light');
    try { localStorage.setItem('portfolio-theme', theme); } catch {}
  }, [theme]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('active'); }),
      { threshold: .1, rootMargin: '0px 0px -40px 0px' }
    );
    setTimeout(() => document.querySelectorAll('.reveal').forEach(el => obs.observe(el)), 100);
    return () => obs.disconnect();
  }, [intro]);

  const toggleTheme = useCallback(() => setTheme(t => t==='dark'?'light':'dark'), []);

  return (
    <>
      <BackgroundCanvas />
      {intro && <CinematicIntro onDone={() => setIntro(false)} />}
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
      <ScrollTop />
    </>
  );
}