/**
 * Global application routes / slugs.
 *
 * Single source of truth for every navigable path.
 * Import ROUTES wherever you need a Link, navigate(), or SEO canonical URL.
 *
 * Pattern:
 *   Industry  → /industry/{slug}
 *   Service   → /service/{slug}
 *   Blog post → /blog/{slug}
 *   Blog index → /blog
 */

export const SITE_URL = "https://ascentialabs.com";

/** Raw slug segments (no leading slash, no prefix). */
export const SLUGS = {
  industry: {
    fieldServiceCrm: "field-service-crm",
    businessCrm: "business-management-crm-solution",
    interiorArchitecture: "interior-design-app-development",
    logistics: "logistics-software-development",
    erp: "enterprise-resource-planning",
    healthcare: "healthcare-app-development",
    realEstate: "real-estate-app-development",
    uaeRealEstate: "uae-real-estate-software-development",
    usRealEstate: "us-real-estate-software-development",
    kindergarten: "kindergarten-school-management",
    education: "education-app-development",
    travelTourism: "travel-app-development",
    ticketing: "ticketing-solution",
    textiles: "textile-manufacturing-software",
    manufacturing: "manufacturing-management-software",
  },
  service: {
    customCrm: "custom-crm-development",
    technologyConsultation: "technology-consultation-mis",
    softwareEngineering: "software-engineering",
    aiMl: "ai-ml-services",
    applicationModernisation: "application-modernisation",
    digitalTransformation: "digital-transformation",
    ideationDesign: "ideation-design",
    mobileApplication: "mobile-application",
    goToMarket: "go-to-market",
    startup: "startup-technology-partnership",
    shopify: "shopify-development-solution",
  },
  blog: {
    travelAppDevelopment: "travel-app-development-in-tourism",
    travelAndAi2026: "travel-and-ai-2026",
    travelMargin2026: "travel-margin-2026",
    tourismInsights2025: "latest-tourism-insights2025",
    aiBenefitsTravel: "benefits-ai-travel-tourism",
    customSoftwareBusiness: "custom-software-development-business",
    mobileAppTrends2025: "mobile-app-development-trends-2025",
    fabricShrinkage: "fabric-shrinkage-prediction-ai-guide",
    futureFabricShrinkage: "future-of-fabric-shrinkage-prediction",
    textileColorMatching: "ai-powered-color-matching-textile-manufacturing",
    healthcarePatientCare: "healthcare-app-development-patient-care",
  },
};

const industryPath = (slug) => `/industry/${slug}`;
const servicePath = (slug) => `/service/${slug}`;
const blogPath = (slug) => `/blog/${slug}`;

/** Canonical path helpers. */
export const paths = {
  industry: industryPath,
  service: servicePath,
  blog: blogPath,
};

/**
 * Full route map used across the app.
 * Prefer ROUTES.* in components instead of hardcoding strings.
 */
export const ROUTES = {
  home: "/",
  about: "/about-us",
  contact: "/contact-us",
  careers: "/careers",
  news: "/news",
  newsItbAsia2025: "/news/itb-asia-2025",
  newsRouteMaestro: "/news/routemaestro-platform",
  caseStudies: "/case-studies",
  caseStudyJustDoIt: "/case-study-justdoit",
  caseStudyRouteMaestro: "/case-study-routemaestro-ai-travel-platform",
  caseStudyAirnet: "/case-study-airnet-travels-routemaestro",
  caseStudyKinderConnect: "/case-study-kinderconnect-kindergarten-management",
  caseStudyInsuranceSafe: "/case-study-insurancesafe-digital-platform",
  caseStudyNdmc: "/case-study-ndmc-mcl-ticketing-platform",
  caseStudyInsuranceExperts: "/case-study-insurance-experts-management",
  caseStudySSood: "/case-study-s-sood-co-task-management",
  caseStudyPumpkins: "/case-study-pumpkins-kindergarten-management",
  caseStudySunview: "/case-study-sunview-enclave-real-estate",

  blog: {
    index: "/blog",
    travelAppDevelopment: blogPath(SLUGS.blog.travelAppDevelopment),
    travelAndAi2026: blogPath(SLUGS.blog.travelAndAi2026),
    travelMargin2026: blogPath(SLUGS.blog.travelMargin2026),
    tourismInsights2025: blogPath(SLUGS.blog.tourismInsights2025),
    aiBenefitsTravel: blogPath(SLUGS.blog.aiBenefitsTravel),
    customSoftwareBusiness: blogPath(SLUGS.blog.customSoftwareBusiness),
    mobileAppTrends2025: blogPath(SLUGS.blog.mobileAppTrends2025),
    fabricShrinkage: blogPath(SLUGS.blog.fabricShrinkage),
    futureFabricShrinkage: blogPath(SLUGS.blog.futureFabricShrinkage),
    textileColorMatching: blogPath(SLUGS.blog.textileColorMatching),
    healthcarePatientCare: blogPath(SLUGS.blog.healthcarePatientCare),
  },

  industry: {
    fieldServiceCrm: industryPath(SLUGS.industry.fieldServiceCrm),
    businessCrm: industryPath(SLUGS.industry.businessCrm),
    interiorArchitecture: industryPath(SLUGS.industry.interiorArchitecture),
    logistics: industryPath(SLUGS.industry.logistics),
    erp: industryPath(SLUGS.industry.erp),
    healthcare: industryPath(SLUGS.industry.healthcare),
    realEstate: industryPath(SLUGS.industry.realEstate),
    uaeRealEstate: industryPath(SLUGS.industry.uaeRealEstate),
    usRealEstate: industryPath(SLUGS.industry.usRealEstate),
    kindergarten: industryPath(SLUGS.industry.kindergarten),
    education: industryPath(SLUGS.industry.education),
    travelTourism: industryPath(SLUGS.industry.travelTourism),
    ticketing: industryPath(SLUGS.industry.ticketing),
    textiles: industryPath(SLUGS.industry.textiles),
    manufacturing: industryPath(SLUGS.industry.manufacturing),
  },

  service: {
    customCrm: servicePath(SLUGS.service.customCrm),
    technologyConsultation: servicePath(SLUGS.service.technologyConsultation),
    softwareEngineering: servicePath(SLUGS.service.softwareEngineering),
    aiMl: servicePath(SLUGS.service.aiMl),
    applicationModernisation: servicePath(SLUGS.service.applicationModernisation),
    digitalTransformation: servicePath(SLUGS.service.digitalTransformation),
    ideationDesign: servicePath(SLUGS.service.ideationDesign),
    mobileApplication: servicePath(SLUGS.service.mobileApplication),
    goToMarket: servicePath(SLUGS.service.goToMarket),
    startup: servicePath(SLUGS.service.startup),
    shopify: servicePath(SLUGS.service.shopify),
  },
};

/** Absolute URL for SEO / Open Graph. */
export const absoluteUrl = (path = "/") =>
  `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;

/**
 * Legacy → new path redirects (bookmarks & indexed URLs).
 * Used in App.jsx only.
 */
export const LEGACY_REDIRECTS = [
  // Industries
  ["/field-service-crm", ROUTES.industry.fieldServiceCrm],
  ["/business-management-crm-solution", ROUTES.industry.businessCrm],
  ["/interior-design-app-development", ROUTES.industry.interiorArchitecture],
  ["/logistics-software-development", ROUTES.industry.logistics],
  ["/enterprise-resource-planning", ROUTES.industry.erp],
  ["/healthcare-app-development", ROUTES.industry.healthcare],
  ["/real-estate-app-development", ROUTES.industry.realEstate],
  ["/uae-real-estate-software-development", ROUTES.industry.uaeRealEstate],
  ["/us-real-estate-software-development", ROUTES.industry.usRealEstate],
  ["/kindergarten-school-management", ROUTES.industry.kindergarten],
  ["/education-app-development", ROUTES.industry.education],
  ["/travel-app-development", ROUTES.industry.travelTourism],
  ["/ticketing-solution", ROUTES.industry.ticketing],
  ["/textile-manufacturing-software", ROUTES.industry.textiles],
  ["/textiles", ROUTES.industry.textiles],
  ["/manufacturing-management-software", ROUTES.industry.manufacturing],
  ["/manufacturing", ROUTES.industry.manufacturing],

  // Services
  ["/custom-crm-development", ROUTES.service.customCrm],
  ["/technology-consultation-mis", ROUTES.service.technologyConsultation],
  ["/software-engineering", ROUTES.service.softwareEngineering],
  ["/ai-ml-services", ROUTES.service.aiMl],
  ["/application-modernisation", ROUTES.service.applicationModernisation],
  ["/digital-transformation", ROUTES.service.digitalTransformation],
  ["/ideation-design", ROUTES.service.ideationDesign],
  ["/mobile-application", ROUTES.service.mobileApplication],
  ["/go-to-market", ROUTES.service.goToMarket],
  ["/startup-technology-partnership", ROUTES.service.startup],
  ["/shopify-development-solution", ROUTES.service.shopify],

  // Blog posts (old root-level / missing-slash variants)
  ["/travel-app-development-in-tourism", ROUTES.blog.travelAppDevelopment],
  ["/travel-and-ai-2026", ROUTES.blog.travelAndAi2026],
  ["travel-and-ai-2026", ROUTES.blog.travelAndAi2026],
  ["/travel-margin-2026", ROUTES.blog.travelMargin2026],
  ["travel-margin-2026", ROUTES.blog.travelMargin2026],
  ["/latest-tourism-insights2025", ROUTES.blog.tourismInsights2025],
  ["/benefits-ai-travel-tourism", ROUTES.blog.aiBenefitsTravel],
  ["/custom-software-development-business", ROUTES.blog.customSoftwareBusiness],
  ["/mobile-app-development-trends-2025", ROUTES.blog.mobileAppTrends2025],
  ["/fabric-shrinkage-prediction-ai-guide", ROUTES.blog.fabricShrinkage],
  ["fabric-shrinkage-prediction-ai-guide", ROUTES.blog.fabricShrinkage],
  ["/future-of-fabric-shrinkage-prediction", ROUTES.blog.futureFabricShrinkage],
  ["future-of-fabric-shrinkage-prediction", ROUTES.blog.futureFabricShrinkage],
  [
    "/ai-powered-color-matching-textile-manufacturing",
    ROUTES.blog.textileColorMatching,
  ],
  [
    "ai-powered-color-matching-textile-manufacturing",
    ROUTES.blog.textileColorMatching,
  ],
  [
    "/healthcare-app-development-patient-care",
    ROUTES.blog.healthcarePatientCare,
  ],
];

export default ROUTES;
