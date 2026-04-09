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

      <div className="grid md:grid-cols-3 gap-8">
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
            <p className="text-[#007AFF] text-center font-medium mb-4 uppercase text-xs tracking-widest">{t(`members.${member.key}.role`)}</p>
            <p className="text-white/60 text-center text-sm leading-relaxed">{t(`members.${member.key}.bio`)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
