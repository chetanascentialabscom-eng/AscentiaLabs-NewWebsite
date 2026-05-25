import { motion } from "framer-motion";

const CtaSection = () => {
  return (
    <section className="relative overflow-hidden py-28">
      {/* Center radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(255,180,0,0.07) 0%, rgba(56,139,253,0.05) 40%, transparent 70%)",
        }}
      />

      {/* Decorative rings */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ border: "1px solid rgba(255,180,0,0.06)" }}
      />
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ border: "1px solid rgba(255,255,255,0.04)" }}
      />

      <div className="relative z-10 max-w-[760px] lg:max-w-[560px] mx-auto px-6 text-center">
        {/* Icon */}
        {/* <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mx-auto mb-8 w-14 h-14 rounded-2xl flex items-center justify-center"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,180,0,0.2), rgba(244,122,0,0.1))",
            border: "1px solid rgba(255,180,0,0.3)",
            boxShadow: "0 0 28px rgba(255,180,0,0.15)",
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"
              fill="#ffb400"
            />
          </svg>
        </motion.div> */}

        {/* Quote text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="text-[22px] sm:text-[28px] lg:text-[32px] font-bold leading-[1.25] tracking-[-0.02em] text-white"
        >
          Untitled truly values work-life balance. We work hard and deliver, but
          at the end of the day you can{" "}
          <span
            style={{
              background: "linear-gradient(90deg, #ffb400, #f47c00)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            switch off.
          </span>
        </motion.p>

        {/* Avatar */}
      </div>
    </section>
  );
};

export default CtaSection;
