
import React from 'react';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

const Education: React.FC = () => {
  const certifications = [
    {
      title: "Google for Startups × Scaler",
      desc: "Startup School: Prompt to Prototype (Dec 2025)",
      icon: <Award className="text-white" size={20} />
    },
    {
      title: "IBM SkillBuild",
      desc: "AI & Professional Skills",
      icon: <Award className="text-white" size={20} />
    }
  ];

  return (
    <section id="education" className="scroll-mt-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-12">
          <div className="reveal-funky reveal-funky-left inline-block px-4 py-2 bg-navy-900 text-white dark:bg-white dark:text-navy-900 font-black italic border-r-8 border-accent-yellow">
            <h2 className="text-3xl uppercase tracking-tighter flex items-center gap-3">
              <GraduationCap />
              Education
            </h2>
          </div>
          <div className="p-10 bg-white dark:bg-navy-900 border-4 border-navy-900 dark:border-white shadow-[12px_12px_0px_0px_#22C55E]">
            <h3 className="text-2xl font-black uppercase tracking-tighter">Bachelor of Computer Applications (BCA)</h3>
            <p className="text-accent-green mt-1 font-black uppercase text-xs tracking-widest">Academic Foundation</p>
            <p className="text-slate-600 dark:text-slate-400 mt-6 leading-relaxed font-bold italic">
              "Focusing on computational logic, data structures, and the fundamentals of system design."
            </p>
          </div>
        </div>

        <div className="space-y-12">
          <div className="reveal-funky reveal-funky-right inline-block px-4 py-2 bg-navy-900 text-white dark:bg-white dark:text-navy-900 font-black italic border-r-8 border-accent-orange">
            <h2 className="text-3xl uppercase tracking-tighter flex items-center gap-3">
              <BookOpen />
              Certifications
            </h2>
          </div>
          <div className="space-y-6">
            {certifications.map((cert, i) => (
              <div key={i} className="flex gap-6 p-8 bg-white dark:bg-navy-900 border-4 border-navy-900 dark:border-white shadow-[8px_8px_0px_0px_#F97316] items-start transition-transform hover:-translate-y-1">
                <div className="p-3 bg-accent-orange border-2 border-navy-950 shrink-0">
                  {cert.icon}
                </div>
                <div>
                  <h3 className="text-xl font-black text-navy-900 dark:text-white uppercase tracking-tighter leading-tight">{cert.title}</h3>
                  <p className="text-xs text-slate-500 mt-2 font-bold tracking-widest uppercase">{cert.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
