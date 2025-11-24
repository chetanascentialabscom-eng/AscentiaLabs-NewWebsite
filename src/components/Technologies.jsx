import { useState, useEffect, useRef } from 'react';

const Technologies = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const navRef = useRef(null);
  const categoryRefs = useRef([]);
  const scrollTimeout = useRef(null);

  // Handle category change with smooth scroll
  const handleCategoryClick = (index) => {
    setActiveCategory(index);
    if (categoryRefs.current[index]) {
      setIsScrolling(true);
      categoryRefs.current[index].scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      
      // Clear any existing timeout
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
      
      // Set a timeout to reset scrolling state after scroll completes
      scrollTimeout.current = setTimeout(() => {
        setIsScrolling(false);
      }, 1000);
    }
  };

  // Clean up timeout on unmount
  useEffect(() => {
    return () => {
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, []);
  const techCategories = [
    {
      category: "Frontend Development",
      color: "from-purple-500 to-pink-500",
      technologies: [
        { name: "React", logo: "/techLogo/React.png", description: "Modern UI library" },
        { name: "Angular", logo: "/techLogo/Angular.png", description: "Full-featured framework" },
        { name: "Vue.js", logo: "/techLogo/Vue Js.png", description: "Progressive framework" },
        { name: "Next.js", logo: "/techLogo/next js.png", description: "React framework" },
        { name: "HTML5", logo: "/techLogo/HTML 5.png", description: "Markup language" },
        { name: "CSS3", logo: "/techLogo/CSS.png", description: "Styling language" },
        { name: "JavaScript", logo: "/techLogo/Java Script.png", description: "Programming language" },
        { name: "TypeScript", logo: "/techLogo/typescript.png", description: "Typed JavaScript" }
      ]
    },
    {
      category: "Backend Development",
      color: "from-blue-500 to-cyan-500",
      technologies: [
        { name: "Node.js", logo: "/techLogo/node js.png", description: "JavaScript runtime" },
        { name: "Python", logo: "/techLogo/python.png", description: "Versatile language" },
        { name: "Java", logo: "/techLogo/Java.png", description: "Enterprise language" },
        { name: "PHP", logo: "/techLogo/php.png", description: "Web development" },
        { name: ".NET", logo: "/techLogo/net.png", description: "Microsoft framework" },
        { name: "Go", logo: "/techLogo/go.png", description: "Google's language" }
      ]
    },
    {
      category: "Mobile Development",
      color: "from-green-500 to-teal-500",
      technologies: [
        { name: "Flutter", logo: "/techLogo/flutter.png", description: "Cross-platform" },
        { name: "Android", logo: "/techLogo/android.png", description: "Native Android" },
        { name: "iOS", logo: "/techLogo/ios.png", description: "Native iOS" },
        { name: "Kotlin", logo: "/techLogo/kotlin.png", description: "Modern Android" },
        { name: "Swift", logo: "/techLogo/swift.png", description: "iOS development" }
      ]
    },
    {
      category: "Cloud & DevOps",
      color: "from-orange-500 to-red-500",
      technologies: [
        { name: "AWS", logo: "/techLogo/aws.png", description: "Amazon cloud" },
        { name: "Google Cloud", logo: "/techLogo/google cloud.png", description: "Google's cloud" },
        { name: "Azure", logo: "/techLogo/microsoft azure.png", description: "Microsoft cloud" },
        { name: "Oracle Cloud", logo: "/techLogo/oracle cloud.png", description: "Oracle's cloud" },
        { name: "Firebase", logo: "/techLogo/Firebase.png", description: "Google's platform" }
      ]
    },
    {
      category: "Database & Analytics",
      color: "from-indigo-500 to-purple-500",
      technologies: [
        { name: "MongoDB", logo: "/techLogo/mongo db.png", description: "NoSQL database" },
        { name: "MySQL", logo: "/techLogo/mysql.png", description: "Relational database" },
        { name: "Cassandra", logo: "/techLogo/Cassandra.png", description: "Distributed database" },
        { name: "Oracle", logo: "/techLogo/oracle logo.png", description: "Enterprise database" },
        { name: "Power BI", logo: "/techLogo/power bi.png", description: "Business intelligence" },
        { name: "Google Analytics", logo: "/techLogo/google analytics.png", description: "Web analytics" }
      ]
    },
    {
      category: "AI & Machine Learning",
      color: "from-pink-500 to-rose-500",
      technologies: [
        { name: "OpenAI", logo: "/techLogo/open ai logo.png", description: "AI platform" },
        { name: "TensorFlow", logo: "/techLogo/tensor flow.png", description: "ML framework" },
        { name: "PyTorch", logo: "/techLogo/pytorch.png", description: "Deep learning" },
        { name: "Gemini", logo: "/techLogo/gemini logo.png", description: "Google AI" },
        { name: "Claude AI", logo: "/techLogo/calude ai.png", description: "Anthropic AI" },
        { name: "Gamma AI", logo: "/techLogo/gamma ai.png", description: "AI assistant" }
      ]
    },
    {
      category: "Design & UI/UX",
      color: "from-teal-500 to-green-500",
      technologies: [
        { name: "Figma", logo: "/techLogo/figma.png", description: "Design tool" },
        { name: "Photoshop", logo: "/techLogo/photoshop logo.png", description: "Image editing" },
        { name: "Framer", logo: "/techLogo/Framer logo.png", description: "Prototyping tool" },
        { name: "Bootstrap", logo: "/techLogo/bootstrap.png", description: "CSS framework" },
        { name: "Tailwind CSS", logo: "/techLogo/tailwind css.png", description: "Utility-first CSS" }
      ]
    },
    {
      category: "Enterprise & CRM",
      color: "from-cyan-500 to-blue-500",
      technologies: [
        { name: "Salesforce", logo: "/techLogo/salesforce.png", description: "CRM platform" },
        { name: "Apache NiFi", logo: "/techLogo/apache nifi.png", description: "Data integration" }
      ]
    }
  ];

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 to-purple-50/30"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-pink-200/20 to-orange-200/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in-up px-4">
          <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-black bg-clip-text text-transparent block sm:inline">
              Advanced Technology Stack
            </span>
            <br className="hidden sm:block" />
            <span className="text-gray-700 text-base sm:text-2xl md:text-3xl lg:text-4xl block mt-2 sm:mt-0 leading-relaxed">
              for Real Estate Software and App Development
            </span>
          </h2>
          <p className="text-sm sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-2">
            We leverage cutting-edge technologies to craft exceptional digital experiences that drive innovation and deliver results
          </p>
        </div>

        {/* Category Navigation */}
        <div className="mb-8 sm:mb-12 px-2 sm:px-4 overflow-x-scroll no-scrollbar pb-1 -mx-2 sm:-mx-4 px-2 sm:px-4">
          <div className="flex space-x-2 sm:space-x-3 md:space-x-4 pb-1 min-w-max">
            {techCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => handleCategoryClick(index)}
                className={`px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium rounded-full whitespace-nowrap transition-all duration-300 ${
                  activeCategory === index
                    ? `bg-gradient-to-r ${category.color} text-white shadow-md`
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {category.category}
              </button>
            ))}
          </div>
        </div>

        {/* Technology Categories */}
        <div className="space-y-12 sm:space-y-16">
          {techCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              ref={el => categoryRefs.current[categoryIndex] = el}
              className={`animate-fade-in-up transition-opacity duration-300 ${
                activeCategory !== categoryIndex && !isScrolling ? 'hidden' : 'block'
              }`}
            >
              {/* Category Header */}
              <div className="text-center mb-6 sm:mb-8 px-4">
                <h3 className={`text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent mb-2`}>
                  {category.category}
                </h3>
                {/* <div className={`w-8 sm:w-16 md:w-24 h-0.5 bg-gradient-to-r ${category.color} mx-auto rounded-sm`}></div> */}
              </div>

              {/* Technology Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4 md:gap-5 px-2 sm:px-0">
                {category.technologies.map((tech, techIndex) => (
                  <div
                    key={techIndex}
                    className="group relative bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 border border-gray-100 hover:border-gray-200 min-h-[100px] sm:min-h-[120px] flex flex-col justify-center mobile-no-hover"
                  >
                    {/* Tech Logo */}
                    <div className="flex justify-center mb-3 sm:mb-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 flex items-center justify-center bg-gray-50 rounded-lg sm:rounded-xl group-hover:bg-gray-100 transition-all duration-300 group-hover:scale-105">
                        <img
                          src={tech.logo}
                          alt={tech.name}
                          className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 object-contain filter group-hover:brightness-110 transition-all duration-300"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                        {/* Fallback icon */}
                        <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-gradient-to-br from-gray-300 to-gray-400 rounded-lg flex items-center justify-center text-white font-bold text-xs sm:text-sm hidden">
                          {tech.name.charAt(0)}
                        </div>
                      </div>
                    </div>

                    {/* Tech Name */}
                    <h4 className="text-center text-xs sm:text-sm md:text-base font-bold text-gray-900 mb-1 sm:mb-2 group-hover:text-blue-600 transition-colors duration-300 leading-tight px-1">
                      {tech.name}
                    </h4>

                    {/* Tech Description */}
                    <p className="text-center text-xs sm:text-xs text-gray-500 group-hover:text-gray-600 transition-colors duration-300 leading-tight px-1 break-words">
                      {tech.description}
                    </p>

                    {/* Hover Effects */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`}></div>
                    
                    {/* Glowing Border */}
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-20 rounded-2xl blur-sm`}></div>
                    </div>

                    {/* Floating Dots */}
                    <div className={`absolute -top-1 -right-1 w-2 h-2 bg-gradient-to-r ${category.color} rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-bounce`}></div>
                    <div className={`absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-gradient-to-r ${category.color} rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 animate-pulse`}></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        
      </div>
      
      {/* Hide scrollbar but keep functionality */}
      <style jsx>{`
        /* Hide scrollbar for Chrome, Safari and newer versions of Opera */
        .no-scrollbar::-webkit-scrollbar {
          display: none; /* Hide scrollbar */
          width: 0;  /* Remove scrollbar space */
          height: 0;  /* Remove scrollbar space */
          background: transparent;  /* Optional: just make scrollbar invisible */
        }
        
        /* Hide scrollbar for IE, Edge and Firefox */
        .no-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
        
        /* Optional: Add some padding to prevent content from being cut off */
        .no-scrollbar {
          -ms-overflow-style: -ms-autohiding-scrollbar;  /* For IE/Edge */
        }
      `}</style>
    </section>
  );
};

export default Technologies;