import { Award } from './Icons';
import { certifications } from '../data/portfolio';

export default function Certifications() {
  return (
    <section id="certifications" className="section-padding bg-zinc-950/50">
      <div className="container-narrow">
        <div className="mb-12">
          <p className="text-sm font-medium text-indigo-400 mb-2 tracking-wide uppercase">
            Certifications &amp; Achievements
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Learning &amp; recognition
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className="card p-5 flex items-start gap-3"
            >
              <div className="mt-0.5 p-2 rounded-lg bg-indigo-500/10 text-indigo-400 shrink-0">
                <Award size={18} />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white leading-snug">
                  {cert.title}
                </h3>
                <p className="text-xs text-zinc-500 mt-1">
                  {cert.issuer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
