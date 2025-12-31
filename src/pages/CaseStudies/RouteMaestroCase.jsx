import { Link } from 'react-router-dom';
import { Calendar, User, Clock, ArrowLeft, Share2, Building, Users, TrendingUp, Award, CheckCircle, Target, Zap, Globe } from 'lucide-react';
import SEO from '../../components/SEO';
import { seoData } from '../../utils/seoData';

const RouteMaestroCase = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-950 to-black">
      <SEO {...seoData.routeMaestroCase} />
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
                Travel & Tourism
              </span>
              <span className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium inline-flex items-center">
                <Award className="w-3 h-3 mr-2" />
                Success Story
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl  mb-6 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent leading-tight">
              AI Travel Planning & Booking Tool
            </h1>
            
            <div className="flex flex-wrap items-center text-blue-200/80 mb-8 gap-6">
              <div className="flex items-center">
                <Building className="w-5 h-5 mr-2" />
                <span>Airnet Travels</span>
              </div>
              <div className="flex items-center">
                <Users className="w-5 h-5 mr-2" />
                <span>12 developers</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                <span>8 months</span>
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
                  src="/pics/air.jpg" 
                  alt="Airnet Travels"
                  className="w-full h-64 md:h-96 object-cover rounded-xl"
                />
              </div>

              {/* Project Overview */}
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl  text-white mb-4">Project Overview</h2>
                <p className="text-xl text-blue-200/80 leading-relaxed mb-6">
                  An AI Powered Multi-City Travel Planning & Booking Platform that generates ready-to-book AI personalised, multi city real-time travel packages integrated with global hotels, flights, sightseeings, transfers within 2 Minutes! Experience <a href="https://www.routemaestro.com" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:text-orange-500 font-semibold underline transition-colors">RouteMaestro</a> today.
                </p>

                <h3 className="text-2xl  text-white mb-4">The Challenge</h3>
                <p className="text-blue-100/90 leading-relaxed mb-6">
                  <a href="https://airnet-travels.com/" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:text-orange-500 font-semibold underline transition-colors">Airnet Travels</a> needed a revolutionary solution to streamline multi-city travel planning. Traditional methods required hours of research across multiple platforms, often resulting in suboptimal itineraries and frustrated customers. The challenge was to create an AI-powered system that could generate comprehensive travel packages in minutes.
                </p>

                <div className="bg-blue-900/30 border-l-4 border-blue-400 p-6 my-8 rounded-r-lg backdrop-blur-sm">
                  <h4 className="text-lg  text-blue-300 mb-4">Key Challenges Addressed:</h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-2 mt-0.5 text-blue-400 flex-shrink-0" />
                      <span className="text-blue-100 text-sm">Multi-city travel complexity and coordination</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-2 mt-0.5 text-blue-400 flex-shrink-0" />
                      <span className="text-blue-100 text-sm">Real-time availability and pricing integration</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-2 mt-0.5 text-blue-400 flex-shrink-0" />
                      <span className="text-blue-100 text-sm">Personalized AI-driven recommendations</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-2 mt-0.5 text-blue-400 flex-shrink-0" />
                      <span className="text-blue-100 text-sm">Instant booking and payment processing</span>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl  text-white mb-4">Our Solution</h3>
                <p className="text-blue-100/90 leading-relaxed mb-6">
                  We developed an AI-powered travel platform that integrates machine learning algorithms with comprehensive travel data to provide personalized recommendations, seamless booking experiences, and intelligent itinerary management. The platform leverages advanced technologies to deliver real-time insights and automated travel planning within 2 minutes.
                </p>

                {/* Technology Stack */}
                <div className="bg-gradient-to-r from-slate-800/50 to-blue-900/30 p-6 rounded-xl my-8 border border-blue-400/20">
                  <h4 className="text-xl  text-white mb-4">Technology Stack</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className=" text-blue-300 mb-2">Frontend</h5>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-400/30">React</span>
                        <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-400/30">TypeScript</span>
                        <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-400/30">Tailwind CSS</span>
                      </div>
                    </div>
                    <div>
                      <h5 className=" text-blue-300 mb-2">Backend</h5>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-400/30">Node.js</span>
                        <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-400/30">Express</span>
                        <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-400/30">MongoDB</span>
                      </div>
                    </div>
                    <div>
                      <h5 className=" text-blue-300 mb-2">AI/ML</h5>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-400/30">TensorFlow</span>
                        <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-400/30">Python</span>
                        <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-400/30">Recommendation Engine</span>
                      </div>
                    </div>
                    <div>
                      <h5 className=" text-blue-300 mb-2">Infrastructure</h5>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-400/30">AWS</span>
                        <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-400/30">Docker</span>
                        <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-400/30">Redis</span>
                      </div>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl  text-white mb-4">Key Features Delivered</h3>
                
                <div className="grid md:grid-cols-2 gap-6 my-8">
                  <div className="bg-slate-800/30 border border-blue-400/20 p-6 rounded-xl shadow-sm backdrop-blur-sm">
                    <Zap className="w-8 h-8 text-blue-400 mb-3" />
                    <h4 className="text-lg  text-white mb-2">2-Minute AI Planning</h4>
                    <p className="text-blue-200/80 text-sm">Instant multi-city travel packages with AI-powered recommendations and real-time pricing.</p>
                  </div>
                  <div className="bg-slate-800/30 border border-blue-400/20 p-6 rounded-xl shadow-sm backdrop-blur-sm">
                    <Globe className="w-8 h-8 text-blue-400 mb-3" />
                    <h4 className="text-lg  text-white mb-2">Global Integration</h4>
                    <p className="text-blue-200/80 text-sm">Seamless integration with global hotels, flights, sightseeing, and transfer providers.</p>
                  </div>
                  <div className="bg-slate-800/30 border border-blue-400/20 p-6 rounded-xl shadow-sm backdrop-blur-sm">
                    <Target className="w-8 h-8 text-blue-400 mb-3" />
                    <h4 className="text-lg  text-white mb-2">Personalized Packages</h4>
                    <p className="text-blue-200/80 text-sm">AI-driven personalization based on preferences, budget, and travel history.</p>
                  </div>
                  <div className="bg-slate-800/30 border border-blue-400/20 p-6 rounded-xl shadow-sm backdrop-blur-sm">
                    <TrendingUp className="w-8 h-8 text-blue-400 mb-3" />
                    <h4 className="text-lg  text-white mb-2">Ready-to-Book</h4>
                    <p className="text-blue-200/80 text-sm">Complete travel packages ready for immediate booking with secure payment processing.</p>
                  </div>
                </div>

                <h3 className="text-2xl  text-white mb-4">Results & Impact</h3>
                <p className="text-blue-100/90 leading-relaxed mb-6">
                  The AI Travel Planning & Booking Tool for Airnet Travels exceeded all expectations, delivering remarkable improvements in booking efficiency, customer satisfaction, and operational effectiveness. The platform revolutionized how customers plan and book multi-city travel.
                </p>

                <div className="bg-gradient-to-r from-blue-600 to-slate-900 text-white p-8 rounded-xl my-8 border border-blue-400/30">
                  <h4 className="text-2xl  mb-6">Project Outcomes</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <div className="text-4xl  text-blue-200 mb-2">2 min</div>
                      <div className="text-lg  mb-1">Booking Time</div>
                      <div className="text-blue-100 text-sm">Complete travel packages generated instantly</div>
                    </div>
                    <div>
                      <div className="text-4xl  text-blue-200 mb-2">300%</div>
                      <div className="text-lg  mb-1">Efficiency Increase</div>
                      <div className="text-blue-100 text-sm">Dramatic improvement in booking process speed</div>
                    </div>
                    <div>
                      <div className="text-4xl  text-blue-200 mb-2">95%</div>
                      <div className="text-lg  mb-1">User Satisfaction</div>
                      <div className="text-blue-100 text-sm">Exceptional customer experience ratings</div>
                    </div>
                    <div>
                      <div className="text-4xl  text-blue-200 mb-2">50K+</div>
                      <div className="text-lg  mb-1">Packages Generated</div>
                      <div className="text-blue-100 text-sm">AI-powered travel packages created monthly</div>
                    </div>
                  </div>
                  
               
                </div>
                   {/* CTA Button */}
                  <div className="text-center mt-8">
                    <a 
                      href="https://www.routemaestro.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-black px-4 py-4 rounded-xl  transition-all duration-300 shadow-lg hover:scale-105 text-lg"
                    >
                      RouteMaestro 
                      <svg className="w-5 h-5 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>

                <h3 className="text-2xl  text-white mb-4">Client Testimonial</h3>
                <div className="bg-slate-800/30 border-l-4 border-blue-400 p-6 rounded-r-lg italic backdrop-blur-sm">
                  <p className="text-blue-100/90 text-lg leading-relaxed mb-4">
                    "Ascentia Labs transformed our travel business completely. The AI-powered platform generates comprehensive travel packages in just 2 minutes - something that used to take hours. Our customers love the personalized recommendations and seamless booking experience. This solution has revolutionized how we serve our clients."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white  mr-4">
                      AT
                    </div>
                    <div>
                      <div className=" text-white">
                        <a href="https://www.routemaestro.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition-colors">
                          Airnet Travels Team
                        </a>
                      </div>
                      <div className="text-blue-300 text-sm">Travel Technology Company</div>
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
              <Link to="/case-study-ndmc-mcl-ticketing-platform" className="group">
              <article className="bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-blue-400/20">
                <img 
                  src="/partnerships/NDMC.png" 
                  alt="NDMC & MCL"
                  className="w-full bg-white h-48 object-contain bg-slate-700/50 p-4"
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

export default RouteMaestroCase;