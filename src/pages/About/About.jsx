import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  
  const images = [
    '/aboutPics/Image 1.jpg',
    '/aboutPics/Image 2.jpg', 
    '/aboutPics/Image 3.jpg',
    '/aboutPics/20241230_123418 1.png',
    '/aboutPics/different.png',
    '/aboutPics/WhatsApp Image 2025-01-16 at 11.33.47 AM (1) 1.png',
    '/aboutPics/WhatsApp Image 2025-01-16 at 11.33.55 AM (1) 1.png',
    '/aboutPics/WhatsApp Image 2025-01-16 at 11.33.56 AM 1.png'
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, []);

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

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-gray-600/5"></div>
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div 
            className={`text-center transform transition-all duration-1000 ${
              isVisible.hero ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            id="hero"
            data-animate
          >
            <div className="inline-block mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-black bg-clip-text text-transparent text-sm font-semibold tracking-wider uppercase">
                About Ascentia Labs
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              Innovating Tomorrow's Solutions
              <span className="block bg-gradient-to-r from-blue-600 to-black bg-clip-text text-transparent">
                Today
              </span>
            </h1>
            <p className="text-base md:text-xl text-gray-700 max-w-5xl mx-auto leading-relaxed mb-10 font-medium">
              At Ascentia Labs, we transform visionary ideas into powerful technological realities. We specialize in 
              crafting innovative solutions that bridge complex business challenges with elegant, scalable technology 
              that drives exceptional growth and competitive advantage.
            </p>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              With decades of combined expertise across software development, digital transformation, and enterprise 
              solutions, we have established ourselves as the trusted technology partner for forward-thinking businesses. 
              Our unwavering commitment to excellence, innovation, and client success positions us as industry leaders 
              in delivering world-class solutions that redefine standards and create lasting value.
            </p>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-16 h-16 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-20 h-20 bg-gray-300 rounded-full opacity-20 animate-pulse delay-1000"></div>
      </section>

      {/* Stats Section */}
      {/* <section className="py-12 bg-gradient-to-br from-gray-50 to-white relative">
        <div className="container mx-auto px-4 max-w-7xl">
          <div 
            className={`grid grid-cols-1 md:grid-cols-4 gap-6 transform transition-all duration-1000 delay-300 ${
              isVisible.stats ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            id="stats"
            data-animate
          >
            {[
              { number: '35+', label: 'Business Years', color: 'from-blue-500 to-blue-600' },
              { number: '240+', label: 'Clients', color: 'from-blue-600 to-black' },
              { number: '2000+', label: 'Projects', color: 'from-gray-600 to-gray-800' },
              { number: '130+', label: 'Team Members', color: 'from-blue-500 to-gray-700' }
            ].map((stat, index) => (
              <div 
                key={index}
                className={`text-center group hover:scale-105 transition-all duration-300 delay-${index * 100}`}
              >
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                  <div className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300`}>
                    {stat.number}
                  </div>
                  <div className="text-base font-semibold text-gray-700 group-hover:text-gray-900 transition-colors">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

       {/* Who We Are Section */}
      <section className="py-16 bg-white relative">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div 
              className={`transform transition-all duration-1000 delay-500 ${
                isVisible.whoWeAre ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
              }`}
              id="whoWeAre"
              data-animate
            >
              <div className="inline-block mb-4">
                <span className="bg-gradient-to-r from-blue-600 to-black bg-clip-text text-transparent text-sm font-semibold tracking-wider uppercase">
                  Our Story
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
                <span className="bg-gradient-to-r from-blue-600 to-black bg-clip-text text-transparent">
                  Who We Are
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-6">
                At Ascentia Labs, we excel in fostering collaboration and innovation, leveraging cutting-edge 
                technologies to craft tailored, industry-specific solutions. With a steadfast commitment to 
                redefining industry standards, we empower our clients to achieve unparalleled business 
                growth and success.
              </p>
              
              {/* Image Slider Controls */}
              {/* <div className="flex items-center space-x-4 mb-6">
                <button 
                  onClick={prevSlide}
                  className="bg-gradient-to-r from-blue-600 to-black hover:from-blue-700 hover:to-gray-900 text-white p-2 rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <polyline points="15,18 9,12 15,6"/>
                  </svg>
                </button>
                <div className="flex space-x-2">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        currentSlide === index 
                          ? 'bg-gradient-to-r from-blue-600 to-black scale-125' 
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                    />
                  ))}
                </div>
                <button 
                  onClick={nextSlide}
                  className="bg-gradient-to-r from-blue-600 to-black hover:from-blue-700 hover:to-gray-900 text-white p-2 rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <polyline points="9,18 15,12 9,6"/>
                  </svg>
                </button>
              </div> */}
            </div>
            
            {/* Enhanced Image Slider */}
            <div 
              className={`relative group transform transition-all duration-1000 delay-700 ${
                isVisible.whoWeAre ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
              }`}
            >
              <div className="relative">
                {/* Background decoration */}
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-black rounded-[3rem] opacity-20 blur-xl"></div>
                
                {/* Main slider container */}
                <div className="relative bg-white rounded-[2rem] p-1 shadow-xl max-w-sm mx-auto">
                  <div className="relative w-full aspect-[4/5] overflow-hidden rounded-[1.5rem]">
                    <div 
                      className="flex transition-transform duration-500 ease-in-out h-full"
                      style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                    >
                      {images.map((image, index) => (
                        <div key={index} className="w-full h-full flex-shrink-0 relative">
                          <img
                            src={image}
                            alt={`Office environment ${index + 1}`}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Navigation arrows on image */}
                  <button 
                    onClick={prevSlide}
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 shadow-lg backdrop-blur-sm hover:scale-110"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <polyline points="15,18 9,12 15,6"/>
                    </svg>
                  </button>
                  <button 
                    onClick={nextSlide}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 shadow-lg backdrop-blur-sm hover:scale-110"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <polyline points="9,18 15,12 9,6"/>
                    </svg>
                  </button>
                </div>
                
                {/* Enhanced Image counter */}
                <div className="absolute bottom-3 right-3 bg-gradient-to-r from-blue-600 to-black text-white px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm shadow-lg">
                  {currentSlide + 1} / {images.length}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    

      {/* Core Values Section */}
      <section className="py-12 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-blue-600/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-gray-600/10 rounded-full blur-3xl"></div>
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
              <span className="bg-gradient-to-r from-blue-400 to-gray-400 bg-clip-text text-transparent text-sm font-semibold tracking-wider uppercase">
                Our Foundation
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Core Values
             
            </h2>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
              In all our industry solutions, we strive to uphold the highest standards of integrity and foster a culture of innovation 
              that results in continued improvements and breakthroughs.
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
                description: 'Our mission at Ascentia Labs is to empower our clients through innovative solutions, unwavering excellence, and meaningful collaboration, driving success and creating lasting value.',
                gradient: 'from-blue-500 to-blue-600'
              },
              {
                icon: (
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                  </svg>
                ),
                title: 'Our Vision',
                description: 'Our vision at Ascentia Labs is to be a trusted global leader in innovation, transforming ideas into impactful solutions that empower our clients and shape a better future.',
                gradient: 'from-blue-600 to-black'
              },
              {
                icon: (
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ),
                title: 'Our Values',
                description: 'At Ascentia Labs, we are committed to delivering exceptional value to our clients while fostering a culture of trust, respect, and continuous growth for their businesses.',
                gradient: 'from-gray-600 to-gray-800'
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
                  
                  <h3 className="text-xl font-bold mb-4 text-white group-hover:text-gray-100 transition-colors">
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

      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-r from-blue-600 via-black to-blue-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
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
                <div className="text-blue-200 text-xs font-semibold mb-1 tracking-wider uppercase">Let's Get in Touch</div>
                <h2 className="text-2xl md:text-3xl font-bold leading-tight">
                  Let's Talk About Your Business IT<br />
                  Services Needs
                </h2>
              </div>
            </div>
            <Link 
              to="/contact" 
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-full font-bold transition-all duration-300 hover:scale-105 shadow-2xl flex items-center group"
            >
              GET IN TOUCH
              <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Bridging Ideas Section */}
      <section className="py-16 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/5 to-gray-600/5"></div>
          <div className="absolute top-20 left-20 w-60 h-60 bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gray-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div 
            className={`text-center transform transition-all duration-1000 ${
              isVisible.bridging ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            id="bridging"
            data-animate
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-400 via-gray-400 to-blue-400 bg-clip-text text-transparent">
                Bridging Ideas
              </span>
              <br />
              <span className="text-white">With Technology</span>
            </h2>
            <div className="space-y-3 max-w-4xl mx-auto">
              <p className="text-lg md:text-xl font-semibold text-gray-300">
                Crafting Unique Technical Solutions
              </p>
              <p className="text-lg md:text-xl font-semibold bg-gradient-to-r from-blue-400 to-gray-400 bg-clip-text text-transparent">
                to Meet All Your Business Demands!
              </p>
            </div>
          </div>
        </div>
      </section>

     

     
    </div>
  );
};

export default About;