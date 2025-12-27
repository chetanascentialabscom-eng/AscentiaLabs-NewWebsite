import { Link } from 'react-router-dom';
import { Calendar, User, Clock, ArrowLeft, Share2, Tag, Heart, Shield } from 'lucide-react';
import SEO from '../../components/SEO';
import { seoData } from '../../utils/seoData';

const HealthcareAppDevelopment = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-950 to-black">
      <SEO {...seoData.healthcareAppDevelopmentBlog} />
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
                Healthcare
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl  mb-6 text-white leading-tight">
              Healthcare App Development: Revolutionizing Patient Care
            </h1>
            
            <div className="flex flex-wrap items-center text-blue-200/80 mb-8 gap-6">
              <div className="flex items-center">
                <User className="w-5 h-5 mr-2" />
                <span>Healthcare Team</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                <span>05/06/2025</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                <span>7 min read</span>
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
              src="/blogs/blog6.jpg" 
              alt="Healthcare App Development"
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
                  Healthcare app development is transforming the medical industry by making healthcare more accessible, efficient, and patient-centered. From telemedicine platforms to health monitoring apps, technology is revolutionizing how we approach healthcare delivery and patient care.
                </p>

                <h2 className="text-3xl  text-white mb-4 flex items-center">
                  <Heart className="w-8 h-8 mr-3 text-red-500" />
                  The Impact of Healthcare Apps
                </h2>

                <div className="space-y-6">
                  <div className="bg-slate-800/30 border border-blue-400/20 rounded-xl p-6 backdrop-blur-sm">
                    <h3 className="text-2xl  text-white mb-3">Improved Patient Access</h3>
                    <p className="text-blue-100/90 leading-relaxed">
                      Healthcare apps break down geographical barriers, allowing patients to access medical consultations, prescriptions, and health monitoring from anywhere. This is particularly valuable for patients in remote areas or those with mobility limitations.
                    </p>
                  </div>

                  <div className="bg-slate-800/30 border border-blue-400/20 rounded-xl p-6 backdrop-blur-sm">
                    <h3 className="text-2xl  text-white mb-3">Enhanced Patient Engagement</h3>
                    <p className="text-blue-100/90 leading-relaxed">
                      Mobile health apps encourage patients to take an active role in their healthcare through medication reminders, symptom tracking, and educational resources. This leads to better health outcomes and improved treatment adherence.
                    </p>
                  </div>

                  <div className="bg-slate-800/30 border border-blue-400/20 rounded-xl p-6 backdrop-blur-sm">
                    <h3 className="text-2xl  text-white mb-3">Streamlined Healthcare Operations</h3>
                    <p className="text-blue-100/90 leading-relaxed">
                      Healthcare apps optimize administrative processes, reduce paperwork, and improve communication between healthcare providers. This results in more efficient operations and reduced costs for healthcare institutions.
                    </p>
                  </div>

                  <div className="bg-slate-800/30 border border-blue-400/20 rounded-xl p-6 backdrop-blur-sm">
                    <h3 className="text-2xl  text-white mb-3">Real-time Health Monitoring</h3>
                    <p className="text-blue-100/90 leading-relaxed">
                      Integration with wearable devices and IoT sensors enables continuous health monitoring, allowing for early detection of health issues and proactive medical interventions.
                    </p>
                  </div>
                </div>

                <h2 className="text-3xl  text-white mb-4 mt-8 flex items-center">
                  <Shield className="w-8 h-8 mr-3 text-blue-400" />
                  Key Features of Modern Healthcare Apps
                </h2>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-slate-800/30 border border-blue-400/20 backdrop-blur-sm rounded-xl p-6">
                    <h4 className="text-xl  text-white mb-3">Telemedicine Integration</h4>
                    <p className="text-blue-100/90">Video consultations, chat support, and remote diagnosis capabilities for comprehensive virtual care.</p>
                  </div>
                  <div className="bg-slate-800/30 border border-blue-400/20 backdrop-blur-sm rounded-xl p-6">
                    <h4 className="text-xl  text-white mb-3">Electronic Health Records</h4>
                    <p className="text-blue-100/90">Secure storage and easy access to patient medical history, test results, and treatment plans.</p>
                  </div>
                  <div className="bg-slate-800/30 border border-blue-400/20 backdrop-blur-sm rounded-xl p-6">
                    <h4 className="text-xl  text-white mb-3">Appointment Scheduling</h4>
                    <p className="text-blue-100/90">Automated booking systems with calendar integration and reminder notifications.</p>
                  </div>
                  <div className="bg-slate-800/30 border border-blue-400/20 backdrop-blur-sm rounded-xl p-6">
                    <h4 className="text-xl  text-white mb-3">Prescription Management</h4>
                    <p className="text-blue-100/90">Digital prescriptions, medication tracking, and pharmacy integration for seamless medication management.</p>
                  </div>
                </div>

                <div className="bg-slate-800/30 border border-blue-400/20 rounded-xl p-6 mb-6 backdrop-blur-sm">
                  <h3 className="text-2xl  text-white mb-3">Compliance and Security</h3>
                  <p className="text-blue-100/90 leading-relaxed">
                    Healthcare apps must comply with strict regulations like HIPAA, GDPR, and FDA guidelines. Security features include end-to-end encryption, secure authentication, and audit trails to protect sensitive patient data.
                  </p>
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
                    MOBILE APP DEVELOPMENT TRENDS FOR 2025: THE FUTURE OF DIGITAL ...
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
                  alt="AI in Travel and Tourism"
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

export default HealthcareAppDevelopment;