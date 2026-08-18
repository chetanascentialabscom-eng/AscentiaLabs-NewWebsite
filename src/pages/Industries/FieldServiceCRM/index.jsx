import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Settings,
  DollarSign,
  ChevronDown,
  ChevronUp,
  Shield,
  MapPinned,
  CheckCircle2,
  Building2,
  Wrench,
  Cpu,
  ClipboardList,
  Brain,
  TrendingUp,
  Eye,
  Sparkles,
  Network,
  Cloud,
  Server,
  Database,
  Lock,
  KeyRound,
  ClipboardCheck,
  ArrowRight,
  Code,
  Users,
  UserCog,
  FileText,
  BookOpen,
  Package,
  Truck,
  Newspaper,
  Calendar,
  Camera,
  Smartphone,
  Mic,
  Mail,
  MessageSquare,
  Zap,
  TreePine,
  Droplets,
  Bell,
} from "lucide-react";
import { useConsultation } from "../../../contexts/ConsultationContext";
import SEO from "../../../components/SEO";
import { seoData } from "../../../utils/seoData";
import { ROUTES } from "../../../utils/routes";

/* ------------------------------------------------------------------ */
/*  Reusable presentational components (shared styling only)          */
/* ------------------------------------------------------------------ */

const SectionHeading = ({ eyebrow, title, subtitle, light = true }) => (
  <div className="text-center mb-10 max-w-3xl lg:max-w-5xl mt-9 mx-auto">
    <h2
      className={`text-3xl md:text-4xl bg-gradient-to-r from-blue-300  to-white bg-clip-text text-transparent mb-3 ${
        light ? "" : ""
      }`}
    >
      {title}
    </h2>
    {subtitle && <p className="text-base md:text-lg text-white">{subtitle}</p>}
  </div>
);

const StatCard = ({ value, label }) => (
  <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/15 hover:-translate-y-1 transition-all duration-300 text-center">
    <div className="text-3xl  font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500 mb-2">
      {value}
    </div>
    <div className="text-gray-100 text-sm">{label}</div>
  </div>
);

const IconCard = ({ icon: Icon, title, children }) => (
  <div className="bg-gray-900 border border-gray-700 rounded-xl p-6 hover:border-amber-400/50 hover:-translate-y-1 transition-all duration-300">
    <div className="bg-gradient-to-r from-amber-400 to-orange-500 w-11 h-11 rounded-lg flex items-center justify-center mb-4">
      <Icon size={20} className="text-black" />
    </div>
    <h3 className="text-white text-lg font-semibold mb-2">{title}</h3>
    <div className="text-gray-200 text-sm leading-relaxed">{children}</div>
  </div>
);

const OutcomeCard = ({ value, label, icon: Icon }) => (
  <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
    <Icon size={22} className="text-amber-400 mb-3" />
    <div className="text-2xl md:text-3xl font-extrabold text-white mb-1">
      {value}
    </div>
    <div className="text-gray-300 text-sm">{label}</div>
  </div>
);

const ChallengeCard = ({ problem, impact, solution }) => (
  <div className="bg-gray-900 border border-gray-700 rounded-xl p-6 hover:border-amber-400/50 transition-all duration-300">
    <p className="text-md uppercase tracking-wide text-red-400 font-semibold mb-1">
      Problem
    </p>
    <p className="text-white text-sm mb-4">{problem}</p>
    
    <p className="text-md uppercase tracking-wide text-amber-400 font-semibold mb-1">
      Our Solution
    </p>
    <p className="text-gray-100 text-sm">{solution}</p>
  </div>
);

const SegmentCard = ({ icon: Icon, title, line }) => (
  <div className="bg-gray-900 border border-gray-700 rounded-xl p-5 text-center hover:border-amber-400/50 hover:-translate-y-1 transition-all duration-300">
    <div className="bg-gradient-to-r from-amber-400 to-orange-500 w-10 h-10 rounded-lg flex items-center justify-center mx-auto mb-3">
      <Icon size={18} className="text-black" />
    </div>
    <h4 className="text-white font-semibold text-md mb-1">{title}</h4>
    <p className="text-gray-100 text-sm">{line}</p>
  </div>
);

const IntegrationCard = ({ icon: Icon, title }) => (
  <div className="bg-white/5 border border-white/10 rounded-xl p-5 flex flex-col items-center justify-center text-center hover:bg-white/10 transition-all duration-300">
    <Icon size={22} className="text-amber-400 mb-2" />
    <p className="text-white text-sm font-medium">{title}</p>
  </div>
);

const UseCaseCard = ({ problem, solution, outcome }) => (
  <div className="bg-gray-900 border border-gray-700 rounded-xl p-6 hover:border-amber-400/50 transition-all duration-300">
    <p className="text-md uppercase tracking-wide text-red-500 font-semibold mb-1">
      Business Problem
    </p>
    <p className="text-white text-sm mb-3">{problem}</p>
    <div className="text-amber-400 text-xs mb-3">↓</div>
    {/* <p className="text-md uppercase tracking-wide text-blue-500 font-semibold mb-1">
      Solution
    </p> */}
    {/* <p className="text-gray-300 text-sm mb-3">{solution}</p>
    <div className="text-amber-400 text-xs mb-3">↓</div> */}
    <p className="text-md uppercase tracking-wide text-green-500 font-semibold mb-1">
      Outcome
    </p>
    <p className="text-lg font-bold text-white">{outcome}</p>
  </div>
);

const SavingsCard = ({ label, value }) => (
  <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300">
    <div className="text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500 mb-1">
      {value}
    </div>
    <div className="text-gray-300 text-sm">{label}</div>
  </div>
);

const ChecklistGroup = ({ title, items }) => (
  <div className="bg-gray-900 border border-gray-700 rounded-xl p-6">
    <h4 className="text-white font-semibold text-base mb-4">{title}</h4>
    <ul className="space-y-3">
      {items.map((item, idx) => (
        <li key={idx} className="flex items-start space-x-2">
          <CheckCircle2
            size={18}
            className="text-amber-400 flex-shrink-0 mt-0.5"
          />
          <span className="text-gray-300 text-sm">{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

const DeploymentCard = ({ icon: Icon, title, points, highlight }) => (
  <div
    className={`rounded-xl p-6 border transition-all duration-300 hover:-translate-y-1 ${
      highlight
        ? "bg-gradient-to-br from-amber-400/10 to-orange-500/10 border-amber-400/50"
        : "bg-gray-900 border-gray-700 hover:border-amber-400/50"
    }`}
  >
    <div className="bg-gradient-to-r from-amber-400 to-orange-500 w-11 h-11 rounded-lg flex items-center justify-center mb-4">
      <Icon size={20} className="text-black" />
    </div>
    <h3 className="text-white text-lg font-semibold mb-3">{title}</h3>
    <ul className="space-y-2">
      {points.map((p, idx) => (
        <li
          key={idx}
          className="text-gray-300 text-sm flex items-start space-x-2"
        >
          <span className="w-1.5 h-1.5 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full mt-2 flex-shrink-0"></span>
          <span>{p}</span>
        </li>
      ))}
    </ul>
  </div>
);

const CaseStudyCard = ({ metric, title, description }) => (
  <div className="bg-gray-900 border border-gray-700 rounded-xl p-6 hover:border-amber-400/50 hover:-translate-y-1 transition-all duration-300">
    <div className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500 mb-3">
      {metric}
    </div>
    <h3 className="text-white text-base font-semibold mb-2">{title}</h3>
    <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
  </div>
);

const EngagementCard = ({ icon: Icon, title, points }) => (
  <div className="bg-gray-900 border border-gray-700 rounded-xl p-6 hover:border-amber-400/50 transition-all duration-300">
    <div className="bg-gradient-to-r from-amber-400 to-orange-500 w-11 h-11 rounded-lg flex items-center justify-center mb-4">
      <Icon size={20} className="text-black" />
    </div>
    <h3 className="text-white text-lg font-semibold mb-3">{title}</h3>
    <ul className="space-y-2">
      {points.map((p, idx) => (
        <li
          key={idx}
          className="text-gray-300 text-sm flex items-start space-x-2"
        >
          <span className="w-1.5 h-1.5 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full mt-2 flex-shrink-0"></span>
          <span>{p}</span>
        </li>
      ))}
    </ul>
  </div>
);

const ResourceCard = ({ icon: Icon, label, items }) => (
  <div className="bg-gray-900 border border-gray-700 rounded-xl p-6">
    <div className="flex items-center space-x-2 mb-4">
      <Icon size={18} className="text-amber-400" />
      <h4 className="text-white font-semibold text-sm">{label}</h4>
    </div>
    <ul className="space-y-2">
      {items.map((item, idx) => (
        <li
          key={idx}
          className="text-gray-300 text-sm hover:text-amber-400 transition-colors cursor-pointer"
        >
          {item}
        </li>
      ))}
    </ul>
  </div>
);

const ServiceCard = ({ icon: Icon, title, description, to }) => (
  <Link
    to={to}
    className="bg-gray-900 border border-gray-700 rounded-xl p-6 hover:border-amber-400/50 hover:-translate-y-1 transition-all duration-300 group block"
  >
    <div className="bg-gradient-to-r from-amber-400 to-orange-500 w-11 h-11 rounded-lg flex items-center justify-center mb-4">
      <Icon size={20} className="text-black" />
    </div>
    <h3 className="text-white text-base font-semibold mb-2">{title}</h3>
    <p className="text-gray-300 text-sm mb-4">{description}</p>
    <span className="inline-flex items-center text-amber-400 text-sm font-medium group-hover:translate-x-1 transition-transform">
      Learn more <ArrowRight size={14} className="ml-1" />
    </span>
  </Link>
);

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

const FieldServiceCRM = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [openFAQ, setOpenFAQ] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);
  const { openConsultation } = useConsultation();

  const scrollbarStyles = `
    .custom-scrollbar::-webkit-scrollbar { width: 0px; background: transparent; }
    .custom-scrollbar::-webkit-scrollbar-thumb { background: transparent; }
    .custom-scrollbar { scrollbar-width: none; -ms-overflow-style: none; }
  `;

  const adminFeatures = [
    {
      icon: ClipboardList,
      title: "Lead-to-Job Pipeline",
      description:
        "Track jobs from new lead to scheduled, assigned, in-progress, completed, and invoiced.",
    },
    {
      icon: Calendar,
      title: "Scheduling & Dispatch",
      description:
        "Clear assignment visibility with real-time adjustments when plans change.",
    },
    {
      icon: Users,
      title: "Technician Visibility",
      description:
        "Keep office operations synchronized with on-site field activities.",
    },
    {
      icon: MapPinned,
      title: "Route Planning & Mapping",
      description:
        "Optimize routes to reduce drive time, fuel costs, and wasted hours.",
    },
  ];

  const stats = [
    { number: "50+", label: "Software Projects" },
    { number: "12+", label: "Industries Served" },
    { number: "15+", label: "Field Service Implementations" },
    { number: "7+", label: "Business Years" },
  ];

  const marketStats = [
    { value: "Lead→Job", label: "Unified Pipeline Visibility" },
    { value: "Offline", label: "Field Access Without Signal" },
    // { value: "Quote→Cash", label: "Connected Billing Flow" },
    { value: "AI", label: "Voice Notes & Smart Routing" },
    { value: "HQ Sync", label: "Instant Field Collaboration" },
    { value: "Proof", label: "Photos & Notes on Every Job" },
  ];

  const transformationCards = [
    {
      icon: ClipboardList,
      title: "Lead-to-Job Pipeline",
      impact:
        "Track jobs from new lead to scheduled, assigned, in-progress, completed, and invoiced with drag-and-drop visibility.",
    },
    {
      icon: Calendar,
      title: "Scheduling & Dispatch",
      impact:
        "Maintain clear assignment visibility and make real-time adjustments when unexpected changes occur.",
    },
    {
      icon: Users,
      title: "Technician Visibility",
      impact:
        "Track field teams and keep office operations synchronized with on-site activities.",
    },
    {
      icon: MapPinned,
      title: "Route Planning & Mapping",
      impact:
        "Optimize routes to reduce drive time, fuel costs, and wasted working hours.",
    },
    {
      icon: Camera,
      title: "Document & Photo Management",
      impact:
        "Attach notes, photos, and documentation directly to job records to reduce disputes and repeat visits.",
    },
    {
      icon: DollarSign,
      title: "Quote-to-Cash Flow",
      impact:
        "Connect proposals, digital contracts, and invoicing in one streamlined workflow.",
    },
  ];

  const challenges = [
    {
      problem: "Leads get lost because calls aren't logged properly.",
      impact: "Missed revenue and weak follow-up discipline.",
      solution: "Automatic capture of customer interactions in one Field CRM.",
    },
    {
      problem: "Double bookings and missed appointments become routine.",
      impact: "Wasted technician time and frustrated customers.",
      solution: "Clear assignment visibility with real-time dispatch adjustments.",
    },
    {
      problem: "Technicians arrive without job history or clear instructions.",
      impact: "Longer jobs, lower first-time fix rates, weak customer trust.",
      solution: "Mobile access to customer history, tickets, and previous notes.",
    },
    {
      problem: "Customers keep calling just to ask for an ETA.",
      impact: "Office overload and poor customer experience.",
      solution: "Automated status notifications and self-service updates.",
    },
    {
      problem: "Lack of proof of work can lead to disputes.",
      impact: "Chargebacks, delayed payments, and reputation risk.",
      solution: "Photos and notes attached to every job record.",
    },
    {
      problem: "Invoices go out late, tightening cash flow.",
      impact: "Owners stuck chasing paperwork instead of growth.",
      solution: "Quote-to-invoice flow connected inside one system.",
    },
  ];

  const outcomes = [
    { icon: ClipboardList, value: "Tracked", label: "Customer Interactions" },
    { icon: Calendar, value: "Clear", label: "Assignment Visibility" },
    { icon: Smartphone, value: "Mobile", label: "Job History Access" },
    { icon: Bell, value: "Auto", label: "Status Notifications" },
    { icon: Camera, value: "Proof", label: "Photos on Every Job" },
    { icon: DollarSign, value: "Faster", label: "Quote-to-Invoice Flow" },
  ];

  const kpiRows = [
    ["Customer interactions", "Calls aren't logged properly", "Tracked automatically", "Control"],
    ["Scheduling", "Double bookings & missed appointments", "Clear visibility & real-time adjustments", "Reliability"],
    ["Technician context", "No job history on arrival", "Mobile access to customer & job history", "Speed"],
    ["Customer ETAs", "Customers call just for ETA", "Automated status notifications", "Experience"],
    ["Proof of work", "Disputes from missing proof", "Photos & notes on every job", "Trust"],
    ["Billing", "Invoices go out late", "Quote-to-invoice in one system", "Cash flow"],
    ["Ownership focus", "Owners stuck working in the business", "More time to grow the business", "Scale"],
  ];

  const industries = [
    { icon: Wrench, title: "HVAC Services", line: "Recurring maintenance contracts, equipment history, and seasonal scheduling." },
    { icon: Droplets, title: "Plumbing Companies", line: "Route planning, site-specific notes, and rapid emergency response." },
    { icon: Zap, title: "Electrical Contractors", line: "Skill matching for complex jobs and automated contract renewals." },
    { icon: TreePine, title: "Landscaping & Arborist", line: "Site history, recurring visits, and equipment tracking." },
    { icon: Shield, title: "Security Systems", line: "Installation, monitoring, and maintenance with full service history." },
    { icon: Network, title: "Telecommunications", line: "Field installations, network maintenance, and asset tracking." },
    { icon: Cpu, title: "IT Field Service", line: "On-site support with offline mode for rural or underground areas." },
    { icon: Settings, title: "Equipment Maintenance", line: "Preventive scheduling, warranty tracking, and service history." },
    { icon: Building2, title: "Facility Management", line: "Work orders, preventive maintenance, assets, and SLA tracking." },
    { icon: Truck, title: "Industrial Services", line: "Heavy equipment servicing, compliance docs, and specialized dispatch." },
  ];

  const aiCards = [
    {
      icon: Mic,
      title: "Voice-to-CRM Note Capture",
      body: "Technicians dictate notes by voice; AI transcribes and auto-populates structured fields.",
    },
    {
      icon: ClipboardCheck,
      title: "Real-Time Compliance Validation",
      body: "AI validates free-text notes against compliance rules and flags potential risks.",
    },
    {
      icon: TrendingUp,
      title: "Intelligent Account Prioritization",
      body: "AI-powered Hot Lists identify the highest-priority accounts to engage.",
    },
    {
      icon: Eye,
      title: "Pre-Call Intelligence",
      body: "AI condenses key data for rapid review before customer visits.",
    },
    {
      icon: MapPinned,
      title: "Smart Route Optimization",
      body: "AI learns from team behavior and tunes route suggestions automatically.",
    },
    {
      icon: Sparkles,
      title: "Natural Language Execution",
      body: 'AI agents take plain-English instructions like planning high-value visits within a radius.',
    },
  ];

  const techStack = [
    {
      icon: Database,
      title: "Core CRM Platforms",
      body: "Custom-built, Odoo, Dynamics 365, Zoho CRM, Salesforce.",
    },
    {
      icon: Smartphone,
      title: "Mobile Platforms",
      body: "iOS and Android with offline-first architecture.",
    },
    {
      icon: Brain,
      title: "AI & Analytics",
      body: "Machine Learning, Predictive Modeling, Natural Language Processing.",
    },
    {
      icon: Network,
      title: "Integration Layer",
      body: "REST APIs, Webhooks, and pre-built connectors.",
    },
    {
      icon: Cloud,
      title: "Deployment",
      body: "Cloud (SaaS) or On-Premise for data sovereignty.",
    },
  ];

  const integrations = [
    { icon: Server, title: "ERP: Odoo, NetSuite, SAP, Dynamics" },
    { icon: DollarSign, title: "Accounting: QuickBooks, Xero" },
    { icon: Package, title: "Inventory & Van Stock" },
    { icon: Mail, title: "Outlook, Gmail, Google Calendar" },
    { icon: MessageSquare, title: "SMS, Email, Customer Portals" },
    { icon: Database, title: "CRM / ERP Single Source of Truth" },
  ];

  const useCases = [
    {
      problem: "Generic CRM plus spreadsheets and sticky notes.",
      solution: "Unified Field CRM for scheduling, jobs, photos, and billing.",
      outcome: "Connected workflow that supports revenue and retention.",
    },
    {
      problem: "Technicians work offline on remote or basement sites.",
      solution: "Offline-first mobile CRM with automatic sync.",
      outcome: "Field teams keep working without waiting for signal.",
    },
    {
      problem: "Office and field teams operate in separate tools.",
      solution: "Dispatch, notes, approvals, and HQ collaboration in one app.",
      outcome: "Faster decisions and fewer back-and-forth calls.",
    },
    {
      problem: "Billing lags behind completed work.",
      solution: "Quote-to-cash connected to job completion.",
      outcome: "Invoices move faster with clearer cash flow.",
    },
  ];

  const savings = [
    { label: "Customer Interactions", value: "Auto-Tracked" },
    { label: "Scheduling Control", value: "Real-Time" },
    { label: "Technician Context", value: "On Mobile" },
    { label: "ETA Communication", value: "Automated" },
    { label: "Proof of Work", value: "Attached" },
    { label: "Invoice Flow", value: "Connected" },
  ];

  const readiness = [
    {
      title: "When to Choose Custom Field CRM",
      items: [
        "Your workflows are unique and don't fit standard templates",
        "You need deep integrations with specialized systems",
        "You want to differentiate through technology",
        "You plan to scale and evolve your processes over time",
        "You require complete data ownership and control",
      ],
    },
    {
      title: "Buyer Readiness Checklist",
      items: [
        "Do I spend more than 2 hours a week manually scheduling jobs?",
        "Do technicians call the office multiple times a day for information?",
        "Do we struggle to track customer history and previous job details?",
        "Are we losing revenue due to delayed or inaccurate billing?",
        "Do customers complain about communication and no-shows?",
      ],
    },
    {
      title: "Custom Field CRM Advantages",
      items: [
        "Built entirely around your workflows",
        "Custom scheduling logic for your service types",
        "Custom integrations with your unique tech stack",
        "Industry-specific features built for your niche",
        "Full ownership and control of code and data",
      ],
    },
    {
      title: "Off-the-Shelf Limitations",
      items: [
        "Forces you to adapt to standardized workflows",
        "Limited to pre-built scheduling templates",
        "Predefined integrations with limited flexibility",
        "Generic features designed for broad audiences",
        "Licensing and subscription restrictions",
      ],
    },
  ];

  const journey = [
    { title: "Discovery", body: "Stakeholder interviews, process mapping, requirements gathering." },
    { title: "Architecture & UX", body: "System architecture, database design, prototypes, UI design." },
    { title: "Core CRM", body: "Backend, database, CRM logic, scheduling engine." },
    { title: "Mobile & Offline", body: "iOS/Android apps and offline sync engine." },
    { title: "AI & Automation", body: "ML, NLP, workflow automation, predictive features." },
    { title: "Integrations", body: "ERP, accounting, communication, inventory systems." },
    { title: "Testing & Security", body: "Functional, performance, security, and UAT." },
    { title: "Deploy & Support", body: "Cloud or on-premise, training, ongoing support." },
  ];

  const deploymentModels = [
    {
      icon: Code,
      title: "Custom Field CRM Development",
      points: [
        "Built from the ground up around your workflows",
        "Technician and customer engagement models",
        "Full ownership of code and data",
      ],
    },
    {
      icon: Settings,
      title: "CRM Customization",
      points: [
        "Extend Odoo, Dynamics 365, Zoho, Salesforce",
        "Field-service-specific workflows",
        "Faster path when platform fit is strong",
      ],
      highlight: true,
    },
    {
      icon: Cloud,
      title: "Migration & Modernization",
      points: [
        "Move from legacy systems or spreadsheets",
        "Preserve data integrity with minimal disruption",
        "Modern field-service-specific platform",
      ],
    },
  ];

  const security = [
    {
      icon: Lock,
      title: "Role-Based Access Control",
      body: "Granular permissions ensure users see only what they need.",
    },
    {
      icon: KeyRound,
      title: "Authentication",
      body: "Multi-factor authentication and single sign-on (SSO) support.",
    },
    {
      icon: Shield,
      title: "Data Encryption",
      body: "Data encrypted in transit (TLS) and at rest (AES-256).",
    },
    {
      icon: ClipboardCheck,
      title: "Audit Logs",
      body: "Comprehensive tracking of all user actions for compliance.",
    },
    {
      icon: Network,
      title: "API Security",
      body: "OAuth 2.0 and API key management for secure integrations.",
    },
    {
      icon: Cloud,
      title: "Secure Cloud Deployment",
      body: "AWS, Azure, or Google Cloud with enterprise-grade security.",
    },
  ];

  const caseStudies = [
    {
      metric: "Ops",
      title: "National HVAC Service Provider",
      description:
        '"Ascentia Labs understood our unique workflows and built a Field CRM that actually works the way we do. Our scheduling time dropped significantly, and our technicians finally have the information they need in the field." — Operations Director',
    },
    {
      metric: "AI",
      title: "Regional Electrical Services Company",
      description:
        '"The AI-powered features transformed how we manage customer relationships. Our team is more productive, and our customers are happier." — CEO',
    },
    {
      metric: "Proof",
      title: "Proof Over Promises",
      description:
        "We help businesses move from reactive, paper-based work toward proactive, data-driven service operations.",
    },
  ];

  const engagementModels = [
    {
      icon: FileText,
      title: "Fixed Cost",
      points: [
        "Well-defined Field CRM scope and timeline",
        "Predictable budget",
        "Ideal for specific projects",
      ],
    },
    {
      icon: Users,
      title: "Dedicated Team",
      points: [
        "Long-term Field CRM product evolution",
        "Complete control and transparency",
        "Ongoing feature delivery",
      ],
    },
    {
      icon: UserCog,
      title: "Staff Augmentation",
      points: [
        "Expand your existing development capacity",
        "Flexible scaling up or down",
        "Specialized field-service CRM skills",
      ],
    },
  ];

  const resources = [
    {
      icon: Newspaper,
      label: "Blogs",
      items: [
        "The Ultimate Guide to Field CRM",
        "Choosing the Right Field CRM",
        "Offline-First Mobile CRM for Technicians",
      ],
    },
    {
      icon: FileText,
      label: "Whitepapers",
      items: [
        "The ROI of AI in Field Service",
        "Custom vs Off-the-Shelf Field CRM",
      ],
    },
    {
      icon: BookOpen,
      label: "Guides & Case Studies",
      items: [
        "Field CRM Implementation for HVAC Leader",
        "Buyer Readiness Checklist for Field CRM",
      ],
    },
  ];

  const relatedServices = [
    {
      icon: Brain,
      title: "AI/ML Development",
      description: "Voice notes, prioritization, routing, and NLP for Field CRM.",
      to: ROUTES.service.aiMl,
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Offline-first iOS and Android apps for technicians.",
      to: ROUTES.service.mobileApplication,
    },
    {
      icon: TrendingUp,
      title: "Digital Transformation",
      description: "Move from spreadsheets to connected field operations.",
      to: ROUTES.service.digitalTransformation,
    },
    {
      icon: Code,
      title: "Custom Software Development",
      description: "Purpose-built Field CRM platforms for your workflows.",
      to: ROUTES.service.customCrm,
    },
    {
      icon: Sparkles,
      title: "Application Modernization",
      description: "Upgrade legacy CRM and field tools without disruption.",
      to: ROUTES.service.applicationModernisation,
    },
  ];

  const features = [
    {
      id: "custom-field-crm",
      title: "Custom Field CRM Development",
      sections: [
        {
          heading: "Built Around Your Workflows",
          details: [
            "Tailored to your service workflows and technician requirements",
            "Customer engagement models designed for your business",
            "End-to-end development from discovery to deployment",
            "Full ownership and control of code and data",
          ],
        },
      ],
    },
    {
      id: "field-app",
      title: "Field Service CRM App Development",
      sections: [
        {
          heading: "Native Mobile for Technicians",
          details: [
            "Native iOS and Android applications",
            "Offline-first architecture for low-connectivity sites",
            "Job updates, photos, and signatures in the field",
            "Automatic sync when connectivity returns",
          ],
        },
      ],
    },
    {
      id: "crm-mobile",
      title: "CRM Mobile App Development",
      sections: [
        {
          heading: "Responsive Across Devices",
          details: [
            "Feature-rich mobile CRM that works across devices",
            "Reliable performance under changing connectivity",
            "HQ collaboration from the app",
            "Customer history and open tickets on demand",
          ],
        },
      ],
    },
    {
      id: "ai-field-crm",
      title: "AI-Powered Field CRM Development",
      sections: [
        {
          heading: "Intelligence for Field Operations",
          details: [
            "Machine learning and predictive analytics",
            "Natural language processing for voice notes",
            "Smart routing and account prioritization",
            "Automation that complements technician expertise",
          ],
        },
      ],
    },
    {
      id: "integrations-svc",
      title: "Field Service CRM Integration",
      sections: [
        {
          heading: "Connected Business Systems",
          details: [
            "ERP, accounting, inventory, and communication platforms",
            "Reduced double entry across systems",
            "Single source of truth for field and office teams",
          ],
        },
      ],
    },
    {
      id: "migration",
      title: "CRM Migration & Modernization",
      sections: [
        {
          heading: "From Legacy to Field-Ready",
          details: [
            "Migrate from spreadsheets or generic CRMs",
            "Preserve data integrity with minimal disruption",
            "Modern field-service-specific platform",
          ],
        },
      ],
    },
    {
      id: "customization",
      title: "CRM Customization",
      sections: [
        {
          heading: "Extend Existing Platforms",
          details: [
            "Odoo, Dynamics 365, Zoho, Salesforce",
            "Field-service workflow extensions",
            "Best-fit recommendation between custom build and customization",
          ],
        },
      ],
    },
    {
      id: "support",
      title: "Field CRM Support & Maintenance",
      sections: [
        {
          heading: "Keep the System Current",
          details: [
            "Ongoing support and updates",
            "Security patches and reliability improvements",
            "Feature enhancements as your operations evolve",
          ],
        },
      ],
    },
  ];

  const advantages = [
    {
      id: 1,
      title: "Field-Service Expertise",
      description:
        "We understand real-world service operations—from HVAC and plumbing to IT field service.",
    },
    {
      id: 2,
      title: "Custom + Platform Options",
      description:
        "We build from the ground up or extend Odoo, Dynamics, Zoho, and Salesforce when that fits better.",
    },
    {
      id: 3,
      title: "AI Where It Creates Value",
      description:
        "Voice notes, prioritization, routing, and natural-language execution—without replacing your team.",
    },
    {
      id: 4,
      title: "Offline-First Mobile",
      description:
        "Technicians keep working on remote sites, basements, and rural locations.",
    },
    {
      id: 5,
      title: "Integration Expertise",
      description:
        "Connect ERP, accounting, inventory, calendars, and communication tools into one system.",
    },
    {
      id: 6,
      title: "Proof Over Promises",
      description:
        "We focus on measurable operational improvements across scheduling, service quality, and cash flow.",
    },
  ];

  const processSteps = [
    {
      number: "1",
      title: "Discovery",
      description:
        "Stakeholder interviews, process mapping, pain points, and requirements specification.",
    },
    {
      number: "2",
      title: "Architecture & UX",
      description:
        "Architecture blueprint, interactive prototypes, and design system.",
    },
    {
      number: "3",
      title: "Build + Mobile",
      description:
        "CRM core, scheduling engine, native apps, and offline sync.",
    },
    {
      number: "4",
      title: "Deploy + Support",
      description:
        "Security testing, cloud or on-premise launch, training, and ongoing support.",
    },
  ];

  const faqs = [
    {
      question: "What is a Field CRM?",
      answer:
        "A Field Service CRM is software that helps manage customer relationships and service operations for trade and field service businesses. Unlike standard CRMs focused primarily on sales, a Field CRM can combine scheduling, dispatch, job history, photos, documents, invoicing, and follow-ups in one system.",
    },
    {
      question: "How is Field CRM different from regular CRM?",
      answer:
        "A standard CRM manages sales and marketing. A Field CRM combines customer management with operational tools such as scheduling, route optimization, technician dispatch, job tracking, and field-service workflows.",
    },
    {
      question: "Does the mobile app work offline?",
      answer:
        "Yes. Field CRM solutions can support offline capabilities for technicians working in areas with poor connectivity. They can access relevant customer and job information, add notes, and synchronize updates once connectivity is restored.",
    },
    {
      question: "Can this integrate with my current accounting software?",
      answer:
        "Yes. Field CRM solutions can integrate with accounting and ERP platforms such as Odoo, NetSuite, SAP, QuickBooks, and Dynamics 365 to create a more connected business system.",
    },
    {
      question: "How does AI improve Field CRM?",
      answer:
        "AI can automate voice-to-CRM note capture, prioritize high-value accounts, optimize routes using operational data, and execute workflows through natural-language commands. These capabilities can reduce administrative work and help field teams focus on customer service and revenue-generating activities.",
    },
    {
      question: "How long does custom Field CRM development take?",
      answer:
        "Timelines vary based on complexity, but a typical custom Field CRM implementation takes 3-6 months from discovery to deployment. We follow a phased approach to deliver value incrementally.",
    },
    {
      question: "How much does custom Field CRM development cost?",
      answer:
        "Cost depends on scope, features, complexity, and deployment requirements. We provide detailed estimates after understanding your specific needs during the discovery phase.",
    },
    {
      question: "Can you migrate data from our existing CRM?",
      answer:
        "Yes. We have experience migrating data from legacy systems, spreadsheets, and other CRM platforms. Our migration process ensures data integrity with minimal disruption.",
    },
    {
      question: "Can Field CRM support multiple locations and technicians?",
      answer:
        "Absolutely. Our Field CRM solutions are designed to scale across multiple locations, teams, and technician fleets. You can manage operations across regions from a single dashboard.",
    },
    {
      question: "What's the difference between custom development and customizing an existing CRM?",
      answer:
        "Custom development builds a solution from the ground up, giving you complete control over features, workflows, and user experience. Customizing an existing CRM (like Odoo, Dynamics, or Zoho) extends the platform's capabilities but operates within its architectural constraints. We offer both approaches and can recommend the best fit for your business.",
    },
  ];

  const toggleFAQ = (index) => setOpenFAQ(openFAQ === index ? null : index);

  return (
    <div className="min-h-screen bg-white">
      <SEO {...seoData.fieldServiceCRM} />
      <style dangerouslySetInnerHTML={{ __html: scrollbarStyles }} />

      {/* ============================= HERO ============================= */}
      <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-black overflow-hidden py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-40 left-20 w-24 h-24 bg-blue-400 rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-blue-300 rounded-full blur-xl"></div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-black"></div>

        <div className="relative container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="text-white space-y-6 py-8 lg:py-10 2xl:py-15">
              {/* <p className="text-amber-400 text-sm font-semibold tracking-wide uppercase">
                Field CRM Development Company
              </p> */}
              <h1 className="text-[25px] md:text-4xl leading-tight">
                Custom Field Service CRM Solutions
              </h1>

              <p className="text-gray-300 leading-relaxed">
                Move beyond customer records. Build a custom Field CRM that
                connects customers, technicians, scheduling, dispatch, job
                management, and billing in one intelligent system.
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                A Field CRM connects your office and field teams by bringing
                scheduling, assignments, job notes, photos, documents, invoices,
                and follow-ups into one unified workflow.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={openConsultation}
                  className="bg-gradient-to-r from-amber-400 to-orange-500 text-black px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:from-amber-500 hover:to-orange-600"
                >
                  Get a  Field CRM Consultation →
                </button>
                <a
                  href="#services"
                  className="border border-white/30 text-white px-6 py-3 rounded-xl hover:bg-white/10 transition-all duration-300 text-center"
                >
                  Explore Field CRM Solutions
                </a>
              </div>
            </div>

            <div className="mt-8 lg:mt-0">
              <div className="flex justify-center mb-6">
                <div className="bg-white/15 backdrop-blur-lg rounded-xl border border-white/30 shadow-2xl px-5 py-2.5 hover:scale-105 transition-all duration-300">
                  <div className="flex items-center gap-2">
                    <ClipboardList className="w-7 h-7 text-amber-400" />
                    <h3 className="text-white font-semibold">
                      Complete Field CRM Suite
                    </h3>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6 group hover:bg-white/20 transition-all duration-300 hover:-translate-y-2">
                  <ClipboardList className="w-12 h-12 text-amber-400 mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="text-white font-semibold mb-2">
                    Lead-to-Job Pipeline
                  </h4>
                  <p className="text-sm text-gray-100">
                    Track jobs from lead to invoice in one flow.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6 group hover:bg-white/20 transition-all duration-300 hover:-translate-y-2">
                  <Calendar className="w-12 h-12 text-blue-400 mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="text-white font-semibold mb-2">
                    Scheduling & Dispatch
                  </h4>
                  <p className="text-sm text-gray-100">
                    Real-time assignment visibility and adjustments.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6 group hover:bg-white/20 transition-all duration-300 hover:-translate-y-2">
                  <Users className="w-12 h-12 text-green-400 mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="text-white font-semibold mb-2">
                    Technician Visibility
                  </h4>
                  <p className="text-sm text-gray-100">
                    Keep office and field teams synchronized.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6 group hover:bg-white/20 transition-all duration-300 hover:-translate-y-2">
                  <MapPinned className="w-12 h-12 text-purple-400 mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="text-white font-semibold mb-2">
                    Route Planning
                  </h4>
                  <p className="text-sm text-gray-300">
                    Cut drive time, fuel costs, and wasted hours.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ===================== INDUSTRY STATISTICS ===================== */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="Market Snapshot"
            title="What Field CRM Delivers"
            subtitle="Operational control across pipeline, dispatch, mobile access, proof of work, and billing."
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
            {marketStats.map((s, i) => (
              <StatCard key={i} value={s.value} label={s.label} />
            ))}
          </div>
        </div>
      </section>

      {/* ===================== INDUSTRY OVERVIEW ===================== */}
      <section className="py-16 bg-gradient-to-br from-gray-900 via-blue-900 to-black relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black to-transparent pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-black pointer-events-none"></div>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="text-white space-y-5">
              <h2 className="mt-8 text-3xl md:text-4xl bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent">
                What Is Field CRM?
              </h2>
              <p className="text-white leading-relaxed">
                Field CRM is specialized software that helps service businesses
                manage customer relationships, field operations, and service
                delivery in one platform—connecting customer data with
                scheduling, dispatch, technician assignments, job tracking,
                inventory, and billing.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Projects Delivered", value: "50+" },
                { label: "Industries Served", value: "12+" },
                { label: "Field Implementations", value: "15+" },
                { label: "Typical Build Timeline", value: "3–6 mo" },
              ].map((c, i) => (
                <div
                  key={i}
                  className="bg-white/10 backdrop-blur-md rounded-xl p-5 border border-white/20 text-center"
                >
                  <div className="text-2xl font-bold text-white mb-1">
                    {c.value}
                  </div>
                  <div className="text-blue-100 text-xs">{c.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHY DIGITAL TRANSFORMATION ================= */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="Why Now"
            title="What Makes Field CRM Different?"
            subtitle="A standard CRM helps you manage sales. A Field Service CRM manages the entire customer lifecycle—from first contact through project completion, invoicing, and follow-up."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
            {transformationCards.map((c, i) => (
              <IconCard key={i} icon={c.icon} title={c.title}>
                {c.impact}
              </IconCard>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== BUSINESS CHALLENGES ===================== */}
      <section className="py-16 bg-gradient-to-br  from-gray-900 via-blue-900 to-black relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black to-transparent pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-black pointer-events-none"></div>
        <div className="container mx-auto mt-8 px-4">
          <SectionHeading
            title='The Cost of "Good Enough"'
            subtitle="Patching a generic CRM with scheduling tools. Field CRM replaces that with a connected control system."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {challenges.map((c, i) => (
              <ChallengeCard
                key={i}
                problem={c.problem}
                impact={c.impact}
                solution={c.solution}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ===================== BUSINESS OUTCOMES ===================== */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="Measurable Impact"
            title="Field CRM Business Outcomes"
            subtitle="Before vs after: how connected field operations change day-to-day work."
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
            {outcomes.map((o, i) => (
              <OutcomeCard
                key={i}
                icon={o.icon}
                value={o.value}
                label={o.label}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-gray-900 via-blue-900 to-black relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black to-transparent pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-black pointer-events-none"></div>
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="Related Services"
            title="Related Services We Provide"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 max-w-6xl mx-auto">
            {relatedServices.map((s, i) => (
              <ServiceCard
                key={i}
                icon={s.icon}
                title={s.title}
                description={s.description}
                to={s.to}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ===================== KPI COMPARISON TABLE ===================== */}
      <section className="py-16 bg-gradient-to-br  from-gray-900 via-blue-900 to-black relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black to-transparent pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-black pointer-events-none"></div>
        <div className="container mx-auto px-4 ">
          <SectionHeading
            eyebrow="Before vs. After"
            title="Before vs After: Field CRM Transformation"
          />
          <div className="max-w-5xl mx-auto overflow-x-auto rounded-xl border border-white/20">
            <table className="w-full text-left text-sm text-gray-200 bg-white/5 backdrop-blur-md">
              <thead>
                <tr className="bg-white/10 text-white">
                  <th className="px-5 py-4 font-semibold">Area</th>
                  <th className="px-5 py-4 font-semibold">Before</th>
                  <th className="px-5 py-4 font-semibold">After</th>
                  <th className="px-5 py-4 font-semibold text-amber-400">
                    Result
                  </th>
                </tr>
              </thead>
              <tbody>
                {kpiRows.map((row, i) => (
                  <tr
                    key={i}
                    className="border-t border-white/10 hover:bg-white/5 transition-colors"
                  >
                    {row.map((cell, j) => (
                      <td
                        key={j}
                        className={`px-5 py-4 whitespace-nowrap ${j === 3 ? "text-amber-400 font-semibold" : ""}`}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ===================== INDUSTRIES WE SERVE ===================== */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="Who We Help"
            title="Industries We Serve"
            subtitle="Field CRM solutions built for trade and service businesses."
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {industries.map((industry, index) => (
              <SegmentCard
                key={index}
                icon={industry.icon}
                title={industry.title}
                line={industry.line}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ===================== AI & ML SOLUTIONS ===================== */}
      <section className="py-16 bg-gradient-to-br from-gray-900 via-blue-900 to-black relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black to-transparent pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-black pointer-events-none"></div>
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="Intelligent Field Ops"
            title="AI-Powered Field CRM"
            subtitle="Intelligence that turns Field CRM from a record-keeping system into a proactive operations partner."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
            {aiCards.map((c, i) => (
              <IconCard key={i} icon={c.icon} title={c.title}>
                {c.body}
              </IconCard>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== TECHNOLOGY STACK ===================== */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <SectionHeading eyebrow="Under the Hood" title="Technology Stack" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 max-w-6xl mx-auto">
            {techStack.map((t, i) => (
              <IconCard key={i} icon={t.icon} title={t.title}>
                {t.body}
              </IconCard>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== INTEGRATION ECOSYSTEM ===================== */}
      <section className="py-16 bg-gradient-to-br from-gray-900 via-blue-900 to-black relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black to-transparent pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-black pointer-events-none"></div>
        <div className="container mx-auto px-4 ">
          <SectionHeading
            eyebrow="Connected, Not Siloed"
            title="Field CRM Integrations"
            subtitle="A Field CRM should connect with the systems you already use—not become another silo."
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
            {integrations.map((intg, i) => (
              <IntegrationCard key={i} icon={intg.icon} title={intg.title} />
            ))}
          </div>
        </div>
      </section>

      {/* ============================= FEATURES / SERVICES ============================= */}
      <section id="services" className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="Platform"
            title="Field CRM Development Services"
            subtitle="End-to-end development tailored to your workflows, teams, and growth trajectory."
          />

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-amber-300">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="bg-gray-900 p-4">
                  <div className="space-y-2">
                    {features.map((feature, index) => (
                      <div
                        key={index}
                        className={`p-3 rounded-lg cursor-pointer transition-all duration-300 ${
                          activeFeature === index
                            ? "bg-gradient-to-r from-amber-400 to-orange-500 text-black"
                            : "text-gray-300 hover:bg-gray-800"
                        }`}
                        onClick={() => setActiveFeature(index)}
                      >
                        <div className="flex items-center space-x-2">
                          <span
                            className={`text-xs px-2 py-1 rounded ${
                              activeFeature === index
                                ? "bg-black text-amber-400"
                                : "bg-gradient-to-r from-amber-400 to-orange-500 text-black"
                            }`}
                          >
                            {index < 9 ? `0${index + 1}` : index + 1}
                          </span>
                          <span className="font-medium text-sm lg:text-base 2xl:text-lg">
                            {feature.title}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-6 flex items-center">
                  <div className="space-y-4">
                    <div className="bg-amber-100 p-3 rounded-xl w-fit">
                      <div className="bg-gradient-to-r from-amber-400 to-orange-500 p-2 rounded-lg">
                        <svg
                          className="w-6 h-6 text-black"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    </div>

                    <div className="space-y-6">
                      {features[activeFeature].sections.map(
                        (section, sectionIndex) => (
                          <div key={sectionIndex}>
                            <h4 className="text-base lg:text-xl 2xl:text-2xl font-semibold text-gray-900 mb-3">
                              {section.heading}
                            </h4>
                            <ul className="space-y-2 text-gray-600">
                              {section.details.map((detail, idx) => (
                                <li
                                  key={idx}
                                  className="flex items-start space-x-2"
                                >
                                  <span className="w-1.5 h-1.5 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                                  <span className="text-sm lg:text-[15px] 2xl:text-lg">
                                    {detail}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ),
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== INDUSTRY USE CASES ===================== */}
      <section className="py-16 bg-gradient-to-br from-gray-900 via-blue-900 to-black relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black to-transparent pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-black pointer-events-none"></div>
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="Proof in Practice"
            title="Key Field CRM Features in Real Life"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
            {useCases.map((u, i) => (
              <UseCaseCard
                key={i}
                problem={u.problem}
                solution={u.solution}
                outcome={u.outcome}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ===================== ROI ===================== */}
      {/* <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="Financial Case"
            title="Operational Impact"
            subtitle="AI-powered scheduling and voice-based capture help field teams spend more time on customer work."
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
            {savings.map((s, i) => (
              <SavingsCard key={i} label={s.label} value={s.value} />
            ))}
          </div>
        </div>
      </section> */}

      {/* ===================== BUYER READINESS CHECKLIST ===================== */}
      {/* <section className="py-16 bg-gradient-to-br from-gray-900 via-blue-900 to-black relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black to-transparent pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-black pointer-events-none"></div>
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="Are You Ready?"
            title="Custom vs Off-the-Shelf Field CRM"
            subtitle="Choose the path that fits your workflows, integrations, and ownership needs."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {readiness.map((group, i) => (
              <ChecklistGroup key={i} title={group.title} items={group.items} />
            ))}
          </div>
        </div>
      </section> */}

      {/* ===================== CUSTOMER JOURNEY ===================== */}
    

      {/* ===================== DEPLOYMENT MODELS ===================== */}
      <section className="py-16 bg-gradient-to-br from-gray-900 via-blue-900 to-black relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black to-transparent pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-black pointer-events-none"></div>
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="Flexible Delivery"
            title="Deployment Models"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {deploymentModels.map((m, i) => (
              <DeploymentCard
                key={i}
                icon={m.icon}
                title={m.title}
                points={m.points}
                highlight={m.highlight}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ===================== SECURITY & COMPLIANCE ===================== */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="Enterprise Trust"
            title="Field CRM Security & Data Protection"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {security.map((s, i) => (
              <IconCard key={i} icon={s.icon} title={s.title}>
                {s.body}
              </IconCard>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== CASE STUDY PREVIEW ===================== */}
      <section className="py-16 bg-gradient-to-br from-gray-900 via-blue-900 to-black relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black to-transparent pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-black pointer-events-none"></div>
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="Real Results"
            title="What Our Clients Say"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {caseStudies.map((c, i) => (
              <CaseStudyCard
                key={i}
                metric={c.metric}
                title={c.title}
                description={c.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ============================= PROCESS (existing) ============================= */}
      <section className="py-16 bg-black relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent mb-3">
              Our Field CRM Implementation Process
            </h2>
            <p className="text-lg text-gray-300">
              From discovery to support — typically 3–6 months, delivered in phases
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="block md:hidden">
              <div className="relative flex justify-between items-start gap-2 px-2">
                <div className="absolute top-6 sm:top-7 left-8 right-8 h-0.5 bg-blue-300 z-0"></div>
                {processSteps.map((step, index) => (
                  <div key={index} className="flex-1 text-center relative z-10">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-amber-400 to-orange-500 text-black rounded-full flex items-center justify-center text-lg sm:text-xl font-extrabold mb-2 mx-auto border-2 border-white shadow-lg">
                      {step.number}
                    </div>
                    <h3 className="font-medium text-white text-sm sm:text-base leading-tight px-1">
                      {step.title}
                    </h3>
                  </div>
                ))}
              </div>
            </div>

            <div className="hidden md:flex justify-center items-center gap-6">
              {processSteps.map((step, index) => (
                <div key={index} className="flex items-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-amber-400 to-orange-500 text-black rounded-full flex items-center justify-center text-xl font-extrabold mb-3 mx-auto">
                      {step.number}
                    </div>
                    <h3 className="font-medium text-white text-base mb-1">
                      {step.title}
                    </h3>
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="w-12 h-0.5 bg-blue-300 mx-3 -mt-6"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===================== ENGAGEMENT MODELS ===================== */}
      <section className="py-16 bg-gradient-to-br from-gray-900 via-blue-900 to-black relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black to-transparent pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-black pointer-events-none"></div>
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="Ways to Work With Us"
            title="Engagement Models"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {engagementModels.map((m, i) => (
              <EngagementCard
                key={i}
                icon={m.icon}
                title={m.title}
                points={m.points}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ============================= WHY CHOOSE US (existing) ============================= */}
      <section className="py-16 bg-gradient-to-br from-gray-900 via-blue-900 to-black relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black to-transparent"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-32 h-32 bg-yellow-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-40 right-20 w-24 h-24 bg-yellow-300 rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-yellow-500 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 left-1/2 w-20 h-20 bg-yellow-200 rounded-full blur-2xl"></div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-black"></div>

        <div className="relative container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-white space-y-8">
                <div>
                  <h2 className="text-2xl md:text-4xl mb-4 leading-tight">
                    Ready to Build a Custom Field CRM?
                  </h2>
                  <p className="text-xl text-gray-300 mb-8">
                    Why Ascentia Labs for Field Service CRM
                  </p>
                </div>

                <div className="space-y-6">
                  {advantages.map((item) => (
                    <div key={item.id}>
                      <div
                        onClick={() =>
                          setActiveIndex(
                            activeIndex === item.id ? null : item.id,
                          )
                        }
                        className="flex items-center justify-between cursor-pointer"
                      >
                        <div className="flex items-center space-x-4 group">
                          <div className="bg-blue-600 text-white px-3 py-1 rounded-md text-sm">
                            {String(item.id).padStart(2, "0")}
                          </div>
                          <div>
                            <h3 className="lg:text-xl text-md group-hover:text-blue-300 transition-colors">
                              {item.title}
                            </h3>
                            <div className="w-24 h-0.5 bg-blue-500 mt-1"></div>
                          </div>
                        </div>
                        <div
                          className={`text-blue-500 text-xl transition-transform duration-300 ${
                            activeIndex === item.id ? "rotate-45" : ""
                          }`}
                        >
                          +
                        </div>
                      </div>
                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          activeIndex === item.id
                            ? "max-h-32 opacity-100 mt-3"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        <p className="pl-16 text-gray-300 text-sm md:text-base">
                          → {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-blue-600/20 to-blue-800/20 backdrop-blur-md rounded-3xl p-8 border border-blue-400/30">
                  <div className="text-center text-white">
                    <div className="relative w-32 h-32 mx-auto mb-6">
                      <div className="w-32 h-32 bg-gradient-to-br from-amber-400 via-amber-500 to-orange-500 rounded-full flex items-center justify-center relative overflow-hidden shadow-2xl border-4 border-black/20">
                        <div className="absolute inset-0 bg-gradient-to-br from-amber-300/40 via-amber-400/30 to-orange-400/40 rounded-full animate-pulse"></div>
                        <svg
                          className="w-16 h-16 text-black relative z-10 drop-shadow-lg"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <div className="absolute inset-0 rounded-full border-2 border-black/10 animate-spin-slow opacity-60"></div>
                      </div>
                      <div className="absolute inset-0 w-32 h-32 rounded-full bg-gradient-to-br from-amber-300/20 via-amber-400/20 to-orange-400/20 animate-ping"></div>
                      <div className="absolute inset-0 w-32 h-32 rounded-full bg-gradient-to-br from-amber-200/15 via-amber-300/15 to-orange-300/15 animate-pulse"></div>
                    </div>
                    <h3 className="text-2xl mb-4">
                      Talk to a Field CRM Expert
                    </h3>
                    <p className="text-blue-100 mb-6">
                      Connect your customer management, field operations,
                      scheduling, dispatch, and billing in one intelligent
                      platform.
                    </p>
                    <button
                      onClick={openConsultation}
                      className="bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 hover:from-amber-500 hover:via-orange-500 hover:to-orange-600 text-black border-2 border-black/20 hover:border-black/40 px-8 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                      Get a Field CRM Consultation
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== RELATED RESOURCES ===================== */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <SectionHeading eyebrow="Learn More" title="Related Resources" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {resources.map((r, i) => (
              <ResourceCard
                key={i}
                icon={r.icon}
                label={r.label}
                items={r.items}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ============================= FAQ ============================= */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent md:text-4xl mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-300">
                Find answers to common questions about Field CRM development
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-gray-900 rounded-xl shadow-lg border border-gray-700 overflow-hidden"
                >
                  <button
                    className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-800 transition-colors duration-200"
                    onClick={() => toggleFAQ(index)}
                  >
                    <h3 className="text-lg text-white pr-4">{faq.question}</h3>
                    <div className="flex-shrink-0">
                      {openFAQ === index ? (
                        <ChevronUp className="w-5 h-5 text-blue-400" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-blue-400" />
                      )}
                    </div>
                  </button>
                  {openFAQ === index && (
                    <div className="px-6 pb-5">
                      <div className="border-t border-gray-700 pt-4">
                        <p className="text-gray-300 whitespace-pre-line leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================= FINAL CTA ============================= */}
    </div>
  );
};

export default FieldServiceCRM;
