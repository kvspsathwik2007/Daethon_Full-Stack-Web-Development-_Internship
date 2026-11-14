import { useEffect } from 'react';
import { X, Github, ExternalLink } from './Icons';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl border border-zinc-700/80 bg-zinc-900 shadow-2xl">
        <div className="sticky top-0 flex items-center justify-between p-5 border-b border-zinc-800 bg-zinc-900/95 backdrop-blur">
          <div>
            <p className="text-xs text-indigo-400 font-medium mb-0.5">
              {project.category}
            </p>
            <h3 id="modal-title" className="text-xl font-semibold text-white">
              {project.name}
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-2 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
          >
            <X size={20} />
          </button>
        </div>

        <div className="p-5 space-y-5">
          <p className="text-zinc-400 leading-relaxed">
            {project.longDescription || project.description}
          </p>

          <div>
            <h4 className="text-sm font-semibold text-zinc-300 mb-2">
              Technologies
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="badge">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            {project.github ? (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-sm"
              >
                <Github size={16} />
                GitHub
              </a>
            ) : (
              <span className="inline-flex items-center gap-2 rounded-full border border-zinc-700/50 px-4 py-2 text-sm text-zinc-500 cursor-not-allowed">
                <Github size={16} />
                GitHub (coming soon)
              </span>
            )}
            {project.live ? (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm"
              >
                <ExternalLink size={16} />
                Live Demo
              </a>
            ) : (
              <span className="inline-flex items-center gap-2 rounded-full border border-zinc-700/50 px-4 py-2 text-sm text-zinc-500 cursor-not-allowed">
                <ExternalLink size={16} />
                Demo (coming soon)
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
