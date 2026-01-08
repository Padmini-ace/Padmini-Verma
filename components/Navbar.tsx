
import React, { useState } from 'react';
import { Sun, Moon, Github, Linkedin, Menu, X } from 'lucide-react';

interface NavbarProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDarkMode, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Standard anchor behavior works with scroll-smooth, 
    // but we can add explicit closing for mobile menu.
    setIsMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/90 dark:bg-navy-950/90 backdrop-blur-md border-b-4 border-navy-900 dark:border-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-accent-yellow border-2 border-navy-900 flex items-center justify-center text-navy-950 font-black text-xl shadow-[4px_4px_0px_0px_#0F172A]">
            P
          </div>
          <a href="#" className="font-black text-xl tracking-tighter uppercase italic">Padmini Verma</a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 lg:space-x-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-black uppercase tracking-widest text-navy-900 dark:text-white hover:text-accent-orange dark:hover:text-accent-yellow transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-1 bg-accent-green transition-all group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Action Buttons & Mobile Toggle */}
        <div className="flex items-center space-x-2">
          <div className="hidden sm:flex items-center space-x-2">
            <a
              href="https://github.com/Padmini-ace"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border-2 border-transparent hover:border-navy-900 dark:hover:border-white rounded transition-all"
            >
              <Github size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/padmini-verma-657798324"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border-2 border-transparent hover:border-navy-900 dark:hover:border-white rounded transition-all"
            >
              <Linkedin size={22} />
            </a>
            <div className="w-px h-6 bg-slate-300 dark:bg-slate-700 mx-2"></div>
          </div>
          
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-accent-yellow text-navy-950 hover:scale-110 transition-all shadow-[2px_2px_0px_0px_#0F172A]"
            aria-label="Toggle theme"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-navy-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Backdrop */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 top-20 bg-navy-900/50 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Panel */}
      <div className={`fixed top-20 left-0 w-full bg-white dark:bg-navy-950 border-b-4 border-navy-900 dark:border-white z-50 transition-all duration-300 ease-in-out transform md:hidden ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0 pointer-events-none'}`}>
        <div className="flex flex-col p-8 space-y-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-2xl font-black uppercase tracking-tighter text-navy-900 dark:text-white hover:text-accent-orange dark:hover:text-accent-yellow transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex items-center gap-6">
            <a href="https://github.com/Padmini-ace" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-black uppercase text-xs">
              <Github size={20} /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/padmini-verma-657798324" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-black uppercase text-xs">
              <Linkedin size={20} /> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
