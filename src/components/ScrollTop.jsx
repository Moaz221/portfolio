import { useState, useEffect } from 'react';

export default function ScrollTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const fn = () => setShow(window.scrollY > 400);
    window.addEventListener('scroll', fn, {passive:true});
    return () => window.removeEventListener('scroll', fn);
  }, []);
  return (
    <button className={`scroll-top ${show?'show':''}`} onClick={() => window.scrollTo({top:0, behavior:'smooth'})} aria-label="Scroll to top">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="#000"><path d="M12 4l-8 8h5v8h6v-8h5z"/></svg>
    </button>
  );
}