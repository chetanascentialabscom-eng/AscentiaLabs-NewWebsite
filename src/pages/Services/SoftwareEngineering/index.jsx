import { useState } from 'react';
import { 
  Code, 
  Shield, 
  ChevronDown, 
  ChevronUp, 
  Cpu, 
  Database, 
  Cloud, 
  TrendingUp,
  Zap,
  Lock,
  Layers,
  Smartphone,
  Workflow,
  Award,
  ArrowRight,
  MessageSquare,
  Monitor,
  Globe,
  Settings
} from 'lucide-react';

const SoftwareEngineering = () => {
  const [activeTab, setActiveTab] = useState('web');
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  const whyChooseUs = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Proven Experience in Software Development",
      description: "Ascentia Labs boasts a proven track record in crafting innovative, secure and scalable software solutions. With 10+ years of experience, our team of experts have helped businesses across various industries by leveraging the power of modern technology."
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Security-Focused Approach",
      description: "We prioritize protecting your data and infrastructure with industry-leading security protocols. Our software solutions leverage robust encryption and adhere to top security certifications. This ensures your implementation is a reliable and trustworthy foundation."
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
      icon: <Zap className="w-7 h-7" />,
      title: "Cost-Effective Solutions",
      description: "We deliver exceptional value with competitive pricing models that fit your budget, focusing on increased efficiency, reduced operational costs, and maximum ROI for your investment."
    }
  ];

  const services = [
    {
      id: 'web',
      name: 'Web Development',
      icon: <Globe className="w-5 h-5" />,
      title: 'Custom Web Application Development',
      description: 'Our web development experts create secure, responsive and efficient web applications, facilitating seamless user experiences, optimizing performance, and ensuring cross-platform compatibility, to enhance business operations and customer engagement.',
      techLogos: [
        '/techLogo/React.png',
        '/techLogo/Angular.png',
        '/techLogo/Vue Js.png',
        '/techLogo/next js.png',
        '/techLogo/node js.png',
        '/techLogo/typescript.png'
      ]
    },
    {
      id: 'mobile',
      name: 'Mobile Development',
      icon: <Smartphone className="w-5 h-5" />,
      title: 'Native & Cross-Platform Mobile Apps',
      description: 'Our mobile development experts build secure, intuitive and efficient mobile applications, facilitating native and cross-platform solutions, optimizing user experience, and ensuring seamless performance, to enhance customer engagement and business growth.',
      techLogos: [
        '/techLogo/React.png',
        '/techLogo/flutter.png',
        '/techLogo/swift.png',
        '/techLogo/kotlin.png',
        '/techLogo/Firebase.png',
        '/techLogo/node js.png'
      ]
    },
    {
      id: 'backend',
      name: 'Backend Systems',
      icon: <Database className="w-5 h-5" />,
      title: 'Robust Backend Architecture',
      description: 'Our backend experts develop secure, scalable and efficient server-side solutions, facilitating reliable APIs, optimizing database management, and ensuring high-performance infrastructure, to enhance application reliability and operational excellence.',
      techLogos: [
        '/techLogo/node js.png',
        '/techLogo/python.png',
        '/techLogo/Java.png',
        '/techLogo/mongo db.png',
        '/techLogo/mysql.png',
        '/techLogo/aws.png'
      ]
    },
    {
      id: 'devops',
      name: 'DevOps & Cloud',
      icon: <Cloud className="w-5 h-5" />,
      title: 'DevOps & Cloud Infrastructure',
      description: 'Our DevOps experts implement secure, automated and efficient CI/CD pipelines, facilitating cloud deployment, optimizing infrastructure management, and ensuring continuous delivery, to enhance development velocity and operational efficiency.',
      techLogos: [
        '/techLogo/aws.png',
        '/techLogo/microsoft azure.png',
        '/techLogo/google cloud.png',
        '/techLogo/oracle cloud.png',
        '/techLogo/Firebase.png',
        '/techLogo/go.png'
      ]
    }
  ];

  const stats = [
    { number: '250+', label: 'Projects Delivered' },
    { number: '50+', label: 'Software Engineers' },
    { number: '10+', label: 'Years In the Industry' },
    { number: '80+', label: 'Countries Empowered' }
  ];

  const [activeTechCategory, setActiveTechCategory] = useState(0);

  const techCategories = [
    {
      category: "Frontend Development",
      technologies: [
        { name: 'React', logo: '/techLogo/React.png', description: 'UI library' },
        { name: 'Angular', logo: '/techLogo/Angular.png', description: 'Framework' },
        { name: 'Vue.js', logo: '/techLogo/Vue Js.png', description: 'Progressive framework' },
        { name: 'Next.js', logo: '/techLogo/next js.png', description: 'React framework' },
        { name: 'TypeScript', logo: '/techLogo/typescript.png', description: 'Typed JavaScript' },
        { name: 'Tailwind CSS', logo: '/techLogo/tailwind css.png', description: 'Utility CSS' }
      ]
    },
    {
      category: "Backend Development",
      technologies: [
        { name: 'Node.js', logo: '/techLogo/node js.png', description: 'JavaScript runtime' },
        { name: 'Python', logo: '/techLogo/python.png', description: 'Versatile language' },
        { name: 'Java', logo: '/techLogo/Java.png', description: 'Enterprise language' },
        { name: 'PHP', logo: '/techLogo/php.png', description: 'Web development' },
        { name: 'Go', logo: '/techLogo/go.png', description: 'Google language' },
        { name: '.NET', logo: '/techLogo/net.png', description: 'Microsoft framework' }
      ]
    },
    {
      category: "Mobile Development",
      technologies: [
        { name: 'React Native', logo: '/techLogo/React.png', description: 'Cross-platform' },
        { name: 'Flutter', logo: '/techLogo/flutter.png', description: 'Google framework' },
        { name: 'Swift', logo: '/techLogo/swift.png', description: 'iOS development' },
        { name: 'Kotlin', logo: '/techLogo/kotlin.png', description: 'Android development' }
      ]
    },
    {
      category: "Database & Storage",
      technologies: [
        { name: 'MongoDB', logo: '/techLogo/mongo db.png', description: 'NoSQL database' },
        { name: 'MySQL', logo: '/techLogo/mysql.png', description: 'SQL database' },
        { name: 'Oracle', logo: '/techLogo/oracle logo.png', description: 'Enterprise database' },
        { name: 'Cassandra', logo: '/techLogo/Cassandra.png', description: 'Distributed database' },
        { name: 'Firebase', logo: '/techLogo/Firebase.png', description: 'Google platform' },
        { name: 'PostgreSQL', logo: '/techLogo/python.png', description: 'SQL database' }
      ]
    },
    {
      category: "Cloud & DevOps",
      technologies: [
        { name: 'AWS', logo: '/techLogo/aws.png', description: 'Amazon cloud' },
        { name: 'Microsoft Azure', logo: '/techLogo/microsoft azure.png', description: 'Microsoft cloud' },
        { name: 'Google Cloud', logo: '/techLogo/google cloud.png', description: 'Google cloud' },
        { name: 'Oracle Cloud', logo: '/techLogo/oracle cloud.png', description: 'Oracle cloud' },
        { name: 'Firebase', logo: '/techLogo/Firebase.png', description: 'Google platform' },
        { name: 'Salesforce', logo: '/techLogo/salesforce.png', description: 'CRM platform' }
      ]
    }
  ];

  const faqs = [
    {
      question: "What software development methodologies do you follow?",
      answer: "We primarily follow Agile and Scrum methodologies, ensuring iterative development, continuous feedback, and flexibility. We adapt our approach based on project requirements and can also work with Waterfall or hybrid models as needed."
    },
    {
      question: "How long does it take to develop custom software?",
      answer: "Development timelines vary based on complexity and scope. Simple applications can be delivered in 2-3 months, while complex enterprise solutions may take 6-12 months or more. We provide detailed timelines and milestones during the planning phase."
    },
    {
      question: "Do you provide post-launch support and maintenance?",
      answer: "Yes, we offer comprehensive post-launch support including bug fixes, performance monitoring, security updates, feature enhancements, and technical support to ensure your software continues to perform optimally."
    },
    {
      question: "Can you integrate with our existing systems?",
      answer: "Absolutely. We specialize in system integration and can seamlessly connect your new software with existing platforms, databases, APIs, and third-party services to ensure smooth data flow and operational continuity."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white min-h-screen flex items-center px-4 sm:px-6 lg:px-8 overflow-hidden pt-20 sm:pt-24 lg:pt-0">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 left-20 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 right-40 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto w-full relative z-10 py-8 sm:py-12 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-block px-4 py-2 bg-blue-500/30 rounded-full text-sm font-semibold mb-4 sm:mb-6 backdrop-blur-sm">
                Industry's Favorite
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
                Software Engineering Solutions
              </h1>
              <p className="text-base sm:text-lg text-blue-100 mb-6 sm:mb-8 leading-relaxed">
                At Ascentia Labs, we deliver cutting-edge software engineering solutions that transform your business ideas into reality. Our expert team specializes in building scalable, secure, and high-performance applications using the latest technologies and best practices in software development.
              </p>
              <div className="mb-8 sm:mb-12">
                <button className="px-10 py-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-full hover:from-blue-700 hover:to-blue-900 transition-all duration-300 font-bold shadow-lg hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 inline-flex items-center gap-2">
                  Get Consultation
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>

              {/* Stats - Mobile/Tablet */}
              <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:hidden">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 transform hover:scale-105 transition-transform duration-300">
                    <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.number}</div>
                    <div className="text-blue-200 text-xs sm:text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Visual Content - Service Cards Grid */}
            <div className="mt-8 lg:mt-0">
              {/* Central Feature Badge - At Top */}
              <div className="flex justify-center mb-6 animate-fadeIn">
                <div className="bg-white/15 backdrop-blur-lg rounded-full border border-white/30 shadow-2xl px-5 py-2.5 hover:scale-105 transition-transform duration-300 cursor-pointer">
                  <div className="flex items-center gap-2.5">
                    <Code className="w-7 h-7 text-white animate-pulse" />
                    <h3 className="text-sm sm:text-base font-bold text-white">Software Engineering Excellence</h3>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {/* Card 1 - Web Development */}
                <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 shadow-xl p-5 sm:p-6 cursor-pointer group flex flex-col items-center justify-center text-center min-h-[140px] sm:min-h-[160px] transition-all duration-500 hover:scale-105 hover:-translate-y-3 hover:bg-white/25 hover:border-white/60 hover:shadow-2xl hover:shadow-blue-500/50 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/0 to-blue-600/0 group-hover:from-blue-400/20 group-hover:to-blue-600/10 transition-all duration-500 rounded-2xl"></div>
                  <Globe className="w-12 h-12 sm:w-14 sm:h-14 text-white mb-3 transition-all duration-500 group-hover:scale-110 group-hover:-rotate-6 relative z-10" />
                  <h4 className="text-sm sm:text-base font-bold text-white mb-1.5 relative z-10">Web Development</h4>
                  <p className="text-xs text-blue-100 leading-tight relative z-10 group-hover:text-white transition-colors duration-300">Modern web apps</p>
                </div>

                {/* Card 2 - Mobile Development */}
                <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 shadow-xl p-5 sm:p-6 cursor-pointer group flex flex-col items-center justify-center text-center min-h-[140px] sm:min-h-[160px] transition-all duration-500 hover:scale-105 hover:-translate-y-3 hover:bg-white/25 hover:border-white/60 hover:shadow-2xl hover:shadow-blue-500/50 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/0 to-purple-600/0 group-hover:from-blue-400/20 group-hover:to-purple-600/10 transition-all duration-500 rounded-2xl"></div>
                  <Smartphone className="w-12 h-12 sm:w-14 sm:h-14 text-white mb-3 transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-2 relative z-10" />
                  <h4 className="text-sm sm:text-base font-bold text-white mb-1.5 relative z-10">Mobile Development</h4>
                  <p className="text-xs text-blue-100 leading-tight relative z-10 group-hover:text-white transition-colors duration-300">iOS & Android apps</p>
                </div>

                {/* Card 3 - Backend Systems */}
                <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 shadow-xl p-5 sm:p-6 cursor-pointer group flex flex-col items-center justify-center text-center min-h-[140px] sm:min-h-[160px] transition-all duration-500 hover:scale-105 hover:-translate-y-3 hover:bg-white/25 hover:border-white/60 hover:shadow-2xl hover:shadow-blue-500/50 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-400/0 to-blue-600/0 group-hover:from-indigo-400/20 group-hover:to-blue-600/10 transition-all duration-500 rounded-2xl"></div>
                  <Database className="w-12 h-12 sm:w-14 sm:h-14 text-white mb-3 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 relative z-10" />
                  <h4 className="text-sm sm:text-base font-bold text-white mb-1.5 relative z-10">Backend Systems</h4>
                  <p className="text-xs text-blue-100 leading-tight relative z-10 group-hover:text-white transition-colors duration-300">Robust architecture</p>
                </div>

                {/* Card 4 - DevOps & Cloud */}
                <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 shadow-xl p-5 sm:p-6 cursor-pointer group flex flex-col items-center justify-center text-center min-h-[140px] sm:min-h-[160px] transition-all duration-500 hover:scale-105 hover:-translate-y-3 hover:bg-white/25 hover:border-white/60 hover:shadow-2xl hover:shadow-blue-500/50 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/0 to-blue-600/0 group-hover:from-cyan-400/20 group-hover:to-blue-600/10 transition-all duration-500 rounded-2xl"></div>
                  <Cloud className="w-12 h-12 sm:w-14 sm:h-14 text-white mb-3 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 relative z-10" />
                  <h4 className="text-sm sm:text-base font-bold text-white mb-1.5 relative z-10">DevOps & Cloud</h4>
                  <p className="text-xs text-blue-100 leading-tight relative z-10 group-hover:text-white transition-colors duration-300">Automated deployment</p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats - Desktop */}
          <div className="hidden lg:grid grid-cols-4 gap-8 mt-20 pt-12 border-t border-blue-400/30">
            {stats.map((stat, index) => (
              <div key={index} className="text-center transform hover:scale-110 transition-transform duration-300 cursor-pointer">
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
          @keyframes fadeIn {
            from { 
              opacity: 0; 
              transform: translateY(30px) scale(0.95); 
            }
            to { 
              opacity: 1; 
              transform: translateY(0) scale(1); 
            }
          }
          @keyframes gentleFloat {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-8px); }
          }
          .animate-float {
            animation: float 3s ease-in-out infinite;
          }
          .animate-blob {
            animation: blob 7s infinite;
          }
          .animate-fadeIn {
            animation: fadeIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
            animation-fill-mode: forwards;
          }
          .animation-delay-1000 {
            animation-delay: 0.2s;
          }
          .animation-delay-2000 {
            animation-delay: 0.4s;
          }
          .animation-delay-3000 {
            animation-delay: 0.6s;
          }
          .animation-delay-4000 {
            animation-delay: 4s;
          }
        `}</style>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-black bg-clip-text text-transparent">
              Why Ascentia Labs?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Experience the advantages of working with software engineering experts who understand your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, index) => (
              <div 
                key={index} 
                className="group relative bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:border-blue-500 transform hover:-translate-y-2 overflow-hidden"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  {/* Icon and Title in one line */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 text-white transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                      {item.icon}
                    </div>
                    
                    <h3 className="text-lg font-bold bg-gradient-to-r from-blue-600 to-gray-900 bg-clip-text text-transparent group-hover:from-blue-700 group-hover:to-black transition-all duration-300 leading-tight">
                      {item.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed text-sm group-hover:text-gray-800 transition-colors duration-300">
                    {item.description}
                  </p>

                  {/* Decorative element */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-600/10 to-black/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Tabs Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Our Software Engineering Services
            </h2>
            <p className="text-base sm:text-lg text-gray-400 max-w-3xl mx-auto">
              Comprehensive software development solutions tailored to your business needs
            </p>
          </div>

          {/* Service Tabs - Compact */}
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-3 mb-12">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveTab(service.id)}
                className={`group relative px-3 sm:px-5 py-3 rounded-full font-semibold text-xs sm:text-sm transition-all duration-300 transform hover:scale-105 ${
                  activeTab === service.id
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/50'
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-800 border border-gray-700 hover:border-gray-600'
                }`}
              >
                <span className="inline-flex items-center gap-1 sm:gap-2">
                  {service.icon}
                  <span className="whitespace-nowrap">{service.name}</span>
                </span>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          {services.map((service) => (
            activeTab === service.id && (
              <div key={service.id} className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center animate-fadeIn">
                <div className="order-2 lg:order-1">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
                    {service.title}
                  </h3>
                  <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-6 sm:mb-8">
                    {service.description}
                  </p>
                 
                </div>
                <div className="order-1 lg:order-2">
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 p-8">
                    {/* Tech Logos Grid */}
                    <div className="grid grid-cols-3 gap-6">
                      {service.techLogos.map((logo, index) => (
                        <div 
                          key={index}
                          className="flex items-center justify-center p-4 bg-white rounded-2xl border border-gray-600 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 hover:scale-110 group"
                        >
                          <img 
                            src={logo} 
                            alt="Technology" 
                            className="w-full h-12 object-contain transition-all duration-300"
                          />
                        </div>
                      ))}
                    </div>
                    {/* Decorative elements */}
                    <div className="absolute top-4 right-4 w-20 h-20 bg-blue-500/10 rounded-full blur-2xl"></div>
                    <div className="absolute bottom-4 left-4 w-16 h-16 bg-blue-400/10 rounded-full blur-xl"></div>
                  </div>
                </div>
              </div>
            )
          ))}
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Technology Stack for the
              <span className="block bg-gradient-to-r from-blue-600 to-black bg-clip-text text-transparent mt-2">Transformation of Your Business</span>
            </h2>
            <p className="text-lg text-gray-600 mt-4">Leveraging cutting-edge technologies to deliver exceptional results</p>
          </div>

          {/* Category Navigation */}
          <div className="mb-12 overflow-x-auto">
            <div className="flex space-x-3 min-w-max justify-center">
              {techCategories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTechCategory(index)}
                  className={`px-6 py-3 text-sm font-medium rounded-full whitespace-nowrap transition-all duration-300 ${
                    activeTechCategory === index
                      ? 'bg-gradient-to-r from-blue-600 to-black text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  {category.category}
                </button>
              ))}
            </div>
          </div>

          {/* Technology Grid */}
          {techCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className={`transition-all duration-300 ${
                activeTechCategory === categoryIndex ? 'opacity-100 block' : 'opacity-0 hidden'
              }`}
            >
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {category.technologies.map((tech, techIndex) => (
                  <div
                    key={techIndex}
                    className="group relative bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 border border-gray-100 hover:border-blue-300"
                  >
                    <div className="flex justify-center mb-4">
                      <div className="w-16 h-16 flex items-center justify-center bg-gray-50 rounded-xl group-hover:bg-gray-100 transition-all duration-300">
                        <img
                          src={tech.logo}
                          alt={tech.name}
                          className="w-12 h-12 object-contain filter group-hover:brightness-110 transition-all duration-300"
                        />
                      </div>
                    </div>
                    <h4 className="text-center text-sm font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                      {tech.name}
                    </h4>
                    <p className="text-center text-xs text-gray-500 group-hover:text-gray-600 transition-colors duration-300">
                      {tech.description}
                    </p>
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-blue-100/20 to-blue-200/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none"></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-black bg-clip-text text-transparent  mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Get answers to common questions about our software engineering services
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl border border-gray-200 overflow-hidden hover:border-blue-300 transition-all duration-300 hover:shadow-lg">
                <button
                  className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-100 transition-colors"
                  onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                >
                  <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                  {expandedFAQ === index ? (
                    <ChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0 transform transition-transform duration-300" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0 transform transition-transform duration-300" />
                  )}
                </button>
                {expandedFAQ === index && (
                  <div className="px-6 pb-5 bg-white animate-fadeIn">
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

export default SoftwareEngineering;
