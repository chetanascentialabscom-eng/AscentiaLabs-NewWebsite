import { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  ChevronDown,
  ChevronUp,
  BarChart3,
  ArrowRight,
  Building2,
  Building,
  GraduationCap,
  Stethoscope,
  Truck,
  Plane,
  Ticket,
  Star,
  Wrench,
  Users,
  Package,
  Home,
  Settings,
  Shield,
  Factory,
  Boxes,
} from "lucide-react";
import { useConsultation } from "../../../contexts/ConsultationContext";
import SEO from "../../../components/SEO";
import ChallengesPinnedSection from "../../../components/industries/ChallengesPinnedSection";
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
  allowSticky = false,
  fadeTop = true,
  fadeBottom = true,
}) => (
  <section
    className={`relative py-16 md:py-20 ${
      allowSticky ? "overflow-visible" : "overflow-hidden"
    } ${
      gradient
        ? fadeBottom
          ? "bg-gradient-to-br from-gray-900 via-blue-900 to-black"
          : "bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950"
        : "bg-black"
    } ${className}`}
    aria-labelledby={labelledBy}
  >
    {gradient && fadeTop && (
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black to-transparent z-0" />
    )}
    {gradient && fadeBottom && (
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
      align === "left" ? "max-w-xl text-left" : "mx-auto max-w-4xl text-center"
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

/** FAQ source for UI + FAQPage JSON-LD (AEO lead sentences). */
const MANUFACTURING_FAQ_ITEMS = [
  {
    question: "What is manufacturing management software?",
    answer:
      "A digital platform that helps manufacturers plan, execute and monitor production. It typically includes production scheduling, inventory management, quality control and supply chain management in one place.",
  },
  {
    question: "How does it improve production efficiency?",
    answer:
      "By automating scheduling, surfacing bottlenecks in real time, and connecting production with business systems for end-to-end efficiency.",
  },
  {
    question: "What's the difference between MES and ERP?",
    answer:
      "MES focuses on shop-floor operations — scheduling, quality and machine monitoring. ERP handles broader business functions like finance and procurement. They work best integrated together.",
  },
  {
    question: "How long does implementation take?",
    answer:
      "Typically 8–12 weeks for a single plant, depending on complexity and customization needs.",
  },
  {
    question: "Can it integrate with my existing ERP?",
    answer:
      "Yes — we build integrations with SAP, Oracle, Microsoft Dynamics and other ERP systems.",
  },
  {
    question: "Is it suitable for small manufacturers?",
    answer:
      "Absolutely. We offer manufacturing software for small business that scales as you grow.",
  },
  {
    question: "What ROI can I expect?",
    answer:
      "Most clients see ROI within 6–12 months, with 15–25% lower operational costs and measurable gains in throughput and quality.",
  },
  {
    question: "Do you offer cloud-based deployment?",
    answer:
      "Yes — our cloud manufacturing software offers flexibility, scalability and lower upfront costs.",
  },
  {
    question: "How secure is the software?",
    answer:
      "Enterprise-grade security with encryption, role-based access controls and regular audits.",
  },
  {
    question: "What support do you provide after go-live?",
    answer:
      "24/7 support, ongoing maintenance and continuous improvement to ensure lasting value.",
  },
];

const ManufacturingPage = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [openFAQ, setOpenFAQ] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);
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
   * DATA — Manufacturing content mapped to Business CRM structure
   * =========================================================== */

  const businessChallenges = [
    {
      icon: Settings,
      title: "Manual scheduling causes bottlenecks and idle machines.",
      pain: "Lost throughput and missed delivery commitments.",
      solution:
        "Automated, real-time production scheduling across every stage.",
    },
    {
      icon: Boxes,
      title:
        "Stockouts halt production while excess inventory ties up capital.",
      pain: "Cash locked in inventory that isn't moving.",
      solution: "Automated reorder points and live stock tracking.",
    },
    {
      icon: Shield,
      title: "Defects reach customers and compliance records are fragmented.",
      pain: "Reputational damage and costly rework.",
      solution: "Quality checks embedded at every production stage.",
    },
    {
      icon: Truck,
      title: "Supplier delays cascade through the production line.",
      pain: "Unpredictable lead times and idle capacity.",
      solution: "End-to-end supply chain visibility and tracking.",
    },
    {
      icon: Wrench,
      title: "Unplanned breakdowns cause costly downtime.",
      pain: "Emergency repairs and missed output targets.",
      solution: "Maintenance scheduling with predictive alerts.",
    },
    {
      icon: Users,
      title: "Manual task assignment leads to uneven workloads.",
      pain: "Lower productivity and inconsistent output.",
      solution: "Workforce planning integrated with production schedules.",
    },
  ];

  const outcomes = [
    { value: "+15–25%", label: "Production Throughput" },
    { value: "20–30%", label: "Inventory Cost Reduction" },
    { value: "40–60%", label: "Defect Rate Reduction" },
    { value: "35–45%", label: "Unplanned Downtime Reduction" },
    { value: "10–20%", label: "Operational Cost Savings" },
    { value: "Real-time", label: "Decision Intelligence" },
  ];

  const features = [
    {
      id: "production-planning-management",
      title: "Production Planning — Auto Schedule, No Bottlenecks",
      sections: [
        {
          heading: "For Factory Owners",
          details: [
            "Auto production scheduling (10 minutes)",
            "Capacity planning (know max output)",
            "Resource optimization (right machines)",
            "Real-time monitoring (live dashboard)",
            "Bottleneck identification (alerts before delay)",
            "Task assignment (auto assign to team)",
            "Progress tracking (see status live)",
            "Inventory integration (auto material needed)",
          ],
        },
        {
          heading: "For Managers",
          details: [
            "See schedule (dashboard)",
            "Track progress (live)",
            "Find bottlenecks (alerts)",
            "Assign tasks (auto)",
          ],
        },
      ],
    },
    {
      id: "inventory-management-system",
      title: "Inventory Management — Auto Order When Low (No Stockouts)",
      sections: [
        {
          heading: "For Factory Owners",
          details: [
            "Real-time tracking (live stock levels)",
            "Auto stock alerts (when low, instant)",
            "Multi-warehouse management (all locations)",
            "Auto reorder points (no manual work)",
            "Supplier integration (auto-order placed)",
            "Purchase order generation (1 click)",
            "Batch + serial tracking (full traceability)",
          ],
        },
        {
          heading: "For Warehouse Staff",
          details: [
            "See stock levels (dashboard)",
            "Transfer tracking (live)",
            "Auto orders (alerts)",
            "Batch lookup (quick)",
          ],
        },
      ],
    },
    {
      id: "quality-control-assurance",
      title: "Quality Control — 0% Defects Shipped (Auto Checks)",
      sections: [
        {
          heading: "For Quality Teams",
          details: [
            "Auto inspections (custom checkpoints)",
            "Real-time monitoring (live)",
            "Trend analysis (see patterns)",
            "Non-conformance tracking (alerts)",
            "Corrective actions (auto assign)",
            "Compliance management (standards met)",
            "Audit trail (auto documentation)",
          ],
        },
        {
          heading: "For Owners",
          details: [
            "See quality (dashboard)",
            "Track defects (live)",
            "Compliance status (reports)",
          ],
        },
      ],
    },
    {
      id: "supply-chain-management",
      title: "Supply Chain — Track Suppliers, No Delays",
      sections: [
        {
          heading: "For Owners",
          details: [
            "Track supplier quality (ratings)",
            "Delivery times (live tracking)",
            "Supplier performance (KPIs)",
            "Procurement automation (RFQ auto)",
            "Contract tracking (alerts)",
            "Logistics optimization (auto plan)",
            "Delivery tracking (live)",
            "Vendor portal (chat with suppliers)",
          ],
        },
        {
          heading: "For Procurement",
          details: [
            "See suppliers (dashboard)",
            "Send RFQ (auto generate)",
            "Track contracts (alerts)",
            "Coordinate shipping (portal)",
          ],
        },
      ],
    },
    {
      id: "maintenance-management",
      title: "Maintenance — Prevent Breakdowns (No Surprises)",
      sections: [
        {
          heading: "For Maintenance Teams",
          details: [
            "Preventive schedules (auto reminders)",
            "Predictive maintenance (alerts before break)",
            "Performance monitoring (live KPIs)",
            "Cost tracking (budget management)",
            "Spare parts auto-reorder (always available)",
            "Work orders (auto create)",
          ],
        },
        {
          heading: "For Owners",
          details: [
            "See maintenance (dashboard)",
            "Track costs (reports)",
            "Breakdown alerts (instant)",
          ],
        },
      ],
    },
    {
      id: "workforce-management",
      title: "Workforce — Auto Schedules, Track Performance",
      sections: [
        {
          heading: "For Managers",
          details: [
            "Auto scheduling (skill-based, right people)",
            "Shift optimization (efficient)",
            "Time + attendance (digital, 5 seconds)",
            "Productivity tracking (KPIs live)",
            "Training management (certifications tracked)",
            "Performance analytics (live)",
          ],
        },
        {
          heading: "For Employees",
          details: [
            "See schedule (app)",
            "Mark attendance (5 seconds)",
            "View training (dashboard)",
          ],
        },
      ],
    },
    {
      id: "financial-reporting",
      title: "Financial Reporting — See Profits, Cut Costs",
      sections: [
        {
          heading: "For Owners",
          details: [
            "Real-time cost accounting (live)",
            "Job costing (per project)",
            "Profitability analysis (see profits)",
            "Financial dashboards (KPIs live)",
            "Budget planning (auto)",
            "Variance analysis (alerts)",
            "ERP integration (sync auto)",
          ],
        },
        {
          heading: "For Finance",
          details: [
            "Track costs (dashboard)",
            "See profits (reports)",
            "Budget tracking (live)",
          ],
        },
      ],
    },
    {
      id: "mobile-app",
      title: "Mobile App — Manage Factory from Phone",
      sections: [
        {
          heading: "For Managers",
          details: [
            "See production (app, live)",
            "Track inventory (live)",
            "Approve orders (1 click)",
            "Alerts (push notifications)",
            "Reports (PDF download)",
          ],
        },
        {
          heading: "For Workers",
          details: [
            "Mark attendance (app, 5 seconds)",
            "See schedule (dashboard)",
            "Report issues (instant)",
          ],
        },
      ],
    },
    {
      id: "machine-monitoring",
      title: "Machine Monitoring — Track All Machines Live",
      sections: [
        {
          heading: "For Owners",
          details: [
            "See all machines (dashboard)",
            "Performance (live KPIs)",
            "Breakdown alerts (instant)",
            "Usage tracking (reports)",
            "Efficiency (KPIs)",
          ],
        },
        {
          heading: "For Maintenance",
          details: [
            "Monitor machines (live)",
            "Alerts (instant)",
            "Usage data (reports)",
          ],
        },
      ],
    },
  ];

  const useCases = [
    {
      title: "Electronics Manufacturer Throughput",
      problem:
        "An electronics manufacturer faced constant production bottlenecks.",
      solution:
        "Automated scheduling with real-time adjustments — +30% throughput, no added resources.",
    },
    {
      title: "Auto Components Inventory Optimization",
      problem: "An auto components supplier held $2M in excess inventory.",
      solution:
        "Real-time visibility and automated reorder points — 40% inventory reduction at 99% service level.",
    },
    {
      title: "Food Processor Quality Compliance",
      problem: "A food processor struggled with quality compliance.",
      solution:
        "Quality checks integrated at every production stage — defects fell from 4% to 0.5%, saving $500K/year.",
    },
    {
      title: "Heavy Machinery Predictive Maintenance",
      problem:
        "A heavy machinery manufacturer faced frequent unplanned downtime.",
      solution:
        "Predictive maintenance across the production line — 50% less downtime, longer equipment life.",
    },
  ];

  const processSteps = [
    {
      number: "1",
      title: "Learn Your Factory",
      description:
        "We conduct comprehensive analysis of your manufacturing processes, identifying key challenges, operational requirements, and opportunities for digital transformation.",
    },
    {
      number: "2",
      title: "Custom Design",
      description:
        "We design a tailored manufacturing management platform that aligns with your production model, incorporating IoT integration, predictive analytics, and automated workflows.",
    },
    {
      number: "3",
      title: "Build + Test",
      description:
        "Our experts develop and deploy the solution with seamless integration to existing systems, ERP platforms, and manufacturing equipment, with minimal disruption.",
    },
    {
      number: "4",
      title: "Train + Start",
      description:
        "We provide comprehensive training and ongoing support, continuously monitoring system performance to maximize efficiency and ROI.",
    },
  ];

  const advantages = [
    {
      id: 1,
      title: "Industry Expertise",
      description: "We Know Manufacturing",
    },
    {
      id: 2,
      title: "Scalable Solutions",
      description: "Grows With You — From Small to Large Factory",
    },
    {
      id: 3,
      title: "Advanced Technology",
      description: "Modern Tech — AI, Auto-tracking, Real-time Reports",
    },
    {
      id: 4,
      title: "Quality Assurance & Compliance",
      description: "No Bugs, Meets Standards — We test 3 times",
    },
    {
      id: 5,
      title: "Seamless Integration",
      description: "Works With Your Current Systems — No disruption",
    },
    {
      id: 6,
      title: "24/7 Support",
      description: "24/7 Support — We Answer Fast",
    },
  ];

  const reasons = advantages.map((a) => ({
    id: a.id,
    title: a.title,
    content: a.description,
  }));

  const relatedServices = [
    {
      title: "Custom Software Development",
      description:
        "Purpose-built systems that match your exact production workflow.",
      href: ROUTES.service.customCrm,
    },
    {
      title: "AI/ML Development",
      description:
        "Predictive maintenance, quality inspection and demand forecasting.",
      href: ROUTES.service.aiMl,
    },
    {
      title: "Digital Transformation",
      description:
        "A clear roadmap from paper-based operations to a connected factory.",
      href: ROUTES.service.digitalTransformation,
    },
    {
      title: "Application Modernization",
      description: "Upgrade legacy systems without disrupting production.",
      href: ROUTES.service.applicationModernisation,
    },
    {
      title: "Mobile App Development",
      description: "Manage production, inventory and approvals from anywhere.",
      href: ROUTES.service.mobileApplication,
    },
  ];

  const relatedIndustries = [
    {
      icon: Home,
      title: "Real Estate",
      line: "Property management, CRM & PropTech software solutions.",
      link: ROUTES.industry.realEstate,
    },
    {
      icon: Wrench,
      title: "Field Service CRM",
      line: "Scheduling, dispatch & technician CRM for field teams.",
      link: ROUTES.industry.fieldServiceCrm,
    },
    {
      icon: GraduationCap,
      title: "Education",
      line: "Smart solutions for schools, colleges & e-learning platforms.",
      link: ROUTES.industry.education,
    },
    {
      icon: Stethoscope,
      title: "Healthcare",
      line: "Digital healthcare, patient management & telemedicine solutions.",
      link: ROUTES.industry.healthcare,
    },
    {
      icon: Building,
      title: "Interior & Architecture",
      line: "Project management, design collaboration & client portals.",
      link: ROUTES.industry.interiorArchitecture,
    },
    {
      icon: Star,
      title: "Kindergarten",
      line: "School management, admissions & parent communication.",
      link: ROUTES.industry.kindergarten,
    },
    {
      icon: Ticket,
      title: "Ticketing Solutions",
      line: "Online booking, event management & digital ticketing systems.",
      link: ROUTES.industry.ticketing,
    },
    {
      icon: Package,
      title: "Textile Industry",
      line: "ERP solutions for textile manufacturing & supply chains.",
      link: ROUTES.industry.textiles,
    },
    {
      icon: Truck,
      title: "Logistics",
      line: "Fleet tracking, warehouse & transportation management.",
      link: ROUTES.industry.logistics,
    },
    {
      icon: Plane,
      title: "Travel & Tourism",
      line: "Booking engines, itinerary & travel management platforms.",
      link: ROUTES.industry.travelTourism,
    },
    {
      icon: BarChart3,
      title: "Business CRM",
      line: "Custom business CRM for sales pipeline and client management.",
      link: ROUTES.industry.businessCrm,
    },
    {
      icon: Building2,
      title: "Enterprise ERP",
      line: "Integrate finance, operations, HR & business processes.",
      link: ROUTES.industry.erp,
    },
  ];

  const relatedResources = [
    {
      topic: "Blogs",
      title: "How Manufacturing Management Software Transforms Production",
      href: "#",
    },
    {
      topic: "Whitepapers",
      title: "Industry 4.0: A Roadmap for Indian Manufacturers",
      href: "#",
    },
    {
      topic: "Guides",
      title: "Manufacturing Software Selection Guide",
      href: "#",
    },
  ];

  const faqs = MANUFACTURING_FAQ_ITEMS.map((f, i) => ({
    id: i,
    title: f.question,
    content: f.answer,
  }));

  const pageUrl = absoluteUrl(ROUTES.industry.manufacturing);
  const orgLogo = `${SITE_URL}/ascentialabslogopng.png`;

  const jsonLdGraph = useMemo(() => {
    const faqSchema = {
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: MANUFACTURING_FAQ_ITEMS.map((f) => ({
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
        "Ascentia Labs builds custom software, AI/ML solutions, and digital platforms for industry-specific operations including manufacturing management.",
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        url: absoluteUrl(ROUTES.contact),
      },
    };

    const serviceSchema = {
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name: "Custom Manufacturing Management Software Development",
      serviceType: "Manufacturing Software Development",
      description: seoData.manufacturing.description,
      provider: { "@id": `${SITE_URL}/#organization` },
      url: pageUrl,
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Manufacturing Software Features",
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
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Manufacturing",
          item: pageUrl,
        },
      ],
    };

    const webPageSchema = {
      "@type": "WebPage",
      "@id": pageUrl,
      url: pageUrl,
      name: seoData.manufacturing.title,
      description: seoData.manufacturing.description,
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
  }, [pageUrl, orgLogo]);

  useEffect(() => {
    const scriptId = "manufacturing-jsonld";
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
      <SEO {...seoData.manufacturing} />
      <style dangerouslySetInnerHTML={{ __html: scrollbarStyles }} />

      <nav aria-label="Breadcrumb" className="sr-only">
        <ol>
          <li>
            <Link to={ROUTES.home}>Home</Link>
          </li>
          <li>Industries</li>
          <li>
            <Link to={ROUTES.industry.manufacturing}>Manufacturing</Link>
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

        <div className="relative container mx-auto max-w-6xl px-4 py-4 2xl:py-20 ">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14 2xl:gap-20">
            <div className="max-w-3xl space-y-6 text-white">
              <h1 className="text-[25px] leading-tight md:text-4xl">
                 Manufacturing Management Software — Production &
                Inventory
              </h1>

              <p className="text-lg leading-relaxed text-gray-300">
                Manufacturing software that unifies production planning,
                inventory, quality control, and supply chain management—boosting
                efficiency and real-time visibility across your factory.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row">
                <button
                  onClick={openConsultation}
                  className="rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 px-6 py-3 text-black shadow-lg transition-all duration-300 hover:scale-105 hover:from-amber-500 hover:to-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400"
                >
                  Schedule a Consultation →
                </button>
                <a
                  href="#ai-solutions-heading"
                  className="rounded-xl border border-white/30 px-6 py-3 text-center text-white transition-all duration-300 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Explore Solutions →
                </a>
              </div>

              <ul className="flex list-none flex-wrap gap-x-6 gap-y-3 pt-2">
                {[
                  "Production Planning",
                  "Inventory Management",
                  "Quality Control",
                  "Supply Chain Tracking",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 text-sm text-gray-200"
                  >
                    <span className="text-amber-400" aria-hidden="true">
                      ✓
                    </span>
                    {item}
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
                      Complete Manufacturing Suite
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
                        <Settings className="h-5 w-5 text-amber-400" />
                      </div>
                      <div>
                        <p className="mb-1.5 text-sm font-normal text-white">
                          Production Control System
                        </p>
                        <p className="text-sm font-light leading-relaxed text-gray-300">
                          Schedule production live and catch bottlenecks early.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-5 transition-colors duration-300 hover:bg-white/[0.04]">
                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-blue-400/25 bg-blue-400/15">
                        <Shield className="h-5 w-5 text-blue-400" />
                      </div>
                      <div>
                        <p className="mb-1.5 text-sm font-normal text-white">
                          Quality Assurance
                        </p>
                        <p className="text-sm font-light leading-relaxed text-gray-300">
                          Auto-inspect every stage and track compliance live.
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
                          Analytics & Reporting
                        </p>
                        <p className="text-sm font-light leading-relaxed text-gray-300">
                          Shop-floor dashboards for faster, smarter decisions.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="border-white/10 p-5 transition-colors duration-300 hover:bg-white/[0.04] sm:border-t">
                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-violet-400/25 bg-violet-400/15">
                        <Truck className="h-5 w-5 text-purple-400" />
                      </div>
                      <div>
                        <p className="mb-1.5 text-sm font-normal text-white">
                          Supply Chain Management
                        </p>
                        <p className="text-sm font-light leading-relaxed text-gray-300">
                          Track suppliers and inventory—no stockouts or delays.
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
      <ChallengesPinnedSection
        items={businessChallenges}
        title="Business Challenges We Solve"
        subtitle="Manufacturing operations face a complex web of challenges. Here's how we address each one."
      />

      {/* ================= BUSINESS OUTCOMES ================= */}
      <SectionShell gradient labelledBy="outcomes-heading">
        <SectionIntro
          id="outcomes-heading"
          title="Business Outcomes with Manufacturing Software"
          subtitle="Tangible, transformative results across every part of the factory."
          light
        />

        <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/25 backdrop-blur-sm">
          <div className="grid grid-cols-2 md:grid-cols-3">
            {outcomes.map((o, i) => (
              <div
                key={i}
                className={`px-4 py-7 text-center sm:px-5 sm:py-8 ${
                  i % 2 === 1 ? "border-l border-white/10" : ""
                } ${i >= 2 ? "border-t border-white/10 md:border-t-0" : ""} ${
                  i >= 3 ? "md:border-t md:border-white/10" : ""
                } ${i % 3 !== 0 ? "md:border-l md:border-white/10" : ""}`}
              >
                <div className="mb-2 bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-3xl font-medium tracking-tight text-transparent md:text-4xl">
                  {o.value}
                </div>
                <div className="text-xs leading-snug text-white/90 sm:text-sm">
                  {o.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionShell>

      {/* ================= FEATURES EXPLORER ================= */}
      <SectionShell labelledBy="ai-solutions-heading">
        <SectionIntro
          id="ai-solutions-heading"
          title="Explore Top Features of Our Manufacturing Management Solutions"
          subtitle="Comprehensive capabilities designed to optimize your production processes."
        />

        <div className="overflow-hidden rounded-2xl border border-white/10 bg-gray-950/80 shadow-xl">
          <div className="grid min-h-0 grid-cols-1 lg:min-h-[420px] lg:grid-cols-5">
            <nav
              className="min-w-0 border-b border-white/10 bg-black/40 p-3 md:p-4 lg:col-span-2 lg:border-b-0 lg:border-r"
              aria-label="Manufacturing feature categories"
            >
              <div className="custom-scrollbar max-h-[320px] space-y-1 overflow-y-auto lg:max-h-none">
                {features.map((feature, index) => {
                  const active = activeFeature === index;
                  return (
                    <button
                      key={feature.id}
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

            <article className="min-w-0 bg-white p-4 sm:p-6 md:p-8 lg:col-span-3">
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

              <h3 className="mb-5 text-lg leading-snug text-gray-900 sm:mb-6 sm:text-xl md:text-2xl">
                {features[activeFeature].title}
              </h3>

              {(() => {
                const sections = features[activeFeature].sections;
                const rowCount = Math.max(
                  ...sections.map((s) => s.details.length),
                  0,
                );
                const colWidth =
                  sections.length === 1 ? "w-full" : "w-1/2";

                return (
                  <>
                    <div className="space-y-4 md:hidden">
                      {sections.map((section, sectionIndex) => (
                        <div
                          key={sectionIndex}
                          className="overflow-hidden rounded-xl border border-gray-200"
                        >
                          <div className="bg-gradient-to-r from-amber-400 to-orange-500 px-3.5 py-2.5 text-xs font-semibold uppercase tracking-wide text-black">
                            {section.heading}
                          </div>
                          <ul className="divide-y divide-gray-100">
                            {section.details.map((detail, idx) => (
                              <li
                                key={idx}
                                className="flex items-start gap-2.5 px-3.5 py-3 text-sm leading-relaxed text-gray-700"
                              >
                                <span
                                  className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-amber-400 to-orange-500"
                                  aria-hidden="true"
                                />
                                <span className="min-w-0 break-words">
                                  {detail}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>

                    <div className="hidden overflow-x-auto md:block">
                      <div className="overflow-hidden rounded-xl border border-gray-200 shadow-sm">
                        <table className="w-full table-fixed border-collapse text-left text-sm">
                          <caption className="sr-only">
                            {features[activeFeature].title} details
                          </caption>
                          <thead>
                            <tr className="bg-gradient-to-r from-amber-400 to-orange-500">
                              {sections.map((section, sectionIndex) => (
                                <th
                                  key={sectionIndex}
                                  scope="col"
                                  className={`${colWidth} px-3 py-3 text-xs font-semibold uppercase tracking-wide text-black lg:px-4 ${
                                    sectionIndex > 0
                                      ? "border-l border-black/10"
                                      : ""
                                  }`}
                                >
                                  {section.heading}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {Array.from({ length: rowCount }).map(
                              (_, rowIdx) => (
                                <tr
                                  key={rowIdx}
                                  className="border-b border-gray-100 last:border-b-0 odd:bg-white even:bg-gray-50/70"
                                >
                                  {sections.map((section, sectionIndex) => {
                                    const detail = section.details[rowIdx];
                                    return (
                                      <td
                                        key={sectionIndex}
                                        className={`px-3 py-3 align-top text-gray-700 lg:px-4 ${
                                          sectionIndex > 0
                                            ? "border-l border-gray-100"
                                            : ""
                                        }`}
                                      >
                                        {detail ? (
                                          <span className="flex items-start gap-2.5">
                                            <span
                                              className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-amber-400 to-orange-500"
                                              aria-hidden="true"
                                            />
                                            <span className="min-w-0 break-words leading-relaxed">
                                              {detail}
                                            </span>
                                          </span>
                                        ) : (
                                          <span className="text-gray-300">
                                            —
                                          </span>
                                        )}
                                      </td>
                                    );
                                  })}
                                </tr>
                              ),
                            )}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </>
                );
              })()}
            </article>
          </div>
        </div>
      </SectionShell>

      {/* ================= INDUSTRY USE CASES ================= */}
      <SectionShell gradient labelledBy="use-cases-heading">
        <SectionIntro
          id="use-cases-heading"
          title="Industry Use Cases"
          subtitle="See how manufacturers have transformed their operations with our solutions."
          light
        />

        <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/25">
          <ul className="m-0 list-none divide-y divide-white/10 p-0">
            {useCases.map((u, i) => (
              <li key={i} className="min-w-0">
                <article className="grid min-w-0 grid-cols-1 gap-5 px-4 py-7 sm:gap-6 sm:px-5 sm:py-8 md:px-6 md:py-9 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5 xl:grid-cols-12 xl:items-start xl:gap-x-8 xl:px-8 xl:py-10">
                  <div className="relative min-w-0 lg:col-span-2 xl:col-span-3">
                    <span
                      className="pointer-events-none absolute -left-0.5 -top-3 select-none text-5xl font-medium leading-none text-white/[0.07] sm:-top-4 sm:text-6xl md:text-7xl xl:-top-5 xl:text-8xl"
                      aria-hidden="true"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="relative max-w-full break-words pt-8 mt-1 lg:mt-8 text-lg font-medium leading-snug text-white sm:pt-6 sm:text-xl md:text-2xl xl:pt-8">
                      {u.title}
                    </h3>
                  </div>

                  <div className="min-w-0 lg:col-span-1 xl:col-span-4">
                    <p className="mb-2 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-orange-400 sm:mb-2.5 lg:text-[14px] sm:tracking-[0.14em]">
                      <span
                        className="h-1.5 w-1.5 shrink-0 rounded-full bg-orange-400 2xl:text-[16px]"
                        aria-hidden="true"
                      />
                      The Problem
                    </p>
                    <p className="break-words text-sm leading-relaxed text-gray-300 md:text-[15px]">
                      {u.problem}
                    </p>
                  </div>

                  <div className="min-w-0 lg:col-span-1 xl:col-span-5">
                    <p className="mb-2 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-amber-400 sm:mb-2.5 lg:text-[14px] sm:tracking-[0.14em]">
                      <span
                        className="h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400 2xl:text-[16px]"
                        aria-hidden="true"
                      />
                      The Solution
                    </p>
                    <p className="break-words text-sm leading-relaxed text-gray-300 md:text-[15px]">
                      {u.solution}
                    </p>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </SectionShell>

      {/* ================= IMPLEMENTATION PROCESS ================= */}
      <SectionShell labelledBy="process-heading">
        <SectionIntro
          id="process-heading"
          title="Our Manufacturing Development Implementation Process"
          subtitle="How We Build Your Manufacturing Software — 8 Weeks Total"
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
            <ol className="relative grid list-none grid-cols-4 gap-3">
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

      {/* ================= RELATED AI SERVICES ================= */}
      <SectionShell labelledBy="related-services-heading">
        <SectionIntro
          id="related-services-heading"
          title="Related AI Services"
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
          subtitle="Explore custom software development across logistics, CRM, healthcare, ERP, and more."
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
          title="Related Resources"
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
                  Ready to Transform Your Manufacturing Operations?
                </h2>
                <p className="text-xl text-gray-100">
                  Why Manufacturing Companies Choose Ascentia Labs
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
                  Schedule a Consultation
                </h3>
                <p className="mb-7 leading-relaxed text-blue-100">
                  Join industry leaders who trust our manufacturing management
                  solutions to optimize production processes and boost
                  efficiency.
                </p>
                <button
                  type="button"
                  onClick={openConsultation}
                  className="rounded-xl border-2 border-black/20 bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 px-8 py-3 text-black shadow-lg transition-all duration-300 hover:scale-105 hover:border-black/40 hover:from-amber-500 hover:via-orange-500 hover:to-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400"
                >
                  Schedule a Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <SectionShell labelledBy="faq-heading">
        <div className="mx-auto max-w-4xl">
          <SectionIntro
            id="faq-heading"
            title="Frequently Asked Questions"
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

export default ManufacturingPage;
