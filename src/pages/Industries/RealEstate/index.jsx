import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Home,
  DollarSign,
  ChevronDown,
  ChevronUp,
  Shield,
  UserCheck,
} from "lucide-react";
import { useConsultation } from "../../../contexts/ConsultationContext";
import SEO from "../../../components/SEO";
import { seoData } from "../../../utils/seoData";

const RealEstatePage = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [openFAQ, setOpenFAQ] = useState(null);
  const { openConsultation } = useConsultation();

  // Custom scrollbar styles - hidden scrollbar
  const scrollbarStyles = `
    .custom-scrollbar::-webkit-scrollbar {
      width: 0px;
      background: transparent;
    }
    .custom-scrollbar::-webkit-scrollbar-thumb {
      background: transparent;
    }
    .custom-scrollbar {
      scrollbar-width: none;
      -ms-overflow-style: none;
    }
  `;

  const features = [
    {
      id: "property-inventory-management",
      title: "Property Inventory Management",
      description:
        "The property inventory management system enables real estate providers and brokers to list, showcase, and manage properties.",
      details: [
        "Upload photos, videos, and virtual tours in one click.",
        "Edit property details and update property availability anytime.",
        "Get instant inquiry alerts from interested buyers and tenants.",
      ],
    },
    {
      id: "broker-management-solution",
      title: "Broker Management — Run Your Broker Team Like a CEO",
      description:
        "Comprehensive broker management with performance tracking and commission calculations.",
      details: [
        " Auto-track commissions, performance, sales reports",
        "Distribute leads smartly by territory",
        "Pay brokers automatically — no manual work",
        "Commission tracking and automated payment processing for brokers.",
      ],
    },
    {
      id: "tenant-management",
      title: "Tenant Management — Onboard Tenants Without Paperwork",
      description:
        "Streamlined tenant onboarding with digital lease agreements and documentation.",
      details: [
        "Digital leases signed online",
        "Auto-collect rent with many payment options.",
        "Track maintenance requests with priority tickets",
      ],
    },
    {
      id: "rental-management-system",
      title: "Rental Management — Maximize Your Rental Income",
      description: "End-to-end rental property management platform",
      details: [
        "Auto-calculate rent + late fees, send reminders.",
        "Manage leases, renewals, documents in one place.",
        "See income vs. expenses in real-time reports.",
      ],
    },
    {
      id: "booking-scheduling",
      title: "Booking & Scheduling — Never Double-Book a Viewing",
      description: "Intelligent appointment and viewing management system.",
      details: [
        "Clients book online using your live calendar",
        "Auto-confirm + send reminder SMS/email",
        "No conflicts — agents get perfect schedules.",
      ],
    },
    {
      id: "map-integration",
      title: "Map Search — Help Buyers Find Properties by Location + Lifestyle",
      description: "Advanced location-based property discovery and mapping.",
      details: [
        "What You Get:",

        "Search by neighborhood, schools, parks, transit.",
        "See real-time availability on map.",
      ],
    },
    {
      id: "mortgage-rates-calculators",
      title: "Mortgage Calculator — Help Buyers Know What They Can Afford",
      description: "Comprehensive mortgage and financial calculation tools.",
      details: [
        "What You Get:",
        "Real-time rates + payment estimates.",
        "Compare loans from different banks.",
        "Check what you can afford based on income.",
      ],
    },
    {
      id: "multiple-language-currency",
      title: "Multiple Language & Currency Converter",
      description: "Global accessibility and localization features.",
      details: [
        "Multi-language support with real-time translation for international clients.",
        "Currency conversion with live exchange rates for global property transactions.",
        "Localized content and regional property market information.",
        "Cultural customization for different market preferences and requirements.",
      ],
    },
    {
      id: "secure-payment-procedures",
      title: "Secure Payment Procedures",
      description: "Advanced security and payment processing system.",
      details: [
        "Encrypted payment processing with PCI DSS compliance and fraud protection.",
        "Multiple payment gateway integration with secure transaction processing.",
        "Escrow service integration for secure property transactions and fund management.",
        "Digital signature capabilities for contracts and legal document processing.",
      ],
    },
    {
      id: "multi-platform-compatibility",
      title: "Multi-platform Compatibility",
      description: "Cross-platform accessibility and device optimization.",
      details: [
        "Responsive web design with mobile-first approach for all device types.",
        "Native mobile applications for iOS and Android with offline capabilities.",
        "Desktop application integration with cloud synchronization and data backup.",
        "API integration for third-party tools and existing business systems.",
      ],
    },
    {
      id: "integration-mls",
      title: "Integration with MLS",
      description:
        "Multiple Listing Service integration and data synchronization.",
      details: [
        "Real-time MLS data synchronization with automatic property updates and listings.",
        "Automated listing distribution across multiple platforms and marketing channels.",
        "MLS compliance tools with standardized data formats and reporting requirements.",
        "Advanced search capabilities with MLS-specific filters and property criteria.",
      ],
    },
    {
      id: "analytics-reporting",
      title: "Analytics and Reporting",
      description:
        "Comprehensive business intelligence and performance analytics.",
      details: [
        "Real-time market analytics with trend analysis and price predictions.",
        "Sales performance dashboards with agent productivity and conversion metrics.",
        "Customer behavior analytics with lead tracking and engagement insights.",
        "Financial reporting with revenue analysis and profitability assessments.",
      ],
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const benefits = [
    {
      id: 1,
      title: "Well Experienced Team",
      description: "Our team has 5+ years of experience in real estate.",
    },
    {
      id: 2,
      title: "Customization & Flexibility",
      description: "Your app has exactly what you need.",
    },
    {
      id: 3,
      title: "Innovative Solutions",
      description: "AI lead scoring, virtual tour AI.",
    },
    {
      id: 4,
      title: "Quality Assurance & Reliability",
      description: "We test 3 times before launch.",
    },
    {
      id: 5,
      title: "Timely Delivery & Project Management",
      description: "Never missed a deadline in 5 years.",
    },
    {
      id: 6,
      title: "Competitive Pricing",
      description: "Clear pricing — no hidden fees.",
    },
  ];

  const adminFeatures = [
    {
      icon: Home,
      title: "Property Management That Saves Time",
      description:
        "Efficiently manage listings, Upload properties quickly, update statuses right away, and schedule viewings easily without too many messages.",
    },
    {
      icon: Shield,
      title: "Role-Based Access That Protects Your Data",
      description:
        "Give agents and staff exactly the access they need — no accidental changes or security risks.",
    },
    {
      icon: UserCheck,
      title: "Client & Lead Management That Closers Love",
      description:
        "Track every lead, manage client profiles, automate follow-ups — so you never miss a sale.",
    },
    {
      icon: DollarSign,
      title: "Transaction Management With Full Financial Control",
      description:
        "Generate invoices, track expenses, send payment reminders, see your profit in real time.",
    },
  ];

  const stats = [
    { number: "7+", label: "Business Years" },
    { number: "120+", label: "Projects Delivered" },
    { number: "10+", label: "Industries Catered" },
    { number: "4+", label: "Countries" },
  ];

  const processSteps = [
    {
      number: "1",
      title: "Requirements Analysis",
      description:
        "Our team conducts comprehensive analysis of your real estate business needs, identifying key challenges, market requirements, and opportunities for digital transformation in property management.",
    },
    {
      number: "2",
      title: "Custom Solution Design",
      description:
        "We design a tailored real estate management platform that aligns with your business model, incorporating advanced features like AI-powered property matching, virtual tours, and automated workflows.",
    },
    {
      number: "3",
      title: "Development & Integration",
      description:
        "Our experts develop and deploy the solution with seamless integration to existing systems, MLS platforms, and third-party services while ensuring minimal disruption to your operations.",
    },
    {
      number: "4",
      title: "Training & Support",
      description:
        "We provide comprehensive training for your team and ongoing support, continuously monitoring system performance and implementing optimizations to maximize efficiency and ROI.",
    },
  ];

  const faqs = [
    {
      question:
        "What are the key benefits of implementing a real estate management software?",
      answer:
        "Real estate management software offers numerous benefits including improved efficiency in property management, enhanced lead tracking and conversion, automated workflows, better client communication, streamlined transaction processing, and comprehensive analytics for data-driven decision making.",
    },
    {
      question:
        "How does real estate software improve property management efficiency?",
      answer:
        "The software automates property listing management, provides real-time inventory updates, enables virtual tours and online scheduling, streamlines tenant management, automates rent collection, and provides centralized communication tools, significantly reducing manual work and improving operational efficiency.",
    },
    {
      question:
        "What features should I look for in a real estate management platform?",
      answer:
        "Essential features include property inventory management, CRM capabilities, MLS integration, virtual tour support, automated marketing tools, financial reporting, tenant management, maintenance tracking, mobile accessibility, and robust security measures for data protection.",
    },
    {
      question:
        "Is real estate management software secure for handling sensitive client data?",
      answer:
        "Yes, professional real estate software implements enterprise-grade security measures including data encryption, secure payment processing, role-based access control, regular security updates, and compliance with data protection regulations to ensure client information remains secure.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO {...seoData.realEstate} />
      <style dangerouslySetInnerHTML={{ __html: scrollbarStyles }} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-black overflow-hidden py-20">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-40 left-20 w-24 h-24 bg-blue-400 rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-blue-300 rounded-full blur-xl"></div>
        </div>

        {/* Smooth transition gradient at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-black"></div>

        <div className="relative container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div className="text-white space-y-6">
              <h1 className="text-3xl md:text-4xl  leading-tight">
                Build a Real Estate App That Sells Properties Faster —
                Custom-Built for You
              </h1>
              <p className="text-lg text-gray-300 leading-relaxed">
                See how our real estate app helps you manage listings, track
                clients, and close deals. If you need custom features, we'll
                build them for you
              </p>
              <button
                onClick={openConsultation}
                className="bg-gradient-to-r from-amber-400 to-orange-500 text-black px-6 py-3 rounded-xl  transition-all duration-300 transform hover:scale-105 shadow-lg hover:from-amber-500 hover:to-orange-600 "
              >
                Get Free Consultation
              </button>
            </div>

            {/* Right Content - Admin Features */}
            <div className="space-y-4">
              {adminFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 hover:bg-white/15 transition-all duration-300"
                  >
                    <div className="flex items-start space-x-3">
                      <div className="bg-gradient-to-r from-amber-400 to-orange-500 p-2 rounded-lg text-black flex-shrink-0">
                        <IconComponent size={20} />
                      </div>
                      <div>
                        <h3 className="text-white  text-lg mb-1">
                          {feature.title}
                        </h3>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-16 pt-12 border-t border-blue-400/30">
            {/* Stats - Mobile/Tablet */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:hidden">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 transform hover:scale-105 transition-transform duration-300"
                >
                  <div className="text-3xl md:text-4xl  text-white mb-1">
                    {stat.number}
                  </div>
                  <div className="text-blue-200 text-xs sm:text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Stats - Desktop */}
            <div className="hidden lg:grid grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center transform hover:scale-110 transition-transform duration-300 cursor-pointer"
                >
                  <div className="text-4xl md:text-5xl  text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-blue-200 text-sm md:text-base">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent  mb-3">
              Explore Top Features of Our Custom Real Estate App Development
              Solutions
            </h2>
            <p className="text-base text-gray-300 max-w-2xl mx-auto">
              Explore The Functionality Of Our State-Of-The-Art Real Estate App
              Development System
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-amber-300">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Left Side - Feature List */}
                <div className="bg-gray-900 p-4">
                  <div className="space-y-2 max-h-96 overflow-y-auto custom-scrollbar">
                    {features.map((feature, index) => (
                      <div
                        key={index}
                        className={`p-3 rounded-lg cursor-pointer transition-all duration-300 ${
                          activeFeature === index
                            ? "bg-gradient-to-r from-amber-400 to-orange-500 text-black"
                            : "text-gray-300 hover:bg-gray-800"
                        }`}
                        onClick={() => setActiveFeature(index)}
                      >
                        <div className="flex items-center space-x-2">
                          <span
                            className={`text-xs  px-2 py-1 rounded ${
                              activeFeature === index
                                ? "bg-black text-amber-400"
                                : "bg-gradient-to-r from-amber-400 to-orange-500 text-black"
                            }`}
                          >
                            {index < 9 ? `0${index + 1}` : index + 1}
                          </span>
                          <span className="font-semibold text-sm">
                            {feature.title}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Side - Feature Details */}
                <div className="p-6 flex items-center">
                  <div className="space-y-4">
                    <div className="bg-amber-100 p-3 rounded-xl w-fit">
                      <div className="bg-gradient-to-r from-amber-400 to-orange-500 p-2 rounded-lg">
                        <svg
                          className="w-6 h-6 text-black"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl  text-gray-900 mb-3">
                        {features[activeFeature].title}
                      </h3>

                      <h6 className="text-gray-600 text-sm mb-3">
                        {features[activeFeature].description}
                      </h6>
                      <ul className="space-y-2 text-gray-600 text-sm">
                        {features[activeFeature].details.map((detail, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <span className="w-1.5 h-1.5 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-black relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent  mb-3">
              Our Real Estate Development Implementation Process
            </h2>
            <p className="text-lg text-gray-300">
              A streamlined approach to deploying your real estate management
              solution efficiently and effectively.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Mobile Layout - Single Row */}
            <div className="block md:hidden">
              <div className="relative flex justify-between items-start gap-2 px-2">
                {/* Connecting line for mobile */}
                <div className="absolute top-6 sm:top-7 left-8 right-8 h-0.5 bg-blue-300 z-0"></div>

                {processSteps.map((step, index) => (
                  <div key={index} className="flex-1 text-center relative z-10">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-amber-400 to-orange-500 text-black rounded-full flex items-center justify-center text-lg sm:text-xl font-extrabold mb-2 mx-auto border-2 border-white shadow-lg">
                      {step.number}
                    </div>
                    <h3 className="font-medium text-white text-sm sm:text-base leading-tight px-1">
                      {step.title}
                    </h3>
                  </div>
                ))}
              </div>
            </div>

            {/* Desktop Layout - With Connectors */}
            <div className="hidden md:flex justify-center items-center gap-6">
              {processSteps.map((step, index) => (
                <div key={index} className="flex items-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-amber-400 to-orange-500 text-black rounded-full flex items-center justify-center text-xl font-extrabold mb-3 mx-auto">
                      {step.number}
                    </div>
                    <h3 className="font-medium text-white text-base mb-1">
                      {step.title}
                    </h3>
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="w-12 h-0.5 bg-blue-300 mx-3 -mt-6"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gradient-to-br from-gray-900 via-blue-900 to-black relative overflow-hidden">
        {/* Smooth transition gradient at top */}
        <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black to-transparent"></div>

        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-32 h-32 bg-yellow-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-40 right-20 w-24 h-24 bg-yellow-300 rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-yellow-500 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 left-1/2 w-20 h-20 bg-yellow-200 rounded-full blur-2xl"></div>
        </div>

        {/* Smooth transition gradient at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-black"></div>

        <div className="relative container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="text-white space-y-8">
                <div>
                  <h2 className="text-3xl md:text-4xl  mb-4 leading-tight">
                    Revolutionize Your Real Estate Business with Our Expertise
                  </h2>
                  <p className="text-xl text-gray-300 mb-8">
                    Why Leading Real Estate Companies Choose Our Solutions
                  </p>
                </div>

                <div className="space-y-6">
                  {benefits.map((item) => (
                    <div key={item.id}>
                      <div
                        onClick={() =>
                          setActiveIndex(
                            activeIndex === item.id ? null : item.id,
                          )
                        }
                        className="flex items-center justify-between cursor-pointer"
                      >
                        <div className="flex items-center space-x-4 group">
                          <div className="bg-blue-600 text-white px-3 py-1 rounded-md text-sm">
                            {String(item.id).padStart(2, "0")}
                          </div>

                          <div>
                            <h3 className="lg:text-xl text-md group-hover:text-blue-300 transition-colors">
                              {item.title}
                            </h3>

                            <div className="w-24 h-0.5 bg-blue-500 mt-1"></div>
                          </div>
                        </div>

                        <div
                          className={`text-blue-500 text-2xl transition-transform duration-300 ${
                            activeIndex === item.id ? "rotate-45" : ""
                          }`}
                        >
                          +
                        </div>
                      </div>

                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          activeIndex === item.id
                            ? "max-h-32 opacity-100 mt-3"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        <p className="pl-16 text-gray-300 text-sm md:text-base">
                          → {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Content - Image/Visual */}
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-600/20 to-blue-800/20 backdrop-blur-md rounded-3xl p-8 border border-blue-400/30">
                  <div className="text-center text-white">
                    <div className="relative w-32 h-32 mx-auto mb-6">
                      {/* Main circle with amber and black accent for high contrast */}
                      <div className="w-32 h-32 bg-gradient-to-br from-amber-400 via-amber-500 to-orange-500 rounded-full flex items-center justify-center relative overflow-hidden shadow-2xl border-4 border-black/20">
                        {/* Animated color overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-amber-300/40 via-amber-400/30 to-orange-400/40 rounded-full animate-pulse"></div>

                        {/* Checkmark icon with black color */}
                        <svg
                          className="w-16 h-16 text-black relative z-10 drop-shadow-lg"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>

                        {/* Subtle rotating border effect */}
                        <div className="absolute inset-0 rounded-full border-2 border-black/10 animate-spin-slow opacity-60"></div>
                      </div>

                      {/* Outer glow rings with amber theme */}
                      <div className="absolute inset-0 w-32 h-32 rounded-full bg-gradient-to-br from-amber-300/20 via-amber-400/20 to-orange-400/20 animate-ping"></div>
                      <div className="absolute inset-0 w-32 h-32 rounded-full bg-gradient-to-br from-amber-200/15 via-amber-300/15 to-orange-300/15 animate-pulse"></div>
                    </div>
                    <h3 className="text-2xl  mb-4">
                      Ready to Transform Your Real Estate Business?
                    </h3>
                    <p className="text-blue-100 mb-6">
                      Join industry leaders who trust our real estate management
                      solutions to streamline their operations and boost sales.
                    </p>
                    <button
                      onClick={openConsultation}
                      className="bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 hover:from-amber-500 hover:via-orange-500 hover:to-orange-600 text-black border-2 border-black/20 hover:border-black/40 px-8 py-3 rounded-xl  transition-all duration-300 transform hover:scale-105 shadow-lg "
                    >
                      Start Your Project Today
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent md:text-4xl  mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-300">
                Find answers to common questions about our real estate
                management solutions
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-gray-900 rounded-xl shadow-lg border border-gray-700 overflow-hidden"
                >
                  <button
                    className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-800 transition-colors duration-200"
                    onClick={() => toggleFAQ(index)}
                  >
                    <h3 className="text-lg  text-white pr-4">{faq.question}</h3>
                    <div className="flex-shrink-0">
                      {openFAQ === index ? (
                        <ChevronUp className="w-5 h-5 text-blue-400" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-blue-400" />
                      )}
                    </div>
                  </button>

                  {openFAQ === index && (
                    <div className="px-6 pb-5">
                      <div className="border-t border-gray-700 pt-4">
                        <p className="text-gray-300 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RealEstatePage;
