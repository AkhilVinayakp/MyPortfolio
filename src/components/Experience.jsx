import React from 'react';
import { Briefcase, CheckCircle2, MapPin, Calendar } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-20 md:py-24 border-b border-argon-border bg-argon-surface/50">
      <div className="section-container space-y-12">
        {/* Header */}
        <div className="max-w-2xl space-y-3">
          <span className="eyebrow-label">02 / Career History</span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-argon-dark">
            Professional Experience
          </h2>
          <p className="text-sm sm:text-base text-argon-muted">
            Verified engineering roles across enterprise data platforms, telecom machine learning workflows, and scalable Python ETL systems.
          </p>
        </div>

        {/* Experience Timeline List */}
        <div className="space-y-8">
          {experience.map((job) => (
            <article
              key={job.id}
              className="argon-card argon-card-hover p-6 sm:p-8 transition-all"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
                {/* Left Metadata Column (4 cols) */}
                <div className="lg:col-span-4 space-y-3 border-b lg:border-b-0 lg:border-r border-argon-border pb-5 lg:pb-0 lg:pr-6">
                  <div className="flex items-center justify-between lg:justify-start gap-2">
                    <span className="inline-flex items-center gap-1.5 font-mono text-xs font-medium text-argon-primary bg-indigo-50 px-2.5 py-1 rounded-md">
                      <Calendar className="w-3.5 h-3.5" />
                      {job.period}
                    </span>
                    {job.current && (
                      <span className="font-mono text-[11px] uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                        Current
                      </span>
                    )}
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-argon-dark">
                      {job.role}
                    </h3>
                    <div className="flex items-center gap-2 text-sm font-medium text-argon-muted mt-0.5">
                      <Briefcase className="w-4 h-4 text-argon-primary shrink-0" />
                      <span>{job.company}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-argon-muted mt-1">
                      <MapPin className="w-3.5 h-3.5 shrink-0" />
                      <span>{job.location}</span>
                    </div>
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="pt-2">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-argon-muted mb-2">
                      Technologies Used
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {job.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-xs font-mono bg-argon-bg text-argon-dark border border-argon-border rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Responsibilities & Verified Accomplishments (8 cols) */}
                <div className="lg:col-span-8 space-y-5">
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-argon-muted mb-3">
                      Core Responsibilities
                    </h4>
                    <ul className="space-y-2.5">
                      {job.responsibilities.map((item, idx) => (
                        <li
                          key={idx}
                          className="text-sm text-argon-muted leading-relaxed flex items-start gap-2.5"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-argon-primary mt-2 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {job.verifiedAccomplishments && job.verifiedAccomplishments.length > 0 && (
                    <div className="p-4 rounded-lg bg-argon-bg border border-argon-border space-y-2">
                      <div className="text-xs font-mono uppercase tracking-wider text-argon-dark font-semibold flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-argon-primary" />
                        Verified Key Impact
                      </div>
                      <ul className="space-y-1.5">
                        {job.verifiedAccomplishments.map((acc, idx) => (
                          <li key={idx} className="text-xs sm:text-sm text-argon-dark leading-relaxed">
                            • {acc}
                          </li>
                        ))}
                      </ul>
                    </div>
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