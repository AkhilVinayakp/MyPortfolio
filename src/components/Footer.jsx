import React from 'react';
import { ArrowUp, Terminal } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const { identity } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-14 bg-obsidian-950 border-t border-white/5">
      <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
        <div className="flex items-center gap-2">
          <Terminal className="w-3.5 h-3.5 text-cyber-cyan" />
          <span>&copy; {new Date().getFullYear()} {identity.name}. All systems operational.</span>
          <span className="hidden sm:inline mx-1 text-zinc-700">&middot;</span>
          <span className="hidden sm:inline text-zinc-600">React &middot; Vite &middot; Tailwind CSS</span>
        </div>

        <button
          type="button"
          onClick={scrollToTop}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-obsidian-900 border border-white/10 text-zinc-400 hover:text-cyber-cyan hover:border-cyber-cyan/40 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyber-cyan"
          aria-label="Scroll back to top"
        >
          <span>Return to Top</span>
          <ArrowUp className="w-3.5 h-3.5 text-cyber-cyan" />
        </button>
      </div>
    </footer>
  );
}