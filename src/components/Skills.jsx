import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Terminal, Database, Layers, ShieldCheck } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Skills() {
  const { skills } = portfolioData;

  const categoryIcons = [Terminal, Database, Layers, Cpu, ShieldCheck];

  return (
    <section id="skills" className="py-20 md:py-24 relative">
      <div className="section-container">
        <div className="max-w-4xl space-y-14">
          {/* Section Heading */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-3"
          >
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Technical Competencies
            </h2>
            <p className="text-lg text-zinc-400 font-normal">
              Applied tools, frameworks, and cloud services across data and machine learning engineering.
            </p>
          </motion.div>

          {/* Categorized Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((group, idx) => {
              const IconComp = categoryIcons[idx % categoryIcons.length];
              return (
                <motion.div
                  key={group.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                  className="p-7 rounded-2xl bg-obsidian-850/80 border border-white/10 hover:border-cyber-cyan/40 hover:shadow-cyan-sm space-y-5 transition-all"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-cyber-cyan/10 border border-cyber-cyan/20 flex items-center justify-center text-cyber-cyan">
                      <IconComp className="w-4 h-4" />
                    </div>
                    <h3 className="text-lg font-bold text-white">
                      {group.category}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {group.items.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 text-xs sm:text-sm rounded-lg bg-obsidian-900 border border-white/5 text-zinc-300 font-mono hover:border-cyber-cyan/40 hover:text-cyber-cyan hover:shadow-cyan-sm transition-all cursor-default"
                      >
                        <code>{skill}</code>
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}