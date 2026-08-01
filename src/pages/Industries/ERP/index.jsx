import { useState } from "react";
import { Link as RouterLink, Link } from "react-router-dom";
import { useConsultation } from "../../../contexts/ConsultationContext";
import {
  Building2,
  Users,
  BarChart3,
  Settings,
  ChevronDown,
  ChevronUp,
  TrendingUp,
  Shield,
  Zap,
  Clock,
  Database,
  Cloud,
  Cpu,
  CheckCircle,
  ArrowRight,
  Layers,
  GitBranch,
  Globe,
  Lock,
  Server,
  HardDrive,
  Network,
  Smartphone,
  Monitor,
  Code,
  Award,
  Briefcase,
  Calendar,
  DollarSign,
  BarChart,
  PieChart,
  ShoppingCart,
  Truck,
  Heart,
  GraduationCap,
  Factory,
  Home,
  LineChart,
  Activity,
  Target,
  AlertCircle,
  RefreshCw,
  Download,
  Upload,
  Share2,
  Link as LinkIcon,
  Box,
  Package,
  FileText,
  Handshake,
  BrainCircuit,
  Boxes,
  Wrench,
  Plane,
  Stethoscope,
  Building,
  Star,
  Ticket,
  GraduationCap as Cap,
} from "lucide-react";
import SEO from "../../../components/SEO";
import { seoData } from "../../../utils/seoData";

const ERPPage = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [openFAQ, setOpenFAQ] = useState(null);
  const { openConsultation } = useConsultation();

  // Custom scrollbar styles - hidden scrollbar
  const scrollbarStyles = `
    .custom-scrollbar::-webkit-scrollbar {
      width: 0px;
      background: transparent;
    }
    .custom-scrollbar::-webkit-scrollbar-thumb {
      background: transparent;
    }
    .custom-scrollbar {
      scrollbar-width: none;
      -ms-overflow-style: none;
    }
  `;

  // Industry Statistics
  const statistics = [
    { metric: "$70+ Billion", label: "Global ERP Market Size (2026)" },
    { metric: "10-12%", label: "Projected CAGR" },
    { metric: "25%", label: "AI Adoption in ERP (Annual Growth)" },
    { metric: "15%", label: "Cloud ERP Growth (YoY)" },
    { metric: "35%", label: "Manufacturing ERP Adoption" },
  ];

  // Business Challenges
  const challenges = [
    {
      icon: Database,
      title: "Siloed Data",
      description:
        "Departments operate in isolation with no single source of truth, creating inconsistencies, delays, and errors in critical business decisions.",
    },
    {
      icon: Clock,
      title: "Manual Processes",
      description:
        "Time-consuming manual data entry increases costs and creates opportunities for human error across operations.",
    },
    {
      icon: BarChart,
      title: "Lack of Real-Time Visibility",
      description:
        "Without integrated systems, leaders cannot access real-time operational data, leading to reactive rather than proactive decision-making.",
    },
    {
      icon: Shield,
      title: "Compliance Risks",
      description:
        "Disconnected systems make it difficult to maintain consistent compliance with industry regulations and standards.",
    },
  ];

  // Business Outcomes
  const outcomes = [
    {
      icon: Zap,
      title: "Operational Efficiency",
      value: "30-50%",
      description: "Reduction in manual data entry tasks",
    },
    {
      icon: CheckCircle,
      title: "Data Accuracy",
      value: "Eliminate",
      description: "Data inconsistencies across departments",
    },
    {
      icon: DollarSign,
      title: "Cost Reduction",
      value: "Up to 25%",
      description: "Reduction in administrative costs",
    },
    {
      icon: TrendingUp,
      title: "Revenue Growth",
      value: "Faster",
      description: "Time-to-market for new products",
    },
    {
      icon: Activity,
      title: "Agility",
      value: "Faster",
      description: "Response to market changes",
    },
    {
      icon: Shield,
      title: "Compliance",
      value: "Consistent",
      description: "Adherence to regulatory standards",
    },
  ];

  // KPI Data
  const kpiData = [
    {
      metric: "Order Processing Time",
      before: "48-72 hours",
      after: "4-8 hours",
      improvement: "83% Faster",
    },
    {
      metric: "Inventory Accuracy",
      before: "70-80%",
      after: "95-99%",
      improvement: "20-25% Better",
    },
    {
      metric: "Financial Close",
      before: "15-20 days",
      after: "5-7 days",
      improvement: "65% Faster",
    },
    {
      metric: "Supplier On-time Delivery",
      before: "70-80%",
      after: "85-95%",
      improvement: "15% Higher",
    },
    {
      metric: "Data Entry Errors",
      before: "10-15%",
      after: "<2%",
      improvement: "80% Reduction",
    },
    {
      metric: "Reporting Time",
      before: "5-10 days",
      after: "Real-time",
      improvement: "Instant Access",
    },
  ];

  // Industry Segments
  const industrySegments = [
    {
      icon: Factory,
      title: "Manufacturing",
      description:
        "Production planning and scheduling, quality control and compliance, inventory and supply chain management.",
    },
    {
      icon: Home,
      title: "Construction",
      description:
        "Project cost tracking, resource allocation, compliance and documentation.",
    },
    {
      icon: Heart,
      title: "Healthcare",
      description:
        "Patient and staff management, regulatory compliance, supply chain optimization.",
    },
    {
      icon: Truck,
      title: "Logistics & Supply Chain",
      description:
        "Fleet and shipment tracking, warehouse management, route optimization.",
    },
    {
      icon: ShoppingCart,
      title: "Retail & E-commerce",
      description:
        "Omnichannel inventory management, customer relationship integration, order and fulfillment automation.",
    },
    {
      icon: GraduationCap,
      title: "Education",
      description:
        "Student information management, financial administration, staff and resource allocation.",
    },
  ];

  // AI Solutions
  const aiSolutions = [
    {
      icon: LineChart,
      title: "Predictive Analytics",
      description:
        "Anticipate demand, identify trends, and make proactive decisions based on data patterns.",
    },
    {
      icon: Zap,
      title: "Intelligent Automation",
      description:
        "Automate routine tasks from procurement approvals to financial reconciliation, freeing your team for strategic work.",
    },
    {
      icon: AlertCircle,
      title: "Anomaly Detection",
      description:
        "Real-time identification of operational irregularities such as supply chain disruptions, quality deviations, or financial discrepancies.",
    },
    {
      icon: Target,
      title: "Smart Recommendations",
      description:
        "AI-powered insights for inventory optimization, resource allocation, and workflow improvements.",
    },
  ];

  // Technology Stack
  const techStack = {
    Backend: ["Java", "Python", ".NET Core", "Node.js"],
    Frontend: ["React", "Angular", "Vue.js"],
    Cloud: ["AWS", "Azure", "Google Cloud Platform"],
    Database: ["PostgreSQL", "MongoDB", "Oracle", "SQL Server"],
    Apis: ["RESTful", "GraphQL", "SOAP"],
    Integration: ["MuleSoft", "Dell Boomi", "Apache Kafka"],
    Ai: ["TensorFlow", "PyTorch", "OpenAI APIs"],
  };

  // Integration Ecosystem
  const integrations = [
    {
      icon: Database,
      title: "Legacy Systems",
      description: "Modernize without starting from scratch.",
    },
    {
      icon: Users,
      title: "CRM Systems",
      description: "Sales, marketing, and customer data synchronization.",
    },
    {
      icon: Factory,
      title: "MES & SCADA",
      description: "Real-time manufacturing data integration.",
    },
    {
      icon: DollarSign,
      title: "Financial Systems",
      description: "Seamless financial data flow across platforms.",
    },
    {
      icon: Network,
      title: "IoT Devices",
      description:
        "Real-time sensor data integration for predictive maintenance.",
    },
    {
      icon: Users,
      title: "HR & Payroll",
      description: "Unified employee information management.",
    },
  ];

  // Industry Use Cases
  const useCases = [
    {
      industry: "Manufacturing",
      company: "A mid-sized manufacturer",
      result:
        "25% improved production efficiency and 30% reduction in inventory holding costs",
      icon: Factory,
    },
    {
      industry: "Healthcare",
      company: "A healthcare network",
      result:
        "Reducing waste by 20% and improving patient care through better resource availability",
      icon: Heart,
    },
    {
      industry: "Construction",
      company: "A construction company",
      result: "Improving budget accuracy by 35% and reducing overruns",
      icon: Home,
    },
    {
      industry: "Retail",
      company: "A multi-channel retailer",
      result:
        "Reducing stockouts by 40% with real-time visibility across 50 stores",
      icon: ShoppingCart,
    },
  ];

  // Deployment Models
  const deploymentModels = [
    {
      icon: Cloud,
      title: "Cloud-Based ERP System",
      features: [
        "No hardware investment",
        "Automatic updates",
        "Accessible from anywhere",
        "Rapid deployment",
        "Predictable costs",
      ],
      type: "cloud",
    },
    {
      icon: Server,
      title: "On-Premise ERP",
      features: [
        "Complete data control",
        "Custom infrastructure",
        "Regulatory compliance",
        "Performance optimization",
        "One-time capital expense",
      ],
      type: "premise",
    },
    {
      icon: GitBranch,
      title: "Hybrid ERP",
      features: [
        "Combination of cloud and on-premise",
        "Flexibility and control",
        "Best-of-both-worlds architecture",
        "Scalable and secure",
      ],
      type: "hybrid",
    },
  ];

  // Security Features
  const securityFeatures = [
    {
      icon: Lock,
      title: "Access Control",
      description:
        "Role-based permissions ensure employees see only what they need.",
    },
    {
      icon: Lock,
      title: "Data Encryption",
      description: "Strong encryption for data at rest and in transit.",
    },
    {
      icon: Shield,
      title: "Compliance Management",
      description: "Automated regulatory compliance monitoring and reporting.",
    },
    {
      icon: Clock,
      title: "Audit Trails",
      description: "Comprehensive logging of all system activities.",
    },
    {
      icon: Database,
      title: "Backup & Recovery",
      description:
        "Disaster recovery capabilities to protect against data loss.",
    },
    {
      icon: RefreshCw,
      title: "Regular Updates",
      description: "Continuous security patching and system improvements.",
    },
  ];

  // Case Studies
  const caseStudies = [
    {
      industry: "Manufacturing ERP",
      title: "40% Productivity Increase",
      description:
        "A leading textile manufacturer with multiple production facilities implemented our ERP solution to streamline operations across plants. They achieved 40% productivity improvement and 60% faster time-to-market for new products.",
    },
    {
      industry: "Healthcare ERP",
      title: "30% Cost Reduction",
      description:
        "A healthcare provider reduced operational costs by 30% through centralized procurement and intelligent inventory management capabilities.",
    },
  ];

  // Why Ascentia Labs
  const whyAscentia = [
    {
      icon: Award,
      title: "Deep Industry Expertise",
      description:
        "We have built ERP solutions for textile, healthcare, logistics, and construction industries with a deep understanding of their unique needs.",
    },
    {
      icon: CheckCircle,
      title: "Proven Methodology",
      description: "Our systematic approach ensures successful delivery.",
    },
    {
      icon: Cpu,
      title: "Technical Excellence",
      description: "Modern technology stack with AI and ML capabilities.",
    },
    {
      icon: Users,
      title: "Industry Experience",
      description:
        "Our client roster includes Vardhman Textiles and other industry leaders.",
    },
    {
      icon: Handshake,
      title: "Partnership Approach",
      description:
        "We don't just implement software—we become your long-term technology partner.",
    },
  ];

  // Engagement Models
  const engagementModels = [
    {
      icon: DollarSign,
      title: "Fixed Cost",
      description: "For projects with clear requirements and defined scope.",
    },
    {
      icon: Users,
      title: "Dedicated Team",
      description: "For ongoing development and long-term partnership.",
    },
    {
      icon: Users,
      title: "Staff Augmentation",
      description:
        "To supplement your existing team with specialized expertise.",
    },
    {
      icon: Award,
      title: "Consulting Only",
      description: "For assessment, architecture, and technology advisory.",
    },
  ];

  // Related Services
  const relatedServices = [
    {
      title: "Custom Software Development",
      icon: Code,
      description:
        "Tailored software solutions built for your specific business needs.",
      link: "/custom-crm-development",
    },
    {
      title: "AI/ML Development",
      icon: Cpu,
      description:
        "Intelligent automation and predictive analytics for your business.",
      link: "/ai-ml-services",
    },
    {
      title: "Digital Transformation Services",
      icon: RefreshCw,
      description:
        "Modernize your business operations with cutting-edge technology.",
      link: "/digital-transformation",
    },
    {
      title: "Application Modernization",
      icon: Layers,
      description: "Upgrade legacy systems to modern, scalable architectures.",
      link: "/application-modernisation",
    },
    {
      title: "Mobile App Development",
      icon: Smartphone,
      description:
        "Native and cross-platform mobile applications for your business.",
      link: "/mobile-application",
    },
  ];

  // Related Resources
  const relatedResources = [
    "Blog: What is ERP and Why Does Your Business Need One?",
    "Guide: ERP Implementation Checklist",
    "Whitepaper: Modern ERP Systems",
    "Case Study: ERP Success Story",
  ];

  // FAQ Data
  const faqs = [
    {
      question: "How much does ERP software cost?",
      answer:
        "The erp software cost depends on factors including deployment model, number of users, customization requirements, and integration complexity. Contact us for a custom quote.",
    },
    {
      question: "How long does ERP implementation take?",
      answer:
        "The erp implementation timeline ranges from 4 to 12 months, depending on the project scope, system complexity, and organizational readiness.",
    },
    {
      question: "What is the best ERP system?",
      answer:
        "The best erp system depends on your specific business needs, industry, and operational requirements. We build custom solutions tailored to your exact needs.",
    },
    {
      question: "What are the benefits of ERP?",
      answer:
        "ERP benefits include improved operational efficiency, real-time visibility, better decision-making, reduced costs, and enhanced compliance.",
    },
    {
      question: "How do I choose an ERP system?",
      answer:
        "Consider business requirements, industry needs, budget, scalability, and technology compatibility.",
    },
    {
      question: "What industries benefit from ERP?",
      answer:
        "ERP for manufacturing and industries such as healthcare, logistics, construction, retail, and education.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO {...seoData.erp} />
      <style dangerouslySetInnerHTML={{ __html: scrollbarStyles }} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-black overflow-hidden py-20">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-40 left-20 w-24 h-24 bg-blue-400 rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-blue-300 rounded-full blur-xl"></div>
        </div>

        {/* Smooth transition gradient at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-black"></div>

        <div className="relative container mx-auto px-4 py-5 2xl:py-14  ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div className="text-white space-y-6">
              <h1 className="text-[25px] md:text-4xl leading-tight">
                ERP System Development — Custom Enterprise Resource Planning
                Solutions
              </h1>
              <p className="text-lg text-gray-300 leading-relaxed">
                At Ascentia Labs, we develop custom ERP software that unifies
                your business operations into a single, intelligent platform.
                Our enterprise resource planning solutions streamline workflows,
                automate processes, and improve operational efficiency.
              </p>

              <button
                onClick={openConsultation}
                className="bg-gradient-to-r from-amber-400 to-orange-500 text-black px-8 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg hover:from-amber-500 hover:to-orange-600"
              >
                Talk to Our ERP Experts
              </button>
            </div>

            {/* Right Content - Features Preview */}

            {/* Right Content - ERP Features Grid */}
            <div className="mt-8 lg:mt-0">
              {/* Top Badge - ERP Core Capabilities */}
              <div className="flex justify-center mb-6">
                <div className="bg-white/15 backdrop-blur-lg rounded-xl border border-white/30 shadow-2xl px-5 py-2.5 hover:scale-105 transition-all duration-300">
                  <div className="flex items-center gap-2">
                    <Layers className="w-7 h-7 text-amber-400" />
                    <h3 className="text-white font-semibold">
                      Complete ERP Suite
                    </h3>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {/* Card 1 - Financial Management */}
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6 group hover:bg-white/20 transition-all duration-300 hover:-translate-y-2">
                  <DollarSign className="w-12 h-12 text-amber-400 mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="text-white font-semibold mb-2">
                    Financial Management
                  </h4>
                  <p className="text-sm text-gray-100">
                    Real-time accounting, budgeting, and financial reporting.
                  </p>
                </div>

                {/* Card 2 - Supply Chain */}
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6 group hover:bg-white/20 transition-all duration-300 hover:-translate-y-2">
                  <Truck className="w-12 h-12 text-blue-400 mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="text-white font-semibold mb-2">
                    Supply Chain Management
                  </h4>
                  <p className="text-sm text-gray-100">
                    End-to-end procurement, logistics, and vendor tracking.
                  </p>
                </div>

                {/* Card 3 - HR & Workforce */}
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6 group hover:bg-white/20 transition-all duration-300 hover:-translate-y-2">
                  <Users className="w-12 h-12 text-green-400 mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="text-white font-semibold mb-2">
                    HR & Workforce Management
                  </h4>
                  <p className="text-sm text-gray-100">
                    Employee records, payroll, attendance, and performance.
                  </p>
                </div>

                {/* Card 4 - Business Intelligence */}
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6 group hover:bg-white/20 transition-all duration-300 hover:-translate-y-2">
                  <BarChart3 className="w-12 h-12 text-purple-400 mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="text-white font-semibold mb-2">
                    Business Intelligence
                  </h4>
                  <p className="text-sm text-gray-300">
                    Real-time dashboards and predictive analytics insights.
                  </p>
                </div>
              </div>

              {/* Bottom Stats Row */}
            </div>
          </div>
        </div>
      </section>

      {/* Industry Statistics Dashboard */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl  bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent mb-4">
              The State of Enterprise Resource Market Insights
            </h2>
            <p className="text-lg text-white max-w-3xl 2xl:max-w-6xl mx-auto">
              The global enterprise resource planning market is experiencing
              rapid growth as businesses recognize the critical role of
              integrated management systems.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {statistics.map((stat, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 text-center border border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:scale-105"
              >
                <div className="text-2xl md:text-3xl font-bold text-amber-400 mb-2">
                  {stat.metric}
                </div>
                <div className="text-sm text-gray-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Overview */}
      <section className="py-16 bg-gradient-to-br from-gray-900 via-blue-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-40 left-20 w-24 h-24 bg-blue-400 rounded-full blur-2xl"></div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-black"></div>

        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl  text-white text-center mb-8">
              What is Enterprise Resource Planning?
            </h2>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <p className="text-white text-lg leading-relaxed mb-6">
                Enterprise resource planning (ERP) refers to integrated software
                platforms that help organizations manage and automate core
                business processes across finance, human resources, supply
                chain, manufacturing, and customer relationship management.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {[
                  "Unified Data Management",
                  "Process Automation",
                  "Real-Time Analytics",
                  "Scalability",
                  "Compliance",
                ].map((capability, index) => (
                  <div
                    key={index}
                    className="bg-black/30 rounded-lg p-3 text-center border border-blue-500/20"
                  >
                    <div className="text-amber-400 text-xs font-semibold">
                      ✓
                    </div>
                    <div className="text-white text-sm mt-1">{capability}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Digital Transformation Now */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl  bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent text-center mb-4">
              The Business Case for Digital Transformation with ERP
            </h2>
            <p className="text-lg text-white text-center mb-12">
              Businesses that delay digital transformation risk falling behind
              competitors who leverage technology to optimize operations. An erp
              software solution is the foundation of any successful digital
              transformation strategy.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  driver: "Supply Chain Disruption",
                  impact: "Need for real-time visibility and agility",
                },
                {
                  driver: "Data Explosion",
                  impact: "Requirement for centralized data management",
                },
                {
                  driver: "Customer Expectations",
                  impact: "Demand for faster, personalized service",
                },
                {
                  driver: "Remote Workforce",
                  impact: "Need for cloud-based, accessible systems",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300"
                >
                  <div className="flex items-start space-x-3">
                    <div className="bg-gradient-to-r from-amber-400 to-orange-500 p-2 rounded-lg text-black flex-shrink-0 mt-1">
                      <TrendingUp size={16} />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">
                        {item.driver}
                      </h3>
                      <p className="text-gray-100 text-sm">{item.impact}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-gradient-to-r from-blue-600/20 to-blue-800/20 backdrop-blur-md rounded-xl p-6 border border-blue-500/30">
              <p className="text-blue-100 text-center">
                Cloud based erp systems enable businesses to modernize without
                massive upfront infrastructure investments, making
                enterprise-grade capabilities accessible to mid-market
                organizations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Challenges */}
      <section className="py-16 bg-gradient-to-br from-gray-900 via-blue-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-40 right-20 w-24 h-24 bg-blue-400 rounded-full blur-2xl"></div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-black"></div>

        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl  text-white text-center mb-4">
              Common Business Challenges Solved by ERP
            </h2>
            <p className="text-lg text-white text-center mb-12">
              Before implementing an erp system, organizations typically
              struggle with operational inefficiencies that hinder growth.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {challenges.map((challenge, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-amber-400 to-orange-500 p-3 rounded-xl text-black flex-shrink-0">
                      <challenge.icon size={24} />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-lg mb-2">
                        {challenge.title}
                      </h3>
                      <p className="text-gray-100 text-sm leading-relaxed">
                        {challenge.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Business Outcomes */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl  bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent text-center mb-4">
              Measurable Business Outcomes with Custom ERP
            </h2>
            <p className="text-lg text-white text-center mb-12">
              Organizations that implement best erp software solutions achieve
              significant operational improvements.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {outcomes.map((outcome, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="bg-gradient-to-r from-amber-400 to-orange-500 p-2 rounded-lg text-black">
                      <outcome.icon size={20} />
                    </div>
                    <h3 className="text-white font-semibold">
                      {outcome.title}
                    </h3>
                  </div>
                  <div className="text-2xl font-bold text-amber-400 mb-1">
                    {outcome.value}
                  </div>
                  <div className="text-sm text-gray-100">
                    {outcome.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* KPI Dashboard */}
      <section className="py-16 bg-gradient-to-br from-gray-900 via-blue-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-40 left-20 w-24 h-24 bg-blue-400 rounded-full blur-2xl"></div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-black"></div>

        <div className="relative container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl  text-white text-center mb-4">
              Performance Metrics — Before and After ERP Implementation
            </h2>
            <p className="text-base md:text-lg text-white text-center mb-8 md:mb-12">
              Key Performance Indicator is an indicator of business.
            </p>

            {/* Desktop Table View - Hidden on mobile */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full bg-white/10 backdrop-blur-md rounded-xl border border-white/20 overflow-hidden">
                <thead>
                  <tr className="bg-gradient-to-r from-amber-400 to-orange-500 text-black">
                    <th className="px-4 lg:px-6 py-3 lg:py-4 text-left font-bold text-sm lg:text-base">
                      Metric
                    </th>
                    <th className="px-4 lg:px-6 py-3 lg:py-4 text-left font-bold text-sm lg:text-base">
                      Before ERP
                    </th>
                    <th className="px-4 lg:px-6 py-3 lg:py-4 text-left font-bold text-sm lg:text-base">
                      After ERP
                    </th>
                    <th className="px-4 lg:px-6 py-3 lg:py-4 text-left font-bold text-sm lg:text-base">
                      Improvement
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {kpiData.map((row, index) => (
                    <tr
                      key={index}
                      className={`border-b border-white/10 ${index % 2 === 0 ? "bg-white/5" : ""} hover:bg-white/10 transition-colors`}
                    >
                      <td className="px-4 lg:px-6 py-3 lg:py-4 text-white font-medium text-sm lg:text-base">
                        {row.metric}
                      </td>
                      <td className="px-4 lg:px-6 py-3 lg:py-4 text-gray-300 text-sm lg:text-base">
                        {row.before}
                      </td>
                      <td className="px-4 lg:px-6 py-3 lg:py-4 text-amber-400 font-semibold text-sm lg:text-base">
                        {row.after}
                      </td>
                      <td className="px-4 lg:px-6 py-3 lg:py-4 text-green-400 font-bold text-sm lg:text-base">
                        {row.improvement}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Card View - Visible only on mobile */}
            <div className="md:hidden space-y-4">
              {kpiData.map((row, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-4 hover:bg-white/15 transition-all duration-300"
                >
                  {/* Metric Header */}
                  <div className="flex items-center justify-between mb-3 pb-2 border-b border-white/10">
                    <h3 className="text-white font-semibold text-sm">
                      {row.metric}
                    </h3>
                    <div className="bg-gradient-to-r from-amber-400 to-orange-500 px-2 py-1 rounded text-black text-xs font-bold">
                      {row.improvement}
                    </div>
                  </div>

                  {/* Before & After Grid */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-black/30 rounded-lg p-3 text-center">
                      <div className="text-gray-400 text-xs uppercase tracking-wider mb-1">
                        Before ERP
                      </div>
                      <div className="text-gray-300 font-medium text-sm">
                        {row.before}
                      </div>
                    </div>
                    <div className="bg-black/30 rounded-lg p-3 text-center border border-amber-400/20">
                      <div className="text-amber-400 text-xs uppercase tracking-wider mb-1">
                        After ERP
                      </div>
                      <div className="text-amber-400 font-semibold text-sm">
                        {row.after}
                      </div>
                    </div>
                  </div>

                  {/* Improvement Bar */}
                  <div className="mt-3 pt-2 border-t border-white/10">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 text-xs">Improvement</span>
                      <span className="text-green-400 font-bold text-sm">
                        {row.improvement}
                      </span>
                    </div>
                    {/* Visual improvement bar */}
                    <div className="mt-1 w-full bg-white/10 rounded-full h-1.5 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-green-400 to-green-500 h-full rounded-full transition-all duration-1000"
                        style={{
                          width: row.improvement.includes("Faster")
                            ? "85%"
                            : row.improvement.includes("Better")
                              ? "75%"
                              : row.improvement.includes("Higher")
                                ? "65%"
                                : row.improvement.includes("Reduction")
                                  ? "80%"
                                  : row.improvement.includes("Instant")
                                    ? "95%"
                                    : "70%",
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile Swipe Hint */}
            <div className="md:hidden text-center mt-4">
              <p className="text-gray-500 text-xs">
                👆 Swipe to view all metrics
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Segments */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl  bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent text-center mb-4">
              ERP Solutions for Every Industry
            </h2>
            <p className="text-lg text-white text-center mb-12">
              Every industry has unique operational requirements. Our erp for
              manufacturing industry solutions are tailored to address sector
              challenges.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industrySegments.map((industry, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="bg-gradient-to-r from-amber-400 to-orange-500 p-3 rounded-xl text-black inline-block mb-4">
                    <industry.icon size={24} />
                  </div>
                  <h3 className="text-white font-semibold text-xl mb-3">
                    {industry.title}
                  </h3>
                  <p className="text-gray-100 text-sm leading-relaxed">
                    {industry.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AI & ML Solutions */}
      <section className="py-16 bg-gradient-to-br from-gray-900 via-blue-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-40 right-20 w-24 h-24 bg-blue-400 rounded-full blur-2xl"></div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-black"></div>

        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl lg:max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl  text-white text-center mb-4">
              AI-Powered ERP Systems — The Future of Enterprise Management
            </h2>
            <p className="text-lg text-white text-center mb-12">
              We integrate artificial intelligence (AI) and machine learning
              into our ERP solutions, transforming traditional systems into
              platforms.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {aiSolutions.map((solution, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-amber-400 to-orange-500 p-3 rounded-xl text-black flex-shrink-0">
                      <solution.icon size={24} />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-lg mb-2">
                        {solution.title}
                      </h3>
                      <p className="text-gray-100 text-sm leading-relaxed">
                        {solution.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl  bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent text-center mb-4">
              Our ERP Technology Stack
            </h2>
            <p className="text-lg text-white text-center mb-12">
              We build robust, scalable ERP systems using modern technology
              architectures.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {Object.entries(techStack).map(
                ([category, technologies], index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300"
                  >
                    <h3 className="text-amber-400 font-semibold text-sm  uppercase tracking-wider mb-4">
                      {category}
                    </h3>
                    <div className="space-y-2">
                      {technologies.map((tech, techIndex) => (
                        <div
                          key={techIndex}
                          className="bg-black/30 rounded-lg px-3 py-2 text-white text-sm text-center"
                        >
                          {tech}
                        </div>
                      ))}
                    </div>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Integration Ecosystem */}
      <section className="py-16 bg-gradient-to-br from-gray-900 via-blue-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-40 left-20 w-24 h-24 bg-blue-400 rounded-full blur-2xl"></div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-black"></div>

        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl  text-white text-center mb-4">
              Seamless Integration with Your Existing Systems
            </h2>
            <p className="text-lg text-white text-center mb-12">
              An erp integration strategy is essential for modern enterprises.
              Our solutions connect with your existing ecosystem.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {integrations.map((integration, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
                >
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="bg-gradient-to-r from-amber-400 to-orange-500 p-2 rounded-lg text-black">
                      <integration.icon size={20} />
                    </div>
                    <h3 className="text-white font-semibold">
                      {integration.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 text-sm">
                    {integration.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industry Use Cases */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl  bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent text-center mb-4">
              Real-World ERP Use Cases
            </h2>
            <p className="text-lg text-white text-center mb-12">
              See how organizations across industries have transformed their
              operations with our ERP solutions.
            </p>

            <div className="space-y-6">
              {useCases.map((useCase, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-amber-400 to-orange-500 p-3 rounded-xl text-black flex-shrink-0">
                      <useCase.icon size={24} />
                    </div>
                    <div>
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="text-amber-400 font-bold">
                          {useCase.industry}
                        </span>
                        <span className="text-gray-500">•</span>
                        <span className="text-gray-400 text-sm">
                          {useCase.company}
                        </span>
                      </div>
                      <p className="text-white">{useCase.result}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ROI & Business Value */}
      <section className="py-16 bg-gradient-to-br from-gray-900 via-blue-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-40 right-20 w-24 h-24 bg-blue-400 rounded-full blur-2xl"></div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-black"></div>

        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl lg:max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl  text-white text-center mb-4">
              Understanding ERP Software Cost and ROI
            </h2>
            <p className="text-lg text-white text-center mb-12">
              The erp software cost and associated implementation expenses are
              significant, but the return on investment is substantial.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20">
                <h3 className="text-amber-400 font-bold text-xl mb-4">
                  Investment Components
                </h3>
                <ul className="space-y-3">
                  {[
                    "Software licensing",
                    "Implementation and customization",
                    "Training and change management",
                    "Ongoing support and maintenance",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <span className="w-1.5 h-1.5 bg-amber-400 rounded-full mr-3"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20">
                <h3 className="text-amber-400 font-bold text-xl mb-4">
                  ROI Drivers
                </h3>
                <ul className="space-y-3">
                  {[
                    "Operational efficiency gains",
                    "Inventory cost reduction",
                    "Labor cost savings",
                    "Improved customer retention",
                    "Better decision-making",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <span className="w-1.5 h-1.5 bg-amber-400 rounded-full mr-3"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Buyer Readiness Checklist */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent text-center mb-4">
              Is Your Business Ready for ERP Implementation?
            </h2>
            <p className="text-lg text-white text-center mb-12">
              Use this checklist to assess whether your organization is ready to
              begin the ERP journey.
            </p>

            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700">
              {[
                "Leadership alignment on transformation goals",
                "Clear business objectives defined",
                "Process documentation available",
                "Data quality assessment performed",
                "Change management resources allocated",
                "Budget for implementation and training",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between py-4 border-b border-gray-700 last:border-0"
                >
                  <span className="text-white">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Customer Journey */}
      <section className="py-16 bg-gradient-to-br from-gray-900 via-blue-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-40 left-20 w-24 h-24 bg-blue-400 rounded-full blur-2xl"></div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-black"></div>

        <div className="relative container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl  text-white text-center mb-4">
              Your ERP Implementation Journey
            </h2>
            <p className="text-lg text-white text-center mb-12">
              Our ERP implementation process follows a structured customer
              journey.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                "Discovery",
                "Assessment",
                "Architecture",
                "Development",
                "Deployment",
                "Optimization",
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-r from-amber-400 to-orange-500 text-black rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">
                      {index + 1}
                    </div>
                    {index < 5 && (
                      <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-blue-400/50"></div>
                    )}
                  </div>
                  <div className="text-white font-medium text-sm">{step}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl  bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent text-center mb-4">
              Our ERP Implementation Methodology
            </h2>
            <p className="text-lg text-white text-center mb-12">
              A systematic approach to ensure successful delivery.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-gray-700 overflow-hidden">
                <thead>
                  <tr className="bg-gradient-to-r from-amber-400 to-orange-500 text-black">
                    <th className="px-6 py-4 text-left font-bold">Phase</th>
                    <th className="px-6 py-4 text-left font-bold">
                      Activities
                    </th>
                    <th className="px-6 py-4 text-left font-bold">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      phase: "Discovery",
                      activities:
                        "Stakeholder interviews, process mapping, requirements gathering",
                      duration: "2-4 weeks",
                    },
                    {
                      phase: "Design",
                      activities:
                        "Solution architecture, system design, integration planning",
                      duration: "3-6 weeks",
                    },
                    {
                      phase: "Development",
                      activities:
                        "Custom development, module configuration, integration development",
                      duration: "8-16 weeks",
                    },
                    {
                      phase: "Testing",
                      activities:
                        "Unit testing, integration testing, UAT, performance testing",
                      duration: "4-6 weeks",
                    },
                    {
                      phase: "Deployment",
                      activities:
                        "Data migration, go-live planning, production deployment",
                      duration: "2-4 weeks",
                    },
                    {
                      phase: "Training",
                      activities:
                        "End-user training, documentation, change management",
                      duration: "2-4 weeks",
                    },
                    {
                      phase: "Support",
                      activities:
                        "Post-go-live support, optimization, continuous improvement",
                      duration: "Ongoing",
                    },
                  ].map((row, index) => (
                    <tr
                      key={index}
                      className={`border-b border-gray-700 ${index % 2 === 0 ? "bg-white/5" : ""} hover:bg-white/10 transition-colors`}
                    >
                      <td className="px-6 py-4 text-amber-400 font-semibold">
                        {row.phase}
                      </td>
                      <td className="px-6 py-4 text-gray-300">
                        {row.activities}
                      </td>
                      <td className="px-6 py-4 text-white font-medium">
                        {row.duration}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Deployment Models */}
      <section className="py-16 bg-gradient-to-br from-gray-900 via-blue-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-40 right-20 w-24 h-24 bg-blue-400 rounded-full blur-2xl"></div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-black"></div>

        <div className="relative container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl  text-white text-center mb-4">
              Flexible ERP Deployment Options
            </h2>
            <p className="text-lg text-white text-center mb-12">
              We offer deployment flexibility to match your business
              requirements.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {deploymentModels.map((model, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="bg-gradient-to-r from-amber-400 to-orange-500 p-3 rounded-xl text-black inline-block mb-4">
                    <model.icon size={32} />
                  </div>
                  <h3 className="text-white font-bold text-xl mb-4">
                    {model.title}
                  </h3>
                  <ul className="space-y-3">
                    {model.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-start text-gray-300"
                      >
                        <CheckCircle className="w-4 h-4 text-amber-400 mr-2 flex-shrink-0 mt-1" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl  bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent text-center mb-4">
              Enterprise-Grade Security for Your ERP System
            </h2>
            <p className="text-lg text-white text-center mb-12">
              Data security is a critical concern for ERP implementations. Our
              ERP solutions deliver:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {securityFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300"
                >
                  <div className="bg-gradient-to-r from-amber-400 to-orange-500 p-2 rounded-lg text-black inline-block mb-3">
                    <feature.icon size={20} />
                  </div>
                  <h3 className="text-white font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-100 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 bg-gradient-to-br from-gray-900 via-blue-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-40 left-20 w-24 h-24 bg-blue-400 rounded-full blur-2xl"></div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-black"></div>

        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl  text-white text-center mb-4">
              Client Success Stories
            </h2>
            <p className="text-lg text-white text-center mb-12">
              See how we've helped businesses transform their operations.
            </p>

            <div className="space-y-6">
              {caseStudies.map((study, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-amber-400 to-orange-500 p-3 rounded-xl text-black flex-shrink-0">
                      <Award size={24} />
                    </div>
                    <div>
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="text-amber-400 font-bold">
                          {study.industry}
                        </span>
                        <span className="text-gray-500 hidden lg:block">•</span>
                        <span className="text-white font-semibold hidden lg:block">
                          {study.title}
                        </span>
                      </div>
                      <p className="text-gray-100">{study.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Ascentia Labs */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl  bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent text-center mb-4">
              Why Choose Ascentia Labs for Your ERP Implementation?
            </h2>
            <p className="text-lg text-white text-center mb-12">
              Partner with us for enterprise-grade ERP solutions.
            </p>

            <div className="space-y-4">
              {whyAscentia.map((item, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-amber-400 to-orange-500 p-2 rounded-lg text-black flex-shrink-0">
                      <item.icon size={20} />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">
                        {item.title}
                      </h3>
                      <p className="text-gray-100 text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="py-16 bg-gradient-to-br from-gray-900 via-blue-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-40 right-20 w-24 h-24 bg-blue-400 rounded-full blur-2xl"></div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-black"></div>

        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl  text-white text-center mb-4">
              Flexible Engagement Models
            </h2>
            <p className="text-lg text-white text-center mb-12">
              Choose the engagement model that best fits your needs.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {engagementModels.map((model, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 text-center"
                >
                  <div className="bg-gradient-to-r from-amber-400 to-orange-500 p-3 rounded-xl text-black inline-block mb-4">
                    <model.icon size={24} />
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">
                    {model.title}
                  </h3>
                  <p className="text-gray-100 text-sm">{model.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent text-center mb-4">
              Related Services
            </h2>
            <p className="text-lg text-white text-center mb-12">
              Explore our comprehensive range of enterprise solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {relatedServices.map((service, index) => (
                <Link
                  key={index}
                  to={service.link}
                  className="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10"
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-amber-400 to-orange-500 p-2 rounded-lg text-black flex-shrink-0 group-hover:scale-110 transition-transform">
                      <service.icon size={20} />
                    </div>
                    <div>
                      <div className="text-white font-semibold group-hover:text-amber-400 transition-colors">
                        {service.title}
                      </div>
                      <p className="text-gray-400 text-sm mt-1 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-16 bg-gradient-to-br from-gray-900 via-blue-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-40 left-20 w-24 h-24 bg-blue-400 rounded-full blur-2xl"></div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-black"></div>

        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl  text-white text-center mb-4">
              ERP Resources and Insights
            </h2>
            <p className="text-lg text-white text-center mb-12">
              Explore our collection of ERP resources and insights.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedResources.map((resource, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
                >
                  <div className="flex items-center space-x-3">
                    <div className="bg-gradient-to-r from-amber-400 to-orange-500 p-2 rounded-lg text-black">
                      <FileText size={20} />
                    </div>
                    <span className="text-white">{resource}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl  bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-white">
                Find answers to common questions about our ERP solutions
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
                    <h3 className="text-lg  text-white pr-4">{faq.question}</h3>
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
                        <p className="text-gray-300 leading-relaxed">
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

      {/* Final CTA */}
    </div>
  );
};

export default ERPPage;
