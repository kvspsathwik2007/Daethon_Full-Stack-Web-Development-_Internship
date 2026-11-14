import { Mail, Linkedin, Github, Phone } from './Icons';
import { personal } from '../data/portfolio';

export default function Contact() {
  return (
    <section id="contact" className="section-padding">
      <div className="container-narrow">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-sm font-medium text-indigo-400 mb-2 tracking-wide uppercase">
            Contact
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            Let&apos;s connect
          </h2>
          <p className="text-zinc-500 mb-10 leading-relaxed">
            Open to internships, collaborations, and interesting projects in AI/ML and full-stack development.
            Feel free to reach out.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10">
            <a
              href={`mailto:${personal.email}`}
              className="btn-primary w-full sm:w-auto"
            >
              <Mail size={16} />
              {personal.email}
            </a>
            <a
              href={`tel:+91${personal.phone}`}
              className="btn-secondary w-full sm:w-auto"
            >
              <Phone size={16} />
              {personal.phone}
            </a>
          </div>

          <div className="flex items-center justify-center gap-4">
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-700/80 text-sm text-zinc-400 hover:text-white hover:border-zinc-500 transition-colors"
            >
              <Linkedin size={16} />
              LinkedIn
            </a>
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-700/80 text-sm text-zinc-400 hover:text-white hover:border-zinc-500 transition-colors"
            >
              <Github size={16} />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
