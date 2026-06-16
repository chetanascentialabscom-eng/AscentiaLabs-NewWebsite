import { useState } from "react";
import { Link } from "react-router-dom";
import { useConsultation } from "../../../contexts/ConsultationContext";
import {
  LayoutDashboard,
  MonitorPlay,
  Users,
  Package,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import SEO from "../../../components/SEO";
import { seoData } from "../../../utils/seoData";

const InteriorArchitecture = () => {
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

  const reasons = [
    {
      id: 1,
      title: "Well Experienced Team",
      description:
        "Senior developers and designers who understand both design and technology.",
    },
    {
      id: 2,
      title: "Customization & Flexibility",
      description:
        "We build the software exactly as per your needs and make it flexible so you can easily change or add features anytime.",
    },
    {
      id: 3,
      title: "Innovative Solutions",
      description:
        "Advanced features like VR walkthroughs and cloud-based collaboration.",
    },
    {
      id: 4,
      title: "Quality Assurance & Reliability",
      description:
        "We thoroughly test every part of the app to ensure it is reliable, bug-free, and performs perfectly for your daily use.",
    },
    {
      id: 5,
      title: "Timely Delivery & Project Management",
      description:
        "Regular updates and clear communication throughout the project.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const features = [
    {
      id: "space-planning-tools",
      title: "Space Planning — Create Floor Plans in 10 Minutes (Not 3 Hours)",

      sections: [
        {
          heading: "What Problem You Face Right Now",
          details: [
            "Interior designers waste 15-20 hours every week drawing floor plans manually",
            "Moving furniture on paper requires constant redrawing",
            "Room size calculations often lead to costly measurement errors",
            "₹60,000-₹1,00,000 per month is lost in wasted staff time and inefficiencies",
          ],
        },

        {
          heading: "What Our App Does",
          details: [
            "Drag-and-drop floor planning — create layouts in 10 minutes instead of 3 hours",
            "Auto-place furniture with intuitive room arrangement tools",
            "Smart space suggestions based on room size and usage",
            "Instant switch between 2D and 3D views without redrawing",
          ],
        },
      ],
    },

    {
      id: "3d-rendering",
      title: "3D Rendering — Make Photoreal Renders in 5 Minutes (Not 3 Days)",

      sections: [
        {
          heading: "What Problem You Face Right Now",
          details: [
            "Creating 3D models manually takes 20-25 hours every week",
            "Applying textures and materials is time-consuming",
            "Rendering a single room can take 2-3 days",
            "Lighting and shadow corrections often require multiple revisions",
            "Project approvals get delayed by 5-7 days",
          ],
        },

        {
          heading: "What Our App Does",
          details: [
            "Auto-generated 3D models with realistic details",
            "Automatic texture application using high-quality materials",
            "Photorealistic renders generated in under 5 minutes",
            "Accurate lighting and shadows optimized automatically",
          ],
        },
      ],
    },

    {
      id: "material-library",
      title:
        "Material Library — Choose Best Materials Confidently (No Guessing)",

      sections: [
        {
          heading: "What Problem You Face Right Now",
          details: [
            "Designers spend 8-10 hours every week searching for materials",
            "Comparing prices across suppliers requires multiple calls",
            "Researching durability and maintenance takes significant time",
            "Wrong material choices can cost ₹30,000-₹50,000 per project",
          ],
        },

        {
          heading: "What Our App Does",
          details: [
            "Access 5,000+ materials, fabrics, textures, and patterns in one place",
            "Search materials by category, style, or usage",
            "View price, durability, and maintenance information instantly",
            "Compare materials side-by-side for better decisions",
          ],
        },
      ],
    },

    {
      id: "project-management",
      title: "Project Management — Track 20+ Projects Without Stress",

      sections: [
        {
          heading: "What Problem You Face Right Now",
          details: [
            "Teams lose track of project tasks and responsibilities",
            "Deadlines are frequently missed",
            "Client feedback gets buried in long email threads",
            "3-5 projects get delayed every month",
          ],
        },

        {
          heading: "What Our App Does",
          details: [
            "Task assignments with clear ownership",
            "Live project timeline and progress tracking",
            "Automatic deadline reminders and notifications",
            "Centralized client feedback hub",
          ],
        },
      ],
    },

    {
      id: "client-portal",
      title: "Client Portal — Clients Approve Online (Stop 50 Email Chains)",

      sections: [
        {
          heading: "What Problem You Face Right Now",
          details: [
            "50+ emails are exchanged during a single project",
            "Clients constantly ask for updates and revisions",
            "Approvals are delayed through email and phone calls",
            "12-15 hours every week are spent on communication",
          ],
        },

        {
          heading: "What Our App Does",
          details: [
            "Dedicated client portal with secure login",
            "Design uploads shared instantly",
            "Clients provide feedback directly inside the platform",
            "One-click approvals with digital sign-off",
          ],
        },
      ],
    },

    {
      id: "cost-calculator",
      title: "Cost Calculator — Know Exact Project Cost Before Starting",

      sections: [
        {
          heading: "What Problem You Face Right Now",
          details: [
            "Material and labor costs are estimated manually",
            "Budgets frequently exceed client expectations",
            "Cost overruns reduce client trust",
            "20% of projects go over budget",
          ],
        },

        {
          heading: "What Our App Does",
          details: [
            "Automatic material cost calculations from live databases",
            "Labor cost calculations based on project scope",
            "Accurate total budget forecasting",
            "Compare premium and budget options instantly",
          ],
        },
      ],
    },

    {
      id: "mobile-app",
      title: "Mobile App — Design From Phone (No Office Needed)",

      sections: [
        {
          heading: "What Problem You Face Right Now",
          details: [
            "Designers cannot access projects easily on-site",
            "Client meetings require carrying laptops",
            "Material databases are unavailable on mobile",
            "Project updates are delayed until returning to office",
          ],
        },

        {
          heading: "What Our App Does",
          details: [
            "Native iOS and Android applications",
            "Offline access to designs and project data",
            "Upload site photos directly from phone",
            "Present portfolios during client meetings",
            "Update projects from anywhere without a laptop",
          ],
        },
      ],
    },

    {
      id: "vr-walkthroughs",
      title: "VR Walkthroughs — Clients Walk Through Design Before Building",

      sections: [
        {
          heading: "What Problem You Face Right Now",
          details: [
            "Clients struggle to understand 2D and 3D drawings",
            "Uncertainty about room size, colors, and layouts",
            "Design changes after construction starts can cost ₹50,000+",
            "15% of projects require major changes mid-construction",
          ],
        },

        {
          heading: "What Our App Does",
          details: [
            "Immersive VR walkthrough experience",
            "Clients can walk through spaces before construction",
            "View colors, dimensions, and furniture realistically",
            "Approve designs with complete confidence before execution",
          ],
        },
      ],
    },
  ];

  const adminFeatures = [
    {
      icon: LayoutDashboard,
      title: "Project Management",
      description:
        "Manage multiple design projects with task assignments, timelines, and progress tracking with real-time team updates.",
    },
    {
      icon: MonitorPlay,
      title: "Design Visualization",
      description:
        "Real-time 3D visualization of interior spaces with photorealistic rendering capabilities.",
    },
    {
      icon: Users,
      title: "Client Collaboration",
      description:
        "Share designs and receive feedback directly through the platform with version control.",
    },
    {
      icon: Package,
      title: "Resource Management",
      description:
        "Track materials, furniture, and resources across all projects with inventory management.",
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
      title: " Learn Your Studio",
      description:
        "Understanding client requirements and creating initial design concepts.",
    },
    {
      number: "2",
      title: "Custom Design",
      description:
        "Creating detailed 2D/3D layouts and space utilization plans.",
    },
    {
      number: "3",
      title: "Build + Test",
      description: "Choosing appropriate materials, finishes, and furnishings.",
    },
    {
      number: "4",
      title: "Train + Start ",
      description: "Delivering photorealistic renderings and walkthroughs.",
    },
  ];

  const faqs = [
    {
      question: " How long to build interior design app?",
      answer: `
    6-8 weeks total:

    Week 1: Learn your studio + design

    Week 2: Custom build for you

    Week 3-7: Develop + test everything

    Week 8: Train team + start

    Most Indian studios start in 6 weeks.
`,
    },
    {
      question: "How much does it cost?",
      answer: `
       ₹10,000 - ₹50,000/month by team size:

       2-5 designers: ₹10,000/month (basic features)

       5-10 designers: ₹25,000/month (full features)

       10-20 designers: ₹50,000/month (all features + VR)

       Setup fee: ₹50,000 (one-time)

       Save ₹18 Lakhs in first year.

      `,
    },
    {
      question: "Mobile app for designers?",
      answer: `
     Yes — iOS + Android app:

     See designs (app, offline)

     Upload site photos (from phone)

     Client meetings (show portfolio)

     Update project (anywhere, no laptop)

     Get notifications (push)

     Designers work from phone, no office needed.
`,
    },
    {
      question: "Do you train designers?",
      answer: `
        Yes — complete training:

        2-day training at your studio (5-10 staff)

        25 video tutorials (watch anytime)

        24/7 support (call anytime)

        1-month free support after start

        Most teams learn in 5 days.

        `,
    },
    {
      question: "Can we add features later?",
      answer: `
   Yes — unlimited customization:

   Add features (VR, cost calculator, more materials)

   Change dashboard (owner vs designer view)

   Add designers as you grow

   Cost: ₹25,000-₹100,000 (based on complexity)

   App grows with your studio.
`,
    },
    {
      question: "VR walkthroughs included?",
      answer: `

      Yes — VR headsets supported:

      Oculus Quest

      Google VR

      HTC Vive

      Walk through design (real feel, like actual room)

      Approve before building (100% confident)

      Clients trust 90%, mid-project changes drop 85%.
`,
    },
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO {...seoData.interiorArchitecture} />
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
                Interior Design App Development | 3D Design Software, VR
                Walkthroughs & Client Portal for Interior Designers.
              </h1>
              <p className="text-lg text-gray-300 leading-relaxed">
                Discover the powerful features of our advanced interior design
                software. Whether you need a complete custom solution or want to
                add personalized features to your existing system, we build it
                exactly the way you want.
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
              Features That Make Your Interior Design Studio Work Better
            </h2>
            <p className="text-base text-gray-300 max-w-2xl mx-auto">
              Explore The Functionality Of Our State-Of-The-Art Interior Design
              System
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
                      <div className="space-y-6">
                        {features[activeFeature].sections.map(
                          (section, sectionIndex) => (
                            <div
                              key={sectionIndex}
                              className="border-l-4 border-amber-400 pl-4"
                            >
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

                                    <span className="leading-relaxed">
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
              Our Interior Design Process
            </h2>
            <p className="text-lg text-gray-300">
              Witness our step by step process in creating exceptional interior
              design solutions.
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
                    Transform Your Interior Design Vision with Ascentia Labs
                  </h2>
                  <p className="text-xl text-gray-300 mb-8">
                    Why Interior Design Studios in India Choose Us
                  </p>
                </div>

                <div className="space-y-6">
                  {reasons.map((item) => (
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
                            <h3 className="text-xl group-hover:text-blue-300 transition-colors">
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
                      </div>

                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          activeIndex === item.id
                            ? "max-h-40 opacity-100 mt-4"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        <p className="text-gray-300 text-sm md:text-base pl-16">
                          {item.description}
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
                      Ready to Transform Your Interior Design Business?
                    </h3>
                    <p className="text-blue-100 mb-6">
                      Join hundreds of satisfied clients who trust Ascentia Labs
                      for their interior design solutions.
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
                Frequently Asked Questions — Interior Design App
              </h2>
              <p className="text-lg text-gray-300">
                Get answers to common questions about our Interior Design System
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
                    <h3 className="text-md lg:text-lg  text-white pr-4">
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
                        <p className="text-gray-300  text-sm lg:text- 2xl:text-lg  whitespace-pre-line leading-relaxed">
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

export default InteriorArchitecture;
