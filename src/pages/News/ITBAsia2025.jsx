import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, Clock, ArrowLeft, Tag, ChevronLeft, ChevronRight } from 'lucide-react';
import SEO from '../../components/SEO';

const ITBAsia2025 = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState({});
  const [imageErrors, setImageErrors] = useState({});
  const imageCache = useRef({});
  
  const images = [
     { src: '/ITB/Z62_6351.jpg', alt: 'ITB Asia Showcase' },
    { src: '/ITB/DSC_2607.jpg', alt: 'ITB Asia Exhibition' },
    { src: '/ITB/image (45).png', alt: 'RouteMaestro Demo' },
    { src: '/ITB/image (46).png', alt: 'Travel Technology Arena' },
    { src: '/ITB/ITB Asia 2025 - Singapore.jpeg', alt: 'ITB Asia 2025 Singapore' },
    { src: '/ITB/Ascentia Labs Expo.jpeg', alt: 'Ascentia Labs Exhibition Booth' },
    { src: '/ITB/Mr. Luca - Ascentia Labs.jpeg', alt: 'Mr. Luca at Ascentia Labs Booth' },
    { src: '/ITB/Alice Lee.png', alt: 'Alice Lee at ITB Asia' },
    { src: '/ITB/DSB_8009.jpg', alt: 'ITB Asia Event' },
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const preloadImage = (index) => {
    const src = images[index].src;
    
    // Check if already loaded or in cache
    if (loadedImages[index] || imageCache.current[src]) {
      setLoadedImages(prev => ({ ...prev, [index]: true }));
      return;
    }

    // Check if image is already cached by browser
    const img = new Image();
    img.src = src;
    
    if (img.complete && img.naturalHeight !== 0) {
      // Image is already cached
      imageCache.current[src] = true;
      setLoadedImages(prev => ({ ...prev, [index]: true }));
    } else {
      // Load image
      img.onload = () => {
        imageCache.current[src] = true;
        setLoadedImages(prev => ({ ...prev, [index]: true }));
      };
      img.onerror = () => {
        setImageErrors(prev => ({ ...prev, [index]: true }));
      };
    }
  };

  useEffect(() => {
    // Preload current and adjacent images
    preloadImage(currentImageIndex);
    const nextIndex = (currentImageIndex + 1) % images.length;
    const prevIndex = (currentImageIndex - 1 + images.length) % images.length;
    
    setTimeout(() => {
      preloadImage(nextIndex);
      preloadImage(prevIndex);
    }, 100);
  }, [currentImageIndex]);

  // Preload all images on mount for better UX
  useEffect(() => {
    const timer = setTimeout(() => {
      images.forEach((_, index) => {
        if (index !== 0) preloadImage(index);
      });
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  const seoData = {
    title: 'Ascentia Labs Showcases RouteMaestro at ITB Asia 2025 | Travel Technology',
    description: 'Ascentia Labs exhibited at ITB Asia 2025 in Singapore, showcasing RouteMaestro, its dynamic travel packaging and itinerary creation platform.',
    keywords: 'ITB Asia 2025, RouteMaestro, Ascentia Labs, Travel Technology Arena, dynamic packaging engine, travel itinerary software, travel quotation software',
    ogImage: '/ITB/Ascentia Labs Expo.jpeg',
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
                Company News
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 text-white leading-tight">
              Ascentia Labs Showcases RouteMaestro at ITB Asia 2025, Singapore
            </h1>
            
            <div className="flex flex-wrap items-center text-blue-200/80 mb-8 gap-6">
              <div className="flex items-center">
                <User className="w-5 h-5 mr-2" />
                <span>Arham Jain</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                <span>October 2025</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                <span>5 min read</span>
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
              
              {/* Image Gallery Carousel */}
              <div className="mb-8 relative">
                <div className="relative h-64 md:h-96 rounded-xl overflow-hidden bg-slate-900/50">
                  {/* Loading Skeleton */}
                  {!loadedImages[currentImageIndex] && !imageErrors[currentImageIndex] && (
                    <div className="absolute inset-0 flex items-center justify-center z-10">
                      <div className="animate-pulse flex flex-col items-center gap-3">
                        <div className="w-12 h-12 border-4 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
                        <p className="text-blue-300 text-sm">Loading image...</p>
                      </div>
                    </div>
                  )}
                  
                  {/* Error State */}
                  {imageErrors[currentImageIndex] && (
                    <div className="absolute inset-0 flex items-center justify-center z-10">
                      <div className="text-center">
                        <p className="text-red-400 mb-2">Failed to load image</p>
                        <button 
                          onClick={() => {
                            setImageErrors(prev => ({ ...prev, [currentImageIndex]: false }));
                            preloadImage(currentImageIndex);
                          }}
                          className="text-blue-400 hover:text-blue-300 text-sm underline"
                        >
                          Retry
                        </button>
                      </div>
                    </div>
                  )}
                  
                  <img 
                    src={images[currentImageIndex].src}
                    alt={images[currentImageIndex].alt}
                    className={`w-full h-full object-contain transition-opacity duration-200 ${
                      loadedImages[currentImageIndex] ? 'opacity-100' : 'opacity-0'
                    }`}
                    loading="eager"
                    decoding="async"
                    onLoad={() => {
                      imageCache.current[images[currentImageIndex].src] = true;
                      setLoadedImages(prev => ({ ...prev, [currentImageIndex]: true }));
                    }}
                    onError={() => setImageErrors(prev => ({ ...prev, [currentImageIndex]: true }))}
                  />
                  
                  {/* Navigation Buttons */}
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 active:bg-black/80 text-white p-2 rounded-full transition-all touch-manipulation"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 active:bg-black/80 text-white p-2 rounded-full transition-all touch-manipulation"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                  
                  {/* Image Counter */}
                  <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                    {currentImageIndex + 1} / {images.length}
                  </div>
                </div>
                
                {/* Thumbnail Navigation */}
                <div className="flex gap-2 mt-4 overflow-x-auto pb-2 scrollbar-hide">
                  {images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setCurrentImageIndex(index);
                      }}
                      className={`flex-shrink-0 ml-2 w-20 h-16 rounded-lg overflow-hidden border-2 transition-all bg-slate-900/50 touch-manipulation relative ${
                        currentImageIndex === index 
                          ? 'border-blue-500 scale-105' 
                          : 'border-transparent opacity-60 active:opacity-100'
                      }`}
                    >
                      <img 
                        src={image.src} 
                        alt={image.alt}
                        className={`w-full h-full object-contain transition-opacity duration-200 ${
                          loadedImages[index] ? 'opacity-100' : 'opacity-0'
                        }`}
                        loading="lazy"
                        decoding="async"
                        onLoad={() => {
                          imageCache.current[image.src] = true;
                          setLoadedImages(prev => ({ ...prev, [index]: true }));
                        }}
                      />
                      {!loadedImages[index] && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-4 h-4 border-2 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
                        </div>
                      )}
                    </button>
                  ))}
                </div>
                
             
              </div>

              {/* Article Content */}
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl text-white mb-4 mt-8">ITB Asia 2025 – Asia's Leading B2B Travel Trade Exhibition</h2>
                <p className="text-blue-100/90 leading-relaxed mb-6">
                  ITB Asia 2025, held in Singapore, is one of the most prominent B2B travel trade exhibitions globally. The event brings together travel companies, tour operators, destination management companies (DMCs), technology providers, and senior decision-makers from across the travel and tourism ecosystem.
                </p>
                <p className="text-blue-100/90 leading-relaxed mb-6">
                  ITB Asia is recognised for its Travel Technology Arena, where global travel technology products and platforms are showcased to an international audience seeking innovation, efficiency, and scalable solutions.
                </p>

                <h2 className="text-3xl text-white mb-4 mt-8">Ascentia Labs at ITB Asia 2025</h2>
                <p className="text-blue-100/90 leading-relaxed mb-6">
                  Ascentia Labs participated in ITB Asia 2025 exhibiting at the Travel Technology Arena (Booth TA07) engaging with international travel companies exploring "Travel Package Workflow Automation For Customised Travel Planning".
                </p>
                <p className="text-blue-100/90 leading-relaxed mb-6">
                  The exhibition served as a platform for strategic discussions around system design, scalability, and operational efficiency in travel businesses.
                </p>

                <h2 className="text-3xl text-white mb-4 mt-8">RouteMaestro – Flagship Product Showcased by Ascentia Labs</h2>
                <p className="text-blue-100/90 leading-relaxed mb-6">
                  At ITB Asia 2025, Ascentia Labs showcased RouteMaestro as its flagship AI - Travel Technology product. RouteMaestro was presented as an AI Dynamic Packaging Platform built for travel companies that design customised, multi-service travel packages with flights, hotels, experiences, transfers & other services.
                </p>
                <p className="text-blue-100/90 leading-relaxed mb-6">
                  Rather than static presentations, RouteMaestro was demonstrated live at the booth, allowing visitors to Generate Live Multi Service Packages Within 2 Mins With Real-time Flights, Hotels, Experiences APIs integrated already into it.
                </p>

                <h2 className="text-3xl text-white mb-4 mt-8">What Visitors Experienced at the RouteMaestro Booth</h2>
                <p className="text-blue-100/90 leading-relaxed mb-6">
                  The RouteMaestro showcase focused on practical, high-impact use cases relevant to travel companies.
                </p>

                <h3 className="text-2xl text-white mb-3 mt-6">Dynamic Travel Package Creation</h3>
                <p className="text-blue-100/90 leading-relaxed mb-4">Visitors explored how RouteMaestro enables:</p>
                <ul className="text-blue-100/90 leading-relaxed mb-6 list-disc pl-6 space-y-2">
                  <li>Dynamic Bundling Of Multiple Travel Services APIs At Once</li>
                  <li>AI Preference Personalization Engine</li>
                  <li>Creation Of Customised Travel Packages In 2 Minutes</li>
                  <li>Flexible Modification Of Packages Without Rebuilding Itineraries</li>
                </ul>

                <h3 className="text-2xl text-white mb-3 mt-6">Multi-City Itinerary Structuring</h3>
                <p className="text-blue-100/90 leading-relaxed mb-4">Demonstrations highlighted RouteMaestro's ability to:</p>
                <ul className="text-blue-100/90 leading-relaxed mb-6 list-disc pl-6 space-y-2">
                  <li>Precisely Pick And Choose Services As Per Traveler Preferences (Budget, Preferences, Others)</li>
                  <li>Structure Complex Multi-City Itineraries</li>
                  <li>Present Routes And Day-Wise Plans Clearly</li>
                  <li>Simplify The Presentation Of Complex Trips</li>
                </ul>

                <h3 className="text-2xl text-white mb-3 mt-6">Faster Quotation Workflows</h3>
                <p className="text-blue-100/90 leading-relaxed mb-4">RouteMaestro was used to demonstrate:</p>
                <ul className="text-blue-100/90 leading-relaxed mb-6 list-disc pl-6 space-y-2">
                  <li>Rapid Creation Of Live Travel Quotations</li>
                  <li>Structured Costing For Customised Packages</li>
                  <li>Reduction Of Manual Effort Compared To Traditional Excel-Based Workflows</li>
                </ul>

                <div className="bg-blue-900/30 border-l-4 border-blue-400 p-4 my-6 rounded-r-lg">
                  <p className="text-blue-300 font-medium">
                    The platform was positioned clearly as an Internal AI Powered Dynamic Travel Planning, Packaging & Booking Platform designed for travel company teams, integrated with live inventory & booking engines.
                  </p>
                </div>

                <h2 className="text-3xl text-white mb-4 mt-8">Why the Showcase Resonated at ITB Asia</h2>
                <p className="text-blue-100/90 leading-relaxed mb-6">
                  RouteMaestro demonstrations resonated strongly with visitors because they addressed a common industry challenge: Customised travel packages are still being built manually, resulting in slow turnaround times and operational inefficiencies.
                </p>
                <p className="text-blue-100/90 leading-relaxed mb-6">
                  By focusing on structure, speed, and usability, RouteMaestro aligned well with the expectations of international travel buyers attending ITB Asia. Being showcased within the Travel Technology Arena reinforced its positioning as a product-led travel technology solution.
                </p>

                <h2 className="text-3xl text-white mb-4 mt-8">About RouteMaestro</h2>
                <p className="text-blue-100/90 leading-relaxed mb-6">
                  RouteMaestro is an AI Dynamic Travel Planning, Packaging & Booking Platform designed for travel companies that create customized trips, domestic or international.
                </p>
                <p className="text-blue-100/90 leading-relaxed mb-4">The platform focuses on:</p>
                <ul className="text-blue-100/90 leading-relaxed mb-6 list-disc pl-6 space-y-2">
                  <li>Live Dynamic Package Creation Using Live Inventories</li>
                  <li>Automated Multi-City Itinerary Structuring</li>
                  <li>Faster Quotation Workflows</li>
                  <li>Internal Operational Efficiency</li>
                </ul>
                <p className="text-blue-100/90 leading-relaxed mb-6">
                  RouteMaestro is developed and owned by Ascentia Labs.
                </p>

                <h2 className="text-3xl text-white mb-4 mt-8">About Ascentia Labs</h2>
                <p className="text-blue-100/90 leading-relaxed mb-6">
                  Ascentia Labs is a software company focused on building product-led technology platforms for specific industry workflows. With RouteMaestro as its flagship travel technology product, Ascentia Labs works closely with travel companies to design systems that support efficiency, scalability, and long-term growth.
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

export default ITBAsia2025;
