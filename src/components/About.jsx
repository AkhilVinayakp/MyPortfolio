import React from 'react';
import { motion } from 'framer-motion';
import { Database, Cloud, Cpu } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

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
          className="max-w-4xl space-y-12"
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

          {/* Focus Areas - Sleek dark glass panels with subtle hover glow */}
          <div className="pt-6 space-y-6">
            <h3 className="text-xl font-semibold text-white tracking-tight">
              Focus Areas &amp; Architectural Strengths
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {about.corePillars.map((pillar, idx) => {
                const IconComponent = pillarIcons[idx % pillarIcons.length];
                return (
                  <motion.div
                    key={pillar.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                    className="p-6 rounded-2xl bg-obsidian-850/80 border border-white/10 hover:border-cyber-cyan/40 hover:shadow-cyan-sm space-y-3 transition-all"
                  >
                    <div className="w-9 h-9 rounded-lg bg-cyber-cyan/10 border border-cyber-cyan/20 flex items-center justify-center text-cyber-cyan">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <h4 className="text-base font-semibold text-white">
                      {pillar.title}
                    </h4>
                    <p className="text-sm text-zinc-400 leading-relaxed">
                      {pillar.detail}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}