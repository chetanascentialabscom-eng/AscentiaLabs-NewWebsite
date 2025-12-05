import { useState } from 'react';
import { Settings, DollarSign, ChevronDown, ChevronUp, Shield, UserCheck, BarChart3, Truck } from 'lucide-react';

const ManufacturingPage = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [openFAQ, setOpenFAQ] = useState(null);

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
      id: 'production-planning-management',
      title: 'Production Planning & Management',
      description: 'Comprehensive production planning system for manufacturing operations.',
      details: [
        'Advanced production scheduling with capacity planning and resource optimization.',
        'Real-time production monitoring with performance tracking and bottleneck identification.',
        'Automated workflow management with task assignment and progress tracking.',
        'Integration with inventory systems for seamless material requirement planning.'
      ]
    },
    {
      id: 'inventory-management-system',
      title: 'Inventory Management System',
      description: 'Advanced inventory tracking and management solutions.',
      details: [
        'Real-time inventory tracking with automated stock level monitoring and alerts.',
        'Multi-location warehouse management with transfer tracking and optimization.',
        'Automated reorder points with supplier integration and purchase order generation.',
        'Batch and serial number tracking for complete product traceability.'
      ]
    },
    {
      id: 'quality-control-assurance',
      title: 'Quality Control & Assurance',
      description: 'Complete quality management system for manufacturing standards.',
      details: [
        'Automated quality inspection workflows with customizable checkpoints and criteria.',
        'Statistical process control with real-time monitoring and trend analysis.',
        'Non-conformance tracking with corrective action management and documentation.',
        'Compliance management with regulatory standards and audit trail maintenance.'
      ]
    },
    {
      id: 'supply-chain-management',
      title: 'Supply Chain Management',
      description: 'End-to-end supply chain optimization platform.',
      details: [
        'Supplier relationship management with performance tracking and evaluation.',
        'Procurement automation with RFQ management and contract tracking.',
        'Logistics optimization with shipping coordination and delivery tracking.',
        'Vendor portal integration for seamless communication and collaboration.'
      ]
    },
    {
      id: 'maintenance-scheduling',
      title: 'Maintenance & Scheduling',
      description: 'Intelligent equipment maintenance and scheduling system.',
      details: [
        'Preventive maintenance scheduling with automated reminders and work orders.',
        'Equipment performance monitoring with predictive maintenance capabilities.',
        'Maintenance cost tracking with budget management and reporting.',
        'Spare parts inventory management with automatic reordering and availability tracking.'
      ]
    },
    {
      id: 'workforce-management',
      title: 'Workforce Management',
      description: 'Advanced workforce planning and management system.',
      details: [
        'Employee scheduling with skill-based assignment and shift optimization.',
        'Time and attendance tracking with productivity monitoring and reporting.',
        'Training management with certification tracking and compliance monitoring.',
        'Performance analytics with KPI tracking and employee development planning.'
      ]
    },
    {
      id: 'financial-reporting-analytics',
      title: 'Financial Reporting & Analytics',
      description: 'Comprehensive financial management and business intelligence.',
      details: [
        'Real-time cost accounting with job costing and profitability analysis.',
        'Financial dashboards with key performance indicators and trend analysis.',
        'Budget planning and variance analysis with automated reporting capabilities.',
        'Integration with ERP systems for seamless financial data synchronization.'
      ]
    },
    {
      id: 'compliance-documentation',
      title: 'Compliance & Documentation',
      description: 'Regulatory compliance and document management system.',
      details: [
        'Automated compliance monitoring with regulatory requirement tracking.',
        'Document management system with version control and approval workflows.',
        'Audit trail maintenance with comprehensive logging and reporting capabilities.',
        'Safety management with incident tracking and corrective action management.'
      ]
    },
    {
      id: 'iot-integration',
      title: 'IoT Integration & Monitoring',
      description: 'Internet of Things integration for smart manufacturing.',
      details: [
        'Real-time machine monitoring with sensor data collection and analysis.',
        'Predictive analytics with machine learning for equipment failure prediction.',
        'Energy management with consumption monitoring and optimization recommendations.',
        'Remote monitoring capabilities with mobile access and alert notifications.'
      ]
    },
    {
      id: 'customer-order-management',
      title: 'Customer Order Management',
      description: 'Complete customer order processing and fulfillment system.',
      details: [
        'Order processing automation with customer portal integration and tracking.',
        'Delivery scheduling with logistics coordination and customer communication.',
        'Customer relationship management with order history and preference tracking.',
        'Invoicing and payment processing with automated billing and collection management.'
      ]
    }
  ];

  const adminFeatures = [
    {
      icon: Settings,
      title: 'Production Control System',
      description: 'Efficiently manage production schedules, monitor workflows, and optimize manufacturing processes for maximum efficiency.'
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Implement comprehensive quality control measures with automated testing, compliance tracking, and defect management.'
    },
    {
      icon: BarChart3,
      title: 'Analytics & Reporting',
      description: 'Generate detailed production reports, track KPIs, and analyze performance metrics for data-driven decision making.'
    },
    {
      icon: Truck,
      title: 'Supply Chain Management',
      description: 'Manage supplier relationships, track inventory levels, and optimize procurement processes for seamless operations.'
    }
  ];

  const processSteps = [
    { 
      number: '1', 
      title: 'Requirements Analysis', 
      description: 'Our team conducts comprehensive analysis of your manufacturing processes, identifying key challenges, operational requirements, and opportunities for digital transformation.' 
    },
    { 
      number: '2', 
      title: 'Custom Solution Design', 
      description: 'We design a tailored manufacturing management platform that aligns with your production model, incorporating advanced features like IoT integration, predictive analytics, and automated workflows.' 
    },
    { 
      number: '3', 
      title: 'Development & Integration', 
      description: 'Our experts develop and deploy the solution with seamless integration to existing systems, ERP platforms, and manufacturing equipment while ensuring minimal disruption to operations.' 
    },
    { 
      number: '4', 
      title: 'Training & Support', 
      description: 'We provide comprehensive training for your team and ongoing support, continuously monitoring system performance and implementing optimizations to maximize efficiency and ROI.' 
    }
  ];

  const faqs = [
    {
      question: "What are the key benefits of implementing manufacturing management software?",
      answer: "Manufacturing management software offers numerous benefits including improved production efficiency, enhanced quality control, automated workflows, better inventory management, streamlined supply chain operations, and comprehensive analytics for data-driven decision making."
    },
    {
      question: "How does manufacturing software improve production efficiency?",
      answer: "The software automates production planning, provides real-time monitoring of manufacturing processes, enables predictive maintenance, optimizes resource allocation, and provides centralized control systems, significantly reducing downtime and improving overall productivity."
    },
    {
      question: "What features should I look for in a manufacturing management platform?",
      answer: "Essential features include production planning and scheduling, inventory management, quality control systems, supply chain management, maintenance scheduling, workforce management, financial reporting, compliance tracking, and IoT integration capabilities."
    },
    {
      question: "Is manufacturing management software secure for handling sensitive production data?",
      answer: "Yes, professional manufacturing software implements enterprise-grade security measures including data encryption, secure access controls, role-based permissions, regular security updates, and compliance with industry regulations to ensure production data remains secure."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      <style dangerouslySetInnerHTML={{ __html: scrollbarStyles }} />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-black overflow-hidden py-20">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-40 left-20 w-24 h-24 bg-blue-400 rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-blue-300 rounded-full blur-xl"></div>
        </div>

        <div className="relative container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div className="text-white space-y-6">
              <h1 className="text-3xl md:text-4xl font-bold leading-tight">
                Explore Top Features of Our Custom Manufacturing Management Solutions
              </h1>
              <p className="text-lg text-gray-300 leading-relaxed">
                Discover the power of our state-of-the-art manufacturing management system, designed to streamline production processes, optimize workflows, and enhance operational efficiency for your manufacturing business.
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
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
                        <h3 className="text-white font-bold text-lg mb-1">{feature.title}</h3>
                        <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl bg-gradient-to-r from-blue-600 to-black bg-clip-text text-transparent font-bold text-gray-900 mb-3">
              Explore Top Features of Our Custom Manufacturing Management Solutions
            </h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              Discover comprehensive manufacturing management features designed to optimize your production processes, enhance quality control, and streamline operations for maximum efficiency.
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
                          <span className={`text-xs font-bold px-2 py-1 rounded ${
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
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
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
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl bg-gradient-to-r from-blue-600 to-black bg-clip-text text-transparent font-bold text-gray-900 mb-3">
              Our Manufacturing Development Implementation Process
            </h2>
            <p className="text-lg text-gray-600">
              A streamlined approach to deploying your manufacturing management solution efficiently and effectively.
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
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-600 text-white rounded-full flex items-center justify-center text-lg sm:text-xl font-bold mb-2 mx-auto border-2 border-white shadow-lg">
                      {step.number}
                    </div>
                    <h3 className="font-semibold text-gray-900 text-xs sm:text-sm leading-tight px-1">{step.title}</h3>
                  </div>
                ))}
              </div>
            </div>

            {/* Desktop Layout - With Connectors */}
            <div className="hidden md:flex justify-center items-center gap-6">
              {processSteps.map((step, index) => (
                <div key={index} className="flex items-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-3 mx-auto">
                      {step.number}
                    </div>
                    <h3 className="font-semibold text-gray-900 text-sm mb-1">{step.title}</h3>
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
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-32 h-32 bg-yellow-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-40 right-20 w-24 h-24 bg-yellow-300 rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-yellow-500 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 left-1/2 w-20 h-20 bg-yellow-200 rounded-full blur-2xl"></div>
        </div>

        <div className="relative container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="text-white space-y-8">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                    Revolutionize Your Manufacturing Operations with Our Expertise
                  </h2>
                  <p className="text-xl text-gray-300 mb-8">
                    Why Leading Manufacturing Companies Choose Our Solutions
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center space-x-4 group">
                    <div className="bg-blue-600 text-white px-3 py-1 rounded-md font-bold text-sm">
                      01
                    </div>
                    <div>
                      <h3 className="text-xl font-bold group-hover:text-blue-300 transition-colors">
                        Industry Expertise
                      </h3>
                      <div className="w-24 h-0.5 bg-blue-500 mt-1"></div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 group">
                    <div className="bg-blue-600 text-white px-3 py-1 rounded-md font-bold text-sm">
                      02
                    </div>
                    <div>
                      <h3 className="text-xl font-bold group-hover:text-blue-300 transition-colors">
                        Scalable Solutions
                      </h3>
                      <div className="w-24 h-0.5 bg-blue-500 mt-1"></div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 group">
                    <div className="bg-blue-600 text-white px-3 py-1 rounded-md font-bold text-sm">
                      03
                    </div>
                    <div>
                      <h3 className="text-xl font-bold group-hover:text-blue-300 transition-colors">
                        Advanced Technology
                      </h3>
                      <div className="w-24 h-0.5 bg-blue-500 mt-1"></div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 group">
                    <div className="bg-blue-600 text-white px-3 py-1 rounded-md font-bold text-sm">
                      04
                    </div>
                    <div>
                      <h3 className="text-xl font-bold group-hover:text-blue-300 transition-colors">
                        Quality Assurance & Compliance
                      </h3>
                      <div className="w-24 h-0.5 bg-blue-500 mt-1"></div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 group">
                    <div className="bg-blue-600 text-white px-3 py-1 rounded-md font-bold text-sm">
                      05
                    </div>
                    <div>
                      <h3 className="text-xl font-bold group-hover:text-blue-300 transition-colors">
                        Seamless Integration
                      </h3>
                      <div className="w-24 h-0.5 bg-blue-500 mt-1"></div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 group">
                    <div className="bg-blue-600 text-white px-3 py-1 rounded-md font-bold text-sm">
                      06
                    </div>
                    <div>
                      <h3 className="text-xl font-bold group-hover:text-blue-300 transition-colors">
                        24/7 Support
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
                    <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold mb-4">
                      Ready to Transform Your Manufacturing Operations?
                    </h3>
                    <p className="text-blue-100 mb-6">
                      Join industry leaders who trust our manufacturing management solutions to optimize their production processes and boost efficiency.
                    </p>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
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
      <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-blue-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl bg-gradient-to-r from-blue-600 to-black bg-clip-text text-transparent md:text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-600">
                Find answers to common questions about our manufacturing management solutions
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg border border-blue-100 overflow-hidden">
                  <button
                    className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-blue-50 transition-colors duration-200"
                    onClick={() => toggleFAQ(index)}
                  >
                    <h3 className="text-lg font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </h3>
                    <div className="flex-shrink-0">
                      {openFAQ === index ? (
                        <ChevronUp className="w-5 h-5 text-blue-600" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-blue-600" />
                      )}
                    </div>
                  </button>
                  
                  {openFAQ === index && (
                    <div className="px-6 pb-5">
                      <div className="border-t border-blue-100 pt-4">
                        <p className="text-gray-700 leading-relaxed">
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

export default ManufacturingPage;