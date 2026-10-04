import React, { useState } from 'react';
import { ActiveTab } from './types';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { BrandIdentitySection } from './components/BrandIdentitySection';
import { PhotographyShowcase } from './components/PhotographyShowcase';
import { CommercialStoryboard } from './components/CommercialStoryboard';
import { SocialReelStudio } from './components/SocialReelStudio';
import { UrduScriptBroadcast } from './components/UrduScriptBroadcast';
import { SalePosterStudio } from './components/SalePosterStudio';
import { AiCampaignStudio } from './components/AiCampaignStudio';
import { Footer } from './components/Footer';
import { Crown, Sparkles, Volume2, ArrowRight } from 'lucide-react';
import { audioEngine } from './utils/audioEngine';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('overview');
  const [ambientAudioOn, setAmbientAudioOn] = useState<boolean>(false);

  const toggleGlobalAmbient = () => {
    if (ambientAudioOn) {
      audioEngine.stopSoundtrack();
      setAmbientAudioOn(false);
    } else {
      audioEngine.startSoundtrack();
      setAmbientAudioOn(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#07130e] text-[#f4efe6] font-sans selection:bg-[#d4af37] selection:text-[#061510] flex flex-col">
      {/* Top Navbar */}
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content Router */}
      <main className="flex-1">
        {activeTab === 'overview' && (
          <div className="space-y-0">
            <HeroSection setActiveTab={setActiveTab} />
            <BrandIdentitySection />
            <PhotographyShowcase />
            <CommercialStoryboard />
            <SocialReelStudio />
            <UrduScriptBroadcast />
            <SalePosterStudio />
            <AiCampaignStudio />
          </div>
        )}

        {activeTab === 'logos' && <BrandIdentitySection />}
        {activeTab === 'photography' && <PhotographyShowcase />}
        {activeTab === 'commercial' && <CommercialStoryboard />}
        {activeTab === 'reels' && <SocialReelStudio />}
        {activeTab === 'urdu-script' && <UrduScriptBroadcast />}
        {activeTab === 'sale-poster' && <SalePosterStudio />}
        {activeTab === 'ai-generator' && <AiCampaignStudio />}
      </main>

      {/* Floating Audio Controller */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={toggleGlobalAmbient}
          className={`flex items-center gap-2.5 px-4 py-2.5 rounded-full backdrop-blur-md border shadow-2xl transition-all ${
            ambientAudioOn
              ? 'bg-[#d4af37] text-[#061510] font-bold border-white shadow-[0_0_20px_rgba(212,175,55,0.4)] scale-105'
              : 'bg-black/80 hover:bg-black text-[#f7e2a9] border-[#d4af37]/40 hover:border-[#d4af37]'
          }`}
          title="Play Royal Cello & Rubab Ambience"
        >
          <Volume2 className={`w-4 h-4 ${ambientAudioOn ? 'animate-bounce text-[#061510]' : 'text-[#d4af37]'}`} />
          <span className="text-xs font-semibold uppercase tracking-wider">
            {ambientAudioOn ? 'Soundscape Active' : 'Play Royal Ambience'}
          </span>
        </button>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
