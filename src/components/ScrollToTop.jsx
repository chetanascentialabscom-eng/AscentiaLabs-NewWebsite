import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Multiple methods to ensure scroll to top works
    
    // Method 1: Direct window scroll
    window.scrollTo(0, 0);
    
    // Method 2: Document element scroll
    if (document.documentElement) {
      document.documentElement.scrollTop = 0;
    }
    
    // Method 3: Body scroll
    if (document.body) {
      document.body.scrollTop = 0;
    }
    
    // Method 4: With options
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });

    // Method 5: Delayed scroll to handle async rendering
    const timeoutId = setTimeout(() => {
      window.scrollTo(0, 0);
      if (document.documentElement) {
        document.documentElement.scrollTop = 0;
      }
      if (document.body) {
        document.body.scrollTop = 0;
      }
    }, 10);

    return () => clearTimeout(timeoutId);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
