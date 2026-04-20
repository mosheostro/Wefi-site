import { notFound } from 'next/navigation';
import { blogPosts } from '@/data/blog';
import { Link } from '@/i18n/routing';

// This function pre-generates paths at build time (optional but good for static stability)
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string, locale: string }> }) {
  const { slug, locale } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  // Define a simple parser for the lightweight markdown we generated
  const formatContent = (text: string) => {
    return text.split('\n\n').map((block, idx) => {
      const trimmed = block.trim();
      if (!trimmed) return null;
      if (trimmed.startsWith('### ')) {
        return <h3 key={idx} className="text-3xl font-bold font-outfit text-white mt-12 mb-6 tracking-tighter">{trimmed.replace('### ', '')}</h3>;
      }
      return <p key={idx} className="text-white/70 text-lg leading-relaxed mb-6 font-medium">{trimmed}</p>;
    });
  };

  return (
    <article className="min-h-screen bg-[#0a0a0a]">
      {/* Blog Header Image */}
      <div className="w-full h-[40vh] md:h-[60vh] relative">
        <img src={post.image} alt={post.title[locale] || post.title['en']} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent"></div>
        
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16">
          <div className="container mx-auto max-w-4xl">
            <div className="inline-flex items-center px-4 py-1.5 bg-[#007AFF]/20 border border-[#007AFF] rounded-full text-[10px] font-bold uppercase tracking-widest text-[#007AFF] mb-6 backdrop-blur-md shadow-blue-glow">
              {post.category}
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-outfit tracking-tighter text-white mb-6 leading-[1.1]">
              {post.title[locale] || post.title['en']}
            </h1>
            <div className="flex items-center gap-6 text-sm text-white/50 font-bold uppercase tracking-widest">
              <span>{post.date}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>
              <span className="text-[#8A2BE2]">{post.slug}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Content Body */}
      <div className="container mx-auto max-w-4xl px-4 py-16 md:py-24">
        
        {/* Source Reference Header */}
        <div className="mb-12 p-6 glass-panel border border-white/5 bg-white/5 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4">
           <div className="text-xs text-white/40 uppercase tracking-widest font-bold">
             Information Verified via Official WeFi & External Analysis
           </div>
           <a href={post.source.includes('https') ? post.source.split(' ')[0] : '#'} target="_blank" rel="noopener noreferrer" className="text-xs font-bold uppercase tracking-[0.2em] text-[#007AFF] hover:text-white transition-colors flex items-center gap-2">
              View Source ↗
           </a>
        </div>

        {/* Formatted Text Content */}
        <div className="prose prose-invert prose-lg max-w-none prose-p:text-white/60 prose-headings:font-outfit">
           {formatContent(post.content[locale] || post.content['en'])}
        </div>

        {/* Internal Cross Links */}
        <div className="mt-24 pt-12 border-t border-white/10">
           <h3 className="text-2xl font-bold font-outfit text-white mb-6">Explore More Knowledge</h3>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             {blogPosts.filter(p => p.slug !== slug).map(other => (
               <Link key={other.slug} href={`/blog/${other.slug}`} className="p-4 glass-panel hover:bg-white/5 transition-colors border border-white/5 rounded-xl group flex items-center gap-4">
                 <img src={other.image} className="w-16 h-16 rounded-lg object-cover opacity-80 group-hover:opacity-100" alt={other.title['en']} />
                 <div>
                   <div className="text-[9px] uppercase tracking-widest text-[#007AFF] font-bold mb-1">{other.category}</div>
                   <div className="text-sm font-bold text-white/80 group-hover:text-[#007AFF] transition-colors line-clamp-2">{other.title[locale] || other.title['en']}</div>
                 </div>
               </Link>
             ))}
           </div>
        </div>

        {/* Back Navigation */}
        <div className="mt-12 pt-12 border-t border-white/10 flex justify-center">
           <Link href="/blog" className="px-10 py-4 rounded-full border border-white/20 hover:bg-white/5 text-white font-bold tracking-widest uppercase text-xs transition-all shadow-lg flex items-center gap-3">
              ← Return to Knowledge Engine
           </Link>
        </div>
      </div>
    </article>
  );
}
