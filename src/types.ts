export type ActiveTab = 
  | 'overview' 
  | 'logos' 
  | 'photography' 
  | 'commercial' 
  | 'reels' 
  | 'urdu-script' 
  | 'sale-poster' 
  | 'ai-generator';

export interface LogoOption {
  id: string;
  name: string;
  category: string;
  description: string;
  palette: string[];
  tagline: string;
  vectorType: 'monogram-armchair' | 'minimal-geometric' | 'mughal-arch';
  imageSrc?: string;
  specs: {
    primaryFont: string;
    subFont: string;
    motif: string;
    targetMedium: string;
  };
}

export interface PhotoAsset {
  id: string;
  title: string;
  category: string;
  imageSrc: string;
  aspectRatio: string;
  dimensions: string;
  cameraLens: string;
  lighting: string;
  description: string;
  keyFeatures: string[];
  hotspots?: { x: number; y: number; label: string; detail: string }[];
}

export interface CommercialScene {
  sceneNumber: number;
  timecode: string;
  durationSeconds: number;
  title: string;
  visualDescription: string;
  cameraMovement: string;
  lightingMood: string;
  audioMusicCue: string;
  sfx: string;
  urduVoiceover: string;
  romanUrduVoiceover: string;
  englishVoiceover: string;
  thumbnailSrc?: string;
  visualFallbackGradient: string;
}

export interface ScriptSection {
  title: string;
  urdu: string;
  romanUrdu: string;
  english: string;
  audioCue: string;
  sfx: string;
  timeRange: string;
  deliveryTone: string;
}

export interface ReelProduct {
  id: string;
  title: string;
  urduTitle: string;
  subtitle: string;
  material: string;
  imageSrc: string;
  highlightTag: string;
}
