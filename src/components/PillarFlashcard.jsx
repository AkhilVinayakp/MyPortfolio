import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { RotateCw, RotateCcw, CheckCircle2, Layers, Sparkles, ArrowRight } from 'lucide-react';

export default function PillarFlashcard({ pillar, icon: IconComponent, idx }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const handleToggle = () => {
    setIsFlipped((prev) => !prev);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setIsFlipped((prev) => !prev);
    }
  };

  return (
    <div
      className="relative min-h-[410px] w-full [perspective:1200px] select-none group"
      role="button"
      tabIndex={0}
      aria-label={`Interactive flashcard for ${pillar.title}. Press Enter or Space to ${isFlipped ? 'flip to front' : 'inspect architecture blueprint'}.`}
      aria-expanded={isFlipped}
      onClick={handleToggle}
      onKeyDown={handleKeyDown}
    >
      <motion.div
        className="relative w-full h-full min-h-[410px] rounded-2xl [transform-style:preserve-3d] transition-shadow duration-300 focus-visible:ring-2 focus-visible:ring-cyber-cyan focus-visible:outline-none"
        animate={{
          rotateY: isFlipped ? 180 : 0,
          scale: isFlipped ? [1, 0.98, 1] : 1,
        }}
        whileHover={shouldReduceMotion ? {} : { y: -6, scale: 1.01 }}
        transition={
          shouldReduceMotion
            ? { duration: 0.1 }
            : {
                rotateY: { type: 'spring', stiffness: 180, damping: 20 },
                scale: { duration: 0.3 },
                y: { duration: 0.2 },
              }
        }
      >
        {/* ==================== FRONT FACE ==================== */}
        <div
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
          }}
          className={`absolute inset-0 p-7 rounded-2xl bg-obsidian-850/90 border border-white/10 hover:border-cyber-cyan/50 hover:shadow-cyan-sm flex flex-col justify-between transition-colors duration-300 backdrop-blur-sm ${
            !isFlipped ? 'pointer-events-auto' : 'pointer-events-none'
          }`}
        >
          {/* Subtle decorative corner accent */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-0 right-0 w-28 h-28 bg-radial-cyber opacity-20 rounded-tr-2xl"
          />

          <div className="space-y-4 relative z-10">
            {/* Top Tag & Status */}
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono px-2.5 py-1 rounded bg-cyber-cyan/10 border border-cyber-cyan/30 text-cyber-cyan flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyber-cyan animate-pulse" />
                {pillar.tag}
              </span>
              <span className="text-xs font-mono text-zinc-500 tracking-wider">
                PILLAR // 0{idx + 1}
              </span>
            </div>

            {/* Icon & Title */}
            <div className="flex items-start gap-3.5 pt-2">
              <div className="w-11 h-11 rounded-xl bg-cyber-cyan/10 border border-cyber-cyan/25 flex items-center justify-center text-cyber-cyan shrink-0 shadow-cyan-sm group-hover:scale-105 transition-transform duration-200">
                <IconComponent className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-white tracking-tight leading-snug">
                {pillar.title}
              </h4>
            </div>

            {/* High-level Description */}
            <p className="text-sm text-zinc-300 leading-relaxed pt-1">
              {pillar.detail}
            </p>
          </div>

          {/* Bottom Stack Chips & Flip Trigger */}
          <div className="space-y-4 pt-5 border-t border-white/5 relative z-10">
            <div>
              <p className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 mb-2">
                Core Stack
              </p>
              <div className="flex flex-wrap gap-1.5">
                {pillar.stack?.slice(0, 5).map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 text-xs rounded bg-obsidian-950/80 border border-white/10 text-zinc-300 font-mono"
                  >
                    <code>{tech}</code>
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between pt-1">
              <span className="text-xs font-mono text-cyber-cyan/90 group-hover:text-cyber-cyan flex items-center gap-1.5 transition-colors">
                <span>Inspect Architecture Specs</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="w-7 h-7 rounded-lg bg-cyber-cyan/10 border border-cyber-cyan/20 flex items-center justify-center text-cyber-cyan group-hover:rotate-180 transition-transform duration-500">
                <RotateCw className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>
        </div>

        {/* ==================== BACK FACE ==================== */}
        <div
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
          className={`absolute inset-0 p-7 rounded-2xl bg-obsidian-900/95 border border-cyber-emerald/50 shadow-emerald-sm flex flex-col justify-between backdrop-blur-md ${
            isFlipped ? 'pointer-events-auto' : 'pointer-events-none'
          }`}
        >
          {/* Subtle blueprint grid glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-0 left-0 w-full h-full bg-radial-emerald opacity-15 rounded-2xl"
          />

          <div className="space-y-4 relative z-10">
            {/* Top Telemetry Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="text-xs font-mono text-cyber-emerald flex items-center gap-1.5 font-semibold">
                <Layers className="w-3.5 h-3.5 text-cyber-emerald" />
                <span>ARCHITECTURAL BLUEPRINT</span>
              </span>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-cyber-emerald/10 text-cyber-emerald border border-cyber-emerald/20">
                VERIFIED SPEC
              </span>
            </div>

            <div>
              <h4 className="text-base font-bold text-white tracking-tight">
                {pillar.title}
              </h4>
              <p className="text-xs text-zinc-400 font-mono mt-0.5">
                Production Implementation Patterns
              </p>
            </div>

            {/* Detailed Mechanisms */}
            <ul className="space-y-2.5 text-xs text-zinc-200">
              {pillar.mechanisms?.map((mech, mIdx) => (
                <li key={mIdx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyber-emerald shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{mech}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Bottom Flip Back button */}
          <div className="pt-4 border-t border-white/10 flex items-center justify-between relative z-10">
            <span className="text-xs font-mono text-zinc-400">
              Click or Space to flip back
            </span>
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyber-emerald/15 border border-cyber-emerald/30 text-cyber-emerald text-xs font-mono hover:bg-cyber-emerald/25 transition-colors">
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Back to Overview</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
