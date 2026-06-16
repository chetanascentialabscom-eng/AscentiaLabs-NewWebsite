import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Settings,
  DollarSign,
  ChevronDown,
  ChevronUp,
  Shield,
  UserCheck,
  BarChart3,
  Package,
} from "lucide-react";
import { useConsultation } from "../../../contexts/ConsultationContext";
import SEO from "../../../components/SEO";
import { seoData } from "../../../utils/seoData";

const TextilesPage = () => {
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
  const [activeIndex, setActiveIndex] = useState(null);

  const reasons = [
    {
      id: 1,
      title: "Textile Industry Expertise",
      description: " We Know Textile — 5+ Years in the Industry",
    },
    {
      id: 2,
      title: "Scalable Solutions",
      description: " From Small to Large Factory",
    },
    {
      id: 3,
      title: "Advanced Technology",
      description: " Modern Tech — AI, Auto-reporting, Real-time Tracking",
    },
    {
      id: 4,
      title: "Quality Assurance & Compliance",
      description: " No Bugs, Meets Textile Standards — We test 3 times",
    },
    {
      id: 5,
      title: "Seamless Integration",
      description: " Works With Your Current Systems — No disruption",
    },
    {
      id: 6,
      title: "24/7 Support",
      description: " 24/7 Support — We Answer Fast",
    },
  ];

  const features = [
    {
      id: "fabric-inventory-management",
      title:
        "Fabric & Raw Material Inventory Management — Track Every Meter, Every Yarn Bundle",

      sections: [
        {
          heading: "For Textile Mills",
          details: [
            "Real-time tracking of 10,000+ fabric SKUs with automated stock level monitoring and low-stock alerts",
            "Multi-warehouse management across 3+ locations with transfer tracking and location optimization",
            "Automated reorder points — system orders yarn/fabric when stock hits 20% capacity",
            "Batch tracking for fabric lots with quality control tags and traceability (recall defective batches instantly)",
            "QR code scanning — scan fabric rolls to see origin, quality test results, and current location",
          ],
        },

        {
          heading: "For Yarn Manufacturers",
          details: [
            "Track yarn bundles by grade, color, and supplier",
            "Auto-alert when yarn inventory drops below production requirements",
            "Link yarn batches to finished fabric for full traceability",
            "Monitor supplier performance and delivery timelines",
            "Track raw material consumption against production output",
          ],
        },
      ],
    },
    {
      id: "production-planning-scheduling",
      title:
        "Production Planning & Scheduling — Automate Loom Scheduling, Eliminate Manual Errors",

      sections: [
        {
          heading: "For Production Planning",
          details: [
            "Comprehensive production scheduling with capacity planning and resource optimization",
            "Real-time production monitoring with performance tracking and bottleneck identification",
            "Automated workflow management with task assignment and progress tracking",
            "Integration with inventory systems for seamless material requirement programming",
            "Loom assignment by fabric type — auto-assign best loom for each order",
            "Shift management — track operator performance across morning/night shifts",
          ],
        },
      ],
    },
    {
      id: "quality-control-testing",
      title: "Quality Control & Testing — Automated Inspections at Every Stage",

      sections: [
        {
          heading: "For Quality Teams",
          details: [
            "Automated quality inspection workflows with customizable checkpoints and criteria",
            "Fabric testing management with color matching and texture analysis",
            "Defect tracking with corrective action management and documentation",
            "Compliance management with textile industry standards and certifications",
            "Photo documentation — upload defect images for buyer reference",
            "Quality scorecards — rate each batch (A, B, C grade) automatically",
          ],
        },
      ],
    },

    {
      id: "order-management-system",
      title: "Order Management System — Process Orders Faster, Reduce Errors",

      sections: [
        {
          heading: "For Sales & Operations Teams",
          details: [
            "Customer order processing with design specifications and delivery tracking",
            "Sample management with approval workflows and revision tracking",
            "Bulk order processing with production scheduling and timeline management",
            "Customer portal integration for order status updates and communication",
            "Auto-generate order IDs — no duplicate orders",
            "Delivery date forecasting — predict exact shipment date based on current production",
          ],
        },
      ],
    },

    {
      id: "design-pattern-management",
      title: "Design & Pattern Management — Digital Library, Version Control",

      sections: [
        {
          heading: "For Design Teams",
          details: [
            "Digital pattern library with version control and design history",
            "Color palette management with seasonal trend tracking",
            "Design collaboration tools with approval workflows and feedback systems",
            "Pattern grading and sizing with automated calculations and adjustments",
            "Store 10,000+ designs — search by color, pattern, or season",
            "Auto-generate tech packs for buyers — includes fabric specs, measurements, stitching details",
          ],
        },
      ],
    },

    {
      id: "supplier-vendor-management",
      title:
        "Supplier & Vendor Management — Track Performance, Auto-Order Materials",

      sections: [
        {
          heading: "For Procurement Teams",
          details: [
            "Supplier performance tracking with quality ratings and delivery metrics",
            "Procurement automation with RFQ management and contract tracking",
            "Vendor portal integration for seamless communication and collaboration",
            "Price comparison tools with cost analysis and negotiation support",
            "Auto-order from best supplier — system picks lowest price + highest quality",
            "Track supplier payments — see who's paid, who's pending",
          ],
        },
      ],
    },

    {
      id: "costing-pricing-management",
      title: "Costing & Pricing Management — Know Exact Cost Per Meter",

      sections: [
        {
          heading: "For Finance Teams",
          details: [
            "Detailed cost calculation with material, labor, and overhead tracking",
            "Dynamic pricing models with market analysis and competitor benchmarking",
            "Profit margin analysis with break-even calculations and forecasting",
            "Quote generation with customizable templates and approval workflows",
            "Auto-calculate GST — automatic tax calculations for filing-ready invoices",
            "Export pricing — calculate FOB, CIF, EXW prices for international buyers",
          ],
        },
      ],
    },

    {
      id: "loom-management-iot",
      title:
        "Loom Management & IoT Integration — Monitor 500+ Looms in Real-Time",

      sections: [
        {
          heading: "For Production Managers",
          details: [
            "IoT sensors on every loom — track speed, downtime, fabric output, and defects automatically",
            "Real-time loom dashboard — see which looms are running, stopped, or needing maintenance",
            "Predictive maintenance alerts — system warns when loom parts need replacement",
            "Production per loom tracking — know exactly which loom produced which fabric batch",
            "Integration with existing looms — works with Siemens, Toyota, Sumitomo, and other major brands",
          ],
        },
      ],
    },

    {
      id: "supplier-payment-cost-tracking",
      title: "Supplier Payment & Cost Tracking — Track Every Rupee Spent",

      sections: [
        {
          heading: "For Finance & Procurement Teams",
          details: [
            "Auto-calculate cost per meter — includes yarn, labor, dyeing, finishing, and overhead",
            "Track supplier payments — see who's paid, who's pending, and upcoming due dates",
            "Price comparison tools — compare yarn/fabric prices across 10+ suppliers before ordering",
            "Profit margin forecasting — know exact profit before producing the order",
            "GST-compliant invoices — automatic tax calculations and filing-ready documents",
          ],
        },
      ],
    },

    {
      id: "buyer-portal-order-tracking",
      title:
        "Buyer Portal & Order Tracking — Let Buyers Check Status Without Calling",

      sections: [
        {
          heading: "For Buyers",
          details: [
            "Self-service buyer portal — buyers log in to see order status, production progress, and delivery dates",
            "Automated status updates — system sends email/SMS when order moves to next stage",
            "Download quality reports — buyers access fabric test results and color match certificates",
            "Reduce phone calls by 70% — buyers check status online instead of calling your team",
            "Build trust with transparency — buyers see real-time progress, reducing order cancellations",
          ],
        },
      ],
    },
  ];

  const adminFeatures = [
    {
      icon: Settings,
      title:
        " Production Control System — Stop 40% Downtime from Manual Scheduling",
      description:
        "Our production control system automates loom scheduling, tracks real-time production progress, and alerts you when materials are low — so your 100+ looms run 95% of the time.",
    },
    {
      icon: Shield,
      title:
        "Quality Assurance — Eliminate 30% Defect Rejections Before Shipping",
      description:
        "Automated quality checkpoints at every stage — fabric testing, color matching, defect detection — with instant alerts when quality drops below standards.",
    },
    {
      icon: BarChart3,
      title: " Analytics & Reporting — Make Data-Driven Decisions",
      description:
        "Auto-generated dashboards showing production KPIs, cost per meter, defect rates, loom efficiency, and profit margins — updated real-time.",
    },
    {
      icon: Package,
      title:
        "  Inventory Management — Stop 20% Fabric Waste from Manual Tracking",
      description:
        "Real-time inventory tracking with QR code scanning, automated stock alerts, multi-warehouse management, and supplier integration — so you never overstock or run short.",
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
      title: "Industry Analysis",
      description:
        "Our team conducts comprehensive analysis of your textile operations, identifying key challenges, production requirements, and opportunities for digital transformation.",
    },
    {
      number: "2",
      title: "Custom Solution Design",
      description:
        "We design a tailored textile management platform that aligns with your production model, incorporating features like design management, quality control, and supply chain optimization.",
    },
    {
      number: "3",
      title: "Development & Integration",
      description:
        "Our experts develop and deploy the solution with seamless integration to existing systems, ERP platforms, and production equipment while ensuring minimal disruption.",
    },
    {
      number: "4",
      title: "Training & Support",
      description:
        "We provide comprehensive training for your team and ongoing support, continuously monitoring system performance and implementing optimizations for maximum efficiency.",
    },
  ];

  const faqs = [
    {
      question: "How long does it take to implement textile ERP software?",
      answer: `
        4-8 weeks for full implementation:

Week 1-2: Industry analysis + custom solution design

Week 3-5: Development + integration with your looms/systems

Week 6-7: Training your team + testing

Week 8: Launch + 24/7 support begins

Most Ludhiana mills go live in 6 weeks.

        `,
    },
    {
      question: "What's the cost of textile management software?",
      answer: `₹15,000 - ₹75,000/month based on factory size:

      50-100 looms: ₹15,000/month (basic inventory + production)

      100-300 looms: ₹35,000/month (full ERP + quality + analytics)

      300-1,000 looms: ₹75,000/month (enterprise + IoT + buyer portal)

      Setup fee: ₹50,000 (one-time)

      ROI: 180% in first year (average client saves ₹36 lakhs)
`,
    },
    {
      question: "Can you integrate with our existing looms/systems?",
      answer: `
    Yes — we integrate with 95% of existing textile systems:

    Loom brands: Siemens, Toyota, Sumitomo, Murata, Picanol

    Existing software: Tally, SAP, Oracle (data migration included)

    Hardware: QR scanners, IoT sensors, barcode printers

    No need to replace your looms — our software works with what you have.
`,
    },
    {
      question: "Do you provide training for our team?",
      answer: `
     Yes — complete training included:

     2-day onsite training at your factory for 5-10 staff members

     Video tutorials for every feature (30+ videos)

     24/7 support — call us anytime for help

     1-month free support after launch

     Most teams are fully trained in 1 week.

     `,
    },
    {
      question: "What if we need to customize features later?",
      answer: `
   Yes — unlimited customization available:

   Add new features (e.g., export documentation, GST filing)

   Modify dashboards for different roles (manager vs. operator)

   Integrate new suppliers/buyers as you grow

   Customization fee: ₹25,000-₹100,000 (based on complexity)

   Your software grows with your business — no need to switch systems.

     `,
    },
    {
      question: "Do you offer mobile app for textile management?",
      answer: `
  Yes — iOS + Android mobile apps included:

  Track production from your phone (see real-time loom status)

  Check inventory — scan QR codes on fabric rolls

  Approve orders — sign off on quality checks remotely

  Get alerts — notifications when looms stop or stock is low

  Manage your entire factory from your phone — no office needed.

     `,
    },
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO {...seoData.textiles} />
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
                Textile Industry Software Solutions | ERP, Inventory &
                Production Management for Textile Manufacturers
              </h1>
              <p className="text-lg text-gray-300 leading-relaxed">
                Textile manufacturers lose 15-25% of revenue to production
                downtime, fabric waste, and manual inventory errors. Our
                textile-specific ERP software reduces downtime by 35%, cuts
                fabric waste by 40%, and automates inventory tracking — so you
                ship only quality products and scale production without
                operational chaos.
              </p>
              <button
                onClick={openConsultation}
                className="bg-gradient-to-r from-amber-400 to-orange-500 text-black px-6 py-3 rounded-xl  transition-all duration-300 transform hover:scale-105 shadow-lg hover:from-amber-500 hover:to-orange-600 "
              >
                📞 Get Free Textile Software Consultation
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
              Comprehensive Features for Textile Industry Management
            </h2>
            <p className="text-base text-gray-300 max-w-2xl mx-auto">
              Discover 10+ Detailed Features Designed To Optimize Your Textile
              Production Processes
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-amber-300">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Left Side - Feature List */}
                <div className="bg-gray-900 p-4">
                  <div className="space-y-2 ">
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
                          <span className="font-medium text-sm">
                            {feature.title}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Side - Feature Details */}
                <div className="p-6">
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
                      <h3 className="text-xl text-gray-900 mb-5">
                        {features[activeFeature].title}
                      </h3>

                      <div className="space-y-6">
                        {features[activeFeature].sections.map(
                          (section, sectionIndex) => (
                            <div key={sectionIndex}>
                              <h4 className="text-lg font-semibold text-orange-600 mb-3">
                                {section.heading}
                              </h4>

                              <ul className="space-y-3 text-gray-600 text-sm">
                                {section.details.map((detail, idx) => (
                                  <li
                                    key={idx}
                                    className="flex items-start gap-2"
                                  >
                                    <span className="w-1.5 h-1.5 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full mt-2 flex-shrink-0"></span>

                                    <span>{detail}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ),
                        )}
                      </div>
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
              Our Textile Management Implementation Process
            </h2>
            <p className="text-lg text-gray-300">
              A streamlined approach to deploying your textile management
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
                    Revolutionize Your Textile Operations with Our Expertise
                  </h2>
                  <p className="text-xl text-gray-300 mb-8">
                    Why Leading Textile Companies Choose Our Solutions
                  </p>
                </div>

                <div className="space-y-4">
                  {reasons.map((item) => (
                    <div
                      key={item.id}
                      className=" shadow-sm hover:shadow-md transition-all duration-300"
                    >
                      <button
                        onClick={() =>
                          setActiveIndex(
                            activeIndex === item.id ? null : item.id,
                          )
                        }
                        className="w-full p-4 flex items-center justify-between text-left"
                      >
                        <div className="flex items-center gap-4">
                          <div className="bg-blue-600 text-white px-3 py-1 rounded-md text-sm font-semibold">
                            {String(item.id).padStart(2, "0")}
                          </div>

                          <div>
                            <h3 className="text-md lg:text-lg  md:text-xl font-medium text-gray-200">
                              {item.title}
                            </h3>

                            <div className="w-24 h-0.5 bg-blue-500 mt-1"></div>
                          </div>
                        </div>

                        <div
                          className={`text-blue-600 text-2xl transition-transform duration-300 ${
                            activeIndex === item.id ? "rotate-45" : ""
                          }`}
                        >
                          +
                        </div>
                      </button>

                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          activeIndex === item.id
                            ? "max-h-40 opacity-100"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        <div className="px-16 pb-5">
                          <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                            {item.description}
                          </p>
                        </div>
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
                      Ready to Transform Your Textile Operations?
                    </h3>
                    <p className="text-blue-100 mb-6">
                      Join industry leaders who trust our textile management
                      solutions to optimize their production processes and boost
                      efficiency.
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
                Frequently Asked Questions — Textile Software
              </h2>
              <p className="text-lg text-gray-300">
                Find answers to common questions about our textile management
                solutions
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
                    <h3 className="lg:text-lg text-md  text-white pr-4">
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
                        <p className="lg:text-md text-sm text-gray-300 whitespace-pre-line leading-relaxed">
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

export default TextilesPage;
