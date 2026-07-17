import { useState } from "react";
import { Link } from "react-router-dom";
import { useConsultation } from "../../../contexts/ConsultationContext";
import SEO from "../../../components/SEO";
import { seoData } from "../../../utils/seoData";
import {
  Brain,
  ChevronDown,
  ChevronUp,
  TrendingUp,
  Zap,
  Lock,
  Workflow,
  Award,
  ArrowRight,
  MessageSquare,
  Eye,
  BarChart3,
  Bot,
  Sparkles,
  Target,
  Factory,
  Stethoscope,
  ShoppingCart,
  Landmark,
  Truck,
  Layers,
  ShieldCheck,
} from "lucide-react";

/* -------------------------------------------------------------------------
 * Reusable presentational pieces — reuse existing visual language
 * (gray-900 cards, amber/orange CTA gradient, blue-400→white heading
 * gradient, blue-600 numbered badges) instead of introducing new UI.
 * ---------------------------------------------------------------------- */

const StatCard = ({ number, label }) => (
  <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 transform hover:scale-105 transition-transform duration-300">
    <div className="text-3xl md:text-4xl text-white mb-1">{number}</div>
    <div className="text-blue-200 text-xs sm:text-sm">{label}</div>
  </div>
);

const CheckItem = ({ children }) => (
  <li className="flex items-center gap-2 text-sm text-gray-200">
    <span className="text-amber-400">✔</span>
    {children}
  </li>
);

// Problem → Solution → Outcome flow card, used by Business Problems and
// (in accordion form) by the Services grid.
const FlowCard = ({
  icon: Icon,
  title,
  problem,
  solution,
  outcome,
  footer,
}) => (
  <article className="bg-gray-900 rounded-2xl border border-gray-700 p-6 h-full flex flex-col hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300">
    {Icon && (
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center text-white mb-4">
        <Icon className="w-6 h-6" />
      </div>
    )}
    <h3 className="text-white text-lg mb-3">{title}</h3>
    <div className="text-sm text-gray-300 space-y-2 flex-1">
      <p>
        <span className="text-gray-500">Solution — </span>
        {solution}
      </p>
      <p className="text-amber-400">
        <span className="text-gray-500">Outcome — </span>
        {outcome}
      </p>
    </div>
    {footer && (
      <div className="mt-4 pt-4 border-t border-gray-700">{footer}</div>
    )}
  </article>
);

// Large-metric KPI card for Business Outcomes.
const KPICard = ({ metric, label, industry }) => (
  <div className="bg-gray-900 rounded-2xl border border-gray-700 p-6 text-center hover:border-blue-500 transition-all duration-300">
    <div className="text-3xl md:text-4xl bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent mb-2">
      {metric}
    </div>
    <div className="text-white text-sm mb-1">{label}</div>
    {industry && <div className="text-gray-500 text-xs">{industry}</div>}
  </div>
);

// Why-Ascentia card: headline + short explanation + supporting metric.
const WhyCard = ({ icon: Icon, title, description, metric }) => (
  <div className="group relative bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-2xl border border-gray-700 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-500">
    <div className="flex items-center gap-4 mb-3">
      <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 text-white group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-base text-white leading-tight">{title}</h3>
    </div>
    <p className="text-gray-300 text-sm leading-relaxed mb-3">{description}</p>
    <div className="text-amber-400 text-sm">{metric}</div>
  </div>
);

// Accordion group (same visual/interaction pattern used across the site).
const AccordionGroup = ({ items, activeId, onToggle }) => (
  <div className="space-y-4">
    {items.map((item) => (
      <div
        key={item.id}
        className="bg-gray-900 rounded-2xl border border-gray-700 overflow-hidden hover:border-blue-500 transition-all duration-300"
      >
        <button
          className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-800 transition-colors"
          onClick={() => onToggle(activeId === item.id ? null : item.id)}
        >
          <span className="text-white pr-4">{item.title}</span>
          {activeId === item.id ? (
            <ChevronUp className="w-5 h-5 text-blue-400 flex-shrink-0" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
          )}
        </button>
        {activeId === item.id && (
          <div className="px-6 pb-5 bg-gray-800/60">
            <div className="border-t border-gray-700 pt-4">{item.content}</div>
          </div>
        )}
      </div>
    ))}
  </div>
);

const AI_ML = () => {
  const [expandedFAQ, setExpandedFAQ] = useState(null);
  const [expandedService, setExpandedService] = useState(0);
  const { openConsultation } = useConsultation();

  /* ===========================================================
   * DATA
   * =========================================================== */

  const heroServiceTags = [
    { icon: <Bot className="w-4 h-4" />, label: "AI Agents" },
    { icon: <Sparkles className="w-4 h-4" />, label: "Generative AI" },
    { icon: <Eye className="w-4 h-4" />, label: "Computer Vision" },
    { icon: <BarChart3 className="w-4 h-4" />, label: "Predictive Analytics" },
    { icon: <Brain className="w-4 h-4" />, label: "Machine Learning" },
    { icon: <MessageSquare className="w-4 h-4" />, label: "NLP" },
    { icon: <Target className="w-4 h-4" />, label: "Recommendation Systems" },
  ];

  const executiveChecks = [
    "Reduce Operational Costs",
    "Automate Manual Processes",
    "Improve Forecast Accuracy",
    "Increase Productivity",
    "Enterprise-Ready AI",
    "Secure Deployment",
  ];

  const trustMetrics = [
    { number: "120+", label: "Projects Delivered" },
    { number: "7+", label: "Years of Experience" },
    { number: "10+", label: "Industries Served" },
    { number: "98%", label: "Project Success Rate" },
    { number: "95%", label: "Client Satisfaction" },
  ];

  // 2. Business Problems
  const businessProblems = [
    {
      icon: Workflow,
      title: "Manual Business Processes",
      problem: "Teams lose hours to repetitive manual work.",
      solution: "Intelligent process automation.",
      outcome: "50-70% less manual work",
    },
    {
      icon: BarChart3,
      title: "Poor Forecasting Accuracy",
      problem: "Decisions rely on guesswork and averages.",
      solution: "Predictive analytics & ML models.",
      outcome: "85-95% forecast accuracy",
    },
    {
      icon: TrendingUp,
      title: "High Operational Costs",
      problem: "Inefficiencies quietly erode margins.",
      solution: "AI-driven process optimization.",
      outcome: "20-40% cost reduction",
    },
    {
      icon: Zap,
      title: "Slow Decision Making",
      problem: "Insights arrive too late to act on.",
      solution: "Real-time data intelligence.",
      outcome: "10x faster decisions",
    },
    {
      icon: Bot,
      title: "Low Productivity",
      problem: "Teams are stretched across repetitive tasks.",
      solution: "Workflow automation & AI agents.",
      outcome: "30-50% productivity gain",
    },
    {
      icon: Target,
      title: "Poor Customer Experience",
      problem: "Generic experiences fail to convert.",
      solution: "Personalization & recommendation systems.",
      outcome: "25-40% higher satisfaction",
    },
    {
      icon: Eye,
      title: "Quality Control Failures",
      problem: "Manual inspection misses costly defects.",
      solution: "Computer vision & defect detection.",
      outcome: "95-99% detection accuracy",
    },
    {
      icon: Layers,
      title: "Inventory Waste",
      problem: "Overstock and stockouts drain cash.",
      solution: "Demand forecasting & optimization.",
      outcome: "20-40% waste reduction",
    },
  ];

  // 3. Business Outcomes (KPI cards)
  const businessOutcomes = [
    {
      metric: "20-40%",
      label: "Operational Cost Reduction",
      industry: "Manufacturing, Logistics, Retail",
    },
    {
      metric: "30-50%",
      label: "Productivity Increase",
      industry: "All Industries",
    },
    {
      metric: "85-95%",
      label: "Forecasting Accuracy",
      industry: "Supply Chain, Finance, Retail",
    },
    { metric: "10x", label: "Faster Decisions", industry: "All Industries" },
    {
      metric: "25-40%",
      label: "Customer Satisfaction Gain",
      industry: "E-commerce, Healthcare, Finance",
    },
    { metric: "15-30%", label: "Revenue Growth", industry: "All Industries" },
    {
      metric: "50-70%",
      label: "Manual Work Reduction",
      industry: "All Industries",
    },
    {
      metric: "95-99%",
      label: "Defect Detection Accuracy",
      industry: "Manufacturing, Textile, Quality",
    },
  ];

  // 4. Why Ascentia Labs
  const whyMetrics = [
    { number: "120+", label: "Projects Delivered" },
    { number: "10+", label: "Industries Served" },
    { number: "7+", label: "Years of Experience" },
    { number: "4+", label: "Countries Served" },
    { number: "95%+", label: "Client Satisfaction" },
    { number: "98%", label: "Project Success Rate" },
  ];

  const whyReasons = [
    {
      icon: Award,
      title: "AI Specialists, Not Generalists",
      description:
        "Every team member is an AI expert — from data scientists to ML engineers.",
      metric: "120+ AI/ML projects",
    },
    {
      icon: Lock,
      title: "Enterprise-Grade Development",
      description:
        "Secure, scalable, production-ready systems with industry-leading security protocols.",
      metric: "ISO-aligned security",
    },
    {
      icon: Sparkles,
      title: "Custom Model Development",
      description:
        "No off-the-shelf solutions — every model is built for your specific data and use case.",
      metric: "100% custom-built",
    },
    {
      icon: Brain,
      title: "Deep Learning & Neural Networks",
      description:
        "Advanced capabilities across deep learning, transformers, and large language models.",
      metric: "LLM & transformer expertise",
    },
    {
      icon: Workflow,
      title: "MLOps & Model Deployment",
      description:
        "End-to-end MLOps — from training to deployment, monitoring, and optimization.",
      metric: "Continuous model uptime",
    },
    {
      icon: ShieldCheck,
      title: "Long-Term Partnership",
      description:
        "Ongoing model maintenance, retraining, and support — not just one-off delivery.",
      metric: "95%+ client satisfaction",
    },
  ];

  // 5. AI Services — Problem → Solution → Outcome, accordion cards
  const services = [
    {
      icon: Target,
      title: "AI Strategy & Consulting",
      problem:
        "You know AI can transform your business, but don\u2019t know where to start.",
      solution:
        "We identify high-impact use cases, assess data readiness, and build a practical AI roadmap prioritized by ROI.",
      outcome:
        "A clear, prioritized AI roadmap with ROI projections and a risk/compliance framework.",
    },
    {
      icon: Sparkles,
      title: "Generative AI Development",
      problem:
        "You want custom generative AI — not generic off-the-shelf tools.",
      solution:
        "We build custom solutions on OpenAI, Anthropic, Google, and open-source models, fine-tuned on your data.",
      outcome:
        "50-80% less content creation time, 24/7 AI-powered support, new AI-driven revenue streams.",
    },
    {
      icon: Bot,
      title: "AI Agent Development",
      problem:
        "You need autonomous agents that act without human intervention.",
      solution:
        "We build agentic systems with LangChain, AutoGen, and custom frameworks that automate workflows and decisions.",
      outcome:
        "50-70% less manual work, 24/7 autonomous operations, scalable automation.",
    },
    {
      icon: Eye,
      title: "Computer Vision Services",
      problem:
        "You need to analyze images and video at scale — inspection, security, retail.",
      solution:
        "Custom vision systems using deep learning, CNNs, and vision transformers.",
      outcome:
        "95-99% defect detection accuracy, 50-80% less manual inspection.",
    },
    {
      icon: BarChart3,
      title: "Predictive Analytics Services",
      problem: "Decisions rely on guesswork instead of accurate predictions.",
      solution:
        "Custom predictive models using ML, time series, and deep learning.",
      outcome:
        "85-95% forecast accuracy, 20-40% cost reduction, proactive decisions.",
    },
    {
      icon: MessageSquare,
      title: "Natural Language Processing",
      problem: "Massive text data sits unused — feedback, tickets, contracts.",
      solution:
        "Custom NLP for classification, sentiment, extraction, and conversational AI using transformers and LLMs.",
      outcome:
        "80-90% less manual text processing, real-time customer insights.",
    },
    {
      icon: ShoppingCart,
      title: "Recommendation Systems",
      problem:
        "Customers aren\u2019t finding what they want — you\u2019re losing sales.",
      solution:
        "Custom recommendation engines using collaborative, content-based, and hybrid filtering.",
      outcome: "15-30% sales increase, 25-40% better engagement and retention.",
    },
    {
      icon: Brain,
      title: "Machine Learning Development",
      problem: "You have data but aren\u2019t using it to predict or optimize.",
      solution:
        "Custom ML models for classification, regression, clustering, and optimization.",
      outcome:
        "20-40% operational improvement, competitive advantage from data.",
    },
  ];

  // 6. Industry Solutions
  const industrySolutions = [
    {
      icon: Factory,
      title: "Manufacturing & Industrial AI",
      applications: [
        "Predictive maintenance — 45% downtime reduction",
        "Quality inspection — 98% defect detection",
        "Production optimization — 25% output increase",
      ],
      industries: "Textile, Automotive, Electronics, FMCG",
    },
    {
      icon: Stethoscope,
      title: "Healthcare AI",
      applications: [
        "Medical image analysis",
        "Clinical decision support",
        "Patient outcome prediction",
      ],
      industries: "Hospitals, Pharma, Biotech, Diagnostics",
    },
    {
      icon: ShoppingCart,
      title: "Retail & E-commerce AI",
      applications: [
        "Recommendation systems — 15-30% sales increase",
        "Demand forecasting — 85-95% accuracy",
        "Customer personalization",
      ],
      industries: "E-commerce, Retail Chains, D2C Brands",
    },
    {
      icon: Landmark,
      title: "Financial Services AI",
      applications: [
        "Fraud detection",
        "Credit scoring",
        "Algorithmic trading & risk management",
      ],
      industries: "Banking, Insurance, Fintech, Investment",
    },
    {
      icon: Truck,
      title: "Logistics & Supply Chain AI",
      applications: [
        "Route optimization",
        "Demand forecasting",
        "Warehouse automation",
      ],
      industries: "Logistics, Transportation, Warehousing",
    },
  ];

  // 7. Development Process
  const processSteps = [
    {
      number: "1",
      title: "Discovery",
      duration: "1-2 weeks",
      description: "Business problem definition and feasibility analysis.",
    },
    {
      number: "2",
      title: "Business Analysis",
      duration: "2-3 weeks",
      description: "Data assessment, use case prioritization, ROI modeling.",
    },
    {
      number: "3",
      title: "Solution Architecture",
      duration: "2-3 weeks",
      description: "Technology selection and data pipeline planning.",
    },
    {
      number: "4",
      title: "AI Development",
      duration: "4-12 weeks",
      description: "Data preparation, model training, and experimentation.",
    },
    {
      number: "5",
      title: "Testing",
      duration: "2-4 weeks",
      description: "Model validation, performance testing, QA.",
    },
    {
      number: "6",
      title: "Deployment",
      duration: "2-4 weeks",
      description: "Model deployment, integration, MLOps setup.",
    },
    {
      number: "7",
      title: "Support",
      duration: "Continuous",
      description: "Ongoing monitoring, retraining, and optimization.",
    },
  ];

  // 8. Technology Capabilities (capability-first, not logos)
  const techCategories = [
    {
      title: "Generative AI",
      capabilities: "GPT-4/o1, Claude, Gemini",
      value: "Enterprise copilots, content automation, knowledge assistants",
    },
    {
      title: "Machine Learning & Deep Learning",
      capabilities: "PyTorch, TensorFlow",
      value: "Custom model development, production ML systems",
    },
    {
      title: "AI Agents & Orchestration",
      capabilities: "LangChain, AutoGen",
      value: "Agentic workflows, RAG systems, autonomous collaboration",
    },
    {
      title: "Computer Vision & NLP",
      capabilities: "OpenCV, Hugging Face",
      value: "Image/video analysis, NLP models, fine-tuning",
    },
    {
      title: "MLOps & Deployment",
      capabilities: "Kubeflow, MLflow, Docker/Kubernetes",
      value: "Model deployment, monitoring, scalable production",
    },
  ];

  // 9. Case Studies
  const caseStudies = [
    {
      title: "Manufacturing Quality Inspection",
      rows: [
        {
          metric: "Defect Detection",
          before: "60-70% accuracy",
          after: "98% accuracy",
        },
        {
          metric: "Inspection Speed",
          before: "Manual (slow)",
          after: "2.5x faster",
        },
        { metric: "Defect Rejections", before: "25-30%", after: "5-10%" },
      ],
      impact: "Annual Savings: US$275K+",
    },
    {
      title: "Retail Recommendation System",
      rows: [
        { metric: "Conversion Rate", before: "2.5%", after: "3.8%" },
        { metric: "Average Order Value", before: "$150", after: "$195" },
        { metric: "Customer Retention", before: "45%", after: "62%" },
      ],
      impact: "Annual Revenue Impact: US$1.9M+",
    },
    {
      title: "Predictive Maintenance",
      rows: [
        {
          metric: "Unplanned Downtime",
          before: "8 hrs/week",
          after: "4.4 hrs/week",
        },
        {
          metric: "Maintenance Costs",
          before: "$100K/month",
          after: "$68K/month",
        },
        {
          metric: "Machine Life",
          before: "10 yrs projected",
          after: "14 yrs projected",
        },
      ],
      impact: "Annual Savings: $575K+",
    },
  ];

  // 10. Testimonials
  const testimonials = [
    {
      quote:
        "Ascentia Labs delivered a computer vision solution that reduced our defect rate by 70%. Their AI expertise set them apart.",
      role: "VP of Manufacturing",
      industry: "Leading Textile Mill",
    },
    {
      quote:
        "The recommendation system increased our conversion rate by 52% and average order value by 30%. Game-changing results.",
      role: "CTO",
      industry: "E-commerce Platform",
    },
    {
      quote:
        "Their AI strategy consulting helped us identify 8 high-impact use cases. Within 6 months, 3 models were in production.",
      role: "Head of Digital",
      industry: "Enterprise Retailer",
    },
  ];

  // 11. Related AI Services
  const relatedServices = [
    {
      title: "AI & Machine Learning",
      description:
        "Improve quality control, reduce fabric waste, predict machine failures, and optimize production with AI solutions built for textile manufacturers.",
      href: "/ai-ml-services",
    },
    {
      title: "Digital Transformation",
      description:
        "Replace manual operations with connected digital workflows, real-time production monitoring, inventory visibility, and factory automation.",
      href: "/digital-transformation",
    },
    {
      title: "Software Engineering",
      description:
        "Build custom textile manufacturing software including ERP integrations, production management, inventory systems, and enterprise applications.",
      href: "/software-engineering",
    },
  ];

  // 12. Related Resources
  const relatedResources = [
    {
      title: "AI in Manufacturing: Trends & Applications",
      topic: "Industrial AI",
      href: "#",
    },
    {
      title: "Generative AI: A Guide for Enterprises",
      topic: "GenAI Adoption",
      href: "#",
    },
    {
      title: "How to Choose an AI Development Partner",
      topic: "Selection Criteria",
      href: "#",
    },
  ];

  // 13. FAQ
  const faqs = [
    {
      question: "What AI/ML development services do you offer?",
      answer:
        "AI strategy & consulting, custom machine learning, generative AI (LLM applications), AI agents, computer vision, NLP, predictive analytics, recommendation systems, and MLOps — all custom-built for your business problem and data.",
    },
    {
      question: "How long does it take to develop an AI solution?",
      answer:
        "Discovery & Strategy: 2-4 weeks. MVP Development: 6-12 weeks. Full Production System: 12-24 weeks. Most enterprise AI projects complete in 3-6 months from discovery to deployment.",
    },
    {
      question: "What does AI development cost?",
      answer:
        "AI Strategy & Consulting: $7K-$21K. Custom ML Models: $14K-$70K. Generative AI/LLM Apps: $21K-$84K. Computer Vision: $14K-$56K. Full Enterprise AI Platform: $70K-$420K+. We provide fixed-price quotes with ROI projections.",
    },
    {
      question: "Can you integrate AI with our existing systems (ERP, CRM)?",
      answer:
        "Yes — SAP, Oracle, Dynamics, Tally, Salesforce, HubSpot, Zoho, Snowflake, Databricks, AWS/Azure/GCP, and custom applications, with minimal disruption to operations.",
    },
    {
      question: "Do you provide model maintenance and retraining?",
      answer:
        "Yes, as part of our MLOps services — continuous monitoring and periodic retraining so your models stay accurate as data patterns change.",
    },
    {
      question: "What security and compliance measures do you follow?",
      answer:
        "AES-256 encryption, role-based access with MFA, GDPR/HIPAA/ISO 27001-aligned compliance, and secure development following OWASP Top 10 practices.",
    },
    {
      question: "What\u2019s your approach to data privacy?",
      answer:
        "Client data is never used to train public models. All data is processed in secure, isolated environments under NDAs and data processing agreements — on-premises or in your own cloud.",
    },
    {
      question: "Do you offer support after deployment?",
      answer:
        "Yes — 24/7 monitoring, ongoing maintenance, periodic retraining, dedicated technical support, and SLAs for response and resolution times.",
    },
  ].map((f, i) => ({
    id: i,
    title: f.question,
    content: (
      <p className="text-gray-300 text-sm leading-relaxed">{f.answer}</p>
    ),
  }));

  return (
    <div className="min-h-screen bg-white">
      <SEO {...seoData.aiMl} />

      {/* ================= HERO ================= */}
      <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white px-4 sm:px-6 lg:px-8 overflow-hidden pt-20 sm:pt-24 lg:pt-28 pb-16">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 left-20 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 right-40 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-black"></div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left — Enterprise headline & description */}
            <div>
              <div className="inline-block px-4 py-2 bg-blue-500/30 rounded-full text-sm mb-4 sm:mb-6 backdrop-blur-sm">
                Industry&apos;s Favorite
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl mb-4 sm:mb-6 leading-tight">
                AI Development Services — Machine Learning, Generative AI &amp;
                Enterprise Solutions
              </h1>
              <p className="text-base sm:text-lg text-blue-100 mb-4 leading-relaxed max-w-xl">
                Transform your business with custom AI that drives measurable
                outcomes — from predictive analytics and computer vision to
                generative AI and intelligent automation.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button
                  onClick={openConsultation}
                  className="px-8 py-4 bg-gradient-to-r from-amber-400 to-orange-500 text-black rounded-xl hover:from-amber-500 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 inline-flex items-center justify-center gap-2"
                >
                  📞 Book Free AI Strategy Session
                  <ArrowRight className="w-5 h-5" />
                </button>
                <a
                  href="#services-heading"
                  className="px-8 py-4 border border-white/30 text-white rounded-xl hover:bg-white/10 transition-all duration-300 text-center"
                >
                  Explore Services
                </a>
              </div>

              <ul className="flex flex-wrap gap-2">
                {heroServiceTags.map((tag, i) => (
                  <li
                    key={i}
                    className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 rounded-full px-3 py-1.5 text-xs text-blue-100"
                  >
                    {tag.icon}
                    {tag.label}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right — Executive Summary Panel */}
          </div>

          {/* Trust metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 mt-16 pt-10 border-t border-blue-400/30">
            {trustMetrics.map((stat, index) => (
              <StatCard key={index} number={stat.number} label={stat.label} />
            ))}
          </div>
        </div>

        <style>{`
            @keyframes blob {
              0%, 100% { transform: translate(0, 0) scale(1); }
              33% { transform: translate(30px, -50px) scale(1.1); }
              66% { transform: translate(-20px, 20px) scale(0.9); }
            }
            .animate-blob { animation: blob 7s infinite; }
            .animation-delay-2000 { animation-delay: 0.4s; }
            .animation-delay-4000 { animation-delay: 4s; }
          `}</style>
      </section>

      {/* ================= BUSINESS PROBLEMS ================= */}
      <section
        className="py-16 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden"
        aria-labelledby="problems-heading"
      >
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-blue-900/40 to-transparent pointer-events-none"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2
              id="problems-heading"
              className="text-3xl sm:text-4xl bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent mb-3"
            >
              Can AI Solve Your Business Problems?
            </h2>
            <p className="text-base text-gray-400 max-w-2xl mx-auto">
              If you&apos;re facing any of these challenges, AI can help.
              Here&apos;s how.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {businessProblems.map((p, i) => (
              <FlowCard
                key={i}
                icon={p.icon}
                title={p.title}
                problem={p.problem}
                solution={p.solution}
                outcome={p.outcome}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ================= BUSINESS OUTCOMES ================= */}
      <section
        className="py-16 bg-gradient-to-br from-gray-900 via-blue-900 to-black relative overflow-hidden"
        aria-labelledby="outcomes-heading"
      >
        <div className="relative container mx-auto px-4">
          <div className="text-center mb-10">
            <h2
              id="outcomes-heading"
              className="text-3xl md:text-4xl text-white mb-3"
            >
              What Our AI Solutions Deliver
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Executives buy outcomes, not technology. Here&apos;s what we
              deliver.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {businessOutcomes.map((o, i) => (
              <KPICard
                key={i}
                metric={o.metric}
                label={o.label}
                industry={o.industry}
              />
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-black pointer-events-none"></div>
      </section>

      {/* ================= WHY ASCENTIA LABS ================= */}
      <section
        className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden"
        aria-labelledby="why-us-heading"
      >
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-blue-900/40 to-transparent pointer-events-none"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2
              id="why-us-heading"
              className="text-3xl sm:text-4xl bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent mb-3"
            >
              Why Leading Enterprises Choose Ascentia Labs
            </h2>
            <p className="text-base text-gray-300 max-w-2xl mx-auto">
              Partner with AI/ML experts who deliver measurable business
              outcomes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyReasons.map((item, i) => (
              <WhyCard
                key={i}
                icon={item.icon}
                title={item.title}
                description={item.description}
                metric={item.metric}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ================= AI SERVICES ================= */}
      {/* ================= AI SERVICES ================= */}
      <section
        className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-blue-900 to-black relative overflow-hidden"
        aria-labelledby="services-heading"
      >
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2
              id="services-heading"
              className="text-3xl sm:text-4xl text-white mb-3"
            >
              Our AI &amp; Machine Learning Services
            </h2>
            <p className="text-base text-gray-300 max-w-2xl mx-auto">
              Comprehensive AI/ML solutions — from strategy to deployment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 items-start">
            {services.map((s, i) => {
              const IconComponent = s.icon;
              const isOpen = expandedService === i;
              return (
                <article
                  key={i}
                  className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 overflow-hidden hover:border-white/40 transition-all duration-300"
                >
                  <button
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4"
                    onClick={() => setExpandedService(isOpen ? null : i)}
                  >
                    <span className="flex items-center gap-3">
                      <span className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-400 to-orange-500 text-black flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-5 h-5" />
                      </span>
                      <span className="text-white">{s.title}</span>
                    </span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-blue-300 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-blue-300 flex-shrink-0" />
                    )}
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 text-sm text-gray-200 space-y-2">
                      <p>
                        <span className="text-blue-300">Problem — </span>
                        {s.problem}
                      </p>
                      <p>
                        <span className="text-blue-300">Solution — </span>
                        {s.solution}
                      </p>
                      <p className="text-amber-300">
                        <span className="text-blue-300">Outcome — </span>
                        {s.outcome}
                      </p>
                      <button
                        onClick={openConsultation}
                        className="text-amber-400 text-sm font-medium inline-flex items-center gap-1 hover:gap-2 transition-all mt-2"
                      >
                        Talk to us about this <ArrowRight size={14} />
                      </button>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-black pointer-events-none"></div>
      </section>

      {/* ================= INDUSTRY SOLUTIONS ================= */}
      <section
        className="py-16 px-4 sm:px-6 lg:px-8 bg-black"
        aria-labelledby="industry-heading"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2
              id="industry-heading"
              className="text-3xl sm:text-4xl bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent mb-3"
            >
              AI Solutions by Industry
            </h2>
            <p className="text-base text-gray-400 max-w-2xl mx-auto">
              Deep domain expertise, proven results, across every industry we
              serve.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industrySolutions.map((ind, i) => {
              const IconComponent = ind.icon;
              return (
                <article
                  key={i}
                  className="bg-gray-900 rounded-2xl border border-gray-700 p-6 hover:border-blue-500 transition-all duration-300 flex flex-col"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center text-white mb-4">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-white text-lg mb-3">{ind.title}</h3>
                  <ul className="text-sm text-gray-300 space-y-1.5 mb-4 flex-1 list-none">
                    {ind.applications.map((a, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                        <span>{a}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-gray-500 text-xs mb-4">{ind.industries}</p>
                  <button
                    onClick={openConsultation}
                    className="text-amber-400 text-sm font-medium inline-flex items-center gap-1 hover:gap-2 transition-all"
                  >
                    Talk to us about this <ArrowRight size={14} />
                  </button>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= DEVELOPMENT PROCESS ================= */}
      <section
        className="py-16 bg-gradient-to-br from-gray-900 via-blue-900 to-black relative overflow-hidden"
        aria-labelledby="process-heading"
      >
        <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black to-transparent"></div>
        <div className="relative container mx-auto px-4">
          <div className="text-center mb-10">
            <h2
              id="process-heading"
              className="text-3xl md:text-4xl text-white mb-3"
            >
              Our AI Development Process
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              A proven 7-step process — 12-24 weeks from concept to production.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-14 h-14 bg-gradient-to-r from-amber-400 to-orange-500 text-black rounded-full flex items-center justify-center text-lg font-extrabold mb-2 mx-auto">
                  {step.number}
                </div>
                <h3 className="font-medium text-white text-sm mb-1">
                  {step.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-black"></div>
      </section>

      {/* ================= TECHNOLOGY CAPABILITIES ================= */}
      <section
        className="py-16 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden"
        aria-labelledby="tech-heading"
      >
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-blue-900/40 to-transparent pointer-events-none"></div>
        <div className="relative max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2
              id="tech-heading"
              className="text-3xl sm:text-4xl bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent mb-3"
            >
              Our AI Technology Stack
            </h2>
            <p className="text-base text-gray-400 max-w-2xl mx-auto">
              The latest AI technologies — mapped to business capability, not
              logos.
            </p>
          </div>
          <div className="space-y-4">
            {techCategories.map((t, i) => (
              <div
                key={i}
                className="bg-gray-900 rounded-2xl border border-gray-700 p-6 grid sm:grid-cols-3 gap-4 items-center hover:border-blue-500 transition-all duration-300"
              >
                <h3 className="text-white text-base">{t.title}</h3>
                <p className="text-gray-400 text-sm">{t.capabilities}</p>
                <p className="text-amber-400 text-sm">{t.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CASE STUDIES ================= */}
      <section
        className="py-16 bg-gradient-to-br from-gray-900 via-blue-900 to-black relative overflow-hidden"
        aria-labelledby="case-studies-heading"
      >
        <div className="relative container mx-auto px-4">
          <div className="text-center mb-10">
            <h2
              id="case-studies-heading"
              className="text-3xl md:text-4xl text-white mb-3"
            >
              AI Success Stories — Measurable Results
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Real results from real AI projects.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((cs, i) => (
              <article
                key={i}
                className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6"
              >
                <h3 className="text-white text-lg mb-4">{cs.title}</h3>
                <div className="space-y-3 mb-4">
                  {cs.rows.map((r, idx) => (
                    <div key={idx} className="text-sm">
                      <div className="text-gray-300 mb-1">{r.metric}</div>
                      <div className="flex items-center gap-2 text-xs">
                        <span className="text-gray-400">{r.before}</span>
                        <ArrowRight size={12} className="text-blue-300" />
                        <span className="text-amber-400">{r.after}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-amber-400 text-sm font-medium border-t border-white/20 pt-3">
                  {cs.impact}
                </p>
              </article>
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-black pointer-events-none"></div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section
        className="py-16 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden"
        aria-labelledby="testimonials-heading"
      >
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-blue-900/40 to-transparent pointer-events-none"></div>
        <div className="relative max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2
              id="testimonials-heading"
              className="text-3xl sm:text-4xl bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent mb-3"
            >
              What Our Clients Say
            </h2>
            <p className="text-base text-gray-400 max-w-2xl mx-auto">
              Trusted by enterprises across 10+ industries.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <figure
                key={i}
                className="bg-gray-900 rounded-2xl border border-gray-700 p-6 flex flex-col"
              >
                <blockquote className="text-gray-200 text-sm leading-relaxed mb-4 flex-1">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="text-sm border-t border-gray-700 pt-3">
                  <div className="text-white">{t.role}</div>
                  <div className="text-gray-500 text-xs">{t.industry}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ================= RELATED AI SERVICES ================= */}
      <section
        className="py-16 px-4 sm:px-6 lg:px-8 bg-black"
        aria-labelledby="related-services-heading"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2
              id="related-services-heading"
              className="text-3xl sm:text-4xl bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent mb-3"
            >
              Related AI Services
            </h2>
            <p className="text-base text-gray-400 max-w-2xl mx-auto">
              Explore our full suite of AI and machine learning solutions.
            </p>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 list-none">
            {relatedServices.map((s, i) => (
              <li key={i}>
                <Link
                  to={s.href}
                  className="block bg-gray-900 rounded-xl border border-gray-700 p-6 h-full hover:border-blue-500 hover:bg-gray-800 transition-all duration-300"
                >
                  <h3 className="text-white text-base mb-2">{s.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{s.description}</p>
                  <span className="text-amber-400 text-sm font-medium inline-flex items-center gap-1">
                    Learn more <ArrowRight size={14} />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ================= RELATED RESOURCES ================= */}
      <section
        className="py-16 bg-gradient-to-br from-gray-900 via-blue-900 to-black relative overflow-hidden "
        aria-labelledby="related-resources-heading"
      >
        <div className="relative container mx-auto px-4">
          <div className="text-center mb-10">
            <h2
              id="related-resources-heading"
              className="text-3xl md:text-4xl text-white mb-3"
            >
              Continue Learning — AI &amp; ML Resources
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Deepen your understanding of AI and machine learning.
            </p>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 list-none">
            {relatedResources.map((r, i) => (
              <li key={i}>
                <Link
                  to={r.href}
                  className="block bg-white/10 backdrop-blur-md rounded-xl p-5 border border-white/20 h-full hover:bg-white/15 transition-all duration-300"
                >
                  <figure className="m-0">
                    <figcaption className="text-amber-400 text-xs font-semibold uppercase tracking-wide mb-2">
                      {r.topic}
                    </figcaption>
                    <h3 className="text-white text-base font-medium leading-snug">
                      {r.title}
                    </h3>
                  </figure>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-black pointer-events-none"></div>
      </section>

      {/* ================= FAQ ================= */}
      <section
        className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden"
        aria-labelledby="faq-heading"
      >
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2
              id="faq-heading"
              className="text-3xl sm:text-4xl bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent mb-3"
            >
              Frequently Asked Questions — AI &amp; ML Services
            </h2>
            <p className="text-base text-gray-300">
              Get answers to common questions about our AI &amp; ML services.
            </p>
          </div>
          <AccordionGroup
            items={faqs}
            activeId={expandedFAQ}
            onToggle={setExpandedFAQ}
          />
        </div>
      </section>
    </div>
  );
};

export default AI_ML;
