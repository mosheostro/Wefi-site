import { useTranslations } from 'next-intl';

export default function KnowledgePage() {
  const t = useTranslations('KnowledgePage');

  return (
    <div className="container mx-auto px-4 py-24 min-h-[80vh]">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-12 font-outfit uppercase tracking-tighter">{t('title')}</h1>
        
        <div className="grid gap-6">
          {(t.raw('faqs') as Array<{q: string, a: string}>).map((item, idx) => (
            <div key={idx} className="glass-panel p-8 hover:bg-white/5 transition-all group">
              <h3 className="text-xl font-bold mb-4 font-outfit tracking-tight group-hover:text-[#007AFF] transition-colors flex items-center gap-4">
                <span className="text-[#007AFF]">?</span> {item.q}
              </h3>
              <p className="text-white/50 leading-relaxed text-sm">{item.a}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 glass-panel border-[#007AFF]/30 border-2 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h4 className="text-xl font-bold mb-2 font-outfit uppercase tracking-tighter">{t('gitbook.title')}</h4>
            <p className="text-white/40 text-sm">{t('gitbook.desc')}</p>
          </div>
          <a href="https://gitbook.wefi.co/" target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded-full bg-[#007AFF] text-white text-sm font-bold uppercase tracking-widest transition-all shadow-blue-glow">{t('gitbook.btn')}</a>
        </div>
      </div>
    </div>
  );
}
