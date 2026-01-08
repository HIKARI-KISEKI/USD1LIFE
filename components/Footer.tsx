import React from 'react';
import { Crown, Twitter, Instagram, Send, ExternalLink, ShieldCheck } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#020202] pt-16 md:pt-40 pb-10 md:pb-20 px-4 md:px-6 lg:px-12 border-t border-yellow-500/10 relative overflow-hidden">
      {/* Background flare */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[300px] md:h-[600px] bg-yellow-500/5 blur-[100px] md:blur-[200px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-24 mb-16 md:mb-40">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 md:gap-5 mb-6 md:mb-12">
              <Crown className="w-10 h-10 md:w-16 md:h-16 text-yellow-500" />
              <span className="text-3xl md:text-5xl font-black font-playfair tracking-tighter">
                USD<span className="gold-gradient italic">1LIFE</span>
              </span>
            </div>
            <p className="text-gray-400 text-base md:text-2xl max-w-lg mb-8 md:mb-16 leading-relaxed font-light">
              The relentless community-driven meme coin on Solana. Join the flock and choose the #USD1LIFE. Slowly, then all at once—higher! 🦅☝️
            </p>
            <div className="flex gap-4 md:gap-10">
              <a href="https://x.com/usd1life" target="_blank" rel="noopener noreferrer" className="w-14 h-14 md:w-20 md:h-20 rounded-full glass-card flex items-center justify-center text-white hover:text-yellow-500 hover:border-yellow-500/50 transition-all duration-500 hover:-translate-y-3 group shadow-2xl">
                <div className="transition-transform group-hover:scale-110">
                  <Twitter className="w-6 h-6 md:w-8 md:h-8" />
                </div>
              </a>
              <a href="https://t.me/USD1LIFEportal" target="_blank" rel="noopener noreferrer" className="w-14 h-14 md:w-20 md:h-20 rounded-full glass-card flex items-center justify-center text-white hover:text-yellow-500 hover:border-yellow-500/50 transition-all duration-500 hover:-translate-y-3 group shadow-2xl">
                <div className="transition-transform group-hover:scale-110">
                  <Send className="w-6 h-6 md:w-8 md:h-8" />
                </div>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-black mb-6 md:mb-12 uppercase tracking-[0.3em] md:tracking-[0.4em] text-[10px] md:text-[11px]">COMMUNITY</h4>
            <ul className="space-y-4 md:space-y-8 text-gray-500 font-semibold tracking-wider text-sm">
              <li><a href="https://dexscreener.com/solana/f196hrqt8xempsbdp3apz3mjutsnqmu2gusv4sgielv2" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500 transition-all flex items-center gap-3">DexScreener <ExternalLink className="w-4 h-4 opacity-30" /></a></li>
              <li><a href="https://x.com/usd1life" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500 transition-all">X (Twitter)</a></li>
              <li><a href="https://t.me/USD1LIFEportal" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500 transition-all">Telegram</a></li>
              <li><a href="https://raydium.io" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500 transition-all">Raydium</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black mb-12 uppercase tracking-[0.4em] text-[11px]">DISCLAIMER</h4>
            <ul className="space-y-8 text-gray-500 font-semibold tracking-wider text-sm">
              <li><span className="text-gray-600">Not financial advice</span></li>
              <li><span className="text-gray-600">DYOR - Do Your Own Research</span></li>
              <li><span className="text-gray-600">Community Takeover (CTO)</span></li>
              <li><span className="text-gray-600 flex items-center gap-3">Crypto is volatile <ShieldCheck className="w-4 h-4 text-yellow-500/50" /></span></li>
            </ul>
          </div>
        </div>

        <div className="pt-10 md:pt-20 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10">
          <p className="text-gray-600 text-[9px] md:text-[11px] font-black uppercase tracking-[0.3em] md:tracking-[0.5em] text-center md:text-left">
            © 2026 USD1LIFE COMMUNITY. NOT AFFILIATED WITH WLFI/USD1 OFFICIALLY.
          </p>
          <div
            onClick={() => navigator.clipboard.writeText('Dx4593M...Mgbonk')}
            className="flex flex-col md:flex-row items-center gap-4 md:gap-12 text-[9px] md:text-[11px] font-black tracking-[0.3em] md:tracking-[0.5em] text-gray-600 uppercase cursor-pointer hover:text-yellow-500 transition-colors group"
            title="Click to copy CA"
          >
            <div className="flex items-center gap-3 md:gap-4">
              <div className="w-2 h-2 md:w-3 md:h-3 bg-yellow-500 rounded-full animate-pulse shadow-[0_0_15px_rgba(191,149,63,0.5)] group-hover:scale-125 transition-transform" />
              <span>CA: Dx459...Mgbonk</span>
            </div>
            <span className="text-yellow-500/40 group-hover:text-yellow-500 transition-colors">SOLANA NETWORK</span>
          </div>

          <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-white/5 text-center w-full">
            <a
              href="https://x.com/kiseki_Hikari__"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 md:gap-3 text-gray-500 hover:text-yellow-500 transition-all duration-300 text-xs md:text-sm font-semibold group"
            >
              <span className="tracking-wider">Made by</span>
              <span className="text-yellow-500/70 group-hover:text-yellow-500 font-black tracking-widest">HIKARI</span>
              <Twitter className="w-3 h-3 md:w-4 md:h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon: React.FC<{ icon: React.ReactNode }> = ({ icon }) => (
  <a href="#" className="w-20 h-20 rounded-full glass-card flex items-center justify-center text-white hover:text-yellow-500 hover:border-yellow-500/50 transition-all duration-500 hover:-translate-y-3 group shadow-2xl">
    <div className="transition-transform group-hover:scale-110">
      {icon}
    </div>
  </a>
);

export default Footer;