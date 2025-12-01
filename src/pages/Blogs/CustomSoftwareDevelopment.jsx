import { Link } from 'react-router-dom';
import { Calendar, User, Clock, ArrowLeft, Share2, Tag, Code, Zap, Shield, TrendingUp } from 'lucide-react';

const CustomSoftwareDevelopment = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-40 left-20 w-24 h-24 bg-blue-400/15 rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <Link 
              to="/blogs" 
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium mb-8 transition-colors"
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
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-800 leading-tight">
              Custom Software Development: Transforming Business Operations
            </h1>
            
            <div className="flex flex-wrap items-center text-gray-600 mb-8 gap-6">
              <div className="flex items-center">
                <User className="w-5 h-5 mr-2" />
                <span>Development Team</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                <span>10/06/2024</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                <span>6 min read</span>
              </div>
              <button className="flex items-center text-blue-600 hover:text-blue-700 transition-colors">
                <Share2 className="w-5 h-5 mr-2" />
                <span>Share</span>
              </button>
            </div>
          </div>
        </div>
      </section>      {/* A
rticle Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <article className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              {/* Featured Image */}
              <div className="mb-8">
                <img 
                  src="/partnerships/credmate.svg" 
                  alt="Custom Software Development"
                  className="w-full h-64 md:h-96 object-cover rounded-xl"
                />
              </div>

              {/* Article Content */}
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  In today's rapidly evolving digital landscape, businesses need software solutions that are specifically tailored to their unique requirements. Custom software development offers the flexibility, scalability, and competitive advantage that off-the-shelf solutions simply cannot provide.
                </p>

                <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">What is Custom Software Development?</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Custom software development is the process of designing, creating, deploying, and maintaining software applications specifically built for a particular set of users, functions, or organizations. Unlike commercial off-the-shelf software (COTS), custom software is developed to address specific business needs and challenges.
                </p>

                <div className="grid md:grid-cols-2 gap-6 my-8">
                  <div className="bg-blue-50 p-6 rounded-xl">
                    <div className="flex items-center mb-4">
                      <Code className="w-8 h-8 text-blue-600 mr-3" />
                      <h3 className="text-xl font-bold text-gray-800">Tailored Solutions</h3>
                    </div>
                    <p className="text-gray-600">Built specifically for your business processes and requirements</p>
                  </div>
                  
                  <div className="bg-green-50 p-6 rounded-xl">
                    <div className="flex items-center mb-4">
                      <Shield className="w-8 h-8 text-green-600 mr-3" />
                      <h3 className="text-xl font-bold text-gray-800">Enhanced Security</h3>
                    </div>
                    <p className="text-gray-600">Better security control and data protection measures</p>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">Key Benefits of Custom Software Development</h2>

                <h3 className="text-2xl font-bold text-gray-800 mb-4 mt-8 flex items-center">
                  <Zap className="w-6 h-6 mr-3 text-blue-600" />
                  1. Improved Efficiency and Productivity
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Custom software is designed to streamline your specific business processes, eliminating unnecessary features and focusing on what matters most to your organization. This targeted approach leads to significant improvements in operational efficiency and employee productivity.
                </p>

                <h3 className="text-2xl font-bold text-gray-800 mb-4 mt-8 flex items-center">
                  <TrendingUp className="w-6 h-6 mr-3 text-blue-600" />
                  2. Scalability and Flexibility
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  As your business grows and evolves, custom software can be easily modified and expanded to accommodate new requirements. This scalability ensures that your software investment continues to provide value as your organization develops.
                </p>

                <h3 className="text-2xl font-bold text-gray-800 mb-4 mt-8">3. Competitive Advantage</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Custom software gives you unique capabilities that your competitors don't have. By automating specific processes or providing innovative features, you can differentiate your business and gain a significant competitive edge in the market.
                </p>

                <div className="bg-gradient-to-r from-blue-600 to-black text-white p-8 rounded-xl my-12">
                  <h3 className="text-2xl font-bold mb-6">Custom Software Development Process</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-4">Planning & Analysis</h4>
                      <ul className="text-blue-100 text-sm space-y-2">
                        <li>• Requirements gathering</li>
                        <li>• Feasibility analysis</li>
                        <li>• Project planning</li>
                        <li>• Technology selection</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-4">Design & Development</h4>
                      <ul className="text-blue-100 text-sm space-y-2">
                        <li>• System architecture design</li>
                        <li>• UI/UX design</li>
                        <li>• Coding and development</li>
                        <li>• Quality assurance testing</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">Industries We Serve</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Our custom software development services cater to various industries, each with unique challenges and requirements:
                </p>

                <div className="grid md:grid-cols-3 gap-4 mb-8">
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <h4 className="font-semibold text-gray-800 mb-2">Healthcare</h4>
                    <p className="text-sm text-gray-600">Patient management systems, telemedicine platforms</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <h4 className="font-semibold text-gray-800 mb-2">Education</h4>
                    <p className="text-sm text-gray-600">Learning management systems, student portals</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <h4 className="font-semibold text-gray-800 mb-2">E-commerce</h4>
                    <p className="text-sm text-gray-600">Online stores, inventory management</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <h4 className="font-semibold text-gray-800 mb-2">Finance</h4>
                    <p className="text-sm text-gray-600">Banking systems, payment gateways</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <h4 className="font-semibold text-gray-800 mb-2">Manufacturing</h4>
                    <p className="text-sm text-gray-600">ERP systems, supply chain management</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <h4 className="font-semibold text-gray-800 mb-2">Real Estate</h4>
                    <p className="text-sm text-gray-600">Property management, CRM systems</p>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">Why Choose Ascentia Labs?</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  At Ascentia Labs, we combine technical expertise with deep industry knowledge to deliver custom software solutions that drive real business results. Our team of experienced developers, designers, and project managers work closely with you throughout the entire development process to ensure your vision becomes reality.
                </p>

                <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8 rounded-r-lg">
                  <h4 className="font-bold text-blue-800 mb-2">Our Commitment</h4>
                  <p className="text-blue-700">
                    We don't just build software; we build partnerships. Our commitment extends beyond project delivery to ongoing support, maintenance, and continuous improvement of your custom software solutions.
                  </p>
                </div>

                <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">Getting Started</h2>
                <p className="text-gray-700 leading-relaxed mb-8">
                  Ready to transform your business with custom software? The journey begins with understanding your unique challenges and goals. Our team will work with you to analyze your requirements, propose the best technical approach, and deliver a solution that exceeds your expectations.
                </p>

                <div className="mt-12 pt-8 border-t border-gray-200">
                  <Link 
                    to="/blogs" 
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors"
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
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Other Blogs</h2>
            <p className="text-gray-600 text-lg">Explore more insights and articles</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Link to="/blog/mobile-app-development-trends-2025" className="group">
              <article className="bg-gradient-to-br from-slate-100 to-blue-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <img 
                  src="/partnerships/kiddogram.svg" 
                  alt="Mobile App Development Trends"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">Mobile Development</span>
                  <h3 className="text-xl font-bold text-gray-800 mt-4 mb-2 group-hover:text-blue-600 transition-colors">
                    MOBILE APP DEVELOPMENT TRENDS FOR 2025
                  </h3>
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <User className="w-4 h-4 mr-1" />
                    <span className="mr-4">Mobile Team</span>
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>08/06/2024</span>
                  </div>
                  <p className="text-blue-600 font-semibold">Read More →</p>
                </div>
              </article>
            </Link>

            <Link to="/blog/benefits-ai-travel-tourism" className="group">
              <article className="bg-gradient-to-br from-slate-100 to-blue-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <img 
                  src="/partnerships/go.svg" 
                  alt="AI in Travel"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">AI & Technology</span>
                  <h3 className="text-xl font-bold text-gray-800 mt-4 mb-2 group-hover:text-blue-600 transition-colors">
                    BENEFITS OF AI IN TRAVEL AND TOURISM INDUSTRY
                  </h3>
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <User className="w-4 h-4 mr-1" />
                    <span className="mr-4">Tech Team</span>
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>12/06/2024</span>
                  </div>
                  <p className="text-blue-600 font-semibold">Read More →</p>
                </div>
              </article>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Build Your Custom Software Solution?
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss your unique requirements and create a software solution that transforms your business operations and drives growth.
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors text-lg">
            Start Your Project
          </button>
        </div>
      </section>
    </div>
  );
};

export default CustomSoftwareDevelopment;