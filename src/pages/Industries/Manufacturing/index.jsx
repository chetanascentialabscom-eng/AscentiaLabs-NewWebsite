import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Settings,
  DollarSign,
  ChevronDown,
  ChevronUp,
  Shield,
  UserCheck,
  BarChart3,
  Truck,
  CheckCircle2,
  Factory,
  FlaskConical,
  Wrench,
  Shirt,
  Cog,
  Cpu,
  Car,
  HeartPulse,
  Brain,
  TrendingUp,
  Eye,
  Sparkles,
  Network,
  Cloud,
  Server,
  Database,
  Boxes,
  Lock,
  KeyRound,
  ClipboardCheck,
  ArrowRight,
  Code,
  Users,
  UserCog,
  FileText,
  BookOpen,
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

const IndustryCard = ({ icon: Icon, title, line }) => (
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
    <p className="text-xs uppercase tracking-wide text-gray-400 font-semibold mb-1">
      Business Problem
    </p>
    <p className="text-white text-sm mb-3">{problem}</p>
    <div className="text-amber-400 text-xs mb-3">↓</div>
    <p className="text-xs uppercase tracking-wide text-gray-400 font-semibold mb-1">
      Solution
    </p>
    <p className="text-gray-300 text-sm mb-3">{solution}</p>
    <div className="text-amber-400 text-xs mb-3">↓</div>
    <p className="text-xs uppercase tracking-wide text-gray-400 font-semibold mb-1">
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
    <div className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500 mb-3">
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

const ManufacturingPage = () => {
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
      icon: Settings,
      title: "Production Control System",
      description:
        "Plan, schedule and monitor every production run in real time, with automatic bottleneck detection.",
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description:
        "Automate inspections, compliance tracking and defect management at every stage of production.",
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting",
      description:
        "Live production dashboards that turn shop-floor data into decisions and cost savings.",
    },
    {
      icon: Truck,
      title: "Supply Chain Management",
      description:
        "Track suppliers, manage inventory and place orders on time to eliminate stockouts and delays.",
    },
  ];

  const stats = [
    { number: "7+", label: "Business Years" },
    { number: "120+", label: "Projects Delivered" },
    { number: "10+", label: "Industries Catered" },
    { number: "4+", label: "Countries" },
  ];

  const marketStats = [
    { value: "$15.2B", label: "Global Manufacturing Software Market (2026)" },
    { value: "9.8%", label: "Projected CAGR (2026–2031)" },
    { value: "47%", label: "Enterprises Adopting AI in Manufacturing" },
    { value: "45%", label: "Reduction in Unplanned Downtime" },
    { value: "15–25%", label: "Productivity Gain with MES" },
    { value: "20–30%", label: "Inventory Cost Reduction" },
  ];

  const transformationCards = [
    {
      icon: TrendingUp,
      title: "Rising Customer Expectations",
      impact:
        "Buyers demand faster delivery, higher quality and full traceability. Real-time visibility keeps you responsive.",
    },
    {
      icon: Truck,
      title: "Supply Chain Volatility",
      impact:
        "Disruptions are the new normal. Resilient sourcing and dynamic inventory planning protect production.",
    },
    {
      icon: Users,
      title: "Talent Shortages",
      impact:
        "Experienced workers are retiring. Guided workflows capture institutional knowledge for new hires.",
    },
    {
      icon: DollarSign,
      title: "Cost Pressures",
      impact:
        "Raw material costs fluctuate. Optimized usage and reduced waste protect your margins.",
    },
    {
      icon: ClipboardCheck,
      title: "Industry 4.0 Mandates",
      impact:
        "Digital traceability and compliance reporting are now expected by customers and regulators alike.",
    },
  ];

  const challenges = [
    {
      problem: "Manual scheduling causes bottlenecks and idle machines.",
      impact: "Lost throughput and missed delivery commitments.",
      solution:
        "Automated, real-time production scheduling across every stage.",
    },
    {
      problem:
        "Stockouts halt production while excess inventory ties up capital.",
      impact: "Cash locked in inventory that isn't moving.",
      solution: "Automated reorder points and live stock tracking.",
    },
    {
      problem: "Defects reach customers and compliance records are fragmented.",
      impact: "Reputational damage and costly rework.",
      solution: "Quality checks embedded at every production stage.",
    },
    {
      problem: "Supplier delays cascade through the production line.",
      impact: "Unpredictable lead times and idle capacity.",
      solution: "End-to-end supply chain visibility and tracking.",
    },
    {
      problem: "Unplanned breakdowns cause costly downtime.",
      impact: "Emergency repairs and missed output targets.",
      solution: "Maintenance scheduling with predictive alerts.",
    },
    {
      problem: "Manual task assignment leads to uneven workloads.",
      impact: "Lower productivity and inconsistent output.",
      solution: "Workforce planning integrated with production schedules.",
    },
  ];

  const outcomes = [
    { icon: Factory, value: "+15–25%", label: "Production Throughput" },
    { icon: Boxes, value: "20–30%", label: "Inventory Cost Reduction" },
    { icon: Shield, value: "40–60%", label: "Defect Rate Reduction" },
    { icon: Wrench, value: "35–45%", label: "Unplanned Downtime Reduction" },
    { icon: DollarSign, value: "10–20%", label: "Operational Cost Savings" },
    { icon: BarChart3, value: "Real-time", label: "Decision Intelligence" },
  ];

  const kpiRows = [
    ["Production Planning Time", "8–10 hrs/week", "1–2 hrs/week", "80% faster"],
    ["Inventory Accuracy", "70–75%", "98–99%", "+25%"],
    ["On-Time Delivery", "65–75%", "92–95%", "+20–25%"],
    ["Quality Defect Rate", "3–5%", "0.5–1%", "-75%"],
    ["Machine Uptime", "65–75%", "85–90%", "+15–20%"],
    ["Order Fulfillment Time", "5–7 days", "2–3 days", "-50%"],
    ["Labor Productivity", "Baseline", "+20–30%", "+20–30%"],
  ];

  const industries = [
    {
      icon: Cog,
      title: "Discrete Manufacturing",
      line: "Complex BOMs, routing & assembly.",
    },
    {
      icon: FlaskConical,
      title: "Process Manufacturing",
      line: "Batch tracking & recipe management.",
    },
    {
      icon: Wrench,
      title: "Metal & Fabrication",
      line: "Job tracking & CNC integration.",
    },
    {
      icon: Shirt,
      title: "Textile & Apparel",
      line: "Dye-lot tracking & scheduling.",
    },
    {
      icon: Factory,
      title: "Heavy Engineering",
      line: "Project & resource planning.",
    },
    {
      icon: Cpu,
      title: "Electronics",
      line: "Component traceability & SMT lines.",
    },
    {
      icon: Car,
      title: "Auto Components",
      line: "JIT delivery & quality compliance.",
    },
    {
      icon: HeartPulse,
      title: "Medical Devices",
      line: "FDA compliance & sterility assurance.",
    },
  ];

  const aiCards = [
    {
      icon: Wrench,
      title: "Predictive Maintenance",
      body: "ML models analyze machine data to predict failures before they occur, cutting unplanned downtime by up to 45%.",
    },
    {
      icon: TrendingUp,
      title: "Demand Forecasting",
      body: "AI algorithms predict demand with 90%+ accuracy, optimizing inventory and production schedules.",
    },
    {
      icon: Eye,
      title: "Quality Prediction",
      body: "Computer vision detects defects in real time, catching issues before they reach customers.",
    },
    {
      icon: Sparkles,
      title: "Production Optimization",
      body: "AI recommends optimal schedules and adjusts dynamically to real-time shop-floor conditions.",
    },
    {
      icon: Network,
      title: "Supply Chain Intelligence",
      body: "AI monitors supplier performance and risk, automating selection and order optimization.",
    },
  ];

  const techStack = [
    {
      icon: Brain,
      title: "AI & Machine Learning",
      body: "Python, TensorFlow, PyTorch, computer vision for inspection.",
    },
    {
      icon: Cpu,
      title: "Industrial IoT",
      body: "Edge computing and sensor integration for real-time machine data.",
    },
    {
      icon: Cloud,
      title: "Cloud Infrastructure",
      body: "AWS, Azure and Google Cloud with scalable microservices.",
    },
    {
      icon: BarChart3,
      title: "Data Analytics",
      body: "Real-time dashboards and predictive business intelligence.",
    },
    {
      icon: Network,
      title: "Integration Layer",
      body: "API-first architecture connecting ERP, MES, PLC and legacy systems.",
    },
  ];

  const integrations = [
    { icon: Server, title: "ERP (SAP, Oracle, Dynamics)" },
    { icon: Factory, title: "Manufacturing Execution Systems" },
    { icon: Cpu, title: "PLC & SCADA" },
    { icon: Truck, title: "Supply Chain Systems" },
    { icon: Shield, title: "Quality Management Systems" },
    { icon: Database, title: "Legacy Systems" },
  ];

  const useCases = [
    {
      problem:
        "An electronics manufacturer faced constant production bottlenecks.",
      solution: "Automated scheduling with real-time adjustments.",
      outcome: "+30% throughput, no added resources.",
    },
    {
      problem: "An auto components supplier held $2M in excess inventory.",
      solution: "Real-time visibility and automated reorder points.",
      outcome: "40% inventory reduction at 99% service level.",
    },
    {
      problem: "A food processor struggled with quality compliance.",
      solution: "Quality checks integrated at every production stage.",
      outcome: "Defects fell from 4% to 0.5%, saving $500K/year.",
    },
    {
      problem:
        "A heavy machinery manufacturer faced frequent unplanned downtime.",
      solution: "Predictive maintenance across the production line.",
      outcome: "50% less downtime, longer equipment life.",
    },
  ];

  const savings = [
    { label: "Inventory Reduction", value: "20–30%" },
    { label: "Labor Efficiency", value: "15–25%" },
    { label: "Quality Rework Reduction", value: "40–60%" },
    { label: "Maintenance Cost Reduction", value: "20–30%" },
    { label: "Energy Optimization", value: "10–15%" },
    { label: "Total Operational Cost Reduction", value: "15–25%" },
  ];

  const readiness = [
    {
      title: "Operational Readiness",
      items: [
        "Documented production processes",
        "Manually tracked production metrics",
        "Recurring production bottlenecks",
        "Inventory accuracy below 90%",
      ],
    },
    {
      title: "Technology Readiness",
      items: [
        "Basic IT infrastructure in place",
        "Team comfortable with digital tools",
        "Integration requirements identified",
        "Budget allocated for transformation",
      ],
    },
    {
      title: "Organizational Readiness",
      items: [
        "Leadership supports digital transformation",
        "A project champion is identified",
        "Team is open to process change",
        "Success metrics are defined",
      ],
    },
    {
      title: "Strategic Readiness",
      items: [
        "Business objectives are defined",
        "Implementation timeline is set",
        "Deployment options considered",
        "Competitive urgency understood",
      ],
    },
  ];

  const journey = [
    {
      title: "Discovery",
      body: "Understand processes, pain points and success metrics.",
    },
    {
      title: "Solution Design",
      body: "Architecture, integration planning and UX design.",
    },
    { title: "Development", body: "Agile sprints with continuous testing." },
    {
      title: "Deployment",
      body: "Pilot rollout, data migration and training.",
    },
    {
      title: "Optimization",
      body: "Ongoing monitoring and continuous improvement.",
    },
  ];

  const deploymentModels = [
    {
      icon: Cloud,
      title: "Cloud",
      points: [
        "No infrastructure investment",
        "Automatic updates and scaling",
        "Access from anywhere",
      ],
    },
    {
      icon: Network,
      title: "Hybrid",
      points: [
        "Mix of cloud and on-premise",
        "Sensitive data stays on-site",
        "Cloud for analytics and reporting",
      ],
      highlight: true,
    },
    {
      icon: Server,
      title: "On-Premise",
      points: [
        "Full control over data and security",
        "Works in air-gapped environments",
        "One-time capital investment",
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
      body: "Role-based access across every module.",
    },
    {
      icon: ClipboardCheck,
      title: "Audit Trail",
      body: "Tamper-proof, complete activity logging.",
    },
    {
      icon: Shield,
      title: "Compliance",
      body: "ISO 9001, IATF 16949, FDA 21 CFR Part 11, GDPR.",
    },
  ];

  const caseStudies = [
    {
      metric: "$2M",
      title: "Automotive Supplier Cuts Inventory 35%",
      description:
        "On-time delivery improved from 82% to 96% within six months across three plants.",
    },
    {
      metric: "+40%",
      title: "Electronics Manufacturer Boosts Throughput",
      description:
        "Eliminated production bottlenecks without adding new equipment.",
    },
    {
      metric: "0.2%",
      title: "Food Processor Reaches Near Zero Defects",
      description:
        "Defect rates dropped from 3.5% with AI-powered quality inspection.",
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
        "How Manufacturing Management Software Transforms Production",
        "The ROI of Digital Transformation in Manufacturing",
        "AI in Manufacturing: A Practical Guide",
      ],
    },
    {
      icon: FileText,
      label: "Whitepapers",
      items: [
        "Industry 4.0: A Roadmap for Indian Manufacturers",
        "MES: Implementation Best Practices",
      ],
    },
    {
      icon: BookOpen,
      label: "Guides",
      items: [
        "Manufacturing Software Selection Guide",
        "Inventory Optimization for Manufacturers",
      ],
    },
  ];

  const relatedServices = [
    {
      icon: Code,
      title: "Custom Software Development",
      description:
        "Purpose-built systems that match your exact production workflow.",
      to: "/custom-crm-development",
    },
    {
      icon: Brain,
      title: "AI/ML Development",
      description:
        "Predictive maintenance, quality inspection and demand forecasting.",
      to: "/ai-ml-services",
    },
    {
      icon: TrendingUp,
      title: "Digital Transformation",
      description:
        "A clear roadmap from paper-based operations to a connected factory.",
      to: "/digital-transformation",
    },
    {
      icon: Sparkles,
      title: "Application Modernization",
      description: "Upgrade legacy systems without disrupting production.",
      to: "/application-modernisation",
    },
    {
      icon: UserCheck,
      title: "Mobile App Development",
      description: "Manage production, inventory and approvals from anywhere.",
      to: "/mobile-application",
    },
  ];

  const features = [
    {
      id: "production-planning-management",
      title: "Production Planning — Auto Schedule, No Bottlenecks",
      sections: [
        {
          heading: "For Factory Owners",
          details: [
            "Auto production scheduling (10 minutes)",
            "Capacity planning (know max output)",
            "Resource optimization (right machines)",
            "Real-time monitoring (live dashboard)",
            "Bottleneck identification (alerts before delay)",
            "Task assignment (auto assign to team)",
            "Progress tracking (see status live)",
            "Inventory integration (auto material needed)",
          ],
        },
        {
          heading: "For Managers",
          details: [
            "See schedule (dashboard)",
            "Track progress (live)",
            "Find bottlenecks (alerts)",
            "Assign tasks (auto)",
          ],
        },
      ],
    },
    {
      id: "inventory-management-system",
      title: "Inventory Management — Auto Order When Low (No Stockouts)",
      sections: [
        {
          heading: "For Factory Owners",
          details: [
            "Real-time tracking (live stock levels)",
            "Auto stock alerts (when low, instant)",
            "Multi-warehouse management (all locations)",
            "Auto reorder points (no manual work)",
            "Supplier integration (auto-order placed)",
            "Purchase order generation (1 click)",
            "Batch + serial tracking (full traceability)",
          ],
        },
        {
          heading: "For Warehouse Staff",
          details: [
            "See stock levels (dashboard)",
            "Transfer tracking (live)",
            "Auto orders (alerts)",
            "Batch lookup (quick)",
          ],
        },
      ],
    },
    {
      id: "quality-control-assurance",
      title: "Quality Control — 0% Defects Shipped (Auto Checks)",
      sections: [
        {
          heading: "For Quality Teams",
          details: [
            "Auto inspections (custom checkpoints)",
            "Real-time monitoring (live)",
            "Trend analysis (see patterns)",
            "Non-conformance tracking (alerts)",
            "Corrective actions (auto assign)",
            "Compliance management (standards met)",
            "Audit trail (auto documentation)",
          ],
        },
        {
          heading: "For Owners",
          details: [
            "See quality (dashboard)",
            "Track defects (live)",
            "Compliance status (reports)",
          ],
        },
      ],
    },
    {
      id: "supply-chain-management",
      title: "Supply Chain — Track Suppliers, No Delays",
      sections: [
        {
          heading: "For Owners",
          details: [
            "Track supplier quality (ratings)",
            "Delivery times (live tracking)",
            "Supplier performance (KPIs)",
            "Procurement automation (RFQ auto)",
            "Contract tracking (alerts)",
            "Logistics optimization (auto plan)",
            "Delivery tracking (live)",
            "Vendor portal (chat with suppliers)",
          ],
        },
        {
          heading: "For Procurement",
          details: [
            "See suppliers (dashboard)",
            "Send RFQ (auto generate)",
            "Track contracts (alerts)",
            "Coordinate shipping (portal)",
          ],
        },
      ],
    },
    {
      id: "maintenance-management",
      title: "Maintenance — Prevent Breakdowns (No Surprises)",
      sections: [
        {
          heading: "For Maintenance Teams",
          details: [
            "Preventive schedules (auto reminders)",
            "Predictive maintenance (alerts before break)",
            "Performance monitoring (live KPIs)",
            "Cost tracking (budget management)",
            "Spare parts auto-reorder (always available)",
            "Work orders (auto create)",
          ],
        },
        {
          heading: "For Owners",
          details: [
            "See maintenance (dashboard)",
            "Track costs (reports)",
            "Breakdown alerts (instant)",
          ],
        },
      ],
    },
    {
      id: "workforce-management",
      title: "Workforce — Auto Schedules, Track Performance",
      sections: [
        {
          heading: "For Managers",
          details: [
            "Auto scheduling (skill-based, right people)",
            "Shift optimization (efficient)",
            "Time + attendance (digital, 5 seconds)",
            "Productivity tracking (KPIs live)",
            "Training management (certifications tracked)",
            "Performance analytics (live)",
          ],
        },
        {
          heading: "For Employees",
          details: [
            "See schedule (app)",
            "Mark attendance (5 seconds)",
            "View training (dashboard)",
          ],
        },
      ],
    },
    {
      id: "financial-reporting",
      title: "Financial Reporting — See Profits, Cut Costs",
      sections: [
        {
          heading: "For Owners",
          details: [
            "Real-time cost accounting (live)",
            "Job costing (per project)",
            "Profitability analysis (see profits)",
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
            "See profits (reports)",
            "Budget tracking (live)",
          ],
        },
      ],
    },
    {
      id: "mobile-app",
      title: "Mobile App — Manage Factory from Phone",
      sections: [
        {
          heading: "For Managers",
          details: [
            "See production (app, live)",
            "Track inventory (live)",
            "Approve orders (1 click)",
            "Alerts (push notifications)",
            "Reports (PDF download)",
          ],
        },
        {
          heading: "For Workers",
          details: [
            "Mark attendance (app, 5 seconds)",
            "See schedule (dashboard)",
            "Report issues (instant)",
          ],
        },
      ],
    },
    {
      id: "machine-monitoring",
      title: "Machine Monitoring — Track All Machines Live",
      sections: [
        {
          heading: "For Owners",
          details: [
            "See all machines (dashboard)",
            "Performance (live KPIs)",
            "Breakdown alerts (instant)",
            "Usage tracking (reports)",
            "Efficiency (KPIs)",
          ],
        },
        {
          heading: "For Maintenance",
          details: [
            "Monitor machines (live)",
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
      description: "We Know Manufacturing",
    },
    {
      id: 2,
      title: "Scalable Solutions",
      description: "Grows With You — From Small to Large Factory",
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
      title: "Learn Your Factory",
      description:
        "We conduct comprehensive analysis of your manufacturing processes, identifying key challenges, operational requirements, and opportunities for digital transformation.",
    },
    {
      number: "2",
      title: "Custom Design",
      description:
        "We design a tailored manufacturing management platform that aligns with your production model, incorporating IoT integration, predictive analytics, and automated workflows.",
    },
    {
      number: "3",
      title: "Build + Test",
      description:
        "Our experts develop and deploy the solution with seamless integration to existing systems, ERP platforms, and manufacturing equipment, with minimal disruption.",
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
      question: "What is manufacturing management software?",
      answer:
        "A digital platform that helps manufacturers plan, execute and monitor production. It typically includes production scheduling, inventory management, quality control and supply chain management in one place.",
    },
    {
      question: "How does it improve production efficiency?",
      answer:
        "By automating scheduling, surfacing bottlenecks in real time, and connecting production with business systems for end-to-end efficiency.",
    },
    {
      question: "What's the difference between MES and ERP?",
      answer:
        "MES focuses on shop-floor operations — scheduling, quality and machine monitoring. ERP handles broader business functions like finance and procurement. They work best integrated together.",
    },
    {
      question: "How long does implementation take?",
      answer:
        "Typically 8–12 weeks for a single plant, depending on complexity and customization needs.",
    },
    {
      question: "Can it integrate with my existing ERP?",
      answer:
        "Yes — we build integrations with SAP, Oracle, Microsoft Dynamics and other ERP systems.",
    },
    {
      question: "Is it suitable for small manufacturers?",
      answer:
        "Absolutely. We offer manufacturing software for small business that scales as you grow.",
    },
    {
      question: "What ROI can I expect?",
      answer:
        "Most clients see ROI within 6–12 months, with 15–25% lower operational costs and measurable gains in throughput and quality.",
    },
    {
      question: "Do you offer cloud-based deployment?",
      answer:
        "Yes — our cloud manufacturing software offers flexibility, scalability and lower upfront costs.",
    },
    {
      question: "How secure is the software?",
      answer:
        "Enterprise-grade security with encryption, role-based access controls and regular audits.",
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
      <SEO {...seoData.manufacturing} />
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
            <div className="text-white space-y-6 py-8 lg:py-10">
              <h1 className="text-3xl md:text-4xl leading-tight">
                Manufacturing Management Software – Production, Inventory,
                Quality & Supply Chain Solutions
              </h1>

              <p className="text-gray-300 leading-relaxed">
                In today's competitive manufacturing landscape, efficiency isn't
                just an advantage—it's a necessity. Manufacturing management
                software empowers factory owners, production managers, and
                operations leaders to streamline production, optimize inventory,
                maintain quality standards, and strengthen supply chains—all
                from a single, integrated platform.
              </p>
              <p className="text-gray-300 leading-relaxed">
                At Ascentia Labs, we build custom manufacturing software
                solutions that help Indian manufacturers and global enterprises
                digitize operations, reduce costs, and scale production without
                compromising quality.
              </p>
              <button
                onClick={openConsultation}
                className="bg-gradient-to-r from-amber-400 to-orange-500 text-black px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:from-amber-500 hover:to-orange-600"
              >
                Get a Free Consultation →
              </button>
            </div>

            <div className="mt-8 lg:mt-0">
              {/* Top Badge - Manufacturing Excellence */}
              <div className="flex justify-center mb-6">
                <div className="bg-white/15 backdrop-blur-lg rounded-xl border border-white/30 shadow-2xl px-5 py-2.5 hover:scale-105 transition-all duration-300">
                  <div className="flex items-center gap-2">
                    <Factory className="w-7 h-7 text-amber-400" />
                    <h3 className="text-white font-semibold">
                      Complete Manufacturing Suite
                    </h3>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {/* Card 1 - Production Planning */}
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6 group hover:bg-white/20 transition-all duration-300 hover:-translate-y-2">
                  <Settings className="w-12 h-12 text-amber-400 mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="text-white font-semibold mb-2">
                    Production Planning
                  </h4>
                  <p className="text-sm text-gray-100">
                    Auto-schedule production and eliminate bottlenecks.
                  </p>
                </div>

                {/* Card 2 - Inventory Management */}
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6 group hover:bg-white/20 transition-all duration-300 hover:-translate-y-2">
                  <Boxes className="w-12 h-12 text-blue-400 mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="text-white font-semibold mb-2">
                    Inventory Management
                  </h4>
                  <p className="text-sm text-gray-100">
                    Auto-reorder stock, eliminate stockouts.
                  </p>
                </div>

                {/* Card 3 - Quality Control */}
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6 group hover:bg-white/20 transition-all duration-300 hover:-translate-y-2">
                  <Shield className="w-12 h-12 text-green-400 mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="text-white font-semibold mb-2">
                    Quality Control
                  </h4>
                  <p className="text-sm text-gray-100">
                    Auto-inspect defects, ship zero defects.
                  </p>
                </div>

                {/* Card 4 - Supply Chain */}
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6 group hover:bg-white/20 transition-all duration-300 hover:-translate-y-2">
                  <Truck className="w-12 h-12 text-purple-400 mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="text-white font-semibold mb-2">
                    Supply Chain Tracking
                  </h4>
                  <p className="text-sm text-gray-300">
                    Track suppliers, deliveries, and delays live.
                  </p>
                </div>
              </div>

              {/* Bottom Stats Row - Manufacturing Metrics */}
            </div>
          </div>
        </div>
      </section>
      {/* ===================== INDUSTRY STATISTICS ===================== */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="Market Snapshot"
            title="The Manufacturing Software Market, By the Numbers"
            subtitle="Manufacturing software is no longer optional — it's the backbone of competitive factory operations."
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
                The State of Manufacturing Today
              </h2>
              <p className="text-white leading-relaxed">
                Manufacturing is moving from reactive, paper-based operations to
                proactive, data-driven production. Modern platforms integrate
                production planning, inventory control, quality assurance and
                supply chain visibility into one digital workflow.
              </p>
              <p className="text-gray-300 leading-relaxed">
                For Indian manufacturers, that shift is accelerating: software
                is becoming more accessible for small factories, while larger
                enterprises invest in engineering and simulation tools to design
                and test production systems before committing resources.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Faster Planning", value: "80%" },
                { label: "Higher Inventory Accuracy", value: "98%+" },
                { label: "Better On-Time Delivery", value: "92–95%" },
                { label: "Lower Defect Rate", value: "0.5–1%" },
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
            subtitle="The urgency for digital transformation in manufacturing has never been greater."
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
            subtitle="Manufacturing operations face a complex web of challenges. Here's how we address each one."
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
            title="Business Outcomes with Manufacturing Software"
            subtitle="Tangible, transformative results across every part of the factory."
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

      {/* ===================== KPI COMPARISON TABLE ===================== */}
      <section className="py-16 bg-gradient-to-br  from-gray-900 via-blue-900 to-black relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black to-transparent pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-black pointer-events-none"></div>
        <div className="container mx-auto px-4 ">
          <SectionHeading
            eyebrow="Before vs. After"
            title="KPI Dashboard: Manual vs. Manufacturing Software"
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
            {industries.map((ind, i) => (
              <IndustryCard
                key={i}
                icon={ind.icon}
                title={ind.title}
                line={ind.line}
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
            eyebrow="Intelligent Manufacturing"
            title="AI & Machine Learning for Manufacturing"
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
            subtitle="Your manufacturing software works with the systems you already run."
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
            title="Explore Top Features of Our Manufacturing Management Solutions"
            subtitle="Comprehensive capabilities designed to optimize your production processes."
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
            subtitle="Check 6 or more items and you're ready to explore a manufacturing management platform."
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
            title="Case Studies from Real Manufacturers"
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
              Our Manufacturing Development Implementation Process
            </h2>
            <p className="text-lg text-gray-300">
              How We Build Your Manufacturing Software — 8 Weeks Total
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
                    Revolutionize Your Manufacturing Operations with Our
                    Expertise
                  </h2>
                  <p className="text-xl text-gray-300 mb-8">
                    Why Manufacturing Companies in India Choose Us
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
                      Ready to Transform Your Manufacturing Operations?
                    </h3>
                    <p className="text-blue-100 mb-6">
                      Join industry leaders who trust our manufacturing
                      management solutions to optimize their production
                      processes and boost efficiency.
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

      {/* ===================== RELATED SERVICES ===================== */}
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

      {/* ============================= FAQ (existing) ============================= */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent md:text-4xl mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-300">
                Find answers to common questions about our manufacturing
                management solutions
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

export default ManufacturingPage;
