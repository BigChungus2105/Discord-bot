const superagent = require("snekfetch");
const Discord = require('discord.js');

module.exports = {
  name: "dog",
  alliases: ["doggo"],
  category: "fun",
description: "Sends a random dog image",
usage: "[command]",
async execute(message, args, client){
//command
superagent.get('https://nekos.life/api/v2/img/woof')
    .end((err, response) => {
  const lewdembed = new Discord.MessageEmbed()
  .setTitle("Dog")
  .setImage(response.body.url)
  .setColor(`RANDOM`)
  .setURL(response.body.url);
message.channel.send(lewdembed);
})
}
};