import { Link } from 'react-router-dom';
import { Calendar, User, Clock, ArrowLeft, Share2, Building, Users, TrendingUp, Award, CheckCircle, Target, Zap, Globe, GraduationCap, Heart } from 'lucide-react';
import SEO from '../../components/SEO';
import { seoData } from '../../utils/seoData';

const KinderConnectCase = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100">
      <SEO {...seoData.kinderConnectCase} />
      {/* Hero Section */}
      <section className="relative pt-32 md:pt-40 pb-12 lg:pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-40 left-20 w-24 h-24 bg-blue-400/15 rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <Link 
              to="/case-studies" 
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Case Studies
            </Link>
            
            <div className="mb-6 flex flex-wrap gap-3">
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-medium inline-flex items-center">
                <GraduationCap className="w-3 h-3 mr-2" />
                Education
              </span>
              <span className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium inline-flex items-center">
                <Award className="w-3 h-3 mr-2" />
                Success Story
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl  mb-6 text-gray-800 leading-tight">
              KinderConnect: Comprehensive Kindergarten Management System
            </h1>
            
            <div className="flex flex-wrap items-center text-gray-600 mb-8 gap-6">
              <div className="flex items-center">
                <Building className="w-5 h-5 mr-2" />
                <span>KinderConnect</span>
              </div>
              <div className="flex items-center">
                <Users className="w-5 h-5 mr-2" />
                <span>8 developers</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                <span>6 months</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Content */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <article className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
              {/* Featured Image */}
              <div className="mb-8">
                <img 
                  src="/SoftwareProducts/Frame 1000002695.png" 
                  alt="KinderConnect Platform"
                  className="w-full h-64 md:h-96 object-contain rounded-xl"
                />
              </div>

            

              {/* Project Overview */}
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl  text-gray-800 mb-4">Project Overview</h2>
                <p className="text-xl text-gray-600 leading-relaxed mb-6">
                  KinderConnect revolutionizes kindergarten management by providing a comprehensive digital solution that streamlines administrative tasks, enhances parent-teacher communication, and improves overall educational outcomes for young learners. Download <a href="https://apps.apple.com/us/app/kinderconnect-teacher/id1469867835" target="_blank" rel="noopener noreferrer" className="text-amber-500 hover:text-orange-600 font-semibold underline transition-colors">KinderConnect App</a> now.
                </p>

                <h3 className="text-2xl  text-gray-800 mb-4">The Challenge</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Traditional kindergarten management relied heavily on paper-based systems, manual attendance tracking, and fragmented communication channels. Parents struggled to stay informed about their child's progress, while teachers spent excessive time on administrative tasks rather than focusing on education.
                </p>

                <div className="bg-amber-50 border-l-4 border-amber-500 p-6 my-8 rounded-r-lg">
                  <h4 className="text-lg  text-amber-800 mb-4">Key Challenges Addressed:</h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-2 mt-0.5 text-amber-600 flex-shrink-0" />
                      <span className="text-amber-700 text-sm">Manual attendance and record keeping</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-2 mt-0.5 text-amber-600 flex-shrink-0" />
                      <span className="text-amber-700 text-sm">Limited parent-teacher communication</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-2 mt-0.5 text-amber-600 flex-shrink-0" />
                      <span className="text-amber-700 text-sm">Inefficient administrative processes</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-2 mt-0.5 text-amber-600 flex-shrink-0" />
                      <span className="text-amber-700 text-sm">Lack of real-time progress tracking</span>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl  text-gray-800 mb-4">Our Solution</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  We developed a comprehensive kindergarten management system that digitizes all aspects of early childhood education administration. The platform includes student management, parent communication portals, attendance tracking, and progress monitoring tools.
                </p>

                {/* Technology Stack */}
                <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-6 rounded-xl my-8">
                  <h4 className="text-xl  text-gray-800 mb-4">Technology Stack</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className=" text-gray-700 mb-2">Mobile App</h5>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">React Native</span>
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">TypeScript</span>
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Expo</span>
                      </div>
                    </div>
                    <div>
                      <h5 className=" text-gray-700 mb-2">Backend</h5>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Node.js</span>
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Express</span>
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">PostgreSQL</span>
                      </div>
                    </div>
                    <div>
                      <h5 className=" text-gray-700 mb-2">Real-time</h5>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Firebase</span>
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Push Notifications</span>
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Socket.io</span>
                      </div>
                    </div>
                    <div>
                      <h5 className=" text-gray-700 mb-2">Security</h5>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">JWT Auth</span>
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">COPPA Compliant</span>
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Data Encryption</span>
                      </div>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl  text-gray-800 mb-4">Key Features Delivered</h3>
                
                <div className="grid md:grid-cols-2 gap-6 my-8">
                  <div className="bg-white border border-amber-200 p-6 rounded-xl shadow-sm">
                    <Users className="w-8 h-8 text-amber-600 mb-3" />
                    <h4 className="text-lg  text-gray-800 mb-2">Student Management</h4>
                    <p className="text-gray-600 text-sm">Comprehensive student profiles with attendance, health records, and progress tracking.</p>
                  </div>
                  <div className="bg-white border border-amber-200 p-6 rounded-xl shadow-sm">
                    <Globe className="w-8 h-8 text-amber-600 mb-3" />
                    <h4 className="text-lg  text-gray-800 mb-2">Parent Portal</h4>
                    <p className="text-gray-600 text-sm">Real-time updates, photo sharing, and direct communication with teachers.</p>
                  </div>
                  <div className="bg-white border border-amber-200 p-6 rounded-xl shadow-sm">
                    <Target className="w-8 h-8 text-amber-600 mb-3" />
                    <h4 className="text-lg  text-gray-800 mb-2">Attendance Tracking</h4>
                    <p className="text-gray-600 text-sm">Automated attendance with QR codes and instant parent notifications.</p>
                  </div>
                  <div className="bg-white border border-amber-200 p-6 rounded-xl shadow-sm">
                    <TrendingUp className="w-8 h-8 text-amber-600 mb-3" />
                    <h4 className="text-lg  text-gray-800 mb-2">Progress Reports</h4>
                    <p className="text-gray-600 text-sm">Digital progress tracking with milestone achievements and developmental assessments.</p>
                  </div>
                </div>

                <h3 className="text-2xl  text-gray-800 mb-4">Results & Impact</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  KinderConnect has transformed kindergarten operations across 120+ institutions, significantly improving administrative efficiency and parent satisfaction while enhancing the overall educational experience for children.
                </p>

                <div className="bg-gradient-to-r from-blue-600 to-black text-white p-8 rounded-xl my-8">
                  <h4 className="text-2xl  mb-6">Project Outcomes</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <div className="text-4xl  text-blue-200 mb-2">120+</div>
                      <div className="text-lg  mb-1">Institutions Served</div>
                      <div className="text-blue-100 text-sm">Kindergartens using the platform</div>
                    </div>
                    <div>
                      <div className="text-4xl  text-blue-200 mb-2">180%</div>
                      <div className="text-lg  mb-1">Efficiency Improvement</div>
                      <div className="text-blue-100 text-sm">Reduced administrative workload</div>
                    </div>
                    <div>
                      <div className="text-4xl  text-blue-200 mb-2">95%</div>
                      <div className="text-lg  mb-1">Parent Satisfaction</div>
                      <div className="text-blue-100 text-sm">Highly satisfied with communication</div>
                    </div>
                    <div>
                      <div className="text-4xl  text-blue-200 mb-2">5K+</div>
                      <div className="text-lg  mb-1">Children Benefited</div>
                      <div className="text-blue-100 text-sm">Students using the platform</div>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl  text-gray-800 mb-4">Client Testimonial</h3>
                <div className="bg-gray-50 border-l-4 border-blue-600 p-6 rounded-r-lg italic">
                  <p className="text-gray-700 text-lg leading-relaxed mb-4">
                    "KinderConnect has completely transformed how we manage our kindergarten. The platform has streamlined our operations, improved parent communication, and allowed our teachers to focus more on what they do best - educating children. The response from parents has been overwhelmingly positive."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white  mr-4">
                      KC
                    </div>
                    <div>
                      <div className=" text-gray-800">
                        <a href="https://apps.apple.com/us/app/kinderconnect-teacher/id1469867835" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
                          KinderConnect Team
                        </a>
                      </div>
                      <div className="text-gray-600 text-sm">Education Technology Company</div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <Link 
                    to="/case-studies" 
                    className="inline-flex items-center text-blue-600 hover:text-blue-700  transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Return To Case Studies
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Other Case Studies Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl  text-gray-800 mb-4">Other Success Stories</h2>
            <p className="text-gray-600 text-lg">Explore more of our successful projects</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <Link to="/case-study-routemaestro-ai-travel-platform" className="group">
              <article className="bg-gradient-to-br from-slate-100 to-blue-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <img 
                  src="/SoftwareProducts/Route Maestro Logo.png" 
                  alt="RouteMaestro"
                  className="w-full h-48 object-contain bg-white p-4"
                />
                <div className="p-6">
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-sm font-medium">Travel & Tourism</span>
                  <h3 className="text-xl  text-gray-800 mt-4 mb-2 group-hover:text-blue-600 transition-colors">
                    RouteMaestro: AI-Powered Travel Planning 
                  </h3>
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <Building className="w-4 h-4 mr-1" />
                    <span className="mr-4">RouteMaestro</span>
                    <Users className="w-4 h-4 mr-1" />
                    <span>12 developers</span>
                  </div>
                  <p className="text-blue-600 ">View Case Study →</p>
                </div>
              </article>
            </Link>

            <Link to="/case-study-justdoit" className="group">
              <article className="bg-gradient-to-br from-slate-100 to-blue-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <img 
                  src="/SoftwareProducts/JusDoIt.png" 
                  alt="JusDoIt"
                  className="w-full h-48 object-contain bg-white p-4"
                />
                <div className="p-6">
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-sm font-medium">Productivity</span>
                  <h3 className="text-xl  text-gray-800 mt-4 mb-2 group-hover:text-blue-600 transition-colors">
                    JusDoIt: Task Management Solution
                  </h3>
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <Building className="w-4 h-4 mr-1" />
                    <span className="mr-4">JusDoIt</span>
                    <Users className="w-4 h-4 mr-1" />
                    <span>6 developers</span>
                  </div>
                  <p className="text-blue-600 ">View Case Study →</p>
                </div>
              </article>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KinderConnectCase;