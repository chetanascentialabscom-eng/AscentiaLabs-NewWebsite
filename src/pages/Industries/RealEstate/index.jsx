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

const RealEstatePage = () => {
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
      title: "Property Management System",
      description:
        "Plan, track and manage every property and unit in real time, with automatic lease and maintenance alerts.",
    },
    {
      icon: Shield,
      title: "Tenant & Compliance Tracking",
      description:
        "Automate tenant onboarding, lease compliance and document tracking at every stage of the tenancy lifecycle.",
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting",
      description:
        "Live portfolio dashboards that turn property data into decisions and cost savings.",
    },
    {
      icon: MapPinned,
      title: "Real Estate CRM & Leasing",
      description:
        "Track leads, manage listings and close deals faster with a centralized real estate CRM.",
    },
  ];

  const stats = [
    { number: "7+", label: "Business Years" },
    { number: "120+", label: "Projects Delivered" },
    { number: "10+", label: "Industries Catered" },
    { number: "4+", label: "Countries" },
  ];

  const marketStats = [
    { value: "$41.6B", label: "Global PropTech Market (2025)" },
    { value: "15.7%", label: "PropTech CAGR (2025–2032)" },
    { value: "92%", label: "Occupiers Piloting AI in Real Estate (2025)" },
    { value: "$16.7B", label: "Venture Capital in PropTech (2025)" },
    { value: "42%", label: "AI-Centered PropTech Growth Rate" },
    { value: "$18.4B", label: "Real Estate Software Market (2025)" },
  ];

  const transformationCards = [
    {
      icon: TrendingUp,
      title: "Rising Customer Expectations",
      impact:
        "Tenants and buyers demand seamless digital experiences. Real-time portals and mobile apps keep you responsive.",
    },
    {
      icon: MapPinned,
      title: "Fragmented Systems",
      impact:
        "Disconnected tools create data silos. Unified platforms connect leasing, maintenance and accounting.",
    },
    {
      icon: Users,
      title: "Talent & Workforce Shifts",
      impact:
        "Property teams need modern tools. Guided workflows reduce onboarding time for new staff.",
    },
    {
      icon: DollarSign,
      title: "Cost Pressures",
      impact:
        "Operating costs fluctuate. Automation and predictive analytics protect margins and NOI.",
    },
    {
      icon: ClipboardCheck,
      title: "Regulatory & Compliance Mandates",
      impact:
        "Digital audit trails and compliance reporting are now expected by regulators and investors alike.",
    },
  ];

  const challenges = [
    {
      problem: "Manual lead tracking across emails and spreadsheets.",
      impact: "Missed opportunities and lower conversion rates.",
      solution:
        "Centralized real estate CRM with automated lead routing and scoring.",
    },
    {
      problem: "Property listings updated inconsistently across portals.",
      impact: "Frustrated buyers and lost credibility.",
      solution: "Automated listing sync across all property portals.",
    },
    {
      problem: "Tenant communications and maintenance scattered across tools.",
      impact: "Slow response times and declining tenant satisfaction.",
      solution: "Unified tenant portal with maintenance tracking built in.",
    },
    {
      problem: "Work orders lost with no visibility into response times.",
      impact: "Unpredictable maintenance performance.",
      solution: "Centralized maintenance tracking with real-time status.",
    },
    {
      problem: "Generic CRMs lack real estate-specific features.",
      impact: "Teams work around missing functionality daily.",
      solution: "Purpose-built real estate CRM with listing and lease data.",
    },
    {
      problem: "No real-time visibility into portfolio performance.",
      impact: "Decisions made on gut feel rather than data.",
      solution: "Predictive analytics and real-time reporting dashboards.",
    },
  ];

  const outcomes = [
    { icon: Building2, value: "2x", label: "Lead Conversion Rate" },
    { icon: Home, value: "85–95%", label: "Tenant Retention Rate" },
    { icon: Shield, value: "90%", label: "Faster Maintenance Response" },
    { icon: Wrench, value: "60–75%", label: "Admin Overhead Reduction" },
    { icon: DollarSign, value: "20–30%", label: "Operational Cost Savings" },
    { icon: BarChart3, value: "Real-time", label: "Portfolio Visibility" },
  ];

  const kpiRows = [
    ["Lead Response Time", "24–48 hrs", "< 5 minutes", "99% faster"],
    ["Lead Conversion Rate", "15–20%", "35–45%", "2x improvement"],
    ["Tenant Retention Rate", "65–75%", "85–95%", "+20%"],
    ["Maintenance Response Time", "48–72 hrs", "< 4 hrs", "90% faster"],
    ["Rent Collection Time", "15–30 days", "3–5 days", "80% faster"],
    ["Reporting Time", "5–10 days", "Real-time", "95% faster"],
    ["Occupancy Rate", "85–90%", "93–97%", "+5–7%"],
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
      title: "AI Lead Scoring",
      body: "ML models analyze lead behavior and engagement to predict conversion probability, focusing agents on high-value opportunities.",
    },
    {
      icon: DollarSign,
      title: "Predictive Pricing",
      body: "Dynamic pricing algorithms analyze market data to recommend optimal listing prices and maximize returns.",
    },
    {
      icon: Eye,
      title: "Property Recommendation Engines",
      body: "Machine learning matches buyers and tenants with properties that fit their preferences, boosting engagement.",
    },
    {
      icon: Sparkles,
      title: "Document Automation",
      body: "AI-powered document processing extracts key data from leases and contracts, eliminating manual entry.",
    },
    {
      icon: Network,
      title: "Predictive Maintenance",
      body: "IoT sensors combined with ML predict equipment failures before they occur, reducing downtime and repair costs.",
    },
  ];

  const techStack = [
    {
      icon: Brain,
      title: "AI & Machine Learning",
      body: "Python, TensorFlow, PyTorch, scikit-learn for predictive analytics.",
    },
    {
      icon: Cpu,
      title: "Enterprise Systems",
      body: "ERP integration (SAP, Oracle, Dynamics) and CRM platforms.",
    },
    {
      icon: Cloud,
      title: "Cloud Infrastructure",
      body: "AWS, Azure and Google Cloud with scalable microservices.",
    },
    {
      icon: BarChart3,
      title: "Data Analytics",
      body: "Real-time dashboards and predictive portfolio intelligence.",
    },
    {
      icon: Network,
      title: "Integration Layer",
      body: "RESTful APIs, GraphQL and event-driven architecture connecting your stack.",
    },
  ];

  const integrations = [
    { icon: Server, title: "ERP (SAP, Oracle, Dynamics)" },
    { icon: Building2, title: "Real Estate CRM (Salesforce, HubSpot)" },
    { icon: Cpu, title: "Accounting (QuickBooks, Xero)" },
    { icon: MapPinned, title: "Property Portals (Zillow, MLS)" },
    { icon: Shield, title: "Payment Gateways (Stripe, PayPal)" },
    { icon: Database, title: "GIS & Mapping (Google Maps, ArcGIS)" },
  ];

  const useCases = [
    {
      problem:
        "A property management company with 5,000+ units faced fragmented tools.",
      solution:
        "Unified platform with tenant portal and automated rent collection.",
      outcome: "40% reduction in admin overhead, 15% better retention.",
    },
    {
      problem:
        "A commercial real estate investor with $2B in assets lacked visibility.",
      solution:
        "Custom dashboard with predictive analytics and lease management.",
      outcome: "30% faster reporting, 12% increase in portfolio returns.",
    },
    {
      problem: "A brokerage with 200+ agents needed better lead management.",
      solution: "AI-powered CRM with automated lead scoring and follow-up.",
      outcome:
        "45% increase in lead conversion, agents closing 30% more deals.",
    },
    {
      problem:
        "A residential developer launching 500 units needed a sales platform.",
      solution: "Platform with listings, virtual tours and buyer portal.",
      outcome: "50% faster sales cycle, improved buyer satisfaction.",
    },
  ];

  const savings = [
    { label: "Admin Overhead Reduction", value: "20–30%" },
    { label: "Occupancy Improvement", value: "5–7%" },
    { label: "Time-to-Lease Reduction", value: "30–50%" },
    { label: "Maintenance Efficiency", value: "90%" },
    { label: "Reporting Speed Gain", value: "95%" },
    { label: "Total Operational Cost Reduction", value: "20–30%" },
  ];

  const readiness = [
    {
      title: "Strategic Readiness",
      items: [
        "Leadership aligned on transformation priorities",
        "Clear business objectives defined",
        "Budget allocated for technology investment",
        "Executive sponsor identified",
      ],
    },
    {
      title: "Operational Readiness",
      items: [
        "Current workflows documented",
        "Pain points and bottlenecks identified",
        "Key stakeholders engaged",
        "Change management plan considered",
      ],
    },
    {
      title: "Technical Readiness",
      items: [
        "Current technology stack assessed",
        "Data quality and availability evaluated",
        "Integration requirements defined",
        "Security and compliance requirements understood",
      ],
    },
    {
      title: "Team Readiness",
      items: [
        "Team informed about upcoming changes",
        "Training needs assessed",
        "Champions identified within the organization",
        "Resistance anticipated and addressed",
      ],
    },
  ];

  const journey = [
    {
      title: "Discovery",
      body: "Understand business, challenges and objectives.",
    },
    {
      title: "Planning",
      body: "Project plan, architecture design and technology selection.",
    },
    { title: "Design", body: "Wireframes, prototypes and design systems." },
    {
      title: "Development",
      body: "Agile sprints with continuous testing.",
    },
    {
      title: "Deployment",
      body: "Zero-downtime rollout with training and support.",
    },
  ];

  const deploymentModels = [
    {
      icon: Cloud,
      title: "Cloud",
      points: [
        "No infrastructure management",
        "Automatic updates and patches",
        "Global accessibility",
      ],
    },
    {
      icon: Network,
      title: "Hybrid",
      points: [
        "Best of both worlds",
        "Data sovereignty",
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
      icon: Lock,
      title: "Data Security",
      body: "End-to-end encryption and regular security audits.",
    },
    {
      icon: KeyRound,
      title: "Access Control",
      body: "Role-based access with multi-factor authentication.",
    },
    {
      icon: ClipboardCheck,
      title: "Audit Trail",
      body: "Immutable, real-time monitored activity logs.",
    },
    {
      icon: Shield,
      title: "Compliance",
      body: "GDPR, SOC 2, ISO 27001, RERA compliance.",
    },
  ];

  const caseStudies = [
    {
      metric: "40%",
      title: "Regional Property Manager Cuts Admin Overhead",
      description:
        "3,500-unit portfolio saw 65% faster maintenance response and 18% better tenant retention.",
    },
    {
      metric: "80%",
      title: "Commercial Investor Speeds Up Reporting",
      description:
        "A $1.5B portfolio gained real-time visibility and a 10% increase in portfolio returns.",
    },
    {
      metric: "50%",
      title: "Brokerage Boosts Lead Conversion",
      description:
        "150 agents saw an 80% reduction in lead response time and 20% revenue growth.",
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
        "AI in Real Estate — 5 Use Cases Transforming the Industry",
        "Property Management Software — Build vs Buy Decision",
        "How AI-Powered CRM Increased Lead Conversion by 50%",
      ],
    },
    {
      icon: FileText,
      label: "Whitepapers",
      items: [
        "The PropTech Playbook — Digital Transformation for Real Estate",
        "Commercial Real Estate Technology Trends 2025",
      ],
    },
    {
      icon: BookOpen,
      label: "Guides",
      items: [
        "Choosing the Right Real Estate CRM for Your Business",
        "Real Estate Software Selection Guide",
      ],
    },
  ];

  const relatedServices = [
    {
      icon: Code,
      title: "Custom Software Development",
      description:
        "Purpose-built systems that match your exact property workflow.",
      to: "/custom-crm-development",
    },
    {
      icon: Brain,
      title: "AI/ML Development",
      description:
        "Predictive pricing, lead scoring and portfolio forecasting.",
      to: "/ai-ml-services",
    },
    {
      icon: TrendingUp,
      title: "Digital Transformation",
      description:
        "A clear roadmap from paper-based operations to a connected portfolio.",
      to: "/digital-transformation",
    },
    {
      icon: Sparkles,
      title: "Application Modernization",
      description: "Upgrade legacy systems without disrupting operations.",
      to: "/application-modernisation",
    },
    {
      icon: UserCheck,
      title: "Mobile App Development",
      description: "Manage properties, leasing and approvals from anywhere.",
      to: "/mobile-application",
    },
  ];

  const features = [
    {
      id: "property-management",
      title: "Property Management — Full Lifecycle, No Gaps",
      sections: [
        {
          heading: "For Property Managers",
          details: [
            "Auto tenant onboarding (10 minutes)",
            "Unit & lease tracking (live dashboard)",
            "Rent collection automation (auto reminders)",
            "Real-time monitoring (live dashboard)",
            "Vacancy alerts (before it hurts occupancy)",
            "Task assignment (auto assign to team)",
            "Progress tracking (see status live)",
            "Accounting integration (auto sync)",
          ],
        },
        {
          heading: "For Owners",
          details: [
            "See portfolio (dashboard)",
            "Track occupancy (live)",
            "Find vacancies (alerts)",
            "Assign tasks (auto)",
          ],
        },
      ],
    },
    {
      id: "lease-management",
      title: "Lease Management — Auto Renewals, No Missed Dates",
      sections: [
        {
          heading: "For Property Managers",
          details: [
            "Real-time lease tracking (live status)",
            "Auto renewal alerts (when due, instant)",
            "Multi-property management (all locations)",
            "Auto rent escalations (no manual work)",
            "Document storage (auto-filed)",
            "E-signature integration (1 click)",
            "Compliance tracking (full traceability)",
          ],
        },
        {
          heading: "For Tenants",
          details: [
            "See lease terms (portal)",
            "Renewal requests (live)",
            "Auto reminders (alerts)",
            "Document access (quick)",
          ],
        },
      ],
    },
    {
      id: "maintenance-tracking",
      title: "Maintenance Tracking — Fast Response, Happy Tenants",
      sections: [
        {
          heading: "For Maintenance Teams",
          details: [
            "Auto work order creation (custom checkpoints)",
            "Real-time monitoring (live)",
            "Trend analysis (see patterns)",
            "Vendor dispatch tracking (alerts)",
            "Predictive maintenance (auto assign)",
            "Cost tracking (standards met)",
            "Audit trail (auto documentation)",
          ],
        },
        {
          heading: "For Tenants",
          details: [
            "Submit requests (app)",
            "Track status (live)",
            "Rate service (reports)",
          ],
        },
      ],
    },
    {
      id: "real-estate-crm",
      title: "Real Estate CRM — Track Leads, No Delays",
      sections: [
        {
          heading: "For Brokers",
          details: [
            "Track lead quality (scoring)",
            "Follow-up times (live tracking)",
            "Agent performance (KPIs)",
            "Listing automation (sync auto)",
            "Transaction tracking (alerts)",
            "Marketing automation (auto plan)",
            "Client communication (live)",
            "MLS integration (auto sync)",
          ],
        },
        {
          heading: "For Agents",
          details: [
            "See leads (dashboard)",
            "Send follow-ups (auto generate)",
            "Track deals (alerts)",
            "Coordinate showings (portal)",
          ],
        },
      ],
    },
    {
      id: "portfolio-analytics",
      title: "Portfolio Analytics — Prevent Surprises",
      sections: [
        {
          heading: "For Investors",
          details: [
            "Occupancy forecasting (auto alerts)",
            "Predictive risk analysis (alerts before issues)",
            "Performance monitoring (live KPIs)",
            "Cost tracking (budget management)",
            "Scenario modeling (always available)",
            "Investment reports (auto create)",
          ],
        },
        {
          heading: "For Owners",
          details: [
            "See portfolio (dashboard)",
            "Track returns (reports)",
            "Risk alerts (instant)",
          ],
        },
      ],
    },
    {
      id: "tenant-management",
      title: "Tenant Management — Auto Communication, Track Satisfaction",
      sections: [
        {
          heading: "For Property Managers",
          details: [
            "Auto onboarding (document-based, right process)",
            "Communication optimization (efficient)",
            "Rent tracking (digital, 5 seconds)",
            "Satisfaction tracking (KPIs live)",
            "Renewal management (terms tracked)",
            "Retention analytics (live)",
          ],
        },
        {
          heading: "For Tenants",
          details: [
            "See lease (app)",
            "Pay rent (5 seconds)",
            "View documents (dashboard)",
          ],
        },
      ],
    },
    {
      id: "investment-analytics",
      title: "Investment Analytics — See Returns, Cut Costs",
      sections: [
        {
          heading: "For Investors",
          details: [
            "Real-time cost accounting (live)",
            "Property costing (per asset)",
            "Profitability analysis (see returns)",
            "Financial dashboards (KPIs live)",
            "Budget planning (auto)",
            "Variance analysis (alerts)",
            "ERP integration (sync auto)",
          ],
        },
        {
          heading: "For Finance",
          details: [
            "Track costs (dashboard)",
            "See returns (reports)",
            "Budget tracking (live)",
          ],
        },
      ],
    },
    {
      id: "mobile-app",
      title: "Mobile App — Manage Portfolio from Phone",
      sections: [
        {
          heading: "For Managers",
          details: [
            "See portfolio (app, live)",
            "Track leases (live)",
            "Approve requests (1 click)",
            "Alerts (push notifications)",
            "Reports (PDF download)",
          ],
        },
        {
          heading: "For Tenants",
          details: [
            "Pay rent (app, 5 seconds)",
            "See lease status (dashboard)",
            "Report issues (instant)",
          ],
        },
      ],
    },
    {
      id: "facility-monitoring",
      title: "Facility Monitoring — Track All Assets Live",
      sections: [
        {
          heading: "For Owners",
          details: [
            "See all properties (dashboard)",
            "Performance (live KPIs)",
            "Issue alerts (instant)",
            "Usage tracking (reports)",
            "Efficiency (KPIs)",
          ],
        },
        {
          heading: "For Facility Teams",
          details: [
            "Monitor assets (live)",
            "Alerts (instant)",
            "Usage data (reports)",
          ],
        },
      ],
    },
  ];

  const advantages = [
    {
      id: 1,
      title: "Industry Expertise",
      description: "We Know Real Estate",
    },
    {
      id: 2,
      title: "Scalable Solutions",
      description: "Grows With You — From 100 to 100,000 Units",
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
      title: "Learn Your Portfolio",
      description:
        "We conduct comprehensive analysis of your property operations, identifying key challenges, operational requirements, and opportunities for digital transformation.",
    },
    {
      number: "2",
      title: "Custom Design",
      description:
        "We design a tailored real estate management platform that aligns with your business model, incorporating CRM integration, predictive analytics, and automated workflows.",
    },
    {
      number: "3",
      title: "Build + Test",
      description:
        "Our experts develop and deploy the solution with seamless integration to existing systems, ERP platforms, and property portals, with minimal disruption.",
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
      question: "What is real estate software?",
      answer:
        "Digital tools and platforms designed to manage property-related operations, including property management, tenant relations, lease administration, financial reporting, and CRM for real estate companies, brokers, developers, and investors.",
    },
    {
      question: "What is property management software?",
      answer:
        "A specialized type of real estate software that helps property managers and companies oversee rental properties, including tenant management, lease tracking, maintenance coordination, rent collection, and financial reporting.",
    },
    {
      question: "What is real estate CRM software?",
      answer:
        "A customer relationship management system built specifically for the real estate industry. It helps agents, brokers, and agencies manage leads, track client interactions, automate follow-ups, and close more deals.",
    },
    {
      question:
        "What is the difference between residential and commercial real estate software?",
      answer:
        "Residential software focuses on managing single-family homes, apartments, and multi-family units. Commercial software handles office buildings, retail centers, industrial properties and mixed-use developments with lease abstraction and tenant improvement tracking.",
    },
    {
      question: "How does AI help in real estate?",
      answer:
        "AI powers lead scoring, predictive pricing, property recommendations, document automation, chatbots, predictive maintenance, and advanced analytics — reducing manual work and improving decision-making.",
    },
    {
      question: "What is PropTech?",
      answer:
        "PropTech (property technology) is the use of technology and software to transform the real estate industry, encompassing property management software, real estate CRM, IoT, AI, and digital platforms.",
    },
    {
      question: "How much does custom real estate software cost?",
      answer:
        "Cost depends on scope, complexity, features, and deployment model. A basic property management solution typically starts at $100,000–$250,000, while comprehensive enterprise platforms can range from $500,000 to $2M+.",
    },
    {
      question: "How long does it take to build custom real estate software?",
      answer:
        "A basic real estate CRM or property management solution typically takes 3–6 months. Complex enterprise platforms with AI capabilities can take 9–18 months, delivered using agile methodology.",
    },
    {
      question: "Is real estate software secure?",
      answer:
        "Enterprise real estate software should include end-to-end encryption, role-based access control, audit logs, and compliance with GDPR, SOC 2, and ISO 27001.",
    },
    {
      question: "What support do you provide after go-live?",
      answer:
        "24/7 support, ongoing maintenance and continuous improvement to ensure lasting value.",
    },
  ];

  const toggleFAQ = (index) => setOpenFAQ(openFAQ === index ? null : index);

  return (
    <div className="min-h-screen bg-white">
      <SEO {...seoData.realEstate} />
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
                Real Estate Software Solutions — Custom Property Management &
                CRM Development
              </h1>

              <p className="text-gray-300 leading-relaxed">
                Replace manual processes with intelligent real estate software
                that simplifies property management, enhances tenant
                experiences, and drives smarter business decisions.
              </p>
              <button
                onClick={openConsultation}
                className="bg-gradient-to-r from-amber-400 to-orange-500 text-black px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:from-amber-500 hover:to-orange-600"
              >
                Get a Free Consultation →
              </button>
            </div>

            <div className="mt-8 lg:mt-0">
              {/* Top Badge - Real Estate Excellence */}
              <div className="flex justify-center mb-6">
                <div className="bg-white/15 backdrop-blur-lg rounded-xl border border-white/30 shadow-2xl px-5 py-2.5 hover:scale-105 transition-all duration-300">
                  <div className="flex items-center gap-2">
                    <Building2 className="w-7 h-7 text-amber-400" />
                    <h3 className="text-white font-semibold">
                      Complete Real Estate Suite
                    </h3>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {/* Card 1 - Property Management */}
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6 group hover:bg-white/20 transition-all duration-300 hover:-translate-y-2">
                  <Building className="w-12 h-12 text-amber-400 mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="text-white font-semibold mb-2">
                    Property Management
                  </h4>
                  <p className="text-sm text-gray-100">
                    Auto-manage units and eliminate manual work.
                  </p>
                </div>

                {/* Card 2 - Lease Management */}
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6 group hover:bg-white/20 transition-all duration-300 hover:-translate-y-2">
                  <FileText className="w-12 h-12 text-blue-400 mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="text-white font-semibold mb-2">
                    Lease Management
                  </h4>
                  <p className="text-sm text-gray-100">
                    Auto-renew leases, eliminate missed dates.
                  </p>
                </div>

                {/* Card 3 - Maintenance Tracking */}
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6 group hover:bg-white/20 transition-all duration-300 hover:-translate-y-2">
                  <Wrench className="w-12 h-12 text-green-400 mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="text-white font-semibold mb-2">
                    Maintenance Tracking
                  </h4>
                  <p className="text-sm text-gray-100">
                    Auto-dispatch work orders, fast response.
                  </p>
                </div>

                {/* Card 4 - Real Estate CRM */}
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6 group hover:bg-white/20 transition-all duration-300 hover:-translate-y-2">
                  <MapPinned className="w-12 h-12 text-purple-400 mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="text-white font-semibold mb-2">
                    Real Estate CRM
                  </h4>
                  <p className="text-sm text-gray-300">
                    Track leads, listings, and deals live.
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
            title="The PropTech Market, By the Numbers"
            subtitle="Real estate technology is no longer optional — it's the foundation of competitive advantage."
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
                The State of Real Estate Today
              </h2>
              <p className="text-white leading-relaxed">
                At Ascentia Labs, we design and build custom real estate
                software that optimizes every stage of the property lifecycle.
                Our solutions empower developers, property managers, brokers and
                investors to streamline workflows, improve efficiency, and
                enhance overall performance.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Faster Lead Conversion", value: "2x" },
                { label: "Higher Tenant Retention", value: "85–95%" },
                { label: "Better Maintenance Response", value: "90%" },
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
            subtitle="The urgency for digital transformation in real estate has never been greater."
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
            subtitle="Real estate operations face a complex web of challenges. Here's how we address each one."
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
            title="Business Outcomes with Real Estate Software"
            subtitle="Tangible, transformative results across every part of your portfolio."
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
            title="KPI Dashboard: Manual vs. Real Estate Software"
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
            eyebrow="Intelligent Real Estate"
            title="AI & Machine Learning for Real Estate"
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
            subtitle="Your real estate software works with the systems you already run."
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
            title="Explore Top Features of Our Real Estate Software Solutions"
            subtitle="Comprehensive capabilities designed to optimize your property operations."
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
            subtitle="Most clients see full ROI within 6–12 months and 2–3x return within 18 months."
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
            subtitle="Check 6 or more items and you're ready to explore a real estate software platform."
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
            title="Case Studies from Real Estate Clients"
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
              Our Real Estate Development Implementation Process
            </h2>
            <p className="text-lg text-gray-300">
              How We Build Your Real Estate Software — 8 Weeks Total
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
                    Revolutionize Your Real Estate Operations with Our Expertise
                  </h2>
                  <p className="text-xl text-gray-300 mb-8">
                    Why Real Estate Companies Choose Us
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
                      Ready to Transform Your Real Estate Operations?
                    </h3>
                    <p className="text-blue-100 mb-6">
                      Join industry leaders who trust our real estate software
                      solutions to optimize their portfolio operations and boost
                      efficiency.
                    </p>
                    <button
                      onClick={openConsultation}
                      className="bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 hover:from-amber-500 hover:via-orange-500 hover:to-orange-600 text-black border-2 border-black/20 hover:border-black/40 px-8 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                      Start Your Project Today
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

      {/* ===================== UAE REAL ESTATE LINK ===================== */}
    

      {/* ============================= FAQ (existing) ============================= */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent md:text-4xl mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-300">
                Find answers to common questions about our real estate software
                solutions
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

export default RealEstatePage;
