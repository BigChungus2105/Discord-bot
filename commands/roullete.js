const { MessageEmbed } = require("discord.js");
const profileModel = require("../models/profileSchema");

module.exports = {
   
        name: "roulette",
        aliases: ["roul"],
        category: "economy",
        description: "Bet a colour to win or lose",
        usage: "[colour]<amount>",
        accessableby: "everyone"
    ,
  async execute(message, args, cmd, client, discord, profileData){
        let prefix = "-"
      
        let user = message.author;

        function isOdd(num) {
            if ((num % 2) == 0) return false;
            else if ((num % 2) == 1) return true;
        }

        let colour = args[0];
        let money = parseInt(args[1]);
        let moneydb = profileData.coins

        let random = Math.floor((Math.random() * 10));

        let moneyhelp = new MessageEmbed()
            .setColor("RED")
            .setDescription(`❌ Specify an amount to gamble | ${prefix}roulette <color> <amount>`);

        let moneymore = new MessageEmbed()
            .setColor("RED")
            .setDescription(`❌ You are betting more than you have`);

        let colorbad = new MessageEmbed()
            .setColor("RED")
            .setDescription(`❌ Specify a color | Red [1.5x] (normal) Black [2x] (hard) Green [10x](rare)`);

        if (!colour) return message.channel.send(colorbad);
        colour = colour.toLowerCase()
        if (!money) return message.channel.send(moneyhelp);
        if (money > moneydb) return message.channel.send(moneymore);

        if (colour == "b" || colour.includes("black")) colour = 0;
        else if (colour == "r" || colour.includes("red")) colour = 1;
        else if (colour == "g" || colour.includes("green")) colour = 2;
        else return message.channel.send(colorbad);

        if (random == 1 && colour == 2) { // Green
            money *= 10
            await profileModel.findOneAndUpdate(
                {
                  userID: message.author.id,
                },
                {
                  $inc: {
                    coins: money,
                  },
                }
              );
            let moneyEmbed1 = new MessageEmbed()
                .setColor("GREEN")
                .setDescription(`✅ You won ${money} coins\n\nMultiplier: 10x`);
            message.channel.send(moneyEmbed1)
        } else if (isOdd(random) && colour == 1) { // Red
            money = parseInt(money * 1.5)
            await profileModel.findOneAndUpdate(
                {
                  userID: message.author.id,
                },
                {
                  $inc: {
                    coins: money,
                  },
                }
              );
            let moneyEmbed2 = new MessageEmbed()
                .setColor("GREEN")
                .setDescription(`🔴 You won ${money} coins\n\nMultiplier: 1.5x`);
            message.channel.send(moneyEmbed2)
        } else if (!isOdd(random) && colour == 0) { // Black
            money = parseInt(money * 2)
            await profileModel.findOneAndUpdate(
                {
                  userID: message.author.id,
                },
                {
                  $inc: {
                    coins: money,
                  },
                }
              );
            let moneyEmbed3 = new MessageEmbed()
                .setColor("GREEN")
                .setDescription(`⬛ You won ${money} coins\n\nMultiplier: 2x`);
            message.channel.send(moneyEmbed3)
        } else { // Wrong
            await profileModel.findOneAndUpdate(
                {
                  userID: message.author.id,
                },
                {
                  $inc: {
                    coins: -money,
                  },
                }
              );
            let moneyEmbed4 = new MessageEmbed()
                .setColor("RED")
                .setDescription(`❌ You lost ${money} coins\n\nMultiplier: 0x`);
            message.channel.send(moneyEmbed4)
        }
    }
}