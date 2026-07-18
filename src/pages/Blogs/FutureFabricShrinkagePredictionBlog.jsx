import { useEffect, useRef, useState, memo } from "react";
import { Link } from "react-router-dom";
import {
  Calendar,
  User,
  Clock,
  ArrowLeft,
  Share2,
  Tag,
  TrendingUp,
  DollarSign,
  FlaskConical,
  Leaf,
  Globe2,
  Users,
  Cpu,
  Eye,
  LineChart,
  Boxes,
  Wifi,
  Factory,
  CheckCircle2,
  ChevronDown,
  ArrowRight,
  Quote,
  Sparkles,
  ClipboardList,
  Database,
  ShieldCheck,
  Rocket,
  BarChart3,
  Brain,
  ScanEye,
  Layers3,
  Cloud,
  Zap,
  Building2,
  Package,
  Award,
  Target,
  AlertCircle,
} from "lucide-react";
import SEO from "../../components/SEO";
import { seoData } from "../../utils/seoData";
import { useConsultation } from "../../contexts/ConsultationContext";

/* ============================================================
   STATIC CONTENT
   ============================================================ */

const TOC_SECTIONS = [
  {
    id: "why-traditional-limits",
    label: "Why Traditional Control Is Reaching Its Limits",
  },
  { id: "global-shift", label: "The Global Shift Toward AI" },
  {
    id: "why-ai-revolutionizes",
    label: "Why AI Will Revolutionize Prediction",
  },
  { id: "industry-research", label: "Industry Research & Market Insights" },
  { id: "key-drivers", label: "Key Drivers Behind AI Adoption" },
  { id: "strategic-roadmap", label: "How Leaders Are Preparing" },
  { id: "emerging-tech", label: "Emerging Technologies" },
  { id: "future-outlook", label: "Future Outlook" },
  { id: "business-leaders", label: "What This Means for Business Leaders" },
  { id: "key-takeaways", label: "Key Takeaways" },
];

const CHALLENGE_CARDS = [
  {
    icon: Package,
    title: "Material Waste",
    text: "Fabric that fails shrinkage tests cannot be sold at full value, converting raw material cost directly into loss.",
  },
  {
    icon: DollarSign,
    title: "Production Cost",
    text: "Every rework cycle consumes additional dyeing, finishing, labor, and machine time that cannot always be passed on.",
  },
  {
    icon: FlaskConical,
    title: "Manual Testing",
    text: "Lab testing is slow and sample-based. By the time results arrive, the window for correction has often closed.",
  },
  {
    icon: Globe2,
    title: "Export Quality",
    text: "Meeting international tolerances is non-negotiable. Shrinkage rejections close doors to premium markets.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    text: "Buyers and regulators demand lower waste and environmental impact — shrinkage failures work directly against both.",
  },
  {
    icon: Users,
    title: "Customer Expectations",
    text: "Buyers demand predictable, consistent quality. A single out-of-spec shipment can end a long-term relationship.",
  },
];

const HIDDEN_COSTS = [
  {
    area: "Material Waste",
    impact: "Fabric that fails shrinkage tests cannot be sold at full value",
  },
  {
    area: "Rework Labor",
    impact: "Additional processing consumes time and wages",
  },
  {
    area: "Machine Time",
    impact: "Rework occupies capacity that could be used for new orders",
  },
  {
    area: "Customer Returns",
    impact: "Rejected shipments damage relationships and revenue",
  },
  {
    area: "Brand Reputation",
    impact: "Inconsistent quality erodes trust over time",
  },
];

const TREND_CARDS = [
  {
    icon: Factory,
    title: "Industry 4.0",
    text: "Textiles transitioning from labor-intensive methods to AI-driven smart manufacturing.",
  },
  {
    icon: ScanEye,
    title: "Computer Vision",
    text: "AI-enabled vision systems catch defects at the source, reducing rework and boosting OEE.",
  },
  {
    icon: LineChart,
    title: "Predictive Analytics",
    text: "ML optimizes procurement forecasts and enables sharper demand prediction in real time.",
  },
  {
    icon: Layers3,
    title: "Digital Twins",
    text: "Virtual production simulations let manufacturers optimize outcomes before physical runs.",
  },
  {
    icon: Wifi,
    title: "IoT",
    text: "Connected machines communicate autonomously, minimizing the need for manual intervention.",
  },
  {
    icon: Cpu,
    title: "Smart Manufacturing",
    text: "Adoption of smart textile machinery has risen from 17% in 2023 to an estimated 31% by 2026.",
  },
];

const COMPARISON_ROWS = [
  {
    traditional: "Manual laboratory testing",
    ai: "Predictive analytics using production data",
  },
  {
    traditional: "Reactive inspection after production",
    ai: "Real-time prediction before production",
  },
  {
    traditional: "Sample-based testing",
    ai: "Continuous monitoring of entire batches",
  },
  {
    traditional: "Static rules and limits",
    ai: "Machine learning that improves over time",
  },
  {
    traditional: "Delayed corrections after defects occur",
    ai: "Preventive optimization during production planning",
  },
];

const MARKET_STATS = [
  { year: "2025", value: "$4.12B", label: "AI in Textile Market" },
  { year: "2026", value: "$5.46B", label: "Projected Market Size" },
  { year: "2035", value: "$68.44B", label: "Projected Market Size" },
];

const RESEARCH_HIGHLIGHTS = [
  {
    stat: "$7.6B → $128.81B",
    label: "AI in Manufacturing Market, 2025 to 2034 (37.90% CAGR)",
  },
  {
    stat: "$2.1B → $16.8B",
    label: "Textile Manufacturing AI Market, 2025 to 2034 (28.4% CAGR)",
  },
  { stat: "18–22%", label: "CAGR, AI Adoption in Textile Manufacturing" },
  {
    stat: "31%",
    label: "Smart Textile Machinery Adoption by 2026 (from 17% in 2023)",
  },
  { stat: "5% → 18%", label: "Fully Autonomous Factories, 2025 to 2030" },
  { stat: "$664M", label: "Textile Automation Market Growth, 2025–2029" },
];

const KEY_DRIVERS = [
  {
    icon: Users,
    title: "Labor Shortages",
    text: "Automation enables output gains while requiring fewer manual operators.",
  },
  {
    icon: DollarSign,
    title: "Cost",
    text: "AI optimizes resource utilization as energy, material, and labor costs rise.",
  },
  {
    icon: Globe2,
    title: "Exports",
    text: "AI-powered quality control ensures consistent compliance with international standards.",
  },
  {
    icon: Award,
    title: "Quality",
    text: "Consistent, predictable results command premium pricing and long-term contracts.",
  },
  {
    icon: Zap,
    title: "Automation",
    text: "Real-time predictions speed decisions, reducing lead times and improving responsiveness.",
  },
  {
    icon: Target,
    title: "Competition",
    text: "Early adopters gain market share; delaying adoption risks falling behind.",
  },
];

const ROADMAP_PHASES = [
  {
    icon: ClipboardList,
    phase: "Phase 1 · 2025",
    title: "Pilot AI Projects",
    text: "Start with one production line or product type to minimize risk while proving value.",
  },
  {
    icon: Database,
    phase: "Phase 2",
    title: "Production Data Collection",
    text: "Build comprehensive data on fabric, process, and quality parameters — the foundation of AI accuracy.",
  },
  {
    icon: ShieldCheck,
    phase: "Phase 3",
    title: "Quality Automation",
    text: "Deploy computer vision and predictive models for defect detection and shrinkage estimation.",
  },
  {
    icon: BarChart3,
    phase: "Phase 4",
    title: "Predictive Analytics",
    text: "Expand into predictive maintenance, demand forecasting, and supply chain optimization.",
  },
  {
    icon: Rocket,
    phase: "Phase 5",
    title: "Smart Factory Transformation",
    text: "Fully integrate AI across all operations in a connected, self-optimizing production environment.",
  },
];

const TECHNOLOGY_CARDS = [
  {
    icon: Brain,
    title: "Machine Learning",
    text: "Learns the relationship between processing parameters and dimensional change.",
  },
  {
    icon: ScanEye,
    title: "Computer Vision",
    text: "Inspects fabric continuously, catching defects human eyes might miss.",
  },
  {
    icon: Layers3,
    title: "Digital Twins",
    text: "Simulates production outcomes before a physical run ever begins.",
  },
  {
    icon: Wifi,
    title: "Internet of Things",
    text: "Streams real-time machine data that feeds prediction and control models.",
  },
];

const FUTURE_VISION_CARDS = [
  {
    icon: Zap,
    title: "Real-Time Prediction",
    text: "Shrinkage behavior known before production starts, eliminating guesswork.",
  },
  {
    icon: ScanEye,
    title: "Autonomous Inspection",
    text: "Computer vision handles routine scanning; humans focus on exceptions.",
  },

  {
    icon: Wifi,
    title: "Connected Factories",
    text: "Machines coordinate autonomously, adjusting plans to real-time conditions.",
  },
  {
    icon: Boxes,
    title: "ERP Integration",
    text: "Predictions automatically trigger production adjustments in closed-loop systems.",
  },
];

const DECISION_QUESTIONS = [
  "What is the current cost of shrinkage-related quality issues in your factory?",
  "How much fabric waste could be eliminated with better prediction?",
];

const TAKEAWAYS = [
  "Traditional shrinkage testing is reactive and costly — waste, rework, and dissatisfaction follow.",
  "AI enables proactive quality management by predicting shrinkage before production begins.",
  "The market is moving rapidly: AI in textiles is projected to grow from $4.12B (2025) to $68.44B (2035).",
  "Early adopters are already reducing waste, improving quality, and capturing market share.",
  "The technology is mature and the business case is clear — the cost of delay is mounting.",
];

/* ============================================================
   REUSABLE COMPONENTS
   ============================================================ */

const SectionHeader = memo(({ number, title, description, id }) => (
  <div id={id} className="scroll-mt-24 sm:scroll-mt-28 mb-6 sm:mb-8">
    <div className="flex items-center gap-2 sm:gap-3 mb-3">
      <span className="text-xs sm:text-sm font-semibold tracking-widest text-blue-400/80">
        {number}
      </span>
      <span className="h-px flex-1 bg-gradient-to-r from-blue-400/30 to-transparent" />
    </div>
    <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl text-white font-semibold mb-3 leading-tight break-words">
      {title}
    </h2>
    {description && (
      <p className="text-blue-200/70 text-sm sm:text-base md:text-lg leading-relaxed max-w-[75ch]">
        {description}
      </p>
    )}
  </div>
));
SectionHeader.displayName = "SectionHeader";

/** Small challenge/impact/driver card with icon, title, short text, hover lift */
const IndustryInsightCard = memo(({ icon: Icon, title, text }) => (
  <div className="bg-slate-800/30 border border-blue-400/20 p-4 xs:p-5 sm:p-6 rounded-xl backdrop-blur-sm transition-all duration-[250ms] ease-out hover:-translate-y-1 hover:border-blue-400/40">
    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-blue-500/10 border border-blue-400/20 flex items-center justify-center mb-3">
      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
    </div>
    <h4 className="text-white font-medium mb-2 text-sm sm:text-base">
      {title}
    </h4>
    <p className="text-blue-200/70 text-xs sm:text-sm leading-relaxed">
      {text}
    </p>
  </div>
));
IndustryInsightCard.displayName = "IndustryInsightCard";

/** Grid of IndustryInsightCard, responsive columns */
const IndustryTrendGrid = memo(
  ({ items, columns = "sm:grid-cols-2 lg:grid-cols-2" }) => (
    <div className={`grid grid-cols-1 ${columns} gap-4 sm:gap-5 my-6`}>
      {items.map((item) => (
        <IndustryInsightCard key={item.title} {...item} />
      ))}
    </div>
  ),
);
IndustryTrendGrid.displayName = "IndustryTrendGrid";

/** Large stat card: year / value / label, used for market growth */
const MarketGrowthCard = memo(({ year, value, label }) => (
  <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-blue-400/20 rounded-xl p-5 sm:p-6 text-center backdrop-blur-sm transition-all duration-[250ms] ease-out hover:-translate-y-1 hover:border-blue-400/40">
    <p className="text-blue-400/70 text-xs uppercase tracking-widest mb-2 font-semibold">
      {year}
    </p>
    <p className="text-2xl xs:text-3xl sm:text-4xl text-white font-bold mb-2 tabular-nums">
      {value}
    </p>
    <p className="text-blue-200/60 text-xs sm:text-sm leading-snug">{label}</p>
  </div>
));
MarketGrowthCard.displayName = "MarketGrowthCard";

/** Small research statistic tile: big number + label */
const ResearchStatisticCard = memo(({ stat, label }) => (
  <div className="bg-slate-800/30 border border-blue-400/20 rounded-xl p-4 sm:p-5 backdrop-blur-sm transition-all duration-[250ms] ease-out hover:-translate-y-1 hover:border-blue-400/40">
    <p className="text-xl xs:text-2xl sm:text-3xl text-blue-300 font-bold mb-1 tabular-nums">
      {stat}
    </p>
    <p className="text-blue-200/60 text-xs sm:text-sm leading-relaxed">
      {label}
    </p>
  </div>
));
ResearchStatisticCard.displayName = "ResearchStatisticCard";

/** Elegant executive quote block — use sparingly (2-3 max) */
const ExecutiveQuote = memo(({ quote, attribution }) => (
  <blockquote className="my-8 sm:my-10 relative rounded-2xl border border-blue-400/20 bg-gradient-to-br from-blue-950/40 to-slate-900/40 backdrop-blur-sm px-5 py-6 sm:px-8 sm:py-8">
    <Quote className="w-7 h-7 sm:w-8 sm:h-8 text-blue-400/40 mb-3" />
    <p className="text-white text-base xs:text-lg sm:text-xl font-medium leading-relaxed max-w-[65ch]">
      {quote}
    </p>
    {attribution && (
      <footer className="text-blue-300/60 text-xs sm:text-sm mt-4 tracking-wide">
        — {attribution}
      </footer>
    )}
  </blockquote>
));
ExecutiveQuote.displayName = "ExecutiveQuote";

/** Callout box for insight / research highlight / note / recommendation */
const KeyInsightBox = memo(
  ({ icon: Icon = Sparkles, eyebrow, title, children, tone = "insight" }) => {
    const tones = {
      insight: "border-blue-400/30 from-blue-900/25 to-slate-900/25",
      research: "border-blue-400/20 from-slate-800/40 to-slate-900/40",
      note: "border-blue-400/20 from-slate-800/30 to-slate-900/30",
      recommendation: "border-blue-400/40 from-blue-900/30 to-blue-950/30",
    };
    return (
      <div
        className={`my-6 sm:my-8 rounded-xl border ${tones[tone] || tones.insight} bg-gradient-to-br p-5 sm:p-6 backdrop-blur-sm`}
      >
        <div className="flex items-center gap-2 mb-3">
          <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 flex-shrink-0" />
          <p className="text-xs sm:text-sm uppercase tracking-widest text-blue-400/80 font-semibold">
            {eyebrow}
          </p>
        </div>
        {title && (
          <h4 className="text-white font-semibold mb-2 text-sm sm:text-base">
            {title}
          </h4>
        )}
        <div className="text-blue-100/90 text-xs sm:text-sm leading-relaxed space-y-2">
          {children}
        </div>
      </div>
    );
  },
);
KeyInsightBox.displayName = "KeyInsightBox";

/** Traditional vs AI-Powered comparison component */
const ComparisonTable = memo(({ rows }) => (
  <div className="my-6 rounded-xl border border-blue-400/20 overflow-hidden bg-slate-800/30">
    <div className="grid grid-cols-2 bg-slate-800/95 backdrop-blur-sm">
      <div className="px-3 sm:px-5 py-3 sm:py-3.5 text-center border-b border-r border-blue-400/20">
        <p className="text-blue-200/60 text-[10px] xs:text-xs uppercase tracking-wider font-semibold">
          Traditional
        </p>
      </div>
      <div className="px-3 sm:px-5 py-3 sm:py-3.5 text-center border-b border-blue-400/20">
        <p className="text-blue-300 text-[10px] xs:text-xs uppercase tracking-wider font-semibold">
          AI-Powered
        </p>
      </div>
    </div>
    <div className="divide-y divide-blue-400/10">
      {rows.map((row, i) => (
        <div
          key={i}
          className="grid grid-cols-2 hover:bg-blue-500/5 transition-colors duration-150"
        >
          <div className="px-3 sm:px-5 py-3 sm:py-4 border-r border-blue-400/10 text-blue-200/70 text-xs sm:text-sm leading-relaxed flex items-center">
            {row.traditional}
          </div>
          <div className="px-3 sm:px-5 py-3 sm:py-4 text-blue-100 text-xs sm:text-sm leading-relaxed flex items-center gap-2">
            <ArrowRight className="w-3.5 h-3.5 text-blue-400 flex-shrink-0 hidden xs:block" />
            {row.ai}
          </div>
        </div>
      ))}
    </div>
  </div>
));
ComparisonTable.displayName = "ComparisonTable";

/** Strategic roadmap — horizontal on desktop, vertical on mobile */
/** Strategic roadmap — horizontal on desktop, vertical on mobile */
const TrendTimeline = memo(({ phases }) => (
  <div className="w-full my-6 rounded-xl border border-blue-400/20 bg-slate-800/30 p-4 sm:p-6 md:p-8 backdrop-blur-sm overflow-hidden">
    {/* Desktop Horizontal Layout - Visible on lg screens and above */}
    <div className="hidden lg:grid lg:grid-cols-5 gap-4">
      {phases.map(({ icon: Icon, phase, title, text }, i) => (
        <div key={title} className="relative">
          {/* Connector line between items */}
          {i < phases.length - 1 && (
            <div className="absolute top-8 left-[calc(100%-8px)] w-4 h-0.5 bg-gradient-to-r from-blue-400/40 to-blue-400/10" />
          )}

          <div className="flex flex-col items-center text-center h-full">
            {/* Phase number badge */}
            <div className="mb-3">
              <div className="w-14 h-14 rounded-full bg-blue-500/10 border-2 border-blue-400/30 flex items-center justify-center transition-all duration-300 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/20">
                <Icon className="w-7 h-7 text-blue-400" />
              </div>
            </div>

            {/* Phase label */}
            <p className="text-blue-400/70 text-[10px] uppercase tracking-widest font-semibold mb-1.5">
              {phase}
            </p>

            {/* Title */}
            <p className="text-white text-sm font-semibold mb-2 leading-tight">
              {title}
            </p>

            {/* Description */}
          </div>
        </div>
      ))}
    </div>

    {/* Mobile/Tablet Vertical Layout - Visible below lg screens */}
    <div className="lg:hidden flex flex-col gap-4">
      {phases.map(({ icon: Icon, phase, title, text }, i) => (
        <div key={title} className="relative">
          {/* Vertical connector line */}
          {i < phases.length - 1 && (
            <div className="absolute left-7 top-14 w-0.5 h-4 bg-gradient-to-b from-blue-400/40 to-blue-400/10" />
          )}

          <div className="flex items-start gap-4 bg-slate-800/30 rounded-xl p-4 border border-blue-400/10 transition-all duration-300 hover:border-blue-400/30 hover:bg-slate-800/50">
            {/* Icon container */}
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-full bg-blue-500/10 border border-blue-400/20 flex items-center justify-center">
                <Icon className="w-6 h-6 text-blue-400" />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <span className="text-blue-400/70 text-[10px] uppercase tracking-widest font-semibold">
                  {phase}
                </span>
                <span className="text-blue-400/30 text-xs">•</span>
                <span className="text-white text-sm font-medium">{title}</span>
              </div>
              <p className="text-blue-200/60 text-xs leading-relaxed">{text}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
));
TrendTimeline.displayName = "TrendTimeline";

/** Technology card with icon + two-line description */
const TechnologyCard = memo(({ icon: Icon, title, text }) => (
  <div className="bg-slate-800/30 border border-blue-400/20 rounded-xl p-4 sm:p-5 backdrop-blur-sm transition-all duration-[250ms] ease-out hover:-translate-y-1 hover:border-blue-400/40">
    <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-blue-400 mb-3" />
    <p className="text-white text-sm sm:text-base font-medium mb-1.5">
      {title}
    </p>
    <p className="text-blue-200/60 text-xs sm:text-sm leading-relaxed">
      {text}
    </p>
  </div>
));
TechnologyCard.displayName = "TechnologyCard";

/** Future-facing vision card, same visual family as TechnologyCard but distinct icon container */
const FutureVisionCard = memo(({ icon: Icon, title, text }) => (
  <div className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 border border-blue-400/20 rounded-xl p-4 sm:p-5 backdrop-blur-sm transition-all duration-[250ms] ease-out hover:-translate-y-1 hover:border-blue-400/40">
    <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-400/20 flex items-center justify-center mb-3">
      <Icon className="w-5 h-5 text-blue-400" />
    </div>
    <p className="text-white text-sm sm:text-base font-medium mb-1.5">
      {title}
    </p>
    <p className="text-blue-200/60 text-xs sm:text-sm leading-relaxed">
      {text}
    </p>
  </div>
));
FutureVisionCard.displayName = "FutureVisionCard";

/** Executive recommendation panel with highlighted advice + decision questions */
const BusinessRecommendation = memo(({ children, questions }) => (
  <div className="my-6 sm:my-8 rounded-xl border border-blue-400/30 bg-gradient-to-br from-blue-900/25 to-slate-900/25 p-5 sm:p-7 backdrop-blur-sm">
    <div className="flex items-center gap-2 mb-4">
      <ShieldCheck className="w-5 h-5 text-blue-400" />
      <p className="text-xs sm:text-sm uppercase tracking-widest text-blue-400/80 font-semibold">
        Executive Recommendation
      </p>
    </div>
    <div className="space-y-4 mb-6">{children}</div>
    {questions && (
      <div className="border-t border-blue-400/10 pt-4">
        <p className="text-white font-medium text-sm mb-3 flex items-center gap-2">
          <AlertCircle className="w-4 h-4 text-blue-400" />
          Key Questions for Decision-Makers
        </p>
        <ul className="space-y-2">
          {questions.map((q) => (
            <li
              key={q}
              className="flex gap-2.5 text-blue-100/90 text-xs sm:text-sm leading-relaxed"
            >
              <span className="text-blue-400 flex-shrink-0">•</span>
              {q}
            </li>
          ))}
        </ul>
      </div>
    )}
  </div>
));
BusinessRecommendation.displayName = "BusinessRecommendation";

/** Premium data-visualization placeholder — no fake charts, just a clean visual frame */
const ResearchHighlight = memo(({ icon: Icon = BarChart3, label, note }) => (
  <div className="my-6 rounded-xl border border-dashed border-blue-400/30 bg-slate-900/30 backdrop-blur-sm p-6 sm:p-10 flex flex-col items-center justify-center text-center">
    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-blue-500/10 border border-blue-400/20 flex items-center justify-center mb-3">
      <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-blue-400/70" />
    </div>
    <p className="text-blue-200/70 text-sm sm:text-base font-medium">{label}</p>
    {note && <p className="text-blue-300/40 text-xs mt-1">{note}</p>}
  </div>
));
ResearchHighlight.displayName = "ResearchHighlight";

/** Final summary panel with large check icons */
const SummaryPanel = memo(({ items }) => (
  <div className="my-8 rounded-xl border border-blue-400/30 bg-gradient-to-br from-blue-900/30 to-slate-900/30 p-5 sm:p-7 backdrop-blur-sm">
    <h4 className="text-white font-semibold mb-5 text-base sm:text-lg">
      Key Takeaways
    </h4>
    <ul className="space-y-3.5">
      {items.map((t) => (
        <li
          key={t}
          className="flex gap-3 text-blue-100/90 text-sm leading-relaxed"
        >
          <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
          {t}
        </li>
      ))}
    </ul>
  </div>
));
SummaryPanel.displayName = "SummaryPanel";

const InlineCTA = memo(({ eyebrow, title, to }) => (
  <Link
    to={to}
    className="group flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 sm:justify-between my-6 sm:my-8 rounded-xl border border-blue-400/20 bg-slate-800/40 backdrop-blur-sm px-4 py-4 sm:px-6 transition-all duration-[250ms] ease-out hover:-translate-y-1 hover:border-blue-400/40 hover:bg-slate-800/60"
  >
    <div className="min-w-0">
      {eyebrow && (
        <p className="text-xs uppercase tracking-wide text-blue-400/70 mb-1">
          {eyebrow}
        </p>
      )}
      <p className="text-white font-medium break-words">{title}</p>
    </div>
    <span className="text-blue-400 group-hover:translate-x-1 transition-transform duration-[250ms] ease-out self-start sm:self-auto">
      <ArrowRight className="w-4 h-4" />
    </span>
  </Link>
));
InlineCTA.displayName = "InlineCTA";

/* ============================================================
   PAGE
   ============================================================ */

const FutureFabricShrinkagePredictionBlog = () => {
  const [progress, setProgress] = useState(0);
  const articleRef = useRef(null);
  const { openConsultation } = useConsultation();

  useEffect(() => {
    const onScroll = () => {
      const el = articleRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = el.offsetHeight - window.innerHeight;
      const scrolled = Math.min(Math.max(-rect.top, 0), Math.max(total, 1));
      setProgress(
        Math.min(100, Math.max(0, (scrolled / Math.max(total, 1)) * 100)),
      );
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleShare = () =>
    navigator.share
      ? navigator.share({ title: document.title, url: window.location.href })
      : navigator.clipboard.writeText(window.location.href);

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-gradient-to-b from-slate-900 via-blue-950 to-black">
      <SEO {...seoData.fabricShrinkagePrediction} />

      {/* Reading progress bar */}
      <div className="fixed top-0 left-0 right-0 h-1 z-50 bg-slate-800/50">
        <div
          className="h-full bg-gradient-to-r from-blue-500 to-blue-300 transition-[width] duration-150 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative pt-24 xs:pt-28 sm:pt-32 md:pt-40 pb-8 xs:pb-10 sm:pb-12 lg:pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-4 sm:right-20 w-16 h-16 sm:w-32 sm:h-32 bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-24 left-4 sm:left-20 w-14 h-14 sm:w-24 sm:h-24 bg-blue-400/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-full">
          <div className="max-w-4xl mx-auto">
            <Link
              to="/blog"
              className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium mb-5 sm:mb-8 transition-colors text-sm sm:text-base"
            >
              <ArrowLeft className="w-4 h-4 mr-2 flex-shrink-0" />
              Back to Blogs
            </Link>

            <div className="mb-4 sm:mb-6 flex flex-wrap gap-2">
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium inline-flex items-center">
                <Tag className="w-3 h-3 mr-2 flex-shrink-0" />
                Industry Insight
              </span>
              <span className="bg-blue-500/15 border border-blue-400/30 text-blue-300 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium inline-flex items-center">
                <TrendingUp className="w-3 h-3 mr-2 flex-shrink-0" />
                Industry Research
              </span>
            </div>

            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6 text-white leading-tight font-semibold break-words">
              The Future of Fabric Shrinkage Prediction: Why AI Is Transforming
              Textile Manufacturing
            </h1>

            <p className="text-sm xs:text-base sm:text-lg md:text-xl text-blue-200/80 leading-relaxed mb-6 sm:mb-8 max-w-[70ch]">
              An executive briefing on why reactive shrinkage testing is
              reaching its limits — and what business leaders should do to
              prepare for an AI-driven future.
            </p>

            <div className="flex flex-wrap items-center text-blue-200/80 gap-x-4 sm:gap-x-6 gap-y-2 sm:gap-y-3 text-xs xs:text-sm sm:text-base">
              <div className="flex items-center">
                <User className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0" />
                <span>Ascentia Labs Team</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0" />
                <span>Updated 2026</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0" />
                <span>8 min read</span>
              </div>
              <button
                onClick={handleShare}
                className="flex items-center text-blue-400 hover:text-blue-300 transition-colors"
              >
                <Share2 className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0" />
                <span>Share</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Article - Full Width */}
      <section className="py-6 sm:py-8">
        <div className="container mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 max-w-full">
          <div className="max-w-4xl mx-auto">
            <article
              ref={articleRef}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl shadow-lg border border-blue-400/20 p-4 xs:p-5 sm:p-6 md:p-10 min-w-0 w-full overflow-hidden"
            >
              <div className="mb-5 sm:mb-8">
                <img
                  src="/blogs/blog11.png"
                  alt="AI-driven fabric shrinkage prediction transforming textile manufacturing"
                  className="w-full h-40 xs:h-48 sm:h-64 md:h-96 object-cover rounded-xl shadow-lg border border-blue-400/10"
                  loading="lazy"
                />
              </div>

              <div className="max-w-[75ch] mx-auto">
                {/* Introduction callout */}
                <div className="mb-8 sm:mb-10 rounded-xl border border-blue-400/20 bg-gradient-to-br from-blue-950/30 to-slate-900/30 backdrop-blur-sm p-5 sm:p-7">
                  <p className="text-base xs:text-lg sm:text-xl text-blue-100/90 leading-relaxed">
                    Textile manufacturing is at an inflection point. For
                    decades, fabric shrinkage control has followed the same
                    pattern: produce, test, react, and rework — a reactive
                    approach that has cost the industry billions in wasted
                    materials, rejected shipments, and damaged customer
                    relationships.
                  </p>
                  <p className="text-blue-200/70 leading-relaxed mt-4 text-sm xs:text-base">
                    But the rules are changing. AI is shifting the paradigm from
                    reactive testing to proactive prediction. The global AI in
                    textile market is projected to grow from approximately{" "}
                    <span className="text-white font-medium">
                      $4.12 billion in 2025
                    </span>{" "}
                    to{" "}
                    <span className="text-white font-medium">
                      $68.44 billion by 2035
                    </span>{" "}
                    — a CAGR of 32.45%. This article examines why traditional
                    shrinkage control is reaching its limits, how AI is
                    transforming fabric quality management, and what textile
                    leaders should do to prepare.
                  </p>
                </div>

                {/* Section 1 */}
                <SectionHeader
                  id="why-traditional-limits"
                  number="01"
                  title="Why Traditional Fabric Shrinkage Control Is Reaching Its Limits"
                  description="The rising cost of reactive quality management."
                />
                <p className="text-blue-100/90 leading-relaxed mb-6 text-sm xs:text-base">
                  Traditional shrinkage testing operates on a simple premise:
                  produce a batch, test samples, and hope the results meet
                  specification. That worked when expectations were lower and
                  volumes smaller. Today, it is no longer sufficient.
                </p>

                <IndustryTrendGrid items={CHALLENGE_CARDS} />

                <KeyInsightBox
                  eyebrow="Research Highlight"
                  title="The Hidden Costs of Uncontrolled Shrinkage"
                  tone="research"
                >
                  <div className="divide-y divide-blue-400/10 -mx-1">
                    {HIDDEN_COSTS.map((row) => (
                      <div
                        key={row.area}
                        className="flex flex-col xs:flex-row xs:items-center gap-1 xs:gap-4 py-2.5 px-1"
                      >
                        <span className="text-white font-medium text-xs xs:text-sm xs:w-40 flex-shrink-0">
                          {row.area}
                        </span>
                        <span className="text-blue-200/70 text-xs xs:text-sm">
                          {row.impact}
                        </span>
                      </div>
                    ))}
                  </div>
                </KeyInsightBox>

                <p className="text-blue-100/90 leading-relaxed mb-2 text-sm xs:text-base">
                  These challenges are driving manufacturers toward predictive
                  AI technologies. The question is no longer whether to adopt
                  AI, but when and how.
                </p>

                <InlineCTA
                  eyebrow="Related"
                  title="Explore Textile Industry Solutions"
                  to="/textile-erp-software-manufacturing-solutions"
                />

                {/* Section 2 */}
                <SectionHeader
                  id="global-shift"
                  number="02"
                  title="The Global Shift Toward AI in Textile Manufacturing"
                  description="Industry 4.0 comes to textiles."
                />
                <p className="text-blue-100/90 leading-relaxed mb-6 text-sm xs:text-base">
                  The textile industry is undergoing what analysts describe as a
                  technological renaissance — transitioning from labor-intensive
                  traditional methods to AI-driven smart manufacturing, driven
                  by several converging factors.
                </p>

                <IndustryTrendGrid items={TREND_CARDS} />

                <ExecutiveQuote
                  quote="AI is no longer experimental. It is becoming foundational to how textile manufacturing operates."
                  attribution="AI Manufacturing Insights"
                />

                {/* Section 3 */}
                <SectionHeader
                  id="why-ai-revolutionizes"
                  number="03"
                  title="Why AI Will Revolutionize Fabric Shrinkage Prediction"
                  description="From reactive testing to proactive prediction."
                />
                <ComparisonTable rows={COMPARISON_ROWS} />

                <h3 className="text-lg xs:text-xl text-white font-medium mb-3 mt-8">
                  How AI Changes the Game
                </h3>
                <ul className="space-y-4 mb-6">
                  <li>
                    <p className="text-white font-medium text-sm xs:text-base mb-1">
                      Prediction Before Production
                    </p>
                    <p className="text-blue-200/70 text-xs xs:text-sm leading-relaxed">
                      AI models can predict shrinkage based on fabric properties
                      and planned processing parameters before dyeing begins,
                      allowing manufacturers to adjust parameters upfront rather
                      than fixing problems after production.
                    </p>
                  </li>
                  <li>
                    <p className="text-white font-medium text-sm xs:text-base mb-1">
                      Speed and Scale
                    </p>
                    <p className="text-blue-200/70 text-xs xs:text-sm leading-relaxed">
                      Once trained, AI models can estimate fabric shrinkage in
                      seconds using known input parameters, enabling proactive
                      quality control at the production planning stage.
                    </p>
                  </li>
                  <li>
                    <p className="text-white font-medium text-sm xs:text-base mb-1">
                      Continuous Improvement
                    </p>
                    <p className="text-blue-200/70 text-xs xs:text-sm leading-relaxed">
                      Machine learning models improve over time. As more
                      production data is collected, predictions become more
                      accurate — the system learns from every batch, getting
                      smarter with each cycle.
                    </p>
                  </li>
                  <li>
                    <p className="text-white font-medium text-sm xs:text-base mb-1">
                      Batch-Level Accuracy
                    </p>
                    <p className="text-blue-200/70 text-xs xs:text-sm leading-relaxed">
                      Unlike sample-based testing, AI can provide predictions
                      for entire batches, accounting for variations within
                      production runs.
                    </p>
                  </li>
                </ul>

                <KeyInsightBox
                  eyebrow="Research Highlight"
                  title="Research Validates the Approach"
                  tone="research"
                >
                  <p>
                    Academic research has demonstrated the effectiveness of AI
                    for fabric shrinkage prediction — including Artificial
                    Neural Network (ANN) models for dimensional shrinkage of
                    knitted fabrics, machine learning methods for denim quality
                    parameters, and decision tree analysis using loop length,
                    fabric weight, and material composition as inputs.
                  </p>
                </KeyInsightBox>

                <InlineCTA
                  eyebrow="Related"
                  title="AI & Machine Learning Services"
                  to="/ai-ml-services"
                />

                {/* Section 4 — Industry Research */}
                <SectionHeader
                  id="industry-research"
                  number="04"
                  title="Industry Research & Market Insights"
                  description="AI in textile manufacturing: market trajectory."
                />
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 my-6">
                  {MARKET_STATS.map((s) => (
                    <MarketGrowthCard key={s.year} {...s} />
                  ))}
                </div>

                <h3 className="text-lg xs:text-xl text-white font-medium mb-3 mt-8">
                  Manufacturing AI Market Context, Smart Factory & Automation
                  Trends
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 my-6">
                  {RESEARCH_HIGHLIGHTS.map((r) => (
                    <ResearchStatisticCard key={r.label} {...r} />
                  ))}
                </div>
                <p className="text-blue-200/60 text-xs sm:text-sm leading-relaxed mb-6">
                  Alternative estimates suggest the AI in manufacturing market
                  could reach $610.96 billion by 2034.
                </p>

                <h3 className="text-lg xs:text-xl text-white font-medium mb-3 mt-8">
                  Indian Textile Sector Context
                </h3>
                <KeyInsightBox eyebrow="Industry Insight" tone="insight">
                  <p>
                    The Indian textiles market is projected to grow at a 10%
                    CAGR, reaching $350 billion by 2030. India's textile exports
                    reached approximately $4.61 billion in FY25 for the first
                    time. AI has helped Tiruppur improve production by at least
                    10 percent, and digital transformation through Industry 4.0
                    could reduce operational waste by 15% while boosting
                    production efficiency.
                  </p>
                </KeyInsightBox>

                {/* Section 5 — Key Drivers */}
                <SectionHeader
                  id="key-drivers"
                  number="05"
                  title="Key Drivers Behind AI Adoption"
                  description="Why textile manufacturers are investing now."
                />
                <IndustryTrendGrid items={KEY_DRIVERS} />

                {/* Section 6 — Strategic Roadmap */}
                <SectionHeader
                  id="strategic-roadmap"
                  number="06"
                  title="How Leading Textile Manufacturers Are Preparing"
                  description="A structured, phased roadmap to AI adoption."
                />
                <TrendTimeline phases={ROADMAP_PHASES} />

                {/* Section 7 — Emerging Technologies */}
                <SectionHeader
                  id="emerging-tech"
                  number="07"
                  title="Emerging Technologies Shaping Fabric Quality"
                  description="The key technologies driving the transformation."
                />
                <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-5 my-6">
                  {TECHNOLOGY_CARDS.map((t) => (
                    <TechnologyCard key={t.title} {...t} />
                  ))}
                </div>

                <ExecutiveQuote
                  quote="Manufacturers who adopt AI-driven shrinkage prediction are not just improving quality — they are fundamentally rethinking how production decisions are made."
                  attribution="AI Manufacturing Insights"
                />

                {/* Section 8 — Future Outlook */}
                <SectionHeader
                  id="future-outlook"
                  number="08"
                  title="Future Outlook: The Next 5–10 Years"
                  description="What textile manufacturing looks like as AI matures."
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-5 my-6">
                  {FUTURE_VISION_CARDS.map((f) => (
                    <FutureVisionCard key={f.title} {...f} />
                  ))}
                </div>

                {/* Section 9 — Business Leaders */}
                <SectionHeader
                  id="business-leaders"
                  number="09"
                  title="What This Means for Textile Business Leaders"
                  description="Strategic recommendations for decision-makers."
                />
                <BusinessRecommendation questions={DECISION_QUESTIONS}>
                  <div>
                    <p className="text-white font-medium text-sm mb-1">
                      Should manufacturers invest now?
                    </p>
                    <p className="text-blue-100/80 text-sm leading-relaxed">
                      Yes. The technology is mature, the business case is clear,
                      and early adopters are gaining competitive advantage. The
                      cost of delay is higher than the cost of investment.
                    </p>
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm mb-1">
                      How should they prepare?
                    </p>
                    <p className="text-blue-100/80 text-sm leading-relaxed">
                      Assess your current state — what data you collect, where
                      quality problems concentrate, what success would look like
                      — then develop a phased implementation plan.
                    </p>
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm mb-1">
                      What production data should they begin collecting?
                    </p>
                    <p className="text-blue-100/80 text-sm leading-relaxed">
                      Start collecting data on fabric composition, processing
                      parameters, and quality test results. The more
                      comprehensive your data, the more accurate your AI
                      predictions will be.
                    </p>
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm mb-1">
                      Which skills should leadership teams develop?
                    </p>
                    <p className="text-blue-100/80 text-sm leading-relaxed">
                      Leadership teams need to understand AI capabilities and
                      limitations. They don't need to be data scientists, but
                      they need to ask the right questions and make informed
                      decisions about technology investment.
                    </p>
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm mb-1">
                      What technology roadmap should they follow?
                    </p>
                    <p className="text-blue-100/80 text-sm leading-relaxed">
                      Start with a focused pilot on one high-impact problem.
                      Measure results. Then scale to additional applications and
                      production lines — a phased approach that minimizes risk
                      while building capability.
                    </p>
                  </div>
                </BusinessRecommendation>

                {/* Section 10 — Key Takeaways */}

                {/* Premium CTA block */}
                <div className="my-10 rounded-2xl bg-gradient-to-br from-blue-600 via-blue-800 to-black p-6 xs:p-8 md:p-10 text-center">
                  <h3 className="text-xl xs:text-2xl md:text-3xl text-white font-semibold mb-3">
                    Ready to Modernize Your Textile Manufacturing?
                  </h3>
                  <p className="text-blue-100/80 max-w-[60ch] mx-auto mb-6 text-sm xs:text-base">
                    AI is transforming how textile manufacturers predict and
                    control fabric quality. At Ascentia Labs, we help textile
                    companies implement custom AI solutions that reduce waste,
                    improve quality, and drive profitability. Start with a
                    focused pilot and scale what works.
                  </p>
                  <div className="flex flex-col xs:flex-row flex-wrap items-center justify-center gap-3 xs:gap-4">
                    <button
                      type="button"
                      onClick={openConsultation}
                      className="w-full xs:w-auto text-center px-6 py-3 rounded-lg bg-white text-blue-900 font-medium transition-all duration-[250ms] ease-out hover:-translate-y-1 hover:shadow-lg hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-blue-900"
                    >
                      Book an AI Consultation
                    </button>
                    <Link
                      to="/textile-erp-software-manufacturing-solutions"
                      className="w-full xs:w-auto text-center px-6 py-3 rounded-lg border border-white/40 text-white font-medium transition-all duration-[250ms] ease-out hover:-translate-y-1 hover:bg-white/10"
                    >
                      Explore AI Solutions
                    </Link>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-blue-400/20">
                  <Link
                    to="/blog"
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors text-sm sm:text-base"
                  >
                    <ArrowLeft className="w-4 h-4 mr-2 flex-shrink-0" />
                    Return To Blogs
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Related Content */}
      <section className="py-10 sm:py-12">
        <div className="container mx-auto px-3 xs:px-4 max-w-full">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6 sm:mb-8">
              <h2 className="text-2xl xs:text-3xl md:text-4xl text-white font-semibold mb-2">
                Related Reading
              </h2>
              <p className="text-blue-200/70 text-sm xs:text-base">
                More on textile AI, coming soon
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
              {[
                {
                  tag: "Thought Leadership",
                  title: "The ROI Case for AI in Mid-Sized Textile Units",
                },
                {
                  tag: "Comparison",
                  title: "Manual QC vs. AI-Assisted QC: A Cost Breakdown",
                },
                {
                  tag: "Best Practices",
                  title: "Digitizing Batch Data Without a Full ERP Overhaul",
                },
                {
                  tag: "Industry Use Case",
                  title: "How a Dyeing Unit Cut Rejections by Piloting AI",
                },
              ].map((c) => (
                <div
                  key={c.title}
                  className="bg-slate-800/40 border border-blue-400/20 rounded-xl p-4 sm:p-5 backdrop-blur-sm opacity-70"
                >
                  <span className="inline-block text-xs px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 mb-3">
                    {c.tag}
                  </span>
                  <p className="text-white text-sm font-medium leading-snug">
                    {c.title}
                  </p>
                  <p className="text-blue-300/50 text-xs mt-3">Coming soon</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Other Blogs Section */}
      <section className="py-10 sm:py-12">
        <div className="container mx-auto px-3 xs:px-4 max-w-full">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-2xl xs:text-3xl md:text-4xl text-white font-semibold mb-4">
              Other Blogs
            </h2>
            <p className="text-blue-200/80 text-base sm:text-lg">
              Explore more insights and articles
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 max-w-4xl mx-auto">
            <Link to="/blog" className="group">
              <article className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-blue-400/20 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <img
                  src="/blogs/blog1.jpg"
                  alt="Other blog"
                  className="w-full h-40 xs:h-48 object-cover"
                  loading="lazy"
                />
                <div className="p-5 sm:p-6">
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-sm font-medium">
                    AI & Technology
                  </span>
                  <h3 className="text-lg xs:text-xl text-white mt-4 mb-2 group-hover:text-blue-400 transition-colors">
                    Explore more textile AI insights
                  </h3>
                  <p className="text-blue-400">Read More →</p>
                </div>
              </article>
            </Link>

            <Link to="/blog" className="group">
              <article className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-blue-400/20 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <img
                  src="/blogs/blog3.jpg"
                  alt="Other blog"
                  className="w-full h-40 xs:h-48 object-cover"
                  loading="lazy"
                />
                <div className="p-5 sm:p-6">
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-sm font-medium">
                    Manufacturing
                  </span>
                  <h3 className="text-lg xs:text-xl text-white mt-4 mb-2 group-hover:text-blue-400 transition-colors">
                    Browse all blog posts
                  </h3>
                  <p className="text-blue-400">Read More →</p>
                </div>
              </article>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FutureFabricShrinkagePredictionBlog;
