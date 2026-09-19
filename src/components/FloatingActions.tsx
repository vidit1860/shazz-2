import React from 'react';
import { Phone, MessageSquare, Download, Calendar } from 'lucide-react';

interface FloatingActionsProps {
  onOpenBrochure: () => void;
  onOpenEnquire: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({
  onOpenBrochure,
  onOpenEnquire,
}) => {
  return (
    <>
      {/* Desktop Floating Right Widgets */}
      <div className="hidden lg:flex fixed bottom-6 right-6 z-40 flex-col gap-3">
        <a
          href="https://wa.me/971585703234?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20Al%20Khan%20Waterfront%20Residences."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-0.5 text-xs font-bold tracking-wide"
        >
          <MessageSquare className="w-4 h-4 fill-white" />
          <span>Chat on WhatsApp</span>
        </a>

        <button
          onClick={onOpenEnquire}
          className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#1F1C19] hover:bg-[#2C2723] text-[#FAF8F5] border border-[#B88E4C]/40 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-0.5 text-xs font-bold tracking-wide uppercase"
        >
          <Calendar className="w-4 h-4 text-[#B88E4C]" />
          <span>Schedule Viewing</span>
        </button>
      </div>

      {/* Mobile Bottom Sticky Conversion Bar (Ajmera Manhattan Ideation) */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#1F1C19] border-t border-[#B88E4C]/30 px-3 py-2.5 shadow-2xl flex items-center justify-between gap-2">
        <a
          href="tel:+971585703234"
          className="flex-1 flex flex-col items-center justify-center py-1 text-white hover:text-[#D8B07D] transition-colors"
        >
          <Phone className="w-4 h-4 text-[#B88E4C]" />
          <span className="text-[10px] font-semibold mt-0.5">Call</span>
        </a>

        <a
          href="https://wa.me/971585703234?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20Al%20Khan%20Waterfront%20Residences."
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex flex-col items-center justify-center py-1 text-white hover:text-[#4ADE80] transition-colors"
        >
          <MessageSquare className="w-4 h-4 text-[#4ADE80]" />
          <span className="text-[10px] font-semibold mt-0.5">WhatsApp</span>
        </a>

        <button
          onClick={onOpenBrochure}
          className="flex-1 flex flex-col items-center justify-center py-1 text-white hover:text-[#D8B07D] transition-colors"
        >
          <Download className="w-4 h-4 text-[#B88E4C]" />
          <span className="text-[10px] font-semibold mt-0.5">Brochure</span>
        </button>

        <button
          onClick={onOpenEnquire}
          className="flex-[1.5] py-2 px-3 rounded-lg bg-[#B88E4C] hover:bg-[#A37B3C] text-[#1F1C19] font-bold text-xs uppercase tracking-wider text-center shadow transition-colors"
        >
          Enquire
        </button>
      </div>
    </>
  );
};
