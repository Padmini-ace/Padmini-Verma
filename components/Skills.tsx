
import React from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  const colors = ['bg-accent-yellow', 'bg-accent-orange', 'bg-accent-green', 'bg-white dark:bg-slate-800'];
  const textColors = ['text-navy-950', 'text-white', 'text-white', 'text-navy-950 dark:text-white'];
  const borderColors = ['border-navy-900', 'border-navy-900', 'border-navy-900', 'border-navy-900 dark:border-white'];

  return (
    <section id="skills" className="scroll-mt-32">
      <div className="space-y-16">
        <div className="text-center space-y-4 reveal-funky reveal-funky-right px-4">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none">My Toolkit</h2>
          <div className="h-2 w-24 md:w-32 bg-accent-orange mx-auto"></div>
          <p className="mt-4 text-slate-600 dark:text-slate-400 font-bold max-w-lg mx-auto">Hard skills forged in the heat of real projects.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SKILLS.map((group, idx) => (
            <div 
              key={group.category}
              className={`p-8 ${colors[idx % colors.length]} ${textColors[idx % textColors.length]} border-4 ${borderColors[idx % borderColors.length]} shadow-[8px_8px_0px_0px_#0F172A] md:shadow-[12px_12px_0px_0px_#0F172A] dark:shadow-[8px_8px_0px_0px_#FFFFFF] md:dark:shadow-[12px_12px_0px_0px_#FFFFFF] transition-transform hover:-translate-y-2`}
            >
              <h3 className="text-lg font-black uppercase tracking-widest mb-6 underline decoration-2 underline-offset-8">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span 
                    key={item}
                    className="px-3 py-1 bg-navy-950/10 dark:bg-white/10 border-2 border-navy-900/20 dark:border-white/20 text-xs font-black uppercase tracking-wider"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
