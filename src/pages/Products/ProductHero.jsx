import { useState } from "react";
import {
  Activity,
  Boxes,
  Brain,
  Database,
  Eye,
  Shield,
  Workflow,
  Zap,
} from "lucide-react";
import { useConsultation } from "../../contexts/ConsultationContext";

/** Interactive preview tabs for the hero product card */
const PREVIEW_TABS = [
  {
    id: "health",
    label: "System Health",
    icon: Activity,
    metrics: [
      { label: "Uptime", value: "99.98%", tone: "good" },
      { label: "Latency", value: "42ms", tone: "good" },
      { label: "Error Rate", value: "0.02%", tone: "good" },
      { label: "Regions", value: "4 Active", tone: "neutral" },
    ],
  },
  {
    id: "workflows",
    label: "Workflows",
    icon: Workflow,
    metrics: [
      { label: "Active Jobs", value: "1.2M / mo", tone: "good" },
      { label: "Queued", value: "128", tone: "neutral" },
      { label: "Success", value: "99.4%", tone: "good" },
      { label: "Avg Cycle", value: "2.1s", tone: "neutral" },
    ],
  },
  {
    id: "modules",
    label: "Modules",
    icon: Boxes,
    metrics: [
      { label: "AI / ML", value: "Predictive", icon: Brain },
      { label: "Workflow", value: "Event Core", icon: Zap },
      { label: "Data", value: "Zero-Loss", icon: Database },
      { label: "Identity", value: "Edge Layer", icon: Eye },
    ],
  },
];

/**
 * Products page hero — premium B2B SaaS layout.
 * Left: value proposition + CTAs (≈60%)
 * Right: interactive glassmorphism product preview (≈40%)
 */
const ProductHero = () => {
  const { openConsultation } = useConsultation();
  const [activeTab, setActiveTab] = useState(PREVIEW_TABS[0].id);

  const currentTab =
    PREVIEW_TABS.find((tab) => tab.id === activeTab) ?? PREVIEW_TABS[0];

  return (
    <section
      className="relative overflow-hidden bg-[#090D16] pt-20 pb-12 sm:pt-24 sm:pb-14 md:pt-28 md:pb-16 lg:pb-14"
      aria-labelledby="products-hero-heading"
    >
      {/* Background mesh / radial glow */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-indigo-600/25 blur-[100px]" />
        <div className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-amber-500/15 blur-[110px]" />
        <div className="absolute bottom-0 left-1/3 h-56 w-56 rounded-full bg-blue-500/20 blur-[90px]" />
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      <div className="relative container mx-auto max-w-6xl px-4 xl:max-w-7xl 2xl:max-w-[90rem] 2xl:px-8">
        {/* Asymmetric 60 / 40 grid */}
        <div className="grid items-center gap-10 lg:grid-cols-[1.35fr_1fr] lg:gap-12 xl:gap-16">
          {/* ── Left: content ── */}
          <div className="order-1 min-w-0 max-w-2xl lg:max-w-none">
            {/* Glow pill badge */}
            <p className="mb-5 inline-flex items-center gap-1.5 rounded-full border border-amber-400/40 bg-amber-400/10 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-amber-300 shadow-[0_0_20px_rgba(251,191,36,0.18)]">
              <span aria-hidden="true">🚀</span>
              Next-Gen Ecosystem
            </p>

            <h1
              id="products-hero-heading"
              className="text-3xl font-bold leading-[1.12] tracking-tight text-white sm:text-4xl md:text-[2.65rem] xl:text-5xl"
            >
              Accelerate Innovation With{" "}
              <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-orange-400 bg-clip-text text-transparent">
                Enterprise-Grade Products
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-300 md:text-lg">
              Scalable, reliable platforms engineered for speed—AI automation,
              data integration, and identity infrastructure built for modern
              enterprise operations.
            </p>

            {/* CTA group */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#product-grid"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 px-6 py-3 text-sm font-semibold text-[#090D16] shadow-[0_10px_30px_rgba(251,146,60,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_36px_rgba(251,146,60,0.38)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400 md:text-base"
              >
                Explore Products
                <span
                  className="transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  →
                </span>
              </a>

              <button
                type="button"
                onClick={openConsultation}
                className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/[0.03] px-6 py-3 text-sm font-medium text-white backdrop-blur-sm transition-all duration-300 hover:border-indigo-400/50 hover:bg-indigo-500/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400 md:text-base"
              >
                Book a Demo
              </button>
            </div>

            {/* Trust micro-line */}
            <p className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-400">
              <span className="inline-flex items-center gap-1.5">
                <Shield className="h-3.5 w-3.5 text-indigo-400" aria-hidden="true" />
                Enterprise-ready
              </span>
              <span className="hidden text-slate-600 sm:inline" aria-hidden="true">
                ·
              </span>
              <span>AI · Automation · Data · Identity</span>
            </p>
          </div>

          {/* ── Right: interactive glass card ── */}
          <div className="order-2 min-w-0 w-full">
            <div className="relative mx-auto w-full max-w-md lg:max-w-none">
              {/* Soft glow behind card */}
              <div
                className="pointer-events-none absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-indigo-500/20 via-transparent to-amber-400/15 blur-2xl"
                aria-hidden="true"
              />

              <article
                className="relative overflow-hidden rounded-2xl border border-white/15 bg-slate-950/60 shadow-[0_24px_60px_rgba(0,0,0,0.45)] backdrop-blur-md"
                aria-label="Live product platform preview"
              >
                {/* Gradient border sheen */}
                <div
                  className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-400/60 to-transparent"
                  aria-hidden="true"
                />

                {/* Card header */}
                <header className="flex items-center justify-between gap-3 border-b border-white/10 px-4 py-3.5 sm:px-5">
                  <div>
                    <p className="text-sm font-semibold text-white">
                      Platform Pulse
                    </p>
                    <p className="mt-0.5 text-xs text-slate-400">
                      Live enterprise operations snapshot
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-1">
                    <span className="relative flex h-2 w-2" aria-hidden="true">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-40" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                    </span>
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-emerald-300">
                      Live
                    </span>
                  </div>
                </header>

                {/* Micro-tabs */}
                <div
                  role="tablist"
                  aria-label="Preview metrics"
                  className="flex gap-1 border-b border-white/10 px-2 pt-2 sm:px-3"
                >
                  {PREVIEW_TABS.map((tab) => {
                    const Icon = tab.icon;
                    const selected = activeTab === tab.id;
                    return (
                      <button
                        key={tab.id}
                        type="button"
                        role="tab"
                        aria-selected={selected}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex flex-1 items-center justify-center gap-1.5 rounded-t-lg px-2 py-2.5 text-[11px] font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400 sm:text-xs ${
                          selected
                            ? "border-b-2 border-amber-400 bg-white/[0.04] text-amber-300"
                            : "border-b-2 border-transparent text-slate-400 hover:text-slate-200"
                        }`}
                      >
                        <Icon className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                        <span className="truncate">{tab.label}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Tab panel */}
                <div
                  role="tabpanel"
                  className="grid grid-cols-2 gap-2.5 p-4 sm:gap-3 sm:p-5"
                >
                  {currentTab.metrics.map((metric) => {
                    const MetricIcon = metric.icon;
                    return (
                      <div
                        key={metric.label}
                        className="rounded-xl border border-white/10 bg-white/[0.03] p-3 transition-colors duration-200 hover:border-amber-400/35 hover:bg-white/[0.05] sm:p-3.5"
                      >
                        {MetricIcon ? (
                          <MetricIcon
                            className="mb-2 h-4 w-4 text-amber-400"
                            aria-hidden="true"
                          />
                        ) : (
                          <span
                            className={`mb-2 inline-block h-1.5 w-1.5 rounded-full ${
                              metric.tone === "good"
                                ? "bg-emerald-400"
                                : "bg-indigo-400"
                            }`}
                            aria-hidden="true"
                          />
                        )}
                        <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-400">
                          {metric.label}
                        </p>
                        <p className="mt-1 text-sm font-semibold text-white sm:text-[15px]">
                          {metric.value}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>

      {/* Soft blend into page body */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-14 bg-gradient-to-b from-transparent to-black"
        aria-hidden="true"
      />
    </section>
  );
};

export default ProductHero;
