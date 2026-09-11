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

const CanadaRealEstatePage = () => {
  const [openFAQ, setOpenFAQ] = useState(null);
  const [activeStakeholder, setActiveStakeholder] = useState(0);
  const { openConsultation } = useConsultation();

  const marketInsights = [
    { value: "USD 693.3M", label: "Canada real estate software market (2025)" },
    { value: "12.3% CAGR", label: "Projected growth 2026–2033" },
    { value: "$2,035", label: "Average national asking rent (Aug 2026)" },
    { value: "C$450M", label: "PropTech funding raised in 2025" },
  ];

  const services = [
    {
      icon: Building2,
      title: "Property Management & Leasing",
      description:
        "Leasing CRM, Realtor.ca & Rentals.ca listings, digital leases, and provincial tenant screening.",
    },
    {
      icon: Wrench,
      title: "Maintenance & Operations",
      description:
        "Smart dispatch, vendor networks, work orders, and unit-turn automation for rentals and condos.",
    },
    {
      icon: DollarSign,
      title: "Accounting & Financial Management",
      description:
        "Bill approvals, rent control tracking, owner–resident portals, and investment reporting.",
    },
    {
      icon: Sparkles,
      title: "AI & Automation",
      description:
        "Agentic AI for leasing, maintenance, renewals, and resident messaging with audit logs.",
    },
    {
      icon: MessageSquare,
      title: "Resident Experience",
      description:
        "Digital onboarding, rent reminders, renewals, and self-service portals across provinces.",
    },
  ];

  const challenges = [
    {
      challenge:
        "Rent control varies by province—Ontario 2.1%, BC 2.3%, Manitoba 1.8% for 2026—while Alberta and Saskatchewan have no caps.",
      solution:
        "Provincial rent increase tracking, notice reminders, and audit-ready documentation for each province.",
    },
    {
      challenge:
        "Rents have fallen for 23 months. Weaker markets and higher vacancy mean more incentives to attract tenants.",
      solution:
        "Dynamic pricing guidance, lead prioritization, and AI prospect engagement to cut vacancy time.",
    },
    {
      challenge:
        "Renoviction licensing is expanding—Toronto, Hamilton, and London enacted rules in 2025.",
      solution:
        "Renovation documentation, tenant communication tracking, and municipal licensing checklists.",
    },
    {
      challenge:
        "As new lease rates soften, renewals drive in-place growth—tenant retention is critical.",
      solution:
        "Automated renewals, resident engagement, and retention analytics to boost renewals and cut turnover.",
    },
  ];

  const stakeholders = [
    {
      tab: "Property Managers",
      title: "Property Managers",
      description:
        "Operators of purpose-built rentals and condo portfolios needing leasing, maintenance, accounting, and resident tools in one platform.",
      image: "/pics/Property Management Office.png",
      bullets: [
        "Unified leasing, maintenance & accounting",
        "Owner and resident self-service portals",
        "Real-time occupancy visibility",
        "Cloud access across provinces",
      ],
    },
    {
      tab: "Maintenance",
      title: "Maintenance Teams",
      description:
        "Teams coordinating vendors and work orders across multi-residential buildings.",
      image: "/pics/Maintenance Operations.png",
      bullets: [
        "Smart maintenance & vendor networks",
        "PO and approval routing",
        "Work order tracking to resolution",
        "Mobile-first field access",
      ],
    },
    {
      tab: "Landlords",
      title: "Landlords & Investors",
      description:
        "Landlords and investment firms managing residential and commercial assets across Canadian markets.",
      image: "/pics/Investor Dashboard.png",
      bullets: [
        "Portfolio dashboards by province",
        "Rent control compliance tracking",
        "Documented tenant screening",
        "Tax reporting support",
      ],
    },
    {
      tab: "Residents",
      title: "Residents",
      description:
        "Canadian renters who expect digital onboarding, online payments, and responsive maintenance.",
      image: "/pics/Resident.png",
      bullets: [
        "Digital lease agreements & onboarding",
        "Online payment options",
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
      body: "100% cloud property management with anytime provincial access.",
    },
    {
      icon: Network,
      title: "API Access",
      body: "APIs for units, tenants, leases, maintenance, owners, and finance.",
    },
    {
      icon: Smartphone,
      title: "Mobile-First",
      body: "Full mobile support for managers, field staff, and residents.",
    },
    {
      icon: BarChart3,
      title: "Data & Analytics",
      body: "Real-time occupancy, renewals, yields, and portfolio insights.",
    },
  ];

  const integrations = [
    { title: "Realtor.ca" },
    { title: "Rentals.ca" },
    { title: "Zillow" },
    { title: "Tenant Pay" },
    { title: "Custom APIs" },
  ];

  const security = [
    {
      icon: Shield,
      title: "Data Security & Privacy",
      body: "Protects property, resident, and investor data with Canadian privacy in mind.",
    },
    {
      icon: ClipboardCheck,
      title: "Provincial Rent Control Support",
      body: "Tracks rent caps—ON 2.1%, BC 2.3%, MB 1.8%, NS 5.0% temp, and no-cap provinces.",
    },
    {
      icon: FileText,
      title: "Renoviction Licensing Compliance",
      body: "Workflows for Toronto, Hamilton, London, and expanding municipal by-laws.",
    },
    {
      icon: Users,
      title: "Tenant Screening & Documentation",
      body: "Background checks, digital leases, and inspections aligned with provincial RTAs.",
    },
    {
      icon: KeyRound,
      title: "Enterprise Readiness",
      body: "Controls for property firms, REITs, and institutional investors.",
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
      title: "Canada Market Understanding",
      description:
        "Built for provincial rent control, renoviction licensing, and tenancy rules.",
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
        "North American timezone support, dedicated accounts, and remote training.",
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
      description: "Configure leasing, maintenance, provincial compliance, and integrations.",
    },
    {
      number: "03",
      title: "Implementation & Training",
      description: "Migration, user training, and rollout sized to your portfolio.",
    },
    {
      number: "04",
      title: "Ongoing Support",
      description: "Responsive support and continuous improvement as you scale.",
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
        "What does property management software for Canadian operators include?",
      answer:
        "Leasing CRM, digital leases, maintenance & work orders, accounting, owner/resident portals, AI messaging, rent control tracking, and tenant screening.",
    },
    {
      question: "How does AI help Canadian property managers?",
      answer:
        "AI engages prospects, prioritizes leasing, dispatches maintenance, handles renewals, and keeps audit logs—saving hours and filling vacancies faster.",
    },
    {
      question: "How does the platform handle provincial rent control?",
      answer:
        "It tracks caps—ON 2.1%, BC 2.3%, MB 1.8%, NS 5.0% temp, and no-cap provinces—with notice reminders and audit-ready docs.",
    },
    {
      question: "Does the platform support municipal renoviction licensing?",
      answer:
        "Yes. Documentation and workflows support Toronto, Hamilton, London, and other cities with renoviction by-laws.",
    },
    {
      question: "Does it support maintenance management?",
      answer:
        "Yes. Smart maintenance, vendor networks, POs, and work orders track jobs from request to completion.",
    },
    {
      question: "Can it integrate with existing systems?",
      answer:
        "Yes. APIs cover units, tenants, leases, maintenance, owners, and finance—plus listing and payment partners.",
    },
    {
      question: "How long does implementation take?",
      answer:
        "Depends on portfolio size. Most mid-market operators go live in weeks to months and see value quickly.",
    },
    {
      question: "What support is available?",
      answer:
        "North American timezone coverage, dedicated accounts, remote implementation, and ongoing training.",
    },
    {
      question: "Is the platform cloud-based?",
      answer:
        "Yes. Cloud property management enables anytime access for managers and residents.",
    },
    {
      question: "Can it support enterprise property managers?",
      answer:
        "Yes. Enterprises get unified leasing, maintenance, accounting, provincial compliance, APIs, and audit logs.",
    },
  ];

  const relatedIndustries = [
    { title: "Real Estate", link: ROUTES.industry.realEstate },
    { title: "US Real Estate", link: ROUTES.industry.usRealEstate },
    { title: "UAE Real Estate", link: ROUTES.industry.uaeRealEstate },
    { title: "India Real Estate", link: ROUTES.industry.indiaRealEstate },
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
    DollarSign,
    MessageSquare,
  ][activeStakeholder];

  const toggleFAQ = (index) => setOpenFAQ(openFAQ === index ? null : index);

  return (
    <div className="min-h-screen bg-black">
      <SEO {...seoData.canadaRealEstate} />

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
            <div className="order-1 max-w-xl space-y-5 text-white lg:self-end">
              <p className="inline-flex rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-amber-400">
                Canada PropTech
              </p>
              <h1 className="text-[25px] leading-tight md:text-[35px]">
                Technology Partner for Canada Real Estate Businesses
              </h1>
              <p className="text-lg leading-relaxed text-gray-300">
                AI property management for Canadian managers, landlords, and
                investors—leasing, maintenance, accounting, and residents in one
                platform.
              </p>
            </div>

            <div className="relative order-2 mt-2 w-full sm:mt-4 lg:order-2 lg:row-span-2 lg:mt-0 lg:self-center">
              <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-black/30 shadow-2xl backdrop-blur-md">
                <img
                  src="/pics/canada-real-estate.png"
                  alt="Canada property management software"
                  className="mx-auto block h-auto w-full object-cover object-center max-h-[260px] sm:max-h-[320px] md:max-h-[380px] lg:max-h-[420px] xl:max-h-[460px] 2xl:max-h-[520px]"
                  loading="eager"
                  decoding="async"
                />
              </div>
            </div>

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

        <div
          className="relative container mx-auto max-w-6xl px-4 pb-12 md:pb-14 lg:pb-16"
          aria-labelledby="market-heading"
        >
          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
            <Heading
              id="market-heading"
              align="left"
              eyebrow="Market Context"
              title="Why Canada Real Estate Needs Modern Technology"
              subtitle="Canada’s real estate software market hit USD 693.3M in 2025 (12.3% CAGR). With asking rents at $2,035 after 23 months of declines, managers need smarter digital ops."
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
          title="Services Built for Canadian Property Operations"
          subtitle="Property management software for Canadian rentals and condo portfolios."
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
          title="Practical Solutions for Canadian Real Estate Challenges"
          subtitle="Built for rent control, vacancy, renoviction licensing, and renewals."
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
          title="Software Shaped Around Canadian Real Estate "
          subtitle="For property managers, maintenance teams, landlords, and residents."
        />

        <div className="mb-8 md:hidden">
          <label htmlFor="canada-stakeholder-select" className="sr-only">
            Select stakeholder type
          </label>
          <div className="relative">
            <select
              id="canada-stakeholder-select"
              value={activeStakeholder}
              onChange={(e) => setActiveStakeholder(Number(e.target.value))}
              aria-controls="canada-stakeholder-panel"
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
                id={`canada-stakeholder-tab-${index}`}
                aria-controls="canada-stakeholder-panel"
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
          id="canada-stakeholder-panel"
          role="tabpanel"
          aria-labelledby={`canada-stakeholder-tab-${activeStakeholder}`}
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
              alt={`${active.title} — Canada real estate software`}
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
          title="AI-Native Architecture for Canadian PropTech"
          subtitle="Cloud property management with AI, APIs, and mobile access for Canadian teams."
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
          title="Canada-Ready Compliance & Security"
          subtitle="Provincial rent control, renoviction licensing, screening, and enterprise controls."
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
          title="Why Choose Us for Canada Real Estate"
          subtitle="AI-native PropTech with Canada market depth and North American delivery."
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
          title="How We Work with Canadian Property Managers"
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
          title="Proven Outcomes Across Canadian Real Estate"
          subtitle="Measurable results from AI-native property management."
        />
        <ul className="grid list-none grid-cols-1 gap-4 md:grid-cols-3">
          {caseStudies.map((item, index) => {
            const Icon = item.icon;
            const gradientId = `canada-case-bg-${index}`;
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
            const panelId = `canada-faq-panel-${index}`;
            const buttonId = `canada-faq-button-${index}`;
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

export default CanadaRealEstatePage;
