import React, { lazy, Suspense } from 'react';
import {
  Crown,
  Gem,
  ChevronRight,
  ShieldCheck,
  Zap,
  Star,
  Globe,
  Lock,
  ArrowRight,
  TrendingUp,
  Award,
  ExternalLink,
  DollarSign
} from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SecurityWrapper from './components/SecurityWrapper';

// Lazy load heavy components
const LifestyleSection = lazy(() => import('./components/LifestyleSection'));
const WealthGame = lazy(() => import('./components/WealthGame'));
const Tokenomics = lazy(() => import('./components/Tokenomics'));
const AlphaInsights = lazy(() => import('./components/AlphaInsights'));
const Footer = lazy(() => import('./components/Footer'));
const FlyingEagle = lazy(() => import('./components/FlyingEagle'));

const App: React.FC = () => {
  return (
    <SecurityWrapper>
      <div className="min-h-screen bg-[#020202] text-white selection:bg-yellow-500/30">
        {/* Subtle Grain Texture Overlay */}
        <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.015] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

        <Suspense fallback={<div />}>
          <FlyingEagle />
        </Suspense>

        <Navbar />

        <main className="relative z-10">
          <Hero />

          {/* The Vision - Strategic Introduction */}
          <section id="vision" className="py-32 px-6 lg:px-12 max-w-7xl mx-auto relative scroll-mt-24">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-yellow-500/50 to-transparent" />

            <div className="text-center mb-32 mt-12">
              <div className="flex justify-center mb-10">
                <span className="px-6 py-2 glass-card rounded-full text-[10px] font-black text-yellow-500 uppercase tracking-[0.5em] flex items-center gap-3 border-yellow-500/20">
                  <Globe className="w-4 h-4" /> USD1LIFESTYLE
                </span>
              </div>
              <h2 className="text-5xl md:text-[8rem] font-playfair font-black mb-12 leading-[1.1] tracking-tighter italic">
                THE <span className="gold-gradient text-glow">RELENTLESS</span><br />
                <span className="text-white">COMMUNITY ☝️</span>
              </h2>
              <p className="text-gray-400 max-w-4xl mx-auto text-2xl font-light leading-relaxed italic">
                "USD1LIFE is more than a meme coin—it's a <span className="text-white font-bold">movement</span>. Built on Solana and bonded to the revolutionary USD1 stablecoin from World Liberty Financial, we're the flagship runner for the USD1 era. Slowly, then all at once—higher! 🦅"
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <FeatureCard
                icon={<Award className="w-12 h-12 text-yellow-500" />}
                title="Community Takeover"
                description="Decided to take it over as a CTO with zero team tokens. Fair takeover, pure community power. This is the art of bagworking—relentless like the eagle."
                tag="CTO"
              />
              <FeatureCard
                icon={<TrendingUp className="w-12 h-12 text-yellow-500" />}
                title="Organic Growth"
                description="Bonded to USD1 pairs on Raydium. Powered by real holders, not VCs. Breaking ceilings with every trade—slowly, then all at once."
                tag="ORGANIC"
              />
              <FeatureCard
                icon={<Lock className="w-12 h-12 text-yellow-500" />}
                title="Solana Speed"
                description="Built on the fastest blockchain. Lightning-fast swaps, locked liquidity, and the WLFI ecosystem behind us."
                tag="SOLANA"
              />
            </div>
          </section>

          {/* LifestyleSection removed per user request */}


          <div id="tokenomics" className="scroll-mt-32">
            <Suspense fallback={<div className="py-40" />}>
              <Tokenomics />
            </Suspense>
          </div>

          {/* Acquisition Strategy - Replaces Wallet Connect */}
          <section id="acquire" className="py-40 bg-gradient-to-b from-transparent to-black/50 scroll-mt-24">
            <div className="max-w-6xl mx-auto px-6">
              <div className="glass-card rounded-[4rem] p-16 md:p-24 border-yellow-500/30 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(191,149,63,0.1),transparent_70%)]" />
                <div className="relative z-10">
                  <h2 className="text-5xl md:text-8xl font-playfair font-black mb-8 italic tracking-tighter">
                    JOIN THE <span className="gold-gradient">FLOCK 🦅</span>
                  </h2>
                  <p className="text-gray-400 text-2xl max-w-3xl mx-auto mb-16 font-light leading-relaxed italic">
                    "Ready to choose the life? Get USD1LIFE on Raydium, join our Telegram, and follow @usd1life on X. Slowly, then all at once—higher together! ☝️"
                  </p>
                  <div className="flex flex-col md:flex-row justify-center gap-8">
                    <button
                      onClick={() => window.open('https://dexscreener.com/solana/f196hrqt8xempsbdp3apz3mjutsnqmu2gusv4sgielv2', '_blank')}
                      className="px-16 py-8 gold-bg text-black font-black rounded-full hover:scale-105 transition-all flex items-center justify-center gap-4 text-2xl shadow-[0_0_80px_rgba(191,149,63,0.4)] active:scale-95"
                    >
                      <ExternalLink className="w-8 h-8" /> BUY ON DEXSCREENER
                    </button>
                    <button
                      onClick={() => window.open('https://t.me/USD1LIFEportal', '_blank')}
                      className="px-16 py-8 glass-card border-yellow-500/40 border text-white font-black rounded-full hover:bg-yellow-500/10 transition-all flex items-center justify-center gap-4 text-2xl active:scale-95 group"
                    >
                      JOIN TELEGRAM <ChevronRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Suspense fallback={<div className="py-20" />}>
          <Footer />
        </Suspense>
      </div>
    </SecurityWrapper>
  );
};

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string; tag: string }> = ({ icon, title, description, tag }) => (
  <div className="glass-card p-12 rounded-[3.5rem] hover:border-yellow-500/60 transition-all group relative overflow-hidden flex flex-col h-full shadow-xl border border-white/5">
    <div className="absolute -right-12 -bottom-12 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-700">
      {icon}
    </div>
    <div className="mb-10 bg-yellow-500/10 w-24 h-24 rounded-[2rem] flex items-center justify-center group-hover:scale-110 group-hover:bg-yellow-500/20 transition-all duration-700 ring-2 ring-yellow-500/20">
      {icon}
    </div>
    <div className="text-yellow-500 font-black text-[10px] tracking-[0.5em] mb-4 uppercase opacity-70 flex items-center gap-2">
      <DollarSign className="w-3 h-3" /> {tag}
    </div>
    <h3 className="text-4xl font-black mb-6 font-playfair text-white italic tracking-tight">{title}</h3>
    <p className="text-gray-400 leading-relaxed text-xl font-light mb-auto italic">{description}</p>
    <div className="mt-12 h-1 w-12 bg-yellow-500/40 group-hover:w-full transition-all duration-1000 rounded-full" />
  </div>
);

export default App;