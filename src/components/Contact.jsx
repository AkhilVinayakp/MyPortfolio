import React from 'react';
import { Mail, Github, Linkedin, FileCheck2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  const { identity, resumeConfig } = portfolioData;
  const isEmailPlaceholder = identity.email.includes('[PLACEHOLDER');

  return (
    <section id="contact" className="py-20 md:py-24 bg-argon-surface">
      <div className="section-container">
        <div className="argon-card p-8 sm:p-12 bg-argon-bg border-argon-border">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="eyebrow-label">07 / Next Steps</span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-argon-dark">
                Open to Data Engineering, AI/ML &amp; MLOps Opportunities
              </h2>
              <p className="text-sm sm:text-base text-argon-muted leading-relaxed max-w-xl">
                Whether you are scaling lakehouse architectures on Databricks and GCP, or moving machine learning and RAG workflows into reliable production, I would be glad to discuss how I can contribute to your engineering team.
              </p>

              {/* Resume Gate Notice */}
              <div
                id="resume-status"
                className="p-4 rounded-lg bg-argon-surface border border-argon-border flex items-start gap-3 text-xs text-argon-muted"
              >
                <FileCheck2 className="w-4 h-4 text-argon-primary shrink-0 mt-0.5" />
                <span>{resumeConfig.statusNote}</span>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-3">
              {/* Email Card */}
              <div className="argon-card p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-indigo-50 text-argon-primary">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-argon-muted">Email Address</div>
                    {isEmailPlaceholder ? (
                      <span className="text-xs font-mono text-amber-700">
                        {identity.email}
                      </span>
                    ) : (
                      <a
                        href={`mailto:${identity.email}`}
                        className="text-sm font-semibold text-argon-dark hover:text-argon-primary"
                      >
                        {identity.email}
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* GitHub Card */}
              <a
                href={identity.github}
                target="_blank"
                rel="noopener noreferrer"
                className="argon-card argon-card-hover p-4 flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-argon-subtle text-argon-dark group-hover:bg-argon-dark group-hover:text-white transition-colors">
                    <Github className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-argon-muted">GitHub Profile</div>
                    <div className="text-sm font-semibold text-argon-dark">
                      github.com/AkhilVinayakp
                    </div>
                  </div>
                </div>
                <span className="font-mono text-xs text-argon-primary">View →</span>
              </a>

              {/* LinkedIn Card */}
              <a
                href={identity.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="argon-card argon-card-hover p-4 flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-indigo-50 text-argon-primary group-hover:bg-argon-primary group-hover:text-white transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-argon-muted">LinkedIn</div>
                    <div className="text-sm font-semibold text-argon-dark">
                      linkedin.com/in/akhilvinayakp
                    </div>
                  </div>
                </div>
                <span className="font-mono text-xs text-argon-primary">Connect →</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}