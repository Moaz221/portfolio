import { EMAIL, PHONE_DIGITS } from '../constants';
import ContactForm from './ContactForm';
import SVGIcon from './SVGIcon';

export default function Contact() {
  const whatsappHref = `https://wa.me/${PHONE_DIGITS}`;
  const mailtoHref = `mailto:${EMAIL}`;
  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 pb-16 md:pb-24 reveal">
      <div className="card p-7">
        <div className="flex items-center justify-between flex-wrap gap-4 mb-5">
          <h2 className="text-2xl md:text-3xl font-bold android-glow">Contact</h2>
          <p className="text-sm text-neutral-500 font-mono">Let's build something great!</p>
        </div>
        <div className="flex items-center gap-3 mb-7">
          <a className="icon-btn" href={whatsappHref} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <svg width="20" height="20" viewBox="0 0 256 256" fill="#25D366"><path d="M187.6 68.4A84 84 0 0041.7 186.2L28.1 227a8 8 0 0010.1 10.1l40.8-13.6A84 84 0 00187.6 68.4Zm-10.9 108.7A68 68 0 0183 83a68.2 68.2 0 0196.3 96.1Z"/></svg>
            <span className="tt">WhatsApp</span>
          </a>
          <a className="icon-btn" href="https://www.linkedin.com/in/moaz-ragab-1a868931b" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#0A66C2"><path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.1c.5-1 1.8-2.2 3.8-2.2 4.1 0 4.9 2.7 4.9 6.2V24h-4v-7.1c0-1.7 0-3.9-2.4-3.9-2.4 0-2.8 1.9-2.8 3.8V24h-4V8z"/></svg>
            <span className="tt">LinkedIn</span>
          </a>
          <a className="icon-btn" href="https://github.com/Moaz221" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <SVGIcon d="M12 .5C5.73.5.98 5.25.98 11.52c0 4.86 3.15 8.98 7.52 10.43.55.1.75-.24.75-.54v-1.9c-3.06.66-3.7-1.31-3.7-1.31-.5-1.27-1.22-1.6-1.22-1.6-.99-.67.08-.66.08-.66 1.1.08 1.68 1.13 1.68 1.13.98 1.67 2.56 1.19 3.18.9.1-.72.39-1.19.7-1.46-2.44-.28-5.01-1.22-5.01-5.43 0-1.2.43-2.18 1.12-2.95-.11-.28-.48-1.42.1-2.96 0 0 .92-.3 3.01 1.13a10.4 10.4 0 015.48 0c2.09-1.43 3.01-1.13 3.01-1.13.58 1.54.21 2.68.1 2.96.69.77 1.12 1.75 1.12 2.95 0 4.22-2.58 5.15-5.03 5.42.4.34.75 1.02.75 2.07v3.07c0 .3.2.64.76.53a10.99 10.99 0 007.51-10.42C23.02 5.25 18.27.5 12 .5z" size={20}/>
            <span className="tt">GitHub</span>
          </a>
          <a className="icon-btn" href="https://khamsat.com/user/moaragab" target="_blank" rel="noopener noreferrer" aria-label="Khamsat">
            <img src="https://www.google.com/s2/favicons?domain=khamsat.com&sz=64" alt="" width="20" height="20" loading="lazy"/><span className="tt">Khamsat</span>
          </a>
          <a className="icon-btn" href="https://mostaql.com/u/MoaRagab" target="_blank" rel="noopener noreferrer" aria-label="Mostaql">
            <img src="https://www.google.com/s2/favicons?domain=mostaql.com&sz=64" alt="" width="20" height="20" loading="lazy"/><span className="tt">Mostaql</span>
          </a>
          <a className="icon-btn" href="https://nafezly.com/u/Moazragab" target="_blank" rel="noopener noreferrer" aria-label="Nafezly">
            <img src="https://www.google.com/s2/favicons?domain=nafezly.com&sz=64" alt="" width="20" height="20" loading="lazy"/><span className="tt">Nafezly</span>
          </a>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          <ContactForm/>
          <div className="card p-6">
            <h3 className="font-bold font-mono text-[#3ddc84] mb-4">Quick Info</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-neutral-300"><span className="w-10 h-10 rounded-xl bg-[#3ddc84]/8 flex items-center justify-center flex-shrink-0">📍</span><span>Beni-Suef, Egypt</span></li>
              <li className="flex items-center gap-3 text-neutral-300"><span className="w-10 h-10 rounded-xl bg-[#3ddc84]/8 flex items-center justify-center flex-shrink-0">⚡</span><span>Available for projects</span></li>
              <li className="flex items-center gap-3 text-neutral-300"><span className="w-10 h-10 rounded-xl bg-[#3ddc84]/8 flex items-center justify-center flex-shrink-0">🎯</span><span>Android Development Focus</span></li>
              <li className="flex items-center gap-3 text-neutral-300"><span className="w-10 h-10 rounded-xl bg-[#3ddc84]/8 flex items-center justify-center flex-shrink-0">✉️</span><a href={mailtoHref} className="font-mono text-sm hover:text-[#3ddc84] transition-colors">{EMAIL}</a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}