const { Client, MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const ProfileModel = require('../models/profileSchema');

module.exports = {
    name: "level",
    description: "Check the user balance",
    async execute(message, args, cmd, client, discord, profileData) {
        if(profileData.level === undefined)
        return message.channel.send('Still creating your database... Pls try again in a few minutes')
            const botp1Embed = new MessageEmbed()
                .setColor('RANDOM')
                .addFields(
                    { name: `Level`, value: `${message.author} is level ${profileData.level}` },
                )
            message.channel.send(botp1Embed);
       
    }
}
  