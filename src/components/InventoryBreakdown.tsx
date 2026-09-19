import React, { useState } from 'react';
import { BUILDING_INVENTORY } from '../data/projectData';
import { Building2, PieChart, BarChart3, CheckCircle2, Layers } from 'lucide-react';

export const InventoryBreakdown: React.FC = () => {
  const [selectedBuilding, setSelectedBuilding] = useState<string>('B3');

  const activeBld = BUILDING_INVENTORY.find((b) => b.id === selectedBuilding) || BUILDING_INVENTORY[0];

  const unitMixData = [
    { type: "1BR", count: 388, percentage: 45, color: "bg-[#1F1C19]", text: "45%" },
    { type: "2BR", count: 379, percentage: 44, color: "bg-[#4A3E31]", text: "44%" },
    { type: "3BR", count: 85, percentage: 10, color: "bg-[#B88E4C]", text: "10%" },
    { type: "4BR", count: 4, percentage: 0.5, color: "bg-[#D8B07D]", text: "<1%" },
    { type: "Penthouse", count: 6, percentage: 0.7, color: "bg-[#8E6534]", text: "<1%" },
  ];

  return (
    <section className="py-20 bg-[#F5F1E8] border-b border-[#E7DFD1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-[#B88E4C] text-[11px] font-bold tracking-[0.22em] uppercase mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B88E4C]"></span>
            <span>Master Inventory Distribution</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F1C19] leading-tight">
            Units Mix & Portfolio
            <span className="block mt-1.5 font-serif italic font-normal text-[#B88E4C]">
              & Building Allocation
            </span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-stone-600 font-light">
            862 luxury residences strategically divided across five distinctive coastal towers arranged around the central landscaped podium.
          </p>
        </div>

        {/* Top 3 KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-[#FFFFFF] p-6 rounded-2xl border border-[#E7DFD1] shadow-xs">
            <span className="text-xs text-stone-500 uppercase font-bold tracking-wider block">Total Project Units</span>
            <div className="font-serif text-4xl font-bold text-[#1F1C19] mt-2 mb-1">862</div>
            <p className="text-xs text-stone-600">Freehold coastal apartments & penthouses</p>
          </div>
          <div className="bg-[#FFFFFF] p-6 rounded-2xl border border-[#E7DFD1] shadow-xs">
            <span className="text-xs text-stone-500 uppercase font-bold tracking-wider block">Residential Buildings</span>
            <div className="font-serif text-4xl font-bold text-[#1F1C19] mt-2 mb-1">5 Towers</div>
            <p className="text-xs text-stone-600">Positioned around elevated landscaped podium</p>
          </div>
          <div className="bg-[#FFFFFF] p-6 rounded-2xl border border-[#E7DFD1] shadow-xs">
            <span className="text-xs text-stone-500 uppercase font-bold tracking-wider block">1BR + 2BR Share</span>
            <div className="font-serif text-4xl font-bold text-[#B88E4C] mt-2 mb-1">89%</div>
            <p className="text-xs text-stone-600">Prime liquidity, rental yield, and high resale demand</p>
          </div>
        </div>

        {/* Breakdown Visualization Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Unit Mix by Type Chart */}
          <div className="lg:col-span-6 bg-[#FFFFFF] p-6 rounded-2xl border border-[#E7DFD1] shadow-xs space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-[#E7DFD1]">
              <div>
                <h4 className="font-serif text-lg font-bold text-[#1F1C19]">Unit Mix by Type</h4>
                <p className="text-xs text-stone-500">Distribution of the 862 residences</p>
              </div>
              <PieChart className="w-5 h-5 text-[#B88E4C]" />
            </div>

            {/* Visual Stacked Progress Bar */}
            <div className="w-full h-8 rounded-lg overflow-hidden flex shadow-inner border border-stone-200">
              <div style={{ width: '45%' }} className="bg-[#1F1C19] h-full flex items-center justify-center text-[10px] text-white font-bold" title="1BR: 45%">45%</div>
              <div style={{ width: '44%' }} className="bg-[#4A3E31] h-full flex items-center justify-center text-[10px] text-white font-bold" title="2BR: 44%">44%</div>
              <div style={{ width: '10%' }} className="bg-[#B88E4C] h-full flex items-center justify-center text-[10px] text-white font-bold" title="3BR: 10%">10%</div>
              <div style={{ width: '1%' }} className="bg-[#8E6534] h-full" title="4BR & Penthouse: 1%"></div>
            </div>

            {/* Detailed Unit Bars */}
            <div className="space-y-3">
              {unitMixData.map((item) => (
                <div key={item.type} className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="font-bold text-[#1F1C19]">{item.type}</span>
                    <span className="text-stone-600 font-medium">
                      <strong>{item.count} units</strong> ({item.text})
                    </span>
                  </div>
                  <div className="w-full h-3 bg-[#F5F1E8] rounded-full overflow-hidden">
                    <div
                      className={`h-full ${item.color} rounded-full transition-all duration-700`}
                      style={{ width: `${Math.max(item.percentage, 2)}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Inventory by Building (Towers B1 through B5) */}
          <div className="lg:col-span-6 bg-[#FFFFFF] p-6 rounded-2xl border border-[#E7DFD1] shadow-xs space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-[#E7DFD1]">
              <div>
                <h4 className="font-serif text-lg font-bold text-[#1F1C19]">Inventory by Building</h4>
                <p className="text-xs text-stone-500">Click any tower to inspect allocation</p>
              </div>
              <Building2 className="w-5 h-5 text-[#B88E4C]" />
            </div>

            {/* Towers Horizontal Bars */}
            <div className="space-y-3">
              {BUILDING_INVENTORY.map((tower) => {
                const isSelected = tower.id === selectedBuilding;
                return (
                  <button
                    key={tower.id}
                    onClick={() => setSelectedBuilding(tower.id)}
                    className={`w-full text-left p-3.5 rounded-xl transition-all border ${
                      isSelected
                        ? 'bg-[#1F1C19] text-white border-[#1F1C19] shadow-md'
                        : 'bg-[#FBF9F5] text-[#1F1C19] border-[#E7DFD1] hover:border-[#B88E4C]'
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs mb-1.5">
                      <span className="font-bold text-sm tracking-wide">{tower.name}</span>
                      <span className={`font-mono font-bold ${isSelected ? 'text-[#D8B07D]' : 'text-[#1F1C19]'}`}>
                        {tower.units} Units
                      </span>
                    </div>
                    <div className="w-full h-2 bg-stone-200/60 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full ${isSelected ? 'bg-[#D8B07D]' : 'bg-[#1F1C19]'}`}
                        style={{ width: `${(tower.units / 206) * 100}%` }}
                      />
                    </div>
                    <div className="flex justify-between items-center mt-2 text-[11px]">
                      <span className={isSelected ? 'text-stone-300' : 'text-stone-500'}>
                        {tower.viewOrientation}
                      </span>
                      <span className={`font-semibold ${isSelected ? 'text-[#D8B07D]' : 'text-[#B88E4C]'}`}>
                        {tower.floors}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
