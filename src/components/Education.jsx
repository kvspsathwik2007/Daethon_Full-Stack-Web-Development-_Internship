import { education } from '../data/portfolio';

export default function Education() {
  return (
    <section id="education" className="section-padding">
      <div className="container-narrow">
        <div className="mb-12">
          <p className="text-sm font-medium text-indigo-400 mb-2 tracking-wide uppercase">
            Education
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Academic background
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {education.map((item, idx) => (
            <div key={idx} className="card p-6">
              <p className="text-xs text-indigo-400 font-medium mb-2">
                {item.duration}
              </p>
              <h3 className="text-base font-semibold text-white mb-1 leading-snug">
                {item.degree}
              </h3>
              <p className="text-sm text-zinc-500 mb-3">
                {item.institution}
              </p>
              <p className="text-sm font-medium text-zinc-300">
                {item.score}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
