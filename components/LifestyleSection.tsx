import React from 'react';
import { Crown, Star, ArrowUpRight } from 'lucide-react';

const images = [
  { url: 'https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&q=80&w=1200&fm=webp', title: 'PRIVATE AVIATION', subtitle: 'The USD1 Sovereign Fleet' },
  { url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200&fm=webp', title: 'GLOBAL ESTATES', subtitle: 'USD1 Exclusive Holdings' },
  { url: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=1200&fm=webp', title: 'ELITE YACHTING', subtitle: 'The USD1 Admiralty' },
  { url: 'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?auto=format&fit=crop&q=80&w=1200&fm=webp', title: 'SIGNATURE SUITES', subtitle: 'USD1 Tier-One Luxury' }
];

const LifestyleSection: React.FC = () => {
  return (
    <section id="lifestyle" className="py-40 bg-[#020202] relative border-y border-white/5 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-end justify-between mb-24 gap-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-5 mb-6">
              <Crown className="w-8 h-8 text-yellow-500" />
              <h2 className="text-[10px] font-black tracking-[0.7em] text-yellow-500 uppercase">THE LIFESTYLE PROTOCOL</h2>
            </div>
            <p className="text-5xl md:text-7xl font-playfair font-black text-white italic leading-[1.1] tracking-tighter uppercase">THE ART OF <br /><span className="gold-gradient">SOVEREIGNTY</span></p>
          </div>
          <div className="max-w-xl relative p-8 glass-card rounded-[2.5rem] border-yellow-500/20">
            <div className="absolute -left-4 top-8 bottom-8 w-1 bg-yellow-500 rounded-full" />
            <p className="text-gray-300 italic text-xl pl-8 leading-relaxed font-light">
              "Owning $USD1LIFE isn't just a position; it's a <span className="text-white font-bold italic">global membership</span> to an ecosystem defined by absolute scarcity and elite performance."
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {images.map((img, i) => (
            <div key={i} className="group relative h-[650px] overflow-hidden rounded-[4rem] cursor-pointer shadow-2xl border border-white/5 hover:border-yellow-500/40 transition-all duration-700">
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-[#020202]/30 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="absolute top-10 right-10 opacity-0 group-hover:opacity-100 transition-all duration-700 scale-75 group-hover:scale-100">
                <div className="p-4 bg-yellow-500 rounded-full">
                  <ArrowUpRight className="w-6 h-6 text-black" />
                </div>
              </div>

              <div className="absolute bottom-16 left-10 right-10 transform transition-all group-hover:-translate-y-4 duration-700">
                <div className="w-12 h-0.5 bg-yellow-500 mb-6 group-hover:w-full transition-all duration-700" />
                <p className="text-yellow-500 text-[9px] font-black uppercase tracking-[0.5em] mb-4">{img.subtitle}</p>
                <h3 className="text-4xl font-black font-playfair text-white tracking-tight leading-none italic">{img.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LifestyleSection;