import { useState } from 'react';
import { 
  Lightbulb, 
  Target, 
  BarChart3, 
  Shield, 
  ChevronDown, 
  ChevronUp, 
  Cpu, 
  Database, 
  Cloud, 
  Settings,
  TrendingUp,
  Users,
  Zap,
  CheckCircle,
  Lock,
  Globe,
  Layers,
  Code,
  Server,
  Workflow,
  LineChart,
  Award,
  ArrowRight,
  MessageSquare,
  FileCheck
} from 'lucide-react';

const TechnologyConsultationAndMIS = () => {
  const [activeTab, setActiveTab] = useState('strategic');
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  const whyChooseUs = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Proven Experience in Technology Consulting",
      description: "Ascentia Labs boasts a proven track record in crafting innovative, secure and scalable technology solutions. With 10+ years of experience, our team of experts have helped businesses across various industries by leveraging the power of modern technology."
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Security-Focused Approach",
      description: "We prioritize protecting your data and infrastructure with industry-leading security protocols. Our technology solutions leverage robust encryption and adhere to top security certifications. This ensures your implementation is a reliable and trustworthy foundation."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Scalability & Flexibility",
      description: "Our Experts build scalable solutions designed to grow alongside your business. We utilize flexible and scalable platforms to tailor fit your specific needs. This ensures your solution can adapt to evolving requirements, future-proofing your investment."
    },
    {
      icon: <Workflow className="w-8 h-8" />,
      title: "End-to-End Project Management",
      description: "From initial concept to development, deployment, and ongoing support our experts handle everything. This ensures a smooth and efficient project lifecycle, allowing you to focus on your business while we take care of technical complexities."
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Transparency and Communication",
      description: "At Ascentia Labs, clear communication is key. We believe in keeping you informed every step of the way. Expect regular updates and transparent discussions throughout your project. This fosters trust and ensures your project aligns with your vision."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Competitive Pricing",
      description: "We offer competitive pricing models to fit your budget. But our focus goes beyond cost. We deliver real value for your business: increased efficiency, reduced costs, and enhanced security- all at a price that makes sense."
    }
  ];

  const services = [
    {
      id: 'strategic',
      name: 'Strategic Planning',
      icon: <Lightbulb className="w-6 h-6" />,
      title: 'Strategic Technology Planning',
      description: 'Our technology experts develop secure, transparent and efficient solutions for strategic planning, facilitating trusted roadmaps, optimizing technology infrastructure, and ensuring digital transformation, to enhance business growth and operational excellence.',
      image: '/technology-planning.jpg'
    },
    {
      id: 'mis',
      name: 'MIS Solutions',
      icon: <Database className="w-6 h-6" />,
      title: 'Management Information Systems',
      description: 'Our MIS experts develop secure, integrated and efficient solutions for management information systems, facilitating trusted data management, optimizing reporting processes, and ensuring performance analytics, to enhance decision-making and operational efficiency.',
      image: '/mis-solutions.jpg'
    },
    {
      id: 'cloud',
      name: 'Cloud Strategy',
      icon: <Cloud className="w-6 h-6" />,
      title: 'Cloud Strategy & Migration',
      description: 'Our cloud experts develop secure, scalable and efficient solutions for cloud migration, facilitating trusted platform selection, optimizing cloud infrastructure, and ensuring cost optimization, to enhance business agility and operational excellence.',
      image: '/cloud-strategy.jpg'
    },
    {
      id: 'security',
      name: 'IT Security',
      icon: <Shield className="w-6 h-6" />,
      title: 'IT Security Consulting',
      description: 'Our security experts develop robust, compliant and efficient solutions for IT security, facilitating trusted risk assessments, optimizing security protocols, and ensuring incident response planning, to enhance protection and operational resilience.',
      image: '/security-consulting.jpg'
    }
  ];

  const stats = [
    { number: '250+', label: 'Projects Delivered' },
    { number: '50+', label: 'Technology Experts' },
    { number: '10+', label: 'Years In the Industry' },
    { number: '80+', label: 'Countries Empowered' }
  ];

  const techStack = {
    platforms: [
      { name: 'AWS', icon: <Cloud className="w-8 h-8" /> },
      { name: 'Azure', icon: <Server className="w-8 h-8" /> },
      { name: 'Google Cloud', icon: <Globe className="w-8 h-8" /> },
      { name: 'Oracle', icon: <Database className="w-8 h-8" /> }
    ],
    technologies: [
      { name: 'Python', icon: <Code className="w-8 h-8" /> },
      { name: 'Node.js', icon: <Server className="w-8 h-8" /> },
      { name: 'React', icon: <Layers className="w-8 h-8" /> },
      { name: 'Angular', icon: <Code className="w-8 h-8" /> },
      { name: 'Java', icon: <Code className="w-8 h-8" /> },
      { name: 'PostgreSQL', icon: <Database className="w-8 h-8" /> },
      { name: 'MongoDB', icon: <Database className="w-8 h-8" /> },
      { name: 'Docker', icon: <Layers className="w-8 h-8" /> }
    ]
  };

  const faqs = [
    {
      question: "What is included in a technology consultation?",
      answer: "Our technology consultation includes a comprehensive assessment of your current IT infrastructure, identification of gaps and opportunities, strategic planning for technology investments, and detailed recommendations for implementation."
    },
    {
      question: "How long does a typical MIS implementation take?",
      answer: "MIS implementation timelines vary based on complexity and scope. Simple systems can be deployed in 2-3 months, while comprehensive enterprise solutions may take 6-12 months. We provide detailed timelines during the planning phase."
    },
    {
      question: "Do you provide ongoing support after implementation?",
      answer: "Yes, we offer comprehensive post-implementation support including system maintenance, user training, performance monitoring, and continuous optimization to ensure your technology investments deliver maximum value."
    },
    {
      question: "Can you work with our existing technology stack?",
      answer: "Absolutely. We specialize in integrating with existing systems and can work with virtually any technology stack. Our approach focuses on maximizing your current investments while strategically upgrading where needed."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white min-h-screen flex items-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 left-20 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 right-40 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto w-full relative z-10 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-block px-4 py-2 bg-blue-500/30 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm">
                Industry's Favorite
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold mb-6 leading-tight">
                Technology Consultation & MIS Solutions
              </h1>
              <p className="text-lg  text-blue-100 mb-8 leading-relaxed">
                At Ascentia Labs, we assist our clients in exploring all facets of technology consulting and developing customized solutions that provide tangible value. With our expertise in architecture, digital design, and development, we support our clients in their pursuit of innovative technology solutions that are ready for the market and effectively address real business challenges.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                  Get Started
                  <ArrowRight className="inline-block ml-2 w-5 h-5" />
                </button>
                <button className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white/10 transition-all font-semibold">
                  View Case Studies
                </button>
              </div>

              {/* Stats - Mobile/Tablet */}
              <div className="grid grid-cols-2 gap-6 lg:hidden">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.number}</div>
                    <div className="text-blue-200 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Visual Content */}
            <div className="hidden lg:block">
              <div className="relative">
                {/* Floating Cards */}
                <div className="relative h-[500px]">
                  {/* Main Central Card */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 shadow-2xl flex items-center justify-center">
                    <div className="text-center">
                      <Cpu className="w-24 h-24 text-white mx-auto mb-4" />
                      <h3 className="text-2xl font-bold text-white mb-2">Technology</h3>
                      <p className="text-blue-100">Consulting Excellence</p>
                    </div>
                  </div>

                  {/* Floating Card 1 - Top Left */}
                  <div className="absolute top-0 left-0 w-48 h-48 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 shadow-xl p-6 animate-float">
                    <Database className="w-12 h-12 text-white mb-3" />
                    <h4 className="text-lg font-semibold text-white mb-1">MIS Solutions</h4>
                    <p className="text-sm text-blue-100">Data-driven insights</p>
                  </div>

                  {/* Floating Card 2 - Top Right */}
                  <div className="absolute top-10 right-0 w-44 h-44 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 shadow-xl p-6 animate-float animation-delay-1000">
                    <Cloud className="w-12 h-12 text-white mb-3" />
                    <h4 className="text-lg font-semibold text-white mb-1">Cloud Strategy</h4>
                    <p className="text-sm text-blue-100">Scalable infrastructure</p>
                  </div>

                  {/* Floating Card 3 - Bottom Left */}
                  <div className="absolute bottom-10 left-10 w-44 h-44 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 shadow-xl p-6 animate-float animation-delay-2000">
                    <Shield className="w-12 h-12 text-white mb-3" />
                    <h4 className="text-lg font-semibold text-white mb-1">Security First</h4>
                    <p className="text-sm text-blue-100">Protected systems</p>
                  </div>

                  {/* Floating Card 4 - Bottom Right */}
                  <div className="absolute bottom-0 right-10 w-48 h-48 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 shadow-xl p-6 animate-float animation-delay-3000">
                    <Lightbulb className="w-12 h-12 text-white mb-3" />
                    <h4 className="text-lg font-semibold text-white mb-1">Strategic Planning</h4>
                    <p className="text-sm text-blue-100">Future-ready solutions</p>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute top-20 right-20 w-4 h-4 bg-white rounded-full animate-ping"></div>
                  <div className="absolute bottom-32 left-32 w-3 h-3 bg-blue-300 rounded-full animate-pulse"></div>
                  <div className="absolute top-40 left-20 w-2 h-2 bg-purple-300 rounded-full animate-bounce"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats - Desktop */}
          <div className="hidden lg:grid grid-cols-4 gap-8 mt-20 pt-12 border-t border-blue-400/30">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-blue-200 text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
          @keyframes blob {
            0%, 100% { transform: translate(0, 0) scale(1); }
            33% { transform: translate(30px, -50px) scale(1.1); }
            66% { transform: translate(-20px, 20px) scale(0.9); }
          }
          .animate-float {
            animation: float 3s ease-in-out infinite;
          }
          .animate-blob {
            animation: blob 7s infinite;
          }
          .animation-delay-1000 {
            animation-delay: 1s;
          }
          .animation-delay-2000 {
            animation-delay: 2s;
          }
          .animation-delay-3000 {
            animation-delay: 3s;
          }
          .animation-delay-4000 {
            animation-delay: 4s;
          }
        `}</style>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Ascentia Labs?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Experience the advantages of working with technology experts who understand your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200"
              >
                <div className="text-blue-600 mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-blue-600 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Tabs Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Consultation Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive technology solutions tailored to your business needs
            </p>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveTab(service.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  activeTab === service.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span className="inline-flex items-center gap-2">
                  {service.icon}
                  {service.name}
                </span>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          {services.map((service) => (
            activeTab === service.id && (
              <div key={service.id} className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">
                    {service.title}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <div className="order-1 lg:order-2">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-100 to-blue-200 aspect-video flex items-center justify-center">
                    <div className="text-blue-600">
                      {service.icon && <div className="scale-[3]">{service.icon}</div>}
                    </div>
                  </div>
                </div>
              </div>
            )
          ))}
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Technology Stack for the
              <span className="block text-blue-600">Transformation of Your Business</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Platforms */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Platforms</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {techStack.platforms.map((tech, index) => (
                  <div 
                    key={index}
                    className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all text-center border border-gray-100 hover:border-blue-200"
                  >
                    <div className="text-gray-700 mb-3 flex justify-center">{tech.icon}</div>
                    <div className="text-sm font-medium text-gray-900">{tech.name}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Technologies</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {techStack.technologies.map((tech, index) => (
                  <div 
                    key={index}
                    className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all text-center border border-gray-100 hover:border-blue-200"
                  >
                    <div className="text-gray-700 mb-3 flex justify-center">{tech.icon}</div>
                    <div className="text-sm font-medium text-gray-900">{tech.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Get answers to common questions about our consultation services
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden">
                <button
                  className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-100 transition-colors"
                  onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                >
                  <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                  {expandedFAQ === index ? (
                    <ChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  )}
                </button>
                {expandedFAQ === index && (
                  <div className="px-6 pb-5 bg-white">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

     
    </div>
  );
};

export default TechnologyConsultationAndMIS;
