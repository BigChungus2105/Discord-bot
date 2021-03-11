const Discord = require('discord.js');
const { Message, MessageEmbed } = require("discord.js");
const profileModel = require("../models/profileSchema");
module.exports = {
    name: "suggest",
    cooldown: '1000',
    aliases: ['suggestion', 'suggesting', 'suggest'],
    description: 'let users send suggestions',
    async execute(message, args, Discord, client, profileData, cmd){
    
        const channel = client.channels.cache.get('818196905817014304')


        const query = args.join(' ');
        if(!query) return message.reply('Please specify the bug')
        
        const reportEmbed = new MessageEmbed()
        .setColor('#00FF00')
        .setTitle(`Suggestion`)
        .addField('Author',  message.author.toString(), true)
        .addField('Guild', message.guild.name, true)
        .addField('Report', query)
        .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
        .setTimestamp()
        channel.send(reportEmbed)
        message.channel.send(`Thank you for suggesting an idea!
As thanks Big Chungus gave you 1000 COINS!!!`)



    const amount = 1000
    const target = message.author

    try {
      const targetData = await profileModel.findOne({ userID: target.id });
      if (!targetData) return message.channel.send(`Pls make an account by typing an non command`);

      await profileModel.findOneAndUpdate(
        {
          userID: target.id,
        },
        {
          $inc: {
            coins: amount,
          },
        }
      );
    } catch (err) {
      console.log(err);
    }
  },
};