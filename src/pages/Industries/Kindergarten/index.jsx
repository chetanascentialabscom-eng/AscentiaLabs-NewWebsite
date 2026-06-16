import { useState } from "react";
import { Link } from "react-router-dom";
import { useConsultation } from "../../../contexts/ConsultationContext";
import {
  Users,
  BookOpen,
  ChevronDown,
  ChevronUp,
  Shield,
  UserCheck,
} from "lucide-react";
import SEO from "../../../components/SEO";
import { seoData } from "../../../utils/seoData";

const KindergartenPage = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [openFAQ, setOpenFAQ] = useState(null);
  const { openConsultation } = useConsultation();
  const [open, setOpen] = useState(false);

  const [activeIndex, setActiveIndex] = useState(null);
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
      id: "student-enrollment-management",
      title: "Student Enrollment — Join in 5 Minutes",
      sections: [
        {
          heading: "For School Owners",
          details: [
            "Enroll child in 5 minutes (upload documents).",
            "Parents get instant notification (auto).",
            "See who joined, who waiting (dashboard).",
            "No paper files (all digital).",
            "Collect fees during enrollment (one payment).",
            "Parent app access given immediately.",
          ],
        },
        {
          heading: "For Teachers",
          details: [
            "See new student today (dashboard)",
            "Add to class list automatically",
            "Know child name, age, allergies (info)",
          ],
        },
      ],
    },
    {
      id: "teacher-staff-management",
      title: "Teacher & Staff — Know Who Works Well",
      sections: [
        {
          heading: "For Owners",
          details: [
            "See teacher performance (parent feedback, class rating).",
            "Check who is present today (digital).",
            "Auto-make class schedule (system assigns).",
            "Calculate salary automatically (payroll).",
            "Track leave requests (online).",
            "See training certificates (records).",
          ],
        },
        {
          heading: "For Teachers",
          details: [
            "See my schedule (app)",
            "Mark attendance in 5 seconds",
            "See my performance (feedback)",
            "Ask leave (online form)",
          ],
        },
      ],
    },
    {
      id: "parent-communication",
      title: " Parent App — Parents See Everything on Phone",
      sections: [
        {
          heading: "For Teachers",
          details: [
            "Send photos daily (upload, auto-send).",
            "Write quick update (use templates).",
            "Share report (auto-make).",
            "Message parents (chat).",
            "Send notices (attendance, fees, events).",
          ],
        },
        {
          heading: "For Parents",
          details: [
            "See my child's photos (app)",
            "Read daily update (instant)",
            "Chat with teacher (direct)",
            "Get notifications (push)",
            "Download report (PDF)",
          ],
        },
      ],
    },
    {
      id: "curriculum-management",
      title: "Learning Plan — Auto-Plan What to Teach",
      sections: [
        {
          heading: "For Teachers",
          details: [
            "Auto lesson plan (age-based activities).",
            "Track what child learned (checklist).",
            "Daily activity ideas (ready).",
            "See who learns well (progress).",
            "Change plan if child needs help.",
            "Parents see plan (auto-update).",
          ],
        },
        {
          heading: "For Owners",
          details: [
            "See all lesson plans (dashboard)",
            "Check quality (review)",
            "Track all classes (progress)",
            "Same plan for all teachers (standard)",
          ],
        },
      ],
    },
    {
      id: "attendance-scheduling",
      title: " Attendance — Scan QR Code ",
      sections: [
        {
          heading: "For Teachers",
          details: [
            "Scan QR code (done in 10 seconds).",
            "See live who is present (dashboard).",
            "Parents get alert if absent (auto).",
            "Class schedule auto-made.",
            "Weekly, monthly reports (auto).",
            "Late arrival recorded (auto).",
          ],
        },
        {
          heading: "For Parents",
          details: [
            "See if child present (app)",
            "Get alert if absent (instant)",
            "See class schedule (view)",
          ],
        },
      ],
    },
    {
      id: "health-safety-tracking",
      title: "Health & Safety — Know Allergies, Vaccinations",
      sections: [
        {
          heading: "For Teachers",
          details: [
            "Store health info (digital).",
            "Track vaccination (alert if missing).",
            "Mark allergies (red flag).",
            "Emergency phone numbers (instant).",
            "Daily safety check (list).",
            "Write incident (document + tell).",
          ],
        },
        {
          heading: "For Parents",
          details: [
            "Update health info (app)",
            "See vaccination status (dashboard)",
            "Get allergy alert (notification)",
            "See incident report (if any)",
          ],
        },
      ],
    },
    {
      id: "meal-nutrition-planning",
      title: "Meals — Auto-Plan Healthy Food",
      sections: [
        {
          heading: "For Teachers",
          details: [
            "Plan meals daily (ready templates).",
            "Track nutrition (calories, vitamins).",
            "Know allergies (no wrong food).",
            "Send meal plan to parents (weekly).",
            "See what kids ate (track).",
            "Make nutrition report (auto).",
          ],
        },
        {
          heading: "For Parents",
          details: [
            "See meal plan (app)",
            "Update allergies (online)",
            "Get nutrition report (weekly)",
            "Request change (submit)",
          ],
        },
      ],
    },
    {
      id: "fee_payment_pay_online",
      title: "Fee Payment — Pay Online ",
      sections: [
        {
          heading: "For Owners",
          details: [
            "Make bill automatically (monthly)",
            "Accept online payment (UPI, card, bank)",
            "Send reminder automatically (auto)",
            "Add late fee automatically (calc)",
            "Make receipt instantly (PDF)",
            "See paid, pending, overdue (report)",
          ],
        },
        {
          heading: "For Parents",
          details: [
            "Pay online (app)",
            "See bill (dashboard)",
            "Get reminder (notification)",
            "Download receipt (PDF)",
          ],
        },
      ],
    },

    {
      id: "mobile_app_run_school_from_phone",
      title: "Mobile App — Run School from Phone",

      sections: [
        {
          heading: "For Teachers",
          details: [
            "Mark attendance (app)",
            "Send photos (upload)",
            "Chat parents (message)",
            "See schedule (dashboard)",
            "Make reports (auto)",
          ],
        },

        {
          heading: "For Parents",
          details: [
            "See child's day (photos)",
            "Check attendance (live)",
            "Pay fees (online)",
            "Chat teachers (instant)",
            "Get updates (push)",
          ],
        },
      ],
    },
    {
      id: "report_all_reports_in_1_click",
      title: "Reports — All Reports in 1 Click",
      sections: [
        {
          heading: "For Owners",
          details: [
            "Enrollment report (new, total)",
            "Attendance report (daily, monthly)",
            "Fee report (paid, pending)",
            "Teacher performance (rating)",
            "Student progress (learning)",
            "Nutrition report (meals)",
            "Export (PDF, Excel)",
          ],
        },
        {
          heading: "For Teachers:",
          details: [
            "Class report (auto)",
            "Student progress (dashboard)",
            "Attendance (weekly)",
            "Export (share parents)",
          ],
        },
      ],
    },
  ];

  const adminFeatures = [
    {
      icon: Users,
      title: "Student Management System",
      description:
        "All in one secure and easy-to-use platform that gives you complete visibility of every child.",
    },
    {
      icon: Shield,
      title: "Role Based Access",
      description:
        "Ensuring only the right people see the right information while maintaining full data security.",
    },
    {
      icon: UserCheck,
      title: "Parent Engagement",
      description:
        "Keeping parents informed and involved every step of the way, which builds stronger trust and satisfaction.",
    },
    {
      icon: BookOpen,
      title: "Academic Management",
      description:
        "Helping teachers and parents work together for better learning outcomes and happy children.",
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
      title: "We Learn Your School ",
      description: "We visit your school",
    },
    {
      number: "2",
      title: " We Build for You ",
      description: "We make software for YOUR school.",
    },
    {
      number: "3",
      title: "We Make + Connect ",
      description: "We build features + connect with your systems.",
    },
    {
      number: "4",
      title: "We Train + Start ",
      description:
        "We train your team (1 day at your school) + 24/7 support starts.",
    },
  ];

  const faqs = [
    {
      question: "How long to install?",
      answer: ` Solution: 4-6 weeks

Week 1: Learn + design

Week 2: Build

Week 3-5: Make + connect

Week 6: Train + start
`,
    },
    {
      question: " How much cost?",
      answer: `
Solution: ₹5,000 - ₹20,000/month

• 50-100 students: ₹5,000/month

• 100-200 students: ₹10,000/month

• 200-500 students: ₹20,000/month

• Setup: ₹25,000 (one-time)
`,
    },
    {
      question: "Mobile app for parents?",
      answer: ` Solution: Yes — iOS + Android:

See photos (app)

Check attendance (live)

Pay fees (online)

Chat teachers (instant)

Get updates (push)
`,
    },
    {
      question: "Train teachers?",
      answer: `
      Solution: Yes

      1-day training at school (5-10 staff)

      20 video tutorials

      24/7 support (call anytime)

      1-month free after start
      `,
    },
    {
      question: "Add features later?",
      answer: `
   Solution: Yes

   Add features (reports, events)

   Change dashboard (owner vs teacher)

   Add students as grow

   Cost: ₹15,000-₹75,000



      `,
    },
    {
      question: "Data safe (child info, parent info)?",
      answer: `
 Solution: Yes — bank-level

 Roles (only see needed)

 Encryption (AES-256)

 2-step login (safe)

 Backups daily (nothing lost)

 Follow laws (privacy)


      `,
    },
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO {...seoData.kindergarten} />
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
                Kindergarten Management Software | Student, Teacher & Parent
                Portal for Early Childhood Education
              </h1>
              <p className="text-lg text-gray-300 leading-relaxed">
                We build simple, secure, and easy-to-use kindergarten software
                in India that helps owners, teachers, and administrators save
                60+ hours every month. With 10+ features from admissions to
                daily reports, teachers focus on children instead of paperwork,
                and parents trust your school more.
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
              Explore Top 10 Features Your Kindergarten Needs
            </h2>
            <p className="text-base text-gray-300 max-w-2xl mx-auto">
              Discover Comprehensive Features Designed For Early Childhood
              Education Management
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-amber-300">
              <div className="grid grid-cols-1 lg:grid-cols-2 lg:h-[610px]">
                {/* Left Side - Feature List */}
                <div className="bg-gray-900 p-4">
                  <div className="space-y-2 lg:max-h-[600px] lg:overflow-y-auto custom-scrollbar">
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
                            {index < 10 ? `${index + 1}` : index + 1}
                          </span>
                          <span className="font-semibold text-sm ">
                            {feature.title}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Side - Feature Details */}
                <div className="p-6 lg:max-h-[600px] lg:overflow-y-auto">
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
                    <div className="space-y-8">
                      {features[activeFeature].sections.map(
                        (section, sectionIndex) => (
                          <div key={sectionIndex}>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">
                              {section.heading}
                            </h3>

                            <ul className="space-y-3 text-gray-600 text-sm">
                              {section.details.map((detail, idx) => (
                                <li
                                  key={idx}
                                  className="flex items-start space-x-2"
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
      </section>

      {/* Process Section */}
      <section className="py-16 bg-black relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent  mb-3">
              Our Kindergarten Management Implementation Process
            </h2>
            <p className="text-lg text-gray-300">
              A streamlined approach to deploying your kindergarten management
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
                  <h2 className="text-2xl md:text-4xl lg:text-3xl mb-4 leading-tight">
                    Transform Your Kindergarten with Our Educational Expertise
                  </h2>
                  <p className="text-lg md:text-xl text-gray-300 mb-8">
                    Why Leading Early Childhood Education Centers Choose Our
                    Solutions
                  </p>
                </div>

                <div className="space-y-6">
                  {/* Item 1 */}
                  <div className="pb-4">
                    <div
                      onClick={() =>
                        setActiveIndex(activeIndex === 1 ? null : 1)
                      }
                      className="flex items-center justify-between cursor-pointer"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="bg-blue-600 text-white px-3 py-1 rounded-md text-sm">
                          01
                        </div>

                        <div>
                          <h3 className=" text-sm lg:text-xl hover:text-blue-300 transition-colors">
                            Early Childhood Education Expertise
                          </h3>

                          <div className="w-24 h-0.5 bg-blue-500 mt-1"></div>
                        </div>
                      </div>

                      <div
                        className={`text-blue-600 text-2xl transition-transform duration-300 ${
                          activeIndex === 1 ? "rotate-45" : ""
                        }`}
                      >
                        +
                      </div>
                    </div>

                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        activeIndex === 1
                          ? "max-h-40 mt-4 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <p className="text-gray-200 text-sm md:text-base pl-16">
                        Early Childhood Education Expertise — Deep understanding
                        of kindergarten operations and child development needs.
                      </p>
                    </div>
                  </div>

                  {/* Item 2 */}
                  <div className="pb-4">
                    <div
                      onClick={() =>
                        setActiveIndex(activeIndex === 2 ? null : 2)
                      }
                      className="flex items-center justify-between cursor-pointer"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="bg-blue-600 text-white px-3 py-1 rounded-md text-sm">
                          02
                        </div>

                        <div>
                          <h3 className="text-sm lg:text-xl hover:text-blue-300 transition-colors">
                            Child Safety & Security Focus
                          </h3>

                          <div className="w-24 h-0.5 bg-blue-500 mt-1"></div>
                        </div>
                      </div>

                      <div
                        className={`text-blue-600 text-2xl transition-transform duration-300 ${
                          activeIndex === 2 ? "rotate-45" : ""
                        }`}
                      >
                        +
                      </div>
                    </div>

                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        activeIndex === 2
                          ? "max-h-40 mt-4 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <p className="text-gray-200 text-sm md:text-base pl-16">
                        Advanced security features to protect sensitive child
                        and parent data.
                      </p>
                    </div>
                  </div>

                  <div className=" pb-4">
                    <div
                      onClick={() => setOpen(!open)}
                      className="flex items-center justify-between cursor-pointer"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="bg-blue-600 text-white px-3 py-1 rounded-md text-sm">
                          03
                        </div>

                        <div>
                          <h3 className="text-sm lg:text-xl hover:text-blue-300 transition-colors">
                            Parent Engagement Solutions
                          </h3>

                          <div className="w-24 h-0.5 bg-blue-500 mt-1"></div>
                        </div>
                      </div>

                      <div
                        className={`text-blue-600 text-2xl transition-transform duration-300 ${
                          open ? "rotate-45" : ""
                        }`}
                      >
                        +
                      </div>
                    </div>

                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        open ? "max-h-40 mt-4 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <p className="text-gray-200 text-sm md:text-base pl-16">
                        Tools that strengthen the connection between school and
                        parents.
                      </p>
                    </div>
                  </div>

                  <div className="pb-4">
                    <div
                      onClick={() =>
                        setActiveIndex(activeIndex === 4 ? null : 4)
                      }
                      className="flex items-center justify-between cursor-pointer"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="bg-blue-600 text-white px-3 py-1 rounded-md text-sm">
                          04
                        </div>

                        <div>
                          <h3 className="text-sm lg:text-xl hover:text-blue-300 transition-colors">
                            Compliance & Reporting Tools
                          </h3>

                          <div className="w-24 h-0.5 bg-blue-500 mt-1"></div>
                        </div>
                      </div>

                      <div
                        className={`text-blue-600 text-2xl transition-transform duration-300 ${
                          activeIndex === 4 ? "rotate-45" : ""
                        }`}
                      >
                        +
                      </div>
                    </div>

                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        activeIndex === 4
                          ? "max-h-40 mt-4 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <p className="text-gray-200 text-sm md:text-base pl-16">
                        Fully compliant with education standards and data
                        privacy requirements.
                      </p>
                    </div>
                  </div>
                  <div className="pb-4">
                    <div
                      onClick={() =>
                        setActiveIndex(activeIndex === 5 ? null : 5)
                      }
                      className="flex items-center justify-between cursor-pointer"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="bg-blue-600 text-white px-3 py-1 rounded-md text-sm">
                          05
                        </div>

                        <div>
                          <h3 className="text-sm lg:text-xl hover:text-blue-300 transition-colors">
                            Seamless Implementation & Training
                          </h3>

                          <div className="w-24 h-0.5 bg-blue-500 mt-1"></div>
                        </div>
                      </div>

                      <div
                        className={`text-blue-600 text-2xl transition-transform duration-300 ${
                          activeIndex === 5 ? "rotate-45" : ""
                        }`}
                      >
                        +
                      </div>
                    </div>

                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        activeIndex === 5
                          ? "max-h-40 mt-4 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <p className="text-gray-200 text-sm md:text-base pl-16">
                        Smooth setup with hands-on training for your entire
                        team.
                      </p>
                    </div>
                  </div>

                  <div className="pb-4">
                    <div
                      onClick={() =>
                        setActiveIndex(activeIndex === 6 ? null : 6)
                      }
                      className="flex items-center justify-between cursor-pointer"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="bg-blue-600 text-white px-3 py-1 rounded-md text-sm">
                          06
                        </div>

                        <div>
                          <h3 className="text-sm lg:text-xl hover:text-blue-300 transition-colors">
                            Affordable Educational Solutions
                          </h3>

                          <div className="w-24 h-0.5 bg-blue-500 mt-1"></div>
                        </div>
                      </div>

                      <div
                        className={`text-blue-600 text-2xl transition-transform duration-300 ${
                          activeIndex === 6 ? "rotate-45" : ""
                        }`}
                      >
                        +
                      </div>
                    </div>

                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        activeIndex === 6
                          ? "max-h-40 mt-4 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <p className="text-gray-200 text-sm md:text-base pl-16">
                        High-quality software at prices that make sense for
                        kindergartens and small schools.
                      </p>
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
                        <svg
                          className="w-16 h-16 text-black relative z-10 drop-shadow-lg"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 14l9-5-9-5-9 5 9 5z" />
                          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                        </svg>

                        {/* Subtle rotating border effect */}
                        <div className="absolute inset-0 rounded-full border-2 border-black/10 animate-spin-slow opacity-60"></div>
                      </div>

                      {/* Outer glow rings with amber theme */}
                      <div className="absolute inset-0 w-32 h-32 rounded-full bg-gradient-to-br from-amber-300/20 via-amber-400/20 to-orange-400/20 animate-ping"></div>
                      <div className="absolute inset-0 w-32 h-32 rounded-full bg-gradient-to-br from-amber-200/15 via-amber-300/15 to-orange-300/15 animate-pulse"></div>
                    </div>
                    <h3 className="text-2xl  mb-4">
                      Ready to Enhance Your Kindergarten Management?
                    </h3>
                    <p className="text-blue-100 mb-6">
                      Join educational leaders who trust our kindergarten
                      management solutions to streamline operations and enhance
                      child development.
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
                Find answers to common questions about our kindergarten
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
                    <h3 className="text-sm lg:text-lg  text-white pr-4">
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
                        <p className="text-gray-300 text-sm lg:text-base whitespace-pre-line leading-relaxed">
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

export default KindergartenPage;
