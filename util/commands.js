const chalk = require('chalk')
const { Collection } = require('discord.js')

module.exports = (Discord, client, config) => {
  client.commands = new Collection();
  client.aliases = new Collection();

  require('fs').readdir('./commands', (err, files) => {
      if (files) {
          let loadedCommands = 0;
          console.log(chalk.redBright("[SYSTEAM]"), `${files.length} adet komut bulundu, yükleniyor...`);
          files.forEach(file => {
              loadedCommands++
              let command = require(`${process.cwd()}/${'./commands'}/${file}`);

              client.commands.set(command.help.name, command);
              command.conf.aliases.forEach(alias => client.aliases.set(alias, command.help.name));
              if (loadedCommands == files.length) console.log(chalk.redBright("[SYSTEAM]"), `Komutlar başarıyla yüklendi! (${files.length})`);
          });
      };
  });
};
