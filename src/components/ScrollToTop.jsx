import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Check if Lenis is available
    const lenis = window.lenis;
    
    if (lenis) {
      // Use Lenis smooth scroll to top
      lenis.scrollTo(0, { immediate: true });
    } else {
      // Fallback to regular scroll methods
      window.scrollTo(0, 0);
      
      if (document.documentElement) {
        document.documentElement.scrollTop = 0;
      }
      
      if (document.body) {
        document.body.scrollTop = 0;
      }
      
      // With options
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant'
      });
    }

    // Delayed scroll to handle async rendering
    const timeoutId = setTimeout(() => {
      if (lenis) {
        lenis.scrollTo(0, { immediate: true });
      } else {
        window.scrollTo(0, 0);
      }
    }, 10);

    return () => clearTimeout(timeoutId);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
