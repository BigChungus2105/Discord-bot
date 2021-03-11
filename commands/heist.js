const Discord = require("discord.js")
const profileModel = require("../models/profileSchema");
module.exports = {
  name: "heist",
  aliases: ["bankrob"],
  cooldown: 100,
  description: "give a player some coins",
  async execute(message, args, cmd, client, discord, profileData) {
    const target = message.mentions.users.first();
    const profile = await profileModel.findOne({ userID: target.id })
      const random1 = profile.bank/10
      const random2 = profile.bank/5
    const random3 = Math.floor(Math.random() * random1) + random2;
    const random4 = Math.floor(Math.round(random3))
    const random5 = profileData.bank
    const random = profile.bank + profile.coins 
    const random6 = random/100
    const random7 = random/10
    const random9 = Math.floor(Math.round(random6))
    if (!args.length) return message.channel.send("You need to mention a player to rob their coins");
    if (!target) return message.channel.send("That user does not exist");
    if (target.id === message.author.id) return message.channel.send('Did you just.... rob yourself?') 
    if(random < random7) return message.channel.send(`You must have at least 10 percent of the coins of ${target}`)
    if(profile.bank < 20000) return message.channel.send(`Not worth it man... ${target} doesn't even have 20000 coins in their bank`)
    if(random < 5000) return message.channel.send('You must have atleast 5000 coins to bankrob someone')
    const result = [
        "WINWIN",
        "LOOSELOOSE",
        "LOOSELOOSE",
        "LOOSELOOSE",
        "LOOSELOOSE",
        "LOOSELOOSE",
        "LOOSELOOSE",
        "LOOSELOOSE",
        "LOOSELOOSE",
        "LOOSELOOSE",
        "LOOSELOOSE",
        "LOOSELOOSE",
        "LOOSELOOSE",
        "LOOSELOOSE",
        "LOOSELOOSE",
        "LOOSELOOSE",
        "LOOSELOOSE",
        "LOOSELOOSE",
        "LOOSELOOSE",
        "LOOSELOOSE",
        "LOOSELOOSE",
        "LOOSELOOSE",
        "LOOSELOOSE"

      ] 

      let awnser = result[Math.floor(Math.random() * result.length)];
      const targetData = await profileModel.findOne({ userID: target.id });
      if (!targetData) return message.channel.send(`This user doens't exist in the db`);
      if (awnser === "LOOSELOOSE") {
        const msg1 = await message.channel.send(`Robbing ${target}`);
        setTimeout(() => {
          msg1.edit(`:detective::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::bank:`);
        }, 2000); setTimeout(() => {
          msg1.edit(`:black_large_square::black_large_square::detective::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::bank:`);
        }, 4000);
        setTimeout(() => {
          msg1.edit(':black_large_square::black_large_square::black_large_square::black_large_square::detective::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::bank:');
        }, 6000);
        setTimeout(() => {
          msg1.edit(`:black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::detective::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::bank:`);
        }, 8000);
        setTimeout(() => {
          msg1.edit(':black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::detective::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::bank:');
        }, 10000);
        setTimeout(() => {
          msg1.edit(':black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::detective::black_large_square::black_large_square::black_large_square::bank:');
          }, 12000);
        setTimeout(() => {
          msg1.edit(`:black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::detective: :police_officer::bank:`);
        }, 14000);
setTimeout(() => {
  msg1.edit(`You were caught by the police:police_officer: and had to pay ${random9} coins to stay out of jail`);
         }, await 17000);
        

      await profileModel.findOneAndUpdate(
        {
          userID: message.author.id,
        },  
        {
          $inc: {
            coins: -random9,
          },
        }
      );
    }
    if (awnser === "WINWIN") {
        const msg1 = await message.channel.send(`Robbing ${target}`);
        setTimeout(() => {
          msg1.edit(`:detective::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::bank:`);
        }, 2000); setTimeout(() => {
          msg1.edit(`:black_large_square::black_large_square::detective::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::bank:`);
        }, 4000);
        setTimeout(() => {
          msg1.edit(':black_large_square::black_large_square::black_large_square::black_large_square::detective::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::bank:');
        }, 6000);
        setTimeout(() => {
          msg1.edit(`:black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::detective::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::bank:`);
        }, 8000);
        setTimeout(() => {
          msg1.edit(':black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::detective::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::bank:');
        }, 10000);
        setTimeout(() => {
          msg1.edit(':black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::detective::black_large_square::black_large_square::black_large_square::bank:');
          }, 12000);
        setTimeout(() => {
          msg1.edit(`:black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::detective::black_large_square::bank:`);
        }, 14000);
        setTimeout(() => {
            msg1.edit(`:black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::detective::bank:`);
          }, 16000);
setTimeout(() => {
  msg1.edit(`https://tenor.com/view/you-crazy-son-of-abitch-you-did-it-jurassic-park-ian-malcolm-gif-16042346
OMFG YOU DID IT YOU JUST ROBBED ${random4} FROM ${target}`);
         }, await 19000);
    if (awnser === "WINWIN") {
      await profileModel.findOneAndUpdate(
        {
          userID: target.id,
        },  
        {
          $inc: {
            bank: -random4,
          },
        }
      );
      await profileModel.findOneAndUpdate(
        {
          userID: message.author.id,
        },  
        {
          $inc: {
            bank: random4,
          },
        }
      );
    }}
  }};
