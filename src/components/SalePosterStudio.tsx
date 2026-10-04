import React, { useState, useRef } from 'react';
import { Tag, Download, Sparkles, RefreshCw, Check, Palette, Type, Phone, MapPin } from 'lucide-react';
import { BRAND_INFO } from '../data/campaignData';

export const SalePosterStudio: React.FC = () => {
  const [headline, setHeadline] = useState<string>('ROYAL HERITAGE FURNITURE SALE');
  const [discountBadge, setDiscountBadge] = useState<string>('UP TO 30% OFF');
  const [urduTag, setUrduTag] = useState<string>('گھر کو بنائیں محل — خصوصی رعایت');
  const [subtext, setSubtext] = useState<string>('Handcrafted Sheesham Wood • Pure 24K Zari Detailing • Lifetime Warranty');
  const [selectedCity, setSelectedCity] = useState<string>('Lahore • Islamabad • Karachi');
  const [contactPhone, setContactPhone] = useState<string>(BRAND_INFO.contactPhone);
  const [borderStyle, setBorderStyle] = useState<'ornamental' | 'minimal' | 'arch'>('ornamental');
  const [copiedLink, setCopiedLink] = useState<boolean>(false);

  const posterRef = useRef<HTMLDivElement>(null);

  const handleDownloadPoster = () => {
    // We can directly trigger download of the high-res generated asset
    const link = document.createElement('a');
    link.href = '/src/assets/images/furniture_sale_poster_1791116904237.jpg';
    link.download = 'Mansoor-Zari-Furnitures-Sale-Poster-1x1.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="py-16 bg-[#071610] border-b border-[#d4af37]/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-[#d4af37]/30 text-xs font-semibold uppercase tracking-widest text-[#f7e2a9] mb-3">
            <Tag className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>Social Campaign Studio (1:1 Square)</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl font-extrabold text-white">
            Furniture Sale Poster Generator
          </h2>
          <p className="mt-3 text-stone-300 font-sans text-sm sm:text-base leading-relaxed">
            Professional 1:1 social media square creative featuring deep emerald and gold palette, centered hero sofa set, ornamental filigree frame, and high-impact promo badges.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Live 1:1 Square Poster Preview Stage */}
          <div className="lg:col-span-7 flex flex-col items-center">
            <div
              ref={posterRef}
              className="relative w-full max-w-[520px] aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-[#d4af37]/70 bg-gradient-to-b from-[#06241a] via-[#03130d] to-[#010906] flex flex-col justify-between p-6 sm:p-8 select-none"
            >
              {/* Ornate Gold Border Inner Frame */}
              <div className="absolute inset-3 border-2 border-[#d4af37]/40 pointer-events-none rounded-2xl" />
              <div className="absolute inset-5 border border-[#d4af37]/25 pointer-events-none rounded-xl" />

              {/* Corner Ornamental Zari Accents */}
              {borderStyle === 'ornamental' && (
                <>
                  <div className="absolute top-4 left-4 w-10 h-10 border-t-2 border-l-2 border-[#d4af37] pointer-events-none" />
                  <div className="absolute top-4 right-4 w-10 h-10 border-t-2 border-r-2 border-[#d4af37] pointer-events-none" />
                  <div className="absolute bottom-4 left-4 w-10 h-10 border-b-2 border-l-2 border-[#d4af37] pointer-events-none" />
                  <div className="absolute bottom-4 right-4 w-10 h-10 border-b-2 border-r-2 border-[#d4af37] pointer-events-none" />
                </>
              )}

              {/* TOP HEADER AREA */}
              <div className="relative z-10 text-center space-y-1">
                <div className="flex items-center justify-center gap-2">
                  <span className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#d4af37]" />
                  <span className="font-cinzel text-xs font-bold tracking-[0.25em] text-[#d4af37] uppercase">
                    Mansoor Zari Furnitures
                  </span>
                  <span className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#d4af37]" />
                </div>

                <h3 className="font-cinzel text-xl sm:text-2xl font-black text-white tracking-wide">
                  {headline}
                </h3>

                <p className="font-urdu text-base sm:text-lg text-[#f7e2a9] font-bold">
                  {urduTag}
                </p>
              </div>

              {/* CENTER HERO IMAGE WITH ORNATE MEDALLION */}
              <div className="relative z-10 my-auto py-2 flex items-center justify-center">
                <div className="relative w-full max-w-[360px] aspect-[4/3] rounded-2xl overflow-hidden border-2 border-[#d4af37] shadow-2xl group">
                  <img
                    src="/src/assets/images/luxury_emerald_sofa_1791116839088.jpg"
                    alt="Mansoor Zari Emerald Sofa Hero"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                  {/* PROMINENT "UP TO 30% OFF" BADGE */}
                  <div className="absolute top-3 right-3 bg-gradient-to-br from-[#f7e2a9] via-[#d4af37] to-[#9c7715] text-[#061510] font-black px-3.5 py-1.5 rounded-xl shadow-xl border border-white/60 flex flex-col items-center">
                    <span className="text-[10px] font-sans font-bold uppercase tracking-wider leading-none">
                      Royal Discount
                    </span>
                    <span className="font-cinzel text-sm sm:text-base font-extrabold leading-tight">
                      {discountBadge}
                    </span>
                  </div>
                </div>
              </div>

              {/* BOTTOM CALL TO ACTION & SHOWROOMS */}
              <div className="relative z-10 text-center space-y-2 pt-2 border-t border-[#d4af37]/30">
                <p className="text-[11px] sm:text-xs text-stone-200 font-sans tracking-wide">
                  {subtext}
                </p>

                <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-[#f7e2a9]">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#d4af37]" />
                    <span>{selectedCity}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <Phone className="w-3 h-3 text-[#d4af37]" />
                    <span>{contactPhone}</span>
                  </span>
                </div>

                <div className="pt-1">
                  <span className="text-[10px] text-stone-400 uppercase tracking-widest font-mono">
                    www.mansoorzarifurnitures.pk • Limited Exhibition Offer
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Download / Export Action */}
            <div className="mt-6 flex items-center gap-4">
              <button
                onClick={handleDownloadPoster}
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#aa8222] text-[#061510] font-bold text-xs uppercase tracking-wider transition-all shadow-xl hover:scale-105"
              >
                <Download className="w-4 h-4" />
                <span>Download Print-Ready 1:1 Poster</span>
              </button>
            </div>
          </div>

          {/* Interactive Poster Customizer Panel */}
          <div className="lg:col-span-5 bg-[#05110d] rounded-3xl border border-[#d4af37]/30 p-6 sm:p-8 space-y-6 shadow-2xl">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#d4af37]">
                Campaign Art Director
              </span>
              <h3 className="font-cinzel text-2xl font-bold text-white mt-1">
                Customize Poster Creative
              </h3>
              <p className="text-stone-300 text-xs sm:text-sm mt-1 leading-relaxed">
                Adjust headlines, discount offers, Urdu calligraphic banners, and showroom contact info in real-time.
              </p>
            </div>

            {/* Quick Preset Buttons */}
            <div className="space-y-2">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-stone-400 block">
                Popular Campaign Themes
              </span>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => {
                    setHeadline('ROYAL WEDDING SEASON SALE');
                    setDiscountBadge('UP TO 30% OFF');
                    setUrduTag('گھر کو بنائیں محل — شاہی شادی سیزن آفر');
                  }}
                  className="p-2.5 rounded-xl bg-black/40 border border-stone-800 hover:border-[#d4af37] text-left text-xs text-stone-200 transition-all"
                >
                  <span className="font-bold text-[#f7e2a9] block">Bespoke Bridal</span>
                  <span className="text-[10px] text-stone-400">Wedding Season Package</span>
                </button>

                <button
                  onClick={() => {
                    setHeadline('RAMADAN & EID EXHIBITION');
                    setDiscountBadge('UP TO 25% OFF');
                    setUrduTag('رمضان اور عید الفطر — شاہی فرنیچر نمائش');
                  }}
                  className="p-2.5 rounded-xl bg-black/40 border border-stone-800 hover:border-[#d4af37] text-left text-xs text-stone-200 transition-all"
                >
                  <span className="font-bold text-[#f7e2a9] block">Eid Festival</span>
                  <span className="text-[10px] text-stone-400">Festive Living Room Suite</span>
                </button>
              </div>
            </div>

            {/* Custom Input Fields */}
            <div className="space-y-4">
              <div>
                <label className="text-xs text-stone-300 font-medium block mb-1.5">
                  Main Headline
                </label>
                <input
                  type="text"
                  value={headline}
                  onChange={(e) => setHeadline(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-black/60 border border-stone-700 text-white text-xs font-semibold focus:border-[#d4af37] focus:outline-none"
                />
              </div>

              <div>
                <label className="text-xs text-stone-300 font-medium block mb-1.5">
                  Promotional Discount Badge
                </label>
                <input
                  type="text"
                  value={discountBadge}
                  onChange={(e) => setDiscountBadge(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-black/60 border border-stone-700 text-[#f7e2a9] text-xs font-bold focus:border-[#d4af37] focus:outline-none"
                />
              </div>

              <div>
                <label className="text-xs text-stone-300 font-medium block mb-1.5">
                  Urdu Calligraphic Line
                </label>
                <input
                  type="text"
                  value={urduTag}
                  onChange={(e) => setUrduTag(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl bg-black/60 border border-stone-700 text-[#f7e2a9] font-urdu text-base text-right focus:border-[#d4af37] focus:outline-none"
                />
              </div>

              <div>
                <label className="text-xs text-stone-300 font-medium block mb-1.5">
                  Showroom Hotline
                </label>
                <input
                  type="text"
                  value={contactPhone}
                  onChange={(e) => setContactPhone(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-black/60 border border-stone-700 text-white text-xs font-mono focus:border-[#d4af37] focus:outline-none"
                />
              </div>

              <div>
                <label className="text-xs text-stone-300 font-medium block mb-1.5">
                  Ornamental Frame Style
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => setBorderStyle('ornamental')}
                    className={`py-2 rounded-xl text-xs font-medium border transition-all ${
                      borderStyle === 'ornamental'
                        ? 'bg-[#d4af37] text-[#061510] font-bold border-[#d4af37]'
                        : 'bg-black/50 text-stone-300 border-stone-700'
                    }`}
                  >
                    Royal Zari
                  </button>
                  <button
                    onClick={() => setBorderStyle('minimal')}
                    className={`py-2 rounded-xl text-xs font-medium border transition-all ${
                      borderStyle === 'minimal'
                        ? 'bg-[#d4af37] text-[#061510] font-bold border-[#d4af37]'
                        : 'bg-black/50 text-stone-300 border-stone-700'
                    }`}
                  >
                    Minimal
                  </button>
                  <button
                    onClick={() => setBorderStyle('arch')}
                    className={`py-2 rounded-xl text-xs font-medium border transition-all ${
                      borderStyle === 'arch'
                        ? 'bg-[#d4af37] text-[#061510] font-bold border-[#d4af37]'
                        : 'bg-black/50 text-stone-300 border-stone-700'
                    }`}
                  >
                    Mughal Arch
                  </button>
                </div>
              </div>
            </div>

            {/* Print Dimensions Advice */}
            <div className="p-4 rounded-xl bg-emerald-950/60 border border-emerald-700/30 text-xs text-emerald-200">
              <span className="font-semibold block text-[#f7e2a9] mb-1">Production Quality:</span>
              Exported as 2048 x 2048 px square format. Perfectly calibrated for Instagram Feed (1:1), Facebook Ad campaigns, and high-gloss 12x12 showroom promotional flyers.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
