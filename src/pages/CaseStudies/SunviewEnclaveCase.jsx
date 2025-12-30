import { Link } from 'react-router-dom';
import { Calendar, User, Clock, ArrowLeft, Share2, Building, Users, TrendingUp, Award, CheckCircle, Target, Zap, Globe, Home } from 'lucide-react';
import SEO from '../../components/SEO';

const SunviewEnclaveCase = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-950 to-black">
      <SEO 
        title="Sunview Enclave Real Estate Management Case Study | Ascentia Labs"
        description="Comprehensive real estate management platform with property listings, customer management, and sales tracking. Increased sales conversion by 150%."
        keywords="real estate management, property listings, sales tracking, customer management, real estate technology"
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
                Real Estate
              </span>
              <span className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium inline-flex items-center">
                <Award className="w-3 h-3 mr-2" />
                Success Story
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl  mb-6 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent leading-tight">
              Sunview Enclave Real Estate Management
            </h1>
            
            <div className="flex flex-wrap items-center text-blue-200/80 mb-8 gap-6">
              <div className="flex items-center">
                <Building className="w-5 h-5 mr-2" />
                <span>Sunview Enclave</span>
              </div>
              <div className="flex items-center">
                <Users className="w-5 h-5 mr-2" />
                <span>12 developers</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                <span>9 months</span>
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
                  src="/partnerships/sunview-1.png" 
                  alt="Sunview Enclave"
                  className="w-full h-64 md:h-96 object-contain rounded-xl bg-white p-8"
                />
              </div>

              {/* Project Overview */}
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl  text-white mb-4">Project Overview</h2>
                <p className="text-xl text-blue-200/80 leading-relaxed mb-6">
                  Comprehensive real estate management platform with property listings, customer management, and sales tracking. Increased sales conversion by 150% and reduced administrative overhead by 60% while managing 500+ properties efficiently.
                </p>

                <h3 className="text-2xl  text-white mb-4">The Challenge</h3>
                <p className="text-blue-100/90 leading-relaxed mb-6">
                  Sunview Enclave struggled with manual property management processes, poor lead tracking, inefficient sales workflows, and lack of customer relationship management. The company needed a comprehensive digital solution to streamline operations and improve sales performance in the competitive real estate market.
                </p>

                <div className="bg-blue-900/30 border-l-4 border-blue-400 p-6 my-8 rounded-r-lg backdrop-blur-sm">
                  <h4 className="text-lg  text-blue-300 mb-4">Key Challenges Addressed:</h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-2 mt-0.5 text-blue-400 flex-shrink-0" />
                      <span className="text-blue-100 text-sm">Manual property listing and management</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-2 mt-0.5 text-blue-400 flex-shrink-0" />
                      <span className="text-blue-100 text-sm">Poor lead tracking and follow-up</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-2 mt-0.5 text-blue-400 flex-shrink-0" />
                      <span className="text-blue-100 text-sm">Inefficient sales process management</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-2 mt-0.5 text-blue-400 flex-shrink-0" />
                      <span className="text-blue-100 text-sm">Lack of customer relationship tools</span>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl  text-white mb-4">Our Solution</h3>
                <p className="text-blue-100/90 leading-relaxed mb-6">
                  We developed a comprehensive real estate management platform with advanced property listing capabilities, CRM integration, automated sales workflows, and customer portal. The solution includes mobile applications, web portals, and integrated payment systems for seamless property transactions.
                </p>

                {/* Technology Stack */}
                <div className="bg-gradient-to-r from-slate-800/50 to-blue-900/30 p-6 rounded-xl my-8 border border-blue-400/20">
                  <h4 className="text-xl  text-white mb-4">Technology Stack</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className=" text-blue-300 mb-2">Frontend</h5>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-400/30">React</span>
                        <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-400/30">Next.js</span>
                        <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-400/30">TypeScript</span>
                      </div>
                    </div>
                    <div>
                      <h5 className=" text-blue-300 mb-2">Backend</h5>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-400/30">Node.js</span>
                        <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-400/30">Express.js</span>
                        <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-400/30">MongoDB</span>
                      </div>
                    </div>
                    <div>
                      <h5 className=" text-blue-300 mb-2">Payment & Maps</h5>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-400/30">Stripe</span>
                        <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-400/30">Google Maps</span>
                        <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-400/30">PayPal</span>
                      </div>
                    </div>
                    <div>
                      <h5 className=" text-blue-300 mb-2">Infrastructure</h5>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-400/30">AWS</span>
                        <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-400/30">CloudFront</span>
                        <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-400/30">S3</span>
                      </div>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl  text-white mb-4">Key Features Delivered</h3>
                
                <div className="grid md:grid-cols-2 gap-6 my-8">
                  <div className="bg-slate-800/30 border border-blue-400/20 p-6 rounded-xl shadow-sm backdrop-blur-sm">
                    <Home className="w-8 h-8 text-blue-400 mb-3" />
                    <h4 className="text-lg  text-white mb-2">Property Management</h4>
                    <p className="text-blue-200/80 text-sm">Comprehensive property listings with virtual tours, detailed specifications, and pricing.</p>
                  </div>
                  <div className="bg-slate-800/30 border border-blue-400/20 p-6 rounded-xl shadow-sm backdrop-blur-sm">
                    <Users className="w-8 h-8 text-blue-400 mb-3" />
                    <h4 className="text-lg  text-white mb-2">CRM Integration</h4>
                    <p className="text-blue-200/80 text-sm">Advanced customer relationship management with lead tracking and automated follow-ups.</p>
                  </div>
                  <div className="bg-slate-800/30 border border-blue-400/20 p-6 rounded-xl shadow-sm backdrop-blur-sm">
                    <Target className="w-8 h-8 text-blue-400 mb-3" />
                    <h4 className="text-lg  text-white mb-2">Sales Pipeline</h4>
                    <p className="text-blue-200/80 text-sm">Automated sales workflows with stage tracking and conversion optimization.</p>
                  </div>
                  <div className="bg-slate-800/30 border border-blue-400/20 p-6 rounded-xl shadow-sm backdrop-blur-sm">
                    <TrendingUp className="w-8 h-8 text-blue-400 mb-3" />
                    <h4 className="text-lg  text-white mb-2">Analytics Dashboard</h4>
                    <p className="text-blue-200/80 text-sm">Comprehensive reporting on sales performance, property trends, and market analytics.</p>
                  </div>
                </div>

                <h3 className="text-2xl  text-white mb-4">Results & Impact</h3>
                <p className="text-blue-100/90 leading-relaxed mb-6">
                  The Real Estate Management Platform transformed Sunview Enclave's operations, delivering exceptional improvements in sales conversion, operational efficiency, and customer satisfaction while managing hundreds of properties effectively.
                </p>

                <div className="bg-gradient-to-r from-blue-600 to-slate-900 text-white p-8 rounded-xl my-8 border border-blue-400/30">
                  <h4 className="text-2xl  mb-6">Project Outcomes</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <div className="text-4xl  text-blue-200 mb-2">150%</div>
                      <div className="text-lg  mb-1">Sales Conversion Increase</div>
                      <div className="text-blue-100 text-sm">Dramatic improvement in lead-to-sale conversion rates</div>
                    </div>
                    <div>
                      <div className="text-4xl  text-blue-200 mb-2">60%</div>
                      <div className="text-lg  mb-1">Admin Overhead Reduction</div>
                      <div className="text-blue-100 text-sm">Significant reduction in administrative workload</div>
                    </div>
                    <div>
                      <div className="text-4xl  text-blue-200 mb-2">500+</div>
                      <div className="text-lg  mb-1">Properties Managed</div>
                      <div className="text-blue-100 text-sm">Comprehensive management of property portfolio</div>
                    </div>
                    <div>
                      <div className="text-4xl  text-blue-200 mb-2">95%</div>
                      <div className="text-lg  mb-1">Customer Satisfaction</div>
                      <div className="text-blue-100 text-sm">Exceptional client experience and service quality</div>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl  text-white mb-4">Client Testimonial</h3>
                <div className="bg-slate-800/30 border-l-4 border-blue-400 p-6 rounded-r-lg italic backdrop-blur-sm">
                  <p className="text-blue-100/90 text-lg leading-relaxed mb-4">
                    "Ascentia Labs has revolutionized our real estate business. The platform increased our sales conversion by 150% and reduced administrative overhead by 60%. We now manage over 500 properties efficiently with automated workflows and comprehensive CRM capabilities. Our customers love the virtual tours and seamless booking process. This solution has positioned us as a leader in the real estate market."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white  mr-4">
                      SE
                    </div>
                    <div>
                      <div className=" text-white">Sunview Enclave Team</div>
                      <div className="text-blue-300 text-sm">Real Estate Company</div>
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
            <Link to="/case-study-airnet-travels-routemaestro" className="group">
              <article className="bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-blue-400/20">
                <img 
                  src="/SoftwareProducts/Route Maestro Logo.png" 
                  alt="Airnet Travels"
                  className="w-full h-48 object-contain bg-white p-4"
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

            <Link to="/case-study-ndmc-mcl-ticketing-platform" className="group">
              <article className="bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-blue-400/20">
                <img 
                  src="/partnerships/NDMC.png" 
                  alt="NDMC & MCL"
                  className="w-full h-48 object-contain bg-white p-4"
                />
                <div className="p-6">
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-sm font-medium">Government</span>
                  <h3 className="text-xl  text-white mt-4 mb-2 group-hover:text-blue-400 transition-colors">
                    NDMC & MCL Ticketing Platform
                  </h3>
                  <div className="flex items-center text-sm text-blue-300/70 mb-3">
                    <Building className="w-4 h-4 mr-1" />
                    <span className="mr-4">NDMC & MCL</span>
                    <Users className="w-4 h-4 mr-1" />
                    <span>15 developers</span>
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

export default SunviewEnclaveCase;