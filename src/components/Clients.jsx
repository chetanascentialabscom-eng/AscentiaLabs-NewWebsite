const Clients = () => {
  const testimonials = [
    {
      id: 1,
      name: "Simran Arora",
      position: "General Manager",
      company: "Kline International",
      location: "DMCC, Dubai",
      image: "/clients/Frame 28 (3).png",
      testimonial: "Ascentia Labs transformed our business operations with their innovative travel management solution. Their team's dedication to understanding our unique requirements and delivering a customized platform exceeded our expectations. The ROI has been remarkable.",
      rating: 5
    },
    {
      id: 2,
      name: "Vinayak S.Sood",
      position: "Partner",
      company: "S Sood Corporate Advisors",
      location: "Ltd.",
      image: "/clients/Avatar.png",
      testimonial: "Working with Ascentia Labs has been a game-changer for our corporate advisory services. Their expertise in developing scalable enterprise solutions helped us streamline our client management processes and improve operational efficiency significantly.",
      rating: 5
    },
    {
      id: 3,
      name: "Gaurav Jain",
      position: "Director",
      company: "Insurance Experts",
      location: "",
      image: "/clients/Frame 28.png",
      testimonial: "The insurance management software developed by Ascentia Labs revolutionized how we handle our operations. Their attention to detail, timely delivery, and ongoing support have made them our trusted technology partner for all future projects.",
      rating: 5
    }
  ];

  const stats = [
    {
      number: "35+",
      label: "Business Years",
      color: "from-blue-600 to-black"
    },
    {
      number: "240+",
      label: "Clients",
      color: "from-blue-600 to-black"
    },
    {
      number: "2000+",
      label: "Projects",
      color: "from-blue-600 to-black"
    },
    {
      number: "130+",
      label: "Team Members",
      color: "from-blue-600 to-black"
    }
  ];

  return (
    <>
    <section className="py-12 sm:py-16 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 to-purple-50/30"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-pink-200/20 to-orange-200/20 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Testimonials Section */}
        <div className="mb-8 sm:mb-12">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16 animate-fade-in-up px-4">
            <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4 sm:mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-black bg-clip-text text-transparent">
                Client Success Stories
              </span>
              <br />
              
            </h2>
            <p className="text-sm sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-2">
              Hear from our clients as they share how Ascentia Labs innovative solutions and dedicated service have transformed their business.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-0 responsive-grid-sm">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="group relative bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 text-white flex flex-col mobile-no-hover"
              >
                {/* Quote Icon */}
                <div className="absolute top-6 left-6 text-blue-200 opacity-50">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                  </svg>
                </div>

                {/* Testimonial Text */}
                <div className="mb-6 mt-8">
                  <p className="text-sm sm:text-base leading-relaxed text-blue-50">
                    "{testimonial.testimonial}"
                  </p>
                </div>

                {/* Rating Stars */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>

                {/* Client Info */}
                <div className="flex items-center">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden border-2 border-blue-300 mr-4 flex-shrink-0">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = "/clients/Avatar.png";
                      }}
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-white text-sm sm:text-base">
                      {testimonial.name}
                    </h4>
                    <p className="text-blue-200 text-xs sm:text-sm">
                      {testimonial.position}
                    </p>
                    <p className="text-blue-300 text-xs">
                      {testimonial.company} {testimonial.location}
                    </p>
                  </div>
                </div>

                {/* Hover Effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                
                {/* Floating Elements */}
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-bounce"></div>
                <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 animate-pulse"></div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>

    {/* Statistics Section - Full Width */}
    <section className="py-12 bg-gradient-to-r from-blue-600 via-black to-blue-600 relative overflow-hidden">
      {/* Background decoration for stats section */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in-up px-4">
          <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-white leading-tight mb-4 sm:mb-6">
            Our Impact in Numbers
          </h2>
          <p className="text-sm sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-2">
            Our achievements speak for themselves. With years of experience and countless successful projects, we continue to deliver exceptional results for our clients.
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 px-4 sm:px-0">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group"
            >
              {/* Number */}
              <div className="text-4xl sm:text-5xl lg:text-5xl font-bold text-white mb-3 group-hover:scale-105 transition-transform duration-300">
                {stat.number}
              </div>

              {/* Label */}
              <p className="text-gray-300 font-semibold text-sm sm:text-base lg:text-lg group-hover:text-white transition-colors duration-300">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
};

export default Clients;