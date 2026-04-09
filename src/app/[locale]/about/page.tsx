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
            <p className="text-white/60 leading-relaxed text-sm">Real-time public auditing ensures that every dollar in the ecosystem is accounted for on WeChain. WeFi is not a traditional bank taking fractional reserves; all fiat is backed securely and verified.</p>
          </div>
        </div>

        <div className="mb-24 p-12 glass-panel border border-white/10 rounded-[40px] bg-gradient-to-b from-white/5 to-transparent">
          <h2 className="text-3xl font-bold font-outfit tracking-tighter mb-8 uppercase text-center">Led by Crypto Pioneers</h2>
          <p className="text-white/60 leading-relaxed text-center max-w-2xl mx-auto mb-8">
            WeFi is built by veterans from Tether, Wise, Bitpanda, Binance, and Visa. This isn’t our first breakthrough. But it might be yours. Your crypto, your rules: earn, spend, and grow without limits.
          </p>
          <div className="flex justify-center">
            <a href="/en/team" className="px-10 py-4 rounded-full bg-[#007AFF] hover:bg-[#0056b3] text-white font-bold tracking-widest uppercase text-xs transition-all shadow-blue-glow">
              Meet The Founders
            </a>
          </div>
        </div>

        <div className="glass-panel p-1 border-white/5 overflow-hidden rounded-[40px] mb-24 aspect-[21/9]">
          <div className="w-full h-full bg-gradient-to-br from-[#121212] via-[#007AFF]/10 to-[#121212] flex items-center justify-center relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[1px] bg-white/10"></div>
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#007AFF] to-transparent animate-pulse shadow-blue-glow"></div>
            <div className="text-4xl text-white/20 font-bold uppercase tracking-[1em] font-outfit z-10 select-none text-center leading-loose">TRUST<br/>MATHEMATICS</div>
          </div>
        </div>
      </div>
    </div>
  );
}
