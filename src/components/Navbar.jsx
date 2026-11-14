import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from './Icons';
import { navLinks, personal } from '../data/portfolio';

export default function Navbar({ theme, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => setIsOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-800/50'
          : 'bg-transparent'
      } light:bg-white/80 light:border-zinc-200`}
    >
      <nav className="container-narrow flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
        <a
          href="#home"
          className="text-lg font-semibold tracking-tight text-white hover:text-indigo-300 transition-colors"
          onClick={handleNavClick}
        >
          <span className="text-gradient">{personal.displayName}</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="px-3 py-2 text-sm text-zinc-400 hover:text-white transition-colors rounded-md"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            className="p-2 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-800/80 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            className="md:hidden p-2 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-800/80 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="px-4 pb-4 pt-2 space-y-1 bg-zinc-950/95 backdrop-blur-xl border-b border-zinc-800/50">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={handleNavClick}
                className="block px-3 py-2.5 text-sm text-zinc-300 hover:text-white hover:bg-zinc-800/50 rounded-lg transition-colors"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
