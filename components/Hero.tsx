import React from 'react';
import { ChevronDown, Crown, ShieldCheck, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen max-h-screen flex items-center justify-center overflow-hidden">
      {/* Cinematic Background Layer */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/80 to-[#020202] z-10" />
        <div className="absolute inset-0 cinematic-vignette z-[11]" />
        <img
          src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=1200&auto=format&fit=crop&fm=webp"
          alt="Luxury Architecture"
          className="w-full h-full object-cover scale-110 animate-[pulse_15s_infinite] transition-transform duration-[15000ms]"
          loading="eager"
          fetchpriority="high"
        />
      </div>

      <div className="relative z-20 text-center px-4 md:px-6 max-w-[90rem] mx-auto w-full flex flex-col items-center justify-center h-full py-16 md:py-20 pt-40 md:pt-44">
        <div className="mb-4 md:mb-8 flex justify-center animate-in fade-in slide-in-from-top-12 duration-1000">
          <div className="glass-card px-4 md:px-8 py-2 md:py-3 rounded-full text-[9px] md:text-[11px] font-black text-yellow-500 border-yellow-500/40 uppercase tracking-[0.3em] md:tracking-[0.6em] flex items-center gap-2 md:gap-4 shadow-[0_0_50px_rgba(191,149,63,0.1)]">
            <ShieldCheck className="w-3 h-3 md:w-5 md:h-5 text-yellow-500" /> USD1LIFESTYLE
          </div>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-[7rem] lg:text-[10rem] font-playfair font-black mb-4 md:mb-8 leading-[0.8] tracking-tighter italic animate-in zoom-in-95 duration-1000 filter drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
          <span className="text-white">THE</span><br />
          <span className="gold-gradient text-glow italic">USD1LIFE</span>
        </h1>

        <p className="text-base sm:text-lg md:text-2xl lg:text-3xl text-gray-200 font-light max-w-4xl mx-auto mb-6 md:mb-12 tracking-wide leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300 italic px-4">
          Once you go USD1, you never go back. 🦅<br />
          Join the relentless community powering the next big meme explosion on <span className="text-yellow-500 font-bold tracking-widest">SOLANA</span>.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-8 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-500 px-4 mb-8 md:mb-12">
          <button
            onClick={() => window.open('https://dexscreener.com/solana/f196hrqt8xempsbdp3apz3mjutsnqmu2gusv4sgielv2', '_blank')}
            className="w-full sm:w-auto px-8 md:px-16 py-4 md:py-7 gold-bg text-black font-black rounded-full text-base md:text-xl hover:scale-105 transition-all shadow-[0_0_100px_rgba(191,149,63,0.4)] active:scale-95 flex items-center gap-2 md:gap-4 justify-center group"
          >
            <Crown className="w-5 h-5 md:w-7 md:h-7 group-hover:rotate-12 transition-transform" /> BUY $USD1LIFE NOW
          </button>
          <button
            onClick={() => window.open('https://t.me/USD1LIFEportal', '_blank')}
            className="w-full sm:w-auto px-8 md:px-16 py-4 md:py-7 glass-card text-white border border-yellow-500/30 font-bold rounded-full text-base md:text-xl hover:bg-yellow-500/10 transition-all active:scale-95 flex items-center gap-2 md:gap-4 justify-center group"
          >
            JOIN TELEGRAM 🦅 <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-2 transition-transform" />
          </button>
        </div>

        <div className="animate-float cursor-pointer opacity-40 hover:opacity-100 transition-opacity flex flex-col items-center gap-1 md:gap-2 group mt-auto">
          <span className="text-[8px] md:text-[9px] font-black tracking-[0.3em] md:tracking-[0.4em] text-yellow-500 uppercase group-hover:tracking-[0.6em] transition-all">Discover Legacy</span>
          <ChevronDown className="text-yellow-500 w-6 h-6 md:w-10 md:h-10" />
        </div>
      </div>
    </section>
  );
};

export default Hero;