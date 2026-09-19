import React, { useState } from 'react';
import { CONNECTIVITY_DATA } from '../data/projectData';
import { MapPin, Navigation, Clock, Plane, School, Hospital, ShoppingBag, Waves, CheckCircle2, ExternalLink, Layers } from 'lucide-react';

export const ConnectivitySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedDestination, setSelectedDestination] = useState<string>('10');
  const [mapView, setMapView] = useState<'google' | 'schematic'>('google');

  const googleMapsUrl = "https://maps.app.goo.gl/jxVUeWpMSMhqPe8B8";
  const googleMapsEmbedUrl = "https://maps.google.com/maps?q=Al+Mamsha+Sharjah+by+Alef&t=&z=15&ie=UTF8&iwloc=&output=embed";

  const filteredItems = activeCategory === 'all'
    ? CONNECTIVITY_DATA
    : CONNECTIVITY_DATA.filter((item) => item.category === activeCategory);

  const activeItem = CONNECTIVITY_DATA.find((i) => i.id === selectedDestination) || CONNECTIVITY_DATA[9];

  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case 'beaches': return <Waves className="w-4 h-4 text-[#0E2533]" />;
      case 'education': return <School className="w-4 h-4 text-[#C59B67]" />;
      case 'healthcare': return <Hospital className="w-4 h-4 text-[#E11D48]" />;
      case 'shopping': return <ShoppingBag className="w-4 h-4 text-[#8E6534]" />;
      case 'transit': return <Plane className="w-4 h-4 text-[#0284C7]" />;
      default: return <MapPin className="w-4 h-4" />;
    }
  };

  return (
    <section id="connectivity" className="py-24 bg-[#F5F1E8] border-t border-[#E7DFD1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-[#B88E4C] text-[11px] font-bold tracking-[0.22em] uppercase mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B88E4C]"></span>
              <span>Location & Strategic Arteries</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F1C19] leading-tight">
              A Connected Peninsula
              <span className="block mt-1.5 font-serif italic font-normal text-[#B88E4C]">
                & Strategic Expressways
              </span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-stone-600 leading-relaxed font-light">
              Situated right beside Sharjah's AED 750M road and tunnel program, offering frictionless routes to Dubai International Airport, Downtown Dubai, and Sharjah's cultural core.
            </p>
          </div>

          {/* Key Distance Quick Tag */}
          <div className="bg-[#FFFFFF] px-5 py-4 rounded-2xl border border-[#E7DFD1] shadow-xs self-start md:self-auto">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#B88E4C] block">Strategic Highway Gateway</span>
            <span className="font-serif text-xl font-bold text-[#1F1C19]">15–25 Mins to Dubai DXB</span>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          {[
            { id: 'all', label: 'All Destinations' },
            { id: 'beaches', label: 'Beaches & Heritage' },
            { id: 'education', label: 'International Schools' },
            { id: 'healthcare', label: 'Hospitals & Medical' },
            { id: 'shopping', label: 'City Centres & Malls' },
            { id: 'transit', label: 'Airports & Dubai Hubs' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wider transition-all border ${
                activeCategory === tab.id
                  ? 'bg-[#1F1C19] text-white border-[#1F1C19] shadow-sm'
                  : 'bg-[#FFFFFF] text-stone-700 border-[#E7DFD1] hover:border-[#B88E4C]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Interactive Layout: Travel Matrix + Map Visualizer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Destination List (Page 4 Connectivity List) */}
          <div className="lg:col-span-6 space-y-2.5 max-h-[580px] overflow-y-auto pr-1">
            {filteredItems.map((item) => {
              const isSelected = item.id === selectedDestination;
              return (
                <div
                  key={item.id}
                  onClick={() => setSelectedDestination(item.id)}
                  className={`p-4 rounded-xl cursor-pointer transition-all border flex items-center justify-between gap-4 ${
                    isSelected
                      ? 'bg-[#1F1C19] text-white border-[#1F1C19] shadow-md'
                      : 'bg-[#FFFFFF] text-[#1F1C19] border-[#E7DFD1] hover:border-[#B88E4C]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${
                      isSelected ? 'bg-white/15 text-[#D8B07D]' : 'bg-[#F5F1E8]'
                    }`}>
                      {getCategoryIcon(item.category)}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-serif text-sm sm:text-base font-bold">
                          {item.name}
                        </h4>
                        {item.highlight && (
                          <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                            isSelected ? 'bg-[#B88E4C] text-[#1F1C19]' : 'bg-[#B88E4C]/20 text-[#8E6534]'
                          }`}>
                            Key
                          </span>
                        )}
                      </div>
                      <p className={`text-xs mt-0.5 ${isSelected ? 'text-stone-300' : 'text-stone-500'}`}>
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Drive Time Pill */}
                  <div className="shrink-0 text-right">
                    <span className={`inline-flex items-center gap-1 text-xs font-bold px-3 py-1.5 rounded-full font-mono ${
                      isSelected
                        ? 'bg-[#B88E4C] text-[#1F1C19]'
                        : 'bg-[#1F1C19] text-white'
                    }`}>
                      <Clock className="w-3 h-3" />
                      {item.driveTime}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Stylized Transport Schematic & Google Map Embed */}
          <div className="lg:col-span-6 bg-[#FFFFFF] p-6 rounded-2xl border border-[#E7DFD1] shadow-sm flex flex-col justify-between">
            <div className="pb-3 border-b border-[#E7DFD1] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#B88E4C] block">
                  Interactive Road Network
                </span>
                <h4 className="font-serif text-lg font-bold text-[#1F1C19]">
                  Al Mamsha Sharjah & Regional Highway Corridor
                </h4>
              </div>

              {/* View Switcher & External Google Maps Link */}
              <div className="flex items-center gap-2 self-start sm:self-auto">
                <div className="flex items-center p-1 bg-[#F5F1E8] rounded-xl border border-[#E7DFD1] text-xs font-semibold">
                  <button
                    type="button"
                    onClick={() => setMapView('google')}
                    className={`px-3 py-1 rounded-lg transition-all flex items-center gap-1.5 ${
                      mapView === 'google'
                        ? 'bg-[#1F1C19] text-white shadow-xs'
                        : 'text-stone-600 hover:text-stone-900'
                    }`}
                  >
                    <MapPin className="w-3 h-3 text-[#B88E4C]" />
                    <span>Live Google Map</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setMapView('schematic')}
                    className={`px-3 py-1 rounded-lg transition-all flex items-center gap-1.5 ${
                      mapView === 'schematic'
                        ? 'bg-[#1F1C19] text-white shadow-xs'
                        : 'text-stone-600 hover:text-stone-900'
                    }`}
                  >
                    <Layers className="w-3 h-3 text-[#B88E4C]" />
                    <span>Corridor Schematic</span>
                  </button>
                </div>

                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-[#FAF8F5] border border-[#E7DFD1] hover:border-[#B88E4C] text-[#8E6534] hover:text-[#1F1C19] transition-all flex items-center justify-center shrink-0"
                  title="Open location in Google Maps"
                  aria-label="Open location in Google Maps"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Map Display: Live Google Maps Embed OR SVG Schematic */}
            {mapView === 'google' ? (
              <div className="relative w-full aspect-[4/3] sm:h-[390px] my-4 rounded-xl overflow-hidden bg-stone-100 border border-stone-300 shadow-inner group">
                <iframe
                  title="Al Mamsha Sharjah Google Map Location"
                  src={googleMapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />

                {/* Top Location Overlay Badge */}
                <div className="absolute top-3 left-3 bg-[#1F1C19]/90 backdrop-blur-md text-white px-3 py-1.5 rounded-xl border border-white/15 shadow-md flex items-center gap-2 pointer-events-none text-xs">
                  <span className="w-2 h-2 rounded-full bg-[#B88E4C] animate-pulse" />
                  <span className="font-serif font-bold text-[#D8B07D]">Al Mamsha Sharjah by Alef</span>
                  <span className="text-[10px] text-stone-300 font-mono hidden sm:inline">25.3077° N, 55.4677° E</span>
                </div>

                {/* Bottom Direct Link Action Pill */}
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-3 right-3 bg-white/95 hover:bg-white text-[#1F1C19] text-[11px] font-bold px-3 py-1.5 rounded-lg shadow-md border border-[#E7DFD1] hover:border-[#B88E4C] transition-all flex items-center gap-1.5"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3 text-[#B88E4C]" />
                </a>
              </div>
            ) : (
              <div className="relative w-full aspect-[4/3] sm:h-[390px] my-4 rounded-xl overflow-hidden bg-[#EBF4F7] border border-stone-300">
                <svg viewBox="0 0 500 400" className="w-full h-full select-none">
                  {/* Arabian Gulf Water Background */}
                  <rect x="0" y="0" width="500" height="400" fill="#E8F4F8" />

                  {/* Coastline Landmass */}
                  <path
                    d="M 120 0 
                       C 130 50, 160 80, 200 90 
                       C 260 100, 300 60, 350 70 
                       C 420 80, 470 120, 500 130
                       L 500 400 L 0 400 L 0 0 Z"
                    fill="#FAF8F5"
                    stroke="#D8CEBD"
                    strokeWidth="2"
                  />

                  {/* Al Khan Lagoon & Al Mamzar Lake water bodies */}
                  <path
                    d="M 170 120 
                       C 200 110, 240 140, 230 180 
                       C 220 220, 170 240, 150 210 
                       C 130 180, 150 130, 170 120 Z"
                    fill="#D4EAF2"
                    stroke="#99CDE1"
                    strokeWidth="2"
                  />
                  <text x="185" y="175" textAnchor="middle" className="text-[9px] fill-[#1B4D66] font-semibold">Al Khan Lagoon</text>

                  <path
                    d="M 140 245 
                       C 165 240, 190 260, 180 300 
                       C 170 330, 130 340, 120 310 
                       C 110 280, 120 250, 140 245 Z"
                    fill="#D4EAF2"
                    stroke="#99CDE1"
                    strokeWidth="2"
                  />
                  <text x="150" y="295" textAnchor="middle" className="text-[9px] fill-[#1B4D66] font-semibold">Al Mamzar Lake</text>

                  {/* Road Networks */}
                  {/* Coastal Corniche Road (Blue) */}
                  <path d="M 80 80 C 130 95, 170 110, 210 115 C 260 120, 300 150, 340 180" fill="none" stroke="#0284C7" strokeWidth="4" strokeLinecap="round" />
                  <text x="120" y="115" className="text-[8px] fill-[#0284C7] font-bold">CORNICHE ROAD</text>

                  {/* Al Taawun Street (Secondary / Amber) */}
                  <path d="M 180 210 C 220 220, 270 240, 320 270 C 370 300, 420 340, 460 380" fill="none" stroke="#D97706" strokeWidth="4" strokeLinecap="round" />
                  <text x="250" y="235" className="text-[8px] fill-[#D97706] font-bold">AL TAAWUN ST</text>

                  {/* Al Ittihad Road / Highway to Dubai (Primary / Green) */}
                  <path d="M 230 150 C 280 180, 330 220, 380 270 C 430 320, 470 370, 500 400" fill="none" stroke="#2E7D32" strokeWidth="5" strokeLinecap="round" />
                  <text x="350" y="255" className="text-[9px] fill-[#2E7D32] font-bold">AL ITTIHAD ROAD (E11)</text>

                  {/* Dubai - Sharjah Border Dotted Line */}
                  <path d="M 60 330 L 480 330" fill="none" stroke="#6B7280" strokeWidth="2" strokeDasharray="6 4" />
                  <text x="420" y="325" textAnchor="middle" className="text-[9px] fill-[#6B7280] font-bold tracking-widest uppercase">SHARJAH / DUBAI BORDER</text>

                  {/* Project Location Pin (Al Khan Waterfront Plot) */}
                  <g className="cursor-pointer">
                    <circle cx="110" cy="75" r="14" fill="#B88E4C" fillOpacity="0.25" className="animate-ping" />
                    <circle cx="110" cy="75" r="8" fill="#1F1C19" stroke="#B88E4C" strokeWidth="2.5" />
                    <rect x="70" y="35" width="140" height="24" rx="4" fill="#1F1C19" />
                    <text x="140" y="51" textAnchor="middle" className="text-[9px] fill-[#FAF8F5] font-bold uppercase tracking-wider font-sans">
                      ★ AL KHAN PLOT
                    </text>
                  </g>

                  {/* Selected Destination Marker Pin */}
                  <g>
                    <circle cx="340" cy="270" r="7" fill="#B88E4C" stroke="#FAF8F5" strokeWidth="2" />
                    <rect x="310" y="290" width="130" height="22" rx="4" fill="#FAF8F5" stroke="#B88E4C" strokeWidth="1" />
                    <text x="375" y="304" textAnchor="middle" className="text-[8.5px] fill-[#1F1C19] font-bold">
                      {activeItem.name.length > 18 ? activeItem.name.substring(0, 18) + '...' : activeItem.name}
                    </text>
                  </g>
                </svg>
              </div>
            )}

            {/* Selected Target Summary Box */}
            <div className="p-4 rounded-xl bg-[#FBF9F5] border border-[#E7DFD1] flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#B88E4C] block">
                  Selected Destination
                </span>
                <h5 className="font-serif text-sm font-bold text-[#1F1C19]">
                  {activeItem.name}
                </h5>
                <p className="text-xs text-stone-600">{activeItem.description}</p>
              </div>
              <div className="text-right shrink-0">
                <span className="text-xs font-bold text-[#1F1C19] bg-[#B88E4C]/20 px-3 py-1.5 rounded-full font-mono block">
                  {activeItem.driveTime}
                </span>
                <span className="text-[11px] text-stone-500 block mt-1">Approx ~{activeItem.distanceKm} km</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
