'use client';

import { useTranslations } from 'next-intl';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

export default function EcosystemPage() {
  const t = useTranslations('EcosystemPage');

  const data = [
    { name: 'Rewards & Mining', value: 40, color: '#007AFF' },
    { name: 'Ecosystem & Treasury', value: 25, color: '#8A2BE2' },
    { name: 'Team & Advisors', value: 15, color: '#1e1e1e' },
    { name: 'Private & Seed', value: 10, color: '#2a2a2a' },
    { name: 'Public Listing', value: 10, color: '#333333' }
  ];

  return (
    <div className="container mx-auto px-4 py-24 min-h-screen">
      <div className="text-center mb-16 animate-fade-in">
        <div className="inline-block px-4 py-1.5 rounded-full border border-[#007AFF]/30 bg-[#007AFF]/5 text-[#007AFF] text-[10px] font-bold uppercase tracking-wider mb-6">
          WFI Tokenomics Structure
        </div>
        <h1 className="text-4xl md:text-7xl font-bold mb-4 font-outfit uppercase tracking-tighter shadow-blue-glow">{t('title')}</h1>
        <p className="text-xl text-white/40 max-w-2xl mx-auto">{t('token.desc')}</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center mb-32">
        {/* Recharts Pie Visualization */}
        <div className="glass-panel p-8 min-h-[500px] flex items-center justify-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-[#007AFF]/5 to-transparent opacity-50"></div>
          <ResponsiveContainer width="100%" height={400}>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={80}
                outerRadius={140}
                paddingAngle={5}
                dataKey="value"
                stroke="none"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ backgroundColor: '#121212', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}
                itemStyle={{ color: '#fff', fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase' }}
              />
              <Legend verticalAlign="bottom" height={36} formatter={(value) => <span className="text-[10px] text-white/40 font-bold uppercase tracking-widest">{value}</span>} />
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
            <div className="text-4xl font-bold font-outfit text-white">1B</div>
            <div className="text-[8px] text-white/30 uppercase tracking-[0.3em] font-bold">Total WFI</div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="glass-panel p-8 border-l-4 border-l-[#007AFF]">
            <h3 className="text-2xl font-bold mb-4 font-outfit uppercase tracking-tighter text-[#007AFF] flex items-center gap-3">
              <span>◈</span> {t('token.name')}
            </h3>
            <p className="text-white/60 leading-relaxed text-sm mb-8">{t('token.desc')}</p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                <div className="text-[10px] text-white/30 uppercase tracking-widest font-bold mb-1">Network</div>
                <div className="text-lg font-bold font-outfit">WeChain</div>
              </div>
              <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                <div className="text-[10px] text-white/30 uppercase tracking-widest font-bold mb-1">Standard</div>
                <div className="text-lg font-bold font-outfit">MPC Native</div>
              </div>
            </div>
          </div>

          <div className="glass-panel p-8 border-l-4 border-l-[#8A2BE2]">
            <h3 className="text-2xl font-bold mb-4 font-outfit uppercase tracking-tighter text-[#8A2BE2] flex items-center gap-3">
              <span>⚡</span> {t('energy.title')}
            </h3>
            <p className="text-white/60 leading-relaxed text-sm mb-6">{t('energy.desc')}</p>
            <div className="bg-white/5 p-4 rounded-2xl">
              <div className="flex justify-between items-center mb-2">
                <span className="text-[10px] text-white/30 uppercase tracking-widest font-bold">Incentive Distribution</span>
                <span className="text-[10px] text-[#8A2BE2] font-bold">HIGH REGEN</span>
              </div>
              <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                <div className="h-full w-[80%] bg-[#8A2BE2] animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Amortization Table / Visual */}
      <div className="glass-panel p-1 border-white/5 overflow-hidden rounded-[40px] mb-24">
        <div className="bg-gradient-to-br from-[#121212] via-[#007AFF]/5 to-[#121212] p-12 md:p-20 text-center">
          <h2 className="text-3xl md:text-5xl font-bold font-outfit mb-8 uppercase tracking-tighter">{t('governance.title')}</h2>
          <div className="max-w-2xl mx-auto text-white/40 text-sm leading-relaxed mb-12">
            {t('governance.desc')}
          </div>
          <div className="flex justify-center gap-8 md:gap-24 flex-wrap">
            {[
              { label: t('governance.cycle'), value: "730 Days" },
              { label: t('governance.mining'), value: "CBM-20" },
              { label: t('governance.limit'), value: "1,000,000,000" }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col gap-2">
                <div className="text-4xl font-bold font-outfit tracking-tighter text-white">{stat.value}</div>
                <div className="text-[10px] text-[#007AFF] uppercase tracking-[0.3em] font-bold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Ecosystem Supporters & Contributors */}
      <div className="mt-16 text-center">
        <h2 className="text-3xl md:text-5xl font-bold font-outfit mb-12 uppercase tracking-tighter shadow-blue-glow">{t('supporters.title') || "Ecosystem Supporters & Contributors"}</h2>
        
        <div className="flex justify-center flex-wrap gap-8">
          {/* Moshé Ostrovsky Card */}
          <div className="glass-panel p-8 w-full max-w-sm flex flex-col items-center text-center group relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#8A2BE2] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
             <div className="w-24 h-24 rounded-full bg-slate-100 border-4 border-white/10 group-hover:border-[#8A2BE2] overflow-hidden transition-all shadow-lg mb-6 shadow-[#8A2BE2]/20 flex items-center justify-center">
               <img src="/evgeniy.png" alt="Moshé Ostrovsky - Project Contributor" className="w-[110%] h-[110%] max-w-none object-cover object-top -translate-x-[3%] translate-y-[8%] scale-90" />
             </div>
             <h3 className="text-2xl font-bold font-outfit tracking-tighter uppercase mb-2">Moshé Ostrovsky</h3>
             <div className="text-[10px] text-[#8A2BE2] font-bold uppercase tracking-[0.3em] mb-4">{t('moshe.role')}</div>
             <p className="text-white/50 text-sm leading-relaxed">
                {t('moshe.bio')}
             </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in 1.5s ease-out;
        }
      `}</style>
    </div>
  );
}
