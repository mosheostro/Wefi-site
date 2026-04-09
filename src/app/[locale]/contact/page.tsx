import { useTranslations } from 'next-intl';

export default function ContactPage() {
  const t = useTranslations('Navigation');

  return (
    <div className="container mx-auto px-4 py-24 flex flex-col items-center justify-center min-h-[80vh]">
      <div className="max-w-2xl w-full">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-outfit uppercase tracking-tighter">Get in Touch</h1>
          <p className="text-xl text-white/40 max-w-lg mx-auto leading-relaxed">Join the future of finance. Reach out to our global team for partnerships or support.</p>
        </div>

        <div className="glass-panel p-10 mb-12 border-white/5 bg-gradient-to-b from-white/5 to-transparent">
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] uppercase font-bold tracking-widest text-white/40 px-2">Name</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-[#007AFF] outline-none transition-all placeholder:text-white/10" placeholder="Your Name" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase font-bold tracking-widest text-white/40 px-2">Email</label>
                <input type="email" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-[#007AFF] outline-none transition-all placeholder:text-white/10" placeholder="email@address.com" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase font-bold tracking-widest text-white/40 px-2">Message</label>
              <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-[#007AFF] outline-none transition-all placeholder:text-white/10 resize-none" placeholder="How can we help?"></textarea>
            </div>
            <button className="w-full py-5 rounded-2xl bg-[#007AFF] text-white font-bold uppercase tracking-[0.2em] shadow-blue-glow hover:bg-[#0056b3] transition-all">Send Message</button>
          </form>
        </div>

        <div className="flex justify-center gap-12 flex-wrap">
          <a href="mailto:support@wefi.co" className="flex flex-col items-center gap-2 group cursor-pointer hover:scale-105 transition-transform">
            <div className="text-[#007AFF] text-2xl group-hover:bg-[#007AFF]/10 p-4 rounded-full transition-colors">📧</div>
            <div className="text-[10px] uppercase font-bold tracking-widest text-white/30">Email</div>
            <div className="text-sm font-bold text-white group-hover:text-[#007AFF] transition-colors">support@wefi.co</div>
          </a>
          <a href="https://x.com/wefi_official" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 group cursor-pointer hover:scale-105 transition-transform">
            <div className="text-[#007AFF] text-2xl group-hover:bg-[#007AFF]/10 p-4 rounded-full transition-colors">🐦</div>
            <div className="text-[10px] uppercase font-bold tracking-widest text-white/30">Twitter / X</div>
            <div className="text-sm font-bold text-white group-hover:text-[#007AFF] transition-colors">@wefi_official</div>
          </a>
          <a href="https://t.me/+MwwbZbsjFEVjNmVi" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 group cursor-pointer hover:scale-105 transition-transform">
            <div className="text-[#007AFF] text-2xl group-hover:bg-[#007AFF]/10 p-4 rounded-full transition-colors">📱</div>
            <div className="text-[10px] uppercase font-bold tracking-widest text-white/30">Telegram</div>
            <div className="text-sm font-bold text-white group-hover:text-[#007AFF] transition-colors">Join Community</div>
          </a>
        </div>
      </div>
    </div>
  );
}
