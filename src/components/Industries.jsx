const Industries = () => {
  const industries = [
    {
      title: "Education",
      icon: (
        <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>
        </svg>
      )
    },
    {
      title: "Healthcare",
      icon: (
        <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 8h-2v3h-3v2h3v3h2v-3h3v-2h-3V8zM4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H8V4h12v12z"/>
        </svg>
      )
    },
    {
      title: "Travel & Tourism",
      icon: (
        <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6h-5.6z"/>
        </svg>
      )
    },
    {
      title: "Petcare",
      icon: (
        <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M4.5 12.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5S6.83 11 6 11s-1.5.67-1.5 1.5zM9 16c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5S9 15.17 9 16zm4.5-3c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zM12 4.5C10.07 2.91 7.45 2.91 5.5 4.5c-1.95 1.59-1.95 4.15 0 5.74L12 16.5l6.5-6.26c1.95-1.59 1.95-4.15 0-5.74C16.55 2.91 13.93 2.91 12 4.5z"/>
        </svg>
      )
    },
    {
      title: "E-Commerce",
      icon: (
        <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12L8.1 13h7.45c.75 0 1.41-.41 1.75-1.03L21.7 4H5.21l-.94-2H1zm16 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
        </svg>
      )
    },
    {
      title: "Manufacturing",
      icon: (
        <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/>
        </svg>
      )
    },
    {
      title: "Logistics",
      icon: (
        <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
        </svg>
      )
    },
    {
      title: "Parking",
      icon: (
        <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M13 3H6v18h4v-6h3c3.31 0 6-2.69 6-6s-2.69-6-6-6zm.2 8H10V7h3.2c1.1 0 2 .9 2 2s-.9 2-2 2z"/>
        </svg>
      )
    },
    {
      title: "Wellness & Health",
      icon: (
        <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      )
    },
    {
      title: "Real Estate",
      icon: (
        <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
        </svg>
      )
    },
    {
      title: "Accounting",
      icon: (
        <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
        </svg>
      )
    },
    {
      title: "Restaurants",
      icon: (
        <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8.1 13.34l2.83-2.83L3.91 3.5c-.78-.78-2.05-.78-2.83 0-.78.78-.78 2.05 0 2.83l7.02 7.01zm6.78-1.81c1.53.71 3.68.21 5.27-1.38 1.91-1.91 2.28-4.65.81-6.12-1.46-1.46-4.20-1.10-6.12.81-1.59 1.59-2.09 3.74-1.38 5.27L3.7 19.87l1.41 1.41L12 14.41l6.88 6.88 1.41-1.41L13.41 13l1.47-1.47z"/>
        </svg>
      )
    },
    {
      title: "Agriculture",
      icon: (
        <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c1.54 0 3-.35 4.31-.99l-1.24-1.24C14.13 20.57 13.11 21 12 21c-4.96 0-9-4.04-9-9s4.04-9 9-9 9 4.04 9 9c0 1.11-.43 2.13-1.23 3.07l1.24 1.24C21.65 15 22 13.54 22 12c0-5.52-4.48-10-10-10zm-1 5v6l4.25 2.52.77-1.28L13 12.5V7h-2z"/>
        </svg>
      )
    },
    {
      title: "Architecture",
      icon: (
        <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M6.36 18.78L6.61 21l1.62-1.54 2.77-2.77-.7-.7-2.77 2.77L6.36 18.78zm.24-2.83l2.77 2.77 8.46-8.46-2.77-2.77L6.6 15.95zm11.31-11.31c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
        </svg>
      )
    },
    {
      title: "After Sale Service",
      icon: (
        <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
        </svg>
      )
    }
  ];

  return (
    <section className="py-12 sm:py-16 overflow-hidden" style={{ background: '#000000' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Section Title with Animation */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight max-w-4xl mx-auto">
            <span className="inline-block">One Vision, Many Industries: Crafting Our</span>
            <br className="hidden md:block" />
            <span className="block mt-1 sm:mt-2">Bespoke Solutions For Unique Industry Demands</span>
          </h2>
        </div>

        {/* Industries Grid with Enhanced Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto mb-12 responsive-grid-md responsive-grid-lg">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="group relative flex flex-col items-center p-4 sm:p-6 bg-slate-800/80 backdrop-blur-md rounded-2xl border border-slate-700/50 hover:bg-slate-600 transition-all duration-500 hover:scale-105 cursor-pointer transform hover:-translate-y-3 shadow-lg hover:shadow-2xl hover:shadow-slate-500/50 mobile-no-hover"
            >
              {/* Icon Container with Better Styling */}
              <div className="flex justify-center mb-4">
                <div className="p-3 sm:p-4 rounded-full bg-blue-600 shadow-md group-hover:shadow-lg group-hover:bg-blue-500 transition-all duration-500 group-hover:scale-110">
                  <div className="text-white">
                    {industry.icon}
                  </div>
                </div>
              </div>

              {/* Industry Title */}
              <h3 className="text-center text-sm sm:text-base font-bold text-white leading-tight px-2">
                {industry.title}
              </h3>

              {/* Animated Background Effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-300/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl"></div>
              
              {/* Glowing Border Effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-300/40 via-transparent to-blue-300/40 rounded-2xl blur-sm"></div>
              </div>

              {/* Floating Animation Dots */}
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-blue-300 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-bounce"></div>
              <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-blue-200 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 animate-pulse"></div>
            </div>
          ))}
        </div>

        {/* Call to Action Section - Centered */}
        <div className="text-center mt-16">
         
          
          {/* Centered Button */}
          <div className="flex justify-center">
            <button className="group relative px-8 py-4 bg-slate-700 text-white font-bold text-lg rounded-full shadow-xl hover:shadow-2xl hover:shadow-blue-500/30 transform hover:scale-105 transition-all duration-300 hover:bg-slate-600 overflow-hidden border border-slate-600/50">
              <span className="relative z-10">Consult Our Experts Today</span>
              <div className="absolute inset-0 bg-gradient-to-r from-slate-600 to-slate-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-ping"></div>
            </button>
          </div>
        </div>

    
      </div>


    </section>
  );
};

export default Industries;