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
  HeartPulse,
  Activity,
  ShieldCheck,
  ClipboardPlus,
  UserRound,
  Microscope,
  FileHeart,
  Syringe,
  Monitor,
  Hospital,
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

const HealthcarePage = () => {
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
      icon: Hospital,
      title: "Hospital Management System",
      description:
        "Centralize admissions, scheduling, billing and reporting in real time, with automated alerts across every department.",
    },
    {
      icon: Shield,
      title: "Compliance & Records Tracking",
      description:
        "Automate patient onboarding, HIPAA compliance and documentation tracking at every stage of the care lifecycle.",
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting",
      description:
        "Live clinical and financial dashboards that turn patient data into decisions and cost savings.",
    },
    {
      icon: HeartPulse,
      title: "Healthcare CRM & Patient Engagement",
      description:
        "Track patients, manage communication and improve retention with a centralized healthcare CRM.",
    },
  ];

  const stats = [
    { number: "7+", label: "Business Years" },
    { number: "120+", label: "Projects Delivered" },
    { number: "10+", label: "Industries Catered" },
    { number: "4+", label: "Countries" },
  ];

  const marketStats = [
    { value: "$506.99B", label: "HCS Software & Services Market (2025)" },
    { value: "$38.50B", label: "Global Healthcare Software Market (2025)" },
    { value: "$18.42B", label: "Custom Healthcare Software Market (2025)" },
    { value: "$464.40B", label: "Healthcare IT Market (2025)" },
    { value: "96%", label: "U.S. Hospital EMR/EHR Adoption Rate" },
    { value: "65%", label: "Hospitals Planning EMR/EHR Expansion (2026)" },
  ];

  const transformationCards = [
    {
      icon: TrendingUp,
      title: "Rising Patient Expectations",
      impact:
        "Patients expect online scheduling, digital records access and telemedicine. Modern patient portals keep you competitive.",
    },
    {
      icon: ShieldCheck,
      title: "Regulatory & Compliance Pressures",
      impact:
        "EMR and EHR software are essential for documentation requirements, data privacy and demonstrating quality of care.",
    },
    {
      icon: Network,
      title: "Interoperability Requirements",
      impact:
        "Care coordination demands seamless data exchange with labs, pharmacies and imaging centers.",
    },
    {
      icon: Users,
      title: "Staff Shortages and Burnout",
      impact:
        "Administrative burden drives clinician burnout. Automated workflows free providers to focus on patient care.",
    },
    {
      icon: DollarSign,
      title: "Revenue Cycle Optimization",
      impact:
        "Manual billing leads to errors and delayed payments. Automated claims management accelerates revenue cycles.",
    },
  ];

  const challenges = [
    {
      problem:
        "Multiple disconnected systems for scheduling, billing and documentation.",
      impact: "Data silos, errors and frustrated staff.",
      solution:
        "Integrated hospital management software connecting every department.",
    },
    {
      problem: "Paper-based patient registration, charting and billing.",
      impact: "Hours of administrative time and frequent errors.",
      solution: "Clinic management software that automates paperwork.",
    },
    {
      problem: "Manual billing processes and high claim denial rates.",
      impact: "Revenue cycle gaps and financial strain.",
      solution: "Medical billing software with automated claims processing.",
    },
    {
      problem: "High no-show rates without automated reminders.",
      impact: "Lost revenue and reduced patient access.",
      solution: "Healthcare scheduling software with automated reminders.",
    },
    {
      problem: "No patient portal or healthcare CRM for engagement.",
      impact: "Declining patient satisfaction and retention.",
      solution: "Patient portal and healthcare CRM for digital engagement.",
    },
    {
      problem: "Difficulty keeping up with HIPAA and other regulations.",
      impact: "Risk of fines and reputational damage.",
      solution: "Healthcare compliance software with automated audit trails.",
    },
  ];

  const outcomes = [
    { icon: ClipboardPlus, value: "70%", label: "Faster Patient Registration" },
    { icon: HeartPulse, value: "85–95%", label: "Patient Satisfaction Score" },
    { icon: DollarSign, value: "3–5%", label: "Claim Denial Rate" },
    { icon: FileHeart, value: "60%", label: "Less Documentation Time" },
    { icon: ShieldCheck, value: "Low-Medium", label: "Compliance Effort" },
    { icon: BarChart3, value: "High", label: "Operational Efficiency" },
  ];

  const kpiRows = [
    ["Patient Registration Time", "15–20 min", "2–5 min", "80% faster"],
    [
      "Appointment Scheduling Time",
      "5–10 min/call",
      "1–2 min (online)",
      "80% faster",
    ],
    ["Medical Billing Claim Denial Rate", "15–25%", "3–5%", "80% reduction"],
    ["Revenue Cycle Time", "30–60 days", "10–15 days", "70% faster"],
    ["No-Show Rate", "20–30%", "5–10%", "60–70% lower"],
    [
      "Clinical Documentation Time",
      "30–45 min/visit",
      "10–15 min/visit",
      "65% faster",
    ],
    ["Patient Satisfaction Score", "65–75%", "85–95%", "+20%"],
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
      icon: Brain,
      title: "Clinical Decision Support",
      body: "AI analyzes patient data to provide evidence-based recommendations, drug interaction alerts and treatment protocols.",
    },
    {
      icon: TrendingUp,
      title: "Predictive Analytics",
      body: "Machine learning predicts patient outcomes, readmission risks and disease progression for earlier intervention.",
    },
    {
      icon: Microscope,
      title: "Medical Image Analysis",
      body: "AI analyzes X-rays, MRIs and CT scans to detect abnormalities and assist diagnosis, boosting radiologist efficiency.",
    },
    {
      icon: Sparkles,
      title: "Natural Language Processing",
      body: "NLP extracts structured data from clinical notes, improving documentation, coding and analytics.",
    },
    {
      icon: DollarSign,
      title: "Revenue Cycle Optimization",
      body: "AI analyzes billing patterns to predict denials, flag coding errors and improve collection rates.",
    },
  ];

  const techStack = [
    {
      icon: Brain,
      title: "AI & Machine Learning",
      body: "Predictive analytics, NLP, computer vision and ML models for intelligent clinical features.",
    },
    {
      icon: FileHeart,
      title: "Interoperability Standards",
      body: "HL7, FHIR and DICOM support for seamless data exchange with other healthcare systems.",
    },
    {
      icon: Cloud,
      title: "Cloud Infrastructure",
      body: "Scalable, secure cloud deployment with multi-tenancy for single and multi-location organizations.",
    },
    {
      icon: BarChart3,
      title: "Analytics & BI",
      body: "Real-time dashboards, custom reports and data visualization for performance visibility.",
    },
    {
      icon: Network,
      title: "REST APIs",
      body: "Comprehensive APIs enabling integration with EHR, billing, lab and pharmacy systems.",
    },
  ];

  const integrations = [
    { icon: FileHeart, title: "EHR / EMR Systems" },
    { icon: DollarSign, title: "Medical Billing Software" },
    { icon: Microscope, title: "Laboratory Information Systems" },
    { icon: Syringe, title: "Pharmacy Systems" },
    { icon: Monitor, title: "Imaging Systems (PACS)" },
    { icon: HeartPulse, title: "Patient Portals & Telehealth" },
  ];

  const useCases = [
    {
      problem:
        "A 300-bed multi-specialty hospital struggled with fragmented admissions, billing and documentation.",
      solution:
        "Comprehensive hospital management system with integrated EHR, billing, scheduling and reporting.",
      outcome: "70% faster registration, revenue cycle cut from 45 to 12 days.",
    },
    {
      problem:
        "A 50-provider multi-specialty practice needed to move from paper charts to EHR software.",
      solution:
        "Custom EHR with specialty-specific workflows, voice recognition and patient portal.",
      outcome: "60% less documentation time, 40% higher patient satisfaction.",
    },
    {
      problem:
        "A medical billing company managing 200+ providers had high denial rates.",
      solution:
        "Medical billing software with automated claims processing and denial management.",
      outcome: "Denials dropped from 22% to 4%, 60% faster revenue cycle.",
    },
    {
      problem:
        "A chain of 25 urgent care centers needed a unified clinic management system.",
      solution: "Cloud-based platform with centralized scheduling and billing.",
      outcome: "45% better operational efficiency, expanded to 40 locations.",
    },
  ];

  const savings = [
    { label: "Administrative Cost Reduction", value: "20–40%" },
    { label: "Revenue Cycle Improvement", value: "50–70%" },
    { label: "Provider Productivity Gain", value: "20–30%" },
    { label: "Operational Cost Reduction", value: "15–25%" },
    { label: "Time to ROI", value: "6–12 mo" },
    { label: "Documentation Time Saved", value: "60%" },
  ];

  const readiness = [
    {
      title: "Strategic Readiness",
      items: [
        "Leadership aligned on digital transformation priorities",
        "Clear clinical and operational objectives defined",
        "Budget allocated for technology investment",
        "Executive sponsor identified",
      ],
    },
    {
      title: "Operational Readiness",
      items: [
        "Current clinical workflows documented",
        "Pain points and bottlenecks identified",
        "Key clinical and admin stakeholders engaged",
        "Change management plan considered",
      ],
    },
    {
      title: "Technical Readiness",
      items: [
        "Current EHR/EMR stack assessed",
        "Data quality and availability evaluated",
        "Integration requirements defined (labs, pharmacy, imaging)",
        "HIPAA and compliance requirements understood",
      ],
    },
    {
      title: "Team Readiness",
      items: [
        "Clinical staff informed about upcoming changes",
        "Training needs assessed",
        "Champions identified within the organization",
        "Resistance anticipated and addressed",
      ],
    },
  ];

  const journey = [
    {
      title: "Discovery",
      body: "Understand clinical workflows, challenges and objectives.",
    },
    {
      title: "Consultation",
      body: "Discuss requirements and demonstrate fit.",
    },
    {
      title: "Planning",
      body: "Define requirements, integrations and data migration.",
    },
    {
      title: "Development",
      body: "Agile sprints with continuous testing and UAT.",
    },
    {
      title: "Deployment",
      body: "Go-live with training and hyper-care support.",
    },
  ];

  const deploymentModels = [
    {
      icon: Cloud,
      title: "Cloud (SaaS)",
      points: [
        "No hardware to manage",
        "Automatic updates and maintenance",
        "Scalable for any practice size",
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
        "Customizable to security needs",
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
      title: "Secure Authentication",
      body: "Multi-factor authentication, SSO and strong password policies.",
    },
    {
      icon: ClipboardCheck,
      title: "Audit Logs",
      body: "Comprehensive audit trails for every access and data change.",
    },
    {
      icon: ShieldCheck,
      title: "Compliance",
      body: "HIPAA, GDPR, SOC 2 Type II, and ISO 27001 alignment.",
    },
  ];

  const caseStudies = [
    {
      metric: "70%",
      title: "Multi-Specialty Hospital Modernizes Operations",
      description:
        "A 300-bed hospital cut registration time by 70% and shortened revenue cycle from 45 to 12 days.",
    },
    {
      metric: "60%",
      title: "Medical Practice Transitions to EHR",
      description:
        "A 50-provider practice reduced documentation time by 60% and improved satisfaction by 40%.",
    },
    {
      metric: "45%",
      title: "Urgent Care Chain Deploys Clinic Management System",
      description:
        "25 centers improved operational efficiency by 45% and expanded to 40 locations.",
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
        "How EHR Software Transforms Healthcare Delivery",
        "The ROI of Hospital Management Software",
        "5 Ways Medical Billing Software Improves Revenue Cycle Management",
      ],
    },
    {
      icon: FileText,
      label: "Whitepapers",
      items: [
        "The State of Digital Transformation in Healthcare",
        "Healthcare Software Security: Compliance and Best Practices",
      ],
    },
    {
      icon: BookOpen,
      label: "Guides",
      items: [
        "The Complete Guide to Choosing EHR Software",
        "Medical Practice Management Software: Features and Evaluation Criteria",
      ],
    },
  ];

  const relatedServices = [
    {
      icon: Code,
      title: "Custom Software Development",
      description:
        "Tailored software for any healthcare need and clinical workflow.",
      to: "/custom-crm-development",
    },
    {
      icon: Brain,
      title: "AI/ML Development",
      description:
        "Clinical decision support, predictive analytics and image analysis.",
      to: "/ai-ml-services",
    },
    {
      icon: TrendingUp,
      title: "Digital Transformation",
      description:
        "A clear roadmap from paper charts to a connected care platform.",
      to: "/digital-transformation",
    },
    {
      icon: Sparkles,
      title: "Application Modernization",
      description: "Upgrade legacy EMR systems without disrupting care.",
      to: "/application-modernisation",
    },
    {
      icon: UserCheck,
      title: "Mobile App Development",
      description: "Manage records, scheduling and billing from anywhere.",
      to: "/mobile-application",
    },
  ];

  const features = [
    {
      id: "hospital-management",
      title: "Hospital Management — Full Lifecycle, No Gaps",
      sections: [
        {
          heading: "For Administrators",
          details: [
            "Auto patient registration (2–5 minutes)",
            "Admissions & bed tracking (live dashboard)",
            "Billing automation (auto claims)",
            "Real-time monitoring (live dashboard)",
            "Compliance alerts (before it hurts audits)",
            "Task assignment (auto assign to team)",
            "Progress tracking (see status live)",
            "Accounting integration (auto sync)",
          ],
        },
        {
          heading: "For Executives",
          details: [
            "See hospital performance (dashboard)",
            "Track occupancy (live)",
            "Find bottlenecks (alerts)",
            "Assign tasks (auto)",
          ],
        },
      ],
    },
    {
      id: "ehr-management",
      title: "Electronic Health Records — Complete, Accurate, Instant",
      sections: [
        {
          heading: "For Clinicians",
          details: [
            "Real-time patient records (live status)",
            "Clinical decision support alerts (instant)",
            "Multi-specialty workflows (all departments)",
            "Voice recognition documentation (no manual work)",
            "Document storage (auto-filed)",
            "E-prescribing integration (1 click)",
            "Compliance tracking (full traceability)",
          ],
        },
        {
          heading: "For Patients",
          details: [
            "See records (portal)",
            "Request refills (live)",
            "Auto reminders (alerts)",
            "Document access (quick)",
          ],
        },
      ],
    },
    {
      id: "billing-tracking",
      title: "Medical Billing — Fast Claims, Fewer Denials",
      sections: [
        {
          heading: "For Billing Teams",
          details: [
            "Auto claims creation (custom checkpoints)",
            "Real-time monitoring (live)",
            "Denial trend analysis (see patterns)",
            "Payer dispatch tracking (alerts)",
            "Predictive denial flags (auto assign)",
            "Cost tracking (standards met)",
            "Audit trail (auto documentation)",
          ],
        },
        {
          heading: "For Patients",
          details: [
            "See billing status (app)",
            "Track claims (live)",
            "Pay bills (portal)",
          ],
        },
      ],
    },
    {
      id: "healthcare-crm",
      title: "Healthcare CRM — Track Patients, No Delays",
      sections: [
        {
          heading: "For Practice Managers",
          details: [
            "Track patient engagement (scoring)",
            "Follow-up times (live tracking)",
            "Staff performance (KPIs)",
            "Reminder automation (sync auto)",
            "Referral tracking (alerts)",
            "Marketing automation (auto plan)",
            "Patient communication (live)",
            "EHR integration (auto sync)",
          ],
        },
        {
          heading: "For Front Desk",
          details: [
            "See patient queue (dashboard)",
            "Send follow-ups (auto generate)",
            "Track no-shows (alerts)",
            "Coordinate appointments (portal)",
          ],
        },
      ],
    },
    {
      id: "healthcare-analytics",
      title: "Healthcare Analytics — Prevent Surprises",
      sections: [
        {
          heading: "For Leadership",
          details: [
            "Patient outcome forecasting (auto alerts)",
            "Predictive readmission risk (alerts before issues)",
            "Performance monitoring (live KPIs)",
            "Cost tracking (budget management)",
            "Scenario modeling (always available)",
            "Population health reports (auto create)",
          ],
        },
        {
          heading: "For Clinicians",
          details: [
            "See patient risk (dashboard)",
            "Track outcomes (reports)",
            "Risk alerts (instant)",
          ],
        },
      ],
    },
    {
      id: "patient-management",
      title: "Patient Management — Auto Communication, Track Satisfaction",
      sections: [
        {
          heading: "For Staff",
          details: [
            "Auto onboarding (document-based, right process)",
            "Communication optimization (efficient)",
            "Payment tracking (digital, 5 seconds)",
            "Satisfaction tracking (KPIs live)",
            "Appointment management (terms tracked)",
            "Retention analytics (live)",
          ],
        },
        {
          heading: "For Patients",
          details: [
            "See records (app)",
            "Pay bills (5 seconds)",
            "View documents (dashboard)",
          ],
        },
      ],
    },
    {
      id: "revenue-analytics",
      title: "Revenue Cycle Analytics — See Returns, Cut Costs",
      sections: [
        {
          heading: "For Finance Teams",
          details: [
            "Real-time cost accounting (live)",
            "Claims costing (per case)",
            "Profitability analysis (see returns)",
            "Financial dashboards (KPIs live)",
            "Budget planning (auto)",
            "Variance analysis (alerts)",
            "ERP integration (sync auto)",
          ],
        },
        {
          heading: "For Administrators",
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
      title: "Mobile App — Manage Care from Phone",
      sections: [
        {
          heading: "For Providers",
          details: [
            "See schedule (app, live)",
            "Track patient records (live)",
            "Approve requests (1 click)",
            "Alerts (push notifications)",
            "Reports (PDF download)",
          ],
        },
        {
          heading: "For Patients",
          details: [
            "Pay bills (app, 5 seconds)",
            "See appointment status (dashboard)",
            "Report issues (instant)",
          ],
        },
      ],
    },
    {
      id: "facility-monitoring",
      title: "Facility & Equipment Monitoring — Track All Assets Live",
      sections: [
        {
          heading: "For Administrators",
          details: [
            "See all facilities (dashboard)",
            "Performance (live KPIs)",
            "Issue alerts (instant)",
            "Usage tracking (reports)",
            "Efficiency (KPIs)",
          ],
        },
        {
          heading: "For Facility Teams",
          details: [
            "Monitor equipment (live)",
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
      title: "Healthcare Software Expertise",
      description:
        "We Know Healthcare — Clinical Workflows, Regulations & Interoperability",
    },
    {
      id: 2,
      title: "Custom Solutions",
      description: "No One-Size-Fits-All — Built for Your Clinical Workflows",
    },
    {
      id: 3,
      title: "Enterprise Architecture",
      description: "Handles High Volumes & Complex Workflows Securely",
    },
    {
      id: 4,
      title: "AI Development Capabilities",
      description: "Clinical Decision Support to Revenue Cycle Optimization",
    },
    {
      id: 5,
      title: "Scalable Solutions",
      description: "From Small Practices to Large Hospital Networks",
    },
    {
      id: 6,
      title: "Dedicated Support",
      description: "Comprehensive Implementation, Training & Ongoing Support",
    },
  ];

  const processSteps = [
    {
      number: "1",
      title: "Discovery & Assessment",
      description:
        "We understand your clinical workflows, operations, pain points, and goals, documenting requirements and success criteria.",
    },
    {
      number: "2",
      title: "Solution Design",
      description:
        "We design architecture and workflows, configure features, and plan data migration and integration with existing systems.",
    },
    {
      number: "3",
      title: "Build + Test",
      description:
        "Our experts develop and deploy the solution with integration testing and user acceptance testing across clinical stakeholders.",
    },
    {
      number: "4",
      title: "Train + Start",
      description:
        "We provide comprehensive training, hyper-care go-live support, and ongoing monitoring to maximize adoption and ROI.",
    },
  ];

  const faqs = [
    {
      question: "What is healthcare software development?",
      answer:
        "Healthcare software development is the process of designing, building, and deploying software solutions for healthcare organizations. It includes EHR software, EMR systems, hospital management software, medical billing software, and other healthcare IT solutions that streamline clinical and administrative operations.",
    },
    {
      question: "What is the difference between EHR and EMR software?",
      answer:
        "EMR software (Electronic Medical Record) is a digital version of a patient's paper chart within a single practice. EHR software (Electronic Health Record) is a more comprehensive record that can be shared across different healthcare providers and is designed to be interoperable across the healthcare system.",
    },
    {
      question: "What are the benefits of hospital management software?",
      answer:
        "Hospital management software centralizes admissions, scheduling, billing, clinical documentation, and reporting. It improves operational efficiency, reduces errors, enhances patient experience, and provides real-time visibility into hospital performance.",
    },
    {
      question: "How much does healthcare software cost?",
      answer:
        "Costs vary based on features, number of users, deployment model, and customizations. Cloud-based solutions typically use subscription pricing, while on-premise solutions involve license fees plus maintenance.",
    },
    {
      question: "Is there free EHR software available?",
      answer:
        "Some free EHR software options exist, but they typically offer limited features, lack scalability, and provide minimal support. Professional electronic health records software delivers significantly more value and long-term ROI.",
    },
    {
      question: "What is medical billing software?",
      answer:
        "Medical billing software automates the process of submitting and tracking claims to insurance companies, including claim creation, submission, denial management, payment posting, and reporting.",
    },
    {
      question: "How does AI improve healthcare software?",
      answer:
        "AI enhances healthcare software through clinical decision support, predictive analytics, medical image analysis, natural language processing, revenue cycle optimization, and workflow automation.",
    },
    {
      question: "Is healthcare software secure?",
      answer:
        "Professional healthcare software includes role-based access control, data encryption, secure authentication, audit logs, automated backups, and HIPAA compliance.",
    },
    {
      question: "Can I integrate healthcare software with my existing systems?",
      answer:
        "Yes, modern healthcare software includes API integrations with EHR, EMR, billing, lab, pharmacy, and imaging systems, supported by HL7 and FHIR standards.",
    },
    {
      question: "How long does it take to implement healthcare software?",
      answer:
        "Implementation timeline varies based on complexity, customizations, and integrations, with typical implementations ranging from 4–12 weeks following a structured process.",
    },
  ];

  const toggleFAQ = (index) => setOpenFAQ(openFAQ === index ? null : index);

  return (
    <div className="min-h-screen bg-white">
      <SEO {...seoData.healthcare} />
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
                Healthcare Software Development for Modern Medical Practices
              </h1>

              <p className="text-gray-300 leading-relaxed">
                Healthcare software development from Ascentia Labs delivers
                custom solutions tailored to your practice's unique workflows —
                from electronic health records software and hospital management
                software to medical billing software and clinic management
                systems.
              </p>
              <button
                onClick={openConsultation}
                className="bg-gradient-to-r from-amber-400 to-orange-500 text-black px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:from-amber-500 hover:to-orange-600"
              >
                Schedule a Free Consultation →
              </button>
            </div>

            <div className="mt-8 lg:mt-0">
              {/* Top Badge - Healthcare Excellence */}
              <div className="flex justify-center mb-6">
                <div className="bg-white/15 backdrop-blur-lg rounded-xl border border-white/30 shadow-2xl px-5 py-2.5 hover:scale-105 transition-all duration-300">
                  <div className="flex items-center gap-2">
                    <HeartPulse className="w-7 h-7 text-amber-400" />
                    <h3 className="text-white font-semibold">
                      Complete Healthcare Software Suite
                    </h3>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {/* Card 1 - EHR/EMR */}
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6 group hover:bg-white/20 transition-all duration-300 hover:-translate-y-2">
                  <FileHeart className="w-12 h-12 text-amber-400 mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="text-white font-semibold mb-2">
                    EHR / EMR Software
                  </h4>
                  <p className="text-sm text-gray-100">
                    Auto-manage records and eliminate manual work.
                  </p>
                </div>

                {/* Card 2 - Hospital Management */}
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6 group hover:bg-white/20 transition-all duration-300 hover:-translate-y-2">
                  <Hospital className="w-12 h-12 text-blue-400 mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="text-white font-semibold mb-2">
                    Hospital Management
                  </h4>
                  <p className="text-sm text-gray-100">
                    Auto-manage admissions, eliminate delays.
                  </p>
                </div>

                {/* Card 3 - Medical Billing */}
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6 group hover:bg-white/20 transition-all duration-300 hover:-translate-y-2">
                  <DollarSign className="w-12 h-12 text-green-400 mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="text-white font-semibold mb-2">
                    Medical Billing
                  </h4>
                  <p className="text-sm text-gray-100">
                    Auto-submit claims, fast response.
                  </p>
                </div>

                {/* Card 4 - Healthcare CRM */}
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6 group hover:bg-white/20 transition-all duration-300 hover:-translate-y-2">
                  <UserRound className="w-12 h-12 text-purple-400 mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="text-white font-semibold mb-2">
                    Healthcare CRM
                  </h4>
                  <p className="text-sm text-gray-300">
                    Track patients, appointments, and care live.
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
            title="The Healthcare Software Market, By the Numbers"
            subtitle="Healthcare technology is no longer optional — it's the foundation of modern patient care."
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
                The State of Healthcare Software Today
              </h2>
              <p className="text-white leading-relaxed">
                At Ascentia Labs, we design and build custom healthcare software
                that optimizes every stage of the care lifecycle. Our solutions
                empower hospitals, medical practices, clinics and specialty
                providers to streamline workflows, improve patient outcomes, and
                enhance overall performance.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Faster Patient Registration", value: "70%" },
                { label: "Higher Patient Satisfaction", value: "85–95%" },
                { label: "Lower Claim Denial Rate", value: "3–5%" },
                { label: "Less Documentation Time", value: "60%" },
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
            subtitle="The urgency for digital transformation in healthcare has never been greater."
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
            subtitle="Healthcare operations face a complex web of challenges. Here's how we address each one."
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
            title="Business Outcomes with Healthcare Software"
            subtitle="Tangible, transformative results across every part of your organization."
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
            title="KPI Dashboard: Manual vs. Healthcare Software"
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
            eyebrow="Intelligent Healthcare"
            title="AI & Machine Learning for Healthcare"
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
            subtitle="Your healthcare software works with the systems you already run."
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
            title="Explore Top Features of Our Healthcare Software Solutions"
            subtitle="Comprehensive capabilities designed to optimize your clinical and administrative operations."
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
            subtitle="Check 5 or more items and your organization is ready for professional healthcare software."
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
            title="Case Studies from Healthcare Clients"
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
              Our Healthcare Development Implementation Process
            </h2>
            <p className="text-lg text-gray-300">
              How We Build Your Healthcare Software — Structured 7-Phase
              Delivery
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
                    Revolutionize Your Healthcare Operations with Our Expertise
                  </h2>
                  <p className="text-xl text-gray-300 mb-8">
                    Why Healthcare Organizations Choose Us
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
                      Ready to Transform Your Healthcare Operations?
                    </h3>
                    <p className="text-blue-100 mb-6">
                      Join the growing number of healthcare organizations that
                      trust our healthcare software solutions to modernize
                      operations and improve patient care.
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
                Find answers to common questions about our healthcare software
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

export default HealthcarePage;
