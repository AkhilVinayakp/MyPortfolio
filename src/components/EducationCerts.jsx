import React from 'react';
import { GraduationCap, Award } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function EducationCerts() {
  const { education, certifications } = portfolioData;

  return (
    <section id="credentials" className="py-20 md:py-24 border-b border-argon-border">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Education Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <span className="eyebrow-label">05 / Academic Foundation</span>
              <h2 className="text-2xl font-bold tracking-tight text-argon-dark flex items-center gap-2.5">
                <GraduationCap className="w-6 h-6 text-argon-primary" />
                Education
              </h2>
            </div>

            <div className="space-y-4">
              {education.map((edu) => (
                <div key={edu.degree} className="argon-card p-5 space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono text-argon-primary">
                    <span>{edu.period}</span>
                    <span className="px-2 py-0.5 rounded bg-indigo-50 font-semibold">
                      {edu.score}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-argon-dark">
                    {edu.degree}
                  </h3>
                  <p className="text-sm text-argon-muted">{edu.institution}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="eyebrow-label">06 / Verified Credentials</span>
              <h2 className="text-2xl font-bold tracking-tight text-argon-dark flex items-center gap-2.5">
                <Award className="w-6 h-6 text-argon-primary" />
                Certifications &amp; Specializations
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {certifications.map((cert) => (
                <div
                  key={cert.name}
                  className="argon-card argon-card-hover p-5 flex flex-col justify-between space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-semibold text-argon-primary bg-indigo-50 px-2.5 py-0.5 rounded">
                      {cert.year}
                    </span>
                    <span className="font-mono text-xs text-argon-muted">
                      Verified
                    </span>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-argon-dark leading-snug">
                      {cert.name}
                    </h3>
                    <p className="text-xs text-argon-muted mt-1">
                      {cert.issuer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}