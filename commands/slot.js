const slotItems = ["🍇", "🍉", "🍌", "🍎", "🍒"];
const { MessageEmbed } = require('discord.js');  
const profileModel = require("../models/profileSchema");

module.exports = {
  
        name:"slots",
        aliases: ["sl", "slot"],
        category: "economy",
        description: "Slot game | 9x - rare | 3x - common",
        usage: "<amount>",
        accessableby: "everyone"
    ,
    async execute(message, args, cmd, client, discord, profileData){

    let user = message.author;
    let moneydb = profileData.coins
    let money = parseInt(args[0]);
    let win = false;

    let moneymore = new MessageEmbed()
    .setColor("RED")
    .setDescription(`❌ You are betting more than you have`);

    let moneyhelp = new MessageEmbed()
    .setColor("RED")
    .setDescription(`❌ Specify an amount`); 

    if (!money) return message.channel.send(moneyhelp);
    if (money > moneydb) return message.channel.send(moneymore);

    let number = []
    for (let i = 0; i < 3; i++) { number[i] = Math.floor(Math.random() * slotItems.length); }

    if (number[0] == number[1] && number[1] == number[2])  { 
        money *= 5
        win = true;
    } else if (number[0] == number[1] || number[0] == number[2] || number[1] == number[2]) { 
        money *= 2
        win = true;
    }
    if (win) {
        let slotsEmbed1 = new MessageEmbed()
            .setDescription(`${slotItems[number[0]]} | ${slotItems[number[1]]} | ${slotItems[number[2]]}\n\nYou won ${money} coins`)
            .setColor("GREEN")
        message.channel.send(slotsEmbed1)
        await profileModel.findOneAndUpdate(
        {
          userID: user.id,
        },
        {
          $inc: {
            coins: money,
          },
        }
      );
    } else {
        let slotsEmbed = new MessageEmbed()
            .setDescription(`${slotItems[number[0]]} | ${slotItems[number[1]]} | ${slotItems[number[2]]}\n\nYou lost ${money} coins`)
            .setColor("RED")
        message.channel.send(slotsEmbed)
        await profileModel.findOneAndUpdate(
            {
              userID: user.id,
            },
            {
              $inc: {
                coins: -money,
              },
            }
          );
    }

}
}