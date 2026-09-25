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
  DollarSign,
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

const UAETextilePage = () => {
  const [openFAQ, setOpenFAQ] = useState(null);
  const [activeStakeholder, setActiveStakeholder] = useState(0);
  const { openConsultation } = useConsultation();

  const marketInsights = [
    { value: "USD 10.88B", label: "UAE apparel market size (2025)" },
    { value: "USD 198.8M", label: "UAE contract textile market by 2030" },
    { value: "AED 3.06B", label: "UAE textile exports (Q4 2025, quarterly)" },
    { value: "AED 55B", label: "Projected UAE fashion & apparel revenue" },
  ];

  const services = [
    {
      icon: Shirt,
      title: "Garment Manufacturing & Production",
      description:
        "Production planning, cutting, stitching line tracking, and finishing for Dubai, Sharjah, and Ajman zones.",
    },
    {
      icon: Boxes,
      title: "Fabric Inventory Management",
      description:
        "Fabric roll tracking, meter-based stock, size-color matrix, and multi-warehouse visibility.",
    },
    {
      icon: Factory,
      title: "Textile Mill Operations",
      description:
        "Spinning, weaving, dyeing, and finishing with yarn tracking, inspection, and batch control.",
    },
    {
      icon: ClipboardCheck,
      title: "VAT & Compliance Management",
      description:
        "FTA-compliant billing, VAT calculation, multi-currency invoicing, and e-invoicing workflows.",
    },
    {
      icon: Globe,
      title: "Omni-Channel & E-Commerce Integration",
      description:
        "Sync stores, exhibitions, and online channels—including Shopify for D2C fashion brands.",
    },
    {
      icon: Wrench,
      title: "Job Work & Subcontracting Management",
      description:
        "Track outsourced embroidery and fabric processing with accountability and quality docs.",
    },
  ];

  const challenges = [
    {
      challenge:
        "International brands hold ~65% market share—price pressure squeezes margins for local textile manufacturers.",
      solution:
        "Textile software with batch cost visibility, margin analysis, and wastage tracking for competitive pricing.",
    },
    {
      challenge:
        "Cotton and fiber prices swing up to 20%, complicating budgets and production planning.",
      solution:
        "Supplier price comparison, reorder suggestions, and real-time material cost tracking in planning.",
    },
    {
      challenge:
        "Complex size-color variants and bulk institutional orders need precise fabric inventory control.",
      solution:
        "Variant matrix generation, barcode inventory, and job-order routing through cutting to finishing.",
    },
    {
      challenge:
        "Multi-currency trade (USD/INR in, AED out) creates FX risk and accounting complexity.",
      solution:
        "Multi-currency accounting with gain/loss processing and VAT-compliant invoicing across currencies.",
    },
  ];

  const stakeholders = [
    {
      tab: "Garment Manufacturers",
      title: "Garment Manufacturers",
      description:
        "Apparel producers managing cutting, stitching, finishing, and dispatch who need production visibility and order tracking.",
      panel: {
        eyebrow: "Floor workflow",
        stages: [
          { step: "01", name: "Production Planning", status: "In progress" },
          { step: "02", name: "Cutting", status: "Queued" },
          { step: "03", name: "Stitching", status: "Next" },
          { step: "04", name: "Finishing / Dispatch", status: "Planned" },
        ],
        kpis: [
          { value: "Prod", label: "Production" },
          { value: "QC", label: "Stage checks" },
          { value: "SCM", label: "Size-color" },
        ],
      },
      bullets: [
        "Production planning and scheduling",
        "Cutting room and stitching line tracking",
        "Multi-stage quality control",
        "Size-color matrix management",
      ],
    },
    {
      tab: "Fabric Traders",
      title: "Fabric Traders & Wholesalers",
      description:
        "Businesses managing fabric procurement, stock, and B2B orders across warehouses and retail locations.",
      panel: {
        eyebrow: "Trade workflow",
        stages: [
          { step: "01", name: "Procurement", status: "Open" },
          { step: "02", name: "Warehousing", status: "Updated" },
          { step: "03", name: "Sales Order", status: "In transit" },
          { step: "04", name: "Dispatch / Settlement", status: "Due" },
        ],
        kpis: [
          { value: "WH", label: "Warehouses" },
          { value: "SO", label: "Orders" },
          { value: "Inv", label: "Inventory" },
        ],
      },
      bullets: [
        "Meter-based fabric inventory tracking",
        "Multi-supplier management and price comparison",
        "Sales order tracking and status",
        "Daily business reporting",
      ],
    },
    {
      tab: "Textile Mills",
      title: "Textile Mills",
      description:
        "Spinning, weaving, and processing units that need yarn-to-fabric visibility and capacity planning.",
      panel: {
        eyebrow: "Mill workflow",
        stages: [
          { step: "01", name: "Spinning", status: "Active" },
          { step: "02", name: "Weaving", status: "Running" },
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
        "Yarn production tracking",
        "Fabric inventory management",
        "Dyeing and finishing workflows",
        "Loom capacity planning",
      ],
    },
    {
      tab: "Fashion Brands",
      title: "Fashion Brands & Retailers",
      description:
        "Brands managing private label manufacturing, retail stores, and e-commerce channels.",
      panel: {
        eyebrow: "Retail workflow",
        stages: [
          { step: "01", name: "Manufacturing", status: "Active" },
          { step: "02", name: "Inventory", status: "Synced" },
          { step: "03", name: "Retail", status: "Open" },
          { step: "04", name: "E-Commerce", status: "Live" },
        ],
        kpis: [
          { value: "POS", label: "Retail POS" },
          { value: "Shop", label: "Shopify" },
          { value: "Omni", label: "Omni-channel" },
        ],
      },
      bullets: [
        "Omni-channel stock synchronization",
        "E-commerce integration (Shopify, etc.)",
        "Retail POS with multi-currency support",
        "Brand-specific production tracking",
      ],
    },
  ];

  const techStack = [
    {
      icon: Brain,
      title: "AI & Automation",
      body: "Order forecasting, purchase recommendations, and production insights for textile manufacturing.",
    },
    {
      icon: Cloud,
      title: "Cloud Platform",
      body: "100% cloud textile software—access from factory floor to office with no on-premise servers.",
    },
    {
      icon: Network,
      title: "API Access",
      body: "APIs for inventory, production, orders, and finance—plus Shopify, payments, and FTA e-invoicing.",
    },
    {
      icon: Smartphone,
      title: "Mobile-First",
      body: "Mobile tools for supervisors, QC, and field teams—including job work and dispatch tracking.",
    },
    {
      icon: BarChart3,
      title: "Data & Analytics",
      body: "Dashboards for production efficiency, defect rates, inventory turnover, and order profitability.",
    },
  ];

  const security = [
    {
      icon: ClipboardCheck,
      title: "UAE VAT Compliance",
      body: "FTA-compliant billing, VAT calculation, e-invoicing, and return-ready reporting aligned with Federal Tax Authority standards.",
    },
    {
      icon: DollarSign,
      title: "Multi-Currency Accounting",
      body: "Automatic gain/loss processing for USD, INR, and AED transactions—essential for textile trade with international suppliers and customers.",
    },
    {
      icon: FileText,
      title: "Corporate Tax Readiness",
      body: "Financial records and reporting structured for UAE Corporate Tax compliance requirements.",
    },
    {
      icon: Shield,
      title: "Data Security",
      body: "Role-based access controls protecting business data, customer information, and financial records.",
    },
    {
      icon: Database,
      title: "Audit & Activity Logs",
      body: "Transparent logs for production activities, quality checks, and compliance actions—supporting internal audits and FTA reviews.",
    },
  ];

  const advantages = [
    {
      id: 1,
      title: "Textile-Specific Software",
      description:
        "Purpose-built for garment manufacturing and textile operations—not generic software adapted with textile terminology.",
    },
    {
      id: 2,
      title: "Unified Platform Experience",
      description:
        "Production, inventory, accounting, VAT compliance, and omni-channel sales share one data model—no fragmented systems requiring manual reconciliation.",
    },
    {
      id: 3,
      title: "UAE Market Understanding",
      description:
        "Built around UAE textile workflows—VAT compliance, multi-currency operations, re-export documentation, and Dubai, Sharjah, and Ajman industrial clusters.",
    },
    {
      id: 4,
      title: "Proven Outcomes",
      description:
        "Measurable gains in production efficiency, inventory accuracy, VAT compliance, and weekly hours saved.",
    },
    {
      id: 5,
      title: "Scalable for Growth",
      description:
        "From small garment units to large integrated mills—the same platform supports growth without disruptive system changes.",
    },
    {
      id: 6,
      title: "Modern Interface & Adoption",
      description:
        "Designed for usability so production teams, warehouse staff, and management actually use the system.",
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Discovery & Onboarding",
      description:
        "Assess production workflows, inventory challenges, and VAT compliance requirements so teams see value quickly.",
    },
    {
      number: "02",
      title: "Architecture & Configuration",
      description:
        "Configure production planning, fabric inventory, VAT workflows, and omni-channel integrations around your operating model.",
    },
    {
      number: "03",
      title: "Implementation & Training",
      description:
        "Data migration, user training in English and Arabic, and guided rollout sized to business complexity.",
    },
    {
      number: "04",
      title: "Ongoing Support",
      description:
        "UAE-aligned support, knowledge resources, and continuous improvement as your business grows.",
    },
  ];

  const caseStudies = [
    {
      metric: "9 → 1",
      title: "Unified Platform",
      description:
        "Consolidated nine separate systems into one unified platform, improving production visibility and eliminating manual data entry across order management.",
      icon: Layers,
    },
    {
      metric: "Visibility",
      title: "Production Visibility",
      description:
        "Manufacturers using real-time production tracking report faster identification of bottlenecks and improved on-time delivery performance.",
      icon: RefreshCw,
    },
    {
      metric: "Accuracy",
      title: "Inventory Accuracy",
      description:
        "Textile businesses using integrated inventory management report reduced stock discrepancies and improved material planning accuracy.",
      icon: Package,
    },
  ];

  const faqs = [
    {
      question: "What does textile software for UAE manufacturers include?",
      answer:
        "Core capabilities typically include production planning, fabric inventory management, order tracking, quality control, VAT compliance, multi-currency accounting, and omni-channel integration for textile and garment operations.",
    },
    {
      question: "How does textile software help garment manufacturers in UAE?",
      answer:
        "The platform provides centralized visibility across production stages, reduces manual record-keeping, accelerates workflows, and improves inventory and cost accuracy—enabling faster, more informed decision-making for UAE manufacturers.",
    },
    {
      question: "Can the platform handle UAE VAT compliance for textiles?",
      answer:
        "Yes. UAE FTA-compliant billing, VAT calculation, e-invoicing, and return-ready workflows are built into the platform, with multi-currency support for international transactions.",
    },
    {
      question: "Does it support size-color variant management?",
      answer:
        "Yes. Automated variant matrix generation for size and color combinations enables precise tracking through cutting, stitching, and finishing stages.",
    },
    {
      question: "Can it manage multi-currency operations?",
      answer:
        "Yes. Multi-currency accounting with automatic gain/loss processing supports USD, INR, and AED transactions—standard for UAE textile trade.",
    },
    {
      question: "Does it support e-commerce integration?",
      answer:
        "Yes. Real-time synchronization with Shopify and other e-commerce platforms keeps physical store, exhibition, and online channel inventory aligned.",
    },
    {
      question: "Can it manage job work operations?",
      answer:
        "Yes. Job work tracking, subcontractor management, and outsourced process monitoring with accountability documentation are core capabilities.",
    },
    {
      question: "How long does implementation take?",
      answer:
        "Timelines depend on business size and complexity. For most mid-market manufacturers, deployment typically takes weeks to months, with many teams seeing benefits within weeks.",
    },
    {
      question: "What support is available?",
      answer:
        "UAE textile businesses are supported through aligned timezone teams, dedicated account management, remote implementation guidance, training, and ongoing support resources.",
    },
    {
      question: "Is the platform cloud-based?",
      answer:
        "Yes. Modern textile platforms are cloud-based, enabling anytime access for production teams, management, and stakeholders across locations.",
    },
    {
      question: "Can it support large integrated mills?",
      answer:
        "Yes. Enterprise textile operations can use unified production planning, inventory management, VAT compliance workflows, API integrations, and audit-ready activity logs.",
    },
  ];

  const relatedIndustries = [
    { title: "Textiles", link: ROUTES.industry.textiles },
    { title: "India Textile", link: ROUTES.industry.indiaTextile },
    { title: "USA Textile", link: ROUTES.industry.usaTextile },
    { title: "Australia Textile", link: ROUTES.industry.australiaTextile },
    { title: "UK Textile", link: ROUTES.industry.ukTextile },
    { title: "Canada Textile", link: ROUTES.industry.canadaTextile },
    { title: "Manufacturing", link: ROUTES.industry.manufacturing },
    { title: "Enterprise Software", link: ROUTES.industry.erp },
    { title: "Business CRM", link: ROUTES.industry.businessCrm },
    { title: "Logistics", link: ROUTES.industry.logistics },
    { title: "Real Estate", link: ROUTES.industry.realEstate },
  ];

  const active = stakeholders[activeStakeholder];
  const ActiveStakeholderIcon = [Shirt, Boxes, Factory, Globe][
    activeStakeholder
  ];

  const toggleFAQ = (index) => setOpenFAQ(openFAQ === index ? null : index);

  return (
    <div className="min-h-screen bg-black">
      <SEO {...seoData.uaeTextile} />

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
                UAE Textile
              </p>
              <h1 className="text-2xl leading-tight sm:text-[1.7rem] md:text-4xl xl:text-[2.65rem] 2xl:text-5xl 2xl:leading-[1.15]">
                AI-Powered Textile Software for UAE Businesses
              </h1>
              <p className="text-base leading-relaxed text-gray-300 sm:text-lg 2xl:text-xl 2xl:leading-relaxed">
                Unify production, fabric inventory, VAT compliance, and
                omni-channel operations with modern textile software built for UAE
                garment manufacturers, traders, and apparel brands.
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
                      Complete Textile Software Suite
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
                      body: "Cutting, stitching, and finishing workflows.",
                      icon: Shirt,
                      iconClass: "text-amber-400",
                      boxClass: "border-amber-400/25 bg-amber-400/15",
                      topBorder: false,
                    },
                    {
                      title: "Fabric Trading",
                      body: "Roll tracking and multi-warehouse stock.",
                      icon: Boxes,
                      iconClass: "text-blue-400",
                      boxClass: "border-blue-400/25 bg-blue-400/15",
                      topBorder: false,
                    },
                    {
                      title: "Inventory & VAT",
                      body: "Size-color matrix and FTA compliance.",
                      icon: Warehouse,
                      iconClass: "text-green-400",
                      boxClass: "border-emerald-400/25 bg-emerald-400/15",
                      topBorder: true,
                    },
                    {
                      title: "Omni-Channel",
                      body: "Stores, Shopify, and job work sync.",
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
                            <Icon
                              className={`h-4 w-4 sm:h-5 sm:w-5 2xl:h-6 2xl:w-6 ${card.iconClass}`}
                            />
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
              title="Why UAE Textile Needs Modern Technology"
              subtitle="With a USD 10.88B apparel market and Dubai–Sharjah–Ajman re-export trade under international pressure, textile businesses need cloud software for fabric inventory, production tracking, and VAT-ready accounting."
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
          title="Services Built for UAE Textile Operations"
          subtitle="Textile software for garment manufacturing, fabric trading, mills, and fashion brands—production planning to VAT."
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
          title="Practical Solutions for UAE Textile Challenges"
          subtitle="Margin pressure, material costs, size-color variants, and multi-currency trade that matter most in UAE markets."
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
          title="Built for Every Textile Stakeholder"
          subtitle="Software shaped for garment manufacturers, fabric traders, mills, and fashion brands across the UAE."
        />

        <div className="mb-8 md:hidden">
          <label htmlFor="uae-textile-stakeholder-select" className="sr-only">
            Select stakeholder type
          </label>
          <div className="relative">
            <select
              id="uae-textile-stakeholder-select"
              value={activeStakeholder}
              onChange={(e) => setActiveStakeholder(Number(e.target.value))}
              aria-controls="uae-textile-stakeholder-panel"
              className="w-full appearance-none rounded-xl border border-amber-400/40 bg-black/40 px-4 py-3 pr-11 text-sm text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400"
            >
              {stakeholders.map((item, index) => (
                <option
                  key={item.tab}
                  value={index}
                  className="bg-gray-950 text-white"
                >
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
                id={`uae-textile-stakeholder-tab-${index}`}
                aria-controls="uae-textile-stakeholder-panel"
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
          id="uae-textile-stakeholder-panel"
          role="tabpanel"
          aria-labelledby={`uae-textile-stakeholder-tab-${activeStakeholder}`}
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
                <span
                  className="h-1.5 w-1.5 rounded-full bg-emerald-400"
                  aria-hidden="true"
                />
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
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-[11px] font-semibold tabular-nums ${
                        isActive
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
                      className={`shrink-0 rounded-md px-2 py-0.5 text-[11px] font-medium ${
                        isActive
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
          title="AI-Native Architecture for UAE Textile Software"
          subtitle="AI, cloud textile software, APIs, and mobile—with Shopify, Stripe, barcode, and UAE FTA e-invoicing integrations."
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
          title="UAE-Ready Compliance & Security"
          subtitle="UAE VAT, multi-currency accounting, corporate tax readiness, and enterprise data controls."
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
          title="Why Choose Us for UAE Textile"
          subtitle="Purpose-built textile software with UAE market fit and fast team adoption."
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
          title="How We Work with UAE Textile Businesses"
          subtitle="Four clear phases—from discovery to UAE-aligned ongoing support."
        />

        <ol className="relative ml-2 space-y-8 border-l border-white/15 pl-8 md:hidden">
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
          eyebrow="Outcomes"
          title="Proven Outcomes Across UAE Textile"
          subtitle="Results from a unified textile platform—visibility, accuracy, and less manual work."
        />
        <ul className="grid list-none grid-cols-1 gap-4 md:grid-cols-3">
          {caseStudies.map((item, index) => {
            const Icon = item.icon;
            const gradientId = `uae-textile-case-bg-${index}`;
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
                    <circle
                      cx="320"
                      cy="20"
                      r="70"
                      fill="#F59E0B"
                      fillOpacity="0.08"
                    />
                    <circle
                      cx="60"
                      cy="140"
                      r="50"
                      fill="#3B82F6"
                      fillOpacity="0.1"
                    />
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
            const panelId = `uae-textile-faq-panel-${index}`;
            const buttonId = `uae-textile-faq-button-${index}`;
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

export default UAETextilePage;
