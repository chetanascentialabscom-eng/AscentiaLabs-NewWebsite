import { useNavigate } from 'react-router-dom';
import { Settings, Building, Home, GraduationCap, Star, Plane, BarChart3, Ticket, Package, Wrench, Stethoscope, Truck } from 'lucide-react';
import ConsultationButton from './ConsultationButton';

const Industries = () => {
  const navigate = useNavigate();

  const industries = [
    {
      title: "Custom CRM",
      description: "Customer relationship management",
      icon: <Settings className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
    },
    {
      title: "Interior & Architecture",
      description: "Design & planning solutions",
      icon: <Building className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
    },
    {
      title: "Real Estate",
      description: "Property management systems",
      icon: <Home className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
    },
    {
      title: "Education",
      description: "Learning management platforms",
      icon: <GraduationCap className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
    },
    {
      title: "Kindergarten",
      description: "Early education systems",
      icon: <Star className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
    },
    {
      title: "Travel & Tourism",
      description: "Booking & travel solutions",
      icon: <Plane className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
    },
    {
      title: "ERP",
      description: "Enterprise resource planning",
      icon: <BarChart3 className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
    },
    {
      title: "Ticketing Solution",
      description: "Digital ticketing systems",
      icon: <Ticket className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
    },
    {
      title: "Textiles",
      description: "Textile industry solutions",
      icon: <Package className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
    },
    {
      title: "Manufacturing",
      description: "Production management tools",
      icon: <Wrench className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
    },
    {
      title: "Health Care",
      description: "Medical & healthcare solutions",
      icon: <Stethoscope className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
    },
    {
      title: "Logistics",
      description: "Supply chain management",
      icon: <Truck className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
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
      'Ticketing Solution': '/ticketing-solution',
      'Textiles': '/textiles',
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
    <section id="industries" className="py-12 sm:py-16 overflow-hidden bg-gradient-to-b from-blue-600 to-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Section Title with Animation */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-3xl md:text-4xl  lg:text-5xl font-bold text-white leading-tight max-w-4xl mx-auto">
            <span className="inline-block">Crafting Our Bespoke Solutions </span>
            <br className="hidden md:block" />
            <span className="block mt-1 sm:mt-2">For Unique Industry Demands</span>
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