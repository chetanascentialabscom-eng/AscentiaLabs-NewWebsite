import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NewsTicker = () => {
  const tickerRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const navigate = useNavigate();
  const touchStartRef = useRef(null);

  useEffect(() => {
    const ticker = tickerRef.current;
    if (!ticker) return;

    // Clone the content for seamless loop
    const tickerContent = ticker.querySelector('.ticker-content');
    if (tickerContent) {
      const clone = tickerContent.cloneNode(true);
      ticker.appendChild(clone);
    }
  }, []);

  const newsItems = [
    {
      text: "Ascentia Labs Exhibited At ITB Asia 2025, Singapore",
      link: "/news/itb-asia-2025"
    },
    {
      text: "Ascentia Labs Launches RouteMaestro Platform",
      link: "/news/routemaestro-platform"
    },
    {
      text: "Ascentia Labs Exhibited At ITB Asia 2025, Singapore",
      link: "/news/itb-asia-2025"
    },
    {
      text: "Ascentia Labs Launches RouteMaestro Platform",
      link: "/news/routemaestro-platform"
    },
    {
      text: "Ascentia Labs Exhibited At ITB Asia 2025, Singapore",
      link: "/news/itb-asia-2025"
    },
    {
      text: "Ascentia Labs Launches RouteMaestro Platform",
      link: "/news/routemaestro-platform"
    },
    {
      text: "Ascentia Labs Exhibited At ITB Asia 2025, Singapore",
      link: "/news/itb-asia-2025"
    },
    {
      text: "Ascentia Labs Launches RouteMaestro Platform",
      link: "/news/routemaestro-platform"
    },
  ];

  const handleNewsClick = (e, link) => {
    e.preventDefault();
    e.stopPropagation();
    
    // Small delay to ensure touch event completes
    setTimeout(() => {
      navigate(link);
      // Scroll to top after navigation
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'instant' });
      }, 100);
    }, 50);
  };

  const handleTouchStart = (e) => {
    touchStartRef.current = {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
      time: Date.now()
    };
    setIsPaused(true);
  };

  const handleTouchEnd = (e, link) => {
    if (!touchStartRef.current) {
      setIsPaused(false);
      return;
    }

    const touchEnd = {
      x: e.changedTouches[0].clientX,
      y: e.changedTouches[0].clientY,
      time: Date.now()
    };

    const deltaX = Math.abs(touchEnd.x - touchStartRef.current.x);
    const deltaY = Math.abs(touchEnd.y - touchStartRef.current.y);
    const deltaTime = touchEnd.time - touchStartRef.current.time;

    // If it's a tap (not a scroll/swipe) and quick enough
    if (deltaX < 10 && deltaY < 10 && deltaTime < 300) {
      e.preventDefault();
      navigate(link);
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'instant' });
      }, 100);
    }

    touchStartRef.current = null;
    setTimeout(() => setIsPaused(false), 300);
  };

  return (
    <div className="bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600 text-black md:py-2 overflow-hidden w-full shadow-lg flex items-center relative z-10 mt-1">
      <div 
        ref={tickerRef} 
        className="ticker-wrapper flex items-center h-full w-full"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className={`ticker-content flex items-center whitespace-nowrap h-full ${isPaused ? '' : 'animate-scroll'}`}>
          {newsItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              onClick={(e) => handleNewsClick(e, item.link)}
              onTouchStart={handleTouchStart}
              onTouchEnd={(e) => handleTouchEnd(e, item.link)}
              className="inline-flex items-center mx-2 md:mx-8 text-xs font-medium text-black hover:text-blue-900 transition-colors whitespace-nowrap cursor-pointer select-none"
              style={{ 
                WebkitTapHighlightColor: 'transparent',
                touchAction: 'manipulation',
                userSelect: 'none'
              }}
            >
              <span>{item.text}</span>
              <span className="text-blue-700 font-bold ml-1 hover:underline">View Here</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsTicker;
