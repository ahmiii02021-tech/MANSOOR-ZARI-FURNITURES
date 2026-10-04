import React from 'react';
import { BRAND_INFO } from '../data/campaignData';
import { Crown, MapPin, Phone, Mail, Globe, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#030b08] border-t border-[#d4af37]/25 text-stone-300 relative overflow-hidden">
      {/* Decorative Top Border Glow */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0a3525] to-[#04150e] border border-[#d4af37]/50 flex items-center justify-center shadow-lg">
                <span className="font-cinzel text-xl font-bold text-gold-gradient">MZ</span>
              </div>
              <div>
                <h2 className="font-cinzel text-xl font-bold text-white tracking-wider">
                  MANSOOR ZARI
                </h2>
                <p className="text-[10px] font-sans tracking-[0.25em] text-[#d4af37] uppercase">
                  Furnitures • Royal Living
                </p>
              </div>
            </div>

            <p className="font-urdu text-xl text-[#f7e2a9] font-bold">
              گھر کو بنائیں محل — شاہی وقار، نسل در نسل
            </p>

            <p className="text-xs text-stone-400 font-sans leading-relaxed max-w-sm">
              Since 1989, Mansoor Zari Furnitures has redefined Pakistani royal interiors through kiln-dried Sheesham and Walnut timbers, hand-carved floral crestings, and 24K bullion zari embroidery.
            </p>

            <div className="pt-2 text-xs text-stone-400">
              <span className="font-semibold text-white">Private Concierge: </span>
              <a href={`tel:${BRAND_INFO.contactPhone}`} className="text-[#f7e2a9] hover:underline font-mono">
                {BRAND_INFO.contactPhone}
              </a>
            </div>
          </div>

          {/* Showroom 1: Lahore */}
          <div className="space-y-3">
            <h4 className="font-cinzel text-sm font-bold text-[#f7e2a9] flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>Lahore Flagship</span>
            </h4>
            <p className="text-xs text-stone-300 font-sans leading-relaxed">
              Plot 42-B, MM Alam Road, Gulberg III, Lahore, Punjab
            </p>
            <p className="text-xs font-mono text-stone-400">
              Phone: +92 42 3578 9911
            </p>
            <span className="inline-block text-[10px] text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800/40">
              Grand 3-Floor Gallery
            </span>
          </div>

          {/* Showroom 2: Islamabad */}
          <div className="space-y-3">
            <h4 className="font-cinzel text-sm font-bold text-[#f7e2a9] flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>Islamabad Suite</span>
            </h4>
            <p className="text-xs text-stone-300 font-sans leading-relaxed">
              Executive Heights, Beverly Centre, Blue Area, Islamabad
            </p>
            <p className="text-xs font-mono text-stone-400">
              Phone: +92 51 280 4422
            </p>
            <span className="inline-block text-[10px] text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800/40">
              Diplomatic Enclave Desk
            </span>
          </div>

          {/* Showroom 3: Karachi */}
          <div className="space-y-3">
            <h4 className="font-cinzel text-sm font-bold text-[#f7e2a9] flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>Karachi Gallery</span>
            </h4>
            <p className="text-xs text-stone-300 font-sans leading-relaxed">
              Bukhari Commercial Area, Phase VI, DHA, Karachi, Sindh
            </p>
            <p className="text-xs font-mono text-stone-400">
              Phone: +92 21 3584 7733
            </p>
            <span className="inline-block text-[10px] text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800/40">
              Coastal Luxury Showroom
            </span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-stone-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <div>
            © {new Date().getFullYear()} {BRAND_INFO.name}. All Rights Reserved. Crafted with Royal Pride in Pakistan.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/60 border border-stone-700 hover:border-[#d4af37] text-stone-300 hover:text-[#f7e2a9] transition-all"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3 h-3 text-[#d4af37]" />
          </button>
        </div>
      </div>
    </footer>
  );
};
