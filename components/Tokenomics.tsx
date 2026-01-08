import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { Gem, Lock, Users, Zap, TrendingUp } from 'lucide-react';

const data = [
  { name: 'Elite Community', value: 40, color: '#bf953f' },
  { name: 'Lifestyle Treasury', value: 30, color: '#aa771c' },
  { name: 'WLFI Core Chain', value: 15, color: '#444' },
  { name: 'Board R&D', value: 15, color: '#1a1a1a' },
];

const Tokenomics: React.FC = () => {
  return (
    <section id="tokenomics" className="py-48 bg-[#020202] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-32 items-center relative z-10">
        <div>
          <div className="flex items-center gap-6 mb-10">
            <div className="h-[1px] w-16 bg-yellow-500" />
            <h2 className="text-[11px] font-black tracking-[0.8em] text-yellow-500 uppercase">TOKENOMICS</h2>
          </div>
          <p className="text-6xl md:text-[8rem] font-playfair font-black text-white mb-16 italic leading-[0.9] tracking-tighter">SOLID AS <br /><span className="gold-gradient">GOLD ☝️</span></p>

          <div className="grid grid-cols-1 gap-6 mb-16">
            <StatRow icon={<Gem className="w-6 h-6" />} label="Contract Address" value="Dx459...Mgbonk" />
            <StatRow icon={<Zap className="w-6 h-6" />} label="Network" value="SOLANA" />
            <StatRow icon={<Users className="w-6 h-6" />} label="Total Supply" value="1B FIXED" />
            <StatRow icon={<Lock className="w-6 h-6" />} label="Taxes" value="0% BUY/SELL" />
          </div>

          <div className="glass-card p-14 rounded-[4rem] border-l-[16px] border-yellow-500 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity">
              <TrendingUp className="w-32 h-32 text-yellow-500" />
            </div>
            <p className="text-gray-300 text-2xl leading-relaxed italic font-light relative z-10">
              "Fair takeover via CTO—no team tokens, all for the holders. USD1LIFE thrives on organic memes and real utility in the WLFI ecosystem. Bagwork matters here. 🦅"
            </p>
          </div>
        </div>

        <div className="h-[700px] relative flex items-center justify-center">
          <div className="absolute inset-0 bg-yellow-500/5 blur-[200px] rounded-full animate-pulse pointer-events-none" />
          <div className="w-full h-full relative z-10 p-10">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  innerRadius={160}
                  outerRadius={260}
                  paddingAngle={12}
                  dataKey="value"
                  stroke="rgba(0,0,0,0)"
                  animationBegin={0}
                  animationDuration={2500}
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{ backgroundColor: 'rgba(5,5,5,0.95)', border: '1px solid rgba(191,149,63,0.5)', borderRadius: '30px', padding: '30px', backdropFilter: 'blur(20px)' }}
                  itemStyle={{ color: '#fff', fontWeight: '900', fontSize: '16px', textTransform: 'uppercase', letterSpacing: '2px' }}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center text-center pointer-events-none">
              <span className="text-[11px] text-yellow-500 font-black tracking-[1em] uppercase mb-6">SOVEREIGN</span>
              <span className="text-7xl font-black font-playfair gold-gradient italic tracking-tighter drop-shadow-2xl">100%</span>
              <span className="text-[11px] text-gray-500 font-black tracking-[0.5em] uppercase mt-6">CIRCULATION</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const StatRow: React.FC<{ icon: React.ReactNode; label: string; value: string }> = ({ icon, label, value }) => (
  <div className="flex justify-between items-center py-8 border-b border-white/5 group hover:bg-yellow-500/[0.03] transition-all px-8 rounded-3xl cursor-default">
    <div className="flex items-center gap-8">
      <div className="text-yellow-500 opacity-50 group-hover:opacity-100 transition-opacity">
        {icon}
      </div>
      <span className="text-gray-500 uppercase tracking-[0.4em] text-[11px] font-black">{label}</span>
    </div>
    <span className="text-white font-black text-3xl font-playfair tracking-tight group-hover:gold-gradient transition-all">{value}</span>
  </div>
);

export default Tokenomics;