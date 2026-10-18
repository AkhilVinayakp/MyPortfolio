import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { identity } = portfolioData;

  return (
    <footer className="py-8 border-t border-argon-border bg-argon-bg">
      <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-argon-muted">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-argon-dark">{identity.name}</span>
          <span>·</span>
          <span>Built for reliability, clarity, and scale.</span>
        </div>

        <div className="flex items-center gap-5 font-mono">
          <a
            href={identity.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-argon-dark transition-colors"
          >
            GitHub
          </a>
          <a
            href={identity.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-argon-dark transition-colors"
          >
            LinkedIn
          </a>
          <span>© {currentYear}</span>
        </div>
      </div>
    </footer>
  );
}