import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, CheckCircle2, ChevronRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-20 md:py-24 relative">
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
              Work Experience
            </h2>
            <p className="text-lg text-zinc-400 font-normal">
              Chronological track record of data engineering and machine learning roles.
            </p>
          </motion.div>

          {/* Timeline list */}
          <div className="space-y-10">
            {experience.map((job, idx) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className="p-7 sm:p-8 rounded-2xl bg-obsidian-850/70 border border-white/10 hover:border-emerald-500/40 hover:shadow-emerald-sm space-y-6 transition-all"
              >
                {/* Header row: Role, Company, Period, Location */}
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 pb-2 border-b border-white/5">
                  <div>
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                      <span>{job.role}</span>
                      <span className="text-zinc-600 font-normal">&middot;</span>
                      <span className={job.current ? 'text-cyber-emerald text-glow-emerald' : 'text-cyber-cyan'}>
                        {job.company}
                      </span>
                    </h3>
                    <p className="text-xs font-mono text-zinc-400 mt-1">
                      {job.location}
                    </p>
                  </div>
                  <div className="text-xs font-mono text-zinc-400 sm:text-right mt-1 sm:mt-0 flex items-center gap-2">
                    {job.current && (
                      <span className="w-2 h-2 rounded-full bg-cyber-emeraldGlow animate-pulse" aria-hidden="true" />
                    )}
                    <span>{job.period}</span>
                  </div>
                </div>

                {/* Key Responsibilities */}
                <div className="space-y-3">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                    Key Responsibilities &amp; Systems
                  </h4>
                  <ul className="space-y-2.5 text-base text-zinc-300 leading-relaxed max-w-[65ch]">
                    {job.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <ChevronRight className="w-4 h-4 text-cyber-cyan shrink-0 mt-1" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Verified Accomplishments */}
                {job.verifiedAccomplishments?.length > 0 && (
                  <div className="p-4 rounded-xl bg-obsidian-900 border border-emerald-500/20 space-y-2 max-w-[65ch]">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-cyber-emerald flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Verified Accomplishments</span>
                    </h4>
                    <ul className="space-y-1.5 text-sm text-zinc-300 list-disc list-inside">
                      {job.verifiedAccomplishments.map((acc, i) => (
                        <li key={i}>{acc}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Technologies used */}
                <div className="pt-2 flex flex-wrap items-center gap-2">
                  {job.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm rounded-md bg-obsidian-950 border border-white/5 text-zinc-300 font-mono hover:border-cyber-cyan/30 hover:text-cyber-cyan transition-colors"
                    >
                      <code>{tech}</code>
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}