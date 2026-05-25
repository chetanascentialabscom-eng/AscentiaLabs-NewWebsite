import { motion } from "framer-motion";
import clsx from "clsx";
import { departments } from "../../data/jobs";

const FilterPill = ({ label, active, onClick }) => (
  <motion.button
    whileTap={{ scale: 0.96 }}
    whileHover={{ y: -1 }}
    transition={{ duration: 0.2 }}
    onClick={() => onClick(label)}
    className={clsx(
      "relative overflow-hidden px-4 py-2 rounded-full text-sm lg:text-[15px] 2xl:text-[17px] font-semibold border transition-all duration-300 cursor-pointer whitespace-nowrap backdrop-blur-xl",
      active
        ? "text-[#0a0f1a] border-transparent shadow-[0_0_30px_rgba(255,180,0,0.22)]"
        : "bg-white/[0.03] text-slate-300 border-white/10 hover:border-[#ffb400]/30 hover:text-[#ffb400] hover:bg-[#ffb400]/[0.04]",
    )}
    style={
      active
        ? {
            background: "linear-gradient(135deg, #ffb400 0%, #f47c00 100%)",
          }
        : {}
    }
  >
    {/* subtle glass shine */}
    {!active && (
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none" />
    )}

    <span className="relative z-10">{label}</span>
  </motion.button>
);

const CategoryFilters = ({ active, onChange }) => (
  <section className="relative overflow-hidden">
    {/* Background glow matching blog theme */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-blue-500/10 blur-3xl rounded-full" />

      <div className="absolute bottom-0 right-20 w-[200px] h-[200px] bg-amber-400/5 blur-3xl rounded-full" />
    </div>

    <div className="relative z-10 max-w-[820px] 2xl:max-w-[1000px] mx-auto px-6 lg:px-0 py-8">
      <div className="flex flex-wrap gap-3">
        {departments.map((dept) => (
          <FilterPill
            key={dept}
            label={dept}
            active={active === dept}
            onClick={onChange}
          />
        ))}
      </div>
    </div>

    {/* Smooth merge to next section */}
    <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-b from-transparent to-transparent pointer-events-none" />
  </section>
);

export default CategoryFilters;
