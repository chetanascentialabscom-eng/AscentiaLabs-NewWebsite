import { useRef, useEffect, useState } from 'react';

// Logo item component with individual hover state and animations
const LogoItem = ({ logo }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div
      className="relative flex-shrink-0 w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 flex flex-col items-center justify-center bg-white rounded-2xl hover:bg-gray-50 transition-all duration-500 hover:scale-110 hover:-translate-y-2 mb-8 sm:mb-12 shadow-lg hover:shadow-2xl border border-gray-100 group"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {/* Loading placeholder */}
      {!imageLoaded && (
        <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-gray-200 rounded-lg animate-pulse"></div>
      )}
      
      {/* Logo image */}
      <img
        src={logo.url}
        alt={logo.name}
        className={`max-w-[80%] max-h-[80%] object-contain transition-all duration-500 group-hover:scale-110 ${
          imageLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        onLoad={() => setImageLoaded(true)}
        onError={(e) => {
          console.log(`Failed to load image: ${logo.url}`);
          e.target.style.display = 'none';
        }}
      />
      
      {/* Hover glow effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
      
      {/* Logo name tooltip on hover */}
      <div
        className={`absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-sm px-4 py-2 rounded-lg transition-all duration-300 whitespace-nowrap z-50 border border-gray-700 shadow-xl ${
          showTooltip ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
        }`}
      >
        {logo.name}
        {/* Tooltip arrow */}
        <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 border-l border-t border-gray-700 rotate-45"></div>
      </div>
    </div>
  );
};

const Partnership = () => {
  const scrollContainerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-scroll effect with smooth animation
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollSpeed = 0.5; // pixels per frame (slower for smoother movement)
    let animationId;

    const autoScroll = () => {
      if (!isHovered && container) {
        container.scrollLeft += scrollSpeed;
        // Reset scroll position when we've scrolled through one set of logos
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

  // Partner logos - using images from public folder
  const partnerLogos = [
    { name: "Sunview", url: "/partnerships/sunview-1.png" },
    { name: "Sood", url: "/partnerships/image-14.png" },
    { name: "Insurance", url: "/partnerships/logo-1a.jpg" },
    { name: "Black Simple Photography", url: "/partnerships/black-simple-photography.png" },
    { name: "Simpra Logo", url: "/partnerships/simpra-logo.png" },
    { name: "Centra Greens", url: "/partnerships/centra-greens.svg" },
    { name: "KES", url: "/partnerships/kes.svg" },
    { name: "Keva", url: "/partnerships/keva.svg" },
    { name: "Wallace Cart", url: "/partnerships/wallage.svg" },
    { name: "Gold Stone", url: "/partnerships/gold-stone.svg" },
    { name: "Credmate", url: "/partnerships/credmate.svg" },
    { name: "Amar Jacquard", url: "/partnerships/amar-jacquard.svg" },
    { name: "AMREP", url: "/partnerships/amrep.svg" },
    { name: "Madhok Enterprises", url: "/partnerships/madhok-enterprises.svg" },
    { name: "CIPT", url: "/partnerships/cipt.svg" },
    { name: "George & Oakes", url: "/partnerships/go.svg" },
    { name: "Pumpkins", url: "/partnerships/pumpkins.svg" },
    { name: "Read LDH Read", url: "/partnerships/read-ldh-read.svg" },
    { name: "Kiddogram", url: "/partnerships/kiddogram.svg" },
    { name: "Godwit", url: "/partnerships/godwit.png" },
    { name: "Jujhar Group", url: "/partnerships/jujhar_group.png" },
    { name: "NDMC", url: "/partnerships/NDMC.png" }
  ];

  // Triple the logos for seamless infinite scroll
  const duplicatedLogos = [...partnerLogos, ...partnerLogos, ...partnerLogos];

  return (
    <section className="relative py-12 sm:py-16 bg-gray-50 overflow-hidden">
      <div className="relative z-10 container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
         <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-black bg-clip-text text-transparent">
             Our Impactful Partnerships
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
            Our solutions have enabled businesses in a variety of industries to achieve remarkable outcomes, 
            ranging from streamlined operations to exponential growth.
          </p>
        </div>

        {/* Infinite scroll container */}
        <div
          className="relative carousel-container pb-12 sm:pb-16"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Scrollable container with proper padding and overflow handling */}
          <div
            ref={scrollContainerRef}
            className="flex space-x-4 sm:space-x-6 md:space-x-8 lg:space-x-12 overflow-x-auto scrollbar-hide px-4 sm:px-6 py-4"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            {duplicatedLogos.map((logo, index) => (
              <LogoItem key={`${logo.name}-${index}`} logo={logo} />
            ))}
          </div>

          {/* Enhanced gradient fade effects on sides */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 via-gray-50/80 to-transparent pointer-events-none z-20"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 via-gray-50/80 to-transparent pointer-events-none z-20"></div>
          
          {/* Pause indicator */}
          <div className={`absolute top-4 right-4 text-sm text-gray-500 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
            <div className="flex items-center space-x-2 bg-white/90 px-3 py-1 rounded-full shadow-md">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              {/* <span>Paused</span> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partnership;