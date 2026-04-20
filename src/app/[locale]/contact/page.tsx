'use client';

import { useState, FormEvent } from 'react';
import { useTranslations } from 'next-intl';

const CONTACT_EMAIL = 'moshe.wefi1@gmail.com';

export default function ContactPage() {
  const t = useTranslations('ContactPage');

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [notRobot, setNotRobot] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    if (!notRobot) {
      setError('Please confirm you are not a robot.');
      return;
    }
    if (!name.trim() || !email.trim() || !message.trim()) {
      setError('Please fill in all fields.');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setError('Please enter a valid email address.');
      return;
    }

    const subject = encodeURIComponent(`WeFi Contact — ${name.trim()}`);
    const body = encodeURIComponent(
      `Name: ${name.trim()}\nEmail: ${email.trim()}\n\nMessage:\n${message.trim()}`
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="container mx-auto px-4 py-24 flex flex-col items-center justify-center min-h-[80vh]">
      <div className="max-w-2xl w-full">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-outfit uppercase tracking-tighter">{t('title')}</h1>
          <p className="text-xl text-white/40 max-w-lg mx-auto leading-relaxed">{t('desc')}</p>
        </div>

        <div className="glass-panel p-10 mb-12 border-white/5 bg-gradient-to-b from-white/5 to-transparent">
          <form className="space-y-6" onSubmit={handleSubmit} noValidate>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] uppercase font-bold tracking-widest text-white/40 px-2">{t('form.name')}</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-[#007AFF] outline-none transition-all placeholder:text-white/10"
                  placeholder={t('form.namePlaceholder')}
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase font-bold tracking-widest text-white/40 px-2">{t('form.email')}</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-[#007AFF] outline-none transition-all placeholder:text-white/10"
                  placeholder={t('form.emailPlaceholder')}
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase font-bold tracking-widest text-white/40 px-2">{t('form.message')}</label>
              <textarea
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-[#007AFF] outline-none transition-all placeholder:text-white/10 resize-none"
                placeholder={t('form.messagePlaceholder')}
              ></textarea>
            </div>

            {/* Lightweight "I'm not a robot" check */}
            <label className="flex items-center gap-3 select-none cursor-pointer px-2">
              <input
                type="checkbox"
                checked={notRobot}
                onChange={(e) => setNotRobot(e.target.checked)}
                className="w-5 h-5 accent-[#007AFF] rounded border border-white/20 bg-white/5 cursor-pointer"
              />
              <span className="text-sm text-white/70">I&apos;m not a robot</span>
            </label>

            {error && (
              <div
                role="alert"
                className="text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3"
              >
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={!notRobot}
              className="w-full py-5 rounded-2xl bg-[#007AFF] text-white font-bold uppercase tracking-[0.2em] shadow-blue-glow hover:bg-[#0056b3] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {t('form.send')}
            </button>
          </form>
        </div>

        <div className="flex justify-center gap-12 flex-wrap">
          <a href={`mailto:${CONTACT_EMAIL}`} className="flex flex-col items-center gap-2 group cursor-pointer hover:scale-105 transition-transform">
            <div className="text-[#007AFF] text-2xl group-hover:bg-[#007AFF]/10 p-4 rounded-full transition-colors">📧</div>
            <div className="text-[10px] uppercase font-bold tracking-widest text-white/30">{t('socials.email')}</div>
            <div className="text-sm font-bold text-white group-hover:text-[#007AFF] transition-colors">{CONTACT_EMAIL}</div>
          </a>
          <a href="https://x.com/wefi_official" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 group cursor-pointer hover:scale-105 transition-transform">
            <div className="text-[#007AFF] text-2xl group-hover:bg-[#007AFF]/10 p-4 rounded-full transition-colors">🐦</div>
            <div className="text-[10px] uppercase font-bold tracking-widest text-white/30">{t('socials.twitter')}</div>
            <div className="text-sm font-bold text-white group-hover:text-[#007AFF] transition-colors">@wefi_official</div>
          </a>
          <a href="https://t.me/+MwwbZbsjFEVjNmVi" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 group cursor-pointer hover:scale-105 transition-transform">
            <div className="text-[#007AFF] text-2xl group-hover:bg-[#007AFF]/10 p-4 rounded-full transition-colors">📱</div>
            <div className="text-[10px] uppercase font-bold tracking-widest text-white/30">{t('socials.telegram')}</div>
            <div className="text-sm font-bold text-white group-hover:text-[#007AFF] transition-colors">{t('socials.joinCommunity')}</div>
          </a>
        </div>
      </div>
    </div>
  );
}
