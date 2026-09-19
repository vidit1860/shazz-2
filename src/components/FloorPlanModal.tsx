import React, { useState } from 'react';
import { X, ZoomIn, ZoomOut, Download, Printer, Compass, Check } from 'lucide-react';
import { UNIT_TYPES } from '../data/projectData';
import { UnitCategory } from '../types';

interface FloorPlanModalProps {
  unitCategory: UnitCategory | null;
  onClose: () => void;
  onOpenBrochure: () => void;
}

export const FloorPlanModal: React.FC<FloorPlanModalProps> = ({
  unitCategory,
  onClose,
  onOpenBrochure,
}) => {
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [isMetric, setIsMetric] = useState(true);

  if (!unitCategory) return null;

  const unit = UNIT_TYPES.find((u) => u.id === unitCategory) || UNIT_TYPES[1];

  const handleZoomIn = () => setZoomLevel((prev) => Math.min(prev + 0.25, 2.0));
  const handleZoomOut = () => setZoomLevel((prev) => Math.max(prev - 0.25, 0.75));

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-2 sm:p-6 animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-5xl bg-[#FAF8F5] rounded-2xl shadow-2xl border border-[#E7DFD1] overflow-hidden my-auto max-h-[95vh] flex flex-col">
        {/* Top Control Bar */}
        <div className="p-4 sm:p-5 border-b border-[#E7DFD1] flex items-center justify-between bg-[#F5F1E8]">
          <div>
            <span className="text-[10px] uppercase font-bold tracking-widest text-[#B88E4C] block">
              Architectural Technical Plan
            </span>
            <h3 className="font-serif text-lg sm:text-xl font-bold text-[#1F1C19]">
              {unit.name} • {isMetric ? `Net ${unit.netSqM} Sq. M` : `Net ${unit.netSqFt} Sq. Ft`}
            </h3>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <div className="hidden sm:flex items-center gap-1 bg-[#FAF8F5] p-1 rounded-xl border border-[#E7DFD1]">
              <button
                onClick={() => setIsMetric(true)}
                className={`px-2.5 py-1 text-xs font-semibold rounded-lg ${
                  isMetric ? 'bg-[#1F1C19] text-white' : 'text-stone-600'
                }`}
              >
                M²
              </button>
              <button
                onClick={() => setIsMetric(false)}
                className={`px-2.5 py-1 text-xs font-semibold rounded-lg ${
                  !isMetric ? 'bg-[#1F1C19] text-white' : 'text-stone-600'
                }`}
              >
                FT²
              </button>
            </div>

            <button
              onClick={handleZoomOut}
              className="p-2 rounded-xl bg-[#FAF8F5] border border-[#E7DFD1] text-stone-700 hover:bg-[#EAE2D5]"
              title="Zoom Out"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            <button
              onClick={handleZoomIn}
              className="p-2 rounded-xl bg-[#FAF8F5] border border-[#E7DFD1] text-stone-700 hover:bg-[#EAE2D5]"
              title="Zoom In"
            >
              <ZoomIn className="w-4 h-4" />
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-full text-stone-500 hover:text-black hover:bg-stone-200/50 transition-colors ml-2"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body: Two-Column Plan & Specs */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* Zoomable Blueprint Canvas */}
          <div className="lg:col-span-8 bg-[#FCFAF7] rounded-xl border border-[#E7DFD1] p-4 overflow-hidden flex items-center justify-center min-h-[380px]">
            <div
              className="transition-transform duration-200 origin-center"
              style={{ transform: `scale(${zoomLevel})` }}
            >
              {/* Detailed Blueprint Render */}
              <svg viewBox="0 0 600 520" className="w-[520px] h-[450px] select-none">
                <rect x="20" y="20" width="560" height="480" rx="4" fill="#FCFAF7" stroke="#1F1C19" strokeWidth="5" />

                {/* Balcony */}
                <rect x="23" y="23" width="190" height="110" fill="#F0ECE3" stroke="#1F1C19" strokeWidth="2.5" strokeDasharray="4 2" />
                <text x="118" y="70" textAnchor="middle" className="text-[12px] font-bold fill-[#1F1C19] uppercase font-sans">BALCONY</text>
                <text x="118" y="88" textAnchor="middle" className="text-[10px] fill-stone-500 font-sans">3.50 x 1.60m</text>

                {/* Living / Dining */}
                <rect x="23" y="133" width="190" height="210" fill="#FAF8F5" stroke="#1F1C19" strokeWidth="3" />
                <rect x="40" y="150" width="40" height="90" rx="8" fill="#EAE2D5" stroke="#B88E4C" strokeWidth="1.5" />
                <rect x="95" y="170" width="35" height="50" rx="4" fill="#FAF8F5" stroke="#B88E4C" strokeWidth="1.2" />
                <rect x="60" y="270" width="80" height="45" rx="6" fill="#EAE2D5" stroke="#B88E4C" strokeWidth="1.5" />
                <text x="118" y="250" textAnchor="middle" className="text-[12px] font-bold fill-[#1F1C19] uppercase font-sans">LIVING / DINING</text>
                <text x="118" y="335" textAnchor="middle" className="text-[10px] fill-stone-600 font-sans">3.50 x 4.40m</text>

                {/* Kitchen */}
                <rect x="23" y="343" width="190" height="154" fill="#F5F1E8" stroke="#1F1C19" strokeWidth="3" />
                <path d="M 25 350 L 190 350 L 190 380 L 70 380 L 70 495 L 25 495 Z" fill="#E2DAC9" stroke="#B88E4C" strokeWidth="1" />
                <text x="118" y="425" textAnchor="middle" className="text-[12px] font-bold fill-[#1F1C19] uppercase font-sans">KITCHEN</text>
                <text x="118" y="445" textAnchor="middle" className="text-[10px] fill-stone-600 font-sans">3.10 x 2.80m</text>

                {/* Master Bed */}
                <rect x="213" y="23" width="180" height="180" fill="#FAF8F5" stroke="#1F1C19" strokeWidth="3" />
                <rect x="253" y="45" width="100" height="110" rx="4" fill="#EAE2D5" stroke="#B88E4C" strokeWidth="1.5" />
                <text x="303" y="105" textAnchor="middle" className="text-[12px] font-bold fill-[#1F1C19] uppercase font-sans">BEDROOM 1</text>
                <text x="303" y="122" textAnchor="middle" className="text-[10px] fill-stone-600 font-sans">3.50 x 3.50m</text>

                {/* Master Bath */}
                <rect x="213" y="203" width="180" height="120" fill="#F0ECE3" stroke="#1F1C19" strokeWidth="3" />
                <text x="303" y="260" textAnchor="middle" className="text-[12px] font-bold fill-[#1F1C19] uppercase font-sans">BATHROOM 1</text>
                <text x="303" y="278" textAnchor="middle" className="text-[10px] fill-stone-600 font-sans">2.60 x 2.20m</text>

                {/* Powder */}
                <rect x="213" y="323" width="180" height="174" fill="#FAF8F5" stroke="#1F1C19" strokeWidth="2.5" />
                <rect x="300" y="415" width="85" height="75" fill="#EAE2D5" stroke="#1F1C19" strokeWidth="1.5" />
                <text x="342" y="450" textAnchor="middle" className="text-[10px] font-bold fill-[#1F1C19] uppercase font-sans">POWDER ROOM</text>
                <text x="342" y="466" textAnchor="middle" className="text-[9px] fill-stone-600 font-sans">2.20 x 1.10m</text>

                {/* Bedroom 2 */}
                <rect x="393" y="23" width="184" height="180" fill="#FAF8F5" stroke="#1F1C19" strokeWidth="3" />
                <rect x="435" y="45" width="100" height="110" rx="4" fill="#EAE2D5" stroke="#B88E4C" strokeWidth="1.5" />
                <text x="485" y="105" textAnchor="middle" className="text-[12px] font-bold fill-[#1F1C19] uppercase font-sans">BEDROOM 2</text>
                <text x="485" y="122" textAnchor="middle" className="text-[10px] fill-stone-600 font-sans">3.20 x 3.50m</text>

                {/* Bathroom 2 */}
                <rect x="393" y="203" width="184" height="294" fill="#F0ECE3" stroke="#1F1C19" strokeWidth="3" />
                <rect x="470" y="380" width="95" height="45" rx="8" fill="#FAF8F5" stroke="#B88E4C" strokeWidth="1.5" />
                <text x="485" y="320" textAnchor="middle" className="text-[12px] font-bold fill-[#1F1C19] uppercase font-sans">BATHROOM 2</text>
                <text x="485" y="338" textAnchor="middle" className="text-[10px] fill-stone-600 font-sans">2.05 x 3.40m</text>
              </svg>
            </div>
          </div>

          {/* Right Specs Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="p-4 rounded-xl bg-[#F5F1E8] border border-[#E7DFD1] space-y-2.5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#B88E4C] block">
                Dimension Schedule
              </span>
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between border-b border-[#E7DFD1] pb-1">
                  <span className="text-stone-600">Living & Dining</span>
                  <span className="font-bold text-[#1F1C19] font-mono">{unit.dimensions.livingDining}</span>
                </div>
                <div className="flex justify-between border-b border-[#E7DFD1] pb-1">
                  <span className="text-stone-600">Master Bedroom</span>
                  <span className="font-bold text-[#1F1C19] font-mono">{unit.dimensions.masterBedroom}</span>
                </div>
                {unit.dimensions.secondBedroom && (
                  <div className="flex justify-between border-b border-[#E7DFD1] pb-1">
                    <span className="text-stone-600">Second Bedroom</span>
                    <span className="font-bold text-[#1F1C19] font-mono">{unit.dimensions.secondBedroom}</span>
                  </div>
                )}
                <div className="flex justify-between border-b border-[#E7DFD1] pb-1">
                  <span className="text-stone-600">Kitchen</span>
                  <span className="font-bold text-[#1F1C19] font-mono">{unit.dimensions.kitchen}</span>
                </div>
                <div className="flex justify-between border-b border-[#E7DFD1] pb-1">
                  <span className="text-stone-600">Balcony</span>
                  <span className="font-bold text-[#1F1C19] font-mono">{unit.dimensions.balcony}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-600">Powder Room</span>
                  <span className="font-bold text-[#1F1C19] font-mono">{unit.dimensions.powderRoom}</span>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <button
                onClick={() => {
                  onClose();
                  onOpenBrochure();
                }}
                className="w-full py-3 rounded-xl bg-[#1F1C19] hover:bg-[#2F2B26] text-white text-xs font-bold uppercase tracking-wider transition-colors shadow flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4 text-[#B88E4C]" />
                <span>Download Architectural Folio</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
