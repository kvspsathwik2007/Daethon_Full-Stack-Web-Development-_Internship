import { useState } from 'react';
import { Github, ExternalLink, ArrowUpRight } from './Icons';
import { projects } from '../data/portfolio';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="projects" className="section-padding">
      <div className="container-narrow">
        <div className="mb-12">
          <p className="text-sm font-medium text-indigo-400 mb-2 tracking-wide uppercase">
            Projects
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Featured work
          </h2>
          <p className="mt-3 text-zinc-500 max-w-2xl">
            A selection of projects spanning AI applications, full-stack systems, and mobile prototypes.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project) => (
            <article
              key={project.id}
              className="card group p-6 flex flex-col cursor-pointer"
              onClick={() => setSelected(project)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelected(project);
                }
              }}
            >
              <div className="flex items-start justify-between mb-3">
                <span className="text-xs font-medium text-indigo-400/90 tracking-wide">
                  {project.category}
                </span>
                <ArrowUpRight
                  size={18}
                  className="text-zinc-600 group-hover:text-indigo-400 transition-colors shrink-0"
                />
              </div>

              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                {project.name}
              </h3>

              <p className="text-sm text-zinc-500 leading-relaxed mb-4 flex-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.technologies.slice(0, 4).map((tech) => (
                  <span key={tech} className="badge">
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 4 && (
                  <span className="badge">+{project.technologies.length - 4}</span>
                )}
              </div>

              <div className="flex items-center gap-3 pt-2 border-t border-zinc-800/80">
                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-zinc-500 hover:text-white transition-colors"
                    aria-label={`${project.name} GitHub`}
                  >
                    <Github size={16} />
                  </a>
                ) : (
                  <span className="text-zinc-600" title="GitHub link coming soon">
                    <Github size={16} />
                  </span>
                )}
                {project.live ? (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-zinc-500 hover:text-white transition-colors"
                    aria-label={`${project.name} live demo`}
                  >
                    <ExternalLink size={16} />
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>

      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}
