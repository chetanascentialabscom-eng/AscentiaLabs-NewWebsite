import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Newspaper } from 'lucide-react';
import SEO from '../../components/SEO';

const News = () => {
  const seoData = {
    title: 'News & Updates | Ascentia Labs',
    description: 'Stay updated with the latest news, product launches, and company announcements from Ascentia Labs.',
    keywords: 'Ascentia Labs news, company updates, product launches, travel technology news, RouteMaestro updates',
  };

  const newsArticles = [
    {
      id: 1,
      title: 'Ascentia Labs Showcases RouteMaestro at ITB Asia 2025, Singapore',
      excerpt: 'Ascentia Labs exhibited at ITB Asia 2025 in Singapore, showcasing RouteMaestro at the Travel Technology Arena (Booth TA07).',
      image: '/ITB/Ascentia Labs Expo.jpeg',
      date: 'October 2025',
      author: 'Arham Jain',
      category: 'Company News',
      link: '/news/itb-asia-2025',
    },
    {
      id: 2,
      title: 'RouteMaestro – AI-Powered Dynamic Planning & Packaging Travel Booking Platform',
      excerpt: 'Introducing RouteMaestro, an AI-powered dynamic travel packaging platform for B2B and B2C whitelabel travel solutions.',
      image: '/routemaestro.png',
      date: 'December 2025',
      author: 'Arham Jain',
      category: 'Product Launch',
      link: '/news/routemaestro-platform',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-950 to-black">
      <SEO {...seoData} />
      
      {/* Hero Section */}
      <section className="relative pt-32 md:pt-40 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <div className="hidden md:block absolute top-20 right-20 w-32 h-32 bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="hidden md:block absolute bottom-40 left-20 w-24 h-24 bg-blue-400/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 text-white leading-tight">
              News & Updates
            </h1>
            <p className="text-xl text-blue-200/80 leading-relaxed max-w-2xl mx-auto">
              Stay informed with the latest announcements, product launches, and company updates from Ascentia Labs
            </p>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-12 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {newsArticles.map((article) => (
                <Link 
                  key={article.id}
                  to={article.link}
                  className="group block"
                >
                  <article className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-blue-400/20 overflow-hidden shadow-lg md:hover:shadow-2xl md:hover:shadow-blue-500/20 transition-all duration-300 md:hover:scale-[1.02] h-full flex flex-col">
                    <div className="relative h-64 overflow-hidden">
                      <img 
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover md:group-hover:scale-110 transition-transform duration-500"
                        loading="eager"
                        decoding="async"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-sm ">
                          {article.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex items-center text-sm text-blue-300/70 mb-3 gap-4">
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-1" />
                          <span>{article.author}</span>
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          <span>{article.date}</span>
                        </div>
                      </div>
                      
                      <h2 className="text-2xl text-white mb-3 md:group-hover:text-blue-400 transition-colors leading-tight">
                        {article.title}
                      </h2>
                      
                      <p className="text-blue-200/80 leading-relaxed mb-4 flex-1">
                        {article.excerpt}
                      </p>
                      
                      <div className="flex items-center text-blue-400 font-medium md:group-hover:text-blue-300 transition-colors">
                        <span>Read More</span>
                        <ArrowRight className="w-4 h-4 ml-2 md:group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;
