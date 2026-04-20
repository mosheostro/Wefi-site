const fs = require('fs');
const path = require('path');

const localesDir = path.join(__dirname, 'src/locales');

['en', 'ru', 'de', 'he'].forEach(lang => {
  const filePath = path.join(localesDir, `${lang}.json`);
  let data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  if (!data.TeamPage) data.TeamPage = { members: {} };
  if (!data.TeamPage.members) data.TeamPage.members = {};

  const name = lang === 'he' ? "משה אוסטרובסקי" : lang === 'ru' ? "Моше Островский" : "Moshé Ostrovsky";
  
  let role, bio;
  if (lang === 'en') {
    role = "Ecosystem Participant";
    bio = "Project participant and active contributor to the WeFi ecosystem infrastructure and UI development.";
  } else if (lang === 'ru') {
    role = "Участник экосистемы";
    bio = "Активный участник проекта, вносящий вклад в инфраструктуру экосистемы WeFi и разработку пользовательских интерфейсов.";
  } else if (lang === 'de') {
    role = "Ökosystem-Teilnehmer";
    bio = "Projektteilnehmer und aktiver Mitwirkender an der WeFi-Ökosystem-Infrastruktur sowie der UI-Entwicklung.";
  } else if (lang === 'he') {
    role = "משתתף באקוסיסטם";
    bio = "משתתף בפרויקט ותורם פעיל לפיתוח תשתיות האקוסיסטם וממשק המשתמש של WeFi.";
  }

  data.TeamPage.members.evgeniy = { name, role, bio };
  
  if (!data.HomePage) data.HomePage = {};
  if (!data.HomePage.narrative) data.HomePage.narrative = {};
  data.HomePage.narrative.mosheRole = role;

  if (!data.EcosystemPage) data.EcosystemPage = {};
  data.EcosystemPage.moshe = { name, role, bio };

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
});
console.log("Locales updated completely");
