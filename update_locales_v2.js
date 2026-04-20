const fs = require('fs');
const path = require('path');

const localesDir = path.join(__dirname, 'src/locales');

['en', 'ru', 'de', 'he'].forEach(lang => {
  const filePath = path.join(localesDir, `${lang}.json`);
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  // 1. Update Reeve Collins role
  if (data.HomePage && data.HomePage.narrative) {
    if (lang === 'en') data.HomePage.narrative.role = "Chairman of WeFi and Co-Creator of USDT (Tether)";
    if (lang === 'ru') data.HomePage.narrative.role = "Председатель WeFi и Со-создатель USDT (Tether)";
    if (lang === 'de') data.HomePage.narrative.role = "Vorsitzender von WeFi und Mitbegründer von USDT (Tether)";
    if (lang === 'he') data.HomePage.narrative.role = "יו\"ר WeFi ושותף ליצירת USDT (Tether)";
  }

  // 2. Add Contributor to TeamPage
  if (data.TeamPage && data.TeamPage.members) {
    data.TeamPage.members.evgeniy = {
      name: lang === 'ru' ? "Евгений" : lang === 'he' ? "יבגני" : "Evgeniy",
      role: lang === 'ru' ? "Участник экосистемы" : lang === 'de' ? "Ökosystem-Teilnehmer" : lang === 'he' ? "משתתף באקוסיסטם" : "Ecosystem Participant",
      bio: lang === 'ru' ? "Участник проекта и активный контрибьютер экосистемы WeFi." : lang === 'de' ? "Projektteilnehmer und aktiver Mitwirkender am WeFi-Ökosystem." : lang === 'he' ? "משתתף בפרויקט ותורם פעיל לאקוסיסטם של WeFi." : "Project participant and active contributor to the WeFi ecosystem."
    };
  }

  // 3. Update HomePage Hero
  if (data.HomePage && data.HomePage.hero) {
    if (lang === 'en') {
      data.HomePage.hero.title = "The First On-Chain Deobank Connecting Traditional Finance and Web3";
    } else if (lang === 'ru') {
      data.HomePage.hero.title = "Первый ончейн-деобанк, соединяющий традиционные финансы и Web3";
    } else if (lang === 'de') {
      data.HomePage.hero.title = "Die erste On-Chain-Deobank, die traditionelle Finanzen und Web3 verbindet";
    } else if (lang === 'he') {
      data.HomePage.hero.title = "הדאובנק הראשון על הבלוקצ'יין המקשר בין פיננסים מסורתיים ל-Web3";
    }
  }

  // 4. Ecosystem Supporters Section
  if (data.EcosystemPage) {
    data.EcosystemPage.supporters = {
      title: lang === 'en' ? "Ecosystem Supporters & Contributors" : lang === 'ru' ? "Сторонники экосистемы и Участники" : lang === 'de' ? "Ökosystem-Unterstützer & Mitwirkende" : "תומכי האקוסיסטם ומשתתפים"
    };
  }

  // 5. Visual Flow Text
  if (data.HomePage) {
    data.HomePage.visualFlow = {
      step1: lang === 'en' ? "Traditional Finance" : lang === 'ru' ? "Традиционные финансы" : lang === 'de' ? "Traditionelles Finanzwesen" : "פיננסים מסורתיים",
      step2: lang === 'en' ? "Crypto / WeChain" : lang === 'ru' ? "Крипто / WeChain" : lang === 'de' ? "Krypto / WeChain" : "קריפטו / WeChain",
      step3: lang === 'en' ? "WeFi Deobank" : lang === 'ru' ? "WeFi Деобанк" : lang === 'de' ? "WeFi Deobank" : "WeFi דאובנק",
      step4: lang === 'en' ? "Global Payments" : lang === 'ru' ? "Глобальные платежи" : lang === 'de' ? "Globale Zahlungen" : "תשלומים גלובליים"
    };
    data.HomePage.credibility = {
      title: lang === 'en' ? "Backed by Visionaries & Ecosystem Pioneers" : lang === 'ru' ? "Поддерживается визионерами и пионерами экосистемы" : lang === 'de' ? "Unterstützt von Visionären und Ökosystem-Pionieren" : "מגובה על ידי אנשי חזון וחלוצי האקוסיסטם"
    }
  }

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
});

console.log("Localizations updated successfully!");
