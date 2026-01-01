import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useConsultation } from '../../../contexts/ConsultationContext';
import SEO from '../../../components/SEO';
import ReadMore from '../../../components/ReadMore';
import { seoData } from '../../../utils/seoData';
import { 
  ChevronDown, 
  ChevronUp, 
  Database,
  TrendingUp,
  Zap,
  Lock,
  Building2,
  Workflow,
  Award,
  ArrowRight,
  Monitor,
  MessageSquare,
  Users,
  Target,
  BarChart3
} from 'lucide-react';

const Startup = () => {
  const [activeTab, setActiveTab] = useState('mvp');
  const [expandedFAQ, setExpandedFAQ] = useState(null);
  const { openConsultation } = useConsultation();

  const whyChooseUs = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Startup-Focused Experience",
      description: "10+ years of experience helping startups build and scale their technology solutions from concept to market success."
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Security-First Approach",
      description: "Industry-leading security protocols with robust encryption and compliance standards to protect your startup's valuable data."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Scalable & Future-Ready",
      description: "Build solutions that grow with your startup, designed for rapid scaling and evolving business requirements."
    },
    {
      icon: <Workflow className="w-8 h-8" />,
      title: "End-to-End Technology Partnership",
      description: "Complete technology division management from ideation to deployment, letting you focus on business growth."
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Transparent Communication",
      description: "Clear communication with regular updates and milestone tracking throughout your startup journey."
    },
    {
      icon: <Zap className="w-7 h-7" />,
      title: "Cost-Effective Solutions",
      description: "Startup-friendly pricing with flexible engagement models designed to maximize ROI and minimize burn rate."
    }
  ];

  const services = [
    {
      id: 'mvp',
      name: 'MVP Development',
      icon: <Building2 className="w-5 h-5" />,
      title: 'Minimum Viable Product Development',
      description: 'Our startup experts create lean, efficient and market-ready MVP solutions, facilitating rapid prototyping, user validation, and iterative development, to help you test your business hypothesis and secure funding with minimal investment.',
      techLogos: [
        '/techLogo/React.png',
        '/techLogo/node js.png',
        '/techLogo/python.png',
        '/techLogo/aws.png',
        '/techLogo/Firebase.png',
        '/techLogo/mongo db.png'
      ]
    },
    {
      id: 'scaling',
      name: 'Technology Scaling',
      icon: <TrendingUp className="w-5 h-5" />,
      title: 'Startup Technology Scaling Solutions',
      description: 'Our scaling experts implement robust, performant and maintainable technology infrastructure, facilitating seamless growth, optimizing system performance, and ensuring reliability, to support your startup\'s rapid expansion and user growth.',
      techLogos: [
        '/techLogo/aws.png',
        '/techLogo/google cloud.png',
        '/techLogo/microsoft azure.png',
        '/techLogo/node js.png',
        '/techLogo/python.png',
        '/techLogo/React.png'
      ]
    },
    {
      id: 'team',
      name: 'Tech Team Building',
      icon: <Users className="w-5 h-5" />,
      title: 'Technology Team & Process Setup',
      description: 'Our team building experts establish efficient, collaborative and productive development teams, facilitating hiring strategies, process implementation, and culture building, to create a strong technology foundation for your startup.',
      techLogos: [
        '/techLogo/React.png',
        '/techLogo/node js.png',
        '/techLogo/figma.png',
        '/techLogo/python.png',
        '/techLogo/aws.png',
        '/techLogo/mongo db.png'
      ]
    },
    {
      id: 'strategy',
      name: 'Technology Strategy',
      icon: <Target className="w-5 h-5" />,
      title: 'Strategic Technology Consulting',
      description: 'Our strategy experts provide comprehensive, data-driven and actionable technology roadmaps, facilitating architecture decisions, technology stack selection, and growth planning, to align your technology vision with business objectives.',
      techLogos: [
        '/techLogo/aws.png',
        '/techLogo/React.png',
        '/techLogo/node js.png',
        '/techLogo/python.png',
        '/techLogo/google cloud.png',
        '/techLogo/microsoft azure.png'
      ]
    }
  ];

  const stats = [
    { number: '7+', label: 'Business Years' },
    { number: '120+', label: 'Projects Delivered' },
    { number: '10+', label: 'Industries Catered' },
    { number: '4+', label: 'Countries' }
  ];

  const faqs = [
    {
      question: "How do you help startups with limited budgets?",
      answer: "We offer flexible engagement models including equity partnerships, milestone-based payments, and startup-friendly pricing. Our focus is on delivering maximum value with minimal upfront investment, helping you build and validate your product efficiently."
    },
    {
      question: "Can you manage our entire technology division?",
      answer: "Absolutely. We provide end-to-end technology partnership including CTO-as-a-Service, team building, architecture design, development, deployment, and ongoing maintenance. This allows you to focus on business development while we handle all technology aspects."
    },
    {
      question: "How quickly can you deliver an MVP?",
      answer: "Depending on complexity, we can deliver a functional MVP in 6-12 weeks. Our agile approach focuses on core features first, allowing for rapid iteration based on user feedback and market validation."
    },
    {
      question: "Do you help with scaling after initial development?",
      answer: "Yes, we provide comprehensive scaling support including infrastructure optimization, performance monitoring, team expansion, and technology roadmap evolution. We're your long-term technology partner throughout your startup journey."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO {...seoData.startupTechnologyPartnership} />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white min-h-screen flex items-center px-4 sm:px-6 lg:px-8 overflow-hidden pt-20 sm:pt-24 lg:pt-0">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 left-20 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 right-40 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto w-full relative z-10 py-8 sm:py-12 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-block sm:mt-4 px-4 py-2 bg-blue-500/30 rounded-full text-sm  mb-4 sm:mb-6 backdrop-blur-sm">
                Startup's Technology Partner
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl  mb-4 sm:mb-6 leading-tight">
                Complete Startup Technology Partnership
              </h1>
              <p className="text-base sm:text-lg text-blue-100 mb-6 sm:mb-8 leading-relaxed">
                At Ascentia Labs, we provide comprehensive technology partnership for startups looking to build, scale, and succeed. Our expert team manages your entire technology division, from MVP development to scaling solutions, allowing you to focus on business growth and market expansion.
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
                    <Building2 className="w-7 h-7 text-white animate-pulse" />
                    <h3 className="text-sm sm:text-base  text-white">Startup Excellence</h3>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {/* Card 1 - MVP Development */}
                <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 shadow-xl p-5 sm:p-6 cursor-pointer group flex flex-col items-center justify-center text-center min-h-[140px] sm:min-h-[160px] transition-all duration-500 hover:scale-105 hover:-translate-y-3 hover:bg-white/25 hover:border-white/60 hover:shadow-2xl hover:shadow-blue-500/50 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/0 to-blue-600/0 group-hover:from-blue-400/20 group-hover:to-blue-600/10 transition-all duration-500 rounded-2xl"></div>
                  <Building2 className="w-12 h-12 sm:w-14 sm:h-14 text-white mb-3 transition-all duration-500 group-hover:scale-110 group-hover:-rotate-6 relative z-10" />
                  <h4 className="text-sm sm:text-base  text-white mb-1.5 relative z-10">MVP Development</h4>
                  <p className="text-xs text-blue-100 leading-tight relative z-10 group-hover:text-white transition-colors duration-300">Rapid prototyping</p>
                </div>

                {/* Card 2 - Technology Scaling */}
                <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 shadow-xl p-5 sm:p-6 cursor-pointer group flex flex-col items-center justify-center text-center min-h-[140px] sm:min-h-[160px] transition-all duration-500 hover:scale-105 hover:-translate-y-3 hover:bg-white/25 hover:border-white/60 hover:shadow-2xl hover:shadow-blue-500/50 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/0 to-blue-600/0 group-hover:from-blue-400/20 group-hover:to-blue-600/10 transition-all duration-500 rounded-2xl"></div>
                  <TrendingUp className="w-12 h-12 sm:w-14 sm:h-14 text-white mb-3 transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-2 relative z-10" />
                  <h4 className="text-sm sm:text-base  text-white mb-1.5 relative z-10">Technology Scaling</h4>
                  <p className="text-xs text-blue-100 leading-tight relative z-10 group-hover:text-white transition-colors duration-300">Growth infrastructure</p>
                </div>

                {/* Card 3 - Tech Team Building */}
                <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 shadow-xl p-5 sm:p-6 cursor-pointer group flex flex-col items-center justify-center text-center min-h-[140px] sm:min-h-[160px] transition-all duration-500 hover:scale-105 hover:-translate-y-3 hover:bg-white/25 hover:border-white/60 hover:shadow-2xl hover:shadow-blue-500/50 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/0 to-blue-600/0 group-hover:from-blue-400/20 group-hover:to-blue-600/10 transition-all duration-500 rounded-2xl"></div>
                  <Users className="w-12 h-12 sm:w-14 sm:h-14 text-white mb-3 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 relative z-10" />
                  <h4 className="text-sm sm:text-base  text-white mb-1.5 relative z-10">Tech Team Building</h4>
                  <p className="text-xs text-blue-100 leading-tight relative z-10 group-hover:text-white transition-colors duration-300">Expert teams</p>
                </div>

                {/* Card 4 - Technology Strategy */}
                <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 shadow-xl p-5 sm:p-6 cursor-pointer group flex flex-col items-center justify-center text-center min-h-[140px] sm:min-h-[160px] transition-all duration-500 hover:scale-105 hover:-translate-y-3 hover:bg-white/25 hover:border-white/60 hover:shadow-2xl hover:shadow-blue-500/50 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/0 to-blue-600/0 group-hover:from-blue-400/20 group-hover:to-blue-600/10 transition-all duration-500 rounded-2xl"></div>
                  <Target className="w-12 h-12 sm:w-14 sm:h-14 text-white mb-3 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 relative z-10" />
                  <h4 className="text-sm sm:text-base  text-white mb-1.5 relative z-10">Technology Strategy</h4>
                  <p className="text-xs text-blue-100 leading-tight relative z-10 group-hover:text-white transition-colors duration-300">Strategic roadmaps</p>
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
        
        {/* Smooth transition gradient at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-black"></div>

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
          .animation-delay-2000 {
            animation-delay: 0.4s;
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
              Our Startup Technology Services
            </h2>
            <p className="text-base sm:text-lg text-gray-400 max-w-3xl mx-auto">
              Comprehensive technology solutions designed specifically for startup success
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
                    <div className="absolute top-4 right-4 w-20 h-20 bg-blue-500/10 rounded-full blur-2xl"></div>
                    <div className="absolute bottom-4 left-4 w-16 h-16 bg-blue-400/10 rounded-full blur-xl"></div>
                  </div>
                </div>
              </div>
            )
          ))}
        </div>
      </section>
      

      {/* Promotional Section */}
      <section className="py-16 bg-gradient-to-br from-gray-900 via-blue-900 to-black relative overflow-hidden">
        {/* Smooth transition gradient at top */}
        <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black to-transparent"></div>
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-32 h-32 bg-yellow-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-40 right-20 w-24 h-24 bg-yellow-300 rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-yellow-500 roll blur-xl"></div>
          <div className="absolute bottom-20 left-1/2 w-20 h-20 bg-yellow-200 rounded-full blur-2xl"></div>
        </div>
        
        {/* Smooth transition gradient at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-black"></div>

        <div className="relative container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-white space-y-8">
                <div>
                  <h2 className="text-3xl md:text-4xl  mb-4 leading-tight">
                    Scale Your Startup With Ascentia Labs
                  </h2>
                  <p className="text-xl text-gray-300 mb-8">
                    Here's Why Innovative Startups Choose Us As Their Technology Partner!
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center space-x-4 group">
                    <div className="bg-blue-600 text-white px-3 py-1 rounded-md  text-sm">01</div>
                    <div>
                      <h3 className="text-xl  group-hover:text-blue-300 transition-colors">
                        Complete Technology Division Management
                      </h3>
                      <div className="w-24 h-0.5 bg-blue-500 mt-1"></div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 group">
                    <div className="bg-blue-600 text-white px-3 py-1 rounded-md  text-sm">02</div>
                    <div>
                      <h3 className="text-xl  group-hover:text-blue-300 transition-colors">
                        Rapid MVP Development & Validation
                      </h3>
                      <div className="w-24 h-0.5 bg-blue-500 mt-1"></div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 group">
                    <div className="bg-blue-600 text-white px-3 py-1 rounded-md  text-sm">03</div>
                    <div>
                      <h3 className="text-xl  group-hover:text-blue-300 transition-colors">
                        Scalable Architecture & Infrastructure
                      </h3>
                      <div className="w-24 h-0.5 bg-blue-500 mt-1"></div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 group">
                    <div className="bg-blue-600 text-white px-3 py-1 rounded-md  text-sm">04</div>
                    <div>
                      <h3 className="text-xl  group-hover:text-blue-300 transition-colors">
                        Expert Team Building & Management
                      </h3>
                      <div className="w-24 h-0.5 bg-blue-500 mt-1"></div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 group">
                    <div className="bg-blue-600 text-white px-3 py-1 rounded-md  text-sm">05</div>
                    <div>
                      <h3 className="text-xl  group-hover:text-blue-300 transition-colors">
                        Flexible Engagement Models
                      </h3>
                      <div className="w-24 h-0.5 bg-blue-500 mt-1"></div>
                    </div>
                  </div>

                  {/* <div className="flex items-center space-x-4 group">
                    <div className="bg-blue-600 text-white px-3 py-1 rounded-md  text-sm">06</div>
                    <div>
                      <h3 className="text-xl  group-hover:text-blue-300 transition-colors">
                        Continuous Support & Optimization
                      </h3>
                      <div className="w-24 h-0.5 bg-blue-500 mt-1"></div>
                    </div>
                  </div> */}
                </div>
              </div>

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
                      Ready to Build Your Startup?
                    </h3>
                    <p className="text-blue-100 mb-6">
                      Join 150+ successful startups and accelerate your growth with comprehensive technology partnership from Ascentia Labs.
                    </p>
                    <button 
                      onClick={openConsultation}
                      className="bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 hover:from-amber-500 hover:via-orange-500 hover:to-orange-600 text-black border-2 border-black/20 hover:border-black/40 px-8 py-3 rounded-xl  transition-all duration-300 transform hover:scale-105 shadow-lg "
                    >
                      Start Your Startup Journey
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

     {/* Why Choose Us Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl  mb-4 text-white">
              Why Ascentia Labs?
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Partner with startup technology experts who understand the unique challenges of building and scaling innovative solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, index) => (
              <div 
                key={index} 
                className="group relative bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-700 hover:border-blue-500 transform hover:-translate-y-2 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-blue-800/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 text-white transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                      {item.icon}
                    </div>
                    
                    <h3 className="text-lg  text-white group-hover:text-blue-300 transition-all duration-300 leading-tight">
                      {item.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-400 leading-relaxed text-sm group-hover:text-gray-300 transition-colors duration-300">
                    <ReadMore maxChars={80} mobileOnly={true}>
                      {item.description}
                    </ReadMore>
                  </p>

                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-600/10 to-blue-800/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl  text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-400">
              Get answers to common questions about our startup technology partnership
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-900 rounded-2xl border border-gray-700 overflow-hidden hover:border-blue-500 transition-all duration-300 hover:shadow-lg">
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
                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
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

export default Startup;