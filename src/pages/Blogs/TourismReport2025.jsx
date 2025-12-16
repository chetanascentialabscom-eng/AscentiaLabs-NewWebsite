import { Link } from 'react-router-dom';
import { Calendar, User, Clock, ArrowLeft, Share2, Tag, TrendingUp, BarChart3 } from 'lucide-react';
import SEO from '../../components/SEO';
import { seoData } from '../../utils/seoData';

const TourismReport2025 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100">
      <SEO {...seoData.tourismReport2025} />
      {/* Hero Section */}
      <section className="relative pt-32 md:pt-40 pb-12 lg:pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-40 left-20 w-24 h-24 bg-blue-400/15 rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <Link 
              to="/blog" 
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blogs
            </Link>
            
            <div className="mb-6">
              <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium inline-flex items-center">
                <Tag className="w-3 h-3 mr-2" />
                Travel
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-800 leading-tight">
              Latest Tourism Report [2025] New Insights in the Travel Industry
            </h1>
            
            <div className="flex flex-wrap items-center text-gray-600 mb-8 gap-6">
              <div className="flex items-center">
                <User className="w-5 h-5 mr-2" />
                <span>Arham Jain</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                <span>15/06/2025</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                <span>5 min read</span>
              </div>
              {/* <button className="flex items-center text-blue-600 hover:text-blue-700 transition-colors">
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
            <article className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
              {/* Featured Image */}
              <div className="mb-6">
                <img 
                  src="/blogs/blog2.jpg" 
                  alt="Tourism Report 2025"
                  className="w-full h-64 md:h-96 object-cover rounded-xl"
                />
              </div>

              {/* Article Content */}
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-600 leading-relaxed mb-6">
                  The travel and tourism industry continues to evolve rapidly in 2025, driven by technological innovations, changing consumer preferences, and emerging market trends. This comprehensive report provides insights into the latest developments shaping the future of travel.
                </p>

                <h2 className="text-3xl font-bold text-gray-800 mb-4 mt-8">Key Industry Statistics for 2025</h2>
                
                <div className="grid md:grid-cols-2 gap-6 my-6">
                  <div className="bg-blue-50 p-6 rounded-xl">
                    <div className="flex items-center mb-4">
                      <TrendingUp className="w-8 h-8 text-blue-600 mr-3" />
                      <h3 className="text-xl font-bold text-gray-800">Market Growth</h3>
                    </div>
                    <p className="text-3xl font-bold text-blue-600 mb-2">15.2%</p>
                    <p className="text-gray-600">Expected annual growth rate in travel app usage</p>
                  </div>
                  
                  <div className="bg-green-50 p-6 rounded-xl">
                    <div className="flex items-center mb-4">
                      <BarChart3 className="w-8 h-8 text-green-600 mr-3" />
                      <h3 className="text-xl font-bold text-gray-800">Digital Adoption</h3>
                    </div>
                    <p className="text-3xl font-bold text-green-600 mb-2">78%</p>
                    <p className="text-gray-600">Of travelers now use mobile apps for booking</p>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-gray-800 mb-4 mt-8">Emerging Travel Trends</h2>
                
                <h3 className="text-2xl font-bold text-gray-800 mb-3 mt-6">1. Sustainable Tourism</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Environmental consciousness is driving a significant shift towards sustainable travel options. Travelers are increasingly choosing eco-friendly accommodations, carbon-neutral transportation, and destinations that prioritize environmental conservation.
                </p>

                <h3 className="text-2xl font-bold text-gray-800 mb-3 mt-6">2. AI-Powered Personalization</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Artificial Intelligence is revolutionizing how travel experiences are curated. From personalized itinerary recommendations to dynamic pricing models, AI is making travel more efficient and tailored to individual preferences.
                </p>

                <div className="bg-gradient-to-r from-blue-600 to-black text-white p-6 rounded-xl my-8">
                  <h3 className="text-2xl font-bold mb-6">Usage of Different Travel Apps by Travelers</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-2">45%</div>
                      <div className="text-blue-100">Flight Booking Apps</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-2">38%</div>
                      <div className="text-blue-100">Hotel Booking Apps</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-2">32%</div>
                      <div className="text-blue-100">Travel Planning Apps</div>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-gray-800 mb-4 mt-8">Technology Integration in Travel</h2>
                
                <h3 className="text-2xl font-bold text-gray-800 mb-3 mt-6">Virtual Reality (VR) and Augmented Reality (AR)</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  AR and VR have the potential to completely transform the way we travel the world. In the future, travel apps may include VR and AR elements that allow users to visually explore tourist places, observe famous tourist attractions in 3D, and receive real-time information about their surroundings.
                </p>

                <h3 className="text-2xl font-bold text-gray-800 mb-3 mt-6">Voice Recognition Technology</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  With the popularity and the advancement of AI in voice assistants and with 93.7% of search queries being answered perfectly by voice assistants, it is now possible to say that travel apps may include voice recognition in the coming 2-3 years. This means that users will now have the ability to utilize voice commands to search for accommodations and book flight tickets, hotel bookings, and reservations, which simplifies the entire travel booking process.
                </p>

                <h2 className="text-3xl font-bold text-gray-800 mb-4 mt-8">Future Predictions</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  The travel industry is expected to continue its digital transformation, with mobile applications becoming even more integral to the travel experience. We anticipate increased integration of IoT devices, blockchain technology for secure transactions, and enhanced AI capabilities for predictive travel analytics.
                </p>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <Link 
                    to="/blog" 
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
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Other Blogs</h2>
            <p className="text-gray-600 text-lg">Explore more insights and articles</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Link to="/travel-app-development-in-tourism" className="group">
              <article className="bg-gradient-to-br from-slate-100 to-blue-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <img 
                  src="/blogs/blog1.jpg" 
                  alt="Travel App Development"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">Travel</span>
                  <h3 className="text-xl font-bold text-gray-800 mt-4 mb-2 group-hover:text-blue-600 transition-colors">
                    HOW DID TRAVEL APP DEVELOPMENT BECOME CRUCIAL IN THE TOURISM ...
                  </h3>
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <User className="w-4 h-4 mr-1" />
                    <span className="mr-4">Arham Jain</span>
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>18/06/2025</span>
                  </div>
                  <p className="text-blue-600 font-semibold">Read More →</p>
                </div>
              </article>
            </Link>

            <Link to="/benefits-ai-travel-tourism" className="group">
              <article className="bg-gradient-to-br from-slate-100 to-blue-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <img 
                  src="/blogs/blog3.jpg" 
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
                    <span>12/06/2025</span>
                  </div>
                  <p className="text-blue-600 font-semibold">Read More →</p>
                </div>
              </article>
            </Link>
          </div>
        </div>
      </section>

    
    </div>
  );
};

export default TourismReport2025;