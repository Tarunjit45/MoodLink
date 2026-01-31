
import React, { useState, useCallback } from 'react';
import { 
  Music, 
  Sparkles, 
  Share2, 
  ArrowRight, 
  Loader2, 
  ExternalLink,
  Github,
  Twitter
} from 'lucide-react';
import GlassCard from './components/GlassCard';
import { analyzePlaylistVibe } from './services/geminiService';
import { VibeResult } from './types';

const App: React.FC = () => {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<VibeResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleVibeCheck = useCallback(async () => {
    if (!url || !url.includes('spotify.com')) {
      setError('Please enter a valid Spotify URL');
      return;
    }

    setError(null);
    setLoading(true);
    setResult(null);

    try {
      const vibe = await analyzePlaylistVibe(url);
      setResult(vibe);
    } catch (err) {
      setError('Failed to analyze the vibe. Try again?');
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [url]);

  const shareOnX = () => {
    if (!result) return;
    const text = `My playlist is ${result.vibeScore}% ${result.energyLabel}! 🎶✨ Check yours on MoodLink. \n\n"${result.poeticDescription}"`;
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="min-h-screen text-white gradient-bg flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-600/20 blur-[120px] rounded-full animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-600/20 blur-[120px] rounded-full animate-pulse"></div>

      {/* Main Container */}
      <div className="w-full max-w-2xl z-10 space-y-8 py-12">
        
        {/* Header */}
        <header className="text-center space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="inline-flex items-center justify-center p-3 bg-white/10 rounded-2xl mb-2 backdrop-blur-xl border border-white/20">
            <Music className="w-8 h-8 text-purple-400" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-white/70">
            MoodLink
          </h1>
          <p className="text-lg text-white/50 font-light max-w-md mx-auto">
            Decode the aesthetic soul of your Spotify playlists using generative AI.
          </p>
        </header>

        {/* Input Section */}
        {!result && (
          <div className="animate-in fade-in zoom-in-95 duration-700">
            <GlassCard className="space-y-6">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Paste Spotify Playlist URL..."
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-purple-500/50 transition-all placeholder:text-white/20 text-lg"
                />
                <button
                  onClick={handleVibeCheck}
                  disabled={loading}
                  className="absolute right-2 top-2 bottom-2 px-6 bg-white text-black font-bold rounded-xl hover:bg-purple-100 transition-all flex items-center space-x-2 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed group"
                >
                  {loading ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <>
                      <span>Vibe Check</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </div>
              {error && (
                <p className="text-rose-400 text-sm px-2 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" /> {error}
                </p>
              )}
              <p className="text-xs text-center text-white/30 uppercase tracking-widest">
                Safe & Private • No Login Required
              </p>
            </GlassCard>
          </div>
        )}

        {/* Results Section */}
        {result && (
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <GlassCard className="space-y-8 relative overflow-hidden">
              {/* Background Glow based on palette */}
              <div 
                className="absolute -top-24 -right-24 w-64 h-64 blur-[100px] opacity-20 rounded-full"
                style={{ backgroundColor: result.palette[0] }}
              ></div>

              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-white/10 pb-6">
                <div>
                  <h2 className="text-3xl font-bold flex items-center gap-3">
                    {result.dominantMood} <span className="text-purple-400">Vibe</span>
                  </h2>
                  <p className="text-white/50 text-sm">Playlist Analysis Complete</p>
                </div>
                <button 
                  onClick={() => setResult(null)}
                  className="text-xs text-white/40 hover:text-white transition-colors uppercase tracking-widest"
                >
                  Clear Result
                </button>
              </div>

              {/* Vibe Score Slider */}
              <div className="space-y-6">
                <div className="flex justify-between items-end text-sm font-medium">
                  <span className="text-cyan-400">{result.chillLabel}</span>
                  <span className="text-4xl font-serif italic text-white/90">
                    {result.vibeScore}%
                  </span>
                  <span className="text-orange-400">{result.energyLabel}</span>
                </div>
                <div className="h-3 w-full bg-white/5 rounded-full overflow-hidden relative border border-white/10 p-1">
                  <div 
                    className="h-full rounded-full transition-all duration-1000 ease-out bg-gradient-to-r from-cyan-500 via-purple-500 to-orange-500 shadow-[0_0_20px_rgba(168,85,247,0.5)]"
                    style={{ width: `${result.vibeScore}%` }}
                  />
                  {/* Indicator mark */}
                  <div 
                    className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_10px_white] transition-all duration-1000 ease-out"
                    style={{ left: `${result.vibeScore}%` }}
                  ></div>
                </div>
              </div>

              {/* Poetic Description */}
              <div className="py-4">
                <p className="text-2xl md:text-3xl font-serif italic text-center text-white/90 leading-relaxed px-4">
                  &ldquo;{result.poeticDescription}&rdquo;
                </p>
              </div>

              {/* Color Palette */}
              <div className="space-y-4">
                <p className="text-xs uppercase tracking-[0.2em] text-white/40 text-center">Aesthetic Palette</p>
                <div className="flex justify-center gap-3">
                  {result.palette.map((color, idx) => (
                    <div 
                      key={idx} 
                      className="group relative flex flex-col items-center"
                    >
                      <div 
                        className="w-12 h-12 md:w-16 md:h-16 rounded-2xl shadow-lg border border-white/20 transition-transform group-hover:scale-110 group-hover:rotate-6 cursor-pointer"
                        style={{ backgroundColor: color }}
                        title={color}
                      ></div>
                      <span className="text-[10px] text-white/20 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        {color}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Share */}
              <div className="pt-4 flex gap-4">
                <button 
                  onClick={shareOnX}
                  className="flex-1 bg-white/10 hover:bg-white/20 border border-white/10 py-4 rounded-2xl flex items-center justify-center space-x-3 transition-all active:scale-95 group"
                >
                  <Share2 className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="font-semibold">Share on X</span>
                </button>
                <a 
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-16 h-16 bg-white/10 hover:bg-white/20 border border-white/10 rounded-2xl flex items-center justify-center transition-all active:scale-95"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </GlassCard>
          </div>
        )}

        {/* Footer */}
        <footer className="pt-12 flex flex-col items-center gap-6 animate-in fade-in duration-1000 delay-500">
          <div className="flex items-center space-x-6 text-white/30">
            <a href="#" className="hover:text-purple-400 transition-colors"><Github className="w-5 h-5" /></a>
            <a href="#" className="hover:text-purple-400 transition-colors"><Twitter className="w-5 h-5" /></a>
          </div>
          <div className="text-[10px] uppercase tracking-widest text-white/20">
            Built with Gemini & Glassmorphic AI
          </div>
        </footer>
      </div>

      {/* Loading Overlay */}
      {loading && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/60 backdrop-blur-md transition-all">
          <div className="relative w-24 h-24 mb-6">
             <div className="absolute inset-0 border-4 border-white/5 rounded-full"></div>
             <div className="absolute inset-0 border-4 border-t-purple-500 border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
             <Sparkles className="absolute inset-0 m-auto w-8 h-8 text-purple-400 animate-pulse" />
          </div>
          <p className="text-xl font-serif italic text-white/80 animate-pulse">Consulting the soundwaves...</p>
        </div>
      )}
    </div>
  );
};

export default App;
