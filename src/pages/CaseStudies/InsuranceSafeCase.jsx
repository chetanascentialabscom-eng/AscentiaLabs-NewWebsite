import { Link } from 'react-router-dom';
import { Calendar, User, Clock, ArrowLeft, Share2, Building, Users, TrendingUp, Award, CheckCircle, Target, Zap, Globe, Shield, FileText } from 'lucide-react';
import SEO from '../../components/SEO';
import { seoData } from '../../utils/seoData';

const InsuranceSafeCase = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100">
      <SEO {...seoData.insuranceSafeCase} />
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
                <Shield className="w-3 h-3 mr-2" />
                Insurance
              </span>
              <span className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium inline-flex items-center">
                <Award className="w-3 h-3 mr-2" />
                Success Story
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-800 leading-tight">
              InsuranceSafe: Digital Insurance Management Platform
            </h1>
            
            <div className="flex flex-wrap items-center text-gray-600 mb-8 gap-6">
              <div className="flex items-center">
                <Building className="w-5 h-5 mr-2" />
                <span>InsuranceSafe</span>
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
            <article className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
              {/* Featured Image */}
              <div className="mb-8">
                <img 
                  src="/SoftwareProducts/Insurance Safe.png" 
                  alt="InsuranceSafe Platform"
                  className="w-full h-64 md:h-96 object-contain rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 p-8"
                />
              </div>

              

              {/* Project Overview */}
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Project Overview</h2>
                <p className="text-xl text-gray-600 leading-relaxed mb-6">
                  InsuranceSafe transforms traditional insurance operations through a comprehensive digital platform that streamlines policy management, claims processing, and customer interactions while ensuring regulatory compliance and data security.
                </p>

                <h3 className="text-2xl font-bold text-gray-800 mb-4">The Challenge</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  The insurance industry faced significant challenges with legacy systems, manual processes, lengthy claim processing times, and poor customer experience. InsuranceSafe needed a modern solution to digitize operations while maintaining strict security and compliance standards.
                </p>

                <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8 rounded-r-lg">
                  <h4 className="text-lg font-semibold text-blue-800 mb-4">Key Challenges Addressed:</h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-2 mt-0.5 text-blue-600 flex-shrink-0" />
                      <span className="text-blue-700 text-sm">Legacy system integration and modernization</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-2 mt-0.5 text-blue-600 flex-shrink-0" />
                      <span className="text-blue-700 text-sm">Manual claims processing and policy management</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-2 mt-0.5 text-blue-600 flex-shrink-0" />
                      <span className="text-blue-700 text-sm">Regulatory compliance and data security</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-2 mt-0.5 text-blue-600 flex-shrink-0" />
                      <span className="text-blue-700 text-sm">Poor customer experience and communication</span>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Solution</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  We developed a comprehensive insurance management platform with automated workflows, digital policy management, streamlined claims processing, and a customer self-service portal. The solution ensures compliance with industry regulations while providing real-time analytics and reporting.
                </p>

                {/* Technology Stack */}
                <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-6 rounded-xl my-8">
                  <h4 className="text-xl font-bold text-gray-800 mb-4">Technology Stack</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-semibold text-gray-700 mb-2">Frontend</h5>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Angular</span>
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">TypeScript</span>
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Material UI</span>
                      </div>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-700 mb-2">Backend</h5>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Spring Boot</span>
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Java</span>
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">MySQL</span>
                      </div>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-700 mb-2">Infrastructure</h5>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Azure</span>
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Docker</span>
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Kubernetes</span>
                      </div>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-700 mb-2">Security</h5>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">OAuth 2.0</span>
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">SSL/TLS</span>
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Data Encryption</span>
                      </div>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-800 mb-4">Key Features Delivered</h3>
                
                <div className="grid md:grid-cols-2 gap-6 my-8">
                  <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
                    <FileText className="w-8 h-8 text-blue-600 mb-3" />
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Policy Management</h4>
                    <p className="text-gray-600 text-sm">Digital policy creation, modification, and tracking with automated workflows.</p>
                  </div>
                  <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
                    <Zap className="w-8 h-8 text-blue-600 mb-3" />
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Claims Processing</h4>
                    <p className="text-gray-600 text-sm">Automated claims workflow with document management and approval processes.</p>
                  </div>
                  <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
                    <Globe className="w-8 h-8 text-blue-600 mb-3" />
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Customer Portal</h4>
                    <p className="text-gray-600 text-sm">Self-service portal for policy viewing, claims submission, and payment processing.</p>
                  </div>
                  <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
                    <TrendingUp className="w-8 h-8 text-blue-600 mb-3" />
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Analytics Dashboard</h4>
                    <p className="text-gray-600 text-sm">Real-time reporting and analytics for business intelligence and decision making.</p>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-800 mb-4">Results & Impact</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  InsuranceSafe has revolutionized insurance operations, dramatically reducing processing times, improving customer satisfaction, and enabling 24/7 automated support while maintaining the highest security standards.
                </p>

                <div className="bg-gradient-to-r from-blue-600 to-black text-white p-8 rounded-xl my-8">
                  <h4 className="text-2xl font-bold mb-6">Project Outcomes</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <div className="text-4xl font-bold text-blue-200 mb-2">70%</div>
                      <div className="text-lg font-semibold mb-1">Processing Time Reduction</div>
                      <div className="text-blue-100 text-sm">Faster claims and policy processing</div>
                    </div>
                    <div>
                      <div className="text-4xl font-bold text-blue-200 mb-2">24/7</div>
                      <div className="text-lg font-semibold mb-1">Claims Support</div>
                      <div className="text-blue-100 text-sm">Round-the-clock automated assistance</div>
                    </div>
                    <div>
                      <div className="text-4xl font-bold text-blue-200 mb-2">85%</div>
                      <div className="text-lg font-semibold mb-1">Process Automation</div>
                      <div className="text-blue-100 text-sm">Automated workflows and approvals</div>
                    </div>
                    <div>
                      <div className="text-4xl font-bold text-blue-200 mb-2">98%</div>
                      <div className="text-lg font-semibold mb-1">Customer Satisfaction</div>
                      <div className="text-blue-100 text-sm">Improved customer experience</div>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-800 mb-4">Client Testimonial</h3>
                <div className="bg-gray-50 border-l-4 border-blue-600 p-6 rounded-r-lg italic">
                  <p className="text-gray-700 text-lg leading-relaxed mb-4">
                    "The InsuranceSafe platform has transformed our operations completely. We've seen a 70% reduction in processing times and our customers are much happier with the streamlined experience. The automated workflows have freed up our team to focus on more strategic initiatives."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                      IS
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800">InsuranceSafe Team</div>
                      <div className="text-gray-600 text-sm">Insurance Technology Company</div>
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
            <Link to="/case-study-routemaestro-ai-travel-platform" className="group">
              <article className="bg-gradient-to-br from-slate-100 to-blue-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <img 
                  src="/SoftwareProducts/Route Maestro Logo.png" 
                  alt="RouteMaestro"
                  className="w-full h-48 object-contain bg-white p-4"
                />
                <div className="p-6">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">Travel & Tourism</span>
                  <h3 className="text-xl font-bold text-gray-800 mt-4 mb-2 group-hover:text-blue-600 transition-colors">
                    RouteMaestro: AI-Powered Travel Planning 
                  </h3>
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <Building className="w-4 h-4 mr-1" />
                    <span className="mr-4">RouteMaestro</span>
                    <Users className="w-4 h-4 mr-1" />
                    <span>12 developers</span>
                  </div>
                  <p className="text-blue-600 font-semibold">View Case Study →</p>
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default InsuranceSafeCase;