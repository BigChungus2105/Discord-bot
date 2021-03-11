const { Client, RichEmbed } = require('discord.js');
const Discord = require('discord.js');
const bot = new Client();

module.exports = {
    name: 'rickroll',
    cooldown: 120,
    description: "This rick rolls a member",
    execute(message, args) {
          const PermsEmbed = new Discord.MessageEmbed()
            .setColor('#ff0009')
            .addFields(
                { name: 'Failed to rickroll', value: `:x: You need the **"administrator"** permissions to use this command!` },


            )
            
        if (!message.member.hasPermission(["ADMINISTRATOR"])) return (message.channel.send(PermsEmbed))

            const userEmbed = new Discord.MessageEmbed()
            .setColor('#ff0009')
            .addFields(
                { name: 'Failed to Rick Roll', value: `:x: Please define a user to rickroll` },


            )
            const OwnerEmbed = new Discord.MessageEmbed()
            .setColor('#ff0009')
            .addFields(
                { name: 'Failed to Rick Roll', value: `:x: **HOW DARE YOU TRY TO RICK ROLL MY CREATORS**` },


            ) 
            const VipEmbed = new Discord.MessageEmbed()
            .setColor('#ff0009')
            .addFields(
                { name: 'Failed to rickroll', value: `:x: **HOW DARE YOU TRY TO RICK ROLL A VIP**` },

            )

            if (!args[0]) {
                message.channel.send(`Get Rick Rolled!
Never gonna give you up!
Never gonna let you down!
Never gonna run around and desert you!
Never gonna make you cry!
Never gonna say goodbye!`)
            }
            const target = message.mentions.users.first();
            if (target) {
                const memberTarget = message.guild.members.cache.get(target.id);

                if (memberTarget.user.id === "564353701003657216") return message.channel.send(OwnerEmbed)
                if (memberTarget.user.id === "700618322802114620") return message.channel.send(VipEmbed)
                if (memberTarget.user.id === "531618779369832468") return message.channel.send(VipEmbed)
                if (memberTarget.user.id === "624125774047215638") return message.channel.send(VipEmbed)
                
                

                if (!args[1]) {
                    message.channel.send(`<@${memberTarget.id}> Check your dm's`)
                    memberTarget.send(`Get Rick Rolled!
Never gonna give you up!
Never gonna let you down!
Never gonna run around and desert you!
Never gonna make you cry!
Never gonna say goodbye!`)}


                }





            }
        }