import React from 'react';
import { Crown, Twitter, Instagram, Send, ExternalLink, ShieldCheck } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#020202] pt-40 pb-20 px-6 lg:px-12 border-t border-yellow-500/10 relative overflow-hidden">
      {/* Background flare */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-yellow-500/5 blur-[200px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-24 mb-40">
          <div className="md:col-span-2">
            <div className="flex items-center gap-5 mb-12">
              <Crown className="w-16 h-16 text-yellow-500" />
              <span className="text-5xl font-black font-playfair tracking-tighter">
                USD<span className="gold-gradient italic">1LIFE</span>
              </span>
            </div>
            <p className="text-gray-400 text-2xl max-w-lg mb-16 leading-relaxed font-light">
              The relentless community-driven meme coin on Solana. Join the flock and choose the #USD1LIFE. Slowly, then all at once—higher! 🦅☝️
            </p>
            <div className="flex gap-10">
              <a href="https://x.com/usd1life" target="_blank" rel="noopener noreferrer" className="w-20 h-20 rounded-full glass-card flex items-center justify-center text-white hover:text-yellow-500 hover:border-yellow-500/50 transition-all duration-500 hover:-translate-y-3 group shadow-2xl">
                <div className="transition-transform group-hover:scale-110">
                  <Twitter className="w-8 h-8" />
                </div>
              </a>
              <a href="https://t.me/USD1LIFEportal" target="_blank" rel="noopener noreferrer" className="w-20 h-20 rounded-full glass-card flex items-center justify-center text-white hover:text-yellow-500 hover:border-yellow-500/50 transition-all duration-500 hover:-translate-y-3 group shadow-2xl">
                <div className="transition-transform group-hover:scale-110">
                  <Send className="w-8 h-8" />
                </div>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-black mb-12 uppercase tracking-[0.4em] text-[11px]">COMMUNITY</h4>
            <ul className="space-y-8 text-gray-500 font-semibold tracking-wider text-sm">
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

        <div className="pt-20 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-10">
          <p className="text-gray-600 text-[11px] font-black uppercase tracking-[0.5em]">
            © 2026 USD1LIFE COMMUNITY. NOT AFFILIATED WITH WLFI/USD1 OFFICIALLY.
          </p>
          <div className="flex items-center gap-12 text-[11px] font-black tracking-[0.5em] text-gray-600 uppercase">
            <div className="flex items-center gap-4">
              <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse shadow-[0_0_15px_rgba(191,149,63,0.5)]" />
              <span>CA: Dx459...Mgbonk</span>
            </div>
            <span className="text-yellow-500/40">SOLANA NETWORK</span>
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