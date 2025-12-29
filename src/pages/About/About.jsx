import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
      name: 'John Anderson',
      role: 'Chief Executive Officer',
      image: '/about/image.png',
      description: 'Visionary leader with 15+ years of experience in technology innovation and business transformation.'
    },
    {
      name: 'Sarah Mitchell',
      role: 'Chief Technology Officer',
      image: '/about/image (1).png',
      description: 'Tech pioneer driving cutting-edge solutions and leading our engineering excellence initiatives.'
    },
    {
      name: 'Michael Chen',
      role: 'Chief Operations Officer',
      image: '/about/WhatsApp Image 2025-12-23 at 11.37.07.jpeg',
      description: 'Operations expert ensuring seamless delivery and exceptional client satisfaction across all projects.'
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
      {/* Company Overview */}
      <section className="pt-32 pb-32 md:pb-40 bg-slate-900 relative overflow-hidden">
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
              <h2 className="text-4xl md:text-5xl text-white mb-6">
                Who We Are
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto mb-8"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-lg text-blue-200/80 leading-relaxed">
                  At Ascentia Labs, we excel in fostering collaboration and innovation, leveraging cutting-edge 
                  technologies to craft tailored, industry-specific solutions.
                </p>
                <p className="text-lg text-blue-200/80 leading-relaxed">
                  With a steadfast commitment to redefining industry standards, we empower our clients to achieve 
                  unparalleled business growth and success through digital transformation.
                </p>
                <p className="text-lg text-blue-200/80 leading-relaxed">
                  Our team of experts brings decades of combined experience in delivering solutions that not only 
                  meet but exceed expectations, driving measurable results for businesses worldwide.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-blue-400/20 hover:border-amber-400/50 transition-all">
                  <div className="text-4xl text-amber-400 mb-2">7+</div>
                  <div className="text-blue-200/80">Business Years</div>
                </div>
                <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-blue-400/20 hover:border-amber-400/50 transition-all">
                  <div className="text-4xl text-amber-400 mb-2">100+</div>
                  <div className="text-blue-200/80">Projects Delivered</div>
                </div>
                <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-blue-400/20 hover:border-amber-400/50 transition-all">
                  <div className="text-4xl text-amber-400 mb-2">10+</div>
                  <div className="text-blue-200/80">Industries Catered</div>
                </div>
                <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-blue-400/20 hover:border-amber-400/50 transition-all">
                  <div className="text-4xl text-amber-400 mb-2">4+</div>
                  <div className="text-blue-200/80">Countries</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Team Section */}
      <section className="py-20 bg-slate-900 relative overflow-hidden">
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
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl text-white mb-6">
                Core Team
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto mb-6"></div>
              <p className="text-xl text-blue-200/80 max-w-3xl mx-auto">
                Meet the visionaries driving innovation and excellence at Ascentia Labs
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div 
                  key={index}
                  className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-blue-400/20 hover:border-amber-400/50 hover:-translate-y-2"
                >
                  <div className="relative overflow-hidden h-80 bg-gradient-to-br from-slate-700 to-slate-800">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-2xl text-white mb-2">{member.name}</h3>
                    <p className="text-amber-400 mb-4">{member.role}</p>
                    <p className="text-blue-200/80 leading-relaxed">{member.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 relative overflow-hidden">
        {/* Smooth transition gradient at top */}
        <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-slate-900 to-transparent pointer-events-none"></div>
        {/* Smooth transition gradient at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent to-slate-900 pointer-events-none"></div>
        
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div 
            className={`transform transition-all duration-1000 ${
              isVisible.values ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            id="values"
            data-animate
          >
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-400/20 hover:border-amber-400/50 group hover:-translate-y-2">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg flex-shrink-0">
                    <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl text-white">Our Mission</h3>
                </div>
                <p className="text-blue-200/80 leading-relaxed">
                  Empowering businesses through innovative technology solutions that drive growth, efficiency, and competitive advantage in the digital age.
                </p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-400/20 hover:border-amber-400/50 group hover:-translate-y-2">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg flex-shrink-0">
                    <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl text-white">Our Vision</h3>
                </div>
                <p className="text-blue-200/80 leading-relaxed">
                  To be the global leader in transforming business challenges into breakthrough technology solutions that shape the future of industries.
                </p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-400/20 hover:border-amber-400/50 group hover:-translate-y-2">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg flex-shrink-0">
                    <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl text-white">Our Values</h3>
                </div>
                <p className="text-blue-200/80 leading-relaxed">
                  Excellence, integrity, innovation, and client success guide every decision we make and every solution we deliver to our partners.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-gradient-to-b from-slate-900 via-blue-950 to-black relative overflow-hidden">
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
