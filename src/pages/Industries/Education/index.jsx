import { useState } from 'react';
import { GraduationCap, Users, ChevronDown, ChevronUp, Shield, UserCheck, BookOpen, Calendar } from 'lucide-react';

const EducationPage = () => {
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
      id: 'digitized-admission-process',
      title: 'Digitized Admission Process',
      description: 'Streamlined digital admission management system.',
      details: [
        'Streamline the academic admission process with our platform, from initial inquiry and appointment booking to final registration.',
        'Admission staff can easily manage student documents and track applications, while students benefit from secure online payment options for fees like prospectus, application, and admission.',
        'Optimize efficiency and simplify your admissions process with our user-friendly system.'
      ]
    },  
  {
      id: 'student-academic-portfolio',
      title: 'Student Academic Portfolio Management',
      description: 'Comprehensive student record and portfolio tracking.',
      details: [
        'Maintain detailed student academic portfolios with comprehensive record keeping and progress tracking.',
        'Track student performance, assignments, grades, and academic milestones throughout their educational journey.',
        'Generate detailed academic reports and transcripts with automated calculation of GPAs and academic standings.',
        'Provide students and parents with real-time access to academic progress and performance analytics.'
      ]
    },
    {
      id: 'dynamic-fee-heads-tracking',
      title: 'Dynamic Fee Heads & Fee Tracking Module',
      description: 'Advanced fee management and tracking system.',
      details: [
        'With fee management admin can manage student finances, create dynamic fee heads, process payments, track pending fees, and generate detailed reports.',
        'The automated invoice generation feature provides fee statements, while payment tracking monitors partial payments, late fees, and many more.',
        'Streamline financial operations with comprehensive fee management tools and automated billing processes.'
      ]
    },
    {
      id: 'student-tracking-module',
      title: 'Student Tracking Module',
      description: 'Real-time student monitoring and attendance system.',
      details: [
        'Monitor student attendance, behavior, and academic progress with real-time tracking capabilities.',
        'Track student location within campus premises for safety and security purposes.',
        'Generate automated alerts for parents and administrators regarding student activities and attendance.',
        'Maintain comprehensive student activity logs and behavioral assessment records.'
      ]
    },
    {
      id: 'bus-management-module',
      title: 'Bus Management Module',
      description: 'Complete transportation management system.',
      details: [
        'Manage school transportation with route optimization, driver assignment, and vehicle maintenance tracking.',
        'Real-time GPS tracking of school buses with live location updates for parents and administrators.',
        'Automated pickup and drop-off notifications with estimated arrival times for enhanced safety.',
        'Comprehensive transportation reporting including fuel consumption, maintenance schedules, and route efficiency.'
      ]
    },
    {
      id: 'subjects-curriculum-development',
      title: 'Subjects & Curriculum Development',
      description: 'Comprehensive curriculum planning and management.',
      details: [
        'Design and manage comprehensive curriculum structures with subject-wise planning and resource allocation.',
        'Create detailed lesson plans, learning objectives, and assessment criteria for each subject and grade level.',
        'Track curriculum implementation progress and adapt teaching methodologies based on student performance data.',
        'Integrate multimedia resources and digital content to enhance learning experiences and engagement.'
      ]
    },  
  {
      id: 'digital-library-management',
      title: 'Digital Library Management',
      description: 'Modern digital library and resource management system.',
      details: [
        'Our School CRM\'s digital library management module streamlines the use of educational resources with features like book cataloging, book distribution, and inventory management.',
        'Students and teachers can easily search for and borrow books and e-learning materials. Librarians can maintain up-to-date inventory records, track borrowing patterns, and generate resource usage reports, supporting efficient library management.',
        'Integrate digital resources with physical inventory for comprehensive resource management and accessibility.'
      ]
    },
    {
      id: 'examination-management',
      title: 'Examination Management',
      description: 'Complete examination and assessment management system.',
      details: [
        'Comprehensive examination management with automated scheduling, hall allocation, and invigilator assignment.',
        'Digital answer sheet evaluation with AI-powered grading assistance and plagiarism detection.',
        'Automated result generation with grade calculation, rank assignment, and performance analytics.',
        'Secure online examination platform with proctoring capabilities and anti-cheating measures.'
      ]
    },
    {
      id: 'staff-management-module',
      title: 'Staff Management Module',
      description: 'Complete human resource management for educational institutions.',
      details: [
        'Comprehensive staff management including recruitment, onboarding, performance evaluation, and professional development tracking.',
        'Automated payroll processing with salary calculations, deductions, and tax management for all staff categories.',
        'Staff scheduling and workload management with class assignments, duty rosters, and substitute teacher coordination.',
        'Professional development tracking with certification management, training records, and career progression planning.'
      ]
    },
    {
      id: 'human-resource-management',
      title: 'Human Resource Management',
      description: 'Advanced HR solutions for educational institutions.',
      details: [
        'Complete HR lifecycle management from recruitment to retirement with comprehensive employee record keeping.',
        'Performance management system with goal setting, regular evaluations, and professional development planning.',
        'Leave management with automated approval workflows, balance tracking, and substitute arrangement coordination.',
        'Compliance management ensuring adherence to educational regulations and employment laws.'
      ]
    },
    {
      id: 'integrated-parent-teacher-student-app',
      title: 'Integrated Parent, Teacher & Student Mobile App',
      description: 'Unified mobile platform for all stakeholders.',
      details: [
        'Integrated mobile application connecting parents, teachers, and students with real-time communication and updates.',
        'Parents can track student progress, communicate with teachers, and receive instant notifications about school activities.',
        'Teachers can update grades, share assignments, and communicate with parents through secure messaging systems.',
        'Students can access learning materials, submit assignments, and participate in collaborative learning activities.'
      ]
    },   
 {
      id: 'integrated-media-app-module',
      title: 'Integrated Media App Module',
      description: 'Multimedia content management and delivery system.',
      details: [
        'Comprehensive media management system for educational content including videos, audio, presentations, and interactive materials.',
        'Live streaming capabilities for virtual classes, webinars, and school events with recording and playback features.',
        'Interactive multimedia content creation tools for teachers to develop engaging educational materials.',
        'Content library management with categorization, search functionality, and access control for different user roles.'
      ]
    },
    {
      id: 'communication-module',
      title: 'Communication Module',
      description: 'Advanced communication and notification system.',
      details: [
        'Communication module allows administrators to send announcements, newsletters, and important updates through the notice board to specific classes, batches, or individual students.',
        'Teachers can communicate lesson plans, assignments, and classroom updates to students and parents.',
        'Additionally, the module supports two-way communication, including WhatsApp integration and chat features, enabling real-time interaction between teachers and parents to address academic concerns and foster the professional development of students.'
      ]
    }
  ];

  const adminFeatures = [
    {
      icon: GraduationCap,
      title: 'Branch Management',
      description: 'Efficiently manage multiple school branches with access to student and teacher data. Performance analysis enables informed decision-making.'
    },
    {
      icon: Users,
      title: 'Fee Management',
      description: 'Manage student finances, create dynamic fee heads, process payments, and track pending fees with automated invoice generation.'
    },
    {
      icon: Shield,
      title: 'Role Based Access',
      description: 'Manage staff permissions and ensure data security by restricting module access to specific departments for improved efficiency.'
    },
    {
      icon: BookOpen,
      title: 'Database Management',
      description: 'Manage student inquiries, teacher records, and attendance. Create custom reports for data-driven insights and optimization.'
    }
  ];

  const processSteps = [
    { 
      number: '1', 
      title: 'Requirements Analysis', 
      description: 'Our team conducts comprehensive analysis of your educational institution needs, identifying key challenges, academic requirements, and opportunities for digital transformation in school management.' 
    },
    { 
      number: '2', 
      title: 'Custom Solution Design', 
      description: 'We design a tailored school management platform that aligns with your educational model, incorporating advanced features like AI-powered learning analytics, virtual classrooms, and automated administrative workflows.' 
    },
    { 
      number: '3', 
      title: 'Development & Integration', 
      description: 'Our experts develop and deploy the solution with seamless integration to existing systems, learning management platforms, and third-party educational tools while ensuring minimal disruption to your operations.' 
    },
    { 
      number: '4', 
      title: 'Training & Support', 
      description: 'We provide comprehensive training for your staff and ongoing support, continuously monitoring system performance and implementing optimizations to maximize efficiency and educational outcomes.' 
    }
  ]; 
 const faqs = [
    {
      question: "Why there is a need to have a School CRM system?",
      answer: "A School CRM system is essential for streamlining administrative processes, improving communication between stakeholders, managing student data efficiently, automating fee collection, tracking academic performance, and enhancing overall operational efficiency. It helps educational institutions provide better services while reducing manual workload and improving data accuracy."
    },
    {
      question: "Is a School CRM platform suitable for all types of educational institutions?",
      answer: "Yes, our School CRM platform is designed to be flexible and scalable, making it suitable for various educational institutions including primary schools, secondary schools, colleges, universities, coaching centers, and vocational training institutes. The system can be customized to meet specific requirements of different educational models and institutional sizes."
    },
    {
      question: "Are School CRM platforms secure and compliant with data protection regulations?",
      answer: "Absolutely. Our School CRM platform implements enterprise-grade security measures including data encryption, secure user authentication, role-based access control, regular security updates, and compliance with educational data protection regulations such as FERPA and GDPR to ensure student and staff information remains secure and private."
    },
    {
      question: "Is investing in a School CRM platform a good option?",
      answer: "Yes, investing in a School CRM platform is highly beneficial as it significantly improves operational efficiency, reduces administrative costs, enhances communication, provides valuable insights through analytics, improves student outcomes, and offers long-term ROI through streamlined processes and better resource management."
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
                Simplify Your School Management - Our School CRM Dynamic Admin Panel
              </h1>
              <p className="text-lg text-gray-300 leading-relaxed">
                Our school management system's admin panel streamlines operations, boosts efficiency, and enhances value education for exceptional educational experiences.
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
              Key Features In Your School CRM Portal
            </h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              Empower teachers, engage students & improve your educational institution result with our state-of-the-art School CRM, or if you want to add some features of your own, don't worry, we'll do it for you.
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
              Our School CRM Development Implementation Process
            </h2>
            <p className="text-lg text-gray-600">
              A streamlined approach to deploying your school management solution efficiently and effectively.
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
                    Transform Your Educational Institution with Our Expertise
                  </h2>
                  <p className="text-xl text-gray-300 mb-8">
                    Why Leading Educational Institutions Choose Our School CRM Solutions
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
                      <GraduationCap className="w-16 h-16 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">
                      Ready to Transform Your Educational Institution?
                    </h3>
                    <p className="text-blue-100 mb-6">
                      Join educational leaders who trust our school management solutions to streamline their operations and enhance learning outcomes.
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
                Find answers to common questions about our school management solutions
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

export default EducationPage;