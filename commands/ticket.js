const Discord = require('discord.js');
const { MessageEmbedx } = require("discord.js");
const { execute } = require('./beg');

module.exports = {
    name: 'ticket',
    cooldown: 300,
    description: "This creates a ticket",
    async execute(message, args, args1, client){

    const channel = await message.guild.channels.create(`ticket-${message.author.username}`)

    channel.updateOverwrite(message.guild.id, {SEND_MESSAGES: false, 'VIEW_CHANNEL': false});
    channel.updateOverwrite(message.author, {SEND_MESSAGES: true, 'VIEW_CHANNEL': true, READ_MESSAGE_HISTORY: true});

   
            const newEmbed = new Discord.MessageEmbed()
                        .setColor('#00d8ff')
                        .setTimestamp()
                        .addFields(
                            { name: 'You have created a ticket:', value: `${channel}` },
                            { name: `We will try to reach you ASAP`, value: `Our support team is on there way to help you`}




                        )


                    message.author.send(newEmbed);
        




    channel.send(new Discord.MessageEmbed()
        .setColor('#00d8ff')
        .setAuthor('Welcome to support!')
        .setDescription(`Dear, <@${message.author.id}>\nThank you for contacting our support team! We will reach to you ASAP!`)
    )

    message.channel.send(new Discord.MessageEmbed()
        .setColor('#00d8ff')
        .setFooter(`${message.channel.guild}`, message.author.displayAvatarURL({dynamic: true}))
        .setTimestamp()
        .setAuthor('We will reach to you ASAP!')
        .setDescription(`<#${channel.id}>`)
    )


    
    
    }

    }


    