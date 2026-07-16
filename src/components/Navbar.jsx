import { useState, useEffect } from 'react';
import { NAV_LINKS, CV_URL } from '../constants';
import SVGIcon from './SVGIcon';

export default function Navbar({theme, toggleTheme}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', fn, {passive:true});
    return () => window.removeEventListener('scroll', fn);
  }, []);
  return (
    <header className={`sticky top-0 z-40 transition-all duration-300 ${scrolled?'py-2':'py-3'}`}>
      <div className={`absolute inset-0 transition-all duration-300 ${scrolled?'bg-[#0a0a0f]/95 backdrop-blur-xl shadow-2xl shadow-[#3ddc84]/5':'bg-[#0a0a0f]/80 backdrop-blur-md'}`}></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#3ddc84]/40 to-transparent"></div>
      <nav className="relative mx-auto max-w-6xl px-5 flex items-center justify-between" role="navigation" aria-label="Main navigation">
        <a href="#home" className="flex items-center gap-3 group" aria-label="Go to top">
          <svg width="32" height="32" viewBox="0 0 48 48" className="transition-transform duration-300 group-hover:scale-110" aria-hidden="true">
            <path d="M8 20Q8 8 24 8Q40 8 40 20L40 24L8 24Z" fill="#3ddc84"/>
            <circle cx="16" cy="17" r="2.5" fill="#0a0a0f"/><circle cx="32" cy="17" r="2.5" fill="#0a0a0f"/>
            <circle cx="17" cy="16" r="1" fill="#fff" opacity=".8"/><circle cx="33" cy="16" r="1" fill="#fff" opacity=".8"/>
            <line x1="16" y1="8" x2="12" y2="2" stroke="#3ddc84" strokeWidth="2" strokeLinecap="round"/>
            <line x1="32" y1="8" x2="36" y2="2" stroke="#3ddc84" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          <div className="flex flex-col">
            <span className="text-xl font-bold font-mono tracking-tight"><span className="text-[#3ddc84]">Moaz</span><span className="text-white">.dev</span></span>
            <span className="text-[9px] text-[#3ddc84]/50 tracking-widest uppercase">Android Developer</span>
          </div>
        </a>
        <div className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map(l => (
            <a key={l.href} href={l.href} className="relative px-4 py-2 text-sm font-semibold text-neutral-300 hover:text-white transition-colors font-mono group">
              <span className="absolute inset-0 bg-[#3ddc84]/0 group-hover:bg-[#3ddc84]/8 rounded-lg transition-colors"></span>
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-[#3ddc84] group-hover:w-3/4 transition-all duration-300 rounded-full"></span>
              <span className="relative">{l.label}</span>
            </a>
          ))}
          <button onClick={toggleTheme} className="ml-2 w-10 h-10 rounded-lg bg-[#3ddc84]/10 border border-[#3ddc84]/20 grid place-items-center hover:bg-[#3ddc84]/20 transition-colors" aria-label={`Switch to ${theme==='dark'?'light':'dark'} mode`}>
            <span className="text-lg">{theme === 'dark' ? '☀️' : '🌙'}</span>
          </button>
          <a href={CV_URL} target="_blank" rel="noopener noreferrer" className="ml-3 relative overflow-hidden px-5 py-2.5 rounded-xl font-bold text-sm font-mono group">
            <span className="absolute inset-0 bg-gradient-to-r from-[#3ddc84] to-[#00c853]"></span>
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
            <span className="relative flex items-center gap-2 text-[#0a0a0f]">
              <SVGIcon d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm4 18H6V4h7v5h5v11zM8 12h8v2H8zm0 4h8v2H8z"/> MY CV
            </span>
          </a>
        </div>
        <div className="flex lg:hidden items-center gap-2">
          <button onClick={toggleTheme} className="w-10 h-10 rounded-lg bg-[#3ddc84]/10 border border-[#3ddc84]/20 grid place-items-center" aria-label={`Switch to ${theme==='dark'?'light':'dark'} mode`}>
            <span className="text-lg">{theme === 'dark' ? '☀️' : '🌙'}</span>
          </button>
          <button onClick={() => setMenuOpen(v=>!v)} className="w-11 h-11 rounded-xl bg-[#3ddc84]/10 border border-[#3ddc84]/25 flex items-center justify-center" aria-label="Toggle menu" aria-expanded={menuOpen}>
            <div className="flex flex-col gap-1.5 w-5">
              <span className={`block w-full h-0.5 bg-[#3ddc84] rounded-full transition-all duration-300 origin-center ${menuOpen?'rotate-45 translate-y-2':''}`}></span>
              <span className={`block w-full h-0.5 bg-[#3ddc84] rounded-full transition-all duration-300 ${menuOpen?'opacity-0 scale-0':''}`}></span>
              <span className={`block w-full h-0.5 bg-[#3ddc84] rounded-full transition-all duration-300 origin-center ${menuOpen?'-rotate-45 -translate-y-2':''}`}></span>
            </div>
          </button>
        </div>
      </nav>
      <div className={`lg:hidden absolute top-full left-0 right-0 overflow-hidden transition-all duration-400 ${menuOpen?'max-h-[520px] opacity-100':'max-h-0 opacity-0'}`}>
        <div className="bg-[#0a0a0f]/98 backdrop-blur-xl border-t border-[#3ddc84]/15">
          <ul className="mx-auto max-w-6xl px-4 py-5 grid gap-1.5">
            {NAV_LINKS.map((l, i) => (
              <li key={l.href} className={menuOpen ? 'anim-fade-up' : ''} style={{animationDelay:`${i*40}ms`}}>
                <a href={l.href} onClick={() => setMenuOpen(false)} className="flex items-center gap-4 py-3.5 px-5 text-neutral-300 hover:text-white hover:bg-[#3ddc84]/8 rounded-xl transition-colors font-mono text-sm">
                  <span className="text-lg">{l.icon}</span>
                  <span className="font-semibold">{l.label}</span>
                  <svg className="w-4 h-4 ml-auto text-[#3ddc84]/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
                </a>
              </li>
            ))}
            <li className="mt-3">
              <a href={CV_URL} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 py-3.5 px-6 bg-gradient-to-r from-[#3ddc84] to-[#00c853] rounded-xl font-bold text-[#0a0a0f] font-mono text-sm">
                <SVGIcon d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm4 18H6V4h7v5h5v11zM8 12h8v2H8zm0 4h8v2H8z" size={18}/> Download MY CV
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}