const profileModel = require("../models/profileSchema");

module.exports = {
  name: "warns_reset",
  alliases: ["warnsreset", "warnreset"],
  description: "Reset warnings of mentioned person",
  async execute(message, args, cmd, client, discord, profileData) {
    if (!message.member.hasPermission("ADMINISTRATOR")) {
      return message.channel.send(
        "You should have admin perms to use this command"
      );
    }

    const user = message.mentions.members.first();
    if (!user) {
      return message.channel.send("Please mention the person whose warning you want to reset");
    }

    if (message.mentions.users.first().bot) {
      return message.channel.send("Bot are not allowed to have warnings");
    }

    if (message.author.id === user.id) {
      return message.channel.send("You are not allowed to reset your own warnings");
    }
    const user1 = await profileModel.findOne({ userID: message.author.id });


      {
        await profileModel.findOneAndUpdate(
            {
              userID: user.id,
            },
            {
              $set: {
                warns: 0,
              },
            }
          );
    user.send(
      `All your warnings are reseted by ${message.author.username} from ${message.guild.name}`
    );
    await message.channel.send(
      `Reseted all warnings of ${message.mentions.users.first().username}`
    );
  }
}};