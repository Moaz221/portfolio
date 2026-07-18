import { useState, useMemo } from 'react';
import { PROJECTS } from '../constants';
import Tag from './Tag';
import SVGIcon from './SVGIcon';
import Modal from './Modal';
import VideoModal from './VideoModal';

export default function Projects() {
  const [activeModal, setActiveModal] = useState(null);
  const [activeDetails, setActiveDetails] = useState(null);
  const [vidOpen, setVidOpen] = useState(false);
  const [activeVideoUrl, setActiveVideoUrl] = useState(null);
  const featured = useMemo(() => PROJECTS.filter(p => p.featured), []);
  const egypt = useMemo(() => PROJECTS.find(p => p.id === 'egypt-explorer'), []);
  const small = useMemo(() => PROJECTS.filter(p => !p.featured && p.id !== 'egypt-explorer'), []);
  const openVideo = (url) => { setActiveVideoUrl(url); setVidOpen(true); };
  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-14 md:py-20 reveal">
      <div className="flex items-center justify-between flex-wrap gap-4 mb-7">
        <h2 className="text-2xl md:text-3xl font-bold android-glow">Projects</h2>
        <a href="#contact" className="text-sm text-[#3ddc84] hover:text-[#00c853] font-mono transition-colors">Open to collaboration</a>
      </div>
      <div className="space-y-6">
        {featured.map(p => (
          <div key={p.id} className="card p-6 md:p-8 relative overflow-hidden">
            <div className="featured-badge">⭐ Featured</div>
            {p.image && <div className="mt-7 mb-5 overflow-hidden rounded-xl border border-[#3ddc84]/10 max-w-lg mx-auto"><img src={p.image} alt={p.title} className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500" loading="lazy" decoding="async"/></div>}
            <div className="mt-3">
              <div className="flex items-center justify-between mb-3 flex-wrap gap-2"><h3 className="text-xl md:text-2xl font-bold font-mono">{p.title}</h3><span className="text-xs text-neutral-500 font-mono">{p.year}</span></div>
              <p className="text-neutral-300 mb-4 leading-relaxed">{p.description}</p>
              <div className="mb-4"><p className="text-sm font-semibold text-[#3ddc84] mb-2">Key Features:</p><ul className="text-sm text-neutral-400 space-y-1.5">{p.features.map((f, i) => <li key={i} className="flex items-start gap-2"><span className="text-[#3ddc84] mt-0.5">→</span><span>{f}</span></li>)}</ul></div>
              <div className="mb-4"><p className="text-sm font-semibold text-[#4285f4] mb-2">Supported Roles:</p><ul className="text-sm text-neutral-400 space-y-1">{p.roles.map((r, i) => <li key={i} className="flex items-start gap-2"><span className="text-[#4285f4]">•</span>{r}</li>)}</ul></div>
              {p.extra && <p className="text-neutral-500 text-sm mb-5 italic">{p.extra}</p>}
              {p.isExpandable && <button onClick={() => setActiveDetails(p.id)} className="btn-ghost text-sm mb-5">Read more →</button>}
              {p.hasVideo && !p.isSecure && <div className="video-container mb-5"><div className="video-wrapper"><iframe src={`${p.videoUrl}?autoplay=0&loop=1&background=0`} allow="autoplay;fullscreen;picture-in-picture" allowFullScreen title="Project Demo" loading="lazy"/></div></div>}
              <div className="flex flex-wrap gap-2 mb-5">{p.tags.map((t, i) => <Tag key={i}>{t}</Tag>)}</div>
              {p.githubUrl && <div className="mb-4"><a href={p.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-ghost text-sm inline-flex items-center gap-2"><SVGIcon d="M12 .5C5.73.5.98 5.25.98 11.52c0 4.86 3.15 8.98 7.52 10.43.55.1.75-.24.75-.54v-1.9c-3.06.66-3.7-1.31-3.7-1.31-.5-1.27-1.22-1.6-1.22-1.6-.99-.67.08-.66.08-.66 1.1.08 1.68 1.13 1.68 1.13.98 1.67 2.56 1.19 3.18.9.1-.72.39-1.19.7-1.46-2.44-.28-5.01-1.22-5.01-5.43 0-1.2.43-2.18 1.12-2.95-.11-.28-.48-1.42.1-2.96 0 0 .92-.3 3.01 1.13a10.4 10.4 0 015.48 0c2.09-1.43 3.01-1.13 3.01-1.13.58 1.54.21 2.68.1 2.96.69.77 1.12 1.75 1.12 2.95 0 4.22-2.58 5.15-5.03 5.42.4.34.75 1.02.75 2.07v3.07c0 .3.2.64.76.53a10.99 10.99 0 007.51-10.42C23.02 5.25 18.27.5 12 .5z" size={18}/> View on GitHub</a></div>}
              {!p.isSecure && p.hasVideo && <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button onClick={() => openVideo(p.videoUrl)} className="cta-btn w-full py-3.5"><SVGIcon d="M8 5v14l11-7z" size={18}/> Watch Full Screen</button>
                {p.apkUrl ? <a href={p.apkUrl} target="_blank" rel="noopener noreferrer" className="apk-btn py-3.5"><SVGIcon d="M5 20h14v-2H5v2zM19 9h-4V3H9v6H5l7 7 7-7z" size={18} fill="#fff"/> Download APK</a> : <a href={p.videoUrl?.replace('/embed/', '/watch?v=') || 'https://youtu.be/_yb3U57rSRw'} target="_blank" rel="noopener noreferrer" className="apk-btn py-3.5">Watch on YouTube</a>}
              </div>}
              {p.isSecure && <div className="text-xs text-neutral-500 font-mono italic border-t border-neutral-800 pt-4">🔒 Private Project – Code & Assets are protected for security reasons.</div>}
            </div>
          </div>
        ))}
        {egypt && <div className="card p-6 md:p-8"><div className="grid md:grid-cols-2 gap-6"><div><img src={egypt.image} alt={egypt.title} className="w-full rounded-xl border-2 border-[#3ddc84]/15 hover:border-[#3ddc84]/35 transition-colors" loading="lazy" decoding="async"/></div><div><div className="flex items-center justify-between mb-3 flex-wrap gap-2"><h3 className="text-xl md:text-2xl font-bold font-mono">{egypt.title}</h3><span className="text-xs text-neutral-500 font-mono">{egypt.year}</span></div><p className="text-neutral-300 mb-4">{egypt.description}</p><div className="mb-4"><p className="text-sm font-semibold text-[#3ddc84] mb-2">My Contributions:</p><ul className="text-sm text-neutral-400 space-y-1">{egypt.contributions.map((c, i) => <li key={i} className="flex items-start gap-2"><span className="text-[#3ddc84]">→</span>{c}</li>)}</ul></div><div className="flex flex-wrap gap-2 mb-4">{egypt.tags.map((t, i) => <Tag key={i}>{t}</Tag>)}</div><a href={egypt.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-ghost text-sm"><SVGIcon d="M12 .5C5.73.5.98 5.25.98 11.52c0 4.86 3.15 8.98 7.52 10.43.55.1.75-.24.75-.54v-1.9c-3.06.66-3.7-1.31-3.7-1.31-.5-1.27-1.22-1.6-1.22-1.6-.99-.67.08-.66.08-.66 1.1.08 1.68 1.13 1.68 1.13.98 1.67 2.56 1.19 3.18.9.1-.72.39-1.19.7-1.46-2.44-.28-5.01-1.22-5.01-5.43 0-1.2.43-2.18 1.12-2.95-.11-.28-.48-1.42.1-2.96 0 0 .92-.3 3.01 1.13a10.4 10.4 0 015.48 0c2.09-1.43 3.01-1.13 3.01-1.13.58 1.54.21 2.68.1 2.96.69.77 1.12 1.75 1.12 2.95 0 4.22-2.58 5.15-5.03 5.42.4.34.75 1.02.75 2.07v3.07c0 .3.2.64.76.53a10.99 10.99 0 007.51-10.42C23.02 5.25 18.27.5 12 .5z" size={18}/> View on GitHub</a></div></div></div>}
        <div className="grid md:grid-cols-2 gap-5">{small.map(p => <div key={p.id} className="card p-6"><div className="flex items-center justify-between mb-3 flex-wrap gap-2"><h3 className="text-lg font-bold font-mono">{p.title}</h3><span className="text-xs text-neutral-500 font-mono">{p.year}</span></div><p className="text-neutral-400 text-sm mb-4">{p.description}</p><div className="flex flex-wrap gap-2 mb-4">{p.tags.map((t, i) => <Tag key={i}>{t}</Tag>)}</div><button onClick={() => setActiveModal(p.id)} className="cta-btn w-full text-sm py-3">Demo & Code →</button></div>)}</div>
      </div>
      {small.filter(p => p.replitUrl).map(p => <Modal key={p.id} open={activeModal===p.id} onClose={() => setActiveModal(null)} title={p.title} desc="Opens on Replit, where you can run the live demo and read the source side by side."><button className="modal-action" onClick={() => { window.open(p.replitUrl,'_blank','noopener,noreferrer'); setActiveModal(null); }}>🚀 Open in Replit →</button></Modal>)}
      {featured.filter(p => p.isExpandable && p.details).map(p => <Modal key={`${p.id}-details`} open={activeDetails===p.id} onClose={() => setActiveDetails(null)} title={p.title} className="project-details-modal"><p className="text-neutral-300 leading-relaxed mb-5">{p.details.overview}</p><h4 className="text-base font-semibold text-[#3ddc84] mb-2">Core Technologies & Architecture</h4><p className="text-neutral-400 text-sm leading-relaxed mb-5">{p.details.architecture}</p><h4 className="text-base font-semibold text-[#3ddc84] mb-2">Data Management & Smart Sync</h4><p className="text-neutral-400 text-sm leading-relaxed mb-5">{p.details.sync}</p><h4 className="text-base font-semibold text-[#3ddc84] mb-2">Advanced Features</h4><p className="text-neutral-400 text-sm leading-relaxed mb-5">{p.details.advanced}</p><div className="flex flex-wrap gap-2">{p.tags.map((tag, index) => <Tag key={index}>{tag}</Tag>)}</div></Modal>)}
      <VideoModal open={vidOpen} onClose={() => setVidOpen(false)} url={activeVideoUrl}/>
    </section>
  );
}