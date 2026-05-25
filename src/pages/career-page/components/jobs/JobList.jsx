import { AnimatePresence, motion } from "framer-motion";
import JobCard from "./JobCard";
import { useConsultation } from "../../../../contexts/ConsultationContext";

const JobList = ({ jobs }) => {
  const { openConsultation } = useConsultation();
  return (
    <div
      className="relative"
      style={{
        background: "linear-gradient(180deg, #071226 0%, #08172d 100%)",
      }}
    >
      <div className="max-w-[820px] 2xl:max-w-[1000px] mx-auto px-6 lg:px-0 pb-20 pt-4">
        <AnimatePresence mode="wait">
          {jobs.length > 0 ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="relative overflow-hidden py-28"
            >
              {/* SAME CTA BACKGROUND GLOW */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse at 50% 50%, rgba(255,180,0,0.07) 0%, rgba(56,139,253,0.05) 40%, transparent 70%)",
                }}
              />

              {/* SAME CTA RINGS */}
              <div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
                style={{ border: "1px solid rgba(255,180,0,0.06)" }}
              />

              <div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full pointer-events-none"
                style={{ border: "1px solid rgba(255,255,255,0.04)" }}
              />

              <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
                {/* Icon */}
                <div
                  className="mx-auto mb-8 w-20 h-20 rounded-3xl flex items-center justify-center"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(255,180,0,0.2), rgba(244,122,0,0.1))",
                    border: "1px solid rgba(255,180,0,0.3)",
                    boxShadow: "0 0 28px rgba(255,180,0,0.15)",
                  }}
                >
                  <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"
                      fill="#ffb400"
                    />
                  </svg>
                </div>

                {/* Heading */}
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-[-0.02em]">
                  No open positions right now
                </h2>

                {/* Description */}
                <p className="text-blue-200/70 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
                  We’re not actively hiring in this category at the moment, but
                  we’re always looking for exceptional talent to join our team
                  in the future.
                </p>

                {/* Button */}
              </div>

              {/* SMOOTH FOOTER MERGE */}
              {/* <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-b from-transparent via-slate-950/30 to-black pointer-events-none" /> */}
            </motion.div>
          ) : (
            <motion.div
              key="list"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col"
            >
              {jobs.map((job, i) => (
                <JobCard key={job.id} job={job} index={i} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default JobList;
