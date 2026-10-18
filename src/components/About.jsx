import React from 'react';
import { motion } from 'framer-motion';
import { Database, Cloud, Cpu, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import PillarFlashcard from './PillarFlashcard';

export default function About() {
  const { about } = portfolioData;

  const pillarIcons = [Database, Cloud, Cpu];

  return (
    <section id="about" className="py-20 md:py-24 bg-obsidian-900/50 border-y border-white/5 relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="max-w-5xl lg:max-w-6xl space-y-12"
        >
          {/* Section Heading */}
          <div className="space-y-3">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Engineering Background
            </h2>
            <p className="text-lg text-zinc-400 leading-relaxed font-normal max-w-[65ch]">
              {about.summary}
            </p>
          </div>

          {/* Narrative paragraphs */}
          <div className="space-y-6 text-base text-zinc-300 leading-relaxed max-w-[65ch]">
            {about.paragraphs.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>

          {/* Focus Areas - Interactive 3D Architecture Flashcards */}
          <div className="pt-6 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <h3 className="text-xl font-semibold text-white tracking-tight">
                Focus Areas &amp; Architectural Strengths
              </h3>
              <span className="text-xs font-mono text-cyber-cyan/80 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-cyber-cyan" />
                <span>Interactive Flashcards &middot; Click to inspect blueprints</span>
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {about.corePillars.map((pillar, idx) => {
                const IconComponent = pillarIcons[idx % pillarIcons.length];
                return (
                  <PillarFlashcard
                    key={pillar.id || pillar.title}
                    pillar={pillar}
                    icon={IconComponent}
                    idx={idx}
                  />
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}