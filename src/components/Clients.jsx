import { useRef, useEffect, useState } from 'react';

const Clients = () => {
  const scrollContainerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-scroll effect with smooth animation
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollSpeed = 0.5; // pixels per frame
    let animationId;

    const autoScroll = () => {
      if (!isHovered && container) {
        container.scrollLeft += scrollSpeed;
        // Reset scroll position when we've scrolled through one set of testimonials
        const maxScroll = container.scrollWidth / 3; // Since we have 3 copies
        if (container.scrollLeft >= maxScroll) {
          container.scrollLeft = 0;
        }
      }
      animationId = requestAnimationFrame(autoScroll);
    };

    animationId = requestAnimationFrame(autoScroll);
    return () => cancelAnimationFrame(animationId);
  }, [isHovered]);
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
    },
    {
      id: 4,
      name: "Ashutosh Shrivastava",
      position: "Tech Lead",
      company: "Technology Solutions",
      location: "",
      image: null,
      testimonial: "I've had a great experience with Ascentia Labs. Their team is highly professional, innovative and always ready to go the extra mile. Their quality solutions, attention to detail, and client-first approach truly stand out.",
      rating: 5
    },
    {
      id: 5,
      name: "Ritika Agarwal",
      position: "Tech Manager",
      company: "Digital Innovations",
      location: "",
      image: null,
      testimonial: "Opportunities for growth and learning, excellent customer support, smart colleagues and supporting team. Working with Ascentia Labs has been an incredible journey of professional development and technical excellence.",
      rating: 5
    },
    {
      id: 6,
      name: "Rohan John",
      position: "Operations Head",
      company: "Business Solutions",
      location: "",
      image: null,
      testimonial: "We have had an excellent experience working with Ascentia Labs. Their CRM solution is intuitive, well-designed, and has significantly streamlined our operations. The team is extremely responsive and professional.",
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
    <section className="py-12 sm:py-16 bg-gradient-to-b from-blue-800 to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-blue-700/10"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-600/10 to-blue-700/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Testimonials Section */}
        <div className="mb-8 sm:mb-12">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16 animate-fade-in-up px-4">
            <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl  text-white leading-tight mb-4 sm:mb-6">
              Client Success Stories
            </h2>
            <p className="text-sm sm:text-lg md:text-xl text-white max-w-3xl mx-auto leading-relaxed px-2">
              Hear from our clients as they share how Ascentia Labs innovative solutions and dedicated service have transformed their business.
            </p>
          </div>

          {/* Testimonials Carousel */}
          <div
            className="relative carousel-container pb-12 sm:pb-16 overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Scrollable container */}
            <div
              ref={scrollContainerRef}
              className="flex space-x-6 overflow-x-auto scrollbar-hide px-4 sm:px-6 py-4"
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                maskImage: 'linear-gradient(to right, transparent 0px, black 40px, black calc(100% - 40px), transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to right, transparent 0px, black 40px, black calc(100% - 40px), transparent 100%)'
              }}
            >
              {[...testimonials, ...testimonials, ...testimonials].map((testimonial, index) => (
                <div
                  key={`${testimonial.id}-${index}`}
                  className="flex-shrink-0 w-80 sm:w-96 group relative bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 text-white flex flex-col mobile-no-hover"
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
                      {testimonial.image ? (
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.src = "/clients/Avatar.png";
                          }}
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                          <span className="text-white  text-lg sm:text-xl">
                            {testimonial.name.charAt(0).toUpperCase()}
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="flex-1">
                      <h4 className=" text-white text-sm sm:text-base">
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

      </div>
      
      {/* Smooth transition to Footer */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-black pointer-events-none"></div>
    </section>

    {/* Smooth transition to next section */}

    {/* Statistics Section - Full Width */}
   
    </>
  );
};

export default Clients;