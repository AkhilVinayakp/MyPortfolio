import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const { projects } = portfolioData;

  const categories = ['All', 'Data Engineering', 'Machine Learning', 'MLOps', 'AI Systems'];

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 md:py-24 bg-obsidian-900/40 border-y border-white/5 relative">
      <div className="section-container">
        <div className="max-w-4xl space-y-12">
          {/* Section Heading & Category Filter Tabs */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <div className="space-y-3">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                Selected Case Studies
              </h2>
              <p className="text-lg text-zinc-400 font-normal">
                Architectural deep-dives across data pipelines, cloud platforms, and production ML systems.
              </p>
            </div>

            {/* Dunesday Cyber Category Filter Tabs */}
            <div
              className="flex flex-wrap gap-1.5 p-1.5 rounded-xl bg-obsidian-850 border border-white/10"
              role="tablist"
              aria-label="Filter projects by discipline"
            >
              {categories.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3.5 py-1.5 text-xs sm:text-sm font-mono rounded-lg transition-all active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyber-cyan ${
                      isActive
                        ? 'bg-gradient-to-r from-cyan-400 to-emerald-400 text-obsidian-950 font-bold shadow-cyan-sm'
                        : 'text-zinc-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Project List */}
          <div className="space-y-12">
            <AnimatePresence mode="wait">
              {filteredProjects.map((project, idx) => (
                <motion.article
                  key={project.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="p-8 sm:p-10 rounded-2xl bg-obsidian-850/80 border border-white/10 hover:border-cyber-cyan/40 hover:shadow-cyan-sm space-y-7 transition-all"
                >
                  {/* Header: Title, Category & Subtitle */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="inline-block text-xs font-mono px-2.5 py-1 rounded bg-cyber-cyan/10 border border-cyber-cyan/30 text-cyber-cyan">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-base text-zinc-400 font-normal max-w-[65ch]">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Technologies tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs sm:text-sm rounded-md bg-obsidian-900 border border-white/10 text-zinc-200 font-mono"
                      >
                        <code>{tech}</code>
                      </span>
                    ))}
                  </div>

                  {/* Overview */}
                  <p className="text-base text-zinc-300 leading-relaxed max-w-[65ch]">
                    {project.overview}
                  </p>

                  {/* Architecture Steps Flow Diagram */}
                  {project.architectureSteps && (
                    <div className="p-5 rounded-xl bg-obsidian-900/90 border border-white/5 space-y-4">
                      <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cyber-cyan">
                        <Layers className="w-4 h-4 text-cyber-cyan" />
                        <span>Pipeline Architecture &amp; Data Flow</span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 relative">
                        {project.architectureSteps.map((step, sIdx) => (
                          <div
                            key={sIdx}
                            className="p-4 rounded-xl bg-obsidian-850 border border-white/10 space-y-1.5 hover:border-cyber-cyan/30 transition-colors"
                          >
                            <div className="text-xs font-mono font-semibold text-cyber-emerald flex items-center justify-between">
                              <code>{step.label}</code>
                              <span className="text-[10px] text-zinc-500 font-mono">Stage {sIdx + 1}</span>
                            </div>
                            <div className="text-xs sm:text-sm text-zinc-400 leading-normal">
                              {step.desc}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Key Takeaways */}
                  <div className="space-y-2.5">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                      Key Engineering Highlights
                    </h4>
                    <ul className="space-y-2 text-base text-zinc-300 max-w-[65ch]">
                      {project.keyTakeaways.map((point, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-4 h-4 text-cyber-emerald shrink-0 mt-1" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}