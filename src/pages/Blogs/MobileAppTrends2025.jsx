import { Link } from 'react-router-dom';
import { Calendar, User, Clock, ArrowLeft, Share2, Tag, Smartphone, Zap } from 'lucide-react';
import SEO from '../../components/SEO';
import { seoData } from '../../utils/seoData';

const MobileAppTrends2025 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-950 to-black">
      <SEO {...seoData.mobileAppTrends2025} />
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
                Mobile Development
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl  mb-6 text-white leading-tight">
             Mobile App Development Trends for 2025: The Future of Digital Innovation
            </h1>
            
            <div className="flex flex-wrap items-center text-blue-200/80 mb-8 gap-6">
              <div className="flex items-center">
                <User className="w-5 h-5 mr-2" />
                <span>Mobile Team</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                <span>08/06/2025</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                <span>9 min read</span>
              </div>
              {/* <button className="flex items-center text-blue-400 hover:text-blue-300 transition-colors">
                <Share2 className="w-5 h-5 mr-2" />
                <span>Share</span>
              </button> */}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-6">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <img 
              src="/blogs/blog5.jpg" 
              alt="Mobile App Development Trends 2025"
              className="w-full h-64 md:h-96 object-cover rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-lg max-w-none">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl shadow-lg border border-blue-400/20 p-6 md:p-8 mb-6">
                <p className="text-xl text-blue-100/90 leading-relaxed mb-4">
                  The mobile app development landscape is evolving rapidly, with new technologies and trends shaping how we build and interact with mobile applications. As we move into 2025, several key trends are emerging that will define the future of mobile development.
                </p>

                <h2 className="text-3xl  text-white mb-4 flex items-center">
                  <Smartphone className="w-8 h-8 mr-3 text-blue-400" />
                  Key Trends Shaping Mobile Development
                </h2>

                <div className="space-y-6">
                  <div className="bg-slate-800/30 border border-blue-400/20 rounded-xl p-6 backdrop-blur-sm">
                    <h3 className="text-2xl  text-white mb-3">1. AI-Powered Mobile Apps</h3>
                    <p className="text-blue-100/90 leading-relaxed">
                      Artificial Intelligence integration is becoming standard in mobile apps. From personalized user experiences to predictive analytics, AI is transforming how apps understand and serve users. Machine learning algorithms are enabling apps to learn from user behavior and provide more relevant content and features.
                    </p>
                  </div>

                  <div className="bg-slate-800/30 border border-blue-400/20 rounded-xl p-6 backdrop-blur-sm">
                    <h3 className="text-2xl  text-white mb-3">2. Cross-Platform Development</h3>
                    <p className="text-blue-100/90 leading-relaxed">
                      Frameworks like Flutter, React Native, and .NET MAUI are gaining popularity as businesses seek to reduce development costs and time-to-market. These technologies allow developers to write code once and deploy across multiple platforms while maintaining native performance.
                    </p>
                  </div>

                  <div className="bg-slate-800/30 border border-blue-400/20 rounded-xl p-6 backdrop-blur-sm">
                    <h3 className="text-2xl  text-white mb-3">3. 5G Integration</h3>
                    <p className="text-blue-100/90 leading-relaxed">
                      With 5G networks becoming more widespread, mobile apps can leverage faster data speeds and lower latency. This enables new possibilities for real-time applications, augmented reality experiences, and cloud-based processing.
                    </p>
                  </div>

                  <div className="bg-slate-800/30 border border-blue-400/20 rounded-xl p-6 backdrop-blur-sm">
                    <h3 className="text-2xl  text-white mb-3">4. Enhanced Security Features</h3>
                    <p className="text-blue-100/90 leading-relaxed">
                      Security remains a top priority with biometric authentication, end-to-end encryption, and zero-trust security models becoming standard. Apps are implementing advanced security measures to protect user data and maintain privacy.
                    </p>
                  </div>
                </div>

                <h2 className="text-3xl  text-white mb-4 mt-8 flex items-center">
                  <Zap className="w-8 h-8 mr-3 text-blue-400" />
                  Emerging Technologies
                </h2>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-slate-800/30 border border-blue-400/20 backdrop-blur-sm rounded-xl p-6">
                    <h4 className="text-xl  text-white mb-3">Augmented Reality (AR)</h4>
                    <p className="text-blue-100/90">AR integration is becoming more accessible, enabling immersive experiences in retail, education, and entertainment apps.</p>
                  </div>
                  <div className="bg-slate-800/30 border border-blue-400/20 backdrop-blur-sm rounded-xl p-6">
                    <h4 className="text-xl  text-white mb-3">Internet of Things (IoT)</h4>
                    <p className="text-blue-100/90">Mobile apps are increasingly serving as control centers for IoT devices, from smart homes to industrial applications.</p>
                  </div>
                  <div className="bg-slate-800/30 border border-blue-400/20 backdrop-blur-sm rounded-xl p-6">
                    <h4 className="text-xl  text-white mb-3">Blockchain Integration</h4>
                    <p className="text-blue-100/90">Blockchain technology is being integrated for secure transactions, digital identity verification, and decentralized applications.</p>
                  </div>
                  <div className="bg-slate-800/30 border border-blue-400/20 backdrop-blur-sm rounded-xl p-6">
                    <h4 className="text-xl  text-white mb-3">Voice User Interface</h4>
                    <p className="text-blue-100/90">Voice commands and conversational interfaces are becoming more sophisticated, offering hands-free app interactions.</p>
                  </div>
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
            <Link to="/custom-software-development-business" className="group">
              <article className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-blue-400/20 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <img 
                  src="/blogs/blog4.png" 
                  alt="Custom Software Development"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">Software Development</span>
                  <h3 className="text-xl  text-white mt-4 mb-2 group-hover:text-blue-400 transition-colors">
                    CUSTOM SOFTWARE DEVELOPMENT: TRANSFORMING BUSINESS ...
                  </h3>
                  <div className="flex items-center text-sm text-blue-300/70 mb-3">
                    <User className="w-4 h-4 mr-1" />
                    <span className="mr-4">Development Team</span>
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>10/06/2025</span>
                  </div>
                  <p className="text-blue-400 ">Read More →</p>
                </div>
              </article>
            </Link>

            <Link to="/healthcare-app-development-patient-care" className="group">
              <article className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-blue-400/20 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <img 
                  src="/blogs/blog6.jpg" 
                  alt="Healthcare App Development"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">Healthcare</span>
                  <h3 className="text-xl  text-white mt-4 mb-2 group-hover:text-blue-400 transition-colors">
                    HEALTHCARE APP DEVELOPMENT: REVOLUTIONIZING PATIENT CARE
                  </h3>
                  <div className="flex items-center text-sm text-blue-300/70 mb-3">
                    <User className="w-4 h-4 mr-1" />
                    <span className="mr-4">Healthcare Team</span>
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>05/06/2025</span>
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

export default MobileAppTrends2025;