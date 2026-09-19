import React, { useState } from 'react';
import { PROJECT_OVERVIEW } from '../data/projectData';
import { Compass, CheckCircle2, ChevronRight, Download, Send, Sparkles } from 'lucide-react';

interface HeroProps {
  onOpenBrochure: () => void;
  onOpenEnquire: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBrochure, onOpenEnquire }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    unitInterest: '2BR'
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', phone: '', email: '', unitInterest: '2BR' });
    }, 4000);
  };

  return (
    <section id="overview" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      {/* Background Architectural Canvas & Subtle Gradients */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-banner.jpg"
          alt="Al Khan Waterfront Residences Sharjah"
          className="w-full h-full object-cover object-center scale-100 transform filter brightness-[0.9] contrast-[1.05]"
        />
        {/* Coastal atmospheric gradient layers */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#181614]/95 via-[#1F1C19]/80 to-[#1F1C19]/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FBF9F5] via-transparent to-black/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Vision & Narrative */}
          <div className="lg:col-span-7 text-white space-y-6">
            {/* Project Eyebrow Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-[#B88E4C]/40 text-[#D8B07D] text-xs font-semibold tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B88E4C]"></span>
              <span>A Signature Waterfront Destination • Maryam Island, Sharjah</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold leading-[1.12] tracking-tight text-[#FAF8F5]">
              Panoramic Sea Views on Three Sides.
              <span className="block mt-2 font-normal italic font-serif text-[#D4A853]">
                Resort Coastal Living at Just 10% Down Payment.
              </span>
            </h1>

            {/* Descriptive Scope */}
            <p className="text-stone-300 text-base sm:text-lg leading-relaxed max-w-2xl font-light">
              Set across an expansive 3-hectare beachfront plot, <strong className="text-white font-medium">Al Khan</strong> introduces five contemporary residential towers with refined Neo-Art Deco influences, landscaped podium gardens, direct beach connection, and an active waterfront promenade.
            </p>

            {/* Key Project Value Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-black/30 backdrop-blur-md border border-[#B88E4C]/25">
                <span className="text-[11px] text-[#D8B07D] uppercase tracking-wider block font-semibold">Residences</span>
                <span className="text-xl sm:text-2xl font-bold font-serif text-white">862 Units</span>
                <span className="text-[11px] text-stone-300 block">5 Sculpted Towers</span>
              </div>
              <div className="p-3.5 rounded-xl bg-black/30 backdrop-blur-md border border-[#B88E4C]/25">
                <span className="text-[11px] text-[#D8B07D] uppercase tracking-wider block font-semibold">Site Area</span>
                <span className="text-xl sm:text-2xl font-bold font-serif text-white">3 Hectares</span>
                <span className="text-[11px] text-stone-300 block">Direct Beachfront</span>
              </div>
              <div className="p-3.5 rounded-xl bg-black/30 backdrop-blur-md border border-[#B88E4C]/25 col-span-2 sm:col-span-1">
                <span className="text-[11px] text-[#D8B07D] uppercase tracking-wider block font-semibold">Transit</span>
                <span className="text-xl sm:text-2xl font-bold font-serif text-white">15 Minutes</span>
                <span className="text-[11px] text-stone-300 block">To Dubai DXB Airport</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#residences"
                className="px-6 py-3.5 rounded-lg bg-[#B88E4C] hover:bg-[#A37B3C] text-[#1F1C19] font-bold text-sm tracking-wider uppercase transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
              >
                <span>Explore Floor Plans</span>
                <ChevronRight className="w-4 h-4 text-[#1F1C19]" />
              </a>
              <button
                onClick={onOpenBrochure}
                className="px-6 py-3.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold text-sm tracking-wider uppercase transition-all border border-white/30 backdrop-blur-sm flex items-center gap-2"
              >
                <Download className="w-4 h-4 text-[#D8B07D]" />
                <span>Download Brochure</span>
              </button>
            </div>
          </div>

          {/* Right Column: VIP Priority Registration Card (Ajmera Manhattan Ideation) */}
          <div className="lg:col-span-5">
            <div className="bg-[#FFFFFF] rounded-2xl shadow-2xl p-6 sm:p-8 border border-[#E7DFD1] text-[#1F1C19] relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#B88E4C] via-[#D8B07D] to-[#1F1C19]" />

              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-[11px] tracking-[0.2em] uppercase font-bold text-[#B88E4C] block flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B88E4C]"></span>
                    Limited Time Launch Scheme
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#1F1C19]">
                    Own Your Coastal Home
                  </h3>
                  <p className="font-serif italic text-sm text-[#B88E4C] font-normal">
                    with Just 10% Down Payment
                  </p>
                </div>
                <div className="p-2.5 rounded-full bg-[#B88E4C]/15 text-[#B88E4C]">
                  <Sparkles className="w-5 h-5" />
                </div>
              </div>

              <p className="text-xs text-stone-600 mb-5 leading-relaxed">
                Register for early investor access, pre-launch price lists, and guaranteed waterfront allocation.
              </p>

              {submitted ? (
                <div className="p-6 rounded-xl bg-[#1F1C19] text-white text-center space-y-3 animate-fade-in">
                  <CheckCircle2 className="w-10 h-10 text-[#22C55E] mx-auto" />
                  <h4 className="font-serif text-lg font-bold text-[#FAF8F5]">Thank You!</h4>
                  <p className="text-xs text-stone-300">
                    Your request has been registered. Our senior investment advisor will connect with you within 15 minutes.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wide mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Tariq Al Mansoor"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 focus:border-[#B88E4C] focus:ring-1 focus:ring-[#B88E4C] outline-none text-sm bg-stone-50/50"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wide mb-1">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+971 58 570 3234"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 focus:border-[#B88E4C] focus:ring-1 focus:ring-[#B88E4C] outline-none text-sm bg-stone-50/50"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wide mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="tariq@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 focus:border-[#B88E4C] focus:ring-1 focus:ring-[#B88E4C] outline-none text-sm bg-stone-50/50"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wide mb-1">
                      Residence Preference
                    </label>
                    <select
                      value={formData.unitInterest}
                      onChange={(e) => setFormData({ ...formData, unitInterest: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 focus:border-[#B88E4C] focus:ring-1 focus:ring-[#B88E4C] outline-none text-sm bg-stone-50/50 text-stone-800"
                    >
                      <option value="1BR">1 Bedroom (Net 64 Sq.M / 689 Sq.Ft)</option>
                      <option value="2BR">2 Bedrooms (Net 84 Sq.M / 904 Sq.Ft)</option>
                      <option value="3BR">3 Bedrooms (Net 154 Sq.M / 1,658 Sq.Ft)</option>
                      <option value="4BR">4 Bedrooms Coastal Haven</option>
                      <option value="PENTHOUSE">Sky Penthouse (Net 185 Sq.M / 1,991 Sq.Ft)</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-2 py-3.5 rounded-lg bg-[#1F1C19] hover:bg-[#2C2723] text-[#FAF8F5] text-xs font-bold tracking-wider uppercase transition-all shadow hover:shadow-md flex items-center justify-center gap-2 border border-[#B88E4C]/40"
                  >
                    <span>UNLOCK SCHEME DETAILS</span>
                    <ChevronRight className="w-4 h-4 text-[#B88E4C]" />
                  </button>

                  <div className="flex items-center justify-center gap-4 pt-1 text-[11px] text-stone-500">
                    <span className="flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#B88E4C]" /> 100% Freehold Ownership
                    </span>
                    <span className="flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#B88E4C]" /> Zero Brokerage Fee
                    </span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Floating Key Highlights Bar (Bottom Hero Ribbon - 6 Column Spec Bar) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="bg-[#1F1C19] rounded-2xl shadow-xl p-5 border border-[#B88E4C]/30 text-white">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-6 divide-y md:divide-y-0 md:divide-x divide-stone-800 text-center">
            <div className="pt-2 md:pt-0">
              <span className="text-[10px] uppercase tracking-wider text-[#D8B07D] font-medium block">TYPE</span>
              <span className="text-lg font-bold font-serif text-[#FAF8F5]">Luxury Sea Deck</span>
              <span className="text-[11px] text-stone-400 block">5 Coastal Towers</span>
            </div>
            <div className="pt-2 md:pt-0">
              <span className="text-[10px] uppercase tracking-wider text-[#D8B07D] font-medium block">LOCATION</span>
              <span className="text-lg font-bold font-serif text-[#FAF8F5]">Maryam Island</span>
              <span className="text-[11px] text-stone-400 block">Al Khan, Sharjah</span>
            </div>
            <div className="pt-2 md:pt-0">
              <span className="text-[10px] uppercase tracking-wider text-[#D8B07D] font-medium block">STARTING PRICE</span>
              <span className="text-lg font-bold font-serif text-[#E05A47]">AED 1.15 M*</span>
              <span className="text-[11px] text-stone-400 block">10% Down Payment</span>
            </div>
            <div className="pt-2 md:pt-0">
              <span className="text-[10px] uppercase tracking-wider text-[#D8B07D] font-medium block">CONFIGURATIONS</span>
              <span className="text-lg font-bold font-serif text-[#FAF8F5]">1, 2 & 3 BHK</span>
              <span className="text-[11px] text-stone-400 block">Plus Sky Penthouses</span>
            </div>
            <div className="pt-2 md:pt-0">
              <span className="text-[10px] uppercase tracking-wider text-[#D8B07D] font-medium block">NET AREA</span>
              <span className="text-lg font-bold font-serif text-[#FAF8F5]">689 - 1,991 SQ.FT</span>
              <span className="text-[11px] text-stone-400 block">64 - 185 Sq. Metres</span>
            </div>
            <div className="pt-2 md:pt-0">
              <span className="text-[10px] uppercase tracking-wider text-[#D8B07D] font-medium block">POSSESSION</span>
              <span className="text-lg font-bold font-serif text-[#FAF8F5]">Q4 2027</span>
              <span className="text-[11px] text-stone-400 block">60/40 Payment Plan</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
