import { useState } from "react";
import { Link } from "react-router-dom";
import { useConsultation } from "../../../contexts/ConsultationContext";
import {
  Shield,
  Monitor,
  Bell,
  BarChart3,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import SEO from "../../../components/SEO";
import { seoData } from "../../../utils/seoData";

const BusinessCRM = () => {
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

  const crmAdvantages = [
    {
      id: 1,
      title: "CRM Expertise",
      description:
        "Proven CRM build experience. We've designed and delivered custom CRM systems for businesses of all sizes. Our team understands sales, support, and operations workflows so the system supports real work, not just theory.",
    },
    {
      id: 2,
      title: "Custom Development",
      description:
        "Software that fits your processes. We don't force you to change how you work. We build CRM features and workflows that match your existing processes, approvals, and roles so adoption is faster.",
    },
    {
      id: 3,
      title: "Industry Knowledge",
      description:
        "Deep experience across key sectors. We've worked with manufacturing, retail, logistics, healthcare, and service companies. That means faster implementation and fewer surprises because we know common industry needs and compliance requirements.",
    },
    {
      id: 4,
      title: "AI-Powered Solutions",
      description:
        "Practical AI that helps teams sell more. We add AI features like lead scoring, sales forecasting, and customer insights that highlight high-value opportunities and reduce guesswork.",
    },
    {
      id: 5,
      title: "Dedicated Support",
      description:
        "Training and ongoing help. We provide role-based training, onboarding, and long-term support so your team uses the CRM confidently and issues get resolved quickly.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const features = [
    {
      id: "enterprise-crm",
      title: "Manufacturing CRM",
      description:
        "Streamline your manufacturing operations with a CRM designed for production, supply chain, and dealer management.",
      details: [
        "How it helps: Manage B2B orders, production schedules, quality issues, and dealer networks..",
        "Outcome: Shorter lead times, fewer production delays, and improved dealer satisfaction.",
        "Key Features: Order Management, Production Tracking, Quality Control, Dealer Portal, Inventory Integration.",
      ],
    },
    {
      id: "healthcare-crm",
      title: "Healthcare CRM",
      description:
        "Manage patient care, referrals, and appointments with a CRM built for healthcare providers.",
      details: [
        "How it helps: Track patient referrals, appointment workflows, and compliance records.",
        "Outcome: Better patient retention and improved operational compliance.",
        "Key Features: Appointment Scheduling, Patient History Tracking, Referral Management, Compliance Reporting, Secure Data Storage.",
      ],
    },
    {
      id: "real-estate-crm",
      title: "Real Estate CRM",
      description:
        "Manage property listings, client relationships, and sales pipelines with a CRM built for real estate professionals.",
      details: [
        "How it helps: Manage listings, pipeline stages, and client communication.",
        "Outcome: Faster deal closure and repeat client business.",
        "Key Features: Property Listing Management, Lead Tracking, Client Communication, Pipeline Management, Automated Follow-ups.",
      ],
    },
    {
      id: "retail-crm",
      title: "Retail CRM",
      description:
        "Manage customer interactions, sales, and loyalty programs with a CRM built for retail businesses.",
      details: [
        "How it helps: Centralize POS, customer profiles, and loyalty programs.",
        "Outcome: Personalized offers and higher average order values.",
        "Key Features: POS Integration, Customer Segmentation, Loyalty Programs, Purchase History Tracking, Personalized Marketing.",
      ],
    },
    {
      id: "logistics-crm",
      title: "Logistics CRM",
      description:
        "Manage shipments, clients, and delivery networks with a CRM built for logistics businesses.",
      details: [
        "How it helps: Coordinate shipments, customer notifications, and service SLAs.",
        "Outcome: Fewer delivery exceptions and better customer communications.",
        "Key Features: Shipment Tracking, Customer Notifications, Service Level Agreements (SLAs), Delivery Route Optimization, Fleet Management Integration.",
      ],
    },
    {
      id: "service-businesses-crm",
      title: "Service Businesses CRM",
      description:
        "Manage service operations, customer requests, and field service teams with a CRM built for service businesses.",
      details: [
        "How it helps: Schedule jobs, manage contracts, and track billable hours.",
        "Outcome: Higher capacity utilization and faster billing cycles.",
        "Key Features: Job Scheduling, Contract Management, Time Tracking, Automated Invoicing, Field Service Mobile App.",
      ],
    },
    {
      id: "analytics-insights",
      title: "Business Analytics & Insights",
      description:
        "Advanced reporting and analytics to track performance and make data-driven decisions.",
      details: [
        "Custom Dashboards: Create personalized dashboards with the metrics that matter to you.",
        "Sales Forecasting: Predict future revenue with AI-powered forecasting tools.",
        "Performance Reports: Track team performance, conversion rates, and business growth metrics.",
      ],
    },
  ];

  const adminFeatures = [
    {
      icon: Shield,
      title: "Role-Based Access That Protects Your Data",
      description:
        "Business benefit: Secure, auditable operations with faster role-specific workflows.",
    },
    {
      icon: Monitor,
      title: " Customer Journey Tracking",
      description:
        "Business benefit: Timely outreach, personalized offers, and higher conversion.",
    },
    {
      icon: Bell,
      title: "Smart Notifications",
      description:
        "Business benefit: Reduced response times and improved customer satisfaction.",
    },
    {
      icon: BarChart3,
      title: "Business Intelligence",
      description:
        "Business benefit: Accurate forecasting and performance optimization.",
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
      title: "Discovery & Planning",
      description: "Understanding your business requirements and CRM goals.",
    },
    {
      number: "2",
      title: "Design & Configuration",
      description: "Designing workflows and configuring the CRM system.",
    },
    {
      number: "3",
      title: "Development & Testing",
      description: "Building custom features and thorough testing.",
    },
    {
      number: "4",
      title: "Deployment & Training",
      description: "Launching the CRM and training your team.",
    },
  ];

  const faqs = [
    {
      question: "What is Business Management CRM?",
      answer:
        "Business Management CRM is a comprehensive customer relationship management system designed to streamline your business-specific workflows, manage customer interactions, automate sales processes, and provide insights for better decision-making across your organization.",
    },
    {
      question: "How does industry-specific CRM differ from generic CRM?",
      answer:
        "Industry-specific CRMs come with pre-configured workflows, terminology, and features tailored to your industry's unique requirements. This means faster implementation, better adoption, and features that actually match how your business operates, whether you're in healthcare, real estate, manufacturing, or retail.",
    },
    {
      question: "Can the CRM integrate with our existing business tools?",
      answer:
        "Yes, our Business Management CRM solutions are designed with integration in mind. We can connect your CRM with existing ERP systems, accounting software, marketing tools, communication platforms, and other business applications you use daily.",
    },
    {
      question: "Is this suitable for both SMEs and large enterprises?",
      answer:
        "Absolutely! We offer scalable CRM solutions for businesses of all sizes. Our SME CRM packages are cost-effective and easy to implement, while our Enterprise CRM solutions handle complex workflows, multiple locations, and large-scale operations with thousands of users.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO {...seoData.businessCRM} />
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
                Business Management CRM Solutions
              </h1>
              <p className="text-lg text-gray-300 leading-relaxed">
                Stop losing leads and track every customer — automate your
                workflows and sell more.
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
              Key Features In Our Business Management CRM
            </h2>
            <p className="text-base text-gray-300 max-w-2xl mx-auto">
              Unleash Your Business Potential With Our Comprehensive CRM
              Features
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
                            0{index + 1}
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
              Our Stage Wise Business CRM Implementation Process
            </h2>
            <p className="text-lg text-gray-300">
              Witness our step by step process in implementing a business
              management CRM system.
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
                    Lead The Future Of Business Management With Ascentia Labs
                  </h2>
                  <p className="text-xl text-gray-300 mb-8">
                    Here's Why You Can't Afford to Miss Us Out!
                  </p>
                </div>

                <div className="space-y-6">
                  {crmAdvantages.map((item) => (
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
                            ? "max-h-96 opacity-100 mt-3"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        <p className="pl-16 text-gray-300 text-sm md:text-base leading-relaxed">
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
                      Ready to Transform Your Business?
                    </h3>
                    <p className="text-blue-100 mb-6">
                      Join hundreds of satisfied clients who trust Ascentia Labs
                      for their business CRM solutions.
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
                Get answers to common questions about our business management
                CRM
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

export default BusinessCRM;
