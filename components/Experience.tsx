
import React from 'react';
import { EXPERIENCES } from '../constants';
import { Calendar, MapPin, Building2 } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="scroll-mt-32">
      <div className="max-w-4xl mx-auto space-y-16">
        <div className="text-center space-y-4 reveal-funky reveal-funky-left">
          <div className="inline-block px-4 py-2 bg-accent-green text-white font-black italic skew-x-[-10deg]">
             <h2 className="text-4xl uppercase tracking-tighter skew-x-[10deg]">Experience Log</h2>
          </div>
          <p className="text-slate-500 font-black uppercase text-xs tracking-[0.4em]">Career_Timeline_01</p>
        </div>

        <div className="space-y-12 relative before:absolute before:left-0 md:before:left-1/2 before:w-1 before:h-full before:bg-navy-900 dark:before:bg-white before:-translate-x-1/2">
          {EXPERIENCES.map((exp, index) => (
            <div key={index} className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              {/* Dot */}
              <div className="absolute left-0 md:left-1/2 w-6 h-6 bg-accent-yellow border-4 border-navy-900 dark:border-white -translate-x-1/2 top-0 z-10 hidden md:block"></div>

              <div className="md:w-1/2 space-y-4">
                <div className="p-8 bg-white dark:bg-navy-900 rounded-none border-4 border-navy-900 dark:border-white shadow-[8px_8px_0px_0px_#F97316]">
                  <div className="flex items-center gap-2 text-accent-orange font-black text-xs uppercase tracking-widest mb-2">
                    <Building2 size={16} />
                    {exp.company}
                  </div>
                  <h3 className="text-2xl font-black text-navy-900 dark:text-white uppercase tracking-tighter">{exp.role}</h3>
                  
                  <div className="flex flex-wrap gap-4 mt-3 mb-6 text-xs font-bold text-slate-400 uppercase">
                    <div className="flex items-center gap-1.5 border-r border-slate-300 dark:border-slate-700 pr-4">
                      <Calendar size={14} className="text-accent-yellow" />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin size={14} className="text-accent-yellow" />
                      {exp.location}
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {exp.points.map((point, i) => (
                      <li key={i} className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed flex gap-3 font-medium">
                        <span className="text-accent-green font-black text-lg leading-none mt-0.5">»</span>
                        {point}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map(skill => (
                      <span key={skill} className="px-3 py-1 bg-navy-900 text-white dark:bg-white dark:text-navy-900 text-[10px] uppercase font-black tracking-widest">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
