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
      <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-400">
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

const USRealEstatePage = () => {
  const [openFAQ, setOpenFAQ] = useState(null);
  const [activeStakeholder, setActiveStakeholder] = useState(0);
  const { openConsultation } = useConsultation();

  const marketInsights = [
    { value: "36%", label: "Of US housing units are rental housing" },
    { value: "$3.8B", label: "US real estate software market (2025)" },
    { value: "$8.5B", label: "Projected market size by 2035 (10.6% CAGR)" },
    { value: "65%", label: "Cloud SaaS share of the market" },
  ];

  const services = [
    {
      icon: Building2,
      title: "Property Management & Leasing",
      description:
        "Leasing CRM, AI lead prioritization, Zillow-ready listing workflows, online applications, dynamic pricing, and native inspections.",
    },
    {
      icon: Wrench,
      title: "Maintenance & Operations",
      description:
        "Smart maintenance, vendor networks, unit turn automation, purchase orders, work orders, and facility management.",
    },
    {
      icon: DollarSign,
      title: "Accounting & Financial Management",
      description:
        "Bill approval flows, bulk payables, tax withholding, owner and resident portals, and investment management.",
    },
    {
      icon: Sparkles,
      title: "AI & Automation",
      description:
        "Agentic AI for leasing, maintenance, and resident communications—with unified messaging and full activity logs.",
    },
    {
      icon: MessageSquare,
      title: "Resident Experience",
      description:
        "Personalized onboarding, resident messaging, renewal communications, and inquiry management.",
    },
  ];

  const challenges = [
    {
      challenge:
        "Vacant units cost money every day, and prospects expect immediate responses.",
      solution:
        "AI leasing engagement across channels, lead prioritization, tour scheduling, and lead attribution so teams respond faster and convert more.",
    },
    {
      challenge:
        "Finding reliable, budget-friendly contractors remains a persistent pain point.",
      solution:
        "Smart maintenance with integrated vendor networks, automated dispatch, and work order tracking from request to resolution.",
    },
    {
      challenge:
        "Manual unit turns create bottlenecks between move-out and move-in.",
      solution:
        "Unit turn automation that schedules inspections, sends notifications, and keeps turn boards up to date—cutting turn time.",
    },
    {
      challenge: "Renewals are manual, inconsistent, and time-consuming.",
      solution:
        "Automated resident messaging for renewals, rent questions, and lease terms—supporting higher renewal rates and NOI.",
    },
  ];

  const stakeholders = [
    {
      tab: "Property Managers",
      title: "US Property Management Companies",
      description:
        "Operators running residential and commercial portfolios who need leasing, maintenance, accounting, and resident experience in one platform.",
      image: "/pics/Property Management Office.png",
      bullets: [
        "Unified leasing, maintenance, and accounting workflows",
        "Owner and resident portals for self-service",
        "Real-time occupancy and portfolio visibility",
        "Cloud access for teams across properties and metros",
      ],
    },
  
    {
      tab: "Maintenance",
      title: "Maintenance & Operations Teams",
      description:
        "Teams coordinating vendors, work orders, unit turns, and facility work across large portfolios.",
      image: "/pics/Maintenance Operations.png",
      bullets: [
        "Smart maintenance with vendor network coverage",
        "Automated unit turn workflows",
        "Purchase order and approval routing",
        "Work order tracking through resolution",
      ],
    },
    {
      tab: "Investors",
      title: "Real Estate Investors & Funds",
      description:
        "Investment firms and syndications that need portfolio reporting, distributions, and tax withholding support.",
      image: "/pics/Investor Dashboard.png",
      bullets: [
        "Investment management for funds and syndications",
        "Secure investor distributions and tax withholdings",
        "Owner portals and financial transparency",
        "Enterprise-ready reporting and controls",
      ],
    },
    {
      tab: "Residents",
      title: "Resident Experience",
      description:
        "Renters expect smooth move-in, clear communication, and easy renewal and payment support.",
      image: "/pics/Resident.png",
      bullets: [
        "Personalized onboarding guidance",
        "Unified resident messaging",
        "Renewal and payment inquiry support",
        "Mobile-first self-service access",
      ],
    },
   
  ];

  const techStack = [
    {
      icon: Brain,
      title: "AI & Automation",
      body: "Agentic AI for leasing, maintenance, and resident communications—not bolt-on automation.",
    },
    {
      icon: Cloud,
      title: "Cloud Platform",
      body: "100% cloud-based property management software with anytime, anywhere access.",
    },
    {
      icon: Network,
      title: "API Access",
      body: "APIs covering units, tenants, leases, maintenance, owners, and financial transactions.",
    },
    {
      icon: Smartphone,
      title: "Mobile-First",
      body: "Full mobile support for property managers and residents across leasing and maintenance.",
    },
    {
      icon: BarChart3,
      title: "Data & Analytics",
      body: "Real-time insights for occupancy, lead sources, renewals, and operational performance.",
    },
  ];

  const integrations = [
    { title: "Zillow" },
    { title: "Apartments247" },
    { title: "The Home Depot Pro" },
    { title: "PlanOmatic" },
    { title: "Banyan" },
    { title: "Livable" },
    { title: "Zego" },
    { title: "Possession Partner" },
    { title: "Custom APIs" },
  ];

  const security = [
    {
      icon: Shield,
      title: "Data Security & Privacy",
      body: "Industry-leading protection for property, resident, and investor data.",
    },
    {
      icon: ClipboardCheck,
      title: "FCRA Tenant Screening",
      body: "Tenant screening workflows aligned with Fair Credit Reporting Act requirements.",
    },
    {
      icon: FileText,
      title: "HUD Affordable Housing",
      body: "Support for affordable housing compliance, including HUD-aligned rent certifications.",
    },
    {
      icon: DollarSign,
      title: "Investor Tax Withholding",
      body: "Secure handling of investor distributions and federal, state, and international tax withholdings.",
    },
    {
      icon: KeyRound,
      title: "Enterprise Readiness",
      body: "Controls suited to property management firms, REITs, and institutional investors.",
    },
    {
      icon: Database,
      title: "Audit & Activity Logs",
      body: "Transparent logs for AI workflows, approvals, and operational actions.",
    },
  ];

  const advantages = [
    {
      id: 1,
      title: "AI-Native Innovation",
      description:
        "Purpose-built AI agents for leasing, maintenance, and resident communications—not generic CRM with limited real estate depth.",
    },
    {
      id: 2,
      title: "Unified Platform Experience",
      description:
        "Leasing, maintenance, accounting, and resident communications share one data model—no fragmented acquisition stack.",
    },
    {
      id: 3,
      title: "Modern Interface & Adoption",
      description:
        "Designed for usability so mid-market and enterprise teams actually adopt the tools that drive results.",
    },
    {
      id: 4,
      title: "Proven Outcomes",
      description:
        "Measurable gains in vacancy fill time, renewals, unit turns, and weekly hours saved.",
    },
    {
      id: 5,
      title: "US Market Understanding",
      description:
        "Built around US property workflows—leasing channels, maintenance networks, FCRA screening, and HUD needs.",
    },
    {
      id: 6,
      title: "Global Delivery Capability",
      description:
        "North American timezone support, dedicated account teams, remote implementation, and ongoing training.",
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Discovery & Onboarding",
      description:
        "Assess portfolio, workflows, and goals so teams see value quickly—most operators benefit within weeks.",
    },
    {
      number: "02",
      title: "Architecture & Configuration",
      description:
        "Configure leasing, maintenance, accounting, integrations, and compliance around your operating model.",
    },
    {
      number: "03",
      title: "Implementation & Training",
      description:
        "Data migration, user training, and guided rollout sized to portfolio complexity.",
    },
    {
      number: "04",
      title: "Ongoing Support",
      description:
        "Responsive support, knowledge resources, and continuous improvement as your portfolio grows.",
    },
  ];

  const caseStudies = [
    {
      metric: "9 → 1",
      title: "Advanced Management Company",
      description:
        "Consolidated nine separate systems into one AI-native platform, improving productivity and delivering a seamless resident experience.",
      icon: Layers,
    },
    {
      metric: "180+",
      title: "Morton Realty — Maintenance",
      description:
        "Property management firm with 180+ units streamlined maintenance through an integrated vendor network with strong documentation and pricing.",
      icon: Wrench,
    },
    {
      metric: "1.2 days",
      title: "Faster Unit Turns Nationwide",
      description:
        "Operators using automated unit turn workflows report a 1.2-day average reduction in turn time, plus faster vacancy fill and higher renewals.",
      icon: RefreshCw,
    },
  ];

  const faqs = [
    {
      question:
        "What does property management software for US operators include?",
      answer:
        "Core capabilities typically include leasing CRM, online applications, maintenance and work orders, unit turn automation, accounting and bill approvals, owner and resident portals, AI communications, and compliance workflows such as tenant screening support.",
    },
    {
      question: "How does AI help US property managers?",
      answer:
        "AI agents can engage prospects instantly, prioritize leasing tasks, automate unit turns, handle renewal and payment inquiries, and keep full activity logs—helping teams save hours each week and fill vacancies faster.",
    },
    {
      question: "Can the platform integrate with Zillow?",
      answer:
        "Yes. Listing spotlight and tour scheduling workflows can connect with Zillow and other marketplace partners, alongside websites, utilities, procurement, photography, and eviction partners.",
    },
    {
      question: "Does the platform support maintenance management?",
      answer:
        "Yes. Smart maintenance, vendor networks, purchase order workflows, work orders, and facility management help teams dispatch, track, and resolve maintenance from request to completion.",
    },
    {
      question: "Does it support tenant screening compliance?",
      answer:
        "Tenant screening workflows can be designed for Fair Credit Reporting Act (FCRA) compliance, with additional support for affordable housing and HUD-aligned requirements where needed.",
    },
    {
      question: "Can it integrate with existing systems?",
      answer:
        "Yes. API access covers units, tenants, leases, maintenance requests, owner data, and financial transactions, plus marketplace integrations for listings, utilities, tours, and more.",
    },
    {
      question: "How long does implementation take?",
      answer:
        "Timelines depend on portfolio size and complexity. For most mid-market residential operators, deployment typically takes weeks to months, with many teams seeing benefits within weeks.",
    },
    {
      question: "What support is available?",
      answer:
        "US property managers are supported through North American timezone coverage, dedicated account teams, remote implementation guidance, training, and ongoing support resources.",
    },
    {
      question: "Is the platform cloud-based?",
      answer:
        "Yes. Modern US property management platforms are cloud-based, enabling anytime access for managers and residents across leasing, maintenance, and communications.",
    },
    {
      question: "Can it support enterprise property managers?",
      answer:
        "Yes. Enterprise operators, REITs, and institutional investors can use unified leasing, maintenance, accounting, investor tax withholding, API integrations, and audit-ready activity logs.",
    },
  ];

  const relatedIndustries = [
    { title: "Real Estate", link: ROUTES.industry.realEstate },
    { title: "UAE Real Estate", link: ROUTES.industry.uaeRealEstate },
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
    Users,
    Wrench,
    DollarSign,
    MessageSquare,
    Building2,
  ][activeStakeholder];

  const toggleFAQ = (index) => setOpenFAQ(openFAQ === index ? null : index);

  return (
    <div className="min-h-screen bg-black">
      <SEO {...seoData.usRealEstate} />

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
                US PropTech
              </p>
              <h1 className="text-[25px] leading-tight md:text-[35px]">
                Technology Partner for US Real Estate Businesses
              </h1>
              <p className="text-lg leading-relaxed text-gray-300">
                AI-powered property management software for US property
                managers, leasing teams, and investors—unifying leasing,
                maintenance, accounting, and resident experience.
              </p>
            </div>

            {/* 2. Image — after text on mobile; right column on desktop */}
            <div className="relative order-2 mt-2 w-full sm:mt-4 lg:order-2 lg:row-span-2 lg:mt-0 lg:self-center">
              <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-black/30 shadow-2xl backdrop-blur-md">
                <img
                  src="/pics/us-hero.png"
                  alt="US property management software"
                  className="mx-auto block h-auto w-full object-cover object-center max-h-[260px] sm:max-h-[320px] md:max-h-[380px] lg:max-h-[420px] xl:max-h-[460px] 2xl:max-h-[500px]"
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
              title="Why US Real Estate Needs Modern Technology"
              subtitle="With rental housing at 36% of US units and resident expectations rising—75% face move-in challenges—property managers need cloud platforms that improve efficiency and resident experience."
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
          title="Industry-Specific Services for US Property Managers"
          subtitle="A comprehensive property management platform designed for US residential and commercial operations."
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
          title="Practical Solutions for US Real Estate Challenges"
          subtitle="Workflows that matter most to US property managers—leasing speed, maintenance, unit turns, and renewals."
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
          title="Built for Every Stakeholder"
          subtitle="Software shaped around how US property managers, leasing teams, maintenance crews, investors, and residents operate."
        />

        {/* Mobile: full-width selector */}
        <div className="mb-8 md:hidden">
          <label htmlFor="us-stakeholder-select" className="sr-only">
            Select stakeholder type
          </label>
          <div className="relative">
            <select
              id="us-stakeholder-select"
              value={activeStakeholder}
              onChange={(e) => setActiveStakeholder(Number(e.target.value))}
              aria-controls="us-stakeholder-panel"
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
                id={`us-stakeholder-tab-${index}`}
                aria-controls="us-stakeholder-panel"
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
          id="us-stakeholder-panel"
          role="tabpanel"
          aria-labelledby={`us-stakeholder-tab-${activeStakeholder}`}
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
              alt={`${active.title} — US real estate software`}
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
          title="Technology & Capabilities"
          subtitle="AI-native architecture, cloud delivery, APIs, and mobile access for US property teams."
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
          title="Compliance & Security"
          subtitle="US-ready security, screening, affordable housing support, and enterprise controls."
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
          title="Why Choose Us for US Real Estate"
          subtitle="AI-native property platforms with deep US market understanding and global delivery."
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
          title="How We Work with US Property Managers"
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
          title="Proven Outcomes & Case Studies"
          subtitle="Measurable results from AI-native property management platforms."
        />
        <ul className="grid list-none grid-cols-1 gap-4 md:grid-cols-3">
          {caseStudies.map((item, index) => {
            const Icon = item.icon;
            const gradientId = `us-case-bg-${index}`;
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
            const panelId = `us-faq-panel-${index}`;
            const buttonId = `us-faq-button-${index}`;
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

export default USRealEstatePage;
