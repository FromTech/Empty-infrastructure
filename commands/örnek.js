const Discord = require("discord.js");

exports.run = async (client, message, args) => {

  const embed = new Discord.MessageEmbed()
  .setDescription(`test`);
  message.channel.send(embed)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: "yardım"
};