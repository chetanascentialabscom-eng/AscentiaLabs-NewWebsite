import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-[140px] pb-20">
      {/* SAME BLOG PAGE BACKGROUND FLOW */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Blue top glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-blue-500/10 blur-3xl rounded-full" />

        {/* Left blue glow */}
        <div className="absolute top-10 left-[-120px] w-[500px] h-[400px] bg-blue-500/10 blur-3xl rounded-full" />

        {/* Right amber glow */}
        <div className="absolute top-0 right-[-80px] w-[460px] h-[380px] bg-amber-400/5 blur-3xl rounded-full" />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 max-w-[820px] 2xl:max-w-[1000px] mx-auto px-6 lg:px-0">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <span
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs lg:text-sm 2xl:text-base font-bold tracking-widest uppercase backdrop-blur-xl"
            style={{
              background:
                "linear-gradient(135deg, rgba(255,180,0,0.15), rgba(244,122,0,0.08))",
              border: "1px solid rgba(255,180,0,0.25)",
              color: "#ffb400",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#ffb400] animate-pulse" />
            We're hiring!
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="mt-6 text-4xl sm:text-6xl lg:text-[72px] font-extrabold leading-[1.05] tracking-[-0.03em] text-white"
        >
          Be part of{" "}
          <span
            style={{
              background: "linear-gradient(90deg, #ffb400 0%, #f47c00 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            our mission
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.18 }}
          className="mt-6 text-[17px] lg:text-[19px] 2xl:text-[22px] text-blue-200/70 leading-[1.75] max-w-[560px] lg:max-w-[600px] font-normal"
        >
          We're looking for passionate people to join us on our mission. We
          value flat hierarchies, clear communication, and full ownership and
          responsibility.
        </motion.p>

        {/* Premium divider */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-10 h-px w-full origin-left"
          style={{
            background:
              "linear-gradient(90deg, rgba(255,180,0,0.35), rgba(56,139,253,0.18), transparent)",
          }}
        />
      </div>

      {/* SMOOTH MERGE TO NEXT SECTION */}
      {/* <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-transparent pointer-events-none" /> */}
    </section>
  );
};

export default Hero;
