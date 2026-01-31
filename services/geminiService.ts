
import { GoogleGenAI, Type } from "@google/genai";
import { VibeResult } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function analyzePlaylistVibe(playlistUrl: string): Promise<VibeResult> {
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `Analyze the musical energy of this Spotify playlist link: ${playlistUrl}. 
    Since you cannot browse it directly, imagine the vibe based on the URL text and generate a creative, aesthetic profile.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          vibeScore: { type: Type.NUMBER, description: "A number between 0 and 100 where 0 is ultra-chill and 100 is high-energy chaos." },
          energyLabel: { type: Type.STRING, description: "Short label for the high-energy side (e.g., 'Supernova', 'Electric Chaos')." },
          chillLabel: { type: Type.STRING, description: "Short label for the chill side (e.g., 'Midnight Mist', 'Zen')." },
          dominantMood: { type: Type.STRING, description: "One word that defines the mood." },
          palette: { 
            type: Type.ARRAY, 
            items: { type: Type.STRING },
            description: "An array of 5 hex color codes that match the mood."
          },
          poeticDescription: { type: Type.STRING, description: "A 2-line poetic, AI-style description of the energy." }
        },
        required: ["vibeScore", "energyLabel", "chillLabel", "dominantMood", "palette", "poeticDescription"]
      }
    }
  });

  const result = JSON.parse(response.text || '{}');
  return result;
}
