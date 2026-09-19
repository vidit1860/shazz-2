import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MarketInsights } from './components/MarketInsights';
import { AboutProject } from './components/AboutProject';
import { ResidencesExplorer } from './components/ResidencesExplorer';
import { DualCaseUSPs } from './components/DualCaseUSPs';
import { Amenities } from './components/Amenities';
import { ConnectivitySection } from './components/ConnectivitySection';
import { GallerySection } from './components/GallerySection';
import { Footer } from './components/Footer';
import { BrochureModal } from './components/BrochureModal';
import { FloorPlanModal } from './components/FloorPlanModal';
import { FloatingActions } from './components/FloatingActions';
import { UnitCategory } from './types';

export default function App() {
  const [isBrochureOpen, setIsBrochureOpen] = useState(false);
  const [activeFloorPlanUnit, setActiveFloorPlanUnit] = useState<UnitCategory | null>(null);

  const handleOpenBrochure = () => {
    setIsBrochureOpen(true);
  };

  const handleOpenEnquire = () => {
    // Scrolls to the VIP enquiry card in Hero or opens brochure modal if already scrolled
    const overviewEl = document.getElementById('overview');
    if (overviewEl) {
      overviewEl.scrollIntoView({ behavior: 'smooth' });
    } else {
      setIsBrochureOpen(true);
    }
  };

  const handleOpenFloorPlan = (unitCategory: UnitCategory) => {
    setActiveFloorPlanUnit(unitCategory);
  };

  return (
    <div className="min-h-screen bg-[#FBF9F5] text-[#1F1C19] font-sans antialiased selection:bg-[#B88E4C]/20 selection:text-[#8E6534]">
      {/* Sticky Luxury Header */}
      <Navbar
        onOpenBrochure={handleOpenBrochure}
        onOpenEnquire={handleOpenEnquire}
      />

      {/* Main Real Estate Presentation */}
      <main>
        {/* Hero Section with Quick Lead Capture */}
        <Hero
          onOpenBrochure={handleOpenBrochure}
          onOpenEnquire={handleOpenEnquire}
        />

        {/* Section 1: Sharjah Real Estate Market Boom & Data Insights (Page 2) */}
        <MarketInsights />

        {/* Section 2: About The Project - 3-Hectare Beachfront Peninsula (Page 3) */}
        <AboutProject />

        {/* Section 3: Residences & Interactive Floor Plans (Page 6 & 7) */}
        <ResidencesExplorer
          onOpenFloorPlanModal={handleOpenFloorPlan}
          onOpenBrochure={handleOpenBrochure}
        />

        {/* Section 4: The Dual Case - Lifestyle vs Investment (Page 8 & 9) */}
        <DualCaseUSPs
          onOpenBrochure={handleOpenBrochure}
          onOpenEnquire={handleOpenEnquire}
        />

        {/* Section 5: Resort Amenities & Coastal Promenade */}
        <Amenities />

        {/* Section 6: Strategic Connectivity & Transport Schematic (Page 4) */}
        <ConnectivitySection />

        {/* Section 7: Visual Gallery & Lightbox Tour */}
        <GallerySection />
      </main>

      {/* Footer & Disclosures */}
      <Footer />

      {/* Interactive Modals */}
      <BrochureModal
        isOpen={isBrochureOpen}
        onClose={() => setIsBrochureOpen(false)}
        defaultUnit={activeFloorPlanUnit || '2BR'}
      />

      <FloorPlanModal
        unitCategory={activeFloorPlanUnit}
        onClose={() => setActiveFloorPlanUnit(null)}
        onOpenBrochure={handleOpenBrochure}
      />

      {/* Floating Conversion Actions (Ajmera Manhattan Ideation) */}
      <FloatingActions
        onOpenBrochure={handleOpenBrochure}
        onOpenEnquire={handleOpenEnquire}
      />
    </div>
  );
}
