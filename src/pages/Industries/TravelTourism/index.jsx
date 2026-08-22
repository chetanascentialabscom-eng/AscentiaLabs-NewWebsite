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
  Ticket,
  Star,
  Wrench,
  Package,
  Home,
  Plane,
  Users,
  Globe,
  FileText,
  CreditCard,
  Server,
  Briefcase,
  Hotel,
  Check,
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
const TRAVEL_FAQ_ITEMS = [
  {
    question: "What is travel management software?",
    answer:
      "Travel management software is a B2B platform that helps tour operators, travel agencies, and corporate travel teams manage bookings, CRM, inventory, and expenses in one system. It replaces spreadsheets and disconnected tools with an online travel booking system that connects flights, hotels, tours, and payments.",
  },
  {
    question:
      "What is the difference between tour operator software and travel agency software?",
    answer:
      "Tour operator software focuses on package creation, itinerary management, supplier contracts, and group bookings. Travel agency software emphasizes lead management, GDS booking, commissions, and client CRM. Many travel companies need both — unified as travel company management software on a single platform.",
  },
  {
    question: "What is the best travel booking software for my business?",
    answer:
      "The best travel booking software depends on your model — tour operator, agency, or corporate travel. DMCs need multi-supplier inventory and quotation tools; agencies need GDS integration and CRM; corporates need policy control and expense management. We build custom booking engines sized to your workflows rather than forcing a generic product.",
  },
  {
    question: "What is CRM for tour operators and why do I need it?",
    answer:
      "CRM for tour operators centralizes enquiries, quotations, follow-ups, and sales ledgers in one place. It automates lead allocation, tracks conversion rates, and stores client documents — reducing manual work and helping tour operators close more bookings with faster, accurate quotes.",
  },
  {
    question: "What is corporate travel management software?",
    answer:
      "Corporate travel management software lets companies book flights, hotels, and ground transport while enforcing travel policies, tracking expenses, and generating reports. Combined with travel and expense management software, it gives finance and HR teams visibility into spend, approvals, and compliance across the organization.",
  },
  {
    question:
      "Can you integrate GDS systems like Amadeus, Galileo, and Sabre?",
    answer:
      "Yes — we build API-first travel platforms with GDS booking system integration for Amadeus, Galileo, Sabre, and Travelport. Real-time flight and hotel inventory, pricing, and ticketing sync directly into your online travel booking system and CRM without duplicate data entry.",
  },
  {
    question: "What does hotel reservation software include?",
    answer:
      "Online hotel booking software includes property search, rate comparison, room inventory, booking confirmations, and cancellation management. When connected to a GDS or channel manager, hotel reservation software gives agencies and tour operators live availability across global and local properties.",
  },
  {
    question:
      "Is there travel agency software for small business and startups?",
    answer:
      "Absolutely. We build scalable travel agency software that starts with core modules — CRM, quotations, and booking — and grows with your agency. Small teams get an affordable online travel booking system without enterprise overhead, with the option to add GDS, mobile apps, and corporate travel modules later.",
  },
  {
    question:
      "How much does custom travel software cost and how long does implementation take?",
    answer:
      "Cost depends on scope — booking engine only, CRM only, or a unified platform with GDS and mobile apps. Most projects range from 10–14 weeks for a single module to 18+ weeks for full tour operator or corporate travel rollouts. We provide a fixed-scope proposal after assessing your integrations, inventory sources, and go-live timeline.",
  },
  {
    question: "Why do travel companies need a dedicated travel platform?",
    answer:
      "A dedicated travel platform eliminates fragmented booking systems, manual quotations, and poor lead follow-up. It connects inventory, CRM, payments, and expense management in one tourism management software stack — improving conversion rates, quote accuracy, and operational efficiency for tour operators, agencies, and corporate travel teams.",
  },
];

const TravelTourismPage = () => {
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

  const businessChallenges = [
    {
      icon: Server,
      title: "Fragmented booking systems",
      pain: "Flights, hotels, and tours managed across disconnected tools and spreadsheets.",
      solution:
        "One online travel booking system unifying reservations, inventory, and payments.",
    },
    {
      icon: FileText,
      title: "Manual quotations and proposals",
      pain: "Slow, error-prone quotes that lose deals to faster competitors.",
      solution:
        "Automated quotation builder with real-time pricing and multiservice packages.",
    },
    {
      icon: Globe,
      title: "No GDS or API integration",
      pain: "No live flight or hotel inventory from Amadeus, Galileo, or Sabre.",
      solution:
        "GDS booking system integration with real-time availability and ticketing.",
    },
    {
      icon: Users,
      title: "Poor lead follow-up",
      pain: "Enquiries fall through the cracks without CRM or lead allocation.",
      solution:
        "CRM for tour operators with automated lead routing and follow-up sequences.",
    },
    {
      icon: CreditCard,
      title: "Disconnected expense management",
      pain: "Corporate travel spend invisible to finance and policy teams.",
      solution:
        "Travel and expense management software with policy controls and reporting.",
    },
    {
      icon: Package,
      title: "Legacy agency software",
      pain: "Outdated systems that won't integrate with modern APIs or mobile apps.",
      solution:
        "Cloud-based travel agency management software with API-first architecture.",
    },
  ];

  const outcomes = [
    { value: "40%", label: "Faster Bookings" },
    { value: "98%", label: "Quote Accuracy" },
    { value: "30%", label: "More Conversions" },
    { value: "50%", label: "Less Admin Time" },
    { value: "Real-time", label: "Inventory Access" },
    { value: "Scalable", label: "Agencies & Corporates" },
  ];

  const features = [
    {
      id: "travel-booking-software",
      title: "Travel Booking Software & Online Booking Engine",
      sections: [
        {
          heading: "For Travel Teams",
          details: [
            "B2B and B2C travel portal development with branded booking flows",
            "Flights, hotels, tours, and car rentals in one booking engine",
            "Real-time inventory and dynamic pricing across suppliers",
            "Secure payment collection with multi-currency support",
            "Instant booking confirmations and voucher generation",
            "Automated invoice generation tied to booking data",
          ],
        },
        {
          heading: "For Customers",
          details: [
            "Self-service search, compare, and book on web or mobile",
            "Account management with booking history and preferences",
            "Real-time notifications for confirmations and changes",
            "Branded customer portals for agencies and tour operators",
          ],
        },
      ],
    },
    {
      id: "tour-operator-software",
      title: "Tour Operator Software & CRM for Tour Operators",
      sections: [
        {
          heading: "For Sales Teams",
          details: [
            "Enquiry management with automated lead allocation",
            "Multiservice quotation builder for packages and FIT tours",
            "CRM pipeline from enquiry to confirmed booking",
            "Client document storage and visa/travel file management",
            "Sales ledger, commissions, and payment tracking",
            "Targeted marketing campaigns and lead nurturing",
          ],
        },
        {
          heading: "For Operations",
          details: [
            "Supplier and agent management in a centralized CRM",
            "Contract and rate management with version control",
            "Group booking and allotment management",
            "Reporting and analytics on conversion and revenue",
          ],
        },
      ],
    },
    {
      id: "hotel-reservation-software",
      title: "Hotel Reservation & Booking System",
      sections: [
        {
          heading: "For Agencies",
          details: [
            "Online hotel booking software with global property search",
            "Channel manager and direct contract rate integration",
            "Room inventory, allotments, and stop-sale management",
            "Cancellation policies and amendment workflows",
            "Hotel voucher and confirmation automation",
          ],
        },
        {
          heading: "For Hotel Partners",
          details: [
            "Supplier portal for rate updates and availability",
            "Booking reconciliation and commission reporting",
            "API connectivity for OTAs and tour operators",
            "Multi-property dashboard for hotel groups",
          ],
        },
      ],
    },
    {
      id: "flight-booking-gds",
      title: "Flight Booking & Airline Ticketing (GDS)",
      sections: [
        {
          heading: "For Agents",
          details: [
            "Flight booking system with GDS search and fare rules",
            "Amadeus, Galileo, and Sabre ticketing integration",
            "PNR management, reissues, and refunds",
            "Multi-city and open-jaw itinerary support",
            "Automated fare alerts and price comparison",
          ],
        },
        {
          heading: "For Corporates",
          details: [
            "Policy-compliant flight search and approval workflows",
            "Preferred airline and cabin class enforcement",
            "Travel spend reporting by department and cost center",
            "Integration with corporate travel management software",
          ],
        },
      ],
    },
    {
      id: "corporate-travel-management",
      title: "Corporate Travel Management Software",
      sections: [
        {
          heading: "For Travel Managers",
          details: [
            "Company travel booking with policy and approval rules",
            "Travel and expense management software in one platform",
            "Duty of care with traveler tracking and alerts",
            "Preferred supplier programs and negotiated rates",
            "Budget controls and spend analytics by team",
          ],
        },
        {
          heading: "For Employees",
          details: [
            "Self-service booking within company travel policy",
            "Mobile trip management with itineraries and receipts",
            "Expense submission linked to travel bookings",
            "Real-time approval status and booking confirmations",
          ],
        },
      ],
    },
    {
      id: "travel-agency-management",
      title: "Travel Agency Management Software",
      sections: [
        {
          heading: "For Agency Owners",
          details: [
            "Travel company management software for multi-branch agencies",
            "Staff roles, permissions, and performance tracking",
            "Commission management and supplier reconciliation",
            "Financial reporting, revenue tracking, and profitability analysis",
            "Compliance with travel industry licensing requirements",
          ],
        },
        {
          heading: "For Agents",
          details: [
            "Unified dashboard for leads, bookings, and tasks",
            "Automated follow-up reminders and SLA tracking",
            "Multi-channel communication — email, SMS, and WhatsApp",
            "Mobile access for field agents and remote teams",
          ],
        },
      ],
    },
    {
      id: "gds-api-integration",
      title: "GDS & API Integration (Amadeus, Galileo, Sabre)",
      sections: [
        {
          heading: "For Developers",
          details: [
            "API-first architecture for GDS and third-party inventory",
            "Amadeus booking system, Galileo booking system, and Sabre connectors",
            "Real-time sync of pricing, availability, and confirmations",
            "Webhook and event-driven updates across channels",
            "Sandbox and production environment management",
          ],
        },
        {
          heading: "For Business",
          details: [
            "Single source of truth across booking and CRM modules",
            "Reduced manual data entry and booking errors",
            "Scalable integration layer for new suppliers",
            "Audit trails and error handling for compliance",
          ],
        },
      ],
    },
    {
      id: "mobile-travel-app",
      title: "Mobile Travel App & Trip Management",
      sections: [
        {
          heading: "For Travelers",
          details: [
            "Integrated traveler mobile app with bookings and itineraries",
            "AI-powered personalized itinerary generator",
            "Offline access to documents, boarding passes, and vouchers",
            "GPS-based location services and travel alerts",
            "Push notifications for flight updates and gate changes",
          ],
        },
        {
          heading: "For Support Teams",
          details: [
            "AI-based customer support with 24/7 chatbot assistance",
            "Automated ticket routing and priority assignment",
            "Multilingual support for global customer bases",
            "In-app messaging between agents and travelers",
          ],
        },
      ],
    },
  ];

  const useCases = [
    {
      title: "Tour Operator Scaling Bookings",
      problem:
        "A growing tour operator managed enquiries in email and spreadsheets, losing leads and struggling with manual quotations.",
      solution:
        "Custom tour operator software with CRM, quotation builder, and online booking engine — 40% faster bookings and 30% more conversions within the first quarter.",
    },
    {
      title: "Travel Agency GDS Integration",
      problem:
        "A mid-size travel agency relied on multiple GDS terminals with no unified CRM or client history.",
      solution:
        "Integrated travel agency software with Amadeus and Galileo GDS booking — 98% quote accuracy and a single client view across all bookings.",
    },
    {
      title: "Corporate Travel & Expense Platform",
      problem:
        "A multinational company had no visibility into employee travel spend or policy compliance across regions.",
      solution:
        "Corporate travel management software with expense tracking and approval workflows — 50% less admin time and full policy control for finance teams.",
    },
    {
      title: "DMC Destination Management",
      problem:
        "A destination management company couldn't offer real-time packages or instant confirmations to B2B partners.",
      solution:
        "Tour booking software with multi-supplier inventory, B2B portal, and instant booking — real-time inventory access and scalable partner onboarding.",
    },
  ];

  const processSteps = [
    {
      number: "1",
      title: "Requirements Analysis",
      description:
        "We analyze your travel business model, booking workflows, GDS needs, and integration points to define scope for your travel management software.",
    },
    {
      number: "2",
      title: "Custom Solution Design",
      description:
        "We design a tailored platform aligned to your agency, tour operator, or corporate travel requirements — with clear data flows and rollout phases.",
    },
    {
      number: "3",
      title: "Development & Integration",
      description:
        "Our team builds and integrates your travel booking software with GDS providers, payment gateways, and existing systems with minimal disruption.",
    },
    {
      number: "4",
      title: "Training & Support",
      description:
        "We train your sales, operations, and support teams, then provide ongoing 24/7 support to maximize adoption and ROI.",
    },
  ];

  const advantages = [
    {
      id: 1,
      title: "Travel Industry Expertise",
      description:
        "Deep experience building booking engines, CRM, and GDS integrations for tour operators and agencies.",
    },
    {
      id: 2,
      title: "Custom for Tour Operators & Agencies",
      description:
        "Purpose-built travel company management software — not a one-size-fits-all SaaS product.",
    },
    {
      id: 3,
      title: "GDS & API Integration",
      description:
        "Amadeus, Galileo, Sabre, and third-party inventory connected via API-first architecture.",
    },
    {
      id: 4,
      title: "AI Itinerary & Support",
      description:
        "AI-powered itinerary generation and intelligent customer support built into your platform.",
    },
    {
      id: 5,
      title: "Scalable Cloud Platform",
      description:
        "Cloud-based tourism management software that scales from a single agency to a global network.",
    },
    {
      id: 6,
      title: "24/7 Support",
      description:
        "Round-the-clock support so your travel operations never miss a booking or enquiry.",
    },
  ];

  const reasons = advantages.map((a) => ({
    id: a.id,
    title: a.title,
    content: a.description,
  }));

  const relatedServices = [
    {
      title: "Custom Software Development",
      description:
        "Purpose-built travel booking software, CRM, and booking engines tailored to your workflows.",
      href: ROUTES.service.customCrm,
    },
    {
      title: "AI/ML Development",
      description:
        "AI itinerary generation, demand forecasting, and intelligent customer support for travel platforms.",
      href: ROUTES.service.aiMl,
    },
    {
      title: "Digital Transformation",
      description:
        "A clear roadmap from legacy agency systems to a connected online travel booking system.",
      href: ROUTES.service.digitalTransformation,
    },
    {
      title: "Application Modernization",
      description:
        "Upgrade legacy travel agency software without disrupting bookings or client data.",
      href: ROUTES.service.applicationModernisation,
    },
    {
      title: "Mobile App Development",
      description:
        "Traveler apps, agent tools, and corporate trip management on any device.",
      href: ROUTES.service.mobileApplication,
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
      icon: GraduationCap,
      title: "Education",
      line: "Smart solutions for schools, colleges & e-learning platforms.",
      link: ROUTES.industry.education,
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
      line: "WMS, TMS, fleet management & supply chain software.",
      link: ROUTES.industry.logistics,
    },
    {
      icon: BarChart3,
      title: "Business CRM",
      line: "Custom business CRM for sales pipeline and client management.",
      link: ROUTES.industry.businessCrm,
    },
    {
      icon: Building2,
      title: "Enterprise ERP",
      line: "Integrate finance, operations, HR & business processes.",
      link: ROUTES.industry.erp,
    },
  ];

  const relatedResources = [
    {
      topic: "Guides",
      title: "Travel Booking Software Buyer Guide for Agencies & Tour Operators",
      href: "#",
    },
    {
      topic: "Whitepapers",
      title: "CRM for Tour Operators: Lead Management & Quotation Playbook",
      href: "#",
    },
    {
      topic: "Guides",
      title: "Corporate Travel Management Software Selection Guide",
      href: "#",
    },
  ];

  const faqs = TRAVEL_FAQ_ITEMS.map((f, i) => ({
    id: i,
    title: f.question,
    content: f.answer,
  }));

  const pageUrl = absoluteUrl(ROUTES.industry.travelTourism);
  const orgLogo = `${SITE_URL}/ascentialabslogopng.png`;

  const jsonLdGraph = useMemo(() => {
    const faqSchema = {
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: TRAVEL_FAQ_ITEMS.map((f) => ({
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
        "Ascentia Labs builds custom travel management software, booking engines, tour operator CRM, GDS integrations, and corporate travel platforms for agencies and travel companies.",
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        url: absoluteUrl(ROUTES.contact),
      },
    };

    const serviceSchema = {
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name: "Custom Travel Software — Booking, Tours & Agency Management",
      serviceType: "Travel Software Development",
      description: seoData.travelTourism.description,
      provider: { "@id": `${SITE_URL}/#organization` },
      url: pageUrl,
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Travel Software Features",
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
          name: "Travel & Tourism",
          item: pageUrl,
        },
      ],
    };

    const webPageSchema = {
      "@type": "WebPage",
      "@id": pageUrl,
      url: pageUrl,
      name: seoData.travelTourism.title,
      description: seoData.travelTourism.description,
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
    const scriptId = "travel-tourism-jsonld";
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
      <SEO {...seoData.travelTourism} />
      <style dangerouslySetInnerHTML={{ __html: scrollbarStyles }} />

      <nav aria-label="Breadcrumb" className="sr-only">
        <ol>
          <li>
            <Link to={ROUTES.home}>Home</Link>
          </li>
          <li>Industries</li>
          <li>
            <Link to={ROUTES.industry.travelTourism}>Travel & Tourism</Link>
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

        <div className="relative container mx-auto max-w-6xl px-4 py-4 2xl:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14 2xl:gap-20">
            <div className="max-w-3xl space-y-6 text-white">
              <h1 className="text-[25px] leading-tight md:text-4xl">
                Travel Software — Booking, Tours & Agency Management
              </h1>

              <p className="text-lg leading-relaxed text-gray-300">
                Travel management and booking software for tour operators,
                travel agencies, and corporate travel teams—unifying
                reservations, CRM, and expense management in one platform.
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
                  "Travel Booking",
                  "Tour Operator CRM",
                  "Hotel & Flights",
                  "Corporate Travel",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 text-sm text-gray-200"
                  >
                    <span className="text-amber-400" aria-hidden="true">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-4 lg:mt-0">
              <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-black/30 shadow-2xl backdrop-blur-md">
                <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.04] px-5 py-3.5">
                  <div className="flex items-center gap-2.5">
                    <Plane className="h-5 w-5 text-amber-400" />
                    <p className="text-sm font-normal text-white md:text-base">
                      Unified Travel Platform
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
                        <Plane className="h-5 w-5 text-amber-400" />
                      </div>
                      <div>
                        <p className="mb-1.5 text-sm font-normal text-white">
                          Travel Booking Software
                        </p>
                        <p className="text-sm font-light leading-relaxed text-gray-300">
                          Flights, hotels, tours, and car rentals in one online
                          booking engine.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-5 transition-colors duration-300 hover:bg-white/[0.04]">
                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-blue-400/25 bg-blue-400/15">
                        <Users className="h-5 w-5 text-blue-400" />
                      </div>
                      <div>
                        <p className="mb-1.5 text-sm font-normal text-white">
                          Tour Operator Software
                        </p>
                        <p className="text-sm font-light leading-relaxed text-gray-300">
                          CRM, quotations, lead management, and tour booking for
                          agencies.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="border-white/10 p-5 transition-colors duration-300 hover:bg-white/[0.04] sm:border-t">
                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-emerald-400/25 bg-emerald-400/15">
                        <Hotel className="h-5 w-5 text-green-400" />
                      </div>
                      <div>
                        <p className="mb-1.5 text-sm font-normal text-white">
                          Hotel & Flight Booking
                        </p>
                        <p className="text-sm font-light leading-relaxed text-gray-300">
                          Hotel reservation software with GDS and airline
                          ticketing integration.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="border-white/10 p-5 transition-colors duration-300 hover:bg-white/[0.04] sm:border-t">
                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-violet-400/25 bg-violet-400/15">
                        <Briefcase className="h-5 w-5 text-purple-400" />
                      </div>
                      <div>
                        <p className="mb-1.5 text-sm font-normal text-white">
                          Corporate Travel Management
                        </p>
                        <p className="text-sm font-light leading-relaxed text-gray-300">
                          Company travel booking, expense tracking, and policy
                          control.
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
        title="Travel Industry Challenges We Solve"
        subtitle="Tour operators, agencies, and corporate travel teams face interconnected bottlenecks. Here's how we address each one."
      />

      {/* ================= BUSINESS OUTCOMES ================= */}
      <SectionShell gradient labelledBy="outcomes-heading">
        <SectionIntro
          id="outcomes-heading"
          title="Business Outcomes with Travel Management Software"
          subtitle="Measurable results from unified travel booking software, CRM, and corporate travel platforms."
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

      {/* ================= OUR TRAVEL TECHNOLOGY PRODUCTS ================= */}
      <SectionShell gradient labelledBy="products-heading">
        <SectionIntro
          id="products-heading"
          title="Our Travel Technology Products"
          subtitle="Proven travel management software built for tour operators and agencies — ready to deploy or customize for your business."
          light
        />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* RouteMaestro */}
          <article className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-black/30 shadow-xl transition-all duration-300 hover:border-amber-400/40 hover:bg-black/40">
            <div
              className="flex-shrink-0 p-8"
              style={{ backgroundColor: "#f5f3ed" }}
            >
              <img
                src="/RMLogo.png"
                alt="RouteMaestro — AI-powered travel planning and booking platform"
                className="h-40 w-full object-contain"
              />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h3 className="mb-2 text-xl font-medium text-white">
                RouteMaestro
              </h3>
              <p className="mb-5 text-sm leading-relaxed text-blue-200/90">
                AI-powered travel planning platform that generates personalized,
                multi-city packages with real-time inventory — integrated
                booking in minutes, not hours.
              </p>
              <ul className="mb-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {[
                  "AI-Powered Dynamic Packaging",
                  "Smart Multi-City Route Planning",
                  "Real-Time Inventory Integration",
                  "Instant Booking & Confirmation",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-xs text-white"
                  >
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-gradient-to-r from-amber-400 to-orange-500 text-black">
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-auto">
                <button
                  type="button"
                  onClick={openConsultation}
                  className="w-full rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 px-6 py-2.5 text-sm text-black shadow-lg transition-all duration-300 hover:scale-[1.02] hover:from-amber-500 hover:to-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400"
                >
                  Get Started With RouteMaestro
                </button>
              </div>
            </div>
          </article>

          {/* Travel CRM */}
          <article className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-black/30 shadow-xl transition-all duration-300 hover:border-amber-400/40 hover:bg-black/40">
            <div
              className="flex-shrink-0 p-8"
              style={{ backgroundColor: "#f5f3ed" }}
            >
              <img
                src="/crm.jpg"
                alt="Travel CRM — enquiry management and quotation system for travel agencies"
                className="h-40 w-full object-contain"
              />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h3 className="mb-2 text-xl font-medium text-white">
                Travel CRM
              </h3>
              <p className="mb-5 text-sm leading-relaxed text-blue-200/90">
                CRM for tour operators and travel agencies — streamline
                enquiries, build accurate quotations, and manage the full sales
                cycle from lead to confirmed booking.
              </p>
              <ul className="mb-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {[
                  "Travel Enquiry Management",
                  "Multiservice Quotation Builder",
                  "Client Document Storage",
                  "Sales Ledger & Payments",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-xs text-white"
                  >
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-gradient-to-r from-amber-400 to-orange-500 text-black">
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-auto">
                <button
                  type="button"
                  onClick={openConsultation}
                  className="w-full rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 px-6 py-2.5 text-sm text-black shadow-lg transition-all duration-300 hover:scale-[1.02] hover:from-amber-500 hover:to-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400"
                >
                  Transform Your Travel Business
                </button>
              </div>
            </div>
          </article>
        </div>
      </SectionShell>

      {/* ================= FEATURES EXPLORER ================= */}
      <SectionShell labelledBy="ai-solutions-heading">
        <SectionIntro
          id="ai-solutions-heading"
          title="Explore Top Features of Our Travel Management Solutions"
          subtitle="Comprehensive travel booking software, tour operator CRM, GDS integration, and corporate travel capabilities for modern travel companies."
        />

        <div className="overflow-hidden rounded-2xl border border-white/10 bg-gray-950/80 shadow-xl">
          <div className="grid min-h-0 grid-cols-1 lg:min-h-[420px] lg:grid-cols-5">
            <nav
              className="min-w-0 border-b border-white/10 bg-black/40 p-3 md:p-4 lg:col-span-2 lg:border-b-0 lg:border-r"
              aria-label="Travel software feature categories"
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
          title="Industry Use Cases"
          subtitle="See how tour operators, travel agencies, and corporate travel teams have transformed operations with custom travel software."
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
                    <h3 className="relative mt-1 max-w-full break-words pt-8 text-lg font-medium leading-snug text-white sm:pt-6 sm:text-xl md:text-2xl lg:mt-8 xl:pt-8">
                      {u.title}
                    </h3>
                  </div>

                  <div className="min-w-0 lg:col-span-1 xl:col-span-4">
                    <p className="mb-2 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-orange-400 sm:mb-2.5 sm:tracking-[0.14em] lg:text-[14px]">
                      <span
                        className="h-1.5 w-1.5 shrink-0 rounded-full bg-orange-400"
                        aria-hidden="true"
                      />
                      The Problem
                    </p>
                    <p className="break-words text-sm leading-relaxed text-gray-300 md:text-[15px]">
                      {u.problem}
                    </p>
                  </div>

                  <div className="min-w-0 lg:col-span-1 xl:col-span-5">
                    <p className="mb-2 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-amber-400 sm:mb-2.5 sm:tracking-[0.14em] lg:text-[14px]">
                      <span
                        className="h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400"
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
          title="Our Travel Software Implementation Process"
          subtitle="How we deliver your custom travel booking software, CRM, and GDS integration platform."
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
          subtitle="Explore custom software development across CRM, healthcare, ERP, logistics, and more."
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
                  Ready to Transform Your Travel Business?
                </h2>
                <p className="text-xl text-gray-100">
                  Why Travel Companies Choose Ascentia Labs
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
                  <Plane className="h-10 w-10 text-black" aria-hidden="true" />
                </div>
                <h3 className="mb-4 text-2xl leading-snug">
                  Schedule a Consultation
                </h3>
                <p className="mb-7 leading-relaxed text-blue-100">
                  Join tour operators, travel agencies, and corporate travel
                  teams who trust our travel management software to unify
                  booking, CRM, and expense management.
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

export default TravelTourismPage;
