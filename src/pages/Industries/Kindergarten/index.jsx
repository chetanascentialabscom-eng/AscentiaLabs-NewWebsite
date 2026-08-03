import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Settings,
  Plane,
  DollarSign,
  ChevronDown,
  ChevronUp,
  Shield,
  UserCheck,
  BarChart3,
  MapPinned,
  CheckCircle2,
  Building2,
  Home,
  Wrench,
  Building,
  Compass,
  Cpu,
  Landmark,
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
  GraduationCap,
  Ticket,
  Package,
  Truck,
  Stethoscope,
  Star,
  Newspaper,
  Baby,
  MessageCircle,
  CalendarCheck,
  CreditCard,
} from "lucide-react";
import { useConsultation } from "../../../contexts/ConsultationContext";
import SEO from "../../../components/SEO";
import { seoData } from "../../../utils/seoData";

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
    <p className="text-md uppercase tracking-wide text-blue-400 font-semibold mb-1">
      Business Impact
    </p>
    <p className="text-gray-100 text-sm mb-4">{impact}</p>
    <p className="text-md uppercase tracking-wide text-amber-400 font-semibold mb-1">
      Our Solution
    </p>
    <p className="text-gray-100 text-sm">{solution}</p>
  </div>
);

const IndustryCard = ({ icon: Icon, title, line, link }) => (
  <Link
    to={link}
    className="bg-gray-900 border border-gray-700 rounded-xl p-5 text-center hover:border-amber-400/50 hover:-translate-y-1 transition-all duration-300 block"
  >
    <div className="bg-gradient-to-r from-amber-400 to-orange-500 w-10 h-10 rounded-lg flex items-center justify-center mx-auto mb-3">
      <Icon size={18} className="text-black" />
    </div>

    <h4 className="text-white font-semibold text-md mb-1">{title}</h4>

    <p className="text-gray-100 text-sm">{line}</p>
  </Link>
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
    <p className="text-md uppercase tracking-wide text-blue-500 font-semibold mb-1">
      Solution
    </p>
    <p className="text-gray-300 text-sm mb-3">{solution}</p>
    <div className="text-amber-400 text-xs mb-3">↓</div>
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

const KindergartenPage = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [openFAQ, setOpenFAQ] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);
  const { openConsultation } = useConsultation();

  const scrollbarStyles = `
    .custom-scrollbar::-webkit-scrollbar { width: 0px; background: transparent; }
    .custom-scrollbar::-webkit-scrollbar-thumb { background: transparent; }
    .custom-scrollbar { scrollbar-width: none; -ms-overflow-style: none; }
  `;

  /* ---------------------------- DATA ---------------------------- */

  const adminFeatures = [
    {
      icon: Baby,
      title: "Admissions Management System",
      description:
        "Plan, track and manage every inquiry, tour and enrollment in real time, with automatic waitlist and follow-up alerts.",
    },
    {
      icon: Shield,
      title: "Attendance & Compliance Tracking",
      description:
        "Automate digital check-in/out, health records and compliance documentation at every stage of the enrollment lifecycle.",
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting",
      description:
        "Live enrollment dashboards that turn classroom data into decisions and cost savings.",
    },
    {
      icon: MessageCircle,
      title: "Parent Communication & Billing",
      description:
        "Track inquiries, manage parent messaging and collect fees faster with a centralized childcare CRM.",
    },
  ];

  const stats = [
    { number: "7+", label: "Business Years" },
    { number: "120+", label: "Projects Delivered" },
    { number: "10+", label: "Industries Catered" },
    { number: "4+", label: "Countries" },
  ];

  const marketStats = [
    { value: "$2.5B", label: "Global Child Care Software Market (2024)" },
    { value: "$3.82B", label: "Preschool App Market (2025)" },
    { value: "$8.4B", label: "Early Childhood Learning Apps Market (2025)" },
    { value: "78%", label: "Education Leaders Using Management Software" },
    { value: "79%", label: "Report Significant Time Savings" },
    { value: "70%+", label: "Cloud-Based Deployment Adoption" },
  ];

  const transformationCards = [
    {
      icon: TrendingUp,
      title: "Rising Parent Expectations",
      impact:
        "Parents expect real-time updates, digital invoices and app-based communication. Schools that can't meet these expectations risk losing families.",
    },
    {
      icon: Users,
      title: "Staff Shortages Are Intensifying",
      impact:
        "Administrative burnout is a leading cause of turnover. Automating routine tasks frees teachers to focus on education, not paperwork.",
    },
    {
      icon: ClipboardList,
      title: "Administrative Workload Is Unsustainable",
      impact:
        "Enrollment, attendance, billing and scheduling consume hours each week. Guided workflows reduce the burden.",
    },
    {
      icon: DollarSign,
      title: "Rising Operational Costs",
      impact:
        "Optimized resource utilization and fewer billing errors directly improve the bottom line.",
    },
    {
      icon: ClipboardCheck,
      title: "Growing Compliance Requirements",
      impact:
        "Audit trails, secure record keeping and compliance reporting reduce risk and simplify inspections.",
    },
  ];

  const challenges = [
    {
      problem:
        "Managing inquiries, tours, applications and waitlists manually.",
      impact:
        "Prospective families fall through the cracks and enrollment targets are missed.",
      solution:
        "Centralized admissions system with automated inquiry tracking and waitlist management.",
    },
    {
      problem:
        "Paper sign-in sheets provide no real-time attendance visibility.",
      impact:
        "Staff spend valuable time recording attendance instead of engaging with children.",
      solution: "Digital check-in/out with real-time attendance dashboards.",
    },
    {
      problem:
        "Invoicing, tracking payments and reconciling accounts manually.",
      impact: "Errors lead to parent frustration and revenue loss.",
      solution:
        "Automated billing with online payments and late-fee management.",
    },
    {
      problem:
        "Parent updates and messages scattered across calls and paper notes.",
      impact: "Important messages get lost and parent satisfaction suffers.",
      solution:
        "Structured parent portal and mobile app with real-time updates.",
    },
    {
      problem:
        "Classroom schedules, teacher assignments and ratios managed by hand.",
      impact: "Conflicts arise and last-minute changes create chaos.",
      solution: "Automated scheduling that optimizes staff-to-child ratios.",
    },
    {
      problem:
        "No centralized visibility into enrollment, billing or staffing.",
      impact: "Decisions are made on gut feel rather than data.",
      solution: "Real-time reporting and analytics dashboards.",
    },
  ];

  const outcomes = [
    { icon: Baby, value: "Same day", label: "Enrollment Processing" },
    {
      icon: CalendarCheck,
      value: "2–5 min",
      label: "Daily Attendance Tracking",
    },
    { icon: MessageCircle, value: "Real-time", label: "Parent Communication" },
    { icon: Wrench, value: "60–75%", label: "Admin Workload Reduction" },
    { icon: CreditCard, value: "<1%", label: "Billing Error Rate" },
    { icon: BarChart3, value: "5–10 min", label: "Report Generation Time" },
  ];

  const kpiRows = [
    ["Admissions Time per Student", "45–60 min", "5–10 min", "85% faster"],
    ["Attendance Tracking Time", "30–45 min/day", "2–5 min/day", "90% faster"],
    ["Billing & Invoicing Time", "15–20 hrs/mo", "2–3 hrs/mo", "85% faster"],
    ["Parent Response Time", "4–8 hrs", "Real-time", "Instant"],
    ["Enrollment Processing", "2–3 days", "Same day", "Instant"],
    ["Report Generation Time", "4–6 hrs", "5–10 min", "95% faster"],
    ["Billing Errors", "5–10%", "<1%", "90% reduction"],
  ];

  const industries = [
    {
      icon: Settings,
      title: "Field Service CRM",
      line: "Manage field teams, scheduling & service operations.",
      link: "/field-service-crm",
    },
    {
      icon: Building2,
      title: "Business CRM",
      line: "Streamline sales, customer relationships & business workflows.",
      link: "/business-management-crm-solution",
    },
    {
      icon: GraduationCap,
      title: "Education",
      line: "Smart solutions for schools, colleges & e-learning platforms.",
      link: "/education-app-development",
    },
    {
      icon: BarChart3,
      title: "Enterprise ERP",
      line: "Integrate finance, operations, HR & business processes.",
      link: "/enterprise-resource-planning",
    },
    {
      icon: Stethoscope,
      title: "Healthcare",
      line: "Digital healthcare, patient management & telemedicine solutions.",
      link: "/healthcare-app-development",
    },
    {
      icon: Building,
      title: "Interior & Architecture",
      line: "Project management, design collaboration & client portals.",
      link: "/interior-design-app-development",
    },
    {
      icon: Home,
      title: "Real Estate",
      line: "Property management, CRM & PropTech software solutions.",
      link: "/real-estate-app-development",
    },
    {
      icon: Ticket,
      title: "Ticketing Solutions",
      line: "Online booking, event management & digital ticketing systems.",
      link: "/ticketing-solution",
    },
    {
      icon: Package,
      title: "Textile Industry",
      line: "ERP solutions for textile manufacturing & supply chains.",
      link: "/textile-manufacturing-software",
    },
    {
      icon: Truck,
      title: "Logistics",
      line: "Fleet tracking, warehouse & transportation management.",
      link: "/logistics-software-development",
    },
    {
      icon: Wrench,
      title: "Manufacturing",
      line: "Production, inventory & quality management software.",
      link: "/manufacturing-management-software",
    },
    {
      icon: Star,
      title: "Kindergarten",
      line: "School management, admissions & parent communication.",
      link: "/kindergarten-school-management",
    },
    {
      icon: Plane,
      title: "Travel & Tourism",
      line: "Booking engines, itinerary & travel management platforms.",
      link: "/travel-app-development",
    },
  ];

  const aiCards = [
    {
      icon: TrendingUp,
      title: "AI Lead Scoring for Admissions",
      body: "ML models analyze inquiries and engagement to identify the most promising prospective families and automate follow-ups.",
    },
    {
      icon: Eye,
      title: "Facial Recognition Attendance",
      body: "Digital check-in/out with facial recognition automates attendance while AI flags patterns and predicts trends.",
    },
    {
      icon: MessageCircle,
      title: "AI Parent Chatbots",
      body: "24/7 chatbots handle routine parent inquiries with natural, context-aware, personalized communication.",
    },
    {
      icon: Sparkles,
      title: "Automated Progress Reports",
      body: "AI analyzes developmental assessments to identify learning gaps and generate personalized progress reports.",
    },
    {
      icon: Network,
      title: "Predictive Enrollment Analytics",
      body: "Predictive analytics forecast enrollment trends and revenue, helping optimize capacity planning and staffing.",
    },
  ];

  const techStack = [
    {
      icon: Brain,
      title: "AI & Machine Learning",
      body: "Predictive analytics, NLP and computer vision power smart automation features throughout the platform.",
    },
    {
      icon: Cpu,
      title: "Automation & Workflows",
      body: "Rules-based automation reduces manual effort across admissions, billing and scheduling.",
    },
    {
      icon: Cloud,
      title: "Cloud Infrastructure",
      body: "Scalable, secure cloud deployment with multi-tenancy for single and multi-location operations.",
    },
    {
      icon: BarChart3,
      title: "Analytics & BI",
      body: "Real-time dashboards, custom reports and data visualization for full operational visibility.",
    },
    {
      icon: Network,
      title: "Integration Layer",
      body: "RESTful APIs connecting payment gateways, accounting, CRM and learning platforms.",
    },
  ];

  const integrations = [
    { icon: CreditCard, title: "Payment Gateways (Stripe, PayPal, Square)" },
    { icon: Database, title: "Accounting (QuickBooks, Xero)" },
    { icon: Building2, title: "CRM (Salesforce, HubSpot)" },
    { icon: Server, title: "ERP Systems" },
    { icon: MessageCircle, title: "SMS, Email & WhatsApp" },
    { icon: Users, title: "HR & Payroll Systems" },
  ];

  const useCases = [
    {
      problem:
        "A regional preschool chain with five locations struggled to manage inquiries, tours and enrollments.",
      solution:
        "Kindergarten management software centralized admissions with automated follow-ups and waitlist management.",
      outcome: "22% increase in enrollment in the first year.",
    },
    {
      problem:
        "A Montessori school needed a better way to keep parents informed about daily activities and progress.",
      solution:
        "Parent portal and mobile app with real-time updates, photos and messaging.",
      outcome: "35% increase in parent satisfaction scores.",
    },
    {
      problem:
        "A busy daycare center relied on paper sign-in sheets, causing billing errors.",
      solution: "Digital check-in/out with real-time attendance visibility.",
      outcome: "98% improvement in billing accuracy.",
    },
    {
      problem:
        "A nursery school spent hours each month manually invoicing parents and tracking payments.",
      solution: "Automated billing with online payments.",
      outcome: "80% reduction in invoicing time, 25% better collection rates.",
    },
  ];

  const savings = [
    { label: "Admin Time Reduction", value: "30–40%" },
    { label: "Billing Error Reduction", value: "5–10% → <1%" },
    { label: "Collection Rate Improvement", value: "15–25%" },
    { label: "Admissions Time Reduction", value: "85%" },
    { label: "Report Generation Speed Gain", value: "95%" },
    { label: "Total Operational Cost Reduction", value: "20–30%" },
  ];

  const readiness = [
    {
      title: "Operational Readiness",
      items: [
        "You spend more than 10 hrs/week on admin paperwork",
        "Parents frequently complain about communication gaps",
        "You're using spreadsheets or paper for attendance",
        "Billing errors are common and frustrate parents",
      ],
    },
    {
      title: "Growth Readiness",
      items: [
        "You struggle to track enrollment and waitlists",
        "You're planning to expand to additional locations",
        "Parent expectations for digital tools are increasing",
        "You're losing families to competitors with better tech",
      ],
    },
    {
      title: "Team Readiness",
      items: [
        "Staff scheduling is time-consuming and conflict-prone",
        "You want to reduce staff administrative burden",
        "Report generation is manual and takes hours",
        "You lack real-time visibility into operations",
      ],
    },
    {
      title: "Compliance Readiness",
      items: [
        "You need better compliance and audit trails",
        "Your current free daycare software is insufficient",
        "You want secure, centralized record keeping",
        "You need consistent, standardized processes",
      ],
    },
  ];

  const journey = [
    {
      title: "Discovery",
      body: "Identify challenges, requirements and goals.",
    },
    {
      title: "Consultation",
      body: "Demonstrate how our software addresses your needs.",
    },
    { title: "Planning", body: "Define requirements and implementation plan." },
    {
      title: "Design",
      body: "Architect the solution and tailored workflows.",
    },
    {
      title: "Deployment",
      body: "Migrate data, train staff and go live.",
    },
  ];

  const deploymentModels = [
    {
      icon: Cloud,
      title: "Cloud (SaaS)",
      points: [
        "No hardware or infrastructure to manage",
        "Automatic updates and maintenance",
        "Accessible from anywhere",
      ],
    },
    {
      icon: Network,
      title: "Hybrid",
      points: [
        "Core systems on-premise, auxiliary in cloud",
        "Balance of control and flexibility",
        "Meets specific data residency needs",
      ],
      highlight: true,
    },
    {
      icon: Server,
      title: "On-Premise",
      points: [
        "Full control over data and infrastructure",
        "Meets strict data sovereignty requirements",
        "Ideal for large multi-location organizations",
      ],
    },
  ];

  const security = [
    {
      icon: Lock,
      title: "Data Encryption",
      body: "AES-256 and TLS 1.3 encryption at rest and in transit.",
    },
    {
      icon: KeyRound,
      title: "Access Control",
      body: "Role-based access with multi-factor authentication.",
    },
    {
      icon: ClipboardCheck,
      title: "Audit Logs",
      body: "Comprehensive audit trails for compliance reviews.",
    },
    {
      icon: Shield,
      title: "Compliance",
      body: "SOC 2, GDPR, COPPA and FERPA aligned.",
    },
  ];

  const caseStudies = [
    {
      metric: "45%",
      title: "Preschool Chain Streamlines 12 Locations",
      description:
        "Billing accuracy improved from 88% to 99.5% and enrollment grew 18% in year one.",
    },
    {
      metric: "70%",
      title: "Montessori School Enhances Parent Engagement",
      description:
        "Teacher time on progress reporting cut by 70% with a 38% rise in parent satisfaction.",
    },
    {
      metric: "85%",
      title: "Daycare Center Eliminates Billing Errors",
      description:
        "Billing time dropped from 20 hours to 3 hours per month, collections rose to 96%.",
    },
  ];

  const engagementModels = [
    {
      icon: FileText,
      title: "Fixed Cost",
      points: [
        "Well-defined scope and timeline",
        "Predictable budget",
        "Ideal for specific projects",
      ],
    },
    {
      icon: Users,
      title: "Dedicated Team",
      points: [
        "Full team assigned to your project",
        "Complete control and transparency",
        "Long-term partnership",
      ],
    },
    {
      icon: UserCog,
      title: "Staff Augmentation",
      points: [
        "Supplement your existing team",
        "Flexible scaling up or down",
        "Access to specialized skills",
      ],
    },
  ];

  const resources = [
    {
      icon: Newspaper,
      label: "Blogs",
      items: [
        "How Kindergarten Management Software Transforms Early Childhood Education",
        "The ROI of Preschool Management Software",
        "5 Ways Daycare Management Software Improves Parent Engagement",
      ],
    },
    {
      icon: FileText,
      label: "Whitepapers",
      items: [
        "The State of Digital Transformation in Early Childhood Education",
        "AI and Automation in Kindergarten Management",
      ],
    },
    {
      icon: BookOpen,
      label: "Guides",
      items: [
        "The Complete Guide to Choosing Kindergarten Management Software",
        "Childcare Software Buyer's Guide: Features, Pricing, ROI",
      ],
    },
  ];

  const relatedServices = [
    {
      icon: Code,
      title: "Custom Software Development",
      description:
        "Purpose-built systems that match your exact classroom and admin workflow.",
      to: "/custom-crm-development",
    },
    {
      icon: Brain,
      title: "AI/ML Development",
      description:
        "Predictive enrollment forecasting, chatbots and progress-report automation.",
      to: "/ai-ml-services",
    },
    {
      icon: TrendingUp,
      title: "Digital Transformation",
      description:
        "A clear roadmap from paper-based operations to a connected school.",
      to: "/digital-transformation",
    },
    {
      icon: Sparkles,
      title: "Application Modernization",
      description: "Upgrade legacy systems without disrupting classrooms.",
      to: "/application-modernisation",
    },
    {
      icon: UserCheck,
      title: "Mobile App Development",
      description: "Manage attendance, billing and messaging from anywhere.",
      to: "/mobile-application",
    },
  ];

  const features = [
    {
      id: "admissions-management",
      title: "Admissions Management — Full Lifecycle, No Gaps",
      sections: [
        {
          heading: "For Administrators",
          details: [
            "Auto inquiry capture (instant)",
            "Tour & application tracking (live dashboard)",
            "Waitlist automation (auto reminders)",
            "Real-time monitoring (live dashboard)",
            "Capacity alerts (before it hurts enrollment)",
            "Task assignment (auto assign to team)",
            "Progress tracking (see status live)",
            "Billing integration (auto sync)",
          ],
        },
        {
          heading: "For Owners",
          details: [
            "See enrollment (dashboard)",
            "Track capacity (live)",
            "Find open spots (alerts)",
            "Assign tasks (auto)",
          ],
        },
      ],
    },
    {
      id: "attendance-tracking",
      title: "Attendance Tracking — Digital Check-In, No Missed Records",
      sections: [
        {
          heading: "For Administrators",
          details: [
            "Real-time attendance tracking (live status)",
            "Auto check-in/out alerts (instant)",
            "Multi-classroom management (all rooms)",
            "Auto ratio compliance (no manual work)",
            "Record storage (auto-filed)",
            "Digital sign-in (1 click)",
            "Compliance tracking (full traceability)",
          ],
        },
        {
          heading: "For Parents",
          details: [
            "See attendance (portal)",
            "Pickup requests (live)",
            "Auto reminders (alerts)",
            "Record access (quick)",
          ],
        },
      ],
    },
    {
      id: "billing-fees",
      title: "Fee Management & Billing — Fast Collections, Happy Parents",
      sections: [
        {
          heading: "For Finance Teams",
          details: [
            "Auto invoice creation (custom schedules)",
            "Real-time payment monitoring (live)",
            "Trend analysis (see patterns)",
            "Late-fee tracking (alerts)",
            "Predictive collection insights (auto assign)",
            "Cost tracking (standards met)",
            "Audit trail (auto documentation)",
          ],
        },
        {
          heading: "For Parents",
          details: [
            "Pay online (app)",
            "Track invoices (live)",
            "Rate experience (reports)",
          ],
        },
      ],
    },
    {
      id: "parent-crm",
      title: "Parent Communication CRM — Track Inquiries, No Delays",
      sections: [
        {
          heading: "For Directors",
          details: [
            "Track inquiry quality (scoring)",
            "Follow-up times (live tracking)",
            "Staff performance (KPIs)",
            "Message automation (sync auto)",
            "Enrollment tracking (alerts)",
            "Marketing automation (auto plan)",
            "Parent communication (live)",
            "Portal integration (auto sync)",
          ],
        },
        {
          heading: "For Teachers",
          details: [
            "See messages (dashboard)",
            "Send updates (auto generate)",
            "Track replies (alerts)",
            "Coordinate events (portal)",
          ],
        },
      ],
    },
    {
      id: "enrollment-analytics",
      title: "Enrollment Analytics — Prevent Surprises",
      sections: [
        {
          heading: "For Owners",
          details: [
            "Capacity forecasting (auto alerts)",
            "Predictive risk analysis (alerts before issues)",
            "Performance monitoring (live KPIs)",
            "Cost tracking (budget management)",
            "Scenario modeling (always available)",
            "Enrollment reports (auto create)",
          ],
        },
        {
          heading: "For Administrators",
          details: [
            "See enrollment (dashboard)",
            "Track revenue (reports)",
            "Risk alerts (instant)",
          ],
        },
      ],
    },
    {
      id: "student-management",
      title: "Student & Family Management — Auto Records, Track Wellbeing",
      sections: [
        {
          heading: "For Administrators",
          details: [
            "Auto onboarding (document-based, right process)",
            "Communication optimization (efficient)",
            "Health record tracking (digital, secure)",
            "Milestone tracking (KPIs live)",
            "Re-enrollment management (terms tracked)",
            "Retention analytics (live)",
          ],
        },
        {
          heading: "For Parents",
          details: [
            "See profile (app)",
            "Pay fees (5 seconds)",
            "View records (dashboard)",
          ],
        },
      ],
    },
    {
      id: "financial-analytics",
      title: "Financial Analytics — See Revenue, Cut Costs",
      sections: [
        {
          heading: "For Owners",
          details: [
            "Real-time cost accounting (live)",
            "Per-classroom costing (per unit)",
            "Profitability analysis (see returns)",
            "Financial dashboards (KPIs live)",
            "Budget planning (auto)",
            "Variance analysis (alerts)",
            "Accounting integration (sync auto)",
          ],
        },
        {
          heading: "For Finance",
          details: [
            "Track costs (dashboard)",
            "See revenue (reports)",
            "Budget tracking (live)",
          ],
        },
      ],
    },
    {
      id: "mobile-app",
      title: "Mobile App — Manage Your School from Your Phone",
      sections: [
        {
          heading: "For Administrators",
          details: [
            "See enrollment (app, live)",
            "Track attendance (live)",
            "Approve requests (1 click)",
            "Alerts (push notifications)",
            "Reports (PDF download)",
          ],
        },
        {
          heading: "For Parents",
          details: [
            "Pay fees (app, 5 seconds)",
            "See daily updates (dashboard)",
            "Message teachers (instant)",
          ],
        },
      ],
    },
    {
      id: "classroom-monitoring",
      title: "Classroom Monitoring — Track Every Room Live",
      sections: [
        {
          heading: "For Owners",
          details: [
            "See all classrooms (dashboard)",
            "Performance (live KPIs)",
            "Issue alerts (instant)",
            "Ratio tracking (reports)",
            "Efficiency (KPIs)",
          ],
        },
        {
          heading: "For Staff",
          details: [
            "Monitor classrooms (live)",
            "Alerts (instant)",
            "Attendance data (reports)",
          ],
        },
      ],
    },
  ];

  const advantages = [
    {
      id: 1,
      title: "Industry Expertise",
      description: "We Know Early Childhood Education",
    },
    {
      id: 2,
      title: "Scalable Solutions",
      description: "Grows With You — From 1 Classroom to 100 Locations",
    },
    {
      id: 3,
      title: "Advanced Technology",
      description: "Modern Tech — AI, Auto-tracking, Real-time Reports",
    },
    {
      id: 4,
      title: "Quality Assurance & Compliance",
      description: "No Bugs, Meets Standards — We test 3 times",
    },
    {
      id: 5,
      title: "Seamless Integration",
      description: "Works With Your Current Systems — No disruption",
    },
    {
      id: 6,
      title: "24/7 Support",
      description: "24/7 Support — We Answer Fast",
    },
  ];

  const processSteps = [
    {
      number: "1",
      title: "Learn Your School",
      description:
        "We conduct comprehensive analysis of your operations, identifying key challenges, requirements, and opportunities for digital transformation.",
    },
    {
      number: "2",
      title: "Custom Design",
      description:
        "We design a tailored kindergarten management platform that aligns with your operating model, incorporating parent communication, billing and automated workflows.",
    },
    {
      number: "3",
      title: "Build + Test",
      description:
        "Our experts develop and deploy the solution with seamless integration to existing systems, payment gateways and communication tools, with minimal disruption.",
    },
    {
      number: "4",
      title: "Train + Start",
      description:
        "We provide comprehensive training and ongoing support, continuously monitoring system performance to maximize efficiency and ROI.",
    },
  ];

  const faqs = [
    {
      question: "What is kindergarten management software?",
      answer:
        "Kindergarten management software is a digital platform that helps early childhood education providers manage admissions, attendance, billing, parent communication, scheduling, reporting, and other administrative tasks. It automates manual processes and provides real-time visibility into operations.",
    },
    {
      question: "How does preschool management software work?",
      answer:
        "Preschool management software provides a centralized platform for managing all aspects of preschool operations. Administrators and teachers access the system through web or mobile applications to track attendance, manage billing, communicate with parents, generate reports, and more. Parents typically access a parent portal for payments, updates, and communication.",
    },
    {
      question: "What are the benefits of daycare management software?",
      answer:
        "Daycare management software reduces administrative workload, improves attendance tracking accuracy, automates billing and collections, enhances parent communication, provides real-time reporting, and helps daycare centers operate more efficiently. 79% of users report significant time savings.",
    },
    {
      question: "How much does childcare management software cost?",
      answer:
        "Costs vary based on features, number of locations, number of users, and deployment model (cloud vs. on-premise). Cloud-based solutions typically use subscription pricing, while on-premise solutions involve license fees plus maintenance. Contact Ascentia Labs for a customized quote.",
    },
    {
      question:
        "Can kindergarten management software handle multiple locations?",
      answer:
        "Yes, enterprise-grade kindergarten management software is designed for multi-location operations. It provides centralized administration, standardized workflows, cross-branch reporting, and consistent parent experiences across all locations.",
    },
    {
      question: "How does childcare billing software improve collections?",
      answer:
        "Childcare billing software automates invoicing, sends payment reminders, processes online payments, tracks payment history, and manages late fees. Automation reduces errors, improves collection rates, and saves administrative time.",
    },
    {
      question: "Is childcare management software secure?",
      answer:
        "Professional childcare management software includes comprehensive security measures: data encryption, access controls, secure backups, audit logs, and compliance with data protection regulations like GDPR and COPPA.",
    },
    {
      question:
        "How long does it take to implement kindergarten management software?",
      answer:
        "Implementation timeline varies based on complexity, customizations, and data migration requirements. Typical implementations range from 4–12 weeks. Ascentia Labs follows a structured implementation process to ensure successful deployment.",
    },
    {
      question: "Is cloud-based or on-premise deployment better?",
      answer:
        "Cloud-based deployment is typically more cost-effective, requires no IT infrastructure, and provides automatic updates. On-premise deployment offers full control and is preferred by organizations with strict data sovereignty requirements. Hybrid options are also available.",
    },
    {
      question:
        "What is the ROI of investing in childcare management software?",
      answer:
        "ROI comes from reduced administrative costs, improved billing accuracy and collections, better resource utilization, increased enrollment through improved parent satisfaction, and long-term scalability. Most organizations recoup their investment within 6–12 months.",
    },
  ];

  const toggleFAQ = (index) => setOpenFAQ(openFAQ === index ? null : index);

  return (
    <div className="min-h-screen bg-white">
      <SEO {...seoData.kindergarten} />
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
              <h1 className="text-[25px] md:text-4xl leading-tight">
                Kindergarten Management Software Built for Modern Early
                Childhood Education
              </h1>

              <p className="text-gray-300 leading-relaxed">
                Digitize admissions, attendance, billing and parent
                communication with kindergarten management software that gives
                you back the time to focus on the children in your care.
              </p>
              <button
                onClick={openConsultation}
                className="bg-gradient-to-r from-amber-400 to-orange-500 text-black px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:from-amber-500 hover:to-orange-600"
              >
                Schedule a Consultation →
              </button>
            </div>

            <div className="mt-8 lg:mt-0">
              {/* Top Badge - Kindergarten Excellence */}
              <div className="flex justify-center mb-6">
                <div className="bg-white/15 backdrop-blur-lg rounded-xl border border-white/30 shadow-2xl px-5 py-2.5 hover:scale-105 transition-all duration-300">
                  <div className="flex items-center gap-2">
                    <Baby className="w-7 h-7 text-amber-400" />
                    <h3 className="text-white font-semibold">
                      Complete Early Childhood Suite
                    </h3>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {/* Card 1 - Admissions Management */}
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6 group hover:bg-white/20 transition-all duration-300 hover:-translate-y-2">
                  <Baby className="w-12 h-12 text-amber-400 mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="text-white font-semibold mb-2">
                    Admissions Management
                  </h4>
                  <p className="text-sm text-gray-100">
                    Auto-manage enrollments and eliminate manual work.
                  </p>
                </div>

                {/* Card 2 - Attendance Tracking */}
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6 group hover:bg-white/20 transition-all duration-300 hover:-translate-y-2">
                  <CalendarCheck className="w-12 h-12 text-blue-400 mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="text-white font-semibold mb-2">
                    Attendance Tracking
                  </h4>
                  <p className="text-sm text-gray-100">
                    Digital check-in/out, eliminate missed records.
                  </p>
                </div>

                {/* Card 3 - Fee Management */}
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6 group hover:bg-white/20 transition-all duration-300 hover:-translate-y-2">
                  <CreditCard className="w-12 h-12 text-green-400 mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="text-white font-semibold mb-2">
                    Fee Management
                  </h4>
                  <p className="text-sm text-gray-100">
                    Auto-invoice parents, fast collections.
                  </p>
                </div>

                {/* Card 4 - Parent Communication */}
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6 group hover:bg-white/20 transition-all duration-300 hover:-translate-y-2">
                  <MessageCircle className="w-12 h-12 text-purple-400 mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="text-white font-semibold mb-2">
                    Parent Communication
                  </h4>
                  <p className="text-sm text-gray-300">
                    Track updates, messages, and events live.
                  </p>
                </div>
              </div>

              {/* Bottom Stats Row - Kindergarten Metrics */}
            </div>
          </div>
        </div>
      </section>
      {/* ===================== INDUSTRY STATISTICS ===================== */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="Market Snapshot"
            title="The Early Childhood Education Software Market, By the Numbers"
            subtitle="Digital transformation in early childhood education is no longer optional — it's the foundation of competitive advantage."
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
                The State of Early Childhood Education Today
              </h2>
              <p className="text-white leading-relaxed">
                At Ascentia Labs, we design and build custom kindergarten
                management software that digitizes every stage of running a
                preschool, daycare, or early learning center. Our solutions
                empower school owners, administrators and teachers to streamline
                workflows, improve efficiency, and enhance parent engagement.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Faster Admissions", value: "85%" },
                { label: "Higher Parent Satisfaction", value: "High" },
                { label: "Better Attendance Accuracy", value: "90%" },
                { label: "Lower Admin Overhead", value: "60–75%" },
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
            title="Why Digital Transformation Matters Now"
            subtitle="The urgency for digital transformation in early childhood education has never been greater."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 max-w-6xl mx-auto">
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
            title="Business Challenges We Solve"
            subtitle="Early childhood education operations face a complex web of challenges. Here's how we address each one."
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
            title="Business Outcomes with Kindergarten Management Software"
            subtitle="Tangible, transformative results across every part of your school."
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
            title="KPI Dashboard: Manual vs. Kindergarten Management Software"
          />
          <div className="max-w-5xl mx-auto overflow-x-auto rounded-xl border border-white/20">
            <table className="w-full text-left text-sm text-gray-200 bg-white/5 backdrop-blur-md">
              <thead>
                <tr className="bg-white/10 text-white">
                  <th className="px-5 py-4 font-semibold">KPI</th>
                  <th className="px-5 py-4 font-semibold">Before</th>
                  <th className="px-5 py-4 font-semibold">After</th>
                  <th className="px-5 py-4 font-semibold text-amber-400">
                    Improvement
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
          <SectionHeading eyebrow="Who We Help" title="Industries We Serve" />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {industries.map((industry, index) => (
              <IndustryCard
                key={index}
                icon={industry.icon}
                title={industry.title}
                line={industry.line}
                link={industry.link}
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
            eyebrow="Intelligent Early Childhood Education"
            title="AI & Machine Learning for Kindergartens"
            subtitle="Capabilities that go beyond traditional automation."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 max-w-6xl mx-auto">
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
            title="Integration Ecosystem"
            subtitle="Your kindergarten management software works with the systems you already run."
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
            {integrations.map((intg, i) => (
              <IntegrationCard key={i} icon={intg.icon} title={intg.title} />
            ))}
          </div>
        </div>
      </section>

      {/* ============================= FEATURES (existing) ============================= */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="Platform"
            title="Explore Top Features of Our Kindergarten Management Software"
            subtitle="Comprehensive capabilities designed to optimize your school operations."
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
            title="Industry Use Cases"
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
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="Financial Case"
            title="ROI & Business Value"
            subtitle="Most clients see full ROI within 6–12 months."
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
            {savings.map((s, i) => (
              <SavingsCard key={i} label={s.label} value={s.value} />
            ))}
          </div>
        </div>
      </section>

      {/* ===================== BUYER READINESS CHECKLIST ===================== */}
      <section className="py-16 bg-gradient-to-br from-gray-900 via-blue-900 to-black relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black to-transparent pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-black pointer-events-none"></div>
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="Are You Ready?"
            title="Buyer Readiness Checklist"
            subtitle="Check 5 or more items and your organization is ready to explore kindergarten management software."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {readiness.map((group, i) => (
              <ChecklistGroup key={i} title={group.title} items={group.items} />
            ))}
          </div>
        </div>
      </section>

      {/* ===================== CUSTOMER JOURNEY ===================== */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="How We Work"
            title="Customer Journey: Discovery to Deployment"
          />
          <div className="max-w-6xl mx-auto">
            <div className="hidden md:flex justify-between items-start relative">
              <div className="absolute top-6 left-0 right-0 h-0.5 bg-blue-300/40"></div>
              {journey.map((step, i) => (
                <div key={i} className="flex-1 text-center px-2 relative z-10">
                  <div className="w-12 h-12 bg-gradient-to-r from-amber-400 to-orange-500 text-black rounded-full flex items-center justify-center font-bold mx-auto mb-3">
                    {i + 1}
                  </div>
                  <h4 className="text-white font-semibold text-sm mb-1">
                    {step.title}
                  </h4>
                  {/* <p className="text-gray-400 text-xs">{step.body}</p> */}
                </div>
              ))}
            </div>
            <div className="md:hidden space-y-4">
              {journey.map((step, i) => (
                <div key={i} className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-amber-400 to-orange-500 text-black rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm">
                      {step.title}
                    </h4>
                    <p className="text-gray-400 text-xs">{step.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

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
            title="Security & Compliance"
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
            title="Case Studies from Early Childhood Education Clients"
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
              Our Kindergarten Software Implementation Process
            </h2>
            <p className="text-lg text-gray-300">
              How We Build Your Kindergarten Management Software — 8 Weeks Total
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
                    Revolutionize Your Kindergarten Operations with Our
                    Expertise
                  </h2>
                  <p className="text-xl text-gray-300 mb-8">
                    Why Early Childhood Education Providers Choose Us
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
                      Ready to Transform Your Kindergarten Operations?
                    </h3>
                    <p className="text-blue-100 mb-6">
                      Join early childhood education providers who trust our
                      kindergarten management software to streamline operations
                      and boost parent satisfaction.
                    </p>
                    <button
                      onClick={openConsultation}
                      className="bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 hover:from-amber-500 hover:via-orange-500 hover:to-orange-600 text-black border-2 border-black/20 hover:border-black/40 px-8 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                      Book a Consultation
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

      {/* ===================== RELATED SERVICES ===================== */}

      {/* ============================= FAQ (existing) ============================= */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent md:text-4xl mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-300">
                Find answers to common questions about our kindergarten
                management software solutions
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

export default KindergartenPage;
