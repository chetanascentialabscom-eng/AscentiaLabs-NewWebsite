import { useState, useEffect, useMemo } from "react";
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
  Building2,
  Building,
  Home,
  GraduationCap,
  Stethoscope,
  Truck,
  Plane,
  Ticket,
  Settings,
  Star,
} from "lucide-react";
import { useConsultation } from "../../../contexts/ConsultationContext";
import SEO from "../../../components/SEO";
import { seoData } from "../../../utils/seoData";
import { ROUTES, SITE_URL, absoluteUrl } from "../../../utils/routes";

/* ------------------------------------------------------------------ */
/*  Presentational system — dark navy / amber identity preserved      */
/* ------------------------------------------------------------------ */

const SectionShell = ({
  children,
  className = "",
  gradient = false,
  labelledBy,
}) => (
  <section
    className={`relative overflow-hidden py-16 md:py-20 ${
      gradient
        ? "bg-gradient-to-br from-gray-900 via-blue-900 to-black"
        : "bg-black"
    } ${className}`}
    aria-labelledby={labelledBy}
  >
    {gradient && (
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black to-transparent z-0" />
    )}
    {gradient && (
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/80 to-transparent z-0" />
    )}
    <div className="container relative z-10 mx-auto max-w-6xl px-4">
      {children}
    </div>
  </section>
);

const SectionIntro = ({
  id,
  title,
  subtitle,
  align = "center",
  light = false,
}) => (
  <div
    className={`mb-10 md:mb-12 ${
      align === "left" ? "max-w-xl text-left" : "mx-auto max-w-5xl text-center"
    }`}
  >
    <h2
      id={id}
      className={`mb-3 text-3xl leading-tight md:text-4xl ${
        light
          ? "text-white"
          : "bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent"
      }`}
    >
      {title}
    </h2>
    {subtitle && (
      <p
        className={`text-base leading-relaxed md:text-lg ${
          light ? "text-white/90" : "text-gray-300"
        }`}
      >
        {subtitle}
      </p>
    )}
  </div>
);

const AccordionGroup = ({ items, activeId, onToggle, variant = "light" }) => {
  const isDark = variant === "dark";
  return (
    <div
      className={
        isDark
          ? "divide-y divide-gray-800 border-y border-gray-800"
          : "space-y-2"
      }
    >
      {items.map((item) => {
        const open = activeId === item.id;
        const panelId = `accordion-panel-${variant}-${item.id}`;
        const buttonId = `accordion-button-${variant}-${item.id}`;
        return (
          <div
            key={item.id}
            className={
              isDark
                ? "overflow-hidden"
                : `rounded-xl border transition-colors duration-300 ${
                    open
                      ? "border-amber-400/40 bg-white/[0.04]"
                      : "border-white/10 bg-white/[0.02] hover:border-white/20"
                  }`
            }
          >
            <button
              type="button"
              id={buttonId}
              aria-expanded={open}
              aria-controls={panelId}
              onClick={() => onToggle(open ? null : item.id)}
              className={
                isDark
                  ? "group flex w-full items-center justify-between gap-4 px-1 py-5 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400"
                  : "flex w-full items-center justify-between gap-4 p-4 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400"
              }
            >
              {isDark ? (
                <h3 className="pr-2 text-base text-white transition-colors group-hover:text-amber-300 md:text-lg">
                  {item.title}
                </h3>
              ) : (
                <div className="flex min-w-0 items-center gap-3">
                  <span
                    className={`shrink-0 rounded-md px-2.5 py-1 text-xs font-semibold tracking-wide ${
                      open
                        ? "bg-gradient-to-r from-amber-400 to-orange-500 text-black"
                        : "bg-blue-600/80 text-white"
                    }`}
                  >
                    {String(item.id).padStart(2, "0")}
                  </span>
                  <div className="min-w-0">
                    <h3 className="truncate text-md font-medium text-gray-100 lg:text-lg">
                      {item.title}
                    </h3>
                    <div
                      className={`mt-1 h-0.5 transition-all duration-300 ${
                        open ? "w-24 bg-amber-400" : "w-12 bg-blue-500/70"
                      }`}
                    />
                  </div>
                </div>
              )}
              <span className="flex-shrink-0 text-blue-400" aria-hidden="true">
                {open ? (
                  <ChevronUp className="h-5 w-5" />
                ) : (
                  <ChevronDown className="h-5 w-5" />
                )}
              </span>
            </button>

            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!open}
              className={`overflow-hidden transition-all duration-300 ease-out ${
                open ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className={isDark ? "pb-5 pr-8" : "px-4 pb-5 pl-[3.75rem]"}>
                {typeof item.content === "string" ? (
                  <p className="whitespace-pre-line text-sm leading-relaxed text-gray-300 md:text-base">
                    {item.content}
                  </p>
                ) : (
                  item.content
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

// FAQ — AEO lead sentences + FAQPage schema source (module scope for stable JSON-LD)
const TEXTILE_FAQ_ITEMS = [
  {
    question:
      "What's the difference between custom textile software and off-the-shelf ERP?",
    answer:
      "The main difference is that off-the-shelf ERP is built for general manufacturing and forces you to adapt your workflows, while custom textile software is built specifically for your loom types, fabric categories, quality standards, and supplier relationships.\n\nThis means:\n\nNo costly workarounds\n\nFaster implementation (8-12 weeks vs. 12-18 months)\n\nHigher ROI because you're not paying for unused features\n\nAbility to add exactly the AI/ML capabilities you need",
  },
  {
    question: "How long does it take to develop custom textile software?",
    answer:
      "Custom textile software typically takes 8-12 weeks for full development:\n\nWeek 1-2: Discovery & analysis\n\nWeek 3: Solution architecture\n\nWeek 4-8: Development & AI/ML model building\n\nWeek 9-10: Testing & QA\n\nWeek 11: Deployment\n\nWeek 12+: Training & support",
  },
  {
    question: "What's the cost of custom textile software?",
    answer:
      "Custom textile software typically costs ₹10-25 lakhs for basic production and inventory, ₹25-50 lakhs for full production plus quality and analytics, and ₹50 lakhs–₹2 crores for enterprise IoT and AI/ML — depending on complexity, features, and scope.\n\nROI: 180%+ in first year (average client saves ₹36 lakhs+ annually)",
  },
  {
    question: "Can you integrate with our existing looms and systems?",
    answer:
      "Yes — we integrate with 95% of existing textile systems:\n\nLoom brands: Siemens, Toyota, Sumitomo, Murata, Picanol\n\nExisting software: Tally, SAP, Oracle (data migration included)\n\nHardware: QR scanners, IoT sensors, barcode printers",
  },
  {
    question: "Do you provide training for our team?",
    answer:
      "Yes — complete training is included:\n\n2-day onsite training at your factory for 5-10 staff members\n\nVideo tutorials for every feature (30+ videos)\n\n24/7 support — call us anytime for help\n\n1-month free support after launch",
  },
  {
    question: "What if we need to add features later?",
    answer:
      "Yes — unlimited customization is available as your business grows:\n\nAdd new features as your business grows\n\nModify dashboards for different roles (manager vs. operator)\n\nIntegrate new suppliers/buyers\n\nAdd new AI/ML capabilities\n\nYour software grows with your business — no need to switch systems.",
  },
];

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
    // { number: "35%", label: "Downtime Reduction" },
    { number: "40%", label: "Fabric Waste Reduction" },
    // { number: "98%", label: "Inspection Accuracy" },
    { number: "60 hrs", label: "Reporting Time Saved / mo" },
    // { number: "25%", label: "Production Output Increase" },
    { number: "99%+", label: "Inventory Accuracy" },
    // { number: "45%", label: "Downtime via Predictive Maint." },
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
      icon: Package,
      title: "Color Matching",
      problem:
        "8–10 batches per month rejected due to color mismatches, resulting in losses of approximately US$3,500–US$5,800 per batch.",
      workflow:
        "AI color analysis compares batches to approved standards with 99% accuracy.",
      result:
        "90% fewer color mismatches, saving approximately US$20K–US$35K per month.",
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

  // Related Industries — SEO internal linking (exclude current Textiles page)
  const relatedIndustries = [
    {
      icon: Wrench,
      title: "Manufacturing Management Software",
      line: "Custom manufacturing software for production planning, inventory control, and factory operations.",
      link: ROUTES.industry.manufacturing,
    },
    {
      icon: Truck,
      title: "Logistics Software Development",
      line: "Logistics software for fleet tracking, warehouse management, and supply chain optimization.",
      link: ROUTES.industry.logistics,
    },
    {
      icon: Home,
      title: "Real Estate App Development",
      line: "Real estate software for property management, PropTech CRM, and leasing workflows.",
      link: ROUTES.industry.realEstate,
    },
    {
      icon: Building2,
      title: "Business CRM Software Development",
      line: "Custom business CRM software for sales pipeline, client management, and customer retention.",
      link: ROUTES.industry.businessCrm,
    },
    {
      icon: Settings,
      title: "Field Service CRM Software",
      line: "Field service CRM for scheduling, technician dispatch, job tracking, and mobile workforce management.",
      link: ROUTES.industry.fieldServiceCrm,
    },
    {
      icon: BarChart3,
      title: "Enterprise ERP Software Development",
      line: "ERP software development to integrate finance, operations, inventory, and business processes.",
      link: ROUTES.industry.erp,
    },
    {
      icon: Stethoscope,
      title: "Healthcare App Development",
      line: "Healthcare app development for patient management, telemedicine, and digital health platforms.",
      link: ROUTES.industry.healthcare,
    },
    {
      icon: GraduationCap,
      title: "Education App Development",
      line: "Education software for schools, colleges, e-learning platforms, and student management systems.",
      link: ROUTES.industry.education,
    },
    {
      icon: Building,
      title: "Interior Design App Development",
      line: "Interior design software for project management, 3D visualization, and client collaboration.",
      link: ROUTES.industry.interiorArchitecture,
    },
    {
      icon: Plane,
      title: "Travel App Development",
      line: "Travel and tourism software for booking engines, itinerary management, and tour operations.",
      link: ROUTES.industry.travelTourism,
    },
    {
      icon: Ticket,
      title: "Ticketing Solution Software",
      line: "Digital ticketing software for online booking, event management, and access control systems.",
      link: ROUTES.industry.ticketing,
    },
    {
      icon: Star,
      title: "Kindergarten Management Software",
      line: "Kindergarten school management software for admissions, attendance, and parent communication.",
      link: ROUTES.industry.kindergarten,
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

  const faqs = TEXTILE_FAQ_ITEMS.map((f, i) => ({
    id: i,
    title: f.question,
    content: f.answer,
  }));

  const pageUrl = absoluteUrl(ROUTES.industry.textiles);
  const orgLogo = `${SITE_URL}/ascentialabslogopng.png`;

  const jsonLdGraph = useMemo(() => {
    const faqSchema = {
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: TEXTILE_FAQ_ITEMS.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: f.answer,
        },
      })),
    };

    const organizationSchema = {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Ascentia Labs",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: orgLogo,
      },
      sameAs: [
        "https://www.linkedin.com/company/ascentialabs/",
        "https://www.instagram.com/ascentialabs/",
      ],
      description:
        "Ascentia Labs builds custom software, AI/ML solutions, and digital platforms for industry-specific operations including textile manufacturing.",
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        url: absoluteUrl(ROUTES.contact),
      },
      // TODO: confirm & add when available:
      // foundingDate, legalName, address, telephone, email, areaServed, numberOfEmployees
    };

    const serviceSchema = {
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name: "AI-Powered Custom Textile Manufacturing Software",
      serviceType: "Textile Manufacturing Software Development",
      description: seoData.textiles.description,
      provider: { "@id": `${SITE_URL}/#organization` },
      url: pageUrl,
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Textile AI & ML Solutions",
        itemListElement: features.map((feature, index) => ({
          "@type": "Offer",
          position: index + 1,
          itemOffered: {
            "@type": "Service",
            name: feature.title,
            description: feature.sections
              .map(
                (section) =>
                  `${section.heading}: ${section.details.join("; ")}`,
              )
              .join(" | "),
          },
        })),
      },
      // TODO: confirm areaServed when available
    };

    const breadcrumbSchema = {
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: SITE_URL,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Industries",
          // TODO: confirm — no dedicated /industries index route in routes.js
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Textile Manufacturing Software",
          item: pageUrl,
        },
      ],
    };

    const webPageSchema = {
      "@type": "WebPage",
      "@id": pageUrl,
      url: pageUrl,
      name: seoData.textiles.title,
      description: seoData.textiles.description,
      about: { "@id": `${pageUrl}#service` },
      breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
      mainEntity: { "@id": `${pageUrl}#faq` },
      publisher: { "@id": `${SITE_URL}/#organization` },
    };

    return {
      "@context": "https://schema.org",
      "@graph": [
        organizationSchema,
        webPageSchema,
        serviceSchema,
        breadcrumbSchema,
        faqSchema,
      ],
    };
    // Static industry page data — rebuild only if page URL identity changes
  }, [pageUrl, orgLogo]);

  useEffect(() => {
    const scriptId = "textiles-jsonld";
    let script = document.getElementById(scriptId);
    if (!script) {
      script = document.createElement("script");
      script.id = scriptId;
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(jsonLdGraph);

    return () => {
      const existing = document.getElementById(scriptId);
      if (existing) existing.remove();
    };
  }, [jsonLdGraph]);

  return (
    <div className="min-h-screen bg-black">
      <SEO {...seoData.textiles} />
      <style dangerouslySetInnerHTML={{ __html: scrollbarStyles }} />

      {/* Visually hidden breadcrumb for crawlers / assistive tech — no visual change */}
      <nav aria-label="Breadcrumb" className="sr-only">
        <ol>
          <li>
            <Link to={ROUTES.home}>Home</Link>
          </li>
          <li>Industries</li>
          <li>
            <Link to={ROUTES.industry.textiles}>
              Textile Manufacturing Software
            </Link>
          </li>
        </ol>
      </nav>
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-black pt-20 pb-16 md:pt-24 md:pb-20">
        <div
          className="pointer-events-none absolute inset-0 opacity-10"
          aria-hidden="true"
        >
          <div className="absolute top-20 right-20 h-32 w-32 rounded-full bg-blue-500 blur-3xl" />
          <div className="absolute bottom-40 left-20 h-24 w-24 rounded-full bg-blue-400 blur-2xl" />
          <div className="absolute top-1/2 right-1/3 h-16 w-16 rounded-full bg-blue-300 blur-xl" />
        </div>
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-black" />

        <div className="relative container mx-auto max-w-6xl px-4 py-4 2xl:py-15 ">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <div className="max-w-3xl space-y-6 text-white">
            

              <h1 className="text-[25px] leading-tight md:text-4xl">
                Custom Textile Manufacturing Software — AI Production & Quality
              </h1>

              <p className="text-lg leading-relaxed text-gray-300">
                AI-powered textile software that boosts production efficiency, tightens quality control, and optimizes inventory.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row">
                <button
                  onClick={openConsultation}
                  className="rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 px-6 py-3 text-black shadow-lg transition-all duration-300 hover:scale-105 hover:from-amber-500 hover:to-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400"
                >
                  📞 Schedule a Consultation
                </button>
                <a
                  href="#ai-solutions-heading"
                  className="rounded-xl border border-white/30 px-6 py-3 text-center text-white transition-all duration-300 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Explore Solutions
                </a>
              </div>

              <ul className="flex list-none flex-wrap gap-x-6 gap-y-3 pt-2">
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
                    <span className="text-amber-400" aria-hidden="true">
                      ✓
                    </span>
                    {outcome}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-4 lg:mt-0">
              <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-black/30 shadow-2xl backdrop-blur-md">
                <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.04] px-5 py-3.5">
                  <div className="flex items-center gap-2.5">
                    <Factory className="h-5 w-5 text-amber-400" />
                    <p className="text-sm font-normal text-white md:text-base">
                      AI Manufacturing Suite
                    </p>
                  </div>
                  <div
                    className="flex items-center gap-1.5"
                    aria-hidden="true"
                  >
                    <span className="h-2 w-2 rounded-full bg-emerald-400/80" />
                    <span className="text-[11px] font-light uppercase tracking-wider text-gray-400">
                      Live
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 divide-y divide-white/10 sm:grid-cols-2 sm:divide-x sm:divide-y-0">
                  <div className="p-5 transition-colors duration-300 hover:bg-white/[0.04]">
                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-amber-400/25 bg-amber-400/15">
                        <BrainCircuit className="h-5 w-5 text-amber-400" />
                      </div>
                      <div>
                        <p className="mb-1.5 text-sm font-normal text-white">
                          AI Quality Control
                        </p>
                        <p className="text-sm font-light leading-relaxed text-gray-300">
                          Detect fabric defects automatically using AI vision.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-5 transition-colors duration-300 hover:bg-white/[0.04]">
                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-blue-400/25 bg-blue-400/15">
                        <Boxes className="h-5 w-5 text-blue-400" />
                      </div>
                      <div>
                        <p className="mb-1.5 text-sm font-normal text-white">
                          Smart Inventory
                        </p>
                        <p className="text-sm font-light leading-relaxed text-gray-300">
                          Real-time warehouse and inventory tracking.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="border-white/10 p-5 transition-colors duration-300 hover:bg-white/[0.04] sm:border-t">
                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-emerald-400/25 bg-emerald-400/15">
                        <BarChart3 className="h-5 w-5 text-green-400" />
                      </div>
                      <div>
                        <p className="mb-1.5 text-sm font-normal text-white">
                          Production Analytics
                        </p>
                        <p className="text-sm font-light leading-relaxed text-gray-300">
                          Live dashboards for production and machine efficiency.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="border-white/10 p-5 transition-colors duration-300 hover:bg-white/[0.04] sm:border-t">
                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-violet-400/25 bg-violet-400/15">
                        <Cpu className="h-5 w-5 text-purple-400" />
                      </div>
                      <div>
                        <p className="mb-1.5 text-sm font-normal text-white">
                          Predictive Maintenance
                        </p>
                        <p className="text-sm font-light leading-relaxed text-gray-300">
                          Prevent machine failures before downtime occurs.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= BUSINESS CHALLENGES ================= */}
      <SectionShell labelledBy="challenges-heading">
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:sticky lg:top-28 lg:col-span-4">
            <h2
              id="challenges-heading"
              className="mb-4 bg-gradient-to-r from-blue-400 to-white bg-clip-text text-3xl leading-tight text-transparent md:text-4xl"
            >
              5 Critical Challenges Facing Textile Manufacturers Today
            </h2>
            <p className="text-base leading-relaxed text-white/95">
              The problems costing you production hours, quality, and margin —
              and how we solve them.
            </p>
          </div>

          <ol className="ml-3 list-none space-y-0 border-l border-white/10 md:ml-4 lg:col-span-8">
            {businessChallenges.map((c, i) => {
              const Icon = c.icon;
              return (
                <li key={i} className="relative pb-8 pl-8 last:pb-0 md:pl-10">
                  <span className="absolute -left-[9px] top-1 flex h-[18px] w-[18px] items-center justify-center rounded-full bg-gradient-to-r from-amber-400 to-orange-500 text-[10px] font-bold text-black ring-4 ring-black">
                    {i + 1}
                  </span>
                  <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5 transition-colors duration-300 hover:border-amber-400/35 md:p-6">
                    <div className="mb-3 flex items-start gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-r from-amber-400 to-orange-500 text-black">
                        <Icon size={18} />
                      </div>
                      <h3 className="pt-1 text-lg font-semibold text-white">
                        {c.title}
                      </h3>
                    </div>
                    <p className="mb-3 text-sm leading-relaxed text-white/95 md:text-[15px]">
                      {/* <span className="text-gray-400">Impact: </span> */}
                      {/* {c.impact}. {c.pain} */}
                    </p>
                    <p className="text-sm leading-relaxed text-amber-400 md:text-[15px]">
                      <span className="font-medium text-amber-300">
                        Solution:{" "}
                      </span>
                      {c.solution}
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </SectionShell>

      {/* ================= BUSINESS OUTCOMES ================= */}
      <SectionShell gradient labelledBy="outcomes-heading">
        <SectionIntro
          id="outcomes-heading"
          title="What Textile Manufacturers Achieve With  AI  Solutions"
          subtitle="Executives buy outcomes, not features. Measurable results, not promises."
          light
        />

        <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/25 backdrop-blur-sm">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {businessOutcomes.map((o, i) => (
              <div
                key={i}
                className={`px-4 py-7 text-center sm:px-5 sm:py-8 ${
                  i % 2 === 1 ? "border-l border-white/10" : ""
                } ${i >= 2 ? "border-t border-white/10 md:border-t-0" : ""} ${
                  i >= 4 ? "border-t border-white/10 md:border-t" : ""
                } ${i % 4 !== 0 ? "md:border-l md:border-white/10" : ""}`}
              >
                <div className="mb-2 bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-3xl font-semibold tracking-tight text-transparent md:text-4xl">
                  {o.number}
                </div>
                <div className="text-xs leading-snug text-white/90 sm:text-sm">
                  {o.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-10 text-center text-sm text-gray-300 md:text-base">
          12+ textile mills saved ₹36 lakhs+ annually · 180% average
          first-year ROI · 95% loom uptime across 100+ looms
        </p>
      </SectionShell>

      {/* ================= AI SOLUTIONS ================= */}
      <SectionShell labelledBy="ai-solutions-heading">
        <SectionIntro
          id="ai-solutions-heading"
          title="AI & ML-Powered Solutions for Textile Manufacturing"
          subtitle="Real AI solves real problems. We build custom AI and ML models for your specific manufacturing challenges."
        />

        <div className="overflow-hidden rounded-2xl border border-white/10 bg-gray-950/80 shadow-xl">
          <div className="grid min-h-[420px] grid-cols-1 lg:grid-cols-5">
            <nav
              className="border-b border-white/10 bg-black/40 p-3 md:p-4 lg:col-span-2 lg:border-b-0 lg:border-r"
              aria-label="AI solution categories"
            >
              <div className="custom-scrollbar max-h-[320px] space-y-1 overflow-y-auto lg:max-h-none">
                {features.map((feature, index) => {
                  const active = activeFeature === index;
                  return (
                    <button
                      key={index}
                      type="button"
                      onClick={() => setActiveFeature(index)}
                      className={`w-full rounded-lg p-3 text-left transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400 ${
                        active
                          ? "bg-gradient-to-r from-amber-400 to-orange-500 text-black shadow-md"
                          : "text-gray-300 hover:bg-white/5"
                      }`}
                    >
                      <div className="flex items-start gap-2.5">
                        <span
                          className={`mt-0.5 shrink-0 rounded px-2 py-0.5 text-[11px] font-semibold ${
                            active
                              ? "bg-black text-amber-400"
                              : "bg-gradient-to-r from-amber-400 to-orange-500 text-black"
                          }`}
                        >
                          {index < 9 ? `0${index + 1}` : index + 1}
                        </span>
                        <span className="text-sm font-medium leading-snug">
                          {feature.title}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </nav>

            <article className="bg-white p-6 md:p-8 lg:col-span-3">
              <div className="mb-5 flex items-center gap-3">
                <div className="rounded-xl bg-amber-100 p-2.5">
                  <div className="rounded-lg bg-gradient-to-r from-amber-400 to-orange-500 p-2">
                    <svg
                      className="h-5 w-5 text-black"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div className="h-px flex-1 bg-gray-200" aria-hidden="true" />
              </div>

              <h3 className="mb-6 text-xl leading-snug text-gray-900 md:text-2xl">
                {features[activeFeature].title}
              </h3>

              <div className="space-y-7">
                {features[activeFeature].sections.map(
                  (section, sectionIndex) => (
                    <div key={sectionIndex}>
                      <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-orange-600">
                        {section.heading}
                      </h4>
                      <ul className="space-y-2.5 text-sm text-gray-600 md:text-[15px]">
                        {section.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-2.5">
                            <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gradient-to-r from-amber-400 to-orange-500" />
                            <span className="leading-relaxed">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ),
                )}
              </div>
            </article>
          </div>
        </div>
      </SectionShell>

      {/* ================= INDUSTRY USE CASES ================= */}
      <SectionShell gradient labelledBy="use-cases-heading">
        <SectionIntro
          id="use-cases-heading"
          title="Textile AI Use Cases — Real Business Scenarios"
          subtitle="Not feature lists — real scenarios that solve your specific challenges with custom software."
          light
        />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-3">
          {useCases.map((u, i) => {
            const Icon = u.icon;
            return (
              <article
                key={i}
                className="group rounded-xl border border-white/10 bg-black/30 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-amber-400/40 hover:shadow-lg hover:shadow-black/20 md:p-6"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-r from-amber-400 to-orange-500 text-black">
                    <Icon size={18} />
                  </div>
                  <h3 className="text-base font-semibold text-white">
                    {u.title}
                  </h3>
                </div>
                <div className="space-y-3 text-sm leading-relaxed">
                  <p className="text-gray-300">
                    <span className="text-gray-400">Problem: </span>
                    {u.problem}
                  </p>
                  <p>
                    <span className="text-white/90">AI Workflow: </span>
                    <span className="text-amber-400">{u.workflow}</span>
                  </p>
                  <p className="text-gray-300">
                    <span className="text-gray-400">Outcome: </span>
                    {u.result}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </SectionShell>

      {/* ================= IMPLEMENTATION PROCESS ================= */}
      <SectionShell labelledBy="process-heading">
        <SectionIntro
          id="process-heading"
          title="Our Custom Software Development Process"
          subtitle="A proven 8-12 week development process, built around your workflows with minimal disruption."
        />

        <ol className="relative ml-3 list-none space-y-0 border-l border-white/15 md:hidden">
          {processSteps.map((step, index) => (
            <li key={index} className="relative pb-8 pl-8 last:pb-0">
              <span className="absolute -left-[14px] top-0 flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-r from-amber-400 to-orange-500 text-xs font-bold text-black ring-4 ring-black">
                {step.number}
              </span>
              <h3 className="mb-1.5 text-base font-semibold text-white">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-400">
                {/* {step.description} */}
              </p>
            </li>
          ))}
        </ol>

        <div className="mx-auto hidden max-w-6xl md:block">
          <div className="relative">
            <div
              className="absolute left-[8%] right-[8%] top-6 h-px bg-gradient-to-r from-transparent via-blue-400/40 to-transparent"
              aria-hidden="true"
            />
            <ol className="relative grid list-none grid-cols-6 gap-3">
              {processSteps.map((step, index) => (
                <li key={index} className="px-1 text-center">
                  <div className="relative z-10 mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-amber-400 to-orange-500 text-base font-extrabold text-black shadow-lg ring-4 ring-black">
                    {step.number}
                  </div>
                  <h3 className="mb-2 text-sm font-semibold leading-snug text-white">
                    {step.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-gray-400">
                    {/* {step.description} */}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </SectionShell>

      {/* ================= WHY ASCENTIA LABS ================= */}
      <section
        className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-black py-16 md:py-20"
        aria-labelledby="why-us-heading"
      >
        <div className="pointer-events-none absolute left-0 right-0 top-0 h-20 bg-gradient-to-b from-black to-transparent" />
        <div
          className="pointer-events-none absolute inset-0 opacity-15"
          aria-hidden="true"
        >
          <div className="absolute left-20 top-20 h-32 w-32 rounded-full bg-yellow-400 blur-3xl" />
          <div className="absolute bottom-40 right-20 h-24 w-24 rounded-full bg-yellow-300 blur-2xl" />
        </div>
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-black" />

        <div className="relative container mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-14">
            <div className="space-y-6 text-white">
              <div>
                <h2
                  id="why-us-heading"
                  className="mb-4 text-3xl leading-tight md:text-4xl"
                >
                  Revolutionize Your Textile Operations with Our Expertise
                </h2>
                <p className="text-xl text-gray-100">
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

            <div className="lg:sticky lg:top-28">
              <div className="rounded-2xl border border-blue-400/25 bg-gradient-to-br from-blue-600/15 to-blue-900/30 p-8 text-center text-white backdrop-blur-md md:p-10">
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full border-2 border-black/10 bg-gradient-to-br from-amber-400 via-amber-500 to-orange-500 shadow-xl">
                  <svg
                    className="h-10 w-10 text-black"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="mb-4 text-2xl leading-snug">
                  Ready to Transform Your Textile Operations?
                </h3>
                <p className="mb-7 leading-relaxed text-blue-100">
                  Join industry leaders who trust our textile management
                  solutions to optimize production and boost efficiency.
                </p>
                <button
                  onClick={openConsultation}
                  className="rounded-xl border-2 border-black/20 bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 px-8 py-3 text-black shadow-lg transition-all duration-300 hover:scale-105 hover:border-black/40 hover:from-amber-500 hover:via-orange-500 hover:to-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400"
                >
                  Start Your Project Today
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= RELATED AI SERVICES ================= */}
      <SectionShell labelledBy="related-services-heading">
        <SectionIntro
          id="related-services-heading"
          title="Related AI Services for Textile Manufacturers"
          subtitle="Explore our full suite of AI-powered solutions for the textile industry."
        />

        <ul className="grid list-none grid-cols-1 gap-4 sm:grid-cols-2 md:gap-5 lg:grid-cols-3">
          {relatedServices.map((s, i) => (
            <li key={i}>
              <Link
                to={s.href}
                className="group block h-full rounded-xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:border-amber-400/40 hover:bg-white/[0.05] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400 md:p-6"
              >
                <h3 className="mb-2 text-lg font-medium text-white transition-colors group-hover:text-amber-300">
                  {s.title}
                </h3>
                <p className="mb-5 text-sm leading-relaxed text-white/90">
                  {s.description}
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-amber-400">
                  Learn more
                  <ArrowRight
                    size={14}
                    className="transition-transform duration-300 group-hover:translate-x-0.5"
                  />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </SectionShell>

      {/* ================= RELATED INDUSTRIES ================= */}
      <SectionShell gradient labelledBy="related-industries-heading">
        <SectionIntro
          id="related-industries-heading"
          title="Related Industry Software Solutions"
          subtitle="Explore custom software development across manufacturing, logistics, CRM, healthcare, and more."
          light
        />

        <ul className="grid list-none grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-4">
          {relatedIndustries.map((industry, i) => {
            const Icon = industry.icon;
            return (
              <li key={i}>
                <Link
                  to={industry.link}
                  className="group flex h-full flex-col rounded-xl border border-white/10 bg-black/25 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-amber-400/40 hover:bg-black/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400 md:p-5"
                >
                  <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-r from-amber-400 to-orange-500 text-black">
                    <Icon size={18} />
                  </div>
                  <h3 className="mb-2 text-sm font-semibold leading-snug text-white transition-colors group-hover:text-amber-300 md:text-[15px]">
                    {industry.title}
                  </h3>
                  <p className="mb-4 flex-1 text-xs leading-relaxed text-gray-300 md:text-sm">
                    {industry.line}
                  </p>
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-amber-400 md:text-sm">
                    Explore
                    <ArrowRight
                      size={13}
                      className="transition-transform duration-300 group-hover:translate-x-0.5"
                    />
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </SectionShell>

      {/* ================= RELATED RESOURCES ================= */}
      <SectionShell labelledBy="related-resources-heading">
        <SectionIntro
          id="related-resources-heading"
          title="Continue Learning — Textile Software & AI Resources"
          subtitle="Deepen your understanding of AI, ML, and custom software in textile manufacturing."
        />

        <ul className="grid list-none grid-cols-1 divide-y divide-white/10 overflow-hidden rounded-xl border border-white/10 bg-black/20 md:grid-cols-3 md:divide-x md:divide-y-0">
          {relatedResources.map((r, i) => (
            <li key={i} className="flex">
              <Link
                to={r.href}
                className="group flex w-full flex-col p-6 transition-colors duration-300 hover:bg-white/[0.05] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-amber-400"
              >
                <span className="mb-3 text-xs font-semibold uppercase tracking-wide text-amber-400">
                  {r.topic}
                </span>
                <h3 className="flex-1 text-base font-medium leading-snug text-white transition-colors group-hover:text-amber-200">
                  {r.title}
                </h3>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm text-gray-400 transition-colors group-hover:text-amber-400">
                  Read more
                  <ArrowRight size={13} />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </SectionShell>

      {/* ================= FAQ ================= */}
      <SectionShell labelledBy="faq-heading">
        <div className="mx-auto max-w-5xl">
          <SectionIntro
            id="faq-heading"
            title="Frequently Asked Questions — Custom Textile Software Solutions"
            subtitle="Find answers to common questions about our custom AI & ML software solutions"
          />
          <AccordionGroup
            items={faqs}
            activeId={openFAQ}
            onToggle={setOpenFAQ}
            variant="dark"
          />
        </div>
      </SectionShell>
    </div>
  );
};

export default TextilesPage;
