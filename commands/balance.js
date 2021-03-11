const { Client, MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const ProfileModel = require('../models/profileSchema');

module.exports = {
    name: "balance",
    cooldown: 5,
    aliases: ['bal', 'ballance', 'ball'],
    description: "Check the user balance",
    async execute(message, args, cmd, client, discord, profileData) {
        const target = message.mentions.users.first() || message.author
        const profile = await ProfileModel.findOne({ userID: target.id }) 
            const botp1Embed = new MessageEmbed()
                .setColor('GREEN')
                .addFields(
                    { name: `Balance:`, value: `:moneybag:${target} wallet value is: **${profile.coins} coins**
:bank:${target} bank value is: **${profile.bank} coins**` },
                )
            message.channel.send(botp1Embed);
       
    }
}
  
  