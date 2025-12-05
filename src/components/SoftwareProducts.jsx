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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 px-4 sm:px-0 responsive-grid-sm">
          {/* Route Maestro */}
          <a 
            href="https://www.routemaestro.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative bg-slate-800/80 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl hover:shadow-slate-900/50 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 border border-slate-600/40 hover:bg-slate-600/80 min-h-[280px] flex flex-col justify-center items-center text-center cursor-pointer mobile-no-hover"
          >
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center bg-white rounded-xl group-hover:bg-gray-50 transition-all duration-300 group-hover:scale-110">
                <img
                  src="/SoftwareProducts/Route Maestro Logo.png"
                  alt="Route Maestro"
                  className="w-12 h-12 sm:w-16 sm:h-16 object-contain filter group-hover:brightness-110 transition-all duration-300"
                />
              </div>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-2 transition-colors duration-300">
              RouteMaestro
            </h3>
            <p className="text-sm text-gray-300 transition-colors duration-300 leading-relaxed">
              AI Powered Travel Planning And Booking Software
            </p>

            
            {/* External Link Icon */}
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </div>
          </a>

          {/* Insurance Safe */}
          <div className="group relative bg-slate-800/80 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl hover:shadow-slate-900/50 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 border border-slate-600/40 hover:bg-slate-600/80 min-h-[280px] flex flex-col justify-center items-center text-center mobile-no-hover">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center bg-white rounded-xl group-hover:bg-gray-50 transition-all duration-300 group-hover:scale-110">
                <img
                  src="/SoftwareProducts/Insurance Safe.png"
                  alt="Insurance Safe"
                  className="w-12 h-12 sm:w-16 sm:h-16 object-contain filter group-hover:brightness-110 transition-all duration-300"
                />
              </div>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-2 transition-colors duration-300">
              InsuranceSafe
            </h3>
            <p className="text-sm text-gray-300 transition-colors duration-300 leading-relaxed">
              Insurance Management Software
            </p>

          </div>

          {/* Kinder Connect */}
          <div className="group relative bg-slate-800/80 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl hover:shadow-slate-900/50 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 border border-slate-600/40 hover:bg-slate-600/80 min-h-[280px] flex flex-col justify-center items-center text-center mobile-no-hover">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center bg-white rounded-xl group-hover:bg-gray-50 transition-all duration-300 group-hover:scale-110">
                <img
                  src="/SoftwareProducts/Frame 1000002695.png"
                  alt="Kinder Connect"
                  className="w-12 h-12 sm:w-16 sm:h-16 object-contain filter group-hover:brightness-110 transition-all duration-300"
                />
              </div>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-2 transition-colors duration-300">
              KinderConnect
            </h3>
            <p className="text-sm text-gray-300 transition-colors duration-300 leading-relaxed">
              Kindergarten Management Software
            </p>

          </div>

          {/* JusDoIt */}
          <div className="group relative bg-slate-800/80 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl hover:shadow-slate-900/50 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 border border-slate-600/40 hover:bg-slate-600/80 min-h-[280px] flex flex-col justify-center items-center text-center mobile-no-hover">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center bg-white rounded-xl group-hover:bg-gray-50 transition-all duration-300 group-hover:scale-110">
                <img
                  src="/SoftwareProducts/JusDoIt.png"
                  alt="JusDoIt"
                  className="w-12 h-12 sm:w-16 sm:h-16 object-contain filter group-hover:brightness-110 transition-all duration-300"
                />
              </div>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-2 transition-colors duration-300">
              JusDoIt
            </h3>
            <p className="text-sm text-gray-300 transition-colors duration-300 leading-relaxed">
              Task Management Software
            </p>

          </div>
        </div>
      </div>


    </section>
  );
};

export default SoftwareProducts;