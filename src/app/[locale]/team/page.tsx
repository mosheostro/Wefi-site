import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function TeamPage() {
  const t = useTranslations('TeamPage');

  const members = [
    { 
      key: 'reeve',
      image: '/Reeve.avif'
    },
    { 
      key: 'maksym',
      image: '/Maxym.avif'
    },
    { 
      key: 'roman',
      image: '/Roman.avif'
    },
    {
      key: 'khalid',
      image: '/Khaled Suleiman.bmp'
    },
    {
      key: 'michael',
      image: '/Michael Batuev.bmp'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-24">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">{t('title')}</h1>
        <p className="text-xl text-white/60">{t('subtitle')}</p>
      </div>

      <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#007AFF] text-center mb-8">{t('subtitle') || "Board of Directors & Execution"}</div>
      <div className="grid md:grid-cols-3 gap-8 mb-24">
        {members.map((member) => (
          <div key={member.key} className="group relative glass-panel p-6 hover:border-[#007AFF] transition-all duration-300">
            <div className="relative w-32 h-32 mx-auto mb-6 rounded-2xl overflow-hidden border-2 border-white/10 group-hover:border-[#007AFF] transition-all">
              <img 
                src={member.image} 
                alt={t(`members.${member.key}.name`)}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold text-center mb-1 font-outfit">{t(`members.${member.key}.name`)}</h3>
            <p className="text-[#007AFF] text-center font-medium mb-4 uppercase text-[10px] tracking-widest">{t(`members.${member.key}.role`)}</p>
            <p className="text-white/60 text-center text-sm leading-relaxed">{t(`members.${member.key}.bio`)}</p>
          </div>
        ))}
      </div>

      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent my-16"></div>

      <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#8A2BE2] text-center mb-12">Ecosystem Contributors</div>
      <div className="flex justify-center">
         <div className="group relative glass-panel p-6 w-full max-w-sm hover:border-[#8A2BE2] transition-all duration-300">
           <div className="relative w-32 h-32 mx-auto mb-6 rounded-full bg-slate-100 overflow-hidden border-4 border-white/10 group-hover:border-[#8A2BE2] transition-all shadow-lg shadow-[#8A2BE2]/20 flex items-center justify-center">
             <img 
               src="/evgeniy.png" 
               alt={t(`members.evgeniy.name`)}
               className="w-[110%] h-[110%] max-w-none object-cover object-top -translate-x-[3%] translate-y-[8%] scale-90"
             />
           </div>
           <h3 className="text-2xl font-bold text-center mb-1 font-outfit">{t(`members.evgeniy.name`)}</h3>
           <p className="text-[#8A2BE2] text-center font-medium mb-4 uppercase text-[10px] tracking-widest">{t(`members.evgeniy.role`)}</p>
           <p className="text-white/60 text-center text-sm leading-relaxed">{t(`members.evgeniy.bio`)}</p>
         </div>
      </div>
    </div>
  );
}
