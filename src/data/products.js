import {
  Plane,
  Factory,
  Shield,
  Building2,
  Workflow,
  FileText,
  Brain,
  Network,
  Database,
  Fingerprint,
  Zap,
  Eye,
} from "lucide-react";
import { ROUTES } from "../utils/routes";

export const PRODUCT_CATEGORIES = [
  { id: "all", label: "All" },
  { id: "ai-automation", label: "AI & Automation" },
  { id: "saas", label: "SaaS Platforms" },
  { id: "industry", label: "Industry Solutions" },
  // { id: "workflow", label: "Workflow Engines" },
];

export const products = [
  {
    slug: "/",
    name: "RouteMaestro",
    categoryLabel: "AI / TRAVEL & HOSPITALITY",
    previewLabel: "TRAVEL AI",
    status: "Active Engine",
    statusTone: "amber",
    description:
      "AI-powered itinerary generation and automated dynamic booking engine for modern enterprise travel operators.",
    tags: ["Next.js", "LLM Orchestration", "Booking Engine"],
    filters: ["ai-automation", "industry", "saas"],
    icon: Plane,
    previewMeta: "Kafka · GraphQL · Multi-tenant",
    accent: "amber",
  },
  {
    slug: "/",
    name: "Greige Issuance Advisor",
    categoryLabel: "MANUFACTURING / TEXTILE AI",
    previewLabel: "TEXTILE AI",
    status: "Production",
    statusTone: "emerald",
    description:
      "Intelligent loom scheduling and raw material issuance optimizer reducing production downtime and yarn waste.",
    tags: ["Computer Vision", "Predictive AI", "ERP Sync"],
    filters: ["ai-automation", "industry"],
    icon: Factory,
    previewMeta: "CV Pipeline · ERP Sync · Edge",
    accent: "blue",
  },
  {
    slug: "/",
    name: "AuraAuth Biometric",
    categoryLabel: "SECURITY / COMPUTER VISION",
    previewLabel: "IDENTITY",
    status: "Enterprise Ready",
    statusTone: "blue",
    description:
      "Enterprise biometric identity verification and contactless access control with anti-spoofing capabilities.",
    tags: ["Edge AI", "Liveness Detection", "Zero-Trust"],
    filters: ["ai-automation", "industry"],
    icon: Fingerprint,
    previewMeta: "Liveness · Zero-Trust · Edge",
    accent: "violet",
  },
  
];

export const productPath = (slug) => `/products/${slug}`;

export const getProductBySlug = (slug) =>
  products.find((product) => product.slug === slug);

export const whyChooseItems = [
  {
    id: "01",
    title: "Built In-House",
    description:
      "Engineered and maintained by our own teams—no sourced tech debt.",
  },
  {
    id: "02",
    title: "Enterprise-Ready",
    description:
      "Zero-trust security, tenant isolation, and SOC2-ready scale.",
  },
  {
    id: "03",
    title: "AI-First Innovation",
    description:
      "Practical ML and automation that cut friction and lift ROI.",
  },
  {
    id: "04",
    title: "Built to Evolve",
    description:
      "Modular APIs and webhooks that fit your existing stack.",
  },
];

export const productIndustries = [
  {
    title: "Real Estate & PropTech",
    subtitle: "AssetTech & Valuation APIs",
    icon: Building2,
    link: ROUTES.industry.realEstate,
  },
  {
    title: "Textile & Industrial Mfg",
    subtitle: "Greige Issuance & Loom AI",
    icon: Factory,
    link: ROUTES.industry.textiles,
  },
  {
    title: "Travel, Tourism & Hospitality",
    subtitle: "RouteMaestro Travel Engines",
    icon: Plane,
    link: ROUTES.industry.travelTourism,
  },
  {
    title: "Logistics & Supply Chain",
    subtitle: "SynapseFlow Event Dispatch",
    icon: Network,
    link: ROUTES.industry.logistics,
  },
  {
    title: "Healthcare & Clinical Tech",
    subtitle: "AuraAuth Biometrics & Compliance",
    icon: Shield,
    link: ROUTES.industry.healthcare,
  },
  {
    title: "Financial Services & FinTech",
    subtitle: "DocuMatrix AI OCR & Reconciliation",
    icon: FileText,
    link: ROUTES.service.digitalTransformation,
  },
];

export const architectureNodes = [
  {
    title: "AI / ML ENGINE",
    subtitle: "Predictive AI",
    icon: Brain,
    position: "top-left",
  },
  {
    title: "WORKFLOW ENGINE",
    subtitle: "1.2M Events/mo",
    icon: Zap,
    position: "top-right",
  },
  {
    title: "DATA INTEGRATION",
    subtitle: "Zero Loss Kafka",
    icon: Database,
    position: "bottom-left",
  },
  {
    title: "IDENTITY / BIOMETRIC",
    subtitle: "Edge Layer",
    icon: Eye,
    position: "bottom-right",
  },
];
