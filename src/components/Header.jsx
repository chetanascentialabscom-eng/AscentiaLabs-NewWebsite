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
  BarChart3,
  Brain,
  Lightbulb,
  Package,
  Send,
  PenTool,
  Workflow,
  TrendingUp,
  Cpu
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
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[800px] bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-gray-100">
                <div className="p-5">
                  <div className="grid grid-cols-3 gap-3">
                    <Link to="/technology-consultation-mis" className="flex items-center py-2 px-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded transition-all cursor-pointer">
                      <Lightbulb className="w-5 h-5 mr-2 text-blue-600" />
                      <div>
                        <div className="font-medium text-sm whitespace-nowrap">Technology Consultation & MIS</div>
                        <div className="text-xs text-gray-500">Strategic technology guidance</div>
                      </div>
                    </Link>
                    <Link to="/software-engineering" className="flex items-center py-2 px-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded transition-all cursor-pointer">
                      <Cpu className="w-5 h-5 mr-2 text-blue-600" />
                      <div>
                        <div className="font-medium text-sm whitespace-nowrap">Software Engineering</div>
                        <div className="text-xs text-gray-500">Custom software development</div>
                      </div>
                    </Link>
                    <Link to="/ai-ml-services" className="flex items-center py-2 px-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded transition-all cursor-pointer">
                      <Brain className="w-5 h-5 mr-2 text-blue-600" />
                      <div>
                        <div className="font-medium text-sm whitespace-nowrap">AI ML Services</div>
                        <div className="text-xs text-gray-500">Artificial intelligence solutions</div>
                      </div>
                    </Link>
                    <a className="flex items-center py-2 px-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded transition-all cursor-pointer">
                      <Package className="w-5 h-5 mr-2 text-blue-600" />
                      <div>
                        <div className="font-medium text-sm whitespace-nowrap">Application Modernisation</div>
                        <div className="text-xs text-gray-500">Legacy system upgrades</div>
                      </div>
                    </a>
                    <a className="flex items-center py-2 px-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded transition-all cursor-pointer">
                      <Workflow className="w-5 h-5 mr-2 text-blue-600" />
                      <div>
                        <div className="font-medium text-sm whitespace-nowrap">Digital Transformation</div>
                        <div className="text-xs text-gray-500">Business digitalization</div>
                      </div>
                    </a>
                    <a className="flex items-center py-2 px-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded transition-all cursor-pointer">
                      <PenTool className="w-5 h-5 mr-2 text-blue-600" />
                      <div>
                        <div className="font-medium text-sm whitespace-nowrap">Ideation & Design Strategy</div>
                        <div className="text-xs text-gray-500">Creative design solutions</div>
                      </div>
                    </a>
                    <a className="flex items-center py-2 px-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded transition-all cursor-pointer">
                      <Send className="w-5 h-5 mr-2 text-blue-600" />
                      <div>
                        <div className="font-medium text-sm whitespace-nowrap">Go-To-Market</div>
                        <div className="text-xs text-gray-500">Product launch strategies</div>
                      </div>
                    </a>
                    <a className="flex items-center py-2 px-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded transition-all cursor-pointer">
                      <Smartphone className="w-5 h-5 mr-2 text-blue-600" />
                      <div>
                        <div className="font-medium text-sm whitespace-nowrap">Mobile Application</div>
                        <div className="text-xs text-gray-500">iOS & Android development</div>
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
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[800px] bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-gray-100">
                <div className="p-5">
                  <div className="grid grid-cols-3 gap-3">
                    <Link to="complaint-management-system" className="flex items-center py-2 px-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded transition-all cursor-pointer">
                      <Settings className="w-5 h-5 mr-2 text-blue-600" />
                      <div>
                        <div className="font-medium text-sm">Custom CRM</div>
                        <div className="text-xs text-gray-500">Customer relationship management</div>
                      </div>
                    </Link>
                    
                    <Link to="interior-design-app-development" className="flex items-center py-2 px-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded transition-all cursor-pointer">
                      <Building className="w-5 h-5 mr-2 text-blue-600" />
                      <div>
                        <div className="font-medium text-sm whitespace-nowrap">Interior & Architecture</div>
                        <div className="text-xs text-gray-500">Design & planning solutions</div>
                      </div>
                    </Link>

                    <Link to="real-estate-app-development" className="flex items-center py-2 px-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded transition-all cursor-pointer">
                      <Home className="w-5 h-5 mr-2 text-blue-600" />
                      <div>
                        <div className="font-medium text-sm">Real Estate</div>
                        <div className="text-xs text-gray-500">Property management systems</div>
                      </div>
                    </Link>

                    <Link to="education-app-development" className="flex items-center py-2 px-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded transition-all cursor-pointer">
                      <GraduationCap className="w-5 h-5 mr-2 text-blue-600" />
                      <div>
                        <div className="font-medium text-sm">Education</div>
                        <div className="text-xs text-gray-500">Learning management platforms</div>
                      </div>
                    </Link>
                    
                    <Link to="kindergarten-management-system" className="flex items-center py-2 px-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded transition-all cursor-pointer">
                      <Star className="w-5 h-5 mr-2 text-blue-600" />
                      <div>
                        <div className="font-medium text-sm">Kindergarten</div>
                        <div className="text-xs text-gray-500">Early education systems</div>
                      </div>
                    </Link>
                    
                    <Link to="travel-tourism-app-development" className="flex items-center py-2 px-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded transition-all cursor-pointer">
                      <Plane className="w-5 h-5 mr-2 text-blue-600" />
                      <div>
                        <div className="font-medium text-sm">Travel & Tourism</div>
                        <div className="text-xs text-gray-500">Booking & travel solutions</div>
                      </div>
                    </Link>

                    <Link to="enterprise-resource-planning" className="flex items-center py-2 px-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded transition-all cursor-pointer">
                      <BarChart3 className="w-5 h-5 mr-2 text-blue-600" />
                      <div>
                        <div className="font-medium text-sm">ERP</div>
                        <div className="text-xs text-gray-500">Enterprise resource planning</div>
                      </div>
                    </Link>
                    
                    <Link to="library-management-system" className="flex items-center py-2 px-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded transition-all cursor-pointer">
                      <BookOpen className="w-5 h-5 mr-2 text-blue-600" />
                      <div>
                        <div className="font-medium text-sm">Library</div>
                        <div className="text-xs text-gray-500">Library management systems</div>
                      </div>
                    </Link>
                    
                    <Link to="manufacturing-app-development" className="flex items-center py-2 px-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded transition-all cursor-pointer">
                      <Wrench className="w-5 h-5 mr-2 text-blue-600" />
                      <div>
                        <div className="font-medium text-sm">Manufacturing</div>
                        <div className="text-xs text-gray-500">Production management tools</div>
                      </div>
                    </Link>

                    <Link to="healthcare-app-development" className="flex items-center py-2 px-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded transition-all cursor-pointer">
                      <Heart className="w-5 h-5 mr-2 text-blue-600" />
                      <div>
                        <div className="font-medium text-sm">Health Care</div>
                        <div className="text-xs text-gray-500">Medical & healthcare solutions</div>
                      </div>
                    </Link>

                    <Link to="logistics-software-development" className="flex items-center py-2 px-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded transition-all cursor-pointer">
                      <Truck className="w-5 h-5 mr-2 text-blue-600" />
                      <div>
                        <div className="font-medium text-sm">Logistics</div>
                        <div className="text-xs text-gray-500">Supply chain management</div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative group">
              <button className="text-gray-700 hover:text-blue-600 font-medium flex items-center transition-colors">
                Products 
                <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[700px] bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-gray-100">
                <div className="p-5">
                  <div className="grid grid-cols-2 gap-4">
                    <a href="https://www.routemaestro.com" target="_blank" rel="noopener noreferrer" className="flex items-center py-3 px-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded transition-all">
                      <img src="/RM.png" alt="RouteMaestro" className="w-12 h-12 mr-6 flex-shrink-0 object-contain" />
                      <div>
                        <div className="font-medium text-sm">RouteMaestro</div>
                        <div className="text-xs text-gray-500">AI Powered Travel Planning And Booking Software</div>
                      </div>
                    </a>
                    <a href="#" className="flex items-center py-3 px-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded transition-all">
                      <img src="/SoftwareProducts/Insurance Safe.png" alt="InsuranceSafe" className="w-16 h-16 mr-3 flex-shrink-0 object-contain" />
                      <div>
                        <div className="font-medium text-sm">InsuranceSafe</div>
                        <div className="text-xs text-gray-500">Insurance Management Software</div>
                      </div>
                    </a>
                    <a href="#" className="flex items-center py-3 px-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded transition-all">
                      <img src="/SoftwareProducts/Frame 1000002695.png" alt="KinderConnect" className="w-16 h-16 mr-3 flex-shrink-0 object-contain" />
                      <div>
                        <div className="font-medium text-sm">KinderConnect</div>
                        <div className="text-xs text-gray-500">Kindergarten Management Software</div>
                      </div>
                    </a>
                    <a href="#" className="flex items-center py-3 px-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded transition-all">
                      <img src="/SoftwareProducts/JusDoIt.png" alt="JusDoIt" className="w-16 h-16 mr-3 flex-shrink-0 object-contain" />
                      <div>
                        <div className="font-medium text-sm">JusDoIt</div>
                        <div className="text-xs text-gray-500">Task Management Software</div>
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
                <div className="p-5">
                  <div className="grid grid-cols-1 gap-3">
                    <Link to="/blogs" className="flex items-center py-2 px-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded transition-all">
                      <BookOpen className="w-5 h-5 mr-2 text-blue-600" />
                      <div>
                        <div className="font-medium text-sm">Blogs</div>
                        <div className="text-xs text-gray-500">Latest insights and articles</div>
                      </div>
                    </Link>
                    <a href="#" className="flex items-center py-2 px-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded transition-all">
                      <BarChart3 className="w-5 h-5 mr-2 text-blue-600" />
                      <div>
                        <div className="font-medium text-sm">Case Studies</div>
                        <div className="text-xs text-gray-500">Success stories and examples</div>
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
                    <Link to="/technology-consultation-mis" className="flex items-center py-2 px-6 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded transition-all cursor-pointer" onClick={() => {setIsMenuOpen(false); setIsServicesOpen(false);}}>
                      <Lightbulb className="w-4 h-4 mr-3 text-blue-600" />
                      <span className="text-sm">Technology Consultation & MIS</span>
                    </Link>
                    <Link to="/software-engineering" className="flex items-center py-2 px-6 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded transition-all cursor-pointer" onClick={() => {setIsMenuOpen(false); setIsServicesOpen(false);}}>
                      <Cpu className="w-4 h-4 mr-3 text-blue-600" />
                      <span className="text-sm">Software Engineering</span>
                    </Link>
                    <Link to="/ai-ml-services" className="flex items-center py-2 px-6 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded transition-all cursor-pointer" onClick={() => {setIsMenuOpen(false); setIsServicesOpen(false);}}>
                      <Brain className="w-4 h-4 mr-3 text-blue-600" />
                      <span className="text-sm">AI ML Services</span>
                    </Link>
                    <a className="flex items-center py-2 px-6 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded transition-all cursor-pointer">
                      <Package className="w-4 h-4 mr-3 text-blue-600" />
                      <span className="text-sm">Application Modernisation</span>
                    </a>
                    <a className="flex items-center py-2 px-6 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded transition-all cursor-pointer">
                      <Workflow className="w-4 h-4 mr-3 text-blue-600" />
                      <span className="text-sm">Digital Transformation</span>
                    </a>
                    <a className="flex items-center py-2 px-6 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded transition-all cursor-pointer">
                      <PenTool className="w-4 h-4 mr-3 text-blue-600" />
                      <span className="text-sm">Ideation & Design Strategy</span>
                    </a>
                    <a className="flex items-center py-2 px-6 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded transition-all cursor-pointer">
                      <Send className="w-4 h-4 mr-3 text-blue-600" />
                      <span className="text-sm">Go-To-Market</span>
                    </a>
                    <a className="flex items-center py-2 px-6 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded transition-all cursor-pointer">
                      <Smartphone className="w-4 h-4 mr-3 text-blue-600" />
                      <span className="text-sm">Mobile Application</span>
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
                    <Link to="kindergarten-management-system" className="flex items-center py-2 px-6 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded transition-all" onClick={() => {setIsMenuOpen(false); setIsIndustriesOpen(false);}}>
                      <Star className="w-4 h-4 mr-3 text-blue-600" />
                      <span className="text-sm">Kindergarten</span>
                    </Link>
                    <Link to="library-management-system" className="flex items-center py-2 px-6 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded transition-all" onClick={() => {setIsMenuOpen(false); setIsIndustriesOpen(false);}}>
                      <BookOpen className="w-4 h-4 mr-3 text-blue-600" />
                      <span className="text-sm">Library</span>
                    </Link>
                    <Link to="logistics-software-development" className="flex items-center py-2 px-6 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded transition-all" onClick={() => {setIsMenuOpen(false); setIsIndustriesOpen(false);}}>
                      <Truck className="w-4 h-4 mr-3 text-blue-600" />
                      <span className="text-sm">Logistics</span>
                    </Link>  
                    <Link to="manufacturing-app-development" className="flex items-center py-2 px-6 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded transition-all" onClick={() => {setIsMenuOpen(false); setIsIndustriesOpen(false);}}>
                      <Wrench className="w-4 h-4 mr-3 text-blue-600" />
                      <span className="text-sm">Manufacturing</span>
                    </Link>
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
                  <div className="pb-2 space-y-2 max-h-80 overflow-y-auto px-2">
                    <a href="https://www.routemaestro.com" target="_blank" rel="noopener noreferrer" className="flex items-center py-3 px-4 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all" onClick={() => {setIsMenuOpen(false); setIsProductsOpen(false);}}>
                      <img src="/RM.png" alt="RouteMaestro" className="w-14 h-14 mr-4 object-contain flex-shrink-0" />
                      <div>
                        <div className="text-sm font-medium text-gray-800">RouteMaestro</div>
                        <div className="text-xs text-gray-500">Travel Planning Software</div>
                      </div>
                    </a>
                    <a href="#" className="flex items-center py-3 px-4 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all" onClick={() => {setIsMenuOpen(false); setIsProductsOpen(false);}}>
                      <img src="/SoftwareProducts/Insurance Safe.png" alt="InsuranceSafe" className="w-14 h-14 mr-4 object-contain flex-shrink-0" />
                      <div>
                        <div className="text-sm font-medium text-gray-800">InsuranceSafe</div>
                        <div className="text-xs text-gray-500">Insurance Management</div>
                      </div>
                    </a>
                    <a href="#" className="flex items-center py-3 px-4 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all" onClick={() => {setIsMenuOpen(false); setIsProductsOpen(false);}}>
                      <img src="/SoftwareProducts/Frame 1000002695.png" alt="KinderConnect" className="w-14 h-14 mr-4 object-contain flex-shrink-0" />
                      <div>
                        <div className="text-sm font-medium text-gray-800">KinderConnect</div>
                        <div className="text-xs text-gray-500">Kindergarten Management</div>
                      </div>
                    </a>
                    <a href="#" className="flex items-center py-3 px-4 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all" onClick={() => {setIsMenuOpen(false); setIsProductsOpen(false);}}>
                      <img src="/SoftwareProducts/JusDoIt.png" alt="JusDoIt" className="w-14 h-14 mr-4 object-contain flex-shrink-0" />
                      <div>
                        <div className="text-sm font-medium text-gray-800">JusDoIt</div>
                        <div className="text-xs text-gray-500">Task Management</div>
                      </div>
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
                    <Link to="/blogs" className="flex items-center py-2 px-6 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded transition-all" onClick={() => {setIsMenuOpen(false); setIsResourcesOpen(false);}}>
                      <BookOpen className="w-4 h-4 mr-3 text-blue-600" />
                      <span className="text-sm">Blogs</span>
                    </Link>
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