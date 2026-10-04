import React from 'react';
import { ActiveTab } from '../types';
import { Sparkles, Crown, Image, Film, Smartphone, Radio, Tag, Compass, PhoneCall } from 'lucide-react';
import { BRAND_INFO } from '../data/campaignData';

interface NavbarProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  const navItems = [
    { id: 'overview' as ActiveTab, label: 'Heritage Studio', icon: Compass },
    { id: 'logos' as ActiveTab, label: '3 Brand Logos', icon: Crown },
    { id: 'photography' as ActiveTab, label: 'Luxury Photography', icon: Image },
    { id: 'commercial' as ActiveTab, label: '30s TV Commercial', icon: Film },
    { id: 'reels' as ActiveTab, label: '9:16 Royal Reel', icon: Smartphone },
    { id: 'urdu-script' as ActiveTab, label: 'Urdu Ad Script', icon: Radio },
    { id: 'sale-poster' as ActiveTab, label: 'Sale Poster (1:1)', icon: Tag },
    { id: 'ai-generator' as ActiveTab, label: 'AI Copywriter', icon: Sparkles },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#061510]/95 backdrop-blur-md border-b border-[#d4af37]/20 shadow-2xl transition-all">
      {/* Top micro bar with contact & Urdu slogan */}
      <div className="hidden md:flex justify-between items-center px-6 py-1.5 text-xs text-[#d4af37]/80 border-b border-[#d4af37]/10 bg-black/40">
        <div className="flex items-center gap-4">
          <span className="font-urdu text-sm text-[#f7e2a9]">منصور زری فرنیچرز — شاہی وقار، نسل در نسل</span>
          <span className="text-white/40">|</span>
          <span className="font-sans tracking-widest uppercase text-[10px] text-emerald-300">Crafting Royal Homes Since 1989</span>
        </div>
        <div className="flex items-center gap-6">
          <span className="text-stone-300">Lahore • Islamabad • Karachi</span>
          <a
            href={`tel:${BRAND_INFO.contactPhone}`}
            className="flex items-center gap-1.5 text-[#f7e2a9] hover:text-white transition-colors"
          >
            <PhoneCall className="w-3 h-3 text-[#d4af37]" />
            <span>{BRAND_INFO.contactPhone}</span>
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
        {/* Brand Monogram & Title */}
        <button
          onClick={() => setActiveTab('overview')}
          className="flex items-center gap-3 text-left group transition-transform"
        >
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0a3525] to-[#04150e] border border-[#d4af37]/50 flex items-center justify-center shadow-lg shadow-emerald-950/40 group-hover:border-[#d4af37] transition-all">
            <span className="font-cinzel text-xl font-bold text-gold-gradient">MZ</span>
          </div>
          <div>
            <h1 className="font-cinzel text-lg sm:text-xl font-bold tracking-wider text-white group-hover:text-[#f7e2a9] transition-colors leading-tight">
              MANSOOR ZARI
            </h1>
            <p className="text-[10px] font-sans tracking-[0.25em] text-[#d4af37] uppercase">
              Furnitures • Royal Living
            </p>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#040e0b]/80 p-1.5 rounded-full border border-[#d4af37]/25 shadow-inner">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-medium transition-all ${
                  isActive
                    ? 'bg-gradient-to-r from-[#d4af37] to-[#aa8222] text-[#061510] font-semibold shadow-md shadow-[#d4af37]/20 scale-105'
                    : 'text-stone-300 hover:text-[#f7e2a9] hover:bg-emerald-950/40'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#061510]' : 'text-[#d4af37]'}`} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Call to action: Consult Concierge */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setActiveTab('urdu-script')}
            className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-950/80 hover:bg-emerald-900 border border-[#d4af37]/40 text-[#f7e2a9] text-xs font-semibold tracking-wider uppercase transition-all shadow-md"
          >
            <Radio className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>Listen Script</span>
          </button>
        </div>
      </div>

      {/* Mobile Scrollable Subnav */}
      <div className="lg:hidden flex overflow-x-auto py-2.5 px-4 gap-2 bg-[#040e0b] border-t border-[#d4af37]/15 no-scrollbar">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex items-center gap-1.5 whitespace-nowrap px-3 py-1.5 rounded-full text-xs font-medium shrink-0 transition-all ${
                isActive
                  ? 'bg-[#d4af37] text-[#061510] font-bold shadow'
                  : 'text-stone-300 hover:text-white bg-emerald-950/40 border border-[#d4af37]/20'
              }`}
            >
              <Icon className="w-3 h-3" />
              <span>{item.label}</span>
            </button>
          );
        })}
      </div>
    </header>
  );
};
