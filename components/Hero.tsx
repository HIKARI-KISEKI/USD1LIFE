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
          src="/images/hero_trump_rapper.png"
          alt="Wealth Lifestyle - Trump Rapper Yacht"
          className="w-full h-full object-cover scale-110 animate-[pulse_15s_infinite] transition-transform duration-[15000ms]"
        />
      </div>

      <div className="relative z-20 text-center px-4 md:px-6 max-w-[90rem] mx-auto w-full flex flex-col items-center justify-center h-full py-12 md:py-16 pt-24 md:pt-32">
        <div className="mb-2 md:mb-4 flex justify-center animate-in fade-in slide-in-from-top-12 duration-1000">
          <div className="glass-card px-4 md:px-8 py-2 md:py-3 rounded-full text-[9px] md:text-[11px] font-black text-yellow-500 border-yellow-500/40 uppercase tracking-[0.3em] md:tracking-[0.6em] flex items-center gap-2 md:gap-4 shadow-[0_0_50px_rgba(191,149,63,0.1)]">
            <ShieldCheck className="w-3 h-3 md:w-5 md:h-5 text-yellow-500" /> USD1LIFESTYLE
          </div>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-[6rem] lg:text-[8.5rem] font-playfair font-black mb-2 md:mb-6 leading-[0.85] tracking-tighter italic animate-in zoom-in-95 duration-1000 filter drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
          <span className="text-white">THE</span><br />
          <span className="gold-gradient text-glow italic">USD1LIFE</span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 font-light max-w-4xl mx-auto mb-4 md:mb-8 tracking-wide leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300 italic px-4">
          Once you go USD1, you never go back. 🦅<br />
          Join the relentless community powering the next big meme explosion on <span className="text-yellow-500 font-bold tracking-widest">SOLANA</span>.
        </p>

        {/* Copyable Contract Address */}
        <div
          onClick={() => {
            navigator.clipboard.writeText('Dx4593M...Mgbonk');
            // Visual feedback could be added here
          }}
          className="mb-6 md:mb-10 cursor-pointer animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-400 group scale-[0.85] md:scale-100 origin-center"
        >
          <div className="glass-card px-8 py-3 md:py-4 rounded-2xl border border-yellow-500/20 hover:border-yellow-500/50 transition-all flex flex-col items-center gap-1 md:gap-2 bg-black/40 backdrop-blur-md group-hover:bg-yellow-500/10">
            <span className="text-[9px] md:text-[10px] font-black tracking-[0.4em] text-gray-400 uppercase group-hover:text-yellow-500 transition-colors">Contract Address</span>
            <div className="flex items-center gap-3">
              <span className="text-lg md:text-2xl font-mono font-bold text-white tracking-wider group-hover:text-yellow-200 transition-colors">Dx459...Mgbonk</span>
              <div className="p-1.5 md:p-2 rounded-full bg-yellow-500/10 group-hover:bg-yellow-500 text-yellow-500 group-hover:text-black transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2" /><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" /></svg>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-6 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-500 px-4 mb-8 md:mb-10">
          <button
            onClick={() => window.open('https://dexscreener.com/solana/f196hrqt8xempsbdp3apz3mjutsnqmu2gusv4sgielv2', '_blank')}
            className="w-full sm:w-auto px-8 md:px-12 py-3 md:py-5 gold-bg text-black font-black rounded-full text-sm md:text-lg hover:scale-105 transition-all shadow-[0_0_100px_rgba(191,149,63,0.4)] active:scale-95 flex items-center gap-2 md:gap-3 justify-center group"
          >
            <Crown className="w-4 h-4 md:w-6 md:h-6 group-hover:rotate-12 transition-transform" /> BUY $USD1LIFE NOW
          </button>
          <button
            onClick={() => window.open('https://t.me/USD1LIFEportal', '_blank')}
            className="w-full sm:w-auto px-8 md:px-12 py-3 md:py-5 glass-card text-white border border-yellow-500/30 font-bold rounded-full text-sm md:text-lg hover:bg-yellow-500/10 transition-all active:scale-95 flex items-center gap-2 md:gap-3 justify-center group"
          >
            JOIN TELEGRAM 🦅 <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-2 transition-transform" />
          </button>
        </div>

        <div className="animate-float cursor-pointer opacity-40 hover:opacity-100 transition-opacity flex flex-col items-center gap-1 group mt-auto pb-4 md:pb-8">
          <span className="text-[8px] md:text-[9px] font-black tracking-[0.3em] md:tracking-[0.4em] text-yellow-500 uppercase group-hover:tracking-[0.6em] transition-all">Discover Legacy</span>
          <ChevronDown className="text-yellow-500 w-5 h-5 md:w-8 md:h-8" />
        </div>
      </div>
    </section>
  );
};

export default Hero;