'use client';

import { useTranslations } from 'next-intl';
import { Link, usePathname, useRouter } from '@/i18n/routing';

export default function Navigation({ currentLocale }: { currentLocale: string }) {
  const t = useTranslations('Navigation');
  const pathname = usePathname();
  const router = useRouter();

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    router.replace(pathname, { locale: e.target.value as any });
  };

  const navLinks = [
    { href: '/', label: t('home') },
    { href: '/about', label: t('about') },
    { href: '/ecosystem', label: t('ecosystem') },
    { href: '/platform', label: t('products') },
    { href: '/team', label: t('team') },
    { href: '/visual-flow', label: t('visualFlow') },
    { href: '/knowledge', label: t('knowledge') },
    { href: '/blog', label: t('blog') },
    { href: '/contact', label: t('contact') },
  ];

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-2xl bg-[#121212]/70 border-b border-white/5 py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#007AFF] via-[#8A2BE2] to-[#007AFF] flex items-center justify-center font-bold text-lg font-outfit border border-white/10 group-hover:scale-110 transition-transform">W</div>
          <div className="flex flex-col">
            <span className="font-bold text-lg tracking-tighter uppercase font-outfit leading-none">WeFi</span>
            <span className="text-[8px] uppercase tracking-[0.3em] font-bold text-[#007AFF]">Deobank</span>
          </div>
        </Link>
        
        <nav className="hidden xl:flex gap-10">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href}
              className={`text-[10px] font-bold uppercase tracking-[0.2em] transition-all hover:text-[#007AFF] ${pathname === link.href ? 'text-[#007AFF]' : 'text-white/40'}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-6">
          <select 
            value={currentLocale} 
            onChange={handleLanguageChange}
            className="bg-white/5 border border-white/10 text-white text-[10px] font-bold uppercase tracking-widest rounded-lg px-3 py-1.5 outline-none focus:border-[#007AFF] transition-all"
          >
            <option value="en" className="bg-[#121212]">EN</option>
            <option value="ru" className="bg-[#121212]">RU</option>
            <option value="he" className="bg-[#121212]">HE</option>
            <option value="de" className="bg-[#121212]">DE</option>
          </select>

          <a 
            href="https://app.wefi.co/register?ref=ejcfezll1m"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center justify-center px-6 py-2.5 rounded-full bg-[#007AFF] text-white text-[10px] font-bold uppercase tracking-widest transition-all hover:bg-[#0056b3] shadow-blue-glow"
          >
            {t('connect')}
          </a>
        </div>
      </div>
    </header>
  );
}
