import React, { useState } from 'react';
import { LOGO_OPTIONS, BRAND_INFO } from '../data/campaignData';
import { VectorLogo } from './VectorLogos';
import { Crown, Download, Copy, Check, Eye, Palette, Sparkles, Layers } from 'lucide-react';

export const BrandIdentitySection: React.FC = () => {
  const [selectedLogoId, setSelectedLogoId] = useState<string>('luxury-monogram');
  const [themeMode, setThemeMode] = useState<'dark' | 'light' | 'maroon'>('dark');
  const [copiedHex, setCopiedHex] = useState<string | null>(null);

  const selectedLogo = LOGO_OPTIONS.find(l => l.id === selectedLogoId) || LOGO_OPTIONS[0];

  const handleCopyColor = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 1800);
  };

  const handleDownloadSVG = (logoId: string) => {
    const svgElement = document.getElementById(`svg-export-${logoId}`);
    if (!svgElement) return;
    const svgData = new XMLSerializer().serializeToString(svgElement);
    const blob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Mansoor-Zari-Furnitures-${logoId}.svg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="py-16 bg-[#081711] border-b border-[#d4af37]/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/70 border border-[#d4af37]/30 text-xs font-semibold uppercase tracking-widest text-[#f7e2a9] mb-3">
            <Crown className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>Brand Identity System</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl font-extrabold text-white">
            Three Distinctive Brand Marks
          </h2>
          <p className="mt-3 text-stone-300 font-sans text-sm sm:text-base leading-relaxed">
            Crafted for Mansoor Zari Furnitures: ranging from royal Mughal heritage and monogram armchair embroidery to sleek minimalist architectural geometry.
          </p>
        </div>

        {/* 3 Logo Selection Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {LOGO_OPTIONS.map((logo) => {
            const isSelected = selectedLogo.id === logo.id;
            return (
              <button
                key={logo.id}
                onClick={() => {
                  setSelectedLogoId(logo.id);
                  if (logo.id === 'mughal-heritage') {
                    setThemeMode('maroon');
                  } else if (logo.id === 'minimal-geometric') {
                    setThemeMode('light');
                  } else {
                    setThemeMode('dark');
                  }
                }}
                className={`p-5 rounded-2xl text-left border transition-all relative overflow-hidden group ${
                  isSelected
                    ? 'bg-gradient-to-b from-[#0e3123] to-[#081a13] border-[#d4af37] shadow-xl shadow-emerald-950/80 scale-[1.02]'
                    : 'bg-[#05110d]/90 border-stone-800 hover:border-[#d4af37]/40 hover:bg-[#071913]'
                }`}
              >
                <div className="flex justify-between items-start mb-3">
                  <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded bg-[#d4af37]/15 text-[#f7e2a9] border border-[#d4af37]/30">
                    {logo.category}
                  </span>
                  {isSelected && (
                    <span className="w-2.5 h-2.5 rounded-full bg-[#d4af37] animate-ping" />
                  )}
                </div>
                <h3 className="font-cinzel text-lg font-bold text-white group-hover:text-[#f7e2a9] transition-colors">
                  {logo.name}
                </h3>
                <p className="text-xs text-stone-300 line-clamp-2 mt-1.5 leading-relaxed">
                  {logo.description}
                </p>
                <div className="mt-4 flex items-center gap-1.5">
                  {logo.palette.map((color, idx) => (
                    <span
                      key={idx}
                      className="w-4 h-4 rounded-full border border-black/40 shadow-inner"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Logo Inspection Studio */}
        <div className="bg-[#05110d] rounded-3xl border border-[#d4af37]/30 p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Visual Canvas Area */}
            <div className="lg:col-span-7 flex flex-col items-center">
              {/* Canvas Controls */}
              <div className="w-full flex justify-between items-center mb-4 bg-black/40 p-2 rounded-xl border border-stone-800">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-stone-400 font-medium pl-2">Background:</span>
                  <button
                    onClick={() => setThemeMode('dark')}
                    className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                      themeMode === 'dark' ? 'bg-[#062b1e] text-[#f7e2a9] border border-[#d4af37]' : 'text-stone-400 hover:text-white'
                    }`}
                  >
                    Emerald Dark
                  </button>
                  <button
                    onClick={() => setThemeMode('light')}
                    className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                      themeMode === 'light' ? 'bg-white text-stone-900 font-semibold' : 'text-stone-400 hover:text-white'
                    }`}
                  >
                    Clean White
                  </button>
                  <button
                    onClick={() => setThemeMode('maroon')}
                    className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                      themeMode === 'maroon' ? 'bg-[#4A101D] text-[#f7e2a9] border border-[#d4af37]' : 'text-stone-400 hover:text-white'
                    }`}
                  >
                    Imperial Maroon
                  </button>
                </div>

                <button
                  onClick={() => handleDownloadSVG(selectedLogo.id)}
                  className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#d4af37] hover:bg-[#b89528] text-[#061510] text-xs font-bold transition-all shadow"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download SVG</span>
                </button>
              </div>

              {/* Rendered Logo Canvas */}
              <div className="relative w-full max-w-[420px] aspect-square rounded-2xl overflow-hidden border border-[#d4af37]/40 shadow-2xl flex items-center justify-center p-4">
                <div id={`svg-export-${selectedLogo.id}`} className="w-full h-full flex items-center justify-center">
                  <VectorLogo
                    type={selectedLogo.vectorType}
                    theme={themeMode}
                    size={380}
                  />
                </div>
              </div>

              {/* High-res generated reference toggle if available */}
              {selectedLogo.imageSrc && (
                <div className="mt-4 w-full max-w-[420px] p-3 rounded-xl bg-black/40 border border-stone-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#d4af37]" />
                    <span className="text-xs text-stone-300">High-Res Rendered Generation</span>
                  </div>
                  <a
                    href={selectedLogo.imageSrc}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-semibold text-[#f7e2a9] hover:underline flex items-center gap-1"
                  >
                    <Eye className="w-3 h-3" />
                    <span>View Full 4K</span>
                  </a>
                </div>
              )}
            </div>

            {/* Specifications & Brand Guidelines */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-[#d4af37]">
                  Logo Specifications
                </span>
                <h3 className="font-cinzel text-2xl font-bold text-white mt-1">
                  {selectedLogo.name}
                </h3>
                <p className="text-stone-300 text-xs sm:text-sm mt-2 leading-relaxed">
                  {selectedLogo.description}
                </p>
              </div>

              {/* Color Palette Swatches with click-to-copy */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-semibold text-stone-300 flex items-center gap-1.5">
                    <Palette className="w-3.5 h-3.5 text-[#d4af37]" />
                    Brand Color Palette
                  </span>
                  <span className="text-[11px] text-stone-400">Click swatch to copy HEX</span>
                </div>
                <div className="grid grid-cols-5 gap-2">
                  {selectedLogo.palette.map((hex, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleCopyColor(hex)}
                      className="group flex flex-col items-center p-2 rounded-xl bg-black/50 border border-stone-800 hover:border-[#d4af37] transition-all"
                    >
                      <div
                        className="w-8 h-8 rounded-lg border border-black/40 shadow-md group-hover:scale-110 transition-transform mb-1 flex items-center justify-center"
                        style={{ backgroundColor: hex }}
                      >
                        {copiedHex === hex && <Check className="w-4 h-4 text-white drop-shadow" />}
                      </div>
                      <span className="text-[10px] font-mono text-stone-300 group-hover:text-[#f7e2a9]">
                        {hex}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Typography Specs */}
              <div className="p-4 rounded-xl bg-black/40 border border-stone-800 space-y-3">
                <div className="flex items-center gap-2 text-xs font-semibold text-white">
                  <Layers className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>Typography & Motif Architecture</span>
                </div>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <span className="text-stone-400 block text-[11px]">Primary Typeface</span>
                    <span className="font-medium text-stone-200">{selectedLogo.specs.primaryFont}</span>
                  </div>
                  <div>
                    <span className="text-stone-400 block text-[11px]">Sub-Typeface</span>
                    <span className="font-medium text-stone-200">{selectedLogo.specs.subFont}</span>
                  </div>
                  <div className="col-span-2">
                    <span className="text-stone-400 block text-[11px]">Iconography Motif</span>
                    <span className="font-medium text-[#f7e2a9]">{selectedLogo.specs.motif}</span>
                  </div>
                  <div className="col-span-2">
                    <span className="text-stone-400 block text-[11px]">Recommended Application</span>
                    <span className="font-medium text-stone-300">{selectedLogo.specs.targetMedium}</span>
                  </div>
                </div>
              </div>

              {/* Brand Guarantee Badge */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-950/70 to-black border border-emerald-700/30 flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#d4af37]/20 border border-[#d4af37]/50 flex items-center justify-center shrink-0">
                  <Crown className="w-5 h-5 text-[#d4af37]" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#f7e2a9]">Trademark Registered</p>
                  <p className="text-[11px] text-stone-300">
                    Official emblem of {BRAND_INFO.name}. Protected under Pakistan intellectual property laws.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
