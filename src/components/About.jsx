import { about, personal } from '../data/portfolio';

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container-narrow">
        <div className="mb-12">
          <p className="text-sm font-medium text-indigo-400 mb-2 tracking-wide uppercase">
            About
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            A bit about me
          </h2>
        </div>

        <div className="grid md:grid-cols-5 gap-10 items-start">
          <div className="md:col-span-3 space-y-5">
            <p className="text-zinc-400 leading-relaxed text-base sm:text-lg">
              {about.summary}
            </p>
            <p className="text-zinc-500 leading-relaxed">
              Currently pursuing B.Tech in Computer Science with a specialization in AI &amp; ML at{' '}
              <span className="text-zinc-300">QIS College of Engineering and Technology</span>,
              graduating in 2028. I focus on turning ideas into working software — from AI-powered tools to full-stack applications and Android prototypes.
            </p>
          </div>

          <div className="md:col-span-2">
            <div className="card p-6 space-y-4">
              <h3 className="text-sm font-semibold text-zinc-300 uppercase tracking-wider">
                Highlights
              </h3>
              <ul className="space-y-3">
                {about.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-zinc-400">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-indigo-400 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
