const fs = require('fs');
const path = require('path');

const localesDir = path.join(__dirname, 'src/locales');

['en', 'ru', 'de', 'he'].forEach(lang => {
  const filePath = path.join(localesDir, `${lang}.json`);
  let data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  if (data.TeamPage && data.TeamPage.members && data.TeamPage.members.evgeniy) {
    data.TeamPage.members.evgeniy.name = lang === 'he' ? "משה אוסטרובסקי" : lang === 'ru' ? "Моше Островский" : "Moshé Ostrovsky";
  }

  // Ensure AboutPage or HomePage has Reeve Collins properly set if we add narrative back
  // I will just save the name change for now.
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
});
console.log("Renamed to Moshe");
