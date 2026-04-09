import { useTranslations } from 'next-intl';

export default function BlogPage() {
  const t = useTranslations('Navigation');

  const posts = [
    { title: "Episode 3: The Dawn of Onchain Banking", date: "April 2026", category: "Ecosystem" },
    { title: "Understanding MPC: Why Seed Phrases are Obsolete", date: "March 2026", category: "Technology" },
    { title: "WeFi Roadmap: Scaling Global Liquidity", date: "February 2026", category: "Vision" }
  ];

  return (
    <div className="container mx-auto px-4 py-24 min-h-[80vh]">
      <h1 className="text-4xl md:text-6xl font-bold mb-16 font-outfit uppercase tracking-tighter text-center md:text-left">Latest Insights</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {posts.map((post, idx) => (
          <div key={idx} className="glass-panel p-1 border-white/5 overflow-hidden group">
            <div className="aspect-[16/10] bg-gradient-to-br from-[#121212] via-[#007AFF]/10 to-[#121212] mb-6 flex items-center justify-center relative">
              <div className="text-4xl opacity-20 group-hover:opacity-40 transition-opacity">📰</div>
              <div className="absolute top-4 left-4 px-3 py-1 bg-[#121212]/80 border border-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest text-[#007AFF]">
                {post.category}
              </div>
            </div>
            <div className="p-6 pt-0">
              <div className="text-xs text-white/30 uppercase tracking-widest font-bold mb-2">{post.date}</div>
              <h3 className="text-xl font-bold font-outfit tracking-tight group-hover:text-[#007AFF] transition-all duration-300 leading-tight mb-8">
                {post.title}
              </h3>
              <button className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 group-hover:text-white transition-colors">Read Article +</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
