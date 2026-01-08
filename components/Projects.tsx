
import React from 'react';
import { PROJECTS } from '../constants';
import { Code, Layers, ShieldCheck, Target, AlertTriangle, ArrowUpRight } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="scroll-mt-32">
      <div className="space-y-24">
        <div className="text-center space-y-6 reveal-funky reveal-funky-right px-4">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">Case Studies</h2>
          <div className="h-3 w-32 md:w-48 bg-accent-green mx-auto"></div>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-bold">
            Deep dives into systems thinking and experimental AI application.
          </p>
        </div>

        <div className="space-y-40">
          {PROJECTS.map((project, index) => (
            <div key={project.id} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start px-4 sm:px-0">
              {/* Header Info */}
              <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-24">
                <div className="space-y-4">
                  <div className="inline-block px-3 py-1 bg-accent-orange text-white font-black text-xs uppercase tracking-widest italic">
                    PROJECT_LOG_0{index + 1}
                  </div>
                  <h3 className="text-4xl md:text-5xl font-black text-navy-900 dark:text-white leading-[0.9] tracking-tighter">
                    {project.title.toUpperCase()}
                  </h3>
                  <p className="text-lg md:text-xl text-accent-orange dark:text-accent-yellow font-black uppercase">
                    {project.subtitle}
                  </p>
                </div>

                {project.context && (
                  <div className="p-6 bg-navy-900 text-white dark:bg-white dark:text-navy-900 font-bold border-l-[12px] border-accent-green flex gap-4">
                    <Target size={24} className="shrink-0 text-accent-yellow" />
                    <span className="text-sm uppercase tracking-tight leading-snug">{project.context}</span>
                  </div>
                )}

                <div className="space-y-4">
                  <h4 className="font-black flex items-center gap-2 uppercase text-sm tracking-widest text-slate-400">
                    <Code size={16} />
                    SYSTEM_STACK
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {project.techStack.map(tech => (
                      <span key={tech} className="px-4 py-2 bg-slate-100 dark:bg-navy-900 border-2 border-navy-900 dark:border-white text-navy-900 dark:text-white text-xs font-black uppercase shadow-[4px_4px_0px_0px_#22C55E]">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-8 bg-white dark:bg-navy-900 border-4 border-navy-900 dark:border-white shadow-[12px_12px_0px_0px_#FACC15]">
                  <h4 className="font-black mb-4 flex items-center gap-2 text-navy-900 dark:text-white uppercase tracking-tighter text-xl underline decoration-4 decoration-accent-green">
                    <ShieldCheck size={20} />
                    LEAD ROLE
                  </h4>
                  <ul className="space-y-3">
                    {project.role.points.map((point, i) => (
                      <li key={i} className="text-sm text-slate-700 dark:text-slate-300 font-bold leading-relaxed flex gap-3">
                        <ArrowUpRight size={14} className="text-accent-orange shrink-0 mt-1" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Detailed Content */}
              <div className="lg:col-span-7 space-y-16">
                <section className="space-y-6">
                  <h4 className="text-2xl font-black uppercase tracking-tighter border-b-4 border-navy-900 dark:border-white pb-2 inline-block">Architecture Overview</h4>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-xl md:text-2xl font-medium">
                    {project.overview}
                  </p>
                </section>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <section className="space-y-6 p-8 bg-accent-orange/5 border-2 border-accent-orange/20 rounded-none relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-100 transition-opacity">
                      <AlertTriangle size={48} className="text-accent-orange" />
                    </div>
                    <h4 className="text-xs font-black text-accent-orange uppercase tracking-[0.2em] border-b border-accent-orange pb-2">CRITICAL_CHALLENGES</h4>
                    <ul className="space-y-4">
                      {project.problem.map((p, i) => (
                        <li key={i} className="text-sm font-bold text-slate-600 dark:text-slate-400 flex gap-3">
                          <span className="text-accent-orange font-black">!</span>
                          {p}
                        </li>
                      ))}
                    </ul>
                  </section>
                  <section className="space-y-6 p-8 bg-accent-green/5 border-2 border-accent-green/20 rounded-none relative overflow-hidden group">
                     <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-100 transition-opacity">
                      <Target size={48} className="text-accent-green" />
                    </div>
                    <h4 className="text-xs font-black text-accent-green uppercase tracking-[0.2em] border-b border-accent-green pb-2">ENGINEERED_SOLUTIONS</h4>
                    <ul className="space-y-4">
                      {project.solution.map((s, i) => (
                        <li key={i} className="text-sm font-bold text-slate-600 dark:text-slate-400 flex gap-3">
                          <span className="text-accent-green font-black">✔</span>
                          {s}
                        </li>
                      ))}
                    </ul>
                  </section>
                </div>

                <section className="space-y-8">
                  <h4 className="text-2xl font-black uppercase tracking-tighter flex items-center gap-3">
                    <Layers size={24} className="text-accent-yellow" />
                    Strategic Design Decisions
                  </h4>
                  <div className="grid grid-cols-1 gap-6">
                    {project.decisions.map((dec, i) => (
                      <div key={i} className="p-6 bg-navy-900 text-white dark:bg-white dark:text-navy-900 font-black text-lg md:text-xl italic skew-x-[-4deg] border-r-8 border-accent-yellow shadow-xl">
                        <span className="skew-x-[4deg] inline-block uppercase">"{dec}"</span>
                      </div>
                    ))}
                  </div>
                </section>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
                   <section className="p-8 border-4 border-dashed border-slate-300 dark:border-slate-700 space-y-4">
                    <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest">
                      SYSTEM_LIMITATIONS
                    </h4>
                    <ul className="space-y-3">
                      {project.limitations.map((lim, i) => (
                        <li key={i} className="text-xs font-bold text-slate-500 uppercase tracking-tight flex gap-3">
                          <span className="w-1.5 h-1.5 bg-slate-400 rounded-full shrink-0 mt-1"></span>
                          {lim}
                        </li>
                      ))}
                    </ul>
                  </section>
                  <section className="p-8 bg-accent-yellow text-navy-950 flex flex-col justify-center border-4 border-navy-900 shadow-[8px_8px_0px_0px_#0F172A]">
                    <h4 className="text-xs font-black uppercase tracking-widest mb-3 border-b-2 border-navy-950 pb-1 inline-block">MISSION_SUCCESS</h4>
                    <p className="text-lg font-black leading-tight uppercase tracking-tighter">
                      {project.outcome}
                    </p>
                  </section>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
