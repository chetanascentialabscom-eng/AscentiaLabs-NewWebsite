import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Quote,
} from "lucide-react";
import { useConsultation } from "../../../contexts/ConsultationContext";
import SEO from "../../../components/SEO";
import {
  ROUTES,
  SITE_URL,
  absoluteUrl,
} from "../../../utils/routes";
import { products, productPath } from "../../../data/products";
import {
  architectureLayers,
  capabilities,
  faqs,
  features,
  howItWorks,
  impactMetrics,
  industriesServed,
  integrations,
  overviewFacts,
  problems,
  routeMaestroSeo,
  screenTabs,
  securityItems,
  solutionLayers,
  testimonial,
  useCases,
} from "../../../data/routeMaestroPage";
import { ScreenProductUI } from "./ProductUI";
import FeaturesScroll from "./FeaturesScroll";

const Shell = ({ children, labelledBy, alt = false, className = "" }) => (
  <section
    className={`relative overflow-hidden py-12 md:py-14 lg:py-16 ${
      alt
        ? "bg-gradient-to-br from-gray-900 via-blue-900 to-black"
        : "bg-black"
    } ${className}`}
    aria-labelledby={labelledBy}
  >
    {alt && (
      <>
        <div className="pointer-events-none absolute top-0 left-0 right-0 z-0 h-20 bg-gradient-to-b from-black to-transparent" />
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-0 h-16 bg-gradient-to-t from-black/80 to-transparent" />
      </>
    )}
    <div className="container relative z-10 mx-auto max-w-6xl px-4 xl:max-w-7xl 2xl:max-w-[90rem] 2xl:px-8">
      {children}
    </div>
  </section>
);

const Heading = ({ id, eyebrow, title, subtitle, align = "center" }) => (
  <div
    className={`mb-8 md:mb-10 ${
      align === "left" ? "max-w-2xl text-left" : "mx-auto max-w-3xl text-center"
    }`}
  >
    {eyebrow && (
      <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-400">
        {eyebrow}
      </p>
    )}
    <h2 id={id} className="text-3xl leading-tight text-white md:text-4xl">
      {title}
    </h2>
    {subtitle && (
      <p className="mt-3 text-base leading-relaxed text-gray-300 md:text-lg">
        {subtitle}
      </p>
    )}
  </div>
);

const PrimaryButton = ({ children, onClick, className = "" }) => (
  <button
    type="button"
    onClick={onClick}
    className={`inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 px-5 py-2.5 text-sm text-black transition-all hover:scale-[1.02] hover:from-amber-500 hover:to-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400 sm:px-6 sm:py-3 sm:text-base ${className}`}
  >
    {children}
  </button>
);

const SecondaryButton = ({ children, onClick, href, className = "" }) => {
  const classes = `inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 px-5 py-2.5 text-sm text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:px-6 sm:py-3 sm:text-base ${className}`;
  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }
  return (
    <button type="button" onClick={onClick} className={classes}>
      {children}
    </button>
  );
};

const RouteMaestroPage = () => {
  const { openConsultation } = useConsultation();
  const [openFAQ, setOpenFAQ] = useState(null);
  const [activeScreen, setActiveScreen] = useState("planner");
  const pageUrl = absoluteUrl(ROUTES.product("routemaestro"));
  const related = products
    .filter((p) => p.slug !== "routemaestro")
    .slice(0, 3);

  useEffect(() => {
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
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
          name: "Products",
          item: absoluteUrl(ROUTES.products),
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "RouteMaestro",
          item: pageUrl,
        },
      ],
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "routemaestro-breadcrumb-schema";
    script.text = JSON.stringify(breadcrumbSchema);
    document.head.appendChild(script);

    return () => {
      const existing = document.getElementById("routemaestro-breadcrumb-schema");
      if (existing) existing.remove();
    };
  }, [pageUrl]);

  const scrollToCapabilities = () => {
    document
      .getElementById("capabilities")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <SEO
        title={routeMaestroSeo.title}
        description={routeMaestroSeo.description}
        keywords={routeMaestroSeo.keywords}
        url={pageUrl}
        ogImage={`${SITE_URL}/routemaestro.png`}
      />

      {/* 1–2. Breadcrumb + Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-black pt-16 md:pt-24 lg:pt-28">
        <div
          className="pointer-events-none absolute inset-0 opacity-10"
          aria-hidden="true"
        >
          <div className="absolute top-16 right-16 h-28 w-28 rounded-full bg-blue-500 blur-3xl" />
          <div className="absolute bottom-40 left-16 h-20 w-20 rounded-full bg-amber-400/40 blur-2xl" />
        </div>

        <div className="relative container mx-auto max-w-6xl px-4 pb-10 sm:pb-12 md:pb-14 xl:max-w-7xl 2xl:max-w-[90rem] 2xl:px-8 lg:pb-16">
          <nav aria-label="Breadcrumb" className="mb-6 sm:mb-8">
            <ol className="flex list-none flex-wrap items-center gap-2 text-xs text-gray-400 md:text-sm">
              <li>
                <Link
                  to={ROUTES.home}
                  className="transition-colors hover:text-amber-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400"
                >
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link
                  to={ROUTES.products}
                  className="transition-colors hover:text-amber-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400"
                >
                  Products
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-amber-400" aria-current="page">
                RouteMaestro
              </li>
            </ol>
          </nav>

          <div className="grid items-center gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-10 xl:gap-14 2xl:gap-16">
            <div className="order-1 min-w-0">
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-400">
                AI Travel Technology
              </p>
              <h1 className="text-2xl leading-tight sm:text-[1.7rem] md:text-4xl xl:text-[2.65rem] 2xl:text-5xl">
                AI-Powered Travel Planning and{" "}
                <span className="text-amber-400">Booking Platform</span>
              </h1>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-300 md:text-lg">
                AI travel planning for multi-city itineraries and ready-to-book
                packages—built for travel agencies and operators.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:mt-7 sm:flex-row">
                <PrimaryButton onClick={openConsultation}>
                  Request a Demo →
                </PrimaryButton>
                <SecondaryButton onClick={scrollToCapabilities}>
                  Explore Capabilities →
                </SecondaryButton>
              </div>

              <ul className="mt-5 flex list-none flex-wrap gap-2 sm:mt-6">
                {["AI-Powered", "Multi-City Planning", "Dynamic Booking"].map(
                  (item) => (
                    <li
                      key={item}
                      className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-gray-300 md:text-sm"
                    >
                      {item}
                    </li>
                  )
                )}
              </ul>
            </div>

            <div className="order-2 min-w-0 w-full">
              <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
                <div
                  className="pointer-events-none absolute -inset-3 rounded-2xl bg-amber-400/10 blur-2xl sm:-inset-4"
                  aria-hidden="true"
                />
                <div className="relative overflow-hidden rounded-xl border border-white/15 bg-black/30 shadow-2xl shadow-black/40 sm:rounded-2xl">
                  <img
                    src="/pics/routemaestrolandingpageeditpic.png"
                    alt="RouteMaestro AI travel planning interface showing multi-city route options, trip overview, and interactive map"
                    width={1600}
                    height={1000}
                    decoding="async"
                    fetchPriority="high"
                    className="h-auto w-full object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-b from-transparent to-black sm:h-12 md:h-16" />
      </section>

      {/* 3. Product Overview */}
      <Shell labelledBy="overview-heading">
        <div className="mb-8 text-center md:mb-10">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-400">
            Enterprise Architecture
          </p>
          <h2
            id="overview-heading"
            className="text-3xl leading-tight text-white md:text-4xl"
          >
            What Is RouteMaestro?
          </h2>
        </div>

        <div className="overflow-hidden rounded-2xl border border-white/10 bg-gray-950">
          <div
            className="h-px w-full bg-gradient-to-r from-transparent via-amber-400/70 to-transparent"
            aria-hidden="true"
          />

          <div className="grid lg:grid-cols-[1.55fr_1fr]">
            <div className="border-b border-white/10 p-6 sm:p-8 md:p-10 lg:border-b-0 lg:border-r lg:border-white/10 xl:p-12">
              <p className="text-lg font-semibold leading-snug text-white sm:text-xl md:text-2xl md:leading-snug">
                AI travel planning and booking for agencies and operators.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-gray-300 sm:text-[15px] md:mt-5 md:text-base">
                RouteMaestro unifies itinerary generation, personalized
                recommendations, and booking workflows—so teams move from trip
                needs to ready-to-book packages faster.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-gray-400 sm:text-[15px] md:text-base">
                Enterprise travel technology for dynamic packaging, multi-city
                planning, and day-to-day operations.
              </p>
            </div>

            <div className="flex flex-col justify-between gap-8 p-6 sm:p-8 md:p-10 xl:p-12">
              <dl className="space-y-4">
                {overviewFacts.map((fact) => (
                  <div key={fact.label}>
                    <dt className="text-[11px] font-semibold uppercase tracking-[0.16em] text-amber-400">
                      {fact.label}
                    </dt>
                    <dd className="mt-1.5 text-sm font-medium text-white md:text-[15px]">
                      {fact.value}
                    </dd>
                  </div>
                ))}
              </dl>

              <ul className="flex list-none flex-wrap gap-2">
                {[
                  { label: "AI Travel Platform", accent: true },
                  { label: "Travel SaaS", accent: false },
                  { label: "Planning + Booking", accent: false },
                  { label: "B2B Enterprise", accent: false },
                ].map((tag) => (
                  <li key={tag.label}>
                    <span
                      className={`inline-flex rounded-full border px-3 py-1.5 text-[11px] font-medium sm:text-xs ${
                        tag.accent
                          ? "border-amber-400/50 text-amber-400"
                          : "border-white/15 text-gray-300"
                      }`}
                    >
                      {tag.label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Shell>

      {/* 4. Problem */}
      <Shell labelledBy="problem-heading" alt>
        <Heading
          id="problem-heading"
          eyebrow="The Problem"
          title="Travel Planning Is Still Too Fragmented"
        />
        <ul className="grid list-none grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map((item) => (
            <li
              key={item.id}
              className="rounded-xl border border-white/10 bg-black/30 p-5 transition-colors hover:border-amber-400/30 md:p-6"
            >
              <p className="mb-3 text-2xl font-semibold text-amber-400">
                {item.id}
              </p>
              <h3 className="mb-2 text-base font-semibold text-white">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-300">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </Shell>

      {/* 5. Solution */}
      <Shell labelledBy="solution-heading">
        <Heading
          id="solution-heading"
          title="One Platform for Modern Travel Operations"
          subtitle="AI travel planning, multi-city itineraries, and booking workflows in one place."
        />
        <div className="mx-auto max-w-2xl">
          <ol className="relative list-none space-y-0">
            {solutionLayers.map((layer, index) => (
              <li key={layer.title} className="relative">
                <div
                  className={`rounded-xl border p-5 md:p-6 ${
                    index === 1
                      ? "border-amber-400/40 bg-amber-400/5 shadow-[0_0_40px_-12px_rgba(251,191,36,0.35)]"
                      : "border-white/10 bg-gray-950"
                  }`}
                >
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-amber-400">
                    Layer {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-white">
                    {layer.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-300">
                    {layer.description}
                  </p>
                </div>
                {index < solutionLayers.length - 1 && (
                  <div
                    className="flex justify-center py-2 text-amber-400/70"
                    aria-hidden="true"
                  >
                    ↓
                  </div>
                )}
              </li>
            ))}
          </ol>
        </div>
      </Shell>

      {/* 6. Capabilities */}
      <Shell labelledBy="capabilities" alt>
        <Heading id="capabilities" title="Core Capabilities" />
        <ul className="grid list-none grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((item) => {
            const Icon = item.icon;
            return (
              <li
                key={item.id}
                className="rounded-xl border border-white/10 bg-black/30 p-5 transition-all hover:-translate-y-0.5 hover:border-amber-400/40 md:p-6"
              >
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-amber-400/25 bg-amber-400/10 text-amber-400">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <span className="text-sm font-semibold text-amber-400/80">
                    {item.id}
                  </span>
                </div>
                <h3 className="mb-2 text-base font-semibold text-white md:text-lg">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-300">
                  {item.description}
                </p>
              </li>
            );
          })}
        </ul>
      </Shell>

      {/* 7. Core Features — scroll progress timeline */}
      <Shell labelledBy="features-heading">
        <Heading
          id="features-heading"
          title="Everything Travel Teams Need"
        />
        <FeaturesScroll features={features} />
      </Shell>

      {/* 8. How It Works */}
      <Shell labelledBy="how-heading" alt>
        <Heading
          id="how-heading"
          title="From Idea to Ready-to-Book Trip"
        />
        <ol className="grid list-none grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {howItWorks.map((step, index) => (
            <li
              key={step.id}
              className="relative rounded-xl border border-white/10 bg-black/30 p-5 md:p-6"
            >
              <p className="text-3xl font-semibold text-white/10">{step.id}</p>
              <h3 className="mt-2 text-base font-semibold text-white">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-300">
                {step.description}
              </p>
              {index < howItWorks.length - 1 && (
                <span
                  className="pointer-events-none absolute -right-2 top-1/2 hidden -translate-y-1/2 text-amber-400/50 lg:block"
                  aria-hidden="true"
                >
                  →
                </span>
              )}
            </li>
          ))}
        </ol>
      </Shell>

      {/* 9. Product Screens */}
      <Shell labelledBy="screens-heading">
        <Heading id="screens-heading" title="Inside RouteMaestro" />
        <div className="mx-auto max-w-4xl">
          <div
            role="tablist"
            aria-label="Product screens"
            className="mb-6 flex flex-wrap justify-center gap-2"
          >
            {screenTabs.map((tab) => {
              const selected = activeScreen === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  onClick={() => setActiveScreen(tab.id)}
                  className={`rounded-full border px-4 py-2 text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400 ${
                    selected
                      ? "border-amber-400/50 bg-amber-400/10 text-amber-400"
                      : "border-white/15 text-gray-300 hover:border-white/30"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
          <ScreenProductUI tab={activeScreen} />
          <p className="mt-4 text-center text-xs text-gray-500">
            RouteMaestro{" "}
            {screenTabs.find((t) => t.id === activeScreen)?.label.toLowerCase()}{" "}
            view
          </p>
        </div>
      </Shell>

      {/* 10. Technology Architecture */}
      <Shell labelledBy="architecture-heading" alt>
        <Heading
          id="architecture-heading"
          title="Modern Technology Foundation"
        />
        <ol className="mx-auto max-w-3xl list-none space-y-0">
          {architectureLayers.map((layer, index) => (
            <li key={layer.title}>
              <div className="rounded-xl border border-white/10 bg-black/30 p-5 md:px-6">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="text-base font-semibold text-white">
                    {layer.title}
                  </h3>
                  <ul className="flex list-none flex-wrap gap-2">
                    {layer.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-full border border-white/10 px-2.5 py-1 text-[11px] text-gray-300"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {index < architectureLayers.length - 1 && (
                <div
                  className="flex justify-center py-1.5 text-amber-400/60"
                  aria-hidden="true"
                >
                  ↓
                </div>
              )}
            </li>
          ))}
        </ol>
      </Shell>

      {/* 11. Integrations */}
      <Shell labelledBy="integrations-heading">
        <Heading
          id="integrations-heading"
          title="Connected to the Travel Ecosystem"
          subtitle="Integrate across flights, hotels, activities, transfers, and booking systems."
        />
        <ul className="grid list-none grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {integrations.map((item) => {
            const Icon = item.icon;
            return (
              <li
                key={item.title}
                className="rounded-xl border border-white/10 bg-gray-950 p-4 text-center transition-colors hover:border-amber-400/30"
              >
                <Icon
                  className="mx-auto h-5 w-5 text-amber-400"
                  aria-hidden="true"
                />
                <h3 className="mt-3 text-sm font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-1 text-[11px] leading-relaxed text-gray-400">
                  {item.description}
                </p>
              </li>
            );
          })}
        </ul>
      </Shell>

      {/* 12. Security */}
      <Shell labelledBy="security-heading" alt>
        <Heading
          id="security-heading"
          title="Secure Travel Operations"
        />
        <ul className="grid list-none grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {securityItems.map((item) => {
            const Icon = item.icon;
            return (
              <li
                key={item.title}
                className="rounded-xl border border-white/10 bg-black/30 p-5"
              >
                <Icon className="mb-3 h-5 w-5 text-amber-400" aria-hidden="true" />
                <h3 className="mb-2 text-base font-semibold text-white">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-300">
                  {item.description}
                </p>
              </li>
            );
          })}
        </ul>
      </Shell>

      {/* 13. Impact */}
      <Shell labelledBy="impact-heading">
        <Heading
          id="impact-heading"
          title="Measurable Business Impact"
        />
        <ul className="mx-auto grid max-w-4xl list-none grid-cols-1 gap-3 sm:grid-cols-3">
          {impactMetrics.map((metric) => (
            <li
              key={metric.label}
              className="rounded-xl border border-white/10 bg-gray-950 p-6 text-center md:p-8"
            >
              <p className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-4xl font-semibold tracking-tight text-transparent md:text-5xl">
                {metric.value}
              </p>
              <p className="mt-2 text-sm text-gray-300 md:text-base">
                {metric.label}
              </p>
            </li>
          ))}
        </ul>
      </Shell>

      {/* 14. Use Cases */}
      <Shell labelledBy="usecases-heading" alt>
        <Heading
          id="usecases-heading"
          title="Built for Real Travel Workflows"
        />
        <ul className="grid list-none grid-cols-1 gap-4 lg:grid-cols-3">
          {useCases.map((item) => (
            <li
              key={item.title}
              className="rounded-xl border border-white/10 bg-black/30 p-5 md:p-6"
            >
              <h3 className="mb-4 text-lg font-semibold text-white">
                {item.title}
              </h3>
              <dl className="space-y-3 text-sm">
                <div>
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-amber-400">
                    Problem
                  </dt>
                  <dd className="mt-1 text-gray-300">{item.problem}</dd>
                </div>
                <div>
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-amber-400">
                    Capability
                  </dt>
                  <dd className="mt-1 text-gray-300">{item.capability}</dd>
                </div>
                <div>
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-amber-400">
                    Outcome
                  </dt>
                  <dd className="mt-1 text-gray-300">{item.outcome}</dd>
                </div>
              </dl>
            </li>
          ))}
        </ul>
      </Shell>

      {/* 15. Industries */}
      <Shell labelledBy="industries-heading">
        <Heading
          id="industries-heading"
          title="Built for Modern Travel Businesses"
        />
        <ul className="grid list-none grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {industriesServed.map((item) => (
            <li key={item.title}>
              <Link
                to={item.link}
                className="group flex h-full flex-col rounded-xl border border-white/10 bg-gray-950 p-5 transition-colors hover:border-amber-400/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400"
              >
                <h3 className="text-base font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 flex-1 text-sm text-gray-400">
                  {item.subtitle}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm text-amber-400">
                  Explore
                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Shell>

      {/* 16. Testimonials */}
      <Shell labelledBy="testimonials-heading" alt>
        <Heading id="testimonials-heading" title="What Our Customers Say" />
        <figure className="mx-auto max-w-3xl rounded-2xl border border-white/10 bg-black/30 p-6 md:p-10">
          <Quote
            className="mb-4 h-8 w-8 text-amber-400/70"
            aria-hidden="true"
          />
          <blockquote className="text-base leading-relaxed text-gray-200 md:text-lg">
            “{testimonial.quote}”
          </blockquote>
          <figcaption className="mt-6 border-t border-white/10 pt-4 text-sm text-gray-400">
            <span className="font-medium text-white">
              {testimonial.attribution}
            </span>
            <span className="mx-2 text-gray-600">·</span>
            <Link
              to={testimonial.caseStudyPath}
              className="text-amber-400 hover:text-amber-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400"
            >
              Read case study
            </Link>
          </figcaption>
        </figure>
      </Shell>

      {/* 17. FAQ */}
      <Shell labelledBy="faq-heading">
        <Heading id="faq-heading" title="Frequently Asked Questions" />
        <div className="mx-auto max-w-3xl divide-y divide-white/10 border-y border-white/10">
          {faqs.map((faq, index) => {
            const open = openFAQ === index;
            const panelId = `rm-faq-panel-${index}`;
            const buttonId = `rm-faq-button-${index}`;
            return (
              <div key={faq.question}>
                <button
                  type="button"
                  id={buttonId}
                  aria-expanded={open}
                  aria-controls={panelId}
                  onClick={() => setOpenFAQ(open ? null : index)}
                  className="flex w-full items-center justify-between gap-4 py-4 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400 md:py-5"
                >
                  <h3 className="pr-2 text-sm font-medium text-white md:text-base">
                    {faq.question}
                  </h3>
                  <span className="shrink-0 text-amber-400" aria-hidden="true">
                    {open ? (
                      <ChevronUp className="h-4 w-4" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )}
                  </span>
                </button>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!open}
                  className={open ? "pb-4 md:pb-5" : ""}
                >
                  {open && (
                    <p className="text-sm leading-relaxed text-gray-400 md:text-[15px]">
                      {faq.answer}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </Shell>

      {/* 18. Related Products */}
      <Shell labelledBy="related-heading" alt>
        <Heading
          id="related-heading"
          title="Explore More Ascentia Products"
        />
        <ul
          className={`grid list-none grid-cols-1 gap-3 ${
            related.length >= 3 ? "sm:grid-cols-3" : "sm:grid-cols-2"
          }`}
        >
          {related.map((item) => (
            <li key={item.slug}>
              <Link
                to={productPath(item.slug)}
                className="group flex h-full flex-col rounded-xl border border-white/10 bg-black/30 p-5 transition-colors hover:border-amber-400/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-amber-400">
                  {item.categoryLabel}
                </p>
                <h3 className="mt-2 text-base font-semibold text-white">
                  {item.name}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-400">
                  {item.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-amber-400">
                  Explore Product
                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Shell>

      {/* 19. Final CTA */}
      <Shell labelledBy="cta-heading">
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-gray-950 via-blue-950/80 to-black px-6 py-12 text-center md:px-10 md:py-14">
          <div
            className="pointer-events-none absolute inset-0 opacity-30"
            aria-hidden="true"
          >
            <div className="absolute left-1/2 top-0 h-40 w-40 -translate-x-1/2 rounded-full bg-amber-400/20 blur-3xl" />
            <div className="absolute bottom-0 right-10 h-28 w-28 rounded-full bg-blue-500/20 blur-2xl" />
          </div>
          <div className="relative z-10 mx-auto max-w-2xl">
            <h2
              id="cta-heading"
              className="text-3xl leading-tight text-white md:text-4xl"
            >
              Ready to Transform Travel Planning?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-gray-300 md:text-lg">
              Turn trip needs into personalized, ready-to-book journeys with
              RouteMaestro.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <PrimaryButton onClick={openConsultation}>
                Request a RouteMaestro Demo →
              </PrimaryButton>
              <SecondaryButton onClick={openConsultation}>
                Talk to Our Team →
              </SecondaryButton>
            </div>
          </div>
        </div>
      </Shell>
    </div>
  );
};

export default RouteMaestroPage;
