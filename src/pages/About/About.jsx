import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import { seoData } from '../../utils/seoData';
import LeafletMap from '../../components/LeafletMap';

// Add floating animation styles
const floatingStyles = `
  @keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    25% { transform: translateY(-10px) rotate(2deg); }
    50% { transform: translateY(-5px) rotate(-1deg); }
    75% { transform: translateY(-15px) rotate(1deg); }
  }
  .animate-float {
    animation: float 6s ease-in-out infinite;
  }
  .delay-500 { animation-delay: 0.5s; }
  .delay-1000 { animation-delay: 1s; }
  .delay-1500 { animation-delay: 1.5s; }
  .delay-2000 { animation-delay: 2s; }
`;

// Inject styles
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = floatingStyles;
  document.head.appendChild(styleSheet);
}

const About = () => {
  const [isVisible, setIsVisible] = useState({});

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <SEO {...seoData.about} />

      {/* Hero Section */}
      <section className="h-[85vh] md:h-screen bg-gradient-to-br from-blue-500 via-black to-blue-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-black/20"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-60 h-60 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-black/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-300/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        {/* Floating Icons */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-[15%] left-[10%] md:top-1/4 md:left-1/4 animate-float">
            <svg className="w-6 h-6 md:w-8 md:h-8 text-white/60" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
          </div>
          
          <div className="absolute top-[20%] right-[15%] md:top-1/3 md:right-1/4 animate-float delay-1000">
            <svg className="w-5 h-5 md:w-6 md:h-6 text-blue-300/70" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
            </svg>
          </div>

          <div className="absolute top-[35%] left-[5%] md:bottom-1/3 md:left-1/6 animate-float delay-2000">
            <svg className="w-7 h-7 md:w-10 md:h-10 text-white/50" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
            </svg>
          </div>

          <div className="absolute bottom-[25%] right-[8%] md:top-2/3 md:right-1/6 animate-float delay-1500">
            <svg className="w-4 h-4 md:w-5 md:h-5 text-blue-200/60" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div>

          <div className="absolute bottom-[15%] left-[20%] md:bottom-1/4 md:right-1/3 animate-float delay-500">
            <svg className="w-5 h-5 md:w-7 md:h-7 text-white/40" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>
            </svg>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-7xl relative z-10 h-full flex items-center justify-center pt-8 md:pt-0">
          <div 
            className={`text-center transform transition-all duration-1000 w-full max-w-4xl -mt-8 md:mt-0 ${
              isVisible.hero ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            id="hero"
            data-animate
          >
            {/* Main Icon - Yellow like CTA */}
            <div className="mb-4 md:mb-6 flex justify-center">
              <div className="relative bg-yellow-400 rounded-full p-3 md:p-4 shadow-lg">
                <svg className="w-8 h-8 md:w-12 md:h-12 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"/>
                </svg>
              </div>
            </div>

            <div className="inline-block mb-3 md:mb-4">
              <span className="bg-gradient-to-r from-blue-300 to-white bg-clip-text text-transparent text-sm md:text-base  tracking-wider uppercase">
                Driving Excellence
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl  text-white mb-4 md:mb-8 leading-tight">
              Building
              <span className="block bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                Tomorrow
              </span>
            </h1>

            {/* Decorative Elements */}
            <div className="flex justify-center items-center space-x-4 md:space-x-8 mt-4 md:mt-8">
              <div className="w-12 md:w-16 h-1 bg-gradient-to-r from-transparent via-blue-300 to-transparent"></div>
              <div className="w-2 h-2 md:w-3 md:h-3 bg-blue-300 rounded-full animate-pulse"></div>
              <div className="w-12 md:w-16 h-1 bg-gradient-to-r from-transparent via-blue-300 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-16 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-500/5 to-black/10"></div>
          <div className="absolute top-10 left-10 w-40 h-40 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-60 h-60 bg-black/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div 
              className={`transform transition-all duration-1000 delay-500 ${
                isVisible.whoWeAre ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              id="whoWeAre"
              data-animate
            >
              <div className="inline-block mb-4">
                <span className="bg-gradient-to-r from-blue-300 to-blue-500 bg-clip-text text-transparent text-sm  tracking-wider uppercase">
                  Our Story
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl  mb-8 leading-tight">
                <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                  Who We Are
                </span>
              </h2>
              <p className="text-base md:text-2xl text-gray-200 leading-relaxed mb-6">
                At Ascentia Labs, we excel in fostering collaboration and innovation, leveraging cutting-edge 
                technologies to craft tailored, industry-specific solutions. With a steadfast commitment to 
                redefining industry standards, we empower our clients to achieve unparalleled business 
                growth and success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-12 bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-black/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div 
            className={`text-center mb-12 transform transition-all duration-1000 ${
              isVisible.values ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            id="values"
            data-animate
          >
            <div className="inline-block mb-3">
              <span className="bg-gradient-to-r from-blue-300 to-blue-500 bg-clip-text text-transparent text-sm  tracking-wider uppercase">
                Our Foundation
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl  mb-6">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
              We build trust through excellence, drive innovation through collaboration, and deliver results that matter.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
                  </svg>
                ),
                title: 'Our Mission',
                description: 'Empowering businesses through innovative technology solutions that drive growth, efficiency, and competitive advantage.',
                gradient: 'from-blue-400 to-blue-600'
              },
              {
                icon: (
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                  </svg>
                ),
                title: 'Our Vision',
                description: 'To be the global leader in transforming business challenges into breakthrough technology solutions that shape the future.',
                gradient: 'from-blue-500 to-black'
              },
              {
                icon: (
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ),
                title: 'Our Values',
                description: 'Excellence, integrity, innovation, and client success. These values guide every decision we make and every solution we deliver.',
                gradient: 'from-black to-gray-800'
              }
            ].map((value, index) => (
              <div 
                key={index}
                className={`group transform transition-all duration-700 delay-${(index + 1) * 200} ${
                  isVisible.values ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
              >
                <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-6 hover:from-gray-700/50 hover:to-gray-800/50 transition-all duration-500 border border-gray-700/50 hover:border-gray-600/50 group-hover:scale-105 group-hover:shadow-2xl">
                  {/* Icon container */}
                  <div className={`w-12 h-12 bg-gradient-to-r ${value.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    {value.icon}
                  </div>
                  
                  <h3 className="text-xl  mb-4 text-white group-hover:text-gray-100 transition-colors">
                    {value.title}
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors text-sm">
                    {value.description}
                  </p>
                  
                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-gray-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Yellow Button */}
      <section className="py-12 bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-500/5 to-black/5"></div>
          <div className="absolute top-10 right-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        </div>
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div 
            className={`flex flex-col md:flex-row items-center justify-between transform transition-all duration-1000 ${
              isVisible.cta ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            id="cta"
            data-animate
          >
            <div className="flex items-center mb-6 md:mb-0">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mr-4 animate-pulse">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <div>
                <div className="text-blue-200 text-xs  mb-1 tracking-wider uppercase">Let's Get in Touch</div>
                <h2 className="text-2xl md:text-3xl  leading-tight">
                  Ready to Transform
                  <span className="block">Your Business?</span>
                </h2>
              </div>
            </div>
            <Link 
              to="/contact-us" 
              className="bg-yellow-400 text-black hover:bg-yellow-300 px-8 py-3 rounded-full  transition-all duration-300 hover:scale-105 shadow-2xl flex items-center group"
            >
              GET IN TOUCH
              <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Interactive Map Section - Our Location (Unchanged) */}
      <section className="py-12 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="container mx-auto px-4 max-w-7xl">
          <LeafletMap />
        </div>
      </section>

      {/* Bridging Ideas Section */}
      <section className="py-16 bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-500/5 to-black/5"></div>
          <div className="absolute top-20 left-20 w-60 h-60 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-black/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div 
            className={`text-center transform transition-all duration-1000 ${
              isVisible.bridging ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            id="bridging"
            data-animate
          >
            <h2 className="text-4xl md:text-5xl  mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-300 via-blue-500 to-blue-400 bg-clip-text text-transparent">
                Bridging Ideas
              </span>
              <span className="block text-white">With Technology</span>
            </h2>
            <div className="space-y-3 max-w-4xl mx-auto">
              <p className="text-lg md:text-xl  text-gray-300">
                Where Innovation Meets Excellence
              </p>
              <p className="text-lg md:text-xl  bg-gradient-to-r from-blue-300 to-blue-500 bg-clip-text text-transparent">
                Delivering Solutions That Drive Success
              </p>
            </div>
          </div>
        </div>
      </section>
     
    </div>
  );
};

export default About;