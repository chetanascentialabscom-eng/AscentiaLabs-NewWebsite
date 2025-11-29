import { ArrowRight, Image, ChevronDown, MapPin, Clock, BarChart3 } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 overflow-hidden flex items-center min-h-screen">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-blue-400/15 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-blue-300/10 rounded-full blur-xl animate-pulse delay-500"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 relative z-10 w-full max-w-7xl">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 xl:gap-16 lg:items-center relative">
          {/* Left Section */}
          <div className="text-center lg:text-left animate-fade-in-up w-full">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold mb-6 sm:mb-8 leading-tight text-blue-600">
              <span className="block">Building Tomorrow's</span>
              <span className="block text-gray-800">Digital Solutions</span>
              <span className="block text-gray-800">Today</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 sm:mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              We transform your ideas into powerful software solutions that drive growth, enhance efficiency, and deliver exceptional user experiences.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start max-w-lg mx-auto lg:mx-0">
              <button className="bg-gradient-to-r from-blue-600 to-black text-white px-5 sm:px-6 md:px-8 py-3 sm:py-3.5 md:py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center group text-sm sm:text-base min-h-[48px] active:scale-95 touch-manipulation">
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:translate-x-1 transition-transform duration-300 flex-shrink-0" />
                <span className="whitespace-nowrap">Start Your Project</span>
              </button>
              <button className="border-2 border-gray-800 text-gray-800 px-5 sm:px-6 md:px-8 py-3 sm:py-3.5 md:py-4 rounded-full font-semibold hover:bg-gray-800 hover:text-white transition-all duration-300 flex items-center justify-center group text-sm sm:text-base min-h-[48px] active:scale-95 touch-manipulation">
                <Image className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:scale-110 transition-transform duration-300 flex-shrink-0" />
                <span className="whitespace-nowrap">View Our Work</span>
              </button>
            </div>
          </div>

          {/* Center Divider - Mobile and Desktop */}
          <div className="flex lg:hidden justify-center my-4 z-20">
            <div className="flex items-center">
              <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-blue-600 to-blue-600 opacity-80"></div>
              <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mx-2 animate-pulse">
                <ChevronDown className="w-3 h-3 text-white" />
              </div>
              <div className="w-16 h-0.5 bg-gradient-to-r from-blue-600 to-transparent opacity-80"></div>
            </div>
          </div>

          {/* Center Divider - Desktop */}
          <div className="hidden xl:flex justify-center absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 z-20">
            <div className="flex flex-col items-center">
              <div className="w-0.5 h-24 xl:h-32 bg-gradient-to-b from-transparent via-blue-600 to-blue-600 opacity-80"></div>
              <div className="w-6 h-6 xl:w-8 xl:h-8 bg-blue-600 rounded-full flex items-center justify-center my-2 animate-pulse">
                <ArrowRight className="w-3 h-3 xl:w-4 xl:h-4 text-white" />
              </div>
              <div className="w-0.5 h-24 xl:h-32 bg-gradient-to-b from-blue-600 to-transparent opacity-80"></div>
            </div>
          </div>

          {/* Right Section */}
          <div className="relative mt-8 lg:mt-0 animate-fade-in-up delay-300 w-full">
            <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 w-full max-w-md mx-auto hover:shadow-3xl transition-all duration-300">
              {/* RouteMaestro Logo */}
              <div className="flex items-center justify-center mb-4 sm:mb-6">
                <img 
                  src="/RM.png" 
                  alt="RouteMaestro" 
                  className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 hover:scale-110 transition-transform duration-300"
                />
              </div>

              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-center mb-2 text-gray-800">RouteMaestro</h2>
              <p className="text-gray-600 text-center mb-4 sm:mb-6 text-xs sm:text-sm leading-relaxed px-2">
                Advanced route optimization and logistics management platform that streamlines delivery operations and reduces costs.
              </p>

              {/* Features */}
              <div className="flex justify-center items-start gap-2 sm:gap-4 md:gap-6 mb-6 sm:mb-6 px-1 sm:px-2">
                <div className="text-center flex-1 min-w-0">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2 hover:bg-blue-200 transition-colors duration-300 hover:scale-110 transform relative">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-blue-600 flex-shrink-0" strokeWidth={2} />
                  </div>
                  <span className="text-gray-700 font-medium text-xs sm:text-sm leading-tight block">Smart Route<br className="sm:hidden" /> Planning</span>
                </div>
                
                <div className="text-center flex-1 min-w-0">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2 hover:bg-blue-200 transition-colors duration-300 hover:scale-110 transform relative">
                    <Clock className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-blue-600 flex-shrink-0" strokeWidth={2} />
                  </div>
                  <span className="text-gray-700 font-medium text-xs sm:text-sm leading-tight block">Real-time<br className="sm:hidden" /> Tracking</span>
                </div>
                
                <div className="text-center flex-1 min-w-0">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2 hover:bg-blue-200 transition-colors duration-300 hover:scale-110 transform relative">
                    <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-blue-600 flex-shrink-0" strokeWidth={2} />
                  </div>
                  <span className="text-gray-700 font-medium text-xs sm:text-sm leading-tight block">Analytics<br className="sm:hidden" /> Dashboard</span>
                </div>
              </div>

              <a 
                href="https://www.routemaestro.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full bg-gradient-to-r from-blue-600 to-black text-white py-3 sm:py-3.5 rounded-full font-semibold hover:shadow-xl hover:from-blue-700 hover:to-gray-900 transition-all duration-300 flex items-center justify-center text-sm sm:text-base transform hover:scale-105 group min-h-[48px] active:scale-95 touch-manipulation"
              >
                Visit RouteMaestro
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300 flex-shrink-0" />
              </a>
            </div>
          </div>
        </div>
      </div>




    </section>
  );
};

export default Hero;