import React, { useState, useEffect } from 'react';
import { motion, useReducedMotion, AnimatePresence } from 'framer-motion';
import {
  Cpu,
  Database,
  Layers,
  Activity,
  Zap,
  TrendingUp,
  Radio,
  CheckCircle2,
  RefreshCw,
  GitBranch,
} from 'lucide-react';

const SHAP_INITIAL_FEATURES = [
  { name: 'session_depth_idx', value: 0.428, direction: 'positive', label: 'Session Velocity' },
  { name: 'cluster_affinity_k3', value: 0.315, direction: 'positive', label: 'Cluster Affinity' },
  { name: 'recency_delta_days', value: -0.194, direction: 'negative', label: 'Recency Lag' },
  { name: 'feature_entropy_norm', value: 0.248, direction: 'positive', label: 'Variance Stability' },
  { name: 'null_rate_variance', value: -0.092, direction: 'negative', label: 'Data Quality Penalty' },
];

const LOG_EVENTS = [
  'Vertex AI: Worker pool initialized for distributed batch inference',
  'PySpark: Ingested & partitioned 42,500 streaming records from GCS',
  'dbt Vault: Hash key reconciliation verified (100.0% match in Silver)',
  'XGBoost: Scored feature payload · Tree depth: 6 · Loss: 0.0182',
  'SHAP Explainer: TreeExplainer attribution vector generated in 3.2ms',
  'BigQuery: Analytical query executed across clustered partition table',
  'Dataplex: Schema drift scanner report: 0.00% anomaly detected',
];

export default function AiMlHeroTelemetry() {
  const shouldReduceMotion = useReducedMotion();
  const [activeTab, setActiveTab] = useState('pipeline'); // 'pipeline' | 'shap' | 'clusters'
  const [activeStage, setActiveStage] = useState(0);
  const [shapFeatures, setShapFeatures] = useState(SHAP_INITIAL_FEATURES);
  const [inferenceScore, setInferenceScore] = useState(0.942);
  const [logIndex, setLogIndex] = useState(0);
  const [isSimulating, setIsSimulating] = useState(false);
  const [qpsRate, setQpsRate] = useState(482);
  const [p99Latency, setP99Latency] = useState(14.2);

  // Cycle pipeline stages continuously
  useEffect(() => {
    if (shouldReduceMotion) return;
    const stageInterval = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % 4);
    }, 2800);
    return () => clearInterval(stageInterval);
  }, [shouldReduceMotion]);

  // Cycle log telemetry
  useEffect(() => {
    const logInterval = setInterval(() => {
      setLogIndex((prev) => (prev + 1) % LOG_EVENTS.length);
    }, 3800);
    return () => clearInterval(logInterval);
  }, []);

  // Jitter live metrics for realism
  useEffect(() => {
    if (shouldReduceMotion) return;
    const metricInterval = setInterval(() => {
      setQpsRate(480 + Math.floor(Math.sin(Date.now() / 1500) * 14));
      setP99Latency(Number((14.0 + Math.sin(Date.now() / 2000) * 0.8).toFixed(1)));
    }, 2000);
    return () => clearInterval(metricInterval);
  }, [shouldReduceMotion]);

  // Interactive re-score simulation
  const triggerInference = () => {
    setIsSimulating(true);
    setTimeout(() => {
      setShapFeatures((prev) =>
        prev.map((f) => {
          const delta = (Math.random() - 0.5) * 0.08;
          const newVal = Math.min(Math.max(f.value + delta, f.direction === 'positive' ? 0.05 : -0.35), 0.6);
          return { ...f, value: Number(newVal.toFixed(3)) };
        })
      );
      setInferenceScore(Number((0.91 + Math.random() * 0.07).toFixed(3)));
      setIsSimulating(false);
    }, 400);
  };

  const pipelineStages = [
    {
      name: 'Bronze Streaming',
      tech: 'PySpark / GCS',
      stat: '+14.2k evt/s',
      color: 'border-cyber-cyan text-cyber-cyan',
      detail: 'Distributed ingestion and schema validation',
    },
    {
      name: 'Silver Data Vault',
      tech: 'dbt / Databricks',
      stat: 'Hash Reconciled',
      color: 'border-teal-400 text-teal-300',
      detail: 'Hubs, Links, and Satellite joins',
    },
    {
      name: 'Vertex AI Pipeline',
      tech: 'XGBoost / KFP',
      stat: '100 Trees · Depth 6',
      color: 'border-cyber-emerald text-cyber-emerald',
      detail: 'Interpretable model training & evaluation',
    },
    {
      name: 'Inference & SHAP',
      tech: 'REST / Cloud Run',
      stat: `p99: ${p99Latency}ms`,
      color: 'border-amber-400 text-amber-300',
      detail: 'Real-time scoring & local explanations',
    },
  ];

  return (
    <div className="w-full rounded-2xl bg-obsidian-900/90 border border-white/10 shadow-glass backdrop-blur-md overflow-hidden relative">
      {/* Top Ambient Cyber Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-12 -right-12 w-48 h-48 bg-cyber-cyan/15 rounded-full blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-12 -left-12 w-48 h-48 bg-cyber-emerald/15 rounded-full blur-3xl"
      />

      {/* Header Bar */}
      <div className="px-5 py-3.5 border-b border-white/10 flex flex-wrap items-center justify-between gap-3 bg-obsidian-950/70">
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyber-emerald opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyber-emerald" />
          </span>
          <span className="text-xs font-mono font-semibold tracking-wider text-zinc-200">
            VERTEX AI // MLOps TELEMETRY
          </span>
        </div>

        {/* Live metric chips */}
        <div className="flex items-center gap-2 text-[11px] font-mono text-zinc-400">
          <span className="px-2 py-0.5 rounded bg-cyber-cyan/10 border border-cyber-cyan/25 text-cyber-cyan">
            {qpsRate} QPS
          </span>
          <span className="px-2 py-0.5 rounded bg-cyber-emerald/10 border border-cyber-emerald/25 text-cyber-emerald">
            {p99Latency}ms p99
          </span>
        </div>
      </div>

      {/* View Switcher Tabs */}
      <div className="px-5 pt-3 pb-1 border-b border-white/5 flex items-center justify-between gap-2 overflow-x-auto bg-obsidian-900/50">
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={() => setActiveTab('pipeline')}
            className={`px-3 py-1.5 text-xs font-mono rounded-lg transition-all flex items-center gap-1.5 ${
              activeTab === 'pipeline'
                ? 'bg-cyber-cyan/15 text-cyber-cyan border border-cyber-cyan/30'
                : 'text-zinc-400 hover:text-zinc-200 hover:bg-white/5'
            }`}
          >
            <GitBranch className="w-3.5 h-3.5" />
            <span>Pipeline DAG</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('shap')}
            className={`px-3 py-1.5 text-xs font-mono rounded-lg transition-all flex items-center gap-1.5 ${
              activeTab === 'shap'
                ? 'bg-cyber-emerald/15 text-cyber-emerald border border-cyber-emerald/30'
                : 'text-zinc-400 hover:text-zinc-200 hover:bg-white/5'
            }`}
          >
            <TrendingUp className="w-3.5 h-3.5" />
            <span>SHAP Explainer</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('clusters')}
            className={`px-3 py-1.5 text-xs font-mono rounded-lg transition-all flex items-center gap-1.5 ${
              activeTab === 'clusters'
                ? 'bg-amber-400/15 text-amber-300 border border-amber-400/30'
                : 'text-zinc-400 hover:text-zinc-200 hover:bg-white/5'
            }`}
          >
            <Radio className="w-3.5 h-3.5" />
            <span>KMeans Clusters</span>
          </button>
        </div>

        {/* Pulse action button */}
        <button
          type="button"
          onClick={triggerInference}
          disabled={isSimulating}
          title="Simulate real-time prediction payload"
          className="px-2.5 py-1 text-[11px] font-mono rounded-md bg-white/5 border border-white/10 hover:border-cyber-cyan/40 hover:text-cyber-cyan text-zinc-300 transition-all flex items-center gap-1 shrink-0 active:scale-95"
        >
          <RefreshCw className={`w-3 h-3 ${isSimulating ? 'animate-spin text-cyber-cyan' : ''}`} />
          <span>Simulate</span>
        </button>
      </div>

      {/* Main Tab Content */}
      <div className="p-5 min-h-[290px] flex flex-col justify-between">
        <AnimatePresence mode="wait">
          {/* ================= TAB 1: PIPELINE DAG ================= */}
          {activeTab === 'pipeline' && (
            <motion.div
              key="pipeline"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="space-y-4"
            >
              <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
                <span className="flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-cyber-cyan" />
                  <span>Real-Time Medallion to ML Orchestration</span>
                </span>
                <span className="text-zinc-500">Continuous Ingestion</span>
              </div>

              {/* 4 Connected Pipeline Nodes */}
              <div className="grid grid-cols-2 gap-2.5">
                {pipelineStages.map((stage, idx) => {
                  const isActive = activeStage === idx;
                  return (
                    <motion.div
                      key={stage.name}
                      onClick={() => setActiveStage(idx)}
                      animate={{
                        scale: isActive ? 1.02 : 1,
                        borderColor: isActive ? 'rgba(0, 210, 255, 0.45)' : 'rgba(255, 255, 255, 0.08)',
                      }}
                      transition={{ duration: 0.2 }}
                      className={`p-3 rounded-xl bg-obsidian-850/80 border transition-all cursor-pointer relative overflow-hidden ${
                        isActive ? 'shadow-cyan-sm bg-obsidian-800' : 'hover:border-white/20'
                      }`}
                    >
                      {/* Active traveling pulse indicator */}
                      {isActive && (
                        <div
                          aria-hidden="true"
                          className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyber-cyan to-transparent animate-pulse"
                        />
                      )}

                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-[10px] font-mono uppercase text-zinc-400">
                          0{idx + 1} // {stage.tech}
                        </span>
                        {isActive && (
                          <span className="w-2 h-2 rounded-full bg-cyber-cyan animate-ping" />
                        )}
                      </div>

                      <div className="text-xs font-bold text-white tracking-tight">
                        {stage.name}
                      </div>

                      <div className="mt-1 flex items-center justify-between text-[11px] font-mono">
                        <span className="text-zinc-400">{stage.stat}</span>
                        <CheckCircle2
                          className={`w-3 h-3 ${isActive ? 'text-cyber-cyan' : 'text-zinc-600'}`}
                        />
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Selected Stage Detail Insight */}
              <div className="p-2.5 rounded-lg bg-obsidian-950/70 border border-white/5 flex items-center justify-between text-xs font-mono">
                <span className="text-zinc-400">
                  Active Context:{' '}
                  <span className="text-cyber-cyan">
                    {pipelineStages[activeStage].name}
                  </span>
                </span>
                <span className="text-zinc-500">
                  {pipelineStages[activeStage].detail}
                </span>
              </div>
            </motion.div>
          )}

          {/* ================= TAB 2: SHAP EXPLAINER ================= */}
          {activeTab === 'shap' && (
            <motion.div
              key="shap"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="space-y-3.5"
            >
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-zinc-300 flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-cyber-emerald" />
                  <span>XGBoost TreeExplainer Local Attribution</span>
                </span>
                <span className="px-2 py-0.5 rounded bg-cyber-emerald/15 text-cyber-emerald border border-cyber-emerald/30 font-semibold">
                  P(Class=1): {inferenceScore}
                </span>
              </div>

              {/* Dynamic SHAP Bars */}
              <div className="space-y-2 pt-1">
                {shapFeatures.map((feat) => {
                  const isPositive = feat.direction === 'positive';
                  const percent = Math.min(Math.abs(feat.value) * 160, 100);

                  return (
                    <div key={feat.name} className="space-y-1">
                      <div className="flex items-center justify-between text-[11px] font-mono">
                        <span className="text-zinc-300">{feat.label}</span>
                        <span
                          className={
                            isPositive
                              ? 'text-cyber-cyan font-semibold'
                              : 'text-cyber-emerald font-semibold'
                          }
                        >
                          {isPositive ? `+${feat.value}` : feat.value}
                        </span>
                      </div>

                      {/* Bar Track */}
                      <div className="h-1.5 w-full bg-obsidian-950 rounded-full overflow-hidden flex">
                        <motion.div
                          initial={false}
                          animate={{ width: `${percent}%` }}
                          transition={{ type: 'spring', stiffness: 220, damping: 20 }}
                          className={`h-full rounded-full ${
                            isPositive
                              ? 'bg-gradient-to-r from-cyan-500 to-cyber-cyan'
                              : 'bg-gradient-to-r from-emerald-500 to-cyber-emerald'
                          }`}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="flex items-center justify-between text-[11px] font-mono text-zinc-500 pt-1 border-t border-white/5">
                <span>Base Value: 0.512</span>
                <span className="text-zinc-400">Total Additive SHAP: +0.430</span>
              </div>
            </motion.div>
          )}

          {/* ================= TAB 3: KMEANS CLUSTERS ================= */}
          {activeTab === 'clusters' && (
            <motion.div
              key="clusters"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="space-y-3.5"
            >
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-zinc-300 flex items-center gap-1.5">
                  <Database className="w-3.5 h-3.5 text-amber-400" />
                  <span>KMeans Latent Cluster Profiles (k=3)</span>
                </span>
                <span className="text-zinc-500">Silhouette: 0.724</span>
              </div>

              {/* Cluster items */}
              <div className="space-y-2">
                {[
                  {
                    id: 'C-01',
                    name: 'High-Velocity Enterprise',
                    density: '44% of Volume',
                    color: 'text-cyber-cyan border-cyber-cyan/30 bg-cyber-cyan/10',
                    bar: 'w-[44%] bg-cyber-cyan',
                  },
                  {
                    id: 'C-02',
                    name: 'Balanced Streaming Pipelines',
                    density: '36% of Volume',
                    color: 'text-cyber-emerald border-cyber-emerald/30 bg-cyber-emerald/10',
                    bar: 'w-[36%] bg-cyber-emerald',
                  },
                  {
                    id: 'C-03',
                    name: 'Periodic Batch Workloads',
                    density: '20% of Volume',
                    color: 'text-amber-400 border-amber-400/30 bg-amber-400/10',
                    bar: 'w-[20%] bg-amber-400',
                  },
                ].map((cluster) => (
                  <div
                    key={cluster.id}
                    className="p-2.5 rounded-xl bg-obsidian-850/80 border border-white/10 space-y-1.5"
                  >
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-white font-medium flex items-center gap-2">
                        <span className={`px-1.5 py-0.5 rounded text-[10px] border ${cluster.color}`}>
                          {cluster.id}
                        </span>
                        <span>{cluster.name}</span>
                      </span>
                      <span className="text-zinc-400 text-[11px]">{cluster.density}</span>
                    </div>

                    <div className="h-1.5 w-full bg-obsidian-950 rounded-full overflow-hidden">
                      <div className={`h-full rounded-full ${cluster.bar}`} />
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-[11px] font-mono text-zinc-500 pt-1 text-center">
                Centroids optimized via PySpark MLlib on BigQuery feature vectors
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Live Running Log Ticker (Bottom of all tabs) */}
        <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono text-zinc-400 bg-obsidian-950/80 -mx-5 -mb-5 px-4 py-2.5">
          <div className="flex items-center gap-2 truncate">
            <Zap className="w-3.5 h-3.5 text-cyber-cyan shrink-0" />
            <AnimatePresence mode="wait">
              <motion.span
                key={logIndex}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.2 }}
                className="truncate text-[11px] text-zinc-300"
              >
                {LOG_EVENTS[logIndex]}
              </motion.span>
            </AnimatePresence>
          </div>
          <span className="text-[10px] text-zinc-500 shrink-0 font-mono ml-2">
            LIVE // 60fps
          </span>
        </div>
      </div>
    </div>
  );
}

