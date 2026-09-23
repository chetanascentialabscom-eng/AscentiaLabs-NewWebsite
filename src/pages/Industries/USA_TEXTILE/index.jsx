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

const UsaTextilePage = () => {
  const [openFAQ, setOpenFAQ] = useState(null);
  const [activeStakeholder, setActiveStakeholder] = useState(0);
  const { openConsultation } = useConsultation();

  const marketInsights = [
    { value: "$60.9B", label: "U.S. textile & apparel shipments (2025)" },
    { value: "453K+", label: "U.S. textile supply chain employment" },
    { value: "$27B", label: "U.S. textile & apparel exports (2025)" },
    { value: "96.9%", label: "Apparel & footwear sold in U.S. is imported" },
  ];

  const services = [
    {
      icon: Shirt,
      title: "Garment Manufacturing Software",
      description:
        "Production planning, cutting, sewing, and finishing for U.S. apparel brands.",
    },
    {
      icon: Factory,
      title: "Textile Mill Software",
      description:
        "Spinning, weaving, fabric, and yarn tracking workflows for U.S. mills.",
    },
    {
      icon: Boxes,
      title: "Fabric Inventory Management",
      description:
        "Real-time fabric, size-color matrix, trim tracking, and multi-location stock control.",
    },
    {
      icon: ClipboardCheck,
      title: "U.S. Trade Compliance",
      description:
        "HTS codes, duty calculation, customs docs, and trade agreement support.",
    },
    {
      icon: Globe,
      title: "Textile Export Software",
      description:
        "Export invoicing, USMCA/CAFTA docs, and trade compliance for shipments.",
    },
    {
      icon: Wrench,
      title: "Job Work Management",
      description:
        "Track outsourced processing with quality docs and subcontractor visibility.",
    },
  ];

  const challenges = [
    {
      challenge:
        "High labor costs and low R&D budgets limit automation across U.S. mills and factories.",
      solution:
        "A cloud textile platform standardizes workflows with real-time visibility—no large upfront IT spend.",
    },
    {
      challenge:
        "40 U.S. textile mills closed in 2.5 years due to import pressure and falling utilization.",
      solution:
        "Flexible production planning, batch tracking, and demand-led inventory boost efficiency and turnaround.",
    },
    {
      challenge:
        "U.S. apparel output fell 17% in 2025, with sourcing shifting to Asia instead of reshoring.",
      solution:
        "AI-powered order and material forecasting help U.S. manufacturers capture reshoring opportunities faster.",
    },
    {
      challenge:
        "Manual HTS, duty, and trade compliance raises the risk of penalties, delays, and errors.",
      solution:
        "Automate U.S. trade compliance with HTS mapping, e-invoicing, and return-ready workflows.",
    },
  ];
  const stakeholders = [
    {
      tab: "Apparel Brands",
      title: "Apparel & Garment Manufacturing",
      description:
        "U.S. brands managing cutting, sewing, finishing, and dispatch who need production planning and order tracking.",
      panel: {
        eyebrow: "Floor workflow",
        stages: [
          { step: "01", name: "Cutting", status: "In progress" },
          { step: "02", name: "Sewing", status: "Queued" },
          { step: "03", name: "Finishing", status: "Next" },
          { step: "04", name: "Dispatch", status: "Planned" },
        ],
        kpis: [
          { value: "Live", label: "Line status" },
          { value: "QC", label: "Stage checks" },
          { value: "SCM", label: "Size-color" },
        ],
      },
      bullets: [
        "Production planning and scheduling",
        "Cutting room and sewing line tracking",
        "Multi-stage quality control",
        "Size-color matrix management",
      ],
    },
    {
      tab: "Textile Mills",
      title: "Textile Mill Operations",
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
      tab: "Traders & Wholesalers",
      title: "Textile Traders & Wholesalers",
      description:
        "Businesses managing fabric procurement, stock, and orders across U.S. warehouses.",
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
        "Multi-warehouse inventory visibility",
        "Sales order tracking",
        "Job work / subcontractor management",
        "Daily business reporting",
      ],
    },
    {
      tab: "Exporters",
      title: "Textile Export Operations",
      description:
        "Export-focused manufacturers managing international orders, compliance, and documentation.",
      panel: {
        eyebrow: "Export workflow",
        stages: [
          { step: "01", name: "Order confirm", status: "Done" },
          { step: "02", name: "Docs pack", status: "In review" },
          { step: "03", name: "Scheme claim", status: "Pending" },
          { step: "04", name: "Shipment", status: "Booked" },
        ],
        kpis: [
          { value: "INV", label: "Export docs" },
          { value: "FX", label: "Multi-currency" },
          { value: "QC", label: "Standards" },
        ],
      },
      bullets: [
        "Export invoicing and documentation",
        "USMCA/CAFTA scheme support",
        "Multi-currency operations",
        "Quality standards compliance",
      ],
    },
  ];

  const techStack = [
    {
      icon: Brain,
      title: "AI & Automation",
      body: "Order and material forecasting, automated order reading, and production insights.",
    },
    {
      icon: Cloud,
      title: "Cloud Textile Platform",
      body: "100% cloud software—factory floor to office, no on-premise servers.",
    },
    {
      icon: Network,
      title: "API Access",
      body: "APIs for inventory, production, orders, and finance—plus QuickBooks, NetSuite, EDI, and payments.",
    },
    {
      icon: Smartphone,
      title: "Mobile-First",
      body: "Mobile tools for supervisors, QC, and field teams—with job work and dispatch tracking.",
    },
    {
      icon: BarChart3,
      title: "Data & Analytics",
      body: "Dashboards for production efficiency, defect rates, inventory turnover, and profitability.",
    },
  ];

  const security = [
    {
      icon: ClipboardCheck,
      title: "U.S. Trade Compliance",
      body: "HTS mapping, duty drawback, customs docs, and automated return prep.",
    },
    {
      icon: Globe,
      title: "Export Scheme Support",
      body: "USMCA, CAFTA-DR, and trade agreement docs for textile shipments.",
    },
    {
      icon: FileText,
      title: "E-Invoicing & EDI",
      body: "Integration with U.S. retail and brand EDI systems for e-invoices.",
    },
    {
      icon: Wrench,
      title: "Job Work Compliance",
      body: "Track goods to subcontractors with audit-ready documentation.",
    },
    {
      icon: Shield,
      title: "Data Security",
      body: "Role-based access protecting business and financial records.",
    },
    {
      icon: Database,
      title: "Audit & Activity Logs",
      body: "Logs for production, quality, and compliance—ready for review.",
    },
  ];

  const advantages = [
    {
      id: 1,
      title: "Textile-Specific Software",
      description:
        "Purpose-built for U.S. garment and mill operations—not generic software rebranded.",
    },
    {
      id: 2,
      title: "Unified Platform",
      description:
        "Production, fabric, accounting, trade compliance, and export docs on one data model.",
    },
    {
      id: 3,
      title: "U.S. Market Fit",
      description:
        "Built for American workflows—USMCA, EDI, brand compliance, and reshoring.",
    },
    {
      id: 4,
      title: "Proven Outcomes",
      description:
        "Gains in production efficiency, inventory accuracy, compliance, and hours saved.",
    },
    {
      id: 5,
      title: "Scalable for Growth",
      description:
        "Same platform from small garment units to large mills—no rip-and-replace.",
    },
    {
      id: 6,
      title: "Modern Adoption",
      description:
        "Usable UI so production, warehouse, and management teams run on the system.",
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Discovery & Onboarding",
      description:
        "Map production, inventory, and compliance needs so teams see value quickly.",
    },
    {
      number: "02",
      title: "Architecture & Configuration",
      description:
        "Configure production planning, inventory, trade compliance, and export workflows to your model.",
    },
    {
      number: "03",
      title: "Implementation & Training",
      description:
        "Migration, English training, and rollout sized to business complexity.",
    },
    {
      number: "04",
      title: "Ongoing Support",
      description:
        "U.S. timezone-aligned support and continuous improvement as textile operations scale.",
    },
  ];

  const caseStudies = [
    {
      metric: "9 → 1",
      title: "Unified Textile Platform",
      description:
        "Nine systems consolidated into one platform—better production visibility and less manual order entry.",
      icon: Layers,
    },
    {
      metric: "Visibility",
      title: "Production Planning",
      description:
        "Real-time production tracking helps spot bottlenecks faster and improve on-time delivery.",
      icon: RefreshCw,
    },
    {
      metric: "Accuracy",
      title: "Fabric Inventory",
      description:
        "Integrated inventory management reduces stock discrepancies and improves material planning.",
      icon: Package,
    },
  ];

  const faqs = [
    {
      question: "What does U.S. textile software include?",
      answer:
        "Production planning, fabric inventory, order tracking, quality control, trade compliance, accounting, and export documentation for textile manufacturing.",
    },
    {
      question: "How does garment manufacturing software help in the U.S.?",
      answer:
        "It centralizes cutting-to-dispatch visibility, cuts manual records, and improves inventory accuracy for faster decisions.",
    },
    {
      question: "Does it support U.S. trade compliance?",
      answer:
        "Yes—HTS tracking, duty drawback, customs documentation, and return preparation aligned with U.S. trade rules.",
    },
    {
      question: "Can it handle textile export documentation?",
      answer:
        "Yes—export invoicing, USMCA/CAFTA docs, and trade compliance reporting are built in.",
    },
    {
      question: "Does it support job work management?",
      answer:
        "Yes—subcontractor tracking, outsourced process monitoring, and accountability documentation are core features.",
    },
    {
      question: "Is size-color matrix tracking included?",
      answer:
        "Yes—size-color matrices keep production planning and inventory accurate across product variants.",
    },
    {
      question: "Can textile software integrate with QuickBooks?",
      answer:
        "Yes—QuickBooks sync keeps financial data aligned between your platform and existing accounting.",
    },
    {
      question: "How long does textile software implementation take?",
      answer:
        "Most mid-market manufacturers deploy in weeks to months, with many teams seeing value within weeks.",
    },
    {
      question: "Is the platform cloud-based?",
      answer:
        "Yes—cloud textile software gives anytime access for factory, management, and multi-location teams.",
    },
    {
      question: "Can it support large integrated mills?",
      answer:
        "Yes—unified production planning, inventory, compliance, APIs, and audit logs for enterprise mills.",
    },
  ];

  const relatedIndustries = [
    { title: "Textiles", link: ROUTES.industry.textiles },
    { title: "India Textile", link: ROUTES.industry.indiaTextile },
    { title: "Australia Textile", link: ROUTES.industry.australiaTextile },
    { title: "UAE Textile", link: ROUTES.industry.uaeTextile },
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
      <SEO {...seoData.usaTextile} />

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
                USA Textile
              </p>
              <h1 className="text-2xl leading-tight sm:text-[1.7rem] md:text-4xl xl:text-[2.65rem] 2xl:text-5xl 2xl:leading-[1.15]">
                USA Textile Software for Manufacturers & Mills
              </h1>
              <p className="text-base leading-relaxed text-gray-300 sm:text-lg 2xl:text-xl 2xl:leading-relaxed">
                AI-powered textile software for garment manufacturing, fabric
                management, U.S. trade compliance, and export workflows—built for
                American textile industry operations.
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
                      title: "Apparel Production",
                      body: "Cutting, sewing, and finishing workflows.",
                      icon: Shirt,
                      iconClass: "text-amber-400",
                      boxClass: "border-amber-400/25 bg-amber-400/15",
                      topBorder: false,
                    },
                    {
                      title: "Textile Mills",
                      body: "Yarn, fabric, dyeing, and loom planning.",
                      icon: Factory,
                      iconClass: "text-blue-400",
                      boxClass: "border-blue-400/25 bg-blue-400/15",
                      topBorder: false,
                    },
                    {
                      title: "Inventory & Trade",
                      body: "Size-color matrix and U.S. compliance.",
                      icon: Warehouse,
                      iconClass: "text-green-400",
                      boxClass: "border-emerald-400/25 bg-emerald-400/15",
                      topBorder: true,
                    },
                    {
                      title: "Export & Job Work",
                      body: "Documentation and subcontracting.",
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
              title="Why U.S. Textile Needs Modern Technology"
              subtitle="With $60.9B shipments and 453K+ workers—yet 96.9% of apparel imported—U.S. manufacturers need cloud software for planning, inventory, and compliance."
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
          title="Textile Industry Solutions for the U.S."
          subtitle="Textile software for garment manufacturing, mills and exporters—production planning to U.S. trade compliance."
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
          title="Practical Solutions for U.S. Textile Challenges"
          subtitle="Clear answers for production reliability, fabric inventory, trade compliance, and faster order turnaround."
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
          subtitle="Software shaped for apparel brands, textile mills, traders, and exporters across the U.S."
        />

        {/* Mobile: full-width selector */}
        <div className="mb-8 md:hidden">
          <label htmlFor="usa-textile-stakeholder-select" className="sr-only">
            Select stakeholder type
          </label>
          <div className="relative">
            <select
              id="usa-textile-stakeholder-select"
              value={activeStakeholder}
              onChange={(e) => setActiveStakeholder(Number(e.target.value))}
              aria-controls="usa-textile-stakeholder-panel"
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
                id={`usa-textile-stakeholder-tab-${index}`}
                aria-controls="usa-textile-stakeholder-panel"
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
          id="usa-textile-stakeholder-panel"
          role="tabpanel"
          aria-labelledby={`usa-textile-stakeholder-tab-${activeStakeholder}`}
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
          subtitle="AI, cloud textile software, APIs, and mobile—with QuickBooks, NetSuite, EDI, and payment integrations."
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
          title="U.S.-Ready Compliance & Security"
          subtitle="U.S. trade compliance, export schemes, e-invoicing, EDI, and job work controls."
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
          title="Why Choose Us for U.S. Textile"
          subtitle="Purpose-built textile software with U.S. market fit and fast team adoption."
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
          subtitle="Four clear phases—from discovery to U.S. timezone-aligned ongoing support."
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
          title="Proven Outcomes in U.S. Textile Manufacturing"
          subtitle="Results from a unified textile platform—visibility, accuracy, and less manual work."
        />
        <ul className="grid list-none grid-cols-1 gap-4 md:grid-cols-3">
          {caseStudies.map((item, index) => {
            const Icon = item.icon;
            const gradientId = `usa-textile-case-bg-${index}`;
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
            const panelId = `usa-textile-faq-panel-${index}`;
            const buttonId = `usa-textile-faq-button-${index}`;
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

export default UsaTextilePage;