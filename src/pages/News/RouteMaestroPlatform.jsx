import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, Clock, ArrowLeft, Tag } from 'lucide-react';
import SEO from '../../components/SEO';

const RouteMaestroPlatform = () => {
  const [activeFeature, setActiveFeature] = useState(0);

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
      id: 'multi-city-routing-engine',
      title: 'Multi City Routing Engine',
      description: 'Displays travel routes combining multiple transport modes.',
      details: [
        'Displays Travel Routes Combining Air, Land, Public Transit, And Rail Options.',
        'Intelligent Route Planning For Multi-City Itineraries With Optimal Connections.',
        'Visualize Complete Journey Paths With All Transportation Modes Integrated.'
      ]
    },
    {
      id: 'travel-route-recommendation-engine',
      title: 'Travel Route Recommendation Engine',
      description: 'Displays total travel duration and cheapest routes.',
      details: [
        'Displays Total Travel Duration, Cheapest Travel Routes, And Incentives If Any.',
        'Compare Multiple Route Options With Cost And Time Analysis.',
        'Smart Recommendations Based On Budget, Time Preferences, And Travel Patterns.'
      ]
    },
    {
      id: 'ai-personalization-engine',
      title: 'AI Personalization Engine',
      description: 'AI-LLMs map traveler intent with relevant services.',
      details: [
        'AI-LLMs Map The Intent Of The Traveler With The Relevant Services Across Hotels, Flights, Sightseeings, And More.',
        'Personalized Service Recommendations Based On Traveler Preferences And Behavior.',
        'Intelligent Matching Of Travel Services To Customer Requirements Using Advanced AI.'
      ]
    },
    {
      id: 'budget-optimization-engine',
      title: 'Budget Optimization Engine',
      description: 'Services shortlisted by AI considering total budget.',
      details: [
        'Services Across The Package Are Shortlisted By The AI Engine Considering The Total Budget Of Your Traveller And Their Preferences.',
        'Optimize Package Components To Maximize Value Within Budget Constraints.',
        'Dynamic Service Selection Based On Price Points And Customer Spending Capacity.'
      ]
    },
    {
      id: 'multi-service-bundling-scheduling',
      title: 'Multi-Service Bundling & Scheduling',
      description: 'Intelligent engine bundles and schedules multiple services.',
      details: [
        'RouteMaestro\'s Intelligent Engine Bundles & Schedules Multiple Services For Seamless Travel.',
        'Coordinate Flights, Hotels, Transfers, And Activities In A Single Unified Package.',
        'Automated Scheduling With Conflict Resolution And Optimal Time Management.'
      ]
    },
    {
      id: 'commercial-policy',
      title: 'Commercial Policy',
      description: 'Set markup and cancellation policies to boost profitability.',
      details: [
        'Set Mark Up / Cancellation Policies Globally, Category Specific Or Service Specific To Boost Profitability.',
        'Flexible Pricing Rules And Commission Structures For Different Service Types.',
        'Automated Policy Application Across All Bookings And Quotations.'
      ]
    },
    {
      id: 'booking-cancellation-atomicity',
      title: 'Booking, Cancellation Atomicity',
      description: 'All services can be booked or cancelled at once.',
      details: [
        'All The Services Of The Package Can Be Booked / Cancelled At Once.',
        'Atomic Transactions Ensure Complete Package Integrity During Booking Process.',
        'Simplified Management With Single-Click Booking And Cancellation For Entire Packages.'
      ]
    },
   
  ];

  const seoData = {
    title: 'RouteMaestro | Whitelabel Dynamic Packaging & Travel Software Platform',
    description: 'RouteMaestro is an AI-powered dynamic packaging platform offering B2B and B2C whitelabel travel software for itineraries, quotations, and customised travel packages.',
    keywords: 'RouteMaestro, whitelabel travel software, B2B whitelabel travel platform, B2C whitelabel travel software, dynamic packaging engine, AI travel packaging software, travel itinerary software, travel quotation software',
    ogImage: '/routemaestro.png',
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-950 to-black">
      <SEO {...seoData} />
      <style dangerouslySetInnerHTML={{ __html: scrollbarStyles }} />
      
      {/* Hero Section */}
      <section className="relative pt-32 md:pt-40 pb-12 lg:pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <div className="hidden md:block absolute top-20 right-20 w-32 h-32 bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="hidden md:block absolute bottom-40 left-20 w-24 h-24 bg-blue-400/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <Link 
              to="/news" 
              className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to News
            </Link>
            
            <div className="mb-6">
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full text-sm  inline-flex items-center">
                <Tag className="w-3 h-3 mr-2" />
                Product Launch
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 text-white leading-tight">
             RouteMaestro – AI-Powered Dynamic Planning & Packaging Travel Booking Platform
            </h1>
            
            <div className="flex flex-wrap items-center text-blue-200/80 mb-8 gap-6">
              <div className="flex items-center">
                <User className="w-5 h-5 mr-2" />
                <span>Arham Jain</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                <span>December 2025</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                <span>8 min read</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <article className="bg-slate-800/50 backdrop-blur-sm rounded-2xl shadow-lg border border-blue-400/20 p-6 md:p-8">
              
              {/* Featured Image */}
              <div className="mb-8">
                <img 
                  src="/RMLogo.png" 
                  alt="RouteMaestro Platform"
                  className="w-full bg-white h-64 md:h-96 object-contain rounded-xl "
                  loading="eager"
                  decoding="async"
                />
              </div>

              {/* Article Content */}
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl text-white mb-4 mt-8">What Is RouteMaestro?</h2>
                <p className="text-blue-100/90 leading-relaxed mb-6">
                  RouteMaestro is an AI-powered dynamic travel packaging platform that provides B2B and B2C whitelabel travel packaging solutions for travel agencies, tour operators, destination management companies (DMCs), enterprise travel businesses & tourism boards.
                </p>
                <p className="text-blue-100/90 leading-relaxed mb-6">
                  The platform enables travel stakeholders to generate real-time packages, set up pricing policies, and present customised travel packages through a fully whitelabelled system, designed for both B2B travel companies (To facilitate other Travel Companies) & B2C Customer-facing Experiences (To facilitate Travelers directly).
                </p>

                <h2 className="text-3xl text-white mb-4 mt-8">AI-Powered Dynamic Travel Packaging Engine</h2>
                <p className="text-blue-100/90 leading-relaxed mb-6">
                  At its core, RouteMaestro functions as a dynamic packaging engine that allows travel businesses to:
                </p>
                <ul className="text-blue-100/90 leading-relaxed mb-6 list-disc pl-6 space-y-2">
                  <li>Dynamically bundle flights, hotels, transfers, sightseeing, and experiences in 2 minutes</li>
                  <li>Create bespoke, multi-city travel itineraries</li>
                  <li>Instantly modify packages without rebuilding</li>
                  <li>Optimise packages based on traveller preferences and budget using AI</li>
                </ul>
                <p className="text-blue-100/90 leading-relaxed mb-6">
                  Unlike static tour systems, RouteMaestro is built specifically for custom travel planning and personalised travel packages.
                </p>

                {/* Key Features Section */}
                <div className="my-12">
                  <h3 className="text-2xl text-white mb-6">Platform Features</h3>
                  <div className="max-w-full">
                    <div className="bg-slate-700/50 rounded-xl shadow-lg overflow-hidden border border-blue-400/30">
                      <div className="grid grid-cols-1 lg:grid-cols-2">
                        {/* Left Side - Feature List */}
                        <div className="bg-gray-900 p-4">
                          <div className="space-y-2 max-h-96 overflow-y-auto custom-scrollbar">
                            {features.map((feature, index) => (
                              <div
                                key={index}
                                className={`p-3 rounded-lg cursor-pointer transition-all duration-300 ${
                                  activeFeature === index 
                                    ? 'bg-blue-600 text-white' 
                                    : 'text-gray-300 hover:bg-gray-800'
                                }`}
                                onClick={() => setActiveFeature(index)}
                              >
                                <div className="flex items-center space-x-2">
                                  <span className={`text-xs px-2 py-1 rounded ${
                                    activeFeature === index ? 'bg-white text-blue-600' : 'bg-blue-600 text-white'
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
                        <div className="p-6 flex items-center bg-slate-800/50">
                          <div className="space-y-4">
                            <div className="bg-blue-100 p-3 rounded-xl w-fit">
                              <div className="bg-blue-600 p-2 rounded-lg">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                </svg>
                              </div>
                            </div>
                            <div>
                              <h3 className="text-xl text-white mb-3">
                                {features[activeFeature].title}
                              </h3>
                              <ul className="space-y-2 text-blue-100/90 text-sm">
                                {features[activeFeature].details.map((detail, idx) => (
                                  <li key={idx} className="flex items-start space-x-2">
                                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
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


                <h2 className="text-3xl text-white mb-4 mt-8">Travel Itinerary Builder Software (B2B & B2C)</h2>
                <p className="text-blue-100/90 leading-relaxed mb-6">
                  RouteMaestro includes a powerful live travel package builder that supports both Travel B2B & B2C Usage:
                </p>
                <ul className="text-blue-100/90 leading-relaxed mb-6 list-disc pl-6 space-y-2">
                  <li>Structured, day-wise itinerary creation</li>
                  <li>Multi-city routing and sequencing</li>
                  <li>Standardised itinerary formats across teams</li>
                  <li>Clean, branded itinerary presentation</li>
                  <li>Mobile-friendly layouts</li>
                  <li>Improved clarity for end travellers</li>
                </ul>

                <h2 className="text-3xl text-white mb-4 mt-8">Travel Quotation Software with Whitelabel Branding</h2>
                <p className="text-blue-100/90 leading-relaxed mb-6">
                  RouteMaestro functions as a travel quotation software that can be fully whitelabelled to reflect each travel brand's identity.
                </p>
                <p className="text-blue-100/90 leading-relaxed mb-4">Travel companies can:</p>
                <ul className="text-blue-100/90 leading-relaxed mb-6 list-disc pl-6 space-y-2">
                  <li>Generate professional quotations as per realtime cost and availability</li>
                  <li>Present branded pricing layouts</li>
                  <li>Maintain mark up and cancellation policies</li>
                  <li>Reduce manual quotation errors</li>
                  <li>Improve enquiry-to-quote turnaround time</li>
                </ul>
                <p className="text-blue-100/90 leading-relaxed mb-6">
                  Quotations can be used to facilitate other travel agents and companies (B2B) or for customer-facing package proposals (B2C).
                </p>

                <h2 className="text-3xl text-white mb-4 mt-8">B2B Whitelabel Travel Software Use Cases</h2>
                <p className="text-blue-100/90 leading-relaxed mb-6">
                  RouteMaestro enables travel companies to deploy B2B whitelabel platforms for:
                </p>
                <ul className="text-blue-100/90 leading-relaxed mb-6 list-disc pl-6 space-y-2">
                  <li>Sub-agents and resellers</li>
                  <li>Internal sales teams</li>
                  <li>Branch offices</li>
                  <li>Franchise networks</li>
                </ul>
                <p className="text-blue-100/90 leading-relaxed mb-4">Key benefits:</p>
                <ul className="text-blue-100/90 leading-relaxed mb-6 list-disc pl-6 space-y-2">
                  <li>Centralised control with decentralised usage</li>
                  <li>Standardised workflows across locations</li>
                  <li>Consistent pricing and presentation</li>
                  <li>Scalable SaaS adoption</li>
                </ul>

                <h2 className="text-3xl text-white mb-4 mt-8">B2C Whitelabel Travel Software Use Cases</h2>
                <p className="text-blue-100/90 leading-relaxed mb-6">
                  RouteMaestro also supports B2C whitelabel deployment, allowing travel businesses to:
                </p>
                <ul className="text-blue-100/90 leading-relaxed mb-6 list-disc pl-6 space-y-2">
                  <li>Launch customer-facing itinerary planning and packaging portals</li>
                  <li>Present branded travel packages to end consumers</li>
                  <li>Share interactive itineraries and quotations</li>
                  <li>Maintain full ownership of customer data</li>
                </ul>
                <p className="text-blue-100/90 leading-relaxed mb-6">
                  This makes RouteMaestro suitable for travel brands building direct-to-consumer offerings, enterprises launching branded travel platforms, and DMCs serving international partners and clients.
                </p>

                <h2 className="text-3xl text-white mb-4 mt-8">Multi-Service Bundling & Scheduling</h2>
                <p className="text-blue-100/90 leading-relaxed mb-6">
                  RouteMaestro enables multi-service bundling, allowing dynamic combination of:
                </p>
                <ul className="text-blue-100/90 leading-relaxed mb-6 list-disc pl-6 space-y-2">
                  <li>Flights</li>
                  <li>Hotels</li>
                  <li>Transfers</li>
                  <li>Sightseeing</li>
                  <li>Experiences</li>
                  <li>Ancillary services</li>
                </ul>
                <p className="text-blue-100/90 leading-relaxed mb-6">
                  All services can be scheduled, adjusted, and repriced within the same workflow, making it ideal for complex customised travel packages.
                </p>

                <div className="bg-blue-900/30 border-l-4 border-blue-400 p-4 my-6 rounded-r-lg">
                  <h3 className="text-xl text-blue-300 font-medium mb-3">AI-Driven Personalisation & Budget Optimisation</h3>
                  <p className="text-blue-300">
                    RouteMaestro uses AI-driven logic to match services to traveller preferences, optimise packages based on budget, shortlist relevant service combinations, and improve relevance and profitability.
                  </p>
                </div>

                <h2 className="text-3xl text-white mb-4 mt-8">Workflow-Driven Travel Operations Platform</h2>
                <p className="text-blue-100/90 leading-relaxed mb-6">
                  RouteMaestro is designed as a workflow-centric travel software platform, not just a booking engine. It supports:
                </p>
                <ul className="text-blue-100/90 leading-relaxed mb-6 list-disc pl-6 space-y-2">
                  <li>Team-based access</li>
                  <li>Centralised trip management</li>
                  <li>Reduced operational dependency on individuals</li>
                  <li>Faster scaling without increased headcount</li>
                </ul>

                <h2 className="text-3xl text-white mb-4 mt-8">Key Problems RouteMaestro Solves</h2>
                <ul className="text-blue-100/90 leading-relaxed mb-6 list-disc pl-6 space-y-2">
                  <li>High operational costs</li>
                  <li>Manual itinerary creation</li>
                  <li>Slow quotation turnaround</li>
                  <li>Poorly presented travel proposals</li>
                  <li>Low conversion due to lack of personalisation</li>
                  <li>Difficulty managing multi-city packages</li>
                </ul>

                <h2 className="text-3xl text-white mb-4 mt-8">Who RouteMaestro Is Built For</h2>
                <ul className="text-blue-100/90 leading-relaxed mb-6 list-disc pl-6 space-y-2">
                  <li>Travel agencies</li>
                  <li>Tour operators</li>
                  <li>Destination management companies (DMCs)</li>
                  <li>Enterprise travel brands</li>
                  <li>Tourism boards</li>
                  <li>Corporate travel planners</li>
                </ul>

                <h2 className="text-3xl text-white mb-4 mt-8">Why RouteMaestro Is Different</h2>
                <ul className="text-blue-100/90 leading-relaxed mb-6 list-disc pl-6 space-y-2">
                  <li>AI-powered dynamic packaging engine</li>
                  <li>B2B and B2C whitelabel architecture</li>
                  <li>Product-first SaaS platform</li>
                  <li>No dependency on GDS or live inventory</li>
                  <li>Scalable subscription model</li>
                  <li>Designed for real-world travel operations</li>
                </ul>

                <h2 className="text-3xl text-white mb-4 mt-8">About RouteMaestro</h2>
                <p className="text-blue-100/90 leading-relaxed mb-6">
                  RouteMaestro is a B2B & B2C whitelabel dynamic travel packaging platform built to modernise how travel businesses design, price, and present customised travel experiences.
                </p>

                <div className="mt-8 pt-6 border-t border-blue-400/20">
                  <Link 
                    to="/news" 
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Return To News
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RouteMaestroPlatform;
