import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useConsultation } from '../../../contexts/ConsultationContext';
import { Shield, Monitor, Bell, BarChart3, ChevronDown, ChevronUp } from 'lucide-react';
import SEO from '../../../components/SEO';
import { seoData } from '../../../utils/seoData';

const CustomCRM = () => {
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
      id: 'complaint-submission',
      title: 'Complaint Submission',
      description: 'Multiple Channels for Submission: Customers can easily log complaints through online forms, emails, or the mobile app.',
      details: [
        'Multiple Channels for Submission: Customers can easily log complaints through online forms, emails, or the mobile app.',
        'Guided Complaint Process: Step-by-step prompts help users define their issue clearly, including selecting relevant complaint categories.',
        'Attachment Support: Users can attach files, images, or videos to provide additional context for their complaint.'
      ]
    },
    {
      id: 'complaint-status-tracking',
      title: 'Complaint Status Tracking',
      description: 'Real-Time Tracking: Users can input their complaint reference number to view the status in real-time.',
      details: [
        'Real-Time Tracking: Users can input their complaint reference number to view the status in real-time.',
        'Complaint Lifecycle: The module provides a clear and concise timeline, detailing each stage of the complaint\'s progress.',
        'File a Note for Action: If users feel their complaint hasn\'t progressed, they can file a note, which will be reviewed by the Complaint Handling Team for further action.'
      ]
    },
    {
      id: 'priority-complaint-management',
      title: 'Priority Complaint Management Integration',
      description: 'Priority Assignment Based on Criteria: The complaint-handling team can prioritize complaints based on severity, impact, and urgency.',
      details: [
        'Priority Assignment Based on Criteria: The complaint-handling team can prioritize complaints based on severity, impact, and urgency.',
        'AI-Powered Priority Levels: AI automatically assigns priority levels (High, Medium, or Low) to complaints upon submission, ensuring efficient handling.'
      ]
    },
    {
      id: 'triaging-initiation',
      title: 'Triaging & Initiation',
      description: 'Automatic Prioritization and Categorization: The system automatically categorizes and prioritizes complaints based on predefined criteria.',
      details: [
        'Automatic Prioritization and Categorization: The system automatically categorizes and prioritizes complaints based on predefined criteria.',
        'Direct Assignment to Relevant Department: Complaints are automatically routed to the appropriate business department for prompt resolution.',
        'Complaint Queueing for Review: The system queues complaints for triaging by the relevant complaint coordinator or manager, ensuring efficient follow-up.'
      ]
    },
    {
      id: 'crm-integration',
      title: 'CRM Integration',
      description: 'Centralized Customer Data: Integration consolidates customer information, providing a unified view for more personalized and efficient complaint handling.',
      details: [
        'Centralized Customer Data: Integration consolidates customer information, providing a unified view for more personalized and efficient complaint handling.',
        'Access to Complaint History: The system allows the complaint-handling team to quickly view past interactions and histories, improving accuracy and response speed.',
        'Streamlined Response Process: With CRM integration, the team can address complaints faster and more effectively, ensuring a seamless customer experience.'
      ]
    },
    {
      id: 'mobile-application',
      title: 'Dedicated Mobile Application',
      description: 'Easy Complaint Submission: Users can quickly lodge complaints from their mobile devices, with options for detailed descriptions and categorization.',
      details: [
        'Easy Complaint Submission: Users can quickly lodge complaints from their mobile devices, with options for detailed descriptions and categorization.',
        'Real-Time Notifications: Get instant updates on the progress of complaints, ensuring users are always in the loop.',
        'In-App Messaging: The messaging feature allows direct communication with the complaint-handling team for prompt feedback and issue resolution.'
      ]
    },
    {
      id: 'feedback-mechanism',
      title: 'Feedback Mechanism',
      description: 'Customer Feedback: Users can provide valuable feedback with ratings across different parameters and detailed comments, helping businesses identify areas for improvement.',
      details: [
        'Customer Feedback: Users can provide valuable feedback with ratings across different parameters and detailed comments, helping businesses identify areas for improvement.',
        'Automated Follow-Ups: The feedback mechanism is integrated at each complaint lifecycle stage, ensuring automated follow-ups that keep customers informed and engaged throughout the process.'
      ]
    },
    {
      id: 'reporting-analytics',
      title: 'Reporting & Analytics',
      description: 'Complaint Trends Analysis: Businesses can analyze complaint trends to identify recurring issues and track the effectiveness of their complaint resolution strategies.',
      details: [
        'Complaint Trends Analysis: Businesses can analyze complaint trends to identify recurring issues and track the effectiveness of their complaint resolution strategies.',
        'Real-Time KPI Dashboards: Customizable dashboards provide stakeholders with real-time visibility into key performance indicators, helping drive proactive interventions and ongoing improvements in the complaint handling process.'
      ]
    }
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

  const processSteps = [
    { number: '1', title: 'Planning & Analysis', description: 'Witness our step by step process in making a complaint management system process.' },
    { number: '2', title: 'Design & Architecture', description: 'Creating comprehensive design and system architecture.' },
    { number: '3', title: 'Development & Testing', description: 'Building and testing the complete system.' },
    { number: '4', title: 'Deployment & Maintenance', description: 'Deploying and maintaining the system.' }
  ];

  const faqs = [
    {
      question: "What features should I look for in a complaint management system?",
      answer: "When choosing a complaint management system, key features to consider include multi-channel complaint intake, complaint tracking, ticket management, customizable workflows, analytics, and reporting tools. Ensure it integrates with other systems, is scalable, supports communication between staff and customers, includes a feedback mechanism, and offers a user-friendly interface."
    },
    {
      question: "How can a complaint management system help my business?",
      answer: "A complaint management system helps businesses efficiently handle customer concerns, boosting satisfaction and enhancing brand reputation. By streamlining communication and automating processes, it ensures timely complaint resolution, fostering customer loyalty and positive experiences."
    },
    {
      question: "Can a complaint management system be integrated with other systems?",
      answer: "Yes, many complaint management systems offer integration capabilities with other business systems like CRM software, helpdesk tools, and communication platforms. When integrating, it's important to ensure data consistency throughout the process to maintain accurate and reliable information across all systems."
    },
    {
      question: "Is a complaint management system suitable for my business size or industry?",
      answer: "Yes, complaint management systems are beneficial for businesses of all sizes and industries. Whether you're a small startup or a large enterprise, managing and addressing customer complaints effectively is crucial for maintaining customer satisfaction, loyalty and building your business reputation for well defined business growth."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO {...seoData.customCRM} />
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
                Streamline Complaint Management with Our Comprehensive Admin Panel
              </h1>
              <p className="text-lg text-gray-300 leading-relaxed">
                Elevate, control, streamline operations, and unlock efficiency with our complaint management system admin panel.
              </p>
              <button 
                onClick={openConsultation}
                className="bg-gradient-to-r from-amber-400 to-orange-500 text-black px-6 py-3 rounded-full font-bold transition-all duration-300 transform hover:scale-105 shadow-lg hover:from-amber-500 hover:to-orange-600 hover:shadow-amber-500/50"
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
              Key Features In Our Complaint Management System
            </h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              Unleash your business potential with our dynamic feature of Complaint Management system, or 
              if you want to add some of your own business features, don't worry, we'll do it for you.
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
              Our Stage Wise Complaint Management System Process
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
                    <h3 className="text-2xl font-bold mb-4">
                      Ready to Transform Your Business?
                    </h3>
                    <p className="text-blue-100 mb-6">
                      Join hundreds of satisfied clients who trust Ascentia Labs for their complaint management solutions.
                    </p>
                    <button 
                      onClick={openConsultation}
                      className="bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 hover:from-amber-500 hover:via-orange-500 hover:to-orange-600 text-black border-2 border-black/20 hover:border-black/40 px-8 py-3 rounded-full font-bold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-amber-500/50"
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
      <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-blue-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl bg-gradient-to-r from-blue-600 to-black bg-clip-text text-transparent md:text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-600">
                Get answers to common questions about our complaint management system
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

export default CustomCRM;