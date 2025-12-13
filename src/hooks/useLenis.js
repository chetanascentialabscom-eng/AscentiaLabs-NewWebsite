import { useEffect } from 'react'
import Lenis from 'lenis'

export const useLenis = () => {
  useEffect(() => {
    // Initialize Lenis with perfect momentum scrolling
    const lenis = new Lenis({
      // Longer duration for smoother momentum
      duration: 2.0,
      
      // Smooth easing that continues after scroll stops
      easing: (t) => {
        return t === 1 ? 1 : 1 - Math.pow(2, -10 * t)
      },
      
      // Vertical scrolling
      direction: 'vertical',
      gestureDirection: 'vertical',
      
      // Enable smooth scrolling
      smooth: true,
      
      // Mouse wheel sensitivity (higher = more momentum)
      mouseMultiplier: 2,
      
      // Disable smooth touch for better mobile performance
      smoothTouch: false,
      touchMultiplier: 2,
      
      // No infinite scroll
      infinite: false,
      
      // Normalize wheel events for consistent behavior
      normalizeWheel: true,
      
      // Additional wheel multiplier for momentum
      wheelMultiplier: 1.5,
      
      // Lerp intensity (lower = smoother momentum)
      lerp: 0.08,
    })

    // Add lenis class to html for CSS targeting
    document.documentElement.classList.add('lenis')

    // Make Lenis globally available
    window.lenis = lenis

    // Animation frame function for smooth rendering
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    // Cleanup function
    return () => {
      lenis.destroy()
      document.documentElement.classList.remove('lenis')
      window.lenis = null
    }
  }, [])
}