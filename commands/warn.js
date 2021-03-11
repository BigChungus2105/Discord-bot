const { MessageEmbed } = require("discord.js");
const profileModel = require("../models/profileSchema");

module.exports = {
  name: "warn",
  description: "Warn anyone who do not obey the rules",
  async execute(message, args, cmd, client, discord, profileData) {
    if (!message.member.hasPermission("ADMINISTRATOR")) {
      return message.channel.send(
        "You should have admin perms to use this command!"
      );
    }

    const user = message.mentions.members.first();

    if (!user) {
      return message.channel.send(
        "Please Mention the person to who you want to warn - warn @mention <reaosn>"
      );
    }

    if (message.mentions.users.first().bot) {
      return message.channel.send("You can not warn bots");
    }

    if (message.author.id === user.id) {
      return message.channel.send("You can not warn yourself");
    }

    if (user.id === message.guild.owner.id) {
      return message.channel.send(
        "You jerk, how you can warn server owner -_-"
      );
    }

    const reason = args.slice(1).join(" ");

    if (!reason) {
      return message.channel.send(
        "Please provide reason to warn - warn @mention <reason>"
      );
    }

    let warnings = profileData.warns
    const amount = 1
    if (warnings === null) {
        await profileModel.findOneAndUpdate(
            {
              userID: user.id,
            },
            {
              $inc: {
                warns: amount,
              },
            }
          );
      user.send(
        `You have been warned in **${message.guild.name}** for ${reason}`
      );
      await message.channel.send(
        `You warned **${
          message.mentions.users.first().username
        }** for ${reason}`
      );
    } else if(warnings !== null) {
      
        await profileModel.findOneAndUpdate(
            {
              userID: user.id,
            },
            {
              $inc: {
                warns: amount,
              },
            }
          );
      
      user.send(`You have been warned in **${message.guild.name}** for ${reason}`);
      
      await message.channel.send(`You warned **${message.mentions.users.first().username}** for ${reason}`);
      
      message.delete
      
    }
  }
};