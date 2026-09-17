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

const UKRealEstatePage = () => {
  const [openFAQ, setOpenFAQ] = useState(null);
  const [activeStakeholder, setActiveStakeholder] = useState(0);
  const { openConsultation } = useConsultation();

  const marketInsights = [
    { value: "USD 768.3 Million", label: "UK real estate software market (2025)" },
    {
      value: "11.1% CAGR",
      label: "Projected growth 2026–2033 to USD 1,779.8 million",
    },
    { value: "£1,321", label: "Average UK rent for new lets (June 2026)" },
    { value: "25% fewer", label: "Rental homes available versus pre-pandemic levels" },
  ];

  const services = [
    {
      icon: Building2,
      title: "Lettings & Property Management",
      description:
        "Leasing CRM and AI lead scoring, with Rightmove and Zoopla listings, digital tenancies, and referencing under the Renters' Rights Act.",
    },
    {
      icon: Wrench,
      title: "Maintenance & Operations",
      description:
        "Smart dispatch, contractor networks, and work orders for residential and build-to-rent portfolios.",
    },
    {
      icon: DollarSign,
      title: "Accounting & Financial Management",
      description:
        "Rent tracking, deposit protection, Making Tax Digital reporting, and owner and tenant portals.",
    },
    {
      icon: ClipboardCheck,
      title: "Compliance & Regulatory Support",
      description:
        "Renters' Rights Act workflows, Section 21 tracking, Section 13 rent increases, and council-ready records.",
    },
    {
      icon: Sparkles,
      title: "AI & Automation",
      description:
        "AI for lettings inquiries, maintenance triage, and renewals, with activity logs for compliance evidence.",
    },
  ];

  const challenges = [
    {
      challenge:
        "Section 21 ended on 1 May 2026. Tenancies became periodic, and Information Sheets were due by 31 May 2026. Fines reach £7,000.",
      solution:
        "Information Sheet distribution, rolling tenancy conversion, Section 8 tracking, and audit-ready records.",
    },
    {
      challenge:
        "Rent can rise once a year, with two months' notice, and must match market rates. Above-asking offers are banned.",
      solution:
        "Rent review scheduling, market-rate guidance, automated notices, and Section 13 workflows.",
    },
    {
      challenge:
        "Making Tax Digital starts April 2026 above £50,000, then £30,000 from April 2027. Only 17% of self-managing landlords felt ready.",
      solution:
        "MTD records, quarterly reporting, and HMRC-compatible exports.",
    },
    {
      challenge:
        "Build-to-rent completions rose 11.7% in Q1 2026. Average BTR rent is £1,546. London is £2,560.",
      solution:
        "Portfolio dashboards, multi-site workflows, and income protection records for BTR operators.",
    },
  ];

  const stakeholders = [
    {
      tab: "Letting Agents",
      title: "Letting Agents",
      icon: Home,
      description:
        "Agencies that need lettings CRM, compliance tracking, and operations in one platform.",
      image: "/pics/Property Management Office.png",
      bullets: [
        "Unified lettings, maintenance, and compliance workflows",
        "Landlord and tenant portals for self-service",
        "Real-time portfolio visibility across branches",
        "Renters' Rights Act compliance automation",
      ],
    },
    {
      tab: "Property Managers",
      title: "Property Managers",
      icon: Wrench,
      description:
        "Operators running residential and build-to-rent portfolios who need maintenance, accounting, and reporting.",
      image: "/pics/Maintenance Operations.png",
      bullets: [
        "Smart maintenance with contractor networks",
        "Work order tracking through resolution",
        "Deposit protection integration",
        "Multi-portfolio reporting and analytics",
      ],
    },
    {
      tab: "Landlords & Investors",
      title: "Landlords & Investors",
      icon: DollarSign,
      description:
        "Landlords and firms tracking Section 24, Making Tax Digital, and compliance.",
      image: "/pics/Investor Dashboard.png",
      bullets: [
        "Portfolio dashboards with compliance visibility",
        "MTD-ready record-keeping and reporting",
        "Documented tenant referencing and right-to-rent checks",
        "Tax-ready financial records",
      ],
    },
    {
      tab: "Tenants",
      title: "Tenants",
      icon: MessageSquare,
      description:
        "Tenants who expect clear messages, faster maintenance, and digital tenancies.",
      image: "/pics/Resident.png",
      bullets: [
        "Digital tenancy agreements and onboarding",
        "Online rent payment options",
        "Maintenance request tracking",
        "Renewal and notice workflows",
      ],
    },
  ];

  const techStack = [
    {
      icon: Brain,
      title: "AI & Automation",
      body: "AI for lettings, maintenance, and tenant messages, saving 40+ hours per user monthly.",
    },
    {
      icon: Cloud,
      title: "Cloud Platform",
      body: "Cloud access for agents, landlords, and tenants across UK regions.",
    },
    {
      icon: Network,
      title: "API Access",
      body: "APIs for tenancies, properties, maintenance, certificates, and finance.",
    },
    {
      icon: Smartphone,
      title: "Mobile-First",
      body: "Mobile access for managers, negotiators, and tenants.",
    },
    {
      icon: BarChart3,
      title: "Data & Analytics",
      body: "Rental growth, compliance status, tenant performance, and efficiency.",
    },
  ];

  const security = [
    {
      icon: Shield,
      title: "Data Security & UK GDPR",
      body: "Tenant and landlord data aligned with UK GDPR and ICO rules.",
    },
    {
      icon: ClipboardCheck,
      title: "Renters' Rights Act Compliance",
      body: "Rolling tenancies, Section 21, Section 13, pet requests, and Information Sheets.",
    },
    {
      icon: FileText,
      title: "Making Tax Digital Readiness",
      body: "Digital records, quarterly reporting, and HMRC-compatible exports.",
    },
    {
      icon: DollarSign,
      title: "Deposit Protection Integration",
      body: "Deposit registration with TDS and other approved schemes.",
    },
    {
      icon: KeyRound,
      title: "Right to Rent & AML Checks",
      body: "ID and AML checks through Keyflo and other approved providers.",
    },
    {
      icon: Database,
      title: "Audit & Activity Logs",
      body: "Logs for AI workflows, court evidence, and council reviews.",
    },
  ];

  const advantages = [
    {
      id: 1,
      title: "AI-Native Innovation",
      description:
        "AI for lettings, maintenance, and tenant messages—saving 40+ hours per user monthly.",
    },
    {
      id: 2,
      title: "Unified Platform Experience",
      description:
        "Lettings, maintenance, accounting, and compliance in one platform.",
    },
    {
      id: 3,
      title: "UK Market Understanding",
      description:
        "Renters' Rights Act, Making Tax Digital, deposit protection, and council enforcement.",
    },
    {
      id: 4,
      title: "Proven Outcomes",
      description:
        "Faster compliance, maintenance, and lettings—trusted by 6,000+ agencies and 25,000 users.",
    },
    {
      id: 5,
      title: "Rapid Onboarding",
      description:
        "Go live in 2 weeks on average—3x faster, with free setup and migration.",
    },
    {
      id: 6,
      title: "Modern Interface & Adoption",
      description:
        "A clear interface letting agents and property managers will actually use.",
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Discovery & Onboarding",
      description:
        "Map portfolio, workflows, and compliance so teams see value within weeks.",
    },
    {
      number: "02",
      title: "Architecture & Configuration",
      description:
        "Set up lettings, maintenance, compliance, portals, and deposit protection.",
    },
    {
      number: "03",
      title: "Implementation & Training",
      description:
        "Data migration, training, and a rollout sized to the agency.",
    },
    {
      number: "04",
      title: "Ongoing Support",
      description:
        "UK-based support as the portfolio grows and rules change.",
    },
  ];

  const caseStudies = [
    {
      metric: "9 → 1",
      title: "One AI-Native Platform",
      description:
        "Nine systems consolidated into one AI-native platform for lettings portfolios.",
      icon: Layers,
    },
    {
      metric: "40+ Hours Saved",
      title: "AI Automation",
      description:
        "AI saves 40+ hours per user monthly, and cuts certificate admin by 80%.",
      icon: Sparkles,
    },
    {
      metric: "2 Weeks",
      title: "Average Go-Live",
      description:
        "Agencies go live in 2 weeks on average—3x faster than traditional onboarding.",
      icon: RefreshCw,
    },
  ];

  const faqs = [
    {
      question: "What does property management software for UK letting agents include?",
      answer:
        "Lettings CRM, digital tenancies, maintenance, certificates, deposit protection, portals, AI, and Renters' Rights Act workflows.",
    },
    {
      question: "How does AI help UK letting agents?",
      answer:
        "AI replies on Rightmove and Zoopla, prioritizes lettings, dispatches maintenance, and logs compliance—saving 40+ hours per user monthly.",
    },
    {
      question: "How does the platform handle Renters' Rights Act compliance?",
      answer:
        "It covers rolling tenancies, Section 21, Section 13 reviews, pet requests, Information Sheets, and council-ready records.",
    },
    {
      question: "Does the platform support Making Tax Digital?",
      answer:
        "Yes. Digital records, quarterly reporting, and HMRC-compatible exports for qualifying income.",
    },
    {
      question: "Can the platform integrate with Rightmove and Zoopla?",
      answer:
        "Yes. Listings connect with Rightmove, Zoopla, and OnTheMarket, plus deposit, referencing, and compliance partners.",
    },
    {
      question: "Does it support deposit protection?",
      answer:
        "Yes. Deposit registration connects with TDS and other government-approved schemes.",
    },
    {
      question: "How long does implementation take?",
      answer:
        "Most mid-market agencies go live in 2 weeks to months. Many see value within weeks.",
    },
    {
      question: "What support is available?",
      answer:
        "UK-based teams, account management, onboarding, training, and ongoing support.",
    },
    {
      question: "Is the platform cloud-based?",
      answer:
        "Yes. Agents, landlords, and tenants can access lettings, maintenance, and compliance from the cloud.",
    },
    {
      question: "Can it support enterprise property managers and BTR operators?",
      answer:
        "Yes. Build-to-rent and institutional teams get lettings, maintenance, accounting, MTD workflows, APIs, and audit logs.",
    },
  ];

  const relatedIndustries = [
    { title: "Real Estate", link: ROUTES.industry.realEstate },
    { title: "US Real Estate", link: ROUTES.industry.usRealEstate },
    { title: "Canada Real Estate", link: ROUTES.industry.canadaRealEstate },
    { title: "Australia Real Estate", link: ROUTES.industry.australiaRealEstate },
    { title: "UAE Real Estate", link: ROUTES.industry.uaeRealEstate },
    { title: "Business CRM", link: ROUTES.industry.businessCrm },
    { title: "Enterprise ERP", link: ROUTES.industry.erp },
    { title: "Field Service CRM", link: ROUTES.industry.fieldServiceCrm },
    { title: "Interior & Architecture", link: ROUTES.industry.interiorArchitecture },
    { title: "Manufacturing", link: ROUTES.industry.manufacturing },
    { title: "Logistics", link: ROUTES.industry.logistics },
  ];

  const active = stakeholders[activeStakeholder];
  const ActiveStakeholderIcon = active.icon;
  const toggleFAQ = (index) => setOpenFAQ(openFAQ === index ? null : index);

  return (
    <div className="min-h-screen bg-black">
      <SEO {...seoData.ukRealEstate} />

      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-black pt-16 md:pt-24 lg:pt-28 2xl:pt-32">
        <div className="pointer-events-none absolute inset-0 opacity-10" aria-hidden="true">
          <div className="absolute top-16 right-16 h-28 w-28 rounded-full bg-blue-500 blur-3xl 2xl:h-40 2xl:w-40" />
          <div className="absolute bottom-40 left-16 h-20 w-20 rounded-full bg-blue-400 blur-2xl" />
        </div>

        <div className="relative container mx-auto max-w-6xl px-4 pb-8 sm:pb-10 md:pb-12 xl:max-w-7xl 2xl:max-w-[90rem] 2xl:px-8 2xl:pb-16">
          <div className="grid items-center gap-6 py-3 sm:gap-8 sm:py-4 lg:min-h-[min(42rem,calc(100svh-12rem))] lg:grid-cols-2 lg:items-center lg:gap-x-12 lg:py-6 xl:min-h-[min(46rem,calc(100svh-13rem))] xl:gap-x-16 2xl:min-h-[min(52rem,calc(100svh-14rem))] 2xl:gap-x-20 2xl:py-10 [@media(max-height:780px)]:gap-5 [@media(max-height:780px)]:py-2">
            <div className="order-1 max-w-xl space-y-4 text-white sm:space-y-5 lg:max-w-none lg:self-center 2xl:space-y-7">
              <p className="inline-flex rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-amber-400 2xl:px-4 2xl:py-1.5 2xl:text-sm">
                UK PropTech
              </p>
              <h1 className="text-2xl leading-tight sm:text-[1.7rem] md:text-4xl xl:text-[2.65rem] 2xl:text-5xl 2xl:leading-[1.15]">
                Technology Partner for UK Real Estate Businesses
              </h1>
              <p className="text-base leading-relaxed text-gray-300 sm:text-lg 2xl:text-xl 2xl:leading-relaxed">
                AI property management for UK letting agents, landlords, and
                property managers—lettings, compliance, maintenance, and tenants
                in one platform.
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
                      Complete UK PropTech Suite
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
                      title: "Lettings",
                      body: "CRM, Rightmove and Zoopla listings, and digital tenancies.",
                      icon: Building,
                      iconClass: "text-amber-400",
                      boxClass: "border-amber-400/25 bg-amber-400/15",
                      topBorder: false,
                    },
                    {
                      title: "Maintenance",
                      body: "Smart dispatch, contractor networks, and work orders.",
                      icon: Wrench,
                      iconClass: "text-blue-400",
                      boxClass: "border-blue-400/25 bg-blue-400/15",
                      topBorder: false,
                    },
                    {
                      title: "Accounting",
                      body: "Rent tracking, deposit protection, and MTD-ready reporting.",
                      icon: DollarSign,
                      iconClass: "text-green-400",
                      boxClass: "border-emerald-400/25 bg-emerald-400/15",
                      topBorder: true,
                    },
                    {
                      title: "Compliance",
                      body: "Renters' Rights Act, Section 21, and Section 13 workflows.",
                      icon: ClipboardCheck,
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
                          card.topBorder ? "border-white/10 min-[520px]:border-t" : ""
                        }`}
                      >
                        <div className="flex items-start gap-2.5 sm:gap-3 2xl:gap-4">
                          <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border sm:h-9 sm:w-9 lg:h-10 lg:w-10 2xl:h-12 2xl:w-12 ${card.boxClass}`}>
                            <Icon className={`h-4 w-4 sm:h-5 sm:w-5 2xl:h-6 2xl:w-6 ${card.iconClass}`} />
                          </div>
                          <div className="min-w-0">
                            <p className="mb-1 text-sm font-normal text-white 2xl:text-base">{card.title}</p>
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
              title="Why UK Real Estate Needs Modern Technology"
              subtitle="The Renters' Rights Act 2025 is in force, and Making Tax Digital is next. Supply is 20-30% below pre-pandemic levels, so compliance and efficiency now decide who keeps up."
            />
            <ul className="grid list-none grid-cols-1 gap-3 sm:grid-cols-2">
              {marketInsights.map((item) => (
                <li key={item.label} className="rounded-xl border border-white/10 bg-black/30 p-4">
                  <TrendingUp className="mb-3 h-4 w-4 text-amber-400" />
                  <p className="text-lg text-white">{item.value}</p>
                  <p className="mt-1 text-xs leading-relaxed text-gray-200">{item.label}</p>
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
          title="Services Built for UK Property Operations"
          subtitle="Lettings, maintenance, Making Tax Digital, and Renters' Rights Act compliance for UK agencies."
        />
        <ul className="grid list-none grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <li key={service.title} className="rounded-xl border border-white/10 bg-gray-950 p-5">
                <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg bg-amber-400/15">
                  <Icon className="h-4 w-4 text-amber-400" />
                </div>
                <h3 className="mb-2 text-sm font-semibold leading-snug text-white md:text-[15px]">{service.title}</h3>
                <p className="text-xs leading-relaxed text-gray-300 md:text-sm">{service.description}</p>
              </li>
            );
          })}
        </ul>
      </Shell>

      <Shell labelledBy="challenges-heading" alt>
        <Heading
          id="challenges-heading"
          eyebrow="Solutions"
          title="Practical Solutions for UK Real Estate Challenges"
          subtitle="Section 21, rent reviews, Making Tax Digital, and build-to-rent operations."
        />
        <ul className="grid list-none grid-cols-1 gap-4 md:grid-cols-2">
          {challenges.map((item, index) => (
            <li key={item.challenge} className="rounded-xl border border-white/10 bg-black/30 p-5 md:p-6">
              <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-amber-400 md:text-xs">
                Challenge {String(index + 1).padStart(2, "0")}
              </p>
              <p className="mb-4 text-sm leading-relaxed text-white md:text-[15px]">{item.challenge}</p>
              <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-gray-400 md:text-xs">Our Solution</p>
              <p className="text-sm leading-relaxed text-gray-300 md:text-[15px]">{item.solution}</p>
            </li>
          ))}
        </ul>
      </Shell>

      <Shell labelledBy="stakeholders-heading">
        <Heading
          id="stakeholders-heading"
          eyebrow="Use Cases"
          title="Software Shaped Around UK Real Estate Roles"
          subtitle="Letting agents, property managers, landlords, investors, and tenants."
        />
        <div className="mb-8 md:hidden">
          <label htmlFor="uk-stakeholder-select" className="sr-only">Select stakeholder type</label>
          <div className="relative">
            <select
              id="uk-stakeholder-select"
              value={activeStakeholder}
              onChange={(e) => setActiveStakeholder(Number(e.target.value))}
              aria-controls="uk-stakeholder-panel"
              className="w-full appearance-none rounded-xl border border-amber-400/40 bg-black/40 px-4 py-3 pr-11 text-sm text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400"
            >
              {stakeholders.map((item, index) => (
                <option key={item.tab} value={index} className="bg-gray-950 text-white">{item.tab}</option>
              ))}
            </select>
            <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-amber-400" aria-hidden="true" />
          </div>
        </div>
        <div role="tablist" aria-label="Stakeholder types" className="mb-8 hidden flex-wrap justify-center gap-2 md:flex">
          {stakeholders.map((item, index) => {
            const selected = activeStakeholder === index;
            return (
              <button
                key={item.tab}
                type="button"
                role="tab"
                aria-selected={selected}
                id={`uk-stakeholder-tab-${index}`}
                aria-controls="uk-stakeholder-panel"
                onClick={() => setActiveStakeholder(index)}
                className={`shrink-0 rounded-full px-4 py-2 text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400 2xl:px-5 2xl:py-2.5 2xl:text-base ${
                  selected ? "bg-amber-400 text-black" : "border border-white/15 bg-black/20 text-gray-200 hover:border-white/30"
                }`}
              >
                {item.tab}
              </button>
            );
          })}
        </div>
        <div
          id="uk-stakeholder-panel"
          role="tabpanel"
          aria-labelledby={`uk-stakeholder-tab-${activeStakeholder}`}
          className="grid items-stretch gap-8 rounded-2xl border border-white/10 bg-black/25 p-6 md:p-8 lg:grid-cols-2 2xl:gap-10 2xl:p-10"
        >
          <div>
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-amber-400/15 2xl:h-11 2xl:w-11">
              <ActiveStakeholderIcon className="h-5 w-5 text-amber-400 2xl:h-6 2xl:w-6" />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-white 2xl:text-2xl">{active.title}</h3>
            <p className="mb-5 text-sm leading-relaxed text-gray-300 2xl:text-base">{active.description}</p>
            <ul className="space-y-2.5 2xl:space-y-3">
              {active.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-2 text-sm text-gray-200 2xl:text-base">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400" aria-hidden="true" />
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden min-h-[220px] overflow-hidden rounded-xl border border-white/10 lg:block 2xl:min-h-[260px]">
            <img
              key={active.image}
              src={active.image}
              alt={`${active.title} — UK real estate software`}
              className="h-full min-h-[220px] w-full object-cover 2xl:min-h-[260px]"
            />
          </div>
        </div>
      </Shell>

      <Shell labelledBy="tech-heading" alt>
        <Heading
          id="tech-heading"
          eyebrow="Capabilities"
          title="AI-Native Architecture for UK Proptech"
          subtitle="Cloud property management with AI, APIs, and mobile access for UK agencies."
        />
        <ul className="grid list-none grid-cols-2 gap-3 md:grid-cols-5">
          {techStack.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.title} className="rounded-xl border border-white/10 bg-black/30 p-4 text-center md:p-5">
                <Icon className="mx-auto mb-3 h-5 w-5 text-amber-400 md:h-6 md:w-6" />
                <h3 className="text-sm font-medium text-white md:text-[15px] 2xl:text-base">{item.title}</h3>
                <p className="mt-2 hidden text-xs leading-relaxed text-gray-200 md:block md:text-sm">{item.body}</p>
              </li>
            );
          })}
        </ul>
      </Shell>

      <Shell labelledBy="compliance-heading">
        <Heading
          id="compliance-heading"
          eyebrow="Compliance"
          title="UK-Ready Compliance & Security"
          subtitle="UK GDPR, Renters' Rights Act, Making Tax Digital, deposit protection, and Right to Rent."
        />
        <ul className="grid list-none grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {security.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.title} className="rounded-xl border border-white/10 bg-gray-950 p-5 md:p-6">
                <Icon className="mb-3 h-4 w-4 text-amber-400 md:h-5 md:w-5" />
                <h3 className="mb-1 text-sm font-semibold text-white md:text-[15px] 2xl:text-base">{item.title}</h3>
                <p className="text-xs leading-relaxed text-gray-200 md:text-sm">{item.body}</p>
              </li>
            );
          })}
        </ul>
      </Shell>

      <Shell labelledBy="why-heading" alt>
        <Heading
          id="why-heading"
          eyebrow="Why Ascentia Labs"
          title="Why Choose Us for UK Real Estate"
          subtitle="AI-native PropTech with UK lettings depth and UK-based delivery."
        />
        <ul className="grid list-none grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {advantages.map((item) => (
            <li key={item.id}>
              <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-amber-400 md:text-xs">
                {String(item.id).padStart(2, "0")}
              </p>
              <h3 className="mb-2 text-base font-semibold text-white md:text-lg 2xl:text-xl">{item.title}</h3>
              <p className="text-sm leading-relaxed text-gray-200 md:text-[15px] 2xl:text-base">{item.description}</p>
            </li>
          ))}
        </ul>
      </Shell>

      <Shell labelledBy="process-heading">
        <Heading
          id="process-heading"
          eyebrow="Delivery"
          title="How We Work with UK Letting Agents"
          subtitle="Four clear phases from discovery to ongoing support."
        />
        <ol className="relative space-y-8 border-l border-white/15 pl-8 ml-2 md:hidden">
          {processSteps.map((step) => (
            <li key={step.number}>
              <span className="absolute -left-[13px] flex h-6 w-6 items-center justify-center rounded-full bg-amber-400 text-[10px] font-bold text-black">
                {step.number.slice(-1)}
              </span>
              <h3 className="text-sm font-semibold text-white">{step.title}</h3>
              {/* <p className="mt-1 text-xs leading-relaxed text-gray-400">{step.description}</p> */}
            </li>
          ))}
        </ol>
        <div className="relative hidden md:block">
          <div className="absolute left-[8%] right-[8%] top-5 h-px bg-white/15" aria-hidden="true" />
          <ol className="relative grid list-none grid-cols-4 gap-4">
            {processSteps.map((step, index) => (
              <li key={step.number} className="px-2 text-center">
                <div className={`relative z-10 mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full text-xs font-bold md:h-11 md:w-11 md:text-sm 2xl:h-12 2xl:w-12 ${index === 0 ? "bg-amber-400 text-black" : "border border-white/20 bg-black text-white"}`}>
                  {step.number}
                </div>
                <h3 className="mb-1.5 text-sm font-semibold text-white md:text-[15px] 2xl:text-base">{step.title}</h3>
                {/* <p className="text-xs leading-relaxed text-gray-400 md:text-sm">{step.description}</p> */}
              </li>
            ))}
          </ol>
        </div>
      </Shell>

      <Shell labelledBy="impact-heading" alt>
        <Heading
          id="impact-heading"
          eyebrow="Results"
          title="Proven Outcomes Across UK Real Estate"
          subtitle="Consolidated platforms, hours saved, and faster agency go-live."
        />
        <ul className="grid list-none grid-cols-1 gap-4 md:grid-cols-3">
          {caseStudies.map((item, index) => {
            const Icon = item.icon;
            const gradientId = `uk-case-bg-${index}`;
            return (
              <li key={item.title} className="overflow-hidden rounded-xl border border-white/10 bg-black/30">
                <div className="relative flex h-24 items-center justify-center overflow-hidden md:h-28">
                  <svg className="absolute inset-0 h-full w-full" viewBox="0 0 400 160" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
                    <defs>
                      <linearGradient id={gradientId} x1="0" y1="0" x2="400" y2="160" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#172554" />
                        <stop offset="0.55" stopColor="#111827" />
                        <stop offset="1" stopColor="#000000" />
                      </linearGradient>
                    </defs>
                    <rect width="400" height="160" fill={`url(#${gradientId})`} />
                    <circle cx="320" cy="20" r="70" fill="#F59E0B" fillOpacity="0.08" />
                    <circle cx="60" cy="140" r="50" fill="#3B82F6" fillOpacity="0.1" />
                  </svg>
                  <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-xl border border-amber-400/30 bg-amber-400/10 backdrop-blur-sm">
                    <Icon className="h-6 w-6 text-amber-400" />
                  </div>
                </div>
                <div className="p-5 md:p-6">
                  <p className="mb-2 text-2xl font-semibold text-amber-400 md:text-3xl">{item.metric}</p>
                  <h3 className="mb-2 text-sm font-semibold text-white md:text-[15px] 2xl:text-base">{item.title}</h3>
                  <p className="text-xs leading-relaxed text-gray-200 md:text-sm">{item.description}</p>
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
            const panelId = `uk-faq-panel-${index}`;
            const buttonId = `uk-faq-button-${index}`;
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
                  <h3 className="pr-2 text-sm font-medium text-white md:text-base 2xl:text-lg">{faq.question}</h3>
                  <span className="shrink-0 text-amber-400" aria-hidden="true">
                    {open ? <ChevronUp className="h-4 w-4 md:h-5 md:w-5" /> : <ChevronDown className="h-4 w-4 md:h-5 md:w-5" />}
                  </span>
                </button>
                <div id={panelId} role="region" aria-labelledby={buttonId} hidden={!open} className={open ? "pb-4 md:pb-5" : ""}>
                  {open && <p className="text-sm leading-relaxed text-gray-400 md:text-[15px] 2xl:text-base">{faq.answer}</p>}
                </div>
              </div>
            );
          })}
        </div>
      </Shell>

      <Shell labelledBy="cta-heading" alt>
        <Heading
          id="cta-heading"
          title="Discuss Your UK Real Estate Project"
          subtitle="Book a consultation on lettings, compliance, and operations across UK markets."
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

      <section className="bg-black py-10 md:py-12" aria-labelledby="related-industries-heading">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 id="related-industries-heading" className="mb-5 text-sm font-semibold uppercase tracking-[0.14em] text-gray-400 md:text-base">
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

export default UKRealEstatePage;
