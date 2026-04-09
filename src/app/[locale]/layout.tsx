import { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import '@/app/globals.css';

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <NextIntlClientProvider locale={locale} messages={require(`../../locales/${locale}.json`)}>
      <html lang={locale} dir={locale === 'he' ? 'rtl' : 'ltr'}>
        <body className="bg-[#121212] text-white antialiased min-h-screen flex flex-col">
          <Navigation currentLocale={locale} />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </body>
      </html>
    </NextIntlClientProvider>
  );
}
