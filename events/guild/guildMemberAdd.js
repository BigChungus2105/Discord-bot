const profileModel = require("../../models/profileSchema");

module.exports = async (client, discord, member) => {  
    profileData = await profileModel.findOne({ userID: message.author.id });
    if (!profileData) {
  let profile = await profileModel.create({
    userID: member.id,
    serverID: member.guild.id,
    coins: 1000,
    bank: 0,
    warns: 0,
    messages: 0,
    level: 0,
    items: 0,
  });
  profile.save();
}};
