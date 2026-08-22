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
  Star,
  Wrench,
  ClipboardList,
  Users,
  Package,
  Calendar,
  Home,
  Ticket,
  Workflow,
  LifeBuoy,
  Headphones,
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

const challengeIcons = [ClipboardList, Calendar, Users];

/** FAQ source for UI + FAQPage JSON-LD (AEO lead sentences). */
const TICKETING_FAQ_ITEMS = [
  {
    question: "What is a ticketing system?",
    answer:
      "A ticketing system is software that manages support requests from creation to resolution. It consolidates inquiries from multiple channels, automates workflows, tracks progress, and provides visibility into support operations. Helpdesk software ensures no request falls through the cracks.",
  },
  {
    question: "How does helpdesk software work?",
    answer:
      "Helpdesk software centralizes support requests from email, chat, social media and other channels into a single platform. Tickets are automatically categorized, prioritized and routed to the right agent. Managers gain real-time visibility into performance.",
  },
  {
    question: "What are the benefits of a ticketing system?",
    answer:
      "A ticketing system improves response times, ensures SLA compliance, increases agent productivity, reduces operational costs, centralizes communication, and improves customer satisfaction. AI ticketing systems deliver additional benefits through automation and intelligence.",
  },
  {
    question: "How much does ticketing software cost?",
    answer:
      "Costs vary based on features, number of agents, deployment model and customizations. Cloud-based solutions typically use subscription pricing, while on-premise involves license fees plus maintenance. Contact Ascentia Labs for a customized quote.",
  },
  {
    question:
      "Can a ticketing system handle multiple communication channels?",
    answer:
      "Yes, modern support ticket software consolidates inquiries from email, chat, social media, phone, SMS and WhatsApp into a single platform, so agents access every interaction from one interface.",
  },
  {
    question: "What is an IT ticketing system?",
    answer:
      "An IT ticketing system is specialized helpdesk software for IT service management, handling incident management, request fulfillment, change management, and asset management for IT service desks.",
  },
  {
    question: "How does AI improve ticketing software?",
    answer:
      "AI enhances ticketing systems through ticket categorization, intelligent routing, auto-prioritization, chatbots, knowledge suggestions, sentiment analysis and predictive support.",
  },
  {
    question: "Is ticketing software secure for enterprise use?",
    answer:
      "Enterprise ticketing systems include role-based access control, data encryption, secure authentication, audit logs, automated backups, and compliance with SOC 2, GDPR and HIPAA.",
  },
  {
    question: "How long does it take to implement a ticketing system?",
    answer:
      "Implementation timeline varies based on complexity, customizations and integrations. Typical implementations range from 4–12 weeks, following a structured, agile delivery process.",
  },
  {
    question: "What deployment options are available for ticketing software?",
    answer:
      "Three deployment models are available: Cloud (SaaS), On-Premise, and Hybrid. Cloud suits most organizations, on-premise offers full control for strict requirements, and hybrid balances both.",
  },
];

const TicketingSoftwarePage = () => {
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
   * DATA — Ticketing content mapped to Business/Field CRM structure
   * =========================================================== */

  const challenges = [
    {
      problem:
        "Agents manually review, categorize and assign every incoming ticket.",
      impact: "Time is wasted, errors creep in, and responses are delayed.",
      solution:
        "Automated ticket categorization and intelligent routing with AI.",
    },
    {
      problem: "Support requests get lost in inboxes, chats and spreadsheets.",
      impact: "Requests fall through the cracks and customers get frustrated.",
      solution:
        "Centralized ticketing system that captures every request automatically.",
    },
    {
      problem: "Manual processes and fragmented tools slow response times.",
      impact: "SLA compliance becomes impossible to achieve consistently.",
      solution: "Automated SLA tracking, prioritization and escalation alerts.",
    },
    {
      problem:
        "Support channels — email, chat, social, phone — are managed separately.",
      impact:
        "Agents waste time switching tools; customers get inconsistent service.",
      solution: "Unified omnichannel helpdesk with a single ticket view.",
    },
    {
      problem: "Solutions to common issues live in silos or aren't documented.",
      impact: "Agents repeatedly solve the same problems, wasting time.",
      solution: "Centralized knowledge base with AI-powered suggestions.",
    },
    {
      problem:
        "No real-time visibility into team performance or resolution times.",
      impact: "Leaders make decisions on gut feel rather than data.",
      solution: "Real-time dashboards and comprehensive reporting.",
    },
  ];

  const businessChallenges = challenges.map((c, i) => ({
    icon: challengeIcons[i % challengeIcons.length],
    title: c.problem,
    pain: c.impact,
    solution: c.solution,
  }));

  const outcomes = [
    { value: "50–70%", label: "Faster Ticket Resolution" },
    { value: "85–95%", label: "Customer Satisfaction Score" },
    { value: "95–99%", label: "SLA Compliance" },
    { value: "2–3x", label: "Tickets Resolved Per Agent" },
    { value: "20–40%", label: "Reduced Support Costs" },
    { value: "Real-time", label: "Support Visibility" },
  ];

  const features = [
    {
      id: "ticket-management",
      title: "Ticket Management — Full Lifecycle, No Gaps",
      sections: [
        {
          heading: "For Support Agents",
          details: [
            "Auto ticket creation (email, chat, social)",
            "Ticket & SLA tracking (live dashboard)",
            "Auto categorization (AI-powered)",
            "Real-time monitoring (live dashboard)",
            "Escalation alerts (before SLA breach)",
            "Task assignment (auto assign to team)",
            "Progress tracking (see status live)",
            "CRM/ERP integration (auto sync)",
          ],
        },
        {
          heading: "For Managers",
          details: [
            "See ticket queue (dashboard)",
            "Track SLA (live)",
            "Find bottlenecks (alerts)",
            "Assign tasks (auto)",
          ],
        },
      ],
    },
    {
      id: "workflow-automation",
      title: "Workflow Automation — Auto Routing, No Missed Tickets",
      sections: [
        {
          heading: "For Support Teams",
          details: [
            "Real-time ticket routing (live status)",
            "Auto escalation alerts (when due, instant)",
            "Multi-channel management (all channels)",
            "Auto priority setting (no manual work)",
            "Document storage (auto-filed)",
            "Approval workflows (1 click)",
            "Compliance tracking (full traceability)",
          ],
        },
        {
          heading: "For Customers",
          details: [
            "See ticket status (portal)",
            "Update requests (live)",
            "Auto reminders (alerts)",
            "Document access (quick)",
          ],
        },
      ],
    },
    {
      id: "sla-management",
      title: "SLA Management — Fast Response, Happy Customers",
      sections: [
        {
          heading: "For Support Teams",
          details: [
            "Auto SLA tracking (custom checkpoints)",
            "Real-time monitoring (live)",
            "Trend analysis (see patterns)",
            "Escalation dispatch tracking (alerts)",
            "Predictive breach alerts (auto assign)",
            "Compliance tracking (standards met)",
            "Audit trail (auto documentation)",
          ],
        },
        {
          heading: "For Customers",
          details: [
            "Submit tickets (app)",
            "Track status (live)",
            "Rate resolution (reports)",
          ],
        },
      ],
    },
    {
      id: "omnichannel-support",
      title: "Omnichannel Helpdesk — Track Requests, No Delays",
      sections: [
        {
          heading: "For Support Leaders",
          details: [
            "Track channel volume (scoring)",
            "Response times (live tracking)",
            "Agent performance (KPIs)",
            "Ticket automation (sync auto)",
            "Escalation tracking (alerts)",
            "Notification automation (auto plan)",
            "Customer communication (live)",
            "CRM integration (auto sync)",
          ],
        },
        {
          heading: "For Agents",
          details: [
            "See tickets (dashboard)",
            "Send updates (auto generate)",
            "Track resolutions (alerts)",
            "Coordinate handoffs (portal)",
          ],
        },
      ],
    },
    {
      id: "knowledge-base",
      title: "Knowledge Base — Prevent Repeat Tickets",
      sections: [
        {
          heading: "For Agents",
          details: [
            "Ticket volume forecasting (auto alerts)",
            "Predictive issue detection (alerts before issues)",
            "Performance monitoring (live KPIs)",
            "Cost tracking (budget management)",
            "Article suggestions (always available)",
            "Usage reports (auto create)",
          ],
        },
        {
          heading: "For Customers",
          details: [
            "See knowledge base (self-service)",
            "Track resolutions (reports)",
            "Escalation alerts (instant)",
          ],
        },
      ],
    },
    {
      id: "ai-chatbot",
      title: "AI Chatbot — Auto Triage, Track Satisfaction",
      sections: [
        {
          heading: "For Support Teams",
          details: [
            "Auto triage (24/7, right process)",
            "Communication optimization (efficient)",
            "Ticket handoff (digital, 5 seconds)",
            "Satisfaction tracking (KPIs live)",
            "Escalation management (terms tracked)",
            "Retention analytics (live)",
          ],
        },
        {
          heading: "For Customers",
          details: [
            "Chat with bot (app)",
            "Get instant answers (5 seconds)",
            "View history (dashboard)",
          ],
        },
      ],
    },
    {
      id: "analytics-reporting",
      title: "Analytics & Reporting — See Performance, Cut Costs",
      sections: [
        {
          heading: "For Leaders",
          details: [
            "Real-time SLA accounting (live)",
            "Ticket costing (per channel)",
            "Efficiency analysis (see returns)",
            "Financial dashboards (KPIs live)",
            "Capacity planning (auto)",
            "Variance analysis (alerts)",
            "ERP integration (sync auto)",
          ],
        },
        {
          heading: "For Managers",
          details: [
            "Track costs (dashboard)",
            "See efficiency (reports)",
            "Budget tracking (live)",
          ],
        },
      ],
    },
    {
      id: "mobile-app",
      title: "Mobile App — Manage Tickets from Phone",
      sections: [
        {
          heading: "For Agents",
          details: [
            "See ticket queue (app, live)",
            "Track SLAs (live)",
            "Approve requests (1 click)",
            "Alerts (push notifications)",
            "Reports (PDF download)",
          ],
        },
        {
          heading: "For Customers",
          details: [
            "Submit tickets (app, 5 seconds)",
            "See ticket status (dashboard)",
            "Report issues (instant)",
          ],
        },
      ],
    },
    {
      id: "security-compliance",
      title: "Security & Compliance — Track All Access Live",
      sections: [
        {
          heading: "For Admins",
          details: [
            "See all access logs (dashboard)",
            "Compliance status (live KPIs)",
            "Breach alerts (instant)",
            "Usage tracking (reports)",
            "Audit efficiency (KPIs)",
          ],
        },
        {
          heading: "For IT Teams",
          details: [
            "Monitor systems (live)",
            "Alerts (instant)",
            "Usage data (reports)",
          ],
        },
      ],
    },
  ];

  const useCases = [
    {
      title: "IT Service Desk",
      problem:
        "A financial services firm with 2,000+ employees had SLA compliance below 60% on manual IT support.",
      solution:
        "Custom IT ticketing system with automated assignment, prioritization and escalation.",
      outcome: "98% SLA compliance, 65% faster resolution.",
    },
    {
      title: "SaaS Omnichannel Support",
      problem:
        "A fast-growing SaaS company managed email, chat and social support separately.",
      solution:
        "Omnichannel ticketing with automated routing and AI knowledge suggestions.",
      outcome: "Response time dropped from 4 hrs to 2 minutes, CSAT to 91%.",
    },
    {
      title: "Manufacturing Internal Helpdesk",
      problem:
        "A global manufacturer with 5,000+ employees had fragmented internal request channels.",
      solution:
        "Support ticket system with service catalogs and self-service options.",
      outcome: "70% faster request fulfillment, 45% higher satisfaction.",
    },
    {
      title: "Healthcare Support Routing",
      problem:
        "A healthcare technology company needed specialized routing for complex support issues.",
      solution:
        "Helpdesk software with AI-powered routing and skill-based assignment.",
      outcome: "55% better first-contact resolution, 70% fewer escalations.",
    },
  ];

  const processSteps = [
    {
      number: "1",
      title: "Discovery & Assessment",
      description:
        "We understand your support operations, pain points and goals, and document requirements, integration needs and success criteria.",
    },
    {
      number: "2",
      title: "Solution Design",
      description:
        "We design workflows and architecture, configure features and customizations, and plan the data migration and integration approach.",
    },
    {
      number: "3",
      title: "Development & Testing",
      description:
        "Our experts build and configure the platform, migrate data, and run system testing plus user acceptance testing with your team.",
    },
    {
      number: "4",
      title: "Deployment & Support",
      description:
        "We deploy to production with hyper-care support, deliver admin and agent training, and provide ongoing technical support and optimization.",
    },
  ];

  const advantages = [
    {
      id: 1,
      title: "Custom Software Expertise",
      description: "We Don't Sell One-Size-Fits-All Ticketing Tools",
    },
    {
      id: 2,
      title: "Scalable Solutions",
      description: "Grows With You — From Small Teams to Global Enterprises",
    },
    {
      id: 3,
      title: "AI Development Capabilities",
      description:
        "AI Embedded Throughout — Categorization, Routing, Predictive Support",
    },
    {
      id: 4,
      title: "Enterprise Architecture",
      description:
        "Built for High Ticket Volumes & Enterprise Security — We test 3 times",
    },
    {
      id: 5,
      title: "Agile Development",
      description: "Delivered Quickly With Regular Checkpoints — No disruption",
    },
    {
      id: 6,
      title: "Dedicated Support",
      description: "Long-Term Technology Partnership — We Answer Fast",
    },
  ];

  const reasons = advantages.map((a) => ({
    id: a.id,
    title: a.title,
    content: a.description,
  }));

  const relatedServices = [
    {
      title: "AI/ML Development",
      description:
        "Custom AI solutions for support automation and intelligent routing.",
      href: ROUTES.service.aiMl,
    },
    {
      title: "Custom CRM Development",
      description:
        "Tailored software built around your exact support workflow.",
      href: ROUTES.service.customCrm,
    },
    {
      title: "Digital Transformation",
      description:
        "A clear roadmap from fragmented helpdesk tools to a unified ticketing platform.",
      href: ROUTES.service.digitalTransformation,
    },
    {
      title: "Application Modernization",
      description:
        "Upgrade legacy ticketing systems without disrupting support operations.",
      href: ROUTES.service.applicationModernisation,
    },
    {
      title: "Mobile App Development",
      description: "Manage tickets, approvals and alerts from anywhere.",
      href: ROUTES.service.mobileApplication,
    },
  ];

  const relatedIndustries = [
    {
      icon: Home,
      title: "Real Estate",
      line: "Property inquiries, tenant support & PropTech ticketing workflows.",
      link: ROUTES.industry.realEstate,
    },
    {
      icon: Building2,
      title: "Business CRM",
      line: "Sales, support and client workflows in one CRM platform.",
      link: ROUTES.industry.businessCrm,
    },
    {
      icon: Wrench,
      title: "Field Service CRM",
      line: "Dispatch, job tickets & technician service request management.",
      link: ROUTES.industry.fieldServiceCrm,
    },
    {
      icon: GraduationCap,
      title: "Education",
      line: "Student, staff & facility helpdesk software for campuses.",
      link: ROUTES.industry.education,
    },
    {
      icon: BarChart3,
      title: "Enterprise ERP",
      line: "Connect finance, operations and support ticket data.",
      link: ROUTES.industry.erp,
    },
    {
      icon: Stethoscope,
      title: "Healthcare",
      line: "Patient inquiries & compliant internal support routing.",
      link: ROUTES.industry.healthcare,
    },
    {
      icon: Building,
      title: "Interior & Architecture",
      line: "Project requests, client portals & design collaboration.",
      link: ROUTES.industry.interiorArchitecture,
    },
    {
      icon: Star,
      title: "Kindergarten",
      line: "Parent communication, admissions & school support requests.",
      link: ROUTES.industry.kindergarten,
    },
    {
      icon: Package,
      title: "Textile Industry",
      line: "Production support tickets for textile manufacturing ops.",
      link: ROUTES.industry.textiles,
    },
    {
      icon: Truck,
      title: "Logistics",
      line: "Shipment issues, delivery inquiries & fleet support desks.",
      link: ROUTES.industry.logistics,
    },
    {
      icon: Building2,
      title: "Manufacturing",
      line: "Equipment maintenance & internal helpdesk for plants.",
      link: ROUTES.industry.manufacturing,
    },
    {
      icon: Plane,
      title: "Travel & Tourism",
      line: "Booking issues, itinerary support & guest service tickets.",
      link: ROUTES.industry.travelTourism,
    },
  ];

  const relatedResources = [
    {
      topic: "Blogs",
      title: "How AI-Powered Ticketing Systems Transform Customer Support",
      href: "#",
    },
    {
      topic: "Whitepapers",
      title: "The State of AI in Customer Support: Trends and Opportunities",
      href: "#",
    },
    {
      topic: "Guides",
      title: "The Complete Guide to Choosing Ticketing Software",
      href: "#",
    },
  ];

  const faqs = TICKETING_FAQ_ITEMS.map((f, i) => ({
    id: i,
    title: f.question,
    content: f.answer,
  }));

  const pageUrl = absoluteUrl(ROUTES.industry.ticketing);
  const orgLogo = `${SITE_URL}/ascentialabslogopng.png`;

  const jsonLdGraph = useMemo(() => {
    const faqSchema = {
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: TICKETING_FAQ_ITEMS.map((f) => ({
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
        "Ascentia Labs builds custom software, AI/ML solutions, and digital platforms for industry-specific operations including enterprise ticketing and helpdesk systems.",
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        url: absoluteUrl(ROUTES.contact),
      },
    };

    const serviceSchema = {
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name: "Enterprise Ticketing Software Development",
      serviceType: "Ticketing Software Development",
      description: seoData.ticketingSolution.description,
      provider: { "@id": `${SITE_URL}/#organization` },
      url: pageUrl,
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Ticketing Software Features",
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
          name: "Ticketing Solutions",
          item: pageUrl,
        },
      ],
    };

    const webPageSchema = {
      "@type": "WebPage",
      "@id": pageUrl,
      url: pageUrl,
      name: seoData.ticketingSolution.title,
      description: seoData.ticketingSolution.description,
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
    const scriptId = "ticketing-jsonld";
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
      <SEO {...seoData.ticketingSolution} />
      <style dangerouslySetInnerHTML={{ __html: scrollbarStyles }} />

      <nav aria-label="Breadcrumb" className="sr-only">
        <ol>
          <li>
            <Link to={ROUTES.home}>Home</Link>
          </li>
          <li>Industries</li>
          <li>
            <Link to={ROUTES.industry.ticketing}>Ticketing Solutions</Link>
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
                Enterprise Ticketing Software Built for Modern Support
                Operations
              </h1>

              <p className="text-lg leading-relaxed text-gray-300">
                Replace manual processes with intelligent ticketing software
                that automates workflows, prioritizes issues intelligently, and
                gives your team the tools to deliver exceptional service.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row">
                <button
                  onClick={openConsultation}
                  className="rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 px-6 py-3 text-black shadow-lg transition-all duration-300 hover:scale-105 hover:from-amber-500 hover:to-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400"
                >
                  Schedule a  Consultation →
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
                  "Ticket Management",
                  "Workflow Automation",
                  "SLA Management",
                  "Omnichannel Helpdesk",
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
                    <Ticket className="h-5 w-5 text-amber-400" />
                    <p className="text-sm font-normal text-white md:text-base">
                      Complete Support Suite
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
                        <Ticket className="h-5 w-5 text-amber-400" />
                      </div>
                      <div>
                        <p className="mb-1.5 text-sm font-normal text-white">
                          Ticket Management
                        </p>
                        <p className="text-sm font-light leading-relaxed text-gray-300">
                          Auto-manage tickets and eliminate manual work.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-5 transition-colors duration-300 hover:bg-white/[0.04]">
                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-blue-400/25 bg-blue-400/15">
                        <Workflow className="h-5 w-5 text-blue-400" />
                      </div>
                      <div>
                        <p className="mb-1.5 text-sm font-normal text-white">
                          Workflow Automation
                        </p>
                        <p className="text-sm font-light leading-relaxed text-gray-300">
                          Auto-route tickets, eliminate missed SLAs.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="border-white/10 p-5 transition-colors duration-300 hover:bg-white/[0.04] sm:border-t">
                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-emerald-400/25 bg-emerald-400/15">
                        <LifeBuoy className="h-5 w-5 text-green-400" />
                      </div>
                      <div>
                        <p className="mb-1.5 text-sm font-normal text-white">
                          SLA Management
                        </p>
                        <p className="text-sm font-light leading-relaxed text-gray-300">
                          Auto-track SLAs, fast escalation response.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="border-white/10 p-5 transition-colors duration-300 hover:bg-white/[0.04] sm:border-t">
                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-violet-400/25 bg-violet-400/15">
                        <Headphones className="h-5 w-5 text-purple-400" />
                      </div>
                      <div>
                        <p className="mb-1.5 text-sm font-normal text-white">
                          Omnichannel Helpdesk
                        </p>
                        <p className="text-sm font-light leading-relaxed text-gray-300">
                          Track email, chat, and calls live.
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
        title="Business Challenges We Solve"
        subtitle="Support operations face fragmented tickets, SLAs, and channels. Here's how we address each challenge."
      />

      {/* ================= BUSINESS OUTCOMES ================= */}
      <SectionShell gradient labelledBy="outcomes-heading">
        <SectionIntro
          id="outcomes-heading"
          title="Business Outcomes with Ticketing Software"
          subtitle="Tangible, transformative results across every part of your support operation."
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
          title="Explore Top Features of Our Ticketing Software Solutions"
          subtitle="Comprehensive capabilities designed to optimize your support operations."
        />

        <div className="overflow-hidden rounded-2xl border border-white/10 bg-gray-950/80 shadow-xl">
          <div className="grid min-h-0 grid-cols-1 lg:min-h-[420px] lg:grid-cols-5">
            <nav
              className="min-w-0 border-b border-white/10 bg-black/40 p-3 md:p-4 lg:col-span-2 lg:border-b-0 lg:border-r"
              aria-label="Ticketing software feature categories"
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
                    {/* Mobile: stacked sections */}
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

                    {/* Desktop / tablet: table (single or multi column) */}
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
          title="Ticketing Software Use Cases — Real Support Scenarios"
          subtitle="Not feature lists — real scenarios that solve your specific support and helpdesk challenges."
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
          title="Our Ticketing Software Implementation Process"
          subtitle="From discovery to support — delivered in clear phases around your support workflow"
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
          subtitle="Explore custom software development across manufacturing, logistics, CRM, healthcare, and more."
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
                  Ready to Build Enterprise Ticketing Software?
                </h2>
                <p className="text-xl text-gray-100">
                  Why Ascentia Labs for Ticketing Solutions
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
                  <svg
                    className="h-10 w-10 text-black"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="mb-4 text-2xl leading-snug">
                  Talk to a Ticketing Software Expert
                </h3>
                <p className="mb-7 leading-relaxed text-blue-100">
                  Unify tickets, SLAs, and channels in one intelligent helpdesk
                  platform built around your support process.
                </p>
                <button
                  type="button"
                  onClick={openConsultation}
                  className="rounded-xl border-2 border-black/20 bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 px-8 py-3 text-black shadow-lg transition-all duration-300 hover:scale-105 hover:border-black/40 hover:from-amber-500 hover:via-orange-500 hover:to-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400"
                >
                  Schedule a Free Consultation
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

export default TicketingSoftwarePage;
