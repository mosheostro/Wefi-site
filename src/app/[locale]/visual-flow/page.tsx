'use client';

import { useTranslations } from 'next-intl';

export default function VisualFlowPage() {
  const t = useTranslations('VisualFlow');

  const steps = [
    { key: 'fiatIn', icon: '💵', color: '#007AFF' },
    { key: 'conversion', icon: '⚙️', color: '#007AFF' },
    { key: 'onchain', icon: '⛓️', color: '#8A2BE2' },
    { key: 'spend', icon: '💳', color: '#8A2BE2' }
  ];

  return (
    <div className="container mx-auto px-4 py-24 min-h-[80vh] flex flex-col items-center justify-center">
      <div className="text-center mb-24">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">{t('title')}</h1>
        <p className="text-xl text-white/60 max-w-2xl mx-auto">Understanding the seamless integration of traditional and decentralized finance.</p>
      </div>

      <div className="relative w-full max-w-5xl">
        {/* Animated Background Flow Line */}
        <div className="absolute top-1/2 left-0 w-full h-1 bg-white/5 -translate-y-1/2 hidden md:block">
          <div className="absolute top-0 left-0 h-full w-[20%] bg-gradient-to-r from-[#007AFF] to-[#8A2BE2] animate-flow-move"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
          {steps.map((step, idx) => (
            <div key={step.key} className="flex flex-col items-center text-center">
              <div 
                className="w-24 h-24 rounded-full glass-panel flex items-center justify-center text-4xl mb-6 relative border-2 border-white/10 group animate-pulse-slow"
                style={{ borderColor: step.color + '44', boxShadow: `0 0 20px ${step.color}22` }}
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-transparent to-white/5 opacity-50"></div>
                {step.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 font-outfit uppercase tracking-tighter">{t(step.key)}</h3>
              <p className="text-sm text-white/40 leading-relaxed px-4">
                {idx === 0 && "Funds enter the secure regulated banking layer."}
                {idx === 1 && "Automated bridge between traditional and digital rails."}
                {idx === 2 && "Assets secured by MPC and recorded on WeChain."}
                {idx === 3 && "Liquidity available instantly via WeFi Visa cards."}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-32 max-w-4xl w-full">
        <div className="glass-panel p-1 rounded-3xl overflow-hidden relative group border-[#007AFF]/30">
          <div className="w-full bg-gradient-to-br from-[#121212] via-[#1a1a1a] to-[#121212] p-8 md:p-16 flex flex-col items-center justify-center min-h-[400px]">
             
             {/* Fallback Flow UI */}
             <div className="flex flex-col md:flex-row items-center justify-between w-full h-full relative z-10 gap-4">
               {['Fiat', 'Crypto', 'Deobank', 'Payments'].map((item, i) => (
                 <div key={item} className="flex flex-col items-center text-center group cursor-default relative">
                   <div className="w-20 h-20 rounded-2xl glass-panel bg-white/5 border border-white/10 flex items-center justify-center text-xl font-bold uppercase tracking-widest text-[#007AFF] shadow-blue-glow transition-transform hover:scale-110 mb-4 z-20 relative">
                     {item}
                   </div>
                   {/* Connectors */}
                   {i < 3 && (
                     <div className="hidden md:block absolute top-[40px] left-[80px] w-[calc(100%+4rem)] h-0.5 bg-gradient-to-r from-[#007AFF] via-[#8A2BE2] to-[#007AFF] z-10 overflow-hidden">
                        <div className="w-1/2 h-full bg-white/50 animate-flow-move"></div>
                     </div>
                   )}
                   {i < 3 && (
                     <div className="md:hidden w-0.5 h-12 bg-gradient-to-b from-[#007AFF] to-[#8A2BE2] my-2 overflow-hidden mx-auto">
                        <div className="w-full h-1/2 bg-white/50 animate-pulse"></div>
                     </div>
                   )}
                 </div>
               ))}
             </div>

          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/80 via-transparent to-transparent opacity-60 pointer-events-none"></div>
          <div className="absolute bottom-8 left-8 right-8 text-center md:text-left pointer-events-none z-20">
            <h4 className="text-2xl font-bold font-outfit mb-2 text-white">Automated Liquidity Lifecycle</h4>
            <p className="text-white/60 text-sm">Real-time settlement visually mapped: Fiat → Crypto → Deobank → Payments.</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes flow-move {
          0% { left: -20%; }
          100% { left: 100%; }
        }
        .animate-flow-move {
          animation: flow-move 4s linear infinite;
        }
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
