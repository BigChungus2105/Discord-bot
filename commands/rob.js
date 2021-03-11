const Discord = require("discord.js")
const profileModel = require("../models/profileSchema");
module.exports = {
  name: "rob",
  aliases: ["steal"],
  cooldown: 120,
  description: "give a player some coins",
  async execute(message, args, cmd, client, discord, profileData) {
    const target = message.mentions.users.first();
    const profile = await profileModel.findOne({ userID: target.id }) 
    const random10 = profile.coins/25
    const random1 = Math.floor(Math.round(random10))
    const random20 = profile.coins/5
    const random2 = Math.floor(Math.round(random20))
    const random30 = profileData.coins/50 + profileData.bank/50
    const random3 = Math.floor(Math.round(random30))
    const random = Math.floor(Math.random() * random1) + random2;
    if (!args.length) return message.channel.send("You need to mention a player to rob their coins");
    if (!target) return message.channel.send("That user does not exist");
    if (target.id === message.author.id) return message.channel.send('Did you just.... rob yourself?')
    if(profile.coins < 2000) return message.channel.send(`Not worth it man... ${target} doesn't even have 2000 coins in their wallet`)
    if(profileData.coins < 2000) return message.channel.send('You must have 2000 coins in your wallet to rob someone')
    const result = [
      "WINWIN",
      "LOOSELOOSE",
      "LOOSELOOSE",
      "LOOSELOOSE"
    ] 
    let awnser = result[Math.floor(Math.random() * result.length)];
      const targetData = await profileModel.findOne({ userID: target.id });
      if (!targetData) return message.channel.send(`This user doens't exist in the db`);
      if (awnser === "LOOSELOOSE") {
        message.channel.send(`You just failed your robbery and lost ${random3} coins`);
      await profileModel.findOneAndUpdate(
        {
          userID: message.author.id,
        },  
        {
          $inc: {
            coins: -random3,
          },
        }
      );
      }
      if (awnser === "WINWIN") { 
        await profileModel.findOneAndUpdate(
          {
            userID: target.id,
          },  
          {
            $inc: {
              coins: random,
            },
          }
        );
      await profileModel.findOneAndUpdate(
        {
          userID: message.author.id,
        },  
        {
          $inc: {
            coins: random,
          },
        }
      );
        message.channel.send(`You just robbed ${random} from ${target}`);
  }},
};
