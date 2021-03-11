const Discord = require("discord.js")
const profileModel = require("../models/profileSchema");
module.exports = {
  name: "reset",
  aliases: [],
  permissions: ["ADMINISTRATOR"],
  description: "give a player some coins",
  async execute(message, args, cmd, client, discord, profileData) {
    if (message.member.id != "564353701003657216") return message.channel.send(`LMAO YOU TRIED RESETING SOMEONE'S COINS`);
    if (!args.length) return message.channel.send("You need to mention a player to reset their coins");
    const target = message.mentions.users.first();
    if (!target) return message.channel.send("That user does not exist");

    try {
      const targetData = await profileModel.findOne({ userID: target.id });
      if (!targetData) return message.channel.send(`This user doens't exist in the db`);

      await profileModel.findOneAndUpdate(
        {
          userID: target.id,
        },  
        {
          $set: {
            coins: 1000,
            bank: 0,
          },
        }
      );

      const newEmbed = new Discord.MessageEmbed()
        .setColor('GREEN')
        .setTitle('Reset')
        .setDescription(`The coins of ${target} have been reset`)   
        message.channel.send(newEmbed);
    } catch (err) {
      console.log(err);
    }
  },
};
