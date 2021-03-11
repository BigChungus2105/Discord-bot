const Discord = require("discord.js"),
ms_2 = require('parse-ms');
const profileModel = require("../models/profileSchema");

module.exports = {
    name: "crime",
    aliases: [],
    permissions: [],
    cooldown: 30,
    description: "beg for coins",
    async execute(message, args, cmd, client, discord, profileData) {
   
  let user = message.author;

  let timeout = 60000;
  
    let author = profileData.coins
        
    if (author < 1000) {
          return message.channel.send('<a:false:737764891657633814> You need at least 1000$ to commit a crime')
      }
 else {
       
        const result = [
          "WINWIN",
          "LOOSELOOSE"
        ] 

     let awnser = result[Math.floor(Math.random() * result.length)];
        
     if (awnser === "LOOSELOOSE") {
          
      message.channel.send("You were caught and had to pay `$1000` to stay out of jail");
         
      await profileModel.findOneAndUpdate(
        {
          userID: message.author.id,
        },
        {
          $inc: {
            coins: 1000,
          },
        }
      );
         
   
        } else {
            const random = Math.floor(Math.random() * 1500) + 500;
    let embed = new Discord.MessageEmbed()
      .setAuthor(message.author.tag, message.author.avatarURL())
      .setTitle("You Have Just Commited A Crime!")
      .addField("Amount Robbed:", random)
      .setColor("RANDOM")
      .setTimestamp();
      message.channel.send(embed)
      await profileModel.findOneAndUpdate(
        {
          userID: message.author.id,
        },
        {
          $inc: {
            warns: random,
          },
        }
      );

      }
    } 
  }
}