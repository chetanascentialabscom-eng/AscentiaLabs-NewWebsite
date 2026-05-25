import { useState, useMemo } from "react";
import Hero from "../career-page/components/hero/Hero";
import JobList from "../career-page/components/jobs/JobList";
import CtaSection from "../career-page/components/cta/CtaSection";
import TickerBanner from "../career-page/components/shared/TickerBanner";
import Footer from "../career-page/components/footer/Footer";
import { jobs } from "../career-page/data/jobs";
import CategoryFilters from "../career-page/components/filters/CategoryFilters";

const Careers = () => {
  const [activeFilter, setActiveFilter] = useState("View all");

  const filteredJobs = useMemo(() => {
    if (activeFilter === "View all") return jobs;
    return jobs.filter((job) => job.department === activeFilter);
  }, [activeFilter]);

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-950 to-black text-white overflow-hidden">
      <Hero />
      <CategoryFilters active={activeFilter} onChange={setActiveFilter} />
      <JobList jobs={filteredJobs} />
      <CtaSection />
      {/* <TickerBanner /> */}
      {/* <Footer /> */}
    </main>
  );
};

export default Careers;
