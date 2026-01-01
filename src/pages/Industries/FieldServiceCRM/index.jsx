import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useConsultation } from '../../../contexts/ConsultationContext';
import { Shield, Monitor, Bell, BarChart3, ChevronDown, ChevronUp } from 'lucide-react';
import SEO from '../../../components/SEO';
import { seoData } from '../../../utils/seoData';

const FieldServiceCRM = () => {
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
      id: 'work-order-management',
      title: 'Work Order Management',
      description: 'Create, assign, and track work orders efficiently with automated scheduling and real-time updates.',
      details: [
        'Automated Work Order Creation: Generate work orders automatically from customer requests, service contracts, or scheduled maintenance.',
        'Smart Assignment: Intelligently assign work orders to field technicians based on skills, location, and availability.',
        'Real-Time Status Updates: Track work order progress from creation to completion with live status updates.'
      ]
    },
    {
      id: 'field-technician-management',
      title: 'Field Technician Management',
      description: 'Manage your mobile workforce with GPS tracking, scheduling, and performance monitoring.',
      details: [
        'GPS Tracking: Real-time location tracking of field technicians for better coordination and route optimization.',
        'Mobile App Access: Technicians can access work orders, customer information, and service history on their mobile devices.',
        'Performance Analytics: Track technician productivity, completion rates, and customer satisfaction scores.'
      ]
    },
    {
      id: 'service-scheduling',
      title: 'Intelligent Service Scheduling',
      description: 'Optimize field service schedules with AI-powered routing and automated appointment booking.',
      details: [
        'Smart Scheduling: AI-powered scheduling considers technician skills, location, and job priority for optimal assignments.',
        'Route Optimization: Minimize travel time and fuel costs with intelligent route planning.',
        'Automated Reminders: Send automatic notifications to customers and technicians about upcoming appointments.'
      ]
    },
    {
      id: 'inventory-management',
      title: 'Inventory & Parts Management',
      description: 'Track inventory levels, manage parts, and ensure technicians have the right equipment for each job.',
      details: [
        'Real-Time Inventory Tracking: Monitor stock levels across warehouses and service vehicles.',
        'Parts Ordering: Automated reordering when inventory reaches minimum thresholds.',
        'Equipment Assignment: Track which technician has which equipment and parts.'
      ]
    },
    {
      id: 'customer-portal',
      title: 'Customer Self-Service Portal',
      description: 'Empower customers to schedule services, track appointments, and access service history.',
      details: [
        'Online Booking: Customers can schedule service appointments based on real-time technician availability.',
        'Service History: Access complete service records and maintenance history.',
        'Real-Time Tracking: Track technician arrival time and service progress in real-time.'
      ]
    },
    {
      id: 'mobile-application',
      title: 'Dedicated Mobile Application',
      description: 'Field technicians can manage their work orders, access customer data, and update job status on the go.',
      details: [
        'Offline Capability: Access critical information and update work orders even without internet connectivity.',
        'Digital Forms: Capture customer signatures, photos, and service notes digitally.',
        'In-App Communication: Direct messaging with dispatch and other team members.'
      ]
    },
    {
      id: 'analytics-reporting',
      title: 'Analytics & Reporting',
      description: 'Comprehensive reporting and analytics to track KPIs, identify trends, and optimize field operations.',
      details: [
        'Performance Dashboards: Real-time visibility into key metrics like first-time fix rate, response time, and customer satisfaction.',
        'Custom Reports: Generate detailed reports on technician performance, service trends, and operational efficiency.',
        'Predictive Analytics: Use AI to predict equipment failures and schedule preventive maintenance.'
      ]
    },
   
  ];

  const adminFeatures = [
    {
      icon: Shield,
      title: 'Role Based Access',
      description: 'Assign roles by department, location, or project. Track audit trails and user actions for compliance.'
    },
    {
      icon: Monitor,
      title: 'Complaint Monitoring',
      description: 'Monitor complaints from submission to resolution. Escalate unresolved issues to meet deadlines.'
    },
    {
      icon: Bell,
      title: 'Notifications Settings',
      description: 'Configure notifications by urgency and relevance. Real-time updates on complaint status and escalations.'
    },
    {
      icon: BarChart3,
      title: 'Data Analytics & Reporting',
      description: 'Track complaint trends and KPIs with analytics tools. Smart dashboard with bar and pie charts.'
    }
  ];

  const stats = [
    { number: '7+', label: 'Business Years' },
    { number: '120+', label: 'Projects Delivered' },
    { number: '10+', label: 'Industries Catered' },
    { number: '4+', label: 'Countries' }
  ];

  const processSteps = [
    { number: '1', title: 'Planning & Analysis', description: 'Witness our step by step process in making a complaint management system process.' },
    { number: '2', title: 'Design & Architecture', description: 'Creating comprehensive design and system architecture.' },
    { number: '3', title: 'Development & Testing', description: 'Building and testing the complete system.' },
    { number: '4', title: 'Deployment & Maintenance', description: 'Deploying and maintaining the system.' }
  ];

  const faqs = [
    {
      question: "What features should I look for in a field service CRM?",
      answer: "When choosing a field service CRM, key features to consider include work order management, GPS tracking, mobile app for technicians, intelligent scheduling, inventory management, customer portal, real-time updates, and analytics. Ensure it integrates with other systems, is scalable, and offers a user-friendly interface for both office staff and field technicians."
    },
    {
      question: "How can a field service CRM help my business?",
      answer: "A field service CRM helps businesses efficiently manage mobile workforce, optimize scheduling and routing, improve first-time fix rates, reduce operational costs, and enhance customer satisfaction. By streamlining communication and automating processes, it ensures timely service delivery, fostering customer loyalty and positive experiences."
    },
    {
      question: "Can a field service CRM be integrated with other systems?",
      answer: "Yes, many field service CRM systems offer integration capabilities with other business systems like accounting software, inventory management, ERP systems, and communication platforms. When integrating, it's important to ensure data consistency throughout the process to maintain accurate and reliable information across all systems."
    },
    {
      question: "Is a field service CRM suitable for my business size or industry?",
      answer: "Yes, field service CRM systems are beneficial for businesses of all sizes across various industries including HVAC, plumbing, electrical, telecommunications, healthcare equipment, and more. Whether you're a small service provider or a large enterprise, managing field operations effectively is crucial for maintaining service quality and business growth."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO {...seoData.fieldServiceCRM} />
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
                Field Service CRM - Streamline Your Field Operations
              </h1>
              <p className="text-lg text-gray-300 leading-relaxed">
                Elevate, control, streamline operations, and unlock efficiency with our field service CRM admin panel.
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

      {/* Key Features Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent  mb-3">
              Key Features In Our Field Service CRM
            </h2>
            <p className="text-base text-gray-300 max-w-2xl mx-auto">
              Unleash your field service potential with our dynamic features, or if you want to add some of your own business features, don't worry, we'll do it for you.
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
                            0{index + 1}
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
              Our Stage Wise Field Service CRM Process
            </h2>
            <p className="text-lg text-gray-300">
              Witness our step by step process in implementing a field service CRM system.
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
                    Lead The Future Of Field Service Management With Ascentia Labs
                  </h2>
                  <p className="text-xl text-gray-300 mb-8">
                    Here's Why You Can't Afford to Miss Us Out!
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
                      Ready to Transform Your Business?
                    </h3>
                    <p className="text-blue-100 mb-6">
                      Join hundreds of satisfied clients who trust Ascentia Labs for their complaint management solutions.
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
                Get answers to common questions about our complaint management system
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

export default FieldServiceCRM;