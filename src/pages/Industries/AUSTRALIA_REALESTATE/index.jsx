import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ChevronDown,
  ChevronUp,
  Shield,
  BarChart3,
  Building2,
  Building,
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

const AustraliaRealEstatePage = () => {
  const [openFAQ, setOpenFAQ] = useState(null);
  const [activeStakeholder, setActiveStakeholder] = useState(0);
  const { openConsultation } = useConsultation();

  const marketInsights = [
    { value: "1.3%", label: "National residential vacancy rate (August 2026)" },
    { value: "0.6%", label: "Vacancy rate in Perth and Adelaide" },
    { value: "2.1%", label: "Canberra's vacancy rate" },
    { value: "8.7%", label: "Increase in national vacancies year-on-year" },
  ];

  const services = [
    {
      icon: Building2,
      title: "Property Management & Leasing",
      description:
        "Leasing CRM and AI lead scoring, with listings on realestate.com.au and Domain.com.au, digital leases, and screening under state Residential Tenancy Acts.",
    },
    {
      icon: Wrench,
      title: "Maintenance & Operations",
      description:
        "Smart dispatch, vendor networks, and work orders for residential and commercial portfolios across Australian capital cities.",
    },
    {
      icon: DollarSign,
      title: "Accounting & Financial Management",
      description:
        "Bill approvals, GST on commercial rent, owner and resident portals, and ATO-aligned reporting.",
    },
    {
      icon: Sparkles,
      title: "AI & Automation",
      description:
        "AI for leasing inquiries, maintenance triage, and renewals, with activity logs for audit readiness.",
    },
    {
      icon: MessageSquare,
      title: "Resident Experience",
      description:
        "Digital onboarding, rent reminders, renewals, and self-service portals for tenants across states and territories.",
    },
  ];

  const challenges = [
    {
      challenge:
        "Perth, Adelaide, Brisbane, and Darwin are tight. Sydney and Canberra are looser. Canberra vacancy is 2.1%, up 29% year-on-year.",
      solution:
        "City-level pricing, vacancy tracking, and lead prioritization for local supply and demand.",
    },
    {
      challenge:
        "Tenancy rules differ by state, from minimum standards to ending no-grounds evictions. Western Australia is moving to a CPI-indexed rent cap.",
      solution:
        "State compliance workflows, rent-increase tracking, and documentation for every state and territory.",
    },
    {
      challenge:
        "From 1 July 2027, losses on established homes bought after 12 May 2026 are quarantined under the 2026 Budget negative gearing changes.",
      solution:
        "Acquisition-date tracking, quarantined-loss workflows, and depreciation records.",
    },
    {
      challenge:
        "Bond rules differ by state—from 4 weeks' rent in NSW to unlimited bonds on higher-rent homes in Victoria.",
      solution:
        "State bond calculations, deposit tracking, and Residential Tenancy Act checks.",
    },
  ];

  const stakeholders = [
    {
      tab: "Property Managers",
      title: "Property Managers",
      icon: Home,
      description:
        "Operators who need leasing, maintenance, accounting, and resident experience in one platform.",
      image: "/pics/Property Management Office.png",
      bullets: [
        "Unified leasing, maintenance, and accounting workflows",
        "Owner and resident portals for self-service",
        "Real-time occupancy and portfolio visibility",
        "Cloud access across properties and states",
      ],
    },
    {
      tab: "Maintenance",
      title: "Maintenance Teams",
      icon: Wrench,
      description:
        "Teams coordinating vendors, work orders, and facilities across residential and commercial buildings.",
      image: "/pics/Maintenance Operations.png",
      bullets: [
        "Smart maintenance with vendor network coverage",
        "Purchase order and approval routing",
        "Work order tracking through resolution",
        "Mobile-first field team access",
      ],
    },
    {
      tab: "Landlords & Investors",
      title: "Landlords & Investors",
      icon: DollarSign,
      description:
        "Landlords and firms tracking negative gearing changes and state tenancy rules.",
      image: "/pics/Investor Dashboard.png",
      bullets: [
        "Portfolio dashboards with state-level performance visibility",
        "Negative gearing quarantine tracking for impacted properties",
        "Documented tenant screening workflows",
        "Depreciation record management",
      ],
    },
    {
      tab: "Residents",
      title: "Residents",
      icon: MessageSquare,
      description:
        "Tenants who expect digital onboarding, payments, and faster maintenance.",
      image: "/pics/Resident.png",
      bullets: [
        "Digital lease agreements and onboarding",
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
      body: "AI for leasing, maintenance, and resident messages across Australia's major portals.",
    },
    {
      icon: Cloud,
      title: "Cloud Platform",
      body: "Cloud property management for managers and residents across Australian time zones.",
    },
    {
      icon: Network,
      title: "API Access",
      body: "APIs for units, tenants, leases, maintenance, owners, and finance.",
    },
    {
      icon: Smartphone,
      title: "Mobile-First",
      body: "Mobile access for managers, field staff, and residents.",
    },
    {
      icon: BarChart3,
      title: "Data & Analytics",
      body: "Occupancy, capital-city vacancy, leads, renewals, and portfolio performance.",
    },
  ];

  const integrations = [
    { title: "realestate.com.au", href: "https://www.realestate.com.au" },
    { title: "Domain.com.au", href: "https://www.domain.com.au" },
    { title: "Rent.com.au", href: "https://www.rent.com.au" },
    { title: "Homely.com.au", href: "https://www.homely.com.au" },
    {
      title: "InspectRealEstate.com.au",
      href: "https://www.inspectrealestate.com.au",
    },
    { title: "Custom APIs" },
  ];

  const security = [
    {
      icon: Shield,
      title: "Data Security & Privacy",
      body: "Property, resident, and investor data aligned with Australian Privacy Principles.",
    },
    {
      icon: ClipboardCheck,
      title: "State Tenancy Compliance",
      body: "Residential Tenancy Act workflows for standards, terminations, and repairs.",
    },
    {
      icon: FileText,
      title: "Rent Increase Regulation Support",
      body: "Rent-increase limits, including Western Australia's proposed CPI-indexed cap.",
    },
    {
      icon: DollarSign,
      title: "GST on Commercial Rent",
      body: "GST, input tax credits, and BAS-ready reporting aligned with ATO rules.",
    },
    {
      icon: KeyRound,
      title: "Negative Gearing Transition Support",
      body: "Acquisition dates, quarantined losses, and depreciation for the 2026 Budget changes.",
    },
    {
      icon: Database,
      title: "Audit & Activity Logs",
      body: "Logs for AI workflows, approvals, and compliance reviews.",
    },
  ];

  const advantages = [
    {
      id: 1,
      title: "AI-Native Innovation",
      description:
        "AI agents for leasing, maintenance, and resident communications—not a generic CRM.",
    },
    {
      id: 2,
      title: "Unified Platform Experience",
      description:
        "Leasing, maintenance, accounting, and resident data in one platform.",
    },
    {
      id: 3,
      title: "Australia Market Understanding",
      description:
        "State tenancy law, negative gearing, GST on commercial rent, and portal integrations.",
    },
    {
      id: 4,
      title: "Proven Outcomes",
      description:
        "Faster vacancy fill, maintenance resolution, and renewals.",
    },
    {
      id: 5,
      title: "Global Delivery Capability",
      description:
        "Australian timezone support, account teams, remote rollout, and training.",
    },
    {
      id: 6,
      title: "Modern Interface & Adoption",
      description:
        "A clear interface mid-market and enterprise teams will actually use.",
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Discovery & Onboarding",
      description:
        "Map portfolio, workflows, and state compliance so teams see value quickly.",
    },
    {
      number: "02",
      title: "Architecture & Configuration",
      description:
        "Set up leasing, maintenance, accounting, tenancy workflows, and portal integrations.",
    },
    {
      number: "03",
      title: "Implementation & Training",
      description:
        "Data migration, training, and a rollout sized to the portfolio.",
    },
    {
      number: "04",
      title: "Ongoing Support",
      description:
        "Support and ongoing improvement as the portfolio grows.",
    },
  ];

  const caseStudies = [
    {
      metric: "9 → 1",
      title: "One AI-Native Platform",
      description:
        "Nine systems consolidated into one AI-native platform for residential and commercial portfolios.",
      icon: Layers,
    },
    {
      metric: "180+ Units",
      title: "Streamlined Maintenance",
      description:
        "A 180+ unit firm streamlined maintenance with a vendor network and resolution tracking.",
      icon: Wrench,
    },
    {
      metric: "1.2 Days",
      title: "Faster Unit Turns",
      description:
        "Automated turns cut average turn time by 1.2 days, with faster vacancy fill and higher renewals.",
      icon: RefreshCw,
    },
  ];

  const faqs = [
    {
      question:
        "What does property management software for Australian operators include?",
      answer:
        "Leasing CRM, digital leases, maintenance, accounting, owner and resident portals, AI communications, state tenancy support, and bond tracking.",
    },
    {
      question: "How does AI help Australian property managers?",
      answer:
        "AI replies on realestate.com.au and Domain.com.au, prioritizes leads, dispatches maintenance, and logs renewals so vacancies fill faster.",
    },
    {
      question:
        "Can the platform integrate with realestate.com.au and Domain.com.au?",
      answer:
        "Yes. Listings and tours connect with realestate.com.au, Domain.com.au, Rent.com.au, Homely.com.au, and InspectRealEstate.com.au.",
    },
    {
      question: "Does the platform support maintenance management?",
      answer:
        "Yes. Vendor networks, purchase orders, and work orders cover request to resolution for residential and commercial buildings.",
    },
    {
      question:
        "How does the platform handle negative gearing changes from the 2026 Budget?",
      answer:
        "It tracks acquisition dates, quarantined losses for homes bought after 12 May 2026, and depreciation records for the 1 July 2027 start.",
    },
    {
      question: "Does it support GST on commercial rent?",
      answer:
        "Yes. Commercial rent tracking includes GST, input tax credits, and BAS-ready reporting aligned with ATO rules.",
    },
    {
      question: "Can it integrate with existing systems?",
      answer:
        "Yes. APIs cover units, tenants, leases, maintenance, owners, and finance, plus listing and payment integrations.",
    },
    {
      question: "How long does implementation take?",
      answer:
        "Most mid-market rollouts take weeks to months. Many teams see value within weeks.",
    },
    {
      question: "What support is available?",
      answer:
        "Australian timezone coverage, account teams, remote rollout, training, and ongoing support.",
    },
    {
      question: "Is the platform cloud-based?",
      answer:
        "Yes. Managers and residents can access leasing, maintenance, and communications from the cloud.",
    },
    {
      question: "Can it support enterprise property managers?",
      answer:
        "Yes. REITs and institutional investors get leasing, maintenance, accounting, negative gearing workflows, APIs, and audit logs.",
    },
  ];

  const relatedIndustries = [
    { title: "Real Estate", link: ROUTES.industry.realEstate },
    { title: "US Real Estate", link: ROUTES.industry.usRealEstate },
    { title: "Canada Real Estate", link: ROUTES.industry.canadaRealEstate },
    { title: "UAE Real Estate", link: ROUTES.industry.uaeRealEstate },
    { title: "Business CRM", link: ROUTES.industry.businessCrm },
    { title: "Enterprise ERP", link: ROUTES.industry.erp },
    { title: "Field Service CRM", link: ROUTES.industry.fieldServiceCrm },
    {
      title: "Interior & Architecture",
      link: ROUTES.industry.interiorArchitecture,
    },
    { title: "Manufacturing", link: ROUTES.industry.manufacturing },
    { title: "Logistics", link: ROUTES.industry.logistics },
  ];

  const active = stakeholders[activeStakeholder];
  const ActiveStakeholderIcon = active.icon;

  const toggleFAQ = (index) => setOpenFAQ(openFAQ === index ? null : index);

  return (
    <div className="min-h-screen bg-black">
      <SEO {...seoData.australiaRealEstate} />

      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-black pt-16 md:pt-24 lg:pt-28 2xl:pt-32">
        <div
          className="pointer-events-none absolute inset-0 opacity-10"
          aria-hidden="true"
        >
          <div className="absolute top-16 right-16 h-28 w-28 rounded-full bg-blue-500 blur-3xl 2xl:h-40 2xl:w-40" />
          <div className="absolute bottom-40 left-16 h-20 w-20 rounded-full bg-blue-400 blur-2xl" />
        </div>

        <div className="relative container mx-auto max-w-6xl px-4 pb-8 sm:pb-10 md:pb-12 xl:max-w-7xl 2xl:max-w-[90rem] 2xl:px-8 2xl:pb-16">
          <div className="grid items-center gap-6 py-3 sm:gap-8 sm:py-4 lg:min-h-[min(42rem,calc(100svh-12rem))] lg:grid-cols-2 lg:items-center lg:gap-x-12 lg:py-6 xl:min-h-[min(46rem,calc(100svh-13rem))] xl:gap-x-16 2xl:min-h-[min(52rem,calc(100svh-14rem))] 2xl:gap-x-20 2xl:py-10 [@media(max-height:780px)]:gap-5 [@media(max-height:780px)]:py-2">
            <div className="order-1 max-w-xl space-y-4 text-white sm:space-y-5 lg:max-w-none lg:self-center 2xl:space-y-7">
              <p className="inline-flex rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-amber-400 2xl:px-4 2xl:py-1.5 2xl:text-sm">
                Australia PropTech
              </p>
              <h1 className="text-2xl leading-tight sm:text-[1.7rem] md:text-4xl xl:text-[2.65rem] 2xl:text-5xl 2xl:leading-[1.15]">
                Technology Partner for Australia Real Estate Businesses
              </h1>
              <p className="text-base leading-relaxed text-gray-300 sm:text-lg 2xl:text-xl 2xl:leading-relaxed">
                AI property management for Australian managers, landlords, and
                investors—leasing, maintenance, accounting platform.
              </p>
              <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:pt-0 2xl:gap-4 2xl:pt-2">
                <button
                  type="button"
                  onClick={openConsultation}
                  className="rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 px-5 py-2.5 text-sm text-black shadow-lg transition-all duration-300 hover:scale-105 hover:from-amber-500 hover:to-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400 sm:px-6 sm:py-3 sm:text-base 2xl:px-8 2xl:py-3.5 2xl:text-lg"
                >
                  Schedule a Consultation →
                </button>
                <a
                  href="#capabilities"
                  className="rounded-xl border border-white/30 px-5 py-2.5 text-center text-sm text-white transition-all duration-300 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:px-6 sm:py-3 sm:text-base 2xl:px-8 2xl:py-3.5 2xl:text-lg"
                >
                  Explore Capabilities
                </a>
              </div>
            </div>

            <div className="relative order-2 w-full lg:self-center">
              <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-black/30 shadow-2xl backdrop-blur-md 2xl:rounded-3xl">
                <div className="flex items-center justify-between gap-3 border-b border-white/10 bg-white/[0.04] px-4 py-3 sm:px-5 sm:py-3.5 2xl:px-6 2xl:py-4">
                  <div className="flex min-w-0 items-center gap-2.5">
                    <Building2 className="h-4 w-4 shrink-0 text-amber-400 sm:h-5 sm:w-5 2xl:h-6 2xl:w-6" />
                    <p className="truncate text-sm font-normal text-white sm:text-base 2xl:text-lg">
                      Complete Australia PropTech Suite
                    </p>
                  </div>
                  <div className="flex shrink-0 items-center gap-1.5" aria-hidden="true">
                    <span className="h-2 w-2 rounded-full bg-emerald-400/80" />
                    <span className="text-[11px] font-light uppercase tracking-wider text-gray-400 2xl:text-xs">
                      Live
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 divide-y divide-white/10 min-[520px]:grid-cols-2 min-[520px]:divide-x min-[520px]:divide-y-0">
                  {[
                    {
                      title: "Property Management",
                      body: "Leasing CRM, portal listings, and digital leases.",
                      icon: Building,
                      iconClass: "text-amber-400",
                      boxClass: "border-amber-400/25 bg-amber-400/15",
                      topBorder: false,
                    },
                    {
                      title: "Maintenance",
                      body: "Smart dispatch, vendor networks, and work orders.",
                      icon: Wrench,
                      iconClass: "text-blue-400",
                      boxClass: "border-blue-400/25 bg-blue-400/15",
                      topBorder: false,
                    },
                    {
                      title: "Accounting",
                      body: "GST tracking, owner portals, and ATO reporting.",
                      icon: DollarSign,
                      iconClass: "text-green-400",
                      boxClass: "border-emerald-400/25 bg-emerald-400/15",
                      topBorder: true,
                    },
                    {
                      title: "Resident Experience",
                      body: "Digital onboarding, payments, and renewals.",
                      icon: MessageSquare,
                      iconClass: "text-purple-400",
                      boxClass: "border-violet-400/25 bg-violet-400/15",
                      topBorder: true,
                    },
                  ].map((card) => {
                    const Icon = card.icon;
                    return (
                      <div
                        key={card.title}
                        className={`p-3.5 transition-colors duration-300 hover:bg-white/[0.04] sm:p-4 lg:p-5 2xl:p-6 [@media(max-height:780px)]:p-3 ${
                          card.topBorder
                            ? "border-white/10 min-[520px]:border-t"
                            : ""
                        }`}
                      >
                        <div className="flex items-start gap-2.5 sm:gap-3 2xl:gap-4">
                          <div
                            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border sm:h-9 sm:w-9 lg:h-10 lg:w-10 2xl:h-12 2xl:w-12 ${card.boxClass}`}
                          >
                            <Icon className={`h-4 w-4 sm:h-5 sm:w-5 2xl:h-6 2xl:w-6 ${card.iconClass}`} />
                          </div>
                          <div className="min-w-0">
                            <p className="mb-1 text-sm font-normal text-white 2xl:text-base">
                              {card.title}
                            </p>
                            <p className="text-xs font-light leading-snug text-gray-300 sm:text-sm sm:leading-relaxed 2xl:text-base">
                              {card.body}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="relative container mx-auto max-w-6xl px-4 pb-10 sm:pb-12 md:pb-14 xl:max-w-7xl 2xl:max-w-[90rem] 2xl:px-8 2xl:pb-20"
          aria-labelledby="market-heading"
        >
          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
            <Heading
              id="market-heading"
              align="left"
              eyebrow="Market Context"
              title="Why Australia Real Estate Needs Modern Technology"
              subtitle="Australia's vacancy rate is 1.3% (August 2026). Perth and Adelaide are at 0.6%. Rent caps and the end of no-grounds evictions are changing how managers operate."
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

      <Shell labelledBy="capabilities">
        <Heading
          id="capabilities"
          eyebrow="Services"
          title="Services Built for Australian Property Operations"
          subtitle="Property management, leasing, maintenance, GST, and resident experience for Australian portfolios."
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

      <Shell labelledBy="challenges-heading" alt>
        <Heading
          id="challenges-heading"
          eyebrow="Solutions"
          title="Practical Solutions for Australian Real Estate Challenges"
          subtitle="City vacancy gaps, state tenancy law, bonds, and the 2026 negative gearing transition."
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

      <Shell labelledBy="stakeholders-heading">
        <Heading
          id="stakeholders-heading"
          eyebrow="Use Cases"
          title="Software Shaped Around Australian Real Estate Roles"
          subtitle="Property managers, maintenance teams, landlords, investors, and residents."
        />

        <div className="mb-8 md:hidden">
          <label htmlFor="au-stakeholder-select" className="sr-only">
            Select stakeholder type
          </label>
          <div className="relative">
            <select
              id="au-stakeholder-select"
              value={activeStakeholder}
              onChange={(e) => setActiveStakeholder(Number(e.target.value))}
              aria-controls="au-stakeholder-panel"
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
                id={`au-stakeholder-tab-${index}`}
                aria-controls="au-stakeholder-panel"
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
          id="au-stakeholder-panel"
          role="tabpanel"
          aria-labelledby={`au-stakeholder-tab-${activeStakeholder}`}
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
              alt={`${active.title} — Australia real estate software`}
              className="h-full min-h-[220px] w-full object-cover 2xl:min-h-[260px]"
            />
          </div>
        </div>
      </Shell>

      <Shell labelledBy="tech-heading" alt>
        <Heading
          id="tech-heading"
          eyebrow="Capabilities"
          title="AI-Native Architecture for Australian Proptech"
          subtitle="Cloud property management with AI, APIs, and mobile access for Australian teams."
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
          Integrations Ecosystem
        </p>
        <ul className="flex list-none flex-wrap justify-center gap-2">
          {integrations.map((item) => (
            <li key={item.title}>
              {item.href ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex rounded-full border border-white/10 px-3 py-1.5 text-xs text-gray-200 transition-colors hover:border-amber-400/40 hover:text-amber-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400 md:px-3.5 md:py-2 md:text-[15px]"
                >
                  {item.title}
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              ) : (
                <span className="inline-flex rounded-full border border-white/10 px-3 py-1.5 text-xs text-gray-200 md:px-3.5 md:py-2 md:text-[15px]">
                  {item.title}
                </span>
              )}
            </li>
          ))}
        </ul>
      </Shell>

      <Shell labelledBy="compliance-heading">
        <Heading
          id="compliance-heading"
          eyebrow="Compliance"
          title="Australia-Ready Compliance & Security"
          subtitle="Australian Privacy Principles, state tenancy rules, GST, and negative gearing transition support."
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

      <Shell labelledBy="why-heading" alt>
        <Heading
          id="why-heading"
          eyebrow="Why Ascentia Labs"
          title="Why Choose Us for Australia Real Estate"
          subtitle="AI-native PropTech with Australia market depth and timezone-aligned delivery."
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

      <Shell labelledBy="process-heading">
        <Heading
          id="process-heading"
          eyebrow="Delivery"
          title="How We Work with Australian Property Managers"
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

      <Shell labelledBy="impact-heading" alt>
        <Heading
          id="impact-heading"
          eyebrow="Results"
          title="Proven Outcomes Across Australian Real Estate"
          subtitle="Consolidated platforms, faster maintenance, and shorter unit turns."
        />
        <ul className="grid list-none grid-cols-1 gap-4 md:grid-cols-3">
          {caseStudies.map((item, index) => {
            const Icon = item.icon;
            const gradientId = `au-case-bg-${index}`;
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

      <Shell labelledBy="faq-heading">
        <Heading id="faq-heading" title="Common Questions" />
        <div className="mx-auto max-w-3xl divide-y divide-white/10 border-y border-white/10">
          {faqs.map((faq, index) => {
            const open = openFAQ === index;
            const panelId = `au-faq-panel-${index}`;
            const buttonId = `au-faq-button-${index}`;
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

      <Shell labelledBy="cta-heading" alt>
        <Heading
          id="cta-heading"
          title="Discuss Your Australia Real Estate Project"
          subtitle="Book a consultation on leasing, maintenance, and compliance across Australian markets."
        />
        <div className="flex justify-center">
          <button
            type="button"
            onClick={openConsultation}
            className="rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 px-6 py-3 text-sm text-black shadow-lg transition-all duration-300 hover:scale-105 hover:from-amber-500 hover:to-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400 sm:text-base 2xl:px-8 2xl:py-3.5 2xl:text-lg"
          >
            Schedule a Consultation →
          </button>
        </div>
      </Shell>

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

export default AustraliaRealEstatePage;
