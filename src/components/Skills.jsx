import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Skills() {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="py-20 md:py-24 border-b border-argon-border bg-argon-surface/50">
      <div className="section-container space-y-12">
        <div className="max-w-2xl space-y-3">
          <span className="eyebrow-label">04 / Technical Stack</span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-argon-dark">
            Curated Capabilities &amp; Tooling
          </h2>
          <p className="text-sm sm:text-base text-argon-muted">
            Organized by engineering domain rather than arbitrary percentage ratings. All technologies are verified from production experience and technical specialization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((group) => (
            <div
              key={group.category}
              className="argon-card p-6 flex flex-col justify-between space-y-5"
            >
              <div className="space-y-2">
                <h3 className="text-base font-bold text-argon-dark">
                  {group.category}
                </h3>
                <p className="text-xs text-argon-muted leading-relaxed">
                  {group.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-2 border-t border-argon-border">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 text-xs font-mono font-medium bg-argon-bg text-argon-dark border border-argon-border rounded-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}