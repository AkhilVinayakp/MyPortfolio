import React, { useState } from 'react';
import { Github, Linkedin, Menu, X, Terminal } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { identity } = portfolioData;

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-obsidian-950/80 backdrop-blur-md border-b border-white/5 overflow-x-clip">
      <div className="section-container flex items-center justify-between h-20">
        {/* Identity wordmark */}
        <a
          href="#top"
          className="group flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyber-cyan rounded-md"
        >
          <div className="w-9 h-9 rounded-xl bg-obsidian-850 border border-white/10 flex items-center justify-center text-cyber-cyan group-hover:border-cyber-cyan/50 group-hover:shadow-cyan-sm transition-all">
            <Terminal className="w-4 h-4" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-zinc-100 text-base tracking-tight group-hover:text-cyber-cyan transition-colors">
              {identity.name}
            </span>
            <span className="text-xs text-zinc-400 font-mono">
              Data &amp; ML Engineer
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-zinc-400" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-cyber-cyan transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyber-cyan rounded-sm"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* External Social Profiles & Availability Status */}
        <div className="hidden lg:flex items-center gap-4">
          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/30 shadow-emerald-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-cyber-emeraldGlow animate-pulse" aria-hidden="true" />
            <span>Telemetry: Online</span>
          </div>

          <a
            href={identity.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-zinc-400 hover:text-cyber-cyan hover:bg-white/5 transition-all rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyber-cyan"
            aria-label="GitHub Profile"
          >
            <Github className="w-5 h-5" />
          </a>

          <a
            href={identity.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-zinc-400 hover:text-cyber-cyan hover:bg-white/5 transition-all rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyber-cyan"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2.5 text-zinc-300 hover:text-white rounded-lg hover:bg-white/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyber-cyan"
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-obsidian-900 border-b border-white/10 px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-3 text-base font-medium text-zinc-300" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-cyber-cyan transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-4 border-t border-white/5 flex items-center justify-between">
            <span className="text-xs font-mono text-zinc-500">Bangalore / Kerala, India</span>
            <div className="flex items-center gap-3">
              <a
                href={identity.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-cyber-cyan"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={identity.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-cyber-cyan"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}