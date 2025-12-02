import { Link } from 'react-router-dom';
import { Calendar, User, Clock, ArrowLeft, Share2, Tag, Smartphone, Zap } from 'lucide-react';

const MobileAppTrends2025 = () => {
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
                Mobile Development
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-800 leading-tight">
              Mobile App Development Trends for 2025
            </h1>
            
            <div className="flex flex-wrap items-center text-gray-600 mb-8 gap-6">
              <div className="flex items-center">
                <User className="w-5 h-5 mr-2" />
                <span>Mobile Team</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                <span>08/06/2024</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                <span>9 min read</span>
              </div>
              <button className="flex items-center text-blue-600 hover:text-blue-700 transition-colors">
                <Share2 className="w-5 h-5 mr-2" />
                <span>Share</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <img 
              src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Mobile App Development Trends 2025"
              className="w-full h-96 object-cover rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-lg max-w-none">
              <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  The mobile app development landscape is evolving rapidly, with new technologies and trends shaping how we build and interact with mobile applications. As we move into 2025, several key trends are emerging that will define the future of mobile development.
                </p>

                <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
                  <Smartphone className="w-8 h-8 mr-3 text-blue-600" />
                  Key Trends Shaping Mobile Development
                </h2>

                <div className="space-y-8">
                  <div className="bg-blue-50 rounded-xl p-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">1. AI-Powered Mobile Apps</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Artificial Intelligence integration is becoming standard in mobile apps. From personalized user experiences to predictive analytics, AI is transforming how apps understand and serve users. Machine learning algorithms are enabling apps to learn from user behavior and provide more relevant content and features.
                    </p>
                  </div>

                  <div className="bg-green-50 rounded-xl p-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">2. Cross-Platform Development</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Frameworks like Flutter, React Native, and .NET MAUI are gaining popularity as businesses seek to reduce development costs and time-to-market. These technologies allow developers to write code once and deploy across multiple platforms while maintaining native performance.
                    </p>
                  </div>

                  <div className="bg-purple-50 rounded-xl p-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">3. 5G Integration</h3>
                    <p className="text-gray-700 leading-relaxed">
                      With 5G networks becoming more widespread, mobile apps can leverage faster data speeds and lower latency. This enables new possibilities for real-time applications, augmented reality experiences, and cloud-based processing.
                    </p>
                  </div>

                  <div className="bg-orange-50 rounded-xl p-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">4. Enhanced Security Features</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Security remains a top priority with biometric authentication, end-to-end encryption, and zero-trust security models becoming standard. Apps are implementing advanced security measures to protect user data and maintain privacy.
                    </p>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12 flex items-center">
                  <Zap className="w-8 h-8 mr-3 text-blue-600" />
                  Emerging Technologies
                </h2>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6">
                    <h4 className="text-xl font-bold text-gray-800 mb-3">Augmented Reality (AR)</h4>
                    <p className="text-gray-700">AR integration is becoming more accessible, enabling immersive experiences in retail, education, and entertainment apps.</p>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6">
                    <h4 className="text-xl font-bold text-gray-800 mb-3">Internet of Things (IoT)</h4>
                    <p className="text-gray-700">Mobile apps are increasingly serving as control centers for IoT devices, from smart homes to industrial applications.</p>
                  </div>
                  <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl p-6">
                    <h4 className="text-xl font-bold text-gray-800 mb-3">Blockchain Integration</h4>
                    <p className="text-gray-700">Blockchain technology is being integrated for secure transactions, digital identity verification, and decentralized applications.</p>
                  </div>
                  <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6">
                    <h4 className="text-xl font-bold text-gray-800 mb-3">Voice User Interface</h4>
                    <p className="text-gray-700">Voice commands and conversational interfaces are becoming more sophisticated, offering hands-free app interactions.</p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl p-8 mt-12">
                  <h3 className="text-2xl font-bold mb-4">Ready to Build the Future?</h3>
                  <p className="text-lg mb-6">
                    Stay ahead of the curve with cutting-edge mobile app development. Our team specializes in implementing the latest trends and technologies to create innovative mobile solutions.
                  </p>
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Get Started Today
                    <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MobileAppTrends2025;