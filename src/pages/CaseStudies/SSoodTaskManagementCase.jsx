import { Link } from 'react-router-dom';
import { Calendar, User, Clock, ArrowLeft, Share2, Building, Users, TrendingUp, Award, CheckCircle, Target, Zap, Globe, Layers } from 'lucide-react';
import SEO from '../../components/SEO';

const SSoodTaskManagementCase = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-950 to-black">
      <SEO 
        title="S. Sood & Co. Task Management Case Study | Ascentia Labs"
        description="Advanced task management solution with team collaboration, project tracking, and productivity analytics. Enhanced team productivity by 200%."
        keywords="task management, project tracking, team collaboration, productivity, workflow automation"
      />
      {/* Hero Section */}
      <section className="relative pt-32 md:pt-40 pb-12 lg:pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-32 h-32 bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-40 left-20 w-24 h-24 bg-blue-400/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <Link 
              to="/case-studies" 
              className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Case Studies
            </Link>
            
            <div className="mb-6 flex flex-wrap gap-3">
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-medium inline-flex items-center">
                <Building className="w-3 h-3 mr-2" />
                Productivity
              </span>
              <span className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium inline-flex items-center">
                <Award className="w-3 h-3 mr-2" />
                Success Story
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl  mb-6 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent leading-tight">
              S. Sood & Co. Task Management
            </h1>
            
            <div className="flex flex-wrap items-center text-blue-200/80 mb-8 gap-6">
              <div className="flex items-center">
                <Building className="w-5 h-5 mr-2" />
                <span>S. Sood & Co.</span>
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
            <article className="bg-slate-800/50 backdrop-blur-sm rounded-2xl shadow-lg p-6 md:p-8 border border-blue-400/20">
              {/* Featured Image */}
              <div className="mb-8">
                <img 
                  src="/pics/sood.jpg" 
                  alt="S. Sood & Co."
                  className="w-full h-64 md:h-96 object-cover rounded-xl"
                />
              </div>

              {/* Project Overview */}
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl  text-white mb-4">Project Overview</h2>
                <p className="text-xl text-blue-200/80 leading-relaxed mb-6">
                  Advanced task management solution with team collaboration, project tracking, and productivity analytics. Enhanced team productivity by 200% and reduced project delivery time by 35% while completing over 10,000 tasks efficiently. Visit <a href="https://www.ssoodco.com/" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:text-orange-500 font-semibold underline transition-colors">S. Sood & Co.</a> to learn more.
                </p>

                <h3 className="text-2xl  text-white mb-4">The Challenge</h3>
                <p className="text-blue-100/90 leading-relaxed mb-6">
                  S. Sood & Co. faced challenges with scattered project management, lack of team collaboration tools, missed deadlines, and poor visibility into project progress. The company needed a comprehensive solution to streamline workflows and improve team productivity.
                </p>

                <div className="bg-amber-900/20 border-l-4 border-amber-500 p-6 my-8 rounded-r-lg backdrop-blur-sm">
                  <h4 className="text-lg  text-amber-300 mb-4">Key Challenges Addressed:</h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-2 mt-0.5 text-amber-400 flex-shrink-0" />
                      <span className="text-blue-100 text-sm">Fragmented project management processes</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-2 mt-0.5 text-amber-400 flex-shrink-0" />
                      <span className="text-blue-100 text-sm">Poor team collaboration and communication</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-2 mt-0.5 text-amber-400 flex-shrink-0" />
                      <span className="text-blue-100 text-sm">Lack of real-time project visibility</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-2 mt-0.5 text-amber-400 flex-shrink-0" />
                      <span className="text-blue-100 text-sm">Inefficient resource allocation and tracking</span>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl  text-white mb-4">Our Solution</h3>
                <p className="text-blue-100/90 leading-relaxed mb-6">
                  We developed a comprehensive task management platform with advanced collaboration features, real-time project tracking, automated workflows, and detailed analytics. The solution includes mobile applications, web dashboards, and integration capabilities for seamless workflow management.
                </p>

                {/* Technology Stack */}
                <div className="bg-gradient-to-r from-slate-800/50 to-blue-900/30 p-6 rounded-xl my-8 border border-blue-400/20">
                  <h4 className="text-xl  text-white mb-4">Technology Stack</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className=" text-blue-300 mb-2">Frontend</h5>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-400/30">Vue.js</span>
                        <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-400/30">TypeScript</span>
                        <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-400/30">Vuetify</span>
                      </div>
                    </div>
                    <div>
                      <h5 className=" text-blue-300 mb-2">Backend</h5>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-400/30">Express.js</span>
                        <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-400/30">Node.js</span>
                        <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-400/30">MongoDB</span>
                      </div>
                    </div>
                    <div>
                      <h5 className=" text-blue-300 mb-2">Real-time</h5>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-400/30">Socket.io</span>
                        <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-400/30">WebRTC</span>
                        <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-400/30">Redis</span>
                      </div>
                    </div>
                    <div>
                      <h5 className=" text-blue-300 mb-2">Infrastructure</h5>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-400/30">AWS</span>
                        <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-400/30">Docker</span>
                        <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-400/30">CI/CD</span>
                      </div>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl  text-white mb-4">Key Features Delivered</h3>
                
                <div className="grid md:grid-cols-2 gap-6 my-8">
                  <div className="bg-slate-800/30 border border-amber-400/20 p-6 rounded-xl shadow-sm backdrop-blur-sm">
                    <Layers className="w-8 h-8 text-amber-500 mb-3" />
                    <h4 className="text-lg  text-white mb-2">Project Hierarchy</h4>
                    <p className="text-blue-200/80 text-sm">Multi-level project organization with tasks, subtasks, and milestone tracking.</p>
                  </div>
                  <div className="bg-slate-800/30 border border-amber-400/20 p-6 rounded-xl shadow-sm backdrop-blur-sm">
                    <Users className="w-8 h-8 text-amber-500 mb-3" />
                    <h4 className="text-lg  text-white mb-2">Team Collaboration</h4>
                    <p className="text-blue-200/80 text-sm">Real-time chat, file sharing, and collaborative workspaces for teams.</p>
                  </div>
                  <div className="bg-slate-800/30 border border-amber-400/20 p-6 rounded-xl shadow-sm backdrop-blur-sm">
                    <Target className="w-8 h-8 text-amber-500 mb-3" />
                    <h4 className="text-lg  text-white mb-2">Smart Scheduling</h4>
                    <p className="text-blue-200/80 text-sm">AI-powered task scheduling and resource allocation optimization.</p>
                  </div>
                  <div className="bg-slate-800/30 border border-amber-400/20 p-6 rounded-xl shadow-sm backdrop-blur-sm">
                    <TrendingUp className="w-8 h-8 text-amber-500 mb-3" />
                    <h4 className="text-lg  text-white mb-2">Analytics Dashboard</h4>
                    <p className="text-blue-200/80 text-sm">Comprehensive productivity metrics and performance analytics.</p>
                  </div>
                </div>

                <h3 className="text-2xl  text-white mb-4">Results & Impact</h3>
                <p className="text-blue-100/90 leading-relaxed mb-6">
                  The Task Management Solution transformed S. Sood & Co.'s operations, delivering remarkable improvements in team productivity, project delivery times, and overall organizational efficiency while completing thousands of tasks successfully.
                </p>

                <div className="bg-gradient-to-r from-blue-600 to-slate-900 text-white p-8 rounded-xl my-8 border border-blue-400/30">
                  <h4 className="text-2xl  mb-6">Project Outcomes</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <div className="text-4xl  text-blue-200 mb-2">200%</div>
                      <div className="text-lg  mb-1">Productivity Increase</div>
                      <div className="text-blue-100 text-sm">Dramatic improvement in team efficiency and output</div>
                    </div>
                    <div>
                      <div className="text-4xl  text-blue-200 mb-2">35%</div>
                      <div className="text-lg  mb-1">Faster Delivery</div>
                      <div className="text-blue-100 text-sm">Reduced project delivery time significantly</div>
                    </div>
                    <div>
                      <div className="text-4xl  text-blue-200 mb-2">10K+</div>
                      <div className="text-lg  mb-1">Tasks Completed</div>
                      <div className="text-blue-100 text-sm">Successfully managed and completed tasks</div>
                    </div>
                    <div>
                      <div className="text-4xl  text-blue-200 mb-2">95%</div>
                      <div className="text-lg  mb-1">Team Satisfaction</div>
                      <div className="text-blue-100 text-sm">High user adoption and satisfaction rates</div>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl  text-white mb-4">Client Testimonial</h3>
                <div className="bg-slate-800/30 border-l-4 border-blue-400 p-6 rounded-r-lg italic backdrop-blur-sm">
                  <p className="text-blue-100/90 text-lg leading-relaxed mb-4">
                    "Ascentia Labs delivered an exceptional task management solution that revolutionized our workflow. Team productivity increased by 200%, and we're delivering projects 35% faster than before. The platform's intuitive design and powerful features have made project management effortless. Our team collaboration has never been better, and we've successfully completed over 10,000 tasks with remarkable efficiency."
                  </p>
                  <div className="flex items-center">
                    <img 
                      src="/clients/Avatar.png" 
                      alt="Vinayak Sood"
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <div className=" text-white">Vinayak Sood</div>
                      <div className="text-blue-300 text-sm">Director, S. Sood And Co.</div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-blue-400/30">
                  <Link 
                    to="/case-studies" 
                    className="inline-flex items-center text-blue-400 hover:text-blue-300  transition-colors"
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
      <section className="py-12 ">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl  text-white mb-4">Other Success Stories</h2>
            <p className="text-blue-200/80 text-lg">Explore more of our successful projects</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <Link to="/case-study-pumpkins-kindergarten-management" className="group">
              <article className="bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-blue-400/20">
                <img 
                  src="/partnerships/pumpkins.svg" 
                  alt="Pumpkins Kindergarten"
                  className="w-full h-48 bg-white object-contain  p-4"
                />
                <div className="p-6">
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-sm font-medium">Education</span>
                  <h3 className="text-xl  text-white mt-4 mb-2 group-hover:text-blue-400 transition-colors">
                    Pumpkins Kindergarten Management
                  </h3>
                  <div className="flex items-center text-sm text-blue-300/70 mb-3">
                    <Building className="w-4 h-4 mr-1" />
                    <span className="mr-4">Pumpkins Kindergarten</span>
                    <Users className="w-4 h-4 mr-1" />
                    <span>10 developers</span>
                  </div>
                  <p className="text-blue-400 ">View Case Study →</p>
                </div>
              </article>
            </Link>

            <Link to="/case-study-sunview-enclave-real-estate" className="group">
              <article className="bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-blue-400/20">
                <img 
                  src="/partnerships/sunview-1.png" 
                  alt="Sunview Enclave"
                  className="w-full h-48 object-contain bg-white p-4"
                />
                <div className="p-6">
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-sm font-medium">Real Estate</span>
                  <h3 className="text-xl  text-white mt-4 mb-2 group-hover:text-blue-400 transition-colors">
                    Sunview Enclave Real Estate Management
                  </h3>
                  <div className="flex items-center text-sm text-blue-300/70 mb-3">
                    <Building className="w-4 h-4 mr-1" />
                    <span className="mr-4">Sunview Enclave</span>
                    <Users className="w-4 h-4 mr-1" />
                    <span>12 developers</span>
                  </div>
                  <p className="text-blue-400 ">View Case Study →</p>
                </div>
              </article>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SSoodTaskManagementCase;