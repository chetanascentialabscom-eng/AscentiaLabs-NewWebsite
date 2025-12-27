import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useConsultation } from '../../../contexts/ConsultationContext';
import { Users, BookOpen, ChevronDown, ChevronUp, Shield, UserCheck } from 'lucide-react';
import SEO from '../../../components/SEO';
import { seoData } from '../../../utils/seoData';

const KindergartenPage = () => {
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
      id: 'student-enrollment-management',
      title: 'Student Enrollment Management',
      description: 'Comprehensive student enrollment and registration system for kindergarten schools.',
      details: [
        'The student enrollment system enables kindergarten schools to manage student registrations, admissions, and enrollment processes.',
        'Quickly upload student details, medical records, emergency contacts, and enrollment documents.',
        'Manage student profiles, track enrollment status, update student information, and receive real-time enrollment notifications.'
      ]
    },
    {
      id: 'teacher-staff-management',
      title: 'Teacher & Staff Management',
      description: 'Advanced teacher and staff tracking and management solutions.',
      details: [
        'Comprehensive staff management with performance tracking and attendance monitoring.',
        'Automated schedule management and classroom assignment for optimal coverage.',
        'Real-time performance analytics and teaching effectiveness reporting for better decision making.',
        'Payroll tracking and automated salary processing for teachers and staff.'
      ]
    },
    {
      id: 'parent-communication',
      title: 'Parent Communication Portal',
      description: 'Complete parent engagement and communication system.',
      details: [
        'Streamlined parent communication with digital messaging and notification system.',
        'Automated progress reports and daily activity updates with photo sharing.',
        'Parent-teacher conference scheduling with priority-based appointment system.',
        'Parent portal for seamless interaction, updates, and school announcements.'
      ]
    },
    {
      id: 'curriculum-management',
      title: 'Curriculum Management System',
      description: 'End-to-end curriculum planning and educational content management.',
      details: [
        'Automated lesson planning with age-appropriate activity suggestions and learning objectives.',
        'Educational milestone tracking with developmental assessment and progress monitoring.',
        'Learning resource management with digital content library and activity planning.',
        'Academic reporting with progress statements and developmental milestone tracking.'
      ]
    },
    {
      id: 'attendance-scheduling',
      title: 'Attendance and Scheduling',
      description: 'Intelligent attendance tracking and daily schedule management system.',
      details: [
        'Digital attendance tracking with real-time check-in/check-out and parent notifications.',
        'Automated attendance reports and absence notifications for parents and administrators.',
        'Daily schedule optimization with activity planning and classroom management.',
        'Pick-up and drop-off management system with authorized person verification.'
      ]
    },
    {
      id: 'health-safety-tracking',
      title: 'Health & Safety Tracking',
      description: 'Advanced health monitoring and safety management system.',
      details: [
        'Students health records management with vaccination tracking and medical history.',
        'Daily health check-ins with symptom monitoring and health alerts for parents.',
        'Medication administration tracking with dosage schedules and parent notifications.',
        'Emergency contact management with quick access during health incidents or emergencies.'
      ]
    },
    {
      id: 'meal-nutrition-planning',
      title: 'Meal & Nutrition Planning',
      description: 'Comprehensive meal planning and nutrition management tools.',
      details: [
        'Interactive meal planning with nutritional guidelines and dietary restriction management.',
        'Allergy management tools with special dietary needs tracking and meal customization.',
        'Meal attendance tracking based on enrollment and daily attendance records.',
        'Nutrition reporting with meal consumption tracking and dietary analysis for parents.'
      ]
    },
    
  ];

  const adminFeatures = [
    {
      icon: Users,
      title: 'Student Management System',
      description: 'Efficiently manage student enrollments, track attendance, update profiles, and monitor developmental progress for comprehensive student care.'
    },
    {
      icon: Shield,
      title: 'Role Based Access',
      description: 'Define and manage roles for teachers, administrators, and parents with customized permissions and secure access levels.'
    },
    {
      icon: UserCheck,
      title: 'Parent Engagement',
      description: 'Manage parent profiles, track communication, and oversee student progress with integrated messaging tools for effective interaction.'
    },
    {
      icon: BookOpen,
      title: 'Academic Management',
      description: 'Generate progress reports and assessments, track curriculum milestones, and send automated updates to parents about their child\'s development.'
    }
  ];

  const processSteps = [
    { 
      number: '1', 
      title: 'Requirements Analysis', 
      description: 'Our team conducts comprehensive analysis of your kindergarten needs, identifying key challenges, educational requirements, and opportunities for digital transformation in early childhood education management.' 
    },
    { 
      number: '2', 
      title: 'Custom Solution Design', 
      description: 'We design a tailored kindergarten management platform that aligns with your educational philosophy, incorporating advanced features like developmental tracking, parent engagement tools, and automated workflows.' 
    },
    { 
      number: '3', 
      title: 'Development & Integration', 
      description: 'Our experts develop and deploy the solution with seamless integration to existing systems, educational platforms, and third-party services while ensuring minimal disruption to your operations.' 
    },
    { 
      number: '4', 
      title: 'Training & Support', 
      description: 'We provide comprehensive training for your staff and ongoing support, continuously monitoring system performance and implementing optimizations to maximize efficiency and educational outcomes.' 
    }
  ];

  const faqs = [
    {
      question: "What are the key benefits of implementing a kindergarten management software?",
      answer: "Kindergarten management software offers numerous benefits including improved efficiency in student management, enhanced parent communication, automated administrative tasks, better child safety tracking, streamlined enrollment processes, and comprehensive analytics for data-driven educational decisions."
    },
    {
      question: "How does kindergarten software improve parent engagement and communication?",
      answer: "The software provides real-time updates on child activities, automated progress reports, photo sharing from daily activities, direct messaging with teachers, event notifications, and a parent portal for accessing all information about their child's development and school activities."
    },
    {
      question: "What features should I look for in a kindergarten management platform?",
      answer: "Essential features include student enrollment management, attendance tracking, parent communication portal, health and safety monitoring, curriculum planning tools, billing and payment processing, staff management, developmental milestone tracking, and robust security measures for child protection."
    },
    {
      question: "Is kindergarten management software secure for handling sensitive child data?",
      answer: "Yes, professional kindergarten software implements enterprise-grade security measures including data encryption, secure access controls, child protection compliance, regular security updates, and adherence to educational data privacy regulations to ensure child information remains secure and protected."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO {...seoData.kindergarten} />
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
                Explore Top Features of Our Custom Kindergarten Management Solutions
              </h1>
              <p className="text-lg text-gray-300 leading-relaxed">
                Discover the functionality of our state-of-the-art kindergarten management system, designed to enhance early childhood education. If you need personalized features for your kindergarten, we'll customize it perfectly for you.
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
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent  mb-3">
              Explore Top Features of Our Custom Kindergarten Management Solutions
            </h2>
            <p className="text-base text-gray-300 max-w-2xl mx-auto">
              Discover comprehensive features designed specifically for early childhood education management, ensuring the best care and learning environment for children.
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
              Our Kindergarten Management Implementation Process
            </h2>
            <p className="text-lg text-gray-300">
              A streamlined approach to deploying your kindergarten management solution efficiently and effectively.
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
                    Transform Your Kindergarten with Our Educational Expertise
                  </h2>
                  <p className="text-xl text-gray-300 mb-8">
                    Why Leading Early Childhood Education Centers Choose Our Solutions
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center space-x-4 group">
                    <div className="bg-blue-600 text-white px-3 py-1 rounded-md  text-sm">
                      01
                    </div>
                    <div>
                      <h3 className="text-xl  group-hover:text-blue-300 transition-colors">
                        Early Childhood Education Expertise
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
                        Child Safety & Security Focus
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
                        Parent Engagement Solutions
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
                        Compliance & Reliability
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
                        Seamless Implementation & Training
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
                        Affordable Educational Solutions
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
                        
                        {/* Icon with black color */}
                        <svg className="w-16 h-16 text-black relative z-10 drop-shadow-lg" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path d="M12 14l9-5-9-5-9 5 9 5z"/>
                          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
                        </svg>
                        
                        {/* Subtle rotating border effect */}
                        <div className="absolute inset-0 rounded-full border-2 border-black/10 animate-spin-slow opacity-60"></div>
                      </div>
                      
                      {/* Outer glow rings with amber theme */}
                      <div className="absolute inset-0 w-32 h-32 rounded-full bg-gradient-to-br from-amber-300/20 via-amber-400/20 to-orange-400/20 animate-ping"></div>
                      <div className="absolute inset-0 w-32 h-32 rounded-full bg-gradient-to-br from-amber-200/15 via-amber-300/15 to-orange-300/15 animate-pulse"></div>
                    </div>
                    <h3 className="text-2xl  mb-4">
                      Ready to Enhance Your Kindergarten Management?
                    </h3>
                    <p className="text-blue-100 mb-6">
                      Join educational leaders who trust our kindergarten management solutions to streamline operations and enhance child development.
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
                Find answers to common questions about our kindergarten management solutions
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

export default KindergartenPage;