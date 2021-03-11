const profileModel = require("../models/profileSchema");
module.exports = {
  name: "erase",
  aliases: [],
  permissions: ["ADMINISTRATOR"],
  description: "erases coins from a player",
  async execute(message, args, cmd, client, discord, profileData) {
    if (message.member.id != "564353701003657216") return message.channel.send(`LMAO YOU REALLY TRIED REMOVING SOMEONE COINS`);
    if (!args.length) return message.channel.send("You need to mention a player to remove their coins");
    const amount = args[1];
    const target = message.mentions.users.first();
    if (!target) return message.channel.send("That user does not exist");

    if (amount % 1 != 0 || amount <= 0) return message.channel.send("Remove amount must be a whole number");

    try {
      const targetData = await profileModel.findOne({ userID: target.id });
      if (!targetData) return message.channel.send(`This user doens't exist in the db`);

      await profileModel.findOneAndUpdate(
        {
          userID: target.id,
        },
        {
          $inc: {
            coins: -amount,
          },
        }
      );

      return message.channel.send(`There are subtracted ${amount}coins of ${target}`);
    } catch (err) {
      console.log(err);
    }
  },
};


