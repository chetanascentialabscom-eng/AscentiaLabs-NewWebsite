import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ChevronDown,
  ChevronUp,
  Shield,
  BarChart3,
  MapPinned,
  Building2,
  Home,
  Cpu,
  Landmark,
  Brain,
  TrendingUp,
  Sparkles,
  Network,
  Cloud,
  Server,
  Database,
  KeyRound,
  ClipboardCheck,
  ArrowRight,
  Users,
  FileText,
  DollarSign,
  Layers,
  FileCheck2,
  RefreshCw,
} from "lucide-react";
import { useConsultation } from "../../../contexts/ConsultationContext";
import SEO from "../../../components/SEO";
import { seoData } from "../../../utils/seoData";
import { ROUTES } from "../../../utils/routes";

/* ------------------------------------------------------------------ */
/*  Compact design system — dark navy / amber                         */
/* ------------------------------------------------------------------ */

const Shell = ({ children, labelledBy, alt = false, className = "" }) => (
  <section
    className={`relative overflow-hidden py-12 md:py-14 lg:py-16 ${
      alt
        ? "bg-gradient-to-br from-gray-900 via-blue-900 to-black"
        : "bg-black"
    } ${className}`}
    aria-labelledby={labelledBy}
  >
    {alt && (
      <>
        <div className="pointer-events-none absolute top-0 left-0 right-0 z-0 h-20 bg-gradient-to-b from-black to-transparent" />
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-0 h-16 bg-gradient-to-t from-black/80 to-transparent" />
      </>
    )}
    <div className="container relative z-10 mx-auto max-w-6xl px-4">
      {children}
    </div>
  </section>
);

const Heading = ({ id, eyebrow, title, subtitle, align = "center" }) => (
  <div
    className={`mb-8 md:mb-10 ${
      align === "left" ? "max-w-xl text-left" : "mx-auto max-w-5xl text-center"
    }`}
  >
    {eyebrow && (
      <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-400">
        {eyebrow}
      </p>
    )}
    <h2
      id={id}
      className="text-3xl leading-tight text-white md:text-4xl"
    >
      {title}
    </h2>
    {subtitle && (
      <p className="mt-3 text-base leading-relaxed text-gray-300 md:text-lg">
        {subtitle}
      </p>
    )}
  </div>
);

const UAERealEstatePage = () => {
  const [openFAQ, setOpenFAQ] = useState(null);
  const [activeStakeholder, setActiveStakeholder] = useState(0);
  const { openConsultation } = useConsultation();

  /* ---------------------------- DATA (existing content) ---------------------------- */

  const marketInsights = [
    { value: "AED 917B", label: "Dubai Full Year 2025 Transactions" },
    { value: "AED 252B", label: "Dubai Q1 2026 Transactions (+31% YoY)" },
    { value: "AED 142B", label: "Abu Dhabi 2025 Transactions (+47% YoY)" },
    { value: "AED 53B+", label: "PropTech Economic Impact (UAE)" },
  ];

  const services = [
    {
      icon: Building2,
      title: "Custom Real Estate Software Development",
      description:
        "Platforms for developers, brokers, property managers, and investors.",
    },
    {
      icon: Users,
      title: "Real Estate CRM Development",
      description:
        "Capture leads from portals, WhatsApp, and walk-ins in one pipeline.",
    },
    {
      icon: Home,
      title: "Property Management Software Development",
      description:
        "Automated lease management, rent invoicing, and tenant portals.",
    },
    {
      icon: BarChart3,
      title: "Real Estate ERP Development",
      description:
        "Integrated financials, IFRS 15, VAT compliance, and PDC management.",
    },
    {
      icon: Cpu,
      title: "Real Estate Mobile App Development",
      description:
        "iOS and Android apps for tenants, agents, managers, and investors.",
    },
    {
      icon: Network,
      title: "Marketplace & PropTech Platforms",
      description:
        "Connect buyers, sellers, landlords, and tenants with AI discovery.",
    },
    {
      icon: Sparkles,
      title: "AI Real Estate Software Development",
      description:
        "Lead scoring, valuations, demand forecasting, and document automation.",
    },
    {
      icon: MapPinned,
      title: "Portals & Data Analytics",
      description:
        "Listing portals, UAE platform integrations, and executive dashboards.",
    },
  ];

  const stakeholders = [
    {
      tab: "UAE Property Developers",
      title: "Property Developers",
      description:
        "Managing multiple off-plan projects, unit inventory, and investor pipelines.",
      image: "/pics/uaedeveloper.png",
      bullets: [
        "Project inventory from off-plan to handover",
        "Off-plan sales: reservations, SPAs, payment plans",
        "Automated broker commission tracking",
        "Investor portals with real-time unit updates",
      ],
    },
    {
      tab: "Property Managers",
      title: "Property Management Companies",
      description:
        "Overseeing residential towers, commercial spaces, and mixed-use communities.",
      image: "/pics/uaepropmanagement.png",
      bullets: [
        "Lease management, rent invoicing, renewals, deposits",
        "Maintenance and work order SLAs",
        "Tenant self-service portals",
        "Ejari, Tawtheeq, and FTA VAT compliance",
      ],
    },
    {
      tab: "Brokerages",
      title: "Real Estate Brokerages",
      description:
        "Handling high-volume leads, agent performance, and deal pipelines.",
      image: "/pics/uaebrokerage.png",
      bullets: [
        "Unified leads from portals, WhatsApp, and walk-ins",
        "Agent KPIs, conversions, and commissions",
        "Deal pipeline: viewings, offers, SPA stages",
        "Duplicate lead detection",
      ],
    },
    {
      tab: "Investors",
      title: "Real Estate Investment Firms",
      description:
        "Managing multi-billion dirham portfolios with real-time reporting.",
      image: "/pics/uaeinvestor.png",
      bullets: [
        "Portfolio profitability and investment analytics",
        "Executive finance dashboards for cash flow",
        "Live unit inventory across towers and projects",
        "IFRS 15 revenue recognition for developers",
      ],
    },
    {
      tab: "PropTech",
      title: "PropTech Companies",
      description:
        "Building technology-driven real estate platforms for the UAE market.",
      image: "/pics/uaeproptech1.png",
      bullets: [
        "AI-native real estate marketplace platforms",
        "API integration with portals and payment gateways",
        "Government system connectivity",
        "Cloud-native scalable architecture",
      ],
    },
  ];

  const techStack = [
    {
      icon: Brain,
      title: "AI & ML",
      body: "Lead scoring, property valuation, demand forecasting, and document automation.",
    },
    {
      icon: Cloud,
      title: "Cloud",
      body: "Scalable, secure platforms accessible from anywhere across the UAE.",
    },
    {
      icon: Network,
      title: "API First",
      body: "Seamless integration with CRMs, ERPs, portals, and government systems.",
    },
    {
      icon: Cpu,
      title: "Mobile & Web",
      body: "iOS/Android apps and portals for tenants, agents, managers, and investors.",
    },
    {
      icon: Database,
      title: "Data Engineering",
      body: "Real-time analytics, predictive modeling, and executive dashboards.",
    },
  ];

  const integrations = [
    { icon: Server, title: "CRM Systems" },
    { icon: Building2, title: "ERP Systems" },
    { icon: MapPinned, title: "Property Portals" },
    { icon: DollarSign, title: "Payment Systems" },
    { icon: Shield, title: "Government Systems" },
    { icon: Database, title: "Accounting" },
  ];

  const security = [
    {
      icon: ClipboardCheck,
      title: "Ejari Integration",
      body: "Automated registration and renewal with Dubai's rental regulation system.",
    },
    {
      icon: Landmark,
      title: "Tawtheeq Integration",
      body: "Compliance with Abu Dhabi's property registration system.",
    },
    {
      icon: FileText,
      title: "VAT-Compliant Invoicing",
      body: "Automated FTA-compliant tax calculations and reporting.",
    },
    {
      icon: DollarSign,
      title: "Post-Dated Cheque Management",
      body: "Track PDCs through full lifecycle with cash flow forecasting.",
    },
    {
      icon: KeyRound,
      title: "UAE Pass Integration",
      body: "Secure digital identity verification for transactions.",
    },
    {
      icon: Shield,
      title: "IFRS 15 Revenue Recognition",
      body: "Compliant revenue recognition for developers across the project lifecycle.",
    },
  ];

  const advantages = [
    {
      id: 1,
      title: "Custom Development",
      description:
        "We build exactly what your real estate business needs—not a one-size-fits-all product.",
    },
    {
      id: 2,
      title: "AI Capabilities",
      description:
        "We integrate AI where it creates real value—lead scoring, valuation, and forecasting.",
    },
    {
      id: 3,
      title: "UAE Industry Focus",
      description:
        "We understand UAE real estate—from off-plan sales to tenant management, Ejari to IFRS 15.",
    },
    {
      id: 4,
      title: "Scalable Architecture",
      description: "Our solutions grow with you—from 100 units to 10,000+.",
    },
    {
      id: 5,
      title: "Integration Expertise",
      description:
        "We connect property systems to CRMs, ERPs, portals, and government platforms.",
    },
    {
      id: 6,
      title: "Dedicated Development",
      description: "You get a dedicated development team focused on your success.",
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Discovery",
      description:
        "Understand your business model, workflows, and UAE technology requirements.",
    },
    {
      number: "02",
      title: "Architecture & Design",
      description:
        "Design scalable, secure, compliant architecture and intuitive UI/UX.",
    },
    {
      number: "03",
      title: "Build + Integrate",
      description:
        "Agile development with AI capabilities and CRM/ERP/government integrations.",
    },
    {
      number: "04",
      title: "Deploy + Support",
      description:
        "Cloud deployment with training, documentation, and ongoing maintenance.",
    },
  ];

  const caseStudies = [
    {
      metric: "Live",
      title: "Radiant Real Estate — Unit Inventory",
      description:
        "Abu Dhabi developer of Radiant Square and Marina Towers aligned sales, finance, and management on live unit availability across towers, floors, and units.",
      icon: Layers,
    },
    {
      metric: "PDC",
      title: "Controlled Cheque Lifecycle",
      description:
        "Replaced manual cheque registers with auditable PDC tracking reflected in cash flow forecasting.",
      icon: FileCheck2,
    },
    {
      metric: "IFRS 15",
      title: "Developer Revenue Recognition",
      description:
        "Revenue on unit sales recognized over the project lifecycle with deferred revenue schedules auditors expect.",
      icon: RefreshCw,
    },
  ];

  const faqs = [
    {
      question: "What is a real estate software development company in UAE?",
      answer:
        "A real estate software development company in UAE builds custom digital platforms for property developers, management firms, brokerages, and investors. These platforms range from CRM and ERP integration to AI-powered property management, tenant portals, and investor dashboards—all tailored to the UAE regulatory environment.",
    },
    {
      question: "How much does custom real estate software cost in UAE?",
      answer:
        "Cost varies based on features, complexity, and integration requirements. A basic property management system starts at a lower range, while full ERP integration with AI capabilities requires a more significant investment. Contact us for a personalized quote based on your specific requirements.",
    },
    {
      question: "What features should UAE real estate software include?",
      answer:
        "Essential features include property inventory management, lease and tenancy management, CRM and lead management, VAT-compliant accounting, maintenance tracking, tenant self-service portals, and UAE-specific compliance (Ejari, Tawtheeq, PDC tracking, IFRS 15).",
    },
    {
      question: "Can real estate software integrate with existing ERP and CRM systems?",
      answer:
        "Yes. Modern real estate platforms are built with API-first architecture and can integrate with existing CRMs, ERPs, payment gateways, property portals, and government systems. Ascentia Labs specializes in connecting fragmented systems into a unified platform.",
    },
    {
      question: "Can AI be used in UAE real estate software?",
      answer:
        "Absolutely. AI can power lead scoring, property valuation, demand forecasting, automated document processing, and tenant query management. The UAE is a global leader in AI adoption, making it a natural fit for real estate technology.",
    },
    {
      question: "What software do UAE property developers need?",
      answer:
        "Property developers need project inventory management, off-plan sales tracking, payment plan management, commission calculations, investor portals, financial dashboards, and IFRS 15 revenue recognition.",
    },
    {
      question: "Can Ascentia Labs build mobile applications for real estate?",
      answer:
        "Yes. Ascentia Labs develops custom mobile applications for property managers, tenants, agents, and investors across iOS and Android platforms.",
    },
    {
      question: "How long does custom real estate software development take?",
      answer:
        "Timelines vary by project scope. A basic platform can take a few months, while complex ERP-integrated solutions with AI capabilities may require longer. Ascentia Labs follows agile development to deliver working software quickly.",
    },
    {
      question: "Do you integrate with Ejari, Tawtheeq, and UAE Pass?",
      answer:
        "Yes. We build UAE-specific integrations for Ejari (Dubai), Tawtheeq (Abu Dhabi), UAE Pass for digital identity, and other government platforms required for property compliance.",
    },
    {
      question: "What is PropTech software development?",
      answer:
        "PropTech (property technology) software development involves building digital platforms that transform real estate operations. This includes property marketplaces, investment platforms, AI-driven valuation tools, blockchain-based ownership models, and smart building management systems.",
    },
  ];

  const relatedIndustries = [
    {
      title: "Real Estate",
      link: ROUTES.industry.realEstate,
    },
    {
      title: "Business CRM",
      link: ROUTES.industry.businessCrm,
    },
    {
      title: "Enterprise ERP",
      link: ROUTES.industry.erp,
    },
    {
      title: "Interior & Architecture",
      link: ROUTES.industry.interiorArchitecture,
    },
    {
      title: "Field Service CRM",
      link: ROUTES.industry.fieldServiceCrm,
    },
    {
      title: "Manufacturing",
      link: ROUTES.industry.manufacturing,
    },
    {
      title: "Logistics",
      link: ROUTES.industry.logistics,
    },
    {
      title: "Healthcare",
      link: ROUTES.industry.healthcare,
    },
  ];

  const active = stakeholders[activeStakeholder];
  const ActiveStakeholderIcon = [
    Building2,
    Home,
    Users,
    DollarSign,
    Cpu,
  ][activeStakeholder];

  const toggleFAQ = (index) => setOpenFAQ(openFAQ === index ? null : index);

  return (
    <div className="min-h-screen bg-black">
      <SEO {...seoData.uaeRealEstate} />

      {/* ================= HERO + MARKET (continuous blue) ================= */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-black pt-16 md:pt-20">
        <div
          className="pointer-events-none absolute inset-0 opacity-10"
          aria-hidden="true"
        >
          <div className="absolute top-16 right-16 h-28 w-28 rounded-full bg-blue-500 blur-3xl" />
          <div className="absolute bottom-40 left-16 h-20 w-20 rounded-full bg-blue-400 blur-2xl" />
        </div>

        {/* Hero */}
        <div className="relative container mx-auto max-w-6xl px-4 pb-12 md:pb-16">
          <div className="grid items-center gap-8 py-4 sm:gap-10 lg:grid-cols-2 lg:items-start lg:gap-x-16 lg:gap-y-4 lg:py-10 xl:gap-x-20 2xl:gap-x-24 2xl:gap-y-5 2xl:py-22">
            {/* 1. Text — mobile first */}
            <div className="order-1 max-w-xl space-y-5 text-white lg:self-end">
              <p className="inline-flex rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-amber-400">
                UAE PropTech
              </p>
              <h1 className="text-[25px] leading-tight md:text-[35px]">
                Real Estate Software Development in UAE — PropTech
              </h1>
              <p className="text-lg leading-relaxed text-gray-300">
                Custom PropTech for UAE brokers and property managers—automating leads, tenants, and portfolios across Dubai .
              </p>
            </div>

            {/* 2. Image — after text on mobile; right column on desktop */}
            <div className="relative order-2 mt-2 w-full sm:mt-4 lg:order-2 lg:row-span-2 lg:mt-0 lg:self-center">
              <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-black/30 shadow-2xl backdrop-blur-md">
                <img
                  src="/pics/uae-hero.png"
                  alt="UAE real estate PropTech software"
                  className="mx-auto block h-auto w-full object-contain object-center max-h-[260px] sm:max-h-[320px] md:max-h-[380px] lg:max-h-[420px] xl:max-h-[460px] 2xl:max-h-[500px]"
                  loading="eager"
                  decoding="async"
                />
              </div>
            </div>

            {/* 3. CTAs — after image on mobile; under text on desktop */}
            <div className="order-3 flex flex-col gap-3 sm:flex-row lg:order-3 lg:self-start">
              <button
                type="button"
                onClick={openConsultation}
                className="rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 px-6 py-3 text-black shadow-lg transition-all duration-300 hover:scale-105 hover:from-amber-500 hover:to-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400"
              >
                Schedule a Consultation →
              </button>
              <a
                href="#capabilities"
                className="rounded-xl border border-white/30 px-6 py-3 text-center text-white transition-all duration-300 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Explore Capabilities
              </a>
            </div>
          </div>
        </div>

        {/* Market Context — same blue band */}
        <div
          className="relative container mx-auto max-w-6xl px-4 pb-12 md:pb-14 lg:pb-16"
          aria-labelledby="market-heading"
        >
          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
            <Heading
              id="market-heading"
              align="left"
              eyebrow="Market Context"
              title="Why UAE Real Estate Businesses Need Custom Software"
              subtitle="Replace WhatsApp and spreadsheets with custom PropTech—unifying CRM, property management, inventory, and finance for UAE developers and brokers."
            />
            <ul className="grid list-none grid-cols-1 gap-3 sm:grid-cols-2">
              {marketInsights.map((item) => (
                <li
                  key={item.label}
                  className="rounded-xl border border-white/10 bg-black/30 p-4"
                >
                  <TrendingUp className="mb-3 h-4 w-4 text-amber-400" />
                  <p className="text-lg text-white">{item.value}</p>
                  <p className="mt-1 text-xs leading-relaxed text-gray-200">
                    {item.label}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-black md:h-20" />
      </section>

      {/* ================= CAPABILITIES ================= */}
      <Shell labelledBy="capabilities">
        <Heading
          id="capabilities"
          eyebrow="Services"
          title="Comprehensive Capabilities"
          subtitle="Custom real estate software for UAE developers, brokers, property managers, and PropTech teams."
        />
        <ul className="grid list-none grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <li
                key={service.title}
                className="rounded-xl border border-white/10 bg-gray-950 p-5"
              >
                <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg bg-amber-400/15">
                  <Icon className="h-4 w-4 text-amber-400" />
                </div>
                <h3 className="mb-2 text-sm font-semibold leading-snug text-white md:text-[15px]">
                  {service.title}
                </h3>
                <p className="text-xs leading-relaxed text-gray-200 md:text-[13px]">
                  {service.description}
                </p>
              </li>
            );
          })}
        </ul>
      </Shell>

      {/* ================= STAKEHOLDERS ================= */}
      <Shell labelledBy="stakeholders-heading" alt>
        <Heading
          id="stakeholders-heading"
          eyebrow="Use Cases"
          title="Built for Every Stakeholder"
          subtitle="Software shaped around how UAE developers, managers, brokerages, investors, and PropTech teams actually operate."
        />

        {/* Mobile: full-width selector so every option stays visible */}
        <div className="mb-8 md:hidden">
          <label htmlFor="stakeholder-select" className="sr-only">
            Select stakeholder type
          </label>
          <div className="relative">
            <select
              id="stakeholder-select"
              value={activeStakeholder}
              onChange={(e) => setActiveStakeholder(Number(e.target.value))}
              aria-controls="stakeholder-panel"
              className="w-full appearance-none rounded-xl border border-amber-400/40 bg-black/40 px-4 py-3 pr-11 text-sm text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400"
            >
              {stakeholders.map((item, index) => (
                <option key={item.tab} value={index} className="bg-gray-950 text-white">
                  {item.tab}
                </option>
              ))}
            </select>
            <ChevronDown
              className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-amber-400"
              aria-hidden="true"
            />
          </div>
        </div>

        {/* Desktop: centered pill tabs */}
        <div
          role="tablist"
          aria-label="Stakeholder types"
          className="mb-8 hidden flex-wrap justify-center gap-2 md:flex"
        >
          {stakeholders.map((item, index) => {
            const selected = activeStakeholder === index;
            return (
              <button
                key={item.tab}
                type="button"
                role="tab"
                aria-selected={selected}
                id={`stakeholder-tab-${index}`}
                aria-controls="stakeholder-panel"
                onClick={() => setActiveStakeholder(index)}
                className={`shrink-0 rounded-full px-4 py-2 text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400 2xl:px-5 2xl:py-2.5 2xl:text-base ${
                  selected
                    ? "bg-amber-400 text-black"
                    : "border border-white/15 bg-black/20 text-gray-200 hover:border-white/30"
                }`}
              >
                {item.tab}
              </button>
            );
          })}
        </div>
      
        <div
          id="stakeholder-panel"
          role="tabpanel"
          aria-labelledby={`stakeholder-tab-${activeStakeholder}`}
          className="grid items-stretch gap-8 rounded-2xl border border-white/10 bg-black/25 p-6 md:p-8 lg:grid-cols-2 2xl:gap-10 2xl:p-10"
        >
          <div>
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-amber-400/15 2xl:h-11 2xl:w-11">
              <ActiveStakeholderIcon className="h-5 w-5 text-amber-400 2xl:h-6 2xl:w-6" />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-white 2xl:text-2xl">
              {active.title}
            </h3>
            <p className="mb-5 text-sm leading-relaxed text-gray-300 2xl:text-base">
              {active.description}
            </p>
            <ul className="space-y-2.5 2xl:space-y-3">
              {active.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="flex items-start gap-2 text-sm text-gray-200 2xl:text-base"
                >
                  <span
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400"
                    aria-hidden="true"
                  />
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden min-h-[220px] overflow-hidden rounded-xl border border-white/10 lg:block 2xl:min-h-[260px]">
            <img
              key={active.image}
              src={active.image}
              alt={`${active.title} — UAE real estate software`}
              className="h-full min-h-[220px] w-full object-cover 2xl:min-h-[260px]"
            />
          </div>
        </div>
      </Shell>

      {/* ================= TECHNOLOGY ================= */}
      <Shell labelledBy="tech-heading">
        <Heading
          id="tech-heading"
          eyebrow="Capabilities"
          title="Next-Gen Technology Stack"
          subtitle="AI, cloud, APIs, and data engineering behind UAE-ready property platforms."
        />
        <ul className="grid list-none grid-cols-2 gap-3 md:grid-cols-5">
          {techStack.map((item) => {
            const Icon = item.icon;
            return (
              <li
                key={item.title}
                className="rounded-xl border border-white/10 bg-gray-950 p-4 text-center md:p-5"
              >
                <Icon className="mx-auto mb-3 h-5 w-5 text-amber-400 md:h-6 md:w-6" />
                <h3 className="text-sm font-medium text-white md:text-[15px] 2xl:text-base">
                  {item.title}
                </h3>
                <p className="mt-2 hidden text-xs leading-relaxed text-gray-200 md:block md:text-sm">
                  {item.body}
                </p>
              </li>
            );
          })}
        </ul>
        <p className="mb-3 mt-8 text-center text-xs font-semibold uppercase tracking-[0.14em] text-gray-400 md:text-sm">
          Integrates with
        </p>
        <ul className="flex list-none flex-wrap justify-center gap-2">
          {integrations.map((item) => (
            <li
              key={item.title}
              className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-gray-200 md:px-3.5 md:py-2 md:text-[15px]"
            >
              {item.title}
            </li>
          ))}
        </ul>
      </Shell>

      {/* ================= COMPLIANCE ================= */}
      <Shell labelledBy="compliance-heading" alt>
        <Heading
          id="compliance-heading"
          eyebrow="Compliance"
          title="Built for UAE Standards"
          subtitle="Integrations and workflows already supported for UAE property operations."
        />
        <ul className="grid list-none grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {security.map((item) => {
            const Icon = item.icon;
            return (
              <li
                key={item.title}
                className="rounded-xl border border-white/10 bg-black/30 p-5 md:p-6"
              >
                <Icon className="mb-3 h-4 w-4 text-amber-400 md:h-5 md:w-5" />
                <h3 className="mb-1 text-sm font-semibold text-white md:text-[15px] 2xl:text-base">
                  {item.title}
                </h3>
                <p className="text-xs leading-relaxed text-gray-200 md:text-sm">
                  {item.body}
                </p>
              </li>
            );
          })}
        </ul>
      </Shell>

      {/* ================= WHY CHOOSE US ================= */}
      <Shell labelledBy="why-heading">
        <Heading
          id="why-heading"
          eyebrow="Why Ascentia Labs"
          title="The Luxe Advantage"
          subtitle="A dedicated team that builds custom UAE real estate software—not a generic product."
        />
        <ul className="grid list-none grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {advantages.map((item) => (
            <li key={item.id}>
              <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-amber-400 md:text-xs">
                {String(item.id).padStart(2, "0")}
              </p>
              <h3 className="mb-2 text-base font-semibold text-white md:text-lg 2xl:text-xl">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-200 md:text-[15px] 2xl:text-base">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </Shell>

      {/* ================= DELIVERY ================= */}
      <Shell labelledBy="process-heading" alt>
        <Heading
          id="process-heading"
          eyebrow="Delivery"
          title="Proven Delivery Methodology"
          subtitle="Four clear phases from discovery to ongoing support."
        />

        <ol className="relative space-y-8 border-l border-white/15 pl-6 ml-2 md:hidden">
          {processSteps.map((step) => (
            <li key={step.number}>
              <span className="absolute -left-[13px] flex h-6 w-6 items-center justify-center rounded-full bg-amber-400 text-[10px] font-bold text-black">
                {step.number.slice(-1)}
              </span>
              <h3 className="text-sm font-semibold text-white">{step.title}</h3>
              <p className="mt-1 text-xs leading-relaxed text-gray-400">
                {/* {step.description} */}
              </p>
            </li>
          ))}
        </ol>

        <div className="relative hidden md:block">
          <div
            className="absolute left-[8%] right-[8%] top-5 h-px bg-white/15"
            aria-hidden="true"
          />
          <ol className="relative grid list-none grid-cols-4 gap-4">
            {processSteps.map((step, index) => (
              <li key={step.number} className="px-2 text-center">
                <div
                  className={`relative z-10 mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full text-xs font-bold md:h-11 md:w-11 md:text-sm 2xl:h-12 2xl:w-12 ${
                    index === 0
                      ? "bg-amber-400 text-black"
                      : "border border-white/20 bg-black text-white"
                  }`}
                >
                  {step.number}
                </div>
                <h3 className="mb-1.5 text-sm font-semibold text-white md:text-[15px] 2xl:text-base">
                  {step.title}
                </h3>
                <p className="text-xs leading-relaxed text-gray-400 md:text-sm">
                  {/* {step.description} */}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </Shell>

      {/* ================= PROVEN IMPACT ================= */}
      <Shell labelledBy="impact-heading">
        <Heading
          id="impact-heading"
          eyebrow="Results"
          title="Proven Impact"
          subtitle="Delivery outcomes from UAE real estate implementations."
        />
        <ul className="grid list-none grid-cols-1 gap-4 md:grid-cols-3">
          {caseStudies.map((item, index) => {
            const Icon = item.icon;
            const gradientId = `uae-case-bg-${index}`;
            return (
              <li
                key={item.title}
                className="overflow-hidden rounded-xl border border-white/10 bg-gray-950"
              >
                <div className="relative flex h-24 items-center justify-center overflow-hidden md:h-28">
                  <svg
                    className="absolute inset-0 h-full w-full"
                    viewBox="0 0 400 160"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    preserveAspectRatio="xMidYMid slice"
                  >
                    <defs>
                      <linearGradient
                        id={gradientId}
                        x1="0"
                        y1="0"
                        x2="400"
                        y2="160"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#172554" />
                        <stop offset="0.55" stopColor="#111827" />
                        <stop offset="1" stopColor="#000000" />
                      </linearGradient>
                    </defs>
                    <rect width="400" height="160" fill={`url(#${gradientId})`} />
                    <circle cx="320" cy="20" r="70" fill="#F59E0B" fillOpacity="0.08" />
                    <circle cx="60" cy="140" r="50" fill="#3B82F6" fillOpacity="0.1" />
                    <path
                      d="M0 110 C80 90 140 130 220 105 C300 80 340 95 400 85 L400 160 L0 160 Z"
                      fill="#F59E0B"
                      fillOpacity="0.06"
                    />
                    <path
                      d="M40 40 H120 M40 60 H100 M40 80 H110"
                      stroke="#F59E0B"
                      strokeOpacity="0.25"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-xl border border-amber-400/30 bg-amber-400/10 backdrop-blur-sm">
                    <Icon className="h-6 w-6 text-amber-400" />
                  </div>
                </div>
                <div className="p-5 md:p-6">
                  <p className="mb-2 text-2xl font-semibold text-amber-400 md:text-3xl">
                    {item.metric}
                  </p>
                  <h3 className="mb-2 text-sm font-semibold text-white md:text-[15px] 2xl:text-base">
                    {item.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-gray-200 md:text-sm">
                    {item.description}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </Shell>

      {/* ================= FAQ ================= */}
      <Shell labelledBy="faq-heading">
        <Heading id="faq-heading" title="Common Questions" />
        <div className="mx-auto max-w-3xl divide-y divide-white/10 border-y border-white/10">
          {faqs.map((faq, index) => {
            const open = openFAQ === index;
            const panelId = `faq-panel-${index}`;
            const buttonId = `faq-button-${index}`;
            return (
              <div key={faq.question}>
                <button
                  type="button"
                  id={buttonId}
                  aria-expanded={open}
                  aria-controls={panelId}
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between gap-4 py-4 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400 md:py-5"
                >
                  <h3 className="pr-2 text-sm font-medium text-white md:text-base 2xl:text-lg">
                    {faq.question}
                  </h3>
                  <span className="shrink-0 text-amber-400" aria-hidden="true">
                    {open ? (
                      <ChevronUp className="h-4 w-4 md:h-5 md:w-5" />
                    ) : (
                      <ChevronDown className="h-4 w-4 md:h-5 md:w-5" />
                    )}
                  </span>
                </button>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!open}
                  className={open ? "pb-4 md:pb-5" : ""}
                >
                  {open && (
                    <p className="text-sm leading-relaxed text-gray-400 md:text-[15px] 2xl:text-base">
                      {faq.answer}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </Shell>

      {/* ================= FINAL CTA ================= */}
     

      {/* ================= RELATED INDUSTRIES ================= */}
      <section
        className="bg-black py-10 md:py-12"
        aria-labelledby="related-industries-heading"
      >
        <div className="container mx-auto max-w-6xl px-4">
          <h2
            id="related-industries-heading"
            className="mb-5 text-sm font-semibold uppercase tracking-[0.14em] text-gray-400 md:text-base"
          >
            Related Industries
          </h2>
          <ul className="flex list-none flex-wrap gap-2">
            {relatedIndustries.map((item) => (
              <li key={item.title}>
                <Link
                  to={item.link}
                  className="inline-flex items-center gap-1 rounded-full border border-white/10 px-3 py-1.5 text-xs text-gray-200 transition-colors hover:border-amber-400/40 hover:text-amber-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400 md:px-3.5 md:py-2 md:text-sm"
                >
                  {item.title}
                  <ArrowRight size={11} className="md:h-3.5 md:w-3.5" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default UAERealEstatePage;
