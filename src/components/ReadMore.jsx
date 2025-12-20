import { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const ReadMore = ({ 
  children, 
  maxChars = 80, // Simple character limit instead of lines
  className = '', 
  buttonClassName = '',
  mobileOnly = false 
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  // Convert children to string for processing
  const text = typeof children === 'string' ? children : '';
  
  // Determine if we should show the read more functionality
  const shouldApplyReadMore = mobileOnly ? isMobile : true;
  const shouldShowButton = shouldApplyReadMore && text.length > maxChars;
  
  // Get the text to display
  const displayText = shouldShowButton && !isExpanded 
    ? text.substring(0, maxChars) + '...'
    : text;

  return (
    <>
      <span className={`${className} transition-all duration-300 ease-in-out`} style={{ lineHeight: '1.6' }}>
        {shouldShowButton && !isExpanded ? displayText : children}
      </span>
      
      {shouldShowButton && (
        <br />
      )}
      
      {shouldShowButton && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={`inline-flex items-center gap-1 mt-2 text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200 text-sm ${buttonClassName}`}
        >
          {isExpanded ? (
            <>
              Read Less
              <ChevronUp className="w-4 h-4" />
            </>
          ) : (
            <>
              Read More
              <ChevronDown className="w-4 h-4" />
            </>
          )}
        </button>
      )}
    </>
  );
};

export default ReadMore;