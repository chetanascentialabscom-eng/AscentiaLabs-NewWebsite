import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search, Filter, Tag, Building, Users, TrendingUp, Award } from 'lucide-react';

const CaseStudiesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredCaseStudies, setFilteredCaseStudies] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Case Studies data with proper images and content
  const caseStudies = [
    {
      id: 1,
      title: "RouteMaestro: AI-Powered Travel Planning and Booking Platform",
      excerpt: "Revolutionizing travel planning with AI-driven recommendations, real-time booking, and personalized itineraries. Achieved 300% increase in user engagement and 250% boost in booking conversions.",
      image: "/SoftwareProducts/Route Maestro Logo.png",
      category: "Travel & Tourism",
      client: "RouteMaestro",
      industry: "Travel Technology",
      duration: "8 months",
      teamSize: "12 developers",
      technologies: ["React", "Node.js", "AI/ML", "MongoDB", "AWS"],
      results: {
        engagement: "+300%",
        conversions: "+250%",
        userBase: "50K+ users"
      },
      slug: "routemaestro-ai-travel-platform"
    },
    {
      id: 2,
      title: "KinderConnect: Comprehensive Kindergarten Management System",
      excerpt: "Complete digital transformation of kindergarten operations with parent communication, student tracking, and administrative tools. Streamlined operations for 100+ educational institutions.",
      image: "/SoftwareProducts/Frame 1000002695.png",
      category: "Education",
      client: "KinderConnect",
      industry: "Education Technology",
      duration: "6 months",
      teamSize: "8 developers",
      technologies: ["React Native", "Firebase", "Node.js", "PostgreSQL"],
      results: {
        institutions: "100+",
        efficiency: "+180%",
        satisfaction: "95%"
      },
      slug: "kinderconnect-kindergarten-management"
    },
    {
      id: 3,
      title: "InsuranceSafe: Digital Insurance Management Platform",
      excerpt: "Modern insurance management solution with policy tracking, claims processing, and customer portal. Reduced processing time by 70% and improved customer satisfaction significantly.",
      image: "/SoftwareProducts/Insurance Safe.png",
      category: "Insurance",
      client: "InsuranceSafe",
      industry: "Insurance Technology",
      duration: "10 months",
      teamSize: "15 developers",
      technologies: ["Angular", "Spring Boot", "MySQL", "Docker", "Azure"],
      results: {
        processing: "-70%",
        claims: "24/7 support",
        automation: "85%"
      },
      slug: "insurancesafe-digital-platform"
    },
    {
      id: 4,
      title: "JusDoIt: Advanced Task Management Solution",
      excerpt: "Comprehensive task management platform with team collaboration, project tracking, and productivity analytics. Enhanced team productivity by 200% across multiple organizations.",
      image: "/SoftwareProducts/JusDoIt.png",
      category: "Productivity",
      client: "JusDoIt",
      industry: "Project Management",
      duration: "5 months",
      teamSize: "6 developers",
      technologies: ["Vue.js", "Express.js", "MongoDB", "Socket.io", "AWS"],
      results: {
        productivity: "+200%",
        teams: "500+",
        tasks: "1M+ completed"
      },
      slug: "jusdoit-task-management"
    },
   
  ];

  const categories = ['All', 'Travel & Tourism', 'Education', 'Insurance', 'Productivity'];

  // Initialize filtered case studies on component mount
  useEffect(() => {
    setFilteredCaseStudies(caseStudies);
  }, []);

  useEffect(() => {
    let filtered = caseStudies;

    if (selectedCategory !== 'All') {
      filtered = filtered.filter(study => study.category === selectedCategory);
    }

    if (searchTerm) {
      filtered = filtered.filter(study => 
        study.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        study.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        study.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        study.client.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredCaseStudies(filtered);
  }, [searchTerm, selectedCategory]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative pt-32 md:pt-40 pb-8 sm:pb-12 lg:pb-16 overflow-visible hero-section">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-40 left-20 w-24 h-24 bg-blue-400/15 rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-blue-600">
              Our <span className="text-gray-800">Case Studies</span> - <span className="text-gray-700">Success Stories</span>
            </h1>
            <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed px-4 sm:px-0">
              Explore our portfolio of successful projects and discover how we've helped businesses 
              transform their operations through innovative technology solutions.
            </p>
            
            {/* Search and Filter */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-stretch sm:items-center max-w-2xl mx-auto relative">
              <div className="relative flex-1 w-full sm:w-auto">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search case studies..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-9 pr-4 py-2.5 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-sm"
                />
              </div>
              
              {/* Custom Filter Dropdown */}
              <div className="relative w-full sm:w-auto dropdown-container" ref={dropdownRef}>
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none z-10" />
                <button
                  type="button"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="w-48 max-w-xs pl-9 pr-3 py-2.5 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-300 bg-white cursor-pointer text-sm text-gray-700 font-medium shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-200 flex items-center justify-between"
                >
                  <span className="truncate flex-1 text-left">{selectedCategory}</span>
                  <svg 
                    className={`w-4 h-4 ml-3 flex-shrink-0 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {/* Custom Dropdown Menu */}
                {isDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-xl overflow-hidden w-48 max-w-xs z-50">
                    {categories.map((category, index) => (
                      <button
                        key={category}
                        type="button"
                        onClick={() => {
                          setSelectedCategory(category);
                          setIsDropdownOpen(false);
                        }}
                        className={`w-full text-left px-4 py-3 text-sm transition-colors hover:bg-blue-50 whitespace-nowrap ${
                          selectedCategory === category 
                            ? 'bg-blue-50 text-blue-600 font-medium' 
                            : 'text-gray-700 hover:text-blue-600'
                        } ${index === categories.length - 1 ? '' : 'border-b border-gray-100'}`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="pt-2 pb-8 case-studies-section">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Results Counter */}
          <div className="text-center mb-4">
            <p className="text-gray-600">
              {filteredCaseStudies.length > 0 
                ? `Showing ${filteredCaseStudies.length} case stud${filteredCaseStudies.length !== 1 ? 'ies' : 'y'} ${selectedCategory !== 'All' ? `in ${selectedCategory}` : ''}`
                : 'No case studies found'
              }
            </p>
          </div>

          {filteredCaseStudies.length === 0 ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-10 h-10 text-gray-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">No case studies found</h3>
              <p className="text-gray-600">Try adjusting your search terms or filters.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {filteredCaseStudies.map((study, index) => (
                <Link 
                  key={study.id}
                  to={`/case-study/${study.slug}`}
                  className="block"
                >
                  <article 
                    className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group hover:-translate-y-1 case-study-card cursor-pointer h-full"
                  >
                    <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50">
                      <img 
                        src={study.image} 
                        alt={study.title}
                        className="w-full h-56 object-contain p-6 group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          e.target.src = 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
                        }}
                      />
                      <div className="absolute top-3 left-3">
                        <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center">
                          <Tag className="w-3 h-3 mr-1" />
                          {study.category}
                        </span>
                      </div>
                      <div className="absolute top-3 right-3">
                        <span className="bg-green-600 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center">
                          <Award className="w-3 h-3 mr-1" />
                          Success
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex items-center text-xs text-gray-500 mb-3 space-x-3">
                        <div className="flex items-center">
                          <Building className="w-3 h-3 mr-1" />
                          {study.client}
                        </div>
                        <div className="flex items-center">
                          <Users className="w-3 h-3 mr-1" />
                          {study.teamSize}
                        </div>
                      </div>
                      
                      <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors leading-tight">
                        {study.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-4 line-clamp-3 text-sm leading-relaxed flex-1">
                        {study.excerpt}
                      </p>

                      {/* Key Results */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {Object.entries(study.results).slice(0, 2).map(([key, value]) => (
                          <span key={key} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium flex items-center">
                            <TrendingUp className="w-3 h-3 mr-1" />
                            {value}
                          </span>
                        ))}
                      </div>
                      
                      <div className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors text-sm mt-auto">
                        View Case Study
                        <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage;