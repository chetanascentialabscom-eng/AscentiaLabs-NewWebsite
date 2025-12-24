import { useEffect, useRef } from 'react';

const NewsTicker = () => {
  const tickerRef = useRef(null);

  useEffect(() => {
    const ticker = tickerRef.current;
    if (!ticker) return;

    // Clone the content for seamless loop
    const tickerContent = ticker.querySelector('.ticker-content');
    const clone = tickerContent.cloneNode(true);
    ticker.appendChild(clone);
  }, []);

  const newsItems = [
    "Ascentia Labs Exhibited At ITB Asia 2025, Singapore",
    "Ascentia Labs Launches RouteMaestro Platform",
    "Ascentia Labs Exhibited At ITB Asia 2025, Singapore",
    "Ascentia Labs Launches RouteMaestro Platform",
    "Ascentia Labs Exhibited At ITB Asia 2025, Singapore",
    "Ascentia Labs Launches RouteMaestro Platform",
    "Ascentia Labs Exhibited At ITB Asia 2025, Singapore",
    "Ascentia Labs Launches RouteMaestro Platform",
    
  ];

  return (
    <div className="bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600 text-black py-2 overflow-hidden w-full shadow-lg flex items-center relative z-10 mt-1">
      <div ref={tickerRef} className="ticker-wrapper flex items-center h-full w-full">
        <div className="ticker-content flex items-center whitespace-nowrap animate-scroll h-full">
          {newsItems.map((item, index) => (
            <span key={index} className="inline-flex items-center mx-4 md:mx-8 text-xs font-medium text-black">
              {item} <span className='text-blue-700 text-bold mx-1'>View Here</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsTicker;
