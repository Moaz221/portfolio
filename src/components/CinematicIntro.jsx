import { useState, useEffect } from 'react';

export default function CinematicIntro({onDone}) {
  const [text, setText] = useState('');
  const [sub, setSub] = useState(false);
  const [hide, setHide] = useState(false);
  const full = 'Moaz.dev';
  useEffect(() => {
    const shown = sessionStorage.getItem('intro-shown');
    if (shown) { onDone(); return; }
    let i = 0;
    const t = setInterval(() => {
      if (i < full.length) { setText(full.slice(0, i+1)); i++; }
      else { clearInterval(t); setSub(true); setTimeout(() => { setHide(true); sessionStorage.setItem('intro-shown', 'true'); setTimeout(onDone, 800); }, 1200); }
    }, 110);
    return () => clearInterval(t);
  }, [onDone, full]);
  return (
    <div id="intro-overlay" className={`fixed inset-0 z-50 bg-[#0a0a0f] flex items-center justify-center ${hide?'hide':''}`}>
      <div className="text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 font-mono">
          <span className={`gradient-text ${text.length < full.length ? 'typewriter-cursor pr-1' : ''}`}>{text}</span>
        </h1>
        <p className={`text-base text-neutral-400 font-mono transition-all duration-500 ${sub?'opacity-100':'opacity-0'}`}>
          <span style={{color:'#c792ea'}}>const</span>{' '}
          <span style={{color:'#ffcb6b'}}>developer</span>{' = '}
          <span style={{color:'#c3e88d'}}>"Android"</span>;
        </p>
      </div>
    </div>
  );
}