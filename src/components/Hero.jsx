import SVGIcon from './SVGIcon';
import Tag from './Tag';

export default function Hero() {
  return (
    <section id="home" className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      <div className="card pulse-glow p-7 md:p-10 relative overflow-hidden">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
          <div className="flex-1">
            <div className="font-mono text-sm mb-3 text-neutral-400">
              <span style={{color:'#c792ea'}}>class</span> <span style={{color:'#ffcb6b'}}>Developer</span> <span className="text-white">{'{'}</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-3">
              <span className="text-white">Moaz Ragab</span> <span className="gradient-text">Kamel</span>
            </h1>
            <p className="text-neutral-400 max-w-xl mb-6 font-mono text-sm leading-relaxed">Android Developer turning ideas into smooth, user-friendly apps</p>
            <div className="flex flex-wrap gap-3">
              <a href="#projects" className="btn-primary"><SVGIcon d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/> View Projects</a>
              <a href="#contact" className="btn-ghost">Contact Me</a>
            </div>
            <div className="font-mono text-sm mt-5 text-white">{'}'}</div>
          </div>
          <div className="w-full md:w-auto">
            <div className="card p-5 text-center">
              <p className="text-xs text-neutral-500 font-mono mb-2">current_focus</p>
              <p className="text-lg font-semibold font-mono text-[#3ddc84] mb-3">Android • Kotlin • Java</p>
              <div className="flex flex-wrap gap-2 justify-center"><Tag>OOP</Tag><Tag>DSA</Tag><Tag>Jetpack</Tag><Tag>Firebase</Tag></div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4">
        <div className="card p-5 text-center"><p className="text-3xl font-bold font-mono text-[#3ddc84]">2025</p><p className="text-xs text-neutral-500 mt-1 font-mono">active_year</p></div>
        <div className="card p-5 text-center"><p className="text-3xl font-bold font-mono text-[#4285f4]">6</p><p className="text-xs text-neutral-500 mt-1 font-mono">projects</p></div>
        <div className="card p-5 text-center col-span-2 md:col-span-1"><p className="text-xl font-bold font-mono gradient-text">Kotlin</p><p className="text-xs text-neutral-500 mt-1 font-mono">primary_stack</p></div>
      </div>
    </section>
  );
}