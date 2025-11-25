import { useState } from 'react';
import { Truck, MapPin, Package, ChevronDown, ChevronUp } from 'lucide-react';

const LogisticsPage = () => {
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
      id: 'logistics-order-management',
      title: 'Logistics Order Management',
      description: 'Comprehensive order management system for efficient logistics operations.',
      details: [
        'Shipping Label Generation: Create carrier-specific labels with AIDC codes for efficient package tracking and order integration.',
        'Batch Processing: Process multiple shipments at once, saving time and reducing manual handling of bulk orders.',
        'Return Shipment Management: Easily manage return shipments by generating return labels to distinguish them from regular orders.'
      ]
    },
    {
      id: 'inventory-management-solution',
      title: 'Inventory Management Solution',
      description: 'Advanced inventory tracking and management solutions.',
      details: [
        'Real-time Inventory Tracking: Monitor stock levels across multiple locations with instant updates and complete visibility.',
        'Automated Stock Monitoring: Set up intelligent alerts and automated reorder points to prevent stockouts.',
        'Advanced Scanning Integration: Use barcode and RFID technology for accurate item tracking and reduced errors.',
        'Batch and Serial Management: Track products by batch numbers for complete traceability and quality control.'
      ]
    },
    {
      id: 'shipment-management-solution',
      title: 'Shipment Management Solution',
      description: 'End-to-end shipment tracking and management capabilities.',
      details: [
        'Real-time Shipment Tracking: Complete visibility into shipment status from pickup to delivery with GPS tracking.',
        'Automated Shipping Notifications: Send automatic status updates to customers at key delivery milestones.',
        'Multi-carrier Integration: Connect with multiple carriers to compare rates and manage all shipments from one platform.',
        'Proof of Delivery Documentation: Capture electronic signatures and photos for comprehensive delivery confirmation.'
      ]
    },
    {
      id: 'fleet-logistics-management',
      title: 'Fleet Logistics Management Solution',
      description: 'Complete fleet management and optimization system.',
      details: [
        'Real-time Vehicle Tracking: Monitor your entire fleet with GPS tracking for live location updates and route monitoring.',
        'Intelligent Route Optimization: Use AI-powered algorithms to plan efficient routes and reduce fuel costs.',
        'Driver Assignment and Scheduling: Optimize driver assignments based on availability and manage work schedules.',
        'Performance Analytics: Generate detailed reports on fleet performance and operational efficiency.'
      ]
    },
    {
      id: 'fleet-fuel-management',
      title: 'Fleet Logistics Fuel Management Solution',
      description: 'Comprehensive fuel management and cost optimization.',
      details: [
        'Fuel Consumption Tracking: Monitor and analyze fuel usage patterns across your fleet with detailed reports.',
        'Fuel Card Integration: Integrate with fuel card systems to track purchases and prevent fraud.',
        'Cost Optimization: Implement budgeting tools to analyze fuel costs and identify cost reduction opportunities.',
        'Fuel Efficiency Reporting: Generate reports on fuel efficiency metrics and compare performance across vehicles.'
      ]
    },
    {
      id: 'vehicle-health-management',
      title: 'Vehicle Health Management',
      description: 'Proactive vehicle maintenance and health monitoring.',
      details: [
        'Real-time Vehicle Diagnostics: Monitor vehicle health through integrated systems to prevent breakdowns.',
        'Predictive Maintenance: Use analytics to predict maintenance needs based on usage patterns and mileage.',
        'Health Alerts: Receive instant notifications about potential issues and maintenance due dates.',
        'Maintenance History: Maintain detailed records of all maintenance activities and repairs.'
      ]
    },
    {
      id: 'agency-warehouse-logistics',
      title: 'Agency & Warehouse Logistics Management',
      description: 'Integrated agency and warehouse management solutions.',
      details: [
        'Multi-location Warehouse Management: Coordinate operations across multiple facilities with centralized control.',
        'Agency Coordination: Facilitate communication between agencies and transportation partners.',
        'Inventory Distribution: Optimize inventory placement and movement between locations.',
        'Performance Monitoring: Track key performance indicators across all locations.'
      ]
    },
    {
      id: 'digital-lock-solution',
      title: 'Digital Lock Solution',
      description: 'Advanced security solutions for cargo and vehicle protection.',
      details: [
        'Smart Lock Integration: Deploy IoT-enabled digital locks with remote monitoring and control capabilities.',
        'Real-time Security Alerts: Receive instant notifications about unauthorized access attempts and security breaches.',
        'Access Control: Implement role-based access control for authorized personnel only.',
        'Tamper Detection: Advanced sensors detect tampering attempts with immediate alerts.'
      ]
    },
    {
      id: 'expense-management-system',
      title: 'Expense Management System',
      description: 'Comprehensive expense tracking and management platform.',
      details: [
        'Automated Expense Tracking: Automatically capture and categorize expenses from fuel cards and maintenance bills.',
        'Digital Receipt Management: Digitize and store receipts with OCR technology for easy retrieval.',
        'Approval Workflows: Implement customizable approval processes with multi-level authorization controls.',
        'Budget Monitoring: Set up intelligent budget tracking with automated alerts for spending limits.'
      ]
    },
    {
      id: 'driver-behavior-monitoring',
      title: 'Driver Behavior Monitoring',
      description: 'Advanced driver performance and safety monitoring system.',
      details: [
        'Real-time Behavior Analysis: Monitor driving patterns including speed, acceleration, and braking to identify risky behaviors.',
        'Safety Scoring: Generate comprehensive safety scores for each driver based on multiple behavioral factors.',
        'Training Recommendations: Receive intelligent recommendations for driver training programs based on behavioral patterns.',
        'Incident Reporting: Automatically detect and report driving incidents with detailed analytics.'
      ]
    },
    {
      id: 'customer-support',
      title: 'Customer Support',
      description: 'Comprehensive customer service and support platform.',
      details: [
        'Multi-Channel Query Logging: Customers can log queries via Email, WhatsApp, AI Chatbot, or Calls.',
        'Automated Order Updates: Customers receive automated status updates on Dispatch, Transit, and Delivery.',
        'Seamless Communication: Internal teams and customers can communicate effectively, ensuring all critical information is available and actionable.'
      ]
    }
  ];

  const adminFeatures = [
    {
      icon: Truck,
      title: 'Fleet Management',
      description: 'Track and manage your entire fleet with real-time GPS tracking, vehicle diagnostics, and maintenance scheduling.'
    },
 
    {
      icon: Package,
      title: 'Inventory Management',
      description: 'Comprehensive inventory tracking with barcode scanning, automated reorder points, and real-time stock updates.'
    },
    {
      icon: MapPin,
      title: 'Last Mile Delivery',
      description: 'Efficient last-mile solutions featuring real-time tracking, electronic proof of delivery, and customer notifications.'
    },
    {
      icon: Package,
      title: 'Supply Chain Visibility',
      description: 'End-to-end visibility across your entire supply chain network with real-time tracking and analytics.'
    }
  ];

  const processSteps = [
    { 
      number: '1', 
      title: 'Needs Assessment', 
      description: 'Our team conducts a thorough analysis of your logistics operations to identify pain points, inefficiencies, and opportunities for improvement through digital transformation.' 
    },
    { 
      number: '2', 
      title: 'Solution Design', 
      description: 'We create a customized logistics management blueprint that aligns with your business goals, incorporating advanced technologies like AI, IoT, and cloud computing.' 
    },
    { 
      number: '3', 
      title: 'Implementation & Integration', 
      description: 'Our experts deploy the digital solution with minimal disruption, ensuring seamless integration with your existing systems and third-party platforms.' 
    },
    { 
      number: '4', 
      title: 'Training & Optimization', 
      description: 'We provide comprehensive training for your team and continuously monitor system performance, making data-driven optimizations to maximize efficiency and ROI.' 
    }
  ];

  const faqs = [
    {
      question: "What are the key benefits of implementing a logistics management software?",
      answer: "Implementation of a logistics management software offers many benefits such as better efficiency, lower costs, better visibility of operations, better logistics order inventory management, optimized route planning and improved customer satisfaction through on-time deliveries and better service levels."
    },
    {
      question: "How does a logistics management software improve efficiency?",
      answer: "The logistics management software automates manual processes, reduces paperwork and provides real-time insight into inventory, vehicles and delivery locations. It improves work efficiency by minimizing errors, reducing delays and optimizing the use of resources."
    },
    {
      question: "What features should I look for in a logistics management software?",
      answer: "When evaluating a logistics management software, important features include order management, inventory management, logistics automation, inbound and outbound logistics, route optimization, fleet logistics, vehicle tracking, reporting and analytics, integration features, user-friendly interface, and customer support."
    },
    {
      question: "Is a logistics management software secure?",
      answer: "Yes, reputable logistics management softwares implement strong security measures to protect sensitive data and ensure compliance with data protection regulations. This may include encryption, access control, regular security updates and compliance certifications."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      <style dangerouslySetInnerHTML={{ __html: scrollbarStyles }} />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-black overflow-hidden py-16">
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
                Transform Your Logistics Operations with Our Advanced Management System
              </h1>
              <p className="text-lg text-gray-300 leading-relaxed">
                From overseeing inventory management and tracking shipments to optimizing route planning and analyzing performance metrics, our versatile admin panel offers essential logistics tools tailored to your logistics business needs.
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
              Comprehensive Logistics Management Features
            </h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              Our logistics management system is packed with powerful features to streamline your supply chain, 
              optimize routes, and provide real-time visibility across your entire operation.
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
              Our Logistics Management Implementation Process
            </h2>
            <p className="text-lg text-gray-600">
              A streamlined approach to deploying your logistics management solution efficiently and effectively.
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
                    Revolutionize Your Supply Chain with Our Logistics Expertise
                  </h2>
                  <p className="text-xl text-gray-300 mb-8">
                    Why Leading Logistics Companies Choose Our Solutions
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center space-x-4 group">
                    <div className="bg-blue-600 text-white px-3 py-1 rounded-md font-bold text-sm">
                      01
                    </div>
                    <div>
                      <h3 className="text-xl font-bold group-hover:text-blue-300 transition-colors">
                        Well Experienced Team
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
                        Customization & Flexibility
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
                        Innovative Solutions
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
                        Quality Assurance & Reliability
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
                        Timely Delivery & Project Management
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
                    <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold mb-4">
                      Ready to Optimize Your Supply Chain?
                    </h3>
                    <p className="text-blue-100 mb-6">
                      Join industry leaders who trust our logistics management solutions to streamline their operations and reduce costs.
                    </p>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                      Request a Demo
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
                Find answers to common questions about our logistics management solutions
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

export default LogisticsPage;