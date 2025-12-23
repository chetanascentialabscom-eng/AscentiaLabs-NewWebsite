import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Code2, Sparkles, Zap, Target, TrendingUp, Shield, Cpu } from 'lucide-react';
import ConsultationButton from './ConsultationButton';

const Hero = () => {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(() => ["Innovative", "Scalable", "Powerful", "Modern", "Intelligent"], []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);



  return (
    <section id="home" className="relative bg-gradient-to-b from-slate-900 via-blue-950 to-black overflow-hidden flex items-center min-h-screen lg:h-screen pt-0 pb-0 lg:pt-10">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e3a8a15_1px,transparent_1px),linear-gradient(to_bottom,#1e3a8a15_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      
      {/* Glowing Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-white/5 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/40 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`
            }}
          ></div>
        ))}
      </div>

      {/* Decorative Geometric Shapes - Left Side */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 hidden lg:block">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative"
        >
          {/* Large Circle */}
          <div className="absolute -left-20 top-0 w-40 h-40 border-2 border-blue-500/20 rounded-full"></div>
          <div className="absolute -left-16 top-4 w-32 h-32 border-2 border-blue-400/30 rounded-full animate-spin-slow"></div>
          
          {/* Floating Icons */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-2 top-20 bg-blue-500/10 backdrop-blur-sm p-4 rounded-2xl border border-blue-400/20"
          >
            <Cpu className="w-8 h-8 text-blue-400" />
          </motion.div>
          
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute left-4 top-55 bg-blue-600/10 backdrop-blur-sm p-4 rounded-2xl border border-blue-500/20"
          >
            <Zap className="w-8 h-8 text-blue-300" />
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Geometric Shapes - Right Side */}
      <div className="absolute right-0 bottom-3/4 -translate-y-1/2 hidden lg:block">
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative"
        >
          {/* Large Circle */}
          <div className="absolute -right-20 top-0 w-40 h-40 border-2 border-blue-500/20 rounded-full"></div>
          <div className="absolute -right-16 top-4 w-32 h-32 border-2 border-blue-400/30 rounded-full animate-spin-slow"></div>
          
          {/* Floating Icons */}
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute right-8 top-2 bg-blue-500/10 backdrop-blur-sm p-4 rounded-2xl border border-blue-400/20"
          >
            <Shield className="w-8 h-8 text-blue-400" />
          </motion.div>
          
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute right-4 top-80 bg-blue-600/10 backdrop-blur-sm p-4 rounded-2xl border border-blue-500/20"
          >
            <Target className="w-8 h-8 text-blue-300" />
          </motion.div>
        </motion.div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20 relative z-10 max-w-[1400px]">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-12 py-4 md:py-8 lg:py-16">
          
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left w-full lg:max-w-2xl lg:pr-8">
            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-5xl font-bold mb-3 md:mb-5 leading-tight">
                <span className="block bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent mb-1">
                  Building Tomorrow's
                </span>
                <span className="relative flex justify-center lg:justify-start w-full min-h-[1.5em] my-2 md:my-4 overflow-visible">
                  {titles.map((title, index) => (
                    <motion.span
                      key={index}
                      className="absolute left-1/2 lg:left-0 -translate-x-1/2 lg:translate-x-0 font-bold bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent whitespace-nowrap"
                      initial={{ opacity: 0, y: "-100" }}
                      transition={{ type: "spring", stiffness: 50 }}
                      animate={
                        titleNumber === index
                          ? { y: 0, opacity: 1 }
                          : {
                              y: titleNumber > index ? -150 : 150,
                              opacity: 0,
                            }
                      }
                    >
                      {title}
                    </motion.span>
                  ))}
                </span>
                <span className="block bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent mt-2">
                  Digital Solutions Today
                </span>
              </h1>
            </motion.div>
            
            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-sm sm:text-base md:text-lg text-blue-200/80 mb-4 md:mb-6 leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              We transform your ideas into powerful software solutions that drive growth, 
              enhance efficiency, and deliver exceptional user experiences.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-3 mb-6 md:mb-10 justify-center lg:justify-start"
            >
              <ConsultationButton 
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base"
                variant="primary"
              />
              
              <Link to="/case-studies" className="w-full sm:w-auto">
                <button className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white/5 backdrop-blur-sm border-2 border-white/20 text-white rounded-xl font-semibold text-sm sm:text-base hover:bg-white/10 hover:border-white/40 transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2">
                  View Our Work
                  <Code2 className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                </button>
              </Link>
            </motion.div>

            {/* Statistics Numbers - Left Side */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="hidden lg:block"
            >
              <div className="grid grid-cols-4 gap-6 max-w-lg">
                <div className="text-center">
                  <div className="text-4xl font-black text-white mb-2 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                    7+
                  </div>
                  <p className="text-blue-200/70 text-sm font-bold">
                    Business Years
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black text-white mb-2 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                    100+
                  </div>
                  <p className="text-blue-200/70 text-sm font-bold">
                    Projects Delivered
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black text-white mb-2 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                    10+
                  </div>
                  <p className="text-blue-200/70 text-sm font-bold">
                    Industries Catered
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-2 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                    4+
                  </div>
                  <p className="text-blue-200/70 text-sm font-bold">
                    Countries
                  </p>
                </div>
              </div>
            </motion.div>

     

           
          </div>

          {/* Right Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex-1 relative flex items-center justify-center w-full lg:min-w-[450px] lg:pl-8"
          >
            {/* Central Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-full blur-3xl"></div>
            
            {/* Floating Cards Container - Desktop Layout */}
            <div className="relative w-full max-w-[600px] h-[300px] hidden lg:block">
              {/* Card 1 - Top Right */}
              <motion.div
                animate={{ y: [0, -15, 0], rotate: [0, 2, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-0 right-0 w-60 bg-gradient-to-br from-blue-500/25 to-blue-600/15 backdrop-blur-md p-5 rounded-2xl border border-blue-400/40 shadow-2xl"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-500/30 rounded-lg">
                    <TrendingUp className="w-6 h-6 text-blue-300" />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">Performance</div>
                    <div className="text-blue-300/70 text-xs">+45% Growth</div>
                  </div>
                </div>
                <div className="h-2 bg-blue-900/40 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "85%" }}
                    transition={{ duration: 2, delay: 1 }}
                    className="h-full bg-gradient-to-r from-blue-500 to-blue-400"
                  ></motion.div>
                </div>
              </motion.div>

              {/* Card 2 - Bottom Left */}
              <motion.div
                animate={{ y: [0, 15, 0], rotate: [0, -2, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute bottom-0 left-0 w-60 bg-gradient-to-br from-blue-600/25 to-blue-700/15 backdrop-blur-md p-5 rounded-2xl border border-blue-500/40 shadow-2xl"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-600/30 rounded-lg">
                    <Shield className="w-6 h-6 text-blue-300" />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">Security</div>
                    <div className="text-blue-300/70 text-xs">Enterprise Grade</div>
                  </div>
                </div>
                <div className="flex gap-1.5">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 1.5 + i * 0.1 }}
                      className="w-7 h-7 bg-blue-500/30 rounded border border-blue-400/50 flex items-center justify-center"
                    >
                      <span className="text-blue-300 text-xs font-bold">•</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Card 3 - Center */}
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-14 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-72 bg-gradient-to-br from-blue-600/35 to-blue-700/25 backdrop-blur-md p-8 rounded-3xl border border-blue-400/50 shadow-2xl"
              >
                <div className="text-center">
                  <div className="inline-flex p-4 bg-blue-500/30 rounded-2xl mb-3">
                    <Code2 className="w-9 h-9 text-blue-300" />
                  </div>
                  <div className="text-2xl font-bold text-white mb-2">AI-Powered</div>
                  <div className="text-blue-200/80 text-sm mb-4">Next-Gen Solutions</div>
                  <div className="flex items-center justify-center gap-2 mt-4">
                    <Sparkles className="w-4 h-4 text-blue-400" />
                    <div className="text-blue-300/90 text-xs font-medium">Smart Automation</div>
                  </div>
                  <div className="h-1.5 bg-blue-900/40 rounded-full overflow-hidden mt-3">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "92%" }}
                      transition={{ duration: 2, delay: 1.2 }}
                      className="h-full bg-gradient-to-r from-blue-500 to-blue-400"
                    ></motion.div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Mobile Layout - Single Feature Card */}
            <div className="lg:hidden w-full max-w-md px-4">
              {/* Single Card - Custom Software Development */}
              <motion.div
                animate={{ 
                  y: [0, -15, 0],
                  scale: [1, 1.03, 1]
                }}
                transition={{ 
                  duration: 5, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  times: [0, 0.5, 1]
                }}
                className="w-full bg-gradient-to-br from-blue-600/35 to-blue-700/25 backdrop-blur-md p-4 rounded-2xl border border-blue-400/60 shadow-2xl will-change-transform"
              >
                {/* Header */}
                <div className="text-center mb-3">
                  <motion.div 
                    className="inline-flex p-3 bg-blue-500/40 rounded-xl mb-2"
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Code2 className="w-7 h-7 text-blue-200" />
                  </motion.div>
                  <h3 className="text-lg font-bold text-white mb-1">
                    Custom Software Development
                  </h3>
                  <p className="text-blue-200/80 text-xs leading-relaxed">
                    Transforming ideas into scalable digital solutions
                  </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-2 gap-2 mb-3">
                  <motion.div 
                    className="bg-blue-500/20 backdrop-blur-sm p-2 rounded-lg gap-1.5 flex justify-center items-center border border-blue-400/40"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                  >
                    <Zap className="w-4 h-4 text-blue-300" />
                    <div className="text-white text-xs font-semibold">Fast Delivery</div>
                  </motion.div>
                  
                  <motion.div 
                    className="bg-blue-500/20 backdrop-blur-sm p-2 rounded-lg border border-blue-400/40 gap-1.5 flex justify-center items-center"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1, duration: 0.6 }}
                  >
                    <Sparkles className="w-4 h-4 text-blue-300" />
                    <div className="text-white text-xs font-semibold">AI-Powered</div>
                  </motion.div>
                  
                  <motion.div 
                    className="bg-blue-500/20 backdrop-blur-sm p-2 rounded-lg border border-blue-400/40 gap-1.5 flex justify-center items-center"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.2, duration: 0.6 }}
                  >
                    <Target className="w-4 h-4 text-blue-300" />
                    <div className="text-white text-xs font-semibold">Goal-Focused</div>
                  </motion.div>
                  
                  <motion.div 
                    className="bg-blue-500/20 backdrop-blur-sm p-2 rounded-lg border border-blue-400/40 gap-1.5 flex justify-center items-center"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.4, duration: 0.6 }}
                  >
                    <Cpu className="w-4 h-4 text-blue-300" />
                    <div className="text-white text-xs font-semibold">Scalable</div>
                  </motion.div>
                </div>

                {/* Stats - Compact */}
                <div className="flex items-center justify-between pt-3 border-t border-blue-400/30">
                  <div className="text-center flex-1">
                    <div className="text-lg font-bold text-white">50+</div>
                    <div className="text-blue-300/70 text-[10px]">Projects</div>
                  </div>
                  <div className="w-px h-8 bg-blue-400/30"></div>
                  <div className="text-center flex-1">
                    <div className="text-lg font-bold text-white">100%</div>
                    <div className="text-blue-300/70 text-[10px]">Quality</div>
                  </div>
                  <div className="w-px h-8 bg-blue-400/30"></div>
                  <div className="text-center flex-1">
                    <div className="text-lg font-bold text-white">24/7</div>
                    <div className="text-blue-300/70 text-[10px]">Support</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

       

      </div>
      
      {/* Smooth transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-black/50 pointer-events-none"></div>
    </section>
  );
};

export default Hero;