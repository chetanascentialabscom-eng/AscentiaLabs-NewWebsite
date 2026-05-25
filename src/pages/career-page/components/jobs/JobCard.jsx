import { motion } from "framer-motion";
import { RiMapPinLine, RiTimeLine, RiArrowRightUpLine } from "react-icons/ri";

const Badge = ({ icon: Icon, label }) => (
  <span
    className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[12px] lg:text-[15px] 2xl:text-[17px] font-medium text-slate-300"
    style={{
      background: "rgba(255,255,255,0.05)",
      border: "1px solid rgba(255,255,255,0.1)",
    }}
  >
    <Icon className="w-3 h-3 text-[#ffb400]" />
    {label}
  </span>
);

const JobCard = ({ job, index }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.06 }}
      whileHover={{ y: -2 }}
      className="group relative rounded-2xl p-6 mb-4 cursor-pointer transition-all duration-300"
      style={{
        background: "rgba(255,255,255,0.035)",
        border: "1px solid rgba(255,255,255,0.07)",
        backdropFilter: "blur(12px)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.border = "1px solid rgba(255,180,0,0.25)";
        e.currentTarget.style.background = "rgba(255,180,0,0.04)";
        e.currentTarget.style.boxShadow =
          "0 0 32px rgba(255,180,0,0.07), 0 4px 24px rgba(0,0,0,0.3)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.border = "1px solid rgba(255,255,255,0.07)";
        e.currentTarget.style.background = "rgba(255,255,255,0.035)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      {/* Subtle top-left gradient accent */}
      <div
        className="absolute top-0 left-0 w-[180px] h-[60px] rounded-tl-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background:
            "radial-gradient(ellipse at 0% 0%, rgba(255,180,0,0.08), transparent 70%)",
        }}
      />

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 relative z-10">
        {/* Left */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 mb-2">
            <span
              className="text-[11px] lg:text-[13px] 2xl:text-[15px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded"
              style={{
                background: "rgba(255,180,0,0.12)",
                color: "#ffb400",
                border: "1px solid rgba(255,180,0,0.2)",
              }}
            >
              {job.department}
            </span>
          </div>
          <h3 className="text-[19px] lg:text-[22px] 2xl:text-[25px] font-bold text-white leading-snug tracking-tight mb-2">
            {job.title}
          </h3>
          <p className="text-[14px] lg:text-[16px] 2xl:text-[18px] text-slate-400 mb-4 leading-relaxed max-w-[520px]">
            {job.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {job.remote && <Badge icon={RiMapPinLine} label="100% remote" />}
            <Badge icon={RiTimeLine} label={job.type} />
          </div>
        </div>

        {/* Right: Apply */}
        <div className="flex-shrink-0">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm  font-bold transition-all duration-200"
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.12)",
              color: "#fff",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background =
                "linear-gradient(135deg,#ffb400,#f47c00)";
              e.currentTarget.style.color = "#0a0f1a";
              e.currentTarget.style.border = "1px solid transparent";
              e.currentTarget.style.boxShadow = "0 0 20px rgba(255,180,0,0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.06)";
              e.currentTarget.style.color = "#fff";
              e.currentTarget.style.border = "1px solid rgba(255,255,255,0.12)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            Apply
            <RiArrowRightUpLine className="w-4 h-4" />
          </a>
        </div>
      </div>
    </motion.article>
  );
};

export default JobCard;
