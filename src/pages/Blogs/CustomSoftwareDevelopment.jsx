import { Link } from 'react-router-dom';
import { Calendar, User, Clock, ArrowLeft, Share2, Tag, Code, Zap, Shield, TrendingUp } from 'lucide-react';
import SEO from '../../components/SEO';
import { seoData } from '../../utils/seoData';

const CustomSoftwareDevelopment = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-950 to-black">
      <SEO {...seoData.customSoftwareDevelopmentBlog} />
      {/* Hero Section */}
      <section className="relative pt-32 md:pt-40 pb-12 lg:pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-32 h-32 bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-40 left-20 w-24 h-24 bg-blue-400/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <Link 
              to="/blog" 
              className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blogs
            </Link>
            
            <div className="mb-6">
              <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium inline-flex items-center">
                <Tag className="w-3 h-3 mr-2" />
                Software Development
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl  mb-6 text-white leading-tight">
              Custom Software Development: Transforming Business Operations
            </h1>
            
            <div className="flex flex-wrap items-center text-blue-200/80 mb-8 gap-6">
              <div className="flex items-center">
                <User className="w-5 h-5 mr-2" />
                <span>Development Team</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                <span>10/06/2025</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                <span>6 min read</span>
              </div>
              {/* <button className="flex items-center text-blue-400 hover:text-blue-300 transition-colors">
                <Share2 className="w-5 h-5 mr-2" />
                <span>Share</span>
              </button> */}
            </div>
          </div>
        </div>
      </section>
      
      {/* Article Content */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <article className="bg-slate-800/50 backdrop-blur-sm rounded-2xl shadow-lg border border-blue-400/20 p-6 md:p-8">
              {/* Featured Image */}
              <div className="mb-6">
                <img 
                  src="/blogs/blog4.png" 
                  alt="Custom Software Development"
                  className="w-full h-64 md:h-96 object-cover rounded-xl"
                />
              </div>

              {/* Article Content */}
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-blue-200/80 leading-relaxed mb-6">
                  In today's rapidly evolving digital landscape, businesses need software solutions that are specifically tailored to their unique requirements. Custom software development offers the flexibility, scalability, and competitive advantage that off-the-shelf solutions simply cannot provide.
                </p>

                <h2 className="text-3xl  text-white mb-4 mt-8">What is Custom Software Development?</h2>
                <p className="text-blue-100/90 leading-relaxed mb-6">
                  Custom software development is the process of designing, creating, deploying, and maintaining software applications specifically built for a particular set of users, functions, or organizations. Unlike commercial off-the-shelf software (COTS), custom software is developed to address specific business needs and challenges.
                </p>

                <div className="grid md:grid-cols-2 gap-6 my-6">
                  <div className="bg-slate-800/30 border border-blue-400/20 p-6 rounded-xl backdrop-blur-sm">
                    <div className="flex items-center mb-4">
                      <Code className="w-8 h-8 text-blue-400 mr-3" />
                      <h3 className="text-xl  text-white">Tailored Solutions</h3>
                    </div>
                    <p className="text-blue-200/80">Built specifically for your business processes and requirements</p>
                  </div>
                  
                  <div className="bg-slate-800/30 border border-blue-400/20 p-6 rounded-xl backdrop-blur-sm">
                    <div className="flex items-center mb-4">
                      <Shield className="w-8 h-8 text-green-600 mr-3" />
                      <h3 className="text-xl  text-white">Enhanced Security</h3>
                    </div>
                    <p className="text-blue-200/80">Better security control and data protection measures</p>
                  </div>
                </div>

                <h2 className="text-3xl  text-white mb-4 mt-8">Key Benefits of Custom Software Development</h2>

                <h3 className="text-2xl  text-white mb-4 mt-8 flex items-center">
                  <Zap className="w-6 h-6 mr-3 text-blue-400" />
                  1. Improved Efficiency and Productivity
                </h3>
                <p className="text-blue-100/90 leading-relaxed mb-6">
                  Custom software is designed to streamline your specific business processes, eliminating unnecessary features and focusing on what matters most to your organization. This targeted approach leads to significant improvements in operational efficiency and employee productivity.
                </p>

                <h3 className="text-2xl  text-white mb-4 mt-8 flex items-center">
                  <TrendingUp className="w-6 h-6 mr-3 text-blue-400" />
                  2. Scalability and Flexibility
                </h3>
                <p className="text-blue-100/90 leading-relaxed mb-6">
                  As your business grows and evolves, custom software can be easily modified and expanded to accommodate new requirements. This scalability ensures that your software investment continues to provide value as your organization develops.
                </p>

                <h3 className="text-2xl  text-white mb-4 mt-8 flex items-center">
                <Zap className="w-6 h-6 mr-3 text-blue-400" />
                  3. Competitive Advantage</h3>
                <p className="text-blue-100/90 leading-relaxed mb-6">
                  Custom software gives you unique capabilities that your competitors don't have. By automating specific processes or providing innovative features, you can differentiate your business and gain a significant competitive edge in the market.
                </p>

                <div className="bg-gradient-to-r from-blue-600 to-black text-white p-6 rounded-xl my-8">
                  <h3 className="text-2xl  mb-4">Our Development Process</h3>
                  <p className="text-blue-100 mb-6">
                    We follow a structured approach to ensure your custom software meets all requirements and exceeds expectations.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white/10 rounded-lg p-4">
                      <h4 className=" mb-3 text-lg">Planning & Analysis Phase</h4>
                      <p className="text-blue-100 text-sm leading-relaxed">
                        We begin by thoroughly understanding your business requirements through detailed analysis. 
                        This includes feasibility studies, project planning, and selecting the most suitable 
                        technologies for your specific needs.
                      </p>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4">
                      <h4 className=" mb-3 text-lg">Design & Development Phase</h4>
                      <p className="text-blue-100 text-sm leading-relaxed">
                        Our team creates comprehensive system architecture and intuitive UI/UX designs. 
                        We then proceed with coding and development, followed by rigorous quality assurance 
                        testing to ensure optimal performance.
                      </p>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl  text-white mb-4 mt-8">Industries We Serve</h2>
                <p className="text-blue-100/90 leading-relaxed mb-6">
                  Our custom software development services cater to various industries, each with unique challenges and requirements:
                </p>

                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-slate-800/30 p-4 rounded-lg text-center">
                    <h4 className=" text-white mb-2">Healthcare</h4>
                    <p className="text-sm text-blue-200/80">Patient management systems, telemedicine platforms</p>
                  </div>
                  <div className="bg-slate-800/30 p-4 rounded-lg text-center">
                    <h4 className=" text-white mb-2">Education</h4>
                    <p className="text-sm text-blue-200/80">Learning management systems, student portals</p>
                  </div>
                  <div className="bg-slate-800/30 p-4 rounded-lg text-center">
                    <h4 className=" text-white mb-2">E-commerce</h4>
                    <p className="text-sm text-blue-200/80">Online stores, inventory management</p>
                  </div>
                  <div className="bg-slate-800/30 p-4 rounded-lg text-center">
                    <h4 className=" text-white mb-2">Finance</h4>
                    <p className="text-sm text-blue-200/80">Banking systems, payment gateways</p>
                  </div>
                  <div className="bg-slate-800/30 p-4 rounded-lg text-center">
                    <h4 className=" text-white mb-2">Manufacturing</h4>
                    <p className="text-sm text-blue-200/80">ERP systems, supply chain management</p>
                  </div>
                  <div className="bg-slate-800/30 p-4 rounded-lg text-center">
                    <h4 className=" text-white mb-2">Real Estate</h4>
                    <p className="text-sm text-blue-200/80">Property management, CRM systems</p>
                  </div>
                </div>

                <h2 className="text-3xl  text-white mb-4 mt-8">Why Choose Ascentia Labs?</h2>
                <p className="text-blue-100/90 leading-relaxed mb-6">
                  At Ascentia Labs, we combine technical expertise with deep industry knowledge to deliver custom software solutions that drive real business results. Our team of experienced developers, designers, and project managers work closely with you throughout the entire development process to ensure your vision becomes reality.
                </p>

                <div className="bg-blue-900/30 border-l-4 border-blue-400 p-4 my-6 rounded-r-lg">
                  <h4 className=" text-blue-300 mb-2">Our Commitment</h4>
                  <p className="text-blue-100">
                    We don't just build software; we build partnerships. Our commitment extends beyond project delivery to ongoing support, maintenance, and continuous improvement of your custom software solutions.
                  </p>
                </div>

                <h2 className="text-3xl  text-white mb-4 mt-8">Getting Started</h2>
                <p className="text-blue-100/90 leading-relaxed mb-6">
                  Ready to transform your business with custom software? The journey begins with understanding your unique challenges and goals. Our team will work with you to analyze your requirements, propose the best technical approach, and deliver a solution that exceeds your expectations.
                </p>

                <div className="mt-8 pt-6 border-t border-blue-400/20">
                  <Link 
                    to="/blog" 
                    className="inline-flex items-center text-blue-400 hover:text-blue-300  transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Return To Blogs
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Other Blogs Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl  text-white mb-4">Other Blogs</h2>
            <p className="text-blue-200/80 text-lg">Explore more insights and articles</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Link to="/mobile-app-development-trends-2025" className="group">
              <article className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-blue-400/20 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <img 
                  src="/blogs/blog5.jpg" 
                  alt="Mobile App Development Trends"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">Mobile Development</span>
                  <h3 className="text-xl  text-white mt-4 mb-2 group-hover:text-blue-400 transition-colors">
                    MOBILE APP DEVELOPMENT TRENDS FOR 2025
                  </h3>
                  <div className="flex items-center text-sm text-blue-300/70 mb-3">
                    <User className="w-4 h-4 mr-1" />
                    <span className="mr-4">Mobile Team</span>
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>08/06/2025</span>
                  </div>
                  <p className="text-blue-400 ">Read More →</p>
                </div>
              </article>
            </Link>

            <Link to="/benefits-ai-travel-tourism" className="group">
              <article className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-blue-400/20 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <img 
                  src="/blogs/blog3.jpg" 
                  alt="AI in Travel"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">AI & Technology</span>
                  <h3 className="text-xl  text-white mt-4 mb-2 group-hover:text-blue-400 transition-colors">
                    BENEFITS OF AI IN TRAVEL AND TOURISM INDUSTRY
                  </h3>
                  <div className="flex items-center text-sm text-blue-300/70 mb-3">
                    <User className="w-4 h-4 mr-1" />
                    <span className="mr-4">Tech Team</span>
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>12/06/2025</span>
                  </div>
                  <p className="text-blue-400 ">Read More →</p>
                </div>
              </article>
            </Link>
          </div>
        </div>
      </section>

   
    </div>
  );
};

export default CustomSoftwareDevelopment;