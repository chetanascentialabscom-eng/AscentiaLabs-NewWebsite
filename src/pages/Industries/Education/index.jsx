import { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  ChevronDown,
  ChevronUp,
  BarChart3,
  ArrowRight,
  Building2,
  Building,
  GraduationCap,
  Stethoscope,
  Truck,
  Plane,
  Ticket,
  Star,
  Wrench,
  Users,
  Package,
  Home,
  BookOpen,
  Calendar,
  Shield,
  ClipboardList,
  Monitor,
} from "lucide-react";
import { useConsultation } from "../../../contexts/ConsultationContext";
import SEO from "../../../components/SEO";
import ChallengesPinnedSection from "../../../components/industries/ChallengesPinnedSection";
import { seoData } from "../../../utils/seoData";
import { ROUTES, SITE_URL, absoluteUrl } from "../../../utils/routes";

/* ------------------------------------------------------------------ */
/*  Presentational system — dark navy / amber identity preserved      */
/* ------------------------------------------------------------------ */

const SectionShell = ({
  children,
  className = "",
  gradient = false,
  labelledBy,
  allowSticky = false,
  fadeTop = true,
  fadeBottom = true,
}) => (
  <section
    className={`relative py-16 md:py-20 ${
      allowSticky ? "overflow-visible" : "overflow-hidden"
    } ${
      gradient
        ? fadeBottom
          ? "bg-gradient-to-br from-gray-900 via-blue-900 to-black"
          : "bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950"
        : "bg-black"
    } ${className}`}
    aria-labelledby={labelledBy}
  >
    {gradient && fadeTop && (
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black to-transparent z-0" />
    )}
    {gradient && fadeBottom && (
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/80 to-transparent z-0" />
    )}
    <div className="container relative z-10 mx-auto max-w-6xl px-4">
      {children}
    </div>
  </section>
);

const SectionIntro = ({
  id,
  title,
  subtitle,
  align = "center",
  light = false,
}) => (
  <div
    className={`mb-10 md:mb-12 ${
      align === "left" ? "max-w-xl text-left" : "mx-auto max-w-4xl text-center"
    }`}
  >
    <h2
      id={id}
      className={`mb-3 text-3xl leading-tight md:text-4xl ${
        light
          ? "text-white"
          : "bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent"
      }`}
    >
      {title}
    </h2>
    {subtitle && (
      <p
        className={`text-base leading-relaxed md:text-lg ${
          light ? "text-white/90" : "text-gray-300"
        }`}
      >
        {subtitle}
      </p>
    )}
  </div>
);

const AccordionGroup = ({ items, activeId, onToggle, variant = "light" }) => {
  const isDark = variant === "dark";
  return (
    <div
      className={
        isDark
          ? "divide-y divide-gray-800 border-y border-gray-800"
          : "space-y-2"
      }
    >
      {items.map((item) => {
        const open = activeId === item.id;
        const panelId = `accordion-panel-${variant}-${item.id}`;
        const buttonId = `accordion-button-${variant}-${item.id}`;
        return (
          <div
            key={item.id}
            className={
              isDark
                ? "overflow-hidden"
                : `rounded-xl border transition-colors duration-300 ${
                    open
                      ? "border-amber-400/40 bg-white/[0.04]"
                      : "border-white/10 bg-white/[0.02] hover:border-white/20"
                  }`
            }
          >
            <button
              type="button"
              id={buttonId}
              aria-expanded={open}
              aria-controls={panelId}
              onClick={() => onToggle(open ? null : item.id)}
              className={
                isDark
                  ? "group flex w-full items-center justify-between gap-4 px-1 py-5 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400"
                  : "flex w-full items-center justify-between gap-4 p-4 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400"
              }
            >
              {isDark ? (
                <h3 className="pr-2 text-base text-white transition-colors group-hover:text-amber-300 md:text-lg">
                  {item.title}
                </h3>
              ) : (
                <div className="flex min-w-0 items-center gap-3">
                  <span
                    className={`shrink-0 rounded-md px-2.5 py-1 text-xs font-semibold tracking-wide ${
                      open
                        ? "bg-gradient-to-r from-amber-400 to-orange-500 text-black"
                        : "bg-blue-600/80 text-white"
                    }`}
                  >
                    {String(item.id).padStart(2, "0")}
                  </span>
                  <div className="min-w-0">
                    <h3 className="truncate text-md font-medium text-gray-100 lg:text-lg">
                      {item.title}
                    </h3>
                    <div
                      className={`mt-1 h-0.5 transition-all duration-300 ${
                        open ? "w-24 bg-amber-400" : "w-12 bg-blue-500/70"
                      }`}
                    />
                  </div>
                </div>
              )}
              <span className="flex-shrink-0 text-blue-400" aria-hidden="true">
                {open ? (
                  <ChevronUp className="h-5 w-5" />
                ) : (
                  <ChevronDown className="h-5 w-5" />
                )}
              </span>
            </button>

            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!open}
              className={`overflow-hidden transition-all duration-300 ease-out ${
                open ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className={isDark ? "pb-5 pr-8" : "px-4 pb-5 pl-[3.75rem]"}>
                {typeof item.content === "string" ? (
                  <p className="whitespace-pre-line text-sm leading-relaxed text-gray-300 md:text-base">
                    {item.content}
                  </p>
                ) : (
                  item.content
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

/** FAQ source for UI + FAQPage JSON-LD (AEO lead sentences). */
const EDUCATION_FAQ_ITEMS = [
  {
    question: "What is an LMS?",
    answer:
      "An LMS (learning management system) is software that delivers, tracks, and manages online courses, assignments, and learner progress. A cloud based LMS lets schools and edtech platforms run virtual classrooms, assessments, and reporting from one learning management platform.",
  },
  {
    question: "What is the best learning management system for schools?",
    answer:
      "The best learning management system for schools depends on your size, curriculum, and integrations. Learning management systems for schools should unify LMS, admissions, attendance, and student information in one school management system tailored to K-12 or higher education.",
  },
  {
    question: "What is the difference between an LMS and school management software?",
    answer:
      "An LMS focuses on teaching, courses, and e-learning delivery. School management software covers admissions, fees, attendance, and admin workflows. Our platform combines both so you get a learning management system and school management system in one cloud LMS.",
  },
  {
    question: "What is a cloud based LMS?",
    answer:
      "A cloud based LMS (or cloud LMS) is hosted online so students, teachers, and admins access learning content and tools from any device. It scales for online school programs, hybrid classrooms, and multi-campus institutions without on-premise servers.",
  },
  {
    question: "What is a virtual learning environment?",
    answer:
      "A virtual learning environment (VLE) is a digital space where learners access courses, resources, discussions, and assessments. It extends classroom management software into online and blended learning for K-12, colleges, and corporate training.",
  },
  {
    question: "Can you integrate with Moodle, Canvas, or Blackboard?",
    answer:
      "Yes. We build learning management software that integrates with Moodle, Canvas, Blackboard, and other edtech tools via APIs and SSO — so you keep familiar tools while adding school management, attendance, and student information management system capabilities.",
  },
  {
    question: "Is your platform secure and compliant for student data?",
    answer:
      "Our student management system uses encryption, role-based access, audit logs, and compliance with FERPA, GDPR, and regional education data rules. Security is built into every module from attendance to the learning content management system.",
  },
  {
    question: "How much does custom LMS and school management software cost?",
    answer:
      "Cost depends on modules, user count, integrations, and deployment scope. Contact us for a quote tailored to your institution — from preschool and K-12 to colleges, vocational training, and corporate LMS programs.",
  },
];

const EducationPage = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [openFAQ, setOpenFAQ] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);
  const { openConsultation } = useConsultation();

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

  /* ===========================================================
   * DATA — Education / LMS content
   * =========================================================== */

  const businessChallenges = [
    {
      icon: BookOpen,
      title: "Fragmented LMS and Admin Tools",
      pain: "Teaching platforms, spreadsheets, and legacy apps don't talk to each other — creating duplicate data entry and gaps in the learner journey.",
      solution:
        "One learning management platform unifies online learning, school admin, and reporting so teachers and staff work from a single cloud LMS instead of disconnected tools.",
    },
    {
      icon: Calendar,
      title: "Manual Attendance and Fee Tracking",
      pain: "Paper registers and manual fee ledgers slow down operations and increase errors in billing and compliance reporting.",
      solution:
        "Automated student attendance management and fee modules replace manual tracking with real-time dashboards, alerts, and accurate financial records.",
    },
    {
      icon: Users,
      title: "No Unified Student Profile",
      pain: "Academic, behavioral, and family information lives in silos, making it hard to support each learner holistically.",
      solution:
        "A student information management system delivers one profile for grades, attendance, fees, and communication — accessible to authorized staff and parents.",
    },
    {
      icon: ClipboardList,
      title: "Curriculum Scattered Across Files",
      pain: "Lesson plans, syllabi, and learning content sit in folders and email threads instead of a structured curriculum library.",
      solution:
        "Centralized curriculum and learning content management lets teams plan subjects, attach resources, and align assessments across grades and branches.",
    },
    {
      icon: Monitor,
      title: "Weak Parent-Teacher Communication",
      pain: "Updates get lost in messaging apps and paper notices, reducing engagement and timely intervention for at-risk students.",
      solution:
        "Built-in portals and notifications connect parents and teachers with attendance alerts, progress updates, and fee reminders in one place.",
    },
    {
      icon: Shield,
      title: "Data Security and Compliance",
      pain: "Student records spread across systems increase risk of unauthorized access and difficulty meeting education data regulations.",
      solution:
        "Role-based access, encryption, and audit trails protect student data while supporting FERPA, GDPR, and institutional compliance requirements.",
    },
  ];

  const outcomes = [
    { value: "40%", label: "Faster Admissions" },
    { value: "Real-time", label: "Attendance Tracking" },
    { value: "Unified", label: "Student Records" },
    { value: "Higher", label: "Parent Engagement" },
    { value: "Automated", label: "Fee Collection" },
    { value: "EdTech-ready", label: "Platform" },
  ];

  const features = [
    {
      id: "learning-management-system",
      title: "Learning Management System (LMS) — Cloud Based Online Learning",
      sections: [
        {
          heading: "Core LMS Capabilities",
          details: [
            "Cloud based LMS for online courses, assignments, and assessments",
            "Virtual classrooms with live sessions and recorded lectures",
            "E-learning content delivery across web and mobile",
            "Progress tracking and gradebooks for teachers and admins",
          ],
        },
        {
          heading: "For Educators & Learners",
          details: [
            "Course builder with modules, quizzes, and rubrics",
            "Student dashboards for assignments and deadlines",
            "Discussion forums and collaborative learning spaces",
            "Analytics on engagement, completion, and outcomes",
          ],
        },
      ],
    },
    {
      id: "school-management-admissions",
      title: "School Management & Admissions — Digitized Enrollment",
      sections: [
        {
          heading: "Admissions Workflow",
          details: [
            "Streamlined inquiry-to-enrollment from initial contact to registration",
            "Online application forms and document upload for applicants",
            "Appointment booking and admission staff workflow tools",
            "Secure online payment for prospectus, application, and admission fees",
          ],
        },
        {
          heading: "For Admissions Teams",
          details: [
            "Application tracking dashboards with status pipelines",
            "Automated notifications to applicants and parents",
            "Bulk import and export for enrollment seasons",
            "Reporting on conversion rates and seat availability",
          ],
        },
      ],
    },
    {
      id: "student-information-system",
      title: "Student Information Management System — Unified Profiles",
      sections: [
        {
          heading: "Student Records",
          details: [
            "Comprehensive academic portfolios and student profiles",
            "Performance tracking across assignments, grades, and milestones",
            "Automated GPA calculation and transcript generation",
            "Behavioral logs and counselor notes in one record",
          ],
        },
        {
          heading: "For Staff & Families",
          details: [
            "Real-time academic progress for students and parents",
            "Custom report builder for administrators",
            "Historical records across academic years",
            "Role-based views for teachers, admins, and counselors",
          ],
        },
      ],
    },
    {
      id: "student-attendance-management",
      title: "Student Attendance Management — Real-Time Tracking",
      sections: [
        {
          heading: "Attendance Module",
          details: [
            "Daily and period-wise attendance for classrooms and campuses",
            "Automated alerts to parents on absences and tardiness",
            "Integration with biometric, RFID, or mobile check-in",
            "Compliance-ready attendance reports for regulators",
          ],
        },
        {
          heading: "For Administrators",
          details: [
            "Campus-wide attendance dashboards and trends",
            "Late arrival and early dismissal workflows",
            "Substitute teacher and leave-linked attendance views",
            "Export for payroll and statutory reporting",
          ],
        },
      ],
    },
    {
      id: "fee-management-billing",
      title: "Fee Management & Billing — Dynamic Fee Heads",
      sections: [
        {
          heading: "Financial Operations",
          details: [
            "Dynamic fee heads for tuition, transport, activities, and more",
            "Automated invoice generation and fee statements",
            "Payment tracking for partial payments, late fees, and discounts",
            "Online and offline payment reconciliation",
          ],
        },
        {
          heading: "For Finance Teams",
          details: [
            "Pending fee reports and collection dashboards",
            "Scholarship and concession management",
            "Multi-branch fee structures and currency support",
            "Integration with accounting and ERP systems",
          ],
        },
      ],
    },
    {
      id: "curriculum-learning-content",
      title: "Curriculum & Learning Content — Structured Subjects",
      sections: [
        {
          heading: "Curriculum Planning",
          details: [
            "Subject and grade-level curriculum mapping",
            "Lesson plans, learning objectives, and assessment criteria",
            "Standards alignment for K-12 and higher-ed programs",
            "Version control for syllabus updates across terms",
          ],
        },
        {
          heading: "Content Delivery",
          details: [
            "Multimedia resources linked to course modules",
            "Learning content management system for reusable assets",
            "Teacher collaboration on shared lesson libraries",
            "Performance-driven curriculum adjustments from analytics",
          ],
        },
      ],
    },
    {
      id: "digital-library-vle",
      title: "Digital Library & Virtual Learning — Resource Hub",
      sections: [
        {
          heading: "Digital Library",
          details: [
            "Book cataloging, distribution, and inventory management",
            "E-book and e-learning material search and borrowing",
            "Usage reports for librarians and curriculum leads",
            "Integration with LMS courses and classroom resources",
          ],
        },
        {
          heading: "Virtual Learning Environment",
          details: [
            "Central VLE for courses, resources, and assessments",
            "Hybrid and online school program support",
            "Accessible learning paths for remote and on-campus students",
            "Single sign-on across library, LMS, and admin portals",
          ],
        },
      ],
    },
    {
      id: "campus-branch-management",
      title: "Campus & Branch Management — Multi-Site Operations",
      sections: [
        {
          heading: "Campus Operations",
          details: [
            "Multi-branch management with centralized oversight",
            "Bus management with routes, GPS tracking, and parent alerts",
            "Role-based access control by department and campus",
            "Database management for inquiries, staff, and student records",
          ],
        },
        {
          heading: "For Leadership",
          details: [
            "Cross-branch performance and enrollment analytics",
            "Standardized processes with local customization",
            "Audit logs for security-sensitive actions",
            "Scalable architecture from single school to university systems",
          ],
        },
      ],
    },
  ];

  const useCases = [
    {
      title: "K-12 Schools",
      problem:
        "A K-12 district juggled separate tools for LMS, attendance, and fees across multiple campuses.",
      solution:
        "Unified learning management systems for schools with admissions, classroom management software, and parent portals — reducing admin workload and improving learner visibility.",
    },
    {
      title: "Colleges & Higher Education",
      problem:
        "A college needed an online learning management system that connected departments, credit tracking, and student services.",
      solution:
        "A cloud LMS with student information management, course catalogs, and virtual learning environment modules for blended and online programs.",
    },
    {
      title: "Preschool & Early Childhood",
      problem:
        "A preschool network lacked a simple way to share daily updates, attendance, and billing with families.",
      solution:
        "Lightweight school management software with parent communication, attendance alerts, and fee collection tailored to early childhood centers.",
    },
    {
      title: "Vocational Training & Corporate LMS",
      problem:
        "A training provider needed a corporate LMS for certifications, skills tracking, and employer reporting.",
      solution:
        "Custom learning management platform with course paths, assessments, compliance tracking, and integrations for workforce and vocational programs.",
    },
  ];

  const processSteps = [
    {
      number: "1",
      title: "Requirements Analysis",
      description:
        "Our team conducts comprehensive analysis of your educational institution needs, identifying key challenges, academic requirements, and opportunities for digital transformation in school management.",
    },
    {
      number: "2",
      title: "Custom Solution Design",
      description:
        "We design a tailored school management platform that aligns with your educational model, incorporating advanced features like AI-powered learning analytics, virtual classrooms, and automated administrative workflows.",
    },
    {
      number: "3",
      title: "Development & Integration",
      description:
        "Our experts develop and deploy the solution with seamless integration to existing systems, learning management platforms, and third-party educational tools while ensuring minimal disruption to your operations.",
    },
    {
      number: "4",
      title: "Training & Support",
      description:
        "We provide comprehensive training for your staff and ongoing support, continuously monitoring system performance and implementing optimizations to maximize efficiency and educational outcomes.",
    },
  ];

  const reasons = [
    {
      id: 1,
      title: "Industry Expertise in EdTech",
      content:
        "We build LMS and school management software for K-12, colleges, preschool, vocational training, and online school programs — with deep understanding of edtech workflows.",
    },
    {
      id: 2,
      title: "Scalable for Schools to Universities",
      content:
        "From a single campus to multi-branch networks, our learning management platform grows with enrollment, courses, and integrations without replatforming.",
    },
    {
      id: 3,
      title: "Modern Cloud LMS Technology",
      content:
        "Cloud based LMS architecture with mobile access, real-time sync, and APIs for the tools your teachers and admins already use.",
    },
    {
      id: 4,
      title: "Quality Assurance & Compliance",
      content:
        "Rigorous testing and education data compliance built in — so your student management system meets security and regulatory standards.",
    },
    {
      id: 5,
      title: "Seamless Integrations",
      content:
        "Connect Moodle, Canvas, Blackboard, payment gateways, accounting, and HR systems through a unified integration layer.",
    },
    {
      id: 6,
      title: "24/7 Support",
      content:
        "Dedicated support during admissions peaks, exam seasons, and rollout — so your institution stays operational when it matters most.",
    },
  ];

  const relatedServices = [
    {
      title: "Custom Software Development",
      description:
        "Tailored LMS and school management software built for your institution's exact workflows.",
      href: ROUTES.service.customCrm,
    },
    {
      title: "AI/ML Development",
      description:
        "Learning analytics, predictive attendance, and intelligent recommendations for edtech platforms.",
      href: ROUTES.service.aiMl,
    },
    {
      title: "Digital Transformation",
      description:
        "Modernize legacy school systems with a clear roadmap to a unified cloud LMS.",
      href: ROUTES.service.digitalTransformation,
    },
    {
      title: "Mobile App Development",
      description:
        "Native apps for students, parents, and teachers — attendance, courses, and fees on the go.",
      href: ROUTES.service.mobileApplication,
    },
    {
      title: "Ideation & Design",
      description:
        "User-centered design for portals, dashboards, and virtual learning experiences.",
      href: ROUTES.service.ideationDesign,
    },
  ];

  const relatedIndustries = [
    {
      icon: Home,
      title: "Real Estate",
      line: "Property management, CRM & PropTech software solutions.",
      link: ROUTES.industry.realEstate,
    },
    {
      icon: Wrench,
      title: "Field Service CRM",
      line: "Scheduling, dispatch & technician CRM for field teams.",
      link: ROUTES.industry.fieldServiceCrm,
    },
    {
      icon: Stethoscope,
      title: "Healthcare",
      line: "Digital healthcare, patient management & telemedicine solutions.",
      link: ROUTES.industry.healthcare,
    },
    {
      icon: Building,
      title: "Interior & Architecture",
      line: "Project management, design collaboration & client portals.",
      link: ROUTES.industry.interiorArchitecture,
    },
    {
      icon: Star,
      title: "Kindergarten",
      line: "School management, admissions & parent communication.",
      link: ROUTES.industry.kindergarten,
    },
    {
      icon: Ticket,
      title: "Ticketing Solutions",
      line: "Online booking, event management & digital ticketing systems.",
      link: ROUTES.industry.ticketing,
    },
    {
      icon: Package,
      title: "Textile Industry",
      line: "ERP solutions for textile manufacturing & supply chains.",
      link: ROUTES.industry.textiles,
    },
    {
      icon: Truck,
      title: "Logistics",
      line: "Fleet tracking, warehouse & transportation management.",
      link: ROUTES.industry.logistics,
    },
    {
      icon: Building2,
      title: "Manufacturing",
      line: "Production, inventory & quality management software.",
      link: ROUTES.industry.manufacturing,
    },
    {
      icon: Plane,
      title: "Travel & Tourism",
      line: "Booking engines, itinerary & travel management platforms.",
      link: ROUTES.industry.travelTourism,
    },
    {
      icon: BarChart3,
      title: "Business CRM",
      line: "Custom business CRM for sales pipeline and client management.",
      link: ROUTES.industry.businessCrm,
    },
  ];

  const relatedResources = [
    {
      topic: "Guides",
      title: "LMS Buyer's Guide for Schools and Colleges",
      href: "#",
    },
    {
      topic: "Checklists",
      title: "School Management Software Implementation Checklist",
      href: "#",
    },
    {
      topic: "Whitepapers",
      title: "EdTech Platform Strategy Whitepaper",
      href: "#",
    },
  ];

  const faqs = EDUCATION_FAQ_ITEMS.map((f, i) => ({
    id: i,
    title: f.question,
    content: f.answer,
  }));

  const pageUrl = absoluteUrl(ROUTES.industry.education);
  const orgLogo = `${SITE_URL}/ascentialabslogopng.png`;

  const jsonLdGraph = useMemo(() => {
    const faqSchema = {
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: EDUCATION_FAQ_ITEMS.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: f.answer,
        },
      })),
    };

    const organizationSchema = {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Ascentia Labs",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: orgLogo,
      },
      sameAs: [
        "https://www.linkedin.com/company/ascentialabs/",
        "https://www.instagram.com/ascentialabs/",
      ],
      description:
        "Ascentia Labs builds custom LMS, school management software, and edtech platforms for K-12, colleges, and learning organizations.",
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        url: absoluteUrl(ROUTES.contact),
      },
    };

    const serviceSchema = {
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name: "Custom LMS & School Management Software Development",
      serviceType: "Learning Management System Development",
      description: seoData.education.description,
      provider: { "@id": `${SITE_URL}/#organization` },
      url: pageUrl,
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "LMS & School Management Features",
        itemListElement: features.map((feature, index) => ({
          "@type": "Offer",
          position: index + 1,
          itemOffered: {
            "@type": "Service",
            name: feature.title,
            description: feature.sections
              .map(
                (section) =>
                  `${section.heading}: ${section.details.join("; ")}`,
              )
              .join(" | "),
          },
        })),
      },
    };

    const breadcrumbSchema = {
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: SITE_URL,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Industries",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Education & LMS",
          item: pageUrl,
        },
      ],
    };

    const webPageSchema = {
      "@type": "WebPage",
      "@id": pageUrl,
      url: pageUrl,
      name: seoData.education.title,
      description: seoData.education.description,
      about: { "@id": `${pageUrl}#service` },
      breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
      mainEntity: { "@id": `${pageUrl}#faq` },
      publisher: { "@id": `${SITE_URL}/#organization` },
    };

    return {
      "@context": "https://schema.org",
      "@graph": [
        organizationSchema,
        webPageSchema,
        serviceSchema,
        breadcrumbSchema,
        faqSchema,
      ],
    };
  }, [pageUrl, orgLogo]);

  useEffect(() => {
    const scriptId = "education-jsonld";
    let script = document.getElementById(scriptId);
    if (!script) {
      script = document.createElement("script");
      script.id = scriptId;
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(jsonLdGraph);

    return () => {
      const existing = document.getElementById(scriptId);
      if (existing) existing.remove();
    };
  }, [jsonLdGraph]);

  return (
    <div className="min-h-screen bg-black">
      <SEO {...seoData.education} />
      <style dangerouslySetInnerHTML={{ __html: scrollbarStyles }} />

      <nav aria-label="Breadcrumb" className="sr-only">
        <ol>
          <li>
            <Link to={ROUTES.home}>Home</Link>
          </li>
          <li>Industries</li>
          <li>
            <Link to={ROUTES.industry.education}>Education & LMS</Link>
          </li>
        </ol>
      </nav>

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-black pt-20 pb-16 md:pt-24 md:pb-20">
        <div
          className="pointer-events-none absolute inset-0 opacity-10"
          aria-hidden="true"
        >
          <div className="absolute top-20 right-20 h-32 w-32 rounded-full bg-blue-500 blur-3xl" />
          <div className="absolute bottom-40 left-20 h-24 w-24 rounded-full bg-blue-400 blur-2xl" />
          <div className="absolute top-1/2 right-1/3 h-16 w-16 rounded-full bg-blue-300 blur-xl" />
        </div>
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-black" />

        <div className="relative container mx-auto max-w-6xl px-4 py-4 2xl:py-20 ">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14 2xl:gap-20">
            <div className="max-w-3xl space-y-6 text-white">
              <h1 className="text-[25px] leading-tight md:text-4xl">
                Custom LMS & School Management Software — Learning Management
                System
              </h1>

              <p className="text-lg leading-relaxed text-gray-300">
                Cloud based LMS and school management software that streamlines
                online learning, admissions, attendance, and student
                information for K-12 schools and colleges.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row">
                <button
                  onClick={openConsultation}
                  className="rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 px-6 py-3 text-black shadow-lg transition-all duration-300 hover:scale-105 hover:from-amber-500 hover:to-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400"
                >
                  Schedule a Consultation →
                </button>
                <a
                  href="#ai-solutions-heading"
                  className="rounded-xl border border-white/30 px-6 py-3 text-center text-white transition-all duration-300 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Explore Solutions →
                </a>
              </div>

              <ul className="flex list-none flex-wrap gap-x-6 gap-y-3 pt-2">
                {[
                  "Cloud LMS",
                  "School Management",
                  "Student Information",
                  "Virtual Learning",
                ].map((outcome, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 text-sm text-gray-200"
                  >
                    <span className="text-amber-400" aria-hidden="true">
                      ✓
                    </span>
                    {outcome}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-4 lg:mt-0">
              <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-black/30 shadow-2xl backdrop-blur-md">
                <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.04] px-5 py-3.5">
                  <div className="flex items-center gap-2.5">
                    <GraduationCap className="h-5 w-5 text-amber-400" />
                    <p className="text-sm font-normal text-white md:text-base">
                      Education Platform Suite
                    </p>
                  </div>
                  <div
                    className="flex items-center gap-1.5"
                    aria-hidden="true"
                  >
                    <span className="h-2 w-2 rounded-full bg-emerald-400/80" />
                    <span className="text-[11px] font-light uppercase tracking-wider text-gray-400">
                      Live
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 divide-y divide-white/10 sm:grid-cols-2 sm:divide-x sm:divide-y-0">
                  <div className="p-5 transition-colors duration-300 hover:bg-white/[0.04]">
                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-amber-400/25 bg-amber-400/15">
                        <BookOpen className="h-5 w-5 text-amber-400" />
                      </div>
                      <div>
                        <p className="mb-1.5 text-sm font-normal text-white">
                          Learning Management System
                        </p>
                        <p className="text-sm font-light leading-relaxed text-gray-300">
                          Online courses, e-learning, and progress tracking in
                          one cloud LMS.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-5 transition-colors duration-300 hover:bg-white/[0.04]">
                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-blue-400/25 bg-blue-400/15">
                        <Building2 className="h-5 w-5 text-blue-400" />
                      </div>
                      <div>
                        <p className="mb-1.5 text-sm font-normal text-white">
                          School Management Software
                        </p>
                        <p className="text-sm font-light leading-relaxed text-gray-300">
                          Admissions, fees, branches, and admin workflows
                          unified.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="border-white/10 p-5 transition-colors duration-300 hover:bg-white/[0.04] sm:border-t">
                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-emerald-400/25 bg-emerald-400/15">
                        <Users className="h-5 w-5 text-green-400" />
                      </div>
                      <div>
                        <p className="mb-1.5 text-sm font-normal text-white">
                          Student Information System
                        </p>
                        <p className="text-sm font-light leading-relaxed text-gray-300">
                          Academic portfolios, profiles, and records in one
                          place.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="border-white/10 p-5 transition-colors duration-300 hover:bg-white/[0.04] sm:border-t">
                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-violet-400/25 bg-violet-400/15">
                        <Monitor className="h-5 w-5 text-purple-400" />
                      </div>
                      <div>
                        <p className="mb-1.5 text-sm font-normal text-white">
                          Virtual Learning Environment
                        </p>
                        <p className="text-sm font-light leading-relaxed text-gray-300">
                          Hybrid classrooms, digital library, and online school
                          delivery.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= BUSINESS CHALLENGES ================= */}
      <ChallengesPinnedSection
        items={businessChallenges}
        title="Common Challenges in Education & School Management"
        subtitle="Before adopting a unified LMS and school management system, institutions often struggle with fragmented tools, manual processes, and disconnected student data."
      />

      {/* ================= BUSINESS OUTCOMES ================= */}
      <SectionShell gradient labelledBy="outcomes-heading">
        <SectionIntro
          id="outcomes-heading"
          title="Measurable Outcomes with Custom LMS & School Software"
          subtitle="Institutions that deploy integrated learning management software see faster operations, better engagement, and edtech-ready foundations."
          light
        />

        <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/25 backdrop-blur-sm">
          <div className="grid grid-cols-2 md:grid-cols-3">
            {outcomes.map((o, i) => (
              <div
                key={i}
                className={`px-4 py-7 text-center sm:px-5 sm:py-8 ${
                  i % 2 === 1 ? "border-l border-white/10" : ""
                } ${i >= 2 ? "border-t border-white/10 md:border-t-0" : ""} ${
                  i >= 3 ? "md:border-t md:border-white/10" : ""
                } ${i % 3 !== 0 ? "md:border-l md:border-white/10" : ""}`}
              >
                <div className="mb-2 bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-3xl font-medium tracking-tight text-transparent md:text-4xl">
                  {o.value}
                </div>
                <div className="text-xs leading-snug text-white/90 sm:text-sm">
                  {o.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionShell>

      {/* ================= FEATURES EXPLORER ================= */}
      <SectionShell labelledBy="ai-solutions-heading">
        <SectionIntro
          id="ai-solutions-heading"
          title="Explore LMS & School Management Features"
          subtitle="End-to-end capabilities for online learning, admissions, attendance, curriculum, and campus operations."
        />

        <div className="overflow-hidden rounded-2xl border border-white/10 bg-gray-950/80 shadow-xl">
          <div className="grid min-h-0 grid-cols-1 lg:min-h-[420px] lg:grid-cols-5">
            <nav
              className="min-w-0 border-b border-white/10 bg-black/40 p-3 md:p-4 lg:col-span-2 lg:border-b-0 lg:border-r"
              aria-label="LMS feature categories"
            >
              <div className="custom-scrollbar max-h-[320px] space-y-1 overflow-y-auto lg:max-h-none">
                {features.map((feature, index) => {
                  const active = activeFeature === index;
                  return (
                    <button
                      key={feature.id}
                      type="button"
                      onClick={() => setActiveFeature(index)}
                      className={`w-full rounded-lg p-3 text-left transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400 ${
                        active
                          ? "bg-gradient-to-r from-amber-400 to-orange-500 text-black shadow-md"
                          : "text-gray-300 hover:bg-white/5"
                      }`}
                    >
                      <div className="flex items-start gap-2.5">
                        <span
                          className={`mt-0.5 shrink-0 rounded px-2 py-0.5 text-[11px] font-semibold ${
                            active
                              ? "bg-black text-amber-400"
                              : "bg-gradient-to-r from-amber-400 to-orange-500 text-black"
                          }`}
                        >
                          {index < 9 ? `0${index + 1}` : index + 1}
                        </span>
                        <span className="text-sm font-medium leading-snug">
                          {feature.title}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </nav>

            <article className="min-w-0 bg-white p-4 sm:p-6 md:p-8 lg:col-span-3">
              <div className="mb-5 flex items-center gap-3">
                <div className="rounded-xl bg-amber-100 p-2.5">
                  <div className="rounded-lg bg-gradient-to-r from-amber-400 to-orange-500 p-2">
                    <svg
                      className="h-5 w-5 text-black"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div className="h-px flex-1 bg-gray-200" aria-hidden="true" />
              </div>

              <h3 className="mb-5 text-lg leading-snug text-gray-900 sm:mb-6 sm:text-xl md:text-2xl">
                {features[activeFeature].title}
              </h3>

              {(() => {
                const sections = features[activeFeature].sections;
                const rowCount = Math.max(
                  ...sections.map((s) => s.details.length),
                  0,
                );
                const colWidth =
                  sections.length === 1 ? "w-full" : "w-1/2";

                return (
                  <>
                    <div className="space-y-4 md:hidden">
                      {sections.map((section, sectionIndex) => (
                        <div
                          key={sectionIndex}
                          className="overflow-hidden rounded-xl border border-gray-200"
                        >
                          <div className="bg-gradient-to-r from-amber-400 to-orange-500 px-3.5 py-2.5 text-xs font-semibold uppercase tracking-wide text-black">
                            {section.heading}
                          </div>
                          <ul className="divide-y divide-gray-100">
                            {section.details.map((detail, idx) => (
                              <li
                                key={idx}
                                className="flex items-start gap-2.5 px-3.5 py-3 text-sm leading-relaxed text-gray-700"
                              >
                                <span
                                  className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-amber-400 to-orange-500"
                                  aria-hidden="true"
                                />
                                <span className="min-w-0 break-words">
                                  {detail}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>

                    <div className="hidden overflow-x-auto md:block">
                      <div className="overflow-hidden rounded-xl border border-gray-200 shadow-sm">
                        <table className="w-full table-fixed border-collapse text-left text-sm">
                          <caption className="sr-only">
                            {features[activeFeature].title} details
                          </caption>
                          <thead>
                            <tr className="bg-gradient-to-r from-amber-400 to-orange-500">
                              {sections.map((section, sectionIndex) => (
                                <th
                                  key={sectionIndex}
                                  scope="col"
                                  className={`${colWidth} px-3 py-3 text-xs font-semibold uppercase tracking-wide text-black lg:px-4 ${
                                    sectionIndex > 0
                                      ? "border-l border-black/10"
                                      : ""
                                  }`}
                                >
                                  {section.heading}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {Array.from({ length: rowCount }).map(
                              (_, rowIdx) => (
                                <tr
                                  key={rowIdx}
                                  className="border-b border-gray-100 last:border-b-0 odd:bg-white even:bg-gray-50/70"
                                >
                                  {sections.map((section, sectionIndex) => {
                                    const detail = section.details[rowIdx];
                                    return (
                                      <td
                                        key={sectionIndex}
                                        className={`px-3 py-3 align-top text-gray-700 lg:px-4 ${
                                          sectionIndex > 0
                                            ? "border-l border-gray-100"
                                            : ""
                                        }`}
                                      >
                                        {detail ? (
                                          <span className="flex items-start gap-2.5">
                                            <span
                                              className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-amber-400 to-orange-500"
                                              aria-hidden="true"
                                            />
                                            <span className="min-w-0 break-words leading-relaxed">
                                              {detail}
                                            </span>
                                          </span>
                                        ) : (
                                          <span className="text-gray-300">
                                            —
                                          </span>
                                        )}
                                      </td>
                                    );
                                  })}
                                </tr>
                              ),
                            )}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </>
                );
              })()}
            </article>
          </div>
        </div>
      </SectionShell>

      {/* ================= INDUSTRY USE CASES ================= */}
      <SectionShell gradient labelledBy="use-cases-heading">
        <SectionIntro
          id="use-cases-heading"
          title="LMS & School Management Use Cases"
          subtitle="See how K-12 schools, colleges, preschools, and training providers unify learning and administration."
          light
        />

        <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/25">
          <ul className="m-0 list-none divide-y divide-white/10 p-0">
            {useCases.map((u, i) => (
              <li key={i} className="min-w-0">
                <article className="grid min-w-0 grid-cols-1 gap-5 px-4 py-7 sm:gap-6 sm:px-5 sm:py-8 md:px-6 md:py-9 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5 xl:grid-cols-12 xl:items-start xl:gap-x-8 xl:px-8 xl:py-10">
                  <div className="relative min-w-0 lg:col-span-2 xl:col-span-3">
                    <span
                      className="pointer-events-none absolute -left-0.5 -top-3 select-none text-5xl font-medium leading-none text-white/[0.07] sm:-top-4 sm:text-6xl md:text-7xl xl:-top-5 xl:text-8xl"
                      aria-hidden="true"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="relative max-w-full break-words pt-8 mt-1 lg:mt-8  text-lg  font-medium leading-snug text-white sm:pt-6 sm:text-xl md:text-2xl xl:pt-8">
                      {u.title}
                    </h3>
                  </div>

                  <div className="min-w-0 lg:col-span-1 xl:col-span-4">
                    <p className="mb-2 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-orange-400 sm:mb-2.5 lg:text-[14px] sm:tracking-[0.14em]">
                      <span
                        className="h-1.5 w-1.5 shrink-0 rounded-full bg-orange-400 2xl:text-[16px]"
                        aria-hidden="true"
                      />
                      The Problem
                    </p>
                    <p className="break-words text-sm leading-relaxed text-gray-300 md:text-[15px]">
                      {u.problem}
                    </p>
                  </div>

                  <div className="min-w-0 lg:col-span-1 xl:col-span-5">
                    <p className="mb-2 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-amber-400 sm:mb-2.5 lg:text-[14px]  sm:tracking-[0.14em]">
                      <span
                        className="h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400 2xl:text-[16px]"
                        aria-hidden="true"
                      />
                      The Solution
                    </p>
                    <p className="break-words text-sm leading-relaxed text-gray-300 md:text-[15px]">
                      {u.solution}
                    </p>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </SectionShell>

      {/* ================= IMPLEMENTATION PROCESS ================= */}
      <SectionShell labelledBy="process-heading">
        <SectionIntro
          id="process-heading"
          title="Our LMS & School Software Implementation Process"
          subtitle="From requirements analysis to training and support — a proven path to edtech transformation"
        />

        <ol className="relative ml-3 list-none space-y-0 border-l border-white/15 md:hidden">
          {processSteps.map((step, index) => (
            <li key={index} className="relative pb-8 pl-8 last:pb-0">
              <span className="absolute -left-[14px] top-0 flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-r from-amber-400 to-orange-500 text-xs font-bold text-black ring-4 ring-black">
                {step.number}
              </span>
              <h3 className="mb-1.5 text-base font-semibold text-white">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-400">
                {/* {step.description} */}
              </p>
            </li>
          ))}
        </ol>

        <div className="mx-auto hidden max-w-6xl md:block">
          <div className="relative">
            <div
              className="absolute left-[8%] right-[8%] top-6 h-px bg-gradient-to-r from-transparent via-blue-400/40 to-transparent"
              aria-hidden="true"
            />
            <ol className="relative grid list-none grid-cols-4 gap-3">
              {processSteps.map((step, index) => (
                <li key={index} className="px-1 text-center">
                  <div className="relative z-10 mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-amber-400 to-orange-500 text-base font-extrabold text-black shadow-lg ring-4 ring-black">
                    {step.number}
                  </div>
                  <h3 className="mb-2 text-sm font-semibold leading-snug text-white">
                    {step.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-gray-400">
                    {/* {step.description} */}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </SectionShell>

      {/* ================= RELATED AI SERVICES ================= */}
      <SectionShell labelledBy="related-services-heading">
        <SectionIntro
          id="related-services-heading"
          title="Related AI Services"
        />

        <ul className="grid list-none grid-cols-1 gap-4 sm:grid-cols-2 md:gap-5 lg:grid-cols-3">
          {relatedServices.map((s, i) => (
            <li key={i}>
              <Link
                to={s.href}
                className="group block h-full rounded-xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:border-amber-400/40 hover:bg-white/[0.05] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400 md:p-6"
              >
                <h3 className="mb-2 text-lg font-medium text-white transition-colors group-hover:text-amber-300">
                  {s.title}
                </h3>
                <p className="mb-5 text-sm leading-relaxed text-white/90">
                  {s.description}
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-amber-400">
                  Learn more
                  <ArrowRight
                    size={14}
                    className="transition-transform duration-300 group-hover:translate-x-0.5"
                  />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </SectionShell>

      {/* ================= RELATED INDUSTRIES ================= */}
      <SectionShell gradient labelledBy="related-industries-heading">
        <SectionIntro
          id="related-industries-heading"
          title="Related Industry Software Solutions"
          subtitle="Explore custom software development across CRM, healthcare, logistics, manufacturing, and more."
          light
        />

        <ul className="grid list-none grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-4">
          {relatedIndustries.map((industry, i) => {
            const Icon = industry.icon;
            return (
              <li key={i}>
                <Link
                  to={industry.link}
                  className="group flex h-full flex-col rounded-xl border border-white/10 bg-black/25 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-amber-400/40 hover:bg-black/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400 md:p-5"
                >
                  <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-r from-amber-400 to-orange-500 text-black">
                    <Icon size={18} />
                  </div>
                  <h3 className="mb-2 text-sm font-semibold leading-snug text-white transition-colors group-hover:text-amber-300 md:text-[15px]">
                    {industry.title}
                  </h3>
                  <p className="mb-4 flex-1 text-xs leading-relaxed text-gray-300 md:text-sm">
                    {industry.line}
                  </p>
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-amber-400 md:text-sm">
                    Explore
                    <ArrowRight
                      size={13}
                      className="transition-transform duration-300 group-hover:translate-x-0.5"
                    />
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </SectionShell>

      {/* ================= RELATED RESOURCES ================= */}
      <SectionShell labelledBy="related-resources-heading">
        <SectionIntro
          id="related-resources-heading"
          title="Related Resources"
        />

        <ul className="grid list-none grid-cols-1 divide-y divide-white/10 overflow-hidden rounded-xl border border-white/10 bg-black/20 md:grid-cols-3 md:divide-x md:divide-y-0">
          {relatedResources.map((r, i) => (
            <li key={i} className="flex">
              <Link
                to={r.href}
                className="group flex w-full flex-col p-6 transition-colors duration-300 hover:bg-white/[0.05] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-amber-400"
              >
                <span className="mb-3 text-xs font-semibold uppercase tracking-wide text-amber-400">
                  {r.topic}
                </span>
                <h3 className="flex-1 text-base font-medium leading-snug text-white transition-colors group-hover:text-amber-200">
                  {r.title}
                </h3>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm text-gray-400 transition-colors group-hover:text-amber-400">
                  Read more
                  <ArrowRight size={13} />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </SectionShell>

      {/* ================= WHY ASCENTIA LABS ================= */}
      <section
        className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-black py-16 md:py-20"
        aria-labelledby="why-us-heading"
      >
        <div className="pointer-events-none absolute left-0 right-0 top-0 h-20 bg-gradient-to-b from-black to-transparent" />
        <div
          className="pointer-events-none absolute inset-0 opacity-15"
          aria-hidden="true"
        >
          <div className="absolute left-20 top-20 h-32 w-32 rounded-full bg-yellow-400 blur-3xl" />
          <div className="absolute bottom-40 right-20 h-24 w-24 rounded-full bg-yellow-300 blur-2xl" />
        </div>
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-black" />

        <div className="relative container mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-14">
            <div className="space-y-6 text-white">
              <div>
                <h2
                  id="why-us-heading"
                  className="mb-4 text-3xl leading-tight md:text-4xl"
                >
                  Ready to Build Your Custom LMS & School Platform?
                </h2>
                <p className="text-xl text-gray-100">
                  Why Ascentia Labs for Education Software
                </p>
              </div>
              <AccordionGroup
                items={reasons}
                activeId={activeIndex}
                onToggle={setActiveIndex}
                variant="light"
              />
            </div>

            <div className="lg:sticky lg:top-28">
              <div className="rounded-2xl border border-blue-400/25 bg-gradient-to-br from-blue-600/15 to-blue-900/30 p-8 text-center text-white backdrop-blur-md md:p-10">
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full border-2 border-black/10 bg-gradient-to-br from-amber-400 via-amber-500 to-orange-500 shadow-xl">
                  <GraduationCap className="h-10 w-10 text-black" />
                </div>
                <h3 className="mb-4 text-2xl leading-snug">
                  Schedule a Consultation
                </h3>
                <p className="mb-7 leading-relaxed text-blue-100">
                  Unify online learning, admissions, attendance, and student
                  information in one cloud based LMS built for your institution.
                </p>
                <button
                  type="button"
                  onClick={openConsultation}
                  className="rounded-xl border-2 border-black/20 bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 px-8 py-3 text-black shadow-lg transition-all duration-300 hover:scale-105 hover:border-black/40 hover:from-amber-500 hover:via-orange-500 hover:to-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400"
                >
                  Schedule a Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <SectionShell labelledBy="faq-heading">
        <div className="mx-auto max-w-4xl">
          <SectionIntro
            id="faq-heading"
            title="Frequently Asked Questions"
          />
          <AccordionGroup
            items={faqs}
            activeId={openFAQ}
            onToggle={setOpenFAQ}
            variant="dark"
          />
        </div>
      </SectionShell>
    </div>
  );
};

export default EducationPage;
