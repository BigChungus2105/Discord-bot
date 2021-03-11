const Discord = require("discord.js")
const profileModel = require("../models/profileSchema");

module.exports = {
    name: "work",
    aliases: [],
    permissions: [],
    cooldown: 30,
    description: "beg for coins",
    async execute(message, args, cmd, client, discord, profileData) {
   
  let user = message.author;
  
    let author = profileData.coins
        
    if (author < 500) {
          return message.channel.send(`You are broke and your boss doesn't trust you`)
      }
 else {
       
        const result = [
          "WINWIN",
          "WINWIN",
          "WINWIN",
          "WINWIN",
          "LOOSELOOSE"
        ] 

     let awnser = result[Math.floor(Math.random() * result.length)];
        
     if (awnser === "LOOSELOOSE") {
          
      message.channel.send("You broke company property and had to pay 500 coins");
         
      await profileModel.findOneAndUpdate(
        {
          userID: message.author.id,
        },
        {
          $inc: {
            coins: -500,
          },
        }
      );
         
   
        } else {
            const random = Math.floor(Math.random() * 500) + 1;
      message.channel.send(`You worked and got ${random} coins!`)
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

      }
    } 
  }
}