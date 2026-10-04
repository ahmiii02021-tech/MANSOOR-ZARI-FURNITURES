import React, { useState, useEffect } from 'react';
import { REEL_PRODUCTS, BRAND_INFO } from '../data/campaignData';
import { Play, Pause, RotateCcw, Smartphone, Heart, MessageCircle, Share2, Bookmark, Music2, Phone, Sparkles, Volume2, VolumeX } from 'lucide-react';
import { audioEngine } from '../utils/audioEngine';

export const SocialReelStudio: React.FC = () => {
  const [currentSlideIdx, setCurrentSlideIdx] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isAudioMuted, setIsAudioMuted] = useState<boolean>(false);
  const [liked, setLiked] = useState<boolean>(false);
  const [likeCount, setLikeCount] = useState<number>(14280);

  const slides = [
    {
      type: 'product',
      title: 'The Shehanshah Velvet Sofa',
      urdu: 'شہنشاہ زری صوفہ',
      tag: 'Royal Living Room',
      subtitle: 'Pure Emerald Velvet with 24K Handcrafted Zari',
      imageSrc: '/src/assets/images/luxury_emerald_sofa_1791116839088.jpg',
      highlight: '100% Seasoned Sheesham Wood',
    },
    {
      type: 'product',
      title: 'The Nawab Master Bed Suite',
      urdu: 'شاہی نوابی ماسٹر بیڈ',
      tag: 'Master Bedroom',
      subtitle: 'Belgian Ivory Silk with Diamond Tufting',
      imageSrc: '/src/assets/images/royal_master_bedroom_1791116858627.jpg',
      highlight: 'Hand-Carved Crown Cresting',
    },
    {
      type: 'product',
      title: 'Artisan Chiseling Heritage',
      urdu: 'خالص ہاتھ کی نقاشی',
      tag: 'Master Craftsmanship',
      subtitle: '40+ Hours of Heritage Woodworking',
      imageSrc: '/src/assets/images/craftsman_carving_macro_1791116876165.jpg',
      highlight: 'Traditional Ustad Hand Carving',
    },
    {
      type: 'promo',
      title: 'Royal Seasonal Offer',
      urdu: 'شاہی سیزنل آفر - ۳۰٪ رعایت',
      tag: 'Limited Eid & Wedding Season',
      subtitle: 'Make Your Home a Palace Today',
      imageSrc: '/src/assets/images/furniture_sale_poster_1791116904237.jpg',
      highlight: 'Up to 30% Off Storewide',
    },
  ];

  // Auto-advance fast reel cuts (every 2.6 seconds)
  useEffect(() => {
    let interval: number | undefined;
    if (isPlaying) {
      interval = window.setInterval(() => {
        setCurrentSlideIdx((prev) => {
          const next = (prev + 1) % slides.length;
          if (!isAudioMuted) {
            audioEngine.playGoldChime();
          }
          return next;
        });
      }, 2600);
    }
    return () => clearInterval(interval);
  }, [isPlaying, isAudioMuted, slides.length]);

  const currentSlide = slides[currentSlideIdx];

  const handleToggleLike = () => {
    setLiked(!liked);
    setLikeCount(liked ? likeCount - 1 : likeCount + 1);
  };

  return (
    <section className="py-16 bg-[#081811] border-b border-[#d4af37]/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-[#d4af37]/30 text-xs font-semibold uppercase tracking-widest text-[#f7e2a9] mb-3">
            <Smartphone className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>Vertical 9:16 Social Reel Studio</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl font-extrabold text-white">
            "Ghar Ko Banayein Mahal" Reel
          </h2>
          <p className="mt-3 text-stone-300 font-sans text-sm sm:text-base leading-relaxed">
            Fast-paced, mobile-first Instagram & TikTok reel with rapid gold flash transitions, royal typography overlays, upbeat audio sync, and direct booking CTA.
          </p>
        </div>

        {/* Central Stage */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
          {/* Smartphone Mockup Container (9:16) */}
          <div className="relative w-[320px] sm:w-[350px] aspect-[9/16] rounded-[44px] p-3 bg-black border-4 border-[#d4af37]/60 shadow-[0_20px_60px_-15px_rgba(212,175,55,0.3)]">
            {/* Dynamic Island / Notch */}
            <div className="absolute top-5 left-1/2 -translate-x-1/2 w-28 h-5 bg-black rounded-full z-40 flex items-center justify-end px-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#1c2e24] border border-[#d4af37]/40" />
            </div>

            {/* Inner Phone Screen */}
            <div className="relative w-full h-full rounded-[36px] overflow-hidden bg-black select-none">
              {/* Media Slide with Golden Flash Transition */}
              <div key={currentSlideIdx} className="relative w-full h-full overflow-hidden animate-in fade-in duration-300">
                <img
                  src={currentSlide.imageSrc}
                  alt={currentSlide.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover animate-in zoom-in-105 duration-1000"
                />

                {/* Golden Flash Light Sweep */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#f7e2a9]/20 to-transparent -translate-x-full animate-[sweep_1.2s_ease-out]" />

                {/* Dark Vignette Gradients for Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/90 pointer-events-none" />

                {/* Top Stories Progress Indicators */}
                <div className="absolute top-4 left-4 right-4 z-30 flex gap-1.5">
                  {slides.map((_, idx) => (
                    <div
                      key={idx}
                      className="h-1 flex-1 rounded-full bg-white/30 overflow-hidden"
                    >
                      <div
                        className={`h-full bg-[#d4af37] transition-all duration-300 ${
                          idx === currentSlideIdx
                            ? 'w-full animate-[progress_2.6s_linear]'
                            : idx < currentSlideIdx
                            ? 'w-full'
                            : 'w-0'
                        }`}
                      />
                    </div>
                  ))}
                </div>

                {/* Floating Brand Header */}
                <div className="absolute top-8 left-4 right-4 z-30 flex items-center justify-between">
                  <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-[#d4af37]/40">
                    <div className="w-5 h-5 rounded-full bg-[#0a3525] border border-[#d4af37] flex items-center justify-center text-[9px] font-bold text-[#f7e2a9]">
                      MZ
                    </div>
                    <span className="text-[11px] font-bold text-white tracking-wider">
                      mansoorzarifurnitures
                    </span>
                  </div>

                  <button
                    onClick={() => setIsAudioMuted(!isAudioMuted)}
                    className="w-7 h-7 rounded-full bg-black/60 backdrop-blur-md border border-stone-700 flex items-center justify-center text-white hover:text-[#d4af37]"
                  >
                    {isAudioMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-[#d4af37]" />}
                  </button>
                </div>

                {/* Right Action Icons (Like, Comment, Share, Save) */}
                <div className="absolute right-3 bottom-24 z-30 flex flex-col items-center gap-4 text-white">
                  <button
                    onClick={handleToggleLike}
                    className="flex flex-col items-center gap-1 group"
                  >
                    <div className={`p-2.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 transition-transform ${liked ? 'scale-110' : ''}`}>
                      <Heart className={`w-5 h-5 ${liked ? 'fill-red-500 text-red-500' : 'text-white'}`} />
                    </div>
                    <span className="text-[10px] font-medium font-sans">
                      {(likeCount / 1000).toFixed(1)}k
                    </span>
                  </button>

                  <div className="flex flex-col items-center gap-1">
                    <div className="p-2.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20">
                      <MessageCircle className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-[10px] font-medium font-sans">342</span>
                  </div>

                  <div className="flex flex-col items-center gap-1">
                    <div className="p-2.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20">
                      <Share2 className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-[10px] font-medium font-sans">Share</span>
                  </div>

                  <div className="flex flex-col items-center gap-1">
                    <div className="p-2.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20">
                      <Bookmark className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>

                {/* Bottom Storytelling Typography & Slogan */}
                <div className="absolute bottom-4 left-4 right-14 z-30 space-y-2">
                  <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#d4af37] text-[#061510] text-[10px] font-bold uppercase tracking-wider">
                    <Sparkles className="w-2.5 h-2.5 fill-current" />
                    <span>{currentSlide.tag}</span>
                  </div>

                  {/* Urdu Big Hook */}
                  <h3 className="font-urdu text-2xl text-[#f7e2a9] font-bold leading-normal drop-shadow">
                    گھر کو بنائیں محل
                  </h3>

                  <p className="font-cinzel text-sm font-bold text-white leading-tight">
                    {currentSlide.title}
                  </p>

                  <p className="text-[11px] text-stone-200 line-clamp-2">
                    {currentSlide.subtitle} • {currentSlide.highlight}
                  </p>

                  {/* Audio Music Track Marquee */}
                  <div className="flex items-center gap-2 text-[10px] text-stone-300 bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-md border border-stone-800 w-fit">
                    <Music2 className="w-3 h-3 text-[#d4af37] animate-spin" />
                    <span className="truncate max-w-[170px]">
                      Mansoor Zari — Royal Sitar & Orchestral Beat
                    </span>
                  </div>

                  {/* Direct WhatsApp / Call Button */}
                  <a
                    href={`tel:${BRAND_INFO.contactPhone}`}
                    className="flex items-center justify-center gap-2 w-full py-2 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#aa8222] text-[#061510] font-bold text-xs shadow-lg uppercase tracking-wider mt-2 hover:scale-[1.02] transition-transform"
                  >
                    <Phone className="w-3.5 h-3.5 fill-current" />
                    <span>Book Showroom Visit</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Reel Controls & Production Breakdown */}
          <div className="max-w-md space-y-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#d4af37]">
                Mobile Social Distribution
              </span>
              <h3 className="font-cinzel text-2xl font-bold text-white mt-1">
                Viral Campaign Reel Engine
              </h3>
              <p className="text-stone-300 text-xs sm:text-sm mt-2 leading-relaxed font-sans">
                Engineered for maximum retention on Instagram Reels, YouTube Shorts, and TikTok. Synchronized to Pakistani wedding season and luxury home renovation cycles.
              </p>
            </div>

            {/* Reel Player Controls */}
            <div className="p-4 rounded-2xl bg-black/50 border border-stone-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-10 h-10 rounded-xl bg-[#d4af37] text-[#061510] flex items-center justify-center font-bold shadow hover:scale-105 transition-transform"
                >
                  {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current ml-0.5" />}
                </button>
                <button
                  onClick={() => setCurrentSlideIdx(0)}
                  className="p-2.5 rounded-xl bg-stone-900 border border-stone-700 text-stone-300 hover:text-white"
                  title="Restart Reel"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>

              <div className="text-xs text-stone-400 font-mono">
                Slide {currentSlideIdx + 1} of {slides.length}
              </div>
            </div>

            {/* Slide Quick Selectors */}
            <div className="space-y-2">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-stone-400 block">
                Reel Keyframes
              </span>
              <div className="grid grid-cols-2 gap-2">
                {slides.map((s, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setCurrentSlideIdx(idx);
                      if (!isAudioMuted) audioEngine.playGoldChime();
                    }}
                    className={`p-2.5 rounded-xl text-left border text-xs transition-all ${
                      currentSlideIdx === idx
                        ? 'bg-emerald-950 border-[#d4af37] text-[#f7e2a9] font-bold shadow'
                        : 'bg-black/40 border-stone-800 text-stone-400 hover:text-white'
                    }`}
                  >
                    <span className="block text-[10px] text-stone-500 font-mono">Cut 0{idx + 1}</span>
                    <span className="truncate block font-cinzel">{s.title}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Callout Details */}
            <div className="p-4 rounded-xl bg-gradient-to-br from-emerald-950/80 to-[#071912] border border-[#d4af37]/30 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-[#f7e2a9]">
                <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>Urdu Headline Anchor:</span>
              </div>
              <p className="font-urdu text-lg text-white font-semibold">
                "گھر کو بنائیں محل — منصور زری فرنیچرز"
              </p>
              <p className="text-[11px] text-stone-300 font-sans">
                Contact: <strong className="text-white">{BRAND_INFO.contactPhone}</strong> | Showrooms in Lahore, Islamabad, Karachi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
