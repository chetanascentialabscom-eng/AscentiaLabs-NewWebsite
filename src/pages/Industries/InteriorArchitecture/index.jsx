import { useState } from 'react';
import { LayoutDashboard, MonitorPlay, Users, Package, ChevronDown, ChevronUp } from 'lucide-react';

const InteriorArchitecture = () => {
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
      id: 'space-planning-tools',
      title: 'Space Planning Tools',
      description: 'Advanced tools for efficient space planning and layout design.',
      details: [
        'Advanced Floor Planning: Create precise 2D and 3D floor plans with drag-and-drop functionality.',
        'Furniture Arrangement: Intuitive tools to place and arrange furniture in virtual spaces.',
        'Space Optimization: Smart suggestions for optimal space utilization based on room dimensions and purpose.'
      ]
    },
    {
      id: '3d-modelling-rendering',
      title: '3D Modelling & Rendering',
      description: 'Advanced 3D visualization for realistic design previews.',
      details: [
        'Advanced 3D Modeling: Create detailed 3D models of interior spaces with realistic textures and materials.',
        'Texture Mapping Integration: Apply high-quality textures and materials to surfaces for realistic visualization.',
        'High-Quality Rendering: Generate photorealistic renderings with accurate lighting and shadows.'
      ]
    },
    {
      id: 'material-finish-libraries',
      title: 'Material & Finish Libraries',
      description: 'Comprehensive collection of materials and finishes for design.',
      details: [
        'Extensive Material & Finish Libraries: A wide range of materials, fabrics, textures, and patterns for interior design.',
        'Categorized & Searchable Database: Easily search and find specific materials or finishes for home projects.',
        'Informed Decision-Making: Access detailed information on durability, maintenance, and cost to choose materials based on both functionality and aesthetics.'
      ]
    },
    {
      id: 'inventory-procurement',
      title: 'Custom Inventory & Procurement System',
      description: 'Streamlined inventory and procurement management for design projects.',
      details: [
        'Inventory Management: Track and manage furniture, fixtures, and materials in real-time.',
        'Vendor Management & Integration: Connect with suppliers and manage vendor relationships.',
        'Stock Availability Tracking: Monitor stock levels and receive alerts for low inventory.'
      ]
    },
    {
      id: 'customizable-design-platforms',
      title: 'Customizable Design Platforms',
      description: 'Flexible design tools tailored to specific project needs.',
      details: [
        'Interactive Design Tools: Intuitive interface for creating and modifying designs.',
        'Real-Time Collaboration: Work simultaneously with team members and clients.',
        'Personalization Options: Customize the platform to match specific design requirements.'
      ]
    },
    {
      id: 'furniture-customization',
      title: 'Furniture and Fixture Customization',
      description: 'Advanced tools for custom furniture and fixture design.',
      details: [
        'Interactive Furniture Design: Clients can customize furniture pieces, including size, materials, and finishes, directly within the platform.',
        'Catalog Integration: Allows businesses to integrate furniture supplier catalogs, enabling clients to select, customize, and visualize items in real-time.',
        '3D Rendered Product Views: Clients can view custom-designed furniture and fixtures in 3D within the context of their interior layout.'
      ]
    },
    {
      id: 'client-presentation',
      title: 'Client Presentation Tools',
      description: 'Professional tools for presenting design concepts to clients.',
      details: [
        'Interactive Presentations: Create immersive, interactive presentations with 3D walkthroughs and virtual reality support.',
        'Mood Boards: Build digital mood boards to communicate design concepts and material selections.',
        'Client Feedback Integration: Collect and manage client feedback directly within the presentation interface.'
      ]
    },
    {
      id: 'budget-estimation',
      title: 'Budget & Cost Estimation Management',
      description: 'Comprehensive tools for managing project budgets and costs.',
      details: [
        'Automated Cost Estimation: Generate accurate cost estimates based on material selections and project specifications.',
        'Budget Tracking: Monitor project expenses in real-time with visual budget dashboards.',
        'Cost Analysis: Analyze different design options based on cost implications and client budgets.'
      ]
    },
    {
      id: 'payment-collection',
      title: 'Payment Collection Management Solution',
      description: 'Streamlined payment processing for design services.',
      details: [
        'Secure Payment Gateway: Integrated payment processing with multiple payment method options.',
        'Invoice Generation: Automatically generate and send professional invoices to clients.',
        'Payment Tracking: Monitor payment status and send automated payment reminders.'
      ]
    },
    {
      id: 'mobile-compatibility',
      title: 'Mobile Compatibility',
      description: 'Access design projects on-the-go with full mobile support.',
      details: [
        'Responsive Design: Full functionality across all mobile devices and screen sizes.',
        'Mobile App: Native mobile applications for iOS and Android platforms.',
        'Offline Access: View and edit projects even without an internet connection.'
      ]
    }
  ];

  const adminFeatures = [
    {
      icon: LayoutDashboard,
      title: 'Project Management',
      description: 'Manage multiple design projects with task assignments, timelines, and progress tracking.'
    },
    {
      icon: MonitorPlay,
      title: 'Design Visualization',
      description: 'Real-time 3D visualization of interior spaces with photorealistic rendering capabilities.'
    },
    {
      icon: Users,
      title: 'Client Collaboration',
      description: 'Share designs and receive feedback directly through the platform with version control.'
    },
    {
      icon: Package,
      title: 'Resource Management',
      description: 'Track materials, furniture, and resources across all projects with inventory management.'
    }
  ];

  const processSteps = [
    { number: '1', title: 'Concept Development', description: 'Understanding client requirements and creating initial design concepts.' },
    { number: '2', title: 'Space Planning', description: 'Creating detailed 2D/3D layouts and space utilization plans.' },
    { number: '3', title: 'Material Selection', description: 'Choosing appropriate materials, finishes, and furnishings.' },
    { number: '4', title: 'Final Presentation', description: 'Delivering photorealistic renderings and walkthroughs.' }
  ];

  const faqs = [
    {
      question: "How do I get started with using the interior design system?",
      answer: "To get started with the interior design system, explore the interface and navigation. Review the provided lessons and guidelines to understand key features like space planning tools and project management. Try designing your first project and reach out to customer support or consult the documentation if you need assistance."
    },
    {
      question: "How does the system handle collaboration with clients, contractors, and team members?",
      answer: "Clients can use communication options like messages and comments to provide input and discuss design ideas on the platform. Project management capabilities include work assignment, deadline setting, and progress tracking. File sharing tools enable the secure exchange of design files and documentation with clients."
    },
    {
      question: "Can I access the system from mobile devices for on-the-go design tasks?",
      answer: "The interior design system is mobile-friendly, enabling business owners and clients to access the platform on smartphones or tablets. Users can manage space planning, project tasks, communication, and file sharing, ensuring design continuity and efficiency while on the go."
    },
    {
      question: "How secure is the system in terms of protecting sensitive client data and project information?",
      answer: "Security in interior design systems is essential to protect client data and project details. These systems include robust security measures such as encryption for data transfer, secure authentication for user identity verification, and access control to prevent unauthorized access to sensitive information, ensuring data confidentiality, integrity, and availability."
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
                Professional Interior Design App Development Solutions
              </h1>
              <p className="text-lg text-gray-300 leading-relaxed">
                Explore the functionality of our state-of-the-art interior design system, or if you want to add some personalized features for your interior design system, don't worry, we'll do it for you.
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
              Key Features In Our Interior Design App Development
            </h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              Explore the functionality of our state-of-the-art interior design system, or if you want to add some personalized features for your interior design system, don't worry, we'll do it for you.
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
              Our Interior Design Process
            </h2>
            <p className="text-lg text-gray-600">
              Witness our step by step process in making a complaint management system process.
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
                    Lead The Future Of Complaint Management With Ascentia Labs
                  </h2>
                  <p className="text-xl text-gray-300 mb-8">
                    Here's Why You Can't Afford to Miss Us Out!
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
                      Ready to Transform Your Business?
                    </h3>
                    <p className="text-blue-100 mb-6">
                      Join hundreds of satisfied clients who trust Ascentia Labs for their complaint management solutions.
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
                Get answers to common questions about our Interior Design System
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

export default InteriorArchitecture;