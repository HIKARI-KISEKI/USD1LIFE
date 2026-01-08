import React, { useState, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { Zap, Sparkles, Lock, RefreshCcw, Terminal } from 'lucide-react';

const AlphaInsights: React.FC = () => {
  const [insight, setInsight] = useState<string>("Initializing encrypted link to the Board...");
  const [loading, setLoading] = useState(false);

  const fetchAlpha = async () => {
    setLoading(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: 'Provide a 1-sentence elite financial mandate for the USD1LIFE community. Mention the WLFI chain or Board leadership. Sound like a secret transmission from a billionaire club. Under 15 words.',
        config: {
          systemInstruction: 'You are the Chief Financial Strategist for the inner circle of USD1LIFE. Your tone is highly sophisticated, slightly cryptic, and extremely pro-wealth. Use terminology like "Chain Sovereignty", "Institutional Alpha", and "Legacy Security".',
          temperature: 0.95,
        }
      });
      setInsight(response.text?.trim() || "Wealth isn't a goal; it's the default state for the bold.");
    } catch (error) {
      setInsight("The board moves in silence. Hold your position with iron conviction.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAlpha();
  }, []);

  return (
    <section id="alpha" className="py-40 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="glass-card rounded-[5rem] p-20 border-yellow-500/20 relative overflow-hidden flex flex-col items-center text-center shadow-[0_0_100px_rgba(191,149,63,0.1)]">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent" />
        
        <div className="mb-12 relative">
          <div className="absolute inset-0 bg-yellow-500/20 blur-2xl rounded-full scale-150 animate-pulse" />
          <div className="relative p-8 bg-yellow-500/10 rounded-full border border-yellow-500/30 shadow-2xl">
            <Terminal className="w-16 h-16 text-yellow-500" />
          </div>
        </div>

        <h2 className="text-4xl md:text-6xl font-playfair font-black mb-6 italic">BOARDROOM <span className="gold-gradient">ENCRYPTED ALPHA</span></h2>
        <p className="text-gray-500 uppercase tracking-[0.6em] text-[10px] font-black mb-16">Direct Link: Secure WLFI Node v4.0</p>

        <div className="relative w-full max-w-4xl min-h-[150px] flex items-center justify-center">
          {loading ? (
             <div className="flex flex-col items-center gap-8 animate-pulse">
               <RefreshCcw className="w-12 h-12 text-yellow-500 animate-spin" />
               <p className="text-yellow-500/50 uppercase tracking-[0.5em] font-black text-[10px]">Decrypting Signal...</p>
             </div>
          ) : (
            <div className="animate-in fade-in zoom-in-95 duration-1000 flex flex-col items-center">
              <p className="text-3xl md:text-5xl font-playfair italic text-white leading-tight mb-16 drop-shadow-2xl">
                "{insight}"
              </p>
              <button 
                onClick={fetchAlpha}
                className="group flex flex-col items-center gap-5 transition-all"
              >
                <div className="flex items-center gap-4 bg-yellow-500/5 px-10 py-4 rounded-full border border-yellow-500/20 group-hover:bg-yellow-500/10 transition-colors">
                  <Sparkles className="w-5 h-5 text-yellow-500" />
                  <span className="text-yellow-500 text-[11px] font-black uppercase tracking-[0.4em]">Refresh Alpha Stream</span>
                </div>
              </button>
            </div>
          )}
        </div>

        <div className="mt-20 flex items-center gap-4 bg-black/60 px-10 py-5 rounded-full border border-white/5 backdrop-blur-3xl">
          <div className="w-3 h-3 bg-green-500 rounded-full animate-ping" />
          <Lock className="w-5 h-5 text-yellow-500/50" />
          <span className="text-[11px] font-black text-gray-500 uppercase tracking-[0.5em]">SECURE BOARDROOM PROTOCOL v1.02.4</span>
        </div>
      </div>
    </section>
  );
};

export default AlphaInsights;