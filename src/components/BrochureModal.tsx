import React, { useState } from 'react';
import { X, Download, CheckCircle2, FileText, Phone, MessageSquare, Sparkles, Building } from 'lucide-react';
import { PROJECT_OVERVIEW, UNIT_TYPES } from '../data/projectData';
import { UnitCategory } from '../types';

interface BrochureModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultUnit?: UnitCategory;
}

export const BrochureModal: React.FC<BrochureModalProps> = ({
  isOpen,
  onClose,
  defaultUnit = '2BR'
}) => {
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: 'United Arab Emirates (+971)',
    buyerType: 'investor',
    unit: defaultUnit,
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('success');
  };

  const handleReset = () => {
    setStep('form');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-lg bg-[#FAF8F5] rounded-2xl shadow-2xl border border-[#E7DFD1] overflow-hidden my-8">
        {/* Top Gold Accent Bar */}
        <div className="h-2 bg-gradient-to-r from-[#B88E4C] via-[#D8B07D] to-[#1F1C19]" />

        {/* Close Button */}
        <button
          onClick={handleReset}
          className="absolute top-4 right-4 p-2 rounded-full text-stone-400 hover:text-black hover:bg-stone-200/50 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {step === 'form' ? (
          <div className="p-6 sm:p-8">
            <div className="mb-6">
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#B88E4C] block mb-1">
                Official Digital Brochure & Floorplans
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#1F1C19]">
                Download Al Khan Project Folio
              </h3>
              <p className="text-xs text-stone-600 mt-1.5 leading-relaxed font-light">
                Receive the complete architectural blueprint packet, payment schedules, masterplan renderings, and unit pricing table.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wide mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sultan Al Nuaimi"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#E7DFD1] focus:border-[#B88E4C] focus:ring-1 focus:ring-[#B88E4C] outline-none text-sm bg-white"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wide mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="sultan@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#E7DFD1] focus:border-[#B88E4C] focus:ring-1 focus:ring-[#B88E4C] outline-none text-sm bg-white"
                  />
                </div>
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
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#E7DFD1] focus:border-[#B88E4C] focus:ring-1 focus:ring-[#B88E4C] outline-none text-sm bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wide mb-1">
                    Primary Purpose
                  </label>
                  <select
                    value={formData.buyerType}
                    onChange={(e) => setFormData({ ...formData, buyerType: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#E7DFD1] focus:border-[#B88E4C] focus:ring-1 focus:ring-[#B88E4C] outline-none text-sm bg-white text-stone-800"
                  >
                    <option value="investor">Real Estate Investor (High Yield)</option>
                    <option value="end-user">Primary Residence / Family Home</option>
                    <option value="broker">Registered Broker / Agency</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wide mb-1">
                    Preferred Layout
                  </label>
                  <select
                    value={formData.unit}
                    onChange={(e) => setFormData({ ...formData, unit: e.target.value as UnitCategory })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#E7DFD1] focus:border-[#B88E4C] focus:ring-1 focus:ring-[#B88E4C] outline-none text-sm bg-white text-stone-800"
                  >
                    {UNIT_TYPES.map((u) => (
                      <option key={u.id} value={u.id}>
                        {u.id} ({u.netSqM} Sq. M)
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 mt-2 rounded-xl bg-[#1F1C19] hover:bg-[#2F2B26] text-[#FAF8F5] text-xs font-bold tracking-wider uppercase transition-all shadow-md flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4 text-[#B88E4C]" />
                <span>Download Instant PDF Folio</span>
              </button>

              <p className="text-[11px] text-stone-500 text-center">
                Strict confidentiality assured. Instant PDF download link + WhatsApp copy provided.
              </p>
            </form>
          </div>
        ) : (
          <div className="p-8 text-center space-y-5 animate-fade-in">
            <div className="w-16 h-16 rounded-full bg-[#4ADE80]/15 text-[#16A34A] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <div>
              <span className="text-xs uppercase font-bold tracking-wider text-[#B88E4C] block mb-1">
                Access Granted
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#1F1C19]">
                Your Al Khan Brochure is Ready!
              </h3>
              <p className="text-xs text-stone-600 mt-2 max-w-sm mx-auto leading-relaxed">
                Thank you, <strong className="text-[#1F1C19]">{formData.name || 'Valued Client'}</strong>. We have generated your tailored package including floor plans, master inventory, and financial schedules.
              </p>
            </div>

            {/* Download Action Box */}
            <div className="bg-[#F5F1E8] p-4 rounded-xl border border-[#E7DFD1] space-y-3 text-left">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#1F1C19] text-[#D8B07D] flex items-center justify-center shrink-0">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-xs font-bold text-[#1F1C19]">
                    Al-Khan-Waterfront-Residences-2026.pdf
                  </h4>
                  <span className="text-[11px] text-stone-500">Official Master Folio • 8.4 MB</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-1">
                <a
                  href="#download-simulated"
                  onClick={(e) => {
                    e.preventDefault();
                    alert('Official Al Khan Brochure downloaded successfully!');
                  }}
                  className="py-2.5 rounded-lg bg-[#B88E4C] hover:bg-[#A37B3C] text-[#1F1C19] text-xs font-bold uppercase tracking-wider text-center flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Now</span>
                </a>
                <a
                  href={`https://wa.me/971585703234?text=Hello%2C%20I%20have%20downloaded%20the%20Al%20Khan%20brochure%20and%20would%20like%20to%20enquire%20about%20the%20${formData.unit}%20units.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 rounded-lg bg-[#15803D] hover:bg-[#166534] text-white text-xs font-semibold uppercase tracking-wider text-center flex items-center justify-center gap-1.5 transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Send to WhatsApp</span>
                </a>
              </div>
            </div>

            <button
              onClick={handleReset}
              className="text-xs font-semibold text-stone-500 hover:text-[#1F1C19] underline"
            >
              Close Window
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
