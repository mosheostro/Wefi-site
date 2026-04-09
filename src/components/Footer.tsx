import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

export default function Footer() {
  const t = useTranslations('Navigation');

  return (
    <footer className="w-full bg-[#121212] border-t border-white/5 py-16 mt-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#007AFF] via-[#8A2BE2] to-[#007AFF] flex items-center justify-center font-bold text-lg font-outfit border border-white/10 group-hover:scale-110 transition-transform">W</div>
              <div className="flex flex-col">
                <span className="font-bold text-lg tracking-tighter uppercase font-outfit leading-none">WeFi</span>
                <span className="text-[8px] uppercase tracking-[0.3em] font-bold text-[#007AFF]">Deobank</span>
              </div>
            </Link>
            <p className="text-white/30 text-xs leading-relaxed max-w-xs">
              The first decentralized onchain bank connecting the stability of traditional finance with the freedom of Web3.
            </p>
          </div>

          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#007AFF] mb-6">Platform</h4>
            <ul className="space-y-4">
              {['about', 'ecosystem', 'products', 'team'].map((key) => (
                <li key={key}>
                  <Link href={`/${key === 'products' ? 'platform' : key}`} className="text-xs text-white/50 hover:text-white transition-colors uppercase tracking-widest font-bold">
                    {t(key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#007AFF] mb-6">Resources</h4>
            <ul className="space-y-4">
              {['visualFlow', 'knowledge', 'blog', 'contact'].map((key) => (
                <li key={key}>
                  <Link href={`/${key === 'visualFlow' ? 'visual-flow' : key}`} className="text-xs text-white/50 hover:text-white transition-colors uppercase tracking-widest font-bold">
                    {t(key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#007AFF] mb-6">Connect</h4>
            <div className="flex gap-4">
              {['🐦', '📱', '📧', '👾'].map((icon, i) => (
                <div key={i} className="w-8 h-8 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center cursor-pointer hover:bg-white/10 transition-colors">
                  {icon}
                </div>
              ))}
            </div>
            <div className="mt-8">
              <div className="text-[8px] text-white/20 uppercase tracking-[0.2em] font-bold mb-2">Episode 3 Deployment</div>
              <div className="text-[10px] text-white/40 font-bold">© 2026 WeFi Deobank Network. All rights reserved.</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
