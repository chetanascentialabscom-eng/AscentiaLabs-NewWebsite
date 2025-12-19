const SoftwareProducts = () => {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight mb-6">
            At Ascentia Labs: We Develop World-Class Solutions
            <br className="hidden sm:block" />
            That Redefine Industry Standards & Add Value!
          </h2>
        </div>

        {/* RouteMaestro Showcase */}
        <div className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            
            {/* Left Content - RouteMaestro Hero Image */}
            <div className="order-1 lg:order-1 flex justify-center px-2">
              <div className="transform hover:scale-105 transition-transform duration-300 max-w-full">
                <img
                  src="/routemaestro.png"
                  alt="RouteMaestro Hero Section"
                  className="w-full h-auto object-contain rounded-2xl shadow-2xl max-w-lg"
                />
              </div>
            </div>

            {/* Right Content - RouteMaestro Info */}
            <div className="order-1 lg:order-2 text-center lg:text-left space-y-8 px-2">
              
              {/* Title */}
              <div>
                <div className="flex justify-center lg:justify-start">
                  <div className=" rounded-xl  py-3 shadow-lg">
                    <img 
                      src="/SoftwareProducts/Route Maestro Logo.png" 
                      alt="RouteMaestro Logo" 
                      className="h-12 rounded-lg md:h-16 w-auto object-contain"
                    />
                  </div>
                </div>
                <p className="text-lg text-gray-300 leading-relaxed">
                  An AI Powered Travel Planning & Booking Platform - Equip your B2B / B2C travel business with AI Personalised Dynamic Packaging. Generate & book AI personalised, multi city real-time packages integrated with your own inventory within 2 Minutes! 
                </p>
              </div>
              
             
              
              {/* CTA Button */}
              <div className="pt-4 ">
                <a 
                  href="https://www.routemaestro.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-black px-8 py-3 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 text-base hover:shadow-amber-500/50"
                >
                  Explore RouteMaestro
                  <svg className="w-5 h-5 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="mt-20 hidden md:block">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              
              <div className="text-center group">
                <div className="bg-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:bg-blue-700 transition-colors duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h4 className="text-white font-bold text-base mb-3">AI Powered Dynamic Packages</h4>
                <p className="text-gray-400 text-xs leading-relaxed">Advanced machine learning algorithms create personalised real time packages within 2 minutes!</p>
              </div>

              <div className="text-center group">
                <div className="bg-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:bg-blue-700 transition-colors duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h4 className="text-white font-bold text-base mb-3">Smart Travel Route Planning</h4>
                <p className="text-gray-400 text-xs leading-relaxed">Intelligent multicity route generator for you to choose most convenient & affordable travel routes</p>
              </div>

              <div className="text-center group">
                <div className="bg-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:bg-blue-700 transition-colors duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="text-white font-bold text-base mb-3">Instant Integrated Booking</h4>
                <p className="text-gray-400 text-xs leading-relaxed">Generate & book travel packages with Hotels, Flights, Experiences, Transfers & more, all at once! </p>
              </div>

              <div className="text-center group">
                <div className="bg-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:bg-blue-700 transition-colors duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h4 className="text-white font-bold text-base mb-3">Smart Itinerary Builder</h4>
                <p className="text-gray-400 text-xs leading-relaxed">Builds your package minute by minute on a daily basis throughout your trip duration, and can be edited end to end.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SoftwareProducts;