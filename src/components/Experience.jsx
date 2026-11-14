import { experience } from '../data/portfolio';

export default function Experience() {
  return (
    <section id="experience" className="section-padding bg-zinc-950/50">
      <div className="container-narrow">
        <div className="mb-12">
          <p className="text-sm font-medium text-indigo-400 mb-2 tracking-wide uppercase">
            Experience
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Internships &amp; training
          </h2>
        </div>

        <div className="relative space-y-8 before:absolute before:left-[7px] before:top-2 before:bottom-2 before:w-px before:bg-zinc-800">
          {experience.map((item, idx) => (
            <div key={idx} className="relative pl-10">
              <div className="absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-indigo-500 bg-zinc-950" />
              <div className="card p-5">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                  <h3 className="text-base font-semibold text-white">
                    {item.role}
                  </h3>
                  <span className="text-xs text-zinc-500 font-medium">
                    {item.duration}
                  </span>
                </div>
                <p className="text-sm text-indigo-400/90 mb-3">
                  {item.organization}
                </p>
                <p className="text-sm text-zinc-500 leading-relaxed">
                  {item.description}
                </p>
                {item.project && (
                  <p className="mt-3 text-xs text-zinc-600">
                    Project: <span className="text-zinc-400">{item.project}</span>
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
