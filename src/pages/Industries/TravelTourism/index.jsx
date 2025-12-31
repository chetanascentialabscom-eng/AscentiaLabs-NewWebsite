import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plane, Users, ChevronDown, ChevronUp, Shield, MapPin } from 'lucide-react';
import { useConsultation } from '../../../contexts/ConsultationContext';
import SEO from '../../../components/SEO';
import { seoData } from '../../../utils/seoData';

const TravelTourismPage = () => {
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
      id: 'b2b-travel-portal-development',
      title: 'B2B Travel Portal Development',
      description: 'Comprehensive business-to-business travel platform.',
      details: [
        'CRM Module: Manage and view suppliers, agents, and customers in a centralized platform.',
        'Booking & Inventory Management: Streamline global reservations for flights, hotels, tour packages, and car rentals.',
        'Supplier Management: Simplify supplier registration and contract management with API integration for real-time availability.',
        'Payment Management: Handle multiple payment methods, invoicing, and refunds seamlessly with secure processing.'
      ]
    }, 
   {
      id: 'b2c-travel-portal-development',
      title: 'B2C Travel Portal Development',
      description: 'Customer-focused travel booking and management platform.',
      details: [
        'User-friendly interface for customers to search, compare, and book travel services directly.',
        'Real-time availability and pricing for flights, hotels, car rentals, and vacation packages.',
        'Secure payment gateway integration with multiple payment options and instant confirmation.',
        'Customer account management with booking history, preferences, and loyalty program integration.'
      ]
    },
    {
      id: 'gds-inventory-api-integration',
      title: 'GDS & Other Inventory API Integration',
      description: 'Global Distribution System and inventory management.',
      details: [
        'Connect with third-party APIs and GDS for real-time availability of flights, hotels, transfers, and more.',
        'Seamless integration with major GDS providers like Amadeus, Sabre, and Travelport for comprehensive inventory access.',
        'Real-time synchronization of pricing, availability, and booking confirmations across multiple channels.',
        'Automated inventory management with dynamic pricing and availability updates.'
      ]
    },
    {
      id: 'personalized-itinerary-generator',
      title: 'Personalized Itinerary Generator',
      description: 'AI-powered custom travel planning system.',
      details: [
        'AI-based itinerary creation based on customer preferences, budget, and travel dates.',
        'Smart recommendations for destinations, activities, restaurants, and attractions based on user behavior.',
        'Dynamic itinerary adjustments with real-time updates for weather, events, and availability changes.',
        'Collaborative planning tools allowing multiple travelers to contribute to itinerary creation.'
      ]
    },
    {
      id: 'personalized-real-time-travel-generator',
      title: 'Personalized Real-Time Travel Generator',
      description: 'Dynamic travel package creation and management.',
      details: [
        'Travel Management Module: Administrators can efficiently manage bookings, reservations, and customer itineraries.',
        'Lead & Complaint Management: Proactively handle daily customer inquiries, ensuring timely responses.',
        'Sales & Marketing Tools: Automate lead generation, CRM, and target marketing campaigns to enhance business growth.',
        'Real-Time Updates & Notifications: Keep customers informed about travel queries with instant updates and notifications.'
      ]
    },
    {
      id: 'ai-based-customer-support',
      title: 'AI Based Customer Support',
      description: 'Intelligent customer service and support system.',
      details: [
        'AI-powered chatbots providing 24/7 customer support with instant responses to common queries.',
        'Automated ticket routing and priority assignment based on issue type and customer status.',
        'Multilingual support with real-time translation capabilities for global customer base.',
        'Predictive analytics to identify potential issues and proactive customer outreach.'
      ]
    },
    {
      id: 'integrated-traveler-mobile-application',
      title: 'Integrated Traveler Mobile Application',
      description: 'Comprehensive mobile travel companion app.',
      details: [
        'Complete travel management on mobile with booking, check-in, and real-time updates.',
        'Offline access to itineraries, boarding passes, and essential travel documents.',
        'GPS-based location services with nearby attractions, restaurants, and emergency contacts.',
        'Push notifications for flight updates, gate changes, and travel alerts.'
      ]
    },    {
  
    id: 'travel-company-management',
      title: 'Travel Company Management',
      description: 'Complete travel business operations management.',
      details: [
        'Comprehensive business management with staff scheduling, resource allocation, and performance tracking.',
        'Financial management with revenue tracking, expense monitoring, and profitability analysis.',
        'Vendor and supplier relationship management with contract tracking and performance evaluation.',
        'Compliance management ensuring adherence to travel industry regulations and licensing requirements.'
      ]
    },
    {
      id: 'travel-company-payment-collection',
      title: 'Travel Company Payment Collection',
      description: 'Advanced payment processing and financial management.',
      details: [
        'Automated Invoice Generation: Eliminate manual data entry and reduce human error by generating accurate and timely invoices automatically.',
        'Seamless Integration: Invoices are automatically created and adjusted based on booking information, pricing structures, and customer preferences.',
        'Automated Delivery & Notifications: Invoices are sent via email or other channels, and customers receive automated notifications about pending balances, saving time and resources for both travel tech companies and customers.'
      ]
    },
    {
      id: 'travel-company-traveler-communication',
      title: 'Travel Company & Traveler Communication',
      description: 'Enhanced communication and customer engagement platform.',
      details: [
        'Multi-channel communication platform supporting email, SMS, WhatsApp, and in-app messaging.',
        'Automated communication workflows for booking confirmations, reminders, and travel updates.',
        'Real-time chat support with travel experts and customer service representatives.',
        'Personalized communication based on customer preferences and travel history.'
      ]
    },
    {
      id: 'automated-lead-allocation',
      title: 'Automated Lead Allocation',
      description: 'Intelligent lead distribution and management system.',
      details: [
        'Smart lead routing based on agent expertise, availability, and customer requirements.',
        'Automated follow-up sequences with personalized messaging and timing optimization.',
        'Lead scoring and prioritization based on conversion probability and customer value.',
        'Performance tracking and analytics for lead conversion optimization and agent productivity.'
      ]
    },
    {
      id: 'automated-invoice-generation-module',
      title: 'Automated Invoice Generation Module',
      description: 'Streamlined billing and invoice management system.',
      details: [
        'Automated invoice creation based on booking details, services, and pricing structures.',
        'Multi-currency support with real-time exchange rate calculations and tax compliance.',
        'Customizable invoice templates with company branding and detailed service breakdowns.',
        'Integration with accounting systems and automated payment reconciliation processes.'
      ]
    },
    {
      id: 'reporting-analytics-module',
      title: 'Reporting & Analytics Module',
      description: 'Comprehensive business intelligence and performance analytics.',
      details: [
        'Real-time dashboard with key performance indicators and business metrics visualization.',
        'Advanced analytics for booking trends, customer behavior, and revenue optimization.',
        'Customizable reports for different stakeholders with automated scheduling and delivery.',
        'Predictive analytics for demand forecasting and business planning optimization.'
      ]
    }
  ];

  const adminFeatures = [
    {
      icon: Plane,
      title: 'Traveler Support',
      description: 'Ensure seamless travel experience by offering guidance, recommendations, and solutions to enhance customer satisfaction.'
    },
    {
      icon: Users,
      title: 'Analytics & Reporting',
      description: 'Access detailed analytics and generate reports on travel bookings, user activity, and revenue for informed decisions.'
    },
    {
      icon: Shield,
      title: 'Role Based Access',
      description: 'Assign roles by department and location, ensuring proper permissions for managing bookings, queries, and transactions.'
    },
    {
      icon: MapPin,
      title: 'Travel Booking Management',
      description: 'Manage user accounts, update information, and monitor travel bookings and payment queries for optimized operations.'
    }
  ];  
  
  const stats = [
    { number: '7+', label: 'Business Years' },
    { number: '100+', label: 'Projects Delivered' },
    { number: '10+', label: 'Industries Catered' },
    { number: '4+', label: 'Countries' }
  ];

  const processSteps = [
    { 
      number: '1', 
      title: 'Requirements Analysis', 
      description: 'Our team conducts comprehensive analysis of your travel business needs, identifying key challenges, market requirements, and opportunities for digital transformation in travel management.' 
    },
    { 
      number: '2', 
      title: 'Custom Solution Design', 
      description: 'We design a tailored travel management platform that aligns with your business model, incorporating advanced features like AI-powered itinerary planning, real-time booking systems, and automated workflows.' 
    },
    { 
      number: '3', 
      title: 'Development & Integration', 
      description: 'Our experts develop and deploy the solution with seamless integration to existing systems, GDS platforms, and third-party travel services while ensuring minimal disruption to your operations.' 
    },
    { 
      number: '4', 
      title: 'Training & Support', 
      description: 'We provide comprehensive training for your team and ongoing support, continuously monitoring system performance and implementing optimizations to maximize efficiency and business growth.' 
    }
  ];

  const faqs = [
    {
      question: "Why do we need a dedicated platform for a travel business?",
      answer: "A dedicated travel platform is essential for streamlining operations, managing complex bookings, integrating with multiple suppliers, automating processes, providing real-time inventory access, enhancing customer experience, and staying competitive in the rapidly evolving travel industry while reducing operational costs and improving efficiency."
    },
    {
      question: "How can a dedicated TRAVEL CRM platform increase my travel technology business revenue?",
      answer: "A Travel CRM platform increases revenue by automating lead management, improving customer retention through personalized service, optimizing pricing strategies, streamlining operations to reduce costs, enabling upselling and cross-selling opportunities, providing analytics for better decision-making, and enhancing customer satisfaction leading to repeat business and referrals."
    },
    {
      question: "How can Artificial Intelligence generate the itineraries according to the customer requirements?",
      answer: "AI analyzes customer preferences, travel history, budget constraints, and real-time data to create personalized itineraries. It considers factors like weather, local events, user reviews, and availability to suggest optimal destinations, activities, accommodations, and transportation options, continuously learning from user feedback to improve recommendations and create unique travel experiences."
    },
    {
      question: "Is investing in a TRAVEL CRM platform a good option?",
      answer: "Yes, investing in a Travel CRM platform is highly beneficial as it significantly improves operational efficiency, reduces manual work, enhances customer experience, provides valuable business insights, increases revenue through better lead management, ensures scalability for business growth, and offers long-term ROI through automated processes and improved customer retention."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO {...seoData.travelTourism} />
      <style dangerouslySetInnerHTML={{ __html: scrollbarStyles }} />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-black overflow-hidden py-20">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-40 left-20 w-24 h-24 bg-blue-400 rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-blue-300 rounded-full blur-xl"></div>
        </div>

        <div className="relative container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div className="text-white space-y-6">
              <h1 className="text-3xl md:text-4xl  leading-tight">
                Admin Panel for Travel Software And Mobile Application Development
              </h1>
              <p className="text-lg text-gray-300 leading-relaxed">
                Our travel software admin panel integrates with AI to generate real-time travel packages for clients. With its advanced features, our admin panel ensures to streamline travel operations and work according to travel technology business requirements.
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
                  <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 hover:bg-white/15 transition-all duration-300">
                    <div className="flex items-start space-x-3">
                      <div className="bg-gradient-to-r from-amber-400 to-orange-500 p-2 rounded-lg text-black flex-shrink-0">
                        <IconComponent size={20} />
                      </div>
                      <div>
                        <h3 className="text-white  text-lg mb-1">{feature.title}</h3>
                        <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
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
                <div key={index} className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 transform hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl md:text-4xl  text-white mb-1">{stat.number}</div>
                  <div className="text-blue-200 text-xs sm:text-sm">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Stats - Desktop */}
            <div className="hidden lg:grid grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center transform hover:scale-110 transition-transform duration-300 cursor-pointer">
                  <div className="text-4xl md:text-5xl  text-white mb-2">{stat.number}</div>
                  <div className="text-blue-200 text-sm md:text-base">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Smooth transition gradient at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-black"></div>
      </section>

       {/* Our Software Products Section */}
      <section className="py-12 bg-gradient-to-b from-black via-slate-900 to-black relative overflow-hidden">
        {/* Smooth transition gradient at top */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black via-black/50 to-transparent pointer-events-none"></div>
        
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Section Title */}
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl  text-white mb-2">
                Our <span className="bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent">Travel Technology Products</span>
              </h2>
              <p className="text-base text-blue-200/90">
                Powerful Solutions Designed To Transform Your Travel Business Operations
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Left Side - RouteMaestro Project */}
              <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-black rounded-2xl shadow-2xl border border-blue-400/20 flex flex-col hover:from-slate-800 hover:to-slate-900 transition-all duration-300 group hover:border-amber-400/40 overflow-hidden">
                {/* Route Planning Image */}
                <div className="flex-shrink-0 w-full bg-white">
                  <img 
                    src="/RMLogo.png" 
                    alt="RouteMaestro - Route Planning" 
                    className="w-full h-56 object-contain"
                  />
                </div>
                
                {/* RouteMaestro Content */}
                <div className="flex-1 flex flex-col p-6">
                  <h3 className="text-xl  text-white mb-2">
                    RouteMaestro
                  </h3>
                  <p className="text-blue-200/90 text-sm mb-4 leading-relaxed">
                    AI-Powered Travel Planning And Booking Platform That Generates Personalized, Multi-City Real-Time Packages Integrated With Your Inventory Within 2 Minutes.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    <div className="flex items-center space-x-2">
                      <div className="bg-amber-500 p-1 rounded text-black flex-shrink-0">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path d="M5 13l4 4L19 7"/>
                        </svg>
                      </div>
                      <p className="text-white text-xs">AI-Powered Dynamic Packaging</p>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <div className="bg-amber-500 p-1 rounded text-black flex-shrink-0">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path d="M5 13l4 4L19 7"/>
                        </svg>
                      </div>
                      <p className="text-white text-xs">Smart Multi-City Route Planning</p>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <div className="bg-amber-500 p-1 rounded text-black flex-shrink-0">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path d="M5 13l4 4L19 7"/>
                        </svg>
                      </div>
                      <p className="text-white text-xs">Real-Time Inventory Integration</p>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <div className="bg-amber-500 p-1 rounded text-black flex-shrink-0">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path d="M5 13l4 4L19 7"/>
                        </svg>
                      </div>
                      <p className="text-white text-xs">Instant Booking & Confirmation</p>
                    </div>
                  </div>
                
                  <div className="mt-auto pt-4">
                    <button 
                      onClick={openConsultation}
                      className="w-full bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-black px-6 py-2.5 rounded-xl  transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 text-sm"
                    >
                      Get Started With RouteMaestro
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Side - Travel CRM Project */}
              <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-black rounded-2xl shadow-2xl border border-blue-400/20 flex flex-col hover:from-slate-800 hover:to-slate-900 transition-all duration-300 group hover:border-amber-400/40 overflow-hidden">
                {/* CRM Image */}
                <div className="flex-shrink-0 w-full bg-white">
                  <img 
                    src="/crm.jpg" 
                    alt="Travel CRM System" 
                    className="w-full h-56 object-contain"
                  />
                </div>
                
                {/* Travel CRM Content */}
                <div className="flex-1 flex flex-col p-6">
                  <h3 className="text-xl  text-white mb-2">
                    Travel CRM
                  </h3>
                  <p className="text-blue-200/90 text-sm mb-4 leading-relaxed">
                    Comprehensive Customer Relationship Management System Designed Specifically For Travel Businesses To Streamline Operations And Boost Sales.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    <div className="flex items-center space-x-2">
                      <div className="bg-amber-500 p-1 rounded text-black flex-shrink-0">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path d="M5 13l4 4L19 7"/>
                        </svg>
                      </div>
                      <p className="text-white text-xs">Travel Enquiry Management</p>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <div className="bg-amber-500 p-1 rounded text-black flex-shrink-0">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path d="M5 13l4 4L19 7"/>
                        </svg>
                      </div>
                      <p className="text-white text-xs">Multiservice Quotation Builder</p>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <div className="bg-amber-500 p-1 rounded text-black flex-shrink-0">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path d="M5 13l4 4L19 7"/>
                        </svg>
                      </div>
                      <p className="text-white text-xs">Client Document Storage</p>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <div className="bg-amber-500 p-1 rounded text-black flex-shrink-0">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path d="M5 13l4 4L19 7"/>
                        </svg>
                      </div>
                      <p className="text-white text-xs">Sales Ledger & Payments</p>
                    </div>
                  </div>
                
                  <div className="mt-auto pt-4">
                    <button 
                      onClick={openConsultation}
                      className="w-full bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-black px-6 py-2.5 rounded-xl  transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 text-sm"
                    >
                      Transform Your Travel Business
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent  mb-3">
              Key Features In Travel Software And App Development
            </h2>
            <p className="text-base text-gray-300 max-w-2xl mx-auto"> 
                Unleash your travel technology business potential with our dynamic features of travel crm, or if you want to add some of your travel technology business features, do      worry, we'll do it for you.
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
                            ? 'bg-gradient-to-r from-amber-400 to-orange-500 text-black' 
                            : 'text-gray-300 hover:bg-gray-800'
                        }`}
                        onClick={() => setActiveFeature(index)}
                      >
                        <div className="flex items-center space-x-2">
                          <span className={`text-xs  px-2 py-1 rounded ${
                            activeFeature === index ? 'bg-black text-amber-400' : 'bg-gradient-to-r from-amber-400 to-orange-500 text-black'
                          }`}>
                            {index < 9 ? `0${index + 1}` : index + 1}
                          </span>
                          <span className="font-medium text-sm">{feature.title}</span>
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
                        <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl  text-gray-900 mb-3">
                        {features[activeFeature].title}
                      </h3>
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
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent  mb-3">
              Our Travel Technology Development Implementation Process
            </h2>
            <p className="text-lg text-gray-300">
              A streamlined approach to deploying your travel management solution efficiently and effectively.
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
                    <h3 className="font-medium text-white text-sm sm:text-base leading-tight px-1">{step.title}</h3>
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
                    <h3 className="font-medium text-white text-base mb-1">{step.title}</h3>
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

        <div className="relative container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="text-white space-y-8">
                <div>
                  <h2 className="text-3xl md:text-4xl  mb-4 leading-tight">
                    Transform Your Travel Business with Our Expertise
                  </h2>
                  <p className="text-xl text-gray-300 mb-8">
                    Why Leading Travel Companies Choose Our Technology Solutions
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center space-x-4 group">
                    <div className="bg-blue-600 text-white px-3 py-1 rounded-md  text-sm">
                      01
                    </div>
                    <div>
                      <h3 className="text-xl  group-hover:text-blue-300 transition-colors">
                        Well Experienced Team
                      </h3>
                      <div className="w-24 h-0.5 bg-blue-500 mt-1"></div>
                    </div>
                  </div>   
               <div className="flex items-center space-x-4 group">
                    <div className="bg-blue-600 text-white px-3 py-1 rounded-md  text-sm">
                      02
                    </div>
                    <div>
                      <h3 className="text-xl  group-hover:text-blue-300 transition-colors">
                        Customization & Flexibility
                      </h3>
                      <div className="w-24 h-0.5 bg-blue-500 mt-1"></div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 group">
                    <div className="bg-blue-600 text-white px-3 py-1 rounded-md  text-sm">
                      03
                    </div>
                    <div>
                      <h3 className="text-xl  group-hover:text-blue-300 transition-colors">
                        Innovative Solutions
                      </h3>
                      <div className="w-24 h-0.5 bg-blue-500 mt-1"></div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 group">
                    <div className="bg-blue-600 text-white px-3 py-1 rounded-md  text-sm">
                      04
                    </div>
                    <div>
                      <h3 className="text-xl  group-hover:text-blue-300 transition-colors">
                        Quality Assurance & Reliability
                      </h3>
                      <div className="w-24 h-0.5 bg-blue-500 mt-1"></div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 group">
                    <div className="bg-blue-600 text-white px-3 py-1 rounded-md  text-sm">
                      05
                    </div>
                    <div>
                      <h3 className="text-xl  group-hover:text-blue-300 transition-colors">
                        Timely Delivery & Project Management
                      </h3>
                      <div className="w-24 h-0.5 bg-blue-500 mt-1"></div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 group">
                    <div className="bg-blue-600 text-white px-3 py-1 rounded-md  text-sm">
                      06
                    </div>
                    <div>
                      <h3 className="text-xl  group-hover:text-blue-300 transition-colors">
                        Competitive Pricing
                      </h3>
                      <div className="w-24 h-0.5 bg-blue-500 mt-1"></div>
                    </div>
                  </div>
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
                        
                        {/* Icon with black color */}
                        <Plane className="w-16 h-16 text-black relative z-10 drop-shadow-lg" />
                        
                        {/* Subtle rotating border effect */}
                        <div className="absolute inset-0 rounded-full border-2 border-black/10 animate-spin-slow opacity-60"></div>
                      </div>
                      
                      {/* Outer glow rings with amber theme */}
                      <div className="absolute inset-0 w-32 h-32 rounded-full bg-gradient-to-br from-amber-300/20 via-amber-400/20 to-orange-400/20 animate-ping"></div>
                      <div className="absolute inset-0 w-32 h-32 rounded-full bg-gradient-to-br from-amber-200/15 via-amber-300/15 to-orange-300/15 animate-pulse"></div>
                    </div>
                    <h3 className="text-2xl  mb-4">
                      Ready to Transform Your Travel Business?
                    </h3>
                    <p className="text-blue-100 mb-6">
                      Join travel industry leaders who trust our technology solutions to streamline their operations and enhance customer experiences.
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
        
        {/* Smooth transition gradient at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-black"></div>
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
                Find answers to common questions about our travel technology solutions
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-gray-900 rounded-xl shadow-lg border border-gray-700 overflow-hidden">
                  <button
                    className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-800 transition-colors duration-200"
                    onClick={() => toggleFAQ(index)}
                  >
                    <h3 className="text-lg  text-white pr-4">
                      {faq.question}
                    </h3>
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

export default TravelTourismPage;