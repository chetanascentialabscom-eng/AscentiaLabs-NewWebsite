import { useState, useEffect, useRef, useCallback } from "react";

const ChallengeCard = ({ item, index, compact = false }) => {
  const Icon = item.icon;
  return (
    <li className={compact ? "relative pb-4 last:pb-0 2xl:pb-5" : "relative pb-5 last:pb-0 2xl:pb-6"}>
      <article className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:border-amber-400/25 hover:bg-white/[0.05] md:p-6 2xl:p-7">
        <div className="mb-4 flex items-start gap-3.5 2xl:mb-5 2xl:gap-4">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 text-xs font-bold text-black shadow-sm shadow-amber-500/20 2xl:h-10 2xl:w-10 2xl:text-sm">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 2xl:h-10 2xl:w-10">
            <Icon size={17} className="text-amber-400 2xl:h-[18px] 2xl:w-[18px]" aria-hidden="true" />
          </div>
          <h3 className="min-w-0 flex-1 pt-1.5 text-base font-medium leading-snug text-white md:text-[17px] 2xl:pt-2 2xl:text-lg">
            {item.title}
          </h3>
        </div>

        {item.pain && (
          <p className="mb-3 text-sm leading-relaxed text-gray-400 md:text-[15px] 2xl:mb-4 2xl:text-base">
            {item.pain}
          </p>
        )}

        <div className="rounded-xl border border-amber-400/15 bg-amber-400/[0.06] px-4 py-3.5 2xl:px-5 2xl:py-4">
          <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-amber-400/90 2xl:text-[11px]">
            Solution
          </p>
          <p className="text-sm leading-relaxed text-gray-200 md:text-[15px] 2xl:text-base">
            {item.solution}
          </p>
        </div>
      </article>
    </li>
  );
};

/**
 * Desktop pin-scroll: right column height matches left heading block.
 * Page scroll drives the right list; when it finishes, the section unpins
 * and normal page scroll continues. Mobile: stacked static layout.
 */
const ChallengesPinnedSection = ({ items, title, subtitle }) => {
  const sectionRef = useRef(null);
  const stickyRef = useRef(null);
  const leftRef = useRef(null);
  const trackRef = useRef(null);
  const progressBarRef = useRef(null);
  const progressLabelRef = useRef(null);
  const rafRef = useRef(0);
  const [scrollSpan, setScrollSpan] = useState(0);
  const [panelHeight, setPanelHeight] = useState(0);
  const [isDesktop, setIsDesktop] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(min-width: 1024px)").matches,
  );
  const [isWideDesktop, setIsWideDesktop] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(min-width: 1536px)").matches,
  );

  const STICKY_TOP = 112; // lg:top-28 (7rem)

  useEffect(() => {
    const mqDesktop = window.matchMedia("(min-width: 1024px)");
    const mqWide = window.matchMedia("(min-width: 1536px)");
    const onChange = () => {
      setIsDesktop(mqDesktop.matches);
      setIsWideDesktop(mqWide.matches);
    };
    onChange();
    mqDesktop.addEventListener("change", onChange);
    mqWide.addEventListener("change", onChange);
    return () => {
      mqDesktop.removeEventListener("change", onChange);
      mqWide.removeEventListener("change", onChange);
    };
  }, []);

  const measure = useCallback(() => {
    if (!isDesktop) {
      setScrollSpan(0);
      setPanelHeight(0);
      return;
    }

    const left = leftRef.current;
    const track = trackRef.current;
    if (!left || !track) return;

    const leftHeight = Math.ceil(left.getBoundingClientRect().height);
    const maxPanel = Math.max(280, window.innerHeight - STICKY_TOP - 64);

    // 2xl: expand panel to use more viewport so the section feels proportional
    const minPanelWide = isWideDesktop
      ? Math.min(
          Math.max(560, Math.floor(window.innerHeight * 0.62)),
          maxPanel,
        )
      : 0;

    const targetHeight = isWideDesktop
      ? Math.max(leftHeight, minPanelWide)
      : leftHeight;

    const nextPanelHeight = Math.min(targetHeight, maxPanel);
    const nextSpan = Math.max(0, track.scrollHeight - nextPanelHeight);

    setPanelHeight((prev) =>
      Math.abs(prev - nextPanelHeight) > 1 ? nextPanelHeight : prev,
    );
    setScrollSpan((prev) => (Math.abs(prev - nextSpan) > 1 ? nextSpan : prev));
  }, [isDesktop, isWideDesktop]);

  useEffect(() => {
    measure();

    const left = leftRef.current;
    const track = trackRef.current;
    const sticky = stickyRef.current;
    if (!left || !track || !sticky) return undefined;

    const ro = new ResizeObserver(measure);
    ro.observe(left);
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

    if (!isDesktop || scrollSpan <= 0 || panelHeight <= 0) {
      track.style.transform = "";
      if (progressBarRef.current) progressBarRef.current.style.width = "0%";
      return undefined;
    }

    const update = () => {
      const section = sectionRef.current;
      const trackEl = trackRef.current;
      if (!section || !trackEl) return;

      const scrolled = STICKY_TOP - section.getBoundingClientRect().top;
      const progress = Math.min(1, Math.max(0, scrolled / scrollSpan));
      trackEl.style.transform = `translate3d(0, ${-progress * scrollSpan}px, 0)`;

      if (progressBarRef.current) {
        progressBarRef.current.style.width = `${progress * 100}%`;
      }
      if (progressLabelRef.current) {
        const active = Math.min(
          items.length - 1,
          Math.floor(progress * items.length),
        );
        progressLabelRef.current.textContent = `${String(active + 1).padStart(2, "0")} / ${String(items.length).padStart(2, "0")}`;
      }
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
  }, [isDesktop, scrollSpan, panelHeight, items.length]);

  const sectionStyle =
    isDesktop && panelHeight > 0 && scrollSpan > 0
      ? { height: `${panelHeight + scrollSpan}px` }
      : undefined;

  const stickyStyle =
    isDesktop && panelHeight > 0 ? { height: `${panelHeight}px` } : undefined;

  const list = (
    <ol
      ref={trackRef}
      className={
        isDesktop
          ? "list-none space-y-0 will-change-transform"
          : "list-none space-y-4"
      }
    >
      {items.map((c, i) => (
        <ChallengeCard key={i} item={c} index={i} compact={isDesktop} />
      ))}
    </ol>
  );

  const heading = (
    <div ref={leftRef} className="flex flex-col">
      <span className="mb-4 mt-8 inline-flex w-fit items-center rounded-full border border-amber-400/25 bg-amber-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-amber-300 2xl:mb-5 2xl:px-3.5 2xl:py-1.5 2xl:text-xs">
        {items.length} Key Challenges
      </span>
      <h2
        id="challenges-heading"
        className="mb-4 bg-gradient-to-r from-blue-400 to-white bg-clip-text text-3xl leading-tight font-medium text-transparent md:text-4xl 2xl:mb-5 2xl:text-[2.75rem] 2xl:leading-[1.15]"
      >
        {title}
      </h2>
      <p className="max-w-sm text-base leading-relaxed text-gray-400 2xl:max-w-md 2xl:text-lg 2xl:leading-relaxed">
        {subtitle}
      </p>

      {scrollSpan > 0 && (
        <div className="mt-8 border-t border-white/10 pt-6 2xl:mt-10 2xl:pt-7">
          <div className="mb-2.5 flex items-center justify-between text-xs text-gray-500 2xl:text-sm">
            <span className="uppercase tracking-wider">Scroll progress</span>
            <span ref={progressLabelRef} className="tabular-nums text-gray-400">
              01 / {String(items.length).padStart(2, "0")}
            </span>
          </div>
          <div
            className="h-1 overflow-hidden rounded-full bg-white/10 2xl:h-1.5"
            role="progressbar"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label="Challenge scroll progress"
          >
            <div
              ref={progressBarRef}
              className="h-full w-0 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 transition-[width] duration-150 ease-out"
            />
          </div>
          <p className="mt-3 text-xs leading-relaxed text-gray-500 2xl:mt-4 2xl:text-sm">
            Keep scrolling — the list updates as you move through each
            challenge.
          </p>
        </div>
      )}
    </div>
  );

  if (!isDesktop) {
    return (
      <section
        className="relative bg-black py-16 md:py-20"
        aria-labelledby="challenges-heading"
      >
        <div className="container relative z-10 mx-auto max-w-6xl px-4">
          <div className="mb-10">{heading}</div>
          {list}
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
        className="pointer-events-none absolute inset-0 opacity-40"
        aria-hidden="true"
      >
        <div className="absolute left-0 top-1/4 h-64 w-64 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-48 w-48 rounded-full bg-amber-500/10 blur-3xl" />
      </div>

      <div
        ref={stickyRef}
        style={stickyStyle}
        className="sticky top-28 flex items-stretch overflow-hidden"
      >
        <div className="container relative z-10 mx-auto grid h-full max-w-6xl grid-cols-12 items-center gap-10 px-4 lg:gap-12 xl:gap-14 2xl:max-w-7xl 2xl:gap-16 2xl:px-6">
          <aside className="col-span-4 flex flex-col justify-center pr-2 2xl:pr-4">
            {heading}
          </aside>

          <div className="relative col-span-8 h-full min-h-0 2xl:col-span-8">
            <div
              className="pointer-events-none absolute inset-x-0 top-0 z-10 h-10 bg-gradient-to-b from-black via-black/80 to-transparent 2xl:h-12"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-14 bg-gradient-to-t from-black via-black/80 to-transparent 2xl:h-16"
              aria-hidden="true"
            />
            <div className="relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] py-4 pl-5 pr-3 md:py-5 md:pl-7 md:pr-4 2xl:rounded-3xl 2xl:py-6 2xl:pl-8 2xl:pr-5">
              <div className="absolute inset-y-6 left-0 w-px bg-gradient-to-b from-transparent via-white/15 to-transparent 2xl:inset-y-8" />
              {list}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChallengesPinnedSection;
