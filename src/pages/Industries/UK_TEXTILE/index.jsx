import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ChevronDown,
  ChevronUp,
  Shield,
  BarChart3,
  Shirt,
  Factory,
  Boxes,
  Warehouse,
  ClipboardCheck,
  Globe,
  Wrench,
  Brain,
  Cloud,
  Network,
  Smartphone,
  FileText,
  Database,
  Layers,
  Package,
  TrendingUp,
  ArrowRight,
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
    className={`relative overflow-hidden py-12 md:py-14 lg:py-16 ${alt
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
    className={`mb-8 md:mb-10 ${align === "left" ? "max-w-xl text-left" : "mx-auto max-w-5xl text-center"
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

const UkTextilePage = () => {
  const [openFAQ, setOpenFAQ] = useState(null);
  const [activeStakeholder, setActiveStakeholder] = useState(0);
  const { openConsultation } = useConsultation();

  const marketInsights = [
    { value: "£10.4B", label: "UK textile & clothing industry turnover" },
    { value: "480K+", label: "People employed across UK fashion & textiles" },
    { value: "£8.1B", label: "UK textile & apparel exports" },
    { value: "8,000+", label: "Textile manufacturing businesses in the UK" },
  ];

  const services = [
    {
      icon: Shirt,
      title: "Garment Manufacturing Software",
      description:
        "Production planning, cutting, sewing and finishing for UK apparel brands.",
    },
    {
      icon: Factory,
      title: "Textile Mill Software",
      description:
        "Spinning, weaving and yarn tracking for UK mill operations.",
    },
    {
      icon: Boxes,
      title: "Fabric Inventory Management Software",
      description:
        "Roll, batch and size-colour tracking across every warehouse.",
    },
    {
      icon: ClipboardCheck,
      title: "UK & EU Trade Compliance",
      description:
        "Commodity codes, VAT, customs paperwork and Rules of Origin, built in.",
    },
    {
      icon: Globe,
      title: "Textile Export Software",
      description:
        "Export invoicing, packing lists and UK-EU trade documentation.",
    },
    {
      icon: Wrench,
      title: "Job Work & Sub-Contracting",
      description:
        "Track fabric and CMT work sent to third-party units, fully traceable.",
    },
  ];

  const challenges = [
    {
      challenge:
        "Rising energy and labour costs are squeezing margins across UK mills and cut-make-trim units.",
      solution:
        "A cloud textile management software standardises workflows and removes manual costing errors, protecting margin without new headcount.",
    },
    {
      challenge:
        "Post-Brexit customs paperwork slows down shipments between the UK and the EU.",
      solution:
        "Built-in commodity code mapping and document generation keep shipments moving and audit-ready.",
    },
    {
      challenge:
        "Fragmented spreadsheets make fabric and trim stock levels unreliable across sites.",
      solution:
        "A single textile inventory management software gives real-time stock visibility across every location.",
    },
    {
      challenge:
        "Small and mid-sized manufacturers can't justify a heavyweight legacy software rollout.",
      solution:
        "A modular, cloud-first textile software platform scales from one factory floor to a multi-site group.",
    },
  ];

  const stakeholders = [
    {
      tab: "Apparel Brands",
      title: "Garment & Apparel Manufacturing",
      description:
        "UK clothing manufacturers who need a garment manufacturing software solution covering cutting through to dispatch.",
      panel: {
        eyebrow: "Floor workflow",
        stages: [
          { step: "01", name: "Cutting", status: "In progress" },
          { step: "02", name: "Sewing line", status: "Queued" },
          { step: "03", name: "Finishing", status: "Next" },
          { step: "04", name: "Dispatch", status: "Planned" },
        ],
        kpis: [
          { value: "Live", label: "Line status" },
          { value: "QC", label: "Stage checks" },
          { value: "SCM", label: "Size-colour" },
        ],
      },
      bullets: [
        "Production planning and line scheduling",
        "Cutting room and sewing line tracking",
        "Multi-stage quality checks",
        "Size-colour matrix and style tracking",
      ],
    },
    {
      tab: "Textile Mills",
      title: "Spinning, Weaving & Knitting Mills",
      description:
        "UK mills needing textile production planning software from raw yarn through to finished fabric.",
      panel: {
        eyebrow: "Mill workflow",
        stages: [
          { step: "01", name: "Spinning", status: "Active" },
          { step: "02", name: "Weaving/Knitting", status: "Running" },
          { step: "03", name: "Dyeing", status: "Scheduled" },
          { step: "04", name: "Finishing", status: "Ready" },
        ],
        kpis: [
          { value: "Yarn", label: "Stock view" },
          { value: "Loom", label: "Capacity" },
          { value: "QC", label: "Fabric insp." },
        ],
      },
      bullets: [
        "Yarn and greige fabric tracking",
        "Fabric inventory management software",
        "Dyeing and finishing batch records",
        "Loom and knitting capacity planning",
      ],
    },
    {
      tab: "Traders & Distributors",
      title: "Fabric Traders & Distributors",
      description:
        "UK trading houses managing fabric procurement, multi-warehouse stock and customer orders.",
      panel: {
        eyebrow: "Trade workflow",
        stages: [
          { step: "01", name: "Procurement", status: "Open" },
          { step: "02", name: "Warehousing", status: "Updated" },
          { step: "03", name: "Sales order", status: "In transit" },
          { step: "04", name: "Settlement", status: "Due" },
        ],
        kpis: [
          { value: "3+", label: "Warehouses" },
          { value: "SO", label: "Order track" },
          { value: "JW", label: "Job work" },
        ],
      },
      bullets: [
        "Multi-warehouse fabric inventory software",
        "Sales order and dispatch tracking",
        "Sub-contractor and job work visibility",
        "Daily stock and sales reporting",
      ],
    },
    {
      tab: "Exporters",
      title: "Textile Export Operations",
      description:
        "Exporters shipping into the EU and beyond, needing textile software with built-in trade documentation.",
      panel: {
        eyebrow: "Export workflow",
        stages: [
          { step: "01", name: "Order confirm", status: "Done" },
          { step: "02", name: "Docs pack", status: "In review" },
          { step: "03", name: "Duty & VAT", status: "Pending" },
          { step: "04", name: "Shipment", status: "Booked" },
        ],
        kpis: [
          { value: "INV", label: "Export docs" },
          { value: "FX", label: "Multi-currency" },
          { value: "QC", label: "Standards" },
        ],
      },
      bullets: [
        "Export invoicing and shipping documentation",
        "UK-EU customs and Rules of Origin support",
        "Multi-currency order management",
        "Retailer and buyer compliance standards",
      ],
    },
  ];

  const techStack = [
    {
      icon: Brain,
      title: "AI & Forecasting",
      body: "Demand forecasting, automated order capture, and production alerts.",
    },
    {
      icon: Cloud,
      title: "Cloud Textile Platform",
      body: "Fully cloud-based — shop floor to head office, no local servers.",
    },
    {
      icon: Network,
      title: "Open API Access",
      body: "APIs for inventory, production and finance, plus Xero, QuickBooks, Sage and EDI.",
    },
    {
      icon: Smartphone,
      title: "Mobile-First Tools",
      body: "Mobile apps for supervisors, QC teams and warehouse staff.",
    },
    {
      icon: BarChart3,
      title: "Data & Analytics",
      body: "Dashboards for production efficiency, defect rates and profitability.",
    },
  ];

  const security = [
    {
      icon: ClipboardCheck,
      title: "UK & EU Trade Compliance",
      body: "Commodity codes, duty calculation and customs paperwork, handled.",
    },
    {
      icon: Globe,
      title: "Rules of Origin Support",
      body: "Documentation for tariff-free qualifying UK-EU shipments.",
    },
    {
      icon: FileText,
      title: "E-Invoicing & EDI",
      body: "Connects with UK retailer and brand EDI systems.",
    },
    {
      icon: Wrench,
      title: "Job Work Compliance",
      body: "Traceable records for fabric sent to sub-contracted units.",
    },
    {
      icon: Shield,
      title: "Data Security",
      body: "Role-based access across production and financial records.",
    },
    {
      icon: Database,
      title: "Audit & Activity Logs",
      body: "Full activity logs, ready for review at any time.",
    },
  ];
  const advantages = [
    {
      id: 1,
      title: "Textile-Specific Software",
      description:
        "Built for garment and mill operations — not generic software rebranded.",
    },
    {
      id: 2,
      title: "One Connected Platform",
      description:
        "Production, stock, accounting and compliance in one data model.",
    },
    {
      id: 3,
      title: "Built for the UK Market",
      description:
        "Configured for UK-EU trade, VAT and British manufacturing.",
    },
    {
      id: 4,
      title: "Measurable Results",
      description:
        "Gains in efficiency, stock accuracy, compliance and time saved.",
    },
    {
      id: 5,
      title: "Scales As You Grow",
      description:
        "One system, from a single unit to a multi-site group.",
    },
    {
      id: 6,
      title: "Easy to Adopt",
      description:
        "A clean interface teams actually use, from day one.",
    },
  ];
  const processSteps = [
    {
      number: "01",
      title: "Discovery & Onboarding",
      description:
        "Map production, inventory and compliance needs so your team sees value from week one.",
    },
    {
      number: "02",
      title: "Architecture & Configuration",
      description:
        "Configure production planning, fabric inventory, trade compliance and export workflows to your business.",
    },
    {
      number: "03",
      title: "Implementation & Training",
      description:
        "Data migration and hands-on training, scaled to the complexity of your operation.",
    },
    {
      number: "04",
      title: "Ongoing Support",
      description:
        "UK timezone-aligned support and continuous improvement as your textile business scales.",
    },
  ];

  const caseStudies = [
    {
      metric: "7 → 1",
      title: "One Unified Textile System",
      description:
        "Seven disconnected spreadsheets and tools replaced by one unified textile platform.",
      icon: Layers,
    },
    {
      metric: "Visibility",
      title: "Real-Time Production Planning",
      description:
        "Live production tracking helps spot bottlenecks early and improve on-time delivery.",
      icon: RefreshCw,
    },
    {
      metric: "Accuracy",
      title: "Reliable Fabric Inventory",
      description:
        "A dedicated fabric inventory management software cuts stock discrepancies and improves planning.",
      icon: Package,
    },
  ];

  const faqs = [
    {
      question: "What does UK textile software include?",
      answer:
        "Production planning, fabric inventory, order tracking, quality control, UK-EU trade compliance, accounting, and export documentation for textile manufacturing.",
    },
    {
      question: "How does garment manufacturing software help in the UK?",
      answer:
        "It centralises cutting-to-dispatch visibility, cuts manual records, and improves inventory accuracy for faster decisions.",
    },
    {
      question: "Is there free garment manufacturing software for UK companies?",
      answer:
        "Free tools tend to cover only basic stock lists. Most growing UK manufacturers need production planning, compliance, and reporting together—why a purpose-built textile platform pays for itself quickly.",
    },
    {
      question: "Does the platform handle UK-EU customs and VAT?",
      answer:
        "Yes — commodity code mapping, duty and VAT handling, and Rules of Origin documentation are built in.",
    },
    {
      question: "Can it manage job work and sub-contracted CMT units?",
      answer:
        "Yes — fabric and work sent to third-party units is tracked with full traceability back to the original order.",
    },
    {
      question: "Is size-colour matrix tracking supported?",
      answer:
        "Yes — size-colour matrices keep production planning and inventory accurate across every style and variant.",
    },
    {
      question: "Does the textile software integrate with UK accounting tools?",
      answer:
        "Yes — Xero, QuickBooks and Sage integrations keep financial records aligned automatically.",
    },
    {
      question: "How long does implementation take for a mid-sized manufacturer?",
      answer:
        "Most UK manufacturers go live within weeks, with core teams seeing value from the first production cycle.",
    },
    {
      question: "Is this a cloud-based textile management software?",
      answer:
        "Yes — it's fully cloud-hosted, giving factory, warehouse and head-office teams access from anywhere.",
    },
    {
      question: "Can the system support larger, multi-site textile groups?",
      answer:
        "Yes — production, inventory, compliance, open APIs and audit logs all scale to enterprise mills and groups.",
    },
  ];

  const relatedIndustries = [
    { title: "Textiles", link: ROUTES.industry.textiles },
    { title: "USA Textile", link: ROUTES.industry.usaTextile },
    { title: "India Textile", link: ROUTES.industry.indiaTextile },
    { title: "Australia Textile", link: ROUTES.industry.australiaTextile },
    { title: "UAE Textile", link: ROUTES.industry.uaeTextile },
    { title: "Canada Textile", link: ROUTES.industry.canadaTextile },
    { title: "Manufacturing", link: ROUTES.industry.manufacturing },
    { title: "Enterprise Software", link: ROUTES.industry.erp },
    { title: "Business CRM", link: ROUTES.industry.businessCrm },
    { title: "Logistics", link: ROUTES.industry.logistics },
    { title: "Real Estate", link: ROUTES.industry.realEstate },
  ];

  const active = stakeholders[activeStakeholder];
  const ActiveStakeholderIcon = [Shirt, Factory, Boxes, Globe][
    activeStakeholder
  ];

  const toggleFAQ = (index) => setOpenFAQ(openFAQ === index ? null : index);

  return (
    <div className="min-h-screen bg-black">
      <SEO {...seoData.ukTextile} />

      {/* ================= HERO + MARKET (continuous blue) ================= */}
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
                UK Textile
              </p>
              <h1 className="text-2xl leading-tight sm:text-[1.7rem] md:text-4xl xl:text-[2.65rem] 2xl:text-5xl 2xl:leading-[1.15]">
                UK Textile Software for Manufacturers & Mills
              </h1>
              <p className="text-base leading-relaxed text-gray-300 sm:text-lg 2xl:text-xl 2xl:leading-relaxed">
                AI-powered textile software for garment manufacturing, fabric
                management, production planning, and UK-EU trade compliance—built
                for British textile industry operations.
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
                    <Factory className="h-4 w-4 shrink-0 text-amber-400 sm:h-5 sm:w-5 2xl:h-6 2xl:w-6" />
                    <p className="truncate text-sm font-normal text-white sm:text-base 2xl:text-lg">
                      Complete Textile Management System
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
                      title: "Garment Production",
                      body: "Cutting, sewing and finishing on one screen.",
                      icon: Shirt,
                      iconClass: "text-amber-400",
                      boxClass: "border-amber-400/25 bg-amber-400/15",
                      topBorder: false,
                    },
                    {
                      title: "Textile Mills",
                      body: "Yarn, fabric, dyeing and loom planning.",
                      icon: Factory,
                      iconClass: "text-blue-400",
                      boxClass: "border-blue-400/25 bg-blue-400/15",
                      topBorder: false,
                    },
                    {
                      title: "Inventory & Trade",
                      body: "Size-colour matrix and UK-EU compliance.",
                      icon: Warehouse,
                      iconClass: "text-green-400",
                      boxClass: "border-emerald-400/25 bg-emerald-400/15",
                      topBorder: true,
                    },
                    {
                      title: "Export & Job Work",
                      body: "Documentation and sub-contracting, tracked.",
                      icon: Globe,
                      iconClass: "text-purple-400",
                      boxClass: "border-violet-400/25 bg-violet-400/15",
                      topBorder: true,
                    },
                  ].map((card) => {
                    const Icon = card.icon;
                    return (
                      <div
                        key={card.title}
                        className={`p-3.5 transition-colors duration-300 hover:bg-white/[0.04] sm:p-4 lg:p-5 2xl:p-6 [@media(max-height:780px)]:p-3 ${card.topBorder
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
              title="Why UK Textile Needs Modern Technology"
              subtitle="With £10.4B in turnover and 480K+ jobs, UK textile and apparel manufacturers need cloud software for planning, inventory and cross-border trade."
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
          title="Textile Industry Solutions for the UK"
          subtitle="Textile software solutions for garment manufacturers, mills and exporters — from production planning to UK trade "
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
          title="Practical Fixes for UK Textile Challenges"
          subtitle="Straightforward answers for rising costs, customs friction, fabric stock accuracy and slow order turnaround."
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
          title="Built for Every Part of the UK Textile Chain"
          subtitle="Software shaped for apparel brands, textile mills, traders and exporters across the United Kingdom."
        />

        {/* Mobile: full-width selector */}
        <div className="mb-8 md:hidden">
          <label htmlFor="uk-textile-stakeholder-select" className="sr-only">
            Select stakeholder type
          </label>
          <div className="relative">
            <select
              id="uk-textile-stakeholder-select"
              value={activeStakeholder}
              onChange={(e) => setActiveStakeholder(Number(e.target.value))}
              aria-controls="uk-textile-stakeholder-panel"
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
                id={`uk-textile-stakeholder-tab-${index}`}
                aria-controls="uk-textile-stakeholder-panel"
                onClick={() => setActiveStakeholder(index)}
                className={`shrink-0 rounded-full px-4 py-2 text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400 2xl:px-5 2xl:py-2.5 2xl:text-base ${selected
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
          id="uk-textile-stakeholder-panel"
          role="tabpanel"
          aria-labelledby={`uk-textile-stakeholder-tab-${activeStakeholder}`}
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

          {/* Desktop ops snapshot — workflow UI, not a feature list repeat */}
          <div
            key={active.tab}
            className="hidden h-full min-h-[280px] flex-col overflow-hidden rounded-xl border border-white/12 bg-gray-950 lg:flex 2xl:min-h-[320px]"
            aria-label={`${active.tab} workflow snapshot`}
          >
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-3.5 2xl:px-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-amber-400">
                {active.panel.eyebrow}
              </p>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wide text-emerald-300">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
                Live
              </span>
            </div>

            <ol className="flex-1 space-y-0 px-5 py-2 2xl:px-6">
              {active.panel.stages.map((stage, index) => {
                const isActive = index === 0;
                return (
                  <li
                    key={stage.name}
                    className="flex items-center gap-3 border-b border-white/[0.06] py-3 last:border-b-0 2xl:py-3.5"
                  >
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-[11px] font-semibold tabular-nums ${isActive
                        ? "bg-amber-400 text-black"
                        : "border border-white/10 bg-white/[0.03] text-gray-400"
                        }`}
                    >
                      {stage.step}
                    </span>
                    <span className="min-w-0 flex-1 text-sm font-medium text-white 2xl:text-[15px]">
                      {stage.name}
                    </span>
                    <span
                      className={`shrink-0 rounded-md px-2 py-0.5 text-[11px] font-medium ${isActive
                        ? "bg-amber-400/15 text-amber-300"
                        : "bg-white/[0.04] text-gray-400"
                        }`}
                    >
                      {stage.status}
                    </span>
                  </li>
                );
              })}
            </ol>

            <div className="grid grid-cols-3 gap-2 border-t border-white/10 bg-black/40 p-3 2xl:gap-2.5 2xl:p-4">
              {active.panel.kpis.map((kpi) => (
                <div
                  key={kpi.label}
                  className="rounded-lg border border-white/8 bg-white/[0.03] px-2.5 py-2.5 text-center 2xl:py-3"
                >
                  <p className="text-sm font-semibold text-white 2xl:text-base">
                    {kpi.value}
                  </p>
                  <p className="mt-0.5 text-[10px] leading-tight text-gray-400 2xl:text-[11px]">
                    {kpi.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Shell>

      {/* ================= TECHNOLOGY ================= */}
      <Shell labelledBy="tech-heading" alt>
        <Heading
          id="tech-heading"
          eyebrow="Capabilities"
          title="AI-Native Textile Software Architecture"
          subtitle="AI forecasting, a cloud textile platform, open APIs and mobile tools — plus Xero, QuickBooks integrations."
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
      </Shell>

      {/* ================= COMPLIANCE ================= */}
      <Shell labelledBy="compliance-heading">
        <Heading
          id="compliance-heading"
          eyebrow="Compliance"
          title="UK-Ready Compliance & Security"
          subtitle="UK-EU trade compliance, Rules of Origin, e-invoicing, EDI and job work controls, built into the platform."
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
          title="Why Choose Us for UK Textile"
          subtitle="A purpose-built textile management system with UK market fit and fast team adoption."
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
          title="How We Deliver Textile Software"
          subtitle="Four clear phases — from discovery to UK timezone-aligned ongoing support."
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
                  className={`relative z-10 mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full text-xs font-bold md:h-11 md:w-11 md:text-sm 2xl:h-12 2xl:w-12 ${index === 0
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
          title="Proven Outcomes for UK Textile Manufacturers"
          subtitle="Results from one unified textile platform — better visibility, greater accuracy and less manual work."
        />
        <ul className="grid list-none grid-cols-1 gap-4 md:grid-cols-3">
          {caseStudies.map((item, index) => {
            const Icon = item.icon;
            const gradientId = `uk-textile-case-bg-${index}`;
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
            const panelId = `uk-textile-faq-panel-${index}`;
            const buttonId = `uk-textile-faq-button-${index}`;
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

export default UkTextilePage;