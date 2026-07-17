import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  Calendar,
  User,
  Clock,
  ArrowLeft,
  Share2,
  Tag,
  Layers,
  Droplet,
  Settings,
  Cpu,
  Target,
  ClipboardCheck,
  CheckCircle2,
  Circle,
  ChevronDown,
  AlertTriangle,
  RotateCcw,
  Recycle,
  MessageSquareWarning,
  ShieldAlert,
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
} from "lucide-react";
import SEO from "../../components/SEO";
import { seoData } from "../../utils/seoData";

/* ============================================================
   STATIC CONTENT — everything driving the page lives here so
   the layout components below stay purely presentational.
   ============================================================ */

const TOC_SECTIONS = [
  {
    id: "what-is-shrinkage-prediction",
    label: "What Is Fabric Shrinkage Prediction?",
  },
  { id: "why-it-matters", label: "Why Manufacturers Should Care" },
  { id: "how-ai-predicts", label: "How AI Predicts Shrinkage" },
  { id: "the-workflow", label: "How the System Works" },
  { id: "benefits", label: "Benefits of AI Prediction" },
  { id: "production-data", label: "Production Data Used" },
  { id: "readiness", label: "Is Your Factory Ready?" },
  { id: "implementation", label: "Implementation Roadmap" },
  { id: "faq", label: "Frequently Asked Questions" },
  { id: "conclusion", label: "Conclusion" },
];

const IMPACT_CARDS = [
  {
    icon: RotateCcw,
    title: "Production Rework",
    text: "Fabric that shrinks beyond spec has to be reprocessed or written off entirely, adding cost with no output to show for it.",
  },
  {
    icon: Recycle,
    title: "Fabric Waste",
    text: "Cutting markers without proper shrinkage allowances turn straight into wasted material and garments that don't fit.",
  },
  {
    icon: MessageSquareWarning,
    title: "Customer Complaints",
    text: "Buyers expect fabric that performs as specified. When it doesn't, replacements, discounts, and disputes follow.",
  },
  {
    icon: AlertTriangle,
    title: "Delayed Deliveries",
    text: "Every rework cycle eats into your schedule, turning into missed dates and penalty clauses.",
  },
  {
    icon: ShieldAlert,
    title: "Returns",
    text: "Shrinkage failures caught downstream mean returns, credits, and lost margin on product you already shipped.",
  },
  {
    icon: TrendingDown,
    title: "Brand Reputation",
    text: "Buyers talk. A reputation for inconsistent quality spreads quickly, and it's hard to win back.",
  },
];

const WORKFLOW_STEPS = [
  {
    icon: Layers,
    title: "Fabric Data",
    detail: "Fiber type, construction, GSM",
  },
  {
    icon: Droplet,
    title: "Dyeing Parameters",
    detail: "Temperature, time, chemicals",
  },
  {
    icon: Settings,
    title: "Finishing Parameters",
    detail: "Process settings, machine conditions",
  },
  {
    icon: Cpu,
    title: "AI Model",
    detail: "Analyzes patterns, predicts outcome",
  },
  {
    icon: Target,
    title: "Recommendation",
    detail: "Suggested parameter adjustments",
  },
  {
    icon: ClipboardCheck,
    title: "Quality Approval",
    detail: "Manager reviews and signs off",
  },
];

const BENEFITS = [
  {
    icon: Recycle,
    title: "Reduce Fabric Waste",
    text: "Adjust parameters before the batch runs, not after it fails.",
  },
  {
    icon: Gauge,
    title: "Improve Consistency",
    text: "Standardize dyeing outcomes across batches and shifts.",
  },
  {
    icon: DollarSign,
    title: "Lower Production Cost",
    text: "Fewer rejections mean less rework and less wasted material.",
  },
  {
    icon: BadgeCheck,
    title: "Better Quality Control",
    text: "Catch issues proactively instead of hoping inspection passes.",
  },
  {
    icon: Zap,
    title: "Fewer Rejected Batches",
    text: "Meet shrinkage specs the first time, without repeat cycles.",
  },
  {
    icon: Smile,
    title: "Higher Customer Satisfaction",
    text: "Reliable quality builds trust — and repeat orders.",
  },
];

const DATA_TABLE = [
  {
    param: "Fabric Composition",
    why: "Different fibers shrink differently — cotton shrinks more than polyester.",
  },
  {
    param: "Yarn Count",
    why: "Finer yarns can behave differently than coarser yarns during wet processing.",
  },
  {
    param: "Fabric Construction",
    why: "Knitted fabrics shrink more than woven; tightness of construction matters.",
  },
  {
    param: "GSM (Grams per Sq. Meter)",
    why: "Heavier fabrics can have different shrinkage characteristics than lighter ones.",
  },
  {
    param: "Dyeing Temperature",
    why: "Higher temperatures can cause more shrinkage — control is critical.",
  },
  {
    param: "Dyeing Time",
    why: "Longer processing times can increase shrinkage.",
  },
  {
    param: "Chemical Concentrations",
    why: "Some chemicals affect fiber behavior and shrinkage.",
  },
  {
    param: "Finishing Process",
    why: "Different finishing methods produce different shrinkage results.",
  },
  {
    param: "Drying Conditions",
    why: "Temperature, time, and tension during drying all affect shrinkage.",
  },
  {
    param: "Machine Settings",
    why: "Stentor width, speed, and overfeed settings influence final dimensions.",
  },
  {
    param: "Humidity",
    why: "Environmental conditions can affect processing and shrinkage.",
  },
];

const CHECKLIST = [
  "Do you currently track shrinkage rates for your production batches?",
  "Do you record dyeing and finishing parameters for each batch?",
  "Are you experiencing quality complaints related to shrinkage?",
  "Do you have high fabric waste or rejection rates?",
  "Is your production data stored in a digital format?",
  "Do you have basic IT infrastructure (computers, internet)?",
  "Are you open to training your team on new technology?",
  "Do you see shrinkage as a significant cost driver in your factory?",
];

const TIMELINE = [
  {
    icon: ClipboardList,
    phase: "Phase 1",
    title: "Assessment",
    duration: "1–2 months",
    text: "Identify shrinkage-related costs, audit data collection, define success.",
  },
  {
    icon: Database,
    phase: "Phase 2",
    title: "Data Collection",
    duration: "2–3 months",
    text: "Organize fabric, processing, and quality-test data. Data quality drives accuracy.",
  },
  {
    icon: FlaskConical,
    phase: "Phase 3",
    title: "Model Development",
    duration: "2–3 months",
    text: "Build a prediction model on your historical data, validated against real results.",
  },
  {
    icon: Rocket,
    phase: "Phase 4",
    title: "Pilot Deployment",
    duration: "2–3 months",
    text: "Test on one line or product. Measure against baseline metrics.",
  },
  {
    icon: BarChart3,
    phase: "Phase 5",
    title: "Full Rollout",
    duration: "3–6 months",
    text: "Scale across the factory, integrate systems, train teams, monitor continuously.",
  },
];

const FAQS = [
  {
    q: "Can AI predict shrinkage before dyeing?",
    a: "Yes. AI models can predict shrinkage based on fabric properties and planned processing parameters before you start dyeing, so you can adjust upfront rather than fixing problems after production.",
  },
  {
    q: "Does AI replace laboratory testing?",
    a: "No. AI complements lab testing. Lab tests provide the training data; AI turns that into fast predictions, while lab testing still matters for validation and quality assurance.",
  },
  {
    q: "What production data is required?",
    a: "Data on fabric composition, construction, dyeing parameters, finishing conditions, and quality test results. The more comprehensive the data, the more accurate the predictions.",
  },
  {
    q: "How accurate are AI predictions?",
    a: "Machine learning models can reach high prediction accuracy for fabric properties, and accuracy scales with the quality and quantity of your data.",
  },
  {
    q: "Can AI integrate with ERP or MES software?",
    a: "Yes. AI solutions can plug into your existing ERP, MES, or quality management systems for seamless data flow and automated decision support.",
  },
  {
    q: "Is AI expensive to implement?",
    a: "Costs vary by factory size and scope. Many units start with a focused pilot on one product line to keep initial investment manageable, with ROI coming from reduced waste and rejections.",
  },
  {
    q: "How long does it take to see results?",
    a: "Many factories see improvements within 2–3 months of starting a pilot. The model predicts as soon as it has enough data, and improves as more is collected.",
  },
  {
    q: "What if my data is not digital?",
    a: "Start by digitizing existing records. Many factories begin with manual entry and move to automated data collection over time — the key is to start somewhere.",
  },
  {
    q: "Will AI replace my quality team?",
    a: "No. AI handles repetitive prediction tasks so your quality team can focus on decision-making and process improvement.",
  },
  {
    q: "What is the first step to get started?",
    a: "Assess your current situation, identify your biggest shrinkage-related problem, collect data on it, then talk to a provider who understands textile manufacturing — and start with a small pilot.",
  },
];

const TAKEAWAYS = [
  "Shrinkage failures are usually caught after production, when the cost is already locked in.",
  "AI prediction moves the check upfront, using your dyeing and finishing data to estimate shrinkage before a bulk run.",
  "It doesn't replace lab testing or your quality team — it removes the guesswork between them.",
  "Factories with digital, batch-level data are ready to start today; others can begin by digitizing records.",
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
    <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl text-white font-semibold mb-3 leading-tight break-words">
      {title}
    </h2>
    {description && (
      <p className="text-blue-200/70 text-sm sm:text-base md:text-lg leading-relaxed max-w-[75ch]">
        {description}
      </p>
    )}
  </div>
);

const InlineCTA = ({ eyebrow, title, to }) => (
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
      →
    </span>
  </Link>
);

/* ============================================================
   PAGE
   ============================================================ */

const FabricShrinkagePredictionBlog = () => {
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState(TOC_SECTIONS[0].id);
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

      let current = TOC_SECTIONS[0].id;
      for (const section of TOC_SECTIONS) {
        const node = document.getElementById(section.id);
        if (node && node.getBoundingClientRect().top <= 140) {
          current = section.id;
        }
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    const node = document.getElementById(id);
    if (node) {
      window.scrollTo({
        top: node.getBoundingClientRect().top + window.scrollY - 100,
        behavior: "smooth",
      });
    }
  };

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

            <div className="mb-4 sm:mb-6">
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium inline-flex items-center">
                <Tag className="w-3 h-3 mr-2 flex-shrink-0" />
                Textile & AI
              </span>
            </div>

            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6 text-white leading-tight font-semibold break-words">
              Fabric Shrinkage Prediction: A Complete Guide to Using AI for
              Better Textile Quality
            </h1>

            <p className="text-sm xs:text-base sm:text-lg md:text-xl text-blue-200/80 leading-relaxed mb-6 sm:mb-8 max-w-[70ch]">
              A practical guide for Indian factory owners and operations
              managers on predicting shrinkage before production — not after it
              fails.
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
                <span>13 min read</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article + Sidebar */}
      <section className="py-6 sm:py-8">
        <div className="container mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 max-w-full">
          <div className="max-w-6xl mx-auto grid grid-cols-1 xl:grid-cols-[1fr_300px] gap-6 lg:gap-8 items-start">
            {/* ARTICLE */}
            <article
              ref={articleRef}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl shadow-lg border border-blue-400/20 p-4 xs:p-5 sm:p-6 md:p-10 min-w-0 w-full overflow-hidden"
            >
              <div className="mb-5 sm:mb-8">
                <img
                  src="/blogs/blog9.png"
                  alt="AI-based fabric shrinkage prediction in a textile factory"
                  className="w-full h-40 xs:h-48 sm:h-64 md:h-96 object-cover rounded-xl"
                  loading="lazy"
                />
              </div>

              <div className="max-w-[75ch] mx-auto">
                <p className="text-base xs:text-lg sm:text-xl text-blue-200/80 leading-relaxed mb-5 sm:mb-8">
                  Fabric shrinkage is one of those problems everyone in textile
                  manufacturing knows about, but few have truly solved. A batch
                  looks perfect coming off the line — then your customer washes
                  it, and it shrinks past usable limits. The batch gets
                  rejected, you absorb the rework cost, and your customer starts
                  looking elsewhere.
                </p>
                <p className="text-blue-100/90 leading-relaxed mb-6 text-sm xs:text-base">
                  Traditional shrinkage management is reactive: produce, test,
                  hope it passes. AI-powered prediction flips that order — you
                  know how a fabric will behave before you commit to bulk
                  production, and adjust dyeing and finishing parameters upfront
                  instead of firefighting afterward.
                </p>

                {/* Section 1 */}
                <SectionHeader
                  id="what-is-shrinkage-prediction"
                  number="01"
                  title="What Is Fabric Shrinkage Prediction?"
                  description="Understanding the problem before the solution."
                />
                <h3 className="text-lg xs:text-xl text-white font-medium mb-2 mt-6">
                  Understanding Fabric Shrinkage
                </h3>
                <p className="text-blue-100/90 leading-relaxed mb-6 text-sm xs:text-base">
                  Fabric shrinkage is the change in length or width after
                  washing, drying, or wet processing. When fabric absorbs water,
                  fibers swell; as they dry, they contract, and any tension held
                  during manufacturing relaxes as shrinkage. Natural fibers like
                  cotton, rayon, and wool shrink more than stable synthetics
                  like polyester and nylon, and looser knit constructions shrink
                  more than tight weaves.
                </p>
                <h3 className="text-lg xs:text-xl text-white font-medium mb-2 mt-6">
                  What Prediction Actually Means
                </h3>
                <p className="text-blue-100/90 leading-relaxed mb-6 text-sm xs:text-base">
                  Traditionally, prediction meant lab testing: mark a sample,
                  wash and dry it under controlled conditions, measure the
                  change. It works, but it's slow — by the time results are in,
                  bulk production may have already started. AI prediction uses
                  data from previous batches to estimate shrinkage from fabric
                  composition, dyeing parameters, and processing conditions,
                  before production instead of after.
                </p>
                <h3 className="text-lg xs:text-xl text-white font-medium mb-2 mt-6">
                  Why Traditional Testing Falls Short
                </h3>
                <p className="text-blue-100/90 leading-relaxed mb-8 text-sm xs:text-base">
                  Lab testing has three limits: it's reactive (money is already
                  spent by the time you test), it's slow (hours or days of
                  delay), and it's sample-based (one swatch stands in for a
                  whole batch that can vary internally). AI addresses all three
                  — it runs in real time, on your actual production data, across
                  full batches.
                </p>

                <InlineCTA
                  eyebrow="Related"
                  title="Explore Textile Industry Solutions"
                  to="/textile-ai-solutions"
                />

                {/* Section 2 */}
                <SectionHeader
                  id="why-it-matters"
                  number="02"
                  title="Why Textile Manufacturers Should Care"
                  description="Uncontrolled shrinkage is a cost issue, not just a quality issue."
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 my-6">
                  {IMPACT_CARDS.map(({ icon: Icon, title, text }) => (
                    <div
                      key={title}
                      className="bg-slate-800/30 border border-blue-400/20 p-4 xs:p-5 sm:p-6 rounded-xl backdrop-blur-sm transition-all duration-[250ms] ease-out hover:-translate-y-1 hover:border-blue-400/40"
                    >
                      <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-blue-400 mb-3" />
                      <h4 className="text-white font-medium mb-2">{title}</h4>
                      <p className="text-blue-200/70 text-sm leading-relaxed">
                        {text}
                      </p>
                    </div>
                  ))}
                </div>
                <p className="text-blue-100/90 leading-relaxed mb-8 text-sm xs:text-base">
                  Consider a mid-sized unit producing 100,000 meters a month.
                  Even a 2% rejection rate from shrinkage is 2,000 wasted meters
                  every month — and that's before counting rework, delays, and
                  relationship damage on top.
                </p>

                {/* Section 3 */}
                <SectionHeader
                  id="how-ai-predicts"
                  number="03"
                  title="How AI Predicts Fabric Shrinkage"
                  description="Five steps, in plain language."
                />
                <ol className="space-y-4 mb-8">
                  {[
                    [
                      "Collect production data",
                      "Fabric composition, dyeing parameters, finishing settings, machine conditions, and past shrinkage results.",
                    ],
                    [
                      "Train the model",
                      "The model learns the relationship between what you do during production and how much the fabric shrinks — like training a new supervisor on past examples.",
                    ],
                    [
                      "Make predictions",
                      "Input the fabric and process details for a new run; the model estimates shrinkage before you start.",
                    ],
                    [
                      "Adjust parameters",
                      "If shrinkage looks excessive, adjust drying temperature or chemical concentration before committing to bulk.",
                    ],
                    [
                      "Improve continuously",
                      "Every new batch adds data, and predictions get more accurate over time.",
                    ],
                  ].map(([title, text], i) => (
                    <li key={title} className="flex gap-3 sm:gap-4">
                      <span className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 flex items-center justify-center text-xs sm:text-sm font-semibold">
                        {i + 1}
                      </span>
                      <div className="min-w-0">
                        <p className="text-white font-medium mb-1 text-sm xs:text-base">
                          {title}
                        </p>
                        <p className="text-blue-200/70 text-xs xs:text-sm leading-relaxed">
                          {text}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>

                <InlineCTA
                  eyebrow="Related"
                  title="AI & Machine Learning Services"
                  to="/ai-ml-services"
                />

                {/* Section 4 — Workflow */}
                <SectionHeader
                  id="the-workflow"
                  number="04"
                  title="How the System Works on Your Factory Floor"
                  description="From raw fabric data to a quality manager's sign-off."
                />
                <div className="w-full my-6 rounded-xl border border-blue-400/20 bg-slate-800/30 p-4 sm:p-6 backdrop-blur-sm overflow-hidden">
                  <div className="flex flex-col md:flex-row md:items-stretch gap-3">
                    {WORKFLOW_STEPS.map(({ icon: Icon, title, detail }, i) => (
                      <div
                        key={title}
                        className="flex flex-col md:flex-row md:flex-1 items-center"
                      >
                        <div className="w-full flex-1 rounded-lg bg-slate-900/40 border border-blue-400/10 p-3 sm:p-4 text-center">
                          <Icon className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                          <p className="text-white text-xs sm:text-sm font-medium">
                            {title}
                          </p>
                          <p className="text-blue-200/60 text-[11px] sm:text-xs mt-1">
                            {detail}
                          </p>
                        </div>
                        {i < WORKFLOW_STEPS.length - 1 && (
                          <span className="text-blue-400/50 my-1 md:my-0 md:mx-2 shrink-0 rotate-90 md:rotate-0">
                            →
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
                <p className="text-blue-200/70 text-xs sm:text-sm mb-8 italic">
                  Workflow diagram — replace with a custom illustration for your
                  factory floor.
                </p>

                {/* Section 5 — Benefits Grid */}
                <SectionHeader
                  id="benefits"
                  number="05"
                  title="Benefits of AI Fabric Shrinkage Prediction"
                  description="What you can realistically expect."
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 my-6">
                  {BENEFITS.map(({ icon: Icon, title, text }) => (
                    <div
                      key={title}
                      className="bg-slate-800/30 border border-blue-400/20 rounded-xl p-4 sm:p-5 text-center backdrop-blur-sm"
                    >
                      <Icon className="w-6 h-6 text-blue-400 mx-auto mb-3" />
                      <p className="text-white text-sm font-medium mb-1">
                        {title}
                      </p>
                      <p className="text-blue-200/60 text-xs leading-relaxed">
                        {text}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Section 6 — Data table */}
                <SectionHeader
                  id="production-data"
                  number="06"
                  title="What Production Data Is Used?"
                  description="The inputs that feed the prediction model."
                />
                <div className="my-6 rounded-xl border border-blue-400/20 overflow-hidden">
                  <div className="max-h-[420px] overflow-y-auto overflow-x-auto">
                    <table className="w-full min-w-[480px] text-xs sm:text-sm">
                      <thead className="sticky top-0 bg-slate-800/95 backdrop-blur-sm">
                        <tr>
                          <th className="text-left text-white font-medium px-3 sm:px-4 py-3 border-b border-blue-400/20">
                            Production Data
                          </th>
                          <th className="text-left text-white font-medium px-3 sm:px-4 py-3 border-b border-blue-400/20">
                            Why It Matters
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {DATA_TABLE.map((row) => (
                          <tr
                            key={row.param}
                            className="hover:bg-blue-500/5 transition-colors"
                          >
                            <td className="px-3 sm:px-4 py-3 border-b border-blue-400/10 text-blue-100 whitespace-nowrap">
                              {row.param}
                            </td>
                            <td className="px-3 sm:px-4 py-3 border-b border-blue-400/10 text-blue-200/70">
                              {row.why}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Section 7 — Checklist */}
                <SectionHeader
                  id="readiness"
                  number="07"
                  title="Is Your Textile Factory Ready?"
                  description="Answer honestly — four or more “yes” answers means you're ready to explore a pilot."
                />
                <ul className="space-y-3 my-6">
                  {CHECKLIST.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 bg-slate-800/30 border border-blue-400/10 rounded-lg p-3 sm:p-4"
                    >
                      <Circle className="w-5 h-5 text-blue-400/50 flex-shrink-0 mt-0.5" />
                      <span className="text-blue-100/90 text-xs xs:text-sm leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Section 8 — Timeline */}
                <SectionHeader
                  id="implementation"
                  number="08"
                  title="A Five-Phase Implementation Roadmap"
                  description="From assessment to full production rollout."
                />
                <div className="my-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                  {TIMELINE.map(
                    ({ icon: Icon, phase, title, duration, text }) => (
                      <div
                        key={phase}
                        className="bg-slate-800/30 border border-blue-400/20 rounded-xl p-4 sm:p-5 backdrop-blur-sm"
                      >
                        <Icon className="w-6 h-6 text-blue-400 mb-3" />
                        <p className="text-xs uppercase tracking-wide text-blue-400/70 mb-1">
                          {phase}
                        </p>
                        <p className="text-white font-medium mb-1">{title}</p>
                        <p className="text-blue-300/60 text-xs mb-2">
                          {duration}
                        </p>
                        <p className="text-blue-200/60 text-xs leading-relaxed">
                          {text}
                        </p>
                      </div>
                    ),
                  )}
                </div>

                <InlineCTA
                  eyebrow="Ready to start?"
                  title="Book a Consultation"
                  to="/contact"
                />

                {/* Section 9 — FAQ */}
                <SectionHeader
                  id="faq"
                  number="09"
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

                {/* Section 10 — Conclusion + Key Takeaways */}
                <SectionHeader id="conclusion" number="10" title="Conclusion" />
                <p className="text-blue-100/90 leading-relaxed mb-6 text-sm xs:text-base">
                  Fabric shrinkage is a persistent, costly challenge, and
                  traditional management of it is reactive and slow. AI
                  prediction lets you catch it before production, adjust
                  proactively, and reduce waste, rework, and cost — without
                  replacing your machines or your team. Factories across India
                  are already using it to solve exactly this problem; the only
                  question is whether yours is next.
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
                    Reduce Fabric Waste with AI-Powered Shrinkage Prediction
                  </h3>
                  <p className="text-blue-100/80 max-w-[60ch] mx-auto mb-6 text-sm xs:text-base">
                    We build custom AI solutions for Indian textile
                    manufacturers — starting with your biggest problem, piloting
                    it, and scaling what works.
                  </p>
                  <div className="flex flex-col xs:flex-row flex-wrap items-center justify-center gap-3 xs:gap-4">
                    <Link
                      to="/contact"
                      className="w-full xs:w-auto text-center px-6 py-3 rounded-lg bg-white text-blue-900 font-medium transition-all duration-[250ms] ease-out hover:-translate-y-1 hover:shadow-lg"
                    >
                      Schedule AI Consultation
                    </Link>
                    <Link
                      to="/textile-ai-solutions"
                      className="w-full xs:w-auto text-center px-6 py-3 rounded-lg border border-white/40 text-white font-medium transition-all duration-[250ms] ease-out hover:-translate-y-1 hover:bg-white/10"
                    >
                      Explore Textile AI Solutions
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

            {/* SIDEBAR */}
            <aside className="xl:sticky xl:top-24 xl:self-start w-full">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-blue-400/20 p-4 xs:p-5 sm:p-6 space-y-6">
                <div>
                  <p className="text-xs uppercase tracking-wide text-blue-400/70 mb-2">
                    Reading Progress
                  </p>
                  <div className="h-1.5 rounded-full bg-slate-700/50 overflow-hidden">
                    <div
                      className="h-full bg-blue-400 transition-[width] duration-150 ease-out"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                  <div className="flex items-center gap-2 mt-2 text-blue-200/60 text-xs">
                    <Clock className="w-3.5 h-3.5 flex-shrink-0" />
                    13 min read
                  </div>
                </div>

                <nav aria-label="Table of contents">
                  <p className="text-xs uppercase tracking-wide text-blue-400/70 mb-3">
                    On This Page
                  </p>
                  <ul className="space-y-2 border-l border-blue-400/20">
                    {TOC_SECTIONS.map((s) => (
                      <li key={s.id}>
                        <button
                          onClick={() => scrollTo(s.id)}
                          className={`block text-left w-full pl-3 -ml-px border-l-2 text-xs sm:text-sm py-1 transition-colors duration-[250ms] ease-out ${
                            activeSection === s.id
                              ? "border-blue-400 text-white"
                              : "border-transparent text-blue-200/60 hover:text-blue-200"
                          }`}
                        >
                          {s.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                </nav>

                <button
                  onClick={() =>
                    navigator.share
                      ? navigator.share({
                          title: document.title,
                          url: window.location.href,
                        })
                      : navigator.clipboard.writeText(window.location.href)
                  }
                  className="flex items-center text-blue-400 hover:text-blue-300 transition-colors text-sm"
                >
                  <Share2 className="w-4 h-4 mr-2 flex-shrink-0" />
                  Share this guide
                </button>

                <Link
                  to="/blog"
                  className="flex items-center text-blue-200/60 hover:text-blue-200 transition-colors text-sm"
                >
                  <ArrowLeft className="w-4 h-4 mr-2 flex-shrink-0" />
                  Back to Blogs
                </Link>

                <div className="pt-2 space-y-3">
                  <Link
                    to="/contact"
                    className="block text-center px-4 py-2.5 rounded-lg bg-blue-500 text-white text-sm font-medium transition-all duration-[250ms] ease-out hover:-translate-y-1 hover:bg-blue-400"
                  >
                    Book Consultation
                  </Link>
                  <Link
                    to="/textile-ai-solutions"
                    className="block text-center px-4 py-2.5 rounded-lg border border-blue-400/30 text-blue-300 text-sm font-medium transition-all duration-[250ms] ease-out hover:-translate-y-1 hover:bg-blue-500/10"
                  >
                    Explore AI Services
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Related Content */}
      <section className="py-10 sm:py-12">
        <div className="container mx-auto px-3 xs:px-4 max-w-full">
          <div className="max-w-6xl mx-auto">
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

      {/* Other Blogs Section — kept from existing pattern */}
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

export default FabricShrinkagePredictionBlog;
