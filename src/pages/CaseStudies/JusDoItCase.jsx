import { Link } from 'react-router-dom';
import { Calendar, User, Clock, ArrowLeft, Share2, Building, Users, TrendingUp, Award, CheckCircle, Target, Zap, Globe, CheckSquare, BarChart3 } from 'lucide-react';
import SEO from '../../components/SEO';
import { seoData } from '../../utils/seoData';

const JusDoItCase = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100">
      <SEO {...seoData.jusDoItCase} />
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
              <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium inline-flex items-center">
                <CheckSquare className="w-3 h-3 mr-2" />
                Productivity
              </span>
              <span className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium inline-flex items-center">
                <Award className="w-3 h-3 mr-2" />
                Success Story
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl  mb-6 text-gray-800 leading-tight">
              JusDoIt: Advanced Task Management Solution
            </h1>
            
            <div className="flex flex-wrap items-center text-gray-600 mb-8 gap-6">
              <div className="flex items-center">
                <Building className="w-5 h-5 mr-2" />
                <span>JusDoIt</span>
              </div>
              <div className="flex items-center">
                <Users className="w-5 h-5 mr-2" />
                <span>6 developers</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                <span>5 months</span>
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
                  src="/SoftwareProducts/JusDoIt.png" 
                  alt="JusDoIt Platform"
                  className="w-full h-64 md:h-96 object-contain rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 p-8"
                />
              </div>

             

              {/* Project Overview */}
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl  text-gray-800 mb-4">Project Overview</h2>
                <p className="text-xl text-gray-600 leading-relaxed mb-6">
                  JusDoIt revolutionizes team productivity through an intelligent task management platform that combines project tracking, team collaboration, and performance analytics to help organizations achieve their goals more efficiently.
                </p>

                <h3 className="text-2xl  text-gray-800 mb-4">The Challenge</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Organizations struggled with scattered task management tools, poor team coordination, lack of visibility into project progress, and inefficient workflows. Teams needed a unified solution that could streamline task management while providing insights into productivity patterns.
                </p>

                <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8 rounded-r-lg">
                  <h4 className="text-lg  text-blue-800 mb-4">Key Challenges Addressed:</h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-2 mt-0.5 text-blue-600 flex-shrink-0" />
                      <span className="text-blue-700 text-sm">Fragmented task management across multiple tools</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-2 mt-0.5 text-blue-600 flex-shrink-0" />
                      <span className="text-blue-700 text-sm">Poor team collaboration and communication</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-2 mt-0.5 text-blue-600 flex-shrink-0" />
                      <span className="text-blue-700 text-sm">Lack of project visibility and progress tracking</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-2 mt-0.5 text-blue-600 flex-shrink-0" />
                      <span className="text-blue-700 text-sm">Inefficient workflow management and automation</span>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl  text-gray-800 mb-4">Our Solution</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  We developed a comprehensive task management platform with intelligent project tracking, real-time collaboration tools, automated workflows, and advanced analytics. The solution provides teams with everything they need to stay organized and productive.
                </p>

                {/* Technology Stack */}
                <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-6 rounded-xl my-8">
                  <h4 className="text-xl  text-gray-800 mb-4">Technology Stack</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className=" text-gray-700 mb-2">Frontend</h5>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Vue.js</span>
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Vuetify</span>
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">TypeScript</span>
                      </div>
                    </div>
                    <div>
                      <h5 className=" text-gray-700 mb-2">Backend</h5>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Express.js</span>
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Node.js</span>
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">MongoDB</span>
                      </div>
                    </div>
                    <div>
                      <h5 className=" text-gray-700 mb-2">Real-time</h5>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Socket.io</span>
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">WebRTC</span>
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Push Notifications</span>
                      </div>
                    </div>
                    <div>
                      <h5 className=" text-gray-700 mb-2">Infrastructure</h5>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">AWS</span>
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Docker</span>
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Redis</span>
                      </div>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl  text-gray-800 mb-4">Key Features Delivered</h3>
                
                <div className="grid md:grid-cols-2 gap-6 my-8">
                  <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
                    <CheckSquare className="w-8 h-8 text-blue-600 mb-3" />
                    <h4 className="text-lg  text-gray-800 mb-2">Smart Task Management</h4>
                    <p className="text-gray-600 text-sm">Intelligent task creation, assignment, and tracking with automated prioritization.</p>
                  </div>
                  <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
                    <Users className="w-8 h-8 text-blue-600 mb-3" />
                    <h4 className="text-lg  text-gray-800 mb-2">Team Collaboration</h4>
                    <p className="text-gray-600 text-sm">Real-time chat, file sharing, and collaborative workspaces for seamless teamwork.</p>
                  </div>
                  <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
                    <BarChart3 className="w-8 h-8 text-blue-600 mb-3" />
                    <h4 className="text-lg  text-gray-800 mb-2">Analytics Dashboard</h4>
                    <p className="text-gray-600 text-sm">Comprehensive productivity insights and performance tracking for teams and individuals.</p>
                  </div>
                  <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
                    <Zap className="w-8 h-8 text-blue-600 mb-3" />
                    <h4 className="text-lg  text-gray-800 mb-2">Workflow Automation</h4>
                    <p className="text-gray-600 text-sm">Automated task routing, notifications, and status updates to streamline processes.</p>
                  </div>
                </div>

                <h3 className="text-2xl  text-gray-800 mb-4">Results & Impact</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  JusDoIt has transformed how teams work together, delivering significant productivity improvements and helping organizations complete projects faster while maintaining high quality standards.
                </p>

                <div className="bg-gradient-to-r from-blue-600 to-black text-white p-8 rounded-xl my-8">
                  <h4 className="text-2xl  mb-6">Project Outcomes</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <div className="text-4xl  text-blue-200 mb-2">200%</div>
                      <div className="text-lg  mb-1">Productivity Increase</div>
                      <div className="text-blue-100 text-sm">Enhanced team efficiency and output</div>
                    </div>
                    <div>
                      <div className="text-4xl  text-blue-200 mb-2">500+</div>
                      <div className="text-lg  mb-1">Teams Onboarded</div>
                      <div className="text-blue-100 text-sm">Organizations using the platform</div>
                    </div>
                    <div>
                      <div className="text-4xl  text-blue-200 mb-2">1M+</div>
                      <div className="text-lg  mb-1">Tasks Completed</div>
                      <div className="text-blue-100 text-sm">Successfully managed and finished tasks</div>
                    </div>
                    <div>
                      <div className="text-4xl  text-blue-200 mb-2">40%</div>
                      <div className="text-lg  mb-1">Time Savings</div>
                      <div className="text-blue-100 text-sm">Reduced project completion time</div>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl  text-gray-800 mb-4">Client Testimonial</h3>
                <div className="bg-gray-50 border-l-4 border-blue-600 p-6 rounded-r-lg italic">
                  <p className="text-gray-700 text-lg leading-relaxed mb-4">
                    "JusDoIt has been a game-changer for our organization. We've seen a 200% increase in team productivity and our project completion rates have improved dramatically. The platform's intuitive design and powerful features have made task management effortless for our teams."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white  mr-4">
                      JD
                    </div>
                    <div>
                      <div className=" text-gray-800">JusDoIt Team</div>
                      <div className="text-gray-600 text-sm">Productivity Software Company</div>
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
            <Link to="/case-study-kinderconnect-kindergarten-management" className="group">
              <article className="bg-gradient-to-br from-slate-100 to-blue-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <img 
                  src="/SoftwareProducts/Frame 1000002695.png" 
                  alt="KinderConnect"
                  className="w-full h-48 object-contain bg-white p-4"
                />
                <div className="p-6">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">Education</span>
                  <h3 className="text-xl  text-gray-800 mt-4 mb-2 group-hover:text-blue-600 transition-colors">
                    KinderConnect: Kindergarten Management
                  </h3>
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <Building className="w-4 h-4 mr-1" />
                    <span className="mr-4">KinderConnect</span>
                    <Users className="w-4 h-4 mr-1" />
                    <span>8 developers</span>
                  </div>
                  <p className="text-blue-600 ">View Case Study →</p>
                </div>
              </article>
            </Link>

            <Link to="/case-study-insurancesafe-digital-platform" className="group">
              <article className="bg-gradient-to-br from-slate-100 to-blue-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <img 
                  src="/SoftwareProducts/Insurance Safe.png" 
                  alt="InsuranceSafe"
                  className="w-full h-48 object-contain bg-white p-4"
                />
                <div className="p-6">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">Insurance</span>
                  <h3 className="text-xl  text-gray-800 mt-4 mb-2 group-hover:text-blue-600 transition-colors">
                    InsuranceSafe: Digital Insurance Platform
                  </h3>
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <Building className="w-4 h-4 mr-1" />
                    <span className="mr-4">InsuranceSafe</span>
                    <Users className="w-4 h-4 mr-1" />
                    <span>15 developers</span>
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

export default JusDoItCase;