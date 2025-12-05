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
    <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white py-2.5 overflow-hidden w-full shadow-md">
      <div ref={tickerRef} className="ticker-wrapper flex">
        <div className="ticker-content flex items-center whitespace-nowrap animate-scroll">
          {newsItems.map((item, index) => (
            <span key={index} className="inline-flex items-center mx-8 text-sm md:text-base font-medium">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsTicker;
