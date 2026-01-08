
import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative flex flex-col items-center justify-center text-center py-20 lg:py-40 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-accent-yellow/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-orange/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-grid-pattern text-slate-200 dark:text-slate-800 opacity-20"></div>
      </div>

      <div className="space-y-10 max-w-4xl px-4">
        {/* Software Developer Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border-2 border-accent-green bg-accent-green/10 text-accent-green text-sm font-bold uppercase tracking-widest animate-reveal opacity-0" style={{ animationDelay: '0.2s' }}>
          <Sparkles size={14} />
          Software Developer
        </div>

        {/* The Name with Dashed Border */}
        <div className="relative inline-block py-8 px-12 md:px-20 animate-reveal opacity-0" style={{ animationDelay: '0.4s' }}>
          <div className="absolute inset-0 border-[3px] border-dashed border-accent-yellow/50 rounded-lg"></div>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-navy-900 dark:text-white drop-shadow-sm">
            Padmini Verma
          </h1>
        </div>

        {/* Subtitle and Value Statement */}
        <div className="space-y-6 animate-reveal opacity-0" style={{ animationDelay: '0.6s' }}>
          <p className="text-2xl md:text-3xl font-bold text-accent-orange dark:text-accent-yellow">
            AI & Systems Enthusiast
          </p>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed font-medium">
            I build <span className="text-navy-900 dark:text-white font-bold border-b-2 border-accent-green">real, problem-driven systems</span> focused on bridging the gap between raw data and actionable intelligence. Currently specializing in full-stack architecture and applied AI.
          </p>
        </div>
        
        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-10 animate-reveal opacity-0" style={{ animationDelay: '0.8s' }}>
          <a
            href="#projects"
            className="w-full sm:w-auto px-10 py-4 bg-navy-900 dark:bg-accent-yellow text-white dark:text-navy-950 rounded-none font-black text-lg hover:scale-105 transition-all flex items-center justify-center gap-3 shadow-[8px_8px_0px_0px_#22C55E]"
          >
            VIEW PROJECTS
            <ArrowRight size={20} />
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto px-10 py-4 border-4 border-navy-900 dark:border-white text-navy-900 dark:text-white rounded-none font-black text-lg hover:bg-navy-900 hover:text-white dark:hover:bg-white dark:hover:text-navy-950 transition-all text-center"
          >
            CONTACT ME
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
