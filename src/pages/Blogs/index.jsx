import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, Clock, ArrowRight, Search, Filter, Tag } from 'lucide-react';

const BlogsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredBlogs, setFilteredBlogs] = useState([]);

  // Sample blog data - you can replace this with actual data from your CMS/API
  const blogPosts = [
    {
      id: 1,
      title: "How Did Travel App Development Become Crucial In The Tourism Industry",
      excerpt: "In this modern millennium, technology is everything in many aspects of our lives including travel. With the growing demand for smartphones and mobile applications, it has become a crucial step to have a mobile app to run any business successfully...",
      image: "/partnerships/image-14.png",
      category: "Travel",
      author: "Arham Jain",
      date: "18/06/2024",
      readTime: "7 min",
      slug: "travel-app-development-tourism-industry"
    },
    {
      id: 2,
      title: "Latest Tourism Report [2025] New Insights in the Travel Industry",
      excerpt: "Discover the latest trends and insights shaping the travel and tourism industry in 2025. From emerging technologies to changing consumer behaviors, explore what's driving the future of travel...",
      image: "/partnerships/centra-greens.svg",
      category: "Travel",
      author: "Arham Jain",
      date: "15/06/2024",
      readTime: "5 min",
      slug: "latest-tourism-report-2025"
    },
    {
      id: 3,
      title: "Benefits Of AI In Travel And Tourism Industry",
      excerpt: "Artificial Intelligence is revolutionizing the travel industry with personalized recommendations, efficient booking processes, predictive analysis, dynamic pricing, and 24x7 customer support...",
      image: "/partnerships/go.svg",
      category: "AI & Technology",
      author: "Tech Team",
      date: "12/06/2024",
      readTime: "8 min",
      slug: "benefits-ai-travel-tourism"
    },
    {
      id: 4,
      title: "Custom Software Development: Transforming Business Operations",
      excerpt: "Learn how custom software solutions can streamline your business processes, improve efficiency, and provide competitive advantages in today's digital landscape...",
      image: "/partnerships/credmate.svg",
      category: "Software Development",
      author: "Development Team",
      date: "10/06/2024",
      readTime: "6 min",
      slug: "custom-software-development-business"
    },
    {
      id: 5,
      title: "Mobile App Development Trends for 2025",
      excerpt: "Explore the latest trends in mobile app development including AI integration, cross-platform solutions, and emerging technologies that will shape the mobile landscape...",
      image: "/partnerships/kiddogram.svg",
      category: "Mobile Development",
      author: "Mobile Team",
      date: "08/06/2024",
      readTime: "9 min",
      slug: "mobile-app-development-trends-2025"
    },
    {
      id: 6,
      title: "Healthcare App Development: Revolutionizing Patient Care",
      excerpt: "Discover how healthcare applications are transforming patient care, improving medical outcomes, and streamlining healthcare operations through innovative technology solutions...",
      image: "/partnerships/kes.svg",
      category: "Healthcare",
      author: "Healthcare Team",
      date: "05/06/2024",
      readTime: "7 min",
      slug: "healthcare-app-development-patient-care"
    }
  ];

  const categories = ['All', 'Travel', 'AI & Technology', 'Software Development', 'Mobile Development', 'Healthcare'];

  useEffect(() => {
    let filtered = blogPosts;

    if (selectedCategory !== 'All') {
      filtered = filtered.filter(blog => blog.category === selectedCategory);
    }

    if (searchTerm) {
      filtered = filtered.filter(blog => 
        blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredBlogs(filtered);
  }, [searchTerm, selectedCategory]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-40 left-20 w-24 h-24 bg-blue-400/15 rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-blue-600 animate-fade-in-up">
              Our <span className="text-gray-800">Blog</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed animate-fade-in-up delay-200">
              Stay updated with the latest insights, trends, and innovations in technology, 
              software development, and digital transformation.
            </p>
            
            {/* Search and Filter */}
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center max-w-2xl mx-auto animate-fade-in-up delay-300">
              <div className="relative flex-1 w-full md:w-auto">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="pl-10 pr-8 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white appearance-none cursor-pointer"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {filteredBlogs.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">No articles found</h3>
              <p className="text-gray-600">Try adjusting your search terms or filters.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredBlogs.map((blog, index) => (
                <article 
                  key={blog.id}
                  className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:scale-105 animate-fade-in-up`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={blog.image} 
                      alt={blog.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                        <Tag className="w-3 h-3 mr-1" />
                        {blog.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3 space-x-4">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {blog.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {blog.date}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {blog.readTime}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                      {blog.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                      {blog.excerpt}
                    </p>
                    
                    <Link 
                      to={`/blog/${blog.slug}`}
                      className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors group"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Stay Updated with Our Latest Insights
            </h2>
            <p className="text-blue-100 text-lg mb-8">
              Subscribe to our newsletter and never miss out on the latest trends, 
              tips, and innovations in technology and software development.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-full border-0 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogsPage;