import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Settings,
  DollarSign,
  ChevronDown,
  ChevronUp,
  Shield,
  UserCheck,
  BarChart3,
  Package,
  ArrowRight,
  Factory,
  Gauge,
  FlaskConical,
  Boxes,
  Users,
  Wrench,
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
    <div className="space-y-4 ">
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
    <div className="text-blue-200 text-xs sm:text-sm 2xl:text-[19px]">
      {label}
    </div>
    {sublabel && (
      <div className="text-gray-400 text-[11px] lg:text-[14px] 2xl:text-[18px]  mt-1">
        {sublabel}
      </div>
    )}
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
      <span className="text-amber-400 text-xs 2xl:text-[16px] font-semibold uppercase tracking-wide mb-2">
        {eyebrow}
      </span>
    )}
    <h3 className="text-white text-lg 2xl:text-[24px]  font-medium mb-3">
      {title}
    </h3>
    <div className="text-gray-300 text-sm 2xl:text-[18px] leading-relaxed space-y-2 flex-1">
      {children}
    </div>
    {footer && (
      <div className="mt-4 pt-4 border-t border-gray-700">{footer}</div>
    )}
  </article>
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
  const stats = [
    { number: "7+", label: "Business Years" },
    { number: "120+", label: "Projects Delivered" },
    { number: "10+", label: "Industries Catered" },
    { number: "4+", label: "Countries" },
  ];

  // Hero right-column feature highlights — kept, copy refined
  const adminFeatures = [
    {
      icon: Settings,
      title: "Production Control — Stop 40% Downtime from Manual Scheduling",
      description:
        "AI-driven loom scheduling, real-time production tracking, and low-material alerts keep 100+ looms running 95% of the time.",
    },
    {
      icon: Shield,
      title: "Quality Assurance — Eliminate 30% Defect Rejections",
      description:
        "Automated checkpoints for fabric testing, color matching, and defect detection — with instant alerts when quality drops.",
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting — Decide on Data, Not Guesswork",
      description:
        "Auto-generated dashboards for production KPIs, cost per meter, defect rates, loom efficiency, and profit margins.",
    },
    {
      icon: Package,
      title: "Inventory Management — Stop 20% Fabric Waste",
      description:
        "Real-time tracking with QR scanning, automated stock alerts, and multi-warehouse visibility — never overstock or run short.",
    },
  ];

  // 2. Business Challenges
  const businessChallenges = [
    {
      icon: Gauge,
      title: "Production Downtime",
      impact: "₹96L–1.8Cr lost annually",
      pain: "Factories operate at just 65–70% efficiency — nearly a third of capacity sits idle due to poor scheduling and manual tracking errors.",
      solution:
        "Our AI production planning engine auto-schedules looms and flags material shortages, keeping 100+ looms running 95% of the time.",
    },
    {
      icon: Shield,
      title: "Quality Control Failures",
      impact: "₹5–12L per rejected batch",
      pain: "25–30% of shipments are rejected over color mismatches, defects, or inconsistent quality.",
      solution:
        "AI fabric inspection delivers 98% defect detection accuracy — 2.5x more efficient than manual review — with instant alerts.",
    },
    {
      icon: Boxes,
      title: "Inventory Waste",
      impact: "₹15–30L wasted per year",
      pain: "Manual spreadsheets lead to expired fabric, overstocked yarn, and missing raw materials — 15–25% of total production cost.",
      solution:
        "Real-time inventory tracking with QR scanning and automated reorder points ensures you never overstock or run short.",
    },
    {
      icon: BarChart3,
      title: "Manual Reporting Inefficiency",
      impact: "60+ hours/month wasted",
      pain: "Managers spend 10–15 hours a week on Excel reports and still miss bottlenecks, cost spikes, and quality trends.",
      solution:
        "Auto-generated, real-time dashboards surface production KPIs, cost per meter, and efficiency — no manual compilation.",
    },
    {
      icon: Wrench,
      title: "Ineffective Maintenance",
      impact: "30–40% higher emergency repair cost",
      pain: "Unplanned equipment downtime remains one of the biggest drags on production efficiency.",
      solution:
        "Predictive maintenance sensors flag wear before failure, cutting unplanned downtime by up to 45%.",
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
      title: "AI Production Planning — Eliminate Downtime & Scheduling Errors",
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
      title: "AI Quality Inspection — Catch Defects Before Buyers Do",
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
      title: "AI Inventory Management — Stop Fabric Waste at the Source",
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
      title: "Predictive Maintenance — Prevent Breakdowns Before They Happen",
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
      title: "AI Demand Forecasting — Align Production with Real Demand",
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
      title: "AI Analytics & Reporting — Decisions, Not Spreadsheets",
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
      result: "40% fewer rejections, ₹5–12L saved per rejected batch.",
    },
    {
      icon: Wrench,
      title: "Predictive Maintenance",
      problem:
        "3–4 unexpected breakdowns/week at ₹2–3L each in lost production.",
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
      problem: "8–10 batches/month rejected over color mismatch, ₹3–5L each.",
      workflow:
        "AI color analysis compares batches to approved standards with 99% accuracy.",
      result: "90% fewer color mismatches, ₹25–30L/month saved.",
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
      title: "Industry Analysis",
      description:
        "We assess your factory, map workflows, and gather requirements across production, quality, and inventory.",
    },
    {
      number: "2",
      title: "Custom Solution Design",
      description:
        "A tailored ERP configuration is designed around your looms, teams, and production model.",
    },
    {
      number: "3",
      title: "Development & Integration",
      description:
        "We integrate with your existing looms, IoT sensors, and systems (Tally, SAP, Oracle) with minimal disruption.",
    },
    {
      number: "4",
      title: "Training & Go-Live",
      description:
        "Onsite training, video tutorials, and testing precede launch — with 24/7 support from day one.",
    },
  ];

  // 7. Why Ascentia Labs — reuses accordion pattern
  const reasons = [
    {
      id: 1,
      title: "Textile Industry Expertise",
      content:
        "5+ years in textiles. We understand looms, yarn, dyeing, and finishing — our team speaks your language.",
    },
    {
      id: 2,
      title: "Scalable Solutions",
      content:
        "From 50 to 1,000+ looms — start small and grow without switching systems.",
    },
    {
      id: 3,
      title: "Advanced Technology",
      content:
        "98% defect detection accuracy, 45% downtime reduction, and 89% forecast accuracy — proven, not hype.",
    },
    {
      id: 4,
      title: "Quality Assurance & Compliance",
      content:
        "Meets textile industry standards — ISO 9001 and OEKO-TEX compliant. We test 3 times.",
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
      title: "AI & ML Services",
      description:
        "Achieve up to 98% defect detection accuracy with AI-powered computer vision for textile manufacturing. Our intelligent textile software solutions combine computer vision, machine learning, and predictive analytics to automate fabric inspection, improve textile quality control, reduce production defects, and optimize textile manufacturing processes.",
      href: "/ai-ml-services",
    },
    {
      title: "Digital Transformation",
      description:
        "Digitize textile manufacturing workflows, automate production operations, and integrate factory systems with AI-powered software to improve real-time visibility, production efficiency, quality control, and overall business performance.",
      href: "/digital-transformation",
    },
    {
      title: "Software Engineering",
      description:
        "Develop scalable textile software solutions, web applications, manufacturing software, ERP integrations, and custom software tailored to streamline textile manufacturing operations, improve productivity, and meet your unique business requirements.",
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
      title: "How Textile ERP Reduces Production Costs",
      topic: "Cost Optimization",
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
      question: "How long does it take to implement textile ERP software?",
      answer:
        "4-8 weeks for full implementation:\n\nWeek 1-2: Industry analysis + custom solution design\n\nWeek 3-5: Development + integration with your looms/systems\n\nWeek 6-7: Training your team + testing\n\nWeek 8: Launch + 24/7 support begins\n\nMost Ludhiana mills go live in 6 weeks.",
    },
    {
      question: "What's the cost of textile management software?",
      answer:
        "₹15,000 - ₹75,000/month based on factory size:\n\n50-100 looms: ₹15,000/month (basic inventory + production)\n\n100-300 looms: ₹35,000/month (full ERP + quality + analytics)\n\n300-1,000 looms: ₹75,000/month (enterprise + IoT + buyer portal)\n\nSetup fee: ₹50,000 (one-time)\n\nROI: 180% in first year (average client saves ₹36 lakhs)",
    },
    {
      question: "Can you integrate with our existing looms/systems?",
      answer:
        "Yes — we integrate with 95% of existing textile systems:\n\nLoom brands: Siemens, Toyota, Sumitomo, Murata, Picanol\n\nExisting software: Tally, SAP, Oracle (data migration included)\n\nHardware: QR scanners, IoT sensors, barcode printers\n\nNo need to replace your looms — our software works with what you have.",
    },
    {
      question: "Do you provide training for our team?",
      answer:
        "Yes — complete training included:\n\n2-day onsite training at your factory for 5-10 staff members\n\nVideo tutorials for every feature (30+ videos)\n\n24/7 support — call us anytime for help\n\n1-month free support after launch\n\nMost teams are fully trained in 1 week.",
    },
    {
      question: "What if we need to customize features later?",
      answer:
        "Yes — unlimited customization available:\n\nAdd new features (e.g., export documentation, GST filing)\n\nModify dashboards for different roles (manager vs. operator)\n\nIntegrate new suppliers/buyers as you grow\n\nCustomization fee: ₹25,000-₹100,000 (based on complexity)\n\nYour software grows with your business — no need to switch systems.",
    },
    {
      question: "Do you offer mobile app for textile management?",
      answer:
        "Yes — iOS + Android mobile apps included:\n\nTrack production from your phone (see real-time loom status)\n\nCheck inventory — scan QR codes on fabric rolls\n\nApprove orders — sign off on quality checks remotely\n\nGet alerts — notifications when looms stop or stock is low\n\nManage your entire factory from your phone — no office needed.",
    },
  ].map((f, i) => ({ id: i, title: f.question, content: f.answer }));

  return (
    <div className="min-h-screen bg-white ">
      <SEO {...seoData.textiles} />
      <style dangerouslySetInnerHTML={{ __html: scrollbarStyles }} />

      {/* ================= HERO ================= */}
      <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-black overflow-hidden py-20 p-5">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-40 left-20 w-24 h-24 bg-blue-400 rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-blue-300 rounded-full blur-xl"></div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-black"></div>

        <div className="relative container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="text-white space-y-6">
              <h1 className="text-3xl md:text-4xl lg:text-4xl 2xl:text-[40px] leading-tight">
                Textile Industry Software Solutions | ERP, Inventory &
                Production Management for Textile Manufacturers
              </h1>
              <p className="text-lg lg:text-lg 2xl:text-xl text-gray-300 leading-relaxed">
                Textile manufacturers lose 15-25% of revenue to production
                downtime, fabric waste, and manual inventory errors. Our
                textile-specific ERP software reduces downtime by 35%, cuts
                fabric waste by 40%, and automates inventory tracking — so you
                ship only quality products and scale production without
                operational chaos.
              </p>
              <button
                onClick={openConsultation}
                className="text-[15px] lg:text-[16px] 2xl:text-[18px]  bg-gradient-to-r  from-amber-400 to-orange-500 text-black px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:from-amber-500 hover:to-orange-600"
              >
                📞 Get Free Textile Software Consultation — See How We Cut
                Production Costs
              </button>
            </div>

            <div className="space-y-4">
              {adminFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 hover:bg-white/15 transition-all duration-300"
                  >
                    <div className="flex items-start space-x-3">
                      <div className="bg-gradient-to-r from-amber-400 to-orange-500 p-2 rounded-lg text-black flex-shrink-0">
                        <IconComponent size={20} />
                      </div>
                      <div>
                        <h3 className="text-white text-lg 2xl:text-[22px] mb-1">
                          {feature.title}
                        </h3>
                        <p className="text-gray-300 text-sm lg:text-[15px] 2xl:text-[18px] leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Hero stat cards */}
          <div className="mt-16 pt-12 border-t border-blue-400/30">
            <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:hidden">
              {stats.map((stat, index) => (
                <StatCard key={index} number={stat.number} label={stat.label} />
              ))}
            </div>
            <div className="hidden lg:grid grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center transform hover:scale-110 transition-transform duration-300 cursor-pointer"
                >
                  <div className="text-4xl md:text-5xl text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-blue-200 text-sm md:text-base 2xl:text-[18px]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= BUSINESS CHALLENGES ================= */}
      <section
        className="py-16 p-3 bg-black"
        aria-labelledby="challenges-heading"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2
              id="challenges-heading"
              className="text-2xl lg:text-3xl 2xl:text-4xl bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent mb-3"
            >
              5 Critical Challenges Facing Textile Manufacturers Today
            </h2>
            <p className="text-base lg:text-[18px] 2xl:text-[20px] text-gray-300 max-w-2xl lg:max-w-4xl mx-auto">
              The problems costing you production hours, quality, and margin —
              and how we solve them.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {businessChallenges.map((c, i) => (
              <InfoCard
                key={i}
                icon={c.icon}
                eyebrow={c.impact}
                title={c.title}
              >
                <p>{c.pain}</p>
                <p className="text-amber-400">{c.solution}</p>
              </InfoCard>
            ))}
          </div>
        </div>
      </section>

      {/* ================= BUSINESS OUTCOMES ================= */}
      <section
        className="py-16 p-2 bg-gradient-to-br from-gray-900 via-blue-900 to-black"
        aria-labelledby="outcomes-heading"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2
              id="outcomes-heading"
              className="text-2xl md:text-4xl 2xl:text-[35px]  text-white mb-3"
            >
              What Textile Manufacturers Achieve With Our AI-Powered ERP
            </h2>
            <p className="text-lg lg:text-[18px] 2xl:text-[22px] text-gray-300 max-w-2xl lg:max-w-4xl mx-auto">
              Executives buy outcomes, not features. Measurable results, not
              promises.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {businessOutcomes.map((o, i) => (
              <StatCard key={i} number={o.number} label={o.label} />
            ))}
          </div>
          <p className="text-center text-gray-300 mt-10 text-sm md:text-base lg:text-[14px] 2xl:text-[19px]">
            12+ textile mills saved ₹36 lakhs+ annually · 180% average
            first-year ROI · 95% loom uptime across 100+ looms
          </p>
        </div>
      </section>

      {/* ================= AI SOLUTIONS (formerly Features) ================= */}
      <section
        className="py-16 p-3 bg-black"
        aria-labelledby="ai-solutions-heading"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2
              id="ai-solutions-heading"
              className="text-3xl 2xl:text-4xl bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent mb-3"
            >
              AI-Powered Solutions for Textile Manufacturing
            </h2>
            <p className="text-base 2xl:text-[20px] text-gray-300 max-w-2xl mx-auto">
              Real AI solving real problems — from scheduling to quality to
              maintenance.
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
                            className={`text-xs 2xl:text-[20px]  px-2 py-1 rounded ${
                              activeFeature === index
                                ? "bg-black text-amber-400"
                                : "bg-gradient-to-r from-amber-400 to-orange-500 text-black"
                            }`}
                          >
                            {index < 9 ? `0${index + 1}` : index + 1}
                          </span>
                          <span className="font-medium text-[16px] 2xl:text-[20px]">
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
                              <h4 className="text-lg 2xl:text-[20px] font-semibold text-orange-600 mb-3">
                                {section.heading}
                              </h4>
                              <ul className="space-y-3 text-gray-600 text-sm">
                                {section.details.map((detail, idx) => (
                                  <li
                                    key={idx}
                                    className="flex items-start gap-2"
                                  >
                                    <span className="w-1.5 h-1.5 text-sm lg:text-[15px] 2xl:text-[19px] bg-gradient-to-r from-amber-400 to-orange-500 rounded-full mt-2 flex-shrink-0"></span>
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
        className="py-16 p-3 bg-gradient-to-br from-gray-900 via-blue-900 to-black"
        aria-labelledby="use-cases-heading"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2
              id="use-cases-heading"
              className="text-3xl md:text-4xl text-white mb-3"
            >
              Textile AI Use Cases — Real Business Scenarios
            </h2>
            <p className="text-lg 2xl:text-[20px] text-gray-300 max-w-2xl mx-auto">
              Not feature lists — real scenarios that solve your specific
              challenges.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((u, i) => (
              <InfoCard
                key={i}
                icon={u.icon}
                title={u.title}
                footer={
                  <button
                    onClick={openConsultation}
                    className="text-amber-400 text-sm font-medium inline-flex items-center gap-1 hover:gap-2 transition-all"
                  >
                    Talk to us about this <ArrowRight size={14} />
                  </button>
                }
              >
                <p>
                  <span className="text-gray-400 text-sm 2xl:text-[18px]">
                    Problem:{" "}
                  </span>
                  {u.problem}
                </p>
                <p>
                  <span className="text-gray-400 text-sm 2xl:text-[18px]">
                    AI Workflow:{" "}
                  </span>
                  {u.workflow}
                </p>
                <p className="text-amber-400 text-sm 2xl:text-[18px]">
                  <span className="text-gray-400 text-sm 2xl:text-[18px]">
                    Result:{" "}
                  </span>
                  {u.result}
                </p>
              </InfoCard>
            ))}
          </div>
        </div>
      </section>

      {/* ================= IMPLEMENTATION PROCESS ================= */}
      <section
        className="py-16  bg-black relative"
        aria-labelledby="process-heading"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2
              id="process-heading"
              className="text-3xl 2xl:text-[35px] bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent mb-3"
            >
              Our Textile Management Implementation Process
            </h2>
            <p className="text-lg text-gray-300 2xl:text-[20px]">
              A streamlined 6-8 week rollout with minimal disruption to
              production.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="block md:hidden">
              <div className="relative flex justify-between items-start gap-2 px-2">
                <div className="absolute top-6 sm:top-7 left-8 right-8 h-0.5 bg-blue-300 z-0"></div>
                {processSteps.map((step, index) => (
                  <div key={index} className="flex-1 text-center relative z-10">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-amber-400 to-orange-500 text-black rounded-full flex items-center justify-center text-lg sm:text-xl  font-extrabold mb-2 mx-auto border-2 border-white shadow-lg">
                      {step.number}
                    </div>
                    <h3 className="font-medium text-white text-sm sm:text-base lg:text-[15px] leading-tight px-1">
                      {step.title}
                    </h3>
                  </div>
                ))}
              </div>
            </div>

            <div className="hidden md:flex justify-center items-center gap-6">
              {processSteps.map((step, index) => (
                <div key={index} className="flex items-center">
                  <div className="text-center max-w-[180px] 2xl:max-w-[210px]">
                    <div className="w-16 h-16 bg-gradient-to-r from-amber-400 to-orange-500 text-black rounded-full flex items-center justify-center text-xl font-extrabold mb-3 mx-auto">
                      {step.number}
                    </div>
                    <h3 className="font-medium text-white text-base lg:text-[18px] mb-1">
                      {step.title}
                    </h3>
                    <p className="text-gray-400 text-xs 2xl:text-[15px]  leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="w-12 h-0.5 bg-blue-300 mx-3 -mt-10"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHY ASCENTIA LABS ================= */}
      <section
        className="py-16 p-3 bg-gradient-to-br from-gray-900 via-blue-900 to-black relative overflow-hidden"
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
                    className="text-3xl md:text-4xl mb-4 leading-tight"
                  >
                    Revolutionize Your Textile Operations with Our Expertise
                  </h2>
                  <p className="text-xl text-gray-300 mb-8">
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
        className="py-16 p-3 bg-black"
        aria-labelledby="related-services-heading"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2
              id="related-services-heading"
              className="text-3xl bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent mb-3"
            >
              Related Services for Textile Manufacturers
            </h2>
            <p className="text-base text-gray-300 max-w-2xl mx-auto">
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
                  <p className="text-gray-300 text-sm mb-4">{s.description}</p>
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
        className="py-16 p-3 bg-gradient-to-br from-gray-900 via-blue-900 to-black"
        aria-labelledby="related-resources-heading"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2
              id="related-resources-heading"
              className="text-2xl md:text-4xl text-white mb-3"
            >
              Continue Learning — Textile ERP & AI Resources
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Deepen your understanding of AI and ERP in textile manufacturing.
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
      <section className="py-16 p-3 bg-black" aria-labelledby="faq-heading">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2
                id="faq-heading"
                className="text-2xl md:text-3xl bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent md:text-4xl mb-4"
              >
                Frequently Asked Questions — Textile Software
              </h2>
              <p className="text-lg text-gray-300">
                Find answers to common questions about our textile management
                solutions
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
