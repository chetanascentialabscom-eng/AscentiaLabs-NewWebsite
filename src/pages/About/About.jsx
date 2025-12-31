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
    },
    
  ];

  const galleryImages = [
    { src: '/about/WhatsApp Image 2025-12-23 at 11.47.54 (2).jpeg', alt: 'Team Building' },
    { src: '/about/WhatsApp Image 2025-12-23 at 11.47.54 (1).jpeg', alt: 'Workspace' },
    { src: '/about/WhatsApp Image 2025-12-23 at 11.47.54.jpeg', alt: 'Innovation Hub' },
    { src: '/about/WhatsApp Image 2025-12-23 at 11.47.53.jpeg', alt: 'Team Meeting' },
    { src: '/about/WhatsApp Image 2025-12-23 at 11.47.55.jpeg', alt: 'Team Gathering' },
    { src: '/about/WhatsApp Image 2025-12-23 at 11.47.55 (1).jpeg', alt: 'Professional Event' },
    { src: '/about/WhatsApp Image 2025-12-23 at 11.37.07.jpeg', alt: 'Company Milestone' },
    { src: '/ITB/Mr. Luca - Ascentia Labs.jpeg', alt: 'Mr. Luca' },
    { src: '/ITB/Alice Lee.png', alt: 'Alice Lee' },
    { src: '/ITB/Z62_6351.jpg', alt: 'Team Collaboration' },
    { src: '/ITB/ITB Asia 2025 - Singapore.jpeg', alt: 'ITB Asia 2025' },
    { src: '/ITB/DSC_2607.jpg', alt: 'Conference' },
    { src: '/ITB/DSB_8009.jpg', alt: 'Team Event' },
    { src: '/ITB/Ascentia Labs Expo.jpeg', alt: 'Ascentia Labs Expo' },
    { src: '/ITB/image (45).png', alt: 'Exhibition Booth' },
    { src: '/ITB/image (46).png', alt: 'Event Showcase' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-950 to-black relative">
      <SEO {...seoData.about} />
      
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
        {/* Small Glowing Particles */}
        {[...Array(150)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute animate-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${2 + Math.random() * 6}px`,
              height: `${2 + Math.random() * 6}px`,
              backgroundColor: `rgba(${Math.random() > 0.5 ? '96, 165, 250' : '252, 211, 77'}, ${0.4 + Math.random() * 0.6})`,
              boxShadow: `0 0 ${8 + Math.random() * 15}px rgba(${Math.random() > 0.5 ? '96, 165, 250' : '252, 211, 77'}, 0.8)`,
              borderRadius: '50%',
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${10 + Math.random() * 20}s`
            }}
          ></div>
        ))}
      </div>

      {/* Company Overview */}
      <section className="pt-32 pb-32 md:pb-40 bg-slate-900/80 relative overflow-hidden" style={{ zIndex: 1 }}>
        {/* Smooth transition gradient at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent via-blue-950/50 to-blue-950 pointer-events-none"></div>
        
        <div className="container mx-auto px-6 md:px-8 lg:px-4 max-w-6xl relative z-10">
          <div 
            className={`transform transition-all duration-1000 ${
              isVisible.overview ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            id="overview"
            data-animate
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl text-white mb-6 leading-tight">
                100+ Projects Delivered. <br className="sm:hidden"/>4+ Countries. <br/>1 Shared Goal
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto mb-8"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-lg text-white leading-relaxed">
                  With A Proven Track Record Of Launching Our Own Proprietary Enterprise Solutions—Now Trusted By Over <span className="text-amber-400 font-semibold">100+</span> Enterprise Users—We Have A Unique "Insider" Understanding Of What It Takes To Scale. We Know The Stakes Because We've Been In Your Shoes.
                </p>
                <p className="text-lg text-white leading-relaxed">
                  At Ascentia Labs, We Translate <span className="text-amber-400 font-semibold">7+</span> Years Of Product-Building Expertise Into A Competitive Edge For Our Clients. Facilitating Clients Across <span className="text-amber-400 font-semibold">4+</span> Countries, We Don't Just Deliver Projects; We Engineer The Digital Transformation That Allows You To Redefine What's Possible In Your Industry.
                </p>
               
              </div>

              <div className="relative">
                {/* Connecting Line */}
                <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-blue-400 to-amber-400 opacity-30 -translate-y-1/2"></div>
                
                {/* Stats Grid */}
                <div className="relative grid grid-cols-2 gap-4 md:gap-6">
                  {/* Stat 1 */}
                  <div className="group relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 to-blue-400/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
                    <div className="relative bg-slate-800/80 backdrop-blur-sm p-4 md:p-8 rounded-2xl border-2 border-amber-400/30 hover:border-amber-400/60 transition-all hover:scale-105 hover:-translate-y-2 duration-300">
                      <div className="absolute -top-3 -left-3 md:-top-4 md:-left-4 w-6 h-6 md:w-8 md:h-8 bg-amber-400 rounded-full flex items-center justify-center text-slate-900 font-bold shadow-lg shadow-amber-400/50 text-xs md:text-base">1</div>
                      <div className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500 mb-2 md:mb-3">7+</div>
                      <div className="text-white font-medium text-sm md:text-lg">Business Years</div>
                    </div>
                  </div>

                  {/* Stat 2 */}
                  <div className="group relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-amber-400/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
                    <div className="relative bg-slate-800/80 backdrop-blur-sm p-4 md:p-8 rounded-2xl border-2 border-blue-400/30 hover:border-blue-400/60 transition-all hover:scale-105 hover:-translate-y-2 duration-300">
                      <div className="absolute -top-3 -right-3 md:-top-4 md:-right-4 w-6 h-6 md:w-8 md:h-8 bg-blue-400 rounded-full flex items-center justify-center text-slate-900 font-bold shadow-lg shadow-blue-400/50 text-xs md:text-base">2</div>
                      <div className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-2 md:mb-3">100+</div>
                      <div className="text-white font-medium text-sm md:text-lg">Projects Delivered</div>
                    </div>
                  </div>

                  {/* Stat 3 */}
                  <div className="group relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 to-blue-400/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
                    <div className="relative bg-slate-800/80 backdrop-blur-sm p-4 md:p-8 rounded-2xl border-2 border-amber-400/30 hover:border-amber-400/60 transition-all hover:scale-105 hover:-translate-y-2 duration-300">
                      <div className="absolute -bottom-3 -left-3 md:-bottom-4 md:-left-4 w-6 h-6 md:w-8 md:h-8 bg-amber-400 rounded-full flex items-center justify-center text-slate-900 font-bold shadow-lg shadow-amber-400/50 text-xs md:text-base">3</div>
                      <div className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500 mb-2 md:mb-3">10+</div>
                      <div className="text-white font-medium text-sm md:text-lg">Industries Catered</div>
                    </div>
                  </div>

                  {/* Stat 4 */}
                  <div className="group relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-amber-400/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
                    <div className="relative bg-slate-800/80 backdrop-blur-sm p-4 md:p-8 rounded-2xl border-2 border-blue-400/30 hover:border-blue-400/60 transition-all hover:scale-105 hover:-translate-y-2 duration-300">
                      <div className="absolute -bottom-3 -right-3 md:-bottom-4 md:-right-4 w-6 h-6 md:w-8 md:h-8 bg-blue-400 rounded-full flex items-center justify-center text-slate-900 font-bold shadow-lg shadow-blue-400/50 text-xs md:text-base">4</div>
                      <div className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-2 md:mb-3">4+</div>
                      <div className="text-white font-medium text-sm md:text-lg">Countries</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Team Section */}
      <section className="py-12 bg-slate-900/70 relative overflow-hidden" style={{ zIndex: 1 }}>
        {/* Smooth transition gradient at top */}
        <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-blue-950 to-transparent pointer-events-none"></div>
        {/* Smooth transition gradient at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent to-slate-900 pointer-events-none"></div>
        
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div 
            className={`transform transition-all duration-1000 ${
              isVisible.team ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            id="team"
            data-animate
          >
            <div className="text-center mb-8">
              <h2 className="text-4xl md:text-5xl text-white mb-4">
                Core Team
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto mb-4"></div>
              <p className="text-lg text-blue-200/80 max-w-3xl mx-auto">
                Meet the visionaries driving innovation and excellence at Ascentia Labs
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-10 max-w-6xl mx-auto">
              {teamMembers.map((member, index) => (
                <div 
                  key={index}
                  className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-blue-400/20 hover:border-amber-400/50 hover:-translate-y-2 w-full md:w-[calc(50%-12px)] lg:w-[350px]"
                >
                  <div className="relative overflow-hidden h-64 bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  <div className="p-5">
                    <h3 className="text-2xl text-white mb-1 ">{member.name}</h3>
                    <p className="text-amber-400 mb-2 text-base">{member.role}</p>
                    <p className="text-blue-200/80 text-sm leading-relaxed mb-3">{member.description}</p>
                    <p className="text-blue-300/70 text-sm mb-2">
                      <span className="text-white">Education:</span> {member.education}
                    </p>
                    <a 
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors text-sm"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                      LinkedIn
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    

      {/* Gallery Section */}
      <section className="py-20 bg-gradient-to-b from-slate-900/70 via-blue-950/70 to-black/70 relative overflow-hidden" style={{ zIndex: 1 }}>
        {/* Smooth transition gradient at top */}
        <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-slate-900 to-transparent pointer-events-none"></div>
        
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
      <section className="py-20 bg-black/80 relative overflow-hidden" style={{ zIndex: 1 }}>
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