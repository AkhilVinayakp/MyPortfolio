import React from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import AiMlHeroTelemetry from './AiMlHeroTelemetry';

export default function Hero() {
  const { identity } = portfolioData;

  const coreStack = [
    { name: 'Python', role: 'Runtime' },
    { name: 'SQL', role: 'Analytics' },
    { name: 'PySpark', role: 'Distributed' },
    { name: 'GCP', role: 'Cloud' },
    { name: 'Databricks', role: 'Lakehouse' },
    { name: 'BigQuery', role: 'Warehouse' },
    { name: 'Vertex AI', role: 'MLOps' },
    { name: 'dbt', role: 'Data Vault' },
  ];

  return (
    <section id="top" className="relative pt-14 pb-20 md:pt-24 md:pb-28 overflow-hidden">
      {/* Ambient background glow from dunesday */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[560px] bg-gradient-to-b from-cyan-500/10 via-emerald-500/5 to-transparent blur-3xl opacity-70 -z-10"
      />

      <div className="section-container relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Headlines, Bio, CTAs, Stack Chips */}
          <div className="lg:col-span-7 space-y-8">
            {/* Status telemetry pill */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-obsidian-900/90 border border-white/10 text-xs font-mono text-zinc-400 shadow-glass"
            >
              <span className="w-2 h-2 rounded-full bg-cyber-cyan animate-pulse" aria-hidden="true" />
              <span>4.5+ Years Production Experience &middot; Bangalore / Kerala</span>
            </motion.div>

            {/* Main Display Headline - strictly 2 lines with dual cyan-emerald gradient text */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-6xl xl:text-7xl font-bold tracking-tight text-white leading-[1.08]"
            >
              Data Platforms &amp;{' '}
              <span className="bg-gradient-to-r from-cyber-cyan via-teal-300 to-cyber-emerald bg-clip-text text-transparent">
                Production ML
              </span>
            </motion.h1>

            {/* Intro statement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-4 max-w-[56ch]"
            >
              <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-normal">
                {identity.heroIntro}
              </p>
            </motion.div>

            {/* Primary & Secondary Call to Actions with dunesday glow feedback */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="pt-1 flex flex-wrap items-center gap-3.5"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-emerald-400 text-obsidian-950 text-sm sm:text-base font-bold hover:shadow-cyan-glow active:scale-[0.98] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyber-cyan"
              >
                Explore Case Studies
                <ArrowRight className="w-4 h-4 text-obsidian-950" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl bg-obsidian-850/90 text-zinc-100 border border-white/10 text-sm sm:text-base font-medium hover:border-cyber-cyan/50 hover:text-cyber-cyan active:scale-[0.98] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyber-cyan shadow-glass"
              >
                Get in Touch
              </a>

              <a
                href={identity.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-2 text-sm sm:text-base font-medium text-zinc-400 hover:text-cyber-cyan transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyber-cyan rounded-md"
              >
                LinkedIn Profile
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </motion.div>

            {/* Focus stack chips with subtle floating animation */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="pt-2"
            >
              <p className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-2.5">
                Core Architecture &amp; Platform Stack
              </p>
              <div className="flex flex-wrap gap-2">
                {coreStack.map((tech, idx) => (
                  <span
                    key={tech.name}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs sm:text-sm rounded-lg bg-obsidian-900 border border-white/10 text-zinc-200 font-mono hover:border-cyber-cyan/40 hover:text-cyber-cyan transition-colors animate-float"
                    style={{ animationDelay: `${idx * 0.4}s` }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-cyber-cyan/60" aria-hidden="true" />
                    <code>{tech.name}</code>
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column: AI / ML Engineering Running Telemetry */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 w-full flex justify-center"
          >
            <AiMlHeroTelemetry />
          </motion.div>
        </div>
      </div>
    </section>
  );
}