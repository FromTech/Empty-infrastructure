const { Discord, Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

const config = require('./config.js');
const chalk = require('chalk')

function loadUtils(names) {
  names.forEach(name => {
      require(`./util/${name}.js`)(Discord, client, config);
  });
};
loadUtils(["commands", "events"]);

client.login(config.token).then(() => {
  console.log(chalk.blueBright("[API]"), `Token doğrulandı, ${client.user.tag} olarak giriş yapılıyor...`);
}).catch(() => {
  console.error(chalk.blueBright("[API]"), `Token hatalı, kontrol ediniz...`);
});
