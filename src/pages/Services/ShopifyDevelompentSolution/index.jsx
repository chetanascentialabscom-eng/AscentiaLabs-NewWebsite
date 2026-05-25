import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  ShoppingBag,
  Zap,
  Layers,
  ArrowRight,
  CheckCircle2,
  Globe,
  Shield,
  TrendingUp,
  Users,
  Star,
  ChevronDown,
  Code2,
  Palette,
  Plug,
  Search,
  BarChart3,
  Rocket,
  Clock,
  Award,
  MessageSquare,
  DollarSign,
  Package,
  RefreshCw,
  Lock,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  ChevronRight,
  ShoppingCart,
  Store,
  Gauge,
  Repeat,
  Smartphone,
  Cpu,
} from "lucide-react";

// ─── Design Tokens ────────────────────────────────────────────────────────────
const ORANGE = "#f58220";
const ORANGE_LIGHT = "#ff9a3c";

// ─── Fade-up animation helper ─────────────────────────────────────────────────
function FadeUp({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── Section wrapper with smooth gradient merge ───────────────────────────────
function Section({ children, className = "", id = "" }) {
  return (
    <section id={id} className={`relative overflow-hidden ${className}`}>
      {children}
    </section>
  );
}

// ─── Ambient glow blob ────────────────────────────────────────────────────────
function GlowBlob({ className = "" }) {
  return (
    <div
      className={`absolute rounded-full pointer-events-none ${className}`}
      style={{ filter: "blur(90px)", opacity: 0.18 }}
    />
  );
}

// ─── Glass Card ───────────────────────────────────────────────────────────────
function GlassCard({ children, className = "", hoverGlow = false }) {
  return (
    <motion.div
      whileHover={
        hoverGlow ? { y: -4, boxShadow: `0 0 32px 0 ${ORANGE}22` } : { y: -2 }
      }
      transition={{ duration: 0.25 }}
      className={`
        relative rounded-2xl border border-white/10
        bg-white/5 backdrop-blur-lg
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}

// ─── Orange badge pill ────────────────────────────────────────────────────────
function BadgePill({ icon: Icon, label }) {
  return (
    <span
      className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs lg:text-[17px] 2xl:text-[20px] font-semibold tracking-widest uppercase"
      style={{
        background: `${ORANGE}18`,
        borderColor: `${ORANGE}44`,
        color: ORANGE,
      }}
    >
      {Icon && <Icon size={13} />}
      {label}
    </span>
  );
}

// ─── Section heading block ────────────────────────────────────────────────────
function SectionHeading({ badge, badgeIcon, title, subtitle, center = true }) {
  return (
    <FadeUp
      className={
        center
          ? "text-center mx-auto max-w-2xl lg:max-w-5xl 2xl:max-w-6xl mb-14"
          : "mb-12"
      }
    >
      {badge && (
        <div className={center ? "flex justify-center mb-4" : "mb-4"}>
          <BadgePill icon={badgeIcon} label={badge} />
        </div>
      )}
      <h2 className="text-[25px] md:text-4xl 2xl:text-[44px]  font-extrabold text-white leading-tight mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-slate-400 text-[15px] lg:text-[17px] 2xl:text-[23px]  leading-relaxed">
          {subtitle}
        </p>
      )}
    </FadeUp>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// NAVBAR
// ─────────────────────────────────────────────────────────────────────────────
function Navbar() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/8"
      style={{
        background: "rgba(10,14,26,0.85)",
        backdropFilter: "blur(18px)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-14">
        <span className="font-extrabold text-white text-lg tracking-tight">
          Ascentia<span style={{ color: ORANGE }}>labs</span>
        </span>
        <div className="hidden md:flex items-center gap-8 text-sm text-slate-400">
          {[
            "Home",
            "About Us",
            "Services",
            "Industries",
            "Resources",
            "Contact",
          ].map((n) => (
            <a key={n} href="#" className="hover:text-white transition-colors">
              {n}
            </a>
          ))}
        </div>
        <button
          className="text-sm font-semibold px-5 py-2 rounded-lg transition-all"
          style={{ background: ORANGE, color: "#fff" }}
        >
          Get In Touch
        </button>
      </div>
    </nav>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// HERO
// ─────────────────────────────────────────────────────────────────────────────
const heroCards = [
  {
    icon: Store,
    label: "Custom Store Design",
    sub: "Pixel-perfect Shopify themes",
  },
  { icon: Gauge, label: "CRO Optimised", sub: "Built to convert & sell" },
  { icon: Plug, label: "App Integrations", sub: "Payments, CRM & more" },
  { icon: Clock, label: "30-Day Delivery", sub: "Guaranteed go-live" },
];

function Hero() {
  return (
    <Section
      id="hero"
      className="min-h-screen flex items-center pt-14 2xl:pt-2"
      style={{
        background:
          "linear-gradient(135deg, #090d1a 0%, #0e1a36 40%, #071228 70%, #090d1a 100%)",
      }}
    >
      {/* Ambient blobs */}
      <GlowBlob className="w-[500px] h-[500px] -top-20 -right-20 bg-blue-600" />
      <GlowBlob className="w-[400px] h-[400px] bottom-10 left-10 bg-blue-800" />
      <GlowBlob
        className="w-[260px] h-[260px] top-1/3 right-1/3 bg-orange-500"
        style={{ opacity: 0.07 }}
      />

      <div className="relative z-10 max-w-7xl  mx-auto px-6 py-20 2xl:py-2 grid md:grid-cols-2 gap-16 items-center w-full">
        {/* LEFT */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <BadgePill icon={ShoppingBag} label="Shopify Store Partner" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-5 text-4xl md:text-5xl lg:text-6xl  font-black text-white leading-[1.08] tracking-tight"
          >
            Your <span style={{ color: ORANGE }}>Shopify Store</span>
            ,<br />
            Live & Selling
            <br />
            <span
              className="relative inline-block"
              style={{
                background: `linear-gradient(90deg, ${ORANGE}, ${ORANGE_LIGHT})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              in 30 Days
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-slate-400 text-[15px] lg:text-[17px] 2xl:text-[19px] leading-relaxed max-w-lg"
          >
            At Ascentia Labs, we design, develop, and launch fully custom
            Shopify stores — from brand identity to conversion-optimised
            checkout — so you can focus entirely on growing your business.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-8 flex items-center gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-2 lg:px-5 py-3.5 rounded-xl font-bold text-white text-sm lg:text-[16px] 2xl:text-[19px] transition-all"
              style={{
                background: `linear-gradient(135deg, ${ORANGE}, ${ORANGE_LIGHT})`,
              }}
            >
              Get Free Consultation <ArrowRight size={16} />
            </motion.button>
            <button className="text-sm lg:text-[16px] 2xl:text-[19px] text-slate-400 hover:text-white transition-colors flex items-center gap-1">
              View Our Work <ChevronRight size={15} />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-10 flex items-center gap-6"
          >
            {[
              ["12+", "Stores Built"],
              ["100%", "On-Time Delivery"],
              ["4.6★", "Client Rating"],
            ].map(([num, lbl]) => (
              <div key={lbl}>
                <div className="text-xl lg:text-[20px] 2xl:text-[23px] font-extrabold text-white">
                  {num}
                </div>
                <div className="text-[14px] lg:text-[16px] 2xl:text-[19px] text-slate-400 mt-0.5">
                  {lbl}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT — floating hero cards */}
        <div className="grid grid-cols-2 gap-4">
          {heroCards.map(({ icon: Icon, label, sub }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.1 }}
            >
              <GlassCard hoverGlow className="p-5 flex flex-col gap-3 h-full">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center"
                  style={{ background: `${ORANGE}1a` }}
                >
                  <Icon size={22} style={{ color: ORANGE }} />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm lg:text-[16px] 2xl:text-[20px]">
                    {label}
                  </p>
                  <p className="text-slate-400 text-[14px] lg:text-[16px] 2xl:text-[20px]">
                    {sub}
                  </p>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// STATS BAR
// ─────────────────────────────────────────────────────────────────────────────
const stats = [
  { num: "7+", label: "Business Years" },
  { num: "35+", label: "Projects Delivered" },
  { num: "20+", label: "Shopify Stores Built" },
  { num: "2+", label: "Countries Served" },
];

function StatsBar() {
  return (
    <Section
      style={{
        background: "linear-gradient(180deg, #0e1a36 0%, #0b1428 100%)",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-8 lg:py-12 2xl:py-5 ">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
          {stats.map(({ num, label }, i) => (
            <FadeUp key={label} delay={i * 0.08}>
              <div
                className={`text-center px-6 py-4 ${i < stats.length - 1 ? "border-r border-white/8" : ""}`}
              >
                <div
                  className="text-4xl md:text-5xl font-black"
                  style={{ color: ORANGE }}
                >
                  {num}
                </div>
                <div className="text-slate-400 text-sm lg:text-[16px] 2xl:text-[20px] mt-2 tracking-wide">
                  {label}
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </Section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// SERVICES TABS
// ─────────────────────────────────────────────────────────────────────────────
const services = [
  {
    id: "setup",
    tab: "Store Setup",
    icon: Store,
    title: "Complete Shopify Store Setup & Launch",
    desc: "We configure everything from scratch — products, collections, payment gateways, shipping rules, taxes, and domain — so your store is fully operational and ready to generate revenue from day one.",
    features: [
      "Complete store configuration & theme setup",
      "Product catalogue, collections & variant management",
      "Payment gateways: Razorpay, Stripe, PayPal & more",
      "Shipping zones, tax rules & discount configuration",
      "Domain linking, SSL & post-launch quality assurance",
    ],
    tech: [
      { icon: Store, label: "Shopify & Shopify Plus" },
      { icon: Code2, label: "Custom Liquid Themes" },
      { icon: Smartphone, label: "Mobile-First Design" },
      { icon: Lock, label: "PCI-Compliant Payments" },
      { icon: Search, label: "SEO Foundation" },
      { icon: BarChart3, label: "Analytics & Tracking" },
    ],
  },
  {
    id: "design",
    tab: "Custom Design",
    icon: Palette,
    title: "Brand-Aligned Custom Shopify Design",
    desc: "Our designers craft pixel-perfect Shopify themes that reflect your brand identity, delight customers, and are engineered for conversion — not just aesthetics.",
    features: [
      "High-fidelity wireframes & brand-aligned mockups",
      "Custom Liquid theme development from scratch",
      "Fully responsive — mobile, tablet & desktop",
      "Micro-interactions & animation for engagement",
      "A/B tested layouts to maximise conversion rate",
    ],
    tech: [
      { icon: Palette, label: "Custom Liquid" },
      { icon: Layers, label: "Figma to Shopify" },
      { icon: Smartphone, label: "Responsive UI" },
      { icon: Zap, label: "Performance First" },
      { icon: Star, label: "Brand Consistency" },
      { icon: Gauge, label: "CRO Design Patterns" },
    ],
  },
  {
    id: "migration",
    tab: "Migration",
    icon: RefreshCw,
    title: "Zero-Downtime Platform Migration to Shopify",
    desc: "Migrate from WooCommerce, Magento, BigCommerce, or any custom platform with zero data loss, preserved SEO equity, and no downtime — so your revenue never stops.",
    features: [
      "Full product, customer & order history migration",
      "301 redirect mapping to preserve SEO rankings",
      "Zero-downtime cutover strategy & execution",
      "Payment method & subscription migration",
      "Post-migration audit, QA & performance check",
    ],
    tech: [
      { icon: RefreshCw, label: "WooCommerce" },
      { icon: Package, label: "Magento" },
      { icon: Globe, label: "BigCommerce" },
      { icon: Cpu, label: "Custom Platforms" },
      { icon: Shield, label: "Data Integrity" },
      { icon: Search, label: "SEO Preservation" },
    ],
  },
  {
    id: "integrations",
    tab: "Integrations",
    icon: Plug,
    title: "Shopify App & Third-Party Integrations",
    desc: "We connect your Shopify store to every tool your business needs — CRM, ERP, email marketing, analytics, loyalty programs, and fulfilment platforms — creating one seamless ecosystem.",
    features: [
      "CRM integration: HubSpot, Salesforce, Zoho",
      "Email marketing: Klaviyo, Mailchimp, Omnisend",
      "ERP & inventory: Inventory Planner, Cin7",
      "Review & loyalty apps: Yotpo, Okendo, Smile.io",
      "Custom Shopify App development via REST & GraphQL API",
    ],
    tech: [
      { icon: Plug, label: "REST & GraphQL API" },
      { icon: Users, label: "CRM Platforms" },
      { icon: MessageSquare, label: "Email Marketing" },
      { icon: Package, label: "ERP / Inventory" },
      { icon: Star, label: "Loyalty Programs" },
      { icon: Cpu, label: "Custom Apps" },
    ],
  },
];

function ServicesSection() {
  const [active, setActive] = useState(0);
  const svc = services[active];

  return (
    <Section
      id="services"
      style={{
        background: "linear-gradient(180deg, #0b1428 0%, #090d1a 100%)",
      }}
    >
      <GlowBlob className="w-[500px] h-[500px] top-0 left-1/2 -translate-x-1/2 bg-blue-700" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-17 lg:py-24 2xl:py-29">
        <SectionHeading
          badge="Our Shopify Services"
          badgeIcon={ShoppingBag}
          title="Complete Shopify Solutions Designed for E-commerce Success"
          subtitle="End-to-end store development tailored specifically to your business model and target audience."
        />

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {services.map(({ id, tab, icon: Icon }, i) => (
            <motion.button
              key={id}
              whileTap={{ scale: 0.96 }}
              onClick={() => setActive(i)}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm lg:text-[14px] 2xl:text-[18px] font-semibold border transition-all duration-300 ${
                active === i
                  ? "text-white border-transparent"
                  : "text-slate-400 border-white/10 hover:text-white"
              }`}
              style={
                active === i ? { background: ORANGE, borderColor: ORANGE } : {}
              }
            >
              <Icon size={15} /> {tab}
            </motion.button>
          ))}
        </div>

        {/* Content panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="grid md:grid-cols-2 gap-12 items-start"
          >
            {/* Left */}
            <div>
              <h3 className="text-[28px] lg:text-[30px] 2xl:text-[35px]  font-bold text-white mb-4">
                {svc.title}
              </h3>
              <p className="text-slate-400 text-[15px] lg:text-[16px] 2xl:text-[20px] text-left leading-relaxed mb-8">
                {svc.desc}
              </p>
              <ul className="space-y-3">
                {svc.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-3 text-[15px] lg:text-[16px] 2xl:text-[20px] text-slate-300"
                  >
                    <CheckCircle2
                      size={16}
                      style={{ color: ORANGE }}
                      className="mt-0.5 shrink-0"
                    />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right — tech grid */}
            <div className="grid grid-cols-2 gap-3">
              {svc.tech.map(({ icon: Icon, label }) => (
                <GlassCard
                  key={label}
                  hoverGlow
                  className="p-4 flex flex-col items-center gap-2 text-center"
                >
                  <Icon size={26} style={{ color: ORANGE }} />
                  <span className="text-[15px] lg:text-[16px] 2xl:text-[21px] text-slate-400 leading-tight">
                    {label}
                  </span>
                </GlassCard>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </Section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// PROMOTIONAL SPLIT (Scale section)
// ─────────────────────────────────────────────────────────────────────────────
const checklist = [
  "Full Shopify Store Setup & Launch Management",
  "Custom Theme Design & Brand Integration",
  "Third-Party App & API Integrations",
  "Expert Team: Designers, Devs & Strategists",
  "Flexible Packages for Startups & Enterprises",
];

function PromoSplit() {
  return (
    <Section
      style={{
        background:
          "linear-gradient(180deg, #090d1a 0%, #0c1530 50%, #090d1a 100%)",
      }}
    >
      <GlowBlob className="w-[500px] h-[500px] -right-40 top-1/2 -translate-y-1/2 bg-blue-700" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
        {/* LEFT */}
        <FadeUp>
          <BadgePill icon={TrendingUp} label="Scale Your E-commerce" />
          <h2 className="mt-5 text-3xl md:text-4xl lg:text-[35px] 2xl:text-[40px] font-black text-white leading-tight">
            Why Growing Brands Choose{" "}
            <span style={{ color: ORANGE }}>Ascentia Labs</span> for Shopify
          </h2>
          <p className="mt-4 text-slate-400 leading-relaxed mb-8">
            Here's why innovative brands trust us as their dedicated Shopify
            development partner — from first MVP to enterprise-scale
            storefronts.
          </p>
          <ul className="space-y-4">
            {checklist.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 text-slate-300 text-[15px] lg:text-[16px] 2xl:text-[20px]"
              >
                <span
                  className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: `${ORANGE}1a` }}
                >
                  <CheckCircle2 size={15} style={{ color: ORANGE }} />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </FadeUp>

        {/* RIGHT — CTA card */}
        <FadeUp delay={0.15}>
          <GlassCard
            className="p-8 text-center"
            style={{
              background:
                "linear-gradient(135deg, rgba(245,130,32,0.06), rgba(24,95,165,0.08))",
            }}
          >
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
              style={{ background: `${ORANGE}1a` }}
            >
              <Rocket size={30} style={{ color: ORANGE }} />
            </div>

            <div
              className="inline-block text-4xl font-black px-6 py-2 rounded-xl text-white mb-1"
              style={{
                background: `linear-gradient(135deg, ${ORANGE}, ${ORANGE_LIGHT})`,
              }}
            >
              30 Days
            </div>
            <p className="text-slate-400 text-[13px] lg:text-[14px] 2xl:text-[18px] mb-6 mt-2">
              From brief to fully live Shopify store
            </p>

            <h3 className="text-white font-bold text-[20px] lg:text-[22px] 2xl:text-[25px] mb-3">
              Ready to Launch Your Store?
            </h3>
            <p className="text-slate-400 text-[15px] lg:text-[16px] 2xl:text-[20px] mb-6 leading-relaxed">
              Join 50+ brands who launched their Shopify stores with Ascentia
              Labs — on time, on brand, and on budget.
            </p>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full py-3.5 rounded-xl text-white font-bold text-[15px] lg:text-[16px] 2xl:text-[20px] flex items-center justify-center gap-2"
              style={{
                background: `linear-gradient(135deg, ${ORANGE}, ${ORANGE_LIGHT})`,
              }}
            >
              Start Your Store Journey <ArrowRight size={16} />
            </motion.button>
          </GlassCard>
        </FadeUp>
      </div>
    </Section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// WHY CHOOSE US
// ─────────────────────────────────────────────────────────────────────────────
const whyCards = [
  {
    icon: ShoppingCart,
    title: "Shopify-Focused Expertise",
    desc: "Years of hands-on experience building and scaling Shopify stores across fashion, electronics, beauty, food, and D2C brands.",
  },
  {
    icon: Lock,
    title: "Security-First Approach",
    desc: "PCI-compliant payment flows, secure customer data handling, and SSL-certified checkout experiences on every store we build.",
  },
  {
    icon: TrendingUp,
    title: "Scalable & Future-Ready",
    desc: "From 10 to 10,000 orders a day — our architecture scales with your growth without costly redesigns or technical debt.",
  },
  {
    icon: Globe,
    title: "End-to-End Ownership",
    desc: "We manage everything from domain setup and product uploads to payment gateway activation and post-launch support.",
  },
  {
    icon: MessageSquare,
    title: "Transparent Communication",
    desc: "Regular progress updates, milestone check-ins, and a dedicated project manager — so you always know exactly where things stand.",
  },
  {
    icon: DollarSign,
    title: "Cost-Effective Solutions",
    desc: "Startup-friendly pricing with flexible engagement models, designed to maximise ROI and minimise burn rate from day one.",
  },
];

function WhyChooseUs() {
  return (
    <Section
      style={{
        background: "linear-gradient(180deg, #090d1a 0%, #0b1428 100%)",
      }}
    >
      <GlowBlob className="w-[500px] h-[500px] -left-40 bottom-0 bg-blue-800" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        <SectionHeading
          badge="Why Ascentia Labs?"
          badgeIcon={Award}
          title="Partner With Shopify Experts Who Understand E-commerce"
          subtitle="We don't just build stores — we build revenue-generating machines tailored to your audience and market."
        />

        <div className="grid md:grid-cols-3 gap-5">
          {whyCards.map(({ icon: Icon, title, desc }, i) => (
            <FadeUp key={title} delay={i * 0.07}>
              <GlassCard hoverGlow className="p-6 h-full">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `${ORANGE}1a` }}
                >
                  <Icon size={22} style={{ color: ORANGE }} />
                </div>
                <h3 className="text-white font-bold text-base lg:text-[16px] 2xl:text-[22px] mb-2">
                  {title}
                </h3>
                <p className="text-slate-400 text-[15px] lg:text-[16px] 2xl:text-[20px] leading-relaxed">
                  {desc}
                </p>
              </GlassCard>
            </FadeUp>
          ))}
        </div>
      </div>
    </Section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// TIMELINE — 30-Day Process
// ─────────────────────────────────────────────────────────────────────────────
const timelineSteps = [
  {
    day: "Day 1–3",
    title: "Discovery & Strategy",
    desc: "Audit requirements, define store architecture, map user journeys, and finalise the scope and tech stack.",
  },
  {
    day: "Day 4–8",
    title: "Design & Brand Setup",
    desc: "Custom wireframes and high-fidelity mockups aligned to your brand guidelines. Client sign-off before dev begins.",
  },
  {
    day: "Day 9–20",
    title: "Development & Integration",
    desc: "Full Shopify store build — theme coding, product upload, payment gateways, shipping rules, and third-party integrations.",
  },
  {
    day: "Day 21–26",
    title: "QA & Performance Testing",
    desc: "Cross-device testing, speed optimisation, checkout flow verification, and SEO meta setup before client review.",
  },
  {
    day: "Day 27–30",
    title: "Launch & Handover",
    desc: "Go-live deployment, domain linking, analytics activation, and team training — your store is live and selling on Day 30.",
  },
];

function Timeline() {
  return (
    <Section
      style={{
        background: "linear-gradient(180deg, #0b1428 0%, #090d1a 100%)",
      }}
    >
      <GlowBlob className="w-[400px] h-[400px] right-0 top-1/2 -translate-y-1/2 bg-blue-700" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-24">
        <SectionHeading
          badge="30-Day Delivery Roadmap"
          badgeIcon={Clock}
          title="Your Shopify Store, Built & Launched in 30 Days"
          subtitle="A proven, structured process that takes you from brief to fully live — no delays, no surprises."
        />

        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-[27px] top-4 bottom-4 w-0.5 md:left-[55px]"
            style={{
              background: `linear-gradient(to bottom, ${ORANGE}, ${ORANGE}22)`,
            }}
          />

          <div className="space-y-6">
            {timelineSteps.map(({ day, title, desc }, i) => (
              <FadeUp key={title} delay={i * 0.1}>
                <div className="flex gap-6 relative">
                  {/* Dot */}
                  <div
                    className="w-14 h-14 lg:w-15 lg:h-15 2xl:w-18  2xl:h-18  shrink-0 rounded-full border-2 flex flex-col items-center justify-center text-center z-10"
                    style={{ borderColor: ORANGE, background: `${ORANGE}18` }}
                  >
                    <span
                      className="text-[12px] lg:text-[14px] 2xl:text-[16px] font-bold leading-tight"
                      style={{ color: ORANGE }}
                    >
                      {day}
                    </span>
                  </div>

                  <GlassCard className="flex-1 p-5">
                    <h4 className="text-white font-bold text-base lg:text-[16px] 2xl:text-[22px] mb-1.5">
                      {title}
                    </h4>
                    <p className="text-slate-400 text-[14px] lg:text-[16px] 2xl:text-[20px] leading-relaxed">
                      {desc}
                    </p>
                  </GlassCard>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// FAQ
// ─────────────────────────────────────────────────────────────────────────────
const faqs = [
  {
    q: "Can you really launch a complete Shopify store in 30 days?",
    a: "Yes — our 30-day delivery is a structured, proven process. We start with a clear scope, work in defined sprints, and have dedicated developers at every phase. Timely client feedback at each milestone is all we need from your side.",
  },
  {
    q: "Do you build on Shopify Plus for enterprise brands?",
    a: "Absolutely. We work on both standard Shopify and Shopify Plus. For high-volume brands, we leverage Shopify Plus features like custom checkout scripting, B2B portals, and advanced automation flows.",
  },
  {
    q: "Can you migrate my existing WooCommerce or Magento store to Shopify?",
    a: "Yes. We handle full platform migrations — products, customers, order history, SEO URLs, and content — with zero downtime and complete data integrity guaranteed.",
  },
  {
    q: "Do you help with Shopify SEO and conversion rate optimisation?",
    a: "Definitely. Every store we build comes with an SEO foundation: meta optimisation, structured data, sitemap, and speed tuning. We also offer ongoing CRO sprints to continuously improve your conversion rate.",
  },
];

function FAQ() {
  const [open, setOpen] = useState(null);
  return (
    <Section
      style={{
        background: "linear-gradient(180deg, #090d1a 0%, #0b1428 100%)",
      }}
    >
      <div className="relative z-10 max-w-3xl mx-auto px-6 py-24">
        <SectionHeading
          badge="FAQ"
          title="Frequently Asked Questions"
          subtitle="Get answers to common questions about our Shopify development service."
        />

        <div className="space-y-3">
          {faqs.map(({ q, a }, i) => (
            <FadeUp key={q} delay={i * 0.08}>
              <GlassCard className="overflow-hidden">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span
                    className={`text-[14px] lg:text-[16px] 2xl:text-[20px] font-semibold pr-4 ${open === i ? "" : "text-slate-300"}`}
                    style={open === i ? { color: ORANGE } : {}}
                  >
                    {q}
                  </span>
                  <motion.div
                    animate={{ rotate: open === i ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown
                      size={18}
                      className="shrink-0 text-slate-500"
                    />
                  </motion.div>
                </button>
                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35 }}
                    >
                      <div className="px-5 pb-5 text-slate-400 text-[14px] lg:text-[16px] 2xl:text-[20px] leading-relaxed border-t border-white/8 pt-4">
                        {a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </GlassCard>
            </FadeUp>
          ))}
        </div>
      </div>
    </Section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// CTA
// ─────────────────────────────────────────────────────────────────────────────
function CTA() {
  return (
    <Section
      style={{
        background: "linear-gradient(180deg, #0b1428 0%, #090d1a 100%)",
      }}
    >
      <GlowBlob className="w-[600px] h-[400px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-700" />
      <GlowBlob
        className="w-[300px] h-[300px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{ background: ORANGE, opacity: 0.06, filter: "blur(80px)" }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-6 py-28 text-center">
        <FadeUp>
          <div
            className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
            style={{ background: `${ORANGE}18` }}
          >
            <Rocket size={36} style={{ color: ORANGE }} />
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-5 leading-tight">
            Ready to Take the
            <br />
            <span style={{ color: ORANGE }}>Next Step?</span>
          </h2>
          <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto leading-relaxed">
            Contact our Shopify experts today and get a free consultation. Your
            store could be live and selling in just 30 days.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="inline-flex items-center gap-2 px-9 py-4 rounded-xl text-white font-bold text-base"
            style={{
              background: `linear-gradient(135deg, ${ORANGE}, ${ORANGE_LIGHT})`,
            }}
          >
            Get In Touch <ArrowRight size={18} />
          </motion.button>
        </FadeUp>
      </div>
    </Section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// FOOTER
// ─────────────────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer
      className="border-t border-white/8"
      style={{ background: "#070b17" }}
    >
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-2 md:grid-cols-4 gap-10">
        {/* Locations */}
        <div>
          <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
            Locations
          </h4>
          <ul className="space-y-3 text-slate-500 text-xs">
            {["Ludhiana", "MG Nagar", "New Delhi"].map((loc) => (
              <li key={loc} className="flex items-start gap-2">
                <MapPin
                  size={12}
                  className="mt-0.5 shrink-0"
                  style={{ color: ORANGE }}
                />
                {loc}
              </li>
            ))}
          </ul>
        </div>

        {/* Contacts */}
        <div>
          <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
            Our Contacts
          </h4>
          <ul className="space-y-3 text-slate-500 text-xs">
            <li className="flex items-center gap-2">
              <Phone size={12} style={{ color: ORANGE }} /> +91 9356385744
            </li>
            <li className="flex items-center gap-2">
              <Phone size={12} style={{ color: ORANGE }} /> +91 412560606
            </li>
            <li className="flex items-center gap-2">
              <Mail size={12} style={{ color: ORANGE }} />{" "}
              support@ascentialabs.com
            </li>
          </ul>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
            Useful Links
          </h4>
          <ul className="space-y-2 text-slate-500 text-xs">
            {[
              "Software Engineering",
              "AI/ML Services",
              "Mobile Application",
              "Digital Transformation",
              "Technology Consultation",
            ].map((l) => (
              <li key={l}>
                <a href="#" className="hover:text-white transition-colors">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* About */}
        <div>
          <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
            About
          </h4>
          <ul className="space-y-2 text-slate-500 text-xs">
            {["About Us", "Send a Message", "Our Blogs", "Sitemap"].map((l) => (
              <li key={l}>
                <a href="#" className="hover:text-white transition-colors">
                  {l}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex gap-3 mt-5">
            {[Globe, ExternalLink, MessageSquare].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-8 h-8 rounded-lg border border-white/10 flex items-center justify-center text-slate-500 hover:text-white hover:border-white/30 transition-all"
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/8 py-5 px-6 text-center text-slate-600 text-xs">
        © 2016 Ascentia Labs. All Rights Reserved.
      </div>
    </footer>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// ROOT
// ─────────────────────────────────────────────────────────────────────────────
export default function ShopifyServicePage() {
  return (
    <div className="min-h-screen" style={{ background: "#090d1a" }}>
      {/* <Navbar /> */}
      <Hero />
      <StatsBar />
      <ServicesSection />
      <PromoSplit />
      <WhyChooseUs />
      <Timeline />
      <FAQ />
    </div>
  );
}
