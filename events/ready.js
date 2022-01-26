const chalk = require('chalk')

module.exports = (Discord, client, config) => {
  client.on('ready', () => {
      console.log(chalk.greenBright("[READY]"), '' + client.user.tag + ' olarak oturum açıldı!');
      client.user.setStatus('idle');
      client.user.setActivity(`👷🏻 ${client.user.username} Bot Bakımdadır`, {
          type: 'LISTENING' //LISTENING, WATCHING, PLAYING, STREAMING
      })
  });
};