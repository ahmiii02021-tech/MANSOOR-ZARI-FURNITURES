import React, { useState } from 'react';
import { URDU_SCRIPT_DATA, BRAND_INFO } from '../data/campaignData';
import { Radio, Volume2, Copy, Check, Play, Pause, Sparkles, Download, Music, Clock, MessageSquare, VolumeX } from 'lucide-react';
import { audioEngine } from '../utils/audioEngine';

export const UrduScriptBroadcast: React.FC = () => {
  const [activeFormat, setActiveFormat] = useState<'all' | 'urdu' | 'roman' | 'english'>('all');
  const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(false);
  const [activePlayingIndex, setActivePlayingIndex] = useState<number | null>(null);
  const [copiedText, setCopiedText] = useState<boolean>(false);
  const [teleprompterActive, setTeleprompterActive] = useState<boolean>(false);

  const fullUrduScript = URDU_SCRIPT_DATA.map(s => s.urdu).join(' ');
  const fullRomanScript = URDU_SCRIPT_DATA.map(s => s.romanUrdu).join(' ');

  const handlePlayFullBroadcast = () => {
    if (isPlayingAudio) {
      audioEngine.stopSpeech();
      audioEngine.stopSoundtrack();
      setIsPlayingAudio(false);
      setActivePlayingIndex(null);
    } else {
      setIsPlayingAudio(true);
      audioEngine.startSoundtrack();

      // Read Urdu or Roman Urdu depending on active selection
      const textToSpeak = activeFormat === 'roman' ? fullRomanScript : fullUrduScript;
      const lang = activeFormat === 'roman' ? 'en-US' : 'ur-PK';

      audioEngine.speakScript(textToSpeak, lang, () => {
        setIsPlayingAudio(false);
        setActivePlayingIndex(null);
        audioEngine.stopSoundtrack();
      });
    }
  };

  const handlePlaySingleScene = (idx: number) => {
    setActivePlayingIndex(idx);
    const scene = URDU_SCRIPT_DATA[idx];
    if (idx === 2) audioEngine.playCarvingSfx();
    if (idx === 3) audioEngine.playGoldChime();

    const textToSpeak = activeFormat === 'roman' ? scene.romanUrdu : scene.urdu;
    const lang = activeFormat === 'roman' ? 'en-US' : 'ur-PK';

    audioEngine.speakScript(textToSpeak, lang, () => {
      setActivePlayingIndex(null);
    });
  };

  const handleCopyFullScript = () => {
    const compiled = URDU_SCRIPT_DATA.map(
      (s, idx) => `[${s.timeRange}] ${s.title}\nURDU: ${s.urdu}\nROMAN: ${s.romanUrdu}\nENGLISH: ${s.english}\nAUDIO CUE: ${s.audioCue}\nSFX: ${s.sfx}\n`
    ).join('\n---\n\n');

    navigator.clipboard.writeText(compiled);
    setCopiedText(true);
    setTimeout(() => setCopiedText(false), 2000);
  };

  const handleDownloadScript = () => {
    const compiled = `MANSOOR ZARI FURNITURES - 30-SECOND BROADCAST AD SCRIPT
TAGLINE: Ghar Ko Banayein Mahal (گھر کو بنائیں محل)
CLIENT: Mansoor Zari Furnitures (MM Alam Road, Lahore)
DURATION: 30 SECONDS (TV & RADIO BROADCAST)
TONE: Warm, Emotional, Regal, Authoritative, Premium

=======================================================
${URDU_SCRIPT_DATA.map(
  (s, idx) => `\nSCENE ${idx + 1}: ${s.title} (${s.timeRange})
TONE & DELIVERY: ${s.deliveryTone}
URDU (اردو رسم الخط):
${s.urdu}

ROMAN URDU:
${s.romanUrdu}

ENGLISH TRANSLATION:
${s.english}

MUSIC CUE: ${s.audioCue}
SOUND EFFECTS (SFX): ${s.sfx}
-------------------------------------------------------`
).join('\n')}

TAGLINE: Mansoor Zari Furnitures — Ghar Ko Banayein Mahal.
CONTACT: ${BRAND_INFO.contactPhone} | ${BRAND_INFO.website}
SHOWROOMS: Lahore (MM Alam Rd), Islamabad (Blue Area), Karachi (DHA Phase VI)
`;

    const blob = new Blob([compiled], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Mansoor-Zari-30s-Urdu-Broadcast-Script.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="py-16 bg-[#06140e] border-b border-[#d4af37]/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-[#d4af37]/30 text-xs font-semibold uppercase tracking-widest text-[#f7e2a9] mb-3">
            <Radio className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>30-Second Urdu Broadcast Studio</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl font-extrabold text-white">
            TV & Radio Commercial Script
          </h2>
          <p className="mt-3 text-stone-300 font-sans text-sm sm:text-base leading-relaxed">
            Written in a warm, emotional, and imperial tone. Includes an irresistible 3-second hook, family building their dream home, solid sheesham wood & royal zari craft, and a decisive royal call to action.
          </p>
        </div>

        {/* Master Control Bar */}
        <div className="bg-[#05110d] rounded-2xl border border-[#d4af37]/30 p-4 sm:p-6 mb-8 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
          {/* Audio Broadcast Play button */}
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={handlePlayFullBroadcast}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all shadow-lg ${
                isPlayingAudio
                  ? 'bg-red-600 text-white animate-pulse'
                  : 'bg-gradient-to-r from-[#d4af37] to-[#aa8222] text-[#061510] hover:scale-105'
              }`}
            >
              {isPlayingAudio ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current" />}
              <span>{isPlayingAudio ? 'Stop Broadcast Voice' : 'Play 30s Audio Broadcast'}</span>
            </button>

            <button
              onClick={() => audioEngine.playGoldChime()}
              className="p-3 rounded-xl bg-black/50 border border-stone-800 text-stone-300 hover:text-[#d4af37] transition-all"
              title="Test Gold Shimmer Chime"
            >
              <Sparkles className="w-4 h-4" />
            </button>
          </div>

          {/* Script Format Filter Tabs */}
          <div className="flex items-center gap-1 bg-black/60 p-1 rounded-xl border border-stone-800 text-xs">
            <button
              onClick={() => setActiveFormat('all')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                activeFormat === 'all' ? 'bg-[#d4af37] text-[#061510] font-bold' : 'text-stone-300 hover:text-white'
              }`}
            >
              Master Tri-Script
            </button>
            <button
              onClick={() => setActiveFormat('urdu')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                activeFormat === 'urdu' ? 'bg-[#d4af37] text-[#061510] font-bold' : 'text-stone-300 hover:text-white'
              }`}
            >
              اردو (Nastaliq)
            </button>
            <button
              onClick={() => setActiveFormat('roman')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                activeFormat === 'roman' ? 'bg-[#d4af37] text-[#061510] font-bold' : 'text-stone-300 hover:text-white'
              }`}
            >
              Roman Urdu
            </button>
            <button
              onClick={() => setActiveFormat('english')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                activeFormat === 'english' ? 'bg-[#d4af37] text-[#061510] font-bold' : 'text-stone-300 hover:text-white'
              }`}
            >
              English & Notes
            </button>
          </div>

          {/* Export Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyFullScript}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-black/50 border border-stone-700 hover:border-[#d4af37] text-stone-300 hover:text-white text-xs font-semibold transition-all"
            >
              {copiedText ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-[#d4af37]" />}
              <span>{copiedText ? 'Copied' : 'Copy Script'}</span>
            </button>

            <button
              onClick={handleDownloadScript}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-950/80 border border-[#d4af37]/40 hover:bg-emerald-900 text-[#f7e2a9] text-xs font-semibold transition-all"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download TXT</span>
            </button>
          </div>
        </div>

        {/* Script Cards Grid */}
        <div className="space-y-6">
          {URDU_SCRIPT_DATA.map((scene, idx) => {
            const isPlayingThis = activePlayingIndex === idx;
            return (
              <div
                key={idx}
                className={`p-6 sm:p-8 rounded-3xl border transition-all ${
                  isPlayingThis
                    ? 'bg-gradient-to-r from-[#0d2e21] to-[#071912] border-[#d4af37] ring-1 ring-[#d4af37]'
                    : 'bg-[#05110d] border-stone-800 hover:border-[#d4af37]/40'
                }`}
              >
                {/* Header with Timing & Tone */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-5 border-b border-stone-800/80">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-[#d4af37]/15 border border-[#d4af37]/40 text-[#f7e2a9] font-bold text-xs flex items-center justify-center font-mono">
                      0{idx + 1}
                    </span>
                    <div>
                      <h3 className="font-cinzel text-lg font-bold text-white">
                        {scene.title}
                      </h3>
                      <span className="text-[11px] text-stone-400 font-mono">
                        Timecode: <strong className="text-[#d4af37]">{scene.timeRange}</strong> • Tone: {scene.deliveryTone}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => handlePlaySingleScene(idx)}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/60 border border-stone-700 hover:border-[#d4af37] text-stone-300 hover:text-white text-xs font-semibold transition-all w-fit"
                  >
                    <Volume2 className="w-3.5 h-3.5 text-[#d4af37]" />
                    <span>Play Line</span>
                  </button>
                </div>

                {/* Script Renderings */}
                <div className="space-y-5">
                  {/* Authentic Nastaliq Urdu */}
                  {(activeFormat === 'all' || activeFormat === 'urdu') && (
                    <div className="p-5 rounded-2xl bg-black/40 border border-stone-800/80 text-right">
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-emerald-400 block mb-2 font-sans">
                        اردو رسم الخط (Urdu Voiceover Script)
                      </span>
                      <p className="font-urdu text-xl sm:text-2xl text-[#f7e2a9] font-bold leading-loose">
                        {scene.urdu}
                      </p>
                    </div>
                  )}

                  {/* Roman Urdu */}
                  {(activeFormat === 'all' || activeFormat === 'roman') && (
                    <div className="p-4 rounded-xl bg-black/30 border border-stone-800/60">
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-[#d4af37] block mb-1">
                        Roman Urdu (Broadcast Pronunciation Guide)
                      </span>
                      <p className="font-cormorant italic text-base sm:text-lg text-white font-medium">
                        "{scene.romanUrdu}"
                      </p>
                    </div>
                  )}

                  {/* English Translation & Cultural Context */}
                  {(activeFormat === 'all' || activeFormat === 'english') && (
                    <div className="p-4 rounded-xl bg-black/20 border border-stone-800/40">
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-stone-400 block mb-1">
                        English Translation & Meaning
                      </span>
                      <p className="font-sans text-xs sm:text-sm text-stone-300 leading-relaxed">
                        "{scene.english}"
                      </p>
                    </div>
                  )}
                </div>

                {/* Music & Sound Effects Cue Strip */}
                <div className="mt-5 pt-4 border-t border-stone-800/60 grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                  <div className="flex items-center gap-2 text-stone-300">
                    <Music className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                    <span><strong className="text-stone-400">Music Cue:</strong> {scene.audioCue}</span>
                  </div>
                  <div className="flex items-center gap-2 text-stone-300">
                    <Volume2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span><strong className="text-stone-400">SFX / Foley:</strong> {scene.sfx}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Master Campaign Summary Box */}
        <div className="mt-10 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#0c2a1e] to-[#04120c] border border-[#d4af37]/40 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#d4af37]">
              Grand Finale Tagline & CTA
            </span>
            <h3 className="font-urdu text-2xl sm:text-3xl text-white font-bold">
              منصور زری فرنیچرز — گھر کو بنائیں محل
            </h3>
            <p className="font-cormorant italic text-base text-[#f7e2a9]">
              Mansoor Zari Furnitures — Ghar Ko Banayein Mahal.
            </p>
            <p className="text-xs text-stone-300 font-sans max-w-xl">
              Showrooms located at MM Alam Road Lahore, Beverly Centre Islamabad, and DHA Bukhari Karachi. Nationwide delivery with lifetime timber guarantee.
            </p>
          </div>

          <div className="shrink-0 flex flex-col gap-2 w-full md:w-auto">
            <button
              onClick={handlePlayFullBroadcast}
              className="px-6 py-3 rounded-xl bg-[#d4af37] hover:bg-[#b89528] text-[#061510] font-bold text-xs uppercase tracking-wider transition-all shadow-lg text-center"
            >
              Audition Script
            </button>
            <span className="text-[10px] text-center text-stone-400 font-mono">
              30.0s Standard Broadcast Timing
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
