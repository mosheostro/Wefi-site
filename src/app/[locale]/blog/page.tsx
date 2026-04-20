'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';
import { blogPosts } from '@/data/blog';

export default function BlogPage() {
  const t = useTranslations('Navigation'); // Keeping existing layout t-hook 
  const locale = useLocale();

  return (
    <div className="container mx-auto px-4 py-24 min-h-[80vh]">
      <div className="mb-16 md:flex justify-between items-end">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#007AFF]/30 bg-[#007AFF]/10 text-[#007AFF] text-[10px] font-bold uppercase tracking-wider mb-6 shadow-blue-glow">
            WeFi Knowledge Engine
          </div>
          <h1 className="text-4xl md:text-6xl font-bold font-outfit uppercase tracking-tighter text-center md:text-left">Latest Insights</h1>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <Link href={`/blog/${post.slug}`} key={post.slug} className="group flex flex-col glass-panel border-white/5 overflow-hidden hover:border-[#007AFF]/50 transition-all duration-300">
            <div className="aspect-[16/10] bg-[#121212] flex items-center justify-center relative overflow-hidden">
              <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100" />
              <div className="absolute top-4 left-4 px-3 py-1 bg-[#121212]/90 backdrop-blur-md border border-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest text-[#007AFF] shadow-lg">
                {post.category}
              </div>
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <div className="text-xs text-white/40 uppercase tracking-widest font-bold mb-3">{post.date}</div>
              <h3 className="text-2xl font-bold font-outfit tracking-tight leading-snug group-hover:text-[#007AFF] transition-colors mb-4 line-clamp-3">
                {post.title[locale] || post.title['en']}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed mb-8 flex-1 line-clamp-3">
                {post.excerpt[locale] || post.excerpt['en']}
              </p>
              <div className="inline-flex items-center text-[10px] font-bold uppercase tracking-[0.2em] text-[#007AFF] group-hover:text-white transition-colors">
                Read Article <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
