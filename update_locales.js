const fs = require('fs');
const path = require('path');

const localesDir = path.join(__dirname, 'src/locales');

const en = JSON.parse(fs.readFileSync(path.join(localesDir, 'en.json')));
const ru = JSON.parse(fs.readFileSync(path.join(localesDir, 'ru.json')));
const de = JSON.parse(fs.readFileSync(path.join(localesDir, 'de.json')));
const he = JSON.parse(fs.readFileSync(path.join(localesDir, 'he.json')));

const additionsEn = {
  HomePage: {
    ...en.HomePage,
    stats: {
      users: 'Users',
      volume: 'Monthly Volume',
      jurisdictions: 'Jurisdictions',
      nodes: 'Operational Nodes'
    },
    narrative: {
      title: 'Onchain Solvency',
      quote: '"WeFi is not just another bank; it\\'s a protocol for trust. By moving the internal ledger to WeChain, we eliminate human error and fraud."',
      role: 'Chairman of WeFi'
    },
    buttons: {
      ecosystem: 'Explore Ecosystem',
      docs: 'Read Technical Docs'
    }
  },
  AboutPage: {
    ...en.AboutPage,
    proofOfSolvency: {
      title: 'Proof of Solvency',
      desc: 'Real-time public auditing ensures that every dollar in the ecosystem is accounted for on WeChain. WeFi is not a traditional bank taking fractional reserves; all fiat is backed securely and verified.'
    },
    pioneers: {
      title: 'Led by Crypto Pioneers',
      desc: 'WeFi is built by veterans from Tether, Wise, Bitpanda, Binance, and Visa. This isn\\'t our first breakthrough. But it might be yours. Your crypto, your rules: earn, spend, and grow without limits.',
      btn: 'Meet The Founders'
    },
    trust: 'TRUST MATHEMATICS',
    timeline: {
      phase: 'Phase: Episode 3',
      reach: 'Merchant Reach',
      architecture: 'MPC Protocol Architecture'
    }
  },
  ContactPage: {
    title: 'Get in Touch',
    desc: 'Join the future of finance. Reach out to our global team for partnerships or support.',
    form: {
      name: 'Name',
      namePlaceholder: 'Your Name',
      email: 'Email',
      emailPlaceholder: 'email@address.com',
      message: 'Message',
      messagePlaceholder: 'How can we help?',
      send: 'Send Message'
    },
    socials: {
      email: 'Email',
      twitter: 'Twitter / X',
      telegram: 'Telegram',
      joinCommunity: 'Join Community'
    }
  },
  BlogPage: {
    title: 'Latest Insights',
    readArticle: 'Read Article +',
    posts: [
      { title: 'Episode 3: The Dawn of Onchain Banking', date: 'April 2026', category: 'Ecosystem' },
      { title: 'Understanding MPC: Why Seed Phrases are Obsolete', date: 'March 2026', category: 'Technology' },
      { title: 'WeFi Roadmap: Scaling Global Liquidity', date: 'February 2026', category: 'Vision' }
    ]
  },
  PlatformPage: {
    title: 'Banking Redefined',
    desc: 'Modular financial services built on the world\\'s first decentralized onchain stack.',
    products: {
      unified: {
        title: 'Unified Balance',
        desc: 'Powered by DEONE - Onchain Banking. Money Beyond Borders. Blends the reliability of banking with the limitless possibilities of blockchain.'
      },
      cards: {
        title: 'WeFi Visa Cards',
        desc: 'Spend your digital assets worldwide with automated tax-compliant conversion to local fiat.'
      },
      credit: {
        title: 'Decentralized Credit',
        desc: 'Borrow against your assets instantly without credit checks, powered by Onchain Accounting.'
      },
      mining: {
        title: 'Cloud-Based Mining',
        desc: 'Participate in the WFI emission protocol via efficient cloud-hosted mining modules (CBM-20).'
      }
    },
    learnMore: 'Learn More',
    mpc: {
      tag: 'Institutional Grade',
      title: 'MPC Security Architecture',
      desc: 'WeFi completely eliminates seed-phrase vulnerability by utilizing Multi-Party Computation. Your keys are split into shards, requiring a 2-of-2 signature between your device and the secure WeChain vault.',
      point1: 'No Single Point of Failure',
      point2: 'Encrypted Shards Rotation'
    }
  },
  EcosystemPage: {
    ...en.EcosystemPage,
    governance: {
      title: 'Deterministic Governance',
      desc: 'The emission protocol is fixed by code. Every 730 days, the rewards per block halven, ensuring long-term scarcity and commitment to the 1 Billion WFI cap.',
      cycle: 'Cycle',
      mining: 'Mining',
      limit: 'Limit'
    }
  },
  KnowledgePage: {
    title: 'Knowledge Base',
    faqs: [
      { q: 'What is a Deobank?', a: 'A Deobank is a decentralized onchain bank that operates through smart contracts on the WeChain blockchain, ensuring transparency and user sovereignty.' },
      { q: 'How does MPC security work?', a: 'Multi-Party Computation (MPC) splits your private key into fragments (User Share and Platform Share). Transactions require 2-of-2 signatures, preventing single points of failure.' },
      { q: 'What is the utility of $WFI?', a: 'The $WFI token is the native asset of WeChain. It\\'s used to pay network fees, participate in staking rewards, and govern the protocol\\'s evolution.' },
      { q: 'How do I generate Energy?', a: 'Energy is automatically generated by holding $WFI in your wallet. It can be used to offset transaction fees and purchase CBM units.' }
    ],
    gitbook: {
      title: 'GitBook Documentation',
      desc: 'Deep dive into technical architecture and protocol specifications.',
      btn: 'Open GitBook'
    }
  },
  Navigation: {
    ...en.Navigation,
    connect: 'Connect'
  },
  Footer: {
    description: 'The first decentralized onchain bank connecting the stability of traditional finance with the freedom of Web3.',
    platform: 'Platform',
    resources: 'Resources',
    connect: 'Connect',
    copyright: '© 2026 WeFi Deobank Network. All rights reserved.',
    deployment: 'WeFi Global Infrastructure'
  }
};

const additionsRu = {
  HomePage: { ...ru.HomePage, stats: { users: 'Пользователи', volume: 'Объем в месяц', jurisdictions: 'Юрисдикции', nodes: 'Рабочие узлы' }, narrative: { title: 'Ончейн платежеспособность', quote: '"WeFi — это не просто банк; это протокол доверия. Перенося внутреннюю бухгалтерию в WeChain, мы исключаем человеческий фактор и мошенничество."', role: 'Председатель WeFi' }, buttons: { ecosystem: 'Изучить экосистему', docs: 'Техническая документация' } },
  AboutPage: { ...ru.AboutPage, proofOfSolvency: { title: 'Доказательство платежеспособности', desc: 'Публичный аудит в реальном времени гарантирует, что каждый доллар учтен в WeChain. WeFi — не традиционный банк с частичным резервированием; весь фиат надежно обеспечен и верифицирован.' }, pioneers: { title: 'Создано криптопионерами', desc: 'WeFi создана ветеранами Tether, Wise, Bitpanda, Binance и Visa. Это не первый наш прорыв. Но он может стать вашим. Ваша крипта — ваши правила: зарабатывайте, тратьте и растите без ограничений.', btn: 'Познакомьтесь с основателями' }, trust: 'МАТЕМАТИКА ДОВЕРИЯ', timeline: { phase: 'Фаза: Эпизод 3', reach: 'Охват мерчантов', architecture: 'Архитектура протокола MPC' } },
  ContactPage: { title: 'Свяжитесь с нами', desc: 'Присоединяйтесь к будущему финансов. Напишите нашей глобальной команде для партнерства или поддержки.', form: { name: 'Имя', namePlaceholder: 'Ваше имя', email: 'Email', emailPlaceholder: 'email@address.com', message: 'Сообщение', messagePlaceholder: 'Чем мы можем помочь?', send: 'Отправить сообщение' }, socials: { email: 'Email', twitter: 'Twitter / X', telegram: 'Telegram', joinCommunity: 'Присоединиться к сообществу' } },
  BlogPage: { title: 'Последние статьи', readArticle: 'Читать статью +', posts: [ { title: 'Эпизод 3: Рассвет ончейн-банкинга', date: 'Апрель 2026', category: 'Экосистема' }, { title: 'Понимание MPC: Почему seed-фразы устарели', date: 'Март 2026', category: 'Технологии' }, { title: 'Дорожная карта WeFi: Масштабирование ликвидности', date: 'Февраль 2026', category: 'Видение' } ] },
  PlatformPage: { title: 'Банкинг переосмыслен', desc: 'Модульные финансовые сервисы на базе первого в мире децентрализованного ончейн-стека.', products: { unified: { title: 'Единый баланс', desc: 'Создано на базе DEONE - Ончейн-банкинг. Деньги без границ. Объединяет надежность банкинга с безграничными возможностями блокчейна.' }, cards: { title: 'Visa карты WeFi', desc: 'Тратьте цифровые активы по всему миру с автоматической легальной конвертацией в фиат.' }, credit: { title: 'Децентрализованый кредит', desc: 'Мгновенные займы под залог активов без проверки кредитной истории, благодаря ончейн-бухгалтерии.' }, mining: { title: 'Облачный майнинг', desc: 'Участвуйте в протоколе эмиссии WFI через эффективные модули облачного майнинга (CBM-20).' } }, learnMore: 'Узнать больше', mpc: { tag: 'Институциональный уровень', title: 'Архитектура безопасности MPC', desc: 'WeFi полностью устраняет уязвимость seed-фраз с помощью многосторонних вычислений (MPC). Запросы требуют подписей 2-из-2 между вашим устройством и хранилищем WeChain.', point1: 'Нет единой точки отказа', point2: 'Ротация зашифрованных шардов' } },
  EcosystemPage: { ...ru.EcosystemPage, governance: { title: 'Детерминированное управление', desc: 'Протокол эмиссии фиксирован в коде. Каждые 730 дней вознаграждение за блок уменьшается вдвое для контроля инфляции.', cycle: 'Цикл', mining: 'Майнинг', limit: 'Лимит' } },
  KnowledgePage: { title: 'База знаний', faqs: [ { q: 'Что такое Деобанк?', a: 'Деобанк — это децентрализованный ончейн-банк, работающий через смарт-контракты в сети WeChain.' }, { q: 'Как работает безопасность MPC?', a: 'MPC разделяет ваш приватный ключ на фрагменты. Для транзакции нужны подписи 2-из-2, что предотвращает потерю средств.' }, { q: 'В чем полезность $WFI?', a: '$WFI — это нативный актив WeChain, используемый для комиссий, стейкинга и управления эволюцией протокола.' }, { q: 'Как сгенерировать Энергию?', a: 'Энергия генерируется автоматически при хранении $WFI в вашем кошельке. Она нужна для оплаты комиссий и участия в майнинге CBM.' } ], gitbook: { title: 'Документация GitBook', desc: 'Глубокое погружение в техническую архитектуру и спецификации протокола.', btn: 'Открыть GitBook' } },
  Navigation: { ...ru.Navigation, connect: 'Подключиться' },
  Footer: { description: 'Первый децентрализованный ончейн-банк, соединяющий стабильность традиционных финансов со свободой Web3.', platform: 'Платформа', resources: 'Ресурсы', connect: 'Контакты', copyright: '© 2026 WeFi Deobank Network. Все права защищены.', deployment: 'Глобальная инфраструктура WeFi' }
};

const additionsDe = {
  HomePage: { ...de.HomePage, stats: { users: 'Nutzer', volume: 'Monatliches Volumen', jurisdictions: 'Rechtsordnungen', nodes: 'Betriebsknoten' }, narrative: { title: 'Onchain Solvenz', quote: '"WeFi ist nicht nur eine weitere Bank; es ist ein Protokoll für Vertrauen. Indem wir das interne Kontobuch auf WeChain verlagern, eliminieren wir menschliche Fehler und Betrug."', role: 'Vorsitzender von WeFi' }, buttons: { ecosystem: 'Ökosystem erkunden', docs: 'Technische Dokumentation' } },
  AboutPage: { ...de.AboutPage, proofOfSolvency: { title: 'Solvenznachweis', desc: 'Echtzeit-Prüfung garantiert, dass jeder Dollar in WeChain verbucht ist. WeFi ist keine traditionelle Bank mit Teilreservesystem; alles FIAT ist sicher gedeckt.' }, pioneers: { title: 'Geführt von Krypto-Pionieren', desc: 'WeFi wurde von Veteranen von Tether, Wise, Binance und Visa aufgebaut. Dies ist nicht unser erster Durchbruch. Aber es könnte Ihrer sein.', btn: 'Gründer kennenlernen' }, trust: 'VERTRAUEN IN MATHEMATIK', timeline: { phase: 'Phase: Episode 3', reach: 'Händler-Reichweite', architecture: 'MPC Protokoll Architektur' } },
  ContactPage: { title: 'Kontakt', desc: 'Schließen Sie sich der Zukunft der Finanzen an. Kontaktieren Sie unser globales Team für Partnerschaften.', form: { name: 'Name', namePlaceholder: 'Ihr Name', email: 'E-Mail', emailPlaceholder: 'email@adresse.com', message: 'Nachricht', messagePlaceholder: 'Wie können wir helfen?', send: 'Nachricht Senden' }, socials: { email: 'E-Mail', twitter: 'Twitter / X', telegram: 'Telegram', joinCommunity: 'Community beitreten' } },
  BlogPage: { title: 'Neueste Erkenntnisse', readArticle: 'Artikel lesen +', posts: [ { title: 'Episode 3: Der Beginn des Onchain-Bankings', date: 'April 2026', category: 'Ökosystem' }, { title: 'Mcp verstehen: Warum Seed Phrases veraltet sind', date: 'März 2026', category: 'Technologie' }, { title: 'WeFi Roadmap: Skalierung der globalen Liquidität', date: 'Februar 2026', category: 'Vision' } ] },
  PlatformPage: { title: 'Banking neu definiert', desc: 'Modulare Finanzdienstleistungen, basierend auf dem weltweit ersten dezentralisierten Onchain-Stack.', products: { unified: { title: 'Vereinheitlichter Saldo', desc: 'Angetrieben durch DEONE - Onchain Banking. Grenzenloses Geld. Verbindet die Zuverlässigkeit von Banken mit der grenzenlosen Freiheit der Blockchain.' }, cards: { title: 'WeFi Visa Karten', desc: 'Geben Sie Ihre digitalen Vermögenswerte weltweit mit sofortiger Umwandlung in Fiat aus.' }, credit: { title: 'Dezentraler Kredit', desc: 'Leihen Sie sich sofort Geld gegen Ihre Vermögenswerte ohne Bonitätsprüfungen.' }, mining: { title: 'Cloud-basiertes Mining', desc: 'Nehmen Sie am WFI-Emissionsprotokoll durch Cloud-hosted Mining teil (CBM-20).' } }, learnMore: 'Mehr erfahren', mpc: { tag: 'Institutionelles Niveau', title: 'MPC Sicherheit Architektur', desc: 'WeFi eliminiert Seed-Phrasen vollständig durch Multi-Party Computation. Transaktionen erfordern eine 2-aus-2-Signatur.', point1: 'Kein Single Point of Failure', point2: 'Verschlüsselte Shards-Rotation' } },
  EcosystemPage: { ...de.EcosystemPage, governance: { title: 'Deterministische Governance', desc: 'Das Emissionsprotokoll ist vertraglich festgelegt. Alle 730 Tage wird die Blockbelohnung halbiert.', cycle: 'Zyklus', mining: 'Mining', limit: 'Limit' } },
  KnowledgePage: { title: 'Wissensdatenbank', faqs: [ { q: 'Was ist eine Deobank?', a: 'Eine Deobank ist eine dezentralisierte Onchain-Bank, die über Smart Contracts arbeitet.' }, { q: 'Wie funktioniert MPC-Sicherheit?', a: 'MPC teilt Ihren privaten Schlüssel in Fragmente auf und erfordert eine 2-aus-2 Signatur für Transaktionen.' }, { q: 'Was ist der Nutzen von $WFI?', a: 'Der Token wird verwendet, um Netzwerkgebühren zu bezahlen, Staking-Belohnungen zu erhalten und das Protokoll zu verwalten.' }, { q: 'Wie generiere ich Energie?', a: 'Energie wird automatisch generiert, indem man $WFI in der Wallet hält.' } ], gitbook: { title: 'GitBook Dokumentation', desc: 'Tiefer Einblick in die technische Architektur und Protokollspezifikationen.', btn: 'GitBook Öffnen' } },
  Navigation: { ...de.Navigation, connect: 'Verbinden' },
  Footer: { description: 'Die erste Onchain-Bank, die die Stabilität des traditionellen Finanzwesens mit der Freiheit von Web3 verbindet.', platform: 'Plattform', resources: 'Ressourcen', connect: 'Verbinden', copyright: '© 2026 WeFi Deobank Network. Alle Rechte vorbehalten.', deployment: 'WeFi Globale Infrastruktur' }
};

const additionsHe = {
  HomePage: { ...he.HomePage, stats: { users: 'משתמשים', volume: 'נפח חודשי', jurisdictions: 'תחומי שיפוט', nodes: 'צמתים פעילים' }, narrative: { title: 'סולבנטיות Onchain', quote: '"WeFi הוא לא סתם עוד בנק; זהו פרוטוקול לאמון. ע\\"י העברת ספר החשבונות ל-WeChain, אנו מונעים הונאות וטעויות אנוש."', role: 'יו"ר WeFi' }, buttons: { ecosystem: 'חקור את המערכת', docs: 'קרא מסמכים טכניים' } },
  AboutPage: { ...he.AboutPage, proofOfSolvency: { title: 'הוכחת סולבנטיות', desc: 'ביקורת ציבורית בזמן אמת מבטיחה שכל דולר רשום ב-WeChain. הבנק אינו מתבסס על רזרבה חלקית כמו בנק מסורתי; כל פיאט מגובה ומאומת במלואו.' }, pioneers: { title: 'בניהול חלוצי קריפטו', desc: 'WeFi הוקם ע"י יוצאי Tether, Binance, Wise, ו-Visa. הדור הבא של הפיננסים מעניק לך שליטה מוחלטת בכסף שלך.', btn: 'פגוש את המייסדים' }, trust: 'להאמין במתמטיקה', timeline: { phase: 'שלב: פרק 3', reach: 'תפוצת סוחרים', architecture: 'ארכיטקטורת פרוטוקול MPC' } },
  ContactPage: { title: 'צור קשר', desc: 'הצטרפו לעתיד הפיננסי. צרו קשר עם הצוות הגלובלי שלנו לשותפויות או תמיכה.', form: { name: 'שם', namePlaceholder: 'השם שלך', email: 'אימייל', emailPlaceholder: 'email@address.com', message: 'הודעה', messagePlaceholder: 'איך נוכל לעזור?', send: 'שלח הודעה' }, socials: { email: 'אימייל', twitter: 'טוויטר / X', telegram: 'טלגרם', joinCommunity: 'הצטרף לקהילה' } },
  BlogPage: { title: 'תובנות אחרונות', readArticle: 'קרא מאמר +', posts: [ { title: 'פרק 3: שחר בנקאות ה-Onchain', date: 'אפריל 2026', category: 'מערכת' }, { title: 'הבנת MPC: למה ביטויי Seed כבר לא רלוונטיים', date: 'מרץ 2026', category: 'טכנולוגיה' }, { title: 'מפת הדרכים של WeFi: הרחבת הנזילות הגלובלית', date: 'פברואר 2026', category: 'חזון' } ] },
  PlatformPage: { title: 'הגדרת הבנקאות מחדש', desc: 'שירותים פיננסיים מודולריים הבנויים על תשתית ה-Onchain המבוזרת הראשונה בעולם.', products: { unified: { title: 'יתרה מאוחדת', desc: 'מופעל ע"י DEONE - בנקאות על הבלוקצ\\'יין. כסף ללא גבולות. שילוב בין אמינות בנקאית לאפשרויות בלתי מוגבלות.' }, cards: { title: 'כרטיסי WeFi Visa', desc: 'הוצא את נכסי הקריפטו שלך ברחבי העולם עם המרה אוטומטית למטבע מקומי.' }, credit: { title: 'אשראי מבוזר', desc: 'קבל הלוואות מיידיות כנגד הנכסים שלך ללא בדיקת אשראי, מופעל ע"י חשבונאות על הרשת.' }, mining: { title: 'כרייה בענן', desc: 'השתתף בפרוטוקול הנפקת WFI באמצעות כרייה מבוססת ענן (CBM-20).' } }, learnMore: 'למידע נוסף', mpc: { tag: 'רמה מוסדית', title: 'ארכיטקטורת אבטחה מבוססת MPC', desc: 'WeFi מבטל לחלוטין את הפגיעות הקשורה ל-Seed phrases. נדרשת חתימה מבוזרת כדי לאשר פעולות.', point1: 'אין נקודת כשל בודדת', point2: 'החלפת רסיסים מוצפנים בצורה מאובטחת' } },
  EcosystemPage: { ...he.EcosystemPage, governance: { title: 'ממשל דטרמיניסטי', desc: 'פרוטוקול ההנפקה נקבע בקוד. בכל 730 ימים, תגמול הבלוקים נחצה בכדי להבטיח את הגבלת ה-1 מיליארד.', cycle: 'מחזור כרייה', mining: 'כרייה', limit: 'גבול מקסימלי' } },
  KnowledgePage: { title: 'מאגר המידע', faqs: [ { q: 'מה זה דאובנק?', a: 'דאובנק (Deobank) הוא בנק מבוזר לחלוטין הפועל ע"י חוזים חכמים.' }, { q: 'כיצד פועלת אבטחת MPC?', a: 'חתימת MPC מפצלת את המפתח הפרטי שלך לחתיכות שונות כך שלעולם לא קיים מפתח פרטי אחד בסכנה.' }, { q: 'מה השימוש של מטבע $WFI?', a: 'המטבע משמש בעיקר לתשלום עמלות ברשת וסטייקינג.' }, { q: 'איך מייצרים אנרגיה?', a: 'אנרגיה מיוצרת באופן אוטומטי ע"י החזקת WFI בארנק.' } ], gitbook: { title: 'מדריכי GitBook', desc: 'צלילה טכנית עמוקה לארכיטקטורת הבלוקצ\\'יין והצפנת פרוטוקולים.', btn: 'פתח את GitBook' } },
  Navigation: { ...he.Navigation, connect: 'התחבר' },
  Footer: { description: 'הבנק המבוזר הראשון המקשר בין יציבות הפיננסים המסורתיים והחופש של עולם ה-Web3.', platform: 'פלטפורמה', resources: 'משאבים', connect: 'צור קשר', copyright: '© 2026 רשת הבנקאות WeFi. כל הזכויות שמורות.', deployment: 'WeFi תשתית גלובלית' }
};

fs.writeFileSync(path.join(localesDir, 'en.json'), JSON.stringify(Object.assign(en, additionsEn), null, 2));
fs.writeFileSync(path.join(localesDir, 'ru.json'), JSON.stringify(Object.assign(ru, additionsRu), null, 2));
fs.writeFileSync(path.join(localesDir, 'de.json'), JSON.stringify(Object.assign(de, additionsDe), null, 2));
fs.writeFileSync(path.join(localesDir, 'he.json'), JSON.stringify(Object.assign(he, additionsHe), null, 2));
console.log('Language files updated perfectly!');
