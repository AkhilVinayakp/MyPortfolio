import React, { useState } from 'react';
import { Mail, Linkedin, ArrowUpRight, Copy, Check, Radio } from 'lucide-react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const { identity } = portfolioData;

  const copyEmail = () => {
    if (!identity.contactEmail) return;
    navigator.clipboard.writeText(identity.contactEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl space-y-12"
        >
          {/* Section Heading */}
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-cyber-cyan uppercase tracking-wider">
              <Radio className="w-3.5 h-3.5 animate-pulse" />
              <span>Communication Subsystem</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Get in Touch
            </h2>
            <p className="text-lg text-zinc-400 font-normal max-w-[65ch]">
              Interested in discussing data engineering systems, production ML workflows, or technical opportunities?
            </p>
          </div>

          {/* Contact Methods */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Primary LinkedIn connection */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="p-8 rounded-2xl bg-obsidian-850/80 border border-white/10 hover:border-cyber-cyan/50 hover:shadow-cyan-glow space-y-5 transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-cyber-cyan/10 border border-cyber-cyan/30 flex items-center justify-center text-cyber-cyan">
                  <Linkedin className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">
                  Connect on LinkedIn
                </h3>
              </div>
              <p className="text-base text-zinc-300 leading-relaxed">
                The fastest channel for direct messaging, career discussions, and professional engineering collaborations.
              </p>
              <a
                href={identity.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-400 to-emerald-400 text-obsidian-950 text-sm font-bold hover:shadow-cyan-sm active:scale-[0.98] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyber-cyan"
              >
                Open LinkedIn Profile
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </motion.div>

            {/* Direct Email with Copy option */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="p-8 rounded-2xl bg-obsidian-850/80 border border-white/10 hover:border-emerald-500/50 hover:shadow-emerald-glow space-y-5 transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-cyber-emerald">
                  <Mail className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">
                  Direct Email
                </h3>
              </div>
              <p className="text-base text-zinc-300 leading-relaxed">
                Send an email directly for technical questions, architecture reviews, or detailed resume requests.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={`mailto:${identity.contactEmail}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-obsidian-900 border border-white/10 text-white text-sm font-medium hover:border-emerald-500/40 hover:text-cyber-emerald active:scale-[0.98] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyber-emerald"
                >
                  Send Email
                </a>

                <button
                  type="button"
                  onClick={copyEmail}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-obsidian-900 border border-white/10 text-zinc-300 hover:text-white hover:border-white/20 text-sm font-mono transition-all active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyber-emerald"
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-cyber-emeraldGlow" />
                      <span className="text-cyber-emeraldGlow text-glow-emerald">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-zinc-400" />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>
              </div>
            </motion.div>
          </div>

          {/* Location and response telemetry notes */}
          <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between text-xs font-mono text-zinc-500 gap-2 border-t border-white/5">
            <span>Location: {identity.location}</span>
            <span>Transmission SLA: Within 24–48 hours</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}