import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Settings, 
  GraduationCap, 
  Building, 
  Star, 
  Home, 
  Plane, 
  BookOpen, 
  Wrench, 
  Heart, 
  Truck,
  Phone,
  Mail,
  Linkedin,
  Instagram,
  MessageCircle,
  ChevronDown,
  Code,
  Monitor,
  Smartphone,
  ShoppingCart,
  BarChart3
} from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const location = useLocation();

  // Handle body scroll lock when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('mobile-menu-open');
      // Store current scroll position
      const scrollY = window.scrollY;
      document.body.style.top = `-${scrollY}px`;
    } else {
      document.body.classList.remove('mobile-menu-open');
      // Restore scroll position
      const scrollY = document.body.style.top;
      document.body.style.top = '';
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    }

    // Cleanup on unmount
    return () => {
      document.body.classList.remove('mobile-menu-open');
      document.body.style.top = '';
    };
  }, [isMenuOpen]);

  return (
    <header className="bg-white shadow-lg fixed top-0 left-0 right-0 z-[9999] w-full">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Top Bar */}
        <div className="hidden md:flex justify-between items-center py-2 text-sm border-b border-gray-100">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-blue-600" />
              <a href="tel:+919356385744" className="text-gray-700 hover:text-blue-600 font-semibold">
                +91 9356385744
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4 text-blue-600" />
              <a href="mailto:support@ascentialabs.com" className="text-gray-700 hover:text-blue-600 font-semibold">
                support@ascentialabs.com
              </a>
            </div>
          </div>
          <div className="flex space-x-4">
            <a href="https://www.linkedin.com/company/ascentialabs/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://www.instagram.com/ascentialabs/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-pink-600 transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://wa.me/61412566906" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-green-600 transition-colors">
              <MessageCircle className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="flex justify-between items-center py-3 sm:py-4">
          <div className="flex items-center">
            <Link to="/">
              <img 
                src="/ascentialabslogopng.png" 
                alt="Ascentia Labs" 
                className="h-10 sm:h-12 w-auto hover:opacity-80 transition-opacity"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            <Link 
              to="/" 
              className={`font-medium transition-colors ${
                location.pathname === '/' 
                  ? 'text-blue-600' 
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`font-medium transition-colors ${
                location.pathname === '/about' 
                  ? 'text-blue-600' 
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              About Us
            </Link>
            <div className="relative group">
              <button className="text-gray-700 hover:text-blue-600 font-medium flex items-center transition-colors">
                Services 
                <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-80 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-gray-100">
                <div className="p-6">
                  <div className="grid grid-cols-1 gap-3">
                    <a  className="flex items-center py-3 px-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all">
                      <Code className="w-5 h-5 mr-3 text-blue-600" />
                      <div>
                        <div className="font-semibold">Custom Software Development</div>
                        <div className="text-sm text-gray-500">Tailored solutions for your business</div>
                      </div>
                    </a>
                    <a  className="flex items-center py-3 px-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all">
                      <Monitor className="w-5 h-5 mr-3 text-blue-600" />
                      <div>
                        <div className="font-semibold">Web Development</div>
                        <div className="text-sm text-gray-500">Modern, responsive websites</div>
                      </div>
                    </a>
                    <a href="#" className="flex items-center py-3 px-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all">
                      <Smartphone className="w-5 h-5 mr-3 text-blue-600" />
                      <div>
                        <div className="font-semibold">Mobile App Development</div>
                        <div className="text-sm text-gray-500">iOS & Android applications</div>
                      </div>
                    </a>
                    <a href="#" className="flex items-center py-3 px-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all">
                      <ShoppingCart className="w-5 h-5 mr-3 text-blue-600" />
                      <div>
                        <div className="font-semibold">E-Commerce Solutions</div>
                        <div className="text-sm text-gray-500">Online store development</div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative group">
              <Link 
                className={`font-medium transition-colors flex items-center ${
                  location.pathname === '/industries' 
                    ? 'text-blue-600' 
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Industries 
                <ChevronDown className="ml-1 w-4 h-4" />
              </Link>
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[700px] bg-gradient-to-br from-blue-50 via-white to-blue-100 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-blue-100">
                <div className="p-5">
                  <div className="grid grid-cols-3 gap-3">
                    {/* Column 1 */}
                    <Link to="complaint-management-system" className="flex items-center py-2 px-2 text-gray-700 hover:text-blue-600 hover:bg-white/60 rounded transition-all cursor-pointer">
                      <Settings className="w-5 h-5 mr-2 text-blue-600" />
                      <div className="font-medium text-sm">Custom CRM</div>
                    </Link>
                    
                    <Link to="interior-design-app-development" className="flex items-center py-2 px-2 text-gray-700 hover:text-blue-600 hover:bg-white/60 rounded transition-all cursor-pointer">
                      <Building className="w-5 h-5 mr-3 text-blue-600" />
                      <div className="font-medium text-sm whitespace-nowrap">Interior & Architecture</div>
                    </Link>

                    
                    <Link to="real-estate-app-development" className="flex items-center py-2 px-2 text-gray-700 hover:text-blue-600 hover:bg-white/60 rounded transition-all cursor-pointer">
                      <Home className="w-5 h-5 mr-2 text-blue-600" />
                      <div className="font-medium text-sm">Real Estate</div>
                    </Link>

                    {/* Column 2 */}
                    <Link to="education-app-development" className="flex items-center py-2 px-2 text-gray-700 hover:text-blue-600 hover:bg-white/60 rounded transition-all cursor-pointer">
                      <GraduationCap className="w-5 h-5 mr-2 text-blue-600" />
                      <div className="font-medium text-sm">Education</div>
                    </Link>
                    
                    <div className="flex items-center py-2 px-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded transition-all cursor-pointer">
                      <Star className="w-5 h-5 mr-2 text-blue-600" />
                      <div className="font-medium text-sm">Kindergarten</div>
                    </div>
                    
                    <Link to="travel-tourism-app-development" className="flex items-center py-2 px-2 text-gray-700 hover:text-blue-600 hover:bg-white/60 rounded transition-all cursor-pointer">
                      <Plane className="w-5 h-5 mr-2 text-blue-600" />
                      <div className="font-medium text-sm">Travel & Tourism</div>
                    </Link>

                    {/* Column 3 */}
                    <Link to="enterprise-resource-planning" className="flex items-center py-2 px-2 text-gray-700 hover:text-blue-600 hover:bg-white/60 rounded transition-all cursor-pointer">
                      <BarChart3 className="w-4 h-4 mr-2 text-blue-600" />
                      <div className="font-medium text-sm">ERP</div>
                    </Link>
                    
                    <Link to="library-management-system" className="flex items-center py-2 px-2 text-gray-700 hover:text-blue-600 hover:bg-white/60 rounded transition-all cursor-pointer">
                      <BookOpen className="w-4 h-4 mr-2 text-blue-600" />
                      <div className="font-medium text-sm">Library</div>
                    </Link>
                    
                    <div className="flex items-center py-2 px-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded transition-all cursor-pointer">
                      <Wrench className="w-4 h-4 mr-2 text-blue-600" />
                      <div className="font-medium text-sm">Manufacturing</div>
                    </div>

                    {/* Row 4 - Only 2 items */}
                    <Link to="healthcare-app-development" className="flex items-center py-2 px-2 text-gray-700 hover:text-blue-600 hover:bg-white/60 rounded transition-all cursor-pointer">
                      <Heart className="w-4 h-4 mr-2 text-blue-600" />
                      <div className="font-medium text-sm">Health Care</div>
                    </Link>

                    <Link to="logistics-software-development" className="flex items-center py-2 px-2 text-gray-700 hover:text-blue-600 hover:bg-white/60 rounded transition-all cursor-pointer">
                      <Truck className="w-4 h-4 mr-2 text-blue-600" />
                      <div className="font-medium text-sm">Logistics</div>
                    </Link>
                    
                    <div></div> {/* Empty cell for alignment */}
                  </div>
                
                </div>
              </div>
            </div>
            <div className="relative group">
              <button className="text-gray-700 hover:text-blue-600 font-medium flex items-center transition-colors">
                Products 
                <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-80 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-gray-100">
                <div className="p-6">
                  <div className="grid grid-cols-1 gap-3">
                    <a href="https://www.routemaestro.com" target="_blank" rel="noopener noreferrer" className="flex items-center py-3 px-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all">
                      <img src="/RM.png" alt="Route Maestro" className="w-8 h-8 mr-3" />
                      <div>
                        <div className="font-semibold">Route Maestro</div>
                        <div className="text-xs text-gray-500">AI-Powered B2B Travel SaaS Platform</div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative group">
              <button className="text-gray-700 hover:text-blue-600 font-medium flex items-center transition-colors">
                Resources 
                <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-80 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-gray-100">
                <div className="p-6">
                  <div className="grid grid-cols-1 gap-3">
                    <a href="#" className="flex items-center py-3 px-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all">
                      <BookOpen className="w-5 h-5 mr-3 text-blue-600" />
                      <div>
                        <div className="font-semibold">Blogs</div>
                        <div className="text-sm text-gray-500">Latest insights and articles</div>
                      </div>
                    </a>
                    <a href="#" className="flex items-center py-3 px-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all">
                      <BarChart3 className="w-5 h-5 mr-3 text-blue-600" />
                      <div>
                        <div className="font-semibold">Case Studies</div>
                        <div className="text-sm text-gray-500">Success stories and examples</div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </nav>

          <button className="hidden md:block bg-gradient-to-r from-blue-600 to-black text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105">
            Get In Touch
          </button>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
              if (!isMenuOpen) {
                setIsIndustriesOpen(false);
                setIsServicesOpen(false);
                setIsProductsOpen(false);
                setIsResourcesOpen(false);
              }
            }}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`bg-gray-600 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
              <span className={`bg-gray-600 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`bg-gray-600 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100 max-h-[calc(100vh-140px)] overflow-y-auto">
            <nav className="flex flex-col space-y-2">
              <Link 
                to="/" 
                className={`font-medium transition-colors py-2 px-4 rounded ${
                  location.pathname === '/' 
                    ? 'text-blue-600 bg-blue-50' 
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              
              <Link 
                to="/about" 
                className={`font-medium transition-colors py-2 px-4 rounded ${
                  location.pathname === '/about' 
                    ? 'text-blue-600 bg-blue-50' 
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>

              {/* Services Accordion */}
              <div className="border-b border-gray-100">
                <button 
                  className="w-full flex items-center justify-between py-2 px-4 text-gray-700 hover:text-blue-600 hover:bg-gray-50 font-medium rounded transition-colors"
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                >
                  Services
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isServicesOpen && (
                  <div className="pb-2 space-y-1 max-h-60 overflow-y-auto">
                    <a className="flex items-center py-2 px-6 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded transition-all">
                      <Code className="w-4 h-4 mr-3 text-blue-600" />
                      <span className="text-sm">Custom Software Development</span>
                    </a>
                    <a className="flex items-center py-2 px-6 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded transition-all">
                      <Monitor className="w-4 h-4 mr-3 text-blue-600" />
                      <span className="text-sm">Web Development</span>
                    </a>
                    <a className="flex items-center py-2 px-6 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded transition-all">
                      <Smartphone className="w-4 h-4 mr-3 text-blue-600" />
                      <span className="text-sm">Mobile App Development</span>
                    </a>
                    <a className="flex items-center py-2 px-6 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded transition-all">
                      <ShoppingCart className="w-4 h-4 mr-3 text-blue-600" />
                      <span className="text-sm">E-Commerce Solutions</span>
                    </a>
                  </div>
                )}
              </div>

              {/* Industries Accordion */}
              <div className="border-b border-gray-100">
                <button 
                  className="w-full flex items-center justify-between py-3 px-4 bg-blue-600 text-white font-medium rounded transition-colors"
                  onClick={() => setIsIndustriesOpen(!isIndustriesOpen)}
                >
                  INDUSTRIES
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isIndustriesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isIndustriesOpen && (
                  <div className="pb-2 space-y-1 bg-white max-h-80 overflow-y-auto">
                    <Link to="complaint-management-system" className="flex items-center py-2 px-6 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded transition-all" onClick={() => {setIsMenuOpen(false); setIsIndustriesOpen(false);}}>
                      <Settings className="w-4 h-4 mr-3 text-blue-600" />
                      <span className="text-sm">Custom CRM</span>
                    </Link>
                    <Link to="education-app-development" className="flex items-center py-2 px-6 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded transition-all" onClick={() => {setIsMenuOpen(false); setIsIndustriesOpen(false);}}>
                      <GraduationCap className="w-4 h-4 mr-3 text-blue-600" />
                      <span className="text-sm">Education</span>
                    </Link>
                    <Link to="enterprise-resource-planning" className="flex items-center py-2 px-6 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded transition-all" onClick={() => {setIsMenuOpen(false); setIsIndustriesOpen(false);}}>
                      <BarChart3 className="w-4 h-4 mr-3 text-blue-600" />
                      <span className="text-sm">ERP</span>
                    </Link>
                    <Link to="healthcare-app-development" className="flex items-center py-2 px-6 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded transition-all" onClick={() => {setIsMenuOpen(false); setIsIndustriesOpen(false);}}>
                      <Heart className="w-4 h-4 mr-3 text-blue-600" />
                      <span className="text-sm">Health Care</span>
                    </Link>
                    <Link to="interior-design-app-development" className="flex items-center py-2 px-6 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded transition-all" onClick={() => {setIsMenuOpen(false); setIsIndustriesOpen(false);}}>
                      <Building className="w-4 h-4 mr-3 text-blue-600" />
                      <span className="text-sm">Interior & Architecture</span>
                    </Link>
                    <div className="flex items-center py-2 px-6 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded transition-all cursor-pointer">
                      <Star className="w-4 h-4 mr-3 text-blue-600" />
                      <span className="text-sm">Kindergarten</span>
                    </div>
                    <Link to="library-management-system" className="flex items-center py-2 px-6 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded transition-all" onClick={() => {setIsMenuOpen(false); setIsIndustriesOpen(false);}}>
                      <BookOpen className="w-4 h-4 mr-3 text-blue-600" />
                      <span className="text-sm">Library</span>
                    </Link>
                    <Link to="logistics-software-development" className="flex items-center py-2 px-6 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded transition-all" onClick={() => {setIsMenuOpen(false); setIsIndustriesOpen(false);}}>
                      <Truck className="w-4 h-4 mr-3 text-blue-600" />
                      <span className="text-sm">Logistics</span>
                    </Link>  
                    <div className="flex items-center py-2 px-6 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded transition-all cursor-pointer">
                      <Wrench className="w-4 h-4 mr-3 text-blue-600" />
                      <span className="text-sm">Manufacturing</span>
                    </div>
                    <Link to="real-estate-app-development" className="flex items-center py-2 px-6 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded transition-all" onClick={() => {setIsMenuOpen(false); setIsIndustriesOpen(false);}}>
                      <Home className="w-4 h-4 mr-3 text-blue-600" />
                      <span className="text-sm">Real Estate</span>
                    </Link>
                    <Link to="travel-tourism-app-development" className="flex items-center py-2 px-6 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded transition-all" onClick={() => {setIsMenuOpen(false); setIsIndustriesOpen(false);}}>
                      <Plane className="w-4 h-4 mr-3 text-blue-600" />
                      <span className="text-sm">Travel & Tourism</span>
                    </Link>
                  </div>
                )}
              </div>

              {/* Products Accordion */}
              <div className="border-b border-gray-100">
                <button 
                  className="w-full flex items-center justify-between py-2 px-4 text-gray-700 hover:text-blue-600 hover:bg-gray-50 font-medium rounded transition-colors"
                  onClick={() => setIsProductsOpen(!isProductsOpen)}
                >
                  Products
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isProductsOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isProductsOpen && (
                  <div className="pb-2 space-y-1 max-h-60 overflow-y-auto">
                    <a href="https://www.routemaestro.com" target="_blank" rel="noopener noreferrer" className="flex items-center py-2 px-6 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded transition-all">
                      <img src="/RM.png" alt="Route Maestro" className="w-8 h-8 mr-3" />
                      <span className="text-sm">Route Maestro</span>
                    </a>
                  </div>
                )}
              </div>

              {/* Resources Accordion */}
              <div className="border-b border-gray-100">
                <button 
                  className="w-full flex items-center justify-between py-2 px-4 text-gray-700 hover:text-blue-600 hover:bg-gray-50 font-medium rounded transition-colors"
                  onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                >
                  Resources
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isResourcesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isResourcesOpen && (
                  <div className="pb-2 space-y-1 max-h-60 overflow-y-auto">
                    <a href="#" className="flex items-center py-2 px-6 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded transition-all">
                      <BookOpen className="w-4 h-4 mr-3 text-blue-600" />
                      <span className="text-sm">Blogs</span>
                    </a>
                    <a href="#" className="flex items-center py-2 px-6 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded transition-all">
                      <BarChart3 className="w-4 h-4 mr-3 text-blue-600" />
                      <span className="text-sm">Case Studies</span>
                    </a>
                  </div>
                )}
              </div>

              
              <button className="bg-gradient-to-r from-blue-600 to-black text-white px-6 py-3 rounded-full w-fit mt-4 hover:shadow-lg transition-all duration-300" onClick={() => setIsMenuOpen(false)}>
                Get In Touch
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;