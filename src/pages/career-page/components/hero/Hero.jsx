import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative pt-[140px] pb-20 overflow-hidden">
      {/* Deep layered background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#09111f] via-[#071226] to-[#071226]" />

      {/* Radial glow — center top */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px]   h-[500px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(255,180,0,0.09) 0%, rgba(56,139,253,0.07) 40%, transparent 70%)",
        }}
      />

      {/* Blue glow left */}
      <div className="blob-blue absolute top-10 left-[-100px] w-[500px] h-[400px] pointer-events-none" />
      {/* Gold glow right */}
      <div className="blob-gold absolute top-0 right-[-80px] w-[460px] h-[380px] pointer-events-none" />

      {/* Grid lines overlay */}
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
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs lg:text-sm 2xl:text-base font-bold tracking-widest uppercase"
            style={{
              background:
                "linear-gradient(135deg, rgba(255,180,0,0.15), rgba(244,122,0,0.1))",
              border: "1px solid rgba(255,180,0,0.3)",
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
          className="mt-6 text-5xl sm:text-6xl lg:text-[72px] font-extrabold leading-[1.05] tracking-[-0.03em] text-white"
        >
          Be part of{" "}
          <span
            style={{
              background: "linear-gradient(90deg, #ffb400, #f47c00)",
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
          className="mt-6 text-[17px] lg:text-[19px] 2xl:text-[22px] text-slate-400 leading-[1.75] max-w-[560px] lg:max-w-[600px] font-normal"
        >
          We're looking for passionate people to join us on our mission. We
          value flat hierarchies, clear communication, and full ownership and
          responsibility.
        </motion.p>

        {/* Divider line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-10 h-px w-full origin-left"
          style={{
            background:
              "linear-gradient(90deg, rgba(255,180,0,0.4), rgba(56,139,253,0.2), transparent)",
          }}
        />
      </div>
    </section>
  );
};

export default Hero;
