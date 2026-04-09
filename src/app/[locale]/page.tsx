'use client';

import { useTranslations } from 'next-intl';

export default function HomePage() {
  const t = useTranslations('HomePage');

  return (
    <div className="flex-1 flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden">
        {/* Animated Background Orbs */}
        <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-[#007AFF]/10 blur-[120px] rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-[#8A2BE2]/10 blur-[120px] rounded-full animate-pulse-slow" style={{ animationDelay: '2s' }}></div>

        <div className="max-w-5xl z-10 w-full animate-fade-in-up">
          <div className="inline-block px-4 py-1.5 rounded-full border border-[#007AFF]/30 bg-[#007AFF]/5 text-[#007AFF] text-xs font-bold uppercase tracking-wider mb-8">
            Episode 3: The Deobank Revolution
          </div>
          <h1 className="text-5xl md:text-8xl font-bold font-outfit tracking-tighter mb-8 leading-[0.9]">
            {t('hero.title')}
          </h1>
          <p className="text-xl md:text-2xl text-white/60 max-w-2xl mx-auto mb-12 font-medium">
            {t('hero.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-10 py-4 rounded-full bg-[#007AFF] hover:bg-[#0056b3] text-white font-bold transition-all shadow-blue-glow">
              Explore Ecosystem
            </button>
            <button className="px-10 py-4 rounded-full border border-white/10 hover:bg-white/5 text-white font-bold transition-all">
              Read Technical Docs
            </button>
          </div>
        </div>
      </section>

      {/* Highlights Grid */}
      <section className="py-24 px-4 bg-gradient-to-b from-transparent to-[#0a0a0a]/50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['deobank', 'mpc', 'cards'].map((key) => (
              <div key={key} className="glass-panel p-10 hover:scale-[1.02] transition-all group">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-2xl mb-6 group-hover:bg-[#007AFF]/10 transition-colors">
                  {key === 'deobank' ? '🌍' : key === 'mpc' ? '🔐' : '💳'}
                </div>
                <h3 className="text-2xl font-bold font-outfit mb-4">{t(`highlights.${key}.title`)}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{t(`highlights.${key}.desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-32 px-4">
        <div className="container mx-auto max-w-4xl glass-panel p-12 md:p-20 relative overflow-hidden text-center md:text-left">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#007AFF]/10 to-transparent blur-3xl"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold font-outfit mb-8 uppercase tracking-tighter">Onchain Solvency</h2>
            <p className="text-xl text-white/50 leading-relaxed mb-10 italic">
              "WeFi is not just another bank; it's a protocol for trust. By moving the internal ledger to WeChain, we eliminate human error and fraud."
            </p>
            <div className="flex items-center justify-center md:justify-start gap-4">
              <div className="w-12 h-12 rounded-full border-2 border-[#007AFF] overflow-hidden">
                <img src="/Reeve.avif" alt="Reeve Collins" className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="font-bold font-outfit uppercase tracking-tighter">Reeve Collins</div>
                <div className="text-xs text-white/30 uppercase tracking-widest font-bold">Chairman of WeFi</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.1); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
