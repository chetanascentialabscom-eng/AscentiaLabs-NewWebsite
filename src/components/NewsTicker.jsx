import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

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

  return (
    <div className="bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600 text-black  md:py-2 overflow-hidden w-full shadow-lg flex items-center relative z-10 mt-1">
      <div ref={tickerRef} className="ticker-wrapper flex items-center h-full w-full">
        <div className="ticker-content flex items-center whitespace-nowrap animate-scroll h-full">
          {newsItems.map((item, index) => (
            <Link 
              key={index}
              to={item.link} 
              className="inline-flex items-center mx-2 md:mx-8 text-xs font-medium text-black hover:text-blue-900 transition-colors whitespace-nowrap"
            >
              <span>{item.text}</span>
              <span className="text-blue-700 font-bold ml-1 hover:underline">View Here</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsTicker;
