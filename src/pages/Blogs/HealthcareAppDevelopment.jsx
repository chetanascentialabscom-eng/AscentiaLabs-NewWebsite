import { Link } from 'react-router-dom';
import { Calendar, User, Clock, ArrowLeft, Share2, Tag, Heart, Shield } from 'lucide-react';

const HealthcareAppDevelopment = () => {
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
                Healthcare
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-800 leading-tight">
              Healthcare App Development: Revolutionizing Patient Care
            </h1>
            
            <div className="flex flex-wrap items-center text-gray-600 mb-8 gap-6">
              <div className="flex items-center">
                <User className="w-5 h-5 mr-2" />
                <span>Healthcare Team</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                <span>05/06/2024</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                <span>7 min read</span>
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
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Healthcare App Development"
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
                  Healthcare app development is transforming the medical industry by making healthcare more accessible, efficient, and patient-centered. From telemedicine platforms to health monitoring apps, technology is revolutionizing how we approach healthcare delivery and patient care.
                </p>

                <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
                  <Heart className="w-8 h-8 mr-3 text-red-500" />
                  The Impact of Healthcare Apps
                </h2>

                <div className="space-y-8">
                  <div className="bg-red-50 rounded-xl p-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Improved Patient Access</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Healthcare apps break down geographical barriers, allowing patients to access medical consultations, prescriptions, and health monitoring from anywhere. This is particularly valuable for patients in remote areas or those with mobility limitations.
                    </p>
                  </div>

                  <div className="bg-blue-50 rounded-xl p-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Enhanced Patient Engagement</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Mobile health apps encourage patients to take an active role in their healthcare through medication reminders, symptom tracking, and educational resources. This leads to better health outcomes and improved treatment adherence.
                    </p>
                  </div>

                  <div className="bg-green-50 rounded-xl p-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Streamlined Healthcare Operations</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Healthcare apps optimize administrative processes, reduce paperwork, and improve communication between healthcare providers. This results in more efficient operations and reduced costs for healthcare institutions.
                    </p>
                  </div>

                  <div className="bg-purple-50 rounded-xl p-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Real-time Health Monitoring</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Integration with wearable devices and IoT sensors enables continuous health monitoring, allowing for early detection of health issues and proactive medical interventions.
                    </p>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12 flex items-center">
                  <Shield className="w-8 h-8 mr-3 text-blue-600" />
                  Key Features of Modern Healthcare Apps
                </h2>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6">
                    <h4 className="text-xl font-bold text-gray-800 mb-3">Telemedicine Integration</h4>
                    <p className="text-gray-700">Video consultations, chat support, and remote diagnosis capabilities for comprehensive virtual care.</p>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6">
                    <h4 className="text-xl font-bold text-gray-800 mb-3">Electronic Health Records</h4>
                    <p className="text-gray-700">Secure storage and easy access to patient medical history, test results, and treatment plans.</p>
                  </div>
                  <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl p-6">
                    <h4 className="text-xl font-bold text-gray-800 mb-3">Appointment Scheduling</h4>
                    <p className="text-gray-700">Automated booking systems with calendar integration and reminder notifications.</p>
                  </div>
                  <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6">
                    <h4 className="text-xl font-bold text-gray-800 mb-3">Prescription Management</h4>
                    <p className="text-gray-700">Digital prescriptions, medication tracking, and pharmacy integration for seamless medication management.</p>
                  </div>
                </div>

                <div className="bg-yellow-50 rounded-xl p-6 mb-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Compliance and Security</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Healthcare apps must comply with strict regulations like HIPAA, GDPR, and FDA guidelines. Security features include end-to-end encryption, secure authentication, and audit trails to protect sensitive patient data.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl p-8 mt-12">
                  <h3 className="text-2xl font-bold mb-4">Transform Healthcare with Technology</h3>
                  <p className="text-lg mb-6">
                    Ready to develop a healthcare app that improves patient outcomes and streamlines medical operations? Our team specializes in HIPAA-compliant healthcare solutions.
                  </p>
                  <Link 
                    to="/healthcare-app-development" 
                    className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Learn More About Our Healthcare Solutions
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

export default HealthcareAppDevelopment;