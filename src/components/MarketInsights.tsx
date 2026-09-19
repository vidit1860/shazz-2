import React from 'react';
import { MARKET_INSIGHTS } from '../data/projectData';
import { TrendingUp, Users, Globe, Building, Award, ShieldCheck, ArrowUpRight } from 'lucide-react';

export const MarketInsights: React.FC = () => {
  return (
    <section id="market-insights" className="py-20 bg-[#F5F1E8] border-y border-[#E7DFD1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 text-[#B88E4C] text-[11px] font-bold tracking-[0.22em] uppercase mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B88E4C]"></span>
            <span>Economic Backdrop & Market Intelligence</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F1C19] leading-tight">
            Insights on Sharjah Real Estate
            <span className="block mt-1.5 font-serif italic font-normal text-[#B88E4C]">
              & Strategic Capital Appreciation
            </span>
          </h2>
          <p className="mt-4 text-base text-stone-600 leading-relaxed font-light">
            Sharjah's real estate market continues to demonstrate robust momentum, driven by visionary infrastructure investments, progressive foreign ownership regulations, and soaring international investor participation.
          </p>
        </div>

        {/* Primary Growth Metric Banner */}
        <div className="bg-[#1F1C19] rounded-2xl p-6 sm:p-10 text-white shadow-xl mb-12 border border-[#B88E4C]/35">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7 space-y-4">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#D8B07D] block flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#B88E4C]"></span>
                H1 2026 Official Performance
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#FAF8F5]">
                AED 29.5 Billion in Total Transactions
              </h3>
              <p className="text-sm text-stone-300 leading-relaxed font-light">
                Sharjah recorded <strong className="text-white font-medium">59,460 transactions</strong> in the first half of 2026 alone—marking an unprecedented <span className="text-[#22C55E] font-semibold">+23.7% year-on-year surge</span>, confirming deep global capital inflow and market stability.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white/10 text-stone-200">
                  <span className="w-2 h-2 rounded-full bg-[#22C55E]"></span>
                  Transaction Value: +9.3% YoY
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white/10 text-stone-200">
                  <span className="w-2 h-2 rounded-full bg-[#22C55E]"></span>
                  Sales Volume: +23.7% YoY
                </span>
              </div>
            </div>

            <div className="md:col-span-5 bg-[#181614]/90 rounded-xl p-6 border border-stone-800 backdrop-blur-sm space-y-4">
              <div className="flex items-center justify-between border-b border-stone-800 pb-3">
                <span className="text-xs text-stone-400 uppercase tracking-wider">Total H1 Transaction Value</span>
                <span className="text-xl font-bold font-serif text-[#D8B07D]">{MARKET_INSIGHTS.totalValueH1}</span>
              </div>
              <div className="flex items-center justify-between border-b border-stone-800 pb-3">
                <span className="text-xs text-stone-400 uppercase tracking-wider">Total Recorded Deals</span>
                <span className="text-lg font-semibold text-white">{MARKET_INSIGHTS.transactionsCount}</span>
              </div>
              <div className="flex items-center justify-between border-b border-stone-800 pb-3">
                <span className="text-xs text-stone-400 uppercase tracking-wider">Al Khan Prime Volume</span>
                <span className="text-lg font-semibold text-[#22C55E]">{MARKET_INSIGHTS.alKhanValue}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-stone-400 uppercase tracking-wider">Al Khan Transactions</span>
                <span className="text-lg font-semibold text-white">{MARKET_INSIGHTS.alKhanTransactions} units</span>
              </div>
            </div>
          </div>
        </div>

        {/* 5 Key Market Drivers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Driver 1 */}
          <div className="bg-[#FFFFFF] p-6 rounded-2xl border border-[#E7DFD1] hover:border-[#B88E4C] transition-all hover:shadow-md group">
            <div className="w-12 h-12 rounded-xl bg-[#B88E4C]/15 flex items-center justify-center text-[#8E6534] mb-4 group-hover:bg-[#B88E4C] group-hover:text-white transition-colors">
              <Globe className="w-6 h-6" />
            </div>
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-serif text-lg font-bold text-[#1F1C19]">Investor Confidence</h4>
              <span className="text-xs font-bold text-[#8E6534] bg-[#B88E4C]/15 px-2.5 py-0.5 rounded-full">121 Nations</span>
            </div>
            <p className="text-xs text-stone-600 leading-relaxed">
              Investment activity continues to strengthen with active capital from 121 nationalities, cementing Sharjah as a premier cross-border safe harbor.
            </p>
          </div>

          {/* Driver 2 */}
          <div className="bg-[#FFFFFF] p-6 rounded-2xl border border-[#E7DFD1] hover:border-[#B88E4C] transition-all hover:shadow-md group">
            <div className="w-12 h-12 rounded-xl bg-[#B88E4C]/15 flex items-center justify-center text-[#8E6534] mb-4 group-hover:bg-[#B88E4C] group-hover:text-white transition-colors">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-serif text-lg font-bold text-[#1F1C19]">International Freehold</h4>
              <span className="text-xs font-bold text-[#8E6534] bg-[#B88E4C]/15 px-2.5 py-0.5 rounded-full">50 Projects</span>
            </div>
            <p className="text-xs text-stone-600 leading-relaxed">
              50 master projects are now sanctioned for 100% non-UAE/GCC freehold ownership, unlocking direct Golden Visa eligibility and seamless title deed transfer.
            </p>
          </div>

          {/* Driver 3 */}
          <div className="bg-[#FFFFFF] p-6 rounded-2xl border border-[#E7DFD1] hover:border-[#B88E4C] transition-all hover:shadow-md group">
            <div className="w-12 h-12 rounded-xl bg-[#B88E4C]/15 flex items-center justify-center text-[#8E6534] mb-4 group-hover:bg-[#B88E4C] group-hover:text-white transition-colors">
              <Building className="w-6 h-6" />
            </div>
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-serif text-lg font-bold text-[#1F1C19]">Residential Dominance</h4>
              <span className="text-xs font-bold text-[#8E6534] bg-[#B88E4C]/15 px-2.5 py-0.5 rounded-full">82.2% Share</span>
            </div>
            <p className="text-xs text-stone-600 leading-relaxed">
              Residential homes remain the overwhelming market driver, representing 82.2% of all sales volume, sustained by end-user demand and high rental occupancy.
            </p>
          </div>

          {/* Driver 4 */}
          <div className="bg-[#FFFFFF] p-6 rounded-2xl border border-[#E7DFD1] hover:border-[#B88E4C] transition-all hover:shadow-md group">
            <div className="w-12 h-12 rounded-xl bg-[#B88E4C]/15 flex items-center justify-center text-[#8E6534] mb-4 group-hover:bg-[#B88E4C] group-hover:text-white transition-colors">
              <Award className="w-6 h-6" />
            </div>
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-serif text-lg font-bold text-[#1F1C19]">Market Expansion</h4>
              <span className="text-xs font-bold text-[#8E6534] bg-[#B88E4C]/15 px-2.5 py-0.5 rounded-full">11 New Launches</span>
            </div>
            <p className="text-xs text-stone-600 leading-relaxed">
              11 premier real estate developments registered in H1 2026, backing sustainable urban growth, modern infrastructure, and vibrant neighborhood diversity.
            </p>
          </div>

          {/* Driver 5 */}
          <div className="bg-[#FFFFFF] p-6 rounded-2xl border border-[#E7DFD1] hover:border-[#B88E4C] transition-all hover:shadow-md group md:col-span-2 lg:col-span-2">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#1F1C19] flex items-center justify-center text-[#D8B07D] shrink-0 border border-[#B88E4C]/30">
                <ArrowUpRight className="w-6 h-6 text-[#D8B07D]" />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-1">
                  <h4 className="font-serif text-lg font-bold text-[#1F1C19]">
                    Al Khan: The #1 Waterfront Investment Magnet
                  </h4>
                  <span className="text-xs font-bold text-[#1F1C19] bg-[#B88E4C]/20 px-2.5 py-0.5 rounded-full">
                    1,077 Deals • AED 1.3 Billion
                  </span>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Al Khan recorded 1,077 individual transactions valued at AED 1.3 Billion in H1 2026 alone, outpacing inland sectors and establishing itself as Sharjah's undisputed coastal lifestyle and capital appreciation epicentre.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
