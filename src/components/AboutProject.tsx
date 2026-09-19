import React from 'react';
import { Waves, Sparkles, Building2, Trees, UtensilsCrossed, ShieldCheck } from 'lucide-react';

export const AboutProject: React.FC = () => {
  return (
    <section className="py-24 bg-[#FBF9F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual Architectural Montage */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#E7DFD1] group">
              <img
                src="/about-hero.jpg"
                alt="Al Khan 3-hectare beachfront destination"
                className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[#D8B07D] block mb-1">
                  Masterplan & Architecture
                </span>
                <p className="font-serif text-xl font-bold">
                  3-Hectare Beachfront Peninsula with Triple Sea Views
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="relative rounded-xl overflow-hidden shadow-md border border-[#E7DFD1]">
                <img
                  src="/about-podium.jpg"
                  alt="Elevated podium swimming pools and tropical gardens"
                  className="w-full h-44 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent flex items-end p-3.5">
                  <span className="text-white text-xs font-semibold">Elevated Podium Gardens</span>
                </div>
              </div>
              <div className="relative rounded-xl overflow-hidden shadow-md border border-[#E7DFD1]">
                <img
                  src="/about-interior.jpg"
                  alt="Panoramic sea-facing living salon"
                  className="w-full h-44 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent flex items-end p-3.5">
                  <span className="text-white text-xs font-semibold">Panoramic Sea Living</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural & Lifestyle Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-[#B88E4C] text-[11px] font-bold tracking-[0.22em] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B88E4C]"></span>
              <span>Architectural Philosophy</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F1C19] leading-tight">
              A Landmark Waterfront Destination
              <span className="block mt-1.5 font-serif italic font-normal text-[#B88E4C]">
                & Coastal Sanctuaries
              </span>
            </h2>

            <div className="space-y-4 text-stone-600 text-sm sm:text-base leading-relaxed font-normal">
              <p>
                A signature waterfront destination on <strong className="text-[#1F1C19] font-semibold">Al Khan / Maryam Island, Sharjah</strong>, set across an expansive 3-hectare beachfront site with panoramic sea views on three sides.
              </p>
              <p>
                The development comprises five elegant contemporary residential buildings, thoughtfully arranged around a landscaped garden and elevated podium, with direct connections to the beachfront and a vibrant public promenade.
              </p>
              <p>
                Inspired by Sharjah's coastal character and architectural heritage, the design blends contemporary coastal architecture with refined <strong className="text-[#1F1C19] font-semibold">Neo-Art Deco influences</strong>, softened curvilinear forms, and distinctive façade detailing that shields against direct solar radiation while channeling refreshing marine breezes.
              </p>
              <div className="text-stone-600 text-sm italic border-l-2 border-[#B88E4C] pl-4 py-2 bg-[#F5F1E8] rounded-r-xl">
                "A destination designed to bring together waterfront living, landscaped spaces, lifestyle amenities, and distinctive F&B experiences, creating a desirable new landmark for residents and international visitors alike."
              </div>
            </div>

            {/* Core Pillars */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-[#B88E4C]/15 text-[#8E6534] shrink-0">
                  <Waves className="w-5 h-5 text-[#B88E4C]" />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-bold text-[#1F1C19]">Triple Water Frontage</h4>
                  <p className="text-xs text-stone-500">Surrounded by water on 3 sides</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-[#B88E4C]/15 text-[#8E6534] shrink-0">
                  <Building2 className="w-5 h-5 text-[#B88E4C]" />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-bold text-[#1F1C19]">Five Mid-Rise Towers</h4>
                  <p className="text-xs text-stone-500">Harmonious podium masterplan</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-[#B88E4C]/15 text-[#8E6534] shrink-0">
                  <Trees className="w-5 h-5 text-[#B88E4C]" />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-bold text-[#1F1C19]">Elevated Podium Park</h4>
                  <p className="text-xs text-stone-500">Private gardens & resort decks</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-[#B88E4C]/15 text-[#8E6534] shrink-0">
                  <UtensilsCrossed className="w-5 h-5 text-[#B88E4C]" />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-bold text-[#1F1C19]">Seaside Dining & Retail</h4>
                  <p className="text-xs text-stone-500">Silver Spoon Tavern & Wild Grain</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
