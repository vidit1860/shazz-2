import React, { useState } from 'react';
import { UNIT_TYPES } from '../data/projectData';
import { UnitCategory } from '../types';
import { Sparkles } from 'lucide-react';

interface ResidencesExplorerProps {
  onOpenFloorPlanModal: (unitCategory: UnitCategory) => void;
  onOpenBrochure: () => void;
}

export const ResidencesExplorer: React.FC<ResidencesExplorerProps> = ({
  onOpenFloorPlanModal,
  onOpenBrochure,
}) => {
  const [activeUnit, setActiveUnit] = useState<UnitCategory>('2BR');
  const [isMetric, setIsMetric] = useState(true);

  return (
    <section id="residences" className="py-24 bg-[#FBF9F5] border-b border-[#E7DFD1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-[#B88E4C] text-[11px] font-bold tracking-[0.22em] uppercase mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B88E4C]"></span>
              <span>Floor Plans & Layouts</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F1C19] leading-tight">
              Floor Plans
              <span className="block mt-1.5 font-serif italic font-normal text-[#B88E4C]">
                & Sample Layouts
              </span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-stone-600 leading-relaxed font-light">
              Designed with 89% focused on high-demand 1 and 2-bedroom configurations, complemented by expansive 3-bedroom corner residences and ultra-rare sky penthouses.
            </p>
          </div>

          {/* Metric / Imperial Unit Toggle */}
          <div className="flex items-center gap-3 bg-[#F5F1E8] p-1.5 rounded-xl border border-[#E7DFD1] self-start md:self-auto">
            <button
              onClick={() => setIsMetric(true)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wider transition-all ${
                isMetric
                  ? 'bg-[#1F1C19] text-white shadow-sm'
                  : 'text-stone-700 hover:text-black'
              }`}
            >
              Sq. Metres (M²)
            </button>
            <button
              onClick={() => setIsMetric(false)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wider transition-all ${
                !isMetric
                  ? 'bg-[#1F1C19] text-white shadow-sm'
                  : 'text-stone-700 hover:text-black'
              }`}
            >
              Sq. Feet (FT²)
            </button>
          </div>
        </div>

        {/* Unit Floor Plans & Inventory Table Form */}
        <div className="mb-12 bg-white rounded-2xl border border-[#E7DFD1] shadow-lg overflow-hidden">
          <div className="p-4 sm:p-6 bg-[#1F1C19] text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#B88E4C]/30">
            <div>
              <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#D8B07D] block mb-1">
                Official Inventory Matrix & Pricing Schedule
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#FAF8F5]">
                Floor Plans & Layouts Matrix
              </h3>
            </div>
            <div className="text-xs text-stone-300 font-light italic">
              Explore starting prices, areas, and handover schedules below
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="bg-[#F5F1E8] border-b border-[#E7DFD1] text-[11px] font-bold uppercase tracking-wider text-[#8E6534]">
                  <th className="py-4 px-5">UNIT TYPE</th>
                  <th className="py-4 px-5">AREA</th>
                  <th className="py-4 px-5">AMOUNT (STARTING)</th>
                  <th className="py-4 px-5">HANDOVER</th>
                  <th className="py-4 px-5 text-right">ACTION</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E7DFD1] text-sm">
                {UNIT_TYPES.map((unit) => {
                  const isSelected = unit.id === activeUnit;
                  return (
                    <tr
                      key={unit.id}
                      onClick={() => setActiveUnit(unit.id)}
                      className={`cursor-pointer transition-colors ${
                        isSelected
                          ? 'bg-[#B88E4C]/10 border-l-4 border-l-[#B88E4C]'
                          : 'hover:bg-[#FAF8F5]'
                      }`}
                    >
                      {/* UNIT TYPE Column */}
                      <td className="py-4 px-5">
                        <div className="flex items-center gap-3">
                          <div className={`w-3 h-3 rounded-full ${isSelected ? 'bg-[#B88E4C]' : 'bg-stone-300'}`} />
                          <div>
                            <div className="font-serif font-bold text-[#1F1C19] text-base flex items-center gap-2">
                              <span>{unit.id === 'PENTHOUSE' ? 'Sky Penthouse' : `${unit.id} Sky Deck`}</span>
                              <span className="text-[10px] px-2 py-0.5 rounded-full font-sans font-semibold bg-[#B88E4C]/15 text-[#8E6534]">
                                {unit.percentageMix}% Mix
                              </span>
                            </div>
                            <span className="text-xs text-stone-500 font-light block">
                              {unit.name} • {unit.totalUnits} Total Units
                            </span>
                          </div>
                        </div>
                      </td>

                      {/* AREA Column */}
                      <td className="py-4 px-5">
                        <div className="font-mono font-bold text-[#1F1C19]">
                          {isMetric ? `Net ${unit.netSqM} Sq. M` : `Net ${unit.netSqFt.toLocaleString()} Sq. Ft`}
                        </div>
                        <span className="text-xs text-stone-500 font-light block">
                          {isMetric ? `(~${unit.netSqFt.toLocaleString()} Sq. Ft)` : `(~${unit.netSqM} Sq. M)`}
                        </span>
                      </td>

                      {/* AMOUNT Column */}
                      <td className="py-4 px-5">
                        <div className="font-serif font-bold text-[#E05A47] text-base">
                          AED {unit.startingPriceAED}
                        </div>
                        <span className="text-xs text-stone-500 font-light block font-mono">
                          (~${unit.startingPriceUSD} USD)
                        </span>
                      </td>

                      {/* HANDOVER Column */}
                      <td className="py-4 px-5">
                        <div className="font-bold text-[#1F1C19] text-xs uppercase tracking-wide">
                          {unit.handover}
                        </div>
                        <span className="text-[11px] text-stone-500 font-light block">
                          60/40 Payment Plan
                        </span>
                      </td>

                      {/* ENQUIRY BUTTON Column */}
                      <td className="py-4 px-5 text-right" onClick={(e) => e.stopPropagation()}>
                        <div className="flex items-center justify-end">
                          <button
                            onClick={onOpenBrochure}
                            className="px-4 py-2 rounded-lg bg-[#B88E4C] hover:bg-[#A37B3C] text-[#1F1C19] text-xs font-bold uppercase tracking-wider transition-all shadow-sm hover:shadow-md flex items-center gap-1.5"
                          >
                            <span>ENQUIRE NOW</span>
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
