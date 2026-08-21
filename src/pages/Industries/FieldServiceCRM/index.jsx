import { useState, useEffect, useMemo, useRef, useCallback } from "react";
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
  MapPinned,
  ClipboardList,
  Users,
  Package,
  Calendar,
  Home,
} from "lucide-react";
import { useConsultation } from "../../../contexts/ConsultationContext";
import SEO from "../../../components/SEO";
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

/**
 * Desktop pin-scroll: page scroll drives the right column while the left
 * heading stays fixed. When right content finishes, the section unpins and
 * normal page scroll continues. Mobile: stacked static layout.
 */
const ChallengesPinnedSection = ({ items }) => {
  const sectionRef = useRef(null);
  const stickyRef = useRef(null);
  const trackRef = useRef(null);
  const rafRef = useRef(0);
  const [scrollSpan, setScrollSpan] = useState(0);
  const [isDesktop, setIsDesktop] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(min-width: 1024px)").matches,
  );

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const onChange = () => setIsDesktop(mq.matches);
    onChange();
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const measure = useCallback(() => {
    if (!isDesktop) {
      setScrollSpan(0);
      return;
    }
    const sticky = stickyRef.current;
    const track = trackRef.current;
    if (!sticky || !track) return;
    const next = Math.max(0, track.scrollHeight - sticky.clientHeight);
    setScrollSpan((prev) => (Math.abs(prev - next) > 1 ? next : prev));
  }, [isDesktop]);

  useEffect(() => {
    measure();
    const track = trackRef.current;
    const sticky = stickyRef.current;
    if (!track || !sticky) return undefined;

    const ro = new ResizeObserver(measure);
    ro.observe(track);
    ro.observe(sticky);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [measure, items]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return undefined;

    if (!isDesktop || scrollSpan <= 0) {
      track.style.transform = "";
      return undefined;
    }

    const STICKY_TOP = 112; // matches lg:top-28 (7rem)

    const update = () => {
      const section = sectionRef.current;
      const trackEl = trackRef.current;
      if (!section || !trackEl) return;

      const scrolled = STICKY_TOP - section.getBoundingClientRect().top;
      const progress = Math.min(1, Math.max(0, scrolled / scrollSpan));
      trackEl.style.transform = `translate3d(0, ${-progress * scrollSpan}px, 0)`;
    };

    const onScroll = () => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(update);
    };

    update();

    let detach = () => {};
    const lenis = typeof window !== "undefined" ? window.lenis : null;

    if (lenis?.on) {
      lenis.on("scroll", onScroll);
      detach = () => lenis.off("scroll", onScroll);
    } else {
      window.addEventListener("scroll", onScroll, { passive: true });
      detach = () => window.removeEventListener("scroll", onScroll);
    }

    const retry = window.setTimeout(() => {
      if (window.lenis?.on && !lenis) {
        detach();
        window.lenis.on("scroll", onScroll);
        detach = () => window.lenis?.off("scroll", onScroll);
      }
    }, 150);

    return () => {
      window.clearTimeout(retry);
      cancelAnimationFrame(rafRef.current);
      detach();
    };
  }, [isDesktop, scrollSpan]);

  const sectionStyle =
    isDesktop && scrollSpan > 0
      ? { height: `calc(100vh - 7rem + ${scrollSpan}px)` }
      : undefined;

  const list = (
    <ol
      ref={trackRef}
      className={
        isDesktop
          ? "list-none space-y-0 will-change-transform"
          : "ml-3 list-none space-y-0 border-l border-white/10 md:ml-4"
      }
    >
      {items.map((c, i) => {
        const Icon = c.icon;
        return (
          <li key={i} className="relative pb-8 pl-8 last:pb-0 md:pl-10">
            <span className="absolute -left-[9px] top-1 flex h-[18px] w-[18px] items-center justify-center rounded-full bg-gradient-to-r from-amber-400 to-orange-500 text-[10px] font-bold text-black ring-4 ring-black">
              {i + 1}
            </span>
            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5 transition-colors duration-300 hover:border-amber-400/35 md:p-6">
              <div className="mb-3 flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-r from-amber-400 to-orange-500 text-black">
                  <Icon size={18} />
                </div>
                <h3 className="pt-1 text-lg font-medium text-white">
                  {c.title}
                </h3>
              </div>
             
              <p className="text-sm leading-relaxed text-amber-400 md:text-[15px]">
                <span className="font-medium text-amber-300">Solution: </span>
                {c.solution}
              </p>
            </div>
          </li>
        );
      })}
    </ol>
  );

  const heading = (
    <>
      <h2
        id="challenges-heading"
        className="mb-4 bg-gradient-to-r from-blue-400 to-white bg-clip-text text-3xl leading-tight text-transparent md:text-4xl font-medium "
      >
        Business Challenges We Solve
      </h2>
      <p className="text-base leading-relaxed text-white/95">
        Field CRM operations face fragmented scheduling, dispatch, and job
        visibility. Here's how we address each challenge.
      </p>
    </>
  );

  if (!isDesktop) {
    return (
      <section
        className="relative bg-black py-16 md:py-20"
        aria-labelledby="challenges-heading"
      >
        <div className="container relative z-10 mx-auto max-w-6xl px-4">
          <div className="grid items-start gap-10">
            <div>{heading}</div>
            {list}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      ref={sectionRef}
      style={sectionStyle}
      className="relative bg-black"
      aria-labelledby="challenges-heading"
    >
      <div
        ref={stickyRef}
        className="sticky top-28 flex h-[calc(100vh-7rem)] items-stretch overflow-hidden"
      >
        <div className="container mx-auto grid h-full max-w-6xl grid-cols-12 gap-14 px-4 py-6">
          <aside className="col-span-4 flex flex-col justify-center self-stretch">
            {heading}
          </aside>
          <div className="col-span-8 h-full overflow-hidden border-l border-white/10 pl-4 md:pl-6">
            {list}
          </div>
        </div>
      </div>
    </section>
  );
};

/** FAQ source for UI + FAQPage JSON-LD (AEO lead sentences). */
const FIELD_CRM_FAQ_ITEMS = [
  {
    question: "What is a Field CRM?",
    answer:
      "A Field Service CRM is software that helps manage customer relationships and service operations for trade and field service businesses. Unlike standard CRMs focused primarily on sales, a Field CRM can combine scheduling, dispatch, job history, photos, documents, invoicing, and follow-ups in one system.",
  },
  {
    question: "How is Field CRM different from regular CRM?",
    answer:
      "A standard CRM manages sales and marketing. A Field CRM combines customer management with operational tools such as scheduling, route optimization, technician dispatch, job tracking, and field-service workflows.",
  },
  {
    question: "Does the mobile app work offline?",
    answer:
      "Yes. Field CRM solutions can support offline capabilities for technicians working in areas with poor connectivity. They can access relevant customer and job information, add notes, and synchronize updates once connectivity is restored.",
  },
  {
    question: "Can this integrate with my current accounting software?",
    answer:
      "Yes. Field CRM solutions can integrate with accounting and ERP platforms such as Odoo, NetSuite, SAP, QuickBooks, and Dynamics 365 to create a more connected business system.",
  },
  {
    question: "How does AI improve Field CRM?",
    answer:
      "AI can automate voice-to-CRM note capture, prioritize high-value accounts, optimize routes using operational data, and execute workflows through natural-language commands. These capabilities can reduce administrative work and help field teams focus on customer service and revenue-generating activities.",
  },
  {
    question: "How long does custom Field CRM development take?",
    answer:
      "Timelines vary based on complexity, but a typical custom Field CRM implementation takes 3-6 months from discovery to deployment. We follow a phased approach to deliver value incrementally.",
  },
  {
    question: "How much does custom Field CRM development cost?",
    answer:
      "Cost depends on scope, features, complexity, and deployment requirements. We provide detailed estimates after understanding your specific needs during the discovery phase.",
  },
  {
    question: "Can you migrate data from our existing CRM?",
    answer:
      "Yes. We have experience migrating data from legacy systems, spreadsheets, and other CRM platforms. Our migration process ensures data integrity with minimal disruption.",
  },
  {
    question: "Can Field CRM support multiple locations and technicians?",
    answer:
      "Absolutely. Our Field CRM solutions are designed to scale across multiple locations, teams, and technician fleets. You can manage operations across regions from a single dashboard.",
  },
  {
    question:
      "What's the difference between custom development and customizing an existing CRM?",
    answer:
      "Custom development builds a solution from the ground up, giving you complete control over features, workflows, and user experience. Customizing an existing CRM (like Odoo, Dynamics, or Zoho) extends the platform's capabilities but operates within its architectural constraints. We offer both approaches and can recommend the best fit for your business.",
  },
];

const FieldServiceCRM = () => {
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
   * DATA — Field Service CRM content mapped to RE section structure
   * =========================================================== */

  const challenges = [
    {
      problem: "Leads get lost because calls aren't logged properly.",
      impact: "Missed revenue and weak follow-up discipline.",
      solution: "Automatic capture of customer interactions in one Field CRM.",
    },
    {
      problem: "Double bookings and missed appointments become routine.",
      impact: "Wasted technician time and frustrated customers.",
      solution: "Clear assignment visibility with real-time dispatch adjustments.",
    },
    {
      problem: "Technicians arrive without job history or clear instructions.",
      impact: "Longer jobs, lower first-time fix rates, weak customer trust.",
      solution: "Mobile access to customer history, tickets, and previous notes.",
    },
    {
      problem:
        "Field service scheduling and technician dispatch still run on spreadsheets and phone calls.",
      impact:
        "Slow response times, higher fuel costs, and poor route optimization across field teams.",
      solution:
        "Custom Field Service CRM with AI-assisted scheduling, dispatch, and smart route planning.",
    },
    {
      problem:
        "Invoices lag because proof of work, photos, and job completion never reach billing on time.",
      impact: "Delayed quote-to-invoice cycles and weaker cash flow for service businesses.",
      solution:
        "Connected Field CRM job management that links photos, notes, and billing in one workflow.",
    },
  ];

  const businessChallenges = challenges.map((c, i) => ({
    icon: challengeIcons[i % challengeIcons.length],
    title: c.problem,
    pain: c.impact,
    solution: c.solution,
  }));

  const outcomes = [
    { value: "Tracked", label: "Customer Interactions" },
    { value: "Clear", label: "Assignment Visibility" },
    { value: "Mobile", label: "Job History Access" },
    { value: "Auto", label: "Status Notifications" },
    { value: "Proof", label: "Photos on Every Job" },
    { value: "Faster", label: "Quote-to-Invoice Flow" },
  ];

  const features = [
    {
      id: "custom-field-crm",
      title: "Custom Field CRM Development",
      sections: [
        {
          heading: "Built Around Your Workflows",
          details: [
            "Tailored to your service workflows and technician requirements",
            "Customer engagement models designed for your business",
            "End-to-end development from discovery to deployment",
            "Full ownership and control of code and data",
          ],
        },
      ],
    },
    {
      id: "field-app",
      title: "Field Service CRM App Development",
      sections: [
        {
          heading: "Native Mobile for Technicians",
          details: [
            "Native iOS and Android applications",
            "Offline-first architecture for low-connectivity sites",
            "Job updates, photos, and signatures in the field",
            "Automatic sync when connectivity returns",
          ],
        },
      ],
    },
    {
      id: "crm-mobile",
      title: "CRM Mobile App Development",
      sections: [
        {
          heading: "Responsive Across Devices",
          details: [
            "Feature-rich mobile CRM that works across devices",
            "Reliable performance under changing connectivity",
            "HQ collaboration from the app",
            "Customer history and open tickets on demand",
          ],
        },
      ],
    },
    {
      id: "ai-field-crm",
      title: "AI-Powered Field CRM Development",
      sections: [
        {
          heading: "Intelligence for Field Operations",
          details: [
            "Machine learning and predictive analytics",
            "Natural language processing for voice notes",
            "Smart routing and account prioritization",
            "Automation that complements technician expertise",
          ],
        },
      ],
    },
    {
      id: "integrations-svc",
      title: "Field Service CRM Integration",
      sections: [
        {
          heading: "Connected Business Systems",
          details: [
            "ERP, accounting, inventory, and communication platforms",
            "Reduced double entry across systems",
            "Single source of truth for field and office teams",
          ],
        },
      ],
    },
    {
      id: "migration",
      title: "CRM Migration & Modernization",
      sections: [
        {
          heading: "From Legacy to Field-Ready",
          details: [
            "Migrate from spreadsheets or generic CRMs",
            "Preserve data integrity with minimal disruption",
            "Modern field-service-specific platform",
          ],
        },
      ],
    },
    {
      id: "customization",
      title: "CRM Customization",
      sections: [
        {
          heading: "Extend Existing Platforms",
          details: [
            "Odoo, Dynamics 365, Zoho, Salesforce",
            "Field-service workflow extensions",
            "Best-fit recommendation between custom build and customization",
          ],
        },
      ],
    },
    {
      id: "support",
      title: "Field CRM Support & Maintenance",
      sections: [
        {
          heading: "Keep the System Current",
          details: [
            "Ongoing support and updates",
            "Security patches and reliability improvements",
            "Feature enhancements as your operations evolve",
          ],
        },
      ],
    },
  ];

  const useCases = [
    {
      title: "Unified Field CRM",
      problem: "Generic CRM plus spreadsheets and sticky notes.",
      solution: "Unified Field CRM for scheduling, jobs, photos, and billing.",
      outcome: "Connected workflow that supports revenue and retention.",
    },
    {
      title: "Offline Mobile CRM",
      problem: "Technicians work offline on remote or basement sites.",
      solution: "Offline-first mobile CRM with automatic sync.",
      outcome: "Field teams keep working without waiting for signal.",
    },
    {
      title: "Office-Field Sync",
      problem: "Office and field teams operate in separate tools.",
      solution: "Dispatch, notes, approvals, and HQ collaboration in one app.",
      outcome: "Faster decisions and fewer back-and-forth calls.",
    },
    {
      title: "Quote-to-Cash",
      problem: "Billing lags behind completed work.",
      solution: "Quote-to-cash connected to job completion.",
      outcome: "Invoices move faster with clearer cash flow.",
    },
  ];

  const processSteps = [
    {
      number: "1",
      title: "Discovery",
      description:
        "Stakeholder interviews, process mapping, pain points, and requirements specification.",
    },
    {
      number: "2",
      title: "Architecture & UX",
      description:
        "Architecture blueprint, interactive prototypes, and design system.",
    },
    {
      number: "3",
      title: "Build",
      description:
        "CRM core, scheduling engine, native apps, and offline sync.",
    },
    {
      number: "4",
      title: "Deploy + Support",
      description:
        "Security testing, cloud or on-premise launch, training, and ongoing support.",
    },
  ];

  const advantages = [
    {
      id: 1,
      title: "Field-Service Expertise",
      description:
        "We understand real-world service operations—from HVAC and plumbing to IT field service.",
    },
    {
      id: 2,
      title: "Custom + Platform Options",
      description:
        "We build from the ground up or extend Odoo, Dynamics, Zoho, and Salesforce when that fits better.",
    },
    {
      id: 3,
      title: "AI Where It Creates Value",
      description:
        "Voice notes, prioritization, routing, and natural-language execution—without replacing your team.",
    },
    {
      id: 4,
      title: "Offline-First Mobile",
      description:
        "Technicians keep working on remote sites, basements, and rural locations.",
    },
    {
      id: 5,
      title: "Integration Expertise",
      description:
        "Connect ERP, accounting, inventory, calendars, and communication tools into one system.",
    },
    {
      id: 6,
      title: "Proof Over Promises",
      description:
        "We focus on measurable operational improvements across scheduling, service quality, and cash flow.",
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
      description: "Voice notes, prioritization, routing, and NLP for Field CRM.",
      href: ROUTES.service.aiMl,
    },
    {
      title: "Mobile App Development",
      description: "Offline-first iOS and Android apps for technicians.",
      href: ROUTES.service.mobileApplication,
    },
    {
      title: "Digital Transformation",
      description: "Move from spreadsheets to connected field operations.",
      href: ROUTES.service.digitalTransformation,
    },
    {
      title: "Custom Software Development",
      description: "Purpose-built Field CRM platforms for your workflows.",
      href: ROUTES.service.customCrm,
    },
    {
      title: "Application Modernization",
      description: "Upgrade legacy CRM and field tools without disruption.",
      href: ROUTES.service.applicationModernisation,
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
      icon: Building2,
      title: "Business CRM",
      line: "Streamline sales, customer relationships & business workflows.",
      link: ROUTES.industry.businessCrm,
    },
    {
      icon: GraduationCap,
      title: "Education",
      line: "Smart solutions for schools, colleges & e-learning platforms.",
      link: ROUTES.industry.education,
    },
    {
      icon: BarChart3,
      title: "Enterprise ERP",
      line: "Integrate finance, operations, HR & business processes.",
      link: ROUTES.industry.erp,
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
      icon: Wrench,
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
  ];

  const relatedResources = [
    {
      topic: "Blogs",
      title: "The Ultimate Guide to Field CRM",
      href: "#",
    },
    {
      topic: "Whitepapers",
      title: "The ROI of AI in Field Service",
      href: "#",
    },
    {
      topic: "Guides",
      title: "Field CRM Implementation for HVAC Leader",
      href: "#",
    },
  ];

  const faqs = FIELD_CRM_FAQ_ITEMS.map((f, i) => ({
    id: i,
    title: f.question,
    content: f.answer,
  }));

  const pageUrl = absoluteUrl(ROUTES.industry.fieldServiceCrm);
  const orgLogo = `${SITE_URL}/ascentialabslogopng.png`;

  const jsonLdGraph = useMemo(() => {
    const faqSchema = {
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: FIELD_CRM_FAQ_ITEMS.map((f) => ({
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
        "Ascentia Labs builds custom software, AI/ML solutions, and digital platforms for industry-specific operations including field service CRM.",
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        url: absoluteUrl(ROUTES.contact),
      },
    };

    const serviceSchema = {
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name: "Custom Field Service CRM Solutions",
      serviceType: "Field Service CRM Development",
      description: seoData.fieldServiceCRM.description,
      provider: { "@id": `${SITE_URL}/#organization` },
      url: pageUrl,
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Field Service CRM Features",
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
          name: "Field Service CRM",
          item: pageUrl,
        },
      ],
    };

    const webPageSchema = {
      "@type": "WebPage",
      "@id": pageUrl,
      url: pageUrl,
      name: seoData.fieldServiceCRM.title,
      description: seoData.fieldServiceCRM.description,
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
    const scriptId = "field-service-crm-jsonld";
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
      <SEO {...seoData.fieldServiceCRM} />
      <style dangerouslySetInnerHTML={{ __html: scrollbarStyles }} />

      <nav aria-label="Breadcrumb" className="sr-only">
        <ol>
          <li>
            <Link to={ROUTES.home}>Home</Link>
          </li>
          <li>Industries</li>
          <li>
            <Link to={ROUTES.industry.fieldServiceCrm}>Field Service CRM</Link>
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
                 Field Service CRM Solutions
              </h1>

              <p className="text-lg leading-relaxed text-gray-300">
                Move beyond customer records. Build a custom Field CRM that
                connects customers, technicians, scheduling, dispatch, job
                management, and billing in one intelligent system.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row">
                <button
                  onClick={openConsultation}
                  className="rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 px-6 py-3 text-black shadow-lg transition-all duration-300 hover:scale-105 hover:from-amber-500 hover:to-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400"
                >
                  Get a Free Consultation →
                </button>
                <a
                  href="#ai-solutions-heading"
                  className="rounded-xl border border-white/30 px-6 py-3 text-center text-white transition-all duration-300 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Explore Solutions
                </a>
              </div>

              <ul className="flex list-none flex-wrap gap-x-6 gap-y-3 pt-2">
                {[
                  "Lead-to-Job Pipeline",
                  "Scheduling & Dispatch",
                  "Technician Visibility",
                  "Route Planning",
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
                    <ClipboardList className="h-5 w-5 text-amber-400" />
                    <p className="text-sm font-normal text-white md:text-base">
                      Complete Field CRM Suite
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
                        <ClipboardList className="h-5 w-5 text-amber-400" />
                      </div>
                      <div>
                        <p className="mb-1.5 text-sm font-normal text-white">
                          Lead-to-Job Pipeline
                        </p>
                        <p className="text-sm font-light leading-relaxed text-gray-300">
                          Track jobs from lead to invoice in one flow.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-5 transition-colors duration-300 hover:bg-white/[0.04]">
                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-blue-400/25 bg-blue-400/15">
                        <Calendar className="h-5 w-5 text-blue-400" />
                      </div>
                      <div>
                        <p className="mb-1.5 text-sm font-normal text-white">
                          Scheduling & Dispatch
                        </p>
                        <p className="text-sm font-light leading-relaxed text-gray-300">
                          Real-time assignment visibility and adjustments.
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
                          Technician Visibility
                        </p>
                        <p className="text-sm font-light leading-relaxed text-gray-300">
                          Keep office and field teams synchronized.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="border-white/10 p-5 transition-colors duration-300 hover:bg-white/[0.04] sm:border-t">
                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-violet-400/25 bg-violet-400/15">
                        <MapPinned className="h-5 w-5 text-purple-400" />
                      </div>
                      <div>
                        <p className="mb-1.5 text-sm font-normal text-white">
                          Route Planning
                        </p>
                        <p className="text-sm font-light leading-relaxed text-gray-300">
                          Cut drive time, fuel costs, and wasted hours.
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
      <ChallengesPinnedSection items={businessChallenges} />

      {/* ================= BUSINESS OUTCOMES ================= */}
      <SectionShell gradient labelledBy="outcomes-heading">
        <SectionIntro
          id="outcomes-heading"
          title="Business Outcomes with Field CRM"
          subtitle="Measurable operational gains teams track after going live—visibility, speed, and cash flow."
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
          title="Explore Top Features of Our Field CRM Solutions"
          subtitle="End-to-end capabilities designed to optimize scheduling, dispatch, and field operations."
        />

        <div className="overflow-hidden rounded-2xl border border-white/10 bg-gray-950/80 shadow-xl">
          <div className="grid min-h-0 grid-cols-1 lg:min-h-[420px] lg:grid-cols-5">
            <nav
              className="min-w-0 border-b border-white/10 bg-black/40 p-3 md:p-4 lg:col-span-2 lg:border-b-0 lg:border-r"
              aria-label="Field CRM feature categories"
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
          title="Field CRM Use Cases — Real Business Scenarios"
          subtitle="Not feature lists — real scenarios that solve your specific field service challenges."
          light
        />

        <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/25">
          <ul className="m-0 list-none divide-y divide-white/10 p-0">
            {useCases.map((u, i) => (
              <li key={i} className="min-w-0">
                <article className="grid min-w-0 grid-cols-1 gap-5 px-4 py-7 sm:gap-6 sm:px-5 sm:py-8 md:px-6 md:py-9 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5 xl:grid-cols-12 xl:items-start xl:gap-x-8 xl:px-8 xl:py-10">
                  <div className="relative min-w-0 lg:col-span-2 xl:col-span-3">
                    <span
                      className="pointer-events-none absolute -left-0.5 -top-3 select-none text-5xl font-semibold leading-none text-white/[0.07] sm:-top-4 sm:text-6xl md:text-7xl xl:-top-5 xl:text-8xl"
                      aria-hidden="true"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="relative max-w-full break-words pt-8 mt-1 lg:mt-8  text-lg  font-medium leading-snug text-white sm:pt-6 sm:text-xl md:text-2xl xl:pt-8">
                      {u.title}
                    </h3>
                  </div>

                  <div className="min-w-0 lg:col-span-1 xl:col-span-4">
                    <p className="mb-2 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-orange-400 sm:mb-2.5 lg:text-[14px] 2xl:text-[18px] sm:tracking-[0.14em]">
                      <span
                        className="h-1.5 w-1.5 shrink-0 rounded-full bg-orange-400"
                        aria-hidden="true"
                      />
                      The Problem
                    </p>
                    <p className="break-words text-sm leading-relaxed text-gray-300 md:text-[15px] 2xl:text-[17px]">
                      {u.problem}
                    </p>
                  </div>

                  <div className="min-w-0 lg:col-span-1 xl:col-span-5">
                    <p className="mb-2 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-amber-400 sm:mb-2.5 lg:text-[14px]  2xl:text-[18px] sm:tracking-[0.14em]">
                      <span
                        className="h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400"
                        aria-hidden="true"
                      />
                      The Solution
                    </p>
                    <p className="break-words text-sm leading-relaxed text-gray-300 md:text-[15px] 2xl:text-[17px]">
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
          title="Our Field CRM Implementation Process"
          subtitle="From discovery to support — typically 3–6 months, delivered in phases"
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

      {/* ================= WHY ASCENTIA LABS ================= */}
    
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
                  Ready to Build a Custom Field CRM?
                </h2>
                <p className="text-xl text-gray-100">
                  Why Ascentia Labs for Field Service CRM
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
                  Talk to a Field CRM Expert
                </h3>
                <p className="mb-7 leading-relaxed text-blue-100">
                  Connect your customer management, field operations,
                  scheduling, dispatch, and billing in one intelligent platform.
                </p>
                <button
                  type="button"
                  onClick={openConsultation}
                  className="rounded-xl border-2 border-black/20 bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 px-8 py-3 text-black shadow-lg transition-all duration-300 hover:scale-105 hover:border-black/40 hover:from-amber-500 hover:via-orange-500 hover:to-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400"
                >
                  Get a Field CRM Consultation
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

export default FieldServiceCRM;
