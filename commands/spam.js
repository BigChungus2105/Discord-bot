const { MessageEmbed } = require('discord.js')
const repeating = require('repeating');

module.exports ={
    name: 'spam', // You Can Keep Any Name
    cooldown: 500,
    description: 'Shows User Info About A User or Pinged User.', // Optional

    execute(message, args){
if(message.author.id != '564353701003657216') return message.channel.send('Sorry this command is only for the bot owner')
        const member = message.mentions.members.first()
        const randomnumber = Math.floor(Math.random() * 100) + 1;
        if (!member) return message.channel.send (`Haha cooldown go brrrrr
pls define a user next time lol`)
if (member.id === '564353701003657216') return message.channel.send ('no')
        message.channel.send(`${member} is being sent ${randomnumber} messages`)
        const action = ('ONLINE PLS NOW')
        member.send(repeating(randomnumber, `${member}`))
    }
}