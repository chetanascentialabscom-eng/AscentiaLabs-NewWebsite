// Utility functions for smooth scrolling with Lenis

export const scrollToElement = (target, options = {}) => {
  const lenis = window.lenis;
  
  if (lenis) {
    lenis.scrollTo(target, {
      offset: options.offset || 0,
      duration: options.duration || 1.2,
      easing: options.easing || ((t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))),
      ...options
    });
  } else {
    // Fallback for when Lenis is not available
    const element = typeof target === 'string' ? document.querySelector(target) : target;
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start',
        ...options
      });
    }
  }
};

export const scrollToTop = (options = {}) => {
  const lenis = window.lenis;
  
  if (lenis) {
    lenis.scrollTo(0, {
      duration: options.duration || 1.2,
      ...options
    });
  } else {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
      ...options
    });
  }
};

export const scrollToPosition = (position, options = {}) => {
  const lenis = window.lenis;
  
  if (lenis) {
    lenis.scrollTo(position, {
      duration: options.duration || 1.2,
      ...options
    });
  } else {
    window.scrollTo({
      top: position,
      behavior: 'smooth',
      ...options
    });
  }
};

// Hook for smooth scroll on click
export const useSmoothScroll = () => {
  return {
    scrollToElement,
    scrollToTop,
    scrollToPosition
  };
};