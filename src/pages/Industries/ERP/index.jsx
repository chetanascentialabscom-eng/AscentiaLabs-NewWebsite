import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useConsultation } from '../../../contexts/ConsultationContext';
import { Building2, Users, BarChart3, Settings, ChevronDown, ChevronUp } from 'lucide-react';
import SEO from '../../../components/SEO';
import { seoData } from '../../../utils/seoData';

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

  const features = [
    {
      id: 'reward-program-management',
      title: 'Reward Program Management System',
      description: 'Comprehensive reward program management for enhanced customer engagement.',
      details: [
        'Multiple Rewards: Manage diverse reward programs with customizable rules to suit business needs.',
        'Customizable Reward Criteria: Define reward conditions based on user behavior to encourage engagement.',
        'Reward Expiration and Conditions: Set expiration dates and conditions to promote timely utilization of rewards.',
        'Referral Rewards: Incentivize customers with personalized referral codes for referring friends and family.'
      ]
    },
    {
      id: 'customizable-reward-catalogue',
      title: 'Customizable Reward Catalogue Management System',
      description: 'Advanced reward catalogue management and customization.',
      details: [
        'Flexible Catalogue Structure: Create and manage diverse reward categories with customizable organization.',
        'Dynamic Reward Configuration: Set up intelligent reward tiers and automated distribution systems.',
        'Advanced Tracking Integration: Monitor reward redemption patterns and customer preferences.',
        'Personalized Recommendations: Use AI to suggest relevant rewards based on customer behavior.'
      ]
    },
    {
      id: 'visit-management',
      title: 'Visit Management',
      description: 'Comprehensive visit tracking and management capabilities.',
      details: [
        'Real-time Visit Tracking: Monitor customer visits with complete visibility and automated logging.',
        'Automated Visit Notifications: Send automatic updates to relevant stakeholders about visit status.',
        'Multi-location Integration: Connect with multiple locations to manage visits from one platform.',
        'Visit Analytics: Generate detailed reports on visit patterns and customer engagement metrics.'
      ]
    },
    {
      id: 'compliance-risk-management',
      title: 'Compliance & Risk Management',
      description: 'Complete compliance monitoring and risk assessment system.',
      details: [
        'In-Depth Complaint Analysis: Gain insights into complaint trends, identify recurring issues, and evaluate consumer complaints with precision.',
        'Customizable Reporting Dashboards: Offer real-time visibility into key performance indicators, empowering stakeholders to make data-driven decisions.',
        'Proactive Intervention Tools: Facilitate continuous improvement programs by enabling timely actions based on analytical insights.'
      ]
    },
    {
      id: 'financial-management-module',
      title: 'Financial Management Module',
      description: 'Comprehensive financial management and reporting system.',
      details: [
        'Real-time Financial Tracking: Monitor financial transactions and cash flow with instant updates.',
        'Automated Budget Management: Set up intelligent budget controls with automated alerts and approvals.',
        'Advanced Financial Reporting: Generate comprehensive financial reports with detailed analytics.',
        'Multi-currency Support: Handle international transactions with automated currency conversion.'
      ]
    },
    {
      id: 'product-catalogue-management',
      title: 'Product & Catalogue Management System Development',
      description: 'Advanced product and catalogue management solutions.',
      details: [
        'Dynamic Product Management: Create and manage product catalogues with real-time inventory updates.',
        'Category Organization: Implement hierarchical category structures for easy product navigation.',
        'Pricing Management: Set up flexible pricing rules with automated discount and promotion systems.',
        'Product Analytics: Track product performance with detailed sales and engagement metrics.'
      ]
    },
    {
      id: 'loyalty-management-system',
      title: 'Loyalty Management System',
      description: 'Integrated loyalty program management and customer retention.',
      details: [
        'Multi-tier Loyalty Programs: Create sophisticated loyalty programs with multiple tiers and benefits.',
        'Points Management: Comprehensive points earning, redemption, and transfer system.',
        'Customer Segmentation: Advanced customer segmentation based on loyalty behavior and preferences.',
        'Loyalty Analytics: Generate insights on customer lifetime value and loyalty program effectiveness.'
      ]
    },
   
  ];

  const adminFeatures = [
    {
      icon: Building2,
      title: 'Cashback & Order Management',
      description: 'Configure reward programs, track order requests, monitor cashback earnings and manage transaction accuracy with comprehensive reporting.'
    },
    {
      icon: Users,
      title: 'Branches & Departments Management',
      description: 'Centralized management of branches and departments with role-based access controls and detailed analytics for seamless operations.'
    },
    {
      icon: BarChart3,
      title: 'Staff Management',
      description: 'Oversee staff details, monitor attendance and productivity, assign tasks and generate performance reports for data-driven decisions.'
    },
    {
      icon: Settings,
      title: 'System Configuration',
      description: 'Comprehensive system settings management with customizable workflows, automated processes and real-time monitoring capabilities.'
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
      title: 'Requirements Analysis', 
      description: 'Our team conducts a comprehensive analysis of your business processes to identify requirements, pain points, and opportunities for ERP optimization and digital transformation.' 
    },
    { 
      number: '2', 
      title: 'System Design', 
      description: 'We create a customized ERP solution blueprint that aligns with your business goals, incorporating advanced technologies like AI, cloud computing, and real-time analytics.' 
    },
    { 
      number: '3', 
      title: 'Implementation & Integration', 
      description: 'Our experts deploy the ERP solution with minimal disruption, ensuring seamless integration with your existing systems and third-party platforms for maximum efficiency.' 
    },
    { 
      number: '4', 
      title: 'Training & Support', 
      description: 'We provide comprehensive training for your team and offer ongoing support, continuously monitoring system performance and making optimizations to maximize ROI.' 
    }
  ];

  const faqs = [
    {
      question: "What are the key benefits of implementing an ERP system?",
      answer: "Implementation of an ERP system offers numerous benefits including improved operational efficiency, reduced costs, better visibility across business processes, streamlined workflows, enhanced data accuracy, improved decision-making through real-time insights, and better customer satisfaction through integrated service delivery."
    },
    {
      question: "How customizable are ERP systems to fit specific business needs?",
      answer: "Modern ERP systems are highly customizable and can be tailored to meet specific business requirements. They offer configurable workflows, custom fields, personalized dashboards, role-based access controls, and can be integrated with existing systems to ensure seamless operations across your organization."
    },
    {
      question: "What are the challenges typically faced during ERP implementation?",
      answer: "Common ERP implementation challenges include data migration complexities, user adoption resistance, integration with legacy systems, customization requirements, training needs, and change management. However, with proper planning, experienced implementation partners, and phased rollout approaches, these challenges can be effectively managed."
    },
    {
      question: "How long does it take to make an Enterprise Resource Planning System?",
      answer: "The development timeline for an ERP system varies based on complexity, customization requirements, and business size. Typically, it ranges from 6-18 months for comprehensive implementations. Factors affecting timeline include system complexity, data migration scope, integration requirements, customization level, and user training needs."
    }
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

        <div className="relative container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div className="text-white space-y-6">
              <h1 className="text-3xl md:text-4xl  leading-tight">
                Enterprise Resource Planning Software Development
              </h1>
              <p className="text-lg text-gray-300 leading-relaxed">
                From managing departments and tracking performance to generating insightful reports, our Admin Panel puts the power of data-driven decision-making at your fingertips, ensuring seamless coordination and efficiency at every level.
              </p>
              <button 
                onClick={openConsultation}
                className="bg-gradient-to-r from-amber-400 to-orange-500 text-black px-6 py-3 rounded-xl  transition-all duration-300 transform hover:scale-105 shadow-lg hover:from-amber-500 hover:to-orange-600 "
              >
                Get Free Consultation
              </button>
            </div>

            {/* Right Content - Admin Features */}
            <div className="space-y-4">
              {adminFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 hover:bg-white/15 transition-all duration-300">
                    <div className="flex items-start space-x-3">
                      <div className="bg-blue-600 p-2 rounded-lg text-white flex-shrink-0">
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

      {/* Key Features Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent  mb-3">
              Key Features In Our Enterprise Resource Planning Software Development
            </h2>
            <p className="text-base text-gray-300 max-w-2xl mx-auto">
              Witness our feature-packed solutions for boosting your conversions, loyalty, and customer satisfaction, 
              or if you have any other idea, don't worry we will build it for you.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-blue-300">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Left Side - Feature List */}
                <div className="bg-gray-900 p-4">
                  <div className="space-y-2 max-h-96 overflow-y-auto custom-scrollbar">
                    {features.map((feature, index) => (
                      <div
                        key={index}
                        className={`p-3 rounded-lg cursor-pointer transition-all duration-300 ${
                          activeFeature === index 
                            ? 'bg-blue-600 text-white' 
                            : 'text-gray-300 hover:bg-gray-800'
                        }`}
                        onClick={() => setActiveFeature(index)}
                      >
                        <div className="flex items-center space-x-2">
                          <span className={`text-xs  px-2 py-1 rounded ${
                            activeFeature === index ? 'bg-white text-blue-600' : 'bg-blue-600 text-white'
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
                    <div className="bg-blue-100 p-3 rounded-xl w-fit">
                      <div className="bg-blue-600 p-2 rounded-lg">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
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
                            <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
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
              Our ERP Implementation Process
            </h2>
            <p className="text-lg text-gray-300">
              A streamlined approach to deploying your Enterprise Resource Planning solution efficiently and effectively.
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
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-600 text-white rounded-full flex items-center justify-center text-lg sm:text-xl  mb-2 mx-auto border-2 border-white shadow-lg">
                      {step.number}
                    </div>
                    <h3 className=" text-white text-xs sm:text-sm leading-tight px-1">{step.title}</h3>
                  </div>
                ))}
              </div>
            </div>

            {/* Desktop Layout - With Connectors */}
            <div className="hidden md:flex justify-center items-center gap-6">
              {processSteps.map((step, index) => (
                <div key={index} className="flex items-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl  mb-3 mx-auto">
                      {step.number}
                    </div>
                    <h3 className=" text-white text-sm mb-1">{step.title}</h3>
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
                    Transform Your Business Operations with Our ERP Expertise
                  </h2>
                  <p className="text-xl text-gray-300 mb-8">
                    Why Leading Enterprises Choose Our ERP Solutions
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center space-x-4 group">
                    <div className="bg-blue-600 text-white px-3 py-1 rounded-md  text-sm">
                      01
                    </div>
                    <div>
                      <h3 className="text-xl  group-hover:text-blue-300 transition-colors">
                        Well Experienced Team
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
                        Customization & Flexibility
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
                        Innovative Solutions
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
                        Quality Assurance & Reliability
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
                        Timely Delivery & Project Management
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
                        Competitive Pricing
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
                      Ready to Streamline Your Business Operations?
                    </h3>
                    <p className="text-blue-100 mb-6">
                      Join industry leaders who trust our ERP solutions to optimize their business processes and drive growth.
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

      {/* FAQ Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent md:text-4xl  mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-300">
                Find answers to common questions about our ERP solutions
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

export default ERPPage;