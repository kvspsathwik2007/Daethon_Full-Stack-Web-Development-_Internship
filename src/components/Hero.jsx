import { Github, Linkedin, ArrowDown, Mail } from './Icons';
import { personal } from '../data/portfolio';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center section-padding pt-24 overflow-hidden"
    >
      {/* Subtle background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-indigo-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-violet-500/5 blur-[100px] rounded-full" />
      </div>

      <div className="container-narrow relative z-10 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-zinc-700/80 bg-zinc-900/60 px-3 py-1 text-xs text-zinc-400 mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          {personal.status}
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-4">
          Hi, I&apos;m{' '}
          <span className="text-gradient">{personal.displayName}</span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-zinc-400 font-medium mb-3">
          {personal.title}
        </p>

        <p className="max-w-2xl mx-auto text-base sm:text-lg text-zinc-500 mb-10 leading-relaxed">
          {personal.headline}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12">
          <a href="#projects" className="btn-primary w-full sm:w-auto">
            View Projects
          </a>
          <a href="#contact" className="btn-secondary w-full sm:w-auto">
            <Mail size={16} />
            Contact Me
          </a>
        </div>

        <div className="flex items-center justify-center gap-4">
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="p-2.5 rounded-full border border-zinc-700/80 text-zinc-400 hover:text-white hover:border-zinc-500 transition-colors"
          >
            <Github size={20} />
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="p-2.5 rounded-full border border-zinc-700/80 text-zinc-400 hover:text-white hover:border-zinc-500 transition-colors"
          >
            <Linkedin size={20} />
          </a>
        </div>

        <a
          href="#about"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-zinc-500 hover:text-zinc-300 transition-colors animate-bounce"
          aria-label="Scroll to about section"
        >
          <ArrowDown size={20} />
        </a>
      </div>
    </section>
  );
}
