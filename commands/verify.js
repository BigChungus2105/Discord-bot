const profileModel = require("../models/profileSchema");
module.exports = {
  name: "verify",
  aliases: [],
  permissions: [],
  description: "beg for coins",
  async execute(message, args, cmd, client, discord, profileData) {
    let verification = message.guild.roles.cache.find(role => role.name === 'verification');
    const randomNumber = 2500;
    if(message.member.roles.cache.has(verification)) return
    const response = await profileModel.findOneAndUpdate(
      {
        userID: message.author.id,
      },
      {
        $inc: {
          coins: -randomNumber,
        },
      }
    );
  },
};

