import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { productPath } from "../../data/products";

const statusStyles = {
  amber: "border-amber-400/30 bg-amber-400/10 text-amber-400",
  emerald: "border-emerald-400/30 bg-emerald-400/10 text-emerald-400",
  blue: "border-blue-400/30 bg-blue-400/10 text-blue-400",
  violet: "border-violet-400/30 bg-violet-400/10 text-violet-400",
};

const ProductCard = ({ product }) => {
  const Icon = product.icon;
  const href = productPath(product.slug);

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-white/10 bg-gray-950 transition-colors duration-300 hover:border-amber-400/40">
      <div className="relative border-b border-white/10 bg-black/30 p-4">
        <div className="mb-5 flex items-center justify-between">
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <span className="h-2 w-2 rounded-full bg-red-400/80" />
            <span className="h-2 w-2 rounded-full bg-amber-400/80" />
            <span className="h-2 w-2 rounded-full bg-emerald-400/80" />
          </div>
          <span
            className={`rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] ${
              statusStyles[product.statusTone] || statusStyles.amber
            }`}
          >
            {product.status}
          </span>
        </div>

        <div className="flex flex-col items-center justify-center py-3">
          <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-amber-400/15">
            <Icon className="h-5 w-5 text-amber-400" aria-hidden="true" />
          </div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-gray-400">
            {product.previewLabel}
          </p>
          <p className="mt-1 text-xs text-gray-500">{product.previewMeta}</p>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-amber-400">
          {product.categoryLabel}
        </p>
        <h3 className="mb-2 text-base font-semibold text-white md:text-lg">
          <Link
            to={href}
            className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400"
          >
            {product.name}
          </Link>
        </h3>
        <p className="mb-4 text-xs leading-relaxed text-gray-300 md:text-sm">
          {product.description}
        </p>
        <ul className="mb-5 flex list-none flex-wrap gap-2">
          {product.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-white/10 px-2.5 py-1 text-[11px] text-gray-300"
            >
              {tag}
            </li>
          ))}
        </ul>
        <Link
          to={href}
          className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-amber-400 transition-colors hover:text-amber-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400"
        >
          Explore Product
          <ArrowRight
            size={14}
            className="transition-transform duration-300 group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </Link>
      </div>
    </article>
  );
};

export default ProductCard;
