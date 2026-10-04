import React from 'react';
import { ActiveTab } from '../types';
import { Crown, Sparkles, ArrowRight, Play, Volume2, ShieldCheck, Award, Heart } from 'lucide-react';
import { BRAND_INFO } from '../data/campaignData';
import { audioEngine } from '../utils/audioEngine';

interface HeroSectionProps {
  setActiveTab: (tab: ActiveTab) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ setActiveTab }) => {
  const handlePlayShimmer = () => {
    audioEngine.playGoldChime();
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#061811] via-[#091b14] to-[#0b1410] border-b border-[#d4af37]/20 pt-10 pb-20">
      {/* Decorative Golden Ambient Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#d4af37]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-emerald-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Crown Badge */}
        <div className="flex justify-center mb-6">
          <div
            onClick={handlePlayShimmer}
            role="button"
            className="cursor-pointer inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-950/80 border border-[#d4af37]/40 shadow-lg shadow-emerald-950/60 hover:border-[#d4af37] transition-all group"
          >
            <Crown className="w-4 h-4 text-[#d4af37] group-hover:rotate-12 transition-transform" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#f7e2a9]">
              Heritage Luxury Brand Campaign • Est. 1989
            </span>
            <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
          </div>
        </div>

        {/* Main Royal Titles */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <h1 className="font-cinzel text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-none">
            MANSOOR ZARI <br />
            <span className="text-gold-gradient font-black">FURNITURES</span>
          </h1>

          {/* Urdu Nastaliq Calligraphic Slogan */}
          <div className="pt-2 pb-1">
            <p className="font-urdu text-3xl sm:text-5xl text-[#f7e2a9] font-bold drop-shadow-md">
              گھر کو بنائیں محل
            </p>
            <p className="text-sm sm:text-base font-cormorant italic text-stone-300 tracking-[0.2em] uppercase mt-1">
              "Ghar Ko Banayein Mahal" • Make Your Home a Palace
            </p>
          </div>

          <p className="text-stone-300 font-sans text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Welcome to the complete brand identity, luxury advertising photography, 30-second broadcast commercial, 9:16 social reel, and Urdu radio campaign studio for Pakistan’s premier handcrafted royal furniture house.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-6">
            <button
              onClick={() => setActiveTab('commercial')}
              className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#aa8222] text-[#061510] font-bold text-sm tracking-wider uppercase shadow-xl shadow-[#d4af37]/20 hover:scale-105 transition-all"
            >
              <Play className="w-4 h-4 fill-current" />
              <span>Watch 30s TV Commercial</span>
            </button>

            <button
              onClick={() => setActiveTab('urdu-script')}
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-950/90 hover:bg-emerald-900 border border-[#d4af37]/40 text-[#f7e2a9] font-semibold text-sm tracking-wider uppercase transition-all shadow-lg"
            >
              <Volume2 className="w-4 h-4 text-[#d4af37]" />
              <span>Urdu Ad & Audio Studio</span>
            </button>

            <button
              onClick={() => setActiveTab('logos')}
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-black/50 hover:bg-black/80 border border-stone-700 text-stone-200 font-semibold text-sm tracking-wider uppercase transition-all"
            >
              <span>Explore 3 Logos</span>
              <ArrowRight className="w-4 h-4 text-[#d4af37]" />
            </button>
          </div>
        </div>

        {/* Hero Visual Showcase Banner */}
        <div className="mt-14 relative rounded-3xl overflow-hidden border border-[#d4af37]/30 shadow-2xl bg-black/60 group">
          <img
            src="/src/assets/images/luxury_emerald_sofa_1791116839088.jpg"
            alt="Mansoor Zari Furnitures Luxury Emerald Sofa Advertising Photograph"
            referrerPolicy="no-referrer"
            className="w-full h-[380px] sm:h-[500px] lg:h-[620px] object-cover object-center group-hover:scale-105 transition-transform duration-1000"
          />

          {/* Editorial Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent flex flex-col justify-end p-6 sm:p-10 lg:p-12">
            <div className="max-w-2xl bg-black/70 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-[#d4af37]/30">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#d4af37] mb-2">
                <Crown className="w-4 h-4" />
                <span>Featured Campaign Asset</span>
              </div>
              <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-white mb-2">
                The Royal Emerald Living Suite
              </h3>
              <p className="text-stone-300 text-xs sm:text-sm font-sans leading-relaxed line-clamp-3">
                Handcrafted Italian silk velvet sofa in imperial emerald, adorned with genuine gold zari-detailed cushions, carved solid walnut coffee table, and an authentic hand-knotted Persian carpet bathed in golden-hour sunlight.
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                <span className="px-2.5 py-1 rounded-md bg-emerald-950/80 border border-emerald-700/40 text-[11px] font-medium text-emerald-300">
                  100% Solid Sheesham
                </span>
                <span className="px-2.5 py-1 rounded-md bg-emerald-950/80 border border-emerald-700/40 text-[11px] font-medium text-emerald-300">
                  24K Zari Embroidery
                </span>
                <span className="px-2.5 py-1 rounded-md bg-emerald-950/80 border border-emerald-700/40 text-[11px] font-medium text-emerald-300">
                  Lifetime Timber Warranty
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillars of Prestige Grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-[#071912]/80 border border-[#d4af37]/20 shadow-lg hover:border-[#d4af37]/60 transition-all">
            <div className="w-10 h-10 rounded-lg bg-emerald-900/50 border border-[#d4af37]/30 flex items-center justify-center mb-4">
              <ShieldCheck className="w-5 h-5 text-[#d4af37]" />
            </div>
            <h4 className="font-cinzel text-base font-bold text-white mb-1">100% Solid Hardwood</h4>
            <p className="text-xs text-stone-300 leading-relaxed">
              Kiln-dried seasoned Pakistani Sheesham and Kashmir Walnut with lifetime resistance against warping or termites.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#071912]/80 border border-[#d4af37]/20 shadow-lg hover:border-[#d4af37]/60 transition-all">
            <div className="w-10 h-10 rounded-lg bg-emerald-900/50 border border-[#d4af37]/30 flex items-center justify-center mb-4">
              <Crown className="w-5 h-5 text-[#d4af37]" />
            </div>
            <h4 className="font-cinzel text-base font-bold text-white mb-1">Authentic Royal Zari</h4>
            <p className="text-xs text-stone-300 leading-relaxed">
              Meticulous metallic gold zari embroidery traditionally stitched into rich silk velvets by Punjab’s hereditary ustads.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#071912]/80 border border-[#d4af37]/20 shadow-lg hover:border-[#d4af37]/60 transition-all">
            <div className="w-10 h-10 rounded-lg bg-emerald-900/50 border border-[#d4af37]/30 flex items-center justify-center mb-4">
              <Award className="w-5 h-5 text-[#d4af37]" />
            </div>
            <h4 className="font-cinzel text-base font-bold text-white mb-1">Bespoke Bridal Suites</h4>
            <p className="text-xs text-stone-300 leading-relaxed">
              Signature bridal dowry (Jahez) collections customized to architectural floorplans and royal color palettes.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#071912]/80 border border-[#d4af37]/20 shadow-lg hover:border-[#d4af37]/60 transition-all">
            <div className="w-10 h-10 rounded-lg bg-emerald-900/50 border border-[#d4af37]/30 flex items-center justify-center mb-4">
              <Heart className="w-5 h-5 text-[#d4af37]" />
            </div>
            <h4 className="font-cinzel text-base font-bold text-white mb-1">25,000+ Royal Homes</h4>
            <p className="text-xs text-stone-300 leading-relaxed">
              Trusted by dignitaries, discerning families, and heritage estates across Pakistan, the Middle East, and the UK.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
