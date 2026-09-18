import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Cpu,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { useConsultation } from "../../contexts/ConsultationContext";
import SEO from "../../components/SEO";
import { seoData } from "../../utils/seoData";
import {
  PRODUCT_CATEGORIES,
  products,
  whyChooseItems,
  productIndustries,
  architectureNodes,
} from "../../data/products";
import ProductCard from "./ProductCard";

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
      align === "left" ? "max-w-xl text-left" : "mx-auto max-w-5xl text-center"
    }`}
  >
    {eyebrow && (
      <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-400 2xl:text-[15px]">
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

const ProductsPage = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const { openConsultation } = useConsultation();

  const filteredProducts = useMemo(() => {
    if (activeCategory === "all") return products;
    return products.filter((product) =>
      product.filters.includes(activeCategory)
    );
  }, [activeCategory]);

  return (
    <div className="min-h-screen bg-black">
      <SEO {...seoData.products} />

      {/* Hero — continuous blue blend, viewport-height aware from lg up */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-black pt-16 md:pt-24 lg:pt-28 xl:pt-28 2xl:pt-32">
        <div
          className="pointer-events-none absolute inset-0 opacity-10"
          aria-hidden="true"
        >
          <div className="absolute top-16 right-16 h-28 w-28 rounded-full bg-blue-500 blur-3xl 2xl:h-40 2xl:w-40" />
          <div className="absolute bottom-40 left-16 h-20 w-20 rounded-full bg-blue-400 blur-2xl" />
        </div>

        <div className="relative container mx-auto max-w-6xl px-4 pb-8 sm:pb-10 md:pb-12 lg:pb-10 xl:max-w-7xl xl:pb-12 2xl:max-w-[90rem] 2xl:px-8 2xl:pb-16 [@media(max-height:900px)]:pb-6 [@media(max-height:780px)]:pb-4">
          <div className="grid items-center gap-6 py-3 sm:gap-8 sm:py-4 lg:min-h-[min(36rem,calc(100svh-11rem))] lg:grid-cols-2 lg:items-center lg:gap-x-10 lg:py-4 xl:min-h-[min(42rem,calc(100svh-12rem))] xl:gap-x-14 xl:py-6 2xl:min-h-[min(52rem,calc(100svh-14rem))] 2xl:gap-x-20 2xl:py-10 [@media(max-height:900px)]:lg:min-h-[min(32rem,calc(100svh-10rem))] [@media(max-height:900px)]:lg:gap-6 [@media(max-height:900px)]:lg:py-3 [@media(max-height:780px)]:min-h-0 [@media(max-height:780px)]:gap-4 [@media(max-height:780px)]:py-2">
            <div className="order-1 max-w-xl space-y-4 text-white sm:space-y-5 lg:max-w-none lg:space-y-4 lg:self-center xl:space-y-5 2xl:space-y-7 [@media(max-height:900px)]:lg:space-y-3 [@media(max-height:780px)]:space-y-3">
              <p className="inline-flex rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-amber-400 lg:text-[10px] xl:text-[11px] 2xl:px-4 2xl:py-1.5 2xl:text-sm">
                Our Products
              </p>
              <h1 className="text-2xl leading-tight sm:text-[1.7rem] md:text-4xl lg:text-[2.15rem] lg:leading-[1.2] xl:text-[2.65rem] 2xl:text-5xl 2xl:leading-[1.15] [@media(max-height:900px)]:lg:text-[1.85rem] [@media(max-height:780px)]:text-[1.65rem] [@media(max-height:780px)]:md:text-3xl">
                Technology Products Built by{" "}
                <span className="text-amber-400">Ascentia Labs</span>
              </h1>
              <p className="text-base leading-relaxed text-gray-300 sm:text-lg lg:text-[15px] lg:leading-relaxed xl:text-base 2xl:text-xl [@media(max-height:900px)]:lg:text-sm [@media(max-height:780px)]:text-sm [@media(max-height:780px)]:sm:text-base">
                Purpose-built digital products engineered to solve complex
                business problems with modern technology, intelligent
                automation, and scalable architecture.
              </p>
              <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:pt-0 lg:gap-3 2xl:gap-4 [@media(max-height:900px)]:pt-0 [@media(max-height:780px)]:pt-0">
                <a
                  href="#product-grid"
                  className="rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 px-5 py-2.5 text-center text-sm text-black shadow-lg transition-all duration-300 hover:scale-105 hover:from-amber-500 hover:to-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400 sm:px-6 sm:py-3 sm:text-base lg:px-5 lg:py-2.5 lg:text-sm xl:px-6 xl:py-3 xl:text-base 2xl:px-8 2xl:py-3.5 2xl:text-lg [@media(max-height:900px)]:lg:py-2 [@media(max-height:780px)]:py-2 [@media(max-height:780px)]:sm:py-2.5"
                >
                  Explore Portfolio →
                </a>
                <button
                  type="button"
                  onClick={openConsultation}
                  className="rounded-xl border border-white/30 px-5 py-2.5 text-sm text-white transition-all duration-300 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:px-6 sm:py-3 sm:text-base lg:px-5 lg:py-2.5 lg:text-sm xl:px-6 xl:py-3 xl:text-base 2xl:px-8 2xl:py-3.5 2xl:text-lg [@media(max-height:900px)]:lg:py-2 [@media(max-height:780px)]:py-2 [@media(max-height:780px)]:sm:py-2.5"
                >
                  Discuss Custom Product →
                </button>
              </div>
              <ul className="flex list-none flex-wrap items-center gap-x-5 gap-y-3 pt-2 text-xs text-gray-400 sm:text-sm lg:gap-x-4 lg:pt-1 [@media(max-height:900px)]:lg:gap-x-3 [@media(max-height:900px)]:lg:pt-0 [@media(max-height:780px)]:gap-x-4 [@media(max-height:780px)]:pt-0">
                <li className="inline-flex items-center gap-2">
                  <Cpu className="h-3.5 w-3.5 text-amber-400" aria-hidden="true" />
                  6+ Proprietary Engines
                </li>
                <li className="hidden h-3 w-px bg-white/15 sm:block" aria-hidden="true" />
                <li className="inline-flex items-center gap-2">
                  <ShieldCheck className="h-3.5 w-3.5 text-amber-400" aria-hidden="true" />
                  99.9% Uptime SLA
                </li>
                <li className="hidden h-3 w-px bg-white/15 sm:block" aria-hidden="true" />
                <li className="inline-flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-amber-400" aria-hidden="true" />
                  Enterprise Ready
                </li>
              </ul>
            </div>

            <div className="relative order-2 w-full lg:self-center">
              <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-black/30 shadow-2xl backdrop-blur-md lg:max-h-[min(28rem,calc(100svh-14rem))] xl:max-h-none 2xl:rounded-3xl">
                <div className="flex items-center justify-between gap-3 border-b border-white/10 bg-white/[0.04] px-4 py-3 sm:px-5 sm:py-3.5 lg:py-2.5 xl:py-3.5 2xl:px-6 2xl:py-4 [@media(max-height:900px)]:lg:py-2 [@media(max-height:780px)]:py-2.5">
                  <p className="truncate text-sm font-normal text-white sm:text-base lg:text-sm xl:text-base 2xl:text-lg">
                    Enterprise Core Engine
                  </p>
                  <div className="flex shrink-0 items-center gap-1.5" aria-hidden="true">
                    <span className="h-2 w-2 rounded-full bg-emerald-400/80" />
                    <span className="text-[11px] font-light uppercase tracking-wider text-gray-400 2xl:text-xs">
                      Live
                    </span>
                  </div>
                </div>

                <div className="relative grid grid-cols-2 gap-3 p-4 sm:gap-4 sm:p-5 lg:gap-2.5 lg:p-3.5 xl:gap-4 xl:p-5 2xl:p-6 [@media(max-height:900px)]:lg:gap-2 [@media(max-height:900px)]:lg:p-3 [@media(max-height:780px)]:gap-2.5 [@media(max-height:780px)]:p-3">
                  {architectureNodes.map((node) => {
                    const Icon = node.icon;
                    return (
                      <div
                        key={node.title}
                        className="rounded-xl border border-white/10 bg-black/30 p-3 sm:p-4 lg:p-2.5 xl:p-4 [@media(max-height:900px)]:lg:p-2 [@media(max-height:780px)]:p-2.5"
                      >
                        <Icon className="mb-2 h-4 w-4 text-amber-400 lg:mb-1.5 lg:h-3.5 lg:w-3.5 xl:mb-2 xl:h-4 xl:w-4 [@media(max-height:780px)]:mb-1.5" aria-hidden="true" />
                        <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-white sm:text-[11px] lg:text-[9px] xl:text-[11px]">
                          {node.title}
                        </p>
                        <p className="mt-1 text-xs text-gray-400 lg:mt-0.5 lg:text-[11px] xl:mt-1 xl:text-xs">
                          {node.subtitle}
                        </p>
                      </div>
                    );
                  })}
                  {/* <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                    <div className="rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-3 text-center lg:px-3 lg:py-2 xl:px-4 xl:py-3 [@media(max-height:900px)]:lg:px-2.5 [@media(max-height:900px)]:lg:py-1.5 [@media(max-height:780px)]:px-3 [@media(max-height:780px)]:py-2">
                      <Sparkles className="mx-auto mb-1 h-4 w-4 text-amber-400 lg:h-3.5 lg:w-3.5 xl:h-4 xl:w-4" aria-hidden="true" />
                      <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-amber-300 lg:text-[9px] xl:text-[10px]">
                        Operating Core
                      </p>
                      <p className="text-[10px] text-gray-300 lg:text-[9px] xl:text-[10px]">Engine</p>
                    </div>
                  </div> */}
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 px-4 py-3 sm:px-5 lg:gap-2 lg:px-3.5 lg:py-2 xl:px-5 xl:py-3 [@media(max-height:900px)]:lg:py-1.5 [@media(max-height:780px)]:py-2">
                  <p className="text-xs text-gray-400 lg:text-[11px] xl:text-xs">
                    TLS 1.3 · SOC2 Controls
                  </p>
                  <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/25 bg-amber-400/10 px-3 py-1 text-[11px] text-amber-300 lg:px-2.5 lg:text-[10px] xl:px-3 xl:text-[11px]">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-400" aria-hidden="true" />
                    Decoupled Microservice Architecture
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-b from-transparent to-black md:h-16 lg:h-12 xl:h-16 [@media(max-height:780px)]:h-8" />
      </section>

      {/* Product grid */}
      <Shell labelledBy="product-grid-heading">
        <div id="product-grid">
          <div className="mb-8 flex flex-col gap-4 border-b border-white/10 pb-5 md:mb-10 md:flex-row md:items-end md:justify-between md:gap-6">
            <div className="w-full min-w-0 flex-1 md:max-w-none">
              <h2 id="product-grid-heading" className="sr-only">
                Enterprise Products
              </h2>

              {/* Mobile: category dropdown */}
              <div className="md:hidden">
                <label htmlFor="product-category-select" className="sr-only">
                  Select product category
                </label>
                <div className="relative max-w-md">
                  <select
                    id="product-category-select"
                    value={activeCategory}
                    onChange={(e) => setActiveCategory(e.target.value)}
                    aria-controls="product-grid-results"
                    className="w-full appearance-none rounded-xl border border-amber-400/40 bg-black/40 px-4 py-3 pr-11 text-sm font-medium text-amber-400 [color-scheme:dark] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400"
                  >
                    {PRODUCT_CATEGORIES.map((category) => (
                      <option
                        key={category.id}
                        value={category.id}
                        className="bg-gray-950 font-normal text-gray-100"
                      >
                        {category.label}
                      </option>
                    ))}
                  </select>
                  <ChevronDown
                    className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-amber-400"
                    aria-hidden="true"
                  />
                </div>
              </div>

              {/* Desktop: category tabs */}
              <div
                role="tablist"
                aria-label="Product categories"
                className="hidden flex-wrap gap-x-5 gap-y-2 md:flex 2xl:flex-nowrap 2xl:gap-x-6"
              >
                {PRODUCT_CATEGORIES.map((category) => {
                  const selected = activeCategory === category.id;
                  return (
                    <button
                      key={category.id}
                      type="button"
                      role="tab"
                      aria-selected={selected}
                      onClick={() => setActiveCategory(category.id)}
                      className={`relative whitespace-nowrap pb-2 text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400 md:text-[15px] ${
                        selected
                          ? "font-medium text-amber-400"
                          : "text-gray-400 hover:text-gray-200"
                      }`}
                    >
                      {category.label}
                      {selected && (
                        <span
                          className="absolute inset-x-0 bottom-0 h-0.5 rounded-full bg-amber-400"
                          aria-hidden="true"
                        />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
            <p className="shrink-0 text-xs text-gray-400 md:text-sm 2xl:whitespace-nowrap">
              Showing {filteredProducts.length} Enterprise Product
              {filteredProducts.length === 1 ? "" : "s"}
            </p>
          </div>

          <div id="product-grid-results">
            {filteredProducts.length > 0 ? (
              <ul className="grid list-none grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {filteredProducts.map((product) => (
                  <li key={product.slug}>
                    <ProductCard product={product} />
                  </li>
                ))}
              </ul>
            ) : (
              <p className="rounded-xl border border-white/10 bg-gray-950 px-5 py-10 text-center text-sm text-gray-400">
                No products in this category yet.
              </p>
            )}
          </div>
        </div>
      </Shell>

      {/* Why Choose */}
      <Shell labelledBy="why-products-heading" alt>
        <Heading
          id="why-products-heading"
          eyebrow="Engineered for Scale"
          title="Why Choose Ascentia Products?"
        />
        <ul className="grid list-none grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {whyChooseItems.map((item) => (
            <li
              key={item.id}
              className="rounded-xl border border-white/10 bg-black/30 p-5 md:p-6"
            >
              <p className="mb-3 text-2xl font-semibold text-amber-400 md:text-3xl">
                {item.id}
              </p>
              <h3 className="mb-2 text-base font-semibold text-white md:text-lg">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-300 md:text-[15px]">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </Shell>

      {/* Industries */}
      <Shell labelledBy="product-industries-heading">
        <div className="mb-8 grid gap-4 md:mb-10 lg:grid-cols-[1.2fr_1fr] lg:items-end lg:gap-10">
          <div>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-400 2xl:text-[15px]">
              Proven Across Domains
            </p>
            <h2
              id="product-industries-heading"
              className="text-3xl leading-tight text-white md:text-4xl"
            >
              Products Built for Real Business Needs
            </h2>
          </div>
          <p className="text-sm leading-relaxed text-gray-300 md:text-base">
            Our products address mission-critical workflows across sectors where
            custom software and AI generate verifiable ROI.
          </p>
        </div>
        <ul className="grid list-none grid-cols-1 gap-3 sm:grid-cols-2">
          {productIndustries.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.title}>
                <Link
                  to={item.link}
                  className="group flex items-center gap-4 rounded-xl border border-white/10 bg-gray-950 px-4 py-4 transition-colors hover:border-amber-400/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400 md:px-5"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-400/15">
                    <Icon className="h-4 w-4 text-amber-400" aria-hidden="true" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-semibold text-white md:text-[15px]">
                      {item.title}
                    </span>
                    <span className="mt-0.5 block text-xs text-gray-400 md:text-sm">
                      {item.subtitle}
                    </span>
                  </span>
                  <ArrowRight
                    size={14}
                    className="shrink-0 text-gray-500 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:text-amber-400"
                    aria-hidden="true"
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      </Shell>

      {/* Final CTA */}
      {/* <Shell labelledBy="products-cta-heading" alt>
        <Heading
          id="products-cta-heading"
          title="Have a Product Idea or Enterprise Requirement?"
          subtitle="From product strategy and system architecture to high-scale deployment, Ascentia Labs turns complex operational challenges into proprietary software assets."
        />
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <button
            type="button"
            onClick={openConsultation}
            className="rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 px-6 py-3 text-sm text-black shadow-lg transition-all duration-300 hover:scale-105 hover:from-amber-500 hover:to-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400 sm:text-base 2xl:px-8 2xl:py-3.5 2xl:text-lg"
          >
            Let&apos;s Build Your Product
          </button>
          <button
            type="button"
            onClick={openConsultation}
            className="rounded-xl border border-white/30 px-6 py-3 text-sm text-white transition-all duration-300 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:text-base 2xl:px-8 2xl:py-3.5 2xl:text-lg"
          >
            Schedule Architectural Review
          </button>
        </div>
      </Shell> */}
    </div>
  );
};

export default ProductsPage;
