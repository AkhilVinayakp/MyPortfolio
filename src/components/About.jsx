import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const { about } = portfolioData;

  return (
    <section id="about" className="py-20 md:py-24 border-b border-argon-border">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Section Header (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <span className="eyebrow-label">01 / Narrative</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-argon-dark">
              From Reliable Data Pipelines to Production ML
            </h2>
            <p className="text-sm text-argon-muted leading-relaxed">
              Production machine learning is only as reliable as the data engineering underneath it.
            </p>
          </div>

          {/* Factual Story & Pillars (8 cols) */}
          <div className="lg:col-span-8 space-y-8">
            <div className="argon-card p-6 sm:p-8 space-y-4">
              <p className="text-base sm:text-lg font-medium text-argon-dark leading-relaxed">
                {about.summary}
              </p>
              {about.paragraphs.map((para, idx) => (
                <p key={idx} className="text-sm sm:text-base text-argon-muted leading-relaxed">
                  {para}
                </p>
              ))}
            </div>

            {/* 3 Core Engineering Pillars */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {about.corePillars.map((pillar, index) => (
                <div key={pillar.title} className="argon-card p-5 space-y-2">
                  <span className="font-mono text-xs text-argon-primary font-semibold">
                    0{index + 1}
                  </span>
                  <h3 className="text-sm font-semibold text-argon-dark">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-argon-muted leading-relaxed">
                    {pillar.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}