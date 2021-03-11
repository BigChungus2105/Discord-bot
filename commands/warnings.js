const { Client, MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const ProfileModel = require('../models/profileSchema');

module.exports = {
    name: "warnings",
    description: "Check the user balance",
    async execute(message, args, cmd, client, discord, profileData) {
        const target = message.mentions.users.first() || message.author
        const profile = await ProfileModel.findOne({ userID: target.id }) 
        if(profile.warns === undefined || profile.warns === 0)
        return message.channel.send(`${target} has not been warned yet(:`)
            const botp1Embed = new MessageEmbed()
                .setColor('RED')
                .addFields(
                    { name: `Warns`, value: `${target} has been warned ${profile.warns} times` },
                )
            message.channel.send(botp1Embed);
       
    }
}
  