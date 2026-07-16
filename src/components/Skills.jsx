import { SKILL_CATEGORIES } from '../constants';
import Tag from './Tag';

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-4 py-14 md:py-20 reveal">
      <div className="card p-7">
        <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
          <h2 className="text-2xl md:text-3xl font-bold android-glow">Skills</h2>
          <span className="text-sm text-neutral-500 font-mono">v2025.1</span>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SKILL_CATEGORIES.map((c, i) => (
            <div key={i} className="card p-5">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xl">{c.icon}</span>
                <p className="font-mono text-sm text-[#3ddc84]">{c.title}</p>
              </div>
              <div className="flex flex-wrap gap-2">{c.skills.map((s, j) => <Tag key={j}>{s}</Tag>)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}