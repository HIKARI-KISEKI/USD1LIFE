import React from 'react';
import { ExternalLink, ShieldCheck, Crown, Star } from 'lucide-react';

const members = [
  {
    name: "Donald J. Trump",
    role: "Visionary & Founder",
    image: "https://www.worldlibertyfinancial.com/_next/image?url=%2Fassets%2Fmembers%2Fdonald-trump.webp&w=1080&q=75",
    bio: "The foundational architect behind World Liberty Financial, championing the movement for global financial freedom and elite sovereign standards."
  },
  {
    name: "Eric Trump",
    role: "Board Strategist",
    image: "https://www.worldlibertyfinancial.com/_next/image?url=%2Fassets%2Fmembers%2Feric-trump.webp&w=1080&q=75",
    bio: "Ensuring the robustness of the WLFI chain and scaling the infrastructure for a truly decentralized, institutional-grade luxury economy."
  },
  {
    name: "Barron Trump",
    role: "Legacy Architect",
    image: "https://www.worldlibertyfinancial.com/_next/image?url=%2Fassets%2Fmembers%2Fbarron-trump.webp&w=1080&q=75",
    bio: "Bridging the gap between legacy power and the new digital frontier, guarding the scarcity and exclusivity of the USD1LIFE vision."
  }
];

const BoardSection: React.FC = () => {
  return (
    <section id="board" className="py-48 relative overflow-hidden bg-[#020202]">
      {/* Decorative Orbs */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[800px] h-[800px] bg-yellow-500/5 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[800px] h-[800px] bg-yellow-500/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-32">
          <div className="inline-flex items-center gap-4 px-10 py-4 glass-card rounded-full mb-10 border-yellow-500/30 shadow-xl">
            <Star className="w-5 h-5 text-yellow-500 fill-yellow-500/20" />
            <span className="text-[11px] font-black tracking-[0.6em] text-yellow-500 uppercase">THE INNER CIRCLE</span>
          </div>
          <h2 className="text-6xl md:text-[9rem] font-playfair font-black text-white italic leading-[0.8] tracking-tighter">
            THE BOARD OF <br /><span className="gold-gradient text-glow">GOVERNANCE</span>
          </h2>
          <p className="mt-12 text-gray-400 text-3xl font-light max-w-4xl mx-auto leading-relaxed italic">
            "We are not just building a protocol. We are building the future of sovereign wealth."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24">
          {members.map((m, i) => (
            <div key={i} className="glass-card rounded-[5rem] overflow-hidden group hover:border-yellow-500/60 transition-all duration-700 flex flex-col h-full shadow-2xl relative">
              <div className="h-[600px] overflow-hidden relative">
                <img
                  src={m.image}
                  alt={m.name}
                  className="w-full h-full object-cover filter brightness-75 contrast-125 group-hover:brightness-100 group-hover:scale-110 transition-all duration-[1500ms]"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://picsum.photos/seed/${m.name}/600/800?grayscale`;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-transparent to-transparent opacity-80" />
                <div className="absolute top-12 left-12">
                  <div className="bg-black/80 backdrop-blur-2xl px-8 py-3 rounded-full text-[10px] text-yellow-500 border border-yellow-500/30 font-black uppercase tracking-[0.4em] shadow-2xl">
                    BOARD MEMBER
                  </div>
                </div>
              </div>
              <div className="p-14 flex-grow flex flex-col bg-[#020202]">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-5xl font-black font-playfair text-white tracking-tight">{m.name}</h3>
                  <ShieldCheck className="w-8 h-8 text-yellow-500 drop-shadow-[0_0_15px_rgba(191,149,63,0.5)]" />
                </div>
                <p className="text-yellow-500 font-black uppercase tracking-[0.5em] text-[10px] mb-10">{m.role}</p>
                <p className="text-gray-400 mb-6 leading-relaxed italic text-2xl font-light flex-grow">"{m.bio}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BoardSection;