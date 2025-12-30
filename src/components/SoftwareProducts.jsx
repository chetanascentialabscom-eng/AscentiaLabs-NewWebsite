import { Link } from 'react-router-dom';
const SoftwareProducts = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-blue-800 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-5xl  text-white leading-tight mb-6">
            Don't Believe Us Just Yet? Test Our Capabilities!<br />Demo Our Enterprise Product!
          </h2>
        </div>

        {/* RouteMaestro Showcase */}
        <div className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            
            {/* Left Content - RouteMaestro Video */}
            <div className="order-1 lg:order-1 flex justify-center px-2">
              <div className="transform hover:scale-105 transition-transform duration-300 w-full max-w-2xl">
                <div className="relative w-full aspect-video">
                  <video
                    src="/routemastero.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    controls={false}
                    disablePictureInPicture
                    controlsList="nodownload nofullscreen noremoteplayback"
                    onContextMenu={(e) => e.preventDefault()}
                    className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-2xl pointer-events-none"
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>

            {/* Right Content - RouteMaestro Info */}
            <div className="order-1 lg:order-2 text-center lg:text-left space-y-6 px-2 flex flex-col justify-center">
              
              {/* Title and CTA in same row */}
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <div className="flex items-center justify-center lg:justify-start gap-4">
                  {/* <img 
                    src="/SoftwareProducts/Route Maestro Logo.png" 
                    alt="Airnet Travels" 
                    className="h-12 md:h-16 w-auto object-contain rounded-lg"
                  /> */}
                  <h3 className="text-xl text-white">AI Travel Planning & Booking Tool</h3>
                </div>
                
                {/* CTA Button */}
                <div className="flex justify-center lg:justify-end flex-shrink-0">
                  <Link 
                    to="/case-studies" 
                    className="inline-flex items-center bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-black px-6 py-3 rounded-xl  transition-all duration-300 shadow-lg hover:scale-105 text-sm whitespace-nowrap"
                  >
                    View All Case Studies
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
              
              <div>
                <p className="text-lg text-white leading-relaxed">
                  An AI Powered Multi-City Travel Planning & Booking Platform that generates ready-to-book AI personalised, multi city real-time travel packages integrated with global hotels, flights, sightseeings, transfers within 2 Minutes!
                </p>
                
                {/* Impact Metrics */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6 p-4 bg-blue-900/30 rounded-xl backdrop-blur-sm border border-blue-400/20">
                  <div className="text-center">
                    <div className="text-2xl  text-amber-400">2 Mins</div>
                    <div className="text-sm text-blue-200/80">Booking Time</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl  text-amber-400">300%</div>
                    <div className="text-sm text-blue-200/80">Efficiency Boost</div>
                  </div>
                  <div className="text-center md:col-span-1 col-span-2">
                    <div className="text-2xl  text-amber-400">95%</div>
                    <div className="text-sm text-blue-200/80">User Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="mt-20 hidden md:block">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              
              <div className="text-center group">
                <div className="bg-gradient-to-r from-amber-400 to-orange-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:from-amber-500 group-hover:to-orange-600 transition-all duration-300">
                  <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-white  text-xl mb-3">AI Powered Dynamic Packages</h3>
                <p className="text-white text-sm leading-relaxed">Advanced machine learning algorithms create personalised real time packages within 2 minutes!</p>
              </div>

              <div className="text-center group">
                <div className="bg-gradient-to-r from-amber-400 to-orange-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:from-amber-500 group-hover:to-orange-600 transition-all duration-300">
                  <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-white  text-xl mb-3">Smart Travel Route Planning</h3>
                <p className="text-white text-sm leading-relaxed">Intelligent multicity route generator for you to choose most convenient & affordable travel routes</p>
              </div>

              <div className="text-center group">
                <div className="bg-gradient-to-r from-amber-400 to-orange-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:from-amber-500 group-hover:to-orange-600 transition-all duration-300">
                  <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-white  text-xl mb-3">Instant Integrated Booking</h3>
                <p className="text-white text-sm leading-relaxed">Generate & book travel packages with Hotels, Flights, Experiences, Transfers & more, all at once! </p>
              </div>

              <div className="text-center group">
                <div className="bg-gradient-to-r from-amber-400 to-orange-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:from-amber-500 group-hover:to-orange-600 transition-all duration-300">
                  <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-white  text-xl mb-3">Smart Itinerary Builder</h3>
                <p className="text-white text-sm leading-relaxed">Builds your package minute by minute on a daily basis throughout your trip duration, and can be edited end to end.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SoftwareProducts;