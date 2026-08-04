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
  Headphones,
  MessageSquare,
  Bot,
  Workflow,
  LifeBuoy,
  Building as BuildingIcon,
  Landmark as GovIcon,
  ShoppingBag,
  Banknote,
} from "lucide-react";
import { useConsultation } from "../../../contexts/ConsultationContext";
import SEO from "../../../components/SEO";
import { seoData } from "../../../utils/seoData";

/* ------------------------------------------------------------------ */
/*  Reusable presentational components (shared styling only)          */
/*  UNCHANGED — DO NOT EDIT                                            */
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

const TicketingSoftwarePage = () => {
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
      icon: Ticket,
      title: "Ticket Management System",
      description:
        "Create, track and resolve every support ticket in real time, with automated SLA and escalation alerts.",
    },
    {
      icon: Shield,
      title: "SLA & Compliance Tracking",
      description:
        "Automate SLA monitoring, prioritization and escalation at every stage of the ticket lifecycle.",
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting",
      description:
        "Live support dashboards that turn ticket data into decisions and cost savings.",
    },
    {
      icon: Headphones,
      title: "Omnichannel Helpdesk & Routing",
      description:
        "Consolidate email, chat, social and phone requests and route them to the right agent faster.",
    },
  ];

  const stats = [
    { number: "7+", label: "Business Years" },
    { number: "120+", label: "Projects Delivered" },
    { number: "10+", label: "Industries Catered" },
    { number: "4+", label: "Countries" },
  ];

  const marketStats = [
    { value: "$12.3B", label: "Global Help Desk Software Market (2024)" },
    { value: "$25.4B", label: "Projected Market by 2030" },
    { value: "$7.59B", label: "Global Service Desk Software Market (2025)" },
    { value: "50%+", label: "Support Teams Already Using AI" },
    { value: "75%", label: "Businesses Planning AI Investment" },
    { value: "73%", label: "Businesses Using AI Chatbots" },
  ];

  const transformationCards = [
    {
      icon: TrendingUp,
      title: "Rising Customer Expectations",
      impact:
        "Customers want fast, personalized support across channels. Real-time updates and self-service keep you competitive.",
    },
    {
      icon: MapPinned,
      title: "Omnichannel Support Requirements",
      impact:
        "Customers reach out via email, chat, social and WhatsApp. Unified ticketing consolidates every interaction.",
    },
    {
      icon: Users,
      title: "AI-Powered Automation",
      impact:
        "AI categorization, routing and chatbots dramatically improve efficiency and customer experience.",
    },
    {
      icon: DollarSign,
      title: "Growing Ticket Volumes",
      impact:
        "Manual processes can't scale. Automated ticket management handles growth without proportional headcount.",
    },
    {
      icon: ClipboardCheck,
      title: "Workflow Automation",
      impact:
        "Automation removes routine tasks like assignment and follow-ups, freeing agents for high-value work.",
    },
  ];

  const challenges = [
    {
      problem:
        "Agents manually review, categorize and assign every incoming ticket.",
      impact: "Time is wasted, errors creep in, and responses are delayed.",
      solution:
        "Automated ticket categorization and intelligent routing with AI.",
    },
    {
      problem: "Support requests get lost in inboxes, chats and spreadsheets.",
      impact: "Requests fall through the cracks and customers get frustrated.",
      solution:
        "Centralized ticketing system that captures every request automatically.",
    },
    {
      problem: "Manual processes and fragmented tools slow response times.",
      impact: "SLA compliance becomes impossible to achieve consistently.",
      solution: "Automated SLA tracking, prioritization and escalation alerts.",
    },
    {
      problem:
        "Support channels — email, chat, social, phone — are managed separately.",
      impact:
        "Agents waste time switching tools; customers get inconsistent service.",
      solution: "Unified omnichannel helpdesk with a single ticket view.",
    },
    {
      problem: "Solutions to common issues live in silos or aren't documented.",
      impact: "Agents repeatedly solve the same problems, wasting time.",
      solution: "Centralized knowledge base with AI-powered suggestions.",
    },
    {
      problem:
        "No real-time visibility into team performance or resolution times.",
      impact: "Leaders make decisions on gut feel rather than data.",
      solution: "Real-time dashboards and comprehensive reporting.",
    },
  ];

  const outcomes = [
    { icon: Ticket, value: "50–70%", label: "Faster Ticket Resolution" },
    { icon: Headphones, value: "85–95%", label: "Customer Satisfaction Score" },
    { icon: Shield, value: "95–99%", label: "SLA Compliance" },
    { icon: Wrench, value: "2–3x", label: "Tickets Resolved Per Agent" },
    { icon: DollarSign, value: "20–40%", label: "Reduced Support Costs" },
    { icon: BarChart3, value: "Real-time", label: "Support Visibility" },
  ];

  const kpiRows = [
    ["First Response Time", "4–8 hrs", "1–2 minutes", "Near-instant"],
    ["Average Resolution Time", "24–48 hrs", "6–12 hrs", "70% faster"],
    ["Customer Satisfaction Score", "65–75%", "85–95%", "+20%"],
    ["Tickets Resolved / Agent / Day", "15–25", "35–50", "2x improvement"],
    ["SLA Compliance", "60–75%", "95–99%", "+25%"],
    ["Ticket Backlog", "100–500+", "10–50", "90% lower"],
    ["Self-Service Resolution Rate", "10–20%", "40–60%", "3x improvement"],
  ];

  const industries = [
    {
      icon: Cpu,
      title: "IT Service Desk",
      line: "Incident, request & change management for enterprise IT.",
      link: "/it-service-desk-software",
    },
    {
      icon: Headphones,
      title: "Customer Support",
      line: "Unified support across email, chat, social & phone.",
      link: "/customer-support-ticketing-software",
    },
    {
      icon: Code,
      title: "SaaS Companies",
      line: "Billing, technical & onboarding support for software customers.",
      link: "/saas-support-ticketing-software",
    },
    {
      icon: Stethoscope,
      title: "Healthcare",
      line: "Patient inquiries & compliant internal support requests.",
      link: "/healthcare-app-development",
    },
    {
      icon: Wrench,
      title: "Manufacturing",
      line: "Equipment maintenance & supply chain support tickets.",
      link: "/manufacturing-management-software",
    },
    {
      icon: ShoppingBag,
      title: "Retail",
      line: "Omnichannel order, return & store support tickets.",
      link: "/retail-ticketing-software",
    },
    {
      icon: Banknote,
      title: "Finance",
      line: "Client inquiries with security & compliance built in.",
      link: "/finance-service-desk-software",
    },
    {
      icon: GraduationCap,
      title: "Education",
      line: "Student, staff & facility helpdesk ticketing.",
      link: "/education-app-development",
    },
    {
      icon: Truck,
      title: "Logistics",
      line: "Shipment issue & delivery inquiry tracking.",
      link: "/logistics-software-development",
    },
    {
      icon: GovIcon,
      title: "Government",
      line: "Citizen inquiries with security & audit capabilities.",
      link: "/government-ticketing-software",
    },
    {
      icon: Users,
      title: "Internal HR Helpdesk",
      line: "Benefits, payroll & IT access requests, automated.",
      link: "/hr-helpdesk-software",
    },
    {
      icon: Building2,
      title: "Business CRM",
      line: "Streamline sales, customer relationships & workflows.",
      link: "/business-management-crm-solution",
    },
    {
      icon: Package,
      title: "Textile Industry",
      line: "Support ticketing for textile manufacturing operations.",
      link: "/textile-manufacturing-software",
    },
  ];

  const aiCards = [
    {
      icon: Bot,
      title: "AI Ticket Categorization",
      body: "AI automatically categorizes incoming tickets by type, urgency and department for consistent routing.",
    },
    {
      icon: Workflow,
      title: "Intelligent Ticket Routing",
      body: "ML analyzes ticket content and routes requests to the most qualified agent, reducing routing errors.",
    },
    {
      icon: MessageSquare,
      title: "AI Chatbots",
      body: "AI-powered chatbots handle routine inquiries 24/7 and triage complex requests before human handoff.",
    },
    {
      icon: Sparkles,
      title: "Knowledge Suggestions",
      body: "AI recommends relevant knowledge base articles to agents and customers for faster self-service.",
    },
    {
      icon: Eye,
      title: "Sentiment Analysis",
      body: "NLP detects customer sentiment in real time, alerting agents to intervene proactively.",
    },
  ];

  const techStack = [
    {
      icon: Brain,
      title: "AI & Machine Learning",
      body: "NLP, ML and sentiment analysis power intelligent automation throughout the platform.",
    },
    {
      icon: Cpu,
      title: "REST APIs",
      body: "Comprehensive APIs integrate with CRM, ERP and communication platforms.",
    },
    {
      icon: Cloud,
      title: "Cloud Infrastructure",
      body: "Scalable, secure cloud deployment with automatic updates and multi-tenancy.",
    },
    {
      icon: BarChart3,
      title: "Analytics",
      body: "Real-time dashboards and custom reports on performance and trends.",
    },
    {
      icon: Network,
      title: "Automation Layer",
      body: "Workflow automation across assignment, prioritization, escalation and follow-up.",
    },
  ];

  const integrations = [
    { icon: Users, title: "CRM (Salesforce, HubSpot)" },
    { icon: Server, title: "ERP Systems" },
    { icon: MessageSquare, title: "Microsoft Teams & Slack" },
    { icon: FileText, title: "Email-to-Ticket Sync" },
    { icon: Headphones, title: "WhatsApp Business API" },
    { icon: Database, title: "Knowledge Base & BI Platforms" },
  ];

  const useCases = [
    {
      problem:
        "A financial services firm with 2,000+ employees had SLA compliance below 60% on manual IT support.",
      solution:
        "Custom IT ticketing system with automated assignment, prioritization and escalation.",
      outcome: "98% SLA compliance, 65% faster resolution.",
    },
    {
      problem:
        "A fast-growing SaaS company managed email, chat and social support separately.",
      solution:
        "Omnichannel ticketing with automated routing and AI knowledge suggestions.",
      outcome: "Response time dropped from 4 hrs to 2 minutes, CSAT to 91%.",
    },
    {
      problem:
        "A global manufacturer with 5,000+ employees had fragmented internal request channels.",
      solution:
        "Support ticket system with service catalogs and self-service options.",
      outcome: "70% faster request fulfillment, 45% higher satisfaction.",
    },
    {
      problem:
        "A healthcare technology company needed specialized routing for complex support issues.",
      solution:
        "Helpdesk software with AI-powered routing and skill-based assignment.",
      outcome: "55% better first-contact resolution, 70% fewer escalations.",
    },
  ];

  const savings = [
    { label: "Reduced Support Costs", value: "20–40%" },
    { label: "Agent Productivity Gain", value: "2–3x" },
    { label: "Resolution Time Reduction", value: "50–70%" },
    { label: "Lower Escalation Rate", value: "30–50%" },
    { label: "SLA Compliance Gain", value: "95–99%" },
    { label: "ROI Payback Period", value: "6–12 mo" },
  ];

  const readiness = [
    {
      title: "Strategic Readiness",
      items: [
        "Leadership aligned on support transformation priorities",
        "Clear service level objectives defined",
        "Budget allocated for technology investment",
        "Executive sponsor identified",
      ],
    },
    {
      title: "Operational Readiness",
      items: [
        "Support team handles 100+ tickets per day",
        "SLA compliance below 90% and hard to track",
        "Requests arrive through multiple, uncentralized channels",
        "Change management plan considered",
      ],
    },
    {
      title: "Technical Readiness",
      items: [
        "Current ticketing tools assessed",
        "Reporting is manual with no real-time visibility",
        "Integration requirements defined",
        "Security and compliance requirements understood",
      ],
    },
    {
      title: "Team Readiness",
      items: [
        "Agents spend 30%+ of time on manual admin tasks",
        "Knowledge management is fragmented or missing",
        "Champions identified within the organization",
        "Resistance anticipated and addressed",
      ],
    },
  ];

  const journey = [
    {
      title: "Discovery",
      body: "Understand support operations, challenges and objectives.",
    },
    {
      title: "Consultation",
      body: "Discuss challenges, requirements and goals in detail.",
    },
    {
      title: "UI/UX Design",
      body: "Intuitive interfaces for agents and customers.",
    },
    {
      title: "Development",
      body: "Agile sprints with continuous testing.",
    },
    {
      title: "Deployment",
      body: "Go-live with data migration, training and hyper-care support.",
    },
  ];

  const deploymentModels = [
    {
      icon: Cloud,
      title: "Cloud (SaaS)",
      points: [
        "No infrastructure to manage",
        "Automatic updates and maintenance",
        "Scalable for any team size",
      ],
    },
    {
      icon: Network,
      title: "Hybrid",
      points: [
        "Core systems on-premise, auxiliary in cloud",
        "Balance of control and flexibility",
        "Suits specific data residency needs",
      ],
      highlight: true,
    },
    {
      icon: Server,
      title: "On-Premise",
      points: [
        "Full control over data and infrastructure",
        "Meets strict security requirements",
        "Best for government & regulated enterprises",
      ],
    },
  ];

  const security = [
    {
      icon: Lock,
      title: "Data Encryption",
      body: "AES-256 at rest and TLS 1.3 in transit for tickets and customer data.",
    },
    {
      icon: KeyRound,
      title: "Secure Authentication",
      body: "MFA, SSO and enterprise identity provider integration.",
    },
    {
      icon: ClipboardCheck,
      title: "Audit Trail",
      body: "Comprehensive logs supporting audits and incident investigation.",
    },
    {
      icon: Shield,
      title: "Compliance",
      body: "SOC 2 Type II, GDPR, HIPAA and ISO 27001 alignment.",
    },
  ];

  const caseStudies = [
    {
      metric: "98%",
      title: "Financial Services Firm Modernizes IT Helpdesk",
      description:
        "SLA compliance rose from 58% to 98% with 65% faster resolution and 45% higher agent productivity.",
    },
    {
      metric: "91%",
      title: "SaaS Company Transforms Customer Support",
      description:
        "CSAT climbed from 72% to 91% while agents handled 3x more tickets per day.",
    },
    {
      metric: "70%",
      title: "Global Manufacturer Streamlines Employee Requests",
      description:
        "Request fulfillment time dropped 70% with a 55% self-service resolution rate.",
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
        "How AI-Powered Ticketing Systems Transform Customer Support",
        "The ROI of Enterprise Helpdesk Software",
        "5 Ways IT Ticketing Systems Improve Service Desk Performance",
      ],
    },
    {
      icon: FileText,
      label: "Whitepapers",
      items: [
        "The State of AI in Customer Support: Trends and Opportunities",
        "Enterprise Ticketing Systems: Security, Compliance & Governance",
      ],
    },
    {
      icon: BookOpen,
      label: "Guides",
      items: [
        "The Complete Guide to Choosing Ticketing Software",
        "IT Service Desk Software: Requirements & Evaluation Criteria",
      ],
    },
  ];

  const relatedServices = [
    {
      icon: Brain,
      title: "AI Development",
      description:
        "Custom AI solutions for support automation and intelligent routing.",
      to: "/ai-ml-services",
    },
    {
      icon: Code,
      title: "Custom Software Development",
      description:
        "Tailored software built around your exact support workflow.",
      to: "/custom-crm-development",
    },
    {
      icon: Users,
      title: "CRM Development",
      description:
        "Customer relationship management solutions that plug into your helpdesk.",
      to: "/business-management-crm-solution",
    },
    {
      icon: TrendingUp,
      title: "ERP Development",
      description:
        "Enterprise resource planning systems connected to your ticketing data.",
      to: "/enterprise-resource-planning",
    },
    {
      icon: UserCheck,
      title: "Mobile App Development",
      description: "Manage tickets, approvals and alerts from anywhere.",
      to: "/mobile-application",
    },
  ];

  const features = [
    {
      id: "ticket-management",
      title: "Ticket Management — Full Lifecycle, No Gaps",
      sections: [
        {
          heading: "For Support Agents",
          details: [
            "Auto ticket creation (email, chat, social)",
            "Ticket & SLA tracking (live dashboard)",
            "Auto categorization (AI-powered)",
            "Real-time monitoring (live dashboard)",
            "Escalation alerts (before SLA breach)",
            "Task assignment (auto assign to team)",
            "Progress tracking (see status live)",
            "CRM/ERP integration (auto sync)",
          ],
        },
        {
          heading: "For Managers",
          details: [
            "See ticket queue (dashboard)",
            "Track SLA (live)",
            "Find bottlenecks (alerts)",
            "Assign tasks (auto)",
          ],
        },
      ],
    },
    {
      id: "workflow-automation",
      title: "Workflow Automation — Auto Routing, No Missed Tickets",
      sections: [
        {
          heading: "For Support Teams",
          details: [
            "Real-time ticket routing (live status)",
            "Auto escalation alerts (when due, instant)",
            "Multi-channel management (all channels)",
            "Auto priority setting (no manual work)",
            "Document storage (auto-filed)",
            "Approval workflows (1 click)",
            "Compliance tracking (full traceability)",
          ],
        },
        {
          heading: "For Customers",
          details: [
            "See ticket status (portal)",
            "Update requests (live)",
            "Auto reminders (alerts)",
            "Document access (quick)",
          ],
        },
      ],
    },
    {
      id: "sla-management",
      title: "SLA Management — Fast Response, Happy Customers",
      sections: [
        {
          heading: "For Support Teams",
          details: [
            "Auto SLA tracking (custom checkpoints)",
            "Real-time monitoring (live)",
            "Trend analysis (see patterns)",
            "Escalation dispatch tracking (alerts)",
            "Predictive breach alerts (auto assign)",
            "Compliance tracking (standards met)",
            "Audit trail (auto documentation)",
          ],
        },
        {
          heading: "For Customers",
          details: [
            "Submit tickets (app)",
            "Track status (live)",
            "Rate resolution (reports)",
          ],
        },
      ],
    },
    {
      id: "omnichannel-support",
      title: "Omnichannel Helpdesk — Track Requests, No Delays",
      sections: [
        {
          heading: "For Support Leaders",
          details: [
            "Track channel volume (scoring)",
            "Response times (live tracking)",
            "Agent performance (KPIs)",
            "Ticket automation (sync auto)",
            "Escalation tracking (alerts)",
            "Notification automation (auto plan)",
            "Customer communication (live)",
            "CRM integration (auto sync)",
          ],
        },
        {
          heading: "For Agents",
          details: [
            "See tickets (dashboard)",
            "Send updates (auto generate)",
            "Track resolutions (alerts)",
            "Coordinate handoffs (portal)",
          ],
        },
      ],
    },
    {
      id: "knowledge-base",
      title: "Knowledge Base — Prevent Repeat Tickets",
      sections: [
        {
          heading: "For Agents",
          details: [
            "Ticket volume forecasting (auto alerts)",
            "Predictive issue detection (alerts before issues)",
            "Performance monitoring (live KPIs)",
            "Cost tracking (budget management)",
            "Article suggestions (always available)",
            "Usage reports (auto create)",
          ],
        },
        {
          heading: "For Customers",
          details: [
            "See knowledge base (self-service)",
            "Track resolutions (reports)",
            "Escalation alerts (instant)",
          ],
        },
      ],
    },
    {
      id: "ai-chatbot",
      title: "AI Chatbot — Auto Triage, Track Satisfaction",
      sections: [
        {
          heading: "For Support Teams",
          details: [
            "Auto triage (24/7, right process)",
            "Communication optimization (efficient)",
            "Ticket handoff (digital, 5 seconds)",
            "Satisfaction tracking (KPIs live)",
            "Escalation management (terms tracked)",
            "Retention analytics (live)",
          ],
        },
        {
          heading: "For Customers",
          details: [
            "Chat with bot (app)",
            "Get instant answers (5 seconds)",
            "View history (dashboard)",
          ],
        },
      ],
    },
    {
      id: "analytics-reporting",
      title: "Analytics & Reporting — See Performance, Cut Costs",
      sections: [
        {
          heading: "For Leaders",
          details: [
            "Real-time SLA accounting (live)",
            "Ticket costing (per channel)",
            "Efficiency analysis (see returns)",
            "Financial dashboards (KPIs live)",
            "Capacity planning (auto)",
            "Variance analysis (alerts)",
            "ERP integration (sync auto)",
          ],
        },
        {
          heading: "For Managers",
          details: [
            "Track costs (dashboard)",
            "See efficiency (reports)",
            "Budget tracking (live)",
          ],
        },
      ],
    },
    {
      id: "mobile-app",
      title: "Mobile App — Manage Tickets from Phone",
      sections: [
        {
          heading: "For Agents",
          details: [
            "See ticket queue (app, live)",
            "Track SLAs (live)",
            "Approve requests (1 click)",
            "Alerts (push notifications)",
            "Reports (PDF download)",
          ],
        },
        {
          heading: "For Customers",
          details: [
            "Submit tickets (app, 5 seconds)",
            "See ticket status (dashboard)",
            "Report issues (instant)",
          ],
        },
      ],
    },
    {
      id: "security-compliance",
      title: "Security & Compliance — Track All Access Live",
      sections: [
        {
          heading: "For Admins",
          details: [
            "See all access logs (dashboard)",
            "Compliance status (live KPIs)",
            "Breach alerts (instant)",
            "Usage tracking (reports)",
            "Audit efficiency (KPIs)",
          ],
        },
        {
          heading: "For IT Teams",
          details: [
            "Monitor systems (live)",
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
      title: "Custom Software Expertise",
      description: "We Don't Sell One-Size-Fits-All Ticketing Tools",
    },
    {
      id: 2,
      title: "Scalable Solutions",
      description: "Grows With You — From Small Teams to Global Enterprises",
    },
    {
      id: 3,
      title: "AI Development Capabilities",
      description:
        "AI Embedded Throughout — Categorization, Routing, Predictive Support",
    },
    {
      id: 4,
      title: "Enterprise Architecture",
      description:
        "Built for High Ticket Volumes & Enterprise Security — We test 3 times",
    },
    {
      id: 5,
      title: "Agile Development",
      description: "Delivered Quickly With Regular Checkpoints — No disruption",
    },
    {
      id: 6,
      title: "Dedicated Support",
      description: "Long-Term Technology Partnership — We Answer Fast",
    },
  ];

  const processSteps = [
    {
      number: "1",
      title: "Discovery & Assessment",
      description:
        "We understand your support operations, pain points and goals, and document requirements, integration needs and success criteria.",
    },
    {
      number: "2",
      title: "Solution Design",
      description:
        "We design workflows and architecture, configure features and customizations, and plan the data migration and integration approach.",
    },
    {
      number: "3",
      title: "Development & Testing",
      description:
        "Our experts build and configure the platform, migrate data, and run system testing plus user acceptance testing with your team.",
    },
    {
      number: "4",
      title: "Deployment & Support",
      description:
        "We deploy to production with hyper-care support, deliver admin and agent training, and provide ongoing technical support and optimization.",
    },
  ];

  const faqs = [
    {
      question: "What is a ticketing system?",
      answer:
        "A ticketing system is software that manages support requests from creation to resolution. It consolidates inquiries from multiple channels, automates workflows, tracks progress, and provides visibility into support operations. Helpdesk software ensures no request falls through the cracks.",
    },
    {
      question: "How does helpdesk software work?",
      answer:
        "Helpdesk software centralizes support requests from email, chat, social media and other channels into a single platform. Tickets are automatically categorized, prioritized and routed to the right agent. Managers gain real-time visibility into performance.",
    },
    {
      question: "What are the benefits of a ticketing system?",
      answer:
        "A ticketing system improves response times, ensures SLA compliance, increases agent productivity, reduces operational costs, centralizes communication, and improves customer satisfaction. AI ticketing systems deliver additional benefits through automation and intelligence.",
    },
    {
      question: "How much does ticketing software cost?",
      answer:
        "Costs vary based on features, number of agents, deployment model and customizations. Cloud-based solutions typically use subscription pricing, while on-premise involves license fees plus maintenance. Contact Ascentia Labs for a customized quote.",
    },
    {
      question:
        "Can a ticketing system handle multiple communication channels?",
      answer:
        "Yes, modern support ticket software consolidates inquiries from email, chat, social media, phone, SMS and WhatsApp into a single platform, so agents access every interaction from one interface.",
    },
    {
      question: "What is an IT ticketing system?",
      answer:
        "An IT ticketing system is specialized helpdesk software for IT service management, handling incident management, request fulfillment, change management, and asset management for IT service desks.",
    },
    {
      question: "How does AI improve ticketing software?",
      answer:
        "AI enhances ticketing systems through ticket categorization, intelligent routing, auto-prioritization, chatbots, knowledge suggestions, sentiment analysis and predictive support.",
    },
    {
      question: "Is ticketing software secure for enterprise use?",
      answer:
        "Enterprise ticketing systems include role-based access control, data encryption, secure authentication, audit logs, automated backups, and compliance with SOC 2, GDPR and HIPAA.",
    },
    {
      question: "How long does it take to implement a ticketing system?",
      answer:
        "Implementation timeline varies based on complexity, customizations and integrations. Typical implementations range from 4–12 weeks, following a structured, agile delivery process.",
    },
    {
      question: "What deployment options are available for ticketing software?",
      answer:
        "Three deployment models are available: Cloud (SaaS), On-Premise, and Hybrid. Cloud suits most organizations, on-premise offers full control for strict requirements, and hybrid balances both.",
    },
  ];

  const toggleFAQ = (index) => setOpenFAQ(openFAQ === index ? null : index);

  return (
    <div className="min-h-screen bg-white">
      <SEO {...seoData.ticketingSoftware} />
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
                Enterprise Ticketing Software Built for Modern Support
                Operations
              </h1>

              <p className="text-gray-300 leading-relaxed">
                Replace manual processes with intelligent ticketing software
                that automates workflows, prioritizes issues intelligently, and
                gives your team the tools to deliver exceptional service.
              </p>
              <button
                onClick={openConsultation}
                className="bg-gradient-to-r from-amber-400 to-orange-500 text-black px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:from-amber-500 hover:to-orange-600"
              >
                Schedule a Free Consultation →
              </button>
            </div>

            <div className="mt-8 lg:mt-0">
              {/* Top Badge - Ticketing Excellence */}
              <div className="flex justify-center mb-6">
                <div className="bg-white/15 backdrop-blur-lg rounded-xl border border-white/30 shadow-2xl px-5 py-2.5 hover:scale-105 transition-all duration-300">
                  <div className="flex items-center gap-2">
                    <Ticket className="w-7 h-7 text-amber-400" />
                    <h3 className="text-white font-semibold">
                      Complete Support Suite
                    </h3>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {/* Card 1 - Ticket Management */}
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6 group hover:bg-white/20 transition-all duration-300 hover:-translate-y-2">
                  <Ticket className="w-12 h-12 text-amber-400 mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="text-white font-semibold mb-2">
                    Ticket Management
                  </h4>
                  <p className="text-sm text-gray-100">
                    Auto-manage tickets and eliminate manual work.
                  </p>
                </div>

                {/* Card 2 - Workflow Automation */}
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6 group hover:bg-white/20 transition-all duration-300 hover:-translate-y-2">
                  <Workflow className="w-12 h-12 text-blue-400 mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="text-white font-semibold mb-2">
                    Workflow Automation
                  </h4>
                  <p className="text-sm text-gray-100">
                    Auto-route tickets, eliminate missed SLAs.
                  </p>
                </div>

                {/* Card 3 - SLA Management */}
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6 group hover:bg-white/20 transition-all duration-300 hover:-translate-y-2">
                  <LifeBuoy className="w-12 h-12 text-green-400 mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="text-white font-semibold mb-2">
                    SLA Management
                  </h4>
                  <p className="text-sm text-gray-100">
                    Auto-track SLAs, fast escalation response.
                  </p>
                </div>

                {/* Card 4 - Omnichannel Helpdesk */}
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6 group hover:bg-white/20 transition-all duration-300 hover:-translate-y-2">
                  <Headphones className="w-12 h-12 text-purple-400 mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="text-white font-semibold mb-2">
                    Omnichannel Helpdesk
                  </h4>
                  <p className="text-sm text-gray-300">
                    Track email, chat, and calls live.
                  </p>
                </div>
              </div>

              {/* Bottom Stats Row - Ticketing Metrics */}
            </div>
          </div>
        </div>
      </section>
      {/* ===================== INDUSTRY STATISTICS ===================== */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="Market Snapshot"
            title="The Helpdesk Software Market, By the Numbers"
            subtitle="Modern support operations are no longer optional — they're the foundation of customer loyalty."
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
                The State of Support Operations Today
              </h2>
              <p className="text-white leading-relaxed">
                At Ascentia Labs, we design and build custom ticketing software
                that optimizes every stage of the support lifecycle. Our
                solutions empower IT service desks, customer support teams and
                internal helpdesks to streamline workflows, improve efficiency,
                and enhance overall performance.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Faster First Response", value: "1–2 min" },
                { label: "Higher SLA Compliance", value: "95–99%" },
                { label: "Better CSAT Scores", value: "85–95%" },
                { label: "Lower Operational Cost", value: "20–40%" },
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
            subtitle="The urgency for digital transformation in support operations has never been greater."
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
            subtitle="Support operations face a complex web of challenges. Here's how we address each one."
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
            title="Business Outcomes with Ticketing Software"
            subtitle="Tangible, transformative results across every part of your support operation."
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
            title="KPI Dashboard: Manual vs. AI-Powered Ticketing System"
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
            eyebrow="Intelligent Support"
            title="AI & Machine Learning for Ticketing"
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
            subtitle="Your ticketing software works with the systems you already run."
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
            title="Explore Top Features of Our Ticketing Software Solutions"
            subtitle="Comprehensive capabilities designed to optimize your support operations."
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
            subtitle="Most clients recoup their investment within 6–12 months through cost savings and productivity gains."
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
            subtitle="Check 5 or more items and your organization is ready for professional enterprise ticketing software."
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
            title="Case Studies from Support & IT Teams"
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
              Our Ticketing Software Implementation Process
            </h2>
            <p className="text-lg text-gray-300">
              How We Build Your Ticketing System — 4–12 Weeks Total
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
                    Revolutionize Your Support Operations with Our Expertise
                  </h2>
                  <p className="text-xl text-gray-300 mb-8">
                    Why Organizations Choose Ascentia Labs
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
                      Ready to Transform Your Support Operations?
                    </h3>
                    <p className="text-blue-100 mb-6">
                      Join the growing number of organizations that trust our
                      ticketing software to deliver exceptional support
                      experiences and reduce operational costs.
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
                Find answers to common questions about our ticketing software
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

export default TicketingSoftwarePage;
