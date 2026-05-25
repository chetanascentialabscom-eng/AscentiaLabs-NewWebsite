import { motion } from "framer-motion";
import clsx from "clsx";
import { departments } from "../../data/jobs";

const FilterPill = ({ label, active, onClick }) => (
  <motion.button
    whileTap={{ scale: 0.95 }}
    onClick={() => onClick(label)}
    className={clsx(
      "px-4 py-2 rounded-full text-sm lg:text-[15px] 2xl:text-[17px]   font-semibold border transition-all duration-200 cursor-pointer whitespace-nowrap",
      active
        ? "text-[#0a0f1a] border-transparent shadow-[0_0_20px_rgba(255,180,0,0.35)]"
        : "bg-white/5 text-slate-300 border-white/10 hover:border-[#ffb400]/40 hover:text-[#ffb400] hover:bg-[#ffb400]/5",
    )}
    style={
      active ? { background: "linear-gradient(135deg, #ffb400, #f47c00)" } : {}
    }
  >
    {label}
  </motion.button>
);

const CategoryFilters = ({ active, onChange }) => (
  <div
    className="relative"
    style={{ background: "linear-gradient(180deg, #09111f 0%, #071226 100%)" }}
  >
    <div className="max-w-[820px] 2xl:max-w-[1000px] mx-auto px-6 lg:px-0 py-8">
      <div className="flex flex-wrap gap-2.5">
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
  </div>
);

export default CategoryFilters;
