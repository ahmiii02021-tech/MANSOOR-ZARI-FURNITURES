import React, { useState } from 'react';
import { GoogleGenAI } from '@google/genai';
import { Sparkles, Send, Copy, Check, Wand2, RefreshCw, Layers, BookOpen, Crown } from 'lucide-react';
import { BRAND_INFO } from '../data/campaignData';

export const AiCampaignStudio: React.FC = () => {
  const [campaignGoal, setCampaignGoal] = useState<string>('Bespoke Bridal Furniture Dowry (Jahez) Package');
  const [targetAudience, setTargetAudience] = useState<string>('Luxury Pakistani Brides & Affluent Families in Lahore/Islamabad');
  const [outputFormat, setOutputFormat] = useState<'script' | 'caption' | 'catalog'>('script');
  const [tone, setTone] = useState<string>('Royal, Emotional, Prestigious');
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [generatedOutput, setGeneratedOutput] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);

  const defaultPresets = [
    {
      title: 'Bridal Dowry Package (شاہی جہیز)',
      goal: 'Bespoke Bridal Furniture Suite with 24K Gold Zari & Sheesham Wood',
      audience: 'Affluent Wedding Families, Brides & Grooms',
      format: 'script' as const,
    },
    {
      title: 'Ramadan & Eid Festive Living',
      goal: 'Ramadan & Eid-ul-Fitr Royal Living Room Makeover Showcase',
      audience: 'Heritage homeowners and modern apartment dwellers',
      format: 'caption' as const,
    },
    {
      title: 'Solid Sheesham Dining Collection',
      goal: '12-Seater Royal Mughal Dining Table with Hand-Chiseled Jali Chairs',
      audience: 'Villas, Farmhouses & Dignitary Residences',
      format: 'catalog' as const,
    },
  ];

  const handleGenerate = async () => {
    setIsGenerating(true);
    try {
      const apiKey =
        (typeof process !== 'undefined' && process.env?.GEMINI_API_KEY) ||
        (import.meta as unknown as { env: { VITE_GEMINI_API_KEY?: string } }).env?.VITE_GEMINI_API_KEY ||
        '';

      if (!apiKey || apiKey === 'MY_GEMINI_API_KEY') {
        // Fallback luxury high-fidelity generator when API key is pending
        generateRichFallback();
        setIsGenerating(false);
        return;
      }

      const ai = new GoogleGenAI({ apiKey });
      const prompt = `You are the Lead Creative Director for "Mansoor Zari Furnitures", a premier luxury handcrafted furniture brand established in 1989 in Pakistan (Showrooms in Lahore, Islamabad, Karachi).
The brand tagline is "Ghar Ko Banayein Mahal (گھر کو بنائیں محل)" and "Crafted Comfort".
Their furniture is renowned for 100% solid seasoned Sheesham and Walnut wood, master artisan hand-carving, and royal metallic gold Zari embroidery.

User Campaign Request:
- Campaign Topic/Goal: ${campaignGoal}
- Target Audience: ${targetAudience}
- Format: ${outputFormat === 'script' ? '30-second Urdu TV/Radio Commercial Script with Roman Urdu, English, Scene Breakdown, and Sound cues' : outputFormat === 'caption' ? 'Luxury Instagram/TikTok Caption with Urdu Hook, English copy, and high-prestige hashtags' : 'Luxury Product Catalog Description with Wood Specs, Zari Craft, and Royal Lifestyle Appeal'}
- Tone: ${tone}

Please produce a stunning, masterclass broadcast-ready creative piece with authentic Pakistani cultural resonance, poetic eloquence, and irresistible royal prestige.`;

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
      });

      setGeneratedOutput(response.text || 'Unable to generate content. Please try again.');
    } catch {
      generateRichFallback();
    } finally {
      setIsGenerating(false);
    }
  };

  const generateRichFallback = () => {
    if (outputFormat === 'script') {
      setGeneratedOutput(`[00:00 - 00:03] THE HOOK
VO (Warm, Royal Baritone): "جب بیٹیاں اپنے خوابوں کا گھر بساتی ہیں، تو یادیں بنتی ہیں لافانی..."
Roman: "Jab betiyan apne khwabon ka ghar basati hain, toh yaadein banti hain lafani..."
(Music: Soft solo Rubab with morning dawn ambient pads)

[00:03 - 00:15] THE HERITAGE STORY
VO: "منصور زری فرنیچرز لایا ہے برائیڈل جہیز کا شاہی شاہکار۔ خالص شیشم کی لکڑی، ہاتھ کی باریک نقاشی، اور چوبیس کیرٹ زری کی چمک—جو نسلوں تک آپ کی محبت کا ثبوت بنے۔"
Roman: "Mansoor Zari Furnitures laya hai bridal jahez ka shahi shahkaar. Khalis Sheesham ki lakri, haath ki bareek naqashi, aur 24k zari ki chamak..."
(SFX: Velvet rustle, soft porcelain chime)

[00:15 - 00:24] SOLID WOOD CRAFTSMANSHIP
VO: "ہر صوفہ، ہر بیڈ اور ہر ڈائننگ ٹیبل پر لائف ٹائم لکڑی کی وارنٹی۔ کیونکہ شاہی وقار کبھی پرانا نہیں ہوتا۔"
Roman: "Har sofa, har bed aur har dining table par lifetime lakri ki warranty. Kyunke shahi waqaar kabhi purana nahi hota."

[00:24 - 00:30] DECISIVE CALL TO ACTION
VO: "آج ہی لاہور، اسلام آباد اور کراچی کے شورومز میں تشریف لائیں۔ منصور زری فرنیچرز — گھر کو بنائیں محل۔"
Roman: "Aaj hi Lahore, Islamabad aur Karachi ke showrooms mein tashreef layein. Mansoor Zari Furnitures — Ghar Ko Banayein Mahal."
Showrooms: MM Alam Road Lahore | Blue Area Islamabad | DHA Karachi | Call: ${BRAND_INFO.contactPhone}`);
    } else if (outputFormat === 'caption') {
      setGeneratedOutput(`✨ شاہی وقار کا نیا نام — منصور زری فرنیچرز ✨

True luxury is never accidental. It is chiselled by master artisans over forty deliberate hours into solid Pakistani Sheesham, then embraced in imperial emerald velvet and hand-threaded metallic gold zari.

From our royal living suites to majestic bridal bedrooms, we transform your residence into an enduring palace.

🏷️ "Ghar Ko Banayein Mahal" • گھر کو بنائیں محل
📍 Flagship Galleries:
• Plot 42-B, MM Alam Road, Gulberg III, Lahore
• Executive Heights, Beverly Centre, Blue Area, Islamabad
• Bukhari Commercial, Phase VI, DHA Karachi
📞 Private Concierge & Showroom Appointments: ${BRAND_INFO.contactPhone}

#MansoorZariFurnitures #GharKoBanayeinMahal #LuxuryFurniturePakistan #RoyalLiving #SheeshamWood #HandcraftedFurniture #PakistaniWeddings #LahoreShowroom #DHAHomeDecor`);
    } else {
      setGeneratedOutput(`COLLECTION SPECIFICATION: The Shehanshah 12-Seater Royal Banquet Table

TIMBER ESSENCE:
Hand-selected, 100-year seasoned Pakistani Sheesham (Dalbergia sissoo) kiln-dried to 8% moisture equilibrium to ensure perpetual structural integrity in humid and arid climates alike.

ARTISANAL EMBELLISHMENT:
Each pedestal pillar features hand-undercut floral arabesques and Mughal Mehrab jali screens executed solely with traditional hand chisels by 4th-generation Lahore woodcarvers.

UPHOLSTERY & ZARI CRAFT:
Chairs draped in imported Italian woven velvet in imperial emerald (#062B1E), contoured with solid brass nail-head trim and customized monogram embroidery in 24K-finish antique gold bullion thread.

LIFETIME PROMISE:
Backed by the Mansoor Zari Certificate of Provenance and a lifetime structural timber warranty against warping, pest infiltration, and joint looseness.`);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedOutput);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-16 bg-[#06140e] border-b border-[#d4af37]/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-[#d4af37]/30 text-xs font-semibold uppercase tracking-widest text-[#f7e2a9] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>AI Campaign Copywriter</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl font-extrabold text-white">
            Brand Intelligence & Ad Creator
          </h2>
          <p className="mt-3 text-stone-300 font-sans text-sm sm:text-base leading-relaxed">
            Generate tailored Urdu & English broadcast radio scripts, social media copy, and luxury catalogue specifications powered by the Gemini model.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Controls Form */}
          <div className="lg:col-span-5 bg-[#05110d] rounded-3xl border border-[#d4af37]/30 p-6 sm:p-8 space-y-6 shadow-2xl">
            {/* Quick Presets */}
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-stone-400 block mb-2">
                Curated Campaign Presets
              </span>
              <div className="space-y-2">
                {defaultPresets.map((preset, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setCampaignGoal(preset.goal);
                      setTargetAudience(preset.audience);
                      setOutputFormat(preset.format);
                    }}
                    className="w-full text-left p-3 rounded-xl bg-black/40 border border-stone-800 hover:border-[#d4af37] text-xs transition-all group"
                  >
                    <span className="font-bold text-white group-hover:text-[#f7e2a9] block">
                      {preset.title}
                    </span>
                    <span className="text-[11px] text-stone-400 truncate block">
                      {preset.goal}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Inputs */}
            <div className="space-y-4">
              <div>
                <label className="text-xs text-stone-300 font-medium block mb-1.5">
                  Campaign Objective / Collection
                </label>
                <input
                  type="text"
                  value={campaignGoal}
                  onChange={(e) => setCampaignGoal(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-black/60 border border-stone-700 text-white text-xs focus:border-[#d4af37] focus:outline-none"
                />
              </div>

              <div>
                <label className="text-xs text-stone-300 font-medium block mb-1.5">
                  Target Audience
                </label>
                <input
                  type="text"
                  value={targetAudience}
                  onChange={(e) => setTargetAudience(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-black/60 border border-stone-700 text-white text-xs focus:border-[#d4af37] focus:outline-none"
                />
              </div>

              <div>
                <label className="text-xs text-stone-300 font-medium block mb-1.5">
                  Output Format
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => setOutputFormat('script')}
                    className={`py-2 rounded-xl text-xs font-semibold border transition-all ${
                      outputFormat === 'script'
                        ? 'bg-[#d4af37] text-[#061510] border-[#d4af37]'
                        : 'bg-black/50 text-stone-300 border-stone-700'
                    }`}
                  >
                    Radio/TV Script
                  </button>
                  <button
                    onClick={() => setOutputFormat('caption')}
                    className={`py-2 rounded-xl text-xs font-semibold border transition-all ${
                      outputFormat === 'caption'
                        ? 'bg-[#d4af37] text-[#061510] border-[#d4af37]'
                        : 'bg-black/50 text-stone-300 border-stone-700'
                    }`}
                  >
                    Social Post
                  </button>
                  <button
                    onClick={() => setOutputFormat('catalog')}
                    className={`py-2 rounded-xl text-xs font-semibold border transition-all ${
                      outputFormat === 'catalog'
                        ? 'bg-[#d4af37] text-[#061510] border-[#d4af37]'
                        : 'bg-black/50 text-stone-300 border-stone-700'
                    }`}
                  >
                    Luxury Catalog
                  </button>
                </div>
              </div>
            </div>

            <button
              onClick={handleGenerate}
              disabled={isGenerating}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#aa8222] text-[#061510] font-bold text-xs uppercase tracking-wider transition-all shadow-xl hover:scale-[1.02] flex items-center justify-center gap-2"
            >
              {isGenerating ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>Drafting Masterpiece...</span>
                </>
              ) : (
                <>
                  <Wand2 className="w-4 h-4" />
                  <span>Generate Campaign Copy</span>
                </>
              )}
            </button>
          </div>

          {/* Generated Result Output */}
          <div className="lg:col-span-7 bg-[#05110d] rounded-3xl border border-[#d4af37]/30 p-6 sm:p-8 flex flex-col justify-between shadow-2xl min-h-[460px]">
            <div>
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-stone-800">
                <div className="flex items-center gap-2">
                  <Crown className="w-4 h-4 text-[#d4af37]" />
                  <span className="font-cinzel text-sm font-bold text-white">
                    Generated Copy & Production Blueprint
                  </span>
                </div>

                {generatedOutput && (
                  <button
                    onClick={handleCopy}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/60 border border-stone-700 hover:border-[#d4af37] text-stone-300 hover:text-white text-xs font-semibold transition-all"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-[#d4af37]" />}
                    <span>{copied ? 'Copied' : 'Copy Output'}</span>
                  </button>
                )}
              </div>

              {generatedOutput ? (
                <div className="bg-black/40 rounded-2xl p-5 border border-stone-800/80 font-sans text-xs sm:text-sm text-stone-200 whitespace-pre-wrap leading-relaxed max-h-[450px] overflow-y-auto">
                  {generatedOutput}
                </div>
              ) : (
                <div className="h-64 flex flex-col items-center justify-center text-center p-6 border-2 border-dashed border-stone-800 rounded-2xl">
                  <Wand2 className="w-8 h-8 text-[#d4af37]/40 mb-3" />
                  <p className="font-cinzel text-base text-stone-300">Ready to Compose</p>
                  <p className="text-xs text-stone-500 max-w-sm mt-1">
                    Select a preset or enter your custom goal, then click "Generate Campaign Copy" to craft your broadcast asset.
                  </p>
                </div>
              )}
            </div>

            <div className="pt-4 mt-4 border-t border-stone-800/60 flex items-center justify-between text-[11px] text-stone-400 font-mono">
              <span>Brand Guidelines Active: 100% Solid Sheesham & Zari</span>
              <span>Gemini 2.5 Flash</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
