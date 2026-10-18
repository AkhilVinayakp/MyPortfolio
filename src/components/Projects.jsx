import React, { useState } from 'react';
import { Github, ExternalLink, AlertCircle, GitBranch } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const categories = [
  'All',
  'Data Engineering Pipelines',
  'Machine Learning Workflows',
  'MLOps & Deployment',
  'RAG & AI Applications',
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects =
    activeCategory === 'All'
      ? portfolioData.projects
      : portfolioData.projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 md:py-24 border-b border-argon-border">
      <div className="section-container space-y-10">
        {/* Section Heading & Placeholder Transparency Banner */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-3">
            <span className="eyebrow-label">03 / Case Studies &amp; Systems</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-argon-dark">
              Selected Engineering Projects
            </h2>
            <p className="text-sm sm:text-base text-argon-muted">
              Architectural case studies structured across Data Engineering, Machine Learning, MLOps, and RAG systems.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div
            className="flex flex-wrap gap-1.5"
            role="tablist"
            aria-label="Filter projects by domain"
          >
            {categories.map((cat) => {
              const active = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-argon-primary ${
                    active
                      ? 'bg-argon-dark text-white shadow-argon-sm'
                      : 'bg-argon-surface text-argon-muted border border-argon-border hover:text-argon-dark'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Author Note on Uninvented Project Details */}
        <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200/90 flex items-start gap-3 text-xs sm:text-sm text-amber-900">
          <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold">Content Integrity Notice: </span>
            Your resume lists enterprise work under CGI, Infosys, and Turbolab Technologies without standalone project titles or public repository URLs. The cards below provide complete case-study layouts with explicit{' '}
            <code className="font-mono bg-amber-100 px-1.5 py-0.5 rounded text-xs">
              [PLACEHOLDER]
            </code>{' '}
            markers in <code className="font-mono">src/data/portfolioData.js</code> so you can supply verified project names, metrics, and GitHub links.
          </div>
        </div>

        {/* Case Study Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="argon-card argon-card-hover flex flex-col justify-between p-6 sm:p-7"
            >
              <div className="space-y-5">
                {/* Top Meta Bar */}
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-xs font-medium text-argon-primary bg-indigo-50 px-2.5 py-1 rounded">
                    {project.category}
                  </span>
                  {project.isPlaceholder && (
                    <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-amber-100/80 text-amber-800 border border-amber-300">
                      Template Slot
                    </span>
                  )}
                </div>

                {/* Title & Subtitle */}
                <div>
                  <h3 className="text-lg font-bold text-argon-dark leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-xs text-argon-muted mt-1">
                    {project.subtitle}
                  </p>
                </div>

                {/* Architecture Flow Strip */}
                {project.architectureNote && (
                  <div className="p-3 rounded-lg bg-argon-bg border border-argon-border font-mono text-xs text-argon-dark flex items-center gap-2 overflow-x-auto">
                    <GitBranch className="w-4 h-4 text-argon-primary shrink-0" />
                    <span className="whitespace-nowrap">{project.architectureNote}</span>
                  </div>
                )}

                {/* Case Study Details */}
                <dl className="space-y-3 text-xs sm:text-sm">
                  <div>
                    <dt className="font-mono text-[11px] uppercase tracking-wider text-argon-muted">
                      Problem Statement
                    </dt>
                    <dd className="text-argon-muted mt-0.5 leading-relaxed">
                      {project.problem}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[11px] uppercase tracking-wider text-argon-muted">
                      Solution &amp; Architecture
                    </dt>
                    <dd className="text-argon-dark mt-0.5 leading-relaxed">
                      {project.solution}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[11px] uppercase tracking-wider text-argon-muted">
                      My Contribution
                    </dt>
                    <dd className="text-argon-muted mt-0.5 leading-relaxed">
                      {project.contribution}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[11px] uppercase tracking-wider text-argon-muted">
                      Verified Results
                    </dt>
                    <dd className="text-argon-dark font-medium mt-0.5 leading-relaxed">
                      {project.verifiedResults}
                    </dd>
                  </div>
                </dl>
              </div>

              {/* Footer: Tech Tags & Links */}
              <div className="pt-6 mt-6 border-t border-argon-border space-y-4">
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-mono bg-argon-subtle text-argon-dark rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 text-xs font-mono">
                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-argon-dark hover:text-argon-primary"
                    >
                      <Github className="w-4 h-4" />
                      Source Repository
                    </a>
                  ) : (
                    <span className="text-argon-muted italic">
                      [Supply GitHub URL in portfolioData.js]
                    </span>
                  )}

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-argon-dark hover:text-argon-primary"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}