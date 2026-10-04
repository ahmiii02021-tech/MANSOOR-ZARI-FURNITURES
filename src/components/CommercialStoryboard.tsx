import React, { useState, useEffect } from 'react';
import { COMMERCIAL_SCENES } from '../data/campaignData';
import { CommercialScene } from '../types';
import { Play, Pause, RotateCcw, Volume2, Film, Camera, Music, Sparkles, Clock, Compass } from 'lucide-react';
import { audioEngine } from '../utils/audioEngine';

export const CommercialStoryboard: React.FC = () => {
  const [activeSceneIdx, setActiveSceneIdx] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [elapsedSeconds, setElapsedSeconds] = useState<number>(0);
  const [voiceLanguage, setVoiceLanguage] = useState<'urdu' | 'roman' | 'english'>('urdu');

  const currentScene = COMMERCIAL_SCENES[activeSceneIdx];

  // Sync elapsed seconds with scene changes
  useEffect(() => {
    let interval: number | undefined;
    if (isPlaying) {
      interval = window.setInterval(() => {
        setElapsedSeconds((prev) => {
          const next = prev + 1;
          if (next >= 30) {
            setIsPlaying(false);
            audioEngine.stopSoundtrack();
            return 30;
          }
          // Compute which scene is active: each is 6 seconds
          const sceneIndex = Math.min(Math.floor(next / 6), COMMERCIAL_SCENES.length - 1);
          setActiveSceneIdx(sceneIndex);
          return next;
        });
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const handleTogglePlay = () => {
    if (isPlaying) {
      setIsPlaying(false);
      audioEngine.stopSoundtrack();
    } else {
      if (elapsedSeconds >= 30) {
        setElapsedSeconds(0);
        setActiveSceneIdx(0);
      }
      setIsPlaying(true);
      audioEngine.startSoundtrack((sec) => {
        // internal sync handled by interval
      });
    }
  };

  const handleReset = () => {
    setIsPlaying(false);
    audioEngine.stopSoundtrack();
    setElapsedSeconds(0);
    setActiveSceneIdx(0);
  };

  const handleSelectScene = (idx: number) => {
    setActiveSceneIdx(idx);
    setElapsedSeconds(idx * 6);
    if (idx === 3) audioEngine.playCarvingSfx();
    if (idx === 4) audioEngine.playGoldChime();
  };

  return (
    <section className="py-16 bg-[#071711] border-b border-[#d4af37]/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-[#d4af37]/30 text-xs font-semibold uppercase tracking-widest text-[#f7e2a9] mb-3">
            <Film className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>Broadcast Commercial Production</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl font-extrabold text-white">
            Cinematic 30-Second TV Commercial
          </h2>
          <p className="mt-3 text-stone-300 font-sans text-sm sm:text-base leading-relaxed">
            Five precision-timed scenes tracing the transformation of an empty dawn space into an heirloom palace through solid wood, family warmth, and royal 24K zari craftsmanship.
          </p>
        </div>

        {/* Timeline Player Bar */}
        <div className="bg-[#040e0a] rounded-2xl border border-[#d4af37]/30 p-4 sm:p-6 mb-8 shadow-xl">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-4">
            {/* Play/Pause/Reset Controls */}
            <div className="flex items-center gap-3">
              <button
                onClick={handleTogglePlay}
                className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#b89528] text-[#061510] flex items-center justify-center font-bold shadow-lg shadow-[#d4af37]/30 hover:scale-105 transition-all"
              >
                {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current ml-0.5" />}
              </button>

              <button
                onClick={handleReset}
                className="p-3 rounded-xl bg-black/60 border border-stone-800 text-stone-300 hover:text-white transition-all"
                title="Reset to 00:00"
              >
                <RotateCcw className="w-4 h-4" />
              </button>

              <div className="pl-2">
                <span className="font-mono text-xl font-bold text-white">
                  00:{elapsedSeconds.toString().padStart(2, '0')}
                </span>
                <span className="text-stone-400 font-mono text-xs ml-1">/ 00:30</span>
              </div>
            </div>

            {/* Language Subtitle Switcher */}
            <div className="flex items-center gap-1.5 bg-black/60 p-1 rounded-xl border border-stone-800 text-xs">
              <span className="text-stone-400 px-2 font-medium">Voiceover:</span>
              <button
                onClick={() => setVoiceLanguage('urdu')}
                className={`px-3 py-1 rounded-lg transition-all ${
                  voiceLanguage === 'urdu' ? 'bg-[#d4af37] text-[#061510] font-bold' : 'text-stone-300 hover:text-white'
                }`}
              >
                اردو (Nastaliq)
              </button>
              <button
                onClick={() => setVoiceLanguage('roman')}
                className={`px-3 py-1 rounded-lg transition-all ${
                  voiceLanguage === 'roman' ? 'bg-[#d4af37] text-[#061510] font-bold' : 'text-stone-300 hover:text-white'
                }`}
              >
                Roman Urdu
              </button>
              <button
                onClick={() => setVoiceLanguage('english')}
                className={`px-3 py-1 rounded-lg transition-all ${
                  voiceLanguage === 'english' ? 'bg-[#d4af37] text-[#061510] font-bold' : 'text-stone-300 hover:text-white'
                }`}
              >
                English
              </button>
            </div>
          </div>

          {/* Interactive 5-Segment Timeline Slider */}
          <div className="grid grid-cols-5 gap-2">
            {COMMERCIAL_SCENES.map((scene, idx) => {
              const isSceneActive = activeSceneIdx === idx;
              const sceneStart = idx * 6;
              const sceneEnd = (idx + 1) * 6;
              const progressInScene = Math.max(0, Math.min(1, (elapsedSeconds - sceneStart) / 6));

              return (
                <button
                  key={scene.sceneNumber}
                  onClick={() => handleSelectScene(idx)}
                  className={`text-left p-2.5 rounded-xl border transition-all relative overflow-hidden group ${
                    isSceneActive
                      ? 'bg-gradient-to-b from-[#0e3123] to-[#071a13] border-[#d4af37] shadow-lg shadow-emerald-950'
                      : 'bg-black/40 border-stone-800 hover:border-stone-700'
                  }`}
                >
                  {/* Segment progress fill */}
                  <div
                    className="absolute bottom-0 left-0 h-1 bg-[#d4af37] transition-all"
                    style={{ width: `${progressInScene * 100}%` }}
                  />

                  <div className="flex justify-between items-center text-[10px] text-stone-400 font-mono mb-1">
                    <span>Scene {scene.sceneNumber}</span>
                    <span>{scene.timecode}</span>
                  </div>
                  <h4 className="font-cinzel text-xs font-bold text-white truncate group-hover:text-[#f7e2a9]">
                    {scene.title}
                  </h4>
                </button>
              );
            })}
          </div>
        </div>

        {/* Master Cinema Screen & Teleprompter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Cinema Screen Frame */}
          <div className="lg:col-span-7 bg-[#040e0a] rounded-3xl border border-[#d4af37]/40 overflow-hidden shadow-2xl relative">
            <div className="aspect-video w-full bg-black relative flex items-center justify-center overflow-hidden">
              {currentScene.thumbnailSrc ? (
                <img
                  src={currentScene.thumbnailSrc}
                  alt={currentScene.title}
                  referrerPolicy="no-referrer"
                  className={`w-full h-full object-cover transition-transform duration-1000 ${
                    isPlaying ? 'scale-105' : 'scale-100'
                  }`}
                />
              ) : (
                /* Scene 1 Morning Dawn Atmosphere */
                <div className="w-full h-full bg-gradient-to-tr from-black via-[#0d2119] to-[#2b220c] flex flex-col items-center justify-center p-8 text-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#f7e2a9_0%,transparent_60%)] opacity-20" />
                  <Clock className="w-12 h-12 text-[#d4af37] mb-3 animate-pulse opacity-70" />
                  <h3 className="font-cinzel text-2xl font-bold text-white">Dawn in the Empty Hall</h3>
                  <p className="text-xs text-stone-300 max-w-md mt-2">
                    Golden morning sunbeams cut through morning mist in an empty palatial living hall. Dust particles drift weightlessly in silence.
                  </p>
                </div>
              )}

              {/* Watermark Logo in Corner */}
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-lg border border-[#d4af37]/30 flex items-center gap-2">
                <span className="font-cinzel text-xs font-bold text-[#f7e2a9]">MANSOOR ZARI</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
                <span className="text-[10px] text-stone-300 font-mono">4K 24FPS</span>
              </div>

              {/* Subtitles Overlay */}
              <div className="absolute bottom-4 left-4 right-4 bg-black/85 backdrop-blur-md p-4 rounded-xl border border-[#d4af37]/30 text-center">
                {voiceLanguage === 'urdu' && (
                  <p className="font-urdu text-lg sm:text-2xl text-[#f7e2a9] font-bold leading-loose">
                    {currentScene.urduVoiceover}
                  </p>
                )}
                {voiceLanguage === 'roman' && (
                  <p className="font-cormorant italic text-base sm:text-lg text-white font-medium">
                    "{currentScene.romanUrduVoiceover}"
                  </p>
                )}
                {voiceLanguage === 'english' && (
                  <p className="font-sans text-xs sm:text-sm text-stone-200">
                    "{currentScene.englishVoiceover}"
                  </p>
                )}
              </div>
            </div>

            {/* Quick sound trigger bar */}
            <div className="p-4 bg-[#081a13] border-t border-stone-800 flex justify-between items-center text-xs">
              <div className="flex items-center gap-2 text-stone-300">
                <Music className="w-4 h-4 text-[#d4af37]" />
                <span className="truncate max-w-xs">{currentScene.audioMusicCue}</span>
              </div>
              <button
                onClick={() => {
                  if (activeSceneIdx === 3) audioEngine.playCarvingSfx();
                  else audioEngine.playGoldChime();
                }}
                className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-950 hover:bg-emerald-900 border border-[#d4af37]/30 text-[#f7e2a9] font-medium"
              >
                <Sparkles className="w-3 h-3 text-[#d4af37]" />
                <span>Play SFX</span>
              </button>
            </div>
          </div>

          {/* Director's Camera & Audio Breakdown */}
          <div className="lg:col-span-5 bg-[#05110d] rounded-3xl border border-[#d4af37]/30 p-6 sm:p-8 space-y-6 shadow-2xl">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#d4af37]">
                  Scene {currentScene.sceneNumber} of 5
                </span>
                <span className="text-xs font-mono text-stone-400 bg-black/60 px-2.5 py-1 rounded-md border border-stone-800">
                  {currentScene.timecode} ({currentScene.durationSeconds}s)
                </span>
              </div>
              <h3 className="font-cinzel text-2xl font-bold text-white mt-1">
                {currentScene.title}
              </h3>
            </div>

            {/* Visual Description */}
            <div className="p-4 rounded-xl bg-black/50 border border-stone-800">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-stone-400 block mb-1">
                Visual Choreography
              </span>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-sans">
                {currentScene.visualDescription}
              </p>
            </div>

            {/* Technical Specs */}
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3 rounded-xl bg-black/30 border border-stone-800/80">
                <Camera className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="text-stone-400 block text-[11px]">Camera Motion</span>
                  <span className="font-medium text-stone-200">{currentScene.cameraMovement}</span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-black/30 border border-stone-800/80">
                <Compass className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="text-stone-400 block text-[11px]">Color Grade & Lighting</span>
                  <span className="font-medium text-stone-200">{currentScene.lightingMood}</span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-black/30 border border-stone-800/80">
                <Volume2 className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="text-stone-400 block text-[11px]">Foley & Sound Effects</span>
                  <span className="font-medium text-stone-200">{currentScene.sfx}</span>
                </div>
              </div>
            </div>

            {/* Director Notes */}
            <div className="p-3.5 rounded-xl bg-emerald-950/60 border border-emerald-700/30 text-xs text-emerald-200">
              <span className="font-semibold block text-[#f7e2a9] mb-1">Director's Note:</span>
              Keep color temperature warm (3200K - 4000K). The emerald velvet and gold zari embroidery must be calibrated to match Mansoor Zari’s signature royal luster.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
