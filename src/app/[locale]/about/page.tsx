import { useTranslations } from 'next-intl';

export default function AboutPage() {
  const t = useTranslations('AboutPage');

  return (
    <div className="container mx-auto px-4 py-24 min-h-[90vh]">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-outfit uppercase tracking-tighter">{t('title')}</h1>
          <p className="text-2xl text-[#007AFF] font-medium leading-relaxed mb-12 border-l-4 border-[#007AFF] pl-8">{t('vision')}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div className="glass-panel p-10 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-4 h-4 bg-[#8A2BE2] rounded-full m-4"></div>
            <h3 className="text-2xl font-bold mb-6 font-outfit uppercase">{t('onchainAccounting.title')}</h3>
            <p className="text-white/60 leading-relaxed text-sm">{t('onchainAccounting.desc')}</p>
          </div>
          <div className="glass-panel p-10 relative overflow-hidden group border-[#007AFF]/30 border-2">
            <h3 className="text-2xl font-bold mb-6 font-outfit uppercase">Proof of Solvency</h3>
            <p className="text-white/60 leading-relaxed text-sm">Real-time public auditing ensures that every dollar in the ecosystem is accounted for on WeChain.</p>
          </div>
        </div>

        <div className="glass-panel p-1 border-white/5 overflow-hidden rounded-3xl mb-24 aspect-[21/9]">
          <div className="w-full h-full bg-gradient-to-br from-[#121212] via-[#007AFF]/10 to-[#121212] flex items-center justify-center relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[1px] bg-white/10"></div>
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#007AFF] to-transparent animate-pulse shadow-blue-glow"></div>
            <div className="text-4xl text-white/20 font-bold uppercase tracking-[1em] font-outfit z-10 select-none">TRUST MATHEMATICS</div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="flex flex-col gap-4">
            <div className="text-3xl font-bold font-outfit tracking-tighter shadow-blue-glow">2026</div>
            <div className="text-xs text-white/40 uppercase tracking-widest font-bold">Phase: Episode 3</div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="text-3xl font-bold font-outfit tracking-tighter shadow-blue-glow">140M+</div>
            <div className="text-xs text-white/40 uppercase tracking-widest font-bold">Merchant Reach</div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="text-3xl font-bold font-outfit tracking-tighter shadow-blue-glow">2 OF 2</div>
            <div className="text-xs text-white/40 uppercase tracking-widest font-bold">MPC Protocol Architecture</div>
          </div>
        </div>
      </div>
    </div>
  );
}
