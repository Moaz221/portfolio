import { useState } from 'react';
import { FORMSPREE } from '../constants';

export default function ContactForm() {
  const [form, setForm] = useState({name:'', email:'', message:'', _gotcha:''});
  const [status, setStatus] = useState('idle');
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form._gotcha) { setStatus('success'); setForm({name:'', email:'', message:'', _gotcha:''}); setTimeout(() => setStatus('idle'), 6000); return; }
    setStatus('sending');
    try {
      const res = await fetch(FORMSPREE, { method:'POST', body: JSON.stringify(form), headers: {'Accept':'application/json', 'Content-Type':'application/json'} });
      if (res.ok) { setTimeout(() => { setStatus('success'); setForm({name:'',email:'',message:'',_gotcha:''}); }, 1200); setTimeout(() => setStatus('idle'), 6000); }
      else throw new Error();
    } catch { setStatus('error'); setTimeout(() => setStatus('idle'), 3000); }
  };
  if (status === 'sending') return <div className="card p-6 min-h-[380px] flex flex-col items-center justify-center gap-4"><div className="spinner"></div><p className="text-[#3ddc84] text-sm font-mono tracking-widest">ENCRYPTING & SENDING...</p></div>;
  if (status === 'success') return (
    <div className="card p-6 min-h-[380px] flex flex-col items-center justify-center gap-5 text-center">
      <div className="relative"><div className="absolute inset-0 bg-[#3ddc84] blur-3xl opacity-20 animate-ping"></div><span className="text-6xl block relative">🚀</span></div>
      <h3 className="text-2xl font-bold font-mono text-[#3ddc84]">TRANSMISSION_COMPLETE</h3>
      <p className="text-neutral-400 font-mono text-sm max-w-[280px]">Your data has been successfully pushed to the master branch.</p>
      <button onClick={() => setStatus('idle')} className="text-[#3ddc84]/50 hover:text-[#3ddc84] text-xs font-mono underline transition-colors">// Send another message?</button>
    </div>
  );
  if (status === 'error') return (
    <div className="card p-6 min-h-[380px] flex flex-col items-center justify-center gap-5 text-center">
      <span className="text-5xl">⚠️</span>
      <h3 className="text-xl font-bold font-mono text-[#ff5370]">TRANSMISSION_FAILED</h3>
      <p className="text-neutral-400 font-mono text-sm">Something went wrong. Please try again.</p>
      <button onClick={() => setStatus('idle')} className="btn-ghost text-sm">Try Again</button>
    </div>
  );
  return (
    <div className="card p-6">
      <form onSubmit={handleSubmit} noValidate>
        <div className="mb-4"><label htmlFor="name" className="block text-sm font-mono text-neutral-400 mb-2">/usr/name</label><input id="name" name="name" required type="text" value={form.name} onChange={e => setForm({...form, name:e.target.value})} className="form-input" placeholder="Your name" aria-required="true"/></div>
        <div className="mb-4"><label htmlFor="email" className="block text-sm font-mono text-neutral-400 mb-2">/usr/email</label><input id="email" name="email" required type="email" value={form.email} onChange={e => setForm({...form, email:e.target.value})} className="form-input" placeholder="you@example.com" aria-required="true"/></div>
        <div className="mb-4"><label htmlFor="message" className="block text-sm font-mono text-neutral-400 mb-2">/usr/message</label><textarea id="message" name="message" required rows="4" value={form.message} onChange={e => setForm({...form, message:e.target.value})} className="form-input resize-none" placeholder="Say hello..." aria-required="true"/></div>
        <div className="hp-field" aria-hidden="true"><label htmlFor="company">Company</label><input id="company" name="_gotcha" type="text" tabIndex="-1" autoComplete="off" value={form._gotcha} onChange={e => setForm({...form, _gotcha:e.target.value})}/></div>
        <button type="submit" className="cta-btn w-full py-3.5 relative overflow-hidden group"><span className="relative z-10 font-mono font-bold">SEND_PACKET --execute</span><div className="absolute inset-0 bg-[#3ddc84] translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div></button>
      </form>
    </div>
  );
}