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
  Activity,
  Users,
  Home,
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

const UsaHealthcareSoftwarePage = () => {
  const [openFAQ, setOpenFAQ] = useState(null);
  const [activeStakeholder, setActiveStakeholder] = useState(0);
  const { openConsultation } = useConsultation();

  const marketInsights = [
    { value: "96%", label: "U.S. hospitals using certified EHR technology" },
    { value: "78%+", label: "Office-based physicians using EHR software" },
    { value: "$39.7B", label: "U.S. healthcare IT software market size" },
    { value: "5,000+", label: "Hospitals running on EMR & practice management systems" },
  ];

  const services = [
    {
      icon: Stethoscope,
      title: "EHR & EMR Software Development",
      description:
        "Custom electronic health record systems built around real clinical documentation workflows.",
    },
    {
      icon: ClipboardCheck,
      title: "Medical Practice Management Software",
      description:
        "Scheduling, patient intake, charting and front-desk operations on one connected system.",
    },
    {
      icon: FileText,
      title: "Healthcare Billing & RCM Software",
      description:
        "Claims, coding, denials tracking and revenue cycle management built for U.S. payers.",
    },
    {
      icon: Activity,
      title: "Clinical Trial Management Software",
      description:
        "CTMS workflows for protocol tracking, patient enrollment and regulatory documentation.",
    },
    {
      icon: Users,
      title: "Healthcare CRM Software",
      description:
        "Patient relationship tracking, referral management and care-team communication in one place.",
    },
    {
      icon: Home,
      title: "Home Health & Care Management Software",
      description:
        "Visit scheduling, caregiver dispatch and care plan tracking for home health agencies.",
    },
  ];

  const challenges = [
    {
      challenge:
        "Clunky legacy EMR systems slow down documentation and drive physician burnout.",
      solution:
        "A modern, cloud-based EHR software solution cuts click-fatigue with faster, clinician-friendly charting.",
    },
    {
      challenge:
        "Fragmented scheduling, billing and clinical systems create manual re-entry and denied claims.",
      solution:
        "A unified practice management and billing platform keeps patient, claim and payment data in sync.",
    },
    {
      challenge:
        "HIPAA compliance gaps in patchwork software expose practices to audit and breach risk.",
      solution:
        "Built-in HIPAA compliant software architecture, access controls and audit logging reduce that risk.",
    },
    {
      challenge:
        "Specialty providers—behavioral health, dental, home health—are underserved by one-size-fits-all EMRs.",
      solution:
        "Configurable specialty workflows adapt the same core platform to each care setting's documentation needs.",
    },
  ];

  const stakeholders = [
    {
      tab: "Medical Practices",
      title: "Medical Practice & Clinic Software",
      description:
        "Independent practices and multi-provider clinics needing an EHR and practice management system in one.",
      panel: {
        eyebrow: "Clinic workflow",
        stages: [
          { step: "01", name: "Patient intake", status: "In progress" },
          { step: "02", name: "Charting", status: "Queued" },
          { step: "03", name: "Coding & billing", status: "Next" },
          { step: "04", name: "Follow-up", status: "Planned" },
        ],
        kpis: [
          { value: "Live", label: "Schedule view" },
          { value: "EHR", label: "Chart access" },
          { value: "RCM", label: "Claims status" },
        ],
      },
      bullets: [
        "Appointment scheduling and patient intake",
        "Clinical charting and e-prescribing",
        "Medical billing and claims tracking",
        "Patient portal and reminders",
      ],
    },
    {
      tab: "Hospitals & Health Systems",
      title: "Hospital & Health System Software",
      description:
        "Multi-department hospitals needing interoperable EMR systems across inpatient and outpatient care.",
      panel: {
        eyebrow: "Hospital workflow",
        stages: [
          { step: "01", name: "Admission", status: "Active" },
          { step: "02", name: "Care documentation", status: "Running" },
          { step: "03", name: "Orders & labs", status: "Scheduled" },
          { step: "04", name: "Discharge", status: "Ready" },
        ],
        kpis: [
          { value: "HL7", label: "Data exchange" },
          { value: "24/7", label: "Uptime target" },
          { value: "QC", label: "Care review" },
        ],
      },
      bullets: [
        "Inpatient and outpatient EMR workflows",
        "HL7/FHIR interoperability across departments",
        "Order sets, labs and medication tracking",
        "Hospital-wide reporting and analytics",
      ],
    },
    {
      tab: "Behavioral Health",
      title: "Behavioral & Mental Health Software",
      description:
        "Behavioral health and psychiatry providers needing documentation built for therapy and mental health care.",
      panel: {
        eyebrow: "Care workflow",
        stages: [
          { step: "01", name: "Intake assessment", status: "Open" },
          { step: "02", name: "Treatment plan", status: "Updated" },
          { step: "03", name: "Session notes", status: "In progress" },
          { step: "04", name: "Outcome review", status: "Due" },
        ],
        kpis: [
          { value: "Notes", label: "Session tracking" },
          { value: "Plan", label: "Care goals" },
          { value: "Secure", label: "Records access" },
        ],
      },
      bullets: [
        "Behavioral health electronic health records",
        "Therapy session notes and treatment plans",
        "Outcome measures and progress tracking",
        "Confidential, role-based record access",
      ],
    },
    {
      tab: "Home Health Agencies",
      title: "Home Health & Care Agency Software",
      description:
        "Home health and care management agencies coordinating visits, caregivers and patient documentation.",
      panel: {
        eyebrow: "Field workflow",
        stages: [
          { step: "01", name: "Visit scheduling", status: "Done" },
          { step: "02", name: "Caregiver dispatch", status: "In review" },
          { step: "03", name: "Visit documentation", status: "Pending" },
          { step: "04", name: "Care plan update", status: "Booked" },
        ],
        kpis: [
          { value: "GPS", label: "Visit verification" },
          { value: "Care", label: "Plan tracking" },
          { value: "Docs", label: "Compliance" },
        ],
      },
      bullets: [
        "Caregiver scheduling and dispatch",
        "Point-of-care visit documentation",
        "Care plan and medication tracking",
        "Compliance-ready visit records",
      ],
    },
  ];

  const techStack = [
    {
      icon: Activity,
      title: "AI & Clinical Insights",
      body: "Documentation assistance, risk flagging and clinical decision support.",
    },
    {
      icon: Cloud,
      title: "Cloud-Based EHR Platform",
      body: "Fully cloud-hosted — front desk to exam room, no local servers.",
    },
    {
      icon: Network,
      title: "HL7/FHIR Interoperability",
      body: "Open APIs for labs, imaging, pharmacies and health information exchanges.",
    },
    {
      icon: Smartphone,
      title: "Mobile-First Tools",
      body: "Mobile apps for clinicians, care teams and field-based caregivers.",
    },
    {
      icon: BarChart3,
      title: "Data & Analytics",
      body: "Dashboards for claim denials, patient volume and care outcomes.",
    },
  ];

  const security = [
    {
      icon: ClipboardCheck,
      title: "HIPAA Compliance",
      body: "Built-in safeguards for protected health information, end to end.",
    },
    {
      icon: Globe,
      title: "HL7/FHIR Data Exchange",
      body: "Standards-based interoperability across labs, pharmacies and payers.",
    },
    {
      icon: FileText,
      title: "e-Prescribing & EPCS",
      body: "Electronic prescribing, including controlled substances, built in.",
    },
    {
      icon: Wrench,
      title: "Third-Party Integrations",
      body: "Connects with major EHR systems, Dragon Medical and lab networks.",
    },
    {
      icon: Shield,
      title: "Data Security & Encryption",
      body: "Role-based access and encryption for every patient record.",
    },
    {
      icon: Database,
      title: "Audit & Access Logs",
      body: "Full access logs, ready for compliance review at any time.",
    },
  ];

  const advantages = [
    {
      id: 1,
      title: "Healthcare-Specific Software",
      description:
        "Built for clinical and administrative workflows — not generic software rebranded.",
    },
    {
      id: 2,
      title: "One Connected Platform",
      description:
        "EHR, scheduling, billing and compliance in one shared patient record.",
    },
    {
      id: 3,
      title: "Built for U.S. Healthcare",
      description:
        "Configured for HIPAA, HL7/FHIR standards and U.S. payer billing rules.",
    },
    {
      id: 4,
      title: "Measurable Results",
      description:
        "Gains in documentation speed, claims accuracy and staff time saved.",
    },
    {
      id: 5,
      title: "Scales As You Grow",
      description:
        "One system, from a single practice to a multi-site health system.",
    },
    {
      id: 6,
      title: "Easy to Adopt",
      description:
        "A clean interface clinicians and front-desk staff actually use.",
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Discovery & Onboarding",
      description:
        "Map clinical, billing and compliance needs so your team sees value from week one.",
    },
    {
      number: "02",
      title: "Architecture & Configuration",
      description:
        "Configure charting, scheduling, billing and compliance workflows to your specialty.",
    },
    {
      number: "03",
      title: "Implementation & Training",
      description:
        "Data migration and hands-on clinician training, scaled to practice complexity.",
    },
    {
      number: "04",
      title: "Ongoing Support",
      description:
        "U.S. timezone-aligned support and continuous improvement as your practice scales.",
    },
  ];

  const caseStudies = [
    {
      metric: "10 → 1",
      title: "One Unified Care Platform",
      description:
        "Ten disconnected scheduling, charting and billing tools replaced by one EHR system.",
      icon: Layers,
    },
    {
      metric: "Fewer Denials",
      title: "Cleaner Claims Submission",
      description:
        "Automated coding checks and eligibility verification cut claim denials before submission.",
      icon: RefreshCw,
    },
    {
      metric: "Faster Charting",
      title: "Lower Documentation Time",
      description:
        "Streamlined templates and voice-assisted notes cut time spent on documentation per visit.",
      icon: Package,
    },
  ];

  const faqs = [
    {
      question: "What's the difference between EMR software and EHR software?",
      answer:
        "EMR systems hold one practice's patient chart; EHR software is built to share that record securely across providers and care settings.",
    },
    {
      question: "Is cloud-based EHR software HIPAA compliant?",
      answer:
        "Yes — encryption, role-based access and audit logging are built in so patient data stays protected end to end.",
    },
    {
      question: "Can this integrate with Epic or other major EHR systems?",
      answer:
        "Yes — HL7/FHIR-based interoperability lets this platform exchange records with Epic and other major EHR systems.",
    },
    {
      question: "Does it support behavioral and mental health EHR needs?",
      answer:
        "Yes — behavioral health electronic health records, treatment plans and session notes are core, purpose-built workflows.",
    },
    {
      question: "Is there a free EHR software option for small practices?",
      answer:
        "Free tools usually cover only basic charting. Practices billing insurance need scheduling, coding and compliance together, which is why a connected platform pays for itself quickly.",
    },
    {
      question: "Does it include medical billing and revenue cycle management?",
      answer:
        "Yes — coding, claims submission, denial tracking and payment posting are built into the same platform as your charting.",
    },
    {
      question: "Can it support dental practice management specifically?",
      answer:
        "Yes — dental-specific charting, imaging links and treatment plan tracking run on the same configurable platform.",
    },
    {
      question: "Does it integrate with Dragon Medical dictation software?",
      answer:
        "Yes — voice-to-text dictation integrates directly into clinical notes to speed up documentation.",
    },
    {
      question: "How long does healthcare software implementation take?",
      answer:
        "Most practices go live within weeks, with staff seeing value from the first week of scheduling and charting.",
    },
    {
      question: "Can the platform scale from a single clinic to a hospital system?",
      answer:
        "Yes — the same EHR, billing and compliance foundation scales from one clinic to a multi-site health system.",
    },
  ];

  const relatedIndustries = [
    { title: "Healthcare", link: ROUTES.industry.healthcare },
    { title: "India Healthcare", link: ROUTES.industry.indiaHealthcare },
    { title: "UK Healthcare", link: ROUTES.industry.ukHealthcare },
    { title: "Australia Healthcare", link: ROUTES.industry.australiaHealthcare },
    { title: "USA Textile", link: ROUTES.industry.usaTextile },
    { title: "Manufacturing", link: ROUTES.industry.manufacturing },
    { title: "Enterprise Software", link: ROUTES.industry.erp },
    { title: "Business CRM", link: ROUTES.industry.businessCrm },
    { title: "Logistics", link: ROUTES.industry.logistics },
    { title: "Real Estate", link: ROUTES.industry.realEstate },
    { title: "Education", link: ROUTES.industry.education },
  ];

  const active = stakeholders[activeStakeholder];
  const ActiveStakeholderIcon = [Stethoscope, Building2, Brain, Home][
    activeStakeholder
  ];

  const toggleFAQ = (index) => setOpenFAQ(openFAQ === index ? null : index);

  return (
    <div className="min-h-screen bg-black">
      <SEO {...seoData.usaHealthcare} />

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
                USA Healthcare Software
              </p>
              <h1 className="text-2xl leading-tight sm:text-[1.7rem] md:text-4xl xl:text-[2.65rem] 2xl:text-5xl 2xl:leading-[1.15]">
                Healthcare Software Development for U.S. Practices & Hospitals
              </h1>
              <p className="text-base leading-relaxed text-gray-300 sm:text-lg 2xl:text-xl 2xl:leading-relaxed">
                Custom EHR, practice management, medical billing and care
                coordination software — built for U.S. healthcare providers,
                from single clinics to multi-site health systems.
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
                  href="#usa-healthcare-capabilities"
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
                    <Stethoscope className="h-4 w-4 shrink-0 text-amber-400 sm:h-5 sm:w-5 2xl:h-6 2xl:w-6" />
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
                      title: "EHR & Charting",
                      body: "Clinical documentation and e-prescribing.",
                      icon: Stethoscope,
                      iconClass: "text-amber-400",
                      boxClass: "border-amber-400/25 bg-amber-400/15",
                      topBorder: false,
                    },
                    {
                      title: "Hospitals & Systems",
                      body: "Interoperable, multi-department EMR.",
                      icon: Building2,
                      iconClass: "text-blue-400",
                      boxClass: "border-blue-400/25 bg-blue-400/15",
                      topBorder: false,
                    },
                    {
                      title: "Billing & Compliance",
                      body: "RCM workflows and HIPAA safeguards.",
                      icon: ClipboardCheck,
                      iconClass: "text-green-400",
                      boxClass: "border-emerald-400/25 bg-emerald-400/15",
                      topBorder: true,
                    },
                    {
                      title: "Care Coordination",
                      body: "Behavioral health and home health tools.",
                      icon: Home,
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
          aria-labelledby="usa-healthcare-market-heading"
        >
          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
            <Heading
              id="usa-healthcare-market-heading"
              align="left"
              eyebrow="Market Context"
              title="Why U.S. Healthcare Providers Need Modern Software"
              subtitle="A $39.7B U.S. healthcare IT market and 96% EHR-adopting hospitals set the bar — outdated systems now mean compliance risk, billing errors, and slower patient care."
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
      <Shell labelledBy="usa-healthcare-capabilities">
        <Heading
          id="usa-healthcare-capabilities"
          eyebrow="Services"
          title="Healthcare Software Solutions for the U.S."
          subtitle="EHR and EMR software, practice management, medical billing and care coordination — built for U.S. healthcare providers."
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
      <Shell labelledBy="usa-healthcare-challenges-heading" alt>
        <Heading
          id="usa-healthcare-challenges-heading"
          eyebrow="Solutions"
          title="Practical Fixes for U.S. Healthcare Challenges"
          subtitle="Straightforward answers for clinician burnout, billing leakage, compliance risk and specialty care gaps."
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
      <Shell labelledBy="usa-healthcare-stakeholders-heading">
        <Heading
          id="usa-healthcare-stakeholders-heading"
          eyebrow="Use Cases"
          title="Built for Every Part of U.S. Healthcare"
          subtitle="Software shaped for medical practices, hospitals, behavioral health providers and home health agencies."
        />

        {/* Mobile: full-width selector */}
        <div className="mb-8 md:hidden">
          <label htmlFor="usa-healthcare-stakeholder-select" className="sr-only">
            Select stakeholder type
          </label>
          <div className="relative">
            <select
              id="usa-healthcare-stakeholder-select"
              value={activeStakeholder}
              onChange={(e) => setActiveStakeholder(Number(e.target.value))}
              aria-controls="usa-healthcare-stakeholder-panel"
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
                id={`usa-healthcare-stakeholder-tab-${index}`}
                aria-controls="usa-healthcare-stakeholder-panel"
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
          id="usa-healthcare-stakeholder-panel"
          role="tabpanel"
          aria-labelledby={`usa-healthcare-stakeholder-tab-${activeStakeholder}`}
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
      <Shell labelledBy="usa-healthcare-tech-heading" alt>
        <Heading
          id="usa-healthcare-tech-heading"
          eyebrow="Capabilities"
          title="Modern Healthcare Software Architecture"
          subtitle="AI-assisted charting, a cloud EHR platform, HL7/FHIR APIs and mobile tools for every care team."
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
      <Shell labelledBy="usa-healthcare-compliance-heading">
        <Heading
          id="usa-healthcare-compliance-heading"
          eyebrow="Compliance"
          title="HIPAA-Ready Compliance & Security"
          subtitle="HIPAA compliance, HL7/FHIR interoperability, e-prescribing and audit-ready controls, built into the platform."
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
      <Shell labelledBy="usa-healthcare-why-heading" alt>
        <Heading
          id="usa-healthcare-why-heading"
          eyebrow="Why Ascentia Labs"
          title="Why Choose Us for U.S. Healthcare Software"
          subtitle="A purpose-built healthcare software platform with U.S. compliance fit and fast clinical team adoption."
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
      <Shell labelledBy="usa-healthcare-process-heading">
        <Heading
          id="usa-healthcare-process-heading"
          eyebrow="Delivery"
          title="How We Deliver Healthcare Software"
          subtitle="Four clear phases — from discovery to U.S. timezone-aligned ongoing support."
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
      <Shell labelledBy="usa-healthcare-impact-heading" alt>
        <Heading
          id="usa-healthcare-impact-heading"
          eyebrow="Results"
          title="Proven Outcomes for U.S. Healthcare Providers"
          subtitle="Results from one unified healthcare platform — better documentation, cleaner claims and less manual work."
        />
        <ul className="grid list-none grid-cols-1 gap-4 md:grid-cols-3">
          {caseStudies.map((item, index) => {
            const Icon = item.icon;
            const gradientId = `usa-healthcare-case-bg-${index}`;
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
      <Shell labelledBy="usa-healthcare-faq-heading">
        <Heading id="usa-healthcare-faq-heading" title="Common Questions" />
        <div className="mx-auto max-w-3xl divide-y divide-white/10 border-y border-white/10">
          {faqs.map((faq, index) => {
            const open = openFAQ === index;
            const panelId = `usa-healthcare-faq-panel-${index}`;
            const buttonId = `usa-healthcare-faq-button-${index}`;
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
        aria-labelledby="usa-healthcare-related-industries-heading"
      >
        <div className="container mx-auto max-w-6xl px-4">
          <h2
            id="usa-healthcare-related-industries-heading"
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

export default UsaHealthcareSoftwarePage;
