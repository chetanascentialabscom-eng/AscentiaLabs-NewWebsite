import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useConsultation } from '../../../contexts/ConsultationContext';
import { 
  ChevronDown, 
  ChevronUp, 
  TrendingUp,
  Zap,
  Lock,
  Workflow,
  Award,
  ArrowRight,
  Globe,
  BarChart3,
  MessageSquare
} from 'lucide-react';

const GoToMarket = () => {
  const [activeTab, setActiveTab] = useState('strategy');
  const [expandedFAQ, setExpandedFAQ] = useState(null);
  const { openConsultation } = useConsultation();

    const whyChooseUs = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Proven Experience in Technology Consulting",
      description: "10+ years of experience crafting innovative, secure and scalable technology solutions across various industries."
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Security-Focused Approach",
      description: "Industry-leading security protocols with robust encryption and top security certifications for reliable implementation."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Scalability & Flexibility",
      description: "Scalable solutions designed to grow with your business, adapting to evolving requirements and future-proofing investments."
    },
    {
      icon: <Workflow className="w-8 h-8" />,
      title: "End-to-End Project Management",
      description: "Complete project lifecycle management from concept to deployment, allowing you to focus on your business."
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Transparency and Communication",
      description: "Clear communication with regular updates and transparent discussions throughout your project lifecycle."
    },
    {
      icon: <Zap className="w-7 h-7" />,
      title: "Cost-Effective Solutions",
      description: "Exceptional value with competitive pricing, focusing on efficiency, reduced costs, and maximum ROI."
    }
  ];

  const services = [
    {
      id: 'strategy',
      name: 'Market Strategy',
      icon: <TrendingUp className="w-5 h-5" />,
      title: 'Go-To-Market Strategy Development',
      description: 'Our strategy experts create comprehensive, data-driven and actionable go-to-market plans, facilitating market entry, optimizing positioning, and ensuring competitive advantage, to enhance product success and drive revenue growth.',
      techLogos: [
        '/techLogo/google analytics.png',
        '/techLogo/salesforce.png',
        '/techLogo/power bi.png',
        '/techLogo/google cloud.png',
        '/techLogo/python.png',
        '/techLogo/React.png'
      ]
    },
    {
      id: 'marketing',
      name: 'Digital Marketing',
      icon: <Globe className="w-5 h-5" />,
      title: 'Digital Marketing & Campaign Management',
      description: 'Our marketing experts develop targeted, engaging and measurable digital campaigns, facilitating brand awareness, optimizing customer acquisition, and ensuring ROI maximization, to enhance market presence and drive conversions.',
      techLogos: [
        '/techLogo/google analytics.png',
        '/techLogo/google cloud.png',
        '/techLogo/salesforce.png',
        '/techLogo/React.png',
        '/techLogo/node js.png',
        '/techLogo/python.png'
      ]
    },
    {
      id: 'sales',
      name: 'Sales Enablement',
      icon: <TrendingUp className="w-5 h-5" />,
      title: 'Sales Strategy & Enablement',
      description: 'Our sales experts implement effective, scalable and results-driven sales strategies, facilitating pipeline development, optimizing conversion rates, and ensuring revenue targets, to enhance sales performance and market penetration.',
      techLogos: [
        '/techLogo/salesforce.png',
        '/techLogo/google analytics.png',
        '/techLogo/power bi.png',
        '/techLogo/microsoft azure.png',
        '/techLogo/aws.png',
        '/techLogo/oracle cloud.png'
      ]
    },
    {
      id: 'analytics',
      name: 'Market Analytics',
      icon: <BarChart3 className="w-5 h-5" />,
      title: 'Market Research & Analytics',
      description: 'Our analytics experts conduct thorough, insightful and actionable market research, facilitating informed decisions, optimizing market understanding, and ensuring strategic positioning, to enhance competitive advantage and market success.',
      techLogos: [
        '/techLogo/google analytics.png',
        '/techLogo/power bi.png',
        '/techLogo/python.png',
        '/techLogo/google cloud.png',
        '/techLogo/aws.png',
        '/techLogo/salesforce.png'
      ]
    }
  ];

  const stats = [
    { number: '150+', label: 'Successful Product Launches' },
    { number: '30+', label: 'Marketing Experts' },
    { number: '10+', label: 'Years In the Industry' },
    { number: '80+', label: 'Countries Empowered' }
  ];

  const faqs = [
    {
      question: "What go-to-market frameworks do you use?",
      answer: "We follow industry-proven frameworks including Product-Market Fit analysis, TAM-SAM-SOM methodology, and Growth Hacking strategies. Our approach ensures comprehensive market analysis, strategic positioning, and measurable launch success."
    },
    {
      question: "How long does it take to develop a go-to-market strategy?",
      answer: "Strategy development timelines vary based on market complexity and product scope. Basic GTM strategies can be delivered in 4-6 weeks, while comprehensive enterprise market entry strategies may take 3-4 months. We provide detailed timelines during the planning phase."
    },
    {
      question: "Do you provide post-launch support and optimization?",
      answer: "Yes, we offer comprehensive post-launch support including performance monitoring, campaign optimization, A/B testing, market feedback analysis, and strategy refinement to ensure your product achieves sustained market success and growth."
    },
    {
      question: "Can you help with international market expansion?",
      answer: "Absolutely. We specialize in international go-to-market strategies and can conduct market research, localization planning, competitive analysis, and develop region-specific strategies to ensure successful expansion into new geographic markets."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
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
              <div className="inline-block px-4 py-2 bg-blue-500/30 rounded-full text-sm font-semibold mb-4 sm:mb-6 backdrop-blur-sm">
                Industry's Favorite
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
                Go-To-Market Strategy Solutions
              </h1>
              <p className="text-base sm:text-lg text-blue-100 mb-6 sm:mb-8 leading-relaxed">
                At Ascentia Labs, we deliver cutting-edge go-to-market strategies that transform your product launch into market success. Our expert team specializes in creating data-driven, comprehensive, and results-oriented market strategies using the latest tools and best practices in product marketing.
              </p>
              <div className="mb-8 sm:mb-12">
                <button 
                  onClick={openConsultation}
                  className="px-10 py-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-full hover:from-blue-700 hover:to-blue-900 transition-all duration-300 font-bold shadow-lg hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 inline-flex items-center gap-2"
                >
                  Get Consultation
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>

              {/* Stats - Mobile/Tablet */}
              <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:hidden">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 transform hover:scale-105 transition-transform duration-300">
                    <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.number}</div>
                    <div className="text-blue-200 text-xs sm:text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Visual Content - Service Cards Grid */}
            <div className="mt-8 lg:mt-0">
              {/* Central Feature Badge - At Top */}
              <div className="flex justify-center mb-6 animate-fadeIn">
                <div className="bg-white/15 backdrop-blur-lg rounded-full border border-white/30 shadow-2xl px-5 py-2.5 hover:scale-105 transition-transform duration-300 cursor-pointer">
                  <div className="flex items-center gap-2.5">
                    <TrendingUp className="w-7 h-7 text-white animate-pulse" />
                    <h3 className="text-sm sm:text-base font-bold text-white">Market Excellence</h3>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {/* Card 1 - Market Strategy */}
                <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 shadow-xl p-5 sm:p-6 cursor-pointer group flex flex-col items-center justify-center text-center min-h-[140px] sm:min-h-[160px] transition-all duration-500 hover:scale-105 hover:-translate-y-3 hover:bg-white/25 hover:border-white/60 hover:shadow-2xl hover:shadow-blue-500/50 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/0 to-blue-600/0 group-hover:from-blue-400/20 group-hover:to-blue-600/10 transition-all duration-500 rounded-2xl"></div>
                  <TrendingUp className="w-12 h-12 sm:w-14 sm:h-14 text-white mb-3 transition-all duration-500 group-hover:scale-110 group-hover:-rotate-6 relative z-10" />
                  <h4 className="text-sm sm:text-base font-bold text-white mb-1.5 relative z-10">Market Strategy</h4>
                  <p className="text-xs text-blue-100 leading-tight relative z-10 group-hover:text-white transition-colors duration-300">GTM planning</p>
                </div>

                {/* Card 2 - Digital Marketing */}
                <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 shadow-xl p-5 sm:p-6 cursor-pointer group flex flex-col items-center justify-center text-center min-h-[140px] sm:min-h-[160px] transition-all duration-500 hover:scale-105 hover:-translate-y-3 hover:bg-white/25 hover:border-white/60 hover:shadow-2xl hover:shadow-blue-500/50 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/0 to-blue-600/0 group-hover:from-blue-400/20 group-hover:to-blue-600/10 transition-all duration-500 rounded-2xl"></div>
                  <Globe className="w-12 h-12 sm:w-14 sm:h-14 text-white mb-3 transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-2 relative z-10" />
                  <h4 className="text-sm sm:text-base font-bold text-white mb-1.5 relative z-10">Digital Marketing</h4>
                  <p className="text-xs text-blue-100 leading-tight relative z-10 group-hover:text-white transition-colors duration-300">Campaign management</p>
                </div>

                {/* Card 3 - Sales Enablement */}
                <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 shadow-xl p-5 sm:p-6 cursor-pointer group flex flex-col items-center justify-center text-center min-h-[140px] sm:min-h-[160px] transition-all duration-500 hover:scale-105 hover:-translate-y-3 hover:bg-white/25 hover:border-white/60 hover:shadow-2xl hover:shadow-blue-500/50 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/0 to-blue-600/0 group-hover:from-blue-400/20 group-hover:to-blue-600/10 transition-all duration-500 rounded-2xl"></div>
                  <TrendingUp className="w-12 h-12 sm:w-14 sm:h-14 text-white mb-3 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 relative z-10" />
                  <h4 className="text-sm sm:text-base font-bold text-white mb-1.5 relative z-10">Sales Enablement</h4>
                  <p className="text-xs text-blue-100 leading-tight relative z-10 group-hover:text-white transition-colors duration-300">Sales strategy</p>
                </div>

                {/* Card 4 - Market Analytics */}
                <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 shadow-xl p-5 sm:p-6 cursor-pointer group flex flex-col items-center justify-center text-center min-h-[140px] sm:min-h-[160px] transition-all duration-500 hover:scale-105 hover:-translate-y-3 hover:bg-white/25 hover:border-white/60 hover:shadow-2xl hover:shadow-blue-500/50 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/0 to-blue-600/0 group-hover:from-blue-400/20 group-hover:to-blue-600/10 transition-all duration-500 rounded-2xl"></div>
                  <BarChart3 className="w-12 h-12 sm:w-14 sm:h-14 text-white mb-3 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 relative z-10" />
                  <h4 className="text-sm sm:text-base font-bold text-white mb-1.5 relative z-10">Market Analytics</h4>
                  <p className="text-xs text-blue-100 leading-tight relative z-10 group-hover:text-white transition-colors duration-300">Research & insights</p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats - Desktop */}
          <div className="hidden lg:grid grid-cols-4 gap-8 mt-20 pt-12 border-t border-blue-400/30">
            {stats.map((stat, index) => (
              <div key={index} className="text-center transform hover:scale-110 transition-transform duration-300 cursor-pointer">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
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

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-black bg-clip-text text-transparent">
              Why Ascentia Labs?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Experience the advantages of working with go-to-market experts who understand your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, index) => (
              <div 
                key={index} 
                className="group relative bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:border-purple-500 transform hover:-translate-y-2 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 text-white transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                      {item.icon}
                    </div>
                    
                    <h3 className="text-lg font-bold bg-gradient-to-r from-blue-600 to-gray-900 bg-clip-text text-transparent group-hover:from-blue-700 group-hover:to-black transition-all duration-300 leading-tight">
                      {item.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed text-sm group-hover:text-gray-800 transition-colors duration-300">
                    {item.description}
                  </p>

                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-600/10 to-black/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Promotional Section */}
      <section className="py-16 bg-gradient-to-br from-gray-900 via-blue-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-32 h-32 bg-blue-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-40 right-20 w-24 h-24 bg-blue-300 rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-blue-500 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 left-1/2 w-20 h-20 bg-blue-200 rounded-full blur-2xl"></div>
        </div>

        <div className="relative container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-white space-y-8">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                    Launch Your Product Successfully With Ascentia Labs
                  </h2>
                  <p className="text-xl text-gray-300 mb-8">
                    Here's Why Market Leaders Choose Us For Go-To-Market Excellence!
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center space-x-4 group">
                    <div className="bg-blue-600 text-white px-3 py-1 rounded-md font-bold text-sm">01</div>
                    <div>
                      <h3 className="text-xl font-bold group-hover:text-blue-300 transition-colors">
                        Data-Driven Market Strategy
                      </h3>
                      <div className="w-24 h-0.5 bg-blue-500 mt-1"></div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 group">
                    <div className="bg-blue-600 text-white px-3 py-1 rounded-md font-bold text-sm">02</div>
                    <div>
                      <h3 className="text-xl font-bold group-hover:text-blue-300 transition-colors">
                        Multi-Channel Marketing
                      </h3>
                      <div className="w-24 h-0.5 bg-blue-500 mt-1"></div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 group">
                    <div className="bg-blue-600 text-white px-3 py-1 rounded-md font-bold text-sm">03</div>
                    <div>
                      <h3 className="text-xl font-bold group-hover:text-blue-300 transition-colors">
                        Sales Funnel Optimization
                      </h3>
                      <div className="w-24 h-0.5 bg-blue-500 mt-1"></div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 group">
                    <div className="bg-blue-600 text-white px-3 py-1 rounded-md font-bold text-sm">04</div>
                    <div>
                      <h3 className="text-xl font-bold group-hover:text-blue-300 transition-colors">
                        Competitive Market Analysis
                      </h3>
                      <div className="w-24 h-0.5 bg-blue-500 mt-1"></div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 group">
                    <div className="bg-blue-600 text-white px-3 py-1 rounded-md font-bold text-sm">05</div>
                    <div>
                      <h3 className="text-xl font-bold group-hover:text-blue-300 transition-colors">
                        Performance Tracking & Analytics
                      </h3>
                      <div className="w-24 h-0.5 bg-blue-500 mt-1"></div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 group">
                    <div className="bg-blue-600 text-white px-3 py-1 rounded-md font-bold text-sm">06</div>
                    <div>
                      <h3 className="text-xl font-bold group-hover:text-blue-300 transition-colors">
                        Continuous Campaign Optimization
                      </h3>
                      <div className="w-24 h-0.5 bg-blue-500 mt-1"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-blue-600/20 to-blue-800/20 backdrop-blur-md rounded-3xl p-8 border border-blue-400/30">
                  <div className="text-center text-white">
                    <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold mb-4">
                      Ready to Launch Your Product?
                    </h3>
                    <p className="text-blue-100 mb-6">
                      Join 150+ successful launches and achieve market success with strategic solutions from Ascentia Labs.
                    </p>
                    <button 
                      onClick={openConsultation}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                      Start Your GTM Strategy
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Tabs Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Our Go-To-Market Services
            </h2>
            <p className="text-base sm:text-lg text-gray-400 max-w-3xl mx-auto">
              Comprehensive market launch solutions tailored to your business needs
            </p>
          </div>

          {/* Service Tabs - Compact */}
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-3 mb-12">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveTab(service.id)}
                className={`group relative px-3 sm:px-5 py-3 rounded-full font-semibold text-xs sm:text-sm transition-all duration-300 transform hover:scale-105 ${
                  activeTab === service.id
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/50'
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
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
                    {service.title}
                  </h3>
                  <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-6 sm:mb-8">
                    {service.description}
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

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-black bg-clip-text text-transparent mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Get answers to common questions about our go-to-market services
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl border border-gray-200 overflow-hidden hover:border-blue-300 transition-all duration-300 hover:shadow-lg">
                <button
                  className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-100 transition-colors"
                  onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                >
                  <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                  {expandedFAQ === index ? (
                    <ChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0 transform transition-transform duration-300" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0 transform transition-transform duration-300" />
                  )}
                </button>
                {expandedFAQ === index && (
                  <div className="px-6 pb-5 bg-white animate-fadeIn">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
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

export default GoToMarket;
