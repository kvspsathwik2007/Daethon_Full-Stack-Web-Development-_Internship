import { skills } from '../data/portfolio';

const categories = [
  { key: 'programming', label: 'Programming Languages' },
  { key: 'frontend', label: 'Frontend' },
  { key: 'backend', label: 'Backend' },
  { key: 'mobile', label: 'Mobile Development' },
  { key: 'database', label: 'Database' },
  { key: 'ai_ml', label: 'AI / ML' },
  { key: 'tools', label: 'Tools & Platforms' },
];

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-zinc-950/50">
      <div className="container-narrow">
        <div className="mb-12">
          <p className="text-sm font-medium text-indigo-400 mb-2 tracking-wide uppercase">
            Skills
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Technologies I work with
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map(({ key, label }) => (
            <div key={key} className="card p-5">
              <h3 className="text-sm font-semibold text-zinc-300 mb-4">
                {label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills[key].map((skill) => (
                  <span key={skill} className="badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
