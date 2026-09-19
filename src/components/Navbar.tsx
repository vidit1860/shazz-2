import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, Download, Menu, X, Waves, ChevronRight } from 'lucide-react';
import { PROJECT_OVERVIEW } from '../data/projectData';

interface NavbarProps {
  onOpenBrochure: () => void;
  onOpenEnquire: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBrochure, onOpenEnquire }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Overview", href: "#overview" },
    { name: "Market Insights", href: "#market-insights" },
    { name: "Residences", href: "#residences" },
    { name: "The Lifestyle", href: "#lifestyle" },
    { name: "The Investment", href: "#investment" },
    { name: "Connectivity", href: "#connectivity" },
    { name: "Gallery", href: "#gallery" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Notice Bar */}
      <div className="bg-[#1F1C19] text-[#FAF8F5] text-xs py-2 px-4 border-b border-[#B88E4C]/25">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[#B88E4C] animate-pulse"></span>
            <span className="font-medium tracking-wider uppercase text-[11px] text-[#D8B07D]">
              VIP Waterfront Launch • Sharjah
            </span>
            <span className="hidden md:inline text-stone-500">|</span>
            <span className="hidden md:inline text-stone-300">
              {PROJECT_OVERVIEW.frontage} • 15 Mins to Dubai DXB
            </span>
          </div>

          <div className="flex items-center gap-4 text-[12px]">
            <a
              href="tel:+971585703234"
              className="hidden sm:flex items-center gap-1.5 text-stone-300 hover:text-[#D8B07D] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#B88E4C]" />
              <span>+971 58 570 3234</span>
            </a>
            <a
              href="https://wa.me/971585703234?text=Hello%2C%20I%20am%20interested%20in%20Al%20Khan%20Waterfront%20Residences%2C%20Sharjah."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-[#4ADE80] hover:text-[#86EFAC] transition-colors font-medium"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FBF9F5]/95 backdrop-blur-md shadow-sm py-3.5 border-b border-[#E7DFD1]'
            : 'bg-[#FBF9F5]/90 backdrop-blur-sm py-4 border-b border-black/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-[#1F1C19] flex items-center justify-center text-[#B88E4C] border border-[#B88E4C]/50 shadow-inner group-hover:scale-105 transition-transform">
              <Waves className="w-5 h-5 text-[#B88E4C]" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-2xl font-bold tracking-wider text-[#1F1C19] uppercase leading-tight">
                Al Khan
              </span>
              <span className="text-[9px] tracking-[0.22em] uppercase text-[#B88E4C] font-semibold">
                Waterfront Residences
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[13px] font-medium tracking-wide text-[#44403C] hover:text-[#B88E4C] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#B88E4C] hover:after:w-full after:transition-all uppercase tracking-wider"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Header Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenBrochure}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg border border-[#B88E4C] text-[#8E6534] hover:bg-[#B88E4C]/10 transition-colors text-xs font-semibold tracking-wide uppercase"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Brochure</span>
            </button>
            <button
              onClick={onOpenEnquire}
              className="px-4 py-2 rounded-lg bg-[#1F1C19] hover:bg-[#2C2723] text-[#FAF8F5] border border-[#B88E4C]/40 transition-all shadow-sm hover:shadow-md text-xs font-semibold tracking-wider uppercase flex items-center gap-1.5"
            >
              <span>VIP Enquire</span>
              <ChevronRight className="w-3.5 h-3.5 text-[#B88E4C]" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenEnquire}
              className="sm:hidden px-3 py-1.5 rounded-lg bg-[#B88E4C] text-white text-xs font-semibold uppercase"
            >
              Enquire
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#1F1C19] hover:text-[#B88E4C] transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#FBF9F5] border-b border-[#E7DFD1] px-4 pt-3 pb-6 shadow-xl transition-all">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-medium text-[#1F1C19] hover:text-[#B88E4C] py-2 border-b border-stone-200/60 flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-stone-400" />
                </a>
              ))}
              <div className="pt-2 grid grid-cols-2 gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBrochure();
                  }}
                  className="w-full flex items-center justify-center gap-1.5 py-2.5 rounded-lg border border-[#B88E4C] text-[#8E6534] text-xs font-semibold uppercase"
                >
                  <Download className="w-4 h-4" />
                  <span>Brochure</span>
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenEnquire();
                  }}
                  className="w-full py-2.5 rounded-lg bg-[#B88E4C] text-white text-xs font-semibold uppercase"
                >
                  VIP Register
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
