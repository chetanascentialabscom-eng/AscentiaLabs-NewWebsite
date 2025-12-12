const SoftwareProducts = () => {
  return (
    <section className="py-16 sm:py-20 bg-black relative overflow-hidden">
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in-up px-4">
          <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4 sm:mb-6">
            At Ascentia Labs: We Develop World-Class Solutions
            <br className="hidden sm:block" />
            That Redefine Industry Standards & Add Value!
          </h2>
        </div>

        {/* Software Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-8 px-4 sm:px-0">
          {/* Route Maestro */}
          <a 
            href="https://www.routemaestro.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative bg-slate-800/80 rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:shadow-slate-900/50 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 border border-slate-600/40 hover:bg-slate-600/80 min-h-[380px] flex flex-col text-left cursor-pointer"
          >
            <div className="flex justify-center mb-4">
              <div className="w-20 h-16 sm:w-24 sm:h-20 flex items-center justify-center bg-white rounded-xl group-hover:bg-gray-50 transition-all duration-300 group-hover:scale-110">
                <img
                  src="/SoftwareProducts/Route Maestro Logo.png"
                  alt="Route Maestro"
                  className="max-w-full max-h-full object-contain filter group-hover:brightness-110 transition-all duration-300"
                />
              </div>
            </div>
            <h3 className="text-xl font-bold text-white mb-3 text-center transition-colors duration-300">
              RouteMaestro
            </h3>
            <p className="text-sm text-gray-300 mb-4 leading-relaxed flex-grow">
              AI-powered travel planning and booking platform that revolutionizes how travelers discover, plan, and book their journeys with intelligent recommendations and seamless user experience.
            </p>
            <div className="space-y-2 text-xs text-gray-400">
              <div><span className="text-blue-400 font-semibold">Industry:</span> Travel, Tourism & Hospitality</div>
              <div><span className="text-blue-400 font-semibold">Enterprise Users:</span> 50+</div>
              <div><span className="text-blue-400 font-semibold">Status:</span> Live & Active</div>
            </div>

            {/* External Link Icon */}
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </div>
          </a>

          {/* Insurance Safe */}
          <div className="group relative bg-slate-800/80 rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:shadow-slate-900/50 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 border border-slate-600/40 hover:bg-slate-600/80 min-h-[380px] flex flex-col text-left">
            <div className="flex justify-center mb-4">
              <div className="w-20 h-16 sm:w-24 sm:h-20 flex items-center justify-center bg-white rounded-xl group-hover:bg-gray-50 transition-all duration-300 group-hover:scale-110">
                <img
                  src="/SoftwareProducts/Insurance Safe.png"
                  alt="Insurance Safe"
                  className="max-w-full max-h-full object-contain filter group-hover:brightness-110 transition-all duration-300"
                />
              </div>
            </div>
            <h3 className="text-xl font-bold text-white mb-3 text-center transition-colors duration-300">
              InsuranceSafe
            </h3>
            <p className="text-sm text-gray-300 mb-4 leading-relaxed flex-grow">
              Comprehensive insurance management platform that streamlines policy administration, claims processing, and customer relationship management for insurance companies and brokers.
            </p>
            <div className="space-y-2 text-xs text-gray-400">
              <div><span className="text-blue-400 font-semibold">Industry:</span> Insurance & Financial Services</div>
              <div><span className="text-blue-400 font-semibold">Enterprise Users:</span> 100+</div>
              <div><span className="text-blue-400 font-semibold">Status:</span> Enterprise Ready</div>
            </div>
          </div>

          {/* Kinder Connect */}
          <div className="group relative bg-slate-800/80 rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:shadow-slate-900/50 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 border border-slate-600/40 hover:bg-slate-600/80 min-h-[380px] flex flex-col text-left">
            <div className="flex justify-center mb-4">
              <div className="w-20 h-16 sm:w-24 sm:h-20 flex items-center justify-center bg-white rounded-xl group-hover:bg-gray-50 transition-all duration-300 group-hover:scale-110">
                <img
                  src="/SoftwareProducts/Frame 1000002695.png"
                  alt="Kinder Connect"
                  className="max-w-full max-h-full object-contain filter group-hover:brightness-110 transition-all duration-300"
                />
              </div>
            </div>
            <h3 className="text-xl font-bold text-white mb-3 text-center transition-colors duration-300">
              KinderConnect
            </h3>
            <p className="text-sm text-gray-300 mb-4 leading-relaxed flex-grow">
              Complete kindergarten management system that enhances parent-teacher communication, streamlines administrative tasks, and improves educational outcomes for young learners.
            </p>
            <div className="space-y-2 text-xs text-gray-400">
              <div><span className="text-blue-400 font-semibold">Industry:</span> Education & Child Care</div>
              <div><span className="text-blue-400 font-semibold">Enterprise Users:</span> 75+</div>
              <div><span className="text-blue-400 font-semibold">Status:</span> Growing Network</div>
            </div>
          </div>

          {/* JusDolt */}
          <div className="group relative bg-slate-800/80 rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:shadow-slate-900/50 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 border border-slate-600/40 hover:bg-slate-600/80 min-h-[380px] flex flex-col text-left">
            <div className="flex justify-center mb-4">
              <div className="w-20 h-16 sm:w-24 sm:h-20 flex items-center justify-center bg-white rounded-xl group-hover:bg-gray-50 transition-all duration-300 group-hover:scale-110">
                <img
                  src="/SoftwareProducts/JusDoIt.png"
                  alt="JusDolt"
                  className="max-w-full max-h-full object-contain filter group-hover:brightness-110 transition-all duration-300"
                />
              </div>
            </div>
            <h3 className="text-xl font-bold text-white mb-3 text-center transition-colors duration-300">
              JusDolt
            </h3>
            <p className="text-sm text-gray-300 mb-4 leading-relaxed flex-grow">
              Advanced task management and productivity platform that helps teams organize, prioritize, and track their work with intelligent automation and collaboration features.
            </p>
            <div className="space-y-2 text-xs text-gray-400">
              <div><span className="text-blue-400 font-semibold">Industry:</span> Productivity & Project Management</div>
              <div><span className="text-blue-400 font-semibold">Enterprise Users:</span> 200+</div>
              <div><span className="text-blue-400 font-semibold">Status:</span> Market Leader</div>
            </div>
          </div>
        </div>
      </div>


    </section>
  );
};

export default SoftwareProducts;