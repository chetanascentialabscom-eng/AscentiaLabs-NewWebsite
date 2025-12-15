import { useNavigate } from 'react-router-dom';
import ConsultationButton from './ConsultationButton';

const Industries = () => {
  const navigate = useNavigate();

  const industries = [
    {
      title: "Custom CRM",
      description: "Customer relationship management",
      icon: (
        <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      )
    },
    {
      title: "Interior & Architecture",
      description: "Design & planning solutions",
      icon: (
        <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M6.36 18.78L6.61 21l1.62-1.54 2.77-2.77-.7-.7-2.77 2.77L6.36 18.78zm.24-2.83l2.77 2.77 8.46-8.46-2.77-2.77L6.6 15.95zm11.31-11.31c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
        </svg>
      )
    },
    {
      title: "Real Estate",
      description: "Property management systems",
      icon: (
        <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
        </svg>
      )
    },
    {
      title: "Education",
      description: "Learning management platforms",
      icon: (
        <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>
        </svg>
      )
    },
    {
      title: "Kindergarten",
      description: "Early education systems",
      icon: (
        <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      )
    },
    {
      title: "Travel & Tourism",
      description: "Booking & travel solutions",
      icon: (
        <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6h-5.6z"/>
        </svg>
      )
    },
    {
      title: "ERP",
      description: "Enterprise resource planning",
      icon: (
        <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
        </svg>
      )
    },
    {
      title: "Library",
      description: "Library management systems",
      icon: (
        <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
        </svg>
      )
    },
    {
      title: "Manufacturing",
      description: "Production management tools",
      icon: (
        <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/>
        </svg>
      )
    },
    {
      title: "Health Care",
      description: "Medical & healthcare solutions",
      icon: (
        <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 8h-2v3h-3v2h3v3h2v-3h3v-2h-3V8zM4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H8V4h12v12z"/>
        </svg>
      )
    },
    {
      title: "Logistics",
      description: "Supply chain management",
      icon: (
        <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
        </svg>
      )
    }
  ];

  const handleIndustryClick = (industryTitle) => {
    // Map industry titles to their corresponding routes
    const industryRoutes = {
      'Custom CRM': '/complaint-management-system',
      'Interior & Architecture': '/interior-design-app-development',
      'Real Estate': '/real-estate-app-development',
      'Education': '/education-app-development',
      'Kindergarten': '/kindergarten-school-management',
      'Travel & Tourism': '/travel-app-development',
      'ERP': '/enterprise-resource-planning',
      'Library': '/library-management-system',
      'Manufacturing': '/manufacturing',
      'Health Care': '/healthcare-app-development',
      'Logistics': '/logistics-software-development'
    };

    const route = industryRoutes[industryTitle];
    
    // Navigate and then scroll will be handled by ScrollToTop component
    if (route) {
      navigate(route);
    } else {
      // Fallback: convert to slug format
      const industrySlug = industryTitle.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and');
      navigate(`/industries/${industrySlug}`);
    }
  };

  return (
    <section id="industries" className="py-12 sm:py-16 overflow-hidden bg-gradient-to-r from-blue-600 via-black to-blue-600">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Section Title with Animation */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight max-w-4xl mx-auto">
            <span className="inline-block">One Vision, Many Industries: Crafting Our</span>
            <br className="hidden md:block" />
            <span className="block mt-1 sm:mt-2">Bespoke Solutions For Unique Industry Demands</span>
          </h2>
        </div>

        {/* Industries Grid with Enhanced Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto mb-12 responsive-grid-md responsive-grid-lg">
          {industries.map((industry, index) => (
            <div
              key={index}
              onClick={() => handleIndustryClick(industry.title)}
              className="group relative flex flex-col items-center p-4 sm:p-6 bg-slate-800/90 backdrop-blur-md rounded-2xl border border-blue-500/30 hover:bg-slate-700/90 transition-all duration-500 hover:scale-105 cursor-pointer transform hover:-translate-y-3 shadow-lg hover:shadow-2xl hover:shadow-blue-500/30 mobile-no-hover"
            >
              {/* Icon Container with Better Styling */}
              <div className="flex justify-center mb-4">
                <div className="p-3 sm:p-4 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 shadow-lg group-hover:shadow-xl group-hover:from-blue-400 group-hover:to-blue-500 transition-all duration-500 group-hover:scale-110 border border-blue-400/50">
                  <div className="text-white">
                    {industry.icon}
                  </div>
                </div>
              </div>

              {/* Industry Title */}
              <h3 className="text-center text-sm sm:text-base font-bold text-white leading-tight px-2">
                {industry.title}
              </h3>

              {/* Animated Background Effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-blue-500/10 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl"></div>
              
              {/* Glowing Border Effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/50 via-transparent to-blue-400/50 rounded-2xl blur-sm"></div>
              </div>

              {/* Floating Animation Dots */}
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-bounce"></div>
              <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-blue-300 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 animate-pulse"></div>
            </div>
          ))}
        </div>

        {/* Call to Action Section - Centered */}
        <div className="text-center mt-16">
         
          
          {/* Centered Button */}
          <div className="flex justify-center">
            <ConsultationButton 
              className="px-8 py-4 text-lg font-bold shadow-xl hover:shadow-2xl hover:shadow-blue-500/30 border border-slate-600/50"
              variant="primary"
              size="large"
            >
              Consult Our Experts Today
            </ConsultationButton>
          </div>
        </div>

    
      </div>


    </section>
  );
};

export default Industries;