import {
  Brain,
  Building2,
  CalendarCheck,
  Compass,
  LayoutDashboard,
  Lock,
  Map,
  Package,
  Plane,
  Route,
  Shield,
  Sparkles,
  Users,
  Workflow,
} from "lucide-react";
import { ROUTES } from "../utils/routes";

export const routeMaestroSeo = {
  title:
    "RouteMaestro — AI Travel Planning & Booking Platform | Ascentia Labs",
  description:
    "RouteMaestro is an AI travel planning and booking platform for multi-city itineraries, dynamic packaging, and ready-to-book travel packages.",
  keywords:
    "RouteMaestro, AI travel planning, multi-city itinerary, dynamic packaging, travel booking platform, travel agency software, Ascentia Labs",
};

export const overviewFacts = [
  { label: "Product Type", value: "AI Travel Platform" },
  { label: "Primary Users", value: "Agencies & Operators" },
  { label: "Core Capability", value: "Multi-City AI Planning" },
  { label: "Platform", value: "Web Application" },
];

export const problems = [
  {
    id: "01",
    title: "Manual Itineraries",
    description: "Building multi-city trips by hand slows consultants and limits scale.",
  },
  {
    id: "02",
    title: "Fragmented Booking",
    description: "Flights, hotels, and activities live across disconnected systems.",
  },
  {
    id: "03",
    title: "Weak Personalization",
    description: "Manual recommendations struggle to stay personalized at volume.",
  },
  {
    id: "04",
    title: "Slow Time-to-Book",
    description: "Trip requirements take too long to become ready-to-book packages.",
  },
];

export const solutionLayers = [
  {
    title: "AI Travel Intelligence",
    description: "Match traveler intent to flights, hotels, and experiences.",
  },
  {
    title: "Itinerary Engine",
    description: "Build structured multi-city itineraries with clear routing.",
  },
  {
    title: "Booking & Operations",
    description: "Turn itineraries into bookable packages in one workflow.",
  },
];

export const capabilities = [
  {
    id: "01",
    icon: Brain,
    title: "AI Travel Planning",
    description: "Create personalized multi-city travel plans from trip needs.",
  },
  {
    id: "02",
    icon: Map,
    title: "Smart Itineraries",
    description: "Convert requirements into clear, structured travel itineraries.",
  },
  {
    id: "03",
    icon: Sparkles,
    title: "Smart Recommendations",
    description: "Suggest options based on preferences, budget, and trip context.",
  },
  {
    id: "04",
    icon: CalendarCheck,
    title: "Booking Workflow",
    description: "Move from itinerary planning to bookable travel packages.",
  },
  {
    id: "05",
    icon: Workflow,
    title: "Travel Operations",
    description: "Centralize planning workflows for agencies and operators.",
  },
  {
    id: "06",
    icon: Users,
    title: "Better Experience",
    description: "Deliver faster, more personalized travel planning for clients.",
  },
];

export const features = [
  {
    id: "itinerary",
    eyebrow: "AI Planning",
    title: "AI Itineraries",
    description: "Build multi-city itineraries from trip needs in minutes.",
    bullets: [
      "Flights, hotels & activities in one plan",
      "Budget-aware options",
    ],
    visual: "itinerary",
  },
  {
    id: "multicity",
    eyebrow: "Routing",
    title: "Multi-City Planning",
    description: "Connect destinations with clear routes and stays.",
    bullets: [
      "See the full route at a glance",
      "Plan each city segment",
    ],
    visual: "multicity",
    reverse: true,
  },
  {
    id: "packages",
    eyebrow: "Packaging",
    title: "Dynamic Packages",
    description: "Turn travel services into ready-to-sell packages.",
    bullets: [
      "Bundle services instantly",
      "Control markup & pricing",
    ],
    visual: "packages",
  },
  {
    id: "booking",
    eyebrow: "Booking",
    title: "Booking Workflow",
    description: "Go from itinerary to booking in one flow.",
    bullets: [
      "Plan → select → book",
      "Book or cancel as one package",
    ],
    visual: "booking",
    reverse: true,
  },
  {
    id: "recommendations",
    eyebrow: "Personalization",
    title: "Smart Recommendations",
    description: "Get options matched to preference and budget.",
    bullets: [
      "Preference-based matching",
      "Budget-fit suggestions",
    ],
    visual: "recommendations",
  },
  {
    id: "dashboard",
    eyebrow: "Operations",
    title: "Ops Dashboard",
    description: "One place to track trips, packages, and bookings.",
    bullets: [
      "Trip & package overview",
      "Live booking status",
    ],
    visual: "dashboard",
    reverse: true,
  },
];

export const howItWorks = [
  {
    id: "01",
    title: "Capture Requirements",
    description: "Add destinations, dates, preferences, and trip goals.",
  },
  {
    id: "02",
    title: "AI Travel Planning",
    description: "Generate a personalized multi-city itinerary with AI.",
  },
  {
    id: "03",
    title: "Package & Book",
    description: "Organize services into a ready-to-book travel package.",
  },
  {
    id: "04",
    title: "Deliver Experience",
    description: "Present a clear, personalized journey to the traveler.",
  },
];

export const screenTabs = [
  { id: "planner", label: "Planner" },
  { id: "itinerary", label: "Itinerary" },
  { id: "packages", label: "Packages" },
  { id: "booking", label: "Booking" },
];

export const architectureLayers = [
  {
    title: "Frontend",
    items: ["React", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Application Layer",
    items: ["Node.js", "Express"],
  },
  {
    title: "AI / Planning Engine",
    items: ["Python", "Recommendation Engine", "TensorFlow"],
  },
  {
    title: "Booking & Integration",
    items: ["Travel APIs", "Package Orchestration"],
  },
  {
    title: "Data / Infrastructure",
    items: ["MongoDB", "Redis", "AWS", "Docker"],
  },
];

export const integrations = [
  { icon: Plane, title: "Flights", description: "Flight inventory & routing" },
  { icon: Building2, title: "Hotels", description: "Stays for packages" },
  { icon: Compass, title: "Activities", description: "Tours & experiences" },
  { icon: Route, title: "Transfers", description: "Ground transfers" },
  { icon: Package, title: "Travel APIs", description: "Service connectivity" },
  { icon: LayoutDashboard, title: "Booking Systems", description: "Booking workflows" },
];

export const securityItems = [
  {
    icon: Shield,
    title: "Secure Data Handling",
    description: "Protect travel and customer data with controlled access.",
  },
  {
    icon: Lock,
    title: "Role-Based Access",
    description: "Limit planning and booking actions by team role.",
  },
  {
    icon: Workflow,
    title: "Protected APIs",
    description: "Keep service and travel API communication controlled.",
  },
  {
    icon: LayoutDashboard,
    title: "Cloud Infrastructure",
    description: "Run on modern cloud patterns for travel operations.",
  },
];

export const impactMetrics = [
  { value: "2 Mins", label: "Booking Time" },
  { value: "300%", label: "Efficiency Boost" },
  { value: "95%", label: "User Satisfaction" },
];

export const useCases = [
  {
    title: "Travel Agencies",
    problem: "Manual research slows itinerary creation.",
    capability: "AI planning and personalized itineraries.",
    outcome: "Faster ready-to-book travel packages.",
  },
  {
    title: "Tour Operators",
    problem: "Multi-city packages need many steps.",
    capability: "Unified itinerary and booking workflow.",
    outcome: "Streamlined package creation and booking.",
  },
  {
    title: "Corporate Travel",
    problem: "Trips span destinations and preferences.",
    capability: "AI-assisted multi-city planning.",
    outcome: "Faster corporate travel planning.",
  },
];

export const industriesServed = [
  {
    title: "Travel Agencies",
    subtitle: "Itinerary and package workflows",
    link: ROUTES.industry.travelTourism,
  },
  {
    title: "Tour Operators",
    subtitle: "Multi-city packaging & operations",
    link: ROUTES.industry.travelTourism,
  },
  {
    title: "Corporate Travel",
    subtitle: "Multi-destination planning",
    link: ROUTES.industry.travelTourism,
  },
  {
    title: "Hospitality & Travel",
    subtitle: "Travel tech for operators",
    link: ROUTES.industry.travelTourism,
  },
];

/** Verified testimonial from RouteMaestro / Airnet Travels case study */
export const testimonial = {
  quote:
    "The AI-powered platform generates comprehensive travel packages in just 2 minutes—something that used to take hours. Our customers love the personalized recommendations and seamless booking experience.",
  attribution: "Director, Airnet Travels",
  caseStudyPath: ROUTES.caseStudyRouteMaestro,
};

export const faqs = [
  {
    question: "What is RouteMaestro?",
    answer:
      "RouteMaestro is an AI travel planning and booking platform for multi-city itineraries and ready-to-book packages.",
  },
  {
    question: "Who is it for?",
    answer:
      "Travel agencies, tour operators, DMCs, and enterprise travel teams that need dynamic packaging.",
  },
  {
    question: "Can it create multi-city itineraries?",
    answer:
      "Yes. RouteMaestro is built for multi-city travel planning and connected destination itineraries.",
  },
  {
    question: "How does AI help travel planning?",
    answer:
      "AI matches traveler intent, shortlists options by preference and budget, and speeds up package creation.",
  },
  {
    question: "Can we customize itineraries?",
    answer:
      "Yes. Adjust generated itineraries and packages without rebuilding the full trip.",
  },
  {
    question: "Does it support booking workflows?",
    answer:
      "Yes. Move from planning into package booking, including package-level book and cancel actions.",
  },
  {
    question: "How do we request a demo?",
    answer:
      "Use Request a Demo or Talk to Our Team on this page to schedule a consultation.",
  },
];
