import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useConsultation } from '../../../contexts/ConsultationContext';
import SEO from '../../../components/SEO';
import ReadMore from '../../../components/ReadMore';
import { seoData } from '../../../utils/seoData';
import { 
  Code, 
  Shield, 
  ChevronDown, 
  ChevronUp, 
  Cpu, 
  Database, 
  Cloud, 
  TrendingUp,
  Zap,
  Lock,
  Layers,
  Smartphone,
  Workflow,
  Award,
  ArrowRight,
  MessageSquare,
  Monitor,
  Globe,
  Settings,
  BarChart3,
  Building2 
} from 'lucide-react';

const CustomCRMDevelopment = () => {
  const [activeTab, setActiveTab] = useState('enterprise');
  const [expandedFAQ, setExpandedFAQ] = useState(null);
  const { openConsultation } = useConsultation();

    const whyChooseUs = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Proven CRM Development Experience",
      description: "7+ years of experience crafting innovative, secure and scalable custom CRM solutions across various industries and business sizes."
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Security-Focused CRM Development",
      description: "Industry-leading security protocols with robust encryption and compliance standards for reliable, secure CRM implementation."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Scalability & Flexibility",
      description: "Scalable CRM solutions designed to grow with your business, adapting to evolving requirements and future-proofing your investment."
    },
    {
      icon: <Workflow className="w-8 h-8" />,
      title: "End-to-End CRM Development",
      description: "Complete CRM lifecycle management from concept to deployment, allowing you to focus on your core business operations."
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Transparency and Communication",
      description: "Clear communication with regular updates and transparent discussions throughout your CRM development project lifecycle."
    },
    {
      icon: <Zap className="w-7 h-7" />,
      title: "Cost-Effective CRM Solutions",
      description: "Exceptional value with competitive pricing, focusing on efficiency, reduced costs, and maximum ROI for your CRM investment."
    }
  ];

  const services = [
    {
      id: 'enterprise',
      name: 'Enterprise CRM',
      icon: <Settings className="w-5 h-5" />,
      title: 'Enterprise-Grade CRM Solutions',
      description: 'Our enterprise CRM development experts create comprehensive, scalable solutions designed for large organizations, facilitating complex workflows, multi-department coordination, and advanced automation to drive operational excellence and customer satisfaction across your entire enterprise.',
      techLogos: [
        '/techLogo/React.png',
        '/techLogo/node js.png',
        '/techLogo/python.png',
        '/techLogo/Java.png',
        '/techLogo/aws.png',
        '/techLogo/mongo db.png'
      ]
    },
    {
      id: 'sales',
      name: 'Sales CRM',
      icon: <TrendingUp className="w-5 h-5" />,
      title: 'Custom Sales CRM Development',
      description: 'Our sales CRM experts build powerful, intuitive sales automation platforms, facilitating lead management, pipeline tracking, and sales forecasting, optimizing team productivity, and ensuring seamless customer engagement to accelerate your revenue growth and sales performance.',
      techLogos: [
        '/techLogo/React.png',
        '/techLogo/Angular.png',
        '/techLogo/node js.png',
        '/techLogo/typescript.png',
        '/techLogo/mysql.png',
        '/techLogo/microsoft azure.png'
      ]
    },
    {
      id: 'integration',
      name: 'CRM Integration',
      icon: <Workflow className="w-5 h-5" />,
      title: 'Seamless CRM Integration Services',
      description: 'Our integration experts connect your CRM with existing business systems, facilitating data synchronization, API development, and third-party integrations, optimizing workflow automation, and ensuring unified customer data across all platforms for enhanced operational efficiency.',
      techLogos: [
        '/techLogo/node js.png',
        '/techLogo/python.png',
        '/techLogo/Java.png',
        '/techLogo/salesforce.png',
        '/techLogo/aws.png',
        '/techLogo/microsoft azure.png'
      ]
    },
    {
      id: 'analytics',
      name: 'CRM Analytics',
      icon: <BarChart3 className="w-5 h-5" />,
      title: 'Advanced CRM Analytics & Reporting',
      description: 'Our analytics experts develop comprehensive reporting and business intelligence solutions, facilitating custom dashboards, predictive analytics, and data visualization, optimizing decision-making processes, and ensuring actionable insights from your customer data for strategic growth.',
      techLogos: [
        '/techLogo/React.png',
        '/techLogo/python.png',
        '/techLogo/power bi.png',
        '/techLogo/mongo db.png',
        '/techLogo/mysql.png',
        '/techLogo/aws.png'
      ]
    },
    {
      id: 'mobile',
      name: 'Mobile CRM',
      icon: <Smartphone className="w-5 h-5" />,
      title: 'Mobile CRM Applications',
      description: 'Our mobile CRM experts build native and cross-platform mobile applications, facilitating on-the-go access, offline capabilities, and real-time synchronization, optimizing field sales productivity, and ensuring seamless customer management from any device, anywhere.',
      techLogos: [
        '/techLogo/React.png',
        '/techLogo/flutter.png',
        '/techLogo/swift.png',
        '/techLogo/kotlin.png',
        '/techLogo/Firebase.png',
        '/techLogo/node js.png'
      ]
    }
  ];

  const stats = [
    { number: '7+', label: 'Business Years' },
    { number: '100+', label: 'Projects Delivered' },
    { number: '10+', label: 'Industries Catered' },
    { number: '4+', label: 'Countries' }
  ];

  const faqs = [
    {
      question: "What is custom CRM development?",
      answer: "Custom CRM development involves building a customer relationship management system from scratch, tailored specifically to your business processes, workflows, and requirements. Unlike off-the-shelf solutions, custom CRMs are designed to fit your exact needs, providing better alignment with your business objectives and competitive advantages."
    },
    {
      question: "How long does it take to develop a custom CRM?",
      answer: "Development timelines vary based on complexity and scope. A basic CRM can be delivered in 3-4 months, while complex enterprise solutions may take 6-12 months or more. We provide detailed timelines and milestones during the planning phase to ensure transparency and alignment with your business goals."
    },
    {
      question: "Do you provide post-launch support and maintenance?",
      answer: "Yes, we offer comprehensive post-launch support including bug fixes, performance monitoring, security updates, feature enhancements, and technical support to ensure your CRM continues to perform optimally and evolves with your business needs."
    },
    {
      question: "Can you integrate the CRM with our existing systems?",
      answer: "Absolutely. We specialize in CRM integration and can seamlessly connect your new CRM with existing platforms, databases, APIs, ERP systems, marketing tools, and third-party services to ensure smooth data flow and operational continuity across your entire business ecosystem."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO {...seoData.customCRMDevelopment} />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white min-h-screen flex items-center px-4 sm:px-6 lg:px-8 overflow-hidden pt-20 sm:pt-24 lg:pt-0">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 left-20 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 right-40 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>
        
        {/* Smooth transition gradient at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-black"></div>
        
        <div className="max-w-7xl mx-auto w-full relative z-10 py-8 sm:py-12 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-block px-4 sm:mt-4 py-2 bg-blue-500/30 rounded-full text-sm  mb-4 sm:mb-6 backdrop-blur-sm">
                Bespoke CRM Solutions
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl  mb-4 sm:mb-6 leading-tight">
                Custom CRM Development Services
              </h1>
              <p className="text-base sm:text-lg text-blue-100 mb-6 sm:mb-8 leading-relaxed">
                At Ascentia Labs, we deliver cutting-edge custom CRM development solutions that transform your customer relationships. Our expert team specializes in building scalable, secure, and high-performance CRM systems using the latest technologies, tailored specifically to your unique business workflows and requirements.
              </p>
              <div className="mb-8 sm:mb-12">
                <button 
                  onClick={openConsultation}
                  className="px-10 py-4 bg-gradient-to-r from-amber-400 to-orange-500 text-black rounded-xl hover:from-amber-500 hover:to-orange-600 transition-all duration-300  shadow-lg hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 inline-flex items-center gap-2 "
                >
                  Get Consultation
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>

              {/* Stats - Mobile/Tablet */}
              <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:hidden">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 transform hover:scale-105 transition-transform duration-300">
                    <div className="text-3xl md:text-4xl  text-white mb-1">{stat.number}</div>
                    <div className="text-blue-200 text-xs sm:text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Visual Content - Service Cards Grid */}
            <div className="mt-8 lg:mt-0">
              {/* Central Feature Badge - At Top */}
              <div className="flex justify-center mb-6 animate-fadeIn">
                <div className="bg-white/15 backdrop-blur-lg rounded-xl border border-white/30 shadow-2xl px-5 py-2.5 hover:scale-105 transition-transform duration-300 cursor-pointer">
                  <div className="flex items-center gap-2.5">
                    <Settings className="w-7 h-7 text-white animate-pulse" />
                    <h3 className="text-sm sm:text-base  text-white">Custom CRM Excellence</h3>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {/* Card 1 - Enterprise CRM */}
                <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 shadow-xl p-5 sm:p-6 cursor-pointer group flex flex-col items-center justify-center text-center min-h-[140px] sm:min-h-[160px] transition-all duration-500 hover:scale-105 hover:-translate-y-3 hover:bg-white/25 hover:border-white/60 hover:shadow-2xl hover:shadow-blue-500/50 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/0 to-blue-600/0 group-hover:from-blue-400/20 group-hover:to-blue-600/10 transition-all duration-500 rounded-2xl"></div>
                  <Building2 className="w-12 h-12 sm:w-14 sm:h-14 text-white mb-3 transition-all duration-500 group-hover:scale-110 group-hover:-rotate-6 relative z-10" />
                  <h4 className="text-sm sm:text-base  text-white mb-1.5 relative z-10">Enterprise CRM</h4>
                  <p className="text-xs text-blue-100 leading-tight relative z-10 group-hover:text-white transition-colors duration-300">Large-scale solutions</p>
                </div>

                {/* Card 2 - Sales CRM */}
                <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 shadow-xl p-5 sm:p-6 cursor-pointer group flex flex-col items-center justify-center text-center min-h-[140px] sm:min-h-[160px] transition-all duration-500 hover:scale-105 hover:-translate-y-3 hover:bg-white/25 hover:border-white/60 hover:shadow-2xl hover:shadow-blue-500/50 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/0 to-blue-600/0 group-hover:from-blue-400/20 group-hover:to-blue-600/10 transition-all duration-500 rounded-2xl"></div>
                  <TrendingUp className="w-12 h-12 sm:w-14 sm:h-14 text-white mb-3 transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-2 relative z-10" />
                  <h4 className="text-sm sm:text-base  text-white mb-1.5 relative z-10">Sales CRM</h4>
                  <p className="text-xs text-blue-100 leading-tight relative z-10 group-hover:text-white transition-colors duration-300">Sales automation</p>
                </div>

                {/* Card 3 - CRM Integration */}
                <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 shadow-xl p-5 sm:p-6 cursor-pointer group flex flex-col items-center justify-center text-center min-h-[140px] sm:min-h-[160px] transition-all duration-500 hover:scale-105 hover:-translate-y-3 hover:bg-white/25 hover:border-white/60 hover:shadow-2xl hover:shadow-blue-500/50 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/0 to-blue-600/0 group-hover:from-blue-400/20 group-hover:to-blue-600/10 transition-all duration-500 rounded-2xl"></div>
                  <Workflow className="w-12 h-12 sm:w-14 sm:h-14 text-white mb-3 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 relative z-10" />
                  <h4 className="text-sm sm:text-base  text-white mb-1.5 relative z-10">CRM Integration</h4>
                  <p className="text-xs text-blue-100 leading-tight relative z-10 group-hover:text-white transition-colors duration-300">Seamless connectivity</p>
                </div>

                {/* Card 4 - CRM Analytics */}
                <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 shadow-xl p-5 sm:p-6 cursor-pointer group flex flex-col items-center justify-center text-center min-h-[140px] sm:min-h-[160px] transition-all duration-500 hover:scale-105 hover:-translate-y-3 hover:bg-white/25 hover:border-white/60 hover:shadow-2xl hover:shadow-blue-500/50 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/0 to-blue-600/0 group-hover:from-blue-400/20 group-hover:to-blue-600/10 transition-all duration-500 rounded-2xl"></div>
                  <BarChart3 className="w-12 h-12 sm:w-14 sm:h-14 text-white mb-3 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 relative z-10" />
                  <h4 className="text-sm sm:text-base  text-white mb-1.5 relative z-10">CRM Analytics</h4>
                  <p className="text-xs text-blue-100 leading-tight relative z-10 group-hover:text-white transition-colors duration-300">Data insights</p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats - Desktop */}
          <div className="hidden lg:grid grid-cols-4 gap-8 mt-20 pt-12 border-t border-blue-400/30">
            {stats.map((stat, index) => (
              <div key={index} className="text-center transform hover:scale-110 transition-transform duration-300 cursor-pointer">
                <div className="text-4xl md:text-5xl  text-white mb-2">{stat.number}</div>
                <div className="text-blue-200 text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
          @keyframes blob {
            0%, 100% { transform: translate(0, 0) scale(1); }
            33% { transform: translate(30px, -50px) scale(1.1); }
            66% { transform: translate(-20px, 20px) scale(0.9); }
          }
          @keyframes fadeIn {
            from { 
              opacity: 0; 
              transform: translateY(30px) scale(0.95); 
            }
            to { 
              opacity: 1; 
              transform: translateY(0) scale(1); 
            }
          }
          @keyframes gentleFloat {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-8px); }
          }
          .animate-float {
            animation: float 3s ease-in-out infinite;
          }
          .animate-blob {
            animation: blob 7s infinite;
          }
          .animate-fadeIn {
            animation: fadeIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
            animation-fill-mode: forwards;
          }
          .animation-delay-1000 {
            animation-delay: 0.2s;
          }
          .animation-delay-2000 {
            animation-delay: 0.4s;
          }
          .animation-delay-3000 {
            animation-delay: 0.6s;
          }
          .animation-delay-4000 {
            animation-delay: 4s;
          }
        `}</style>
      </section>

        {/* Services Tabs Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-32 h-32 bg-blue-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-40 left-20 w-24 h-24 bg-blue-300 rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-blue-500 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 right-1/2 w-20 h-20 bg-blue-200 rounded-full blur-2xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl  text-white mb-4">
              Our Custom CRM Development Services
            </h2>
            <p className="text-base sm:text-lg text-gray-400 max-w-3xl mx-auto">
              Comprehensive CRM development solutions tailored to your business needs
            </p>
          </div>

          {/* Service Tabs - Compact */}
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-3 mb-12">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveTab(service.id)}
                className={`group relative px-3 sm:px-5 py-3 rounded-xl  text-xs sm:text-sm transition-all duration-300 transform hover:scale-105 ${
                  activeTab === service.id
                    ? 'bg-gradient-to-r from-amber-400 to-orange-500 text-black shadow-lg shadow-amber-500/50'
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-800 border border-gray-700 hover:border-gray-600'
                }`}
              >
                <span className="inline-flex items-center gap-1 sm:gap-2">
                  {service.icon}
                  <span className="whitespace-nowrap">{service.name}</span>
                </span>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          {services.map((service) => (
            activeTab === service.id && (
              <div key={service.id} className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center animate-fadeIn">
                <div className="order-2 lg:order-1">
                  <h3 className="text-2xl sm:text-3xl  text-white mb-4 sm:mb-6">
                    {service.title}
                  </h3>
                  <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-6 sm:mb-8">
                    <ReadMore maxChars={120} mobileOnly={true} className="text-gray-300">
                      {service.description}
                    </ReadMore>
                  </p>
                 
                </div>
                <div className="order-1 lg:order-2">
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 p-8">
                    {/* Tech Logos Grid */}
                    <div className="grid grid-cols-3 gap-6">
                      {service.techLogos.map((logo, index) => (
                        <div 
                          key={index}
                          className="flex items-center justify-center p-4 bg-white rounded-2xl border border-gray-600 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 hover:scale-110 group"
                        >
                          <img 
                            src={logo} 
                            alt="Technology" 
                            className="w-full h-12 object-contain transition-all duration-300"
                          />
                        </div>
                      ))}
                    </div>
                    {/* Decorative elements */}
                    <div className="absolute top-4 right-4 w-20 h-20 bg-blue-500/10 rounded-full blur-2xl"></div>
                    <div className="absolute bottom-4 left-4 w-16 h-16 bg-blue-400/10 rounded-full blur-xl"></div>
                  </div>
                </div>
              </div>
            )
          ))}
        </div>
      </section>

      

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gradient-to-br from-gray-900 via-blue-900 to-black relative overflow-hidden">
        {/* Smooth transition gradient at top */}
        <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black to-transparent"></div>
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-32 h-32 bg-yellow-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-40 right-20 w-24 h-24 bg-yellow-300 rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-yellow-500 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 left-1/2 w-20 h-20 bg-yellow-200 rounded-full blur-2xl"></div>
        </div>
        
        {/* Smooth transition gradient at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-black"></div>

        <div className="relative container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="text-white space-y-8">
                <div>
                  <h2 className="text-3xl md:text-4xl  mb-4 leading-tight">
                    Build The Future Of Customer Relationships With Ascentia Labs
                  </h2>
                  <p className="text-xl text-gray-300 mb-8">
                    Here's Why Leading Businesses Choose Us For Custom CRM Development!
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center space-x-4 group">
                    <div className="bg-blue-600 text-white px-3 py-1 rounded-md  text-sm">
                      01
                    </div>
                    <div>
                      <h3 className="text-xl  group-hover:text-blue-300 transition-colors">
                        7+ Years of CRM Excellence
                      </h3>
                      <div className="w-24 h-0.5 bg-blue-500 mt-1"></div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 group">
                    <div className="bg-blue-600 text-white px-3 py-1 rounded-md  text-sm">
                      02
                    </div>
                    <div>
                      <h3 className="text-xl  group-hover:text-blue-300 transition-colors">
                        Bespoke CRM Solutions
                      </h3>
                      <div className="w-24 h-0.5 bg-blue-500 mt-1"></div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 group">
                    <div className="bg-blue-600 text-white px-3 py-1 rounded-md  text-sm">
                      03
                    </div>
                    <div>
                      <h3 className="text-xl  group-hover:text-blue-300 transition-colors">
                        Scalable CRM Architecture
                      </h3>
                      <div className="w-24 h-0.5 bg-blue-500 mt-1"></div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 group">
                    <div className="bg-blue-600 text-white px-3 py-1 rounded-md  text-sm">
                      04
                    </div>
                    <div>
                      <h3 className="text-xl  group-hover:text-blue-300 transition-colors">
                        Seamless CRM Integrations
                      </h3>
                      <div className="w-24 h-0.5 bg-blue-500 mt-1"></div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 group">
                    <div className="bg-blue-600 text-white px-3 py-1 rounded-md  text-sm">
                      05
                    </div>
                    <div>
                      <h3 className="text-xl  group-hover:text-blue-300 transition-colors">
                        Industry-Specific Expertise
                      </h3>
                      <div className="w-24 h-0.5 bg-blue-500 mt-1"></div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 group">
                    <div className="bg-blue-600 text-white px-3 py-1 rounded-md  text-sm">
                      06
                    </div>
                    <div>
                      <h3 className="text-xl  group-hover:text-blue-300 transition-colors">
                        Ongoing Support & Maintenance
                      </h3>
                      <div className="w-24 h-0.5 bg-blue-500 mt-1"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Content - Image/Visual */}
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-600/20 to-blue-800/20 backdrop-blur-md rounded-3xl p-8 border border-blue-400/30">
                  <div className="text-center text-white">
                    <div className="relative w-32 h-32 mx-auto mb-6">
                      {/* Main circle with amber and black accent for high contrast */}
                      <div className="w-32 h-32 bg-gradient-to-br from-amber-400 via-amber-500 to-orange-500 rounded-full flex items-center justify-center relative overflow-hidden shadow-2xl border-4 border-black/20">
                        {/* Animated color overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-amber-300/40 via-amber-400/30 to-orange-400/40 rounded-full animate-pulse"></div>
                        
                        {/* Checkmark icon with black color */}
                        <svg className="w-16 h-16 text-black relative z-10 drop-shadow-lg" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                        
                        {/* Subtle rotating border effect */}
                        <div className="absolute inset-0 rounded-full border-2 border-black/10 animate-spin-slow opacity-60"></div>
                      </div>
                      
                      {/* Outer glow rings with amber theme */}
                      <div className="absolute inset-0 w-32 h-32 rounded-full bg-gradient-to-br from-amber-300/20 via-amber-400/20 to-orange-400/20 animate-ping"></div>
                      <div className="absolute inset-0 w-32 h-32 rounded-full bg-gradient-to-br from-amber-200/15 via-amber-300/15 to-orange-300/15 animate-pulse"></div>
                    </div>
                    <h3 className="text-2xl  mb-4">
                      Ready to Build Your Custom CRM?
                    </h3>
                    <p className="text-blue-100 mb-6">
                      Join 100+ successful projects and transform your customer relationships with a custom CRM solution from Ascentia Labs.
                    </p>
                    <button 
                      onClick={openConsultation}
                      className="bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 hover:from-amber-500 hover:via-orange-500 hover:to-orange-600 text-black border-2 border-black/20 hover:border-black/40 px-8 py-3 rounded-xl  transition-all duration-300 transform hover:scale-105 shadow-lg "
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

    
{/* Why Choose Us Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 bg-blue-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-40 right-20 w-24 h-24 bg-blue-300 rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-blue-500 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 left-1/2 w-20 h-20 bg-blue-200 rounded-full blur-2xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl  mb-4 bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent">
              Why Ascentia Labs for Custom CRM?
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Work with CRM development experts who deliver scalable, secure, bespoke solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, index) => (
              <div 
                key={index} 
                className="group relative bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl shadow-md hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 border border-gray-700 hover:border-blue-500 transform hover:-translate-y-3 hover:scale-105 overflow-hidden"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-blue-800/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Animated background elements */}
                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute top-4 right-4 w-16 h-16 bg-blue-400/10 rounded-full blur-xl group-hover:scale-150 group-hover:bg-blue-400/20 transition-all duration-500"></div>
                  <div className="absolute bottom-4 left-4 w-12 h-12 bg-blue-300/10 rounded-full blur-lg group-hover:scale-125 group-hover:bg-blue-300/20 transition-all duration-500"></div>
                </div>
                
                <div className="relative z-10">
                  {/* Icon and Title in one line */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 text-white transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg group-hover:shadow-blue-500/50">
                      {item.icon}
                    </div>
                    
                    <h3 className="text-lg  bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent group-hover:from-blue-300 group-hover:to-blue-100 transition-all duration-300 leading-tight">
                      {item.title}
                    </h3>
                  </div>
                  
                  <div className="text-gray-300 leading-relaxed text-sm group-hover:text-gray-200 transition-colors duration-300">
                    <ReadMore maxLines={3} mobileOnly={true}>
                      {item.description}
                    </ReadMore>
                  </div>

                  {/* Decorative element */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-600/10 to-blue-800/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 bg-blue-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-40 right-20 w-24 h-24 bg-blue-300 rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-blue-500 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 left-1/2 w-20 h-20 bg-blue-200 rounded-full blur-2xl"></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl  bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-300">
              Get answers to common questions about our custom CRM development services
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-900 rounded-2xl border border-gray-700 overflow-hidden hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
                <button
                  className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-800 transition-colors"
                  onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                >
                  <span className=" text-white pr-4">{faq.question}</span>
                  {expandedFAQ === index ? (
                    <ChevronUp className="w-5 h-5 text-blue-400 flex-shrink-0 transform transition-transform duration-300" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0 transform transition-transform duration-300" />
                  )}
                </button>
                {expandedFAQ === index && (
                  <div className="px-6 pb-5 bg-gray-800 animate-fadeIn">
                    <div className="border-t border-gray-700 pt-4">
                      <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

     
     
    </div>
  );
};

export default CustomCRMDevelopment;
