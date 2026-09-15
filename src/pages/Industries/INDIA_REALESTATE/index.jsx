import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ChevronDown,
  ChevronUp,
  Shield,
  BarChart3,
  Building2,
  Home,
  Brain,
  TrendingUp,
  Sparkles,
  Network,
  Cloud,
  Database,
  KeyRound,
  ClipboardCheck,
  ArrowRight,
  Users,
  FileText,
  DollarSign,
  Wrench,
  MessageSquare,
  Smartphone,
  RefreshCw,
  Layers,
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
      <p className="mb-3 text-[11px] 2xl:text-[15px] font-semibold uppercase tracking-[0.18em] text-amber-400">
        {eyebrow}
      </p>
    )}
    <h2 id={id} className="text-3xl leading-tight text-white md:text-4xl">
      {title}
    </h2>
    {subtitle && (
      <p className="mt-3 text-base leading-relaxed text-gray-300 md:text-lg">
        {subtitle}
      </p>
    )}
  </div>
);

const IndiaRealEstatePage = () => {
  const [openFAQ, setOpenFAQ] = useState(null);
  const [activeStakeholder, setActiveStakeholder] = useState(0);
  const { openConsultation } = useConsultation();

  const marketInsights = [
    { value: "USD 1.72B", label: "India PropTech market size (2025)" },
    { value: "17% CAGR", label: "Projected growth 2026–2035" },
    { value: "78%", label: "Rental demand for 500–1,500 sq ft units" },
    { value: "18.1% YoY", label: "National average rent increase" },
  ];

  const services = [
    {
      icon: Building2,
      title: "Property Management & Leasing",
      description:
        "Leasing CRM, 99acres & MagicBricks listings, digital rent agreements, and police verification workflows.",
    },
    {
      icon: Wrench,
      title: "Maintenance & Operations",
      description:
        "Smart dispatch, vendor networks, work orders, and unit-turn automation for gated communities.",
    },
    {
      icon: DollarSign,
      title: "Accounting & Financial Management",
      description:
        "GST-compliant billing, TDS under Section 195, bill approvals, and owner–resident portals.",
    },
    {
      icon: Sparkles,
      title: "AI & Automation",
      description:
        "Agentic AI for leasing, maintenance, and WhatsApp resident communications with audit logs.",
    },
    {
      icon: MessageSquare,
      title: "Resident Experience",
      description:
        "Digital onboarding, rent reminders, renewals, and self-service portals across metros.",
    },
  ];

  const challenges = [
    {
      challenge:
        "NRI landlords struggle with tenant verification, rent defaults, and remote property oversight.",
      solution:
        "Remote landlord portals with police verification, rent tracking, payment alerts, and maintenance logs.",
    },
    {
      challenge:
        "Tenants delay rent, resist indexation, or vacate without notice—leaving landlords without recourse.",
      solution:
        "Digital rent agreements, escalation workflows, deposit management, and legal documentation support.",
    },
    {
      challenge:
        "RWAs enforce stricter tenancy rules, verification, and community compliance requirements.",
      solution:
        "RWA-compliant documentation, background verification, and visitor management workflows.",
    },
    {
      challenge:
        "GST on commercial rent and TDS under Section 195 overload teams without dedicated finance staff.",
      solution:
        "Automated GST, RCM checks, TDS workflows, and invoice generation in the accounting module.",
    },
  ];

  const stakeholders = [
    {
      tab: "Property Managers",
      title: "Property Managers",
      description:
        "Residential and commercial operators needing leasing, maintenance, accounting, and resident tools in one platform.",
      image: "/pics/Property Management Office.png",
      bullets: [
        "Unified leasing, maintenance & accounting",
        "Owner and resident self-service portals",
        "Real-time occupancy visibility",
        "Cloud access across cities",
      ],
    },
    {
      tab: "Maintenance",
      title: "Maintenance Teams",
      description:
        "Teams coordinating vendors and work orders across gated communities and commercial buildings.",
      image: "/pics/Maintenance Operations.png",
      bullets: [
        "Smart maintenance & vendor networks",
        "PO and approval routing",
        "Work order tracking to resolution",
        "Mobile-first field access",
      ],
    },
    {
      tab: "NRI Landlords",
      title: "NRI Landlords",
      description:
        "Overseas owners who need documented control of Indian properties without burdening family.",
      image: "/pics/Investor Dashboard.png",
      bullets: [
        "Remote portfolio dashboards",
        "Documented tenant verification",
        "Automated rent tracking & alerts",
        "Legal documentation support",
      ],
    },
    {
      tab: "Residents",
      title: "Residents",
      description:
        "Metro renters who expect digital onboarding, UPI payments, and responsive maintenance.",
      image: "/pics/Resident.png",
      bullets: [
        "Digital rent agreements & onboarding",
        "UPI and auto-debit payments",
        "Maintenance request tracking",
        "Renewal and move-out workflows",
      ],
    },
  ];

  const techStack = [
    {
      icon: Brain,
      title: "AI & Automation",
      body: "Agentic AI for leasing, maintenance, and resident communications.",
    },
    {
      icon: Cloud,
      title: "Cloud Platform",
      body: "100% cloud property management with anytime metro access.",
    },
    {
      icon: Network,
      title: "API Access",
      body: "APIs for units, tenants, leases, maintenance, owners, and finance.",
    },
    {
      icon: Smartphone,
      title: "Mobile-First",
      body: "Mobile apps with Hindi and regional language support.",
    },
    {
      icon: BarChart3,
      title: "Data & Analytics",
      body: "Real-time occupancy, renewals, yields, and portfolio insights.",
    },
  ];

  const integrations = [
    { title: "99acres" },
    { title: "MagicBricks" },
    { title: "Housing.com" },
    { title: "NoBroker" },
    { title: "UPI Payment Gateways" },
    { title: "WhatsApp Business API" },
    { title: "Tally" },
    { title: "Custom APIs" },
  ];

  const security = [
    {
      icon: Shield,
      title: "Data Security & Privacy",
      body: "Protects property, resident, and investor data with India localisation in mind.",
    },
    {
      icon: ClipboardCheck,
      title: "RERA Compliance Support",
      body: "Audit trails and escrow tracking support for RERA-registered projects.",
    },
    {
      icon: DollarSign,
      title: "GST & TDS Workflows",
      body: "18% commercial GST, RCM checks, and TDS under Section 195.",
    },
    {
      icon: FileText,
      title: "Tenant Verification",
      body: "Police verification, background checks, and RWA-ready records.",
    },
    {
      icon: KeyRound,
      title: "Enterprise Readiness",
      body: "Controls for Indian property firms, developers, and institutions.",
    },
    {
      icon: Database,
      title: "Audit & Activity Logs",
      body: "Transparent logs for AI, approvals, and operational actions.",
    },
  ];

  const advantages = [
    {
      id: 1,
      title: "AI-Native Innovation",
      description:
        "Purpose-built AI for leasing, maintenance, and resident communications—not generic CRM.",
    },
    {
      id: 2,
      title: "Unified Platform Experience",
      description:
        "Leasing, maintenance, accounting, and messaging share one data model.",
    },
    {
      id: 3,
      title: "India Market Understanding",
      description:
        "Built for RERA, GST on commercial rent, TDS Section 195, and RWA rules.",
    },
    {
      id: 4,
      title: "Proven Outcomes",
      description:
        "Gains in rent collection, maintenance resolution, renewals, and hours saved.",
    },
    {
      id: 5,
      title: "Global Delivery Capability",
      description:
        "NRI support across time zones with IST-aligned domestic teams.",
    },
    {
      id: 6,
      title: "Modern Interface & Adoption",
      description:
        "Designed so mid-market and enterprise teams actually adopt the tools.",
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Discovery & Onboarding",
      description: "Assess portfolio, workflows, and compliance needs for quick value.",
    },
    {
      number: "02",
      title: "Architecture & Configuration",
      description: "Configure leasing, maintenance, GST/TDS, and integrations.",
    },
    {
      number: "03",
      title: "Implementation & Training",
      description: "Migration plus English and Hindi training sized to your portfolio.",
    },
    {
      number: "04",
      title: "Ongoing Support",
      description: "IST-aligned support and continuous improvement as you scale.",
    },
  ];

  const caseStudies = [
    {
      metric: "9 → 1",
      title: "Unified Platform Consolidation",
      description:
        "Nine systems into one AI-native platform—higher productivity and a seamless resident experience.",
      icon: Layers,
    },
    {
      metric: "180+",
      title: "Maintenance at Scale",
      description:
        "180+ units streamlined via an integrated vendor network with documented pricing and tracking.",
      icon: Wrench,
    },
    {
      metric: "1.2 Days",
      title: "Faster Unit Turns",
      description:
        "Automated turn workflows cut turn time by 1.2 days on average, with faster fills and renewals.",
      icon: RefreshCw,
    },
  ];

  const faqs = [
    {
      question:
        "What does property management software for Indian operators include?",
      answer:
        "Leasing CRM, digital rent agreements, maintenance & work orders, GST accounting, owner/resident portals, AI communications, tenant verification, and TDS support.",
    },
    {
      question: "How does AI help Indian property managers?",
      answer:
        "AI engages prospects on WhatsApp, prioritises leasing, dispatches maintenance, handles renewals, and keeps audit logs—saving hours and filling vacancies faster.",
    },
    {
      question: "Can the platform integrate with 99acres and MagicBricks?",
      answer:
        "Yes. Listing and tour workflows connect with 99acres, MagicBricks, Housing.com, and NoBroker, plus payments and messaging tools.",
    },
    {
      question: "Does the platform support maintenance management?",
      answer:
        "Yes. Smart maintenance, vendor networks, POs, and work orders track jobs from request to completion.",
    },
    {
      question: "How does the platform handle GST on commercial rent?",
      answer:
        "It calculates 18% GST on commercial rent, supports RCM checks, and generates GST-compliant tax invoices.",
    },
    {
      question: "Does it support TDS deduction for NRI landlords?",
      answer:
        "Yes. TDS under Section 195 is built into accounting, with NRI documentation and compliance reporting.",
    },
    {
      question: "Can it integrate with existing systems?",
      answer:
        "Yes. APIs cover units, tenants, leases, maintenance, owners, and finance—including Tally and ERP.",
    },
    {
      question: "How long does implementation take?",
      answer:
        "Depends on portfolio size. Most mid-market operators go live in weeks to months and see value quickly.",
    },
    {
      question: "What support is available?",
      answer:
        "IST-aligned teams, account management, remote implementation, and English/Hindi training.",
    },
    {
      question: "Is the platform cloud-based?",
      answer:
        "Yes. Cloud property management enables anytime access for managers and residents.",
    },
    {
      question: "Can it support enterprise property managers?",
      answer:
        "Yes. Enterprises get unified leasing, maintenance, accounting, GST/TDS, APIs, and audit logs.",
    },
  ];

  const relatedIndustries = [
    { title: "Real Estate", link: ROUTES.industry.realEstate },
    { title: "UAE Real Estate", link: ROUTES.industry.uaeRealEstate },
    { title: "US Real Estate", link: ROUTES.industry.usRealEstate },
    { title: "Canada Real Estate", link: ROUTES.industry.canadaRealEstate },
    { title: "Business CRM", link: ROUTES.industry.businessCrm },
    { title: "Enterprise ERP", link: ROUTES.industry.erp },
    { title: "Field Service CRM", link: ROUTES.industry.fieldServiceCrm },
    { title: "Interior & Architecture", link: ROUTES.industry.interiorArchitecture },
    { title: "Manufacturing", link: ROUTES.industry.manufacturing },
    { title: "Logistics", link: ROUTES.industry.logistics },
  ];

  const active = stakeholders[activeStakeholder];
  const ActiveStakeholderIcon = [
    Home,
    Wrench,
    Users,
    MessageSquare,
  ][activeStakeholder];

  const toggleFAQ = (index) => setOpenFAQ(openFAQ === index ? null : index);

  return (
    <div className="min-h-screen bg-black">
      <SEO {...seoData.indiaRealEstate} />

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
                India PropTech
              </p>
              <h1 className="text-[25px] leading-tight md:text-[35px]">
                Technology Partner for India Real Estate Businesses
              </h1>
              <p className="text-lg leading-relaxed text-gray-300">
                AI property management for Indian managers, builders, and
                investors—leasing, maintenance, accounting, and residents in one
                platform.
              </p>
            </div>

            {/* 2. Image — after text on mobile; right column on desktop */}
            <div className="relative order-2 mt-2 w-full sm:mt-4 lg:order-2 lg:row-span-2 lg:mt-0 lg:self-center">
              <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-black/30 shadow-2xl backdrop-blur-md">
                <img
                  src="/pics/india-realstate-hero.jpeg"
                  alt="India property management software"
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
              title="Why India Real Estate Needs Modern Tech"
              subtitle="India’s PropTech market hit USD 1.72B in 2025 (17% CAGR). With 78% of rental demand in 500–1,500 sq ft homes and rents up 18.1% YoY, managers need smarter digital ops."
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
          title="Services Built for Indian Property Operations"
          subtitle="Property management software for Indian residential and commercial portfolios."
        />
        <ul className="grid list-none grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
                <p className="text-xs leading-relaxed text-gray-300 md:text-sm">
                  {service.description}
                </p>
              </li>
            );
          })}
        </ul>
      </Shell>

      {/* ================= CHALLENGES ================= */}
      <Shell labelledBy="challenges-heading" alt>
        <Heading
          id="challenges-heading"
          eyebrow="Solutions"
          title="Practical Solutions for Indian Real Estate Challenges"
          subtitle="Built for tenant verification, rent collection, RWA compliance, and GST/TDS."
        />
        <ul className="grid list-none grid-cols-1 gap-4 md:grid-cols-2">
          {challenges.map((item, index) => (
            <li
              key={item.challenge}
              className="rounded-xl border border-white/10 bg-black/30 p-5 md:p-6"
            >
              <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-amber-400 md:text-xs">
                Challenge {String(index + 1).padStart(2, "0")}
              </p>
              <p className="mb-4 text-sm leading-relaxed text-white md:text-[15px]">
                {item.challenge}
              </p>
              <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-gray-400 md:text-xs">
                Our Solution
              </p>
              <p className="text-sm leading-relaxed text-gray-300 md:text-[15px]">
                {item.solution}
              </p>
            </li>
          ))}
        </ul>
      </Shell>

      {/* ================= STAKEHOLDERS ================= */}
      <Shell labelledBy="stakeholders-heading">
        <Heading
          id="stakeholders-heading"
          eyebrow="Use Cases"
          title="Software Shaped Around Indian Real Estate Roles"
          subtitle="For property managers, maintenance teams, NRI landlords, and residents."
        />

        {/* Mobile: full-width selector */}
        <div className="mb-8 md:hidden">
          <label htmlFor="india-stakeholder-select" className="sr-only">
            Select stakeholder type
          </label>
          <div className="relative">
            <select
              id="india-stakeholder-select"
              value={activeStakeholder}
              onChange={(e) => setActiveStakeholder(Number(e.target.value))}
              aria-controls="india-stakeholder-panel"
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
                id={`india-stakeholder-tab-${index}`}
                aria-controls="india-stakeholder-panel"
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
          id="india-stakeholder-panel"
          role="tabpanel"
          aria-labelledby={`india-stakeholder-tab-${activeStakeholder}`}
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
              alt={`${active.title} — India real estate software`}
              className="h-full min-h-[220px] w-full object-cover 2xl:min-h-[260px]"
            />
          </div>
        </div>
      </Shell>

      {/* ================= TECHNOLOGY ================= */}
      <Shell labelledBy="tech-heading" alt>
        <Heading
          id="tech-heading"
          eyebrow="Capabilities"
          title="AI-Native Architecture for Indian PropTech"
          subtitle="Cloud property management with AI, APIs, and mobile access for Indian teams."
        />
        <ul className="grid list-none grid-cols-2 gap-3 md:grid-cols-5">
          {techStack.map((item) => {
            const Icon = item.icon;
            return (
              <li
                key={item.title}
                className="rounded-xl border border-white/10 bg-black/30 p-4 text-center md:p-5"
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
          Integrations & Ecosystem
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
      <Shell labelledBy="compliance-heading">
        <Heading
          id="compliance-heading"
          eyebrow="Compliance"
          title="India-Ready Compliance & Security"
          subtitle="RERA, GST/TDS Section 195, tenant verification, and enterprise controls."
        />
        <ul className="grid list-none grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {security.map((item) => {
            const Icon = item.icon;
            return (
              <li
                key={item.title}
                className="rounded-xl border border-white/10 bg-gray-950 p-5 md:p-6"
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
      <Shell labelledBy="why-heading" alt>
        <Heading
          id="why-heading"
          eyebrow="Why Ascentia Labs"
          title="Why Choose Us for India Real Estate"
          subtitle="AI-native PropTech with India market depth and IST-aligned delivery."
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
      <Shell labelledBy="process-heading">
        <Heading
          id="process-heading"
          eyebrow="Delivery"
          title="How We Work with Indian Property Managers"
          subtitle="Four clear phases from discovery to ongoing support."
        />

        <ol className="relative space-y-8 border-l border-white/15 pl-8 ml-2 md:hidden">
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
      <Shell labelledBy="impact-heading" alt>
        <Heading
          id="impact-heading"
          eyebrow="Results"
          title="Proven Outcomes Across Indian Real Estate"
          subtitle="Measurable results from AI-native property management."
        />
        <ul className="grid list-none grid-cols-1 gap-4 md:grid-cols-3">
          {caseStudies.map((item, index) => {
            const Icon = item.icon;
            const gradientId = `india-case-bg-${index}`;
            return (
              <li
                key={item.title}
                className="overflow-hidden rounded-xl border border-white/10 bg-black/30"
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
            const panelId = `india-faq-panel-${index}`;
            const buttonId = `india-faq-button-${index}`;
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

export default IndiaRealEstatePage;
