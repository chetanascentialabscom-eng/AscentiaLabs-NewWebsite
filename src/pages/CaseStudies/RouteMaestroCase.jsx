import { Link } from 'react-router-dom';
import { Calendar, User, Clock, ArrowLeft, Share2, Building, Users, TrendingUp, Award, CheckCircle, Target, Zap, Globe } from 'lucide-react';

const RouteMaestroCase = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100">
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
                <Building className="w-3 h-3 mr-2" />
                Travel & Tourism
              </span>
              <span className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium inline-flex items-center">
                <Award className="w-3 h-3 mr-2" />
                Success Story
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-800 leading-tight">
              RouteMaestro: AI-Powered Travel Planning and Booking Platform
            </h1>
            
            <div className="flex flex-wrap items-center text-gray-600 mb-8 gap-6">
              <div className="flex items-center">
                <Building className="w-5 h-5 mr-2" />
                <span>RouteMaestro</span>
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
            <article className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
              {/* Featured Image */}
              <div className="mb-8">
                <img 
                  src="/SoftwareProducts/Route Maestro Logo.png" 
                  alt="RouteMaestro Platform"
                  className="w-full h-64 md:h-96 object-contain rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 p-8"
                />
              </div>

             

              {/* Project Overview */}
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Project Overview</h2>
                <p className="text-xl text-gray-600 leading-relaxed mb-6">
                  RouteMaestro represents a revolutionary approach to travel planning, combining artificial intelligence with intuitive user experience design. Our team developed a comprehensive platform that transforms how travelers discover, plan, and book their journeys.
                </p>

                <h3 className="text-2xl font-bold text-gray-800 mb-4">The Challenge</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  The travel industry faced significant challenges with fragmented booking systems, lack of personalization, and poor user experiences. Traditional travel planning required multiple platforms, extensive research, and often resulted in suboptimal itineraries. RouteMaestro needed to solve these pain points while providing a seamless, AI-driven experience.
                </p>

                <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8 rounded-r-lg">
                  <h4 className="text-lg font-semibold text-blue-800 mb-4">Key Challenges Addressed:</h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-2 mt-0.5 text-blue-600 flex-shrink-0" />
                      <span className="text-blue-700 text-sm">Fragmented booking experience across multiple platforms</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-2 mt-0.5 text-blue-600 flex-shrink-0" />
                      <span className="text-blue-700 text-sm">Lack of personalized travel recommendations</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-2 mt-0.5 text-blue-600 flex-shrink-0" />
                      <span className="text-blue-700 text-sm">Complex itinerary planning and management</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-2 mt-0.5 text-blue-600 flex-shrink-0" />
                      <span className="text-blue-700 text-sm">Real-time travel updates and notifications</span>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Solution</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  We developed an AI-powered travel platform that integrates machine learning algorithms with comprehensive travel data to provide personalized recommendations, seamless booking experiences, and intelligent itinerary management. The platform leverages advanced technologies to deliver real-time insights and automated travel planning.
                </p>

                {/* Technology Stack */}
                <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-6 rounded-xl my-8">
                  <h4 className="text-xl font-bold text-gray-800 mb-4">Technology Stack</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-semibold text-gray-700 mb-2">Frontend</h5>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">React</span>
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">TypeScript</span>
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Tailwind CSS</span>
                      </div>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-700 mb-2">Backend</h5>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Node.js</span>
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Express</span>
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">MongoDB</span>
                      </div>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-700 mb-2">AI/ML</h5>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">TensorFlow</span>
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Python</span>
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Recommendation Engine</span>
                      </div>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-700 mb-2">Infrastructure</h5>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">AWS</span>
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Docker</span>
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Redis</span>
                      </div>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-800 mb-4">Key Features Delivered</h3>
                
                <div className="grid md:grid-cols-2 gap-6 my-8">
                  <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
                    <Zap className="w-8 h-8 text-blue-600 mb-3" />
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">AI-Powered Recommendations</h4>
                    <p className="text-gray-600 text-sm">Intelligent travel suggestions based on user preferences, budget, and historical data.</p>
                  </div>
                  <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
                    <Globe className="w-8 h-8 text-blue-600 mb-3" />
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Unified Booking Platform</h4>
                    <p className="text-gray-600 text-sm">Seamless integration with multiple travel providers for flights, hotels, and activities.</p>
                  </div>
                  <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
                    <Target className="w-8 h-8 text-blue-600 mb-3" />
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Smart Itinerary Builder</h4>
                    <p className="text-gray-600 text-sm">Automated itinerary creation with optimization for time, budget, and preferences.</p>
                  </div>
                  <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
                    <TrendingUp className="w-8 h-8 text-blue-600 mb-3" />
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Real-time Updates</h4>
                    <p className="text-gray-600 text-sm">Live notifications for flight changes, weather updates, and travel advisories.</p>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-800 mb-4">Results & Impact</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  The RouteMaestro platform exceeded all expectations, delivering remarkable improvements in user engagement, conversion rates, and overall customer satisfaction. The AI-driven approach revolutionized how users interact with travel planning tools.
                </p>

                <div className="bg-gradient-to-r from-blue-600 to-black text-white p-8 rounded-xl my-8">
                  <h4 className="text-2xl font-bold mb-6">Project Outcomes</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <div className="text-4xl font-bold text-blue-200 mb-2">300%</div>
                      <div className="text-lg font-semibold mb-1">Increase in User Engagement</div>
                      <div className="text-blue-100 text-sm">Users spend 3x more time on the platform</div>
                    </div>
                    <div>
                      <div className="text-4xl font-bold text-blue-200 mb-2">250%</div>
                      <div className="text-lg font-semibold mb-1">Boost in Conversions</div>
                      <div className="text-blue-100 text-sm">Significantly higher booking completion rates</div>
                    </div>
                    <div>
                      <div className="text-4xl font-bold text-blue-200 mb-2">50K+</div>
                      <div className="text-lg font-semibold mb-1">Active Users</div>
                      <div className="text-blue-100 text-sm">Rapid user base growth within 6 months</div>
                    </div>
                    <div>
                      <div className="text-4xl font-bold text-blue-200 mb-2">95%</div>
                      <div className="text-lg font-semibold mb-1">Customer Satisfaction</div>
                      <div className="text-blue-100 text-sm">Exceptional user experience ratings</div>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-800 mb-4">Client Testimonial</h3>
                <div className="bg-gray-50 border-l-4 border-blue-600 p-6 rounded-r-lg italic">
                  <p className="text-gray-700 text-lg leading-relaxed mb-4">
                    "Ascentia Labs transformed our vision into reality. The RouteMaestro platform has revolutionized how our customers plan and book travel. The AI recommendations are incredibly accurate, and the user experience is seamless. We've seen unprecedented growth in user engagement and bookings."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                      RM
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800">RouteMaestro Team</div>
                      <div className="text-gray-600 text-sm">Travel Technology Company</div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <Link 
                    to="/case-studies" 
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors"
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Other Success Stories</h2>
            <p className="text-gray-600 text-lg">Explore more of our successful projects</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              <Link to="/case-study/jusdoit-task-management" className="group">
              <article className="bg-gradient-to-br from-slate-100 to-blue-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <img 
                  src="/SoftwareProducts/JusDoIt.png" 
                  alt="JusDoIt"
                  className="w-full h-48 object-contain bg-white p-4"
                />
                <div className="p-6">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">Productivity</span>
                  <h3 className="text-xl font-bold text-gray-800 mt-4 mb-2 group-hover:text-blue-600 transition-colors">
                    JusDoIt: Task Management Solution
                  </h3>
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <Building className="w-4 h-4 mr-1" />
                    <span className="mr-4">JusDoIt</span>
                    <Users className="w-4 h-4 mr-1" />
                    <span>6 developers</span>
                  </div>
                  <p className="text-blue-600 font-semibold">View Case Study →</p>
                </div>
              </article>
            </Link>

            <Link to="/case-study/insurancesafe-digital-platform" className="group">
              <article className="bg-gradient-to-br from-slate-100 to-blue-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <img 
                  src="/SoftwareProducts/Insurance Safe.png" 
                  alt="InsuranceSafe"
                  className="w-full h-48 object-contain bg-white p-4"
                />
                <div className="p-6">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">Insurance</span>
                  <h3 className="text-xl font-bold text-gray-800 mt-4 mb-2 group-hover:text-blue-600 transition-colors">
                    InsuranceSafe: Digital Insurance Platform
                  </h3>
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <Building className="w-4 h-4 mr-1" />
                    <span className="mr-4">InsuranceSafe</span>
                    <Users className="w-4 h-4 mr-1" />
                    <span>15 developers</span>
                  </div>
                  <p className="text-blue-600 font-semibold">View Case Study →</p>
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