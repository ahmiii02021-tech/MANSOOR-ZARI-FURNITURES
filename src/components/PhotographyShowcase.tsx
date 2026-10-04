import React, { useState } from 'react';
import { PHOTO_ASSETS } from '../data/campaignData';
import { PhotoAsset } from '../types';
import { Camera, Sparkles, Maximize2, Download, Info, Check, Eye } from 'lucide-react';

export const PhotographyShowcase: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoAsset>(PHOTO_ASSETS[0]);
  const [activeHotspot, setActiveHotspot] = useState<{ label: string; detail: string } | null>(null);
  const [showHotspots, setShowHotspots] = useState<boolean>(true);

  return (
    <section className="py-16 bg-[#06140e] border-b border-[#d4af37]/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-[#d4af37]/30 text-xs font-semibold uppercase tracking-widest text-[#f7e2a9] mb-3">
            <Camera className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>Architectural & Artisanal Photography</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl font-extrabold text-white">
            High-Fidelity Campaign Gallery
          </h2>
          <p className="mt-3 text-stone-300 font-sans text-sm sm:text-base leading-relaxed">
            Ultra-realistic 35mm and 8K architectural photography capturing handcrafted emerald velvet, 24K zari embroidery, royal master suites, and the raw poetry of sheesham wood carving.
          </p>
        </div>

        {/* Thumbnail Selector Carousel */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {PHOTO_ASSETS.slice(0, 3).map((photo) => {
            const isSelected = selectedPhoto.id === photo.id;
            return (
              <button
                key={photo.id}
                onClick={() => {
                  setSelectedPhoto(photo);
                  setActiveHotspot(null);
                }}
                className={`relative rounded-2xl overflow-hidden text-left border transition-all group ${
                  isSelected
                    ? 'border-[#d4af37] ring-2 ring-[#d4af37]/40 shadow-2xl scale-[1.02]'
                    : 'border-stone-800 opacity-75 hover:opacity-100 hover:border-[#d4af37]/40'
                }`}
              >
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    src={photo.imageSrc}
                    alt={photo.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-3 bg-[#081a13] flex justify-between items-center">
                  <div>
                    <h4 className="font-cinzel text-sm font-bold text-white group-hover:text-[#f7e2a9] transition-colors">
                      {photo.title}
                    </h4>
                    <span className="text-[10px] text-stone-400 font-sans uppercase tracking-wider">
                      {photo.category}
                    </span>
                  </div>
                  {isSelected && (
                    <span className="text-[11px] font-semibold text-[#061510] bg-[#d4af37] px-2 py-0.5 rounded-full">
                      Active
                    </span>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Main Interactive Stage */}
        <div className="bg-[#040e0b] rounded-3xl border border-[#d4af37]/30 overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Viewport & Hotspots */}
            <div className="lg:col-span-8 relative bg-black flex items-center justify-center min-h-[420px] sm:min-h-[520px] overflow-hidden group">
              <img
                src={selectedPhoto.imageSrc}
                alt={selectedPhoto.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover max-h-[640px]"
              />

              {/* Hotspots Overlay */}
              {showHotspots &&
                selectedPhoto.hotspots?.map((spot, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveHotspot(spot)}
                    style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#d4af37]/80 hover:bg-[#f7e2a9] border-2 border-white shadow-xl flex items-center justify-center transition-transform hover:scale-125 z-20 group/spot"
                    title={spot.label}
                  >
                    <span className="w-2.5 h-2.5 rounded-full bg-[#061510]" />
                    <span className="absolute -top-7 left-1/2 -translate-x-1/2 whitespace-nowrap bg-black/85 text-[#f7e2a9] text-[10px] font-semibold px-2 py-0.5 rounded border border-[#d4af37]/40 pointer-events-none opacity-0 group-hover/spot:opacity-100 transition-opacity">
                      {spot.label}
                    </span>
                  </button>
                ))}

              {/* Floating Toolbar on Image */}
              <div className="absolute top-4 right-4 flex items-center gap-2 z-20">
                <button
                  onClick={() => setShowHotspots(!showHotspots)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold backdrop-blur-md border transition-all ${
                    showHotspots
                      ? 'bg-[#d4af37]/90 text-[#061510] border-[#d4af37]'
                      : 'bg-black/60 text-stone-300 border-stone-700 hover:text-white'
                  }`}
                >
                  {showHotspots ? 'Hotspots ON' : 'Hotspots OFF'}
                </button>
                <a
                  href={selectedPhoto.imageSrc}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg bg-black/60 backdrop-blur-md border border-stone-700 text-stone-300 hover:text-[#d4af37] transition-all"
                  title="Open Full Resolution"
                >
                  <Maximize2 className="w-4 h-4" />
                </a>
              </div>

              {/* Active Hotspot Inspector Card */}
              {activeHotspot && (
                <div className="absolute bottom-6 left-6 right-6 sm:left-auto sm:right-6 sm:max-w-sm bg-black/90 backdrop-blur-md border border-[#d4af37] p-4 rounded-2xl shadow-2xl z-30 animate-in fade-in slide-in-from-bottom-2">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-[#f7e2a9] uppercase tracking-wider">
                      <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
                      <span>{activeHotspot.label}</span>
                    </div>
                    <button
                      onClick={() => setActiveHotspot(null)}
                      className="text-stone-400 hover:text-white text-xs px-1.5 py-0.5"
                    >
                      ✕
                    </button>
                  </div>
                  <p className="text-xs text-stone-300 mt-2 leading-relaxed font-sans">
                    {activeHotspot.detail}
                  </p>
                </div>
              )}
            </div>

            {/* Editorial Metadata Sidebar */}
            <div className="lg:col-span-4 p-6 sm:p-8 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-stone-800 bg-[#071912]/80">
              <div className="space-y-6">
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-widest text-[#d4af37] block">
                    {selectedPhoto.category}
                  </span>
                  <h3 className="font-cinzel text-2xl font-bold text-white mt-1">
                    {selectedPhoto.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-300 font-sans mt-3 leading-relaxed">
                    {selectedPhoto.description}
                  </p>
                </div>

                {/* Technical Camera & Lighting Specs */}
                <div className="p-4 rounded-xl bg-black/50 border border-stone-800 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-semibold text-white">
                    <Camera className="w-3.5 h-3.5 text-[#d4af37]" />
                    <span>Technical Production Specs</span>
                  </div>
                  <div className="space-y-2 text-xs">
                    <div>
                      <span className="text-stone-400 block text-[11px]">Camera & Lens Setup</span>
                      <span className="font-medium text-stone-200">{selectedPhoto.cameraLens}</span>
                    </div>
                    <div>
                      <span className="text-stone-400 block text-[11px]">Lighting Architecture</span>
                      <span className="font-medium text-stone-200">{selectedPhoto.lighting}</span>
                    </div>
                    <div>
                      <span className="text-stone-400 block text-[11px]">Resolution & Format</span>
                      <span className="font-medium text-[#f7e2a9]">{selectedPhoto.dimensions} • {selectedPhoto.aspectRatio}</span>
                    </div>
                  </div>
                </div>

                {/* Key Material Features */}
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-stone-400 block mb-2.5">
                    Authentic Royal Details
                  </span>
                  <ul className="space-y-2">
                    {selectedPhoto.keyFeatures.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-stone-300 font-sans">
                        <Check className="w-3.5 h-3.5 text-[#d4af37] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-6 mt-6 border-t border-stone-800/80 flex items-center justify-between">
                <a
                  href={selectedPhoto.imageSrc}
                  download={`Mansoor-Zari-${selectedPhoto.id}.jpg`}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#d4af37] hover:bg-[#b89528] text-[#061510] text-xs font-bold uppercase tracking-wider transition-all shadow-lg"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Ultra-HD</span>
                </a>

                <span className="text-[11px] text-stone-400 font-mono">
                  Master Archival 35mm
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
