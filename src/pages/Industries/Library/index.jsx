import { useState } from 'react';
import { BookOpen, Users, Database, Shield, ChevronDown, ChevronUp } from 'lucide-react';

const LibraryPage = () => {
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
      id: 'digital-library-management',
      title: 'Digital Library Management',
      description: 'Comprehensive digital library management system for modern libraries.',
      details: [
        'Our digital library management system allows librarians to store and manage digital assets like eBooks, audiobooks, and multimedia files.',
        'Our system supports various digital formats for seamless accessibility across devices.',
        'Integrated analytics provide insights into usage patterns, aiding informed resource allocation and collection development.'
      ]
    },
    {
      id: 'search-discovery',
      title: 'Search & Discovery',
      description: 'Advanced search and discovery tools for library resources.',
      details: [
        'Powerful search functionality with advanced filtering options for quick resource location.',
        'Intelligent recommendation system based on user preferences and borrowing history.',
        'Cross-platform search capabilities covering physical and digital collections.',
        'Real-time availability status and reservation management for popular items.'
      ]
    },
    {
      id: 'library-catalog-management',
      title: 'Library Catalog Management',
      description: 'Complete catalog management for all library resources.',
      details: [
        'Comprehensive cataloging system with MARC record support and metadata management.',
        'Automated ISBN lookup and bibliographic data import for efficient cataloging.',
        'Multi-format support including books, journals, DVDs, and digital resources.',
        'Bulk import/export capabilities for large-scale catalog management.'
      ]
    },
    {
      id: 'reservation-hold-management',
      title: 'Reservation & Hold Management',
      description: 'Efficient reservation and hold management system.',
      details: [
        'Online reservation system allowing patrons to reserve items remotely.',
        'Automated hold notifications via email and SMS when items become available.',
        'Priority queue management for high-demand resources.',
        'Hold expiration tracking with automatic release and notification systems.'
      ]
    },
    {
      id: 'membership-plan-management',
      title: 'Membership Plan Management',
      description: 'Flexible membership and patron management system.',
      details: [
        'Multiple membership tiers with customizable borrowing privileges and duration.',
        'Automated membership renewal reminders and online renewal capabilities.',
        'Patron profile management with borrowing history and preferences tracking.',
        'Integration with payment systems for membership fees and fine collection.'
      ]
    },
    {
      id: 'online-secure-payment',
      title: 'Online & Secure Payment',
      description: 'Secure online payment processing for library services.',
      details: [
        'Multiple payment gateway integration for membership fees and fine payments.',
        'Secure transaction processing with PCI compliance and data encryption.',
        'Automated receipt generation and payment history tracking.',
        'Flexible payment options including installments for annual memberships.'
      ]
    },
    {
      id: 'automated-notifications',
      title: 'Automated Notifications',
      description: 'Comprehensive notification system for library operations.',
      details: [
        'Automated due date reminders via email, SMS, and push notifications.',
        'Overdue notices with escalating reminder schedules and fine calculations.',
        'New arrival notifications based on patron interests and preferences.',
        'System maintenance and closure notifications for all registered users.'
      ]
    },
    {
      id: 'reporting-analytics',
      title: 'Reporting & Analytics',
      description: 'Advanced reporting and analytics for library management.',
      details: [
        'Comprehensive circulation reports with borrowing trends and popular resources.',
        'Patron analytics including usage patterns and demographic insights.',
        'Collection analysis with acquisition recommendations and weeding reports.',
        'Financial reporting for membership revenue, fines, and operational costs.'
      ]
    }
  ];

  const adminFeatures = [
    {
      icon: Database,
      title: 'Database Management',
      description: 'Manage patron databases, membership plans, fines, and book records with advanced search and batch processing capabilities.'
    },
    {
      icon: Users,
      title: 'User Support',
      description: 'Handle support requests, update FAQs, guides, and tutorials to empower users with self-service solutions.'
    },
    {
      icon: Shield,
      title: 'Role Based Access',
      description: 'Create and manage user accounts with specific roles and permissions for librarians, students, and staff.'
    },
    {
      icon: BookOpen,
      title: 'System Settings',
      description: 'Configure catalog entries, e-books, and notification alerts for enhanced library operations.'
    }
  ];

  const processSteps = [
    { 
      number: '1', 
      title: 'Library Assessment', 
      description: 'Our team conducts a comprehensive analysis of your library operations to identify workflow inefficiencies, collection management needs, and opportunities for digital transformation in library services.' 
    },
    { 
      number: '2', 
      title: 'System Architecture', 
      description: 'We design a customized library management solution that aligns with library standards, incorporating cataloging protocols, user management, and advanced library technologies.' 
    },
    { 
      number: '3', 
      title: 'Implementation & Integration', 
      description: 'Our experts deploy the library solution with minimal disruption to daily operations, ensuring seamless integration with existing library systems and third-party platforms.' 
    },
    { 
      number: '4', 
      title: 'Training & Support', 
      description: 'We provide comprehensive training for library staff and ensure ongoing support, continuously optimizing system performance to enhance patron experience and operational efficiency.' 
    }
  ];

  const faqs = [
    {
      question: "How can I determine if your Library Management System is the optimal choice for my library?",
      answer: "Our Library Management System is ideal for libraries seeking comprehensive digital transformation. It offers advanced cataloging, patron management, digital resource integration, automated workflows, and detailed analytics. The system scales from small community libraries to large academic institutions, providing customizable features that adapt to your specific operational needs and budget requirements."
    },
    {
      question: "How Does a Library Management System Benefit Libraries?",
      answer: "A Library Management System streamlines operations by automating cataloging, circulation, and patron management. It reduces manual workload, minimizes errors, improves resource accessibility, enhances patron experience through online services, provides valuable analytics for decision-making, and enables efficient inventory management. The system also supports digital collections and remote access capabilities."
    },
    {
      question: "What sets Ascentia Labs apart as the premier leader in Library Management System development?",
      answer: "Ascentia Labs combines deep library science expertise with cutting-edge technology to deliver tailored solutions. Our systems feature intuitive interfaces, robust security, seamless integration capabilities, and comprehensive support. We understand library workflows, offer extensive customization, provide ongoing training, and maintain long-term partnerships to ensure your system evolves with your needs."
    },
    {
      question: "How Secure is Library Patron Data in a Library Management System?",
      answer: "Our Library Management System employs enterprise-grade security measures including data encryption, secure user authentication, role-based access controls, regular security audits, and compliance with privacy regulations. Patron data is protected through multiple security layers, automated backups, and disaster recovery protocols, ensuring complete confidentiality and data integrity."
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
                Streamline Library Operations with Our Comprehensive Management System
              </h1>
              <p className="text-lg text-gray-300 leading-relaxed">
                Streamline operations, manage patrons, books, memberships effortlessly with enhanced 
                security and boost efficiency with our comprehensive library management admin tools.
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
              Key Features In Our Library Management System
            </h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              Unleash your library business potential with our dynamic feature of Library Management system, or 
              if you want to add some of your own library business features, don't worry, we'll do it for you.
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
              Our Library Management Implementation Process
            </h2>
            <p className="text-lg text-gray-600">
              A streamlined approach to deploying your library management solution efficiently and effectively.
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
                    Transform Your Library Operations with Our Library Expertise
                  </h2>
                  <p className="text-xl text-gray-300 mb-8">
                    Why Leading Libraries Choose Our Solutions
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
                      Ready to Modernize Your Library?
                    </h3>
                    <p className="text-blue-100 mb-6">
                      Join libraries who trust our solutions to enhance patron experience and streamline library operations.
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
                Find answers to common questions about our library management solutions
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

export default LibraryPage;