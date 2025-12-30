import { useState, useEffect, useRef } from 'react';
import { MapPin, Navigation } from 'lucide-react';

const LeafletMap = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);

  const locations = [
    {
      id: 1,
      name: "Ludhiana Office",
      address: "SCO. 56-57, SBS Nagar, Opp. Keys Hotel, Ludhiana, Punjab",
      coordinates: [30.9010, 75.8573], // [lat, lng] for Leaflet
      phone: "+91 9356385744",
      type: "main"
    },
    {
      id: 2,
      name: "SAS Nagar Office", 
      address: "3rd Floor, Plot No.1273, Sector 82, JLPL Industrial Area, SAS Nagar, Punjab",
      coordinates: [30.7046, 76.7179], // [lat, lng] for Leaflet
      phone: "+91 9356385744",
      type: "branch"
    },
    {
      id: 3,
      name: "New Delhi Office",
      address: "106, Centrum Mall, MG Road, Sultanpur, New Delhi",
      coordinates: [28.4995, 77.0787], // [lat, lng] for Leaflet
      phone: "+91 9356385744",
      type: "branch"
    }
  ];

  useEffect(() => {
    // Dynamically load Leaflet CSS and JS
    const loadLeaflet = async () => {
      // Load CSS
      if (!document.querySelector('link[href*="leaflet"]')) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
        link.integrity = 'sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=';
        link.crossOrigin = '';
        document.head.appendChild(link);
      }

      // Load JS
      if (!window.L) {
        return new Promise((resolve) => {
          const script = document.createElement('script');
          script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
          script.integrity = 'sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=';
          script.crossOrigin = '';
          script.onload = resolve;
          document.head.appendChild(script);
        });
      }
    };

    loadLeaflet().then(() => {
      if (window.L && mapRef.current && !mapInstanceRef.current) {
        // Initialize map
        const map = window.L.map(mapRef.current).setView([29.5, 76.5], 7);

        // Add tile layer
        window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        // Custom marker icons
        const createCustomIcon = (type) => {
          const color = type === 'main' ? '#2563eb' : '#6b7280';
          return window.L.divIcon({
            html: `
              <div style="
                background-color: ${color};
                width: 30px;
                height: 30px;
                border-radius: 50% 50% 50% 0;
                transform: rotate(-45deg);
                border: 3px solid white;
                box-shadow: 0 2px 10px rgba(0,0,0,0.3);
                position: relative;
              ">
                <div style="
                  position: absolute;
                  top: 50%;
                  left: 50%;
                  transform: translate(-50%, -50%) rotate(45deg);
                  width: 8px;
                  height: 8px;
                  background-color: white;
                  border-radius: 50%;
                "></div>
              </div>
            `,
            className: 'custom-marker',
            iconSize: [30, 30],
            iconAnchor: [15, 30],
            popupAnchor: [0, -30]
          });
        };

        // Add markers
        locations.forEach((location) => {
          const marker = window.L.marker(location.coordinates, {
            icon: createCustomIcon(location.type)
          }).addTo(map);

          // Create popup content
          const popupContent = `
            <div class="p-3 min-w-[250px]">
              <h4 class=" text-gray-800 mb-2 text-lg">${location.name}</h4>
              ${location.type === 'main' ? '<span class="inline-block bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full mb-2">Main Office</span>' : ''}
              <p class="text-sm text-gray-600 mb-3 leading-relaxed">${location.address}</p>
              <div class="space-y-2">
                <a href="tel:${location.phone}" class="flex items-center space-x-2 text-blue-600 hover:text-blue-800 text-sm font-medium">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                  <span>${location.phone}</span>
                </a>
                <a href="https://maps.google.com/?q=${encodeURIComponent(location.address)}" target="_blank" rel="noopener noreferrer" class="flex items-center space-x-2 text-green-600 hover:text-green-800 text-sm font-medium">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                  </svg>
                  <span>Get Directions</span>
                </a>
              </div>
            </div>
          `;

          marker.bindPopup(popupContent, {
            maxWidth: 300,
            className: 'custom-popup'
          });

          marker.on('click', () => {
            setSelectedLocation(location);
          });
        });

        mapInstanceRef.current = map;
        setMapLoaded(true);

        // Add custom CSS for popups
        const style = document.createElement('style');
        style.textContent = `
          .custom-popup .leaflet-popup-content-wrapper {
            border-radius: 12px;
            box-shadow: 0 10px 25px rgba(0,0,0,0.15);
          }
          .custom-popup .leaflet-popup-content {
            margin: 0;
            font-family: 'Calibri', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          }
          .custom-marker {
            filter: drop-shadow(0 2px 4px rgba(0,0,0,0.2));
          }
        `;
        document.head.appendChild(style);
      }
    });

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  const focusLocation = (location) => {
    if (mapInstanceRef.current) {
      mapInstanceRef.current.setView(location.coordinates, 15);
      setSelectedLocation(location);
    }
  };

  return (
    <div className="relative bg-black p-8 rounded-2xl">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl  mb-4">
          <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Our Locations
          </span>
          <span className="text-white"> In India</span>
        </h2>
        <p className="text-white/80 text-lg max-w-2xl mx-auto">
          Visit our offices across India for personalized consultations and support
        </p>
      </div>
      
      {/* Map Container */}
      <div className="relative bg-black rounded-xl shadow-lg p-6 border-2 border-amber-400/30">
        <div 
          ref={mapRef} 
          className="w-full rounded-xl overflow-hidden"
          style={{
            height: '300px',
            minHeight: '300px',
            backgroundColor: '#f3f4f6',
            border: '2px solid rgba(251, 191, 36, 0.3)'
          }}
        />

        {!mapLoaded && (
          <div 
            className="absolute flex items-center justify-center bg-gray-100 rounded-xl"
            style={{
              top: '24px',
              left: '24px',
              right: '24px',
              bottom: '24px',
              height: '252px'
            }}
          >
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
              <p className="text-gray-600">Loading interactive map...</p>
            </div>
          </div>
        )}

        {/* Location Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          {locations.map((location) => (
            <div
              key={location.id}
              className={`bg-black p-4 rounded-lg border-2 hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105 ${
                location.type === 'main' 
                  ? 'border-amber-400/40 hover:border-amber-400/60' 
                  : 'border-amber-400/20 hover:border-amber-400/40'
              } ${selectedLocation?.id === location.id ? 'ring-2 ring-offset-2 ring-amber-400/50' : ''}`}
              onClick={() => focusLocation(location)}
            >
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0 text-amber-400" />
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                    <h4 className="text-base md:text-lg text-white">{location.name}</h4>
                    {location.type === 'main' && (
                      <span className="text-xs bg-gradient-to-r from-amber-400 to-orange-500 text-black px-2.5 py-1 rounded-full font-medium inline-block w-fit">
                        Main Office
                      </span>
                    )}
                  </div>
                  <p className="text-xs sm:text-sm text-white/80 mb-3 leading-relaxed">{location.address}</p>
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-xs sm:text-sm text-amber-400 truncate">
                      {location.phone}
                    </p>
                    <Navigation className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

       
      </div>

    
    </div>
  );
};

export default LeafletMap;