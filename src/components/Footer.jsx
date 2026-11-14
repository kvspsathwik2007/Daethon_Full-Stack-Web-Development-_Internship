import { Github, Linkedin, ArrowUp } from './Icons';
import { personal } from '../data/portfolio';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-800/80 py-8 px-4">
      <div className="container-narrow flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm text-zinc-500">
          © {year} {personal.displayName}. Built with React &amp; Tailwind.
        </div>

        <div className="flex items-center gap-4">
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-zinc-500 hover:text-white transition-colors"
          >
            <Github size={18} />
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-zinc-500 hover:text-white transition-colors"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="#home"
            aria-label="Back to top"
            className="p-2 rounded-full border border-zinc-700/80 text-zinc-500 hover:text-white hover:border-zinc-500 transition-colors"
          >
            <ArrowUp size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
