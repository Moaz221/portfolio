export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-14 md:py-20 reveal">
      <div className="grid md:grid-cols-2 gap-6 items-stretch">
        <div className="card p-7">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 android-glow">About Me</h2>
          <p className="text-neutral-300 mb-3 leading-relaxed">I am Moaz, a passionate programmer and Android application developer. I combine specialized academic study in Computer Science with practical experience building modern mobile and desktop applications.</p>
          <p className="text-neutral-300 mb-3 leading-relaxed">My goal is not simply to write code, but to turn your idea into a smart, fast application with an engaging UI/UX and a memorable user experience.</p>
          <p className="text-neutral-300 mb-3 leading-relaxed">I build each project with a focus on clean code, maintainability, and modern engineering standards.</p>
          <p className="text-neutral-300 mb-5 leading-relaxed">Quality, speed, and continuous communication are the foundations I guarantee in every project. If you are looking for a developer who can turn your vision into an efficient, intelligent digital product, feel free to contact me to discuss your next project.</p>
          <a href="#projects" className="btn-ghost">See My Work →</a>
        </div>
        <div className="card p-7 flex items-center justify-center">
          <div className="w-52 h-52 md:w-60 md:h-60 rounded-2xl overflow-hidden glow-ring">
            <img src="https://i.postimg.cc/MHBs7rhR/Designer-20.png" alt="Moaz Ragab Kamel - Android Developer" className="w-full h-full object-cover" loading="lazy" decoding="async"/>
          </div>
        </div>
      </div>
    </section>
  );
}