export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-4 py-14 md:py-20 reveal">
      <div className="card p-7">
        <div className="flex items-center justify-between flex-wrap gap-4 mb-5">
          <h2 className="text-2xl md:text-3xl font-bold android-glow">Experience</h2>
          <span className="text-sm text-neutral-500 font-mono">2025</span>
        </div>
        <div className="card p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
            <div>
              <h3 className="text-xl font-semibold font-mono text-[#3ddc84]">Android Development Trainee</h3>
              <p className="text-neutral-300">Digital Egypt Pioneers Initiative (DEPI)</p>
            </div>
            <p className="text-sm text-neutral-500 font-mono">07/2025 – 12/2025 • Egypt</p>
          </div>
          <ul className="space-y-2 text-neutral-400 text-sm">
            <li className="flex items-start gap-2"><span className="text-[#3ddc84]">→</span> Enrolled in DEPI program focused on Android development</li>
            <li className="flex items-start gap-2"><span className="text-[#3ddc84]">→</span> Studying core Android components: activities, layouts, views</li>
            <li className="flex items-start gap-2"><span className="text-[#3ddc84]">→</span> Developing communication and team collaboration skills</li>
          </ul>
        </div>
      </div>
    </section>
  );
}