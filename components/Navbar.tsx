import React, { useState, useEffect } from 'react';
import { Crown, ArrowUpRight } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Vision', href: '#vision' },
    { name: 'Lifestyle', href: '#lifestyle' },
    { name: 'Arena', href: '#arena' },
    { name: 'Alpha', href: '#alpha' },
    { name: 'Tokenomics', href: '#tokenomics' }
  ];

  return (
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-700 ${isScrolled ? 'bg-[#020202]/95 backdrop-blur-3xl py-4 border-b border-yellow-500/20 shadow-2xl' : 'bg-transparent py-10'}`}>
      <div className="max-w-[1400px] mx-auto px-8 lg:px-12 flex items-center justify-between">
        <div
          className="flex items-center gap-4 cursor-pointer group"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-yellow-500 blur-xl opacity-0 group-hover:opacity-30 transition-opacity" />
            <Crown className="w-8 h-8 md:w-10 md:h-10 text-yellow-500 relative z-10" />
          </div>
          <span className="text-2xl md:text-3xl font-black font-playfair tracking-tighter">
            USD<span className="gold-gradient italic">1LIFE</span>
          </span>
        </div>



        <div className="hidden md:flex items-center gap-6">
          <button
            onClick={() => window.open('https://dexscreener.com/solana/f196hrqt8xempsbdp3apz3mjutsnqmu2gusv4sgielv2', '_blank')}
            className="gold-bg text-black px-10 py-3 rounded-full font-black text-[11px] hover:scale-105 transition-all flex items-center gap-3 shadow-[0_0_30px_rgba(191,149,63,0.3)] active:scale-95 group uppercase tracking-wider"
          >
            BUY $USD1LIFE <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;