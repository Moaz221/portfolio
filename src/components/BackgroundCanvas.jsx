import { useEffect, useRef } from 'react';

export default function BackgroundCanvas() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let W, H, particles = [], matrixDrops = [], codeSnippets = [];
    let mouseX = -9999, mouseY = -9999, animId;
    const isMobile = /Mobi|Android/i.test(navigator.userAgent);
    const matrixChars = 'アイウエオカキクケコ0123456789KOTLINANDROID{}[]<>/';
    function resize() {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
      initParticles(); initMatrix(); initCode();
    }
    function initParticles() {
      const count = isMobile ? Math.min(30, ~~(W*H/30000)) : Math.min(70, ~~(W*H/15000));
      particles = Array.from({length: count}, () => ({
        x: Math.random()*W, y: Math.random()*H,
        vx: (Math.random()-.5)*.4, vy: (Math.random()-.5)*.4,
        r: Math.random()*1.8+.8, o: Math.random()*.4+.2,
        p: Math.random()*Math.PI*2, bright: Math.random()>.75
      }));
    }
    function initMatrix() {
      if (isMobile) { matrixDrops = []; return; }
      const cols = ~~(W/25);
      matrixDrops = [];
      for (let i = 0; i < cols; i++) {
        if (Math.random() > .75) {
          const len = ~~(Math.random()*12)+4;
          matrixDrops.push({ x: i*25, y: Math.random()*H, speed: Math.random()*1.5+.8, chars: Array.from({length: len}, () => matrixChars[~~(Math.random()*matrixChars.length)]), len, o: Math.random()*.25+.08 });
        }
      }
    }
    function initCode() {
      if (isMobile) { codeSnippets = []; return; }
      const snips = ['fun main()','class App','val data','suspend','@Composable','LazyColumn','ViewModel','Flow<T>','sealed','interface'];
      codeSnippets = Array.from({length: 6}, () => ({ text: snips[~~(Math.random()*snips.length)], x: Math.random()*W, y: Math.random()*H, vx: (Math.random()-.5)*.25, vy: (Math.random()-.5)*.25, o: Math.random()*.12+.04, size: ~~(Math.random()*4)+10 }));
    }
    function dist(a,b,c,d) { return Math.sqrt((c-a)**2+(d-b)**2); }
    function draw() {
      ctx.fillStyle = 'rgba(10,10,15,.12)'; ctx.fillRect(0,0,W,H);
      ctx.font = '14px JetBrains Mono,monospace';
      matrixDrops.forEach(d => {
        d.y += d.speed;
        if (d.y - d.len*20 > H) { d.y = -d.len*20; d.x = ~~(Math.random()*(W/25))*25; }
        d.chars.forEach((c,i) => {
          const y = d.y - i*20;
          if (y > 0 && y < H) {
            const fo = i===0 ? d.o*2.5 : d.o*(1-i/d.len);
            ctx.fillStyle = `rgba(61,220,132,${Math.min(fo,1)})`;
            ctx.fillText(c, d.x, y);
            if (Math.random()>.98) d.chars[i] = matrixChars[~~(Math.random()*matrixChars.length)];
          }
        });
      });
      const maxD = isMobile ? 100 : 140, mouseR = 180;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i+1; j < particles.length; j++) {
          const d = dist(particles[i].x, particles[i].y, particles[j].x, particles[j].y);
          if (d < maxD) {
            const op = (1-d/maxD)*.25;
            const mdi = dist(particles[i].x, particles[i].y, mouseX, mouseY);
            const mdj = dist(particles[j].x, particles[j].y, mouseX, mouseY);
            ctx.strokeStyle = (mdi < mouseR || mdj < mouseR) ? `rgba(61,220,132,${op*2.5})` : `rgba(61,220,132,${op})`;
            ctx.lineWidth = (mdi < mouseR || mdj < mouseR) ? 1.2 : .5;
            ctx.beginPath(); ctx.moveTo(particles[i].x, particles[i].y); ctx.lineTo(particles[j].x, particles[j].y); ctx.stroke();
          }
        }
      }
      particles.forEach(p => {
        p.p += .018;
        const md = dist(p.x, p.y, mouseX, mouseY);
        if (md < 140) { const ang = Math.atan2(p.y-mouseY, p.x-mouseX); p.vx += Math.cos(ang)*.4; p.vy += Math.sin(ang)*.4; }
        p.x += p.vx; p.y += p.vy; p.vx *= .99; p.vy *= .99;
        if (p.x < 0 || p.x > W) p.vx *= -1; if (p.y < 0 || p.y > H) p.vy *= -1;
        p.x = Math.max(0, Math.min(W, p.x)); p.y = Math.max(0, Math.min(H, p.y));
        const pr = p.r + Math.sin(p.p)*.4;
        if (p.bright || md < 140) {
          const g = ctx.createRadialGradient(p.x,p.y,0,p.x,p.y,pr*3);
          g.addColorStop(0, `rgba(61,220,132,${p.o})`); g.addColorStop(1, 'rgba(61,220,132,0)');
          ctx.fillStyle = g; ctx.beginPath(); ctx.arc(p.x, p.y, pr*3, 0, Math.PI*2); ctx.fill();
        }
        ctx.fillStyle = `rgba(61,220,132,${p.bright ? p.o+.25 : p.o})`;
        ctx.beginPath(); ctx.arc(p.x, p.y, pr, 0, Math.PI*2); ctx.fill();
      });
      codeSnippets.forEach(s => {
        s.x += s.vx; s.y += s.vy;
        if (s.x < -100) s.x = W+100; if (s.x > W+100) s.x = -100;
        if (s.y < -50) s.y = H+50; if (s.y > H+50) s.y = -50;
        const md = dist(s.x, s.y, mouseX, mouseY);
        ctx.font = `${s.size}px JetBrains Mono,monospace`;
        ctx.fillStyle = `rgba(199,146,234,${md<200 ? s.o*2 : s.o})`;
        ctx.fillText(s.text, s.x, s.y);
      });
      if (mouseX > 0) {
        const g = ctx.createRadialGradient(mouseX,mouseY,0,mouseX,mouseY,90);
        g.addColorStop(0, 'rgba(61,220,132,.08)'); g.addColorStop(1, 'rgba(61,220,132,0)');
        ctx.fillStyle = g; ctx.beginPath(); ctx.arc(mouseX, mouseY, 90, 0, Math.PI*2); ctx.fill();
      }
      animId = requestAnimationFrame(draw);
    }
    const onMouseMove = (e) => { mouseX = e.clientX; mouseY = e.clientY; };
    const onTouchMove = (e) => { if (e.touches[0]) { mouseX = e.touches[0].clientX; mouseY = e.touches[0].clientY; } };
    const onVisibilityChange = () => { if (document.hidden) cancelAnimationFrame(animId); else draw(); };
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('touchmove', onTouchMove, {passive:true});
    document.addEventListener('visibilitychange', onVisibilityChange);
    window.addEventListener('resize', resize);
    resize(); ctx.fillStyle='#0a0a0f'; ctx.fillRect(0,0,W,H); draw();
    return () => {
      cancelAnimationFrame(animId);
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('touchmove', onTouchMove);
      document.removeEventListener('visibilitychange', onVisibilityChange);
      window.removeEventListener('resize', resize);
    };
  }, []);
  return <canvas id="bg-canvas" ref={canvasRef} aria-hidden="true" />;
}