
export interface VibeResult {
  vibeScore: number; // 0 to 100 (0 = Pure Chill, 100 = Absolute Chaos/Energy)
  energyLabel: string;
  chillLabel: string;
  palette: string[];
  poeticDescription: string;
  dominantMood: string;
}

export interface LinkInfo {
  url: string;
  platform: 'spotify' | 'youtube' | 'unknown';
}
