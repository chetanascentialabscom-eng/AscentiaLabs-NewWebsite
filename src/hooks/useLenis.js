import { useEffect } from "react";
import Lenis from "lenis";

export const useLenis = () => {
  useEffect(() => {
    // Disable Lenis on mobile/tablet
    const isMobile = window.innerWidth < 1024;

    if (isMobile) {
      document.documentElement.style.scrollBehavior = "smooth";
      return;
    }

    const lenis = new Lenis({
      duration: 1.2,

      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),

      smoothWheel: true,

      wheelMultiplier: 1,

      touchMultiplier: 1,

      infinite: false,

      lerp: 0.1,
    });

    let rafId;

    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    document.documentElement.classList.add("lenis");

    window.lenis = lenis;

    return () => {
      cancelAnimationFrame(rafId);

      lenis.destroy();

      document.documentElement.classList.remove("lenis");

      window.lenis = null;
    };
  }, []);
};
