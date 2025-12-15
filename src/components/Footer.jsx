import { Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const usefulLinks = [
    { name: "Software Engineering", route: "/software-engineering" },
    { name: "AI ML Services", route: "/ai-ml-services" },
    { name: "Mobile Application", route: "/mobile-application" },
    { name: "Digital Transformation", route: "/digital-transformation" },
    { name: "Technology Consultation ", route: "/technology-consultation-mis" }
  ];

  const aboutLinks = [
    { name: "About Us", route: "/about-us" },
    { name: "Send A Message", route: "/contact-us" },
    { name: "Our Blogs", route: "/blog" },
    { name: "Sitemap", route: "/sitemap_index.xml", external: true }
  ];

  return (
    <footer className="bg-black text-white relative overflow-hidden">

      {/* Call to Action Section */}
      <div className="relative z-10 py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            {/* Footsteps Icon */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                <svg className="w-16 h-16 sm:w-20 sm:h-20 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                {/* Top dots */}
                <div className="absolute -top-4 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-pulse"></div>
                <div className="absolute -top-6 left-2 w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                
                {/* Right side dots */}
                <div className="absolute top-2 -right-8 w-5 h-5 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                <div className="absolute bottom-1 -right-6 w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
                
                {/* Bottom dots */}
                <div className="absolute -bottom-4 -right-1 w-5 h-5 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
                <div className="absolute -bottom-6 left-3 w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-pulse" style={{animationDelay: '0.3s'}}></div>
                
                {/* Left side dots */}
                <div className="absolute top-3 -left-8 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-pulse" style={{animationDelay: '0.8s'}}></div>
                <div className="absolute bottom-2 -left-6 w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-pulse" style={{animationDelay: '1.2s'}}></div>
              </div>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 px-4">
              Ready To Take Next Step?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-400 mb-8 max-w-2xl mx-auto px-4">
              Contact with our experts today!
            </p>
            
            <Link to="/contact-us">
              <button className="group relative px-8 py-4 bg-white text-black font-bold text-lg rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden">
                <span className="relative z-10">Get In Touch</span>
                <div className="absolute inset-0 bg-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-12 sm:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
            
            {/* Our Address */}
            <div className="lg:col-span-1">
              <h3 className="text-lg sm:text-xl font-bold mb-6 text-gray-300">OUR ADDRESS</h3>
              <div className="space-y-4 text-gray-400">
                <div className="leading-relaxed">
                  <p className="font-medium mb-1">SBS Nagar, Ludhiana</p>
                </div>
                <div className="leading-relaxed">
                  <p className="font-medium mb-1">Krishna Nagar, Ludhiana</p>
                </div>
                <div className="leading-relaxed">
                  <p className="font-medium mb-1">Chhattarpur, New Delhi</p>
                </div>
                <div className="leading-relaxed">
                  <p className="font-medium mb-1">Melbourne, Australia</p>
                </div>
              </div>
            </div>

            {/* Our Contacts */}
            <div className="lg:col-span-1 min-w-0">
              <h3 className="text-lg sm:text-xl font-bold mb-6 text-gray-300">OUR CONTACTS</h3>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <a href="tel:+919356385744" className="text-gray-400 hover:text-white transition-colors duration-300 font-medium flex gap-1">
                  <Phone className="hidden md:block w-5 h-5 text-gray-500 flex-shrink-0" />

                    +91 9356385744
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <a href="tel:+61412566906" className="text-gray-400 hover:text-white transition-colors duration-300 font-medium flex gap-1">
                  <Phone className="hidden md:block w-5 h-5 text-gray-500 flex-shrink-0" />

                    +61 412566906
                  </a>
                </div>
              </div>
            </div>

            {/* Useful Links */}
            <div className="lg:col-span-1">
              <h3 className="text-lg sm:text-xl font-bold mb-6 text-gray-300">USEFUL LINKS</h3>
              <ul className="space-y-3">
                {usefulLinks.map((link, index) => (
                  <li key={index}>
                    <Link to={link.route} className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group">
                      <span className="w-1.5 h-1.5 bg-gray-600 rounded-full mr-3 group-hover:bg-white transition-colors duration-300"></span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* About */}
            <div className="lg:col-span-1">
              <h3 className="text-lg sm:text-xl font-bold mb-6 text-gray-300">ABOUT</h3>
              <ul className="space-y-3">
                {aboutLinks.map((link, index) => (
                  <li key={index}>
                    {link.external ? (
                      <a 
                        href={link.route} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                      >
                        <span className="w-1.5 h-1.5 bg-gray-600 rounded-full mr-3 group-hover:bg-white transition-colors duration-300"></span>
                        {link.name}
                      </a>
                    ) : (
                      <Link to={link.route} className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group">
                        <span className="w-1.5 h-1.5 bg-gray-600 rounded-full mr-3 group-hover:bg-white transition-colors duration-300"></span>
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Media */}
            <div className="lg:col-span-1">
              <h3 className="text-lg sm:text-xl font-bold mb-6 text-gray-300">SOCIAL MEDIA</h3>
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/company/ascentialabs/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-[#0A66C2] rounded-full flex items-center justify-center hover:bg-[#004182] transition-all duration-300 hover:scale-110 shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd"/>
                  </svg>
                </a>
                <a href="https://www.instagram.com/ascentialabs/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gradient-to-br from-[#833AB4] via-[#E1306C] to-[#F77737] rounded-full flex items-center justify-center hover:opacity-90 transition-all duration-300 hover:scale-110 shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="https://wa.me/61412566906" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center hover:bg-[#128C7E] transition-all duration-300 hover:scale-110 shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="relative z-10 border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-6">
          <div className="flex flex-col  sm:flex-row justify-center items-center space-y-4 sm:space-y-0">
            <div className="text-gray-400 text-center text-sm">
              © {new Date().getFullYear()} Ascentia Labs. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;