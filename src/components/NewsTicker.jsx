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
    "Ascentia Labs launches new AI-powered solutions for enterprise clients",
    "Innovative software development services now available",
    "Award-winning team delivering cutting-edge technology solutions",
    "Mobile app development expertise across iOS and Android platforms",
    "Custom software solutions tailored to your business needs",
    "Digital transformation services helping businesses grow",
  ];

  return (
    <div className="bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600 text-black py-1 overflow-hidden w-full shadow-lg flex items-center relative z-10 mt-1">
      <div ref={tickerRef} className="ticker-wrapper flex items-center h-full w-full">
        <div className="ticker-content flex items-center whitespace-nowrap animate-scroll h-full">
          {newsItems.map((item, index) => (
            <span key={index} className="inline-flex items-center mx-4 md:mx-8 text-xs font-medium text-black">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsTicker;
