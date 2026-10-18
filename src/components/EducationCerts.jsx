import React from 'react';
import { Award, GraduationCap, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

export default function EducationCerts() {
  const { education, certifications } = portfolioData;

  return (
    <section id="education" className="py-20 md:py-24 bg-obsidian-900/40 border-y border-white/5 relative">
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
              Education &amp; Certifications
            </h2>
            <p className="text-lg text-zinc-400 font-normal">
              Academic qualifications and industry credentials in data engineering and intelligent systems.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            {/* Education Column */}
            <div className="space-y-6">
              <div className="flex items-center gap-2.5 pb-2 border-b border-white/10">
                <div className="w-8 h-8 rounded-lg bg-cyber-cyan/10 border border-cyber-cyan/30 flex items-center justify-center text-cyber-cyan">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  Academic Background
                </h3>
              </div>

              <div className="space-y-5">
                {education.map((edu, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    whileHover={{ y: -3, transition: { duration: 0.2 } }}
                    className="p-6 rounded-2xl bg-obsidian-850/80 border border-white/10 hover:border-cyber-cyan/40 hover:shadow-cyan-sm space-y-2.5 transition-all"
                  >
                    <div className="flex justify-between items-baseline gap-2">
                      <h4 className="text-base font-bold text-white">
                        {edu.degree}
                      </h4>
                      <span className="text-xs font-mono text-zinc-400 shrink-0">
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-sm font-medium text-cyber-cyan">
                      {edu.specialization}
                    </p>
                    <p className="text-sm text-zinc-400">
                      {edu.institution}
                    </p>
                    {edu.score && (
                      <p className="text-xs font-mono text-emerald-400 pt-1">
                        <code>{edu.score}</code>
                      </p>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Certifications Column - Dunesday Sand Gold Theme */}
            <div className="space-y-6">
              <div className="flex items-center gap-2.5 pb-2 border-b border-white/10">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-cyber-sand">
                  <Award className="w-4 h-4" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  Industry Certifications
                </h3>
              </div>

              <div className="space-y-4">
                {certifications.map((cert, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                    whileHover={{ y: -2, transition: { duration: 0.2 } }}
                    className="p-5 rounded-2xl bg-obsidian-850/80 border border-white/10 hover:border-amber-500/40 flex items-center justify-between gap-4 transition-all"
                  >
                    <div className="space-y-1">
                      <h4 className="text-base font-semibold text-zinc-100">
                        {cert.name}
                      </h4>
                      <p className="text-xs font-mono text-zinc-400">
                        {cert.issuer}
                      </p>
                    </div>
                    <span className="text-xs font-mono text-cyber-sand px-3 py-1 rounded-md bg-amber-950/30 border border-amber-500/20 shrink-0">
                      <code>{cert.year}</code>
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}