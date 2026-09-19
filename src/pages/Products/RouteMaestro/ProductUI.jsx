/**
 * Dark SaaS UI mockups for RouteMaestro product visuals.
 * Decorative only — not interactive product surfaces.
 */

const WindowChrome = ({ title = "RouteMaestro", children, className = "" }) => (
  <div
    className={`overflow-hidden rounded-xl border border-white/15 bg-gray-950 shadow-2xl shadow-black/40 ${className}`}
    role="img"
    aria-label={title}
  >
    <div className="flex items-center justify-between border-b border-white/10 bg-black/50 px-3 py-2.5">
      <div className="flex items-center gap-1.5" aria-hidden="true">
        <span className="h-2 w-2 rounded-full bg-red-400/80" />
        <span className="h-2 w-2 rounded-full bg-amber-400/80" />
        <span className="h-2 w-2 rounded-full bg-emerald-400/80" />
      </div>
      <span className="text-[10px] font-medium uppercase tracking-[0.14em] text-gray-500">
        {title}
      </span>
      <span className="rounded-full border border-amber-400/30 bg-amber-400/10 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-amber-300">
        Live
      </span>
    </div>
    <div className="bg-gradient-to-br from-gray-950 via-slate-950 to-black p-3 sm:p-4">
      {children}
    </div>
  </div>
);

const DayRow = ({ day, city, meta, active = false }) => (
  <div
    className={`flex items-start gap-3 rounded-lg border px-3 py-2.5 ${
      active
        ? "border-amber-400/40 bg-amber-400/10"
        : "border-white/10 bg-black/30"
    }`}
  >
    <div className="min-w-[3.25rem]">
      <p className="text-[10px] font-semibold uppercase tracking-wider text-amber-400">
        {day}
      </p>
      <p className="text-xs font-medium text-white">{city}</p>
    </div>
    <p className="text-[11px] leading-relaxed text-gray-400">{meta}</p>
  </div>
);

export const HeroProductUI = () => (
  <WindowChrome title="RouteMaestro · Trip Planner">
    <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
      <div>
        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-gray-500">
          Trip Planner
        </p>
        <p className="mt-1 text-sm font-semibold text-white">
          London → Dubai → Singapore → Tokyo
        </p>
      </div>
      <button
        type="button"
        tabIndex={-1}
        className="rounded-lg bg-gradient-to-r from-amber-400 to-orange-500 px-3 py-1.5 text-[11px] font-semibold text-black"
        aria-hidden="true"
      >
        + New Trip
      </button>
    </div>

    <div className="mb-3 flex flex-wrap gap-1.5">
      {["AI Generated", "12 Days", "4 Cities", "Budget Aware"].map((tag) => (
        <span
          key={tag}
          className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] text-gray-300"
        >
          {tag}
        </span>
      ))}
    </div>

    <div className="space-y-2">
      <DayRow
        day="Day 01"
        city="London"
        meta="Flight · Hotel · Activities"
        active
      />
      <DayRow day="Day 04" city="Dubai" meta="Flight · Hotel · Experiences" />
      <DayRow day="Day 07" city="Singapore" meta="Hotel · Activities" />
      <DayRow day="Day 10" city="Tokyo" meta="Flight · Hotel · Transfers" />
    </div>

    <div className="mt-3 flex items-center justify-between rounded-lg border border-white/10 bg-blue-950/40 px-3 py-2.5">
      <div>
        <p className="text-[10px] uppercase tracking-wider text-gray-500">
          AI Recommendation
        </p>
        <p className="text-xs text-gray-200">Optimize Dubai stay by 1 night</p>
      </div>
      <span className="rounded-md border border-amber-400/40 px-2 py-1 text-[10px] font-medium text-amber-300">
        Create Package
      </span>
    </div>
  </WindowChrome>
);

export const FeatureProductUI = ({ variant = "itinerary" }) => {
  if (variant === "multicity") {
    return (
      <WindowChrome title="Multi-City Routing">
        <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-amber-400">
          Route Map
        </p>
        <div className="mb-3 flex flex-wrap items-center gap-2 text-xs text-white">
          {["LON", "DXB", "SIN", "TYO"].map((code, i) => (
            <span key={code} className="flex items-center gap-2">
              <span className="rounded-md border border-amber-400/40 bg-amber-400/10 px-2 py-1 font-semibold text-amber-300">
                {code}
              </span>
              {i < 3 && <span className="text-gray-600">→</span>}
            </span>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-2">
          {[
            ["Segment 1", "LON → DXB · 7h 15m"],
            ["Segment 2", "DXB → SIN · 7h 40m"],
            ["Segment 3", "SIN → TYO · 6h 55m"],
            ["Total", "12 days · 3 transfers"],
          ].map(([label, value]) => (
            <div
              key={label}
              className="rounded-lg border border-white/10 bg-black/40 p-2.5"
            >
              <p className="text-[10px] text-gray-500">{label}</p>
              <p className="mt-1 text-xs text-gray-200">{value}</p>
            </div>
          ))}
        </div>
      </WindowChrome>
    );
  }

  if (variant === "packages") {
    return (
      <WindowChrome title="Dynamic Package">
        <div className="mb-3 flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold text-white">Asia Circuit Package</p>
            <p className="text-[11px] text-gray-400">4 cities · Ready to present</p>
          </div>
          <span className="text-sm font-semibold text-amber-400">$4,280</span>
        </div>
        <ul className="space-y-2">
          {[
            ["Flights", "3 segments included"],
            ["Hotels", "11 nights curated"],
            ["Activities", "8 experiences"],
            ["Transfers", "Airport + city"],
          ].map(([title, meta]) => (
            <li
              key={title}
              className="flex items-center justify-between rounded-lg border border-white/10 bg-black/30 px-3 py-2"
            >
              <span className="text-xs text-white">{title}</span>
              <span className="text-[11px] text-gray-400">{meta}</span>
            </li>
          ))}
        </ul>
      </WindowChrome>
    );
  }

  if (variant === "booking") {
    return (
      <WindowChrome title="Booking Workflow">
        <ol className="space-y-2">
          {[
            ["01", "Itinerary confirmed", "done"],
            ["02", "Services selected", "done"],
            ["03", "Package assembled", "active"],
            ["04", "Ready to book", "pending"],
          ].map(([step, label, state]) => (
            <li
              key={step}
              className={`flex items-center gap-3 rounded-lg border px-3 py-2.5 ${
                state === "active"
                  ? "border-amber-400/40 bg-amber-400/10"
                  : "border-white/10 bg-black/30"
              }`}
            >
              <span
                className={`text-xs font-semibold ${
                  state === "pending" ? "text-gray-500" : "text-amber-400"
                }`}
              >
                {step}
              </span>
              <span className="text-xs text-gray-200">{label}</span>
            </li>
          ))}
        </ol>
      </WindowChrome>
    );
  }

  if (variant === "recommendations") {
    return (
      <WindowChrome title="AI Recommendations">
        <div className="space-y-2">
          {[
            ["Boutique Stay · Dubai Marina", "Matches leisure preference"],
            ["Evening Desert Experience", "High engagement signal"],
            ["SIN → TYO morning departure", "Best connection window"],
          ].map(([title, meta]) => (
            <div
              key={title}
              className="rounded-lg border border-white/10 bg-black/30 p-3"
            >
              <p className="text-xs font-medium text-white">{title}</p>
              <p className="mt-1 text-[11px] text-gray-400">{meta}</p>
            </div>
          ))}
        </div>
      </WindowChrome>
    );
  }

  if (variant === "dashboard") {
    return (
      <WindowChrome title="Operations Dashboard">
        <div className="mb-3 grid grid-cols-3 gap-2">
          {[
            ["Active Trips", "24"],
            ["Packages", "18"],
            ["Pending", "6"],
          ].map(([label, value]) => (
            <div
              key={label}
              className="rounded-lg border border-white/10 bg-black/40 p-2.5 text-center"
            >
              <p className="text-sm font-semibold text-amber-400">{value}</p>
              <p className="mt-0.5 text-[10px] text-gray-500">{label}</p>
            </div>
          ))}
        </div>
        <div className="space-y-2">
          {["Agency pipeline review", "Package markup policies", "Team booking queue"].map(
            (row) => (
              <div
                key={row}
                className="rounded-lg border border-white/10 bg-black/30 px-3 py-2 text-xs text-gray-300"
              >
                {row}
              </div>
            )
          )}
        </div>
      </WindowChrome>
    );
  }

  // default itinerary
  return (
    <WindowChrome title="AI Itinerary">
      <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-amber-400">
        AI Generated Itinerary
      </p>
      <div className="space-y-2">
        <DayRow day="Day 01" city="London" meta="Arrival · City orientation" active />
        <DayRow day="Day 02" city="London" meta="Museum circuit · Evening dining" />
        <DayRow day="Day 04" city="Dubai" meta="Transit · Marina stay" />
        <DayRow day="Day 07" city="Singapore" meta="Harbor district · Gardens" />
      </div>
    </WindowChrome>
  );
};

export const ScreenProductUI = ({ tab = "planner" }) => {
  const map = {
    planner: "dashboard",
    itinerary: "itinerary",
    packages: "packages",
    booking: "booking",
  };
  return <FeatureProductUI variant={map[tab] || "itinerary"} />;
};

export default HeroProductUI;
