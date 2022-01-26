const chalk = require('chalk');

module.exports = (Discord, client, config) => {
    require('fs').readdir('./events', (err, files) => {
        if (files) {
            let loadedEvents = 0;
            console.log(chalk.redBright("[SYSTEAM]"), `${files.length} adet event bulundu, yükleniyor...`);
            files.forEach(file => {
                loadedEvents++
                require(`../events/${file}`)(Discord, client, config);
                if (loadedEvents == files.length) console.log(chalk.redBright("[SYSTEAM]"), `Eventler başarıyla yüklendi! (${files.length})`);
            });
        };
    });
  };