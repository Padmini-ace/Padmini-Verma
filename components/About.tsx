
import React, { useState, useEffect } from 'react';
import { Cpu, Globe, Database, Bot, Terminal as TerminalIcon } from 'lucide-react';

const About: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  const lines = [
    "// SYS_PROFILE: Padmini Verma",
    "I'm a BCA Enthusiast obsessed with building practical, high-stakes systems.",
    "I don't just write code; I architect solutions.",
    "",
    "\"The best solutions aren't the ones with the most lines of code,",
    "but the ones that understand the problem the deepest.\"",
    "",
    "My goal? Full-stack mastery where systems architecture",
    "and applied AI collide to solve real-world complexities."
  ];

  const fullText = lines.join('\n');

  useEffect(() => {
    let currentIdx = 0;
    const interval = setInterval(() => {
      setDisplayText(fullText.slice(0, currentIdx));
      currentIdx++;
      if (currentIdx > fullText.length) {
        clearInterval(interval);
        setIsTyping(false);
      }
    }, 25);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="scroll-mt-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* IDE Section */}
        <div className="space-y-8 relative">
          <div className="reveal-funky reveal-funky-left inline-block px-4 py-2 bg-navy-900 text-white dark:bg-white dark:text-navy-900 font-black skew-x-[-12deg] mb-4">
            <h2 className="text-3xl uppercase tracking-tighter skew-x-[12deg]">About Me</h2>
          </div>

          <div className="relative group w-full max-w-2xl">
            {/* IDE Window */}
            <div className="bg-navy-950 border-4 border-navy-900 dark:border-white shadow-[12px_12px_0px_0px_#22C55E] overflow-hidden rounded-none font-mono">
              {/* Toolbar */}
              <div className="bg-navy-900 dark:bg-slate-800 px-4 py-3 flex items-center justify-between border-b-2 border-navy-900 dark:border-slate-700">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500 border border-black/20"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500 border border-black/20"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500 border border-black/20"></div>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest">
                  <TerminalIcon size={14} className="text-accent-yellow" />
                  root@padmini: ~/about.ts
                </div>
              </div>

              {/* Editor Content */}
              <div className="p-6 md:p-8 flex gap-6 text-sm md:text-base leading-relaxed min-h-[400px]">
                {/* Line Numbers */}
                <div className="text-slate-600 text-right select-none pr-4 border-r border-slate-800 flex flex-col">
                  {Array.from({ length: 14 }).map((_, i) => (
                    <span key={i} className="block">{i + 1}</span>
                  ))}
                </div>

                {/* Code Area */}
                <div className="flex-1 whitespace-pre-wrap relative text-slate-300">
                  <span className="text-accent-green font-bold">
                    {displayText}
                  </span>
                  
                  {/* The Typing Bot / Cursor */}
                  {isTyping && (
                    <span className="inline-flex items-center ml-1">
                      <span className="w-2 h-5 bg-accent-yellow animate-pulse"></span>
                      <Bot size={20} className="ml-2 text-accent-yellow animate-bounce" />
                    </span>
                  )}
                  
                  {!isTyping && (
                    <span className="inline-block w-2 h-5 bg-accent-yellow animate-pulse ml-1"></span>
                  )}
                </div>
              </div>
            </div>

            {/* Techy floating label */}
            <div className="absolute -bottom-6 -right-6 px-4 py-2 bg-accent-orange text-white font-black text-xs uppercase tracking-widest shadow-lg rotate-3">
              LIVE_DATA_STREAM
            </div>
          </div>
        </div>
        
        {/* Right side card */}
        <div className="relative group">
          <div className="absolute inset-0 bg-accent-yellow rounded-2xl rotate-3 group-hover:rotate-6 transition-transform -z-10"></div>
          <div className="absolute inset-0 bg-navy-900 rounded-2xl -rotate-3 group-hover:-rotate-6 transition-transform -z-10"></div>
          
          <div className="bg-white dark:bg-navy-900 p-10 rounded-2xl border-4 border-navy-900 dark:border-white shadow-2xl space-y-8">
            <h3 className="text-2xl font-black uppercase tracking-tight">Core Mission</h3>
            <ul className="space-y-6">
              {[
                { icon: <Cpu className="text-accent-orange" />, title: "Systems Architecture", desc: "Building the backbone of reliable tech." },
                { icon: <Database className="text-accent-green" />, title: "Applied AI", desc: "Turning raw data into intelligent action." },
                { icon: <Globe className="text-accent-yellow" />, title: "Real-World Impact", desc: "Code that lives outside the sandbox." }
              ].map((item, i) => (
                <li key={i} className="flex gap-5">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-navy-100 dark:bg-slate-800 flex items-center justify-center border-2 border-navy-900 dark:border-white">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-black text-navy-900 dark:text-white uppercase tracking-tighter">{item.title}</h4>
                    <p className="text-sm text-slate-500 font-medium">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
