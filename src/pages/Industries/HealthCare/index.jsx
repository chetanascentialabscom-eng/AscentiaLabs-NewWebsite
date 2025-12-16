import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useConsultation } from '../../../contexts/ConsultationContext';
import { Heart, Activity, FileText, Shield, ChevronDown, ChevronUp } from 'lucide-react';
import SEO from '../../../components/SEO';
import { seoData } from '../../../utils/seoData';

const HealthCarePage = () => {
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
      id: 'patient-management',
      title: 'Patient Management',
      description: 'Comprehensive patient management system for healthcare providers.',
      details: [
        'Our healthcare management system enables healthcare providers to efficiently register patients, capturing essential details and medical information.',
        'It streamlines patient flow, appointment scheduling, and related operations.',
        'Through the integrated Patient Portal, patients can access their medical records, request prescription refills, and explore educational health resources, improving overall care and engagement.'
      ]
    },
    {
      id: 'electronic-medical-record',
      title: 'Electronic Medical Record Management',
      description: 'Advanced electronic medical record management and storage.',
      details: [
        'Secure digital storage of patient medical records with real-time access for authorized healthcare providers.',
        'Comprehensive medical history tracking with automated backup and recovery systems.',
        'Integration with diagnostic equipment and laboratory systems for seamless data collection.',
        'HIPAA-compliant security measures ensuring patient data privacy and protection.'
      ]
    },
    {
      id: 'remote-consultation-management',
      title: 'Remote Consultation Management Integration',
      description: 'Integrated telemedicine and remote consultation platform.',
      details: [
        'Video conferencing capabilities for virtual patient consultations with high-quality audio and video.',
        'Secure messaging system for patient-provider communication with end-to-end encryption.',
        'Digital prescription management with electronic signature and pharmacy integration.',
        'Remote monitoring integration for chronic disease management and follow-up care.'
      ]
    },
    {
      id: 'medical-claim-management',
      title: 'Medical Claim Management',
      description: 'Comprehensive medical billing and insurance claim processing.',
      details: [
        'Automated insurance claim processing with real-time verification and submission.',
        'Integration with major insurance providers for streamlined claim approval processes.',
        'Detailed billing analytics and reporting for financial management and optimization.',
        'Denial management system with automated resubmission and appeal processes.'
      ]
    },
    {
      id: 'patient-portal',
      title: 'Patient Portal',
      description: 'Self-service patient portal for enhanced patient engagement.',
      details: [
        'Online appointment scheduling with real-time availability and automated confirmations.',
        'Access to personal health records, test results, and treatment history.',
        'Prescription refill requests with pharmacy integration and delivery tracking.',
        'Educational resources and health management tools for patient empowerment.'
      ]
    },
    {
      id: 'prescription-management',
      title: 'Prescription Management',
      description: 'Digital prescription management and pharmacy integration.',
      details: [
        'Our mobile app enables healthcare professionals to access patient medical records, appointment scheduling, and real-time communication with both patients and staff.',
        'Features like medication reminders, health tracking, and encrypted messaging help patients manage their health conveniently.',
        'Integrated telemedicine functionality allows patients to virtually consult with healthcare professionals for enhanced care.'
      ]
    },
    {
      id: 'billing-invoicing',
      title: 'Billing & Invoicing',
      description: 'Comprehensive medical billing and invoicing system.',
      details: [
        'Automated billing generation based on services provided and insurance coverage.',
        'Multi-payment gateway integration for secure online payment processing.',
        'Detailed financial reporting and analytics for revenue cycle management.',
        'Insurance verification and pre-authorization management for streamlined operations.'
      ]
    },
    {
      id: 'opd-ipd-management',
      title: 'OPD (Outpatient Department), IPD (In Patient Department) Management',
      description: 'Complete outpatient and inpatient department management.',
      details: [
        'Comprehensive outpatient scheduling and queue management system.',
        'Inpatient bed management with real-time availability and assignment tracking.',
        'Integrated billing for both OPD and IPD services with insurance processing.',
        'Department-wise reporting and analytics for operational efficiency.'
      ]
    },
    {
      id: 'analytics-reporting',
      title: 'Analytics & Reporting',
      description: 'Advanced healthcare analytics and reporting platform.',
      details: [
        'Real-time dashboard with key performance indicators and operational metrics.',
        'Patient outcome analytics and treatment effectiveness reporting.',
        'Financial performance tracking with revenue and cost analysis.',
        'Compliance reporting for regulatory requirements and quality assurance.'
      ]
    },
    {
      id: 'healthcare-mobile-app',
      title: 'Healthcare Mobile App Development',
      description: 'Custom mobile applications for healthcare management.',
      details: [
        'Native iOS and Android applications for patients and healthcare providers.',
        'Offline capability for critical functions and automatic synchronization.',
        'Push notifications for appointments, medication reminders, and health alerts.',
        'Wearable device integration for continuous health monitoring and data collection.'
      ]
    }
  ];

  const adminFeatures = [
    {
      icon: FileText,
      title: 'Medical Billing & Claim Management',
      description: 'Generate and share medical bills with patients. Manage and track insurance claims in real time, ensuring follow-ups on pending or denied claims.'
    },
    {
      icon: Activity,
      title: 'Stats Dashboard',
      description: 'View patient, therapist, sales, and session stats. Share insights with higher management to make informed decisions and track key medical performance.'
    },
    {
      icon: Shield,
      title: 'Role Based Access',
      description: 'Assign specific roles and access rights to medical staff, update personal information and adjust access levels based on hierarchical structure.'
    },
    {
      icon: Heart,
      title: 'System Management',
      description: 'Configure the system, monitor network performance, and ensure smooth functioning of healthcare services with comprehensive tracking capabilities.'
    }
  ];

  const processSteps = [
    { 
      number: '1', 
      title: 'Healthcare Assessment', 
      description: 'Our team conducts a thorough analysis of your healthcare operations to identify workflow inefficiencies, compliance requirements, and opportunities for digital transformation in patient care.' 
    },
    { 
      number: '2', 
      title: 'System Architecture', 
      description: 'We design a customized healthcare management solution that aligns with medical standards, incorporating HIPAA compliance, interoperability, and advanced healthcare technologies.' 
    },
    { 
      number: '3', 
      title: 'Implementation & Integration', 
      description: 'Our experts deploy the healthcare solution with minimal disruption to patient care, ensuring seamless integration with existing medical systems and third-party healthcare platforms.' 
    },
    { 
      number: '4', 
      title: 'Training & Compliance', 
      description: 'We provide comprehensive training for medical staff and ensure ongoing compliance monitoring, continuously optimizing system performance to enhance patient outcomes and operational efficiency.' 
    }
  ];

  const faqs = [
    {
      question: "How can I identify a good healthcare management system?",
      answer: "A good healthcare management system should offer comprehensive patient management, secure electronic health records, HIPAA compliance, interoperability with other medical systems, user-friendly interface, robust reporting capabilities, and reliable technical support. It should also provide scalability to grow with your practice and integrate seamlessly with existing workflows."
    },
    {
      question: "Is customization available in healthcare management systems?",
      answer: "Yes, modern healthcare management systems offer extensive customization options including custom workflows, personalized dashboards, configurable forms, specialty-specific modules, and tailored reporting. The system can be adapted to meet specific medical practice requirements, regulatory compliance needs, and operational preferences."
    },
    {
      question: "How long does it take to implement a healthcare management system?",
      answer: "Implementation timeline varies based on practice size, customization requirements, and data migration complexity. Typically, it ranges from 3-12 months for comprehensive deployments. Factors affecting timeline include system complexity, staff training requirements, data conversion scope, integration needs, and regulatory compliance validation."
    },
    {
      question: "How can I ensure a smooth transition to a new healthcare management system?",
      answer: "Ensure smooth transition through proper planning, comprehensive staff training, phased implementation approach, data backup and migration strategies, parallel system running during transition period, ongoing technical support, and change management processes. Regular communication with stakeholders and adequate testing before full deployment are also crucial for success."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO {...seoData.healthcare} />
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
                Streamline Healthcare Management with Our Comprehensive Solution
              </h1>
              <p className="text-lg text-gray-300 leading-relaxed">
                From managing patient records, and tracking medical inventory to efficient appointment scheduling and performance analysis, our dynamic admin panel provides essential healthcare tools to cater according to your healthcare services.
              </p>
              <button 
                onClick={openConsultation}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
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
              Key Features In Our Healthcare Management System
            </h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              Explore the functionality of our state-of-the-art healthcare management system, or if you want 
              to add some personalized features for your healthcare management system, don't worry, we'll do it for you.
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
              Our Healthcare Management Implementation Process
            </h2>
            <p className="text-lg text-gray-600">
              A streamlined approach to deploying your healthcare management solution efficiently and effectively.
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
                    Transform Your Healthcare Operations with Our Medical Expertise
                  </h2>
                  <p className="text-xl text-gray-300 mb-8">
                    Why Leading Healthcare Providers Choose Our Solutions
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
                      Ready to Modernize Your Healthcare Practice?
                    </h3>
                    <p className="text-blue-100 mb-6">
                      Join healthcare providers who trust our solutions to enhance patient care and streamline medical operations.
                    </p>
                    <button 
                      onClick={openConsultation}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
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
                Find answers to common questions about our healthcare management solutions
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

export default HealthCarePage;