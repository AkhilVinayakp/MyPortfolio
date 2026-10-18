import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Credentials', href: '#credentials' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-argon-surface/90 backdrop-blur-md border-b border-argon-border shadow-argon-sm'
          : 'bg-argon-bg/80 backdrop-blur-sm border-b border-transparent'
      }`}
    >
      <nav
        className="section-container h-16 flex items-center justify-between"
        aria-label="Primary Navigation"
      >
        {/* Personal Wordmark */}
        <a
          href="#top"
          className="group flex items-center gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-argon-primary rounded-md"
        >
          <span className="w-8 h-8 rounded-lg bg-argon-dark text-white font-mono text-sm font-semibold flex items-center justify-center group-hover:bg-argon-primary transition-colors">
            AV
          </span>
          <div className="flex flex-col">
            <span className="font-semibold text-sm tracking-tight text-argon-dark leading-none">
              {portfolioData.identity.name}
            </span>
            <span className="font-mono text-[11px] text-argon-muted mt-0.5">
              Data &amp; AI/ML Engineer
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3 py-1.5 text-sm font-medium text-argon-muted hover:text-argon-dark rounded-md hover:bg-argon-subtle/70 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-argon-primary"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Resume Link / Action */}
        <div className="hidden md:flex items-center gap-3">
          {portfolioData.resumeConfig.isPublic ? (
            <a
              href={portfolioData.resumeConfig.publicPath}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono font-medium text-argon-dark bg-argon-surface border border-argon-border rounded-lg hover:border-argon-primary hover:text-argon-primary shadow-argon-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-argon-primary"
            >
              <FileText className="w-3.5 h-3.5" />
              Resume.pdf
              <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
            </a>
          ) : (
            <a
              href="#contact"
              title="Resume PDF held privately until verified for public release"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono font-medium text-argon-muted bg-argon-subtle border border-argon-border rounded-lg hover:text-argon-dark hover:border-slate-300 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-argon-primary"
            >
              <FileText className="w-3.5 h-3.5 text-argon-primary" />
              Request Resume
            </a>
          )}
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation-menu"
          aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          className="md:hidden p-2 rounded-lg text-argon-muted hover:text-argon-dark hover:bg-argon-subtle focus:outline-none focus-visible:ring-2 focus-visible:ring-argon-primary"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-menu"
          className="md:hidden bg-argon-surface border-b border-argon-border px-5 pt-2 pb-5 space-y-1 shadow-argon-md"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-sm font-medium text-argon-dark hover:bg-argon-subtle transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-3 mt-2 border-t border-argon-border">
            {portfolioData.resumeConfig.isPublic ? (
              <a
                href={portfolioData.resumeConfig.publicPath}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-mono font-medium text-white bg-argon-dark rounded-lg"
              >
                <FileText className="w-4 h-4" />
                Download Resume
              </a>
            ) : (
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-mono font-medium text-argon-dark bg-argon-subtle border border-argon-border rounded-lg"
              >
                <FileText className="w-4 h-4 text-argon-primary" />
                Resume (Verify to Publish)
              </a>
            )}
          </div>
        </div>
      )}
    </header>
  );
}