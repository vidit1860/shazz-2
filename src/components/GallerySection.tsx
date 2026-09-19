import React, { useState } from 'react';
import { GALLERY_IMAGES } from '../data/projectData';
import { GalleryImage } from '../types';
import { Maximize2, X, ChevronLeft, ChevronRight, Eye, Sparkles } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'exterior' | 'interior' | 'amenities' | 'aerial'>('all');
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const filteredImages = activeFilter === 'all'
    ? GALLERY_IMAGES
    : GALLERY_IMAGES.filter((img) => img.category === activeFilter);

  const handleNext = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % filteredImages.length);
    }
  };

  const handlePrev = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + filteredImages.length) % filteredImages.length);
    }
  };

  return (
    <section id="gallery" className="py-24 bg-[#F5F1E8] border-t border-[#E7DFD1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-[#B88E4C] text-[11px] font-bold tracking-[0.22em] uppercase mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B88E4C]"></span>
              <span>Visual Perspectives & Architecture</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F1C19] leading-tight">
              An Architectural Masterpiece
              <span className="block mt-1.5 font-serif italic font-normal text-[#B88E4C]">
                & Waterfront Perspectives
              </span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-stone-600 leading-relaxed font-light">
              Explore the contemporary coastal aesthetics, softened curvilinear arches, and panoramic sea vistas defining Al Khan Waterfront Residences.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 self-start md:self-auto">
            {[
              { id: 'all', label: 'All Perspectives' },
              { id: 'exterior', label: 'Exterior & Towers' },
              { id: 'interior', label: 'Interior Salons' },
              { id: 'amenities', label: 'Courtyard & Pools' },
              { id: 'aerial', label: 'Peninsula Masterplan' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id as any)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold tracking-wider transition-all border ${
                  activeFilter === tab.id
                    ? 'bg-[#1F1C19] text-white border-[#1F1C19] shadow-xs'
                    : 'bg-[#FFFFFF] text-stone-700 border-[#E7DFD1] hover:border-[#B88E4C]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry / Responsive Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((img, idx) => (
            <div
              key={img.id}
              onClick={() => setSelectedImageIndex(idx)}
              className="group relative rounded-2xl overflow-hidden shadow-md bg-[#1F1C19] cursor-pointer aspect-[16/11] border border-[#E7DFD1]"
            >
              <img
                src={img.url}
                alt={img.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95 group-hover:brightness-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#D8B07D] block mb-1">
                  {img.category}
                </span>
                <h4 className="font-serif text-base font-bold leading-snug">
                  {img.title}
                </h4>
                <p className="text-xs text-stone-300 mt-1 line-clamp-1 font-light">
                  {img.caption}
                </p>
              </div>

              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImageIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-lg flex items-center justify-center p-4 sm:p-6 animate-fade-in">
          <button
            onClick={() => setSelectedImageIndex(null)}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={handlePrev}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="max-w-5xl max-h-[85vh] flex flex-col items-center">
            <img
              src={filteredImages[selectedImageIndex].url}
              alt={filteredImages[selectedImageIndex].title}
              referrerPolicy="no-referrer"
              className="max-h-[70vh] w-auto object-contain rounded-xl shadow-2xl border border-white/10"
            />
            <div className="text-center mt-4 text-white max-w-2xl px-4">
              <span className="text-xs uppercase font-bold tracking-widest text-[#D8B07D] block mb-1">
                {filteredImages[selectedImageIndex].category}
              </span>
              <h3 className="font-serif text-xl font-bold">
                {filteredImages[selectedImageIndex].title}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 mt-1">
                {filteredImages[selectedImageIndex].caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
