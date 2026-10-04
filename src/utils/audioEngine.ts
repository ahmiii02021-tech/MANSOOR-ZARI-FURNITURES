/**
 * Web Audio API based ambient soundscape & synthesizer
 * for Mansoor Zari Furnitures broadcast previews.
 */

class AudioEngine {
  private ctx: AudioContext | null = null;
  private isPlaying = false;
  private timerId: number | null = null;
  private gainNode: GainNode | null = null;

  private initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // Play a luxurious royal gold shimmer chime
  playGoldChime() {
    try {
      this.initContext();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const freqs = [523.25, 659.25, 783.99, 1046.5, 1318.51, 1567.98]; // C Major luxury pentatonic shimmer

      freqs.forEach((freq, idx) => {
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now + idx * 0.08);

        gain.gain.setValueAtTime(0, now + idx * 0.08);
        gain.gain.linearRampToValueAtTime(0.12 / (idx + 1), now + idx * 0.08 + 0.04);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.08 + 2.2);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now + idx * 0.08);
        osc.stop(now + idx * 0.08 + 2.5);
      });
    } catch {
      // Audio fallback silent
    }
  }

  // Simulate wood chisel slicing texture
  playCarvingSfx() {
    try {
      this.initContext();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const bufferSize = this.ctx.sampleRate * 0.35;
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (this.ctx.sampleRate * 0.08));
      }
      const noise = this.ctx.createBufferSource();
      noise.buffer = buffer;

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(1400, now);
      filter.Q.setValueAtTime(3, now);

      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(0.15, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.32);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      noise.start(now);
    } catch {
      // Audio fallback silent
    }
  }

  // Play ambient Rubab & cello chord drone for the 30-second commercial
  startSoundtrack(onTick?: (seconds: number) => void) {
    try {
      this.initContext();
      if (!this.ctx) return;
      this.stopSoundtrack();
      this.isPlaying = true;

      const masterGain = this.ctx.createGain();
      masterGain.gain.setValueAtTime(0.001, this.ctx.currentTime);
      masterGain.gain.linearRampToValueAtTime(0.2, this.ctx.currentTime + 2);
      masterGain.connect(this.ctx.destination);
      this.gainNode = masterGain;

      // Warm cello base pad notes (D2, A2, D3, F#3)
      const baseFreqs = [73.42, 110.00, 146.83, 185.00];
      const oscillators: OscillatorNode[] = [];

      baseFreqs.forEach((f) => {
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const g = this.ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(f, this.ctx.currentTime);

        const filter = this.ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(320, this.ctx.currentTime);

        g.gain.setValueAtTime(0.04, this.ctx.currentTime);
        osc.connect(filter);
        filter.connect(g);
        g.connect(masterGain);

        osc.start();
        oscillators.push(osc);
      });

      let elapsed = 0;
      this.timerId = window.setInterval(() => {
        elapsed += 1;
        if (onTick) onTick(elapsed);

        // Scene-based sound effect triggers
        if (elapsed === 18) {
          this.playCarvingSfx();
        } else if (elapsed === 25) {
          this.playGoldChime();
        }

        if (elapsed >= 30) {
          this.stopSoundtrack();
        }
      }, 1000);
    } catch {
      this.isPlaying = false;
    }
  }

  stopSoundtrack() {
    this.isPlaying = false;
    if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
    if (this.gainNode && this.ctx) {
      try {
        this.gainNode.gain.linearRampToValueAtTime(0.001, this.ctx.currentTime + 0.5);
      } catch {
        // no-op
      }
      this.gainNode = null;
    }
  }

  isSoundtrackPlaying() {
    return this.isPlaying;
  }

  // Voiceover reader using browser SpeechSynthesis
  speakScript(text: string, lang = 'ur-PK', onEnd?: () => void) {
    if (!('speechSynthesis' in window)) {
      if (onEnd) onEnd();
      return;
    }
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    utterance.rate = 0.9;
    utterance.pitch = 0.95;

    // Attempt to pick an Urdu voice or English voice
    const voices = window.speechSynthesis.getVoices();
    const urduVoice = voices.find(v => v.lang.includes('ur') || v.lang.includes('ar') || v.name.toLowerCase().includes('urdu'));
    if (urduVoice) {
      utterance.voice = urduVoice;
    }

    utterance.onend = () => {
      if (onEnd) onEnd();
    };
    utterance.onerror = () => {
      if (onEnd) onEnd();
    };

    window.speechSynthesis.speak(utterance);
  }

  stopSpeech() {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
  }
}

export const audioEngine = new AudioEngine();
