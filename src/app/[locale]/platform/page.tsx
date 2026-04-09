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
      image: "/wefi_cbm_mining_1775748198988.png",
      href: "https://gitbook.wefi.co/the-architectures-of-wefi/cloud-based-mining"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-24">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-7xl font-bold mb-4 font-outfit uppercase tracking-tighter shadow-blue-glow">{t('title')}</h1>
        <p className="text-xl text-white/40 max-w-2xl mx-auto">{t('desc')}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
        {products.map((product) => (
          <div key={product.title} className="glass-panel p-10 hover:border-[#007AFF] transition-all group relative overflow-hidden flex flex-col">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#007AFF]/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl group-hover:bg-[#007AFF]/10 transition-colors"></div>
            <div className="text-4xl mb-6">{product.icon}</div>
            <h3 className="text-3xl font-bold mb-4 font-outfit tracking-tight">{t(`products.${product.title}.title`)}</h3>
            <p className="text-white/60 leading-relaxed mb-8 flex-1">{t(`products.${product.title}.desc`)}</p>
            
            {product.image && (
              <div className="mt-8 rounded-2xl overflow-hidden aspect-video border border-white/5 relative">
                <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] to-transparent opacity-40"></div>
              </div>
            )}
            
            <a href={product.href} target="_blank" rel="noopener noreferrer" className="mt-8 text-sm font-bold text-[#007AFF] uppercase tracking-[0.2em] flex items-center gap-2 group-hover:gap-4 transition-all">
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
          <div className="relative min-h-[400px] h-full">
            <img 
              src="/wefi_mpc_security_diagram_1775747790452.png" 
              alt="MPC Security Diagram" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#121212] via-transparent to-transparent"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
