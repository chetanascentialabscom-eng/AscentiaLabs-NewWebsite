import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ChevronDown,
  ChevronUp,
  Shield,
  BarChart3,
  Stethoscope,
  Building2,
  ClipboardCheck,
  Globe,
  Wrench,
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
  Activity,
  Users,
  HeartPulse,
  ShieldCheck,
  Microscope,
} from "lucide-react";
import { useConsultation } from "../../../contexts/ConsultationContext";
import SEO from "../../../components/SEO";
import { seoData } from "../../../utils/seoData";
import { ROUTES } from "../../../utils/routes";

/* ------------------------------------------------------------------ */
/*  Compact design system — dark navy / amber (shared shell/heading)  */
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

const UKHealthcareSoftwarePage = () => {
  const [openFAQ, setOpenFAQ] = useState(null);
  const [activeStakeholder, setActiveStakeholder] = useState(0);
  const { openConsultation } = useConsultation();

  const marketInsights = [
    { value: "1.3M+", label: "NHS staff relying on connected patient record systems" },
    { value: "6,500+", label: "GP practices across England running clinical software" },
    { value: "£3.4B+", label: "UK healthcare IT & digital health software market" },
    { value: "40,000+", label: "CQC-regulated care providers needing compliant systems" },
  ];

  const services = [
    {
      icon: Building2,
      title: "Hospital & Trust Management Software",
      description:
        "Registration, ward/bed management and billing for NHS trusts and private hospitals.",
    },
    {
      icon: Stethoscope,
      title: "GP & Clinic Practice Management Software",
      description:
        "Appointments, patient records & e-prescribing for GP surgeries & private clinics.",
    },
    {
      icon: HeartPulse,
      title: "Care Home & Domiciliary Care Software",
      description:
        "Care plans, MAR & rota management for residential & home care.",
    },
    {
      icon: FileText,
      title: "Medical Billing & Private Insurance Software",
      description:
        "Invoicing, private medical insurance (PMI) claims and self-pay billing in one workflow.",
    },
    {
      icon: Users,
      title: "Healthcare CRM & Patient Engagement Software",
      description:
        "Recall reminders, referral tracking and patient communication for growing private practices.",
    },
    {
      icon: Package,
      title: "Clinical Inventory & Equipment Management",
      description:
        "Stock, consumables and equipment tracking across wards, theatres and clinics.",
    },
  ];

  const challenges = [
    {
      challenge:
        "GP surgeries and clinics juggling multiple disconnected systems for booking, records and billing lose time and create data errors.",
      solution:
        "A single practice management platform brings booking, clinical notes and billing into one connected system.",
    },
    {
      challenge:
        "Care providers preparing for CQC inspections struggle to show consistent digital care records and audit trails.",
      solution:
        "Digital care planning and MAR software keeps records audit-ready and CQC inspection-friendly at all times.",
    },
    {
      challenge:
        "Meeting NHS DSPT, GDPR and Cyber Essentials requirements is a recurring burden for smaller healthcare providers.",
      solution:
        "Software built with DSPT-aligned security, GDPR-compliant data handling and Cyber Essentials controls from day one.",
    },
    {
      challenge:
        "Private clinics processing PMI claims manually face delayed payments and reconciliation errors.",
      solution:
        "Automated PMI and insurer billing workflows speed up claims and reduce reconciliation work.",
    },
  ];

  const stakeholders = [
    {
      tab: "NHS Trusts",
      title: "NHS Trust & Hospital Software",
      description:
        "NHS trusts and private hospitals needing a connected patient administration and ward management system.",
      panel: {
        eyebrow: "Trust workflow",
        stages: [
          { step: "01", name: "Patient registration", status: "In progress" },
          { step: "02", name: "Ward & bed allocation", status: "Queued" },
          { step: "03", name: "Treatment & coding", status: "Next" },
          { step: "04", name: "Discharge & billing", status: "Planned" },
        ],
        kpis: [
          { value: "Live", label: "Bed occupancy" },
          { value: "PAS", label: "System sync" },
          { value: "NHS #", label: "Patient ID linking" },
        ],
      },
      bullets: [
        "Patient administration system (PAS) style registration",
        "Ward, theatre and bed management",
        "NHS number linking and interoperability",
        "Pharmacy and pathology integration",
      ],
    },
    {
      tab: "GP Practices & Clinics",
      title: "GP & Private Clinic Software",
      description:
        "GP surgeries and private clinics needing appointment, records and e-prescribing workflows.",
      panel: {
        eyebrow: "Clinic workflow",
        stages: [
          { step: "01", name: "Online booking", status: "Active" },
          { step: "02", name: "Consultation", status: "Running" },
          { step: "03", name: "e-Prescription", status: "Scheduled" },
          { step: "04", name: "Billing / claim", status: "Ready" },
        ],
        kpis: [
          { value: "Book", label: "Online appointments" },
          { value: "Rx", label: "e-Prescribing" },
          { value: "PMI", label: "Insurer billing" },
        ],
      },
      bullets: [
        "Online appointment booking and reminders",
        "Structured clinical notes and e-prescribing",
        "Private medical insurance (PMI) billing",
        "Patient recall and follow-up automation",
      ],
    },
    {
      tab: "Care Homes",
      title: "Care Home & Domiciliary Care Software",
      description:
        "Residential care homes and home care agencies needing digital care plans and CQC-ready records.",
      panel: {
        eyebrow: "Care workflow",
        stages: [
          { step: "01", name: "Care plan setup", status: "Open" },
          { step: "02", name: "Medication (MAR)", status: "Updated" },
          { step: "03", name: "Visit / shift logging", status: "In progress" },
          { step: "04", name: "CQC reporting", status: "Due" },
        ],
        kpis: [
          { value: "MAR", label: "Digital medication" },
          { value: "CQC", label: "Audit-ready" },
          { value: "Rota", label: "Staff scheduling" },
        ],
      },
      bullets: [
        "Digital care plans and daily logs",
        "Electronic medication administration records",
        "Staff rota and domiciliary visit scheduling",
        "CQC-ready audit trails and reporting",
      ],
    },
    {
      tab: "Diagnostic Centres",
      title: "Diagnostic & Pathology Centre Software",
      description:
        "Private pathology labs and imaging centres needing sample tracking and report delivery.",
      panel: {
        eyebrow: "Lab workflow",
        stages: [
          { step: "01", name: "Sample collection", status: "Done" },
          { step: "02", name: "Test processing", status: "In review" },
          { step: "03", name: "Report generation", status: "Pending" },
          { step: "04", name: "Report delivery", status: "Booked" },
        ],
        kpis: [
          { value: "LIS", label: "Lab workflow" },
          { value: "Digital", label: "Report delivery" },
          { value: "QC", label: "Result review" },
        ],
      },
      bullets: [
        "Sample tracking and test workflows",
        "Digital report generation and delivery",
        "Referring GP and home-collection tracking",
        "Integration with clinic and hospital systems",
      ],
    },
  ];

  const techStack = [
    {
      icon: Activity,
      title: "AI & Smart Alerts",
      body: "Appointment no-show prediction, stock alerts and abnormal-result flagging.",
    },
    {
      icon: Cloud,
      title: "Cloud-Based Practice Platform",
      body: "Fully cloud-hosted — front desk to billing, accessible across sites.",
    },
    {
      icon: Network,
      title: "NHS & Third-Party API Integration",
      body: "NHS number lookup, GP Connect style interoperability and lab/pharmacy links.",
    },
    {
      icon: Smartphone,
      title: "Mobile-First Tools",
      body: "Mobile apps for clinicians, carers and admin staff on the move.",
    },
    {
      icon: BarChart3,
      title: "Data & Analytics",
      body: "Dashboards for occupancy, billing collection and clinic utilisation.",
    },
  ];

  const security = [
    {
      icon: ClipboardCheck,
      title: "NHS DSPT Alignment",
      body: "Built with controls mapped to the NHS Data Security and Protection Toolkit.",
    },
    {
      icon: Globe,
      title: "PMI & Insurer Billing Support",
      body: "Built-in workflows to manage private medical insurance and self-pay billing.",
    },
    {
      icon: ShieldCheck,
      title: "UK GDPR-Compliant",
      body: "Data handling and consent workflows aligned with UK GDPR and the Data Protection Act.",
    },
    {
      icon: Wrench,
      title: "Lab & Pharmacy Integrations",
      body: "Connects with diagnostic labs, pharmacy suppliers and imaging systems.",
    },
    {
      icon: Shield,
      title: "Cyber Essentials-Ready Security",
      body: "Role-based access and controls in line with Cyber Essentials expectations.",
    },
    {
      icon: Database,
      title: "Audit & Activity Logs",
      body: "Full activity logs, ready for CQC inspection or internal audit at any time.",
    },
  ];

  const advantages = [
    {
      id: 1,
      title: "Healthcare-Specific Software",
      description:
        "Built for NHS, GP, clinic and care home workflows — not generic software rebranded.",
    },
    {
      id: 2,
      title: "One Connected Platform",
      description:
        "Registration, records, billing and care plans in one shared patient record.",
    },
    {
      id: 3,
      title: "Built for UK Healthcare",
      description:
        "Configured for NHS DSPT, UK GDPR and CQC reporting requirements.",
    },
    {
      id: 4,
      title: "Measurable Results",
      description:
        "Gains in appointment turnaround, billing accuracy and staff time saved.",
    },
    {
      id: 5,
      title: "Scales As You Grow",
      description:
        "One system, from a single GP surgery to a multi-site trust or care group.",
    },
    {
      id: 6,
      title: "Easy to Adopt",
      description:
        "A clean interface clinicians, carers and front-desk staff actually use.",
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Discovery & Onboarding",
      description:
        "Map registration, billing and compliance needs so your team sees value from week one.",
    },
    {
      number: "02",
      title: "Architecture & Configuration",
      description:
        "Configure records, billing and DSPT/GDPR-aligned workflows to your service.",
    },
    {
      number: "03",
      title: "Implementation & Training",
      description:
        "Data migration and hands-on staff training, scaled to service size.",
    },
    {
      number: "04",
      title: "Ongoing Support",
      description:
        "UK timezone-aligned support and continuous improvement as you scale.",
    },
  ];

  const caseStudies = [
    {
      metric: "9 → 1",
      title: "One Unified Practice System",
      description:
        "Nine disconnected registers and billing tools replaced by one practice management system.",
      icon: Layers,
    },
    {
      metric: "Faster Booking",
      title: "Shorter Appointment Waits",
      description:
        "Online booking and automated reminders cut no-shows and admin workload.",
      icon: RefreshCw,
    },
    {
      metric: "Accuracy",
      title: "Reliable Care Records",
      description:
        "Digital MAR and care plans cut record-keeping errors across care homes.",
      icon: Package,
    },
  ];

  const faqs = [
    {
      question: "What is the difference between a PAS and an EHR system?",
      answer:
        "A patient administration system (PAS) runs registration, scheduling and billing; an EHR focuses on the clinical patient record. Most UK providers need both working together.",
    },
    {
      question: "Does the software align with NHS DSPT requirements?",
      answer:
        "Yes — security controls are mapped to the NHS Data Security and Protection Toolkit standards.",
    },
    {
      question: "Is the platform UK GDPR compliant?",
      answer:
        "Yes — data handling, consent and retention workflows are built around UK GDPR and the Data Protection Act 2018.",
    },
    {
      question: "Is there a free or open source practice management system?",
      answer:
        "Open source tools often lack DSPT alignment, CQC-ready reporting and ongoing support. A supported platform pays for itself through fewer billing errors and faster patient turnaround.",
    },
    {
      question: "Can it handle private medical insurance (PMI) claims?",
      answer:
        "Yes — PMI and insurer billing workflows are built into the billing module.",
    },
    {
      question: "Does it support CQC-ready care home reporting?",
      answer:
        "Yes — digital care plans, MAR and audit trails are designed to support CQC inspections.",
    },
    {
      question: "Can diagnostic and pathology labs use the same platform?",
      answer:
        "Yes — sample tracking, test workflows and digital report delivery are built for labs and imaging centres.",
    },
    {
      question: "Is this a cloud-based or on-premise system?",
      answer:
        "It's fully cloud-based by default, with on-premise deployment available for providers that require it.",
    },
    {
      question: "How long does implementation take for a mid-sized practice?",
      answer:
        "Most practices and clinics go live within weeks, with front-desk and billing teams seeing value from day one.",
    },
    {
      question: "Can the system scale from a single surgery to a multi-site group?",
      answer:
        "Yes — the same records, billing and compliance foundation scales from one surgery to a multi-site trust or care group.",
    },
  ];

  const relatedIndustries = [
    { title: "Healthcare", link: ROUTES.industry.healthcare },
    { title: "USA Healthcare", link: ROUTES.industry.usaHealthcare },
    { title: "India Healthcare", link: ROUTES.industry.indiaHealthcare },
    { title: "Australia Healthcare", link: ROUTES.industry.australiaHealthcare },
    { title: "Manufacturing", link: ROUTES.industry.manufacturing },
    { title: "Enterprise Software", link: ROUTES.industry.erp },
    { title: "Business CRM", link: ROUTES.industry.businessCrm },
    { title: "Logistics", link: ROUTES.industry.logistics },
    { title: "Education", link: ROUTES.industry.education },
  ];

  const active = stakeholders[activeStakeholder];
  const ActiveStakeholderIcon = [Building2, Stethoscope, HeartPulse, Microscope][
    activeStakeholder
  ];

  const toggleFAQ = (index) => setOpenFAQ(openFAQ === index ? null : index);

  return (
    <div className="min-h-screen bg-black">
      <SEO {...seoData.ukHealthcare} />

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
                UK Healthcare Software
              </p>
              <h1 className="text-2xl leading-tight sm:text-[1.7rem] md:text-4xl xl:text-[2.65rem] 2xl:text-5xl 2xl:leading-[1.15]">
                GP, Clinic & Care Home Management Software for UK Healthcare system
              </h1>
              <p className="text-base leading-relaxed text-gray-300 sm:text-lg 2xl:text-xl 2xl:leading-relaxed">
                Practice, clinic, care home and diagnostic software for UK providers — with GDPR compliance and NHS DSPT-aligned security built in.
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
                  href="#uk-healthcare-capabilities"
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
                      Complete Healthcare Software Suite
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
                      title: "NHS Trust & Hospital",
                      body: "Registration, wards and billing in one PAS.",
                      icon: Building2,
                      iconClass: "text-amber-400",
                      boxClass: "border-amber-400/25 bg-amber-400/15",
                      topBorder: false,
                    },
                    {
                      title: "GP & Clinics",
                      body: "Booking, records and e-prescribing.",
                      icon: Stethoscope,
                      iconClass: "text-blue-400",
                      boxClass: "border-blue-400/25 bg-blue-400/15",
                      topBorder: false,
                    },
                    {
                      title: "Care Homes",
                      body: "Digital care plans and MAR tracking.",
                      icon: HeartPulse,
                      iconClass: "text-green-400",
                      boxClass: "border-emerald-400/25 bg-emerald-400/15",
                      topBorder: true,
                    },
                    {
                      title: "Diagnostics & Labs",
                      body: "Sample tracking and digital reports.",
                      icon: Microscope,
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
          aria-labelledby="uk-healthcare-market-heading"
        >
          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
            <Heading
              id="uk-healthcare-market-heading"
              align="left"
              eyebrow="Market Context"
              title="Why UK Healthcare Providers Need Modern Practice Software"
              subtitle="6,500+ GP practices and 40,000+ CQC-regulated providers now run on digital records — paper-based or disconnected systems mean billing errors, compliance gaps, and slower patient care."
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
      <Shell labelledBy="uk-healthcare-capabilities">
        <Heading
          id="uk-healthcare-capabilities"
          eyebrow="Services"
          title="Healthcare Software Solutions for the UK"
          subtitle="GP, clinic, care home and diagnostic software — built for UK healthcare providers."
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
      <Shell labelledBy="uk-healthcare-challenges-heading" alt>
        <Heading
          id="uk-healthcare-challenges-heading"
          eyebrow="Solutions"
          title="Practical Fixes for UK Healthcare Challenges"
          subtitle="Straightforward answers for fragmented records, CQC readiness, DSPT/GDPR compliance and PMI billing."
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
      <Shell labelledBy="uk-healthcare-stakeholders-heading">
        <Heading
          id="uk-healthcare-stakeholders-heading"
          eyebrow="Use Cases"
          title="Built for Every Part of UK Healthcare"
          subtitle="Software shaped for NHS trusts, GP practices, care homes and diagnostic centres across the UK."
        />

        {/* Mobile: full-width selector */}
        <div className="mb-8 md:hidden">
          <label htmlFor="uk-healthcare-stakeholder-select" className="sr-only">
            Select stakeholder type
          </label>
          <div className="relative">
            <select
              id="uk-healthcare-stakeholder-select"
              value={activeStakeholder}
              onChange={(e) => setActiveStakeholder(Number(e.target.value))}
              aria-controls="uk-healthcare-stakeholder-panel"
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
                id={`uk-healthcare-stakeholder-tab-${index}`}
                aria-controls="uk-healthcare-stakeholder-panel"
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
          id="uk-healthcare-stakeholder-panel"
          role="tabpanel"
          aria-labelledby={`uk-healthcare-stakeholder-tab-${activeStakeholder}`}
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
      <Shell labelledBy="uk-healthcare-tech-heading" alt>
        <Heading
          id="uk-healthcare-tech-heading"
          eyebrow="Capabilities"
          title="Modern Healthcare Software Architecture"
          subtitle="AI-assisted alerts, a cloud practice platform, NHS-aligned interoperability and mobile tools for every care team."
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
      <Shell labelledBy="uk-healthcare-compliance-heading">
        <Heading
          id="uk-healthcare-compliance-heading"
          eyebrow="Compliance"
          title="UK-Ready Compliance & Security"
          subtitle="NHS DSPT alignment, UK GDPR, Cyber Essentials-ready controls and CQC audit-ready reporting."
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
      <Shell labelledBy="uk-healthcare-why-heading" alt>
        <Heading
          id="uk-healthcare-why-heading"
          eyebrow="Why Ascentia Labs"
          title="Why Choose Us for UK Healthcare Software"
          subtitle="A purpose-built practice platform with UK compliance fit and fast staff adoption."
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
      <Shell labelledBy="uk-healthcare-process-heading">
        <Heading
          id="uk-healthcare-process-heading"
          eyebrow="Delivery"
          title="How We Deliver Healthcare Software"
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
      <Shell labelledBy="uk-healthcare-impact-heading" alt>
        <Heading
          id="uk-healthcare-impact-heading"
          eyebrow="Results"
          title="Proven Outcomes for UK Healthcare Providers"
          subtitle="Results from one unified practice platform — faster booking, cleaner billing and less manual work."
        />
        <ul className="grid list-none grid-cols-1 gap-4 md:grid-cols-3">
          {caseStudies.map((item, index) => {
            const Icon = item.icon;
            const gradientId = `uk-healthcare-case-bg-${index}`;
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
      <Shell labelledBy="uk-healthcare-faq-heading">
        <Heading id="uk-healthcare-faq-heading" title="Common Questions" />
        <div className="mx-auto max-w-3xl divide-y divide-white/10 border-y border-white/10">
          {faqs.map((faq, index) => {
            const open = openFAQ === index;
            const panelId = `uk-healthcare-faq-panel-${index}`;
            const buttonId = `uk-healthcare-faq-button-${index}`;
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
        aria-labelledby="uk-healthcare-related-industries-heading"
      >
        <div className="container mx-auto max-w-6xl px-4">
          <h2
            id="uk-healthcare-related-industries-heading"
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

export default UKHealthcareSoftwarePage;
