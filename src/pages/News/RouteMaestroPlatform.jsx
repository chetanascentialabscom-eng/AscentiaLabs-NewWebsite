import { Link } from 'react-router-dom';
import { Calendar, User, Clock, ArrowLeft, Tag } from 'lucide-react';
import SEO from '../../components/SEO';

const RouteMaestroPlatform = () => {
  const seoData = {
    title: 'RouteMaestro | Whitelabel Dynamic Packaging & Travel Software Platform',
    description: 'RouteMaestro is an AI-powered dynamic packaging platform offering B2B and B2C whitelabel travel software for itineraries, quotations, and customised travel packages.',
    keywords: 'RouteMaestro, whitelabel travel software, B2B whitelabel travel platform, B2C whitelabel travel software, dynamic packaging engine, AI travel packaging software, travel itinerary software, travel quotation software',
    ogImage: '/routemaestro.png',
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-950 to-black">
      <SEO {...seoData} />
      
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

                <div className="bg-gradient-to-r from-blue-600 to-black text-white p-6 rounded-xl my-8">
                  <h3 className="text-2xl mb-4">Key Features</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex items-start">
                      <div className="bg-white/20 rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                        <span className="text-white text-sm">01</span>
                      </div>
                      <div>
                        <h4 className="mb-2">Dynamic Bundling</h4>
                        <p className="text-blue-100 text-sm">Bundle multiple services in minutes</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-white/20 rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                        <span className="text-white text-sm">02</span>
                      </div>
                      <div>
                        <h4 className="mb-2">AI Personalization</h4>
                        <p className="text-blue-100 text-sm">Match services to traveler preferences</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-white/20 rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                        <span className="text-white text-sm">03</span>
                      </div>
                      <div>
                        <h4 className="mb-2">Whitelabel Solution</h4>
                        <p className="text-blue-100 text-sm">Fully branded for your business</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-white/20 rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                        <span className="text-white text-sm">04</span>
                      </div>
                      <div>
                        <h4 className="mb-2">Real-time Pricing</h4>
                        <p className="text-blue-100 text-sm">Live cost and availability updates</p>
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
