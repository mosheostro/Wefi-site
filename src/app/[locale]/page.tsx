'use client';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import { ArrowRight, Globe, Lock, Cpu, Landmark, CreditCard, ChevronRight } from 'lucide-react';

export default function HomePage() {
  const t = useTranslations('HomePage');

  return (
    <div className="flex-1 flex flex-col">
      {/* Fintech Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden pt-20">
        {/* Animated Background Orbs */}
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-[#007AFF]/15 blur-[120px] rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-[#8A2BE2]/15 blur-[120px] rounded-full animate-pulse-slow" style={{ animationDelay: '2s' }}></div>

        <div className="max-w-5xl z-10 w-full animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#007AFF]/30 bg-[#007AFF]/10 text-[#007AFF] text-xs font-bold uppercase tracking-wider mb-8 shadow-blue-glow">
            <span className="w-2 h-2 rounded-full bg-[#007AFF] animate-ping"></span>
            Episode 3: The Deobank Revolution
          </div>
          <h1 className="text-5xl md:text-8xl lg:text-9xl font-bold font-outfit tracking-tighter mb-8 leading-[0.9] bg-clip-text text-transparent bg-gradient-to-br from-white to-white/60">
            {t('hero.title')}
          </h1>
          <p className="text-xl md:text-2xl text-white/60 max-w-2xl mx-auto mb-12 font-medium">
            {t('hero.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link href="/ecosystem" className="px-10 py-4 rounded-full bg-[#007AFF] hover:bg-[#0056b3] text-white font-bold transition-all shadow-blue-glow flex items-center gap-2 group">
              {t('buttons.ecosystem')}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a href="https://gitbook.wefi.co/" target="_blank" rel="noopener noreferrer" className="px-10 py-4 rounded-full border border-white/20 hover:bg-white/5 text-white font-bold transition-all flex items-center gap-2">
              {t('buttons.docs')}
            </a>
          </div>
        </div>
      </section>

      {/* Trust & Credibility Block */}
      <section className="py-16 border-y border-white/5 bg-[#0a0a0a]/80 backdrop-blur-xl relative z-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-10">
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#007AFF]">
              {t('credibility.title') || "Backed by Visionaries & Ecosystem Pioneers"}
            </h4>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
             {/* Reeve Collins */}
             <div className="flex items-center gap-4 group cursor-default">
               <div className="w-14 h-14 rounded-full border-2 border-white/10 group-hover:border-[#007AFF] overflow-hidden transition-all shadow-lg">
                 <img src="/Reeve.avif" alt="Reeve Collins" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
               </div>
               <div className="text-left">
                 <div className="font-bold font-outfit text-sm">Reeve Collins</div>
                 <div className="text-[9px] text-white/50 uppercase tracking-widest">{t('narrative.role')}</div>
               </div>
             </div>
             
             {/* Moshé Ostrovsky (Ecosystem Participant) */}
             <div className="flex items-center gap-4 group cursor-default">
               <div className="w-14 h-14 rounded-full border-2 border-white/10 group-hover:border-[#8A2BE2] overflow-hidden transition-all shadow-lg bg-slate-100 flex items-center justify-center">
                 <img src="/evgeniy.png" alt="Moshé Ostrovsky" className="w-[110%] h-[110%] max-w-none object-cover object-top -translate-x-[3%] translate-y-[8%] scale-90" />
               </div>
               <div className="text-left">
                 <div className="font-bold font-outfit text-sm">Moshé Ostrovsky</div>
                 <div className="text-[9px] text-white/50 uppercase tracking-widest">{t('narrative.mosheRole')}</div>
               </div>
             </div>

             {/* Maksym */}
             <div className="flex items-center gap-4 group cursor-default hidden sm:flex">
               <div className="w-14 h-14 rounded-full border-2 border-white/10 group-hover:border-white/50 overflow-hidden transition-all shadow-lg">
                 <img src="/Maxym.avif" alt="Maksym" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
               </div>
               <div className="text-left">
                 <div className="font-bold font-outfit text-sm">Maksym Sakharov</div>
                 <div className="text-[9px] text-white/50 uppercase tracking-widest">Group CEO</div>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* Visual Onboarding Flow (Infographic CSS Component) */}
      <section className="py-24 px-4 relative">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
             <h2 className="text-3xl md:text-5xl font-bold font-outfit uppercase tracking-tighter mb-4">Value Flow</h2>
             <p className="text-white/40 max-w-2xl mx-auto">Understanding the seamless transition from traditional banking to borderless Deobank utility.</p>
          </div>

          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-1/2 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-transparent via-[#007AFF]/50 to-transparent -translate-y-1/2 z-0"></div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative z-10">
              
              {/* Step 1 */}
              <div className="glass-panel p-8 flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300">
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors group-hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                  <Landmark className="w-8 h-8 text-white/70" />
                </div>
                <div className="text-[10px] text-[#007AFF] font-bold uppercase tracking-[0.2em] mb-2">Step 1</div>
                <h3 className="text-xl font-bold font-outfit">{t('visualFlow.step1') || "Traditional Finance"}</h3>
              </div>

              {/* Step 2 */}
              <div className="glass-panel p-8 flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300 relative lg:translate-y-8">
                <div className="w-16 h-16 rounded-2xl bg-[#007AFF]/10 border border-[#007AFF]/30 flex items-center justify-center mb-6 group-hover:bg-[#007AFF]/20 transition-colors shadow-blue-glow">
                  <Cpu className="w-8 h-8 text-[#007AFF]" />
                </div>
                <div className="text-[10px] text-[#007AFF] font-bold uppercase tracking-[0.2em] mb-2">Step 2</div>
                <h3 className="text-xl font-bold font-outfit">{t('visualFlow.step2') || "Crypto / WeChain"}</h3>
              </div>

              {/* Step 3 */}
              <div className="glass-panel p-8 flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300">
                <div className="w-16 h-16 rounded-2xl bg-[#8A2BE2]/10 border border-[#8A2BE2]/30 flex items-center justify-center mb-6 group-hover:bg-[#8A2BE2]/20 transition-colors shadow-[0_0_30px_rgba(138,43,226,0.3)]">
                  <Lock className="w-8 h-8 text-[#8A2BE2]" />
                </div>
                <div className="text-[10px] text-[#8A2BE2] font-bold uppercase tracking-[0.2em] mb-2">Step 3</div>
                <h3 className="text-xl font-bold font-outfit">{t('visualFlow.step3') || "WeFi Deobank"}</h3>
              </div>

              {/* Step 4 */}
              <div className="glass-panel p-8 flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300 relative lg:translate-y-8">
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors group-hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                  <Globe className="w-8 h-8 text-white/70" />
                </div>
                <div className="text-[10px] text-white/50 font-bold uppercase tracking-[0.2em] mb-2">Step 4</div>
                <h3 className="text-xl font-bold font-outfit">{t('visualFlow.step4') || "Global Payments"}</h3>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-12 border-y border-white/5 bg-[#0a0a0a]/50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/5 text-center">
            <div className="flex flex-col">
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold font-outfit tracking-tighter text-[#007AFF] mb-2 shadow-blue-glow">200k+</div>
              <div className="text-[10px] text-white/50 uppercase tracking-widest font-bold">{t('stats.users')}</div>
            </div>
            <div className="flex flex-col">
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold font-outfit tracking-tighter mb-2 text-[#8A2BE2]">$150M+</div>
              <div className="text-[10px] text-white/50 uppercase tracking-widest font-bold">{t('stats.volume')}</div>
            </div>
            <div className="flex flex-col">
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold font-outfit tracking-tighter mb-2">153</div>
              <div className="text-[10px] text-white/50 uppercase tracking-widest font-bold">{t('stats.jurisdictions')}</div>
            </div>
            <div className="flex flex-col">
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold font-outfit tracking-tighter mb-2">500k+</div>
              <div className="text-[10px] text-white/50 uppercase tracking-widest font-bold">{t('stats.nodes')}</div>
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
