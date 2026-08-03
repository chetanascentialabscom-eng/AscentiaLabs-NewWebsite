import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  Calendar,
  User,
  Clock,
  ArrowLeft,
  Tag,
  Eye,
  ScanEye,
  Cpu,
  Target,
  ClipboardCheck,
  CheckCircle2,
  ChevronDown,
  AlertTriangle,
  RotateCcw,
  Recycle,
  MessageSquareWarning,
  TrendingDown,
  Gauge,
  DollarSign,
  BadgeCheck,
  Smile,
  Zap,
  ClipboardList,
  Database,
  FlaskConical,
  Rocket,
  BarChart3,
  Sun,
  Sliders,
  Layers,
  ClipboardType,
  History,
  ScanLine,
} from "lucide-react";
import SEO from "../../components/SEO";
import { seoData } from "../../utils/seoData";
import { useConsultation } from "../../contexts/ConsultationContext";

/* ============================================================
   STATIC CONTENT — everything driving the page lives here so
   the layout components below stay purely presentational.
   ============================================================ */

const TOC_SECTIONS = [
  { id: "what-is-color-matching", label: "What Is Textile Color Matching?" },
  { id: "why-it-matters", label: "Why Textile Manufacturers Should Care" },
  { id: "how-colors-are-measured", label: "How Textile Colors Are Measured" },
  { id: "how-ai-improves", label: "How AI Improves Color Matching" },
  { id: "the-workflow", label: "AI Color Matching Workflow" },
  { id: "best-practices", label: "Best Practices" },
  { id: "benefits", label: "Business Benefits" },
  { id: "production-data", label: "Production Data Used" },
  { id: "readiness", label: "Is Your Factory Ready?" },
  { id: "implementation", label: "Implementation Roadmap" },
  { id: "faq", label: "Frequently Asked Questions" },
  { id: "conclusion", label: "Conclusion" },
];

const IMPACT_CARDS = [
  {
    icon: RotateCcw,
    title: "Rejected Dye Lots",
    text: "Entire batches fall outside tolerance and need to be reprocessed or written off entirely, adding cost with no output to show for it.",
  },
  {
    icon: MessageSquareWarning,
    title: "Customer Complaints",
    text: "Buyers expect fabric that matches the approved sample. When it doesn't, replacements, discounts, and disputes follow.",
  },
  {
    icon: Recycle,
    title: "Re-dyeing Costs",
    text: "Reprocessing a batch to correct shade consumes additional labor, chemicals, water, and energy on top of what's already spent.",
  },
  {
    icon: AlertTriangle,
    title: "Production Delays",
    text: "Every rework cycle for a failed lab dip or bulk shade pushes delivery schedules further out.",
  },
  {
    icon: TrendingDown,
    title: "Brand Reputation Damage",
    text: "Inconsistent color across shipments erodes buyer trust and makes it harder to win future contracts.",
  },
  {
    icon: Recycle,
    title: "Fabric Waste",
    text: "Unsellable, off-shade fabric ends up in landfill, adding disposal costs on top of the wasted material.",
  },
];

const WORKFLOW_STEPS = [
  {
    icon: ClipboardList,
    title: "Collect Production Data",
    detail: "Fabric composition, dye recipes, process parameters",
  },
  {
    icon: ScanEye,
    title: "Measure Color",
    detail: "Spectrophotometer readings of sample and standard",
  },
  {
    icon: FlaskConical,
    title: "Analyze Dye Recipes",
    detail: "AI finds patterns across recipes and outcomes",
  },
  {
    icon: Cpu,
    title: "Predict Final Color",
    detail: "Estimated shade before dyeing begins",
  },
  {
    icon: Target,
    title: "Recommend Process Adjustments",
    detail: "Suggested changes to recipe or parameters",
  },
];

const MEASUREMENT_WORKFLOW_STEPS = [
  {
    icon: Eye,
    title: "Human Eye",
    detail: "Subjective, affected by light and observer",
  },
  {
    icon: ScanEye,
    title: "Spectrophotometer",
    detail: "Objective reflectance measurement across the spectrum",
  },
  {
    icon: Cpu,
    title: "AI Color Analysis",
    detail: "Predictive, data-driven interpretation of results",
  },
];

const BENEFITS = [
  {
    icon: Sun,
    title: "Standardize Lighting",
    text: "Use controlled lighting for all visual evaluations to remove a major source of variation.",
  },
  {
    icon: Gauge,
    title: "Calibrate Spectrophotometers",
    text: "Regular calibration prevents instrument drift from creeping into your measurements.",
  },
  {
    icon: Sliders,
    title: "Use LAB Color Space",
    text: "LAB is device-independent and perceptually uniform, ideal for production tolerances.",
  },
  {
    icon: ClipboardType,
    title: "Maintain Dye Recipes",
    text: "Documented, standardized recipes reduce batch-to-batch variation.",
  },
  {
    icon: ScanLine,
    title: "Monitor Delta E",
    text: "Set clear ΔE tolerances and track performance against them on every run.",
  },
  {
    icon: Cpu,
    title: "AI Color Prediction",
    text: "Predictive models cut down on trial-and-error lab dips.",
  },
  {
    icon: History,
    title: "Historical Color Database",
    text: "A growing database of past runs improves future predictions.",
  },
  {
    icon: BadgeCheck,
    title: "Automated Inspection",
    text: "Replace subjective visual checks with objective, instrument-based inspection.",
  },
];

const KPI_CARDS = [
  {
    icon: Target,
    title: "Improve First Pass Accuracy",
    text: "Reduce rejections and rework on the first production run.",
  },
  {
    icon: RotateCcw,
    title: "Reduce Dye Reprocessing",
    text: "Minimize costly re-dyeing cycles across batches.",
  },
  {
    icon: Recycle,
    title: "Lower Waste",
    text: "Cut material waste and disposal costs tied to off-shade fabric.",
  },
  {
    icon: Zap,
    title: "Faster Approval",
    text: "Move from lab dip to production approval more quickly.",
  },
  {
    icon: Smile,
    title: "Better Customer Satisfaction",
    text: "Deliver consistent, expected quality every time.",
  },
  {
    icon: Gauge,
    title: "Higher Production Consistency",
    text: "Reduce batch-to-batch color variation across runs.",
  },
  {
    icon: BadgeCheck,
    title: "Better Quality Control",
    text: "Objective, repeatable quality assessment replaces guesswork.",
  },
  {
    icon: DollarSign,
    title: "Lower Operational Cost",
    text: "Fewer rejections and reworks reduce overall production costs.",
  },
];

const DATA_TABLE = [
  {
    param: "Fabric Composition",
    why: "Influences dye absorption and the resulting final color.",
  },
  {
    param: "Fiber Type",
    why: "Determines color behavior and dye affinity.",
  },
  {
    param: "Dye Recipe",
    why: "Controls the final shade produced.",
  },
  {
    param: "Temperature",
    why: "Affects color consistency and dye uptake.",
  },
  {
    param: "Dye Time",
    why: "Influences how fully the shade develops.",
  },
  {
    param: "pH",
    why: "Impacts dye fixation and color fastness.",
  },
  {
    param: "Water Quality",
    why: "Changes dye performance and consistency across batches.",
  },
  {
    param: "Finishing Process",
    why: "Alters the final appearance and perceived color.",
  },
  {
    param: "Spectrophotometer Data",
    why: "Measures actual color values objectively.",
  },
  {
    param: "Delta E",
    why: "Quantifies color variation against the standard.",
  },
];

const CHECKLIST = [
  "Do you experience frequent shade variation between batches?",
  "Do customers frequently complain about color inconsistency?",
  "Are reprocessing costs for color issues significant?",
  "Is color approval still done manually by visual inspection?",
  "Do you perform multiple lab dips for each new color?",
  "Are production approvals slower than you would like?",
  "Do you struggle with inconsistent dye batches?",
  "Is fabric waste from color issues a growing concern?",
];

const TIMELINE = [
  {
    icon: ClipboardList,
    phase: "Phase 1",
    title: "Assessment",
    duration: "1–2 months",
    text: "Evaluate existing color matching processes, identify bottlenecks, and define success metrics.",
  },
  {
    icon: Database,
    phase: "Phase 2",
    title: "Collect Color Data",
    duration: "2–3 months",
    text: "Gather historical production data, spectrophotometer readings, and color measurement results.",
  },
  {
    icon: FlaskConical,
    phase: "Phase 3",
    title: "Train AI Model",
    duration: "2–3 months",
    text: "Use the collected data to train machine learning models that predict final color from recipe and process.",
  },
  {
    icon: Rocket,
    phase: "Phase 4",
    title: "Pilot",
    duration: "2–3 months",
    text: "Deploy the model on a limited scale — one product line or machine — and validate against traditional methods.",
  },
  {
    icon: BarChart3,
    phase: "Phase 5",
    title: "Scale",
    duration: "3–6 months",
    text: "Expand the system to additional product lines, machines, and facilities.",
  },
];

const FAQS = [
  {
    q: "Can AI predict final fabric colors before dyeing?",
    a: "Yes. AI models can predict the final color that will result from a given dye recipe and set of process parameters before production begins, reducing the need for trial-and-error lab dips.",
  },
  {
    q: "What is Delta E?",
    a: "Delta E (ΔE) is a single number that quantifies the total color difference between a sample and a reference standard. For textiles, acceptable tolerances typically range from 0.50 to 1.50 ΔE.",
  },
  {
    q: "Why is LAB preferred over RGB?",
    a: "LAB is device-independent and perceptually uniform — equal distances in LAB space correspond to roughly equal perceived color differences. RGB is device-dependent and cannot reliably communicate color specifications across facilities.",
  },
  {
    q: "How accurate is AI color prediction?",
    a: "Accuracy depends on the quality and quantity of training data. With sufficient historical production data, AI models can achieve prediction accuracies that significantly reduce the number of lab dips required.",
  },
  {
    q: "Can AI reduce lab dips?",
    a: "Yes. By predicting final colors before production, AI reduces the number of trial-and-error lab dips required, saving time, materials, and costs.",
  },
  {
    q: "Does AI replace spectrophotometers?",
    a: "No. AI works alongside spectrophotometers — the spectrophotometer provides the objective color measurements that feed the AI model.",
  },
  {
    q: "Can AI integrate with ERP and MES systems?",
    a: "Yes. AI color matching systems can integrate with existing ERP and MES systems to enable seamless data flow and automated decision-making.",
  },
  {
    q: "How long does implementation take?",
    a: "A phased implementation typically takes 4–6 months from assessment to full production scaling, depending on the complexity of the manufacturing environment.",
  },
];

const TAKEAWAYS = [
  "Color mismatches are usually caught after dyeing, when the cost is already locked in.",
  "AI prediction moves the check upfront, using recipe and process data to estimate final color before bulk production.",
  "It doesn't replace spectrophotometers or your color team — it removes the guesswork between them.",
  "Factories with digital, batch-level color data are ready to start today; others can begin by digitizing lab dip records.",
  "A focused pilot on one product line is the lowest-risk way to prove the ROI before scaling.",
];

/* ============================================================
   SMALL PRESENTATIONAL PRIMITIVES
   ============================================================ */

const SectionHeader = ({ number, title, description, id }) => (
  <div id={id} className="scroll-mt-24 sm:scroll-mt-28 mb-6 sm:mb-8">
    <div className="flex items-center gap-2 sm:gap-3 mb-3">
      <span className="text-xs sm:text-sm font-semibold tracking-widest text-blue-400/80">
        {number}
      </span>
      <span className="h-px flex-1 bg-gradient-to-r from-blue-400/30 to-transparent" />
    </div>
    <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl text-white  mb-3 leading-tight break-words">
      {title}
    </h2>
    {description && (
      <p className="text-blue-100 text-sm sm:text-base md:text-lg leading-relaxed max-w-[75ch]">
        {description}
      </p>
    )}
  </div>
);

const InlineCTA = ({ eyebrow, title, to }) => (
  <Link
    to={to}
    className="group flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 sm:justify-between my-6 sm:my-8 rounded-xl border border-blue-500/20 bg-gradient-to-r from-slate-900/90 via-slate-800/80 to-slate-900/90 backdrop-blur-md px-4 py-4 sm:px-6 transition-all duration-300 hover:border-blue-400/40 hover:bg-gradient-to-r hover:from-slate-800 hover:via-slate-700/90 hover:to-slate-800 hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1"
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
      →
    </span>
  </Link>
);

const WorkflowStrip = ({ steps }) => (
  <div className="w-full my-6 rounded-xl border border-blue-400/20 bg-slate-800/30 p-4 sm:p-6 md:p-8 backdrop-blur-sm overflow-hidden">
    <div className="flex flex-col lg:flex-row lg:items-stretch gap-4 lg:gap-2">
      {steps.map(({ icon: Icon, title, detail }, i) => (
        <div
          key={title}
          className="flex flex-col lg:flex-row lg:flex-1 items-center"
        >
          <div className="w-full flex-1 rounded-xl bg-gradient-to-br from-slate-900/60 to-slate-800/40 border border-blue-400/10 p-4 sm:p-5 text-center transition-all duration-300 hover:border-blue-400/30 hover:shadow-lg hover:shadow-blue-500/5">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-blue-500/10 border border-blue-400/20 flex items-center justify-center mx-auto mb-3">
              <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-blue-400" />
            </div>
            <p className="text-white text-sm sm:text-base font-semibold mb-1">
              {title}
            </p>
            <p className="text-blue-200/60 text-xs sm:text-sm leading-relaxed">
              {detail}
            </p>
          </div>
          {i < steps.length - 1 && (
            <div className="flex items-center justify-center py-2 lg:py-0 lg:px-1">
              <span className="hidden lg:inline text-blue-400/50 text-xl font-light">
                →
              </span>
              <span className="lg:hidden text-blue-400/30 text-xs">↓</span>
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
);

/* ============================================================
   PAGE
   ============================================================ */

const TextileColorMatchingBlog = () => {
  const [progress, setProgress] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);
  const articleRef = useRef(null);

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
  const { openConsultation } = useConsultation();
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-gradient-to-b from-slate-900 via-blue-950 to-black">
      <SEO {...seoData.textileColorMatching} />

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

            <div className="mb-4 sm:mb-6">
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium inline-flex items-center">
                <Tag className="w-3 h-3 mr-2 flex-shrink-0" />
                Textile & AI
              </span>
            </div>

            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6 text-white leading-tight  break-words">
              Textile Color Matching Explained: A Complete Guide to Accurate
              Fabric Color Matching in 2026
            </h1>

            <p className="text-sm xs:text-base sm:text-lg md:text-xl text-blue-200/80 leading-relaxed mb-6 sm:mb-8 max-w-[70ch]">
              Color consistency is one of the biggest quality challenges in
              textile manufacturing — here's why manual matching creates waste,
              and how AI helps close the gap.
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
                <span>12 min read</span>
              </div>
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
                  src="/blogs/blog12.png"
                  alt="AI-based textile color matching in a fabric dyeing unit"
                  className="w-full h-40 xs:h-48 sm:h-64 md:h-96 object-cover rounded-xl"
                  loading="lazy"
                />
              </div>

              <div className="max-w-[75ch] mx-auto">
                <p className="text-base xs:text-lg sm:text-xl text-blue-50 leading-relaxed mb-5 sm:mb-8">
                  Color consistency is one of the biggest challenges in textile
                  manufacturing. Even small shade variations can cause rejected
                  batches, production delays, and higher costs. Manual color
                  matching is slow, subjective, and often detects problems only
                  after production.
                </p>

                {/* Section 1 */}
                <SectionHeader
                  id="what-is-color-matching"
                  number="01"
                  title="What Is Textile Color Matching?"
                  description="Understanding the problem before the solution."
                />
                <h3 className="text-lg xs:text-xl text-white font-medium mb-2 mt-6">
                  Why Color Matching Matters
                </h3>
                <p className="text-blue-100 leading-relaxed mb-6 text-sm xs:text-base">
                  Textile color matching is the process of ensuring a dyed
                  fabric matches the target color specified by the customer or
                  brand. Color is often the first thing a buyer notices — when
                  it matches expectations, the product moves forward; when it
                  doesn't, the consequences ripple across the entire production
                  chain.
                </p>
                <h3 className="text-lg xs:text-xl text-white font-medium mb-2 mt-6">
                  How Color Matching Affects Fabric Quality
                </h3>
                <p className="text-blue-50 leading-relaxed mb-6 text-sm xs:text-base">
                  Color accuracy is directly tied to perceived quality. A fabric
                  with consistent color signals reliability, while even minor
                  shade variation — across batches or within the same roll — can
                  make a product appear inferior regardless of its physical
                  performance.
                </p>
                <h3 className="text-lg xs:text-xl text-white font-medium mb-2 mt-6">
                  Why Consistent Colors Are Difficult
                </h3>
                <p className="text-blue-50 leading-relaxed mb-6 text-sm xs:text-base">
                  Raw material variation, dye batch inconsistencies,
                  environmental conditions, aging machinery, subjective human
                  assessment, and differences in fabric construction all combine
                  to make consistent color surprisingly hard to achieve run
                  after run.
                </p>
                <h3 className="text-lg xs:text-xl text-white font-medium mb-2 mt-6">
                  Business Impact
                </h3>
                <p className="text-blue-50 leading-relaxed mb-8 text-sm xs:text-base">
                  Poor color matching costs far more than the rejected fabric
                  itself — it shows up in rework, delays, returns, and eroded
                  buyer trust, which is why manufacturers are turning to
                  AI-powered color matching and digital color management.
                </p>

                <InlineCTA
                  eyebrow="Related"
                  title="Learn more about our Textile Industry AI Solutions"
                  to="/textile-manufacturing-software"
                />

                {/* Section 2 */}
                <SectionHeader
                  id="why-it-matters"
                  number="02"
                  title="Why Textile Manufacturers Should Care"
                  description="Color mismatch is a cost issue, not just a quality issue."
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 my-6">
                  {IMPACT_CARDS.map(({ icon: Icon, title, text }) => (
                    <div
                      key={title}
                      className="bg-slate-800/30 border border-blue-400/20 p-4 xs:p-5 sm:p-6 rounded-xl backdrop-blur-sm transition-all duration-[250ms] ease-out hover:-translate-y-1 hover:border-blue-400/40"
                    >
                      <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-blue-400 mb-3" />
                      <h4 className="text-white font-medium mb-2">{title}</h4>
                      <p className="text-blue-50 text-sm leading-relaxed">
                        {text}
                      </p>
                    </div>
                  ))}
                </div>
                <p className="text-blue-100/90 leading-relaxed mb-8 text-sm xs:text-base">
                  Consider a mid-sized mill producing 50,000 meters a month.
                  Even a 3% rejection rate from color mismatch is 1,500 wasted
                  meters every month — before counting the labor, dye, water,
                  and energy already invested.
                </p>

                {/* Section 3 */}
                <SectionHeader
                  id="how-colors-are-measured"
                  number="03"
                  title="How Textile Colors Are Measured"
                  description="Delta E, LAB color space, and why instruments beat the human eye."
                />
                <p className="text-blue-100/90 leading-relaxed mb-6 text-sm xs:text-base">
                  Color measurement has evolved from subjective visual
                  assessment to precise, data-driven analysis. A
                  spectrophotometer measures how much light a fabric reflects at
                  each wavelength, giving objective, repeatable readings that
                  the human eye simply can't match.
                </p>
                <h3 className="text-lg xs:text-xl text-white font-medium mb-2 mt-6">
                  Delta E (ΔE)
                </h3>
                <p className="text-blue-100/90 leading-relaxed mb-6 text-sm xs:text-base">
                  Delta E is the standard metric for the total color difference
                  between a sample and a reference. Acceptable tolerances
                  typically run from under 0.50 to 1.50 ΔE, and a ΔE of 1.0 or
                  less is generally imperceptible to the human eye.
                </p>
                <h3 className="text-lg xs:text-xl text-white font-medium mb-2 mt-6">
                  LAB Color Space vs. RGB and CMYK
                </h3>
                <p className="text-blue-100/90 leading-relaxed mb-6 text-sm xs:text-base">
                  CIELAB (L*a*b*) is the industry standard for textile color
                  communication because it's device-independent and perceptually
                  uniform. RGB is built for screens and CMYK for print — both
                  are device-dependent and unreliable for communicating
                  specifications across facilities.
                </p>
                <h3 className="text-lg xs:text-xl text-white font-medium mb-2 mt-6">
                  Human Eye vs. Spectrophotometer
                </h3>
                <p className="text-blue-100/90 leading-relaxed mb-6 text-sm xs:text-base">
                  Human color perception shifts with lighting, background, and
                  the observer's own state. Spectrophotometers remove that
                  subjectivity, and when combined with AI analysis they enable
                  predictive color matching that goes far beyond visual
                  judgment.
                </p>
                {/* <WorkflowStrip steps={MEASUREMENT_WORKFLOW_STEPS} /> */}

                {/* Section 4 */}
                <SectionHeader
                  id="how-ai-improves"
                  number="04"
                  title="How AI Improves Textile Color Matching"
                  description="From reactive trial-and-error to predictive, data-driven matching."
                />
                <ol className="space-y-4 mb-8">
                  {[
                    [
                      "Collect production data",
                      "Historical dyeing runs — fabric composition, dye recipes, process parameters, and final color measurements.",
                    ],
                    [
                      "Measure color",
                      "Spectrophotometers provide precise, objective measurements of both target and produced samples.",
                    ],
                    [
                      "Analyze dye recipes",
                      "AI models find the relationship between recipes, process parameters, and final color outcomes.",
                    ],
                    [
                      "Predict final color",
                      "The model estimates the color a given recipe and parameter set will produce — before dyeing.",
                    ],
                    [
                      "Recommend process adjustments",
                      "If the prediction falls outside tolerance, AI recommends recipe or parameter changes to hit the target.",
                    ],
                  ].map(([title, text], i) => (
                    <li key={title} className="flex gap-3 sm:gap-4">
                      <span className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 flex items-center justify-center text-xs sm:text-sm font-semibold">
                        {i + 1}
                      </span>
                      <div className="min-w-0">
                        <p className="text-white font-medium mb-1 text-sm lg:text-lg">
                          {title}
                        </p>
                        <p className="text-blue-50 text-xs xs:text-sm leading-relaxed">
                          {text}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>

                <InlineCTA
                  eyebrow="Related"
                  title="Discover our AI & Machine Learning Services"
                  to="/ai-ml-services"
                />

                {/* Section 5 — Workflow */}
                <SectionHeader
                  id="the-workflow"
                  number="05"
                  title="How an AI-Based Color Matching System Works"
                  description="From fabric sample to production approval."
                />
                <div className="w-full my-6 rounded-xl border border-blue-400/20 bg-slate-800/30 p-4 sm:p-6 md:p-8 backdrop-blur-sm overflow-hidden">
                  <div className="flex flex-col lg:flex-row lg:items-stretch gap-4 lg:gap-2">
                    {[
                      {
                        icon: Layers,
                        title: "Fabric Sample",
                        detail: "Starting material",
                      },
                      {
                        icon: ScanEye,
                        title: "Color Measurement",
                        detail: "Spectrophotometer reading",
                      },
                      {
                        icon: Sliders,
                        title: "Production Parameters",
                        detail: "Temp, time, pH, etc.",
                      },
                      {
                        icon: Cpu,
                        title: "AI Color Matching Engine",
                        detail: "Predicts final color",
                      },
                      {
                        icon: Target,
                        title: "Color Prediction",
                        detail: "Estimated Delta E, LAB",
                      },
                      {
                        icon: FlaskConical,
                        title: "Recipe Optimization",
                        detail: "Adjusts recipe if needed",
                      },
                      {
                        icon: ClipboardCheck,
                        title: "Production Approval",
                        detail: "Proceed with confidence",
                      },
                    ].map(({ icon: Icon, title, detail }, i, arr) => (
                      <div
                        key={title}
                        className="flex flex-col lg:flex-row lg:flex-1 items-center"
                      >
                        <div className="w-full flex-1 rounded-xl bg-gradient-to-br from-slate-900/60 to-slate-800/40 border border-blue-400/10 p-4 sm:p-5 text-center transition-all duration-300 hover:border-blue-400/30 hover:shadow-lg hover:shadow-blue-500/5">
                          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-blue-500/10 border border-blue-400/20 flex items-center justify-center mx-auto mb-3">
                            <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-blue-400" />
                          </div>
                          <p className="text-white text-sm sm:text-base font-semibold mb-1">
                            {title}
                          </p>
                          <p className="text-blue-200/60 text-xs sm:text-sm leading-relaxed">
                            {detail}
                          </p>
                        </div>
                        {i < arr.length - 1 && (
                          <div className="flex items-center justify-center py-2 lg:py-0 lg:px-1">
                            <span className="hidden lg:inline text-blue-400/50 text-xl font-light">
                              →
                            </span>
                            <span className="lg:hidden text-blue-400/30 text-xs">
                              ↓
                            </span>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Section 6 — Best Practices grid */}
                <SectionHeader
                  id="best-practices"
                  number="06"
                  title="Best Practices for Accurate Color Matching"
                  description="What consistently separates reliable factories from the rest."
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 my-6">
                  {BENEFITS.map(({ icon: Icon, title, text }) => (
                    <div
                      key={title}
                      className="bg-slate-800/30 border border-blue-400/20 rounded-xl p-4 sm:p-5 text-center backdrop-blur-sm"
                    >
                      <Icon className="w-6 h-6 text-blue-400 mx-auto mb-3" />
                      <p className="text-white text-sm lg:text-base font-medium mb-1">
                        {title}
                      </p>
                    </div>
                  ))}
                </div>

                <InlineCTA
                  eyebrow="Related"
                  title="Explore our Textile Industry AI Solutions"
                  to="/textile-manufacturing-software"
                />

                {/* Section 7 — KPI / Benefits grid */}
                <SectionHeader
                  id="benefits"
                  number="07"
                  title="Business Benefits of AI-Powered Color Matching"
                  description="What you can realistically expect."
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 my-6">
                  {KPI_CARDS.map(({ icon: Icon, title, text }) => (
                    <div
                      key={title}
                      className="bg-slate-800/30 border border-blue-400/20 rounded-xl p-4 sm:p-5 text-center backdrop-blur-sm"
                    >
                      <Icon className="w-6 h-6 text-blue-400 mx-auto mb-3" />
                      <p className="text-white text-sm lg:text-base font-medium mb-1">
                        {title}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Section 8 — Data table */}
                <SectionHeader
                  id="production-data"
                  number="08"
                  title="What Production Data Is Used?"
                  description="The inputs that feed the color prediction model."
                />

                <div className="my-6 rounded-xl border border-blue-400/20 overflow-hidden bg-slate-800/30">
                  {/* Desktop Table View - Hidden on mobile */}
                  <div className="hidden sm:block">
                    <div className="max-h-[480px] overflow-y-auto overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead className="sticky top-0 bg-slate-800/95 backdrop-blur-sm z-10">
                          <tr>
                            <th className="text-left text-white font-semibold px-4 py-3.5 border-b border-blue-400/20 text-xs uppercase tracking-wider">
                              Production Data
                            </th>
                            <th className="text-left text-white font-semibold px-4 py-3.5 border-b border-blue-400/20 text-xs uppercase tracking-wider">
                              Why It Matters
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-blue-400/10">
                          {DATA_TABLE.map((row) => (
                            <tr
                              key={row.param}
                              className="transition-colors duration-150 hover:bg-blue-500/5"
                            >
                              <td className="px-4 py-3.5 text-blue-50 font-medium whitespace-nowrap">
                                {row.param}
                              </td>
                              <td className="px-4 py-3.5 text-blue-50 leading-relaxed">
                                {row.why}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Mobile Card View - Visible only on mobile */}
                  <div className="sm:hidden divide-y divide-blue-400/10">
                    {DATA_TABLE.map((row) => (
                      <div
                        key={row.param}
                        className="px-4 py-4 space-y-1.5 hover:bg-blue-500/5 transition-colors duration-150"
                      >
                        <div className="flex items-start gap-2">
                          <span className="text-blue-400 text-xs font-semibold uppercase tracking-wider flex-shrink-0 mt-0.5">
                            Data
                          </span>
                          <span className="text-white text-sm font-medium leading-snug">
                            {row.param}
                          </span>
                        </div>
                        <div className="flex items-start gap-2 pl-[2px]">
                          <span className="text-blue-400/60 text-xs font-semibold uppercase tracking-wider flex-shrink-0 mt-0.5">
                            Why
                          </span>
                          <span className="text-blue-200/70 text-sm leading-relaxed">
                            {row.why}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Table footer with row count */}
                  <div className="border-t border-blue-400/10 px-4 py-2.5 bg-slate-800/50">
                    <p className="text-blue-200/40 text-xs">
                      {DATA_TABLE.length} data points · Scroll for more
                    </p>
                  </div>
                </div>

                {/* Section 9 — Checklist */}
                <SectionHeader
                  id="readiness"
                  number="09"
                  title="Is Your Textile Factory Ready?"
                  description="Answer honestly — four or more 'yes' answers means you're ready to explore a pilot."
                />
                <ul className="space-y-3 my-6">
                  {CHECKLIST.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 bg-slate-800/30 border border-blue-400/10 rounded-lg p-3 sm:p-4"
                    >
                      <span className="text-blue-50 text-xs xs:text-sm leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Section 10 — Roadmap */}
                {/* <SectionHeader
                  id="implementation"
                  number="10"
                  title="Implementation Roadmap"
                  description="How manufacturers typically roll this out."
                />
                <div className="space-y-4 my-6">
                  {TIMELINE.map(
                    ({ icon: Icon, phase, title, duration, text }) => (
                      <div
                        key={phase}
                        className="flex gap-4 bg-slate-800/30 border border-blue-400/20 rounded-xl p-4 sm:p-5 backdrop-blur-sm"
                      >
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-500/10 border border-blue-400/20 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
                        </div>
                        <div className="min-w-0">
                          <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1 mb-1">
                            <span className="text-xs font-semibold tracking-widest text-blue-400/80">
                              {phase}
                            </span>
                            <p className="text-white font-medium text-sm xs:text-base">
                              {title}
                            </p>
                            <span className="text-blue-300/50 text-xs">
                              {duration}
                            </span>
                          </div>
                          <p className="text-blue-200/70 text-xs xs:text-sm leading-relaxed">
                            {text}
                          </p>
                        </div>
                      </div>
                    ),
                  )}
                </div> */}

                {/* Section 11 — FAQ */}
                <SectionHeader
                  id="faq"
                  number="11"
                  title="Frequently Asked Questions"
                />
                <div className="my-6 space-y-3">
                  {FAQS.map((item, i) => {
                    const open = openFaq === i;
                    return (
                      <div
                        key={item.q}
                        className="border border-blue-400/20 rounded-xl bg-slate-800/30 backdrop-blur-sm overflow-hidden"
                      >
                        <button
                          onClick={() => setOpenFaq(open ? -1 : i)}
                          aria-expanded={open}
                          className="w-full flex items-center justify-between text-left px-4 sm:px-5 py-3 sm:py-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                        >
                          <span className="text-white font-medium pr-4 text-sm xs:text-base">
                            {item.q}
                          </span>
                          <ChevronDown
                            className={`w-5 h-5 text-blue-400 flex-shrink-0 transition-transform duration-[250ms] ease-out ${open ? "rotate-180" : ""}`}
                          />
                        </button>
                        <div
                          className="grid transition-[grid-template-rows] duration-[250ms] ease-out"
                          style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
                        >
                          <div className="overflow-hidden">
                            <p className="px-4 sm:px-5 pb-4 text-blue-200/70 text-xs xs:text-sm leading-relaxed">
                              {item.a}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Section 12 — Conclusion + Key Takeaways */}
                <SectionHeader id="conclusion" number="12" title="Conclusion" />
                <p className="text-blue-100/90 leading-relaxed mb-6 text-sm xs:text-base">
                  Color inconsistency is one of the most persistent and costly
                  challenges in textile manufacturing. AI transforms color
                  matching from a reactive, trial-and-error process into a
                  predictive, data-driven capability — analyzing historical
                  production data and spectrophotometer readings to predict
                  final colors before production begins. The technology is
                  mature and the business case is clear; the question is not
                  whether to adopt it, but when.
                </p>

                <div className="my-8 rounded-xl border border-blue-400/30 bg-gradient-to-br from-blue-900/30 to-slate-900/30 p-5 sm:p-6 backdrop-blur-sm">
                  <h4 className="text-white font-semibold mb-4">
                    Key Takeaways
                  </h4>
                  <ul className="space-y-2">
                    {TAKEAWAYS.map((t) => (
                      <li
                        key={t}
                        className="flex gap-3 text-blue-100/90 text-xs xs:text-sm leading-relaxed"
                      >
                        <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Premium CTA block */}
                <div className="my-10 rounded-2xl bg-gradient-to-br from-blue-600 via-blue-800 to-black p-6 xs:p-8 md:p-10 text-center">
                  <h3 className="text-xl xs:text-2xl md:text-3xl text-white font-semibold mb-3">
                    Improve Textile Color Consistency with AI-Powered Color
                    Matching
                  </h3>
                  <p className="text-blue-100/80 max-w-[60ch] mx-auto mb-6 text-sm xs:text-base">
                    Discover how AI-powered textile color matching can help your
                    manufacturing team reduce shade variation, improve
                    production quality, minimize fabric waste, and achieve
                    consistent color accuracy across every batch.
                  </p>
                  <div className="flex flex-col xs:flex-row flex-wrap items-center justify-center gap-3 xs:gap-4">
                    <button
                      type="button"
                      onClick={openConsultation}
                      className="w-full xs:w-auto text-center px-6 py-3 rounded-lg bg-white text-blue-900 font-medium transition-all duration-[250ms] ease-out hover:-translate-y-1 hover:shadow-lg hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-blue-900"
                    >
                      Schedule AI Consultation
                    </button>
                    <Link
                      to="/textile-manufacturing-software"
                      className="w-full xs:w-auto text-center px-6 py-3 rounded-lg border border-white/40 text-white font-medium transition-all duration-[250ms] ease-out hover:-translate-y-1 hover:bg-white/10"
                    >
                      Explore Textile Industry Solutions
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
                  tag: "Comparison",
                  title: "AI vs Traditional Textile Color Matching",
                },
                {
                  tag: "Thought Leadership",
                  title: "How AI is Transforming Textile Color Matching",
                },
                {
                  tag: "Industry Use Case",
                  title: "AI-Powered Fabric Shrinkage Prediction",
                },
                {
                  tag: "Best Practices",
                  title: "AI Textile Quality Inspection",
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

export default TextileColorMatchingBlog;
