import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ChevronDown,
  ChevronUp,
  Shield,
  BarChart3,
  Package,
  ArrowRight,
  Gauge,
  FlaskConical,
  Boxes,
  Wrench,
  BrainCircuit,
  Factory,
  Cpu,
} from "lucide-react";
import { useConsultation } from "../../../contexts/ConsultationContext";
import SEO from "../../../components/SEO";
import { seoData } from "../../../utils/seoData";

/* -------------------------------------------------------------------------
 * Reusable presentational pieces (kept intentionally lightweight — they
 * reuse the same Tailwind utility patterns already used across the page:
 * dark gradient section, amber/orange accent, gray-900 cards, rounded-xl,
 * hover:scale, etc. No new design language is introduced.
 * ---------------------------------------------------------------------- */

// Reuses the existing "accordion row" visual pattern from the original
// "Why Choose Us" section so it can power multiple sections (Why Ascentia
// Labs, FAQ) without duplicating markup.
const AccordionGroup = ({ items, activeId, onToggle, variant = "light" }) => {
  const isDark = variant === "dark";
  return (
    <div className="space-y-4">
      {items.map((item) => (
        <div
          key={item.id}
          className={
            isDark
              ? "bg-gray-900 rounded-xl shadow-lg border border-gray-700 overflow-hidden"
              : "shadow-sm hover:shadow-md transition-all duration-300"
          }
        >
          <button
            onClick={() => onToggle(activeId === item.id ? null : item.id)}
            className={
              isDark
                ? "w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-800 transition-colors duration-200"
                : "w-full p-4 flex items-center justify-between text-left"
            }
          >
            {isDark ? (
              <h3 className="lg:text-lg text-md text-white pr-4">
                {item.title}
              </h3>
            ) : (
              <div className="flex items-center gap-4">
                <div className="bg-blue-600 text-white px-3 py-1 rounded-md text-sm font-semibold">
                  {String(item.id).padStart(2, "0")}
                </div>
                <div>
                  <h3 className="text-md lg:text-lg md:text-xl font-medium text-gray-200">
                    {item.title}
                  </h3>
                  <div className="w-24 h-0.5 bg-blue-500 mt-1"></div>
                </div>
              </div>
            )}
            <div className="flex-shrink-0">
              {activeId === item.id ? (
                <ChevronUp className="w-5 h-5 text-blue-400" />
              ) : (
                <ChevronDown className="w-5 h-5 text-blue-400" />
              )}
            </div>
          </button>

          <div
            className={`overflow-hidden transition-all duration-300 ${
              activeId === item.id
                ? "max-h-[600px] opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className={isDark ? "px-6 pb-5" : "px-16 pb-5"}>
              {isDark && <div className="border-t border-gray-700 pt-4" />}
              {typeof item.content === "string" ? (
                <p className="text-gray-300 text-sm md:text-base leading-relaxed whitespace-pre-line">
                  {item.content}
                </p>
              ) : (
                item.content
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

// Reuses the existing stat-card visual (amber number over label) that was
// originally used only in the Hero stats row — now powers Business Outcomes.
const StatCard = ({ number, label, sublabel }) => (
  <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 transform hover:scale-105 transition-transform duration-300">
    <div className="text-3xl md:text-4xl text-white mb-1">{number}</div>
    <div className="text-white text-xs sm:text-sm">{label}</div>
    {sublabel && <div className="text-white text-[11px] mt-1">{sublabel}</div>}
  </div>
);

// Generic dark card used for Business Challenges, Industry Use Cases,
// Related AI Services and Related Resources — reuses the same
// "bg-gray-900 rounded-xl border" card shell already used elsewhere.
const InfoCard = ({ icon: Icon, eyebrow, title, children, footer }) => (
  <article className="bg-gray-900 rounded-xl border border-gray-700 p-6 h-full flex flex-col hover:border-amber-400/50 transition-all duration-300">
    {Icon && (
      <div className="bg-gradient-to-r from-amber-400 to-orange-500 w-10 h-10 rounded-lg flex items-center justify-center text-black mb-4">
        <Icon size={20} />
      </div>
    )}
    {eyebrow && (
      <span className="text-amber-400 text-xs font-semibold uppercase tracking-wide mb-2">
        {eyebrow}
      </span>
    )}
    <h3 className="text-white text-lg font-medium mb-3">{title}</h3>
    <div className="text-gray-300 text-sm leading-relaxed space-y-2 flex-1">
      {children}
    </div>
    {footer && (
      <div className="mt-4 pt-4 border-t border-gray-700">{footer}</div>
    )}
  </article>
);

// NEW: Reusable seam-blending overlay. Every section that starts on a
// gradient background (gray-900 -> blue-900 -> black) sits directly under a
// solid bg-black section above it. Because the gradient *starts* at
// gray-900/blue-900 (not pure black), that boundary used to show a visible
// seam. This overlay fades pure black into transparent across the first ~5rem
// of the section, so it visually keeps matching the black section above it
// before blending into the section's own gradient — exactly the same trick
// already used on the Hero (bottom fade) and Why-Ascentia-Labs (top fade)
// sections, just made consistent everywhere.
const TopSeamFade = () => (
  <div className="pointer-events-none absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black to-transparent z-0" />
);

const TextilesPage = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [openFAQ, setOpenFAQ] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null); // Why Ascentia Labs accordion
  const { openConsultation } = useConsultation();

  const scrollbarStyles = `
    .custom-scrollbar::-webkit-scrollbar {
      width: 0px;
      background: transparent;
    }
    .custom-scrollbar::-webkit-scrollbar-thumb {
      background: transparent;
    }
    .custom-scrollbar {
      scrollbar-width: none;
      -ms-overflow-style: none;
    }
  `;

  /* ===========================================================
   * DATA — extracted into arrays per the "avoid duplicated JSX"
   * requirement. Content sourced from the provided documentation.
   * =========================================================== */

  // Hero stat cards — reused component, updated copy

  // 2. Business Challenges
  const businessChallenges = [
    {
      icon: Gauge,
      title: "Production Downtime",
      impact: "₹96L–1.8Cr lost annually",
      pain: "Factories operate at just 65–70% efficiency — nearly a third of capacity sits idle due to poor scheduling and manual tracking errors.",
      solution:
        "We build custom production planning software that auto-schedules looms and flags material shortages, keeping 100+ looms running 95% of the time.",
    },
    {
      icon: Shield,
      title: "Quality Control Failures",
      impact: "₹5–12L per rejected batch",
      pain: "25–30% of shipments are rejected over color mismatches, defects, or inconsistent quality.",
      solution:
        "Our custom AI fabric inspection models deliver 98% defect detection accuracy — 2.5x more efficient than manual review — with instant alerts.",
    },
    {
      icon: Boxes,
      title: "Inventory Waste",
      impact: "₹15–30L wasted per year",
      pain: "Manual spreadsheets lead to expired fabric, overstocked yarn, and missing raw materials — 15–25% of total production cost.",
      solution:
        "We build custom inventory systems with real-time QR tracking and automated reorder points so you never overstock or run short.",
    },
    {
      icon: BarChart3,
      title: "Manual Reporting Inefficiency",
      impact: "60+ hours/month wasted",
      pain: "Managers spend 10–15 hours a week on Excel reports and still miss bottlenecks, cost spikes, and quality trends.",
      solution:
        "Custom real-time dashboards surface production KPIs, cost per meter, and efficiency — built around the metrics you actually track.",
    },
    {
      icon: Wrench,
      title: "Ineffective Maintenance",
      impact: "30–40% higher emergency repair cost",
      pain: "Unplanned equipment downtime remains one of the biggest drags on production efficiency.",
      solution:
        "Custom predictive maintenance models flag wear before failure, cutting unplanned downtime by up to 45%.",
    },
  ];

  // 3. Business Outcomes (KPI cards)
  const businessOutcomes = [
    { number: "35%", label: "Downtime Reduction" },
    { number: "40%", label: "Fabric Waste Reduction" },
    { number: "98%", label: "Inspection Accuracy" },
    { number: "60 hrs", label: "Reporting Time Saved / mo" },
    { number: "25%", label: "Production Output Increase" },
    { number: "99%+", label: "Inventory Accuracy" },
    { number: "45%", label: "Downtime via Predictive Maint." },
    { number: "180%", label: "Average First-Year ROI" },
  ];

  // 4. AI Solutions — renamed Features section, same accordion/tab UI, new copy
  const features = [
    {
      id: "ai-production-planning",
      title:
        "Custom AI Production Planning — Eliminate Downtime & Scheduling Errors",
      sections: [
        {
          heading: "Challenge",
          details: [
            "Manual scheduling causes loom idle time — ₹8–15L/month in lost production.",
          ],
        },
        {
          heading: "AI Capabilities",
          details: [
            "Analyzes historical data, machine availability, and material stock to auto-assign looms",
            "Predicts production bottlenecks before they occur",
            "Adjusts schedules in real-time when disruptions happen",
            "Result: 35% downtime reduction, 25% output increase without adding looms",
          ],
        },
      ],
    },
    {
      id: "ai-quality-inspection",
      title: "Custom AI Quality Inspection — Catch Defects Before Buyers Do",
      sections: [
        {
          heading: "Challenge",
          details: [
            "25–30% of shipments rejected over quality issues — ₹5–12L per rejected batch.",
          ],
        },
        {
          heading: "AI Capabilities",
          details: [
            "Computer vision detects stains, holes, uneven texture, and color variation",
            "Deep learning color matching and shade analysis",
            "98% defect detection accuracy, 2.5x faster than manual inspection",
            "Result: 40% fewer defect rejections, 90% fewer color mismatches",
          ],
        },
      ],
    },
    {
      id: "ai-inventory-management",
      title: "Custom AI Inventory Management — Stop Fabric Waste at the Source",
      sections: [
        {
          heading: "Challenge",
          details: [
            "₹15–30L/year wasted on expired fabric and overstocked yarn.",
          ],
        },
        {
          heading: "AI Capabilities",
          details: [
            "Predicts optimal reorder points using demand forecasting",
            "Flags slow-moving inventory before it becomes waste",
            "Recommends procurement timing based on production schedules",
            "Result: 40% fabric waste reduction, ₹20L/year savings",
          ],
        },
      ],
    },
    {
      id: "predictive-maintenance",
      title:
        "Custom Predictive Maintenance — Prevent Breakdowns Before They Happen",
      sections: [
        {
          heading: "Challenge",
          details: [
            "Unplanned downtime is one of the biggest drags on production.",
          ],
        },
        {
          heading: "AI Capabilities",
          details: [
            "Real-time sensors monitor vibration, heat, and wear",
            "ML models flag failure patterns 48–72 hours in advance",
            "Automated maintenance-team alerts before breakdowns occur",
            "Result: 45% less unplanned downtime, 90% of breakdowns prevented",
          ],
        },
      ],
    },
    {
      id: "demand-forecasting",
      title: "Custom AI Demand Forecasting — Align Production with Real Demand",
      sections: [
        {
          heading: "Challenge",
          details: [
            "Fluctuating buyer demand leads to overproduction or stockouts.",
          ],
        },
        {
          heading: "AI Capabilities",
          details: [
            "Analyzes historical orders, seasonal trends, and market signals",
            "Forecasts demand for specific fabric types and colors",
            "Forecast accuracy improved from 68% to 89%",
            "Result: 40% less overstock waste, 30% better order fulfillment",
          ],
        },
      ],
    },
    {
      id: "ai-analytics-reporting",
      title: "Custom AI Analytics & Reporting — Decisions, Not Spreadsheets",
      sections: [
        {
          heading: "Challenge",
          details: [
            "Managers lose 10–15 hours/week to manual Excel reporting.",
          ],
        },
        {
          heading: "AI Capabilities",
          details: [
            "Auto-generates real-time reports on production KPIs",
            "Natural language queries — 'Which looms are underperforming?'",
            "Predictive analytics and automated event alerts",
            "Result: 60 hours/month saved across the organization",
          ],
        },
      ],
    },
  ];

  // 5. Industry Use Cases
  const useCases = [
    {
      icon: FlaskConical,
      title: "Fabric Inspection",
      problem:
        "Manual inspection misses 15–20% of defects across 50,000+ meters/day.",
      workflow:
        "Computer vision scans every meter in real time, flags defective batches, and documents defects with photos.",
      result:
        "40% fewer rejections, saving approximately US$5.8K–14K per rejected batch.",
    },
    {
      icon: Wrench,
      title: "Predictive Maintenance",
      problem:
        "3–4 unexpected breakdowns per week, costing approximately US$2,300–US$3,450 each in lost production.",
      workflow:
        "Sensors detect failure patterns 48–72 hours ahead; maintenance teams get automated alerts.",
      result: "45% less unplanned downtime, 90% of breakdowns prevented.",
    },
    {
      icon: Gauge,
      title: "Production Planning",
      problem: "Manual scheduling across 200 looms misses monthly targets.",
      workflow:
        "AI planning engine weighs 500+ data points — loom capability, priority, material, deadlines.",
      result: "25% output increase, 95% loom uptime, zero missed deadlines.",
    },
    {
      icon: Package,
      title: "Color Matching",
      problem:
        "8–10 batches per month rejected due to color mismatches, resulting in losses of approximately US$3,500–US$5,800 per batch.",
      workflow:
        "AI color analysis compares batches to approved standards with 99% accuracy.",
      result:
        "90% fewer color mismatches, saving approximately US$20K–US$35K per month.",
    },
    {
      icon: BarChart3,
      title: "Cost Optimization",
      problem: "30% of orders end up with lower-than-expected margins.",
      workflow:
        "AI costing engine calculates true cost per meter including material, labor, overhead, and waste.",
      result: "15–20% improvement in profit margins.",
    },
    {
      icon: Boxes,
      title: "Supply Chain Optimization",
      problem: "30% of supplier deliveries are late or below standard.",
      workflow:
        "AI tracks supplier quality, timeliness, and pricing, recommending the best source per order.",
      result: "20% lower material costs, 50% fewer supplier-related delays.",
    },
  ];

  // 6. Implementation Process — reuses existing timeline component
  const processSteps = [
    {
      number: "1",
      title: "Discovery & Analysis",
      description:
        "We assess your factory, map workflows, and gather requirements across production, quality, and inventory.",
    },
    {
      number: "2",
      title: "Solution Architecture",
      description:
        "Custom solution design, technology selection, and architecture planning around your specific processes.",
    },
    {
      number: "3",
      title: "Development",
      description:
        "Custom software development, AI/ML model building, and IoT integration tailored to your looms and systems.",
    },
    {
      number: "4",
      title: "Testing & QA",
      description:
        "Rigorous testing and user acceptance testing to ensure the system fits your real-world workflows.",
    },
    {
      number: "5",
      title: "Deployment",
      description:
        "System deployment, data migration from Excel, Tally, SAP, or Oracle, and go-live with minimal disruption.",
    },
    {
      number: "6",
      title: "Training & Support",
      description:
        "Onsite team training, 30+ video tutorials, and 24/7 ongoing support and maintenance.",
    },
  ];

  // 7. Why Ascentia Labs — reuses accordion pattern
  const reasons = [
    {
      id: 1,
      title: "Custom Solutions, Not Off-the-Shelf",
      content:
        "We don't force you to adapt to our software. We build software that adapts to your unique textile manufacturing processes.",
    },
    {
      id: 2,
      title: "Textile Industry Expertise",
      content:
        "5+ years in textiles. We understand looms, yarn, dyeing, and finishing — our team speaks your language.",
    },
    {
      id: 3,
      title: "AI & ML Specialists",
      content:
        "Custom AI models for fabric inspection, predictive maintenance, production planning, and quality control — trained on your data.",
    },
    {
      id: 4,
      title: "Scalable Solutions",
      content:
        "From 50 to 1,000+ looms — start small and grow without switching systems.",
    },
    {
      id: 5,
      title: "Seamless Integration",
      content:
        "Works with Siemens, Toyota, Sumitomo, Murata, and Picanol looms. Data migration from Tally, SAP, and Oracle included.",
    },
    {
      id: 6,
      title: "24/7 Support",
      content: "Your production can't wait. Neither can we.",
    },
  ];

  // 8. Related AI Services — internal linking
  const relatedServices = [
    {
      title: "AI & Machine Learning Solutions",
      description:
        "Improve textile production, automate quality inspection, reduce fabric waste, and make faster operational decisions with AI-powered solutions.",
      href: "/ai-ml-services",
    },
    {
      title: "Digital Transformation Services",
      description:
        "Modernize your textile factory with connected workflows, real-time production visibility, and smarter inventory management.",
      href: "/digital-transformation",
    },
    {
      title: "Software Engineering",
      description:
        "Build custom software for textile production, inventory management, quality control, and factory operations.",
      href: "/software-engineering",
    },
  ];

  // 9. Related Resources — internal linking
  const relatedResources = [
    {
      title: "The Future of Textile Manufacturing: AI Trends in 2026",
      topic: "Industry Trends",
      href: "#",
    },
    {
      title: "Custom vs. Off-the-Shelf Textile Software: A Comparison",
      topic: "Selection Guide",
      href: "#",
    },
    {
      title: "AI Fabric Inspection vs. Manual Inspection: A Comparison",
      topic: "ROI Analysis",
      href: "#",
    },
  ];

  // 10. FAQ — reuses accordion pattern
  const faqs = [
    {
      question:
        "What's the difference between custom textile software and off-the-shelf ERP?",
      answer:
        "Off-the-shelf ERP systems are built for general manufacturing and force you to adapt your workflows to the software. Custom textile software is built specifically for your unique processes — your loom types, your fabric categories, your quality standards, your supplier relationships.\n\nThis means:\n\nNo costly workarounds\n\nFaster implementation (8-12 weeks vs. 12-18 months)\n\nHigher ROI because you're not paying for unused features\n\nAbility to add exactly the AI/ML capabilities you need",
    },
    {
      question: "How long does it take to develop custom textile software?",
      answer:
        "8-12 weeks for full development:\n\nWeek 1-2: Discovery & analysis\n\nWeek 3: Solution architecture\n\nWeek 4-8: Development & AI/ML model building\n\nWeek 9-10: Testing & QA\n\nWeek 11: Deployment\n\nWeek 12+: Training & support",
    },
    {
      question: "What's the cost of custom textile software?",
      answer:
        "Costs vary based on complexity, features, and scope:\n\nBasic Production & Inventory: ₹10-25 lakhs\n\nFull Production + Quality + Analytics: ₹25-50 lakhs\n\nEnterprise + IoT + AI/ML: ₹50 lakhs - ₹2 crores\n\nROI: 180%+ in first year (average client saves ₹36 lakhs+ annually)",
    },
    {
      question: "Can you integrate with our existing looms and systems?",
      answer:
        "Yes — we integrate with 95% of existing textile systems:\n\nLoom brands: Siemens, Toyota, Sumitomo, Murata, Picanol\n\nExisting software: Tally, SAP, Oracle (data migration included)\n\nHardware: QR scanners, IoT sensors, barcode printers",
    },
    {
      question: "Do you provide training for our team?",
      answer:
        "Yes — complete training included:\n\n2-day onsite training at your factory for 5-10 staff members\n\nVideo tutorials for every feature (30+ videos)\n\n24/7 support — call us anytime for help\n\n1-month free support after launch",
    },
    {
      question: "What if we need to add features later?",
      answer:
        "Yes — unlimited customization available:\n\nAdd new features as your business grows\n\nModify dashboards for different roles (manager vs. operator)\n\nIntegrate new suppliers/buyers\n\nAdd new AI/ML capabilities\n\nYour software grows with your business — no need to switch systems.",
    },
  ].map((f, i) => ({ id: i, title: f.question, content: f.answer }));

  return (
    <div className="min-h-screen  bg-black">
      <SEO {...seoData.textiles} />
      <style dangerouslySetInnerHTML={{ __html: scrollbarStyles }} />
      {/* ================= HERO ================= */}
      <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-black overflow-hidden py-20 ">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-40 left-20 w-24 h-24 bg-blue-400 rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-blue-300 rounded-full blur-xl"></div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-black"></div>

        <div className="relative container mx-auto mt-5 lg:mt-5 2xl:mt-15 px-4">
          {/* Breadcrumb */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-3xl text-white space-y-6">
              {/* Industry Badge */}
              <span className="inline-block bg-white/10 border border-white/20 text-amber-400 text-xs font-semibold uppercase tracking-wide px-3 py-1.5 rounded-full">
                Textile Manufacturing
              </span>

              <h1 className="text-[25px] md:text-4xl leading-tight">
                AI-Powered Custom Textile Manufacturing Software & Digital
                Transformation Solutions
              </h1>

              <p className="text-lg text-gray-300 leading-relaxed">
                Transform your textile manufacturing with AI solutions that help
                improve production efficiency, strengthen quality control,
                optimize inventory, and streamline operations across every stage
                of your manufacturing process.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={openConsultation}
                  className="bg-gradient-to-r from-amber-400 to-orange-500 text-black px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:from-amber-500 hover:to-orange-600"
                >
                  📞 Schedule a Consultation
                </button>
                <a
                  href="#ai-solutions-heading"
                  className="border border-white/30 text-white px-6 py-3 rounded-xl transition-all duration-300 hover:bg-white/10 text-center"
                >
                  Explore Solutions
                </a>
              </div>

              {/* Business Outcomes */}
              <ul className="flex flex-wrap gap-x-6 gap-y-3 pt-2 list-none">
                {[
                  "Reduce Production Downtime",
                  "Improve Quality Control",
                  "Cut Fabric Waste",
                  "Automate Inventory Tracking",
                ].map((outcome, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 text-sm text-gray-200"
                  >
                    <span className="text-amber-400">✓</span>
                    {outcome}
                  </li>
                ))}
              </ul>
            </div>

            {/* Hero stat cards */}
            {/* Right Visual Content */}
            <div className="mt-8 lg:mt-0">
              {/* Top Badge */}
              <div className="flex justify-center mb-6">
                <div className="bg-white/15 backdrop-blur-lg rounded-xl border border-white/30 shadow-2xl px-5 py-2.5 hover:scale-105 transition-all duration-300">
                  <div className="flex items-center gap-2">
                    <Factory className="w-7 h-7 text-white" />
                    <h3 className="text-white font-semibold">
                      AI Manufacturing Suite
                    </h3>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {/* Card 1 */}
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6 group hover:bg-white/20 transition-all duration-300 hover:-translate-y-2">
                  <BrainCircuit className="w-12 h-12 text-amber-400 mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="text-white font-semibold mb-2">
                    AI Quality Control
                  </h4>
                  <p className="text-sm text-gray-100">
                    Detect fabric defects automatically using AI vision.
                  </p>
                </div>

                {/* Card 2 */}
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6 group hover:bg-white/20 transition-all duration-300 hover:-translate-y-2">
                  <Boxes className="w-12 h-12 text-blue-400 mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="text-white font-semibold mb-2">
                    Smart Inventory
                  </h4>
                  <p className="text-sm text-gray-100">
                    Real-time warehouse and inventory tracking.
                  </p>
                </div>

                {/* Card 3 */}
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6 group hover:bg-white/20 transition-all duration-300 hover:-translate-y-2">
                  <BarChart3 className="w-12 h-12 text-green-400 mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="text-white font-semibold mb-2">
                    Production Analytics
                  </h4>
                  <p className="text-sm text-gray-100">
                    Live dashboards for production and machine efficiency.
                  </p>
                </div>

                {/* Card 4 */}
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6 group hover:bg-white/20 transition-all duration-300 hover:-translate-y-2">
                  <Cpu className="w-12 h-12 text-purple-400 mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="text-white font-semibold mb-2">
                    Predictive Maintenance
                  </h4>
                  <p className="text-sm text-gray-300">
                    Prevent machine failures before downtime occurs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ================= BUSINESS CHALLENGES ================= */}
      <section
        className="relative overflow-hidden py-16 bg-black"
        aria-labelledby="challenges-heading"
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-10">
            <h1
              id="challenges-heading"
              className="text-3xl bg-gradient-to-r from-blue-400 to-white bg-clip-text font-semibold text-transparent mb-3"
            >
              5 Critical Challenges Facing Textile Manufacturers Today
            </h1>
            <p className="text-base text-white/95 max-w-2xl mx-auto">
              The problems costing you production hours, quality, and margin —
              and how we solve them.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {businessChallenges.map((c, i) => (
              <InfoCard key={i} icon={c.icon} title={c.title}>
                <p className="text-white/95">{c.pain}</p>
                <p className="text-amber-400">{c.solution}</p>
              </InfoCard>
            ))}
          </div>
        </div>
      </section>
      {/* ================= BUSINESS OUTCOMES ================= */}
      <section
        className="relative overflow-hidden py-16 bg-gradient-to-br from-gray-900 via-blue-900 to-black"
        aria-labelledby="outcomes-heading"
      >
        <TopSeamFade />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-10">
            <h2
              id="outcomes-heading"
              className="text-3xl md:text-4xl font-semibold text-white mb-3"
            >
              What Textile Manufacturers Achieve With Custom AI & ML Solutions
            </h2>
            <p className="text-lg text-white/95 max-w-2xl mx-auto">
              Executives buy outcomes, not features. Measurable results, not
              promises.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 ">
            {businessOutcomes.map((o, i) => (
              <StatCard key={i} number={o.number} label={o.label} />
            ))}
          </div>
          <p className="text-center text-gray-300 mt-10 text-sm md:text-base">
            12+ textile mills saved ₹36 lakhs+ annually · 180% average
            first-year ROI · 95% loom uptime across 100+ looms
          </p>
        </div>
      </section>
      {/* ================= AI SOLUTIONS (formerly Features) ================= */}
      <section
        className="relative overflow-hidden py-16 bg-black"
        aria-labelledby="ai-solutions-heading"
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-8">
            <h2
              id="ai-solutions-heading"
              className="text-3xl md:text-4xl font-semibold bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent mb-3"
            >
              AI & ML-Powered Solutions for Textile Manufacturing
            </h2>
            <p className="text-base text-gray-100 max-w-3xl mx-auto">
              Real AI solves real problems. We build custom AI and ML models for
              your specific manufacturing challenges.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-amber-300">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <nav
                  className="bg-gray-900 p-4"
                  aria-label="AI solution categories"
                >
                  <div className="space-y-2">
                    {features.map((feature, index) => (
                      <div
                        key={index}
                        className={`p-3 rounded-lg cursor-pointer transition-all duration-300 ${
                          activeFeature === index
                            ? "bg-gradient-to-r from-amber-400 to-orange-500 text-black"
                            : "text-gray-300 hover:bg-gray-800"
                        }`}
                        onClick={() => setActiveFeature(index)}
                      >
                        <div className="flex items-center space-x-2">
                          <span
                            className={`text-xs px-2 py-1 rounded ${
                              activeFeature === index
                                ? "bg-black text-amber-400"
                                : "bg-gradient-to-r from-amber-400 to-orange-500 text-black"
                            }`}
                          >
                            {index < 9 ? `0${index + 1}` : index + 1}
                          </span>
                          <span className="font-medium text-sm">
                            {feature.title}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </nav>

                <article className="p-6">
                  <div className="space-y-4">
                    <div className="bg-amber-100 p-3 rounded-xl w-fit">
                      <div className="bg-gradient-to-r from-amber-400 to-orange-500 p-2 rounded-lg">
                        <svg
                          className="w-6 h-6 text-black"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl text-gray-900 mb-5">
                        {features[activeFeature].title}
                      </h3>
                      <div className="space-y-6">
                        {features[activeFeature].sections.map(
                          (section, sectionIndex) => (
                            <div key={sectionIndex}>
                              <h4 className="text-lg font-semibold text-orange-600 mb-3">
                                {section.heading}
                              </h4>
                              <ul className="space-y-3 text-gray-600 text-sm">
                                {section.details.map((detail, idx) => (
                                  <li
                                    key={idx}
                                    className="flex items-start gap-2"
                                  >
                                    <span className="w-1.5 h-1.5 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                                    <span>{detail}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ),
                        )}
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ================= INDUSTRY USE CASES ================= */}
      <section
        className="relative overflow-hidden py-16 bg-gradient-to-br from-gray-900 via-blue-900 to-black"
        aria-labelledby="use-cases-heading"
      >
        <TopSeamFade />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-10">
            <h2
              id="use-cases-heading"
              className="text-3xl md:text-4xl font-semibold text-white mb-3"
            >
              Textile AI Use Cases — Real Business Scenarios
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Not feature lists — real scenarios that solve your specific
              challenges with custom software.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((u, i) => (
              <InfoCard key={i} icon={u.icon} title={u.title}>
                <p>
                  <span className="text-gray-400 "> Problem: </span>
                  {u.problem}
                </p>
                <p>
                  <span className="text-white/90">AI Workflow: </span>
                  <span className="text-amber-400"> {u.workflow}</span>
                </p>
              </InfoCard>
            ))}
          </div>
        </div>
      </section>
      {/* ================= IMPLEMENTATION PROCESS ================= */}
      <section
        className="relative overflow-hidden py-16 bg-black"
        aria-labelledby="process-heading"
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-10">
            <h2
              id="process-heading"
              className="text-3xl md:text-4xl font-semibold bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent mb-3"
            >
              Our Custom Software Development Process
            </h2>
            <p className="text-lg text-white/95">
              A proven 8-12 week development process, built around your
              workflows with minimal disruption.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="block md:hidden">
              <div className="grid grid-cols-3 gap-y-6 gap-x-2">
                {processSteps.map((step, index) => (
                  <div key={index} className="text-center relative z-10">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-amber-400 to-orange-500 text-black rounded-full flex items-center justify-center text-lg sm:text-xl font-extrabold mb-2 mx-auto border-2 border-white shadow-lg">
                      {step.number}
                    </div>
                    <h3 className="font-medium text-white text-sm sm:text-base leading-tight px-1">
                      {step.title}
                    </h3>
                  </div>
                ))}
              </div>
            </div>

            <div className="hidden md:flex flex-wrap justify-center items-start gap-y-8 gap-x-6">
              {processSteps.map((step, index) => (
                <div key={index} className="flex items-center">
                  <div className="text-center max-w-[180px]">
                    <div className="w-16 h-16 bg-gradient-to-r from-amber-400 to-orange-500 text-black rounded-full flex items-center justify-center text-xl font-extrabold mb-3 mx-auto">
                      {step.number}
                    </div>
                    <h3 className="font-medium text-white text-base mb-1">
                      {step.title}
                    </h3>
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="w-12 h-0.5 bg-blue-300 mx-3 mt-[-2.5rem] hidden lg:block"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* ================= WHY ASCENTIA LABS ================= */}
      <section
        className="py-16 bg-gradient-to-br from-gray-900 via-blue-900 to-black relative overflow-hidden"
        aria-labelledby="why-us-heading"
      >
        <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black to-transparent"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-32 h-32 bg-yellow-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-40 right-20 w-24 h-24 bg-yellow-300 rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-yellow-500 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 left-1/2 w-20 h-20 bg-yellow-200 rounded-full blur-2xl"></div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-black"></div>

        <div className="relative container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-white space-y-8">
                <div>
                  <h2
                    id="why-us-heading"
                    className="text-3xl md:text-4xl font-semibold   mb-4 leading-tight"
                  >
                    Revolutionize Your Textile Operations with Our Expertise
                  </h2>
                  <p className="text-xl text-gray-100 mb-8">
                    Why leading textile companies choose our solutions
                  </p>
                </div>
                <AccordionGroup
                  items={reasons}
                  activeId={activeIndex}
                  onToggle={setActiveIndex}
                  variant="light"
                />
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-blue-600/20 to-blue-800/20 backdrop-blur-md rounded-3xl p-8 border border-blue-400/30">
                  <div className="text-center text-white">
                    <div className="relative w-32 h-32 mx-auto mb-6">
                      <div className="w-32 h-32 bg-gradient-to-br from-amber-400 via-amber-500 to-orange-500 rounded-full flex items-center justify-center relative overflow-hidden shadow-2xl border-4 border-black/20">
                        <div className="absolute inset-0 bg-gradient-to-br from-amber-300/40 via-amber-400/30 to-orange-400/40 rounded-full animate-pulse"></div>
                        <svg
                          className="w-16 h-16 text-black relative z-10 drop-shadow-lg"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <div className="absolute inset-0 rounded-full border-2 border-black/10 animate-spin-slow opacity-60"></div>
                      </div>
                      <div className="absolute inset-0 w-32 h-32 rounded-full bg-gradient-to-br from-amber-300/20 via-amber-400/20 to-orange-400/20 animate-ping"></div>
                      <div className="absolute inset-0 w-32 h-32 rounded-full bg-gradient-to-br from-amber-200/15 via-amber-300/15 to-orange-300/15 animate-pulse"></div>
                    </div>
                    <h3 className="text-2xl mb-4">
                      Ready to Transform Your Textile Operations?
                    </h3>
                    <p className="text-blue-100 mb-6">
                      Join industry leaders who trust our textile management
                      solutions to optimize production and boost efficiency.
                    </p>
                    <button
                      onClick={openConsultation}
                      className="bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 hover:from-amber-500 hover:via-orange-500 hover:to-orange-600 text-black border-2 border-black/20 hover:border-black/40 px-8 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                      Start Your Project Today
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ================= RELATED AI SERVICES ================= */}
      <section
        className="relative overflow-hidden py-16 bg-black"
        aria-labelledby="related-services-heading"
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-10">
            <h2
              id="related-services-heading"
              className="text-3xl md:text-4xl font-semibold bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent mb-3"
            >
              Related AI Services for Textile Manufacturers
            </h2>
            <p className="text-base text-gray-100 max-w-2xl mx-auto">
              Explore our full suite of AI-powered solutions for the textile
              industry.
            </p>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 list-none">
            {relatedServices.map((s, i) => (
              <li key={i}>
                <Link
                  to={s.href}
                  className="block bg-gray-900 rounded-xl border border-gray-700 p-6 h-full hover:border-amber-400/50 hover:bg-gray-800 transition-all duration-300"
                >
                  <h3 className="text-white text-lg font-medium mb-2">
                    {s.title}
                  </h3>
                  <p className="text-white/95 text-sm mb-4">{s.description}</p>
                  <span className="text-amber-400 text-sm font-medium inline-flex items-center gap-1">
                    Learn more <ArrowRight size={14} />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      {/* ================= RELATED RESOURCES ================= */}
      <section
        className="relative overflow-hidden py-16 bg-gradient-to-br from-gray-900 via-blue-900 to-black"
        aria-labelledby="related-resources-heading"
      >
        <TopSeamFade />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-10">
            <h2
              id="related-resources-heading"
              className="text-3xl md:text-4xl font-semibold text-white mb-3"
            >
              Continue Learning — Textile Software & AI Resources
            </h2>
            <p className="text-lg text-white/95 max-w-2xl mx-auto">
              Deepen your understanding of AI, ML, and custom software in
              textile manufacturing.
            </p>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 list-none">
            {relatedResources.map((r, i) => (
              <li key={i}>
                <Link
                  to={r.href}
                  className="block bg-white/10 backdrop-blur-md rounded-xl p-5 border border-white/20 h-full hover:bg-white/15 transition-all duration-300"
                >
                  <figure className="m-0">
                    <figcaption className="text-amber-400 text-xs font-semibold uppercase tracking-wide mb-2">
                      {r.topic}
                    </figcaption>
                    <h3 className="text-white text-base font-medium leading-snug">
                      {r.title}
                    </h3>
                  </figure>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      {/* ================= FAQ ================= */}
      <section
        className="relative overflow-hidden py-16 bg-black"
        aria-labelledby="faq-heading"
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2
                id="faq-heading"
                className="text-3xl md:text-4xl font-semibold bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent md:text-4xl mb-4"
              >
                Frequently Asked Questions — Custom Textile Software Solutions
              </h2>
              <p className="text-lg text-white/95">
                Find answers to common questions about our custom AI & ML
                software solutions
              </p>
            </div>
            <AccordionGroup
              items={faqs}
              activeId={openFAQ}
              onToggle={setOpenFAQ}
              variant="dark"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default TextilesPage;
