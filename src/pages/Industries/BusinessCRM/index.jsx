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
  GraduationCap,
  Ticket,
  Package,
  Truck,
  Stethoscope,
  Star,
  Newspaper,
  Target,
  Zap,
  Layers,
  PhoneCall,
} from "lucide-react";
import { useConsultation } from "../../../contexts/ConsultationContext";
import SEO from "../../../components/SEO";
import { seoData } from "../../../utils/seoData";

/* ------------------------------------------------------------------ */
/*  Reusable presentational components (shared styling only)          */
/* ------------------------------------------------------------------ */

const SectionHeading = ({ eyebrow, title, subtitle }) => (
  <div className="text-center mb-10 max-w-3xl lg:max-w-5xl mt-9 mx-auto">
    <h2 className="text-3xl md:text-4xl bg-gradient-to-r from-blue-300 to-white bg-clip-text text-transparent mb-3">
      {title}
    </h2>
    {subtitle && <p className="text-base md:text-lg text-white">{subtitle}</p>}
  </div>
);

const StatCard = ({ value, label }) => (
  <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/15 hover:-translate-y-1 transition-all duration-300 text-center">
    <div className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500 mb-2">
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
    <div className="text-2xl md:text-3xl font-extrabold text-white mb-1">{value}</div>
    <div className="text-gray-300 text-sm">{label}</div>
  </div>
);

const ChallengeCard = ({ problem, solution }) => (
  <div className="bg-gray-900 border border-gray-700 rounded-xl p-6 hover:border-amber-400/50 transition-all duration-300">
    <p className="text-md uppercase tracking-wide text-red-400 font-semibold mb-1">Problem</p>
    <p className="text-white text-sm mb-4">{problem}</p>
    <p className="text-md uppercase tracking-wide text-amber-400 font-semibold mb-1">Our Solution</p>
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
    <p className="text-md uppercase tracking-wide text-red-500 font-semibold mb-1">Business Problem</p>
    <p className="text-white text-sm mb-3">{problem}</p>
    <div className="text-amber-400 text-xs mb-3">↓</div>
    <p className="text-md uppercase tracking-wide text-blue-500 font-semibold mb-1">Solution</p>
    <p className="text-gray-300 text-sm mb-3">{solution}</p>
    {/* <div className="text-amber-400 text-xs mb-3">↓</div> */}
    {/* <p className="text-md uppercase tracking-wide text-green-500 font-semibold mb-1">Outcome</p> */}
    {/* <p className="text-lg font-bold text-white">{outcome}</p> */}
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
          <CheckCircle2 size={18} className="text-amber-400 flex-shrink-0 mt-0.5" />
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
        <li key={idx} className="text-gray-300 text-sm flex items-start space-x-2">
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
        <li key={idx} className="text-gray-300 text-sm flex items-start space-x-2">
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
        <li key={idx} className="text-gray-300 text-sm hover:text-amber-400 transition-colors cursor-pointer">
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

const BusinessCrmPage = () => {
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

  const marketStats = [
    { value: "$96B", label: "Global CRM Software Market (2025)" },
    { value: "13.9%", label: "CRM Market CAGR (2025–2032)" },
    { value: "91%", label: "Businesses with 10+ Employees Using a CRM System" },
    { value: "245%", label: "Average ROI from CRM Software" },
    { value: "$8.71", label: "Return Per $1 Spent on CRM Software" },
    { value: "47%", label: "Businesses Reporting Better Customer Retention with CRM" },
  ];

   const transformationCards = [
    {
      icon: TrendingUp,
      title: "Rising Customer Expectations",
      impact: "Keep sales, support, and marketing aligned around every customer.",
    },
    {
      icon: Layers,
      title: "Fragmented Sales & Support Tools",
      impact: "Bring every deal and ticket into one connected CRM.",
    },
    {
      icon: Users,
      title: "Distributed & Growing Teams",
      impact: "Give remote teams a CRM that works anywhere, on any device.",
    },
    {
      icon: DollarSign,
      title: "Cost & Margin Pressure",
      impact: "Cut admin work and protect revenue with simple automation.",
    },
    {
      icon: ClipboardCheck,
      title: "Compliance & Data Governance",
      impact: "Build audit trails and data control in from day one.",
    },
  ];

  const challenges = [
    {
      problem: "Manual lead tracking spread across emails and spreadsheets.",
      solution:
        "A centralized sales CRM for small business with automated lead routing, scoring and follow-up reminders.",
    },
    {
      problem: "Sales, support and marketing teams working from different tools.",
      solution:
        "One business CRM software platform that unifies pipeline, tickets and campaigns in a single view.",
    },
    {
      problem: "No visibility into deal stages or team performance.",
      solution:
        "Real-time pipeline dashboards and reporting built into your customer relationship management system.",
    },
    {
      problem: "Off-the-shelf CRM systems that don't fit your industry workflow.",
      solution:
        "Custom CRM development tailored to construction, real estate, accounting, insurance or service businesses.",
    },
    {
      problem: "Startups and small teams priced out of enterprise CRM platforms.",
      solution:
        "A simple, affordable CRM for small business and startups that scales as headcount grows.",
    },
    {
      problem: "Client data scattered across contact books, apps and spreadsheets.",
      solution:
        "Centralized client management software with a single source of truth for every account.",
    },
  ];

  const outcomes = [
    { icon: Target, value: "2–3x", label: "Lead Conversion Rate" },
    { icon: Users, value: "85–92%", label: "Customer Retention Rate" },
    { icon: Zap, value: "90%", label: "Faster Response Times" },
    { icon: Wrench, value: "60–70%", label: "Admin Overhead Reduction" },
    { icon: DollarSign, value: "20–35%", label: "Sales Operations Cost Savings" },
    { icon: BarChart3, value: "Real-time", label: "Pipeline Visibility" },
  ];

  const kpiRows = [
    ["Lead Response Time", "24–48 hrs", "< 5 minutes", "99% faster"],
    ["Lead Conversion Rate", "12–18%", "30–40%", "2x+ improvement"],
    ["Customer Retention Rate", "60–70%", "85–92%", "+20%"],
    ["Sales Cycle Length", "45–60 days", "20–30 days", "50% faster"],
    ["Follow-up Consistency", "Manual, inconsistent", "Automated, 100%", "Fully automated"],
    ["Reporting Time", "3–5 days", "Real-time", "95% faster"],
    ["Customer Data Accuracy", "60–75%", "95%+", "+25%"],
  ];

  const industries = [
    { icon: Home, title: "Real Estate", line: "CRM and lead generation for real estate agents and brokers.", link: "/real-estate-app-development" },
    { icon: Building, title: "Construction", line: "Construction CRM for bids, projects and client communication.", link: "/business-management-crm-solution" },
    { icon: Wrench, title: "HVAC & Field Service", line: "HVAC CRM software for scheduling, dispatch and service history.", link: "/field-service-crm" },
    { icon: FileText, title: "Accounting Firms", line: "CRM for accountants and accounting firms to manage clients.", link: "/business-management-crm-solution" },
    { icon: Shield, title: "Insurance Agencies", line: "Insurance agency CRM for policies, renewals and claims tracking.", link: "/business-management-crm-solution" },
    { icon: Sparkles, title: "Marketing Agencies", line: "CRM for marketing agencies to manage clients and campaigns.", link: "/business-management-crm-solution" },
    { icon: Truck, title: "Moving Companies", line: "Moving company CRM for quotes, bookings and logistics.", link: "/logistics-software-development" },
    { icon: GraduationCap, title: "Nonprofits", line: "Nonprofit CRM systems for donors, members and outreach.", link: "/business-management-crm-solution" },
  ];

   const aiCards = [
    { icon: TrendingUp, title: "AI Lead Scoring", body: "Rank leads by close likelihood so the team focuses on the best opportunities." },
    { icon: PhoneCall, title: "Smart Call Center CRM", body: "Route calls, transcribe conversations, and suggest the next best action." },
    { icon: Eye, title: "Customer Insights Engine", body: "Spot churn risk and upsell chances before they are missed." },
    { icon: Sparkles, title: "Workflow Automation", body: "Automate follow-ups, quotes, and renewals so the team can sell more." },
    { icon: Network, title: "Email & Marketing Automation", body: "Keep campaigns, replies, and deals in sync automatically." },
  ];

  const techStack = [
    { icon: Brain, title: "AI & Machine Learning", body: "Python, TensorFlow and scikit-learn power lead scoring and predictive customer analytics." },
    { icon: Cpu, title: "Enterprise Systems", body: "ERP CRM integration with SAP, Oracle, Microsoft Dynamics and QuickBooks." },
    { icon: Cloud, title: "Cloud Infrastructure", body: "AWS, Azure and Google Cloud power a scalable, secure cloud CRM for small business." },
    { icon: BarChart3, title: "Data Analytics", body: "Real-time dashboards turn your customer relationship management system into a decision engine." },
    { icon: Network, title: "Integration Layer", body: "RESTful APIs and webhooks connect your CRM software to the rest of your business stack." },
  ];

  const integrations = [
    { icon: Server, title: "ERP (SAP, Oracle, Dynamics)" },
    { icon: DollarSign, title: "Accounting (QuickBooks, Xero)" },
    { icon: Newspaper, title: "Email Marketing (Mailchimp)" },
    { icon: PhoneCall, title: "Call Center Platforms" },
    { icon: Shield, title: "Payment Gateways (Stripe, PayPal)" },
    { icon: Database, title: "Data Visualization (Tableau)" },
  ];

  const useCases = [
    {
      problem: "A small business CRM search led a 20-person sales team to five disconnected spreadsheets.",
      solution: "A custom, easy-to-use CRM for small business unifying contacts, deals and tasks.",
      outcome: "35% increase in lead conversion, reps closing 25% more deals.",
    },
    {
      problem: "A construction company needed a CRM for general contractors to manage bids and clients.",
      solution: "Construction CRM software with project-linked client records and automated bid follow-up.",
      outcome: "40% faster bid turnaround, 20% more repeat business.",
    },
    {
      problem: "An accounting firm relied on a shared inbox to track every client relationship.",
      solution: "CRM for accounting firms with document tracking and automated client reminders.",
      outcome: "50% reduction in missed follow-ups, higher client retention.",
    },
    {
      problem: "A startup needed a free-to-start CRM that could scale with fundraising and growth.",
      solution: "Custom CRM development starting lean, built to scale into a full business CRM software suite.",
      outcome: "3x faster onboarding of new reps, pipeline visibility from day one.",
    },
  ];

  const savings = [
    { label: "Admin Overhead Reduction", value: "20–35%" },
    { label: "Lead Conversion Improvement", value: "2–3x" },
    { label: "Sales Cycle Reduction", value: "30–50%" },
    { label: "Reporting Speed Gain", value: "95%" },
    { label: "Customer Retention Gain", value: "+20%" },
    { label: "Total Operational Cost Reduction", value: "20–30%" },
  ];

  const readiness = [
    {
      title: "Strategic Readiness",
      items: [
        "Leadership aligned on CRM investment priorities",
        "Clear sales and service objectives defined",
        "Budget allocated for a business CRM software platform",
        "Executive sponsor identified",
      ],
    },
    {
      title: "Operational Readiness",
      items: [
        "Current sales and support workflows documented",
        "Pain points in lead tracking identified",
        "Key stakeholders across sales, support and marketing engaged",
        "Change management plan considered",
      ],
    },
   
  ];

  const journey = [
    { title: "Discovery", body: "Understand your sales process, team structure and objectives." },
    { title: "Planning", body: "Project plan, CRM architecture and technology selection." },
    { title: "Design", body: "Wireframes, prototypes and pipeline design." },
    { title: "Development", body: "Agile sprints with continuous testing." },
    { title: "Deployment", body: "Zero-downtime rollout with training and support." },
  ];

  const deploymentModels = [
    { icon: Cloud, title: "Cloud", points: ["No infrastructure to manage", "Automatic updates and patches", "Access your CRM system from anywhere"] },
    { icon: Network, title: "Hybrid", points: ["Best of both worlds", "Data sovereignty for sensitive client data", "Gradual cloud migration"], highlight: true },
    { icon: Server, title: "On-Premise", points: ["Complete data control", "Meets strict compliance needs", "Leverages existing infrastructure"] },
  ];

  const security = [
    { icon: Lock, title: "Data Security", body: "End-to-end encryption and regular security audits protect every customer record." },
    { icon: KeyRound, title: "Access Control", body: "Role-based access with multi-factor authentication for your sales and support teams." },
    { icon: ClipboardCheck, title: "Audit Trail", body: "Immutable, real-time monitored activity logs across your CRM system." },
    { icon: Shield, title: "Compliance", body: "GDPR, SOC 2 and ISO 27001-ready customer relationship management software." },
  ];

  const caseStudies = [
    {
      metric: "35%",
      title: "SMB Sales Team Boosts Lead Conversion",
      description: "A 20-person team replaced spreadsheets with a custom small business CRM and saw a 35% lift in conversion within two quarters.",
    },
    {
      metric: "60%",
      title: "Construction Firm Cuts Bid Turnaround",
      description: "A construction CRM software rollout cut proposal turnaround time by 60% and improved repeat-client rate.",
    },
    {
      metric: "50%",
      title: "Insurance Agency Speeds Renewals",
      description: "An insurance agency CRM automated renewal reminders, cutting missed renewals by 50%.",
    },
  ];

  const engagementModels = [
    { icon: FileText, title: "Fixed Cost", points: ["Well-defined scope and timeline", "Predictable budget", "Ideal for specific CRM projects"] },
    { icon: Users, title: "Dedicated Team", points: ["Full team assigned to your CRM build", "Complete control and transparency", "Long-term partnership"] },
    { icon: UserCog, title: "Staff Augmentation", points: ["Supplement your existing team", "Flexible scaling up or down", "Access to specialized CRM developers"] },
  ];

  const resources = [
    {
      icon: Newspaper,
      label: "Blogs",
      items: [
        "Best CRM for Small Business — A 2026 Buyer's Guide",
        "CRM vs ERP: What's the Difference and Do You Need Both?",
        "How a Custom CRM Increased Lead Conversion by 35%",
      ],
    },
    {
      icon: FileText,
      label: "Whitepapers",
      items: [
        "The CRM Playbook — Choosing Build vs Buy for Small Business",
        "CRM Software Trends for Startups and SMBs in 2026",
      ],
    },
    {
      icon: BookOpen,
      label: "Guides",
      items: [
        "Choosing the Right CRM System for Your Business",
        "CRM Software Selection Guide for Service Businesses",
      ],
    },
  ];

  const relatedServices = [
    { icon: Code, title: "Custom CRM Development", description: "Purpose-built CRM systems that match your exact sales and service workflow.", to: "/custom-crm-development" },
    { icon: Brain, title: "AI/ML Development", description: "Predictive lead scoring, churn prediction and customer analytics.", to: "/ai-ml-services" },
    { icon: TrendingUp, title: "Digital Transformation", description: "A clear roadmap from spreadsheets to a connected CRM system.", to: "/digital-transformation" },
    { icon: Sparkles, title: "Application Modernization", description: "Upgrade legacy CRM systems without disrupting your sales team.", to: "/application-modernisation" },
    { icon: UserCheck, title: "Mobile App Development", description: "Manage leads, deals and clients from anywhere.", to: "/mobile-application" },
  ];

  const features = [
    {
      id: "sales-pipeline",
      title: "Sales Pipeline — Track Every Deal, No Gaps",
      sections: [
        {
          heading: "For Sales Teams",
          details: [
            "Auto lead capture from web, email and calls",
            "Visual deal pipeline (live status)",
            "Lead scoring and prioritization (AI-powered)",
            "Automated follow-up reminders",
            "Quote and proposal generation",
            "Task assignment (auto assign to reps)",
            "Win/loss tracking and reporting",
            "Accounting integration (auto sync)",
          ],
        },
        {
          heading: "For Sales Managers",
          details: [
            "See full pipeline (dashboard)",
            "Track rep performance (live)",
            "Forecast revenue (reports)",
            "Reassign leads (1 click)",
          ],
        },
      ],
    },
    {
      id: "contact-management",
      title: "Contact & Client Management — One Source of Truth",
      sections: [
        {
          heading: "For Account Teams",
          details: [
            "Centralized contact database (all clients)",
            "Interaction history (calls, emails, meetings)",
            "Document storage (auto-filed)",
            "Segmentation and tagging",
            "Duplicate detection and merging",
            "Custom fields for any industry",
          ],
        },
        {
          heading: "For Clients",
          details: [
            "Self-service portal access",
            "Document access (quick)",
            "Communication history (transparent)",
          ],
        },
      ],
    },
    {
      id: "marketing-automation",
      title: "Marketing Automation — CRM + Email in One Place",
      sections: [
        {
          heading: "For Marketing Teams",
          details: [
            "Email campaign builder (drag and drop)",
            "Automated drip sequences",
            "Lead nurturing workflows",
            "Campaign performance tracking (live)",
            "List segmentation (auto)",
            "A/B testing built in",
          ],
        },
        {
          heading: "For Sales Teams",
          details: [
            "See marketing-qualified leads (live)",
            "Auto-handoff to sales (instant)",
            "Shared activity timeline",
          ],
        },
      ],
    },
    {
      id: "call-center-crm",
      title: "Call Center CRM — Faster Resolutions, Happier Customers",
      sections: [
        {
          heading: "For Support Teams",
          details: [
            "Auto ticket creation from calls and email",
            "Call transcription and logging",
            "Real-time queue monitoring",
            "SLA tracking and alerts",
            "Knowledge base integration",
            "Customer satisfaction surveys (auto-sent)",
          ],
        },
        {
          heading: "For Customers",
          details: [
            "Submit requests (portal or phone)",
            "Track ticket status (live)",
            "Rate service (post-resolution)",
          ],
        },
      ],
    },
    {
      id: "reporting-analytics",
      title: "Reporting & Analytics — Decisions Backed by Data",
      sections: [
        {
          heading: "For Leadership",
          details: [
            "Revenue forecasting (auto alerts)",
            "Pipeline health analysis (live KPIs)",
            "Team performance monitoring",
            "Custom report builder",
            "Scenario modeling (always available)",
            "Board-ready reports (auto create)",
          ],
        },
        {
          heading: "For Finance",
          details: [
            "Track deal value (dashboard)",
            "See revenue attribution (reports)",
            "Budget vs actual tracking (live)",
          ],
        },
      ],
    },
    {
      id: "workflow-automation",
      title: "Workflow Automation — Eliminate Manual Admin",
      sections: [
        {
          heading: "For Operations",
          details: [
            "Auto task creation from triggers",
            "Approval workflows (1 click)",
            "Document generation (contracts, invoices)",
            "Renewal and expiry alerts",
            "Multi-step automation builder",
          ],
        },
        {
          heading: "For Teams",
          details: [
            "See assigned tasks (dashboard)",
            "Auto reminders (alerts)",
            "One-click approvals",
          ],
        },
      ],
    },
    {
      id: "mobile-crm",
      title: "Mobile CRM — Manage Business From Your Phone",
      sections: [
        {
          heading: "For Field & Sales Teams",
          details: [
            "Access contacts and deals (app, live)",
            "Log calls and meetings on the go",
            "Approve requests (1 click)",
            "Push notifications for hot leads",
            "Offline access with auto-sync",
          ],
        },
        {
          heading: "For Managers",
          details: [
            "See team activity (live)",
            "Reports on demand (PDF export)",
            "Reassign leads remotely",
          ],
        },
      ],
    },
    {
      id: "integration-hub",
      title: "Integration Hub — Works With Your Existing Stack",
      sections: [
        {
          heading: "For IT Teams",
          details: [
            "ERP integration (SAP, Oracle, Dynamics)",
            "Accounting sync (QuickBooks, Xero)",
            "API and webhook access",
            "Single sign-on (SSO)",
            "Data import/export tools",
          ],
        },
        {
          heading: "For Business Users",
          details: [
            "No double data entry",
            "Everything in one dashboard",
            "Automatic sync across systems",
          ],
        },
      ],
    },
  ];

  const advantages = [
    { id: 1, title: "Industry Expertise", description: "We Know Business CRM — Across Real Estate, Construction, Accounting and More" },
    { id: 2, title: "Scalable Solutions", description: "Grows With You — From a 5-Person Startup to a 500-Seat Sales Org" },
    { id: 3, title: "Advanced Technology", description: "Modern Tech — AI Lead Scoring, Automation, Real-time Reports" },
    { id: 4, title: "Quality Assurance & Compliance", description: "No Bugs, Meets Standards — We Test 3 Times" },
    { id: 5, title: "Seamless Integration", description: "Works With Your Current ERP, Accounting and Marketing Tools" },
    { id: 6, title: "24/7 Support", description: "24/7 Support — We Answer Fast" },
  ];

  const processSteps = [
    { number: "1", title: "Learn Your Sales Process", description: "We conduct comprehensive analysis of your sales, marketing and support operations, identifying key challenges and opportunities for a purpose-built CRM system." },
    { number: "2", title: "Custom Design", description: "We design a tailored business CRM software platform that aligns with your business model, incorporating automation, predictive analytics and integrations." },
    { number: "3", title: "Build + Test", description: "Our experts develop and deploy the CRM system with seamless integration to your existing ERP, accounting and marketing tools, with minimal disruption." },
    { number: "4", title: "Train + Start", description: "We provide comprehensive training and ongoing support, continuously monitoring system performance to maximize adoption and ROI." },
  ];

  const faqs = [
    {
      question: "What is CRM software?",
      answer:
        "Customer relationship management software is a digital platform that helps businesses track leads, manage client relationships, automate follow-ups and analyze sales performance in one centralized system.",
    },
    {
      question: "What is the best CRM for small business?",
      answer:
        "The best small business CRM is one built around your actual sales process rather than a generic template. A custom or configurable CRM system typically outperforms off-the-shelf tools once you outgrow basic contact management.",
    },
    {
      question: "Is there a free CRM for small business or startups?",
      answer:
        "Many providers offer free CRM systems or free trials for small teams, but free plans often cap contacts, users or automation. A custom CRM development approach avoids those limits as you scale.",
    },
    {
      question: "What is the difference between a CRM and an ERP system?",
      answer:
        "A CRM system focuses on sales, marketing and customer relationships, while an ERP system manages finance, inventory and operations. Many businesses connect both through an integrated CRM and ERP platform.",
    },
    {
      question: "How does AI help in CRM software?",
      answer:
        "AI powers lead scoring, predictive analytics, call center automation, churn prediction and workflow automation — reducing manual admin work and improving conversion rates.",
    },
    {
      question: "Can a CRM be built for a specific industry?",
      answer:
        "Yes. Custom CRM development can be tailored for real estate agents, construction companies, accounting firms, insurance agencies, cleaning businesses, HVAC companies and other service-based industries.",
    },
    {
      question: "How much does custom CRM software cost?",
      answer:
        "Cost depends on scope, complexity, features and deployment model. A basic small business CRM system typically starts at $30,000–$100,000, while comprehensive enterprise CRM platforms can range from $150,000 to $750,000+.",
    },
    {
      question: "How long does it take to build custom CRM software?",
      answer:
        "A basic CRM system for a small business typically takes 6–10 weeks. Complex enterprise CRM platforms with AI capabilities can take 4–9 months, delivered using agile methodology.",
    },
    {
      question: "Is CRM software secure?",
      answer:
        "Enterprise CRM software should include end-to-end encryption, role-based access control, audit logs and compliance with GDPR, SOC 2 and ISO 27001.",
    },
    {
      question: "What support do you provide after go-live?",
      answer: "24/7 support, ongoing maintenance and continuous improvement to ensure lasting value from your CRM system.",
    },
  ];

  const toggleFAQ = (index) => setOpenFAQ(openFAQ === index ? null : index);

  return (
    <div className="min-h-screen bg-white">
      <SEO {...seoData.businessCrm} />
      <style dangerouslySetInnerHTML={{ __html: scrollbarStyles }} />

      {/* ============================= HERO + OVERVIEW ============================= */}
      <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-black overflow-hidden pt-20 pb-16">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-40 left-20 w-24 h-24 bg-blue-400 rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-blue-300 rounded-full blur-xl"></div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-black pointer-events-none"></div>

        <div className="relative container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="text-white space-y-6 py-8 lg:py-10 2xl:py-15">
              <h1 className="text-[25px] md:text-4xl leading-tight">
                Custom Business CRM Software Development
              </h1>

              <p className="text-gray-300 leading-relaxed">
                Replace scattered spreadsheets and disconnected tools with an
                affordable, easy-to-use CRM system built around your sales
                process — from lead capture to closed deal.
              </p>
              <button
                onClick={openConsultation}
                className="bg-gradient-to-r from-amber-400 to-orange-500 text-black px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:from-amber-500 hover:to-orange-600"
              >
                Get a Free Consultation →
              </button>
            </div>

            <div className="mt-8 lg:mt-0">
              <div className="flex justify-center mb-6">
                <div className="bg-white/15 backdrop-blur-lg rounded-xl border border-white/30 shadow-2xl px-5 py-2.5 hover:scale-105 transition-all duration-300">
                  <div className="flex items-center gap-2">
                    <Building2 className="w-7 h-7 text-amber-400" />
                    <h3 className="text-white font-semibold">Complete Business CRM Suite</h3>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6 group hover:bg-white/20 transition-all duration-300 hover:-translate-y-2">
                  <Target className="w-12 h-12 text-amber-400 mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="text-white font-semibold mb-2">Sales Pipeline CRM</h4>
                  <p className="text-sm text-gray-100">Auto-track deals and eliminate manual work.</p>
                </div>

                <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6 group hover:bg-white/20 transition-all duration-300 hover:-translate-y-2">
                  <Users className="w-12 h-12 text-blue-400 mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="text-white font-semibold mb-2">Client Management</h4>
                  <p className="text-sm text-gray-100">One source of truth for every customer.</p>
                </div>

                <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6 group hover:bg-white/20 transition-all duration-300 hover:-translate-y-2">
                  <Sparkles className="w-12 h-12 text-green-400 mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="text-white font-semibold mb-2">Marketing Automation</h4>
                  <p className="text-sm text-gray-100">CRM and email marketing, fully connected.</p>
                </div>

                <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6 group hover:bg-white/20 transition-all duration-300 hover:-translate-y-2">
                  <PhoneCall className="w-12 h-12 text-purple-400 mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="text-white font-semibold mb-2">Call Center CRM</h4>
                  <p className="text-sm text-gray-300">Track every call, ticket and resolution live.</p>
                </div>
              </div>
            </div>
          </div>

        
        </div>
      </section>

      {/* ================= WHY DIGITAL TRANSFORMATION ================= */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="Why Now"
            title="Why a Modern CRM System Matters Now"
            subtitle="The urgency for a connected business CRM software platform has never been greater."
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
      <section className="py-16 bg-gradient-to-br from-gray-900 via-blue-900 to-black relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black to-transparent pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-black pointer-events-none"></div>
        <div className="container mx-auto mt-8 px-4">
          <SectionHeading
            title="Business Challenges We Solve"
            subtitle="Sales and customer operations face a complex web of challenges. Here's how a custom CRM system addresses each one."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {challenges.map((c, i) => (
              <ChallengeCard key={i} problem={c.problem} solution={c.solution} />
            ))}
          </div>
        </div>
      </section>

      {/* ===================== BUSINESS OUTCOMES ===================== */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="Measurable Impact"
            title="Business Outcomes with CRM Software"
            subtitle="Tangible, transformative results across sales, support and marketing."
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
            {outcomes.map((o, i) => (
              <OutcomeCard key={i} icon={o.icon} value={o.value} label={o.label} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-gray-900 via-blue-900 to-black relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black to-transparent pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-black pointer-events-none"></div>
        <div className="container mx-auto px-4">
          <SectionHeading eyebrow="Related Services" title="Related Services We Provide" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 max-w-6xl mx-auto">
            {relatedServices.map((s, i) => (
              <ServiceCard key={i} icon={s.icon} title={s.title} description={s.description} to={s.to} />
            ))}
          </div>
        </div>
      </section>

      {/* ===================== KPI COMPARISON TABLE ===================== */}
    

      {/* ===================== INDUSTRIES WE SERVE ===================== */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <SectionHeading eyebrow="Who We Help" title="Industries We Serve" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {industries.map((industry, index) => (
              <IndustryCard key={index} icon={industry.icon} title={industry.title} line={industry.line} link={industry.link} />
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
            eyebrow="Intelligent CRM"
            title="AI & Machine Learning for Business CRM"
            subtitle="Capabilities that go beyond traditional contact management."
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
            subtitle="Your CRM system works with the tools you already run."
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
            {integrations.map((intg, i) => (
              <IntegrationCard key={i} icon={intg.icon} title={intg.title} />
            ))}
          </div>
        </div>
      </section>

      {/* ============================= FEATURES ============================= */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="Platform"
            title="Explore Top Features of Our Business CRM Software"
            subtitle="Comprehensive capabilities designed to optimize your sales and customer operations."
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
                              activeFeature === index ? "bg-black text-amber-400" : "bg-gradient-to-r from-amber-400 to-orange-500 text-black"
                            }`}
                          >
                            {index < 9 ? `0${index + 1}` : index + 1}
                          </span>
                          <span className="font-medium text-sm lg:text-base 2xl:text-lg">{feature.title}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-6 flex items-center">
                  <div className="space-y-4">
                    <div className="bg-amber-100 p-3 rounded-xl w-fit">
                      <div className="bg-gradient-to-r from-amber-400 to-orange-500 p-2 rounded-lg">
                        <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    </div>

                    <div className="space-y-6">
                      {features[activeFeature].sections.map((section, sectionIndex) => (
                        <div key={sectionIndex}>
                          <h4 className="text-base lg:text-xl 2xl:text-2xl font-semibold text-gray-900 mb-3">{section.heading}</h4>
                          <ul className="space-y-2 text-gray-600">
                            {section.details.map((detail, idx) => (
                              <li key={idx} className="flex items-start space-x-2">
                                <span className="w-1.5 h-1.5 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                                <span className="text-sm lg:text-[15px] 2xl:text-lg">{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
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
          <SectionHeading eyebrow="Proof in Practice" title="Industry Use Cases" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
            {useCases.map((u, i) => (
              <UseCaseCard key={i} problem={u.problem} solution={u.solution} outcome={u.outcome} />
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
            subtitle="Most clients see full ROI within 4–9 months and 2–3x return within 18 months."
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
            subtitle="Check 6 or more items and you're ready to explore a business CRM software platform."
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
          <SectionHeading eyebrow="How We Work" title="Customer Journey: Discovery to Deployment" />
          <div className="max-w-6xl mx-auto">
            <div className="hidden md:flex justify-between items-start relative">
              <div className="absolute top-6 left-0 right-0 h-0.5 bg-blue-300/40"></div>
              {journey.map((step, i) => (
                <div key={i} className="flex-1 text-center px-2 relative z-10">
                  <div className="w-12 h-12 bg-gradient-to-r from-amber-400 to-orange-500 text-black rounded-full flex items-center justify-center font-bold mx-auto mb-3">
                    {i + 1}
                  </div>
                  <h4 className="text-white font-semibold text-sm mb-1">{step.title}</h4>
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
                    <h4 className="text-white font-semibold text-sm">{step.title}</h4>
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
          <SectionHeading eyebrow="Flexible Delivery" title="Deployment Models" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {deploymentModels.map((m, i) => (
              <DeploymentCard key={i} icon={m.icon} title={m.title} points={m.points} highlight={m.highlight} />
            ))}
          </div>
        </div>
      </section>

      {/* ===================== SECURITY & COMPLIANCE ===================== */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <SectionHeading eyebrow="Enterprise Trust" title="Security & Compliance" />
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
          <SectionHeading eyebrow="Real Results" title="Case Studies from Business CRM Clients" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {caseStudies.map((c, i) => (
              <CaseStudyCard key={i} metric={c.metric} title={c.title} description={c.description} />
            ))}
          </div>
        </div>
      </section>

      {/* ============================= PROCESS ============================= */}
   
      {/* ===================== ENGAGEMENT MODELS ===================== */}
      <section className="py-16 bg-gradient-to-br from-gray-900 via-blue-900 to-black relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black to-transparent pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-black pointer-events-none"></div>
        <div className="container mx-auto px-4">
          <SectionHeading eyebrow="Ways to Work With Us" title="Engagement Models" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {engagementModels.map((m, i) => (
              <EngagementCard key={i} icon={m.icon} title={m.title} points={m.points} />
            ))}
          </div>
        </div>
      </section>

      {/* ============================= WHY CHOOSE US ============================= */}
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
                    Revolutionize Your Sales & Customer Operations with Our Expertise
                  </h2>
                  <p className="text-xl text-gray-300 mb-8">Why Businesses Choose Us for CRM Development</p>
                </div>

                <div className="space-y-6">
                  {advantages.map((item) => (
                    <div key={item.id}>
                      <div
                        onClick={() => setActiveIndex(activeIndex === item.id ? null : item.id)}
                        className="flex items-center justify-between cursor-pointer"
                      >
                        <div className="flex items-center space-x-4 group">
                          <div className="bg-blue-600 text-white px-3 py-1 rounded-md text-sm">
                            {String(item.id).padStart(2, "0")}
                          </div>
                          <div>
                            <h3 className="lg:text-xl text-md group-hover:text-blue-300 transition-colors">{item.title}</h3>
                            <div className="w-24 h-0.5 bg-blue-500 mt-1"></div>
                          </div>
                        </div>
                        <div className={`text-blue-500 text-xl transition-transform duration-300 ${activeIndex === item.id ? "rotate-45" : ""}`}>
                          +
                        </div>
                      </div>
                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          activeIndex === item.id ? "max-h-32 opacity-100 mt-3" : "max-h-0 opacity-0"
                        }`}
                      >
                        <p className="pl-16 text-gray-300 text-sm md:text-base">→ {item.description}</p>
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
                        <svg className="w-16 h-16 text-black relative z-10 drop-shadow-lg" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <div className="absolute inset-0 rounded-full border-2 border-black/10 animate-spin-slow opacity-60"></div>
                      </div>
                      <div className="absolute inset-0 w-32 h-32 rounded-full bg-gradient-to-br from-amber-300/20 via-amber-400/20 to-orange-400/20 animate-ping"></div>
                      <div className="absolute inset-0 w-32 h-32 rounded-full bg-gradient-to-br from-amber-200/15 via-amber-300/15 to-orange-300/15 animate-pulse"></div>
                    </div>
                    <h3 className="text-2xl mb-4">Ready to Transform Your Sales & Customer Operations?</h3>
                    <p className="text-blue-100 mb-6">
                      Join businesses who trust our CRM software solutions to
                      streamline sales, boost retention and grow revenue.
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
              <ResourceCard key={i} icon={r.icon} label={r.label} items={r.items} />
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
              <p className="text-lg text-gray-300">Find answers to common questions about our business CRM software solutions</p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-gray-900 rounded-xl shadow-lg border border-gray-700 overflow-hidden">
                  <button
                    className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-800 transition-colors duration-200"
                    onClick={() => toggleFAQ(index)}
                  >
                    <h3 className="text-lg text-white pr-4">{faq.question}</h3>
                    <div className="flex-shrink-0">
                      {openFAQ === index ? <ChevronUp className="w-5 h-5 text-blue-400" /> : <ChevronDown className="w-5 h-5 text-blue-400" />}
                    </div>
                  </button>
                  {openFAQ === index && (
                    <div className="px-6 pb-5">
                      <div className="border-t border-gray-700 pt-4">
                        <p className="text-gray-300 whitespace-pre-line leading-relaxed">{faq.answer}</p>
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

export default BusinessCrmPage;