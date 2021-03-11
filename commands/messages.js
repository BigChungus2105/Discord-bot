const { Client, MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const ProfileModel = require('../models/profileSchema');

module.exports = {
    name: "messages",
    description: "Check the user balance",
    async execute(message, args, cmd, client, discord, profileData) {
        const target = message.author
        if(profileData.messages === undefined || profileData.messages === 0)
        return message.channel.send(`Still creating your database...`)
            const botp1Embed = new MessageEmbed()
                .setColor('RANDOM')
                .addFields(
                    { name: `Messages`, value: `${target} has sent ${profileData.messages} messages` },
                )
            message.channel.send(botp1Embed);
       
    }
}
  