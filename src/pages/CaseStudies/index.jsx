import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Tag, Building, Users, TrendingUp, Award } from 'lucide-react';
import SEO from '../../components/SEO';
import { seoData } from '../../utils/seoData';

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
      title: "AI Travel Planning & Booking Tool",
      excerpt: "An AI Powered Multi-City Travel Planning & Booking Platform that generates ready-to-book AI personalised, multi city real-time travel packages integrated with global hotels, flights, sightseeings, transfers within 2 Minutes!",
      image: "/SoftwareProducts/air.png", // Airnet Travels logo
      category: "Travel & Tourism",
      client: "Airnet Travels",
      industry: "Travel Technology",
      duration: "8 months",
      teamSize: "12 developers",
      technologies: ["React", "Node.js", "AI/ML", "MongoDB", "AWS"],
      results: {
        bookingTime: "2 min",
        efficiency: "+300%",
        userSatisfaction: "95%"
      },
      slug: "case-study-airnet-travels-routemaestro"
    },
    {
      id: 2,
      title: " Ticketing Platform",
      excerpt: "Comprehensive digital ticketing solution for municipal corporations with real-time booking, payment processing, and administrative management. Streamlined operations and reduced processing time by 80%.",
      image: "/partnerships/NDMC.png",
      category: "Government",
      client: "NDMC & MCL",
      industry: "Government Technology",
      duration: "10 months",
      teamSize: "15 developers",
      technologies: ["React", "Spring Boot", "PostgreSQL", "Redis", "AWS"],
      results: {
        processing: "-80%",
        tickets: "50K+ daily",
        uptime: "99.9%"
      },
      slug: "case-study-ndmc-mcl-ticketing-platform"
    },
    {
      id: 3,
      title: "Insurance Management Platform",
      excerpt: "Modern insurance management solution with policy tracking, claims processing, and customer portal. Automated 85% of manual processes and improved customer satisfaction by 40%.",
      image: "/partnerships/logo-1a.jpg",
      category: "Insurance",
      client: "Insurance Experts",
      industry: "Insurance Technology",
      duration: "12 months",
      teamSize: "18 developers",
      technologies: ["Angular", "Spring Boot", "MySQL", "Docker", "Azure"],
      results: {
        automation: "85%",
        satisfaction: "+40%",
        claims: "24/7 support"
      },
      slug: "case-study-insurance-experts-management"
    },
    {
      id: 4,
      title: " Task Management",
      excerpt: "Advanced task management solution with team collaboration, project tracking, and productivity analytics. Enhanced team productivity by 200% and reduced project delivery time by 35%.",
      image: "/partnerships/image-14.png",
      category: "Productivity",
      client: "S. Sood & Co.",
      industry: "Project Management",
      duration: "6 months",
      teamSize: "8 developers",
      technologies: ["Vue.js", "Express.js", "MongoDB", "Socket.io", "AWS"],
      results: {
        productivity: "+200%",
        deliveryTime: "-35%",
        tasks: "10K+ completed"
      },
      slug: "case-study-s-sood-co-task-management"
    },
    {
      id: 5,
      title: " Kindergarten Management",
      excerpt: "Complete digital transformation of kindergarten operations with parent communication, student tracking, and administrative tools. Streamlined operations for 50+ educational institutions with 90% parent satisfaction.",
      image: "/partnerships/pumpkins.svg",
      category: "Education",
      client: "Pumpkins Kindergarten",
      industry: "Education Technology",
      duration: "8 months",
      teamSize: "10 developers",
      technologies: ["React Native", "Firebase", "Node.js", "PostgreSQL"],
      results: {
        institutions: "50+",
        parentSatisfaction: "90%",
        efficiency: "+180%"
      },
      slug: "case-study-pumpkins-kindergarten-management"
    },
    {
      id: 6,
      title: " Real Estate Management",
      excerpt: "Comprehensive real estate management platform with property listings, customer management, and sales tracking. Increased sales conversion by 150% and reduced administrative overhead by 60%.",
      image: "/partnerships/sunview-1.png",
      category: "Real Estate",
      client: "Sunview Enclave",
      industry: "Real Estate Technology",
      duration: "9 months",
      teamSize: "12 developers",
      technologies: ["React", "Node.js", "MongoDB", "AWS", "Stripe"],
      results: {
        salesConversion: "+150%",
        adminOverhead: "-60%",
        properties: "500+ managed"
      },
      slug: "case-study-sunview-enclave-real-estate"
    }
  ];

  const categories = ['All', 'Travel & Tourism', 'Government', 'Insurance', 'Productivity', 'Education', 'Real Estate'];

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
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-950 to-black">
      <SEO {...seoData.caseStudies} />
      {/* Hero Section */}
      <section className="relative pt-32 md:pt-40 pb-8 sm:pb-12 lg:pb-16 overflow-visible hero-section">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-32 h-32 bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-40 left-20 w-24 h-24 bg-blue-400/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl  mb-3 sm:mb-4 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
              Our <span className="bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">Case Studies</span> - <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">Success Stories</span>
            </h1>
            <p className="text-base sm:text-lg text-blue-200/80 mb-4 sm:mb-6 leading-relaxed px-4 sm:px-0">
              Explore our portfolio of successful projects and discover how we've helped businesses 
              transform their operations through innovative technology solutions.
            </p>
            
            {/* Search and Filter */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-stretch sm:items-center max-w-2xl mx-auto relative">
              <div className="relative flex-1 w-full sm:w-auto">
                <input
                  type="text"
                  placeholder="Search case studies..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-lg border border-blue-400/20 focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-blue-400 bg-white/5 backdrop-blur-sm text-white placeholder-blue-200/60 text-sm"
                />
              </div>
              
              {/* Custom Filter Dropdown */}
              <div className="relative w-full sm:w-auto dropdown-container" ref={dropdownRef}>
                <button
                  type="button"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="w-48 max-w-xs px-4 py-2.5 rounded-lg border border-blue-400/20 focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-blue-400 bg-white/5 backdrop-blur-sm cursor-pointer text-sm text-white font-medium hover:bg-white/10 transition-all duration-200 flex items-center justify-between"
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
                  <div className="absolute top-full left-0 mt-2 bg-slate-800/95 backdrop-blur-sm border border-blue-400/20 rounded-lg shadow-xl overflow-hidden w-48 max-w-xs z-50">
                    {categories.map((category, index) => (
                      <button
                        key={category}
                        type="button"
                        onClick={() => {
                          setSelectedCategory(category);
                          setIsDropdownOpen(false);
                        }}
                        className={`w-full text-left px-4 py-3 text-sm transition-colors hover:bg-blue-500/20 whitespace-nowrap ${
                          selectedCategory === category 
                            ? 'bg-blue-500/30 text-blue-300 font-medium' 
                            : 'text-blue-100 hover:text-blue-300'
                        } ${index === categories.length - 1 ? '' : 'border-b border-blue-400/10'}`}
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
            <p className="text-blue-200/70">
              {filteredCaseStudies.length > 0 
                ? `Showing ${filteredCaseStudies.length} case stud${filteredCaseStudies.length !== 1 ? 'ies' : 'y'} ${selectedCategory !== 'All' ? `in ${selectedCategory}` : ''}`
                : 'No case studies found'
              }
            </p>
          </div>

          {filteredCaseStudies.length === 0 ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-10 h-10 text-blue-400 flex items-center justify-center text-2xl">🔍</div>
              </div>
              <h3 className="text-xl  text-white mb-2">No case studies found</h3>
              <p className="text-blue-200/70">Try adjusting your search terms or filters.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {filteredCaseStudies.map((study, index) => (
                <Link 
                  key={study.id}
                  to={`/${study.slug}`}
                  className="block"
                >
                  <article 
                    className="bg-slate-800/50 backdrop-blur-sm rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group hover:-translate-y-1 case-study-card cursor-pointer h-full border border-blue-400/20"
                  >
                    <div className="relative overflow-hidden bg-gradient-to-br from-blue-900/30 to-slate-800/50">
                      <img 
                        src={study.image} 
                        alt={study.title}
                        className="w-full bg-white h-56 object-contain p-6 group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          e.target.src = 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
                        }}
                      />
                      <div className="absolute top-3 left-3">
                        <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-medium flex items-center">
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
                      <div className="flex items-center text-xs text-blue-300/70 mb-3 space-x-3">
                        <div className="flex items-center">
                          <Building className="w-3 h-3 mr-1" />
                          {study.client}
                        </div>
                        <div className="flex items-center">
                          <Users className="w-3 h-3 mr-1" />
                          {study.teamSize}
                        </div>
                      </div>
                      
                      <h3 className="text-lg  text-white mb-2 line-clamp-2 group-hover:text-blue-400 transition-colors leading-tight">
                        {study.title}
                      </h3>
                      
                      <p className="text-blue-200/80 mb-4 line-clamp-3 text-sm leading-relaxed flex-1">
                        {study.excerpt}
                      </p>

                      {/* Key Results */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {Object.entries(study.results).slice(0, 2).map(([key, value]) => (
                          <span key={key} className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-xs font-medium flex items-center border border-green-400/30">
                            <TrendingUp className="w-3 h-3 mr-1" />
                            {value}
                          </span>
                        ))}
                      </div>
                      
                      <div className="inline-flex items-center text-blue-400 font-medium hover:text-blue-300 transition-colors text-sm mt-auto">
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