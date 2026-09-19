import React, { useState } from 'react';
import { AMENITIES_LIST } from '../data/projectData';
import { AmenityItem } from '../types';
import {
  Sun,
  Droplets,
  Footprints,
  Anchor,
  Activity,
  Sparkles,
  Shield,
  Leaf,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  CheckCircle2
} from 'lucide-react';

export const Amenities: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'aquatic' | 'wellness' | 'leisure' | 'hospitality'>('all');
  const [selectedAmenityIndex, setSelectedAmenityIndex] = useState<number | null>(null);

  const getAmenityIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sun': return <Sun className="w-4 h-4" />;
      case 'Droplets': return <Droplets className="w-4 h-4" />;
      case 'Footprints': return <Footprints className="w-4 h-4" />;
      case 'Anchor': return <Anchor className="w-4 h-4" />;
      case 'Activity': return <Activity className="w-4 h-4" />;
      case 'Sparkles': return <Sparkles className="w-4 h-4" />;
      case 'Shield': return <Shield className="w-4 h-4" />;
      case 'Leaf': return <Leaf className="w-4 h-4" />;
      default: return <Sparkles className="w-4 h-4" />;
    }
  };

  const filteredAmenities = AMENITIES_LIST.filter((item) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'aquatic') return item.id === 'beach-club' || item.id === 'resort-pool' || item.id === 'water-sports';
    if (activeFilter === 'wellness') return item.id === 'fitness-studio' || item.id === 'podium-gardens';
    if (activeFilter === 'leisure') return item.id === 'promenade-dining' || item.id === 'beach-club';
    if (activeFilter === 'hospitality') return item.id === 'concierge-valet' || item.id === 'kids-splash';
    return true;
  });

  const handleNext = () => {
    if (selectedAmenityIndex !== null) {
      setSelectedAmenityIndex((selectedAmenityIndex + 1) % filteredAmenities.length);
    }
  };

  const handlePrev = () => {
    if (selectedAmenityIndex !== null) {
      setSelectedAmenityIndex((selectedAmenityIndex - 1 + filteredAmenities.length) % filteredAmenities.length);
    }
  };

  return (
    <section id="amenities" className="py-24 bg-[#F5F1E8] border-t border-[#E7DFD1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-[#B88E4C] text-[11px] font-bold tracking-[0.22em] uppercase mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B88E4C]"></span>
              <span>Signature Lifestyle Amenities</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F1C19] leading-tight">
              Curated Resort Amenities
              <span className="block mt-1.5 font-serif italic font-normal text-[#B88E4C]">
                & Private Coastal Enclaves
              </span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-stone-600 leading-relaxed font-light">
              Tailored for active wellness, tranquil shoreline unwinding, and memorable social moments across the 3-hectare Al Khan peninsula.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 self-start md:self-auto">
            {[
              { id: 'all', label: 'All Amenities' },
              { id: 'aquatic', label: 'Beach & Pools' },
              { id: 'wellness', label: 'Wellness & Fitness' },
              { id: 'leisure', label: 'Promenade & Dining' },
              { id: 'hospitality', label: 'Services & Family' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id as any)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold tracking-wider transition-all border ${
                  activeFilter === tab.id
                    ? 'bg-[#1F1C19] text-white border-[#1F1C19] shadow-xs'
                    : 'bg-[#FFFFFF] text-stone-700 border-[#E7DFD1] hover:border-[#B88E4C]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Amenity Cards Grid (Styled like Visual Perspectives & Architecture) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredAmenities.map((amenity, idx) => (
            <div
              key={amenity.id}
              onClick={() => setSelectedAmenityIndex(idx)}
              className="group relative rounded-2xl overflow-hidden shadow-md bg-[#1F1C19] cursor-pointer aspect-[16/13] border border-[#E7DFD1] hover:border-[#B88E4C] transition-all hover:shadow-xl"
            >
              {/* Full Background Photograph */}
              <img
                src={amenity.imageUrl}
                alt={amenity.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95 group-hover:brightness-100"
              />

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20 opacity-85 group-hover:opacity-95 transition-opacity" />

              {/* Top Accent Badges */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                {amenity.highlight && (
                  <span className="px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-md border border-[#B88E4C]/40 text-[#D8B07D] text-[10px] font-bold tracking-wider uppercase">
                    {amenity.highlight}
                  </span>
                )}
                <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-[#D8B07D] border border-white/10 shadow-xs ml-auto">
                  {getAmenityIcon(amenity.icon)}
                </div>
              </div>

              {/* Bottom Information Content */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#D8B07D] block mb-1">
                  {amenity.category}
                </span>
                <h4 className="font-serif text-base sm:text-lg font-bold leading-snug group-hover:text-[#FAF8F5] transition-colors">
                  {amenity.title}
                </h4>
                <p className="text-xs text-stone-300 mt-1 line-clamp-2 font-light leading-relaxed">
                  {amenity.desc}
                </p>

                {/* Sub-label */}
                <div className="mt-2.5 pt-2 border-t border-white/15 flex items-center justify-between text-[11px] text-[#D8B07D]">
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-[#B88E4C]" />
                    <span>Resident Access</span>
                  </span>
                  <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity text-white text-[10px] font-semibold">
                    <span>View</span>
                    <Maximize2 className="w-3 h-3 text-[#D8B07D]" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox / Amenity Detail Modal */}
      {selectedAmenityIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-lg flex items-center justify-center p-4 sm:p-6 animate-fade-in">
          <button
            onClick={() => setSelectedAmenityIndex(null)}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
            aria-label="Close Modal"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={handlePrev}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
            aria-label="Previous Amenity"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
            aria-label="Next Amenity"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="max-w-4xl max-h-[90vh] flex flex-col items-center bg-[#1F1C19] border border-[#E7DFD1]/20 rounded-2xl overflow-hidden shadow-2xl">
            <div className="relative w-full aspect-[16/9] max-h-[55vh] overflow-hidden">
              <img
                src={filteredAmenities[selectedAmenityIndex].imageUrl}
                alt={filteredAmenities[selectedAmenityIndex].title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F1C19] via-transparent to-transparent" />
            </div>

            <div className="p-6 sm:p-8 text-center text-white max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#D8B07D] text-xs font-bold tracking-widest uppercase mb-2">
                {getAmenityIcon(filteredAmenities[selectedAmenityIndex].icon)}
                <span>{filteredAmenities[selectedAmenityIndex].category}</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#FAF8F5] mb-2">
                {filteredAmenities[selectedAmenityIndex].title}
              </h3>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-light mb-4">
                {filteredAmenities[selectedAmenityIndex].desc}
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-[#D8B07D]">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#B88E4C]" />
                  <span>Reserved Privileges for Al Khan Owners</span>
                </span>
                {filteredAmenities[selectedAmenityIndex].highlight && (
                  <span className="px-2.5 py-0.5 rounded-full bg-[#B88E4C]/20 border border-[#B88E4C]/40 text-[#FAF8F5] font-semibold text-[11px]">
                    {filteredAmenities[selectedAmenityIndex].highlight}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

