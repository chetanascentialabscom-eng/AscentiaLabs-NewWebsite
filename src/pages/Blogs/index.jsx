import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Calendar, User, ArrowRight, Search, Filter, Tag } from "lucide-react";
import SEO from "../../components/SEO";
import { seoData } from "../../utils/seoData";

const BlogsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Blog data with proper images and content
  const blogPosts = [
    {
      id: 1,
      title:
        "The Silent Profit Killer: Is Your Manual Markup Strategy Leaking 15% of Your Revenue? ",
      excerpt: `The "Invisible" Loss
 In a high-volume travel business, the difference between a 12% margin and an 8% margin is often just a single human error. For years, agencies have relied on complex Excel sheets or memory-based pricing to set their markups.
`,
      image: "/blogs/blog7.png",
      category: "Travel",
      author: "Arham Jain",
      date: "12/05/2026",
      readTime: "7 min",
      slug: "travel-and-ai-2026",
    },
    {
      id: 2,
      title: `The 2-Minute Itinerary: How 60% of Travel Leaders are Reclaiming Their Margins in 2026`,
      excerpt: ` The data for 2026 is officially in, and it signals a "strategic inflection point" for travel agencies. According to the latest research from Phocuswright, over 60% of travel businesses have shifted their focus toward Agentic AI—systems that don't just "chat" but actually execute complex tasks across workflows.`,
      image: "/blogs/blog8.png",
      category: "Travel",
      author: "Arham Jain",
      date: "15/05/2026",
      readTime: "7 min",
      slug: "travel-margin-2026",
    },
    {
      id: 3,
      title:
        "How Did Travel App Development Become Crucial In The Tourism Industry",
      excerpt:
        "In this modern millennium, technology is everything in many aspects of our lives including travel. With the growing demand for smartphones and mobile applications, it has become a crucial step to have a mobile app to run any business successfully...",
      image: "/blogs/blog1.jpg",
      category: "Travel",
      author: "Arham Jain",
      date: "18/06/2025",
      readTime: "7 min",
      slug: "travel-app-development-in-tourism",
    },
    {
      id: 4,
      title: "Latest Tourism Report [2025] New Insights in the Travel Industry",
      excerpt:
        "Discover the latest trends and insights shaping the travel and tourism industry in 2025. From emerging technologies to changing consumer behaviors, explore what's driving the future of travel...",
      image: "/blogs/blog2.jpg",
      category: "Travel",
      author: "Arham Jain",
      date: "15/06/2025",
      readTime: "5 min",
      slug: "latest-tourism-insights2025",
    },
    {
      id: 5,
      title: "Benefits Of AI In Travel And Tourism Industry",
      excerpt:
        "Artificial Intelligence is revolutionizing the travel industry with personalized recommendations, efficient booking processes, predictive analysis, dynamic pricing, and 24x7 customer support...",
      image: "/blogs/blog3.jpg",
      category: "AI & Technology",
      author: "Tech Team",
      date: "12/06/2025",
      readTime: "8 min",
      slug: "benefits-ai-travel-tourism",
    },
    {
      id: 6,
      title: "Custom Software Development: Transforming Business Operations",
      excerpt:
        "Learn how custom software solutions can streamline your business processes, improve efficiency, and provide competitive advantages in today's digital landscape. Discover the benefits of tailored applications that meet your specific business requirements and drive growth...",
      image: "/blogs/blog4.png",
      category: "Software Development",
      author: "Development Team",
      date: "10/06/2025",
      readTime: "6 min",
      slug: "custom-software-development-business",
    },
    {
      id: 7,
      title:
        "Mobile App Development Trends for 2025: The Future of Digital Innovation",
      excerpt:
        "Explore the latest trends in mobile app development including AI integration, cross-platform solutions, and emerging technologies that will shape the mobile landscape. From progressive web apps to 5G optimization and advanced user experiences, discover what's driving innovation in mobile development today...",
      image: "/blogs/blog5.jpg",
      category: "Mobile Development",
      author: "Mobile Team",
      date: "08/06/2025",
      readTime: "9 min",
      slug: "mobile-app-development-trends-2025",
    },
    {
      id: 8,
      title: "Healthcare App Development: Revolutionizing Patient Care",
      excerpt:
        "Discover how healthcare applications are transforming patient care, improving medical outcomes, and streamlining healthcare operations through innovative technology solutions...",
      image: "/blogs/blog6.jpg",
      category: "Healthcare",
      author: "Healthcare Team",
      date: "05/06/2025",
      readTime: "7 min",
      slug: "healthcare-app-development-patient-care",
    },
  ];

  const categories = [
    "All",
    "Travel",
    "AI & Technology",
    "Software Development",
    "Mobile Development",
    "Healthcare",
  ];

  // Initialize filtered blogs on component mount
  useEffect(() => {
    setFilteredBlogs(blogPosts);
  }, []);

  useEffect(() => {
    let filtered = blogPosts;

    if (selectedCategory !== "All") {
      filtered = filtered.filter((blog) => blog.category === selectedCategory);
    }

    if (searchTerm) {
      filtered = filtered.filter(
        (blog) =>
          blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
          blog.category.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    }

    setFilteredBlogs(filtered);
  }, [searchTerm, selectedCategory]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-950 to-black">
      <SEO {...seoData.blog} />
      {/* Hero Section */}
      <section className="relative pt-32 md:pt-40 pb-8 sm:pb-12 lg:pb-16 overflow-visible hero-section">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-32 h-32 bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-40 left-20 w-24 h-24 bg-blue-400/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl  mb-3 sm:mb-4 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
              Our{" "}
              <span className="bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">
                Blog
              </span>{" "}
              -{" "}
              <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                Insights & Innovation
              </span>
            </h1>
            <p className="text-base sm:text-lg text-blue-200/80 mb-4 sm:mb-6 leading-relaxed px-4 sm:px-0">
              Stay updated with the latest insights, trends, and innovations in
              technology, software development, and digital transformation.
            </p>

            {/* Search and Filter */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-stretch sm:items-center max-w-2xl mx-auto relative">
              <div className="relative flex-1 w-full sm:w-auto">
                {/* <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" /> */}
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-6 pr-4 py-2.5 rounded-lg border border-blue-400/20 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-slate-800/50 backdrop-blur-sm text-white placeholder-gray-400 text-sm"
                />
              </div>

              {/* Custom Filter Dropdown */}
              <div
                className="relative w-full sm:w-auto dropdown-container"
                ref={dropdownRef}
              >
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none z-10" />
                <button
                  type="button"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="w-48 max-w-xs pl-9 pr-3 py-2.5 rounded-xl border border-blue-400/20 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-300 bg-slate-800/50 backdrop-blur-sm cursor-pointer text-sm text-white font-medium shadow-sm hover:shadow-md hover:border-blue-400/40 transition-all duration-200 flex items-center justify-between"
                >
                  <span className="truncate flex-1 text-left">
                    {selectedCategory}
                  </span>
                  <svg
                    className={`w-4 h-4 ml-3 flex-shrink-0 transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Custom Dropdown Menu */}
                {isDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 bg-slate-800 border border-blue-400/20 rounded-xl shadow-xl overflow-hidden w-48 max-w-xs z-50 backdrop-blur-sm">
                    {categories.map((category, index) => (
                      <button
                        key={category}
                        type="button"
                        onClick={() => {
                          setSelectedCategory(category);
                          setIsDropdownOpen(false);
                        }}
                        className={`w-full text-left px-4 py-3 text-sm transition-colors hover:bg-blue-900/30 whitespace-nowrap ${
                          selectedCategory === category
                            ? "bg-blue-900/30 text-blue-400 font-medium"
                            : "text-blue-200/80 hover:text-blue-300"
                        } ${index === categories.length - 1 ? "" : "border-b border-blue-400/10"}`}
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

      {/* Blog Posts Grid */}
      <section className="pt-2 pb-8 blog-section">
        <div className="container mx-auto px-4">
          {/* Results Counter */}
          <div className="text-center mb-4">
            <p className="text-blue-200/80">
              {filteredBlogs.length > 0
                ? `Showing ${filteredBlogs.length} article${filteredBlogs.length !== 1 ? "s" : ""} ${selectedCategory !== "All" ? `in ${selectedCategory}` : ""}`
                : "No articles found"}
            </p>
          </div>

          {filteredBlogs.length === 0 ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-slate-800/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-10 h-10 text-blue-400" />
              </div>
              <h3 className="text-xl  text-white mb-2">No articles found</h3>
              <p className="text-blue-200/80">
                Try adjusting your search terms or filters.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {filteredBlogs.map((blog, index) => (
                <Link key={blog.id} to={`/${blog.slug}`} className="block">
                  <article className="bg-slate-800/50 backdrop-blur-sm rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group hover:-translate-y-1 blog-card cursor-pointer border border-blue-400/20">
                    <div className="relative overflow-hidden">
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          e.target.src =
                            "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
                        }}
                      />
                      <div className="absolute top-3 left-3">
                        <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-medium flex items-center">
                          <Tag className="w-3 h-3 mr-1" />
                          {blog.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-5">
                      <div className="flex items-center text-xs text-blue-300/70 mb-3 space-x-3">
                        <div className="flex items-center">
                          <User className="w-3 h-3 mr-1" />
                          {blog.author}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-3 h-3 mr-1" />
                          {blog.date}
                        </div>
                      </div>

                      <h3 className="text-lg  text-white mb-2 line-clamp-2 group-hover:text-blue-400 transition-colors leading-tight">
                        {blog.title}
                      </h3>

                      <p className="text-blue-200/80 mb-4 line-clamp-2 text-sm leading-relaxed">
                        {blog.excerpt}
                      </p>

                      <div className="inline-flex items-center text-blue-400 font-medium hover:text-blue-300 transition-colors text-sm">
                        Read More
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

export default BlogsPage;
