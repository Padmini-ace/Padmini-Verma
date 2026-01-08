
import React from 'react';
import { Mail, Linkedin, Github, ExternalLink, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="scroll-mt-32 py-20 px-4 sm:px-0">
      <div className="max-w-6xl mx-auto bg-navy-950 text-white rounded-none border-4 border-white overflow-hidden shadow-[12px_12px_0px_0px_#FACC15] md:shadow-[20px_20px_0px_0px_#FACC15] flex flex-col lg:flex-row relative">
        {/* Background Tech Image Elements */}
        <div className="absolute top-0 right-0 w-full h-full bg-grid-pattern opacity-10 pointer-events-none"></div>

        <div className="p-8 lg:p-20 lg:w-3/5 space-y-12 relative z-10">
          <div className="space-y-4">
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.85]">Let's Build<br/><span className="text-accent-yellow">Something Real.</span></h2>
            <p className="text-lg md:text-xl text-slate-400 font-bold max-w-md">
              Available for full-stack engineering and applied AI roles. I value clarity, speed, and robust architecture.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <a 
              href="https://www.linkedin.com/in/padmini-verma-657798324" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-6 group"
            >
              <div className="w-14 h-14 md:w-16 md:h-16 bg-white/10 border-2 border-white flex items-center justify-center group-hover:bg-accent-yellow group-hover:text-navy-950 transition-all rotate-3 group-hover:rotate-0">
                <Linkedin size={28} />
              </div>
              <div>
                <p className="text-[10px] md:text-xs text-slate-500 uppercase font-black tracking-widest">Network</p>
                <p className="text-base md:text-lg font-black group-hover:text-accent-yellow transition-colors italic uppercase">LinkedIn</p>
              </div>
            </a>

            <a 
              href="https://github.com/Padmini-ace" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-6 group"
            >
              <div className="w-14 h-14 md:w-16 md:h-16 bg-white/10 border-2 border-white flex items-center justify-center group-hover:bg-white group-hover:text-navy-950 transition-all -rotate-3 group-hover:rotate-0">
                <Github size={28} />
              </div>
              <div>
                <p className="text-[10px] md:text-xs text-slate-500 uppercase font-black tracking-widest">Source</p>
                <p className="text-base md:text-lg font-black group-hover:text-white transition-all italic uppercase">GitHub</p>
              </div>
            </a>
          </div>
        </div>

        <div className="bg-accent-orange p-8 lg:p-20 lg:w-2/5 flex flex-col justify-center items-start space-y-8 relative z-10">
          <div className="w-20 h-20 md:w-24 md:h-24 bg-navy-950 border-4 border-white flex items-center justify-center rotate-6 shadow-xl">
             <MessageCircle size={36} className="text-accent-yellow md:w-12 md:h-12" />
          </div>
          <div className="space-y-4">
            <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-white">Direct Access</h3>
            <p className="text-navy-950 font-bold text-base md:text-lg leading-tight uppercase">Ready to contribute to your next high-impact project.</p>
          </div>
          <a 
            href="https://www.linkedin.com/in/padmini-verma-657798324"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-5 bg-white text-navy-950 font-black text-lg md:text-xl uppercase tracking-tighter hover:scale-105 transition-all flex items-center justify-center gap-3 shadow-[8px_8px_0px_0px_#0F172A]"
          >
            Send a DM
            <ExternalLink size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
