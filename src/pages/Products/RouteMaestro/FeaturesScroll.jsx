import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useInView,
} from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { FeatureProductUI } from "./ProductUI";

const FeatureBlock = ({ feature }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: "-35% 0px -35% 0px", once: false });
  const reverse = Boolean(feature.reverse);

  return (
    <article
      ref={ref}
      className="relative grid items-center gap-6 pl-10 sm:gap-8 sm:pl-12 lg:grid-cols-2 lg:gap-x-24 lg:pl-0 xl:gap-x-32"
    >
      {/* Timeline node */}
      <div
        className="absolute left-[0.6875rem] top-6 z-10 -translate-x-1/2 sm:left-[0.9375rem] lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2"
        aria-hidden="true"
      >
        <span
          className={`relative flex h-3.5 w-3.5 items-center justify-center rounded-full border transition-all duration-500 sm:h-4 sm:w-4 ${
            inView
              ? "border-amber-400 bg-amber-400 shadow-[0_0_16px_rgba(251,191,36,0.55)]"
              : "border-white/25 bg-gray-950"
          }`}
        >
          <span
            className={`h-1.5 w-1.5 rounded-full transition-colors duration-500 ${
              inView ? "bg-black" : "bg-white/30"
            }`}
          />
        </span>
      </div>

      <div
        className={`min-w-0 ${reverse ? "lg:order-2" : "lg:order-1"}`}
      >
        <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-400">
          {feature.eyebrow}
        </p>
        <h3 className="text-xl font-semibold text-white md:text-2xl">
          {feature.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-gray-300 md:text-base">
          {feature.description}
        </p>
        <ul className="mt-5 list-none space-y-2.5">
          {feature.bullets.map((bullet) => (
            <li
              key={bullet}
              className="flex items-start gap-2.5 text-sm text-gray-300"
            >
              <CheckCircle2
                className="mt-0.5 h-4 w-4 shrink-0 text-amber-400"
                aria-hidden="true"
              />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>

      <div
        className={`min-w-0 transition-all duration-500 ${
          reverse ? "lg:order-1" : "lg:order-2"
        } ${inView ? "opacity-100 translate-y-0" : "opacity-80 translate-y-1"}`}
      >
        <FeatureProductUI variant={feature.visual} />
      </div>
    </article>
  );
};

const FeaturesScroll = ({ features }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.7", "end 0.35"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 28,
    mass: 0.35,
  });

  const lineScale = useTransform(smoothProgress, [0, 1], [0, 1]);
  const tipTop = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);
  const tipOpacity = useTransform(
    smoothProgress,
    [0, 0.02, 0.98, 1],
    [0, 1, 1, 0.35]
  );

  return (
    <div ref={containerRef} className="relative">
      <div
        className="pointer-events-none absolute bottom-4 left-[0.6875rem] top-4 w-px -translate-x-1/2 sm:left-[0.9375rem] lg:left-1/2"
        aria-hidden="true"
      >
        <div className="absolute inset-0 rounded-full bg-white/10" />
        <motion.div
          className="absolute left-0 top-0 h-full w-full origin-top rounded-full bg-gradient-to-b from-amber-400 via-amber-400 to-orange-500 shadow-[0_0_18px_rgba(251,191,36,0.35)]"
          style={{ scaleY: lineScale }}
        />
        <motion.div
          className="absolute left-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-300 shadow-[0_0_14px_rgba(252,211,77,0.95)]"
          style={{ top: tipTop, opacity: tipOpacity }}
        />
      </div>

      <div className="relative space-y-14 md:space-y-20 lg:space-y-24">
        {features.map((feature) => (
          <FeatureBlock key={feature.id} feature={feature} />
        ))}
      </div>
    </div>
  );
};

export default FeaturesScroll;
