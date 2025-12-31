import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Settings, DollarSign, ChevronDown, ChevronUp, Shield, UserCheck, BarChart3, Ticket } from 'lucide-react';
import { useConsultation } from '../../../contexts/ConsultationContext';
import SEO from '../../../components/SEO';
import { seoData } from '../../../utils/seoData';

const TicketingSolutionPage = () => {
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

  const features = [
    {
      id: 'parking-ticketing-system',
      title: 'Smart Parking Ticketing',
      description: 'Advanced parking solutions with real-time monitoring and automated billing.',
      details: [
        'Smart parking solutions with real-time monitoring, automated billing, and seamless entry/exit management.',
        'Real-time occupancy tracking with dynamic pricing and space optimization.',
        'Automated payment processing with multiple gateway integration.',
        'Mobile app integration for contactless parking and payment solutions.'
      ]
    },
    {
      id: 'bus-ticketing-system',
      title: 'Digital Bus Ticketing',
      description: 'Comprehensive public transport ticketing with QR-based validation.',
      details: [
        'Digital ticketing for public transport with QR-based validation and multi-payment support.',
        'Route management with real-time tracking and schedule optimization.',
        'Passenger information system with live updates and notifications.',
        'Integration with transport management systems for seamless operations.'
      ]
    },
    {
      id: 'event-ticketing-platform',
      title: 'Event Ticketing Platform',
      description: 'Complete event management system with online booking and validation.',
      details: [
        'Comprehensive event management system with online booking, QR validation, and real-time attendance tracking.',
        'Multi-tier pricing with early bird discounts and promotional campaigns.',
        'Seat selection and venue mapping with interactive floor plans.',
        'Analytics dashboard with sales tracking and attendee insights.'
      ]
    },
    {
      id: 'pos-billing-solution',
      title: 'POS Billing Solution',
      description: 'Complete point-of-sale system for SMEs with inventory management.',
      details: [
        'Complete POS system for SMEs with inventory management, GST compliance, and analytics.',
        'Multi-location support with centralized reporting and management.',
        'Customer loyalty programs with points and rewards management.',
        'Integration with accounting software and payment gateways.'
      ]
    },
    {
      id: 'penalty-ticketing-system',
      title: 'Penalty Ticketing System',
      description: 'Digital penalty management with automated processing and tracking.',
      details: [
        'Digital penalty ticketing with automated fine calculation and processing.',
        'Mobile enforcement with GPS tracking and photo evidence capture.',
        'Payment portal integration with installment and dispute management.',
        'Compliance tracking with regulatory reporting and audit trails.'
      ]
    },
    {
      id: 'zoo-museum-ticketing',
      title: 'Zoo & Museum Ticketing',
      description: 'Specialized ticketing for entertainment and educational venues.',
      details: [
        'Specialized ticketing solutions for zoos, museums, and entertainment venues.',
        'Visitor management with capacity control and crowd flow optimization.',
        'Educational content integration with audio guides and interactive maps.',
        'Group booking management with educational institution discounts.'
      ]
    },
    {
      id: 'movie-cinema-ticketing',
      title: 'Movie & Cinema Ticketing',
      description: 'Advanced cinema ticketing with seat selection and show management.',
      details: [
        'Advanced cinema ticketing system with seat selection and show scheduling.',
        'Dynamic pricing with peak hour and promotional rate management.',
        'Concession stand integration with combo offers and upselling.',
        'Customer preference tracking with personalized recommendations.'
      ]
    },
    {
      id: 'multi-payment-gateway',
      title: 'Multi-Payment Gateway Integration',
      description: 'Comprehensive payment processing with multiple gateway support.',
      details: [
        'Accept cards, UPI, wallets, and NFC payments for effortless transactions.',
        'Secure payment processing with PCI DSS compliance and fraud detection.',
        'Real-time payment reconciliation with automated settlement reports.',
        'International payment support with multi-currency processing.'
      ]
    },
    {
      id: 'analytics-reporting',
      title: 'Smart Analytics & Reporting',
      description: 'Advanced analytics and business intelligence for data-driven decisions.',
      details: [
        'Get real-time data on revenue trends and customer behavior for better decision-making.',
        'Predictive analytics with demand forecasting and capacity planning.',
        'Custom dashboard creation with KPI tracking and performance metrics.',
        'Automated report generation with scheduled delivery and alerts.'
      ]
    },
    {
      id: 'fraud-prevention-security',
      title: 'Fraud Prevention & Security',
      description: 'Advanced security measures with fraud detection and prevention.',
      details: [
        'Advanced fraud detection ensures secure ticketing and protects sensitive data.',
        'Multi-factor authentication with biometric and OTP verification.',
        'Real-time monitoring with suspicious activity alerts and blocking.',
        'Data encryption and secure storage with regular security audits.'
      ]
    }
  ];

  const adminFeatures = [
    {
      icon: Ticket,
      title: 'Fast Contactless Ticketing',
      description: 'Eliminate long queues with QR-based & digital ticketing for a seamless customer experience.'
    },
    {
      icon: Settings,
      title: 'Seamless POS Integration',
      description: 'Works with Android POS devices for instant ticket issuance and transactions.'
    },
    {
      icon: BarChart3,
      title: 'Smart Analytics & Automation',
      description: 'Get real-time data on revenue trends and customer behavior for better decision-making.'
    },
    {
      icon: Shield,
      title: 'Fraud Prevention & Security',
      description: 'Advanced fraud detection ensures secure ticketing and protects sensitive data.'
    }
  ];

  const stats = [
    { number: '7+', label: 'Business Years' },
    { number: '100+', label: 'Projects Delivered' },
    { number: '10+', label: 'Industries Catered' },
    { number: '4+', label: 'Countries' }
  ];

  const processSteps = [
    { 
      number: '1', 
      title: 'Business Analysis', 
      description: 'Our team conducts comprehensive analysis of your ticketing requirements, identifying key challenges, operational needs, and opportunities for digital transformation.' 
    },
    { 
      number: '2', 
      title: 'Custom Solution Design', 
      description: 'We design a tailored ticketing platform that aligns with your business model, incorporating features like payment processing, analytics, and customer management.' 
    },
    { 
      number: '3', 
      title: 'Development & Integration', 
      description: 'Our experts develop and deploy the solution with seamless integration to existing systems, POS devices, and payment gateways while ensuring minimal disruption.' 
    },
    { 
      number: '4', 
      title: 'Training & Support', 
      description: 'We provide comprehensive training for your team and ongoing support, continuously monitoring system performance and implementing optimizations for maximum efficiency.' 
    }
  ];

  const faqs = [
    {
      question: "What are the key benefits of implementing a digital ticketing solution?",
      answer: "Digital ticketing solutions offer numerous benefits including reduced queues, contactless transactions, real-time analytics, automated billing, fraud prevention, multi-payment support, and enhanced customer experience with mobile integration and QR-based validation."
    },
    {
      question: "How does FINLO's ticketing system improve operational efficiency?",
      answer: "FINLO automates ticket issuance, provides real-time monitoring, enables contactless payments, optimizes resource allocation, reduces manual processes, and provides comprehensive analytics for data-driven decision making, significantly improving operational efficiency."
    },
    {
      question: "What types of businesses can benefit from FINLO's ticketing solutions?",
      answer: "FINLO serves diverse sectors including parking facilities, public transport, events and concerts, museums and zoos, cinemas, retail stores, and any business requiring ticketing, billing, or access control solutions."
    },
    {
      question: "Is FINLO's ticketing system secure for handling payment and customer data?",
      answer: "Yes, FINLO implements enterprise-grade security measures including data encryption, secure payment processing, PCI DSS compliance, fraud detection, multi-factor authentication, and regular security audits to ensure all data remains secure."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO {...seoData.ticketingSolution} />
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

        <div className="relative container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div className="text-white space-y-6">
              <h1 className="text-3xl md:text-4xl  leading-tight">
                Seamless Ticketing For Digital India, Empower Your Business with FINLO
              </h1>
              <p className="text-lg text-gray-300 leading-relaxed">
                Seamlessly manage ticketing and parking for zoos, museums, bus rides, events, movies, and more all through one powerful platform. Go digital with FINLO and transform your business operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                onClick={openConsultation}
                className="bg-gradient-to-r from-amber-400 to-orange-500 text-black px-6 py-3 rounded-xl  transition-all duration-300 transform hover:scale-105 shadow-lg hover:from-amber-500 hover:to-orange-600 "
              >
                Get Free Consultation
              </button>
               
              </div>
              
              
            </div>

            {/* Right Content - Admin Features */}
            <div className="space-y-4">
              {adminFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 hover:bg-white/15 transition-all duration-300">
                    <div className="flex items-start space-x-3">
                      <div className="bg-gradient-to-r from-amber-400 to-orange-500 p-2 rounded-lg text-black flex-shrink-0">
                        <IconComponent size={20} />
                      </div>
                      <div>
                        <h3 className="text-white  text-lg mb-1">{feature.title}</h3>
                        <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-16 pt-12 border-t border-blue-400/30">
            {/* Stats - Mobile/Tablet */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:hidden">
              {stats.map((stat, index) => (
                <div key={index} className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 transform hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl md:text-4xl  text-white mb-1">{stat.number}</div>
                  <div className="text-blue-200 text-xs sm:text-sm">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Stats - Desktop */}
            <div className="hidden lg:grid grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center transform hover:scale-110 transition-transform duration-300 cursor-pointer">
                  <div className="text-4xl md:text-5xl  text-white mb-2">{stat.number}</div>
                  <div className="text-blue-200 text-sm md:text-base">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent  mb-3">
              Our Services - Helping You Grow with the Power of Digital
            </h2>
            <p className="text-base text-gray-300 max-w-2xl mx-auto">
              Comprehensive ticketing and billing solutions designed to streamline your operations and enhance customer experience.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-amber-300">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Left Side - Feature List */}
                <div className="bg-gray-900 p-4">
                  <div className="space-y-2 max-h-96 overflow-y-auto custom-scrollbar">
                    {features.map((feature, index) => (
                      <div
                        key={index}
                        className={`p-3 rounded-lg cursor-pointer transition-all duration-300 ${
                          activeFeature === index 
                            ? 'bg-gradient-to-r from-amber-400 to-orange-500 text-black' 
                            : 'text-gray-300 hover:bg-gray-800'
                        }`}
                        onClick={() => setActiveFeature(index)}
                      >
                        <div className="flex items-center space-x-2">
                          <span className={`text-xs  px-2 py-1 rounded ${
                            activeFeature === index ? 'bg-black text-amber-400' : 'bg-gradient-to-r from-amber-400 to-orange-500 text-black'
                          }`}>
                            {index < 9 ? `0${index + 1}` : index + 1}
                          </span>
                          <span className="font-medium text-sm">{feature.title}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Side - Feature Details */}
                <div className="p-6 flex items-center">
                  <div className="space-y-4">
                    <div className="bg-amber-100 p-3 rounded-xl w-fit">
                      <div className="bg-gradient-to-r from-amber-400 to-orange-500 p-2 rounded-lg">
                        <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl  text-gray-900 mb-3">
                        {features[activeFeature].title}
                      </h3>
                      <ul className="space-y-2 text-gray-600 text-sm">
                        {features[activeFeature].details.map((detail, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <span className="w-1.5 h-1.5 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-black relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent  mb-3">
              Our FINLO Implementation Process
            </h2>
            <p className="text-lg text-gray-300">
              A streamlined approach to deploying your ticketing solution efficiently and effectively.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Mobile Layout - Single Row */}
            <div className="block md:hidden">
              <div className="relative flex justify-between items-start gap-2 px-2">
                {/* Connecting line for mobile */}
                <div className="absolute top-6 sm:top-7 left-8 right-8 h-0.5 bg-blue-300 z-0"></div>
                
                {processSteps.map((step, index) => (
                  <div key={index} className="flex-1 text-center relative z-10">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-amber-400 to-orange-500 text-black rounded-full flex items-center justify-center text-lg sm:text-xl font-extrabold mb-2 mx-auto border-2 border-white shadow-lg">
                      {step.number}
                    </div>
                    <h3 className="font-medium text-white text-sm sm:text-base leading-tight px-1">{step.title}</h3>
                  </div>
                ))}
              </div>
            </div>

            {/* Desktop Layout - With Connectors */}
            <div className="hidden md:flex justify-center items-center gap-6">
              {processSteps.map((step, index) => (
                <div key={index} className="flex items-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-amber-400 to-orange-500 text-black rounded-full flex items-center justify-center text-xl font-extrabold mb-3 mx-auto">
                      {step.number}
                    </div>
                    <h3 className="font-medium text-white text-base mb-1">{step.title}</h3>
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
                    Smarter Parking & Ticketing with FINLO
                  </h2>
                  <p className="text-xl text-gray-300 mb-8">
                    Say goodbye to outdated, manual processes! FINLO is a cutting-edge parking and ticketing management solution.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center space-x-4 group">
                    <div className="bg-blue-600 text-white px-3 py-1 rounded-md  text-sm">
                      01
                    </div>
                    <div>
                      <h3 className="text-xl  group-hover:text-blue-300 transition-colors">
                        Simplified Parking Management
                      </h3>
                      <p className="text-gray-300 text-sm">Digital ticketing, real-time tracking, and automated invoicing</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 group">
                    <div className="bg-blue-600 text-white px-3 py-1 rounded-md  text-sm">
                      02
                    </div>
                    <div>
                      <h3 className="text-xl  group-hover:text-blue-300 transition-colors">
                        Hassle-Free Digital Ticketing
                      </h3>
                      <p className="text-gray-300 text-sm">QR-based solutions for faster check-ins and improved experience</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 group">
                    <div className="bg-blue-600 text-white px-3 py-1 rounded-md  text-sm">
                      03
                    </div>
                    <div>
                      <h3 className="text-xl  group-hover:text-blue-300 transition-colors">
                        Smart Business Insights
                      </h3>
                      <p className="text-gray-300 text-sm">Real-time analytics for occupancy, transactions, and revenue</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 group">
                    <div className="bg-blue-600 text-white px-3 py-1 rounded-md  text-sm">
                      04
                    </div>
                    <div>
                      <h3 className="text-xl  group-hover:text-blue-300 transition-colors">
                        Flexible Payment Solutions
                      </h3>
                      <p className="text-gray-300 text-sm">Cards, UPI, mobile wallets, and NFC payments supported</p>
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
                        
                        {/* Ticket icon with black color */}
                        <svg className="w-16 h-16 text-black relative z-10 drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M22 10V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v4c1.1 0 2 .9 2 2s-.9 2-2 2v4c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-4c-1.1 0-2-.9-2-2s.9-2 2-2zm-9 7.5h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2z"/>
                        </svg>
                        
                        {/* Subtle rotating border effect */}
                        <div className="absolute inset-0 rounded-full border-2 border-black/10 animate-spin-slow opacity-60"></div>
                      </div>
                      
                      {/* Outer glow rings with amber theme */}
                      <div className="absolute inset-0 w-32 h-32 rounded-full bg-gradient-to-br from-amber-300/20 via-amber-400/20 to-orange-400/20 animate-ping"></div>
                      <div className="absolute inset-0 w-32 h-32 rounded-full bg-gradient-to-br from-amber-200/15 via-amber-300/15 to-orange-300/15 animate-pulse"></div>
                    </div>
                    <h3 className="text-2xl  mb-4">
                      Ready to Transform Your Business?
                    </h3>
                    <p className="text-blue-100 mb-6">
                      Join hundreds of businesses that trust FINLO for their ticketing and parking management needs.
                    </p>
                    <button 
                      onClick={openConsultation}
                      className="bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 hover:from-amber-500 hover:via-orange-500 hover:to-orange-600 text-black border-2 border-black/20 hover:border-black/40 px-8 py-3 rounded-xl  transition-all duration-300 transform hover:scale-105 shadow-lg "
                    >
                      Get Started Today
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent md:text-4xl  mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-300">
                Find answers to common questions about FINLO ticketing solutions
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-gray-900 rounded-xl shadow-lg border border-gray-700 overflow-hidden">
                  <button
                    className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-800 transition-colors duration-200"
                    onClick={() => toggleFAQ(index)}
                  >
                    <h3 className="text-lg  text-white pr-4">
                      {faq.question}
                    </h3>
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
    </div>
  );
};

export default TicketingSolutionPage;