import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

export default function AboutPage() {
  const t = useTranslations('AboutPage');

  return (
    <div className="container mx-auto px-4 py-24 min-h-[90vh]">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-outfit uppercase tracking-tighter">{t('title')}</h1>
          <p className="text-2xl text-[#007AFF] font-medium leading-relaxed mb-12 border-l-4 border-[#007AFF] pl-8">{t('vision')}</p>
        </div>

        {/* About Project / Narrative */}
        <div className="mb-24 p-12 glass-panel border border-[#007AFF]/30 rounded-[40px] relative overflow-hidden bg-gradient-to-br from-[#121212] to-[#1a1a1a]">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#007AFF]/5 rounded-full blur-[80px]"></div>
          <h2 className="text-3xl font-bold font-outfit uppercase tracking-tighter mb-6 text-[#007AFF]">About Project</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-white/80 text-lg leading-relaxed mb-8 italic">
                "WeFi is not just another bank; it's a protocol for trust. By moving the internal ledger to WeChain, we eliminate human error and fraud."
              </p>
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full border-2 border-white/20 overflow-hidden group-hover:border-[#007AFF] transition-all">
                  <img src="/Reeve.avif" alt="Reeve Collins" className="w-full h-full object-cover"/>
                </div>
                <div>
                   <div className="font-bold text-lg font-outfit">Reeve Collins</div>
                   <div className="text-xs text-white/50 uppercase tracking-widest leading-snug">
                     Chairman of WeFi and Co-Creator of USDT (Tether)
                   </div>
                </div>
              </div>
            </div>
            <div className="text-white/60 leading-relaxed text-sm">
              WeFi transforms the traditional financial architecture by integrating it with decentralized rails. By eliminating intermediaries and enabling true on-chain solvency, the project bridges the world of fiat currency and digital assets. It builds a global ecosystem where users hold their assets securely on WeChain while transacting seamlessly globally.
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div className="glass-panel p-10 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-4 h-4 bg-[#8A2BE2] rounded-full m-4"></div>
            <h3 className="text-2xl font-bold mb-6 font-outfit uppercase">{t('onchainAccounting.title')}</h3>
            <p className="text-white/60 leading-relaxed text-sm">{t('onchainAccounting.desc')}</p>
          </div>
          <div className="glass-panel p-10 relative overflow-hidden group border-[#007AFF]/30 border-2">
            <h3 className="text-2xl font-bold mb-6 font-outfit uppercase">{t('proofOfSolvency.title')}</h3>
            <p className="text-white/60 leading-relaxed text-sm">{t('proofOfSolvency.desc')}</p>
          </div>
        </div>

        <div className="mb-24 p-12 glass-panel border border-white/10 rounded-[40px] bg-gradient-to-b from-white/5 to-transparent">
          <h2 className="text-3xl font-bold font-outfit tracking-tighter mb-8 uppercase text-center">{t('pioneers.title')}</h2>
          <p className="text-white/60 leading-relaxed text-center max-w-2xl mx-auto mb-8">
            {t('pioneers.desc')}
          </p>
          <div className="flex justify-center">
            <Link href="/team" className="px-10 py-4 rounded-full bg-[#007AFF] hover:bg-[#0056b3] text-white font-bold tracking-widest uppercase text-xs transition-all shadow-blue-glow">
              {t('pioneers.btn')}
            </Link>
          </div>
        </div>

        <div className="glass-panel p-1 border-white/5 overflow-hidden rounded-[40px] mb-24 min-h-[300px] md:min-h-[400px] md:aspect-[21/9]">
          <div className="w-full h-full bg-gradient-to-br from-[#121212] via-[#007AFF]/10 to-[#121212] flex items-center justify-center relative p-8">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] md:w-[80%] h-[1px] bg-white/10"></div>
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#007AFF] to-transparent animate-pulse shadow-blue-glow"></div>
            <div className="text-2xl md:text-5xl text-white/20 font-bold uppercase tracking-[0.2em] md:tracking-[0.5em] font-outfit z-10 select-none text-center leading-loose md:whitespace-pre-wrap">{t('trust').replace(' ', '\n')}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
