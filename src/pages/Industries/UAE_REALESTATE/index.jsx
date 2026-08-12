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

const UAERealEstatePage = () => {
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
      icon: Building,
      title: "Automate Operations",
      description:
        "Streamline property management, leasing, and maintenance workflows.",
    },
    {
      icon: MapPinned,
      title: "Improve Lead Management",
      description:
        "Capture, route, and convert leads from portals, WhatsApp, and walk-ins.",
    },
    {
      icon: Network,
      title: "Connect Financial Systems",
      description:
        "Eliminate manual reconciliation between sales, finance, and operations.",
    },
    {
      icon: BarChart3,
      title: "Real-Time Portfolio Visibility",
      description:
        "Monitor profitability across projects, buildings, and portfolios instantly.",
    },
  ];

  const stats = [
    { number: "7+", label: "Business Years" },
    { number: "120+", label: "Projects Delivered" },
    { number: "10+", label: "Industries Catered" },
    { number: "4+", label: "Countries" },
  ];

  const marketStats = [
    { value: "AED 252B", label: "Dubai Q1 2026 Transactions (+31% YoY)" },
    { value: "AED 917B", label: "Dubai Full Year 2025 Transactions" },
    { value: "AED 142B", label: "Abu Dhabi 2025 Transactions (+47% YoY)" },
    { value: "AED 65.6B", label: "Sharjah 2025 Trading Value (+64% YoY)" },
    { value: "9.81%", label: "UAE Price Index Growth (2025)" },
    { value: "AED 53B+", label: "PropTech Economic Impact (UAE)" },
  ];

  const transformationCards = [
    {
      icon: Building2,
      title: "Property Developers",
      impact:
        "Managing multiple off-plan projects, unit inventory, and investor pipelines.",
    },
    {
      icon: Home,
      title: "Property Management Companies",
      impact:
        "Overseeing residential towers, commercial spaces, and mixed-use communities.",
    },
    {
      icon: Users,
      title: "Real Estate Brokerages",
      impact:
        "Handling high-volume leads, agent performance, and deal pipelines.",
    },
    {
      icon: DollarSign,
      title: "Real Estate Investment Firms",
      impact:
        "Managing multi-billion dirham portfolios with real-time reporting.",
    },
    {
      icon: Cpu,
      title: "PropTech Companies",
      impact:
        "Building technology-driven real estate platforms for the UAE market.",
    },
  ];

  const challenges = [
    {
      problem:
        "Leads from portals, WhatsApp, and walk-ins never get unified.",
      impact: "Half of qualified leads quietly evaporate before conversion.",
      solution:
        "Unified lead capture, routing, and duplicate detection across all channels.",
    },
    {
      problem:
        "Sales, finance, and operations run on separate systems.",
      impact: "Manual reconciliation becomes the daily norm.",
      solution:
        "Integrated CRM + ERP that connects sales, finance, and property operations.",
    },
    {
      problem: "Post-dated cheques are tracked on spreadsheets.",
      impact: "One missed cheque disrupts cash flow forecasting.",
      solution:
        "PDC lifecycle tracking with cash flow forecasting built in.",
    },
    {
      problem: "VAT compliance is handled manually.",
      impact: "Errors expose businesses to FTA penalties.",
      solution:
        "Automated FTA-compliant tax calculations, invoicing, and reporting.",
    },
    {
      problem:
        "Rent escalations and contract terms get buried in old documents.",
      impact: "Missed renewals and revenue leakage across the portfolio.",
      solution:
        "Centralized lease management with automated escalation and renewal alerts.",
    },
    {
      problem:
        "Fragmented WhatsApp, spreadsheets, and disconnected tools.",
      impact:
        "The cost shows up at the seams—leads never reach finance until a cheque bounces.",
      solution:
        "One platform unifying leads, inventory, finance, and tenant communication.",
    },
  ];

  const outcomes = [
    { icon: MapPinned, value: "Unified", label: "Lead Management" },
    { icon: Building2, value: "Live", label: "Unit Inventory" },
    { icon: Shield, value: "FTA", label: "VAT Compliance" },
    { icon: DollarSign, value: "PDC", label: "Cash Flow Control" },
    { icon: BarChart3, value: "Real-time", label: "Portfolio Visibility" },
    { icon: Home, value: "Self-serve", label: "Tenant Portals" },
  ];

  const kpiRows = [
    ["Dubai Q1 2026 Transactions", "—", "AED 252B", "+31% YoY"],
    ["Dubai Full Year 2025", "—", "AED 917B", "DLD"],
    ["Abu Dhabi 2025 Transactions", "—", "AED 142B", "+47% YoY"],
    ["Sharjah 2025 Trading Value", "—", "AED 65.6B", "+64% YoY"],
    ["UAE Price Index Growth (2025)", "—", "9.81%", "ValuStrat"],
    ["Dubai Office Capital Value (2026F)", "—", "15%", "ValuStrat"],
    ["Dubai Villa Price Growth (2026F)", "—", "17.7%", "ValuStrat"],
    ["Abu Dhabi Residential Growth (2026F)", "—", "16%", "ValuStrat"],
    ["PropTech Economic Impact (UAE)", "—", "AED 53B+", "Dubai Chamber"],
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
      icon: Star,
      title: "Kindergarten",
      line: "School management, admissions & parent communication.",
      link: "/kindergarten-school-management",
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
      icon: Home,
      title: "Real Estate",
      line: "Property management, CRM & PropTech software solutions.",
      link: "/real-estate-app-development",
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
      title: "AI Lead Qualification",
      body: "AI scores and routes leads instantly from portals, WhatsApp, and walk-ins—boosting conversion across UAE brokerages.",
    },
    {
      icon: DollarSign,
      title: "Automated Valuations",
      body: "Real-time property valuations based on UAE market data for pricing, investment, and portfolio decisions.",
    },
    {
      icon: Eye,
      title: "Predictive Analytics",
      body: "Forecast demand and price trends by location across Dubai, Abu Dhabi, and Sharjah.",
    },
    {
      icon: Sparkles,
      title: "Smart Document Processing",
      body: "Automate Ejari registration, contract management, and compliance paperwork.",
    },
    {
      icon: Network,
      title: "AI Tenant Experience",
      body: "AI-powered self-service portals for rent payments, maintenance requests, and query routing.",
    },
  ];

  const techStack = [
    {
      icon: Brain,
      title: "AI & Machine Learning",
      body: "Lead scoring, property valuation, demand forecasting, and document automation.",
    },
    {
      icon: Cloud,
      title: "Cloud Computing",
      body: "Scalable, secure platforms accessible from anywhere across the UAE.",
    },
    {
      icon: Network,
      title: "API-First Architecture",
      body: "Seamless integration with CRMs, ERPs, portals, and government systems.",
    },
    {
      icon: Cpu,
      title: "Mobile & Web Development",
      body: "iOS/Android apps and portals for tenants, agents, managers, and investors.",
    },
    {
      icon: Database,
      title: "Data Engineering",
      body: "Real-time analytics, predictive modeling, and executive performance dashboards.",
    },
  ];

  const integrations = [
    { icon: Server, title: "CRM Systems" },
    { icon: Building2, title: "ERP Systems" },
    { icon: MapPinned, title: "Property Finder, Bayut, Dubizzle" },
    { icon: DollarSign, title: "Payment & PDC Systems" },
    { icon: Shield, title: "Ejari, Tawtheeq, UAE Pass" },
    { icon: Database, title: "Accounting & FTA Filing" },
  ];

  const useCases = [
    {
      problem:
        "Dubai: AED 252B in Q1 2026 transactions and 193,000+ active investors demand scale-ready platforms.",
      solution:
        "DLD/Ejari-ready CRM, off-plan project management, tower PM software, and investor portals.",
      outcome: "Technology built for Dubai's high-volume PropTech market (AED 53B+ impact).",
    },
    {
      problem:
        "Abu Dhabi: AED 142B in 2025 transactions (+47% YoY) with fully digital transaction journeys.",
      solution:
        "Tawtheeq/ADREC compliance, luxury PM, institutional portfolio tools, and TAMM-aligned flows.",
      outcome: "End-to-end digital property operations for Abu Dhabi developers and investors.",
    },
    {
      problem:
        "Sharjah: AED 65.6B trading value in 2025 (+64% YoY) with a diversifying investor base.",
      solution:
        "Aqari platform integration, residential PM, brokerage CRM, and development inventory systems.",
      outcome: "Software ready for Sharjah's growth and ~130 nationalities of buyers.",
    },
    {
      problem:
        "Radiant Real Estate (Abu Dhabi) needed off-plan sales, tenant servicing, and IFRS 15 in one platform.",
      solution:
        "Custom NetSuite PMS with live unit inventory, tenant portal, PDC tracking, and revenue recognition.",
      outcome: "Aligned sales/finance, lower PM workload, auditable PDCs, IFRS 15 compliance.",
    },
  ];

  const savings = [
    { label: "Custom Real Estate CRM", value: "Faster Leads" },
    { label: "Property Management Software", value: "Auto Leasing" },
    { label: "Unified ERP + CRM", value: "No Manual Recon" },
    { label: "AI and Automation", value: "Predict Demand" },
    { label: "Tenant Self-Service Portals", value: "Less Workload" },
    { label: "Real-Time Portfolio Dashboards", value: "Faster Reporting" },
  ];

  const readiness = [
    {
      title: "For Property Developers",
      items: [
        "Project inventory from off-plan to handover",
        "Off-plan sales: reservations, SPAs, payment plans",
        "Automated broker commission tracking",
        "Executive finance dashboards for cash flow",
        "Investor portals with real-time unit updates",
      ],
    },
    {
      title: "For Property Management Companies",
      items: [
        "Lease management, rent invoicing, renewals, deposits",
        "Maintenance and work order SLAs",
        "Service charge budgeting for owner associations",
        "Tenant self-service portals",
        "Ejari, Tawtheeq, and FTA VAT compliance",
      ],
    },
    {
      title: "For Brokerages & Investors",
      items: [
        "Unified leads from portals, WhatsApp, and walk-ins",
        "Agent KPIs, conversions, and commissions",
        "Deal pipeline: viewings, offers, SPA stages",
        "Duplicate lead detection",
        "Portfolio profitability and investment analytics",
      ],
    },
    {
      title: "For PropTech Companies",
      items: [
        "AI-native real estate marketplace platforms",
        "API integration with portals and payment gateways",
        "Government system connectivity",
        "Cloud-native scalable architecture",
        "End-to-end custom platform development",
      ],
    },
  ];

  const journey = [
    { title: "Discovery", body: "Understand your business model, workflows, and technology requirements." },
    { title: "Business Analysis", body: "Document requirements, user stories, and integration needs." },
    { title: "Architecture", body: "Design scalable, secure, and UAE-compliant system architecture." },
    { title: "UI/UX Design", body: "Create intuitive interfaces for managers, tenants, and investors." },
    { title: "Development", body: "Agile development with regular demos and feedback loops." },
    { title: "AI & Integration", body: "Implement AI capabilities and integrate with existing systems." },
    { title: "Testing", body: "Comprehensive QA, security testing, and performance optimization." },
    { title: "Deployment", body: "Cloud deployment with training and documentation." },
    { title: "Support", body: "Ongoing maintenance, updates, and support." },
  ];

  const deploymentModels = [
    {
      icon: Cloud,
      title: "Cloud",
      points: [
        "No infrastructure management",
        "Automatic updates and patches",
        "Global accessibility across UAE",
      ],
    },
    {
      icon: Network,
      title: "Hybrid",
      points: [
        "Best of both worlds",
        "Data sovereignty options",
        "Gradual cloud migration",
      ],
      highlight: true,
    },
    {
      icon: Server,
      title: "On-Premise",
      points: [
        "Complete data control",
        "Meets strict compliance",
        "Leverages existing investments",
      ],
    },
  ];

  const security = [
    {
      icon: ClipboardCheck,
      title: "Ejari Integration",
      body: "Automated registration and renewal with Dubai's rental regulation system.",
    },
    {
      icon: Landmark,
      title: "Tawtheeq Integration",
      body: "Compliance with Abu Dhabi's property registration system.",
    },
    {
      icon: FileText,
      title: "VAT-Compliant Invoicing",
      body: "Automated FTA-compliant tax calculations and reporting.",
    },
    {
      icon: DollarSign,
      title: "Post-Dated Cheque Management",
      body: "Track PDCs through full lifecycle with cash flow forecasting.",
    },
    {
      icon: KeyRound,
      title: "UAE Pass Integration",
      body: "Secure digital identity verification for transactions.",
    },
    {
      icon: Shield,
      title: "IFRS 15 Revenue Recognition",
      body: "Compliant revenue recognition for developers across the project lifecycle.",
    },
  ];

  const caseStudies = [
    {
      metric: "Live",
      title: "Radiant Real Estate — Unit Inventory",
      description:
        "Abu Dhabi developer of Radiant Square and Marina Towers aligned sales, finance, and management on live unit availability across towers, floors, and units.",
    },
    {
      metric: "PDC",
      title: "Controlled Cheque Lifecycle",
      description:
        "Replaced manual cheque registers with auditable PDC tracking reflected in cash flow forecasting.",
    },
    {
      metric: "IFRS 15",
      title: "Developer Revenue Recognition",
      description:
        "Revenue on unit sales recognized over the project lifecycle with deferred revenue schedules auditors expect.",
    },
  ];

  const engagementModels = [
    {
      icon: FileText,
      title: "Fixed Cost",
      points: [
        "Well-defined projects with clear requirements",
        "Predictable budget and timeline",
        "Ideal for scoped UAE PropTech builds",
      ],
    },
    {
      icon: Users,
      title: "Dedicated Team",
      points: [
        "Long-term development with ongoing requirements",
        "Complete control and transparency",
        "Partnership for continuous product evolution",
      ],
    },
    {
      icon: UserCog,
      title: "Staff Augmentation",
      points: [
        "Expand your existing development capacity",
        "Flexible scaling up or down",
        "Access to specialized UAE real estate tech skills",
      ],
    },
  ];

  const resources = [
    {
      icon: Newspaper,
      label: "Blogs",
      items: [
        "AI in UAE Real Estate — Lead Scoring to Valuations",
        "Ejari & Tawtheeq — Building Compliant Property Software",
        "Why UAE Developers Need IFRS 15-Ready Platforms",
      ],
    },
    {
      icon: FileText,
      label: "Whitepapers",
      items: [
        "UAE PropTech Playbook 2026",
        "Dubai, Abu Dhabi & Sharjah Software Demand Drivers",
      ],
    },
    {
      icon: BookOpen,
      label: "Guides",
      items: [
        "Choosing Real Estate Software for UAE Operations",
        "Integrating Portals, WhatsApp & Government Systems",
      ],
    },
  ];

  const relatedServices = [
    {
      icon: Code,
      title: "Custom Software Development",
      description:
        "Purpose-built platforms for UAE developers, brokers, and property managers.",
      to: "/custom-crm-development",
    },
    {
      icon: Brain,
      title: "AI/ML Development",
      description:
        "Lead scoring, valuations, forecasting, and document automation.",
      to: "/ai-ml-services",
    },
    {
      icon: TrendingUp,
      title: "Digital Transformation",
      description:
        "Roadmaps from fragmented tools to unified UAE property operations.",
      to: "/digital-transformation",
    },
    {
      icon: Sparkles,
      title: "Application Modernization",
      description: "Upgrade legacy property systems without disrupting operations.",
      to: "/application-modernisation",
    },
    {
      icon: UserCheck,
      title: "Mobile App Development",
      description: "Tenant, agent, and investor apps for iOS and Android.",
      to: "/mobile-application",
    },
  ];

  const features = [
    {
      id: "custom-re-software",
      title: "Custom Real Estate Software Development",
      sections: [
        {
          heading: "Tailored for Your Business Model",
          details: [
            "Platforms for developers, brokers, property managers, and investors",
            "Property inventory and unit lifecycle management",
            "CRM to ERP integration and AI-powered analytics",
            "Built for UAE's fast-moving real estate market",
          ],
        },
      ],
    },
    {
      id: "re-crm",
      title: "Real Estate CRM Development",
      sections: [
        {
          heading: "Unified Lead & Deal Management",
          details: [
            "Capture leads from portals, WhatsApp, and walk-ins",
            "Agent performance tracking and deal pipeline visibility",
            "Duplicate lead detection across channels",
            "Commission and conversion KPIs",
          ],
        },
      ],
    },
    {
      id: "property-management",
      title: "Property Management Software Development",
      sections: [
        {
          heading: "Operations & Tenant Experience",
          details: [
            "Automated lease management and rent invoicing",
            "Maintenance tracking and service charge budgeting",
            "Tenant self-service portals",
            "Ejari, Tawtheeq, and FTA VAT-ready workflows",
          ],
        },
      ],
    },
    {
      id: "re-erp",
      title: "Real Estate ERP Development",
      sections: [
        {
          heading: "Finance & Compliance",
          details: [
            "Integrated financials and project accounting",
            "IFRS 15 revenue recognition for developers",
            "VAT compliance and FTA reporting",
            "Post-dated cheque (PDC) management",
          ],
        },
      ],
    },
    {
      id: "mobile-apps",
      title: "Real Estate Mobile App Development",
      sections: [
        {
          heading: "iOS & Android",
          details: [
            "Tenant portals for payments and maintenance",
            "Agent apps for leads and viewings",
            "Investor dashboards and property management apps",
          ],
        },
      ],
    },
    {
      id: "marketplace",
      title: "Marketplace & PropTech Platforms",
      sections: [
        {
          heading: "Modern Real Estate Ecosystem",
          details: [
            "Connect buyers, sellers, landlords, and tenants",
            "Listings, valuations, and transaction tools",
            "AI-powered discovery and intelligent search",
            "Predictive analytics and automated valuations",
          ],
        },
      ],
    },
    {
      id: "ai-re",
      title: "AI Real Estate Software Development",
      sections: [
        {
          heading: "Intelligence Where It Matters",
          details: [
            "Lead scoring and demand forecasting",
            "Property valuation and document automation",
            "AI-powered tenant support",
            "Executive-ready predictive modeling",
          ],
        },
      ],
    },
    {
      id: "portal-analytics",
      title: "Portals & Data Analytics",
      sections: [
        {
          heading: "Visibility & Listings",
          details: [
            "Custom property listing portals with advanced search",
            "Integration with major UAE property platforms",
            "Real-time dashboards and portfolio performance tracking",
            "Executive reporting for investors and leadership",
          ],
        },
      ],
    },
  ];

  const advantages = [
    {
      id: 1,
      title: "Custom Development",
      description:
        "We build exactly what your real estate business needs—not a one-size-fits-all product.",
    },
    {
      id: 2,
      title: "AI Capabilities",
      description:
        "We integrate AI where it creates real value—lead scoring, valuation, and forecasting.",
    },
    {
      id: 3,
      title: "UAE Industry Focus",
      description:
        "We understand UAE real estate—from off-plan sales to tenant management, Ejari to IFRS 15.",
    },
    {
      id: 4,
      title: "Scalable Architecture",
      description: "Our solutions grow with you—from 100 units to 10,000+.",
    },
    {
      id: 5,
      title: "Integration Expertise",
      description:
        "We connect property systems to CRMs, ERPs, portals, and government platforms.",
    },
    {
      id: 6,
      title: "Dedicated Development",
      description: "You get a dedicated development team focused on your success.",
    },
  ];

  const processSteps = [
    {
      number: "1",
      title: "Discovery",
      description:
        "Understand your business model, workflows, and UAE technology requirements.",
    },
    {
      number: "2",
      title: "Architecture & Design",
      description:
        "Design scalable, secure, compliant architecture and intuitive UI/UX.",
    },
    {
      number: "3",
      title: "Build + Integrate",
      description:
        "Agile development with AI capabilities and CRM/ERP/government integrations.",
    },
    {
      number: "4",
      title: "Deploy + Support",
      description:
        "Cloud deployment with training, documentation, and ongoing maintenance.",
    },
  ];

  const faqs = [
    {
      question: "What is a real estate software development company in UAE?",
      answer:
        "A real estate software development company in UAE builds custom digital platforms for property developers, management firms, brokerages, and investors. These platforms range from CRM and ERP integration to AI-powered property management, tenant portals, and investor dashboards—all tailored to the UAE regulatory environment.",
    },
    {
      question: "How much does custom real estate software cost in UAE?",
      answer:
        "Cost varies based on features, complexity, and integration requirements. A basic property management system starts at a lower range, while full ERP integration with AI capabilities requires a more significant investment. Contact us for a personalized quote based on your specific requirements.",
    },
    {
      question: "What features should UAE real estate software include?",
      answer:
        "Essential features include property inventory management, lease and tenancy management, CRM and lead management, VAT-compliant accounting, maintenance tracking, tenant self-service portals, and UAE-specific compliance (Ejari, Tawtheeq, PDC tracking, IFRS 15).",
    },
    {
      question: "Can real estate software integrate with existing ERP and CRM systems?",
      answer:
        "Yes. Modern real estate platforms are built with API-first architecture and can integrate with existing CRMs, ERPs, payment gateways, property portals, and government systems. Ascentia Labs specializes in connecting fragmented systems into a unified platform.",
    },
    {
      question: "Can AI be used in UAE real estate software?",
      answer:
        "Absolutely. AI can power lead scoring, property valuation, demand forecasting, automated document processing, and tenant query management. The UAE is a global leader in AI adoption, making it a natural fit for real estate technology.",
    },
    {
      question: "What software do UAE property developers need?",
      answer:
        "Property developers need project inventory management, off-plan sales tracking, payment plan management, commission calculations, investor portals, financial dashboards, and IFRS 15 revenue recognition.",
    },
    {
      question: "Can Ascentia Labs build mobile applications for real estate?",
      answer:
        "Yes. Ascentia Labs develops custom mobile applications for property managers, tenants, agents, and investors across iOS and Android platforms.",
    },
    {
      question: "How long does custom real estate software development take?",
      answer:
        "Timelines vary by project scope. A basic platform can take a few months, while complex ERP-integrated solutions with AI capabilities may require longer. Ascentia Labs follows agile development to deliver working software quickly.",
    },
    {
      question: "Do you integrate with Ejari, Tawtheeq, and UAE Pass?",
      answer:
        "Yes. We build UAE-specific integrations for Ejari (Dubai), Tawtheeq (Abu Dhabi), UAE Pass for digital identity, and other government platforms required for property compliance.",
    },
    {
      question: "What is PropTech software development?",
      answer:
        "PropTech (property technology) software development involves building digital platforms that transform real estate operations. This includes property marketplaces, investment platforms, AI-driven valuation tools, blockchain-based ownership models, and smart building management systems.",
    },
  ];

  const toggleFAQ = (index) => setOpenFAQ(openFAQ === index ? null : index);

  return (
    <div className="min-h-screen bg-white">
      <SEO {...seoData.uaeRealEstate} />
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
                Real Estate Software Development Company in UAE – Custom
                Property Technology Solutions
              </h1>

              <p className="text-gray-300 leading-relaxed">
                The UAE real estate sector has transformed into a destination
                for long-term institutional capital, with AED 917 billion in
                transactions recorded in 2025. Ascentia Labs builds custom
                platforms that automate operations, unify leads, connect
                finance and property systems, and deliver real-time portfolio
                visibility.
              </p>
              <button
                onClick={openConsultation}
                className="bg-gradient-to-r from-amber-400 to-orange-500 text-black px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:from-amber-500 hover:to-orange-600"
              >
                Ready to Build Your Custom Real Estate Platform? →
              </button>
            </div>

            <div className="mt-8 lg:mt-0">
              {/* Top Badge - Real Estate Excellence */}
              <div className="flex justify-center mb-6">
                <div className="bg-white/15 backdrop-blur-lg rounded-xl border border-white/30 shadow-2xl px-5 py-2.5 hover:scale-105 transition-all duration-300">
                  <div className="flex items-center gap-2">
                    <Building2 className="w-7 h-7 text-amber-400" />
                    <h3 className="text-white font-semibold">
                      UAE Real Estate Technology
                    </h3>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {/* Card 1 - Property Management */}
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6 group hover:bg-white/20 transition-all duration-300 hover:-translate-y-2">
                  <Building className="w-12 h-12 text-amber-400 mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="text-white font-semibold mb-2">
                    Automate Operations
                  </h4>
                  <p className="text-sm text-gray-100">
                    Streamline property management, leasing & maintenance.
                  </p>
                </div>

                {/* Card 2 - Lease Management */}
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6 group hover:bg-white/20 transition-all duration-300 hover:-translate-y-2">
                  <FileText className="w-12 h-12 text-blue-400 mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="text-white font-semibold mb-2">
                    Lead Management
                  </h4>
                  <p className="text-sm text-gray-100">
                    Capture leads from portals, WhatsApp & walk-ins.
                  </p>
                </div>

                {/* Card 3 - Maintenance Tracking */}
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6 group hover:bg-white/20 transition-all duration-300 hover:-translate-y-2">
                  <Wrench className="w-12 h-12 text-green-400 mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="text-white font-semibold mb-2">
                    System Integration
                  </h4>
                  <p className="text-sm text-gray-100">
                    Connect sales, finance & operations.
                  </p>
                </div>

                {/* Card 4 - Real Estate CRM */}
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6 group hover:bg-white/20 transition-all duration-300 hover:-translate-y-2">
                  <MapPinned className="w-12 h-12 text-purple-400 mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="text-white font-semibold mb-2">
                    Portfolio Visibility
                  </h4>
                  <p className="text-sm text-gray-300">
                    Real-time profitability across projects.
                  </p>
                </div>
              </div>

              {/* Bottom Stats Row - Real Estate Metrics */}
            </div>
          </div>
        </div>
      </section>
      {/* ===================== INDUSTRY STATISTICS ===================== */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="Market Snapshot"
            title="UAE Real Estate Market 2026 – Key Drivers"
            subtitle="Market growth creates operational complexity. More transactions, inventory, leads, and stakeholders mean businesses need software to manage the scale."
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
                Why UAE Real Estate Businesses Need Custom Software
              </h2>
              <p className="text-white leading-relaxed">
                Despite significant market growth, many UAE operators still rely
                on WhatsApp, spreadsheets, and disconnected systems. Custom
                software unifies lead management, sales, property inventory,
                finance, and tenant communication into a single integrated
                platform—built for developers, managers, brokerages, investors,
                and PropTech companies across the UAE.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Dubai 2025 Transactions", value: "AED 917B" },
                { label: "Abu Dhabi Growth 2025", value: "+47% YoY" },
                { label: "Sharjah Trading Growth", value: "+64% YoY" },
                { label: "UAE PropTech Impact", value: "AED 53B+" },
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
            title="Who We Serve"
            subtitle="This page is designed for UAE real estate decision-makers who are serious about scaling their operations."
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
            subtitle="Fragmented tools create serious inefficiencies. Here's how custom UAE real estate software fixes each one."
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
            title="Business Outcomes with UAE Real Estate Software"
            subtitle="Unified operations, compliant finance, and real-time visibility across your portfolio."
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
            title="UAE Market Metrics Driving Software Demand"
          />
          <div className="max-w-5xl mx-auto overflow-x-auto rounded-xl border border-white/20">
            <table className="w-full text-left text-sm text-gray-200 bg-white/5 backdrop-blur-md">
              <thead>
                <tr className="bg-white/10 text-white">
                  <th className="px-5 py-4 font-semibold">Metric</th>
                  <th className="px-5 py-4 font-semibold">Note</th>
                  <th className="px-5 py-4 font-semibold">Value</th>
                  <th className="px-5 py-4 font-semibold text-amber-400">
                    Source / Growth
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
            eyebrow="Intelligent Real Estate"
            title="AI in UAE Real Estate – A Transformative Force"
            subtitle="The UAE has appointed the world's first Minister of State for Artificial Intelligence—AI is reshaping brokerage, PropTech, and property management."
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
            title="Real Estate Software Integrations"
            subtitle="A modern UAE real estate platform must connect to your CRM, ERP, portals, and government systems."
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
            title="Real Estate Software Development Services in UAE"
            subtitle="End-to-end custom development for developers, brokers, property managers, and investors."
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
            title="Dubai, Abu Dhabi, Sharjah & Case Study"
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
            title="ROI & Business Outcomes"
            subtitle="Investment areas that deliver measurable value for UAE real estate businesses."
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
            title="Solutions for UAE Real Estate Businesses"
            subtitle="Capabilities mapped to how developers, managers, brokerages, investors, and PropTech teams operate."
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
            title="Our Real Estate Software Development Process"
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
            title="UAE-Specific Features & Compliance"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
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
            title="Case Study – Radiant Real Estate (Abu Dhabi)"
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
              Our UAE Real Estate Implementation Process
            </h2>
            <p className="text-lg text-gray-300">
              From discovery to support — agile delivery for UAE property platforms
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
                    Let's Build Your Real Estate Software Solution
                  </h2>
                  <p className="text-xl text-gray-300 mb-8">
                    Why Ascentia Labs for UAE Real Estate
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
                      Discuss Your Real Estate Software Requirements
                    </h3>
                    <p className="text-blue-100 mb-6">
                      The UAE real estate market is moving faster than ever.
                      Whether you need a property management system, an
                      AI-powered CRM, or a unified ERP platform, Ascentia Labs
                      has the expertise to deliver.
                    </p>
                    <button
                      onClick={openConsultation}
                      className="bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 hover:from-amber-500 hover:via-orange-500 hover:to-orange-600 text-black border-2 border-black/20 hover:border-black/40 px-8 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                      Contact Us / Book a Strategy Call
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
                Find answers to common questions about UAE real estate software
                development
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

export default UAERealEstatePage;
