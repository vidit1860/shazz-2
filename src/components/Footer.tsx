import React, { useState } from 'react';
import { Waves, Phone, Mail, MapPin, CheckCircle2, Send, ShieldCheck } from 'lucide-react';
import { PROJECT_OVERVIEW } from '../data/projectData';

export const Footer: React.FC = () => {
  const [subscribedEmail, setSubscribedEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (subscribedEmail) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setSubscribedEmail('');
      }, 4000);
    }
  };

  return (
    <footer className="bg-[#1F1C19] text-white pt-16 pb-24 lg:pb-16 border-t border-[#B88E4C]/25">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[#B88E4C] border border-[#B88E4C]/40">
                <Waves className="w-5 h-5 text-[#B88E4C]" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold tracking-wider text-[#FAF8F5] uppercase leading-tight">
                  Al Khan
                </span>
                <span className="text-[9px] tracking-[0.22em] uppercase text-[#D8B07D] font-semibold">
                  Waterfront Residences • Sharjah
                </span>
              </div>
            </div>

            <p className="text-xs text-stone-300 leading-relaxed font-light">
              A landmark coastal development set across a 3-hectare peninsula site with panoramic views on three sides. Inspired by Sharjah's maritime heritage and refined Neo-Art Deco architecture.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-[#D8B07D]">
              <ShieldCheck className="w-4 h-4 text-[#B88E4C]" />
              <span>100% Freehold Ownership For All Nationalities</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-[#D8B07D]">
              Explore
            </h4>
            <ul className="space-y-2 text-xs text-stone-300">
              <li><a href="#overview" className="hover:text-[#B88E4C] transition-colors">Masterplan Overview</a></li>
              <li><a href="#market-insights" className="hover:text-[#B88E4C] transition-colors">Sharjah Real Estate Data</a></li>
              <li><a href="#residences" className="hover:text-[#B88E4C] transition-colors">Residences & Floor Plans</a></li>
              <li><a href="#lifestyle" className="hover:text-[#B88E4C] transition-colors">The Lifestyle Case</a></li>
              <li><a href="#investment" className="hover:text-[#B88E4C] transition-colors">The Investment Case</a></li>
              <li><a href="#connectivity" className="hover:text-[#B88E4C] transition-colors">Location & Connectivity</a></li>
              <li><a href="#gallery" className="hover:text-[#B88E4C] transition-colors">Visual Gallery</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-[#D8B07D]">
              Sales Gallery
            </h4>
            <div className="space-y-2.5 text-xs text-stone-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#B88E4C] shrink-0 mt-0.5" />
                <span>Al Khan Corniche Street, Maryam Island Waterfront, Sharjah, UAE</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#B88E4C] shrink-0" />
                <a href="tel:+971585703234" className="hover:text-[#D8B07D]">+971 58 570 3234</a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#B88E4C] shrink-0" />
                <a href="mailto:info@alkhanresidences.ae" className="hover:text-[#D8B07D]">vip@alkhanresidences.ae</a>
              </div>
            </div>
          </div>

          {/* Newsletter / Investor Alerts */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-[#D8B07D]">
              VIP Launch Alerts
            </h4>
            <p className="text-xs text-stone-300 leading-relaxed font-light">
              Subscribe to receive pre-release unit allocations, price lists, and construction milestones.
            </p>

            {subscribed ? (
              <div className="p-3 rounded-lg bg-[#4ADE80]/15 text-[#4ADE80] text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>Thank you! You are on the VIP alert list.</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletter} className="flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={subscribedEmail}
                  onChange={(e) => setSubscribedEmail(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-xs text-white placeholder:text-stone-400 focus:outline-none focus:border-[#B88E4C]"
                />
                <button
                  type="submit"
                  className="px-3.5 py-2 rounded-lg bg-[#B88E4C] hover:bg-[#A37B3C] text-[#1F1C19] text-xs font-bold transition-colors"
                  aria-label="Subscribe"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Regulatory Disclaimers & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-stone-400 font-light">
          <p>
            © {new Date().getFullYear()} Al Khan Waterfront Residences. All rights reserved. RERA Project Registered.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a href="#" className="hover:text-stone-200 transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-stone-200 transition-colors">Terms of Use</a>
            <span>•</span>
            <a href="#" className="hover:text-stone-200 transition-colors">RERA Disclosures</a>
            <span>•</span>
            <a href="#" className="hover:text-stone-200 transition-colors">Sharjah Real Estate Registration Dept.</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
