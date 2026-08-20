import { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  ChevronDown,
  ChevronUp,
  BarChart3,
  ArrowRight,
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
  Wrench,
  FileText,
  MapPinned,
  ClipboardList,
  Users,
  Package,
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

const challengeIcons = [
  ClipboardList,
  MapPinned,
  Users,
  Wrench,
  Building2,
  BarChart3,
];

const useCaseIcons = [Building2, BarChart3, Users, Home];

/** FAQ source for UI + FAQPage JSON-LD (AEO lead sentences). */
const REAL_ESTATE_FAQ_ITEMS = [
  {
    question: "What is real estate software?",
    answer:
      "Real estate software is a set of digital tools and platforms designed to manage property-related operations, including property management, tenant relations, lease administration, financial reporting, and CRM for real estate companies, brokers, developers, and investors.",
  },
  {
    question: "What is property management software?",
    answer:
      "Property management software is specialized real estate software that helps property managers and companies oversee rental properties, including tenant management, lease tracking, maintenance coordination, rent collection, and financial reporting.",
  },
  {
    question: "What is real estate CRM software?",
    answer:
      "Real estate CRM software is a customer relationship management system built specifically for the real estate industry. It helps agents, brokers, and agencies manage leads, track client interactions, automate follow-ups, and close more deals.",
  },
  {
    question:
      "What is the difference between residential and commercial real estate software?",
    answer:
      "Residential real estate software focuses on managing single-family homes, apartments, and multi-family units, while commercial real estate software handles office buildings, retail centers, industrial properties, and mixed-use developments with lease abstraction and tenant improvement tracking.",
  },
  {
    question: "How does AI help in real estate?",
    answer:
      "AI helps real estate teams by powering lead scoring, predictive pricing, property recommendations, document automation, chatbots, predictive maintenance, and advanced analytics — reducing manual work and improving decision-making.",
  },
  {
    question: "What is PropTech?",
    answer:
      "PropTech (property technology) is the use of technology and software to transform the real estate industry, encompassing property management software, real estate CRM, IoT, AI, and digital platforms.",
  },
  {
    question: "How much does custom real estate software cost?",
    answer:
      "Custom real estate software typically costs from $100,000–$250,000 for a basic property management solution, while comprehensive enterprise platforms can range from $500,000 to $2M+, depending on scope, complexity, features, and deployment model.",
  },
  {
    question: "How long does it take to build custom real estate software?",
    answer:
      "A basic real estate CRM or property management solution typically takes 3–6 months to build. Complex enterprise platforms with AI capabilities can take 9–18 months, delivered using agile methodology.",
  },
  {
    question: "Is real estate software secure?",
    answer:
      "Yes — enterprise real estate software can be highly secure when it includes end-to-end encryption, role-based access control, audit logs, and compliance with GDPR, SOC 2, and ISO 27001.",
  },
  {
    question: "What support do you provide after go-live?",
    answer:
      "Ascentia Labs provides 24/7 support, ongoing maintenance, and continuous improvement after go-live to ensure lasting value.",
  },
];

const RealEstatePage = () => {
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
   * DATA — Real Estate content mapped to Textile section structure
   * =========================================================== */

  const challenges = [
    {
      problem: "Manual lead tracking across emails and spreadsheets.",
      impact: "Missed opportunities and lower conversion rates.",
      solution:
        "Centralized real estate CRM with automated lead routing and scoring.",
    },
    {
      problem: "Property listings updated inconsistently across portals.",
      impact: "Frustrated buyers and lost credibility.",
      solution: "Automated listing sync across all property portals.",
    },
    {
      problem: "Tenant communications and maintenance scattered across tools.",
      impact: "Slow response times and declining tenant satisfaction.",
      solution: "Unified tenant portal with maintenance tracking built in.",
    },
    {
      problem: "Work orders lost with no visibility into response times.",
      impact: "Unpredictable maintenance performance.",
      solution: "Centralized maintenance tracking with real-time status.",
    },
    {
      problem: "Generic CRMs lack real estate-specific features.",
      impact: "Teams work around missing functionality daily.",
      solution: "Purpose-built real estate CRM with listing and lease data.",
    },
    {
      problem: "No real-time visibility into portfolio performance.",
      impact: "Decisions made on gut feel rather than data.",
      solution: "Predictive analytics and real-time reporting dashboards.",
    },
  ];

  const businessChallenges = challenges.map((c, i) => ({
    icon: challengeIcons[i % challengeIcons.length],
    title: c.problem,
    pain: c.impact,
    solution: c.solution,
  }));

  const outcomes = [
    { value: "< 5 min", label: "Average Lead Response Time" },
    { value: "80%", label: "Faster Rent Collection" },
    { value: "95%", label: "Faster Reporting Cycles" },
    { value: "+5–7%", label: "Occupancy Improvement" },
    { value: "30–50%", label: "Shorter Time-to-Lease" },
    { value: "3–5 days", label: "Typical Rent Collection Window" },
  ];

  const features = [
    {
      id: "property-management",
      title: "Property Management — Full Lifecycle, No Gaps",
      sections: [
        {
          heading: "For Property Managers",
          details: [
            "Auto tenant onboarding (10 minutes)",
            "Unit & lease tracking (live dashboard)",
            "Rent collection automation (auto reminders)",
            "Real-time monitoring (live dashboard)",
            "Vacancy alerts (before it hurts occupancy)",
            "Task assignment (auto assign to team)",
            "Progress tracking (see status live)",
            "Accounting integration (auto sync)",
          ],
        },
        {
          heading: "For Owners",
          details: [
            "See portfolio (dashboard)",
            "Track occupancy (live)",
            "Find vacancies (alerts)",
            "Assign tasks (auto)",
          ],
        },
      ],
    },
    {
      id: "lease-management",
      title: "Lease Management — Auto Renewals, No Missed Dates",
      sections: [
        {
          heading: "For Property Managers",
          details: [
            "Real-time lease tracking (live status)",
            "Auto renewal alerts (when due, instant)",
            "Multi-property management (all locations)",
            "Auto rent escalations (no manual work)",
            "Document storage (auto-filed)",
            "E-signature integration (1 click)",
            "Compliance tracking (full traceability)",
          ],
        },
        {
          heading: "For Tenants",
          details: [
            "See lease terms (portal)",
            "Renewal requests (live)",
            "Auto reminders (alerts)",
            "Document access (quick)",
          ],
        },
      ],
    },
    {
      id: "maintenance-tracking",
      title: "Maintenance Tracking — Fast Response, Happy Tenants",
      sections: [
        {
          heading: "For Maintenance Teams",
          details: [
            "Auto work order creation (custom checkpoints)",
            "Real-time monitoring (live)",
            "Trend analysis (see patterns)",
            "Vendor dispatch tracking (alerts)",
            "Predictive maintenance (auto assign)",
            "Cost tracking (standards met)",
            "Audit trail (auto documentation)",
          ],
        },
        {
          heading: "For Tenants",
          details: [
            "Submit requests (app)",
            "Track status (live)",
            "Rate service (reports)",
          ],
        },
      ],
    },
    {
      id: "real-estate-crm",
      title: "Real Estate CRM — Track Leads, No Delays",
      sections: [
        {
          heading: "For Brokers",
          details: [
            "Track lead quality (scoring)",
            "Follow-up times (live tracking)",
            "Agent performance (KPIs)",
            "Listing automation (sync auto)",
            "Transaction tracking (alerts)",
            "Marketing automation (auto plan)",
            "Client communication (live)",
            "MLS integration (auto sync)",
          ],
        },
        {
          heading: "For Agents",
          details: [
            "See leads (dashboard)",
            "Send follow-ups (auto generate)",
            "Track deals (alerts)",
            "Coordinate showings (portal)",
          ],
        },
      ],
    },
    {
      id: "portfolio-analytics",
      title: "Portfolio Analytics — Prevent Surprises",
      sections: [
        {
          heading: "For Investors",
          details: [
            "Occupancy forecasting (auto alerts)",
            "Predictive risk analysis (alerts before issues)",
            "Performance monitoring (live KPIs)",
            "Cost tracking (budget management)",
            "Scenario modeling (always available)",
            "Investment reports (auto create)",
          ],
        },
        {
          heading: "For Owners",
          details: [
            "See portfolio (dashboard)",
            "Track returns (reports)",
            "Risk alerts (instant)",
          ],
        },
      ],
    },
    {
      id: "tenant-management",
      title: "Tenant Management — Auto Communication, Track Satisfaction",
      sections: [
        {
          heading: "For Property Managers",
          details: [
            "Auto onboarding (document-based, right process)",
            "Communication optimization (efficient)",
            "Rent tracking (digital, 5 seconds)",
            "Satisfaction tracking (KPIs live)",
            "Renewal management (terms tracked)",
            "Retention analytics (live)",
          ],
        },
        {
          heading: "For Tenants",
          details: [
            "See lease (app)",
            "Pay rent (5 seconds)",
            "View documents (dashboard)",
          ],
        },
      ],
    },
    {
      id: "investment-analytics",
      title: "Investment Analytics — See Returns, Cut Costs",
      sections: [
        {
          heading: "For Investors",
          details: [
            "Real-time cost accounting (live)",
            "Property costing (per asset)",
            "Profitability analysis (see returns)",
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
            "See returns (reports)",
            "Budget tracking (live)",
          ],
        },
      ],
    },
    {
      id: "mobile-app",
      title: "Mobile App — Manage Portfolio from Phone",
      sections: [
        {
          heading: "For Managers",
          details: [
            "See portfolio (app, live)",
            "Track leases (live)",
            "Approve requests (1 click)",
            "Alerts (push notifications)",
            "Reports (PDF download)",
          ],
        },
        {
          heading: "For Tenants",
          details: [
            "Pay rent (app, 5 seconds)",
            "See lease status (dashboard)",
            "Report issues (instant)",
          ],
        },
      ],
    },
    {
      id: "facility-monitoring",
      title: "Facility Monitoring — Track All Assets Live",
      sections: [
        {
          heading: "For Owners",
          details: [
            "See all properties (dashboard)",
            "Performance (live KPIs)",
            "Issue alerts (instant)",
            "Usage tracking (reports)",
            "Efficiency (KPIs)",
          ],
        },
        {
          heading: "For Facility Teams",
          details: [
            "Monitor assets (live)",
            "Alerts (instant)",
            "Usage data (reports)",
          ],
        },
      ],
    },
  ];

  const useCases = [
    {
      problem:
        "A property management company with 5,000+ units faced fragmented tools.",
      solution:
        "Unified platform with tenant portal and automated rent collection.",
      outcome: "40% reduction in admin overhead, 15% better retention.",
    },
    {
      problem:
        "A commercial real estate investor with $2B in assets lacked visibility.",
      solution:
        "Custom dashboard with predictive analytics and lease management.",
      outcome: "30% faster reporting, 12% increase in portfolio returns.",
    },
    {
      problem: "A brokerage with 200+ agents needed better lead management.",
      solution: "AI-powered CRM with automated lead scoring and follow-up.",
      outcome:
        "45% increase in lead conversion, agents closing 30% more deals.",
    },
    {
      problem:
        "A residential developer launching 500 units needed a sales platform.",
      solution: "Platform with listings, virtual tours and buyer portal.",
      outcome: "50% faster sales cycle, improved buyer satisfaction.",
    },
  ].map((u, i) => ({
    ...u,
    icon: useCaseIcons[i % useCaseIcons.length],
  }));

  const processSteps = [
    {
      number: "1",
      title: "Learn Your Portfolio",
      description:
        "We conduct comprehensive analysis of your property operations, identifying key challenges, operational requirements, and opportunities for digital transformation.",
    },
    {
      number: "2",
      title: "Custom Design",
      description:
        "We design a tailored real estate management platform that aligns with your business model, incorporating CRM integration, predictive analytics, and automated workflows.",
    },
    {
      number: "3",
      title: "Build + Test",
      description:
        "Our experts develop and deploy the solution with seamless integration to existing systems, ERP platforms, and property portals, with minimal disruption.",
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
      description: "We Know Real Estate",
    },
    {
      id: 2,
      title: "Scalable Solutions",
      description: "Grows With You — From 100 to 100,000 Units",
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
        "Purpose-built systems that match your exact property workflow.",
      href: ROUTES.service.customCrm,
    },
    {
      title: "AI/ML Development",
      description:
        "Predictive pricing, lead scoring and portfolio forecasting.",
      href: ROUTES.service.aiMl,
    },
    {
      title: "Digital Transformation",
      description:
        "A clear roadmap from paper-based operations to a connected portfolio.",
      href: ROUTES.service.digitalTransformation,
    },
    {
      title: "Application Modernization",
      description: "Upgrade legacy systems without disrupting operations.",
      href: ROUTES.service.applicationModernisation,
    },
    {
      title: "Mobile App Development",
      description: "Manage properties, leasing and approvals from anywhere.",
      href: ROUTES.service.mobileApplication,
    },
  ];

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
      icon: Package,
      title: "Textile Manufacturing Software",
      line: "ERP solutions for textile manufacturing & supply chains.",
      link: ROUTES.industry.textiles,
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

  const relatedResources = [
    {
      topic: "Blogs",
      title: "AI in Real Estate — 5 Use Cases Transforming the Industry",
      href: "#",
    },
    {
      topic: "Whitepapers",
      title: "The PropTech Playbook — Digital Transformation for Real Estate",
      href: "#",
    },
    {
      topic: "Guides",
      title: "Choosing the Right Real Estate CRM for Your Business",
      href: "#",
    },
  ];

  const faqs = REAL_ESTATE_FAQ_ITEMS.map((f, i) => ({
    id: i,
    title: f.question,
    content: f.answer,
  }));

  const pageUrl = absoluteUrl(ROUTES.industry.realEstate);
  const orgLogo = `${SITE_URL}/ascentialabslogopng.png`;

  const jsonLdGraph = useMemo(() => {
    const faqSchema = {
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: REAL_ESTATE_FAQ_ITEMS.map((f) => ({
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
        "Ascentia Labs builds custom software, AI/ML solutions, and digital platforms for industry-specific operations including real estate and PropTech.",
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
      name: "Custom Real Estate Software Development",
      serviceType: "Real Estate Software Development",
      description: seoData.realEstate.description,
      provider: { "@id": `${SITE_URL}/#organization` },
      url: pageUrl,
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Real Estate Software Features",
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
          name: "Real Estate App Development",
          item: pageUrl,
        },
      ],
    };

    const webPageSchema = {
      "@type": "WebPage",
      "@id": pageUrl,
      url: pageUrl,
      name: seoData.realEstate.title,
      description: seoData.realEstate.description,
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
    const scriptId = "real-estate-jsonld";
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
      <SEO {...seoData.realEstate} />
      <style dangerouslySetInnerHTML={{ __html: scrollbarStyles }} />

      {/* Visually hidden breadcrumb for crawlers / assistive tech — no visual change */}
      <nav aria-label="Breadcrumb" className="sr-only">
        <ol>
          <li>
            <Link to={ROUTES.home}>Home</Link>
          </li>
          <li>Industries</li>
          <li>
            <Link to={ROUTES.industry.realEstate}>
              Real Estate App Development
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
                Real Estate Software Solutions — Custom Property Management &
                CRM Development
              </h1>

              <p className="text-lg leading-relaxed text-gray-300">
                Replace manual processes with intelligent real estate software
                that simplifies property management, enhances tenant
                experiences, and drives smarter business decisions.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row">
                <button
                  onClick={openConsultation}
                  className="rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 px-6 py-3 text-black shadow-lg transition-all duration-300 hover:scale-105 hover:from-amber-500 hover:to-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400"
                >
                  Get a Free Consultation →
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
                  "Property Management",
                  "Lease Management",
                  "Maintenance Tracking",
                  "Real Estate CRM",
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
                    <Building2 className="h-5 w-5 text-amber-400" />
                    <p className="text-sm font-normal text-white md:text-base">
                      Complete Real Estate Suite
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
                        <Building className="h-5 w-5 text-amber-400" />
                      </div>
                      <div>
                        <p className="mb-1.5 text-sm font-normal text-white">
                          Property Management
                        </p>
                        <p className="text-sm font-light leading-relaxed text-gray-300">
                          Auto-manage units and eliminate manual work.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-5 transition-colors duration-300 hover:bg-white/[0.04]">
                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-blue-400/25 bg-blue-400/15">
                        <FileText className="h-5 w-5 text-blue-400" />
                      </div>
                      <div>
                        <p className="mb-1.5 text-sm font-normal text-white">
                          Lease Management
                        </p>
                        <p className="text-sm font-light leading-relaxed text-gray-300">
                          Auto-renew leases, eliminate missed dates.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="border-white/10 p-5 transition-colors duration-300 hover:bg-white/[0.04] sm:border-t">
                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-emerald-400/25 bg-emerald-400/15">
                        <Wrench className="h-5 w-5 text-green-400" />
                      </div>
                      <div>
                        <p className="mb-1.5 text-sm font-normal text-white">
                          Maintenance Tracking
                        </p>
                        <p className="text-sm font-light leading-relaxed text-gray-300">
                          Auto-dispatch work orders, fast response.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="border-white/10 p-5 transition-colors duration-300 hover:bg-white/[0.04] sm:border-t">
                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-violet-400/25 bg-violet-400/15">
                        <MapPinned className="h-5 w-5 text-purple-400" />
                      </div>
                      <div>
                        <p className="mb-1.5 text-sm font-normal text-white">
                          Real Estate CRM
                        </p>
                        <p className="text-sm font-light leading-relaxed text-gray-300">
                          Track leads, listings, and deals live.
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
              Business Challenges We Solve
            </h2>
            <p className="text-base leading-relaxed text-white/95">
              Real estate operations face a complex web of challenges. Here's
              how we address each one.
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
                      <span className="text-gray-400">Impact: </span>
                      {c.pain}
                    </p>
                    <p className="text-sm leading-relaxed text-amber-400 md:text-[15px]">
                      <span className="font-medium text-amber-300">Solution: </span>
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
          title="Business Outcomes with Real Estate Software"
          subtitle="Measurable KPIs teams track after going live—speed, occupancy, and cash flow."
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
                <div className="mb-2 bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-3xl font-semibold tracking-tight text-transparent md:text-4xl">
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

      {/* ================= AI / FEATURES EXPLORER ================= */}
      <SectionShell labelledBy="ai-solutions-heading">
        <SectionIntro
          id="ai-solutions-heading"
          title="Explore Top Features of Our Real Estate Software Solutions"
          subtitle="Comprehensive capabilities designed to optimize your property operations."
        />

        <div className="overflow-hidden rounded-2xl border border-white/10 bg-gray-950/80 shadow-xl">
          <div className="grid min-h-[420px] grid-cols-1 lg:grid-cols-5">
            <nav
              className="border-b border-white/10 bg-black/40 p-3 md:p-4 lg:col-span-2 lg:border-b-0 lg:border-r"
              aria-label="Real estate feature categories"
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
          title="Industry Use Cases"
          light
        />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
          {useCases.map((u, i) => {
            const Icon = u.icon;
            return (
              <article
                key={i}
                className="group rounded-xl border border-white/10 bg-black/30 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-amber-400/40 hover:shadow-lg hover:shadow-black/20 md:p-6"
              >
                <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-r from-amber-400 to-orange-500 text-black">
                  <Icon size={18} />
                </div>
                <div className="space-y-3 text-sm leading-relaxed">
                  <p className="text-gray-300">
                    <span className="text-gray-400">Problem: </span>
                    {u.problem}
                  </p>
                  <p>
                    <span className="text-white/90">Solution: </span>
                    <span className="text-amber-400">{u.solution}</span>
                  </p>
                  <p className="text-gray-300">
                    <span className="text-gray-400">Outcome: </span>
                    {u.outcome}
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
          title="Our Real Estate Development Implementation Process"
          subtitle="How We Build Your Real Estate Software — 8 Weeks Total"
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
                  Revolutionize Your Real Estate Operations with Our Expertise
                </h2>
                <p className="text-xl text-gray-100">
                  Why Real Estate Companies Choose Us
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
                  Ready to Transform Your Real Estate Operations?
                </h3>
                <p className="mb-7 leading-relaxed text-blue-100">
                  Join industry leaders who trust our real estate software
                  solutions to optimize their portfolio operations and boost
                  efficiency.
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

export default RealEstatePage;
