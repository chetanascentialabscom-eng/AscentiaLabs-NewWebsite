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
  Users,
  Mic,
  Home,
  Sparkles,
  ReceiptText,
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

const UaeHealthcareSoftwarePage = () => {
  const [openFAQ, setOpenFAQ] = useState(null);
  const [activeStakeholder, setActiveStakeholder] = useState(0);
  const { openConsultation } = useConsultation();

  const marketInsights = [
    { value: "10M+", label: "Residents served by UAE healthcare providers" },
    { value: "$25B+", label: "UAE healthcare market size" },
    { value: "3", label: "Health regulators: DHA, DoH Abu Dhabi and MOHAP" },
    { value: "2", label: "Emirate-level health information exchanges: Malaffi and NABIDH" },
  ];

  const services = [
    {
      icon: Stethoscope,
      title: "EMR & EHR Software Development",
      description:
        "Custom electronic medical records built around UAE clinic and hospital workflows.",
    },
    {
      icon: Building2,
      title: "Hospital & Clinic Management System",
      description:
        "Registration, appointments, pharmacy and billing across hospitals and polyclinics.",
    },
    {
      icon: ReceiptText,
      title: "Insurance E-Claims & Medical Billing",
      description:
        "Eligibility checks, coding and e-claim submission built for UAE insurers.",
    },
    {
      icon: Sparkles,
      title: "Medical Spa & Aesthetic Clinic Software",
      description:
        "Treatment packages, before-and-after records and memberships for aesthetic clinics.",
    },
    {
      icon: Users,
      title: "Healthcare CRM & Patient Engagement",
      description:
        "Multilingual reminders, lead tracking and follow-ups for local and international patients.",
    },
    {
      icon: Home,
      title: "Home Healthcare & Care Management",
      description:
        "Nurse dispatch, visit records and care plan tracking for home healthcare providers.",
    },
  ];

  const challenges = [
    {
      challenge:
        "Dubai, Abu Dhabi and the Northern Emirates each follow different regulator and reporting requirements.",
      solution:
        "Configurable workflows adapt one platform to each emirate's regulator and reporting rules.",
    },
    {
      challenge:
        "Manual coding and missed eligibility checks lead to insurance claim rejections and delayed payments.",
      solution:
        "Automated eligibility and coding checks catch errors before claims reach the insurer.",
    },
    {
      challenge:
        "Health data rules under the UAE's ICT health law raise questions about where patient records can be stored.",
      solution:
        "Deployment options and access controls are planned around in-country data requirements.",
    },
    {
      challenge:
        "A diverse, international patient base and growing medical tourism demand more than English-only systems.",
      solution:
        "Arabic and English patient tools, plus multilingual messaging, make every visit easier.",
    },
  ];

  const stakeholders = [
    {
      tab: "Hospitals & Multi-Specialty",
      title: "Hospital & Multi-Specialty Center Software",
      description:
        "Hospitals and large centers needing connected records across departments, pharmacy and billing.",
      panel: {
        eyebrow: "Hospital workflow",
        stages: [
          { step: "01", name: "Emirates ID registration", status: "In progress" },
          { step: "02", name: "Consultation & orders", status: "Queued" },
          { step: "03", name: "Pharmacy & lab", status: "Next" },
          { step: "04", name: "Insurance billing", status: "Planned" },
        ],
        kpis: [
          { value: "Live", label: "Bed & OPD view" },
          { value: "HIE", label: "Record sharing" },
          { value: "Claims", label: "Insurer status" },
        ],
      },
      bullets: [
        "Registration and patient identification",
        "Inpatient, outpatient and pharmacy modules",
        "Lab, radiology and order tracking",
        "Insurance approvals and e-claims in one flow",
      ],
    },
    {
      tab: "Clinics & Polyclinics",
      title: "Clinic & Polyclinic Management Software",
      description:
        "GP, dental, dermatology and mental health clinics needing scheduling, charting and billing together.",
      panel: {
        eyebrow: "Clinic workflow",
        stages: [
          { step: "01", name: "Online booking", status: "Active" },
          { step: "02", name: "Consultation notes", status: "Running" },
          { step: "03", name: "e-Prescription", status: "Scheduled" },
          { step: "04", name: "Billing & claims", status: "Ready" },
        ],
        kpis: [
          { value: "Slots", label: "Doctor calendar" },
          { value: "Rx", label: "e-Prescribing" },
          { value: "Ins", label: "Insurance check" },
        ],
      },
      bullets: [
        "Doctor scheduling and online booking",
        "Specialty charting for dental and mental health",
        "Voice dictation for faster notes",
        "Insurance eligibility and direct billing",
      ],
    },
    {
      tab: "Medical Spas & Aesthetics",
      title: "Medical Spa & Aesthetic Clinic Software",
      description:
        "Medical spas, dermatology and cosmetic clinics managing treatment plans, packages and repeat clients.",
      panel: {
        eyebrow: "Aesthetic workflow",
        stages: [
          { step: "01", name: "Consultation", status: "Open" },
          { step: "02", name: "Treatment plan", status: "Updated" },
          { step: "03", name: "Session & photos", status: "In progress" },
          { step: "04", name: "Package renewal", status: "Due" },
        ],
        kpis: [
          { value: "Pkg", label: "Session balance" },
          { value: "Photo", label: "Progress records" },
          { value: "CRM", label: "Client retention" },
        ],
      },
      bullets: [
        "Treatment plans and consent forms",
        "Before-and-after photo records",
        "Packages, memberships and loyalty offers",
        "Automated rebooking and client reminders",
      ],
    },
    {
      tab: "Home Healthcare",
      title: "Home Healthcare & Care Provider Software",
      description:
        "Home healthcare providers coordinating nurses, visits and patient documentation across the emirates.",
      panel: {
        eyebrow: "Field workflow",
        stages: [
          { step: "01", name: "Visit request", status: "Done" },
          { step: "02", name: "Nurse dispatch", status: "In review" },
          { step: "03", name: "Visit documentation", status: "Pending" },
          { step: "04", name: "Care plan update", status: "Booked" },
        ],
        kpis: [
          { value: "GPS", label: "Visit tracking" },
          { value: "Care", label: "Plan status" },
          { value: "Docs", label: "Visit records" },
        ],
      },
      bullets: [
        "Nurse and caregiver scheduling",
        "Point-of-care visit documentation",
        "Care plan and medication tracking",
        "Family updates and visit summaries",
      ],
    },
  ];

  const techStack = [
    {
      icon: Mic,
      title: "Voice & Dictation Support",
      body: "Speech-to-text built into clinical note-taking.",
    },
    {
      icon: Cloud,
      title: "Cloud-Based Clinic Platform",
      body: "Fully cloud-hosted, with deployment options planned around UAE requirements.",
    },
    {
      icon: Network,
      title: "Integration APIs",
      body: "Open APIs for labs, pharmacies, insurers and health information exchanges.",
    },
    {
      icon: Smartphone,
      title: "Mobile-First Tools",
      body: "Mobile apps for doctors, nurses and patient self-service.",
    },
    {
      icon: BarChart3,
      title: "Data & Analytics",
      body: "Dashboards for claim rejections, patient volume and revenue.",
    },
  ];

  const security = [
    {
      icon: ClipboardCheck,
      title: "Regulator-Aligned Workflows",
      body: "Configurable to DHA, DoH Abu Dhabi and MOHAP requirements.",
    },
    {
      icon: Globe,
      title: "Health Information Exchange",
      body: "Built to support record sharing with emirate-level exchanges.",
    },
    {
      icon: FileText,
      title: "E-Claims & Insurance Billing",
      body: "Eligibility, coding and e-claim workflows for UAE insurers.",
    },
    {
      icon: Wrench,
      title: "Third-Party Integrations",
      body: "Connects with labs, pharmacies and Dragon Medical dictation software.",
    },
    {
      icon: Shield,
      title: "Data Security & Encryption",
      body: "Role-based access and encryption for every patient record.",
    },
    {
      icon: Database,
      title: "Audit & Access Logs",
      body: "Full access logs, ready for review at any time.",
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
        "Registration, charting, pharmacy and billing in one shared patient record.",
    },
    {
      id: 3,
      title: "Built for the UAE Market",
      description:
        "Configured for multi-emirate regulators, insurer e-claims and Arabic/English use.",
    },
    {
      id: 4,
      title: "Measurable Results",
      description:
        "Gains in claim acceptance, registration speed and staff time saved.",
    },
    {
      id: 5,
      title: "Scales As You Grow",
      description:
        "One system, from a single clinic to a multi-branch healthcare group.",
    },
    {
      id: 6,
      title: "Easy to Adopt",
      description:
        "A clean interface doctors, nurses and front-desk staff actually use.",
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Discovery & Onboarding",
      description:
        "Map clinical, billing and regulatory needs so your team sees value from week one.",
    },
    {
      number: "02",
      title: "Architecture & Configuration",
      description:
        "Configure charting, e-claims and reporting workflows to your emirate and specialty.",
    },
    {
      number: "03",
      title: "Implementation & Training",
      description:
        "Data migration and hands-on training in English and Arabic, scaled to your facility.",
    },
    {
      number: "04",
      title: "Ongoing Support",
      description:
        "Gulf timezone-aligned support and continuous improvement as you scale.",
    },
  ];

  const caseStudies = [
    {
      metric: "6 → 1",
      title: "One Unified Clinic Platform",
      description:
        "Six disconnected booking, charting and billing tools replaced by one clinic system.",
      icon: Layers,
    },
    {
      metric: "Fewer Rejections",
      title: "Cleaner Insurance Claims",
      description:
        "Automated eligibility and coding checks cut claim rejections before submission.",
      icon: RefreshCw,
    },
    {
      metric: "Faster Check-In",
      title: "Quicker Patient Registration",
      description:
        "Streamlined registration and pre-filled records shorten reception wait times.",
      icon: Package,
    },
  ];

  const faqs = [
    {
      question: "What's the difference between EMR software and EHR software?",
      answer:
        "An EMR holds one clinic's patient chart; an EHR is built to share that record securely across clinics, hospitals and other care providers.",
    },
    {
      question: "Does the software support DHA, DoH and MOHAP requirements?",
      answer:
        "Workflows are configurable to the reporting and documentation requirements of each regulator, so one platform can serve facilities in different emirates.",
    },
    {
      question: "Can it handle insurance e-claims and eligibility checks?",
      answer:
        "Yes — eligibility verification, coding checks and e-claim preparation are built into the billing module.",
    },
    {
      question: "Does it integrate with Dragon Medical dictation software?",
      answer:
        "Yes — voice-to-text dictation integrates directly into clinical notes to speed up documentation.",
    },
    {
      question: "Is there a free or cheap EMR option for small clinics?",
      answer:
        "Free tools usually cover only basic charting. Clinics billing insurers need scheduling, coding and reporting together, which is why a connected platform pays for itself quickly.",
    },
    {
      question: "Can medical spas and aesthetic clinics use the same platform?",
      answer:
        "Yes — treatment plans, consent forms, photo records and package tracking are built for aesthetic and dermatology clinics.",
    },
    {
      question: "Does it support Arabic and English?",
      answer:
        "Yes — patient-facing tools like booking, reminders and forms can be configured in Arabic and English.",
    },
    {
      question: "Where is patient data stored?",
      answer:
        "Deployment options are planned around UAE data requirements and agreed with you during onboarding.",
    },
    {
      question: "Does it support dental and mental health practices?",
      answer:
        "Yes — dental charting, therapy notes and confidential records run on the same configurable platform.",
    },
    {
      question: "How long does implementation take?",
      answer:
        "Most clinics go live within weeks, with staff seeing value from the first week of booking and charting.",
    },
  ];

  const relatedIndustries = [
    { title: "Healthcare", link: ROUTES.industry.healthcare },
    { title: "USA Healthcare", link: ROUTES.industry.usaHealthcare },
    { title: "UK Healthcare", link: ROUTES.industry.ukHealthcare },
    { title: "India Healthcare", link: ROUTES.industry.indiaHealthcare },
    { title: "Canada Healthcare", link: ROUTES.industry.canadaHealthcare },
    { title: "Australia Healthcare", link: ROUTES.industry.australiaHealthcare },
    { title: "UAE Textile", link: ROUTES.industry.uaeTextile },
    { title: "Manufacturing", link: ROUTES.industry.manufacturing },
    { title: "Enterprise Software", link: ROUTES.industry.erp },
    { title: "Business CRM", link: ROUTES.industry.businessCrm },
    { title: "Real Estate", link: ROUTES.industry.realEstate },
  ];

  const active = stakeholders[activeStakeholder];
  const ActiveStakeholderIcon = [Building2, Stethoscope, Sparkles, Home][
    activeStakeholder
  ];

  const toggleFAQ = (index) => setOpenFAQ(openFAQ === index ? null : index);

  return (
    <div className="min-h-screen bg-black">
      <SEO {...seoData.uaeHealthcare} />

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
                UAE Healthcare Software
              </p>
              <h1 className="text-2xl leading-tight sm:text-[1.7rem] md:text-4xl xl:text-[2.65rem] 2xl:text-5xl 2xl:leading-[1.15]">
                Hospital & Pharma Management Software for UAE Healthcare
              </h1>
              <p className="text-base leading-relaxed text-gray-300 sm:text-lg 2xl:text-xl 2xl:leading-relaxed">
                Custom EMR, insurance e-claims, medical spa and patient
                engagement software for UAE hospitals, clinics and home
                healthcare providers — in Arabic and English.
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
                  href="#uae-healthcare-capabilities"
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
                      title: "EMR & Charting",
                      body: "Clinical notes, dictation and e-prescribing.",
                      icon: Stethoscope,
                      iconClass: "text-amber-400",
                      boxClass: "border-amber-400/25 bg-amber-400/15",
                      topBorder: false,
                    },
                    {
                      title: "Hospitals & Clinics",
                      body: "Registration, pharmacy and billing in one system.",
                      icon: Building2,
                      iconClass: "text-blue-400",
                      boxClass: "border-blue-400/25 bg-blue-400/15",
                      topBorder: false,
                    },
                    {
                      title: "Insurance E-Claims",
                      body: "Eligibility checks and claim submission.",
                      icon: ReceiptText,
                      iconClass: "text-green-400",
                      boxClass: "border-emerald-400/25 bg-emerald-400/15",
                      topBorder: true,
                    },
                    {
                      title: "Medical Spa & CRM",
                      body: "Packages, reminders and client retention.",
                      icon: Sparkles,
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
          aria-labelledby="uae-healthcare-market-heading"
        >
          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
            <Heading
              id="uae-healthcare-market-heading"
              align="left"
              eyebrow="Market Context"
              title="Why UAE Healthcare Providers Need Modern Software"
              subtitle="With a $25B+ healthcare market and three regulators to satisfy, disconnected systems mean rejected claims, reporting gaps, and slower patient care."
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
      <Shell labelledBy="uae-healthcare-capabilities">
        <Heading
          id="uae-healthcare-capabilities"
          eyebrow="Services"
          title="Healthcare Software Solutions for the UAE"
          subtitle="EMR and EHR software, hospital management, insurance e-claims and medical spa tools — built for UAE providers."
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
      <Shell labelledBy="uae-healthcare-challenges-heading" alt>
        <Heading
          id="uae-healthcare-challenges-heading"
          eyebrow="Solutions"
          title="Practical Fixes for UAE Healthcare Challenges"
          subtitle="Straightforward answers for multi-emirate rules, claim rejections, data requirements and multilingual patients."
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
      <Shell labelledBy="uae-healthcare-stakeholders-heading">
        <Heading
          id="uae-healthcare-stakeholders-heading"
          eyebrow="Use Cases"
          title="Built for Every Part of UAE Healthcare"
          subtitle="Software shaped for hospitals, clinics, medical spas and home healthcare providers across the emirates."
        />

        {/* Mobile: full-width selector */}
        <div className="mb-8 md:hidden">
          <label htmlFor="uae-healthcare-stakeholder-select" className="sr-only">
            Select stakeholder type
          </label>
          <div className="relative">
            <select
              id="uae-healthcare-stakeholder-select"
              value={activeStakeholder}
              onChange={(e) => setActiveStakeholder(Number(e.target.value))}
              aria-controls="uae-healthcare-stakeholder-panel"
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
                id={`uae-healthcare-stakeholder-tab-${index}`}
                aria-controls="uae-healthcare-stakeholder-panel"
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
          id="uae-healthcare-stakeholder-panel"
          role="tabpanel"
          aria-labelledby={`uae-healthcare-stakeholder-tab-${activeStakeholder}`}
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
      <Shell labelledBy="uae-healthcare-tech-heading" alt>
        <Heading
          id="uae-healthcare-tech-heading"
          eyebrow="Capabilities"
          title="Modern Healthcare Software Architecture"
          subtitle="Voice dictation, a cloud clinic platform, integration APIs and mobile tools for every care team."
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
      <Shell labelledBy="uae-healthcare-compliance-heading">
        <Heading
          id="uae-healthcare-compliance-heading"
          eyebrow="Compliance"
          title="UAE-Ready Compliance & Security"
          subtitle="Regulator-aligned workflows, e-claims, health data exchange support and audit-ready logs, built into the platform."
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
      <Shell labelledBy="uae-healthcare-why-heading" alt>
        <Heading
          id="uae-healthcare-why-heading"
          eyebrow="Why Ascentia Labs"
          title="Why Choose Us for UAE Healthcare Software"
          subtitle="A purpose-built healthcare platform with UAE market fit and fast clinical team adoption."
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
      <Shell labelledBy="uae-healthcare-process-heading">
        <Heading
          id="uae-healthcare-process-heading"
          eyebrow="Delivery"
          title="How We Deliver Healthcare Software"
          subtitle="Four clear phases — from discovery to Gulf timezone-aligned ongoing support."
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
      <Shell labelledBy="uae-healthcare-impact-heading" alt>
        <Heading
          id="uae-healthcare-impact-heading"
          eyebrow="Results"
          title="Proven Outcomes for UAE Healthcare Providers"
          subtitle="Results from one unified clinic platform — fewer rejections, faster check-in and less manual work."
        />
        <ul className="grid list-none grid-cols-1 gap-4 md:grid-cols-3">
          {caseStudies.map((item, index) => {
            const Icon = item.icon;
            const gradientId = `uae-healthcare-case-bg-${index}`;
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
      <Shell labelledBy="uae-healthcare-faq-heading">
        <Heading id="uae-healthcare-faq-heading" title="Common Questions" />
        <div className="mx-auto max-w-3xl divide-y divide-white/10 border-y border-white/10">
          {faqs.map((faq, index) => {
            const open = openFAQ === index;
            const panelId = `uae-healthcare-faq-panel-${index}`;
            const buttonId = `uae-healthcare-faq-button-${index}`;
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
        aria-labelledby="uae-healthcare-related-industries-heading"
      >
        <div className="container mx-auto max-w-6xl px-4">
          <h2
            id="uae-healthcare-related-industries-heading"
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

export default UaeHealthcareSoftwarePage;
