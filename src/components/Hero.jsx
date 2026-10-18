import React from 'react';
import { ArrowRight, FileText, Github, Linkedin, Database, Cpu, Layers, ShieldCheck } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Hero() {
  const { identity, resumeConfig } = portfolioData;

  return (
    <section
      id="top"
      className="relative pt-12 pb-20 md:pt-20 md:pb-28 border-b border-argon-border overflow-hidden"
    >
      {/* Subtle architectural grid background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40"
      />

      <div className="section-container relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-start">
          {/* Left Column: Editorial Identity & Positioning (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-argon-surface border border-argon-border shadow-argon-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className="font-mono text-xs text-argon-muted">
                {identity.positioning}
              </span>
            </div>

            <div className="space-y-3">
              <p className="font-mono text-xs uppercase tracking-widest text-argon-primary font-semibold">
                {identity.name} · {identity.location}
              </p>
              <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-argon-dark leading-[1.12]">
                {identity.heroHeadline}
              </h1>
            </div>

            <p className="text-base sm:text-lg text-argon-muted leading-relaxed max-w-2xl">
              {identity.heroIntro}
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-argon-dark text-white text-sm font-medium hover:bg-argon-primary transition-colors shadow-argon-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-argon-primary"
              >
                View Projects
                <ArrowRight className="w-4 h-4" />
              </a>

              {resumeConfig.isPublic ? (
                <a
                  href={resumeConfig.publicPath}
                  download
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-argon-surface text-argon-dark border border-argon-border text-sm font-medium hover:border-argon-dark transition-colors shadow-argon-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-argon-primary"
                >
                  <FileText className="w-4 h-4 text-argon-primary" />
                  Download Resume
                </a>
              ) : (
                <a
                  href="#resume-status"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-argon-surface text-argon-dark border border-argon-border text-sm font-medium hover:border-slate-400 transition-colors shadow-argon-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-argon-primary"
                >
                  <FileText className="w-4 h-4 text-argon-primary" />
                  Download Resume (Pending Verification)
                </a>
              )}
            </div>

            {/* Verified Social Profiles */}
            <div className="pt-4 flex items-center gap-5 border-t border-argon-border/80 text-sm text-argon-muted">
              <a
                href={identity.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-argon-dark transition-colors font-mono text-xs"
              >
                <Github className="w-4 h-4" />
                github.com/AkhilVinayakp
              </a>
              <a
                href={identity.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-argon-dark transition-colors font-mono text-xs"
              >
                <Linkedin className="w-4 h-4 text-argon-primary" />
                linkedin.com/in/akhilvinayakp
              </a>
            </div>
          </div>

          {/* Right Column: Architectural System Blueprint & Optional Portrait Slot (5 cols) */}
          <div className="lg:col-span-5">
            <div className="argon-card p-6 space-y-5 bg-argon-surface/95 backdrop-blur-sm">
              <div className="flex items-center justify-between border-b border-argon-border pb-4">
                <div>
                  <span className="eyebrow-label">Engineering Profile</span>
                  <h2 className="text-base font-semibold text-argon-dark mt-0.5">
                    System Architecture Focus
                  </h2>
                </div>
                <span className="font-mono text-xs px-2.5 py-1 rounded bg-argon-subtle text-argon-dark font-medium">
                  {identity.experienceYears}
                </span>
              </div>

              {/* Architectural Layers Stack */}
              <div className="space-y-3">
                <div className="p-3.5 rounded-lg bg-argon-bg border border-argon-border/80 flex items-start gap-3.5">
                  <div className="p-2 rounded-md bg-indigo-50 text-argon-primary mt-0.5">
                    <Database className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-mono uppercase text-argon-muted">
                      Layer 01 · Data Foundation
                    </div>
                    <div className="text-sm font-semibold text-argon-dark mt-0.5">
                      Lakehouse &amp; Medallion ETL
                    </div>
                    <p className="text-xs text-argon-muted mt-1 leading-relaxed">
                      Databricks, BigQuery, PySpark, dbt (Data Vault), Snowflake &amp; Dataplex governance.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-lg bg-argon-bg border border-argon-border/80 flex items-start gap-3.5">
                  <div className="p-2 rounded-md bg-indigo-50 text-argon-primary mt-0.5">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-mono uppercase text-argon-muted">
                      Layer 02 · Machine Learning Systems
                    </div>
                    <div className="text-sm font-semibold text-argon-dark mt-0.5">
                      Explainable Modeling &amp; Evaluation
                    </div>
                    <p className="text-xs text-argon-muted mt-1 leading-relaxed">
                      XGBoost, KMeans segmentation, SHAP interpretability, Scikit-learn &amp; TensorFlow.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-lg bg-argon-bg border border-argon-border/80 flex items-start gap-3.5">
                  <div className="p-2 rounded-md bg-indigo-50 text-argon-primary mt-0.5">
                    <Layers className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-mono uppercase text-argon-muted">
                      Layer 03 · MLOps &amp; Applied AI
                    </div>
                    <div className="text-sm font-semibold text-argon-dark mt-0.5">
                      Production Pipelines &amp; RAG Agents
                    </div>
                    <p className="text-xs text-argon-muted mt-1 leading-relaxed">
                      Vertex AI Pipelines, MLflow, Kubeflow, Docker, and grounded Generative AI systems.
                    </p>
                  </div>
                </div>
              </div>

              {/* Verified Certifications Strip */}
              <div className="pt-2 border-t border-argon-border flex items-center justify-between text-xs text-argon-muted">
                <span className="inline-flex items-center gap-1.5 font-medium text-argon-dark">
                  <ShieldCheck className="w-4 h-4 text-argon-primary" />
                  Certified Practitioner
                </span>
                <span className="font-mono text-[11px]">
                  Databricks · SnowPro · DeepLearning.AI
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}