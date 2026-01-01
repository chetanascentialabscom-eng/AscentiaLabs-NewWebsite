import { Link } from 'react-router-dom';
import { Calendar, User, Clock, ArrowLeft, Share2, Building, Users, TrendingUp, Award, CheckCircle, Target, Zap, Globe } from 'lucide-react';
import SEO from '../../components/SEO';

const NDMCTicketingCase = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-950 to-black">
      <SEO 
        title="NDMC & MCL Ticketing Platform Case Study | Ascentia Labs"
        description="Comprehensive digital ticketing solution for municipal corporations with real-time booking, payment processing, and administrative management."
        keywords="NDMC, MCL, ticketing platform, government technology, digital transformation"
        noIndex={true}
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
                Government
              </span>
              <span className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium inline-flex items-center">
                <Award className="w-3 h-3 mr-2" />
                Success Story
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl  mb-6 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent leading-tight">
              NDMC & MCL Ticketing Platform
            </h1>
            
            <div className="flex flex-wrap items-center text-blue-200/80 mb-8 gap-6">
              <div className="flex items-center">
                <Building className="w-5 h-5 mr-2" />
                <span>NDMC & MCL</span>
              </div>
              <div className="flex items-center">
                <Users className="w-5 h-5 mr-2" />
                <span>15 developers</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                <span>10 months</span>
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
                  src="/pics/ndmc.jpg" 
                  alt="NDMC & MCL"
                  className="w-full h-64 md:h-96 object-cover rounded-xl"
                />
              </div>

              {/* Project Overview */}
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl  text-white mb-4">Project Overview</h2>
                <p className="text-xl text-blue-200/80 leading-relaxed mb-6">
                  Comprehensive digital ticketing solution for municipal corporations with real-time booking, payment processing, and administrative management. Streamlined operations and reduced processing time by 80% while handling 50,000+ daily tickets. Learn more about <a href="https://www.ndmc.gov.in/" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:text-orange-500 font-semibold underline transition-colors">NDMC & MCL</a>.
                </p>

                <h3 className="text-2xl  text-white mb-4">The Challenge</h3>
                <p className="text-blue-100/90 leading-relaxed mb-6">
                  NDMC and MCL faced significant challenges with their legacy ticketing systems, including long queues, manual processing, payment delays, and lack of real-time tracking. The organizations needed a modern, scalable solution to handle high-volume ticket processing while ensuring transparency and efficiency.
                </p>

                <div className="bg-amber-900/20 border-l-4 border-amber-500 p-6 my-8 rounded-r-lg backdrop-blur-sm">
                  <h4 className="text-lg  text-amber-300 mb-4">Key Challenges Addressed:</h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-2 mt-0.5 text-amber-400 flex-shrink-0" />
                      <span className="text-blue-100 text-sm">Manual ticketing processes causing delays</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-2 mt-0.5 text-amber-400 flex-shrink-0" />
                      <span className="text-blue-100 text-sm">Lack of real-time tracking and reporting</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-2 mt-0.5 text-amber-400 flex-shrink-0" />
                      <span className="text-blue-100 text-sm">Payment processing inefficiencies</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-2 mt-0.5 text-amber-400 flex-shrink-0" />
                      <span className="text-blue-100 text-sm">Administrative overhead and paperwork</span>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl  text-white mb-4">Our Solution</h3>
                <p className="text-blue-100/90 leading-relaxed mb-6">
                  We developed a comprehensive digital ticketing platform with real-time processing capabilities, integrated payment systems, and advanced administrative tools. The solution includes mobile applications, web portals, and backend systems designed to handle high-volume transactions with 99.9% uptime.
                </p>

                {/* Technology Stack */}
                <div className="bg-gradient-to-r from-slate-800/50 to-blue-900/30 p-6 rounded-xl my-8 border border-blue-400/20">
                  <h4 className="text-xl  text-white mb-4">Technology Stack</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className=" text-blue-300 mb-2">Frontend</h5>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-400/30">React</span>
                        <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-400/30">React Native</span>
                        <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-400/30">TypeScript</span>
                      </div>
                    </div>
                    <div>
                      <h5 className=" text-blue-300 mb-2">Backend</h5>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-400/30">Spring Boot</span>
                        <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-400/30">Java</span>
                        <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-400/30">PostgreSQL</span>
                      </div>
                    </div>
                    <div>
                      <h5 className=" text-blue-300 mb-2">Infrastructure</h5>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-400/30">AWS</span>
                        <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-400/30">Redis</span>
                        <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-400/30">Docker</span>
                      </div>
                    </div>
                    <div>
                      <h5 className=" text-blue-300 mb-2">Payment</h5>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-400/30">Payment Gateway</span>
                        <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-400/30">UPI</span>
                        <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-400/30">Digital Wallet</span>
                      </div>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl  text-white mb-4">Key Features Delivered</h3>
                
                <div className="grid md:grid-cols-2 gap-6 my-8">
                  <div className="bg-slate-800/30 border border-amber-400/20 p-6 rounded-xl shadow-sm backdrop-blur-sm">
                    <Zap className="w-8 h-8 text-amber-500 mb-3" />
                    <h4 className="text-lg  text-white mb-2">Real-time Processing</h4>
                    <p className="text-blue-200/80 text-sm">Instant ticket generation and processing with real-time status updates.</p>
                  </div>
                  <div className="bg-slate-800/30 border border-amber-400/20 p-6 rounded-xl shadow-sm backdrop-blur-sm">
                    <Globe className="w-8 h-8 text-amber-500 mb-3" />
                    <h4 className="text-lg  text-white mb-2">Multi-platform Access</h4>
                    <p className="text-blue-200/80 text-sm">Web portal, mobile app, and kiosk integration for maximum accessibility.</p>
                  </div>
                  <div className="bg-slate-800/30 border border-amber-400/20 p-6 rounded-xl shadow-sm backdrop-blur-sm">
                    <Target className="w-8 h-8 text-amber-500 mb-3" />
                    <h4 className="text-lg  text-white mb-2">Payment Integration</h4>
                    <p className="text-blue-200/80 text-sm">Seamless payment processing with multiple payment options and instant receipts.</p>
                  </div>
                  <div className="bg-slate-800/30 border border-amber-400/20 p-6 rounded-xl shadow-sm backdrop-blur-sm">
                    <TrendingUp className="w-8 h-8 text-amber-500 mb-3" />
                    <h4 className="text-lg  text-white mb-2">Analytics Dashboard</h4>
                    <p className="text-blue-200/80 text-sm">Comprehensive reporting and analytics for administrative oversight.</p>
                  </div>
                </div>

                <h3 className="text-2xl  text-white mb-4">Results & Impact</h3>
                <p className="text-blue-100/90 leading-relaxed mb-6">
                  The NDMC & MCL Ticketing Platform delivered exceptional results, transforming the municipal ticketing process and significantly improving citizen experience while reducing operational costs and administrative burden.
                </p>

                <div className="bg-gradient-to-r from-blue-600 to-slate-900 text-white p-8 rounded-xl my-8 border border-blue-400/30">
                  <h4 className="text-2xl  mb-6">Project Outcomes</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <div className="text-4xl  text-blue-200 mb-2">80%</div>
                      <div className="text-lg  mb-1">Processing Time Reduction</div>
                      <div className="text-blue-100 text-sm">Dramatic improvement in ticket processing speed</div>
                    </div>
                    <div>
                      <div className="text-4xl  text-blue-200 mb-2">50K+</div>
                      <div className="text-lg  mb-1">Daily Tickets</div>
                      <div className="text-blue-100 text-sm">High-volume ticket processing capacity</div>
                    </div>
                    <div>
                      <div className="text-4xl  text-blue-200 mb-2">99.9%</div>
                      <div className="text-lg  mb-1">System Uptime</div>
                      <div className="text-blue-100 text-sm">Reliable and consistent service availability</div>
                    </div>
                    <div>
                      <div className="text-4xl  text-blue-200 mb-2">95%</div>
                      <div className="text-lg  mb-1">User Satisfaction</div>
                      <div className="text-blue-100 text-sm">Exceptional citizen experience ratings</div>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl  text-white mb-4">Client Testimonial</h3>
                <div className="bg-slate-800/30 border-l-4 border-blue-400 p-6 rounded-r-lg italic backdrop-blur-sm">
                  <p className="text-blue-100/90 text-lg leading-relaxed mb-4">
                    "Ascentia Labs delivered a world-class ticketing solution that has transformed our operations. The platform handles over 50,000 tickets daily with remarkable efficiency. Citizens can now get their tickets processed in minutes instead of hours, and our administrative overhead has been reduced significantly."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white  mr-4">
                      NM
                    </div>
                    <div>
                      <div className=" text-white">NDMC & MCL Team</div>
                      <div className="text-blue-300 text-sm">Municipal Corporation</div>
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
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl  text-white mb-4">Other Success Stories</h2>
            <p className="text-blue-200/80 text-lg">Explore more of our successful projects</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <Link to="/case-study-airnet-travels-routemaestro" className="group">
              <article className="bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-blue-400/20">
                <img 
                  src="/SoftwareProducts/air.png" 
                  alt="Airnet Travels"
                  className="w-full bg-white h-48 object-contain bg-slate-700/50 p-4"
                />
                <div className="p-6">
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-sm font-medium">Travel & Tourism</span>
                  <h3 className="text-xl  text-white mt-4 mb-2 group-hover:text-blue-400 transition-colors">
                    AI Travel Planning & Booking Tool
                  </h3>
                  <div className="flex items-center text-sm text-blue-300/70 mb-3">
                    <Building className="w-4 h-4 mr-1" />
                    <span className="mr-4">Airnet Travels</span>
                    <Users className="w-4 h-4 mr-1" />
                    <span>12 developers</span>
                  </div>
                  <p className="text-blue-400 ">View Case Study →</p>
                </div>
              </article>
            </Link>

            <Link to="/case-study-insurance-experts-management" className="group">
              <article className="bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-blue-400/20">
                <img 
                  src="/partnerships/logo-1a.jpg" 
                  alt="Insurance Experts"
                  className="w-full h-48 bg-white object-contain bg-slate-700/50 p-4"
                />
                <div className="p-6">
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-sm font-medium">Insurance</span>
                  <h3 className="text-xl  text-white mt-4 mb-2 group-hover:text-blue-400 transition-colors">
                    Insurance Management Platform
                  </h3>
                  <div className="flex items-center text-sm text-blue-300/70 mb-3">
                    <Building className="w-4 h-4 mr-1" />
                    <span className="mr-4">Insurance Experts</span>
                    <Users className="w-4 h-4 mr-1" />
                    <span>18 developers</span>
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

export default NDMCTicketingCase;