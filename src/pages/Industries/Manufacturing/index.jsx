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
  Truck,
} from "lucide-react";
import { useConsultation } from "../../../contexts/ConsultationContext";
import SEO from "../../../components/SEO";
import { seoData } from "../../../utils/seoData";

const ManufacturingPage = () => {
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
      id: "production-planning-management",
      title: "Production Planning — Auto Schedule, No Bottlenecks",

      sections: [
        {
          heading: "For Factory Owners",
          details: [
            "Auto production scheduling (10 minutes)",
            "Capacity planning (know max output)",
            "Resource optimization (right machines)",
            "Real-time monitoring (live dashboard)",
            "Bottleneck identification (alerts before delay)",
            "Task assignment (auto assign to team)",
            "Progress tracking (see status live)",
            "Inventory integration (auto material needed)",
          ],
        },

        {
          heading: "For Managers",
          details: [
            "See schedule (dashboard)",
            "Track progress (live)",
            "Find bottlenecks (alerts)",
            "Assign tasks (auto)",
          ],
        },
      ],
    },
    {
      id: "inventory-management-system",
      title: "Inventory Management — Auto Order When Low (No Stockouts)",

      sections: [
        {
          heading: "For Factory Owners",
          details: [
            "Real-time tracking (live stock levels)",
            "Auto stock alerts (when low, instant)",
            "Multi-warehouse management (all locations)",
            "Auto reorder points (no manual work)",
            "Supplier integration (auto-order placed)",
            "Purchase order generation (1 click)",
            "Batch + serial tracking (full traceability)",
          ],
        },

        {
          heading: "For Warehouse Staff",
          details: [
            "See stock levels (dashboard)",
            "Transfer tracking (live)",
            "Auto orders (alerts)",
            "Batch lookup (quick)",
          ],
        },
      ],
    },
    {
      id: "quality-control-assurance",
      title: "Quality Control — 0% Defects Shipped (Auto Checks)",

      sections: [
        {
          heading: "For Quality Teams",
          details: [
            "Auto inspections (custom checkpoints)",
            "Real-time monitoring (live)",
            "Trend analysis (see patterns)",
            "Non-conformance tracking (alerts)",
            "Corrective actions (auto assign)",
            "Compliance management (standards met)",
            "Audit trail (auto documentation)",
          ],
        },

        {
          heading: "For Owners",
          details: [
            "See quality (dashboard)",
            "Track defects (live)",
            "Compliance status (reports)",
          ],
        },
      ],
    },
    {
      id: "supply-chain-management",
      title: "Supply Chain — Track Suppliers, No Delays",

      sections: [
        {
          heading: "For Owners",
          details: [
            "Track supplier quality (ratings)",
            "Delivery times (live tracking)",
            "Supplier performance (KPIs)",
            "Procurement automation (RFQ auto)",
            "Contract tracking (alerts)",
            "Logistics optimization (auto plan)",
            "Delivery tracking (live)",
            "Vendor portal (chat with suppliers)",
          ],
        },

        {
          heading: "For Procurement",
          details: [
            "See suppliers (dashboard)",
            "Send RFQ (auto generate)",
            "Track contracts (alerts)",
            "Coordinate shipping (portal)",
          ],
        },
      ],
    },
    {
      id: "maintenance-management",
      title: "Maintenance — Prevent Breakdowns (No Surprises)",

      sections: [
        {
          heading: "For Maintenance Teams",
          details: [
            "Preventive schedules (auto reminders)",
            "Predictive maintenance (alerts before break)",
            "Performance monitoring (live KPIs)",
            "Cost tracking (budget management)",
            "Spare parts auto-reorder (always available)",
            "Work orders (auto create)",
          ],
        },

        {
          heading: "For Owners",
          details: [
            "See maintenance (dashboard)",
            "Track costs (reports)",
            "Breakdown alerts (instant)",
          ],
        },
      ],
    },
    {
      id: "workforce-management",
      title: "Workforce — Auto Schedules, Track Performance",

      sections: [
        {
          heading: "For Managers",
          details: [
            "Auto scheduling (skill-based, right people)",
            "Shift optimization (efficient)",
            "Time + attendance (digital, 5 seconds)",
            "Productivity tracking (KPIs live)",
            "Training management (certifications tracked)",
            "Performance analytics (live)",
          ],
        },

        {
          heading: "For Employees",
          details: [
            "See schedule (app)",
            "Mark attendance (5 seconds)",
            "View training (dashboard)",
          ],
        },
      ],
    },
    {
      id: "financial-reporting",
      title: "Financial Reporting — See Profits, Cut Costs",

      sections: [
        {
          heading: "For Owners",
          details: [
            "Real-time cost accounting (live)",
            "Job costing (per project)",
            "Profitability analysis (see profits)",
            "Financial dashboards (KPIs live)",
            "Budget planning (auto)",
            "Variance analysis (alerts)",
            "ERP integration (sync auto)",
          ],
        },

        {
          heading: "For Finance",
          details: [
            "Track costs (dashboard)",
            "See profits (reports)",
            "Budget tracking (live)",
          ],
        },
      ],
    },
    {
      id: "mobile-app",
      title: "Mobile App — Manage Factory from Phone",

      sections: [
        {
          heading: "For Managers",
          details: [
            "See production (app, live)",
            "Track inventory (live)",
            "Approve orders (1 click)",
            "Alerts (push notifications)",
            "Reports (PDF download)",
          ],
        },

        {
          heading: "For Workers",
          details: [
            "Mark attendance (app, 5 seconds)",
            "See schedule (dashboard)",
            "Report issues (instant)",
          ],
        },
      ],
    },
    {
      id: "machine-monitoring",
      title: "Machine Monitoring — Track All Machines Live",

      sections: [
        {
          heading: "For Owners",
          details: [
            "See all machines (dashboard)",
            "Performance (live KPIs)",
            "Breakdown alerts (instant)",
            "Usage tracking (reports)",
            "Efficiency (KPIs)",
          ],
        },

        {
          heading: "For Maintenance",
          details: [
            "Monitor machines (live)",
            "Alerts (instant)",
            "Usage data (reports)",
          ],
        },
      ],
    },
  ];

  const adminFeatures = [
    {
      icon: Settings,
      title: "Production Control System",
      description:
        "Efficiently manage production schedules, monitor workflows, and optimize manufacturing processes for maximum efficiency.",
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description:
        "Implement comprehensive quality control measures with automated testing, compliance tracking, and defect management.",
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting",
      description:
        "See production reports, track performance, find problems fast  and  save money with real data.",
    },
    {
      icon: Truck,
      title: "Supply Chain Management",
      description:
        "Track suppliers, manage inventory, order on time — no stockouts or delays.",
    },
  ];

  const stats = [
    { number: "7+", label: "Business Years" },
    { number: "120+", label: "Projects Delivered" },
    { number: "10+", label: "Industries Catered" },
    { number: "4+", label: "Countries" },
  ];
  const [activeIndex, setActiveIndex] = useState(null);

  const advantages = [
    {
      id: 1,
      title: "Industry Expertise",
      description: "We Know Manufacturing",
    },
    {
      id: 2,
      title: "Scalable Solutions",
      description: "Grows With You — From Small to Large Factory",
    },
    {
      id: 3,
      title: "Advanced Technology",
      description: "Modern Tech — AI, Auto-tracking, Real-time Reports",
    },
    {
      id: 4,
      title: "Quality Assurance & Compliance",
      description: "No Bugs, Meets Standards — We test 3 times",
    },
    {
      id: 5,
      title: "Seamless Integration",
      description: "Works With Your Current Systems — No disruption",
    },
    {
      id: 6,
      title: "24/7 Support",
      description: "24/7 Support — We Answer Fast",
    },
  ];
  const processSteps = [
    {
      number: "1",
      title: "Learn Your Factory",
      description:
        "Our team conducts comprehensive analysis of your manufacturing processes, identifying key challenges, operational requirements, and opportunities for digital transformation.",
    },
    {
      number: "2",
      title: "Custom Design",
      description:
        "We design a tailored manufacturing management platform that aligns with your production model, incorporating advanced features like IoT integration, predictive analytics, and automated workflows.",
    },
    {
      number: "3",
      title: "Build + Test",
      description:
        "Our experts develop and deploy the solution with seamless integration to existing systems, ERP platforms, and manufacturing equipment while ensuring minimal disruption to operations.",
    },
    {
      number: "4",
      title: "Train + Start",
      description:
        "We provide comprehensive training for your team and ongoing support, continuously monitoring system performance and implementing optimizations to maximize efficiency and ROI.",
    },
  ];

  const faqs = [
    {
      question: "How long to build manufacturing software?",
      answer: `
        6-8 weeks total:

        Week 1: Learn your factory + design

        Week 2: Custom build for you

        Week 3-7: Develop + test everything

        Week 8: Train team + start
       `,
    },
    {
      question: "How much does it cost?",
      answer: `
       ₹15,000 - ₹60,000/month by machine count:

       5-10 machines: ₹15,000/month (basic features)

       10-30 machines: ₹30,000/month (full features)

       30-100 machines: ₹60,000/month (all features + AI)
       `,
    },
    {
      question: "Mobile app for managers?",
      answer: `Yes — iOS + Android app:

      See production (app, live)

      Track inventory (live)

      Approve orders (1 click)

      Alerts (push notifications)

      Reports (PDF download)
`,
    },
    {
      question: "Do you train your team?",
      answer: `
    Yes — complete training:

    2-day training at your factory (5-10 staff)

    30 video tutorials (watch anytime)

    24/7 support (call anytime)

    1-month free support after start
`,
    },
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO {...seoData.manufacturing} />
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
                Manufacturing Management Software | Production, Inventory,
                Quality & Supply Chain for Factories in India
              </h1>
              <p className="text-lg text-gray-300 leading-relaxed">
                See how our manufacturing software helps you track production,
                reduce machine breakdowns, and save costs. It streamlines your
                production, optimizes workflows, and makes your factory run more
                efficiently
              </p>
              <button
                onClick={openConsultation}
                className="bg-gradient-to-r from-amber-400 to-orange-500 text-black px-6 py-3 rounded-xl  transition-all duration-300 transform hover:scale-105 shadow-lg hover:from-amber-500 hover:to-orange-600 "
              >
                📞 Get Free Consultation
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
              Explore Top Features of Our Custom Manufacturing Management
              Solutions
            </h2>
            <p className="text-base text-gray-300 max-w-2xl mx-auto">
              Discover Comprehensive Features Designed To Optimize Your
              Production Processes
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-amber-300">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Left Side - Feature List */}
                <div className="bg-gray-900 p-4">
                  <div className="space-y-2">
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
                          <span className="font-medium text-sm lg:text-base 2xl:text-lg">
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
                      <div className="space-y-6">
                        {features[activeFeature].sections.map(
                          (section, sectionIndex) => (
                            <div key={sectionIndex}>
                              <h4 className="text-base lg:text-xl 2xl:text-2xl font-semibold text-gray-900 mb-3">
                                {section.heading}
                              </h4>

                              <ul className="space-y-2 text-gray-600 ">
                                {section.details.map((detail, idx) => (
                                  <li
                                    key={idx}
                                    className="flex items-start space-x-2"
                                  >
                                    <span className="w-1.5 h-1.5 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full mt-2 flex-shrink-0"></span>

                                    <span className="text-sm lg:text-[15px] 2xl:text-lg">
                                      {detail}
                                    </span>
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
              Our Manufacturing Development Implementation Process
            </h2>
            <p className="text-lg text-gray-300">
              How We Build Your Manufacturing Software — 8 Weeks Total
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
                  <h2 className="text-2xl md:text-4xl  mb-4 leading-tight">
                    Revolutionize Your Manufacturing Operations with Our
                    Expertise
                  </h2>
                  <p className="text-xl text-gray-300 mb-8">
                    Why Manufacturing Companies in India Choose Us
                  </p>
                </div>

                <div className="space-y-6">
                  {advantages.map((item) => (
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
                          className={`text-blue-500 text-xl transition-transform duration-300 ${
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
                      Ready to Transform Your Manufacturing Operations?
                    </h3>
                    <p className="text-blue-100 mb-6">
                      Join industry leaders who trust our manufacturing
                      management solutions to optimize their production
                      processes and boost efficiency.
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
                Find answers to common questions about our manufacturing
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
                        <p className="text-gray-300 whitespace-pre-line leading-relaxed">
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

export default ManufacturingPage;
