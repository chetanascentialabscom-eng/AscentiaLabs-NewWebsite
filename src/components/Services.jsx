import { Link } from 'react-router-dom';
import { 
  Settings, 
  Cpu, 
  Brain, 
  Package, 
  Workflow, 
  PenTool, 
  Send, 
  Smartphone, 
  Building2,
  Database
} from 'lucide-react';

const Services = () => {
  // Service route mapping
  const getServiceRoute = (title) => {
    const routeMap = {
      "Custom CRM Development": "/custom-crm-development",
      "Software Engineering": "/software-engineering",
      "Digital Transformation": "/digital-transformation",
      "AI ML Services": "/ai-ml-services",
      "Mobile Application": "/mobile-application",
      "Technology Consultation & MIS": "/technology-consultation-mis",
      "Application Modernisation": "/application-modernisation",
      "Go-To-Market": "/go-to-market",
      "Ideation & Design Strategy": "/ideation-design",
      "Startup Partnership": "/startup-technology-partnership",
    };
    return routeMap[title] || "/";
  };

  const services = [
    {
      title: "Custom CRM Development",
      description: "Bespoke CRM solutions",
      icon: <Database className="w-10 h-10 text-white" />
    },
    {
      title: "Software Engineering",
      description: "Custom software development",
      icon: <Cpu className="w-10 h-10 text-white" />
    },
    {
      title: "Digital Transformation",
      description: "Business digitalization",
      icon: <Workflow className="w-10 h-10 text-white" />
    },
    {
      title: "AI ML Services",
      description: "Artificial intelligence solutions",
      icon: <Brain className="w-10 h-10 text-white" />,
      // highlighted: true
    },
    {
      title: "Mobile Application",
      description: "iOS & Android development",
      icon: <Smartphone className="w-10 h-10 text-white" />
    },

    {
      title: "Technology Consultation & MIS",
      description: "Strategic technology guidance",
      icon: <Settings className="w-10 h-10 text-white" />
    },
    {
      title: "Application Modernisation",
      description: "Legacy system upgrades",
      icon: <Package className="w-10 h-10 text-white" />
    },

    {
      title: "Go-To-Market",
      description: "Product launch strategies",
      icon: <Send className="w-10 h-10 text-white" />
    },
    {
      title: "Ideation & Design Strategy",
      description: "Creative design solutions",
      icon: <PenTool className="w-10 h-10 text-white" />
    },
    {
      title: "Startup Partnership",
      description: "Complete tech division support",
      icon: <Building2 className="w-10 h-10 text-white" />
    },
    // {
    //   title: "Cloud Services",
    //   description: "Scalable cloud solutions",
    //   icon: (
    //     <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
    //       <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/>
    //     </svg>
    //   )
    // },
    // {
    //   title: "Data Security",
    //   description: "Enterprise security solutions",
    //   icon: (
    //     <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
    //       <path d="M18,8h-1V6c0-2.76-2.24-5-5-5S7,3.24,7,6v2H6c-1.1,0-2,0.9-2,2v10c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V10C20,8.9,19.1,8,18,8z M12,17c-1.1,0-2-0.9-2-2s0.9-2,2-2s2,0.9,2,2S13.1,17,12,17z M15.1,8H8.9V6c0-1.71,1.39-3.1,3.1-3.1s3.1,1.39,3.1,3.1V8z"/>
    //     </svg>
    //   )
    // }
  ];

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-b from-black via-gray-900 to-black text-white overflow-hidden relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Title with Animation */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
          <h2 className="services-heading text-3xl rows-wrap sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl  leading-tight max-w-6xl mx-auto px-4">
            <span className="block">At Ascentia Labs: We Develop World-Class Solutions That Redefine Industry Standards</span>
          </h2>
        </div>

        {/* Services Grid with Staggered Animations */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-6 max-w-5xl mx-auto responsive-grid-md responsive-grid-lg">
          {services.map((service, index) => (
            <Link
              key={index}
              to={getServiceRoute(service.title)}
              className={`group relative p-4 sm:p-6 rounded-xl transition-all duration-500 hover:scale-105 cursor-pointer transform hover:-translate-y-2 mobile-no-hover block min-h-[160px] sm:min-h-[180px] flex flex-col justify-between ${
                service.highlighted 
                  ? 'bg-gradient-to-br from-blue-600 to-blue-800 border-2 border-blue-400 shadow-lg shadow-blue-500/25' 
                  : 'bg-gray-800/80 hover:bg-gray-700/90 border border-gray-600/50 hover:border-blue-500/50'
              }`}
            >
              {/* Icon Container */}
              <div className="flex justify-center mb-3">
                <div className={`p-2 sm:p-3 rounded-full transition-all duration-500 group-hover:scale-125 group-hover:rotate-12 ${
                  service.highlighted 
                    ? 'bg-white/20 group-hover:bg-white/30' 
                    : 'bg-gradient-to-br from-blue-600 to-blue-800 group-hover:from-blue-500 group-hover:to-blue-700 group-hover:shadow-lg group-hover:shadow-blue-500/50'
                }`}>
                  {service.icon}
                </div>
              </div>

              {/* Content Container */}
              <div className="flex-1 flex flex-col justify-center">
                {/* Service Title */}
                <h3 className="text-center text-sm sm:text-base  leading-tight px-2 mb-2">
                  {service.title}
                </h3>
                
                {/* Service Description */}
                {service.description && (
                  <p className="text-center text-xs sm:text-sm text-gray-300 leading-relaxed px-2">
                    {service.description}
                  </p>
                )}
              </div>

              {/* Enhanced Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-xl"></div>
              
              {/* Glowing Border Effect */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-blue-500/20 via-transparent to-blue-500/20 blur-sm"></div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;