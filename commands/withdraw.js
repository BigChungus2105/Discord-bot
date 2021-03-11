const { MessageEmbed } = require("discord.js");
const profileModel = require("../models/profileSchema");
const { execute } = require("./rob");

module.exports = {
    
        name: "withdraw",
        aliases: ["wd"],
        category: "economy",
        description: "Withdraws Money From Bank",
        usage: "<amount>",
    
    async execute(message, args, cmd, client, discord, profileData){
        let user = message.author;

        let member2 = profileData.bank

        if (args.join(' ').toLocaleLowerCase() == 'max'  || args[0] == 'all') {
            let money = profileData.bank
            let embed = new MessageEmbed()
              .setColor("RED")
              .setDescription(`❌**You Do Not Have Any Money To Withdraw!**`)
            if (!member2) return message.channel.send(embed)
            const profilemodel1 = await profileModel.findOneAndUpdate(
              {
                userID: message.author.id,
              },
              {
                $inc: {
                  coins: member2,
                  bank: -member2,
                },
              }
            );
            let embed5 = new MessageEmbed()
                .setColor("GREEN")
                .setDescription(`✅ You have withdrawn ${member2} coins from your bank`); 
            message.channel.send(embed5)

        } else {

            let embed2 = new MessageEmbed() 
                .setColor("RED")
                .setDescription(`❌ Specify an amount to withdraw!`);

            if (!args[0]) {
                return message.channel.send(embed2)
            }
            let embed6 = new MessageEmbed()
                .setColor("RED")
                .setDescription(`❌ Your Amount Is Not A Number!`)

            if(isNaN(args[0])) {
                return message.channel.send(embed6)
            }
            let embed4 = new MessageEmbed()
                .setColor("RED")
                .setDescription(`❌ You don't have that much money in the bank!`);

            if (member2 < args[0]) {
                return message.channel.send(embed4)
            }

            let embed5 = new MessageEmbed()
                .setColor("GREEN")
                .setDescription(`✅ You have withdrawn ${args[0]} coins from your bank!`);

            message.channel.send(embed5)
            const amount = args[0]
            const profilemodel1 = await profileModel.findOneAndUpdate(
              {
                userID: message.author.id,
              },
              {
                $inc: {
                  coins: amount,
                  bank: -amount,
                },
              }
            );
        }
    }
}