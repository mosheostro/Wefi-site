import { useTranslations } from 'next-intl';

export default function ProductsPage() {
  const t = useTranslations('PlatformPage'); 

  const products = [
    {
      title: "unified",
      icon: "⚖️",
      href: "https://www.deone.io/"
    },
    {
      title: "cards",
      icon: "💳",
      href: "https://new.wefi.co/platform"
    },
    {
      title: "credit",
      icon: "📈",
      href: "https://gitbook.wefi.co/"
    },
    {
      title: "mining",
      icon: "☁️",
      href: "https://gitbook.wefi.co/"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-24">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-7xl font-bold mb-4 font-outfit uppercase tracking-tighter shadow-blue-glow">{t('title')}</h1>
        <p className="text-xl text-white/40 max-w-2xl mx-auto">{t('desc')}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mb-32 auto-rows-fr">
        {products.map((product) => (
          <div key={product.title} className="glass-panel p-8 md:p-10 hover:border-[#007AFF] transition-all group relative overflow-hidden flex flex-col h-full">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#007AFF]/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl group-hover:bg-[#007AFF]/10 transition-colors"></div>
            <div className="text-4xl mb-6">{product.icon}</div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 font-outfit tracking-tight min-h-[3.5rem] flex items-center">{t(`products.${product.title}.title`)}</h3>
            <p className="text-white/60 leading-relaxed mb-6 flex-1">{t(`products.${product.title}.desc`)}</p>

            {product.image && (
              <div className="mt-2 mb-2 rounded-2xl overflow-hidden aspect-video max-h-56 border border-white/5 relative">
                <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] to-transparent opacity-40"></div>
              </div>
            )}

            <a href={product.href} target="_blank" rel="noopener noreferrer" className="mt-6 text-sm font-bold text-[#007AFF] uppercase tracking-[0.2em] flex items-center gap-2 group-hover:gap-4 transition-all">
              {t('learnMore')} <span>→</span>
            </a>
          </div>
        ))}
      </div>

      {/* MPC Security Highlight Section */}
      <div className="glass-panel p-1 border-white/5 overflow-hidden rounded-[40px] mb-24">
        <div className="grid md:grid-cols-2 gap-0">
          <div className="p-12 md:p-20 flex flex-col justify-center">
            <div className="text-[#007AFF] text-xs font-bold uppercase tracking-[0.3em] mb-4">{t('mpc.tag')}</div>
            <h2 className="text-3xl md:text-5xl font-bold font-outfit mb-6 uppercase tracking-tighter">{t('mpc.title')}</h2>
            <p className="text-white/50 leading-relaxed mb-10">
              {t('mpc.desc')}
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="text-[#007AFF]">✓</div>
                <div className="text-xs text-white/40 uppercase tracking-widest font-bold">{t('mpc.point1')}</div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-[#007AFF]">✓</div>
                <div className="text-xs text-white/40 uppercase tracking-widest font-bold">{t('mpc.point2')}</div>
              </div>
            </div>
          </div>
          <div className="relative min-h-[400px] h-full overflow-hidden bg-gradient-to-br from-[#0a1628] via-[#121212] to-[#1a0b2e] flex items-center justify-center">
            {/* Decorative grid backdrop */}
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(0,122,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(0,122,255,0.15) 1px, transparent 1px)',
                backgroundSize: '40px 40px',
              }}
            ></div>
            {/* Glow halos */}
            <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-[#007AFF]/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-[#8A2BE2]/20 rounded-full blur-3xl"></div>

            {/* MPC shard schematic */}
            <div className="relative z-10 flex flex-col items-center gap-8 px-8">
              <div className="flex items-center gap-10">
                <div className="w-20 h-20 rounded-2xl border border-[#007AFF]/50 bg-[#007AFF]/10 backdrop-blur flex items-center justify-center text-3xl shadow-[0_0_30px_rgba(0,122,255,0.3)]">
                  🔐
                </div>
                <div className="w-12 h-[2px] bg-gradient-to-r from-[#007AFF] to-[#8A2BE2]"></div>
                <div className="w-24 h-24 rounded-full border-2 border-white/20 bg-white/5 backdrop-blur flex items-center justify-center text-4xl shadow-[0_0_40px_rgba(138,43,226,0.3)]">
                  🛡️
                </div>
                <div className="w-12 h-[2px] bg-gradient-to-r from-[#8A2BE2] to-[#007AFF]"></div>
                <div className="w-20 h-20 rounded-2xl border border-[#8A2BE2]/50 bg-[#8A2BE2]/10 backdrop-blur flex items-center justify-center text-3xl shadow-[0_0_30px_rgba(138,43,226,0.3)]">
                  🔐
                </div>
              </div>
              <div className="flex items-center gap-6 text-[10px] uppercase tracking-[0.3em] font-bold text-white/50">
                <span>Shard A</span>
                <span className="text-white/30">2-of-2</span>
                <span>Shard B</span>
              </div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-r from-[#121212] via-transparent to-transparent pointer-events-none"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
