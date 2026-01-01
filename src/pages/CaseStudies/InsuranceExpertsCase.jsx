import { Link } from 'react-router-dom';
import { Calendar, User, Clock, ArrowLeft, Share2, Building, Users, TrendingUp, Award, CheckCircle, Target, Zap, Globe, Shield } from 'lucide-react';
import SEO from '../../components/SEO';

const InsuranceExpertsCase = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-950 to-black">
      <SEO 
        title="Insurance Experts Management Platform Case Study | Ascentia Labs"
        description="Modern insurance management solution with policy tracking, claims processing, and customer portal. Automated 85% of manual processes."
        keywords="insurance management, policy tracking, claims processing, insurance technology, digital transformation"
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
                Insurance
              </span>
              <span className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium inline-flex items-center">
                <Award className="w-3 h-3 mr-2" />
                Success Story
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl  mb-6 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent leading-tight">
              Insurance Management Platform
            </h1>
            
            <div className="flex flex-wrap items-center text-blue-200/80 mb-8 gap-6">
              <div className="flex items-center">
                <Building className="w-5 h-5 mr-2" />
                <span>Insurance Experts</span>
              </div>
              <div className="flex items-center">
                <Users className="w-5 h-5 mr-2" />
                <span>18 developers</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                <span>12 months</span>
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
                  src="/partnerships/logo-1a.jpg" 
                  alt="Insurance Experts"
                  className="w-full h-64 bg-white md:h-96 object-contain rounded-xl  p-8"
                />
              </div>

              {/* Project Overview */}
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl  text-white mb-4">Project Overview</h2>
                <p className="text-xl text-blue-200/80 leading-relaxed mb-6">
                  Modern insurance management solution with policy tracking, claims processing, and customer portal. Automated 85% of manual processes and improved customer satisfaction by 40% while providing 24/7 support capabilities. Visit <a href="https://www.insuranceexpert.com/" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:text-orange-500 font-semibold underline transition-colors">Insurance Experts</a> to learn more.
                </p>

                <h3 className="text-2xl  text-white mb-4">The Challenge</h3>
                <p className="text-blue-100/90 leading-relaxed mb-6">
                  Insurance Experts struggled with outdated legacy systems, manual claim processing, poor customer experience, and lack of real-time policy management. The company needed a comprehensive digital transformation to compete in the modern insurance market and improve operational efficiency.
                </p>

                <div className="bg-amber-900/20 border-l-4 border-amber-500 p-6 my-8 rounded-r-lg backdrop-blur-sm">
                  <h4 className="text-lg  text-amber-300 mb-4">Key Challenges Addressed:</h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-2 mt-0.5 text-amber-400 flex-shrink-0" />
                      <span className="text-blue-100 text-sm">Manual claims processing causing delays</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-2 mt-0.5 text-amber-400 flex-shrink-0" />
                      <span className="text-blue-100 text-sm">Poor customer portal experience</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-2 mt-0.5 text-amber-400 flex-shrink-0" />
                      <span className="text-blue-100 text-sm">Lack of real-time policy tracking</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-2 mt-0.5 text-amber-400 flex-shrink-0" />
                      <span className="text-blue-100 text-sm">Limited reporting and analytics capabilities</span>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl  text-white mb-4">Our Solution</h3>
                <p className="text-blue-100/90 leading-relaxed mb-6">
                  We developed a comprehensive insurance management platform with automated workflows, intelligent claims processing, customer self-service portals, and advanced analytics. The solution includes mobile applications, web portals, and AI-powered automation to streamline operations.
                </p>

                {/* Technology Stack */}
                <div className="bg-gradient-to-r from-slate-800/50 to-blue-900/30 p-6 rounded-xl my-8 border border-blue-400/20">
                  <h4 className="text-xl  text-white mb-4">Technology Stack</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className=" text-blue-300 mb-2">Frontend</h5>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-400/30">Angular</span>
                        <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-400/30">TypeScript</span>
                        <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-400/30">Material UI</span>
                      </div>
                    </div>
                    <div>
                      <h5 className=" text-blue-300 mb-2">Backend</h5>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-400/30">Spring Boot</span>
                        <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-400/30">Java</span>
                        <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-400/30">MySQL</span>
                      </div>
                    </div>
                    <div>
                      <h5 className=" text-blue-300 mb-2">Infrastructure</h5>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-400/30">Azure</span>
                        <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-400/30">Docker</span>
                        <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-400/30">Kubernetes</span>
                      </div>
                    </div>
                    <div>
                      <h5 className=" text-blue-300 mb-2">AI/Analytics</h5>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-400/30">Machine Learning</span>
                        <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-400/30">Power BI</span>
                        <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-400/30">Elasticsearch</span>
                      </div>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl  text-white mb-4">Key Features Delivered</h3>
                
                <div className="grid md:grid-cols-2 gap-6 my-8">
                  <div className="bg-slate-800/30 border border-amber-400/20 p-6 rounded-xl shadow-sm backdrop-blur-sm">
                    <Zap className="w-8 h-8 text-amber-500 mb-3" />
                    <h4 className="text-lg  text-white mb-2">Automated Claims Processing</h4>
                    <p className="text-blue-200/80 text-sm">AI-powered claims assessment and automated approval workflows.</p>
                  </div>
                  <div className="bg-slate-800/30 border border-amber-400/20 p-6 rounded-xl shadow-sm backdrop-blur-sm">
                    <Globe className="w-8 h-8 text-amber-500 mb-3" />
                    <h4 className="text-lg  text-white mb-2">Customer Self-Service Portal</h4>
                    <p className="text-blue-200/80 text-sm">Comprehensive web and mobile portals for policy management and claims.</p>
                  </div>
                  <div className="bg-slate-800/30 border border-amber-400/20 p-6 rounded-xl shadow-sm backdrop-blur-sm">
                    <Shield className="w-8 h-8 text-amber-500 mb-3" />
                    <h4 className="text-lg  text-white mb-2">Policy Management</h4>
                    <p className="text-blue-200/80 text-sm">Real-time policy tracking, renewals, and premium calculations.</p>
                  </div>
                  <div className="bg-slate-800/30 border border-amber-400/20 p-6 rounded-xl shadow-sm backdrop-blur-sm">
                    <TrendingUp className="w-8 h-8 text-amber-500 mb-3" />
                    <h4 className="text-lg  text-white mb-2">Advanced Analytics</h4>
                    <p className="text-blue-200/80 text-sm">Comprehensive reporting, risk assessment, and business intelligence.</p>
                  </div>
                </div>

                <h3 className="text-2xl  text-white mb-4">Results & Impact</h3>
                <p className="text-blue-100/90 leading-relaxed mb-6">
                  The Insurance Management Platform transformed Insurance Experts' operations, delivering significant improvements in efficiency, customer satisfaction, and operational costs while enabling 24/7 customer support capabilities.
                </p>

                <div className="bg-gradient-to-r from-blue-600 to-slate-900 text-white p-8 rounded-xl my-8 border border-blue-400/30">
                  <h4 className="text-2xl  mb-6">Project Outcomes</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <div className="text-4xl  text-blue-200 mb-2">85%</div>
                      <div className="text-lg  mb-1">Process Automation</div>
                      <div className="text-blue-100 text-sm">Automated manual processes and workflows</div>
                    </div>
                    <div>
                      <div className="text-4xl  text-blue-200 mb-2">40%</div>
                      <div className="text-lg  mb-1">Customer Satisfaction Increase</div>
                      <div className="text-blue-100 text-sm">Improved customer experience and service quality</div>
                    </div>
                    <div>
                      <div className="text-4xl  text-blue-200 mb-2">24/7</div>
                      <div className="text-lg  mb-1">Support Availability</div>
                      <div className="text-blue-100 text-sm">Round-the-clock customer service capabilities</div>
                    </div>
                    <div>
                      <div className="text-4xl  text-blue-200 mb-2">60%</div>
                      <div className="text-lg  mb-1">Faster Claims Processing</div>
                      <div className="text-blue-100 text-sm">Reduced claim processing time significantly</div>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl  text-white mb-4">Client Testimonial</h3>
                <div className="bg-slate-800/30 border-l-4 border-blue-400 p-6 rounded-r-lg italic backdrop-blur-sm">
                  <p className="text-blue-100/90 text-lg leading-relaxed mb-4">
                    "Ascentia Labs completely transformed our insurance operations. The new platform automated 85% of our manual processes and our customers can now manage their policies and claims 24/7. Customer satisfaction has increased by 40%, and our operational efficiency has improved dramatically. This solution has positioned us as a leader in digital insurance services."
                  </p>
                  <div className="flex items-center">
                    <img 
                      src="/clients/Frame 28.png" 
                      alt="Gaurav Jain"
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <div className=" text-white">Gaurav Jain</div>
                      <div className="text-blue-300 text-sm">Director, Insurance Experts</div>
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
            <Link to="/case-study-s-sood-co-task-management" className="group">
              <article className="bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-blue-400/20">
                <img 
                  src="/partnerships/image-14.png" 
                  alt="S. Sood & Co."
                  className="w-full bg-white h-48 object-contain bg-slate-700/50 p-4"
                />
                <div className="p-6">
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-sm font-medium">Productivity</span>
                  <h3 className="text-xl  text-white mt-4 mb-2 group-hover:text-blue-400 transition-colors">
                    S. Sood & Co. Task Management
                  </h3>
                  <div className="flex items-center text-sm text-blue-300/70 mb-3">
                    <Building className="w-4 h-4 mr-1" />
                    <span className="mr-4">S. Sood & Co.</span>
                    <Users className="w-4 h-4 mr-1" />
                    <span>8 developers</span>
                  </div>
                  <p className="text-blue-400 ">View Case Study →</p>
                </div>
              </article>
            </Link>

            <Link to="/case-study-pumpkins-kindergarten-management" className="group">
              <article className="bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-blue-400/20">
                <img 
                  src="/partnerships/pumpkins.svg" 
                  alt="Pumpkins Kindergarten"
                  className="w-full h-48 bg-white object-contain bg-slate-700/50 p-4"
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default InsuranceExpertsCase;