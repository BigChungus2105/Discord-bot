const { MessageEmbed } = require("discord.js");
const profileModel = require("../models/profileSchema");

module.exports = {
    
        name: "deposit",
        aliases: ["dep"],
        category: "economy",
        description: "Deposits money to bank",
        usage: "<amount>",
        accessableby: "everyone"
    ,
    async execute(message, args, cmd, client, discord, profileData) {

        let user = message.author;

        let member = profileData.coins
        const amount = profileData.coins

        if (args[0] == 'max' || args[0] == 'all') {
            const profilemodel1 = await profileModel.findOneAndUpdate(
                {
                  userID: message.author.id,
                },
                {
                  $inc: {
                    coins: -amount,
                    bank: amount,
                  },
                }
              );

            let embedbank = new MessageEmbed()
                .setColor('RED')
                .setDescription("❌ You don't have any money to deposit")

            if (!member) return message.channel.send(embedbank)

            let sembed = new MessageEmbed()
                .setColor("GREEN")
                .setDescription(`✅ You have deposited ${member} your coins into your bank`);
            message.channel.send(sembed)

        } else {

            let embed2 = new MessageEmbed()
                .setColor("RED")
                .setDescription(`❌ Specify an amount to deposit`);

            if (!args[0]) {
                return message.channel.send(embed2)
                    .catch(err => message.channel.send(err.message))
            }
            let embed6 = new MessageEmbed()
                .setColor("RED")
                .setDescription(`❌ Your Amount Is Not A Number!`)

            if(isNaN(args[0])) {
                return message.channel.send(embed6)
            
            }
            let embed4 = new MessageEmbed()
                .setColor("RED")
                .setDescription(`❌ You don't have that much money`);

            if (member < args[0]) {
                return message.channel.send(embed4)
            }

            let embed5 = new MessageEmbed()
                .setColor("GREEN")
                .setDescription(`✅ You have deposited ${args[0]} coins into your bank`);

            message.channel.send(embed5)
            const amount1 = args[0]
            const profilemodel2 = await profileModel.findOneAndUpdate(
                {
                  userID: message.author.id,
                },
                {
                  $inc: {
                    coins: -amount1,
                    bank: amount1,
                  },
                }
              );
        }
    }
}