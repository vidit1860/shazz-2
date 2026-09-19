import React, { useState } from 'react';
import { INVESTMENT_USPS, LIFESTYLE_USPS } from '../data/projectData';
import {
  TrendingUp,
  Heart,
  Route,
  Compass,
  Award,
  ShieldCheck,
  Utensils,
  Eye,
  Palmtree,
  Waves,
  Anchor,
  Leaf,
  Droplets,
  Coffee,
  Smile,
  Zap,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

interface DualCaseUSPsProps {
  onOpenBrochure: () => void;
  onOpenEnquire: () => void;
}

export const DualCaseUSPs: React.FC<DualCaseUSPsProps> = ({ onOpenBrochure, onOpenEnquire }) => {
  const [activeTab, setActiveTab] = useState<'lifestyle' | 'investment'>('lifestyle');

  // Helper to map icon names
  const renderIcon = (name: string) => {
    switch (name) {
      case 'Route': return <Route className="w-5 h-5" />;
      case 'Compass': return <Compass className="w-5 h-5" />;
      case 'Award': return <Award className="w-5 h-5" />;
      case 'TrendingUp': return <TrendingUp className="w-5 h-5" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5" />;
      case 'Utensils': return <Utensils className="w-5 h-5" />;
      case 'Eye': return <Eye className="w-5 h-5" />;
      case 'Palmtree': return <Palmtree className="w-5 h-5" />;
      case 'Waves': return <Waves className="w-5 h-5" />;
      case 'Anchor': return <Anchor className="w-5 h-5" />;
      case 'Leaf': return <Leaf className="w-5 h-5" />;
      case 'Droplets': return <Droplets className="w-5 h-5" />;
      case 'Coffee': return <Coffee className="w-5 h-5" />;
      case 'Smile': return <Smile className="w-5 h-5" />;
      case 'Zap': return <Zap className="w-5 h-5" />;
      default: return <Award className="w-5 h-5" />;
    }
  };

  return (
    <section id="lifestyle" className="py-24 bg-[#FBF9F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header & Tab Controls */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-[#B88E4C] text-[11px] font-bold tracking-[0.22em] uppercase mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B88E4C]"></span>
            <span>Project Advantages</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#1F1C19] leading-tight">
            The Definitive Case
            <span className="block mt-1.5 font-serif italic font-normal text-[#B88E4C]">
              For Residents & Global Investors
            </span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-stone-600 leading-relaxed font-light">
            Whether choosing your family's coastal sanctuary or building a high-yielding global real estate portfolio, Al Khan offers an unmatched proposition.
          </p>

          {/* Interactive Case Switcher Tabs */}
          <div className="inline-flex p-1.5 rounded-2xl bg-[#F5F1E8] border border-[#E7DFD1] mt-8 shadow-xs">
            <button
              onClick={() => setActiveTab('lifestyle')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold tracking-wider uppercase transition-all ${
                activeTab === 'lifestyle'
                  ? 'bg-[#1F1C19] text-white shadow-md'
                  : 'text-stone-700 hover:text-black'
              }`}
            >
              <Heart className={`w-4 h-4 ${activeTab === 'lifestyle' ? 'text-[#B88E4C]' : 'text-stone-500'}`} />
              <span>The Lifestyle Case (For Residents)</span>
            </button>
            <button
              id="investment"
              onClick={() => setActiveTab('investment')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold tracking-wider uppercase transition-all ${
                activeTab === 'investment'
                  ? 'bg-[#1F1C19] text-white shadow-md'
                  : 'text-stone-700 hover:text-black'
              }`}
            >
              <TrendingUp className={`w-4 h-4 ${activeTab === 'investment' ? 'text-[#B88E4C]' : 'text-stone-500'}`} />
              <span>The Investment Case (For Investors)</span>
            </button>
          </div>
        </div>

        {/* Dynamic USP Grid */}
        {activeTab === 'lifestyle' ? (
          <div className="space-y-10 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {LIFESTYLE_USPS.map((usp, idx) => (
                <div
                  key={usp.id}
                  className="bg-[#FFFFFF] p-6 rounded-2xl border border-[#E7DFD1] hover:border-[#B88E4C] transition-all hover:shadow-lg group relative flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-11 h-11 rounded-xl bg-[#B88E4C]/15 flex items-center justify-center text-[#8E6534] group-hover:bg-[#1F1C19] group-hover:text-[#D8B07D] transition-colors">
                        {renderIcon(usp.iconName)}
                      </div>
                      <span className="font-serif text-sm font-bold text-stone-400 group-hover:text-[#B88E4C] transition-colors">
                        0{idx + 1}
                      </span>
                    </div>
                    <div className="mb-2">
                      <span className="text-[10px] uppercase font-bold tracking-wider text-[#B88E4C] bg-[#B88E4C]/10 px-2.5 py-0.5 rounded-full inline-block mb-1.5">
                        {usp.stat}
                      </span>
                      <h4 className="font-serif text-lg font-bold text-[#1F1C19]">
                        {usp.title}
                      </h4>
                    </div>
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-light">
                      {usp.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Lifestyle CTA Banner */}
            <div className="bg-[#1F1C19] rounded-2xl p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 border border-[#B88E4C]/30 shadow-xl">
              <div className="space-y-1 text-center md:text-left">
                <span className="text-xs uppercase tracking-widest text-[#D8B07D] font-semibold">Live By The Sea</span>
                <h3 className="font-serif text-2xl font-bold">Step Straight From Your Door Onto The Beach</h3>
                <p className="text-xs text-stone-300">Experience resort-inspired daily living with world-class facilities and private beachfront access.</p>
              </div>
              <button
                onClick={onOpenEnquire}
                className="shrink-0 px-6 py-3.5 rounded-xl bg-[#B88E4C] hover:bg-[#A37B3C] text-[#1F1C19] font-bold text-xs uppercase tracking-wider transition-colors shadow flex items-center gap-2"
              >
                <span>Book a Private Tour</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-10 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {INVESTMENT_USPS.map((usp, idx) => (
                <div
                  key={usp.id}
                  className="bg-[#FFFFFF] p-6 rounded-2xl border border-[#E7DFD1] hover:border-[#B88E4C] transition-all hover:shadow-lg group relative flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-11 h-11 rounded-xl bg-[#1F1C19] flex items-center justify-center text-[#D8B07D] group-hover:bg-[#B88E4C] group-hover:text-white transition-colors">
                        {renderIcon(usp.iconName)}
                      </div>
                      <span className="font-serif text-sm font-bold text-stone-400 group-hover:text-[#B88E4C] transition-colors">
                        0{idx + 1}
                      </span>
                    </div>
                    <div className="mb-2">
                      <span className="text-[10px] uppercase font-bold tracking-wider text-[#B88E4C] bg-[#B88E4C]/10 px-2.5 py-0.5 rounded-full inline-block mb-1.5 font-mono">
                        {usp.stat}
                      </span>
                      <h4 className="font-serif text-lg font-bold text-[#1F1C19]">
                        {usp.title}
                      </h4>
                    </div>
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-light">
                      {usp.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Investment Highlight Strip */}
            <div className="bg-[#F5F1E8] rounded-2xl p-8 border border-[#E7DFD1] grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="space-y-1">
                <span className="text-xs text-stone-500 uppercase font-bold">Sharjah Road & Tunnel Program</span>
                <div className="font-serif text-2xl font-bold text-[#1F1C19]">AED 750 Million</div>
                <p className="text-xs text-stone-600">Major public infrastructure driving rapid capital appreciation</p>
              </div>
              <div className="space-y-1 border-t md:border-t-0 md:border-x border-[#E7DFD1] pt-4 md:pt-0">
                <span className="text-xs text-stone-500 uppercase font-bold">Rental Yield Advantage</span>
                <div className="font-serif text-2xl font-bold text-[#B88E4C]">8.5% – 10.2% ROI</div>
                <p className="text-xs text-stone-600">Substantially outperforms prime Dubai averages with lower entry capital</p>
              </div>
              <div className="space-y-1 pt-4 md:pt-0">
                <span className="text-xs text-stone-500 uppercase font-bold">Investor Safeguards</span>
                <div className="font-serif text-2xl font-bold text-[#1F1C19]">100% Freehold</div>
                <p className="text-xs text-stone-600">Golden Visa qualification & zero income or capital gains taxes</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
