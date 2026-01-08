
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-16 border-t-8 border-navy-900 dark:border-white mt-40 bg-slate-50 dark:bg-navy-900 overflow-hidden relative">
       {/* Background accent */}
      <div className="absolute top-0 right-0 w-32 h-full bg-accent-yellow opacity-20 -skew-x-12 translate-x-16"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-10 relative z-10">
        <div className="flex flex-col items-center md:items-start gap-2">
           <div className="font-black text-3xl tracking-tighter uppercase italic">Padmini Verma</div>
           <p className="text-slate-500 dark:text-slate-400 text-xs font-black uppercase tracking-[0.3em]">
            © {new Date().getFullYear()} ENGINEERED_PORTFOLIO_v1.0
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8 text-xs font-black uppercase tracking-widest text-navy-900 dark:text-white">
          <span className="px-2 py-1 bg-accent-green text-white">System Thinking</span>
          <span className="px-2 py-1 bg-accent-orange text-white">Applied AI</span>
          <span className="px-2 py-1 bg-accent-yellow text-navy-950">Grounded Dev</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
