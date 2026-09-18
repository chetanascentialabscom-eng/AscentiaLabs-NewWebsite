import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useConsultation } from "../../contexts/ConsultationContext";
import SEO from "../../components/SEO";
import { ROUTES, absoluteUrl } from "../../utils/routes";
import { getProductBySlug, products, productPath } from "../../data/products";

const ProductDetailPage = () => {
  const { slug } = useParams();
  const { openConsultation } = useConsultation();
  const product = getProductBySlug(slug);

  if (!product) {
    return <Navigate to={ROUTES.products} replace />;
  }

  const Icon = product.icon;
  const related = products.filter((item) => item.slug !== product.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-black text-white">
      <SEO
        title={`${product.name} | Ascentia Labs Products`}
        description={product.description}
        keywords={`${product.name}, ${product.categoryLabel}, Ascentia Labs products`}
        url={absoluteUrl(productPath(product.slug))}
      />

      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-black pt-16 pb-12 md:pt-24 md:pb-16 lg:pt-28">
        <div
          className="pointer-events-none absolute inset-0 opacity-10"
          aria-hidden="true"
        >
          <div className="absolute top-16 right-16 h-28 w-28 rounded-full bg-blue-500 blur-3xl" />
          <div className="absolute bottom-40 left-16 h-20 w-20 rounded-full bg-blue-400 blur-2xl" />
        </div>
        <div className="relative container mx-auto max-w-6xl px-4 xl:max-w-7xl 2xl:max-w-[90rem] 2xl:px-8">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex list-none flex-wrap items-center gap-2 text-xs text-gray-400 md:text-sm">
              <li>
                <Link to={ROUTES.home} className="hover:text-amber-300">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link to={ROUTES.products} className="hover:text-amber-300">
                  Products
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-amber-400" aria-current="page">
                {product.name}
              </li>
            </ol>
          </nav>

          <div className="grid items-start gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
            <div>
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-400">
                {product.categoryLabel}
              </p>
              <h1 className="text-2xl leading-tight sm:text-[1.7rem] md:text-4xl xl:text-[2.65rem]">
                {product.name}
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-gray-300 md:text-lg">
                {product.description}
              </p>
              <ul className="mt-5 flex list-none flex-wrap gap-2">
                {product.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-gray-300 md:text-sm"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={openConsultation}
                  className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 px-5 py-2.5 text-sm text-black transition-all hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400 sm:px-6 sm:py-3 sm:text-base"
                >
                  Discuss This Product →
                </button>
                <Link
                  to={ROUTES.products}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 px-5 py-2.5 text-sm text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:px-6 sm:py-3 sm:text-base"
                >
                  <ArrowLeft size={14} aria-hidden="true" />
                  Back to Products
                </Link>
              </div>
            </div>

            <div className="rounded-2xl border border-white/15 bg-black/30 p-6 backdrop-blur-md">
              <div className="mb-5 flex items-center justify-between">
                <div className="flex items-center gap-1.5" aria-hidden="true">
                  <span className="h-2 w-2 rounded-full bg-red-400/80" />
                  <span className="h-2 w-2 rounded-full bg-amber-400/80" />
                  <span className="h-2 w-2 rounded-full bg-emerald-400/80" />
                </div>
                <span className="rounded-full border border-amber-400/30 bg-amber-400/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-amber-300">
                  {product.status}
                </span>
              </div>
              <div className="flex flex-col items-center py-8 text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-xl border border-amber-400/25 bg-amber-400/10 text-amber-400">
                  <Icon className="h-7 w-7" aria-hidden="true" />
                </div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-gray-400">
                  {product.previewLabel}
                </p>
                <p className="mt-2 text-sm text-gray-500">{product.previewMeta}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black py-12 md:py-14" aria-labelledby="related-products-heading">
        <div className="container mx-auto max-w-6xl px-4 xl:max-w-7xl 2xl:max-w-[90rem] 2xl:px-8">
          <h2
            id="related-products-heading"
            className="mb-6 text-sm font-semibold uppercase tracking-[0.14em] text-gray-400 md:text-base"
          >
            Related Products
          </h2>
          <ul className="grid list-none grid-cols-1 gap-3 sm:grid-cols-3">
            {related.map((item) => (
              <li key={item.slug}>
                <Link
                  to={productPath(item.slug)}
                  className="group flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-gray-950 px-4 py-4 transition-colors hover:border-amber-400/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400"
                >
                  <span>
                    <span className="block text-sm font-semibold text-white">
                      {item.name}
                    </span>
                    <span className="mt-1 block text-xs text-gray-500">
                      {item.categoryLabel}
                    </span>
                  </span>
                  <ArrowRight
                    size={14}
                    className="text-amber-400 transition-transform group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default ProductDetailPage;
