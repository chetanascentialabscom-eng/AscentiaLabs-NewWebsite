import { useState, useEffect } from 'react';
import SEO from '../../components/SEO';
import { seoData } from '../../utils/seoData';
import LeafletMap from '../../components/LeafletMap';

const About = () => {
  const [isVisible, setIsVisible] = useState({});
  const [selectedImage, setSelectedImage] = useState(null);

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

  const teamMembers = [
    {
      name: 'Mr. Anmol S Rikhraj',
      role: 'CEO',
      image: '/team/anmol.png',
      description: 'A Computer Science Engineer & A Scale Expert, Built & Launched 4 Enterprise Solutions With 50+ Enterprise Users',
      education: 'Thapar University',
      linkedin: 'https://www.linkedin.com/in/anmol-rikhraj-04826395/'
    },
    {
      name: 'Mr. Sukhpreet S Kalra',
      role: 'CTO',
      image: '/team/sukhi.jpeg',
      description: 'A B.Tech & M.S Computer Science Engineer With 10+ Yrs Experience Across Building Technology Architecture For Profitable 3+ Enterprise Products.',
      education: 'Maharishi Markandeshwar, Uppsala University',
      linkedin: 'https://www.linkedin.com/in/kalrasukhpreet/'
    }
  ];

  const galleryImages = [
    { src: '/ITB/Ascentia Labs Expo.jpeg', alt: 'Ascentia Labs Expo' },
    { src: '/ITB/DSB_8009.jpg', alt: 'Team Event' },
    { src: '/ITB/DSC_2607.jpg', alt: 'Conference' },
    { src: '/ITB/ITB Asia 2025 - Singapore.jpeg', alt: 'ITB Asia 2025' },
    { src: '/ITB/Z62_6351.jpg', alt: 'Team Collaboration' },
    { src: '/ITB/Alice Lee.png', alt: 'Alice Lee' },
    { src: '/ITB/Mr. Luca - Ascentia Labs.jpeg', alt: 'Mr. Luca' },
    { src: '/about/WhatsApp Image 2025-12-23 at 11.39.34.jpeg', alt: 'Office Culture' },
    { src: '/about/WhatsApp Image 2025-12-23 at 11.47.53.jpeg', alt: 'Team Meeting' },
    { src: '/about/WhatsApp Image 2025-12-23 at 11.47.54.jpeg', alt: 'Innovation Hub' },
    { src: '/about/WhatsApp Image 2025-12-23 at 11.47.54 (1).jpeg', alt: 'Workspace' },
    { src: '/about/WhatsApp Image 2025-12-23 at 11.47.54 (2).jpeg', alt: 'Team Building' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-950 to-black">
      <SEO {...seoData.about} />
      {/* Hero & Core Team Combined Section */}
      <section className="pt-24 pb-24 bg-slate-900 relative overflow-hidden min-h-screen flex items-center">
        {/* Smooth transition gradient at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-b from-slate-900 via-blue-950/70 to-blue-950 pointer-events-none"></div>
        
        <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl relative z-10 w-full">
          <div 
            className={`transform transition-all duration-1000 ${
              isVisible.overview ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            id="overview"
            data-animate
          >
            {/* Header */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl text-white mb-4 leading-tight max-w-5xl mx-auto">
                100+ Projects Delivered. 4+ Countries. 1 Shared Goal
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto"></div>
            </div>

            {/* Content Grid */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16">
              {/* Left Side - Company Description */}
              <div className="space-y-6">
                <p className="text-base md:text-lg text-blue-200/90 leading-relaxed">
                  With a proven track record of launching our own proprietary Enterprise Solutions—now trusted by over 100+ Enterprise Users—we have a unique "insider" understanding of what it takes to scale. We know the stakes because we've been in your shoes.
                </p>
                <p className="text-base md:text-lg text-blue-200/90 leading-relaxed">
                  At Ascentia Labs, we translate 7+ years of product-building expertise into a competitive edge for our clients. Facilitating clients across 4+ countries, we don't just deliver projects; we engineer the digital transformation that allows you to redefine what's possible in your industry.
                </p>
              </div>

              {/* Right Side - Core Team */}
              <div className="grid grid-cols-1 gap-6">
                {teamMembers.map((member, index) => (
                  <div 
                    key={index}
                    className="group bg-slate-800/40 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-blue-400/20 hover:border-amber-400/40"
                  >
                    <div className="flex flex-row items-center gap-5 p-5">
                      {/* Profile Image */}
                      <div className="relative overflow-hidden w-24 h-24 md:w-28 md:h-28 rounded-2xl bg-gradient-to-br from-slate-700 to-slate-800 flex-shrink-0 shadow-xl">
                        <img 
                          src={member.image} 
                          alt={member.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      
                      {/* Member Info */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg md:text-xl text-white mb-1">{member.name}</h3>
                        <p className="text-amber-400 font-semibold text-sm md:text-base mb-2">{member.role}</p>
                        <p className="text-blue-200/80 text-xs md:text-sm leading-relaxed mb-2">{member.description}</p>
                        <p className="text-blue-300/60 text-xs mb-2">
                          <span className="font-medium">Education:</span> {member.education}
                        </p>
                        <a 
                          href={member.linkedin} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors text-xs md:text-sm font-medium"
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                          </svg>
                          LinkedIn
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Statistics Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-12 border-t border-blue-400/10">
              <div className="text-center">
                <div className="text-4xl md:text-5xl text-amber-400 mb-2">7+</div>
                <div className="text-blue-200/80 text-sm md:text-base">Business Years</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl text-amber-400 mb-2">100+</div>
                <div className="text-blue-200/80 text-sm md:text-base">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl text-amber-400 mb-2">10+</div>
                <div className="text-blue-200/80 text-sm md:text-base">Industries Catered</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl text-amber-400 mb-2">4+</div>
                <div className="text-blue-200/80 text-sm md:text-base">Countries</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      

      {/* Gallery Section */}
      <section className="py-20 bg-gradient-to-b from-blue-950 via-slate-900 to-black relative overflow-hidden">
        {/* Smooth transition gradient at top */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-blue-950 via-blue-950/50 to-transparent pointer-events-none"></div>
        
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div 
            className={`transform transition-all duration-1000 ${
              isVisible.gallery ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            id="gallery"
            data-animate
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl text-white mb-6">
                Our Journey
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto mb-6"></div>
              <p className="text-xl text-blue-200/80 max-w-3xl mx-auto">
                Moments that define our commitment to excellence and innovation
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {galleryImages.map((image, index) => (
                <div 
                  key={index}
                  className="relative group cursor-pointer overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 aspect-square"
                  onClick={() => setSelectedImage(image)}
                >
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white text-sm">{image.alt}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-[9999] flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl max-h-[90vh]">
            <button 
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10"
              onClick={() => setSelectedImage(null)}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
            <img 
              src={selectedImage.src} 
              alt={selectedImage.alt}
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
            />
            <p className="text-white text-center mt-4 text-lg">{selectedImage.alt}</p>
          </div>
        </div>
      )}

   

      {/* Map Section */}
      <section className="py-20 bg-black relative overflow-hidden">
        {/* Smooth transition gradient at top */}
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-black via-slate-900/30 to-transparent pointer-events-none"></div>
        
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <LeafletMap />
        </div>
      </section>
    </div>
  );
};

export default About;
